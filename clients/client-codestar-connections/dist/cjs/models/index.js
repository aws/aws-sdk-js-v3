"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var Connection;
(function (Connection) {
    function isa(o) {
        return smithy_client_1.isa(o, "Connection");
    }
    Connection.isa = isa;
})(Connection = exports.Connection || (exports.Connection = {}));
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["AVAILABLE"] = "AVAILABLE";
    ConnectionStatus["ERROR"] = "ERROR";
    ConnectionStatus["PENDING"] = "PENDING";
})(ConnectionStatus = exports.ConnectionStatus || (exports.ConnectionStatus = {}));
var CreateConnectionInput;
(function (CreateConnectionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConnectionInput");
    }
    CreateConnectionInput.isa = isa;
})(CreateConnectionInput = exports.CreateConnectionInput || (exports.CreateConnectionInput = {}));
var CreateConnectionOutput;
(function (CreateConnectionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConnectionOutput");
    }
    CreateConnectionOutput.isa = isa;
})(CreateConnectionOutput = exports.CreateConnectionOutput || (exports.CreateConnectionOutput = {}));
var DeleteConnectionInput;
(function (DeleteConnectionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConnectionInput");
    }
    DeleteConnectionInput.isa = isa;
})(DeleteConnectionInput = exports.DeleteConnectionInput || (exports.DeleteConnectionInput = {}));
var DeleteConnectionOutput;
(function (DeleteConnectionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConnectionOutput");
    }
    DeleteConnectionOutput.isa = isa;
})(DeleteConnectionOutput = exports.DeleteConnectionOutput || (exports.DeleteConnectionOutput = {}));
var GetConnectionInput;
(function (GetConnectionInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConnectionInput");
    }
    GetConnectionInput.isa = isa;
})(GetConnectionInput = exports.GetConnectionInput || (exports.GetConnectionInput = {}));
var GetConnectionOutput;
(function (GetConnectionOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConnectionOutput");
    }
    GetConnectionOutput.isa = isa;
})(GetConnectionOutput = exports.GetConnectionOutput || (exports.GetConnectionOutput = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListConnectionsInput;
(function (ListConnectionsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListConnectionsInput");
    }
    ListConnectionsInput.isa = isa;
})(ListConnectionsInput = exports.ListConnectionsInput || (exports.ListConnectionsInput = {}));
var ListConnectionsOutput;
(function (ListConnectionsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListConnectionsOutput");
    }
    ListConnectionsOutput.isa = isa;
})(ListConnectionsOutput = exports.ListConnectionsOutput || (exports.ListConnectionsOutput = {}));
var ProviderType;
(function (ProviderType) {
    ProviderType["BITBUCKET"] = "Bitbucket";
})(ProviderType = exports.ProviderType || (exports.ProviderType = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
//# sourceMappingURL=index.js.map