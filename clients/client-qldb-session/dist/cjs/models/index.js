"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AbortTransactionRequest;
(function (AbortTransactionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AbortTransactionRequest");
    }
    AbortTransactionRequest.isa = isa;
})(AbortTransactionRequest = exports.AbortTransactionRequest || (exports.AbortTransactionRequest = {}));
var AbortTransactionResult;
(function (AbortTransactionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "AbortTransactionResult");
    }
    AbortTransactionResult.isa = isa;
})(AbortTransactionResult = exports.AbortTransactionResult || (exports.AbortTransactionResult = {}));
var BadRequestException;
(function (BadRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BadRequestException");
    }
    BadRequestException.isa = isa;
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var CommitTransactionRequest;
(function (CommitTransactionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommitTransactionRequest");
    }
    CommitTransactionRequest.isa = isa;
})(CommitTransactionRequest = exports.CommitTransactionRequest || (exports.CommitTransactionRequest = {}));
var CommitTransactionResult;
(function (CommitTransactionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CommitTransactionResult");
    }
    CommitTransactionResult.isa = isa;
})(CommitTransactionResult = exports.CommitTransactionResult || (exports.CommitTransactionResult = {}));
var EndSessionRequest;
(function (EndSessionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "EndSessionRequest");
    }
    EndSessionRequest.isa = isa;
})(EndSessionRequest = exports.EndSessionRequest || (exports.EndSessionRequest = {}));
var EndSessionResult;
(function (EndSessionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "EndSessionResult");
    }
    EndSessionResult.isa = isa;
})(EndSessionResult = exports.EndSessionResult || (exports.EndSessionResult = {}));
var ExecuteStatementRequest;
(function (ExecuteStatementRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExecuteStatementRequest");
    }
    ExecuteStatementRequest.isa = isa;
})(ExecuteStatementRequest = exports.ExecuteStatementRequest || (exports.ExecuteStatementRequest = {}));
var ExecuteStatementResult;
(function (ExecuteStatementResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExecuteStatementResult");
    }
    ExecuteStatementResult.isa = isa;
})(ExecuteStatementResult = exports.ExecuteStatementResult || (exports.ExecuteStatementResult = {}));
var FetchPageRequest;
(function (FetchPageRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "FetchPageRequest");
    }
    FetchPageRequest.isa = isa;
})(FetchPageRequest = exports.FetchPageRequest || (exports.FetchPageRequest = {}));
var FetchPageResult;
(function (FetchPageResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "FetchPageResult");
    }
    FetchPageResult.isa = isa;
})(FetchPageResult = exports.FetchPageResult || (exports.FetchPageResult = {}));
var InvalidSessionException;
(function (InvalidSessionException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidSessionException");
    }
    InvalidSessionException.isa = isa;
})(InvalidSessionException = exports.InvalidSessionException || (exports.InvalidSessionException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var OccConflictException;
(function (OccConflictException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OccConflictException");
    }
    OccConflictException.isa = isa;
})(OccConflictException = exports.OccConflictException || (exports.OccConflictException = {}));
var Page;
(function (Page) {
    function isa(o) {
        return smithy_client_1.isa(o, "Page");
    }
    Page.isa = isa;
})(Page = exports.Page || (exports.Page = {}));
var RateExceededException;
(function (RateExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "RateExceededException");
    }
    RateExceededException.isa = isa;
})(RateExceededException = exports.RateExceededException || (exports.RateExceededException = {}));
var SendCommandRequest;
(function (SendCommandRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendCommandRequest");
    }
    SendCommandRequest.isa = isa;
})(SendCommandRequest = exports.SendCommandRequest || (exports.SendCommandRequest = {}));
var SendCommandResult;
(function (SendCommandResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "SendCommandResult");
    }
    SendCommandResult.isa = isa;
})(SendCommandResult = exports.SendCommandResult || (exports.SendCommandResult = {}));
var StartSessionRequest;
(function (StartSessionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartSessionRequest");
    }
    StartSessionRequest.isa = isa;
})(StartSessionRequest = exports.StartSessionRequest || (exports.StartSessionRequest = {}));
var StartSessionResult;
(function (StartSessionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartSessionResult");
    }
    StartSessionResult.isa = isa;
})(StartSessionResult = exports.StartSessionResult || (exports.StartSessionResult = {}));
var StartTransactionRequest;
(function (StartTransactionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartTransactionRequest");
    }
    StartTransactionRequest.isa = isa;
})(StartTransactionRequest = exports.StartTransactionRequest || (exports.StartTransactionRequest = {}));
var StartTransactionResult;
(function (StartTransactionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartTransactionResult");
    }
    StartTransactionResult.isa = isa;
})(StartTransactionResult = exports.StartTransactionResult || (exports.StartTransactionResult = {}));
var ValueHolder;
(function (ValueHolder) {
    function isa(o) {
        return smithy_client_1.isa(o, "ValueHolder");
    }
    ValueHolder.isa = isa;
})(ValueHolder = exports.ValueHolder || (exports.ValueHolder = {}));
//# sourceMappingURL=index.js.map