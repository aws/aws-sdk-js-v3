const url = require("url");
const http = require("http");
const { S3 } = require("../../../clients/client-s3");
const { Before, Then } = require("cucumber");

Before({ tags: "@s3 or @proxy" }, function (scenario, callback) {
  setupProxyServer.call(this);

  this.service = this.s3 = new S3({
    httpOptions: {
      proxy: "http://localhost:" + this.proxyPort,
    },
  });

  callback();
});

Then("I teardown the local proxy server", function (callback) {
  this.service = this.s3 = new S3();
  this.proxyServer.close(callback);
});

function setupProxyServer() {
  if (this.proxyServer) return;
  this.proxyPort = 8000 + parseInt(Math.random() * 100);
  this.proxyServer = http.createServer(function (req, res) {
    const uri = url.parse(req.url);
    const options = {
      host: uri.hostname,
      port: uri.port || 80,
      method: req.method,
      path: uri.path,
      headers: req.headers,
    };
    options.headers.host = uri.hostname;

    const s = http.request(options, function (res2) {
      res.writeHead(res2.statusCode, res2.headers);
      res2
        .on("data", function (ch) {
          res.write(ch);
        })
        .on("end", function () {
          res.end();
        });
    });
    req.pipe(s);
  });
  this.proxyServer.listen(this.proxyPort);
}
