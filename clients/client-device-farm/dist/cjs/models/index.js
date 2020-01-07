"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccountSettings;
(function (AccountSettings) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccountSettings");
    }
    AccountSettings.isa = isa;
})(AccountSettings = exports.AccountSettings || (exports.AccountSettings = {}));
var ArgumentException;
(function (ArgumentException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ArgumentException");
    }
    ArgumentException.isa = isa;
})(ArgumentException = exports.ArgumentException || (exports.ArgumentException = {}));
var Artifact;
(function (Artifact) {
    function isa(o) {
        return smithy_client_1.isa(o, "Artifact");
    }
    Artifact.isa = isa;
})(Artifact = exports.Artifact || (exports.Artifact = {}));
var ArtifactCategory;
(function (ArtifactCategory) {
    ArtifactCategory["FILE"] = "FILE";
    ArtifactCategory["LOG"] = "LOG";
    ArtifactCategory["SCREENSHOT"] = "SCREENSHOT";
})(ArtifactCategory = exports.ArtifactCategory || (exports.ArtifactCategory = {}));
var ArtifactType;
(function (ArtifactType) {
    ArtifactType["APPIUM_JAVA_OUTPUT"] = "APPIUM_JAVA_OUTPUT";
    ArtifactType["APPIUM_JAVA_XML_OUTPUT"] = "APPIUM_JAVA_XML_OUTPUT";
    ArtifactType["APPIUM_PYTHON_OUTPUT"] = "APPIUM_PYTHON_OUTPUT";
    ArtifactType["APPIUM_PYTHON_XML_OUTPUT"] = "APPIUM_PYTHON_XML_OUTPUT";
    ArtifactType["APPIUM_SERVER_OUTPUT"] = "APPIUM_SERVER_OUTPUT";
    ArtifactType["APPLICATION_CRASH_REPORT"] = "APPLICATION_CRASH_REPORT";
    ArtifactType["AUTOMATION_OUTPUT"] = "AUTOMATION_OUTPUT";
    ArtifactType["CALABASH_JAVA_XML_OUTPUT"] = "CALABASH_JAVA_XML_OUTPUT";
    ArtifactType["CALABASH_JSON_OUTPUT"] = "CALABASH_JSON_OUTPUT";
    ArtifactType["CALABASH_PRETTY_OUTPUT"] = "CALABASH_PRETTY_OUTPUT";
    ArtifactType["CALABASH_STANDARD_OUTPUT"] = "CALABASH_STANDARD_OUTPUT";
    ArtifactType["CUSTOMER_ARTIFACT"] = "CUSTOMER_ARTIFACT";
    ArtifactType["CUSTOMER_ARTIFACT_LOG"] = "CUSTOMER_ARTIFACT_LOG";
    ArtifactType["DEVICE_LOG"] = "DEVICE_LOG";
    ArtifactType["EXERCISER_MONKEY_OUTPUT"] = "EXERCISER_MONKEY_OUTPUT";
    ArtifactType["EXPLORER_EVENT_LOG"] = "EXPLORER_EVENT_LOG";
    ArtifactType["EXPLORER_SUMMARY_LOG"] = "EXPLORER_SUMMARY_LOG";
    ArtifactType["INSTRUMENTATION_OUTPUT"] = "INSTRUMENTATION_OUTPUT";
    ArtifactType["MESSAGE_LOG"] = "MESSAGE_LOG";
    ArtifactType["RESULT_LOG"] = "RESULT_LOG";
    ArtifactType["SCREENSHOT"] = "SCREENSHOT";
    ArtifactType["SERVICE_LOG"] = "SERVICE_LOG";
    ArtifactType["TESTSPEC_OUTPUT"] = "TESTSPEC_OUTPUT";
    ArtifactType["UNKNOWN"] = "UNKNOWN";
    ArtifactType["VIDEO"] = "VIDEO";
    ArtifactType["VIDEO_LOG"] = "VIDEO_LOG";
    ArtifactType["WEBKIT_LOG"] = "WEBKIT_LOG";
    ArtifactType["XCTEST_LOG"] = "XCTEST_LOG";
})(ArtifactType = exports.ArtifactType || (exports.ArtifactType = {}));
var BillingMethod;
(function (BillingMethod) {
    BillingMethod["METERED"] = "METERED";
    BillingMethod["UNMETERED"] = "UNMETERED";
})(BillingMethod = exports.BillingMethod || (exports.BillingMethod = {}));
var CPU;
(function (CPU) {
    function isa(o) {
        return smithy_client_1.isa(o, "CPU");
    }
    CPU.isa = isa;
})(CPU = exports.CPU || (exports.CPU = {}));
var CannotDeleteException;
(function (CannotDeleteException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CannotDeleteException");
    }
    CannotDeleteException.isa = isa;
})(CannotDeleteException = exports.CannotDeleteException || (exports.CannotDeleteException = {}));
var Counters;
(function (Counters) {
    function isa(o) {
        return smithy_client_1.isa(o, "Counters");
    }
    Counters.isa = isa;
})(Counters = exports.Counters || (exports.Counters = {}));
var CreateDevicePoolRequest;
(function (CreateDevicePoolRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDevicePoolRequest");
    }
    CreateDevicePoolRequest.isa = isa;
})(CreateDevicePoolRequest = exports.CreateDevicePoolRequest || (exports.CreateDevicePoolRequest = {}));
var CreateDevicePoolResult;
(function (CreateDevicePoolResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDevicePoolResult");
    }
    CreateDevicePoolResult.isa = isa;
})(CreateDevicePoolResult = exports.CreateDevicePoolResult || (exports.CreateDevicePoolResult = {}));
var CreateInstanceProfileRequest;
(function (CreateInstanceProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateInstanceProfileRequest");
    }
    CreateInstanceProfileRequest.isa = isa;
})(CreateInstanceProfileRequest = exports.CreateInstanceProfileRequest || (exports.CreateInstanceProfileRequest = {}));
var CreateInstanceProfileResult;
(function (CreateInstanceProfileResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateInstanceProfileResult");
    }
    CreateInstanceProfileResult.isa = isa;
})(CreateInstanceProfileResult = exports.CreateInstanceProfileResult || (exports.CreateInstanceProfileResult = {}));
var CreateNetworkProfileRequest;
(function (CreateNetworkProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateNetworkProfileRequest");
    }
    CreateNetworkProfileRequest.isa = isa;
})(CreateNetworkProfileRequest = exports.CreateNetworkProfileRequest || (exports.CreateNetworkProfileRequest = {}));
var CreateNetworkProfileResult;
(function (CreateNetworkProfileResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateNetworkProfileResult");
    }
    CreateNetworkProfileResult.isa = isa;
})(CreateNetworkProfileResult = exports.CreateNetworkProfileResult || (exports.CreateNetworkProfileResult = {}));
var CreateProjectRequest;
(function (CreateProjectRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateProjectRequest");
    }
    CreateProjectRequest.isa = isa;
})(CreateProjectRequest = exports.CreateProjectRequest || (exports.CreateProjectRequest = {}));
var CreateProjectResult;
(function (CreateProjectResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateProjectResult");
    }
    CreateProjectResult.isa = isa;
})(CreateProjectResult = exports.CreateProjectResult || (exports.CreateProjectResult = {}));
var CreateRemoteAccessSessionConfiguration;
(function (CreateRemoteAccessSessionConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRemoteAccessSessionConfiguration");
    }
    CreateRemoteAccessSessionConfiguration.isa = isa;
})(CreateRemoteAccessSessionConfiguration = exports.CreateRemoteAccessSessionConfiguration || (exports.CreateRemoteAccessSessionConfiguration = {}));
var CreateRemoteAccessSessionRequest;
(function (CreateRemoteAccessSessionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRemoteAccessSessionRequest");
    }
    CreateRemoteAccessSessionRequest.isa = isa;
})(CreateRemoteAccessSessionRequest = exports.CreateRemoteAccessSessionRequest || (exports.CreateRemoteAccessSessionRequest = {}));
var CreateRemoteAccessSessionResult;
(function (CreateRemoteAccessSessionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateRemoteAccessSessionResult");
    }
    CreateRemoteAccessSessionResult.isa = isa;
})(CreateRemoteAccessSessionResult = exports.CreateRemoteAccessSessionResult || (exports.CreateRemoteAccessSessionResult = {}));
var CreateTestGridProjectRequest;
(function (CreateTestGridProjectRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTestGridProjectRequest");
    }
    CreateTestGridProjectRequest.isa = isa;
})(CreateTestGridProjectRequest = exports.CreateTestGridProjectRequest || (exports.CreateTestGridProjectRequest = {}));
var CreateTestGridProjectResult;
(function (CreateTestGridProjectResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTestGridProjectResult");
    }
    CreateTestGridProjectResult.isa = isa;
})(CreateTestGridProjectResult = exports.CreateTestGridProjectResult || (exports.CreateTestGridProjectResult = {}));
var CreateTestGridUrlRequest;
(function (CreateTestGridUrlRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTestGridUrlRequest");
    }
    CreateTestGridUrlRequest.isa = isa;
})(CreateTestGridUrlRequest = exports.CreateTestGridUrlRequest || (exports.CreateTestGridUrlRequest = {}));
var CreateTestGridUrlResult;
(function (CreateTestGridUrlResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateTestGridUrlResult");
    }
    CreateTestGridUrlResult.isa = isa;
})(CreateTestGridUrlResult = exports.CreateTestGridUrlResult || (exports.CreateTestGridUrlResult = {}));
var CreateUploadRequest;
(function (CreateUploadRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUploadRequest");
    }
    CreateUploadRequest.isa = isa;
})(CreateUploadRequest = exports.CreateUploadRequest || (exports.CreateUploadRequest = {}));
var CreateUploadResult;
(function (CreateUploadResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateUploadResult");
    }
    CreateUploadResult.isa = isa;
})(CreateUploadResult = exports.CreateUploadResult || (exports.CreateUploadResult = {}));
var CreateVPCEConfigurationRequest;
(function (CreateVPCEConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVPCEConfigurationRequest");
    }
    CreateVPCEConfigurationRequest.isa = isa;
})(CreateVPCEConfigurationRequest = exports.CreateVPCEConfigurationRequest || (exports.CreateVPCEConfigurationRequest = {}));
var CreateVPCEConfigurationResult;
(function (CreateVPCEConfigurationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateVPCEConfigurationResult");
    }
    CreateVPCEConfigurationResult.isa = isa;
})(CreateVPCEConfigurationResult = exports.CreateVPCEConfigurationResult || (exports.CreateVPCEConfigurationResult = {}));
var CurrencyCode;
(function (CurrencyCode) {
    CurrencyCode["USD"] = "USD";
})(CurrencyCode = exports.CurrencyCode || (exports.CurrencyCode = {}));
var CustomerArtifactPaths;
(function (CustomerArtifactPaths) {
    function isa(o) {
        return smithy_client_1.isa(o, "CustomerArtifactPaths");
    }
    CustomerArtifactPaths.isa = isa;
})(CustomerArtifactPaths = exports.CustomerArtifactPaths || (exports.CustomerArtifactPaths = {}));
var DeleteDevicePoolRequest;
(function (DeleteDevicePoolRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDevicePoolRequest");
    }
    DeleteDevicePoolRequest.isa = isa;
})(DeleteDevicePoolRequest = exports.DeleteDevicePoolRequest || (exports.DeleteDevicePoolRequest = {}));
var DeleteDevicePoolResult;
(function (DeleteDevicePoolResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDevicePoolResult");
    }
    DeleteDevicePoolResult.isa = isa;
})(DeleteDevicePoolResult = exports.DeleteDevicePoolResult || (exports.DeleteDevicePoolResult = {}));
var DeleteInstanceProfileRequest;
(function (DeleteInstanceProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteInstanceProfileRequest");
    }
    DeleteInstanceProfileRequest.isa = isa;
})(DeleteInstanceProfileRequest = exports.DeleteInstanceProfileRequest || (exports.DeleteInstanceProfileRequest = {}));
var DeleteInstanceProfileResult;
(function (DeleteInstanceProfileResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteInstanceProfileResult");
    }
    DeleteInstanceProfileResult.isa = isa;
})(DeleteInstanceProfileResult = exports.DeleteInstanceProfileResult || (exports.DeleteInstanceProfileResult = {}));
var DeleteNetworkProfileRequest;
(function (DeleteNetworkProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteNetworkProfileRequest");
    }
    DeleteNetworkProfileRequest.isa = isa;
})(DeleteNetworkProfileRequest = exports.DeleteNetworkProfileRequest || (exports.DeleteNetworkProfileRequest = {}));
var DeleteNetworkProfileResult;
(function (DeleteNetworkProfileResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteNetworkProfileResult");
    }
    DeleteNetworkProfileResult.isa = isa;
})(DeleteNetworkProfileResult = exports.DeleteNetworkProfileResult || (exports.DeleteNetworkProfileResult = {}));
var DeleteProjectRequest;
(function (DeleteProjectRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteProjectRequest");
    }
    DeleteProjectRequest.isa = isa;
})(DeleteProjectRequest = exports.DeleteProjectRequest || (exports.DeleteProjectRequest = {}));
var DeleteProjectResult;
(function (DeleteProjectResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteProjectResult");
    }
    DeleteProjectResult.isa = isa;
})(DeleteProjectResult = exports.DeleteProjectResult || (exports.DeleteProjectResult = {}));
var DeleteRemoteAccessSessionRequest;
(function (DeleteRemoteAccessSessionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRemoteAccessSessionRequest");
    }
    DeleteRemoteAccessSessionRequest.isa = isa;
})(DeleteRemoteAccessSessionRequest = exports.DeleteRemoteAccessSessionRequest || (exports.DeleteRemoteAccessSessionRequest = {}));
var DeleteRemoteAccessSessionResult;
(function (DeleteRemoteAccessSessionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRemoteAccessSessionResult");
    }
    DeleteRemoteAccessSessionResult.isa = isa;
})(DeleteRemoteAccessSessionResult = exports.DeleteRemoteAccessSessionResult || (exports.DeleteRemoteAccessSessionResult = {}));
var DeleteRunRequest;
(function (DeleteRunRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRunRequest");
    }
    DeleteRunRequest.isa = isa;
})(DeleteRunRequest = exports.DeleteRunRequest || (exports.DeleteRunRequest = {}));
var DeleteRunResult;
(function (DeleteRunResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRunResult");
    }
    DeleteRunResult.isa = isa;
})(DeleteRunResult = exports.DeleteRunResult || (exports.DeleteRunResult = {}));
var DeleteTestGridProjectRequest;
(function (DeleteTestGridProjectRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTestGridProjectRequest");
    }
    DeleteTestGridProjectRequest.isa = isa;
})(DeleteTestGridProjectRequest = exports.DeleteTestGridProjectRequest || (exports.DeleteTestGridProjectRequest = {}));
var DeleteTestGridProjectResult;
(function (DeleteTestGridProjectResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteTestGridProjectResult");
    }
    DeleteTestGridProjectResult.isa = isa;
})(DeleteTestGridProjectResult = exports.DeleteTestGridProjectResult || (exports.DeleteTestGridProjectResult = {}));
var DeleteUploadRequest;
(function (DeleteUploadRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUploadRequest");
    }
    DeleteUploadRequest.isa = isa;
})(DeleteUploadRequest = exports.DeleteUploadRequest || (exports.DeleteUploadRequest = {}));
var DeleteUploadResult;
(function (DeleteUploadResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteUploadResult");
    }
    DeleteUploadResult.isa = isa;
})(DeleteUploadResult = exports.DeleteUploadResult || (exports.DeleteUploadResult = {}));
var DeleteVPCEConfigurationRequest;
(function (DeleteVPCEConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteVPCEConfigurationRequest");
    }
    DeleteVPCEConfigurationRequest.isa = isa;
})(DeleteVPCEConfigurationRequest = exports.DeleteVPCEConfigurationRequest || (exports.DeleteVPCEConfigurationRequest = {}));
var DeleteVPCEConfigurationResult;
(function (DeleteVPCEConfigurationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteVPCEConfigurationResult");
    }
    DeleteVPCEConfigurationResult.isa = isa;
})(DeleteVPCEConfigurationResult = exports.DeleteVPCEConfigurationResult || (exports.DeleteVPCEConfigurationResult = {}));
var Device;
(function (Device) {
    function isa(o) {
        return smithy_client_1.isa(o, "Device");
    }
    Device.isa = isa;
})(Device = exports.Device || (exports.Device = {}));
var DeviceAttribute;
(function (DeviceAttribute) {
    DeviceAttribute["APPIUM_VERSION"] = "APPIUM_VERSION";
    DeviceAttribute["ARN"] = "ARN";
    DeviceAttribute["AVAILABILITY"] = "AVAILABILITY";
    DeviceAttribute["FLEET_TYPE"] = "FLEET_TYPE";
    DeviceAttribute["FORM_FACTOR"] = "FORM_FACTOR";
    DeviceAttribute["INSTANCE_ARN"] = "INSTANCE_ARN";
    DeviceAttribute["INSTANCE_LABELS"] = "INSTANCE_LABELS";
    DeviceAttribute["MANUFACTURER"] = "MANUFACTURER";
    DeviceAttribute["MODEL"] = "MODEL";
    DeviceAttribute["OS_VERSION"] = "OS_VERSION";
    DeviceAttribute["PLATFORM"] = "PLATFORM";
    DeviceAttribute["REMOTE_ACCESS_ENABLED"] = "REMOTE_ACCESS_ENABLED";
    DeviceAttribute["REMOTE_DEBUG_ENABLED"] = "REMOTE_DEBUG_ENABLED";
})(DeviceAttribute = exports.DeviceAttribute || (exports.DeviceAttribute = {}));
var DeviceAvailability;
(function (DeviceAvailability) {
    DeviceAvailability["AVAILABLE"] = "AVAILABLE";
    DeviceAvailability["BUSY"] = "BUSY";
    DeviceAvailability["HIGHLY_AVAILABLE"] = "HIGHLY_AVAILABLE";
    DeviceAvailability["TEMPORARY_NOT_AVAILABLE"] = "TEMPORARY_NOT_AVAILABLE";
})(DeviceAvailability = exports.DeviceAvailability || (exports.DeviceAvailability = {}));
var DeviceFilter;
(function (DeviceFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeviceFilter");
    }
    DeviceFilter.isa = isa;
})(DeviceFilter = exports.DeviceFilter || (exports.DeviceFilter = {}));
var DeviceFilterAttribute;
(function (DeviceFilterAttribute) {
    DeviceFilterAttribute["ARN"] = "ARN";
    DeviceFilterAttribute["AVAILABILITY"] = "AVAILABILITY";
    DeviceFilterAttribute["FLEET_TYPE"] = "FLEET_TYPE";
    DeviceFilterAttribute["FORM_FACTOR"] = "FORM_FACTOR";
    DeviceFilterAttribute["INSTANCE_ARN"] = "INSTANCE_ARN";
    DeviceFilterAttribute["INSTANCE_LABELS"] = "INSTANCE_LABELS";
    DeviceFilterAttribute["MANUFACTURER"] = "MANUFACTURER";
    DeviceFilterAttribute["MODEL"] = "MODEL";
    DeviceFilterAttribute["OS_VERSION"] = "OS_VERSION";
    DeviceFilterAttribute["PLATFORM"] = "PLATFORM";
    DeviceFilterAttribute["REMOTE_ACCESS_ENABLED"] = "REMOTE_ACCESS_ENABLED";
    DeviceFilterAttribute["REMOTE_DEBUG_ENABLED"] = "REMOTE_DEBUG_ENABLED";
})(DeviceFilterAttribute = exports.DeviceFilterAttribute || (exports.DeviceFilterAttribute = {}));
var DeviceFormFactor;
(function (DeviceFormFactor) {
    DeviceFormFactor["PHONE"] = "PHONE";
    DeviceFormFactor["TABLET"] = "TABLET";
})(DeviceFormFactor = exports.DeviceFormFactor || (exports.DeviceFormFactor = {}));
var DeviceInstance;
(function (DeviceInstance) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeviceInstance");
    }
    DeviceInstance.isa = isa;
})(DeviceInstance = exports.DeviceInstance || (exports.DeviceInstance = {}));
var DeviceMinutes;
(function (DeviceMinutes) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeviceMinutes");
    }
    DeviceMinutes.isa = isa;
})(DeviceMinutes = exports.DeviceMinutes || (exports.DeviceMinutes = {}));
var DevicePlatform;
(function (DevicePlatform) {
    DevicePlatform["ANDROID"] = "ANDROID";
    DevicePlatform["IOS"] = "IOS";
})(DevicePlatform = exports.DevicePlatform || (exports.DevicePlatform = {}));
var DevicePool;
(function (DevicePool) {
    function isa(o) {
        return smithy_client_1.isa(o, "DevicePool");
    }
    DevicePool.isa = isa;
})(DevicePool = exports.DevicePool || (exports.DevicePool = {}));
var DevicePoolCompatibilityResult;
(function (DevicePoolCompatibilityResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DevicePoolCompatibilityResult");
    }
    DevicePoolCompatibilityResult.isa = isa;
})(DevicePoolCompatibilityResult = exports.DevicePoolCompatibilityResult || (exports.DevicePoolCompatibilityResult = {}));
var DevicePoolType;
(function (DevicePoolType) {
    DevicePoolType["CURATED"] = "CURATED";
    DevicePoolType["PRIVATE"] = "PRIVATE";
})(DevicePoolType = exports.DevicePoolType || (exports.DevicePoolType = {}));
var DeviceSelectionConfiguration;
(function (DeviceSelectionConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeviceSelectionConfiguration");
    }
    DeviceSelectionConfiguration.isa = isa;
})(DeviceSelectionConfiguration = exports.DeviceSelectionConfiguration || (exports.DeviceSelectionConfiguration = {}));
var DeviceSelectionResult;
(function (DeviceSelectionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeviceSelectionResult");
    }
    DeviceSelectionResult.isa = isa;
})(DeviceSelectionResult = exports.DeviceSelectionResult || (exports.DeviceSelectionResult = {}));
var ExecutionConfiguration;
(function (ExecutionConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExecutionConfiguration");
    }
    ExecutionConfiguration.isa = isa;
})(ExecutionConfiguration = exports.ExecutionConfiguration || (exports.ExecutionConfiguration = {}));
var ExecutionResult;
(function (ExecutionResult) {
    ExecutionResult["ERRORED"] = "ERRORED";
    ExecutionResult["FAILED"] = "FAILED";
    ExecutionResult["PASSED"] = "PASSED";
    ExecutionResult["PENDING"] = "PENDING";
    ExecutionResult["SKIPPED"] = "SKIPPED";
    ExecutionResult["STOPPED"] = "STOPPED";
    ExecutionResult["WARNED"] = "WARNED";
})(ExecutionResult = exports.ExecutionResult || (exports.ExecutionResult = {}));
var ExecutionResultCode;
(function (ExecutionResultCode) {
    ExecutionResultCode["PARSING_FAILED"] = "PARSING_FAILED";
    ExecutionResultCode["VPC_ENDPOINT_SETUP_FAILED"] = "VPC_ENDPOINT_SETUP_FAILED";
})(ExecutionResultCode = exports.ExecutionResultCode || (exports.ExecutionResultCode = {}));
var ExecutionStatus;
(function (ExecutionStatus) {
    ExecutionStatus["COMPLETED"] = "COMPLETED";
    ExecutionStatus["PENDING"] = "PENDING";
    ExecutionStatus["PENDING_CONCURRNECY"] = "PENDING_CONCURRENCY";
    ExecutionStatus["PENDING_DEVICE"] = "PENDING_DEVICE";
    ExecutionStatus["PREPARING"] = "PREPARING";
    ExecutionStatus["PROCESSING"] = "PROCESSING";
    ExecutionStatus["RUNNING"] = "RUNNING";
    ExecutionStatus["SCHEDULING"] = "SCHEDULING";
    ExecutionStatus["STOPPING"] = "STOPPING";
})(ExecutionStatus = exports.ExecutionStatus || (exports.ExecutionStatus = {}));
var GetAccountSettingsRequest;
(function (GetAccountSettingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccountSettingsRequest");
    }
    GetAccountSettingsRequest.isa = isa;
})(GetAccountSettingsRequest = exports.GetAccountSettingsRequest || (exports.GetAccountSettingsRequest = {}));
var GetAccountSettingsResult;
(function (GetAccountSettingsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetAccountSettingsResult");
    }
    GetAccountSettingsResult.isa = isa;
})(GetAccountSettingsResult = exports.GetAccountSettingsResult || (exports.GetAccountSettingsResult = {}));
var GetDeviceInstanceRequest;
(function (GetDeviceInstanceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeviceInstanceRequest");
    }
    GetDeviceInstanceRequest.isa = isa;
})(GetDeviceInstanceRequest = exports.GetDeviceInstanceRequest || (exports.GetDeviceInstanceRequest = {}));
var GetDeviceInstanceResult;
(function (GetDeviceInstanceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeviceInstanceResult");
    }
    GetDeviceInstanceResult.isa = isa;
})(GetDeviceInstanceResult = exports.GetDeviceInstanceResult || (exports.GetDeviceInstanceResult = {}));
var GetDevicePoolCompatibilityRequest;
(function (GetDevicePoolCompatibilityRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDevicePoolCompatibilityRequest");
    }
    GetDevicePoolCompatibilityRequest.isa = isa;
})(GetDevicePoolCompatibilityRequest = exports.GetDevicePoolCompatibilityRequest || (exports.GetDevicePoolCompatibilityRequest = {}));
var GetDevicePoolCompatibilityResult;
(function (GetDevicePoolCompatibilityResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDevicePoolCompatibilityResult");
    }
    GetDevicePoolCompatibilityResult.isa = isa;
})(GetDevicePoolCompatibilityResult = exports.GetDevicePoolCompatibilityResult || (exports.GetDevicePoolCompatibilityResult = {}));
var GetDevicePoolRequest;
(function (GetDevicePoolRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDevicePoolRequest");
    }
    GetDevicePoolRequest.isa = isa;
})(GetDevicePoolRequest = exports.GetDevicePoolRequest || (exports.GetDevicePoolRequest = {}));
var GetDevicePoolResult;
(function (GetDevicePoolResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDevicePoolResult");
    }
    GetDevicePoolResult.isa = isa;
})(GetDevicePoolResult = exports.GetDevicePoolResult || (exports.GetDevicePoolResult = {}));
var GetDeviceRequest;
(function (GetDeviceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeviceRequest");
    }
    GetDeviceRequest.isa = isa;
})(GetDeviceRequest = exports.GetDeviceRequest || (exports.GetDeviceRequest = {}));
var GetDeviceResult;
(function (GetDeviceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDeviceResult");
    }
    GetDeviceResult.isa = isa;
})(GetDeviceResult = exports.GetDeviceResult || (exports.GetDeviceResult = {}));
var GetInstanceProfileRequest;
(function (GetInstanceProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceProfileRequest");
    }
    GetInstanceProfileRequest.isa = isa;
})(GetInstanceProfileRequest = exports.GetInstanceProfileRequest || (exports.GetInstanceProfileRequest = {}));
var GetInstanceProfileResult;
(function (GetInstanceProfileResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetInstanceProfileResult");
    }
    GetInstanceProfileResult.isa = isa;
})(GetInstanceProfileResult = exports.GetInstanceProfileResult || (exports.GetInstanceProfileResult = {}));
var GetJobRequest;
(function (GetJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetJobRequest");
    }
    GetJobRequest.isa = isa;
})(GetJobRequest = exports.GetJobRequest || (exports.GetJobRequest = {}));
var GetJobResult;
(function (GetJobResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetJobResult");
    }
    GetJobResult.isa = isa;
})(GetJobResult = exports.GetJobResult || (exports.GetJobResult = {}));
var GetNetworkProfileRequest;
(function (GetNetworkProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetNetworkProfileRequest");
    }
    GetNetworkProfileRequest.isa = isa;
})(GetNetworkProfileRequest = exports.GetNetworkProfileRequest || (exports.GetNetworkProfileRequest = {}));
var GetNetworkProfileResult;
(function (GetNetworkProfileResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetNetworkProfileResult");
    }
    GetNetworkProfileResult.isa = isa;
})(GetNetworkProfileResult = exports.GetNetworkProfileResult || (exports.GetNetworkProfileResult = {}));
var GetOfferingStatusRequest;
(function (GetOfferingStatusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOfferingStatusRequest");
    }
    GetOfferingStatusRequest.isa = isa;
})(GetOfferingStatusRequest = exports.GetOfferingStatusRequest || (exports.GetOfferingStatusRequest = {}));
var GetOfferingStatusResult;
(function (GetOfferingStatusResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetOfferingStatusResult");
    }
    GetOfferingStatusResult.isa = isa;
})(GetOfferingStatusResult = exports.GetOfferingStatusResult || (exports.GetOfferingStatusResult = {}));
var GetProjectRequest;
(function (GetProjectRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetProjectRequest");
    }
    GetProjectRequest.isa = isa;
})(GetProjectRequest = exports.GetProjectRequest || (exports.GetProjectRequest = {}));
var GetProjectResult;
(function (GetProjectResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetProjectResult");
    }
    GetProjectResult.isa = isa;
})(GetProjectResult = exports.GetProjectResult || (exports.GetProjectResult = {}));
var GetRemoteAccessSessionRequest;
(function (GetRemoteAccessSessionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRemoteAccessSessionRequest");
    }
    GetRemoteAccessSessionRequest.isa = isa;
})(GetRemoteAccessSessionRequest = exports.GetRemoteAccessSessionRequest || (exports.GetRemoteAccessSessionRequest = {}));
var GetRemoteAccessSessionResult;
(function (GetRemoteAccessSessionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRemoteAccessSessionResult");
    }
    GetRemoteAccessSessionResult.isa = isa;
})(GetRemoteAccessSessionResult = exports.GetRemoteAccessSessionResult || (exports.GetRemoteAccessSessionResult = {}));
var GetRunRequest;
(function (GetRunRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRunRequest");
    }
    GetRunRequest.isa = isa;
})(GetRunRequest = exports.GetRunRequest || (exports.GetRunRequest = {}));
var GetRunResult;
(function (GetRunResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetRunResult");
    }
    GetRunResult.isa = isa;
})(GetRunResult = exports.GetRunResult || (exports.GetRunResult = {}));
var GetSuiteRequest;
(function (GetSuiteRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSuiteRequest");
    }
    GetSuiteRequest.isa = isa;
})(GetSuiteRequest = exports.GetSuiteRequest || (exports.GetSuiteRequest = {}));
var GetSuiteResult;
(function (GetSuiteResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSuiteResult");
    }
    GetSuiteResult.isa = isa;
})(GetSuiteResult = exports.GetSuiteResult || (exports.GetSuiteResult = {}));
var GetTestGridProjectRequest;
(function (GetTestGridProjectRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTestGridProjectRequest");
    }
    GetTestGridProjectRequest.isa = isa;
})(GetTestGridProjectRequest = exports.GetTestGridProjectRequest || (exports.GetTestGridProjectRequest = {}));
var GetTestGridProjectResult;
(function (GetTestGridProjectResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTestGridProjectResult");
    }
    GetTestGridProjectResult.isa = isa;
})(GetTestGridProjectResult = exports.GetTestGridProjectResult || (exports.GetTestGridProjectResult = {}));
var GetTestGridSessionRequest;
(function (GetTestGridSessionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTestGridSessionRequest");
    }
    GetTestGridSessionRequest.isa = isa;
})(GetTestGridSessionRequest = exports.GetTestGridSessionRequest || (exports.GetTestGridSessionRequest = {}));
var GetTestGridSessionResult;
(function (GetTestGridSessionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTestGridSessionResult");
    }
    GetTestGridSessionResult.isa = isa;
})(GetTestGridSessionResult = exports.GetTestGridSessionResult || (exports.GetTestGridSessionResult = {}));
var GetTestRequest;
(function (GetTestRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTestRequest");
    }
    GetTestRequest.isa = isa;
})(GetTestRequest = exports.GetTestRequest || (exports.GetTestRequest = {}));
var GetTestResult;
(function (GetTestResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetTestResult");
    }
    GetTestResult.isa = isa;
})(GetTestResult = exports.GetTestResult || (exports.GetTestResult = {}));
var GetUploadRequest;
(function (GetUploadRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetUploadRequest");
    }
    GetUploadRequest.isa = isa;
})(GetUploadRequest = exports.GetUploadRequest || (exports.GetUploadRequest = {}));
var GetUploadResult;
(function (GetUploadResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetUploadResult");
    }
    GetUploadResult.isa = isa;
})(GetUploadResult = exports.GetUploadResult || (exports.GetUploadResult = {}));
var GetVPCEConfigurationRequest;
(function (GetVPCEConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetVPCEConfigurationRequest");
    }
    GetVPCEConfigurationRequest.isa = isa;
})(GetVPCEConfigurationRequest = exports.GetVPCEConfigurationRequest || (exports.GetVPCEConfigurationRequest = {}));
var GetVPCEConfigurationResult;
(function (GetVPCEConfigurationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetVPCEConfigurationResult");
    }
    GetVPCEConfigurationResult.isa = isa;
})(GetVPCEConfigurationResult = exports.GetVPCEConfigurationResult || (exports.GetVPCEConfigurationResult = {}));
var IdempotencyException;
(function (IdempotencyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "IdempotencyException");
    }
    IdempotencyException.isa = isa;
})(IdempotencyException = exports.IdempotencyException || (exports.IdempotencyException = {}));
var IncompatibilityMessage;
(function (IncompatibilityMessage) {
    function isa(o) {
        return smithy_client_1.isa(o, "IncompatibilityMessage");
    }
    IncompatibilityMessage.isa = isa;
})(IncompatibilityMessage = exports.IncompatibilityMessage || (exports.IncompatibilityMessage = {}));
var InstallToRemoteAccessSessionRequest;
(function (InstallToRemoteAccessSessionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstallToRemoteAccessSessionRequest");
    }
    InstallToRemoteAccessSessionRequest.isa = isa;
})(InstallToRemoteAccessSessionRequest = exports.InstallToRemoteAccessSessionRequest || (exports.InstallToRemoteAccessSessionRequest = {}));
var InstallToRemoteAccessSessionResult;
(function (InstallToRemoteAccessSessionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstallToRemoteAccessSessionResult");
    }
    InstallToRemoteAccessSessionResult.isa = isa;
})(InstallToRemoteAccessSessionResult = exports.InstallToRemoteAccessSessionResult || (exports.InstallToRemoteAccessSessionResult = {}));
var InstanceProfile;
(function (InstanceProfile) {
    function isa(o) {
        return smithy_client_1.isa(o, "InstanceProfile");
    }
    InstanceProfile.isa = isa;
})(InstanceProfile = exports.InstanceProfile || (exports.InstanceProfile = {}));
var InstanceStatus;
(function (InstanceStatus) {
    InstanceStatus["AVAILABLE"] = "AVAILABLE";
    InstanceStatus["IN_USE"] = "IN_USE";
    InstanceStatus["NOT_AVAILABLE"] = "NOT_AVAILABLE";
    InstanceStatus["PREPARING"] = "PREPARING";
})(InstanceStatus = exports.InstanceStatus || (exports.InstanceStatus = {}));
var InteractionMode;
(function (InteractionMode) {
    InteractionMode["INTERACTIVE"] = "INTERACTIVE";
    InteractionMode["NO_VIDEO"] = "NO_VIDEO";
    InteractionMode["VIDEO_ONLY"] = "VIDEO_ONLY";
})(InteractionMode = exports.InteractionMode || (exports.InteractionMode = {}));
var InternalServiceException;
(function (InternalServiceException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalServiceException");
    }
    InternalServiceException.isa = isa;
})(InternalServiceException = exports.InternalServiceException || (exports.InternalServiceException = {}));
var InvalidOperationException;
(function (InvalidOperationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidOperationException");
    }
    InvalidOperationException.isa = isa;
})(InvalidOperationException = exports.InvalidOperationException || (exports.InvalidOperationException = {}));
var Job;
(function (Job) {
    function isa(o) {
        return smithy_client_1.isa(o, "Job");
    }
    Job.isa = isa;
})(Job = exports.Job || (exports.Job = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ListArtifactsRequest;
(function (ListArtifactsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListArtifactsRequest");
    }
    ListArtifactsRequest.isa = isa;
})(ListArtifactsRequest = exports.ListArtifactsRequest || (exports.ListArtifactsRequest = {}));
var ListArtifactsResult;
(function (ListArtifactsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListArtifactsResult");
    }
    ListArtifactsResult.isa = isa;
})(ListArtifactsResult = exports.ListArtifactsResult || (exports.ListArtifactsResult = {}));
var ListDeviceInstancesRequest;
(function (ListDeviceInstancesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeviceInstancesRequest");
    }
    ListDeviceInstancesRequest.isa = isa;
})(ListDeviceInstancesRequest = exports.ListDeviceInstancesRequest || (exports.ListDeviceInstancesRequest = {}));
var ListDeviceInstancesResult;
(function (ListDeviceInstancesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDeviceInstancesResult");
    }
    ListDeviceInstancesResult.isa = isa;
})(ListDeviceInstancesResult = exports.ListDeviceInstancesResult || (exports.ListDeviceInstancesResult = {}));
var ListDevicePoolsRequest;
(function (ListDevicePoolsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDevicePoolsRequest");
    }
    ListDevicePoolsRequest.isa = isa;
})(ListDevicePoolsRequest = exports.ListDevicePoolsRequest || (exports.ListDevicePoolsRequest = {}));
var ListDevicePoolsResult;
(function (ListDevicePoolsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDevicePoolsResult");
    }
    ListDevicePoolsResult.isa = isa;
})(ListDevicePoolsResult = exports.ListDevicePoolsResult || (exports.ListDevicePoolsResult = {}));
var ListDevicesRequest;
(function (ListDevicesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDevicesRequest");
    }
    ListDevicesRequest.isa = isa;
})(ListDevicesRequest = exports.ListDevicesRequest || (exports.ListDevicesRequest = {}));
var ListDevicesResult;
(function (ListDevicesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDevicesResult");
    }
    ListDevicesResult.isa = isa;
})(ListDevicesResult = exports.ListDevicesResult || (exports.ListDevicesResult = {}));
var ListInstanceProfilesRequest;
(function (ListInstanceProfilesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListInstanceProfilesRequest");
    }
    ListInstanceProfilesRequest.isa = isa;
})(ListInstanceProfilesRequest = exports.ListInstanceProfilesRequest || (exports.ListInstanceProfilesRequest = {}));
var ListInstanceProfilesResult;
(function (ListInstanceProfilesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListInstanceProfilesResult");
    }
    ListInstanceProfilesResult.isa = isa;
})(ListInstanceProfilesResult = exports.ListInstanceProfilesResult || (exports.ListInstanceProfilesResult = {}));
var ListJobsRequest;
(function (ListJobsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListJobsRequest");
    }
    ListJobsRequest.isa = isa;
})(ListJobsRequest = exports.ListJobsRequest || (exports.ListJobsRequest = {}));
var ListJobsResult;
(function (ListJobsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListJobsResult");
    }
    ListJobsResult.isa = isa;
})(ListJobsResult = exports.ListJobsResult || (exports.ListJobsResult = {}));
var ListNetworkProfilesRequest;
(function (ListNetworkProfilesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListNetworkProfilesRequest");
    }
    ListNetworkProfilesRequest.isa = isa;
})(ListNetworkProfilesRequest = exports.ListNetworkProfilesRequest || (exports.ListNetworkProfilesRequest = {}));
var ListNetworkProfilesResult;
(function (ListNetworkProfilesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListNetworkProfilesResult");
    }
    ListNetworkProfilesResult.isa = isa;
})(ListNetworkProfilesResult = exports.ListNetworkProfilesResult || (exports.ListNetworkProfilesResult = {}));
var ListOfferingPromotionsRequest;
(function (ListOfferingPromotionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListOfferingPromotionsRequest");
    }
    ListOfferingPromotionsRequest.isa = isa;
})(ListOfferingPromotionsRequest = exports.ListOfferingPromotionsRequest || (exports.ListOfferingPromotionsRequest = {}));
var ListOfferingPromotionsResult;
(function (ListOfferingPromotionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListOfferingPromotionsResult");
    }
    ListOfferingPromotionsResult.isa = isa;
})(ListOfferingPromotionsResult = exports.ListOfferingPromotionsResult || (exports.ListOfferingPromotionsResult = {}));
var ListOfferingTransactionsRequest;
(function (ListOfferingTransactionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListOfferingTransactionsRequest");
    }
    ListOfferingTransactionsRequest.isa = isa;
})(ListOfferingTransactionsRequest = exports.ListOfferingTransactionsRequest || (exports.ListOfferingTransactionsRequest = {}));
var ListOfferingTransactionsResult;
(function (ListOfferingTransactionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListOfferingTransactionsResult");
    }
    ListOfferingTransactionsResult.isa = isa;
})(ListOfferingTransactionsResult = exports.ListOfferingTransactionsResult || (exports.ListOfferingTransactionsResult = {}));
var ListOfferingsRequest;
(function (ListOfferingsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListOfferingsRequest");
    }
    ListOfferingsRequest.isa = isa;
})(ListOfferingsRequest = exports.ListOfferingsRequest || (exports.ListOfferingsRequest = {}));
var ListOfferingsResult;
(function (ListOfferingsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListOfferingsResult");
    }
    ListOfferingsResult.isa = isa;
})(ListOfferingsResult = exports.ListOfferingsResult || (exports.ListOfferingsResult = {}));
var ListProjectsRequest;
(function (ListProjectsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListProjectsRequest");
    }
    ListProjectsRequest.isa = isa;
})(ListProjectsRequest = exports.ListProjectsRequest || (exports.ListProjectsRequest = {}));
var ListProjectsResult;
(function (ListProjectsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListProjectsResult");
    }
    ListProjectsResult.isa = isa;
})(ListProjectsResult = exports.ListProjectsResult || (exports.ListProjectsResult = {}));
var ListRemoteAccessSessionsRequest;
(function (ListRemoteAccessSessionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRemoteAccessSessionsRequest");
    }
    ListRemoteAccessSessionsRequest.isa = isa;
})(ListRemoteAccessSessionsRequest = exports.ListRemoteAccessSessionsRequest || (exports.ListRemoteAccessSessionsRequest = {}));
var ListRemoteAccessSessionsResult;
(function (ListRemoteAccessSessionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRemoteAccessSessionsResult");
    }
    ListRemoteAccessSessionsResult.isa = isa;
})(ListRemoteAccessSessionsResult = exports.ListRemoteAccessSessionsResult || (exports.ListRemoteAccessSessionsResult = {}));
var ListRunsRequest;
(function (ListRunsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRunsRequest");
    }
    ListRunsRequest.isa = isa;
})(ListRunsRequest = exports.ListRunsRequest || (exports.ListRunsRequest = {}));
var ListRunsResult;
(function (ListRunsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRunsResult");
    }
    ListRunsResult.isa = isa;
})(ListRunsResult = exports.ListRunsResult || (exports.ListRunsResult = {}));
var ListSamplesRequest;
(function (ListSamplesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSamplesRequest");
    }
    ListSamplesRequest.isa = isa;
})(ListSamplesRequest = exports.ListSamplesRequest || (exports.ListSamplesRequest = {}));
var ListSamplesResult;
(function (ListSamplesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSamplesResult");
    }
    ListSamplesResult.isa = isa;
})(ListSamplesResult = exports.ListSamplesResult || (exports.ListSamplesResult = {}));
var ListSuitesRequest;
(function (ListSuitesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSuitesRequest");
    }
    ListSuitesRequest.isa = isa;
})(ListSuitesRequest = exports.ListSuitesRequest || (exports.ListSuitesRequest = {}));
var ListSuitesResult;
(function (ListSuitesResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSuitesResult");
    }
    ListSuitesResult.isa = isa;
})(ListSuitesResult = exports.ListSuitesResult || (exports.ListSuitesResult = {}));
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
var ListTestGridProjectsRequest;
(function (ListTestGridProjectsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTestGridProjectsRequest");
    }
    ListTestGridProjectsRequest.isa = isa;
})(ListTestGridProjectsRequest = exports.ListTestGridProjectsRequest || (exports.ListTestGridProjectsRequest = {}));
var ListTestGridProjectsResult;
(function (ListTestGridProjectsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTestGridProjectsResult");
    }
    ListTestGridProjectsResult.isa = isa;
})(ListTestGridProjectsResult = exports.ListTestGridProjectsResult || (exports.ListTestGridProjectsResult = {}));
var ListTestGridSessionActionsRequest;
(function (ListTestGridSessionActionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTestGridSessionActionsRequest");
    }
    ListTestGridSessionActionsRequest.isa = isa;
})(ListTestGridSessionActionsRequest = exports.ListTestGridSessionActionsRequest || (exports.ListTestGridSessionActionsRequest = {}));
var ListTestGridSessionActionsResult;
(function (ListTestGridSessionActionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTestGridSessionActionsResult");
    }
    ListTestGridSessionActionsResult.isa = isa;
})(ListTestGridSessionActionsResult = exports.ListTestGridSessionActionsResult || (exports.ListTestGridSessionActionsResult = {}));
var ListTestGridSessionArtifactsRequest;
(function (ListTestGridSessionArtifactsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTestGridSessionArtifactsRequest");
    }
    ListTestGridSessionArtifactsRequest.isa = isa;
})(ListTestGridSessionArtifactsRequest = exports.ListTestGridSessionArtifactsRequest || (exports.ListTestGridSessionArtifactsRequest = {}));
var ListTestGridSessionArtifactsResult;
(function (ListTestGridSessionArtifactsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTestGridSessionArtifactsResult");
    }
    ListTestGridSessionArtifactsResult.isa = isa;
})(ListTestGridSessionArtifactsResult = exports.ListTestGridSessionArtifactsResult || (exports.ListTestGridSessionArtifactsResult = {}));
var ListTestGridSessionsRequest;
(function (ListTestGridSessionsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTestGridSessionsRequest");
    }
    ListTestGridSessionsRequest.isa = isa;
})(ListTestGridSessionsRequest = exports.ListTestGridSessionsRequest || (exports.ListTestGridSessionsRequest = {}));
var ListTestGridSessionsResult;
(function (ListTestGridSessionsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTestGridSessionsResult");
    }
    ListTestGridSessionsResult.isa = isa;
})(ListTestGridSessionsResult = exports.ListTestGridSessionsResult || (exports.ListTestGridSessionsResult = {}));
var ListTestsRequest;
(function (ListTestsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTestsRequest");
    }
    ListTestsRequest.isa = isa;
})(ListTestsRequest = exports.ListTestsRequest || (exports.ListTestsRequest = {}));
var ListTestsResult;
(function (ListTestsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTestsResult");
    }
    ListTestsResult.isa = isa;
})(ListTestsResult = exports.ListTestsResult || (exports.ListTestsResult = {}));
var ListUniqueProblemsRequest;
(function (ListUniqueProblemsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUniqueProblemsRequest");
    }
    ListUniqueProblemsRequest.isa = isa;
})(ListUniqueProblemsRequest = exports.ListUniqueProblemsRequest || (exports.ListUniqueProblemsRequest = {}));
var ListUniqueProblemsResult;
(function (ListUniqueProblemsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUniqueProblemsResult");
    }
    ListUniqueProblemsResult.isa = isa;
})(ListUniqueProblemsResult = exports.ListUniqueProblemsResult || (exports.ListUniqueProblemsResult = {}));
var ListUploadsRequest;
(function (ListUploadsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUploadsRequest");
    }
    ListUploadsRequest.isa = isa;
})(ListUploadsRequest = exports.ListUploadsRequest || (exports.ListUploadsRequest = {}));
var ListUploadsResult;
(function (ListUploadsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListUploadsResult");
    }
    ListUploadsResult.isa = isa;
})(ListUploadsResult = exports.ListUploadsResult || (exports.ListUploadsResult = {}));
var ListVPCEConfigurationsRequest;
(function (ListVPCEConfigurationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListVPCEConfigurationsRequest");
    }
    ListVPCEConfigurationsRequest.isa = isa;
})(ListVPCEConfigurationsRequest = exports.ListVPCEConfigurationsRequest || (exports.ListVPCEConfigurationsRequest = {}));
var ListVPCEConfigurationsResult;
(function (ListVPCEConfigurationsResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListVPCEConfigurationsResult");
    }
    ListVPCEConfigurationsResult.isa = isa;
})(ListVPCEConfigurationsResult = exports.ListVPCEConfigurationsResult || (exports.ListVPCEConfigurationsResult = {}));
var Location;
(function (Location) {
    function isa(o) {
        return smithy_client_1.isa(o, "Location");
    }
    Location.isa = isa;
})(Location = exports.Location || (exports.Location = {}));
var MonetaryAmount;
(function (MonetaryAmount) {
    function isa(o) {
        return smithy_client_1.isa(o, "MonetaryAmount");
    }
    MonetaryAmount.isa = isa;
})(MonetaryAmount = exports.MonetaryAmount || (exports.MonetaryAmount = {}));
var NetworkProfile;
(function (NetworkProfile) {
    function isa(o) {
        return smithy_client_1.isa(o, "NetworkProfile");
    }
    NetworkProfile.isa = isa;
})(NetworkProfile = exports.NetworkProfile || (exports.NetworkProfile = {}));
var NetworkProfileType;
(function (NetworkProfileType) {
    NetworkProfileType["CURATED"] = "CURATED";
    NetworkProfileType["PRIVATE"] = "PRIVATE";
})(NetworkProfileType = exports.NetworkProfileType || (exports.NetworkProfileType = {}));
var NotEligibleException;
(function (NotEligibleException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotEligibleException");
    }
    NotEligibleException.isa = isa;
})(NotEligibleException = exports.NotEligibleException || (exports.NotEligibleException = {}));
var NotFoundException;
(function (NotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotFoundException");
    }
    NotFoundException.isa = isa;
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var Offering;
(function (Offering) {
    function isa(o) {
        return smithy_client_1.isa(o, "Offering");
    }
    Offering.isa = isa;
})(Offering = exports.Offering || (exports.Offering = {}));
var OfferingPromotion;
(function (OfferingPromotion) {
    function isa(o) {
        return smithy_client_1.isa(o, "OfferingPromotion");
    }
    OfferingPromotion.isa = isa;
})(OfferingPromotion = exports.OfferingPromotion || (exports.OfferingPromotion = {}));
var OfferingStatus;
(function (OfferingStatus) {
    function isa(o) {
        return smithy_client_1.isa(o, "OfferingStatus");
    }
    OfferingStatus.isa = isa;
})(OfferingStatus = exports.OfferingStatus || (exports.OfferingStatus = {}));
var OfferingTransaction;
(function (OfferingTransaction) {
    function isa(o) {
        return smithy_client_1.isa(o, "OfferingTransaction");
    }
    OfferingTransaction.isa = isa;
})(OfferingTransaction = exports.OfferingTransaction || (exports.OfferingTransaction = {}));
var OfferingTransactionType;
(function (OfferingTransactionType) {
    OfferingTransactionType["PURCHASE"] = "PURCHASE";
    OfferingTransactionType["RENEW"] = "RENEW";
    OfferingTransactionType["SYSTEM"] = "SYSTEM";
})(OfferingTransactionType = exports.OfferingTransactionType || (exports.OfferingTransactionType = {}));
var OfferingType;
(function (OfferingType) {
    OfferingType["RECURRING"] = "RECURRING";
})(OfferingType = exports.OfferingType || (exports.OfferingType = {}));
var Problem;
(function (Problem) {
    function isa(o) {
        return smithy_client_1.isa(o, "Problem");
    }
    Problem.isa = isa;
})(Problem = exports.Problem || (exports.Problem = {}));
var ProblemDetail;
(function (ProblemDetail) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProblemDetail");
    }
    ProblemDetail.isa = isa;
})(ProblemDetail = exports.ProblemDetail || (exports.ProblemDetail = {}));
var Project;
(function (Project) {
    function isa(o) {
        return smithy_client_1.isa(o, "Project");
    }
    Project.isa = isa;
})(Project = exports.Project || (exports.Project = {}));
var PurchaseOfferingRequest;
(function (PurchaseOfferingRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PurchaseOfferingRequest");
    }
    PurchaseOfferingRequest.isa = isa;
})(PurchaseOfferingRequest = exports.PurchaseOfferingRequest || (exports.PurchaseOfferingRequest = {}));
var PurchaseOfferingResult;
(function (PurchaseOfferingResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "PurchaseOfferingResult");
    }
    PurchaseOfferingResult.isa = isa;
})(PurchaseOfferingResult = exports.PurchaseOfferingResult || (exports.PurchaseOfferingResult = {}));
var Radios;
(function (Radios) {
    function isa(o) {
        return smithy_client_1.isa(o, "Radios");
    }
    Radios.isa = isa;
})(Radios = exports.Radios || (exports.Radios = {}));
var RecurringCharge;
(function (RecurringCharge) {
    function isa(o) {
        return smithy_client_1.isa(o, "RecurringCharge");
    }
    RecurringCharge.isa = isa;
})(RecurringCharge = exports.RecurringCharge || (exports.RecurringCharge = {}));
var RecurringChargeFrequency;
(function (RecurringChargeFrequency) {
    RecurringChargeFrequency["MONTHLY"] = "MONTHLY";
})(RecurringChargeFrequency = exports.RecurringChargeFrequency || (exports.RecurringChargeFrequency = {}));
var RemoteAccessSession;
(function (RemoteAccessSession) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoteAccessSession");
    }
    RemoteAccessSession.isa = isa;
})(RemoteAccessSession = exports.RemoteAccessSession || (exports.RemoteAccessSession = {}));
var RenewOfferingRequest;
(function (RenewOfferingRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RenewOfferingRequest");
    }
    RenewOfferingRequest.isa = isa;
})(RenewOfferingRequest = exports.RenewOfferingRequest || (exports.RenewOfferingRequest = {}));
var RenewOfferingResult;
(function (RenewOfferingResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "RenewOfferingResult");
    }
    RenewOfferingResult.isa = isa;
})(RenewOfferingResult = exports.RenewOfferingResult || (exports.RenewOfferingResult = {}));
var Resolution;
(function (Resolution) {
    function isa(o) {
        return smithy_client_1.isa(o, "Resolution");
    }
    Resolution.isa = isa;
})(Resolution = exports.Resolution || (exports.Resolution = {}));
var Rule;
(function (Rule) {
    function isa(o) {
        return smithy_client_1.isa(o, "Rule");
    }
    Rule.isa = isa;
})(Rule = exports.Rule || (exports.Rule = {}));
var RuleOperator;
(function (RuleOperator) {
    RuleOperator["CONTAINS"] = "CONTAINS";
    RuleOperator["EQUALS"] = "EQUALS";
    RuleOperator["GREATER_THAN"] = "GREATER_THAN";
    RuleOperator["GREATER_THAN_OR_EQUALS"] = "GREATER_THAN_OR_EQUALS";
    RuleOperator["IN"] = "IN";
    RuleOperator["LESS_THAN"] = "LESS_THAN";
    RuleOperator["LESS_THAN_OR_EQUALS"] = "LESS_THAN_OR_EQUALS";
    RuleOperator["NOT_IN"] = "NOT_IN";
})(RuleOperator = exports.RuleOperator || (exports.RuleOperator = {}));
var Run;
(function (Run) {
    function isa(o) {
        return smithy_client_1.isa(o, "Run");
    }
    Run.isa = isa;
})(Run = exports.Run || (exports.Run = {}));
var Sample;
(function (Sample) {
    function isa(o) {
        return smithy_client_1.isa(o, "Sample");
    }
    Sample.isa = isa;
})(Sample = exports.Sample || (exports.Sample = {}));
var SampleType;
(function (SampleType) {
    SampleType["CPU"] = "CPU";
    SampleType["MEMORY"] = "MEMORY";
    SampleType["NATIVE_AVG_DRAWTIME"] = "NATIVE_AVG_DRAWTIME";
    SampleType["NATIVE_FPS"] = "NATIVE_FPS";
    SampleType["NATIVE_FRAMES"] = "NATIVE_FRAMES";
    SampleType["NATIVE_MAX_DRAWTIME"] = "NATIVE_MAX_DRAWTIME";
    SampleType["NATIVE_MIN_DRAWTIME"] = "NATIVE_MIN_DRAWTIME";
    SampleType["OPENGL_AVG_DRAWTIME"] = "OPENGL_AVG_DRAWTIME";
    SampleType["OPENGL_FPS"] = "OPENGL_FPS";
    SampleType["OPENGL_FRAMES"] = "OPENGL_FRAMES";
    SampleType["OPENGL_MAX_DRAWTIME"] = "OPENGL_MAX_DRAWTIME";
    SampleType["OPENGL_MIN_DRAWTIME"] = "OPENGL_MIN_DRAWTIME";
    SampleType["RX"] = "RX";
    SampleType["RX_RATE"] = "RX_RATE";
    SampleType["THREADS"] = "THREADS";
    SampleType["TX"] = "TX";
    SampleType["TX_RATE"] = "TX_RATE";
})(SampleType = exports.SampleType || (exports.SampleType = {}));
var ScheduleRunConfiguration;
(function (ScheduleRunConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScheduleRunConfiguration");
    }
    ScheduleRunConfiguration.isa = isa;
})(ScheduleRunConfiguration = exports.ScheduleRunConfiguration || (exports.ScheduleRunConfiguration = {}));
var ScheduleRunRequest;
(function (ScheduleRunRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScheduleRunRequest");
    }
    ScheduleRunRequest.isa = isa;
})(ScheduleRunRequest = exports.ScheduleRunRequest || (exports.ScheduleRunRequest = {}));
var ScheduleRunResult;
(function (ScheduleRunResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScheduleRunResult");
    }
    ScheduleRunResult.isa = isa;
})(ScheduleRunResult = exports.ScheduleRunResult || (exports.ScheduleRunResult = {}));
var ScheduleRunTest;
(function (ScheduleRunTest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ScheduleRunTest");
    }
    ScheduleRunTest.isa = isa;
})(ScheduleRunTest = exports.ScheduleRunTest || (exports.ScheduleRunTest = {}));
var ServiceAccountException;
(function (ServiceAccountException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ServiceAccountException");
    }
    ServiceAccountException.isa = isa;
})(ServiceAccountException = exports.ServiceAccountException || (exports.ServiceAccountException = {}));
var StopJobRequest;
(function (StopJobRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopJobRequest");
    }
    StopJobRequest.isa = isa;
})(StopJobRequest = exports.StopJobRequest || (exports.StopJobRequest = {}));
var StopJobResult;
(function (StopJobResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopJobResult");
    }
    StopJobResult.isa = isa;
})(StopJobResult = exports.StopJobResult || (exports.StopJobResult = {}));
var StopRemoteAccessSessionRequest;
(function (StopRemoteAccessSessionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopRemoteAccessSessionRequest");
    }
    StopRemoteAccessSessionRequest.isa = isa;
})(StopRemoteAccessSessionRequest = exports.StopRemoteAccessSessionRequest || (exports.StopRemoteAccessSessionRequest = {}));
var StopRemoteAccessSessionResult;
(function (StopRemoteAccessSessionResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopRemoteAccessSessionResult");
    }
    StopRemoteAccessSessionResult.isa = isa;
})(StopRemoteAccessSessionResult = exports.StopRemoteAccessSessionResult || (exports.StopRemoteAccessSessionResult = {}));
var StopRunRequest;
(function (StopRunRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopRunRequest");
    }
    StopRunRequest.isa = isa;
})(StopRunRequest = exports.StopRunRequest || (exports.StopRunRequest = {}));
var StopRunResult;
(function (StopRunResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopRunResult");
    }
    StopRunResult.isa = isa;
})(StopRunResult = exports.StopRunResult || (exports.StopRunResult = {}));
var Suite;
(function (Suite) {
    function isa(o) {
        return smithy_client_1.isa(o, "Suite");
    }
    Suite.isa = isa;
})(Suite = exports.Suite || (exports.Suite = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagOperationException;
(function (TagOperationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagOperationException");
    }
    TagOperationException.isa = isa;
})(TagOperationException = exports.TagOperationException || (exports.TagOperationException = {}));
var TagPolicyException;
(function (TagPolicyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagPolicyException");
    }
    TagPolicyException.isa = isa;
})(TagPolicyException = exports.TagPolicyException || (exports.TagPolicyException = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceRequest");
    }
    TagResourceRequest.isa = isa;
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceResponse");
    }
    TagResourceResponse.isa = isa;
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var Test;
(function (Test) {
    function isa(o) {
        return smithy_client_1.isa(o, "Test");
    }
    Test.isa = isa;
})(Test = exports.Test || (exports.Test = {}));
var TestGridProject;
(function (TestGridProject) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestGridProject");
    }
    TestGridProject.isa = isa;
})(TestGridProject = exports.TestGridProject || (exports.TestGridProject = {}));
var TestGridSession;
(function (TestGridSession) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestGridSession");
    }
    TestGridSession.isa = isa;
})(TestGridSession = exports.TestGridSession || (exports.TestGridSession = {}));
var TestGridSessionAction;
(function (TestGridSessionAction) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestGridSessionAction");
    }
    TestGridSessionAction.isa = isa;
})(TestGridSessionAction = exports.TestGridSessionAction || (exports.TestGridSessionAction = {}));
var TestGridSessionArtifact;
(function (TestGridSessionArtifact) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestGridSessionArtifact");
    }
    TestGridSessionArtifact.isa = isa;
})(TestGridSessionArtifact = exports.TestGridSessionArtifact || (exports.TestGridSessionArtifact = {}));
var TestGridSessionArtifactCategory;
(function (TestGridSessionArtifactCategory) {
    TestGridSessionArtifactCategory["LOG"] = "LOG";
    TestGridSessionArtifactCategory["VIDEO"] = "VIDEO";
})(TestGridSessionArtifactCategory = exports.TestGridSessionArtifactCategory || (exports.TestGridSessionArtifactCategory = {}));
var TestGridSessionArtifactType;
(function (TestGridSessionArtifactType) {
    TestGridSessionArtifactType["SELENIUM_LOG"] = "SELENIUM_LOG";
    TestGridSessionArtifactType["UNKNOWN"] = "UNKNOWN";
    TestGridSessionArtifactType["VIDEO"] = "VIDEO";
})(TestGridSessionArtifactType = exports.TestGridSessionArtifactType || (exports.TestGridSessionArtifactType = {}));
var TestGridSessionStatus;
(function (TestGridSessionStatus) {
    TestGridSessionStatus["ACTIVE"] = "ACTIVE";
    TestGridSessionStatus["CLOSED"] = "CLOSED";
    TestGridSessionStatus["ERRORED"] = "ERRORED";
})(TestGridSessionStatus = exports.TestGridSessionStatus || (exports.TestGridSessionStatus = {}));
var TestType;
(function (TestType) {
    TestType["APPIUM_JAVA_JUNIT"] = "APPIUM_JAVA_JUNIT";
    TestType["APPIUM_JAVA_TESTNG"] = "APPIUM_JAVA_TESTNG";
    TestType["APPIUM_NODE"] = "APPIUM_NODE";
    TestType["APPIUM_PYTHON"] = "APPIUM_PYTHON";
    TestType["APPIUM_RUBY"] = "APPIUM_RUBY";
    TestType["APPIUM_WEB_JAVA_JUNIT"] = "APPIUM_WEB_JAVA_JUNIT";
    TestType["APPIUM_WEB_JAVA_TESTNG"] = "APPIUM_WEB_JAVA_TESTNG";
    TestType["APPIUM_WEB_NODE"] = "APPIUM_WEB_NODE";
    TestType["APPIUM_WEB_PYTHON"] = "APPIUM_WEB_PYTHON";
    TestType["APPIUM_WEB_RUBY"] = "APPIUM_WEB_RUBY";
    TestType["BUILTIN_EXPLORER"] = "BUILTIN_EXPLORER";
    TestType["BUILTIN_FUZZ"] = "BUILTIN_FUZZ";
    TestType["CALABASH"] = "CALABASH";
    TestType["INSTRUMENTATION"] = "INSTRUMENTATION";
    TestType["REMOTE_ACCESS_RECORD"] = "REMOTE_ACCESS_RECORD";
    TestType["REMOTE_ACCESS_REPLAY"] = "REMOTE_ACCESS_REPLAY";
    TestType["UIAUTOMATION"] = "UIAUTOMATION";
    TestType["UIAUTOMATOR"] = "UIAUTOMATOR";
    TestType["WEB_PERFORMANCE_PROFILE"] = "WEB_PERFORMANCE_PROFILE";
    TestType["XCTEST"] = "XCTEST";
    TestType["XCTEST_UI"] = "XCTEST_UI";
})(TestType = exports.TestType || (exports.TestType = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "TooManyTagsException");
    }
    TooManyTagsException.isa = isa;
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var TrialMinutes;
(function (TrialMinutes) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrialMinutes");
    }
    TrialMinutes.isa = isa;
})(TrialMinutes = exports.TrialMinutes || (exports.TrialMinutes = {}));
var UniqueProblem;
(function (UniqueProblem) {
    function isa(o) {
        return smithy_client_1.isa(o, "UniqueProblem");
    }
    UniqueProblem.isa = isa;
})(UniqueProblem = exports.UniqueProblem || (exports.UniqueProblem = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceRequest");
    }
    UntagResourceRequest.isa = isa;
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceResponse");
    }
    UntagResourceResponse.isa = isa;
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateDeviceInstanceRequest;
(function (UpdateDeviceInstanceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDeviceInstanceRequest");
    }
    UpdateDeviceInstanceRequest.isa = isa;
})(UpdateDeviceInstanceRequest = exports.UpdateDeviceInstanceRequest || (exports.UpdateDeviceInstanceRequest = {}));
var UpdateDeviceInstanceResult;
(function (UpdateDeviceInstanceResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDeviceInstanceResult");
    }
    UpdateDeviceInstanceResult.isa = isa;
})(UpdateDeviceInstanceResult = exports.UpdateDeviceInstanceResult || (exports.UpdateDeviceInstanceResult = {}));
var UpdateDevicePoolRequest;
(function (UpdateDevicePoolRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDevicePoolRequest");
    }
    UpdateDevicePoolRequest.isa = isa;
})(UpdateDevicePoolRequest = exports.UpdateDevicePoolRequest || (exports.UpdateDevicePoolRequest = {}));
var UpdateDevicePoolResult;
(function (UpdateDevicePoolResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateDevicePoolResult");
    }
    UpdateDevicePoolResult.isa = isa;
})(UpdateDevicePoolResult = exports.UpdateDevicePoolResult || (exports.UpdateDevicePoolResult = {}));
var UpdateInstanceProfileRequest;
(function (UpdateInstanceProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateInstanceProfileRequest");
    }
    UpdateInstanceProfileRequest.isa = isa;
})(UpdateInstanceProfileRequest = exports.UpdateInstanceProfileRequest || (exports.UpdateInstanceProfileRequest = {}));
var UpdateInstanceProfileResult;
(function (UpdateInstanceProfileResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateInstanceProfileResult");
    }
    UpdateInstanceProfileResult.isa = isa;
})(UpdateInstanceProfileResult = exports.UpdateInstanceProfileResult || (exports.UpdateInstanceProfileResult = {}));
var UpdateNetworkProfileRequest;
(function (UpdateNetworkProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateNetworkProfileRequest");
    }
    UpdateNetworkProfileRequest.isa = isa;
})(UpdateNetworkProfileRequest = exports.UpdateNetworkProfileRequest || (exports.UpdateNetworkProfileRequest = {}));
var UpdateNetworkProfileResult;
(function (UpdateNetworkProfileResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateNetworkProfileResult");
    }
    UpdateNetworkProfileResult.isa = isa;
})(UpdateNetworkProfileResult = exports.UpdateNetworkProfileResult || (exports.UpdateNetworkProfileResult = {}));
var UpdateProjectRequest;
(function (UpdateProjectRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateProjectRequest");
    }
    UpdateProjectRequest.isa = isa;
})(UpdateProjectRequest = exports.UpdateProjectRequest || (exports.UpdateProjectRequest = {}));
var UpdateProjectResult;
(function (UpdateProjectResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateProjectResult");
    }
    UpdateProjectResult.isa = isa;
})(UpdateProjectResult = exports.UpdateProjectResult || (exports.UpdateProjectResult = {}));
var UpdateTestGridProjectRequest;
(function (UpdateTestGridProjectRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTestGridProjectRequest");
    }
    UpdateTestGridProjectRequest.isa = isa;
})(UpdateTestGridProjectRequest = exports.UpdateTestGridProjectRequest || (exports.UpdateTestGridProjectRequest = {}));
var UpdateTestGridProjectResult;
(function (UpdateTestGridProjectResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateTestGridProjectResult");
    }
    UpdateTestGridProjectResult.isa = isa;
})(UpdateTestGridProjectResult = exports.UpdateTestGridProjectResult || (exports.UpdateTestGridProjectResult = {}));
var UpdateUploadRequest;
(function (UpdateUploadRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateUploadRequest");
    }
    UpdateUploadRequest.isa = isa;
})(UpdateUploadRequest = exports.UpdateUploadRequest || (exports.UpdateUploadRequest = {}));
var UpdateUploadResult;
(function (UpdateUploadResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateUploadResult");
    }
    UpdateUploadResult.isa = isa;
})(UpdateUploadResult = exports.UpdateUploadResult || (exports.UpdateUploadResult = {}));
var UpdateVPCEConfigurationRequest;
(function (UpdateVPCEConfigurationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateVPCEConfigurationRequest");
    }
    UpdateVPCEConfigurationRequest.isa = isa;
})(UpdateVPCEConfigurationRequest = exports.UpdateVPCEConfigurationRequest || (exports.UpdateVPCEConfigurationRequest = {}));
var UpdateVPCEConfigurationResult;
(function (UpdateVPCEConfigurationResult) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateVPCEConfigurationResult");
    }
    UpdateVPCEConfigurationResult.isa = isa;
})(UpdateVPCEConfigurationResult = exports.UpdateVPCEConfigurationResult || (exports.UpdateVPCEConfigurationResult = {}));
var Upload;
(function (Upload) {
    function isa(o) {
        return smithy_client_1.isa(o, "Upload");
    }
    Upload.isa = isa;
})(Upload = exports.Upload || (exports.Upload = {}));
var UploadCategory;
(function (UploadCategory) {
    UploadCategory["CURATED"] = "CURATED";
    UploadCategory["PRIVATE"] = "PRIVATE";
})(UploadCategory = exports.UploadCategory || (exports.UploadCategory = {}));
var UploadStatus;
(function (UploadStatus) {
    UploadStatus["FAILED"] = "FAILED";
    UploadStatus["INITIALIZED"] = "INITIALIZED";
    UploadStatus["PROCESSING"] = "PROCESSING";
    UploadStatus["SUCCEEDED"] = "SUCCEEDED";
})(UploadStatus = exports.UploadStatus || (exports.UploadStatus = {}));
var UploadType;
(function (UploadType) {
    UploadType["ANDROID_APP"] = "ANDROID_APP";
    UploadType["APPIUM_JAVA_JUNIT_TEST_PACKAGE"] = "APPIUM_JAVA_JUNIT_TEST_PACKAGE";
    UploadType["APPIUM_JAVA_JUNIT_TEST_SPEC"] = "APPIUM_JAVA_JUNIT_TEST_SPEC";
    UploadType["APPIUM_JAVA_TESTNG_TEST_PACKAGE"] = "APPIUM_JAVA_TESTNG_TEST_PACKAGE";
    UploadType["APPIUM_JAVA_TESTNG_TEST_SPEC"] = "APPIUM_JAVA_TESTNG_TEST_SPEC";
    UploadType["APPIUM_NODE_TEST_PACKAGE"] = "APPIUM_NODE_TEST_PACKAGE";
    UploadType["APPIUM_NODE_TEST_SPEC"] = "APPIUM_NODE_TEST_SPEC";
    UploadType["APPIUM_PYTHON_TEST_PACKAGE"] = "APPIUM_PYTHON_TEST_PACKAGE";
    UploadType["APPIUM_PYTHON_TEST_SPEC"] = "APPIUM_PYTHON_TEST_SPEC";
    UploadType["APPIUM_RUBY_TEST_PACKAGE"] = "APPIUM_RUBY_TEST_PACKAGE";
    UploadType["APPIUM_RUBY_TEST_SPEC"] = "APPIUM_RUBY_TEST_SPEC";
    UploadType["APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE"] = "APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE";
    UploadType["APPIUM_WEB_JAVA_JUNIT_TEST_SPEC"] = "APPIUM_WEB_JAVA_JUNIT_TEST_SPEC";
    UploadType["APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE"] = "APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE";
    UploadType["APPIUM_WEB_JAVA_TESTNG_TEST_SPEC"] = "APPIUM_WEB_JAVA_TESTNG_TEST_SPEC";
    UploadType["APPIUM_WEB_NODE_TEST_PACKAGE"] = "APPIUM_WEB_NODE_TEST_PACKAGE";
    UploadType["APPIUM_WEB_NODE_TEST_SPEC"] = "APPIUM_WEB_NODE_TEST_SPEC";
    UploadType["APPIUM_WEB_PYTHON_TEST_PACKAGE"] = "APPIUM_WEB_PYTHON_TEST_PACKAGE";
    UploadType["APPIUM_WEB_PYTHON_TEST_SPEC"] = "APPIUM_WEB_PYTHON_TEST_SPEC";
    UploadType["APPIUM_WEB_RUBY_TEST_PACKAGE"] = "APPIUM_WEB_RUBY_TEST_PACKAGE";
    UploadType["APPIUM_WEB_RUBY_TEST_SPEC"] = "APPIUM_WEB_RUBY_TEST_SPEC";
    UploadType["CALABASH_TEST_PACKAGE"] = "CALABASH_TEST_PACKAGE";
    UploadType["EXTERNAL_DATA"] = "EXTERNAL_DATA";
    UploadType["INSTRUMENTATION_TEST_PACKAGE"] = "INSTRUMENTATION_TEST_PACKAGE";
    UploadType["INSTRUMENTATION_TEST_SPEC"] = "INSTRUMENTATION_TEST_SPEC";
    UploadType["IOS_APP"] = "IOS_APP";
    UploadType["UIAUTOMATION_TEST_PACKAGE"] = "UIAUTOMATION_TEST_PACKAGE";
    UploadType["UIAUTOMATOR_TEST_PACKAGE"] = "UIAUTOMATOR_TEST_PACKAGE";
    UploadType["WEB_APP"] = "WEB_APP";
    UploadType["XCTEST_TEST_PACKAGE"] = "XCTEST_TEST_PACKAGE";
    UploadType["XCTEST_UI_TEST_PACKAGE"] = "XCTEST_UI_TEST_PACKAGE";
    UploadType["XCTEST_UI_TEST_SPEC"] = "XCTEST_UI_TEST_SPEC";
})(UploadType = exports.UploadType || (exports.UploadType = {}));
var VPCEConfiguration;
(function (VPCEConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "VPCEConfiguration");
    }
    VPCEConfiguration.isa = isa;
})(VPCEConfiguration = exports.VPCEConfiguration || (exports.VPCEConfiguration = {}));
//# sourceMappingURL=index.js.map