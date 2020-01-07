var STORE_NAME = "IdentityIds";
var IndexedDbStorage = /** @class */ (function () {
    function IndexedDbStorage(dbName) {
        if (dbName === void 0) { dbName = "aws:cognito-identity-ids"; }
        this.dbName = dbName;
    }
    IndexedDbStorage.prototype.getItem = function (key) {
        return this.withObjectStore("readonly", function (store) {
            var req = store.get(key);
            return new Promise(function (resolve) {
                req.onerror = function () { return resolve(null); };
                req.onsuccess = function () { return resolve(req.result ? req.result.value : null); };
            });
        }).catch(function () { return null; });
    };
    IndexedDbStorage.prototype.removeItem = function (key) {
        return this.withObjectStore("readwrite", function (store) {
            var req = store.delete(key);
            return new Promise(function (resolve, reject) {
                req.onerror = function () { return reject(req.error); };
                req.onsuccess = function () { return resolve(); };
            });
        });
    };
    IndexedDbStorage.prototype.setItem = function (id, value) {
        return this.withObjectStore("readwrite", function (store) {
            var req = store.put({ id: id, value: value });
            return new Promise(function (resolve, reject) {
                req.onerror = function () { return reject(req.error); };
                req.onsuccess = function () { return resolve(); };
            });
        });
    };
    IndexedDbStorage.prototype.getDb = function () {
        var openDbRequest = self.indexedDB.open(this.dbName, 1);
        return new Promise(function (resolve, reject) {
            openDbRequest.onsuccess = function () {
                resolve(openDbRequest.result);
            };
            openDbRequest.onerror = function () {
                reject(openDbRequest.error);
            };
            openDbRequest.onblocked = function () {
                reject(new Error("Unable to access DB"));
            };
            openDbRequest.onupgradeneeded = function (event) {
                var db = openDbRequest.result;
                db.onerror = function () {
                    reject(new Error("Failed to create object store"));
                };
                db.createObjectStore(STORE_NAME, { keyPath: "id" });
            };
        });
    };
    IndexedDbStorage.prototype.withObjectStore = function (mode, action) {
        return this.getDb().then(function (db) {
            var tx = db.transaction(STORE_NAME, mode);
            tx.oncomplete = function () { return db.close(); };
            return new Promise(function (resolve, reject) {
                tx.onerror = function () { return reject(tx.error); };
                resolve(action(tx.objectStore(STORE_NAME)));
            }).catch(function (err) {
                db.close();
                throw err;
            });
        });
    };
    return IndexedDbStorage;
}());
export { IndexedDbStorage };
//# sourceMappingURL=IndexedDbStorage.js.map