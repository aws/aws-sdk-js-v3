"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var BadRequestException;
(function (BadRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BadRequestException");
    }
    BadRequestException.isa = isa;
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var ConflictException;
(function (ConflictException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConflictException");
    }
    ConflictException.isa = isa;
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var CreateEnvironmentEC2Request;
(function (CreateEnvironmentEC2Request) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateEnvironmentEC2Request");
    }
    CreateEnvironmentEC2Request.isa = isa;
})(CreateEnvironmentEC2Request = exports.CreateEnvironmentEC2Request || (exports.CreateEnvironmentEC2Request = {}));
var CreateEnvironmentEC2Result;
(function (CreateEnvironmentEC2Result) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateEnvironmentEC2Result");
    }
    CreateEnvironmentEC2Result.isa = isa;
})(CreateEnvironmentEC2Result = exports.CreateEnvironmentEC2Result || (exports.CreateEnvironmentEC2Result = {}));
var CreateEnvironmentMembershipRequest;
(function (CreateEnvironmentMembershipRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateEnvironmentMembershipRequest");
    }
    CreateEnvironmentMembershipRequest.isa = isa;
})(CreateEnvironmentMembershipRequest = exports.CreateEnvironmentMembershipRequest || (exports.CreateEnvironmentMembershipRequest = {}));
var CreateEnvironmentMembershipResult;
(function (CreateEnvironmentMembershipResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateEnvironmentMembershipResult");
    }
    CreateEnvironmentMembershipResult.isa = isa;
})(CreateEnvironmentMembershipResult = exports.CreateEnvironmentMembershipResult || (exports.CreateEnvironmentMembershipResult = {}));
var DeleteEnvironmentMembershipRequest;
(function (DeleteEnvironmentMembershipRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteEnvironmentMembershipRequest");
    }
    DeleteEnvironmentMembershipRequest.isa = isa;
})(DeleteEnvironmentMembershipRequest = exports.DeleteEnvironmentMembershipRequest || (exports.DeleteEnvironmentMembershipRequest = {}));
var DeleteEnvironmentMembershipResult;
(function (DeleteEnvironmentMembershipResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteEnvironmentMembershipResult");
    }
    DeleteEnvironmentMembershipResult.isa = isa;
})(DeleteEnvironmentMembershipResult = exports.DeleteEnvironmentMembershipResult || (exports.DeleteEnvironmentMembershipResult = {}));
var DeleteEnvironmentRequest;
(function (DeleteEnvironmentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteEnvironmentRequest");
    }
    DeleteEnvironmentRequest.isa = isa;
})(DeleteEnvironmentRequest = exports.DeleteEnvironmentRequest || (exports.DeleteEnvironmentRequest = {}));
var DeleteEnvironmentResult;
(function (DeleteEnvironmentResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteEnvironmentResult");
    }
    DeleteEnvironmentResult.isa = isa;
})(DeleteEnvironmentResult = exports.DeleteEnvironmentResult || (exports.DeleteEnvironmentResult = {}));
var DescribeEnvironmentMembershipsRequest;
(function (DescribeEnvironmentMembershipsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEnvironmentMembershipsRequest");
    }
    DescribeEnvironmentMembershipsRequest.isa = isa;
})(DescribeEnvironmentMembershipsRequest = exports.DescribeEnvironmentMembershipsRequest || (exports.DescribeEnvironmentMembershipsRequest = {}));
var DescribeEnvironmentMembershipsResult;
(function (DescribeEnvironmentMembershipsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEnvironmentMembershipsResult");
    }
    DescribeEnvironmentMembershipsResult.isa = isa;
})(DescribeEnvironmentMembershipsResult = exports.DescribeEnvironmentMembershipsResult || (exports.DescribeEnvironmentMembershipsResult = {}));
var DescribeEnvironmentStatusRequest;
(function (DescribeEnvironmentStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEnvironmentStatusRequest");
    }
    DescribeEnvironmentStatusRequest.isa = isa;
})(DescribeEnvironmentStatusRequest = exports.DescribeEnvironmentStatusRequest || (exports.DescribeEnvironmentStatusRequest = {}));
var DescribeEnvironmentStatusResult;
(function (DescribeEnvironmentStatusResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEnvironmentStatusResult");
    }
    DescribeEnvironmentStatusResult.isa = isa;
})(DescribeEnvironmentStatusResult = exports.DescribeEnvironmentStatusResult || (exports.DescribeEnvironmentStatusResult = {}));
var DescribeEnvironmentsRequest;
(function (DescribeEnvironmentsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEnvironmentsRequest");
    }
    DescribeEnvironmentsRequest.isa = isa;
})(DescribeEnvironmentsRequest = exports.DescribeEnvironmentsRequest || (exports.DescribeEnvironmentsRequest = {}));
var DescribeEnvironmentsResult;
(function (DescribeEnvironmentsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEnvironmentsResult");
    }
    DescribeEnvironmentsResult.isa = isa;
})(DescribeEnvironmentsResult = exports.DescribeEnvironmentsResult || (exports.DescribeEnvironmentsResult = {}));
var Environment;
(function (Environment) {
    function isa(o) {
        return smithy_client_1.isa(o, "Environment");
    }
    Environment.isa = isa;
})(Environment = exports.Environment || (exports.Environment = {}));
var EnvironmentLifecycle;
(function (EnvironmentLifecycle) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnvironmentLifecycle");
    }
    EnvironmentLifecycle.isa = isa;
})(EnvironmentLifecycle = exports.EnvironmentLifecycle || (exports.EnvironmentLifecycle = {}));
var EnvironmentLifecycleStatus;
(function (EnvironmentLifecycleStatus) {
    EnvironmentLifecycleStatus["CREATED"] = "CREATED";
    EnvironmentLifecycleStatus["CREATE_FAILED"] = "CREATE_FAILED";
    EnvironmentLifecycleStatus["CREATING"] = "CREATING";
    EnvironmentLifecycleStatus["DELETE_FAILED"] = "DELETE_FAILED";
    EnvironmentLifecycleStatus["DELETING"] = "DELETING";
})(EnvironmentLifecycleStatus = exports.EnvironmentLifecycleStatus || (exports.EnvironmentLifecycleStatus = {}));
var EnvironmentMember;
(function (EnvironmentMember) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnvironmentMember");
    }
    EnvironmentMember.isa = isa;
})(EnvironmentMember = exports.EnvironmentMember || (exports.EnvironmentMember = {}));
var EnvironmentStatus;
(function (EnvironmentStatus) {
    EnvironmentStatus["CONNECTING"] = "connecting";
    EnvironmentStatus["CREATING"] = "creating";
    EnvironmentStatus["DELETING"] = "deleting";
    EnvironmentStatus["ERROR"] = "error";
    EnvironmentStatus["READY"] = "ready";
    EnvironmentStatus["STOPPED"] = "stopped";
    EnvironmentStatus["STOPPING"] = "stopping";
})(EnvironmentStatus = exports.EnvironmentStatus || (exports.EnvironmentStatus = {}));
var EnvironmentType;
(function (EnvironmentType) {
    EnvironmentType["EC2"] = "ec2";
    EnvironmentType["SSH"] = "ssh";
})(EnvironmentType = exports.EnvironmentType || (exports.EnvironmentType = {}));
var ForbiddenException;
(function (ForbiddenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ForbiddenException");
    }
    ForbiddenException.isa = isa;
})(ForbiddenException = exports.ForbiddenException || (exports.ForbiddenException = {}));
var InternalServerErrorException;
(function (InternalServerErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerErrorException");
    }
    InternalServerErrorException.isa = isa;
})(InternalServerErrorException = exports.InternalServerErrorException || (exports.InternalServerErrorException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListEnvironmentsRequest;
(function (ListEnvironmentsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListEnvironmentsRequest");
    }
    ListEnvironmentsRequest.isa = isa;
})(ListEnvironmentsRequest = exports.ListEnvironmentsRequest || (exports.ListEnvironmentsRequest = {}));
var ListEnvironmentsResult;
(function (ListEnvironmentsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListEnvironmentsResult");
    }
    ListEnvironmentsResult.isa = isa;
})(ListEnvironmentsResult = exports.ListEnvironmentsResult || (exports.ListEnvironmentsResult = {}));
var MemberPermissions;
(function (MemberPermissions) {
    MemberPermissions["READ_ONLY"] = "read-only";
    MemberPermissions["READ_WRITE"] = "read-write";
})(MemberPermissions = exports.MemberPermissions || (exports.MemberPermissions = {}));
var NotFoundException;
(function (NotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotFoundException");
    }
    NotFoundException.isa = isa;
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var Permissions;
(function (Permissions) {
    Permissions["OWNER"] = "owner";
    Permissions["READ_ONLY"] = "read-only";
    Permissions["READ_WRITE"] = "read-write";
})(Permissions = exports.Permissions || (exports.Permissions = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyRequestsException");
    }
    TooManyRequestsException.isa = isa;
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var UpdateEnvironmentMembershipRequest;
(function (UpdateEnvironmentMembershipRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateEnvironmentMembershipRequest");
    }
    UpdateEnvironmentMembershipRequest.isa = isa;
})(UpdateEnvironmentMembershipRequest = exports.UpdateEnvironmentMembershipRequest || (exports.UpdateEnvironmentMembershipRequest = {}));
var UpdateEnvironmentMembershipResult;
(function (UpdateEnvironmentMembershipResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateEnvironmentMembershipResult");
    }
    UpdateEnvironmentMembershipResult.isa = isa;
})(UpdateEnvironmentMembershipResult = exports.UpdateEnvironmentMembershipResult || (exports.UpdateEnvironmentMembershipResult = {}));
var UpdateEnvironmentRequest;
(function (UpdateEnvironmentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateEnvironmentRequest");
    }
    UpdateEnvironmentRequest.isa = isa;
})(UpdateEnvironmentRequest = exports.UpdateEnvironmentRequest || (exports.UpdateEnvironmentRequest = {}));
var UpdateEnvironmentResult;
(function (UpdateEnvironmentResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateEnvironmentResult");
    }
    UpdateEnvironmentResult.isa = isa;
})(UpdateEnvironmentResult = exports.UpdateEnvironmentResult || (exports.UpdateEnvironmentResult = {}));
//# sourceMappingURL=index.js.map