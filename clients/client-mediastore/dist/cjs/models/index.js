"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var Container;
(function (Container) {
    function isa(o) {
        return smithy_client_1.isa(o, "Container");
    }
    Container.isa = isa;
})(Container = exports.Container || (exports.Container = {}));
var ContainerInUseException;
(function (ContainerInUseException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContainerInUseException");
    }
    ContainerInUseException.isa = isa;
})(ContainerInUseException = exports.ContainerInUseException || (exports.ContainerInUseException = {}));
var ContainerNotFoundException;
(function (ContainerNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContainerNotFoundException");
    }
    ContainerNotFoundException.isa = isa;
})(ContainerNotFoundException = exports.ContainerNotFoundException || (exports.ContainerNotFoundException = {}));
var ContainerStatus;
(function (ContainerStatus) {
    ContainerStatus["ACTIVE"] = "ACTIVE";
    ContainerStatus["CREATING"] = "CREATING";
    ContainerStatus["DELETING"] = "DELETING";
})(ContainerStatus = exports.ContainerStatus || (exports.ContainerStatus = {}));
var CorsPolicyNotFoundException;
(function (CorsPolicyNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CorsPolicyNotFoundException");
    }
    CorsPolicyNotFoundException.isa = isa;
})(CorsPolicyNotFoundException = exports.CorsPolicyNotFoundException || (exports.CorsPolicyNotFoundException = {}));
var CorsRule;
(function (CorsRule) {
    function isa(o) {
        return smithy_client_1.isa(o, "CorsRule");
    }
    CorsRule.isa = isa;
})(CorsRule = exports.CorsRule || (exports.CorsRule = {}));
var CreateContainerInput;
(function (CreateContainerInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateContainerInput");
    }
    CreateContainerInput.isa = isa;
})(CreateContainerInput = exports.CreateContainerInput || (exports.CreateContainerInput = {}));
var CreateContainerOutput;
(function (CreateContainerOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateContainerOutput");
    }
    CreateContainerOutput.isa = isa;
})(CreateContainerOutput = exports.CreateContainerOutput || (exports.CreateContainerOutput = {}));
var DeleteContainerInput;
(function (DeleteContainerInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteContainerInput");
    }
    DeleteContainerInput.isa = isa;
})(DeleteContainerInput = exports.DeleteContainerInput || (exports.DeleteContainerInput = {}));
var DeleteContainerOutput;
(function (DeleteContainerOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteContainerOutput");
    }
    DeleteContainerOutput.isa = isa;
})(DeleteContainerOutput = exports.DeleteContainerOutput || (exports.DeleteContainerOutput = {}));
var DeleteContainerPolicyInput;
(function (DeleteContainerPolicyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteContainerPolicyInput");
    }
    DeleteContainerPolicyInput.isa = isa;
})(DeleteContainerPolicyInput = exports.DeleteContainerPolicyInput || (exports.DeleteContainerPolicyInput = {}));
var DeleteContainerPolicyOutput;
(function (DeleteContainerPolicyOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteContainerPolicyOutput");
    }
    DeleteContainerPolicyOutput.isa = isa;
})(DeleteContainerPolicyOutput = exports.DeleteContainerPolicyOutput || (exports.DeleteContainerPolicyOutput = {}));
var DeleteCorsPolicyInput;
(function (DeleteCorsPolicyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteCorsPolicyInput");
    }
    DeleteCorsPolicyInput.isa = isa;
})(DeleteCorsPolicyInput = exports.DeleteCorsPolicyInput || (exports.DeleteCorsPolicyInput = {}));
var DeleteCorsPolicyOutput;
(function (DeleteCorsPolicyOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteCorsPolicyOutput");
    }
    DeleteCorsPolicyOutput.isa = isa;
})(DeleteCorsPolicyOutput = exports.DeleteCorsPolicyOutput || (exports.DeleteCorsPolicyOutput = {}));
var DeleteLifecyclePolicyInput;
(function (DeleteLifecyclePolicyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLifecyclePolicyInput");
    }
    DeleteLifecyclePolicyInput.isa = isa;
})(DeleteLifecyclePolicyInput = exports.DeleteLifecyclePolicyInput || (exports.DeleteLifecyclePolicyInput = {}));
var DeleteLifecyclePolicyOutput;
(function (DeleteLifecyclePolicyOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLifecyclePolicyOutput");
    }
    DeleteLifecyclePolicyOutput.isa = isa;
})(DeleteLifecyclePolicyOutput = exports.DeleteLifecyclePolicyOutput || (exports.DeleteLifecyclePolicyOutput = {}));
var DescribeContainerInput;
(function (DescribeContainerInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeContainerInput");
    }
    DescribeContainerInput.isa = isa;
})(DescribeContainerInput = exports.DescribeContainerInput || (exports.DescribeContainerInput = {}));
var DescribeContainerOutput;
(function (DescribeContainerOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeContainerOutput");
    }
    DescribeContainerOutput.isa = isa;
})(DescribeContainerOutput = exports.DescribeContainerOutput || (exports.DescribeContainerOutput = {}));
var GetContainerPolicyInput;
(function (GetContainerPolicyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetContainerPolicyInput");
    }
    GetContainerPolicyInput.isa = isa;
})(GetContainerPolicyInput = exports.GetContainerPolicyInput || (exports.GetContainerPolicyInput = {}));
var GetContainerPolicyOutput;
(function (GetContainerPolicyOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetContainerPolicyOutput");
    }
    GetContainerPolicyOutput.isa = isa;
})(GetContainerPolicyOutput = exports.GetContainerPolicyOutput || (exports.GetContainerPolicyOutput = {}));
var GetCorsPolicyInput;
(function (GetCorsPolicyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCorsPolicyInput");
    }
    GetCorsPolicyInput.isa = isa;
})(GetCorsPolicyInput = exports.GetCorsPolicyInput || (exports.GetCorsPolicyInput = {}));
var GetCorsPolicyOutput;
(function (GetCorsPolicyOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCorsPolicyOutput");
    }
    GetCorsPolicyOutput.isa = isa;
})(GetCorsPolicyOutput = exports.GetCorsPolicyOutput || (exports.GetCorsPolicyOutput = {}));
var GetLifecyclePolicyInput;
(function (GetLifecyclePolicyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLifecyclePolicyInput");
    }
    GetLifecyclePolicyInput.isa = isa;
})(GetLifecyclePolicyInput = exports.GetLifecyclePolicyInput || (exports.GetLifecyclePolicyInput = {}));
var GetLifecyclePolicyOutput;
(function (GetLifecyclePolicyOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLifecyclePolicyOutput");
    }
    GetLifecyclePolicyOutput.isa = isa;
})(GetLifecyclePolicyOutput = exports.GetLifecyclePolicyOutput || (exports.GetLifecyclePolicyOutput = {}));
var InternalServerError;
(function (InternalServerError) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerError");
    }
    InternalServerError.isa = isa;
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListContainersInput;
(function (ListContainersInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListContainersInput");
    }
    ListContainersInput.isa = isa;
})(ListContainersInput = exports.ListContainersInput || (exports.ListContainersInput = {}));
var ListContainersOutput;
(function (ListContainersOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListContainersOutput");
    }
    ListContainersOutput.isa = isa;
})(ListContainersOutput = exports.ListContainersOutput || (exports.ListContainersOutput = {}));
var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceInput");
    }
    ListTagsForResourceInput.isa = isa;
})(ListTagsForResourceInput = exports.ListTagsForResourceInput || (exports.ListTagsForResourceInput = {}));
var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceOutput");
    }
    ListTagsForResourceOutput.isa = isa;
})(ListTagsForResourceOutput = exports.ListTagsForResourceOutput || (exports.ListTagsForResourceOutput = {}));
var MethodName;
(function (MethodName) {
    MethodName["DELETE"] = "DELETE";
    MethodName["GET"] = "GET";
    MethodName["HEAD"] = "HEAD";
    MethodName["PUT"] = "PUT";
})(MethodName = exports.MethodName || (exports.MethodName = {}));
var PolicyNotFoundException;
(function (PolicyNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyNotFoundException");
    }
    PolicyNotFoundException.isa = isa;
})(PolicyNotFoundException = exports.PolicyNotFoundException || (exports.PolicyNotFoundException = {}));
var PutContainerPolicyInput;
(function (PutContainerPolicyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutContainerPolicyInput");
    }
    PutContainerPolicyInput.isa = isa;
})(PutContainerPolicyInput = exports.PutContainerPolicyInput || (exports.PutContainerPolicyInput = {}));
var PutContainerPolicyOutput;
(function (PutContainerPolicyOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutContainerPolicyOutput");
    }
    PutContainerPolicyOutput.isa = isa;
})(PutContainerPolicyOutput = exports.PutContainerPolicyOutput || (exports.PutContainerPolicyOutput = {}));
var PutCorsPolicyInput;
(function (PutCorsPolicyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutCorsPolicyInput");
    }
    PutCorsPolicyInput.isa = isa;
})(PutCorsPolicyInput = exports.PutCorsPolicyInput || (exports.PutCorsPolicyInput = {}));
var PutCorsPolicyOutput;
(function (PutCorsPolicyOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutCorsPolicyOutput");
    }
    PutCorsPolicyOutput.isa = isa;
})(PutCorsPolicyOutput = exports.PutCorsPolicyOutput || (exports.PutCorsPolicyOutput = {}));
var PutLifecyclePolicyInput;
(function (PutLifecyclePolicyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutLifecyclePolicyInput");
    }
    PutLifecyclePolicyInput.isa = isa;
})(PutLifecyclePolicyInput = exports.PutLifecyclePolicyInput || (exports.PutLifecyclePolicyInput = {}));
var PutLifecyclePolicyOutput;
(function (PutLifecyclePolicyOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutLifecyclePolicyOutput");
    }
    PutLifecyclePolicyOutput.isa = isa;
})(PutLifecyclePolicyOutput = exports.PutLifecyclePolicyOutput || (exports.PutLifecyclePolicyOutput = {}));
var StartAccessLoggingInput;
(function (StartAccessLoggingInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartAccessLoggingInput");
    }
    StartAccessLoggingInput.isa = isa;
})(StartAccessLoggingInput = exports.StartAccessLoggingInput || (exports.StartAccessLoggingInput = {}));
var StartAccessLoggingOutput;
(function (StartAccessLoggingOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartAccessLoggingOutput");
    }
    StartAccessLoggingOutput.isa = isa;
})(StartAccessLoggingOutput = exports.StartAccessLoggingOutput || (exports.StartAccessLoggingOutput = {}));
var StopAccessLoggingInput;
(function (StopAccessLoggingInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopAccessLoggingInput");
    }
    StopAccessLoggingInput.isa = isa;
})(StopAccessLoggingInput = exports.StopAccessLoggingInput || (exports.StopAccessLoggingInput = {}));
var StopAccessLoggingOutput;
(function (StopAccessLoggingOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopAccessLoggingOutput");
    }
    StopAccessLoggingOutput.isa = isa;
})(StopAccessLoggingOutput = exports.StopAccessLoggingOutput || (exports.StopAccessLoggingOutput = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagResourceInput;
(function (TagResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceInput");
    }
    TagResourceInput.isa = isa;
})(TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {}));
var TagResourceOutput;
(function (TagResourceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceOutput");
    }
    TagResourceOutput.isa = isa;
})(TagResourceOutput = exports.TagResourceOutput || (exports.TagResourceOutput = {}));
var UntagResourceInput;
(function (UntagResourceInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceInput");
    }
    UntagResourceInput.isa = isa;
})(UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {}));
var UntagResourceOutput;
(function (UntagResourceOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceOutput");
    }
    UntagResourceOutput.isa = isa;
})(UntagResourceOutput = exports.UntagResourceOutput || (exports.UntagResourceOutput = {}));
//# sourceMappingURL=index.js.map