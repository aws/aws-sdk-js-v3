"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AssociateRoleToGroupRequest;
(function (AssociateRoleToGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateRoleToGroupRequest");
    }
    AssociateRoleToGroupRequest.isa = isa;
})(AssociateRoleToGroupRequest = exports.AssociateRoleToGroupRequest || (exports.AssociateRoleToGroupRequest = {}));
var AssociateRoleToGroupResponse;
(function (AssociateRoleToGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateRoleToGroupResponse");
    }
    AssociateRoleToGroupResponse.isa = isa;
})(AssociateRoleToGroupResponse = exports.AssociateRoleToGroupResponse || (exports.AssociateRoleToGroupResponse = {}));
var AssociateServiceRoleToAccountRequest;
(function (AssociateServiceRoleToAccountRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateServiceRoleToAccountRequest");
    }
    AssociateServiceRoleToAccountRequest.isa = isa;
})(AssociateServiceRoleToAccountRequest = exports.AssociateServiceRoleToAccountRequest || (exports.AssociateServiceRoleToAccountRequest = {}));
var AssociateServiceRoleToAccountResponse;
(function (AssociateServiceRoleToAccountResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "AssociateServiceRoleToAccountResponse");
    }
    AssociateServiceRoleToAccountResponse.isa = isa;
})(AssociateServiceRoleToAccountResponse = exports.AssociateServiceRoleToAccountResponse || (exports.AssociateServiceRoleToAccountResponse = {}));
var BadRequestException;
(function (BadRequestException) {
    function isa(o) {
        return smithy_client_1.isa(o, "BadRequestException");
    }
    BadRequestException.isa = isa;
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var BulkDeployment;
(function (BulkDeployment) {
    function isa(o) {
        return smithy_client_1.isa(o, "BulkDeployment");
    }
    BulkDeployment.isa = isa;
})(BulkDeployment = exports.BulkDeployment || (exports.BulkDeployment = {}));
var BulkDeploymentMetrics;
(function (BulkDeploymentMetrics) {
    function isa(o) {
        return smithy_client_1.isa(o, "BulkDeploymentMetrics");
    }
    BulkDeploymentMetrics.isa = isa;
})(BulkDeploymentMetrics = exports.BulkDeploymentMetrics || (exports.BulkDeploymentMetrics = {}));
var BulkDeploymentResult;
(function (BulkDeploymentResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "BulkDeploymentResult");
    }
    BulkDeploymentResult.isa = isa;
})(BulkDeploymentResult = exports.BulkDeploymentResult || (exports.BulkDeploymentResult = {}));
var BulkDeploymentStatus;
(function (BulkDeploymentStatus) {
    BulkDeploymentStatus["Completed"] = "Completed";
    BulkDeploymentStatus["Failed"] = "Failed";
    BulkDeploymentStatus["Initializing"] = "Initializing";
    BulkDeploymentStatus["Running"] = "Running";
    BulkDeploymentStatus["Stopped"] = "Stopped";
    BulkDeploymentStatus["Stopping"] = "Stopping";
})(BulkDeploymentStatus = exports.BulkDeploymentStatus || (exports.BulkDeploymentStatus = {}));
var ConnectivityInfo;
(function (ConnectivityInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConnectivityInfo");
    }
    ConnectivityInfo.isa = isa;
})(ConnectivityInfo = exports.ConnectivityInfo || (exports.ConnectivityInfo = {}));
var Connector;
(function (Connector) {
    function isa(o) {
        return smithy_client_1.isa(o, "Connector");
    }
    Connector.isa = isa;
})(Connector = exports.Connector || (exports.Connector = {}));
var ConnectorDefinitionVersion;
(function (ConnectorDefinitionVersion) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConnectorDefinitionVersion");
    }
    ConnectorDefinitionVersion.isa = isa;
})(ConnectorDefinitionVersion = exports.ConnectorDefinitionVersion || (exports.ConnectorDefinitionVersion = {}));
var Core;
(function (Core) {
    function isa(o) {
        return smithy_client_1.isa(o, "Core");
    }
    Core.isa = isa;
})(Core = exports.Core || (exports.Core = {}));
var CoreDefinitionVersion;
(function (CoreDefinitionVersion) {
    function isa(o) {
        return smithy_client_1.isa(o, "CoreDefinitionVersion");
    }
    CoreDefinitionVersion.isa = isa;
})(CoreDefinitionVersion = exports.CoreDefinitionVersion || (exports.CoreDefinitionVersion = {}));
var CreateConnectorDefinitionRequest;
(function (CreateConnectorDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConnectorDefinitionRequest");
    }
    CreateConnectorDefinitionRequest.isa = isa;
})(CreateConnectorDefinitionRequest = exports.CreateConnectorDefinitionRequest || (exports.CreateConnectorDefinitionRequest = {}));
var CreateConnectorDefinitionResponse;
(function (CreateConnectorDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConnectorDefinitionResponse");
    }
    CreateConnectorDefinitionResponse.isa = isa;
})(CreateConnectorDefinitionResponse = exports.CreateConnectorDefinitionResponse || (exports.CreateConnectorDefinitionResponse = {}));
var CreateConnectorDefinitionVersionRequest;
(function (CreateConnectorDefinitionVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConnectorDefinitionVersionRequest");
    }
    CreateConnectorDefinitionVersionRequest.isa = isa;
})(CreateConnectorDefinitionVersionRequest = exports.CreateConnectorDefinitionVersionRequest || (exports.CreateConnectorDefinitionVersionRequest = {}));
var CreateConnectorDefinitionVersionResponse;
(function (CreateConnectorDefinitionVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConnectorDefinitionVersionResponse");
    }
    CreateConnectorDefinitionVersionResponse.isa = isa;
})(CreateConnectorDefinitionVersionResponse = exports.CreateConnectorDefinitionVersionResponse || (exports.CreateConnectorDefinitionVersionResponse = {}));
var CreateCoreDefinitionRequest;
(function (CreateCoreDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCoreDefinitionRequest");
    }
    CreateCoreDefinitionRequest.isa = isa;
})(CreateCoreDefinitionRequest = exports.CreateCoreDefinitionRequest || (exports.CreateCoreDefinitionRequest = {}));
var CreateCoreDefinitionResponse;
(function (CreateCoreDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCoreDefinitionResponse");
    }
    CreateCoreDefinitionResponse.isa = isa;
})(CreateCoreDefinitionResponse = exports.CreateCoreDefinitionResponse || (exports.CreateCoreDefinitionResponse = {}));
var CreateCoreDefinitionVersionRequest;
(function (CreateCoreDefinitionVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCoreDefinitionVersionRequest");
    }
    CreateCoreDefinitionVersionRequest.isa = isa;
})(CreateCoreDefinitionVersionRequest = exports.CreateCoreDefinitionVersionRequest || (exports.CreateCoreDefinitionVersionRequest = {}));
var CreateCoreDefinitionVersionResponse;
(function (CreateCoreDefinitionVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateCoreDefinitionVersionResponse");
    }
    CreateCoreDefinitionVersionResponse.isa = isa;
})(CreateCoreDefinitionVersionResponse = exports.CreateCoreDefinitionVersionResponse || (exports.CreateCoreDefinitionVersionResponse = {}));
var CreateDeploymentRequest;
(function (CreateDeploymentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDeploymentRequest");
    }
    CreateDeploymentRequest.isa = isa;
})(CreateDeploymentRequest = exports.CreateDeploymentRequest || (exports.CreateDeploymentRequest = {}));
var CreateDeploymentResponse;
(function (CreateDeploymentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDeploymentResponse");
    }
    CreateDeploymentResponse.isa = isa;
})(CreateDeploymentResponse = exports.CreateDeploymentResponse || (exports.CreateDeploymentResponse = {}));
var CreateDeviceDefinitionRequest;
(function (CreateDeviceDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDeviceDefinitionRequest");
    }
    CreateDeviceDefinitionRequest.isa = isa;
})(CreateDeviceDefinitionRequest = exports.CreateDeviceDefinitionRequest || (exports.CreateDeviceDefinitionRequest = {}));
var CreateDeviceDefinitionResponse;
(function (CreateDeviceDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDeviceDefinitionResponse");
    }
    CreateDeviceDefinitionResponse.isa = isa;
})(CreateDeviceDefinitionResponse = exports.CreateDeviceDefinitionResponse || (exports.CreateDeviceDefinitionResponse = {}));
var CreateDeviceDefinitionVersionRequest;
(function (CreateDeviceDefinitionVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDeviceDefinitionVersionRequest");
    }
    CreateDeviceDefinitionVersionRequest.isa = isa;
})(CreateDeviceDefinitionVersionRequest = exports.CreateDeviceDefinitionVersionRequest || (exports.CreateDeviceDefinitionVersionRequest = {}));
var CreateDeviceDefinitionVersionResponse;
(function (CreateDeviceDefinitionVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDeviceDefinitionVersionResponse");
    }
    CreateDeviceDefinitionVersionResponse.isa = isa;
})(CreateDeviceDefinitionVersionResponse = exports.CreateDeviceDefinitionVersionResponse || (exports.CreateDeviceDefinitionVersionResponse = {}));
var CreateFunctionDefinitionRequest;
(function (CreateFunctionDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateFunctionDefinitionRequest");
    }
    CreateFunctionDefinitionRequest.isa = isa;
})(CreateFunctionDefinitionRequest = exports.CreateFunctionDefinitionRequest || (exports.CreateFunctionDefinitionRequest = {}));
var CreateFunctionDefinitionResponse;
(function (CreateFunctionDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateFunctionDefinitionResponse");
    }
    CreateFunctionDefinitionResponse.isa = isa;
})(CreateFunctionDefinitionResponse = exports.CreateFunctionDefinitionResponse || (exports.CreateFunctionDefinitionResponse = {}));
var CreateFunctionDefinitionVersionRequest;
(function (CreateFunctionDefinitionVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateFunctionDefinitionVersionRequest");
    }
    CreateFunctionDefinitionVersionRequest.isa = isa;
})(CreateFunctionDefinitionVersionRequest = exports.CreateFunctionDefinitionVersionRequest || (exports.CreateFunctionDefinitionVersionRequest = {}));
var CreateFunctionDefinitionVersionResponse;
(function (CreateFunctionDefinitionVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateFunctionDefinitionVersionResponse");
    }
    CreateFunctionDefinitionVersionResponse.isa = isa;
})(CreateFunctionDefinitionVersionResponse = exports.CreateFunctionDefinitionVersionResponse || (exports.CreateFunctionDefinitionVersionResponse = {}));
var CreateGroupCertificateAuthorityRequest;
(function (CreateGroupCertificateAuthorityRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGroupCertificateAuthorityRequest");
    }
    CreateGroupCertificateAuthorityRequest.isa = isa;
})(CreateGroupCertificateAuthorityRequest = exports.CreateGroupCertificateAuthorityRequest || (exports.CreateGroupCertificateAuthorityRequest = {}));
var CreateGroupCertificateAuthorityResponse;
(function (CreateGroupCertificateAuthorityResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGroupCertificateAuthorityResponse");
    }
    CreateGroupCertificateAuthorityResponse.isa = isa;
})(CreateGroupCertificateAuthorityResponse = exports.CreateGroupCertificateAuthorityResponse || (exports.CreateGroupCertificateAuthorityResponse = {}));
var CreateGroupRequest;
(function (CreateGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGroupRequest");
    }
    CreateGroupRequest.isa = isa;
})(CreateGroupRequest = exports.CreateGroupRequest || (exports.CreateGroupRequest = {}));
var CreateGroupResponse;
(function (CreateGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGroupResponse");
    }
    CreateGroupResponse.isa = isa;
})(CreateGroupResponse = exports.CreateGroupResponse || (exports.CreateGroupResponse = {}));
var CreateGroupVersionRequest;
(function (CreateGroupVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGroupVersionRequest");
    }
    CreateGroupVersionRequest.isa = isa;
})(CreateGroupVersionRequest = exports.CreateGroupVersionRequest || (exports.CreateGroupVersionRequest = {}));
var CreateGroupVersionResponse;
(function (CreateGroupVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateGroupVersionResponse");
    }
    CreateGroupVersionResponse.isa = isa;
})(CreateGroupVersionResponse = exports.CreateGroupVersionResponse || (exports.CreateGroupVersionResponse = {}));
var CreateLoggerDefinitionRequest;
(function (CreateLoggerDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLoggerDefinitionRequest");
    }
    CreateLoggerDefinitionRequest.isa = isa;
})(CreateLoggerDefinitionRequest = exports.CreateLoggerDefinitionRequest || (exports.CreateLoggerDefinitionRequest = {}));
var CreateLoggerDefinitionResponse;
(function (CreateLoggerDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLoggerDefinitionResponse");
    }
    CreateLoggerDefinitionResponse.isa = isa;
})(CreateLoggerDefinitionResponse = exports.CreateLoggerDefinitionResponse || (exports.CreateLoggerDefinitionResponse = {}));
var CreateLoggerDefinitionVersionRequest;
(function (CreateLoggerDefinitionVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLoggerDefinitionVersionRequest");
    }
    CreateLoggerDefinitionVersionRequest.isa = isa;
})(CreateLoggerDefinitionVersionRequest = exports.CreateLoggerDefinitionVersionRequest || (exports.CreateLoggerDefinitionVersionRequest = {}));
var CreateLoggerDefinitionVersionResponse;
(function (CreateLoggerDefinitionVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateLoggerDefinitionVersionResponse");
    }
    CreateLoggerDefinitionVersionResponse.isa = isa;
})(CreateLoggerDefinitionVersionResponse = exports.CreateLoggerDefinitionVersionResponse || (exports.CreateLoggerDefinitionVersionResponse = {}));
var CreateResourceDefinitionRequest;
(function (CreateResourceDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateResourceDefinitionRequest");
    }
    CreateResourceDefinitionRequest.isa = isa;
})(CreateResourceDefinitionRequest = exports.CreateResourceDefinitionRequest || (exports.CreateResourceDefinitionRequest = {}));
var CreateResourceDefinitionResponse;
(function (CreateResourceDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateResourceDefinitionResponse");
    }
    CreateResourceDefinitionResponse.isa = isa;
})(CreateResourceDefinitionResponse = exports.CreateResourceDefinitionResponse || (exports.CreateResourceDefinitionResponse = {}));
var CreateResourceDefinitionVersionRequest;
(function (CreateResourceDefinitionVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateResourceDefinitionVersionRequest");
    }
    CreateResourceDefinitionVersionRequest.isa = isa;
})(CreateResourceDefinitionVersionRequest = exports.CreateResourceDefinitionVersionRequest || (exports.CreateResourceDefinitionVersionRequest = {}));
var CreateResourceDefinitionVersionResponse;
(function (CreateResourceDefinitionVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateResourceDefinitionVersionResponse");
    }
    CreateResourceDefinitionVersionResponse.isa = isa;
})(CreateResourceDefinitionVersionResponse = exports.CreateResourceDefinitionVersionResponse || (exports.CreateResourceDefinitionVersionResponse = {}));
var CreateSoftwareUpdateJobRequest;
(function (CreateSoftwareUpdateJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSoftwareUpdateJobRequest");
    }
    CreateSoftwareUpdateJobRequest.isa = isa;
})(CreateSoftwareUpdateJobRequest = exports.CreateSoftwareUpdateJobRequest || (exports.CreateSoftwareUpdateJobRequest = {}));
var CreateSoftwareUpdateJobResponse;
(function (CreateSoftwareUpdateJobResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSoftwareUpdateJobResponse");
    }
    CreateSoftwareUpdateJobResponse.isa = isa;
})(CreateSoftwareUpdateJobResponse = exports.CreateSoftwareUpdateJobResponse || (exports.CreateSoftwareUpdateJobResponse = {}));
var CreateSubscriptionDefinitionRequest;
(function (CreateSubscriptionDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSubscriptionDefinitionRequest");
    }
    CreateSubscriptionDefinitionRequest.isa = isa;
})(CreateSubscriptionDefinitionRequest = exports.CreateSubscriptionDefinitionRequest || (exports.CreateSubscriptionDefinitionRequest = {}));
var CreateSubscriptionDefinitionResponse;
(function (CreateSubscriptionDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSubscriptionDefinitionResponse");
    }
    CreateSubscriptionDefinitionResponse.isa = isa;
})(CreateSubscriptionDefinitionResponse = exports.CreateSubscriptionDefinitionResponse || (exports.CreateSubscriptionDefinitionResponse = {}));
var CreateSubscriptionDefinitionVersionRequest;
(function (CreateSubscriptionDefinitionVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSubscriptionDefinitionVersionRequest");
    }
    CreateSubscriptionDefinitionVersionRequest.isa = isa;
})(CreateSubscriptionDefinitionVersionRequest = exports.CreateSubscriptionDefinitionVersionRequest || (exports.CreateSubscriptionDefinitionVersionRequest = {}));
var CreateSubscriptionDefinitionVersionResponse;
(function (CreateSubscriptionDefinitionVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSubscriptionDefinitionVersionResponse");
    }
    CreateSubscriptionDefinitionVersionResponse.isa = isa;
})(CreateSubscriptionDefinitionVersionResponse = exports.CreateSubscriptionDefinitionVersionResponse || (exports.CreateSubscriptionDefinitionVersionResponse = {}));
var DefinitionInformation;
(function (DefinitionInformation) {
    function isa(o) {
        return smithy_client_1.isa(o, "DefinitionInformation");
    }
    DefinitionInformation.isa = isa;
})(DefinitionInformation = exports.DefinitionInformation || (exports.DefinitionInformation = {}));
var DeleteConnectorDefinitionRequest;
(function (DeleteConnectorDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConnectorDefinitionRequest");
    }
    DeleteConnectorDefinitionRequest.isa = isa;
})(DeleteConnectorDefinitionRequest = exports.DeleteConnectorDefinitionRequest || (exports.DeleteConnectorDefinitionRequest = {}));
var DeleteConnectorDefinitionResponse;
(function (DeleteConnectorDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConnectorDefinitionResponse");
    }
    DeleteConnectorDefinitionResponse.isa = isa;
})(DeleteConnectorDefinitionResponse = exports.DeleteConnectorDefinitionResponse || (exports.DeleteConnectorDefinitionResponse = {}));
var DeleteCoreDefinitionRequest;
(function (DeleteCoreDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteCoreDefinitionRequest");
    }
    DeleteCoreDefinitionRequest.isa = isa;
})(DeleteCoreDefinitionRequest = exports.DeleteCoreDefinitionRequest || (exports.DeleteCoreDefinitionRequest = {}));
var DeleteCoreDefinitionResponse;
(function (DeleteCoreDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteCoreDefinitionResponse");
    }
    DeleteCoreDefinitionResponse.isa = isa;
})(DeleteCoreDefinitionResponse = exports.DeleteCoreDefinitionResponse || (exports.DeleteCoreDefinitionResponse = {}));
var DeleteDeviceDefinitionRequest;
(function (DeleteDeviceDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDeviceDefinitionRequest");
    }
    DeleteDeviceDefinitionRequest.isa = isa;
})(DeleteDeviceDefinitionRequest = exports.DeleteDeviceDefinitionRequest || (exports.DeleteDeviceDefinitionRequest = {}));
var DeleteDeviceDefinitionResponse;
(function (DeleteDeviceDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDeviceDefinitionResponse");
    }
    DeleteDeviceDefinitionResponse.isa = isa;
})(DeleteDeviceDefinitionResponse = exports.DeleteDeviceDefinitionResponse || (exports.DeleteDeviceDefinitionResponse = {}));
var DeleteFunctionDefinitionRequest;
(function (DeleteFunctionDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteFunctionDefinitionRequest");
    }
    DeleteFunctionDefinitionRequest.isa = isa;
})(DeleteFunctionDefinitionRequest = exports.DeleteFunctionDefinitionRequest || (exports.DeleteFunctionDefinitionRequest = {}));
var DeleteFunctionDefinitionResponse;
(function (DeleteFunctionDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteFunctionDefinitionResponse");
    }
    DeleteFunctionDefinitionResponse.isa = isa;
})(DeleteFunctionDefinitionResponse = exports.DeleteFunctionDefinitionResponse || (exports.DeleteFunctionDefinitionResponse = {}));
var DeleteGroupRequest;
(function (DeleteGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteGroupRequest");
    }
    DeleteGroupRequest.isa = isa;
})(DeleteGroupRequest = exports.DeleteGroupRequest || (exports.DeleteGroupRequest = {}));
var DeleteGroupResponse;
(function (DeleteGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteGroupResponse");
    }
    DeleteGroupResponse.isa = isa;
})(DeleteGroupResponse = exports.DeleteGroupResponse || (exports.DeleteGroupResponse = {}));
var DeleteLoggerDefinitionRequest;
(function (DeleteLoggerDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLoggerDefinitionRequest");
    }
    DeleteLoggerDefinitionRequest.isa = isa;
})(DeleteLoggerDefinitionRequest = exports.DeleteLoggerDefinitionRequest || (exports.DeleteLoggerDefinitionRequest = {}));
var DeleteLoggerDefinitionResponse;
(function (DeleteLoggerDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteLoggerDefinitionResponse");
    }
    DeleteLoggerDefinitionResponse.isa = isa;
})(DeleteLoggerDefinitionResponse = exports.DeleteLoggerDefinitionResponse || (exports.DeleteLoggerDefinitionResponse = {}));
var DeleteResourceDefinitionRequest;
(function (DeleteResourceDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteResourceDefinitionRequest");
    }
    DeleteResourceDefinitionRequest.isa = isa;
})(DeleteResourceDefinitionRequest = exports.DeleteResourceDefinitionRequest || (exports.DeleteResourceDefinitionRequest = {}));
var DeleteResourceDefinitionResponse;
(function (DeleteResourceDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteResourceDefinitionResponse");
    }
    DeleteResourceDefinitionResponse.isa = isa;
})(DeleteResourceDefinitionResponse = exports.DeleteResourceDefinitionResponse || (exports.DeleteResourceDefinitionResponse = {}));
var DeleteSubscriptionDefinitionRequest;
(function (DeleteSubscriptionDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSubscriptionDefinitionRequest");
    }
    DeleteSubscriptionDefinitionRequest.isa = isa;
})(DeleteSubscriptionDefinitionRequest = exports.DeleteSubscriptionDefinitionRequest || (exports.DeleteSubscriptionDefinitionRequest = {}));
var DeleteSubscriptionDefinitionResponse;
(function (DeleteSubscriptionDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSubscriptionDefinitionResponse");
    }
    DeleteSubscriptionDefinitionResponse.isa = isa;
})(DeleteSubscriptionDefinitionResponse = exports.DeleteSubscriptionDefinitionResponse || (exports.DeleteSubscriptionDefinitionResponse = {}));
var Deployment;
(function (Deployment) {
    function isa(o) {
        return smithy_client_1.isa(o, "Deployment");
    }
    Deployment.isa = isa;
})(Deployment = exports.Deployment || (exports.Deployment = {}));
var DeploymentType;
(function (DeploymentType) {
    DeploymentType["ForceResetDeployment"] = "ForceResetDeployment";
    DeploymentType["NewDeployment"] = "NewDeployment";
    DeploymentType["Redeployment"] = "Redeployment";
    DeploymentType["ResetDeployment"] = "ResetDeployment";
})(DeploymentType = exports.DeploymentType || (exports.DeploymentType = {}));
var Device;
(function (Device) {
    function isa(o) {
        return smithy_client_1.isa(o, "Device");
    }
    Device.isa = isa;
})(Device = exports.Device || (exports.Device = {}));
var DeviceDefinitionVersion;
(function (DeviceDefinitionVersion) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeviceDefinitionVersion");
    }
    DeviceDefinitionVersion.isa = isa;
})(DeviceDefinitionVersion = exports.DeviceDefinitionVersion || (exports.DeviceDefinitionVersion = {}));
var DisassociateRoleFromGroupRequest;
(function (DisassociateRoleFromGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateRoleFromGroupRequest");
    }
    DisassociateRoleFromGroupRequest.isa = isa;
})(DisassociateRoleFromGroupRequest = exports.DisassociateRoleFromGroupRequest || (exports.DisassociateRoleFromGroupRequest = {}));
var DisassociateRoleFromGroupResponse;
(function (DisassociateRoleFromGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateRoleFromGroupResponse");
    }
    DisassociateRoleFromGroupResponse.isa = isa;
})(DisassociateRoleFromGroupResponse = exports.DisassociateRoleFromGroupResponse || (exports.DisassociateRoleFromGroupResponse = {}));
var DisassociateServiceRoleFromAccountRequest;
(function (DisassociateServiceRoleFromAccountRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateServiceRoleFromAccountRequest");
    }
    DisassociateServiceRoleFromAccountRequest.isa = isa;
})(DisassociateServiceRoleFromAccountRequest = exports.DisassociateServiceRoleFromAccountRequest || (exports.DisassociateServiceRoleFromAccountRequest = {}));
var DisassociateServiceRoleFromAccountResponse;
(function (DisassociateServiceRoleFromAccountResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisassociateServiceRoleFromAccountResponse");
    }
    DisassociateServiceRoleFromAccountResponse.isa = isa;
})(DisassociateServiceRoleFromAccountResponse = exports.DisassociateServiceRoleFromAccountResponse || (exports.DisassociateServiceRoleFromAccountResponse = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType["binary"] = "binary";
    EncodingType["json"] = "json";
})(EncodingType = exports.EncodingType || (exports.EncodingType = {}));
var ErrorDetail;
(function (ErrorDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "ErrorDetail");
    }
    ErrorDetail.isa = isa;
})(ErrorDetail = exports.ErrorDetail || (exports.ErrorDetail = {}));
var Function;
(function (Function) {
    function isa(o) {
        return smithy_client_1.isa(o, "Function");
    }
    Function.isa = isa;
})(Function = exports.Function || (exports.Function = {}));
var FunctionConfiguration;
(function (FunctionConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "FunctionConfiguration");
    }
    FunctionConfiguration.isa = isa;
})(FunctionConfiguration = exports.FunctionConfiguration || (exports.FunctionConfiguration = {}));
var FunctionConfigurationEnvironment;
(function (FunctionConfigurationEnvironment) {
    function isa(o) {
        return smithy_client_1.isa(o, "FunctionConfigurationEnvironment");
    }
    FunctionConfigurationEnvironment.isa = isa;
})(FunctionConfigurationEnvironment = exports.FunctionConfigurationEnvironment || (exports.FunctionConfigurationEnvironment = {}));
var FunctionDefaultConfig;
(function (FunctionDefaultConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "FunctionDefaultConfig");
    }
    FunctionDefaultConfig.isa = isa;
})(FunctionDefaultConfig = exports.FunctionDefaultConfig || (exports.FunctionDefaultConfig = {}));
var FunctionDefaultExecutionConfig;
(function (FunctionDefaultExecutionConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "FunctionDefaultExecutionConfig");
    }
    FunctionDefaultExecutionConfig.isa = isa;
})(FunctionDefaultExecutionConfig = exports.FunctionDefaultExecutionConfig || (exports.FunctionDefaultExecutionConfig = {}));
var FunctionDefinitionVersion;
(function (FunctionDefinitionVersion) {
    function isa(o) {
        return smithy_client_1.isa(o, "FunctionDefinitionVersion");
    }
    FunctionDefinitionVersion.isa = isa;
})(FunctionDefinitionVersion = exports.FunctionDefinitionVersion || (exports.FunctionDefinitionVersion = {}));
var FunctionExecutionConfig;
(function (FunctionExecutionConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "FunctionExecutionConfig");
    }
    FunctionExecutionConfig.isa = isa;
})(FunctionExecutionConfig = exports.FunctionExecutionConfig || (exports.FunctionExecutionConfig = {}));
var FunctionIsolationMode;
(function (FunctionIsolationMode) {
    FunctionIsolationMode["GreengrassContainer"] = "GreengrassContainer";
    FunctionIsolationMode["NoContainer"] = "NoContainer";
})(FunctionIsolationMode = exports.FunctionIsolationMode || (exports.FunctionIsolationMode = {}));
var FunctionRunAsConfig;
(function (FunctionRunAsConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "FunctionRunAsConfig");
    }
    FunctionRunAsConfig.isa = isa;
})(FunctionRunAsConfig = exports.FunctionRunAsConfig || (exports.FunctionRunAsConfig = {}));
var GetAssociatedRoleRequest;
(function (GetAssociatedRoleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAssociatedRoleRequest");
    }
    GetAssociatedRoleRequest.isa = isa;
})(GetAssociatedRoleRequest = exports.GetAssociatedRoleRequest || (exports.GetAssociatedRoleRequest = {}));
var GetAssociatedRoleResponse;
(function (GetAssociatedRoleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAssociatedRoleResponse");
    }
    GetAssociatedRoleResponse.isa = isa;
})(GetAssociatedRoleResponse = exports.GetAssociatedRoleResponse || (exports.GetAssociatedRoleResponse = {}));
var GetBulkDeploymentStatusRequest;
(function (GetBulkDeploymentStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetBulkDeploymentStatusRequest");
    }
    GetBulkDeploymentStatusRequest.isa = isa;
})(GetBulkDeploymentStatusRequest = exports.GetBulkDeploymentStatusRequest || (exports.GetBulkDeploymentStatusRequest = {}));
var GetBulkDeploymentStatusResponse;
(function (GetBulkDeploymentStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetBulkDeploymentStatusResponse");
    }
    GetBulkDeploymentStatusResponse.isa = isa;
})(GetBulkDeploymentStatusResponse = exports.GetBulkDeploymentStatusResponse || (exports.GetBulkDeploymentStatusResponse = {}));
var GetConnectivityInfoRequest;
(function (GetConnectivityInfoRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConnectivityInfoRequest");
    }
    GetConnectivityInfoRequest.isa = isa;
})(GetConnectivityInfoRequest = exports.GetConnectivityInfoRequest || (exports.GetConnectivityInfoRequest = {}));
var GetConnectivityInfoResponse;
(function (GetConnectivityInfoResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConnectivityInfoResponse");
    }
    GetConnectivityInfoResponse.isa = isa;
})(GetConnectivityInfoResponse = exports.GetConnectivityInfoResponse || (exports.GetConnectivityInfoResponse = {}));
var GetConnectorDefinitionRequest;
(function (GetConnectorDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConnectorDefinitionRequest");
    }
    GetConnectorDefinitionRequest.isa = isa;
})(GetConnectorDefinitionRequest = exports.GetConnectorDefinitionRequest || (exports.GetConnectorDefinitionRequest = {}));
var GetConnectorDefinitionResponse;
(function (GetConnectorDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConnectorDefinitionResponse");
    }
    GetConnectorDefinitionResponse.isa = isa;
})(GetConnectorDefinitionResponse = exports.GetConnectorDefinitionResponse || (exports.GetConnectorDefinitionResponse = {}));
var GetConnectorDefinitionVersionRequest;
(function (GetConnectorDefinitionVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConnectorDefinitionVersionRequest");
    }
    GetConnectorDefinitionVersionRequest.isa = isa;
})(GetConnectorDefinitionVersionRequest = exports.GetConnectorDefinitionVersionRequest || (exports.GetConnectorDefinitionVersionRequest = {}));
var GetConnectorDefinitionVersionResponse;
(function (GetConnectorDefinitionVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConnectorDefinitionVersionResponse");
    }
    GetConnectorDefinitionVersionResponse.isa = isa;
})(GetConnectorDefinitionVersionResponse = exports.GetConnectorDefinitionVersionResponse || (exports.GetConnectorDefinitionVersionResponse = {}));
var GetCoreDefinitionRequest;
(function (GetCoreDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCoreDefinitionRequest");
    }
    GetCoreDefinitionRequest.isa = isa;
})(GetCoreDefinitionRequest = exports.GetCoreDefinitionRequest || (exports.GetCoreDefinitionRequest = {}));
var GetCoreDefinitionResponse;
(function (GetCoreDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCoreDefinitionResponse");
    }
    GetCoreDefinitionResponse.isa = isa;
})(GetCoreDefinitionResponse = exports.GetCoreDefinitionResponse || (exports.GetCoreDefinitionResponse = {}));
var GetCoreDefinitionVersionRequest;
(function (GetCoreDefinitionVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCoreDefinitionVersionRequest");
    }
    GetCoreDefinitionVersionRequest.isa = isa;
})(GetCoreDefinitionVersionRequest = exports.GetCoreDefinitionVersionRequest || (exports.GetCoreDefinitionVersionRequest = {}));
var GetCoreDefinitionVersionResponse;
(function (GetCoreDefinitionVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetCoreDefinitionVersionResponse");
    }
    GetCoreDefinitionVersionResponse.isa = isa;
})(GetCoreDefinitionVersionResponse = exports.GetCoreDefinitionVersionResponse || (exports.GetCoreDefinitionVersionResponse = {}));
var GetDeploymentStatusRequest;
(function (GetDeploymentStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeploymentStatusRequest");
    }
    GetDeploymentStatusRequest.isa = isa;
})(GetDeploymentStatusRequest = exports.GetDeploymentStatusRequest || (exports.GetDeploymentStatusRequest = {}));
var GetDeploymentStatusResponse;
(function (GetDeploymentStatusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeploymentStatusResponse");
    }
    GetDeploymentStatusResponse.isa = isa;
})(GetDeploymentStatusResponse = exports.GetDeploymentStatusResponse || (exports.GetDeploymentStatusResponse = {}));
var GetDeviceDefinitionRequest;
(function (GetDeviceDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeviceDefinitionRequest");
    }
    GetDeviceDefinitionRequest.isa = isa;
})(GetDeviceDefinitionRequest = exports.GetDeviceDefinitionRequest || (exports.GetDeviceDefinitionRequest = {}));
var GetDeviceDefinitionResponse;
(function (GetDeviceDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeviceDefinitionResponse");
    }
    GetDeviceDefinitionResponse.isa = isa;
})(GetDeviceDefinitionResponse = exports.GetDeviceDefinitionResponse || (exports.GetDeviceDefinitionResponse = {}));
var GetDeviceDefinitionVersionRequest;
(function (GetDeviceDefinitionVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeviceDefinitionVersionRequest");
    }
    GetDeviceDefinitionVersionRequest.isa = isa;
})(GetDeviceDefinitionVersionRequest = exports.GetDeviceDefinitionVersionRequest || (exports.GetDeviceDefinitionVersionRequest = {}));
var GetDeviceDefinitionVersionResponse;
(function (GetDeviceDefinitionVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeviceDefinitionVersionResponse");
    }
    GetDeviceDefinitionVersionResponse.isa = isa;
})(GetDeviceDefinitionVersionResponse = exports.GetDeviceDefinitionVersionResponse || (exports.GetDeviceDefinitionVersionResponse = {}));
var GetFunctionDefinitionRequest;
(function (GetFunctionDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetFunctionDefinitionRequest");
    }
    GetFunctionDefinitionRequest.isa = isa;
})(GetFunctionDefinitionRequest = exports.GetFunctionDefinitionRequest || (exports.GetFunctionDefinitionRequest = {}));
var GetFunctionDefinitionResponse;
(function (GetFunctionDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetFunctionDefinitionResponse");
    }
    GetFunctionDefinitionResponse.isa = isa;
})(GetFunctionDefinitionResponse = exports.GetFunctionDefinitionResponse || (exports.GetFunctionDefinitionResponse = {}));
var GetFunctionDefinitionVersionRequest;
(function (GetFunctionDefinitionVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetFunctionDefinitionVersionRequest");
    }
    GetFunctionDefinitionVersionRequest.isa = isa;
})(GetFunctionDefinitionVersionRequest = exports.GetFunctionDefinitionVersionRequest || (exports.GetFunctionDefinitionVersionRequest = {}));
var GetFunctionDefinitionVersionResponse;
(function (GetFunctionDefinitionVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetFunctionDefinitionVersionResponse");
    }
    GetFunctionDefinitionVersionResponse.isa = isa;
})(GetFunctionDefinitionVersionResponse = exports.GetFunctionDefinitionVersionResponse || (exports.GetFunctionDefinitionVersionResponse = {}));
var GetGroupCertificateAuthorityRequest;
(function (GetGroupCertificateAuthorityRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGroupCertificateAuthorityRequest");
    }
    GetGroupCertificateAuthorityRequest.isa = isa;
})(GetGroupCertificateAuthorityRequest = exports.GetGroupCertificateAuthorityRequest || (exports.GetGroupCertificateAuthorityRequest = {}));
var GetGroupCertificateAuthorityResponse;
(function (GetGroupCertificateAuthorityResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGroupCertificateAuthorityResponse");
    }
    GetGroupCertificateAuthorityResponse.isa = isa;
})(GetGroupCertificateAuthorityResponse = exports.GetGroupCertificateAuthorityResponse || (exports.GetGroupCertificateAuthorityResponse = {}));
var GetGroupCertificateConfigurationRequest;
(function (GetGroupCertificateConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGroupCertificateConfigurationRequest");
    }
    GetGroupCertificateConfigurationRequest.isa = isa;
})(GetGroupCertificateConfigurationRequest = exports.GetGroupCertificateConfigurationRequest || (exports.GetGroupCertificateConfigurationRequest = {}));
var GetGroupCertificateConfigurationResponse;
(function (GetGroupCertificateConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGroupCertificateConfigurationResponse");
    }
    GetGroupCertificateConfigurationResponse.isa = isa;
})(GetGroupCertificateConfigurationResponse = exports.GetGroupCertificateConfigurationResponse || (exports.GetGroupCertificateConfigurationResponse = {}));
var GetGroupRequest;
(function (GetGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGroupRequest");
    }
    GetGroupRequest.isa = isa;
})(GetGroupRequest = exports.GetGroupRequest || (exports.GetGroupRequest = {}));
var GetGroupResponse;
(function (GetGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGroupResponse");
    }
    GetGroupResponse.isa = isa;
})(GetGroupResponse = exports.GetGroupResponse || (exports.GetGroupResponse = {}));
var GetGroupVersionRequest;
(function (GetGroupVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGroupVersionRequest");
    }
    GetGroupVersionRequest.isa = isa;
})(GetGroupVersionRequest = exports.GetGroupVersionRequest || (exports.GetGroupVersionRequest = {}));
var GetGroupVersionResponse;
(function (GetGroupVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetGroupVersionResponse");
    }
    GetGroupVersionResponse.isa = isa;
})(GetGroupVersionResponse = exports.GetGroupVersionResponse || (exports.GetGroupVersionResponse = {}));
var GetLoggerDefinitionRequest;
(function (GetLoggerDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLoggerDefinitionRequest");
    }
    GetLoggerDefinitionRequest.isa = isa;
})(GetLoggerDefinitionRequest = exports.GetLoggerDefinitionRequest || (exports.GetLoggerDefinitionRequest = {}));
var GetLoggerDefinitionResponse;
(function (GetLoggerDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLoggerDefinitionResponse");
    }
    GetLoggerDefinitionResponse.isa = isa;
})(GetLoggerDefinitionResponse = exports.GetLoggerDefinitionResponse || (exports.GetLoggerDefinitionResponse = {}));
var GetLoggerDefinitionVersionRequest;
(function (GetLoggerDefinitionVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLoggerDefinitionVersionRequest");
    }
    GetLoggerDefinitionVersionRequest.isa = isa;
})(GetLoggerDefinitionVersionRequest = exports.GetLoggerDefinitionVersionRequest || (exports.GetLoggerDefinitionVersionRequest = {}));
var GetLoggerDefinitionVersionResponse;
(function (GetLoggerDefinitionVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetLoggerDefinitionVersionResponse");
    }
    GetLoggerDefinitionVersionResponse.isa = isa;
})(GetLoggerDefinitionVersionResponse = exports.GetLoggerDefinitionVersionResponse || (exports.GetLoggerDefinitionVersionResponse = {}));
var GetResourceDefinitionRequest;
(function (GetResourceDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetResourceDefinitionRequest");
    }
    GetResourceDefinitionRequest.isa = isa;
})(GetResourceDefinitionRequest = exports.GetResourceDefinitionRequest || (exports.GetResourceDefinitionRequest = {}));
var GetResourceDefinitionResponse;
(function (GetResourceDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetResourceDefinitionResponse");
    }
    GetResourceDefinitionResponse.isa = isa;
})(GetResourceDefinitionResponse = exports.GetResourceDefinitionResponse || (exports.GetResourceDefinitionResponse = {}));
var GetResourceDefinitionVersionRequest;
(function (GetResourceDefinitionVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetResourceDefinitionVersionRequest");
    }
    GetResourceDefinitionVersionRequest.isa = isa;
})(GetResourceDefinitionVersionRequest = exports.GetResourceDefinitionVersionRequest || (exports.GetResourceDefinitionVersionRequest = {}));
var GetResourceDefinitionVersionResponse;
(function (GetResourceDefinitionVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetResourceDefinitionVersionResponse");
    }
    GetResourceDefinitionVersionResponse.isa = isa;
})(GetResourceDefinitionVersionResponse = exports.GetResourceDefinitionVersionResponse || (exports.GetResourceDefinitionVersionResponse = {}));
var GetServiceRoleForAccountRequest;
(function (GetServiceRoleForAccountRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServiceRoleForAccountRequest");
    }
    GetServiceRoleForAccountRequest.isa = isa;
})(GetServiceRoleForAccountRequest = exports.GetServiceRoleForAccountRequest || (exports.GetServiceRoleForAccountRequest = {}));
var GetServiceRoleForAccountResponse;
(function (GetServiceRoleForAccountResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetServiceRoleForAccountResponse");
    }
    GetServiceRoleForAccountResponse.isa = isa;
})(GetServiceRoleForAccountResponse = exports.GetServiceRoleForAccountResponse || (exports.GetServiceRoleForAccountResponse = {}));
var GetSubscriptionDefinitionRequest;
(function (GetSubscriptionDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSubscriptionDefinitionRequest");
    }
    GetSubscriptionDefinitionRequest.isa = isa;
})(GetSubscriptionDefinitionRequest = exports.GetSubscriptionDefinitionRequest || (exports.GetSubscriptionDefinitionRequest = {}));
var GetSubscriptionDefinitionResponse;
(function (GetSubscriptionDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSubscriptionDefinitionResponse");
    }
    GetSubscriptionDefinitionResponse.isa = isa;
})(GetSubscriptionDefinitionResponse = exports.GetSubscriptionDefinitionResponse || (exports.GetSubscriptionDefinitionResponse = {}));
var GetSubscriptionDefinitionVersionRequest;
(function (GetSubscriptionDefinitionVersionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSubscriptionDefinitionVersionRequest");
    }
    GetSubscriptionDefinitionVersionRequest.isa = isa;
})(GetSubscriptionDefinitionVersionRequest = exports.GetSubscriptionDefinitionVersionRequest || (exports.GetSubscriptionDefinitionVersionRequest = {}));
var GetSubscriptionDefinitionVersionResponse;
(function (GetSubscriptionDefinitionVersionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSubscriptionDefinitionVersionResponse");
    }
    GetSubscriptionDefinitionVersionResponse.isa = isa;
})(GetSubscriptionDefinitionVersionResponse = exports.GetSubscriptionDefinitionVersionResponse || (exports.GetSubscriptionDefinitionVersionResponse = {}));
var GroupCertificateAuthorityProperties;
(function (GroupCertificateAuthorityProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "GroupCertificateAuthorityProperties");
    }
    GroupCertificateAuthorityProperties.isa = isa;
})(GroupCertificateAuthorityProperties = exports.GroupCertificateAuthorityProperties || (exports.GroupCertificateAuthorityProperties = {}));
var GroupInformation;
(function (GroupInformation) {
    function isa(o) {
        return smithy_client_1.isa(o, "GroupInformation");
    }
    GroupInformation.isa = isa;
})(GroupInformation = exports.GroupInformation || (exports.GroupInformation = {}));
var GroupOwnerSetting;
(function (GroupOwnerSetting) {
    function isa(o) {
        return smithy_client_1.isa(o, "GroupOwnerSetting");
    }
    GroupOwnerSetting.isa = isa;
})(GroupOwnerSetting = exports.GroupOwnerSetting || (exports.GroupOwnerSetting = {}));
var GroupVersion;
(function (GroupVersion) {
    function isa(o) {
        return smithy_client_1.isa(o, "GroupVersion");
    }
    GroupVersion.isa = isa;
})(GroupVersion = exports.GroupVersion || (exports.GroupVersion = {}));
var InternalServerErrorException;
(function (InternalServerErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServerErrorException");
    }
    InternalServerErrorException.isa = isa;
})(InternalServerErrorException = exports.InternalServerErrorException || (exports.InternalServerErrorException = {}));
var ListBulkDeploymentDetailedReportsRequest;
(function (ListBulkDeploymentDetailedReportsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBulkDeploymentDetailedReportsRequest");
    }
    ListBulkDeploymentDetailedReportsRequest.isa = isa;
})(ListBulkDeploymentDetailedReportsRequest = exports.ListBulkDeploymentDetailedReportsRequest || (exports.ListBulkDeploymentDetailedReportsRequest = {}));
var ListBulkDeploymentDetailedReportsResponse;
(function (ListBulkDeploymentDetailedReportsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBulkDeploymentDetailedReportsResponse");
    }
    ListBulkDeploymentDetailedReportsResponse.isa = isa;
})(ListBulkDeploymentDetailedReportsResponse = exports.ListBulkDeploymentDetailedReportsResponse || (exports.ListBulkDeploymentDetailedReportsResponse = {}));
var ListBulkDeploymentsRequest;
(function (ListBulkDeploymentsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBulkDeploymentsRequest");
    }
    ListBulkDeploymentsRequest.isa = isa;
})(ListBulkDeploymentsRequest = exports.ListBulkDeploymentsRequest || (exports.ListBulkDeploymentsRequest = {}));
var ListBulkDeploymentsResponse;
(function (ListBulkDeploymentsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBulkDeploymentsResponse");
    }
    ListBulkDeploymentsResponse.isa = isa;
})(ListBulkDeploymentsResponse = exports.ListBulkDeploymentsResponse || (exports.ListBulkDeploymentsResponse = {}));
var ListConnectorDefinitionVersionsRequest;
(function (ListConnectorDefinitionVersionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListConnectorDefinitionVersionsRequest");
    }
    ListConnectorDefinitionVersionsRequest.isa = isa;
})(ListConnectorDefinitionVersionsRequest = exports.ListConnectorDefinitionVersionsRequest || (exports.ListConnectorDefinitionVersionsRequest = {}));
var ListConnectorDefinitionVersionsResponse;
(function (ListConnectorDefinitionVersionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListConnectorDefinitionVersionsResponse");
    }
    ListConnectorDefinitionVersionsResponse.isa = isa;
})(ListConnectorDefinitionVersionsResponse = exports.ListConnectorDefinitionVersionsResponse || (exports.ListConnectorDefinitionVersionsResponse = {}));
var ListConnectorDefinitionsRequest;
(function (ListConnectorDefinitionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListConnectorDefinitionsRequest");
    }
    ListConnectorDefinitionsRequest.isa = isa;
})(ListConnectorDefinitionsRequest = exports.ListConnectorDefinitionsRequest || (exports.ListConnectorDefinitionsRequest = {}));
var ListConnectorDefinitionsResponse;
(function (ListConnectorDefinitionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListConnectorDefinitionsResponse");
    }
    ListConnectorDefinitionsResponse.isa = isa;
})(ListConnectorDefinitionsResponse = exports.ListConnectorDefinitionsResponse || (exports.ListConnectorDefinitionsResponse = {}));
var ListCoreDefinitionVersionsRequest;
(function (ListCoreDefinitionVersionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCoreDefinitionVersionsRequest");
    }
    ListCoreDefinitionVersionsRequest.isa = isa;
})(ListCoreDefinitionVersionsRequest = exports.ListCoreDefinitionVersionsRequest || (exports.ListCoreDefinitionVersionsRequest = {}));
var ListCoreDefinitionVersionsResponse;
(function (ListCoreDefinitionVersionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCoreDefinitionVersionsResponse");
    }
    ListCoreDefinitionVersionsResponse.isa = isa;
})(ListCoreDefinitionVersionsResponse = exports.ListCoreDefinitionVersionsResponse || (exports.ListCoreDefinitionVersionsResponse = {}));
var ListCoreDefinitionsRequest;
(function (ListCoreDefinitionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCoreDefinitionsRequest");
    }
    ListCoreDefinitionsRequest.isa = isa;
})(ListCoreDefinitionsRequest = exports.ListCoreDefinitionsRequest || (exports.ListCoreDefinitionsRequest = {}));
var ListCoreDefinitionsResponse;
(function (ListCoreDefinitionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCoreDefinitionsResponse");
    }
    ListCoreDefinitionsResponse.isa = isa;
})(ListCoreDefinitionsResponse = exports.ListCoreDefinitionsResponse || (exports.ListCoreDefinitionsResponse = {}));
var ListDeploymentsRequest;
(function (ListDeploymentsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeploymentsRequest");
    }
    ListDeploymentsRequest.isa = isa;
})(ListDeploymentsRequest = exports.ListDeploymentsRequest || (exports.ListDeploymentsRequest = {}));
var ListDeploymentsResponse;
(function (ListDeploymentsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeploymentsResponse");
    }
    ListDeploymentsResponse.isa = isa;
})(ListDeploymentsResponse = exports.ListDeploymentsResponse || (exports.ListDeploymentsResponse = {}));
var ListDeviceDefinitionVersionsRequest;
(function (ListDeviceDefinitionVersionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeviceDefinitionVersionsRequest");
    }
    ListDeviceDefinitionVersionsRequest.isa = isa;
})(ListDeviceDefinitionVersionsRequest = exports.ListDeviceDefinitionVersionsRequest || (exports.ListDeviceDefinitionVersionsRequest = {}));
var ListDeviceDefinitionVersionsResponse;
(function (ListDeviceDefinitionVersionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeviceDefinitionVersionsResponse");
    }
    ListDeviceDefinitionVersionsResponse.isa = isa;
})(ListDeviceDefinitionVersionsResponse = exports.ListDeviceDefinitionVersionsResponse || (exports.ListDeviceDefinitionVersionsResponse = {}));
var ListDeviceDefinitionsRequest;
(function (ListDeviceDefinitionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeviceDefinitionsRequest");
    }
    ListDeviceDefinitionsRequest.isa = isa;
})(ListDeviceDefinitionsRequest = exports.ListDeviceDefinitionsRequest || (exports.ListDeviceDefinitionsRequest = {}));
var ListDeviceDefinitionsResponse;
(function (ListDeviceDefinitionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeviceDefinitionsResponse");
    }
    ListDeviceDefinitionsResponse.isa = isa;
})(ListDeviceDefinitionsResponse = exports.ListDeviceDefinitionsResponse || (exports.ListDeviceDefinitionsResponse = {}));
var ListFunctionDefinitionVersionsRequest;
(function (ListFunctionDefinitionVersionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListFunctionDefinitionVersionsRequest");
    }
    ListFunctionDefinitionVersionsRequest.isa = isa;
})(ListFunctionDefinitionVersionsRequest = exports.ListFunctionDefinitionVersionsRequest || (exports.ListFunctionDefinitionVersionsRequest = {}));
var ListFunctionDefinitionVersionsResponse;
(function (ListFunctionDefinitionVersionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListFunctionDefinitionVersionsResponse");
    }
    ListFunctionDefinitionVersionsResponse.isa = isa;
})(ListFunctionDefinitionVersionsResponse = exports.ListFunctionDefinitionVersionsResponse || (exports.ListFunctionDefinitionVersionsResponse = {}));
var ListFunctionDefinitionsRequest;
(function (ListFunctionDefinitionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListFunctionDefinitionsRequest");
    }
    ListFunctionDefinitionsRequest.isa = isa;
})(ListFunctionDefinitionsRequest = exports.ListFunctionDefinitionsRequest || (exports.ListFunctionDefinitionsRequest = {}));
var ListFunctionDefinitionsResponse;
(function (ListFunctionDefinitionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListFunctionDefinitionsResponse");
    }
    ListFunctionDefinitionsResponse.isa = isa;
})(ListFunctionDefinitionsResponse = exports.ListFunctionDefinitionsResponse || (exports.ListFunctionDefinitionsResponse = {}));
var ListGroupCertificateAuthoritiesRequest;
(function (ListGroupCertificateAuthoritiesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGroupCertificateAuthoritiesRequest");
    }
    ListGroupCertificateAuthoritiesRequest.isa = isa;
})(ListGroupCertificateAuthoritiesRequest = exports.ListGroupCertificateAuthoritiesRequest || (exports.ListGroupCertificateAuthoritiesRequest = {}));
var ListGroupCertificateAuthoritiesResponse;
(function (ListGroupCertificateAuthoritiesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGroupCertificateAuthoritiesResponse");
    }
    ListGroupCertificateAuthoritiesResponse.isa = isa;
})(ListGroupCertificateAuthoritiesResponse = exports.ListGroupCertificateAuthoritiesResponse || (exports.ListGroupCertificateAuthoritiesResponse = {}));
var ListGroupVersionsRequest;
(function (ListGroupVersionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGroupVersionsRequest");
    }
    ListGroupVersionsRequest.isa = isa;
})(ListGroupVersionsRequest = exports.ListGroupVersionsRequest || (exports.ListGroupVersionsRequest = {}));
var ListGroupVersionsResponse;
(function (ListGroupVersionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGroupVersionsResponse");
    }
    ListGroupVersionsResponse.isa = isa;
})(ListGroupVersionsResponse = exports.ListGroupVersionsResponse || (exports.ListGroupVersionsResponse = {}));
var ListGroupsRequest;
(function (ListGroupsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGroupsRequest");
    }
    ListGroupsRequest.isa = isa;
})(ListGroupsRequest = exports.ListGroupsRequest || (exports.ListGroupsRequest = {}));
var ListGroupsResponse;
(function (ListGroupsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGroupsResponse");
    }
    ListGroupsResponse.isa = isa;
})(ListGroupsResponse = exports.ListGroupsResponse || (exports.ListGroupsResponse = {}));
var ListLoggerDefinitionVersionsRequest;
(function (ListLoggerDefinitionVersionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLoggerDefinitionVersionsRequest");
    }
    ListLoggerDefinitionVersionsRequest.isa = isa;
})(ListLoggerDefinitionVersionsRequest = exports.ListLoggerDefinitionVersionsRequest || (exports.ListLoggerDefinitionVersionsRequest = {}));
var ListLoggerDefinitionVersionsResponse;
(function (ListLoggerDefinitionVersionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLoggerDefinitionVersionsResponse");
    }
    ListLoggerDefinitionVersionsResponse.isa = isa;
})(ListLoggerDefinitionVersionsResponse = exports.ListLoggerDefinitionVersionsResponse || (exports.ListLoggerDefinitionVersionsResponse = {}));
var ListLoggerDefinitionsRequest;
(function (ListLoggerDefinitionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLoggerDefinitionsRequest");
    }
    ListLoggerDefinitionsRequest.isa = isa;
})(ListLoggerDefinitionsRequest = exports.ListLoggerDefinitionsRequest || (exports.ListLoggerDefinitionsRequest = {}));
var ListLoggerDefinitionsResponse;
(function (ListLoggerDefinitionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListLoggerDefinitionsResponse");
    }
    ListLoggerDefinitionsResponse.isa = isa;
})(ListLoggerDefinitionsResponse = exports.ListLoggerDefinitionsResponse || (exports.ListLoggerDefinitionsResponse = {}));
var ListResourceDefinitionVersionsRequest;
(function (ListResourceDefinitionVersionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListResourceDefinitionVersionsRequest");
    }
    ListResourceDefinitionVersionsRequest.isa = isa;
})(ListResourceDefinitionVersionsRequest = exports.ListResourceDefinitionVersionsRequest || (exports.ListResourceDefinitionVersionsRequest = {}));
var ListResourceDefinitionVersionsResponse;
(function (ListResourceDefinitionVersionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListResourceDefinitionVersionsResponse");
    }
    ListResourceDefinitionVersionsResponse.isa = isa;
})(ListResourceDefinitionVersionsResponse = exports.ListResourceDefinitionVersionsResponse || (exports.ListResourceDefinitionVersionsResponse = {}));
var ListResourceDefinitionsRequest;
(function (ListResourceDefinitionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListResourceDefinitionsRequest");
    }
    ListResourceDefinitionsRequest.isa = isa;
})(ListResourceDefinitionsRequest = exports.ListResourceDefinitionsRequest || (exports.ListResourceDefinitionsRequest = {}));
var ListResourceDefinitionsResponse;
(function (ListResourceDefinitionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListResourceDefinitionsResponse");
    }
    ListResourceDefinitionsResponse.isa = isa;
})(ListResourceDefinitionsResponse = exports.ListResourceDefinitionsResponse || (exports.ListResourceDefinitionsResponse = {}));
var ListSubscriptionDefinitionVersionsRequest;
(function (ListSubscriptionDefinitionVersionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSubscriptionDefinitionVersionsRequest");
    }
    ListSubscriptionDefinitionVersionsRequest.isa = isa;
})(ListSubscriptionDefinitionVersionsRequest = exports.ListSubscriptionDefinitionVersionsRequest || (exports.ListSubscriptionDefinitionVersionsRequest = {}));
var ListSubscriptionDefinitionVersionsResponse;
(function (ListSubscriptionDefinitionVersionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSubscriptionDefinitionVersionsResponse");
    }
    ListSubscriptionDefinitionVersionsResponse.isa = isa;
})(ListSubscriptionDefinitionVersionsResponse = exports.ListSubscriptionDefinitionVersionsResponse || (exports.ListSubscriptionDefinitionVersionsResponse = {}));
var ListSubscriptionDefinitionsRequest;
(function (ListSubscriptionDefinitionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSubscriptionDefinitionsRequest");
    }
    ListSubscriptionDefinitionsRequest.isa = isa;
})(ListSubscriptionDefinitionsRequest = exports.ListSubscriptionDefinitionsRequest || (exports.ListSubscriptionDefinitionsRequest = {}));
var ListSubscriptionDefinitionsResponse;
(function (ListSubscriptionDefinitionsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSubscriptionDefinitionsResponse");
    }
    ListSubscriptionDefinitionsResponse.isa = isa;
})(ListSubscriptionDefinitionsResponse = exports.ListSubscriptionDefinitionsResponse || (exports.ListSubscriptionDefinitionsResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceRequest");
    }
    ListTagsForResourceRequest.isa = isa;
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceResponse");
    }
    ListTagsForResourceResponse.isa = isa;
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var LocalDeviceResourceData;
(function (LocalDeviceResourceData) {
    function isa(o) {
        return smithy_client_1.isa(o, "LocalDeviceResourceData");
    }
    LocalDeviceResourceData.isa = isa;
})(LocalDeviceResourceData = exports.LocalDeviceResourceData || (exports.LocalDeviceResourceData = {}));
var LocalVolumeResourceData;
(function (LocalVolumeResourceData) {
    function isa(o) {
        return smithy_client_1.isa(o, "LocalVolumeResourceData");
    }
    LocalVolumeResourceData.isa = isa;
})(LocalVolumeResourceData = exports.LocalVolumeResourceData || (exports.LocalVolumeResourceData = {}));
var Logger;
(function (Logger) {
    function isa(o) {
        return smithy_client_1.isa(o, "Logger");
    }
    Logger.isa = isa;
})(Logger = exports.Logger || (exports.Logger = {}));
var LoggerComponent;
(function (LoggerComponent) {
    LoggerComponent["GreengrassSystem"] = "GreengrassSystem";
    LoggerComponent["Lambda"] = "Lambda";
})(LoggerComponent = exports.LoggerComponent || (exports.LoggerComponent = {}));
var LoggerDefinitionVersion;
(function (LoggerDefinitionVersion) {
    function isa(o) {
        return smithy_client_1.isa(o, "LoggerDefinitionVersion");
    }
    LoggerDefinitionVersion.isa = isa;
})(LoggerDefinitionVersion = exports.LoggerDefinitionVersion || (exports.LoggerDefinitionVersion = {}));
var LoggerLevel;
(function (LoggerLevel) {
    LoggerLevel["DEBUG"] = "DEBUG";
    LoggerLevel["ERROR"] = "ERROR";
    LoggerLevel["FATAL"] = "FATAL";
    LoggerLevel["INFO"] = "INFO";
    LoggerLevel["WARN"] = "WARN";
})(LoggerLevel = exports.LoggerLevel || (exports.LoggerLevel = {}));
var LoggerType;
(function (LoggerType) {
    LoggerType["AWSCloudWatch"] = "AWSCloudWatch";
    LoggerType["FileSystem"] = "FileSystem";
})(LoggerType = exports.LoggerType || (exports.LoggerType = {}));
var Permission;
(function (Permission) {
    Permission["ro"] = "ro";
    Permission["rw"] = "rw";
})(Permission = exports.Permission || (exports.Permission = {}));
var ResetDeploymentsRequest;
(function (ResetDeploymentsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResetDeploymentsRequest");
    }
    ResetDeploymentsRequest.isa = isa;
})(ResetDeploymentsRequest = exports.ResetDeploymentsRequest || (exports.ResetDeploymentsRequest = {}));
var ResetDeploymentsResponse;
(function (ResetDeploymentsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResetDeploymentsResponse");
    }
    ResetDeploymentsResponse.isa = isa;
})(ResetDeploymentsResponse = exports.ResetDeploymentsResponse || (exports.ResetDeploymentsResponse = {}));
var Resource;
(function (Resource) {
    function isa(o) {
        return smithy_client_1.isa(o, "Resource");
    }
    Resource.isa = isa;
})(Resource = exports.Resource || (exports.Resource = {}));
var ResourceAccessPolicy;
(function (ResourceAccessPolicy) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceAccessPolicy");
    }
    ResourceAccessPolicy.isa = isa;
})(ResourceAccessPolicy = exports.ResourceAccessPolicy || (exports.ResourceAccessPolicy = {}));
var ResourceDataContainer;
(function (ResourceDataContainer) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceDataContainer");
    }
    ResourceDataContainer.isa = isa;
})(ResourceDataContainer = exports.ResourceDataContainer || (exports.ResourceDataContainer = {}));
var ResourceDefinitionVersion;
(function (ResourceDefinitionVersion) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceDefinitionVersion");
    }
    ResourceDefinitionVersion.isa = isa;
})(ResourceDefinitionVersion = exports.ResourceDefinitionVersion || (exports.ResourceDefinitionVersion = {}));
var ResourceDownloadOwnerSetting;
(function (ResourceDownloadOwnerSetting) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceDownloadOwnerSetting");
    }
    ResourceDownloadOwnerSetting.isa = isa;
})(ResourceDownloadOwnerSetting = exports.ResourceDownloadOwnerSetting || (exports.ResourceDownloadOwnerSetting = {}));
var S3MachineLearningModelResourceData;
(function (S3MachineLearningModelResourceData) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3MachineLearningModelResourceData");
    }
    S3MachineLearningModelResourceData.isa = isa;
})(S3MachineLearningModelResourceData = exports.S3MachineLearningModelResourceData || (exports.S3MachineLearningModelResourceData = {}));
var SageMakerMachineLearningModelResourceData;
(function (SageMakerMachineLearningModelResourceData) {
    function isa(o) {
        return smithy_client_1.isa(o, "SageMakerMachineLearningModelResourceData");
    }
    SageMakerMachineLearningModelResourceData.isa = isa;
})(SageMakerMachineLearningModelResourceData = exports.SageMakerMachineLearningModelResourceData || (exports.SageMakerMachineLearningModelResourceData = {}));
var SecretsManagerSecretResourceData;
(function (SecretsManagerSecretResourceData) {
    function isa(o) {
        return smithy_client_1.isa(o, "SecretsManagerSecretResourceData");
    }
    SecretsManagerSecretResourceData.isa = isa;
})(SecretsManagerSecretResourceData = exports.SecretsManagerSecretResourceData || (exports.SecretsManagerSecretResourceData = {}));
var SoftwareToUpdate;
(function (SoftwareToUpdate) {
    SoftwareToUpdate["core"] = "core";
    SoftwareToUpdate["ota_agent"] = "ota_agent";
})(SoftwareToUpdate = exports.SoftwareToUpdate || (exports.SoftwareToUpdate = {}));
var StartBulkDeploymentRequest;
(function (StartBulkDeploymentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartBulkDeploymentRequest");
    }
    StartBulkDeploymentRequest.isa = isa;
})(StartBulkDeploymentRequest = exports.StartBulkDeploymentRequest || (exports.StartBulkDeploymentRequest = {}));
var StartBulkDeploymentResponse;
(function (StartBulkDeploymentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartBulkDeploymentResponse");
    }
    StartBulkDeploymentResponse.isa = isa;
})(StartBulkDeploymentResponse = exports.StartBulkDeploymentResponse || (exports.StartBulkDeploymentResponse = {}));
var StopBulkDeploymentRequest;
(function (StopBulkDeploymentRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopBulkDeploymentRequest");
    }
    StopBulkDeploymentRequest.isa = isa;
})(StopBulkDeploymentRequest = exports.StopBulkDeploymentRequest || (exports.StopBulkDeploymentRequest = {}));
var StopBulkDeploymentResponse;
(function (StopBulkDeploymentResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopBulkDeploymentResponse");
    }
    StopBulkDeploymentResponse.isa = isa;
})(StopBulkDeploymentResponse = exports.StopBulkDeploymentResponse || (exports.StopBulkDeploymentResponse = {}));
var Subscription;
(function (Subscription) {
    function isa(o) {
        return smithy_client_1.isa(o, "Subscription");
    }
    Subscription.isa = isa;
})(Subscription = exports.Subscription || (exports.Subscription = {}));
var SubscriptionDefinitionVersion;
(function (SubscriptionDefinitionVersion) {
    function isa(o) {
        return smithy_client_1.isa(o, "SubscriptionDefinitionVersion");
    }
    SubscriptionDefinitionVersion.isa = isa;
})(SubscriptionDefinitionVersion = exports.SubscriptionDefinitionVersion || (exports.SubscriptionDefinitionVersion = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceRequest");
    }
    TagResourceRequest.isa = isa;
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceRequest");
    }
    UntagResourceRequest.isa = isa;
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UpdateAgentLogLevel;
(function (UpdateAgentLogLevel) {
    UpdateAgentLogLevel["DEBUG"] = "DEBUG";
    UpdateAgentLogLevel["ERROR"] = "ERROR";
    UpdateAgentLogLevel["FATAL"] = "FATAL";
    UpdateAgentLogLevel["INFO"] = "INFO";
    UpdateAgentLogLevel["NONE"] = "NONE";
    UpdateAgentLogLevel["TRACE"] = "TRACE";
    UpdateAgentLogLevel["VERBOSE"] = "VERBOSE";
    UpdateAgentLogLevel["WARN"] = "WARN";
})(UpdateAgentLogLevel = exports.UpdateAgentLogLevel || (exports.UpdateAgentLogLevel = {}));
var UpdateConnectivityInfoRequest;
(function (UpdateConnectivityInfoRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateConnectivityInfoRequest");
    }
    UpdateConnectivityInfoRequest.isa = isa;
})(UpdateConnectivityInfoRequest = exports.UpdateConnectivityInfoRequest || (exports.UpdateConnectivityInfoRequest = {}));
var UpdateConnectivityInfoResponse;
(function (UpdateConnectivityInfoResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateConnectivityInfoResponse");
    }
    UpdateConnectivityInfoResponse.isa = isa;
})(UpdateConnectivityInfoResponse = exports.UpdateConnectivityInfoResponse || (exports.UpdateConnectivityInfoResponse = {}));
var UpdateConnectorDefinitionRequest;
(function (UpdateConnectorDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateConnectorDefinitionRequest");
    }
    UpdateConnectorDefinitionRequest.isa = isa;
})(UpdateConnectorDefinitionRequest = exports.UpdateConnectorDefinitionRequest || (exports.UpdateConnectorDefinitionRequest = {}));
var UpdateConnectorDefinitionResponse;
(function (UpdateConnectorDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateConnectorDefinitionResponse");
    }
    UpdateConnectorDefinitionResponse.isa = isa;
})(UpdateConnectorDefinitionResponse = exports.UpdateConnectorDefinitionResponse || (exports.UpdateConnectorDefinitionResponse = {}));
var UpdateCoreDefinitionRequest;
(function (UpdateCoreDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateCoreDefinitionRequest");
    }
    UpdateCoreDefinitionRequest.isa = isa;
})(UpdateCoreDefinitionRequest = exports.UpdateCoreDefinitionRequest || (exports.UpdateCoreDefinitionRequest = {}));
var UpdateCoreDefinitionResponse;
(function (UpdateCoreDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateCoreDefinitionResponse");
    }
    UpdateCoreDefinitionResponse.isa = isa;
})(UpdateCoreDefinitionResponse = exports.UpdateCoreDefinitionResponse || (exports.UpdateCoreDefinitionResponse = {}));
var UpdateDeviceDefinitionRequest;
(function (UpdateDeviceDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDeviceDefinitionRequest");
    }
    UpdateDeviceDefinitionRequest.isa = isa;
})(UpdateDeviceDefinitionRequest = exports.UpdateDeviceDefinitionRequest || (exports.UpdateDeviceDefinitionRequest = {}));
var UpdateDeviceDefinitionResponse;
(function (UpdateDeviceDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDeviceDefinitionResponse");
    }
    UpdateDeviceDefinitionResponse.isa = isa;
})(UpdateDeviceDefinitionResponse = exports.UpdateDeviceDefinitionResponse || (exports.UpdateDeviceDefinitionResponse = {}));
var UpdateFunctionDefinitionRequest;
(function (UpdateFunctionDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateFunctionDefinitionRequest");
    }
    UpdateFunctionDefinitionRequest.isa = isa;
})(UpdateFunctionDefinitionRequest = exports.UpdateFunctionDefinitionRequest || (exports.UpdateFunctionDefinitionRequest = {}));
var UpdateFunctionDefinitionResponse;
(function (UpdateFunctionDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateFunctionDefinitionResponse");
    }
    UpdateFunctionDefinitionResponse.isa = isa;
})(UpdateFunctionDefinitionResponse = exports.UpdateFunctionDefinitionResponse || (exports.UpdateFunctionDefinitionResponse = {}));
var UpdateGroupCertificateConfigurationRequest;
(function (UpdateGroupCertificateConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGroupCertificateConfigurationRequest");
    }
    UpdateGroupCertificateConfigurationRequest.isa = isa;
})(UpdateGroupCertificateConfigurationRequest = exports.UpdateGroupCertificateConfigurationRequest || (exports.UpdateGroupCertificateConfigurationRequest = {}));
var UpdateGroupCertificateConfigurationResponse;
(function (UpdateGroupCertificateConfigurationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGroupCertificateConfigurationResponse");
    }
    UpdateGroupCertificateConfigurationResponse.isa = isa;
})(UpdateGroupCertificateConfigurationResponse = exports.UpdateGroupCertificateConfigurationResponse || (exports.UpdateGroupCertificateConfigurationResponse = {}));
var UpdateGroupRequest;
(function (UpdateGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGroupRequest");
    }
    UpdateGroupRequest.isa = isa;
})(UpdateGroupRequest = exports.UpdateGroupRequest || (exports.UpdateGroupRequest = {}));
var UpdateGroupResponse;
(function (UpdateGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateGroupResponse");
    }
    UpdateGroupResponse.isa = isa;
})(UpdateGroupResponse = exports.UpdateGroupResponse || (exports.UpdateGroupResponse = {}));
var UpdateLoggerDefinitionRequest;
(function (UpdateLoggerDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateLoggerDefinitionRequest");
    }
    UpdateLoggerDefinitionRequest.isa = isa;
})(UpdateLoggerDefinitionRequest = exports.UpdateLoggerDefinitionRequest || (exports.UpdateLoggerDefinitionRequest = {}));
var UpdateLoggerDefinitionResponse;
(function (UpdateLoggerDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateLoggerDefinitionResponse");
    }
    UpdateLoggerDefinitionResponse.isa = isa;
})(UpdateLoggerDefinitionResponse = exports.UpdateLoggerDefinitionResponse || (exports.UpdateLoggerDefinitionResponse = {}));
var UpdateResourceDefinitionRequest;
(function (UpdateResourceDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateResourceDefinitionRequest");
    }
    UpdateResourceDefinitionRequest.isa = isa;
})(UpdateResourceDefinitionRequest = exports.UpdateResourceDefinitionRequest || (exports.UpdateResourceDefinitionRequest = {}));
var UpdateResourceDefinitionResponse;
(function (UpdateResourceDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateResourceDefinitionResponse");
    }
    UpdateResourceDefinitionResponse.isa = isa;
})(UpdateResourceDefinitionResponse = exports.UpdateResourceDefinitionResponse || (exports.UpdateResourceDefinitionResponse = {}));
var UpdateSubscriptionDefinitionRequest;
(function (UpdateSubscriptionDefinitionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSubscriptionDefinitionRequest");
    }
    UpdateSubscriptionDefinitionRequest.isa = isa;
})(UpdateSubscriptionDefinitionRequest = exports.UpdateSubscriptionDefinitionRequest || (exports.UpdateSubscriptionDefinitionRequest = {}));
var UpdateSubscriptionDefinitionResponse;
(function (UpdateSubscriptionDefinitionResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSubscriptionDefinitionResponse");
    }
    UpdateSubscriptionDefinitionResponse.isa = isa;
})(UpdateSubscriptionDefinitionResponse = exports.UpdateSubscriptionDefinitionResponse || (exports.UpdateSubscriptionDefinitionResponse = {}));
var UpdateTargetsArchitecture;
(function (UpdateTargetsArchitecture) {
    UpdateTargetsArchitecture["aarch64"] = "aarch64";
    UpdateTargetsArchitecture["armv6l"] = "armv6l";
    UpdateTargetsArchitecture["armv7l"] = "armv7l";
    UpdateTargetsArchitecture["x86_64"] = "x86_64";
})(UpdateTargetsArchitecture = exports.UpdateTargetsArchitecture || (exports.UpdateTargetsArchitecture = {}));
var UpdateTargetsOperatingSystem;
(function (UpdateTargetsOperatingSystem) {
    UpdateTargetsOperatingSystem["amazon_linux"] = "amazon_linux";
    UpdateTargetsOperatingSystem["openwrt"] = "openwrt";
    UpdateTargetsOperatingSystem["raspbian"] = "raspbian";
    UpdateTargetsOperatingSystem["ubuntu"] = "ubuntu";
})(UpdateTargetsOperatingSystem = exports.UpdateTargetsOperatingSystem || (exports.UpdateTargetsOperatingSystem = {}));
var VersionInformation;
(function (VersionInformation) {
    function isa(o) {
        return smithy_client_1.isa(o, "VersionInformation");
    }
    VersionInformation.isa = isa;
})(VersionInformation = exports.VersionInformation || (exports.VersionInformation = {}));
//# sourceMappingURL=index.js.map