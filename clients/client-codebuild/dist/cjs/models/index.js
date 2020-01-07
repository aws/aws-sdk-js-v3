"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccountLimitExceededException;
(function (AccountLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccountLimitExceededException");
    }
    AccountLimitExceededException.isa = isa;
})(AccountLimitExceededException = exports.AccountLimitExceededException || (exports.AccountLimitExceededException = {}));
var ArtifactNamespace;
(function (ArtifactNamespace) {
    ArtifactNamespace["BUILD_ID"] = "BUILD_ID";
    ArtifactNamespace["NONE"] = "NONE";
})(ArtifactNamespace = exports.ArtifactNamespace || (exports.ArtifactNamespace = {}));
var ArtifactPackaging;
(function (ArtifactPackaging) {
    ArtifactPackaging["NONE"] = "NONE";
    ArtifactPackaging["ZIP"] = "ZIP";
})(ArtifactPackaging = exports.ArtifactPackaging || (exports.ArtifactPackaging = {}));
var ArtifactsType;
(function (ArtifactsType) {
    ArtifactsType["CODEPIPELINE"] = "CODEPIPELINE";
    ArtifactsType["NO_ARTIFACTS"] = "NO_ARTIFACTS";
    ArtifactsType["S3"] = "S3";
})(ArtifactsType = exports.ArtifactsType || (exports.ArtifactsType = {}));
var AuthType;
(function (AuthType) {
    AuthType["BASIC_AUTH"] = "BASIC_AUTH";
    AuthType["OAUTH"] = "OAUTH";
    AuthType["PERSONAL_ACCESS_TOKEN"] = "PERSONAL_ACCESS_TOKEN";
})(AuthType = exports.AuthType || (exports.AuthType = {}));
var BatchDeleteBuildsInput;
(function (BatchDeleteBuildsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDeleteBuildsInput");
    }
    BatchDeleteBuildsInput.isa = isa;
})(BatchDeleteBuildsInput = exports.BatchDeleteBuildsInput || (exports.BatchDeleteBuildsInput = {}));
var BatchDeleteBuildsOutput;
(function (BatchDeleteBuildsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchDeleteBuildsOutput");
    }
    BatchDeleteBuildsOutput.isa = isa;
})(BatchDeleteBuildsOutput = exports.BatchDeleteBuildsOutput || (exports.BatchDeleteBuildsOutput = {}));
var BatchGetBuildsInput;
(function (BatchGetBuildsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetBuildsInput");
    }
    BatchGetBuildsInput.isa = isa;
})(BatchGetBuildsInput = exports.BatchGetBuildsInput || (exports.BatchGetBuildsInput = {}));
var BatchGetBuildsOutput;
(function (BatchGetBuildsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetBuildsOutput");
    }
    BatchGetBuildsOutput.isa = isa;
})(BatchGetBuildsOutput = exports.BatchGetBuildsOutput || (exports.BatchGetBuildsOutput = {}));
var BatchGetProjectsInput;
(function (BatchGetProjectsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetProjectsInput");
    }
    BatchGetProjectsInput.isa = isa;
})(BatchGetProjectsInput = exports.BatchGetProjectsInput || (exports.BatchGetProjectsInput = {}));
var BatchGetProjectsOutput;
(function (BatchGetProjectsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetProjectsOutput");
    }
    BatchGetProjectsOutput.isa = isa;
})(BatchGetProjectsOutput = exports.BatchGetProjectsOutput || (exports.BatchGetProjectsOutput = {}));
var BatchGetReportGroupsInput;
(function (BatchGetReportGroupsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetReportGroupsInput");
    }
    BatchGetReportGroupsInput.isa = isa;
})(BatchGetReportGroupsInput = exports.BatchGetReportGroupsInput || (exports.BatchGetReportGroupsInput = {}));
var BatchGetReportGroupsOutput;
(function (BatchGetReportGroupsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetReportGroupsOutput");
    }
    BatchGetReportGroupsOutput.isa = isa;
})(BatchGetReportGroupsOutput = exports.BatchGetReportGroupsOutput || (exports.BatchGetReportGroupsOutput = {}));
var BatchGetReportsInput;
(function (BatchGetReportsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetReportsInput");
    }
    BatchGetReportsInput.isa = isa;
})(BatchGetReportsInput = exports.BatchGetReportsInput || (exports.BatchGetReportsInput = {}));
var BatchGetReportsOutput;
(function (BatchGetReportsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchGetReportsOutput");
    }
    BatchGetReportsOutput.isa = isa;
})(BatchGetReportsOutput = exports.BatchGetReportsOutput || (exports.BatchGetReportsOutput = {}));
var Build;
(function (Build) {
    function isa(o) {
        return smithy_client_1.isa(o, "Build");
    }
    Build.isa = isa;
})(Build = exports.Build || (exports.Build = {}));
var BuildArtifacts;
(function (BuildArtifacts) {
    function isa(o) {
        return smithy_client_1.isa(o, "BuildArtifacts");
    }
    BuildArtifacts.isa = isa;
})(BuildArtifacts = exports.BuildArtifacts || (exports.BuildArtifacts = {}));
var BuildNotDeleted;
(function (BuildNotDeleted) {
    function isa(o) {
        return smithy_client_1.isa(o, "BuildNotDeleted");
    }
    BuildNotDeleted.isa = isa;
})(BuildNotDeleted = exports.BuildNotDeleted || (exports.BuildNotDeleted = {}));
var BuildPhase;
(function (BuildPhase) {
    function isa(o) {
        return smithy_client_1.isa(o, "BuildPhase");
    }
    BuildPhase.isa = isa;
})(BuildPhase = exports.BuildPhase || (exports.BuildPhase = {}));
var BuildPhaseType;
(function (BuildPhaseType) {
    BuildPhaseType["BUILD"] = "BUILD";
    BuildPhaseType["COMPLETED"] = "COMPLETED";
    BuildPhaseType["DOWNLOAD_SOURCE"] = "DOWNLOAD_SOURCE";
    BuildPhaseType["FINALIZING"] = "FINALIZING";
    BuildPhaseType["INSTALL"] = "INSTALL";
    BuildPhaseType["POST_BUILD"] = "POST_BUILD";
    BuildPhaseType["PRE_BUILD"] = "PRE_BUILD";
    BuildPhaseType["PROVISIONING"] = "PROVISIONING";
    BuildPhaseType["QUEUED"] = "QUEUED";
    BuildPhaseType["SUBMITTED"] = "SUBMITTED";
    BuildPhaseType["UPLOAD_ARTIFACTS"] = "UPLOAD_ARTIFACTS";
})(BuildPhaseType = exports.BuildPhaseType || (exports.BuildPhaseType = {}));
var CacheMode;
(function (CacheMode) {
    CacheMode["LOCAL_CUSTOM_CACHE"] = "LOCAL_CUSTOM_CACHE";
    CacheMode["LOCAL_DOCKER_LAYER_CACHE"] = "LOCAL_DOCKER_LAYER_CACHE";
    CacheMode["LOCAL_SOURCE_CACHE"] = "LOCAL_SOURCE_CACHE";
})(CacheMode = exports.CacheMode || (exports.CacheMode = {}));
var CacheType;
(function (CacheType) {
    CacheType["LOCAL"] = "LOCAL";
    CacheType["NO_CACHE"] = "NO_CACHE";
    CacheType["S3"] = "S3";
})(CacheType = exports.CacheType || (exports.CacheType = {}));
var CloudWatchLogsConfig;
(function (CloudWatchLogsConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "CloudWatchLogsConfig");
    }
    CloudWatchLogsConfig.isa = isa;
})(CloudWatchLogsConfig = exports.CloudWatchLogsConfig || (exports.CloudWatchLogsConfig = {}));
var ComputeType;
(function (ComputeType) {
    ComputeType["BUILD_GENERAL1_2XLARGE"] = "BUILD_GENERAL1_2XLARGE";
    ComputeType["BUILD_GENERAL1_LARGE"] = "BUILD_GENERAL1_LARGE";
    ComputeType["BUILD_GENERAL1_MEDIUM"] = "BUILD_GENERAL1_MEDIUM";
    ComputeType["BUILD_GENERAL1_SMALL"] = "BUILD_GENERAL1_SMALL";
})(ComputeType = exports.ComputeType || (exports.ComputeType = {}));
var CreateProjectInput;
(function (CreateProjectInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateProjectInput");
    }
    CreateProjectInput.isa = isa;
})(CreateProjectInput = exports.CreateProjectInput || (exports.CreateProjectInput = {}));
var CreateProjectOutput;
(function (CreateProjectOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateProjectOutput");
    }
    CreateProjectOutput.isa = isa;
})(CreateProjectOutput = exports.CreateProjectOutput || (exports.CreateProjectOutput = {}));
var CreateReportGroupInput;
(function (CreateReportGroupInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateReportGroupInput");
    }
    CreateReportGroupInput.isa = isa;
})(CreateReportGroupInput = exports.CreateReportGroupInput || (exports.CreateReportGroupInput = {}));
var CreateReportGroupOutput;
(function (CreateReportGroupOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateReportGroupOutput");
    }
    CreateReportGroupOutput.isa = isa;
})(CreateReportGroupOutput = exports.CreateReportGroupOutput || (exports.CreateReportGroupOutput = {}));
var CreateWebhookInput;
(function (CreateWebhookInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateWebhookInput");
    }
    CreateWebhookInput.isa = isa;
})(CreateWebhookInput = exports.CreateWebhookInput || (exports.CreateWebhookInput = {}));
var CreateWebhookOutput;
(function (CreateWebhookOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateWebhookOutput");
    }
    CreateWebhookOutput.isa = isa;
})(CreateWebhookOutput = exports.CreateWebhookOutput || (exports.CreateWebhookOutput = {}));
var CredentialProviderType;
(function (CredentialProviderType) {
    CredentialProviderType["SECRETS_MANAGER"] = "SECRETS_MANAGER";
})(CredentialProviderType = exports.CredentialProviderType || (exports.CredentialProviderType = {}));
var DeleteProjectInput;
(function (DeleteProjectInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteProjectInput");
    }
    DeleteProjectInput.isa = isa;
})(DeleteProjectInput = exports.DeleteProjectInput || (exports.DeleteProjectInput = {}));
var DeleteProjectOutput;
(function (DeleteProjectOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteProjectOutput");
    }
    DeleteProjectOutput.isa = isa;
})(DeleteProjectOutput = exports.DeleteProjectOutput || (exports.DeleteProjectOutput = {}));
var DeleteReportGroupInput;
(function (DeleteReportGroupInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteReportGroupInput");
    }
    DeleteReportGroupInput.isa = isa;
})(DeleteReportGroupInput = exports.DeleteReportGroupInput || (exports.DeleteReportGroupInput = {}));
var DeleteReportGroupOutput;
(function (DeleteReportGroupOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteReportGroupOutput");
    }
    DeleteReportGroupOutput.isa = isa;
})(DeleteReportGroupOutput = exports.DeleteReportGroupOutput || (exports.DeleteReportGroupOutput = {}));
var DeleteReportInput;
(function (DeleteReportInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteReportInput");
    }
    DeleteReportInput.isa = isa;
})(DeleteReportInput = exports.DeleteReportInput || (exports.DeleteReportInput = {}));
var DeleteReportOutput;
(function (DeleteReportOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteReportOutput");
    }
    DeleteReportOutput.isa = isa;
})(DeleteReportOutput = exports.DeleteReportOutput || (exports.DeleteReportOutput = {}));
var DeleteResourcePolicyInput;
(function (DeleteResourcePolicyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteResourcePolicyInput");
    }
    DeleteResourcePolicyInput.isa = isa;
})(DeleteResourcePolicyInput = exports.DeleteResourcePolicyInput || (exports.DeleteResourcePolicyInput = {}));
var DeleteResourcePolicyOutput;
(function (DeleteResourcePolicyOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteResourcePolicyOutput");
    }
    DeleteResourcePolicyOutput.isa = isa;
})(DeleteResourcePolicyOutput = exports.DeleteResourcePolicyOutput || (exports.DeleteResourcePolicyOutput = {}));
var DeleteSourceCredentialsInput;
(function (DeleteSourceCredentialsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSourceCredentialsInput");
    }
    DeleteSourceCredentialsInput.isa = isa;
})(DeleteSourceCredentialsInput = exports.DeleteSourceCredentialsInput || (exports.DeleteSourceCredentialsInput = {}));
var DeleteSourceCredentialsOutput;
(function (DeleteSourceCredentialsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSourceCredentialsOutput");
    }
    DeleteSourceCredentialsOutput.isa = isa;
})(DeleteSourceCredentialsOutput = exports.DeleteSourceCredentialsOutput || (exports.DeleteSourceCredentialsOutput = {}));
var DeleteWebhookInput;
(function (DeleteWebhookInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteWebhookInput");
    }
    DeleteWebhookInput.isa = isa;
})(DeleteWebhookInput = exports.DeleteWebhookInput || (exports.DeleteWebhookInput = {}));
var DeleteWebhookOutput;
(function (DeleteWebhookOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteWebhookOutput");
    }
    DeleteWebhookOutput.isa = isa;
})(DeleteWebhookOutput = exports.DeleteWebhookOutput || (exports.DeleteWebhookOutput = {}));
var DescribeTestCasesInput;
(function (DescribeTestCasesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTestCasesInput");
    }
    DescribeTestCasesInput.isa = isa;
})(DescribeTestCasesInput = exports.DescribeTestCasesInput || (exports.DescribeTestCasesInput = {}));
var DescribeTestCasesOutput;
(function (DescribeTestCasesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeTestCasesOutput");
    }
    DescribeTestCasesOutput.isa = isa;
})(DescribeTestCasesOutput = exports.DescribeTestCasesOutput || (exports.DescribeTestCasesOutput = {}));
var EnvironmentImage;
(function (EnvironmentImage) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnvironmentImage");
    }
    EnvironmentImage.isa = isa;
})(EnvironmentImage = exports.EnvironmentImage || (exports.EnvironmentImage = {}));
var EnvironmentLanguage;
(function (EnvironmentLanguage) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnvironmentLanguage");
    }
    EnvironmentLanguage.isa = isa;
})(EnvironmentLanguage = exports.EnvironmentLanguage || (exports.EnvironmentLanguage = {}));
var EnvironmentPlatform;
(function (EnvironmentPlatform) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnvironmentPlatform");
    }
    EnvironmentPlatform.isa = isa;
})(EnvironmentPlatform = exports.EnvironmentPlatform || (exports.EnvironmentPlatform = {}));
var EnvironmentType;
(function (EnvironmentType) {
    EnvironmentType["ARM_CONTAINER"] = "ARM_CONTAINER";
    EnvironmentType["LINUX_CONTAINER"] = "LINUX_CONTAINER";
    EnvironmentType["LINUX_GPU_CONTAINER"] = "LINUX_GPU_CONTAINER";
    EnvironmentType["WINDOWS_CONTAINER"] = "WINDOWS_CONTAINER";
})(EnvironmentType = exports.EnvironmentType || (exports.EnvironmentType = {}));
var EnvironmentVariable;
(function (EnvironmentVariable) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnvironmentVariable");
    }
    EnvironmentVariable.isa = isa;
})(EnvironmentVariable = exports.EnvironmentVariable || (exports.EnvironmentVariable = {}));
var EnvironmentVariableType;
(function (EnvironmentVariableType) {
    EnvironmentVariableType["PARAMETER_STORE"] = "PARAMETER_STORE";
    EnvironmentVariableType["PLAINTEXT"] = "PLAINTEXT";
    EnvironmentVariableType["SECRETS_MANAGER"] = "SECRETS_MANAGER";
})(EnvironmentVariableType = exports.EnvironmentVariableType || (exports.EnvironmentVariableType = {}));
var ExportedEnvironmentVariable;
(function (ExportedEnvironmentVariable) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExportedEnvironmentVariable");
    }
    ExportedEnvironmentVariable.isa = isa;
})(ExportedEnvironmentVariable = exports.ExportedEnvironmentVariable || (exports.ExportedEnvironmentVariable = {}));
var GetResourcePolicyInput;
(function (GetResourcePolicyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetResourcePolicyInput");
    }
    GetResourcePolicyInput.isa = isa;
})(GetResourcePolicyInput = exports.GetResourcePolicyInput || (exports.GetResourcePolicyInput = {}));
var GetResourcePolicyOutput;
(function (GetResourcePolicyOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetResourcePolicyOutput");
    }
    GetResourcePolicyOutput.isa = isa;
})(GetResourcePolicyOutput = exports.GetResourcePolicyOutput || (exports.GetResourcePolicyOutput = {}));
var GitSubmodulesConfig;
(function (GitSubmodulesConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "GitSubmodulesConfig");
    }
    GitSubmodulesConfig.isa = isa;
})(GitSubmodulesConfig = exports.GitSubmodulesConfig || (exports.GitSubmodulesConfig = {}));
var ImagePullCredentialsType;
(function (ImagePullCredentialsType) {
    ImagePullCredentialsType["CODEBUILD"] = "CODEBUILD";
    ImagePullCredentialsType["SERVICE_ROLE"] = "SERVICE_ROLE";
})(ImagePullCredentialsType = exports.ImagePullCredentialsType || (exports.ImagePullCredentialsType = {}));
var ImportSourceCredentialsInput;
(function (ImportSourceCredentialsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportSourceCredentialsInput");
    }
    ImportSourceCredentialsInput.isa = isa;
})(ImportSourceCredentialsInput = exports.ImportSourceCredentialsInput || (exports.ImportSourceCredentialsInput = {}));
var ImportSourceCredentialsOutput;
(function (ImportSourceCredentialsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ImportSourceCredentialsOutput");
    }
    ImportSourceCredentialsOutput.isa = isa;
})(ImportSourceCredentialsOutput = exports.ImportSourceCredentialsOutput || (exports.ImportSourceCredentialsOutput = {}));
var InvalidInputException;
(function (InvalidInputException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidInputException");
    }
    InvalidInputException.isa = isa;
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var InvalidateProjectCacheInput;
(function (InvalidateProjectCacheInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidateProjectCacheInput");
    }
    InvalidateProjectCacheInput.isa = isa;
})(InvalidateProjectCacheInput = exports.InvalidateProjectCacheInput || (exports.InvalidateProjectCacheInput = {}));
var InvalidateProjectCacheOutput;
(function (InvalidateProjectCacheOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidateProjectCacheOutput");
    }
    InvalidateProjectCacheOutput.isa = isa;
})(InvalidateProjectCacheOutput = exports.InvalidateProjectCacheOutput || (exports.InvalidateProjectCacheOutput = {}));
var LanguageType;
(function (LanguageType) {
    LanguageType["ANDROID"] = "ANDROID";
    LanguageType["BASE"] = "BASE";
    LanguageType["DOCKER"] = "DOCKER";
    LanguageType["DOTNET"] = "DOTNET";
    LanguageType["GOLANG"] = "GOLANG";
    LanguageType["JAVA"] = "JAVA";
    LanguageType["NODE_JS"] = "NODE_JS";
    LanguageType["PHP"] = "PHP";
    LanguageType["PYTHON"] = "PYTHON";
    LanguageType["RUBY"] = "RUBY";
})(LanguageType = exports.LanguageType || (exports.LanguageType = {}));
var ListBuildsForProjectInput;
(function (ListBuildsForProjectInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBuildsForProjectInput");
    }
    ListBuildsForProjectInput.isa = isa;
})(ListBuildsForProjectInput = exports.ListBuildsForProjectInput || (exports.ListBuildsForProjectInput = {}));
var ListBuildsForProjectOutput;
(function (ListBuildsForProjectOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBuildsForProjectOutput");
    }
    ListBuildsForProjectOutput.isa = isa;
})(ListBuildsForProjectOutput = exports.ListBuildsForProjectOutput || (exports.ListBuildsForProjectOutput = {}));
var ListBuildsInput;
(function (ListBuildsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBuildsInput");
    }
    ListBuildsInput.isa = isa;
})(ListBuildsInput = exports.ListBuildsInput || (exports.ListBuildsInput = {}));
var ListBuildsOutput;
(function (ListBuildsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListBuildsOutput");
    }
    ListBuildsOutput.isa = isa;
})(ListBuildsOutput = exports.ListBuildsOutput || (exports.ListBuildsOutput = {}));
var ListCuratedEnvironmentImagesInput;
(function (ListCuratedEnvironmentImagesInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCuratedEnvironmentImagesInput");
    }
    ListCuratedEnvironmentImagesInput.isa = isa;
})(ListCuratedEnvironmentImagesInput = exports.ListCuratedEnvironmentImagesInput || (exports.ListCuratedEnvironmentImagesInput = {}));
var ListCuratedEnvironmentImagesOutput;
(function (ListCuratedEnvironmentImagesOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListCuratedEnvironmentImagesOutput");
    }
    ListCuratedEnvironmentImagesOutput.isa = isa;
})(ListCuratedEnvironmentImagesOutput = exports.ListCuratedEnvironmentImagesOutput || (exports.ListCuratedEnvironmentImagesOutput = {}));
var ListProjectsInput;
(function (ListProjectsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListProjectsInput");
    }
    ListProjectsInput.isa = isa;
})(ListProjectsInput = exports.ListProjectsInput || (exports.ListProjectsInput = {}));
var ListProjectsOutput;
(function (ListProjectsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListProjectsOutput");
    }
    ListProjectsOutput.isa = isa;
})(ListProjectsOutput = exports.ListProjectsOutput || (exports.ListProjectsOutput = {}));
var ListReportGroupsInput;
(function (ListReportGroupsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListReportGroupsInput");
    }
    ListReportGroupsInput.isa = isa;
})(ListReportGroupsInput = exports.ListReportGroupsInput || (exports.ListReportGroupsInput = {}));
var ListReportGroupsOutput;
(function (ListReportGroupsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListReportGroupsOutput");
    }
    ListReportGroupsOutput.isa = isa;
})(ListReportGroupsOutput = exports.ListReportGroupsOutput || (exports.ListReportGroupsOutput = {}));
var ListReportsForReportGroupInput;
(function (ListReportsForReportGroupInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListReportsForReportGroupInput");
    }
    ListReportsForReportGroupInput.isa = isa;
})(ListReportsForReportGroupInput = exports.ListReportsForReportGroupInput || (exports.ListReportsForReportGroupInput = {}));
var ListReportsForReportGroupOutput;
(function (ListReportsForReportGroupOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListReportsForReportGroupOutput");
    }
    ListReportsForReportGroupOutput.isa = isa;
})(ListReportsForReportGroupOutput = exports.ListReportsForReportGroupOutput || (exports.ListReportsForReportGroupOutput = {}));
var ListReportsInput;
(function (ListReportsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListReportsInput");
    }
    ListReportsInput.isa = isa;
})(ListReportsInput = exports.ListReportsInput || (exports.ListReportsInput = {}));
var ListReportsOutput;
(function (ListReportsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListReportsOutput");
    }
    ListReportsOutput.isa = isa;
})(ListReportsOutput = exports.ListReportsOutput || (exports.ListReportsOutput = {}));
var ListSharedProjectsInput;
(function (ListSharedProjectsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSharedProjectsInput");
    }
    ListSharedProjectsInput.isa = isa;
})(ListSharedProjectsInput = exports.ListSharedProjectsInput || (exports.ListSharedProjectsInput = {}));
var ListSharedProjectsOutput;
(function (ListSharedProjectsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSharedProjectsOutput");
    }
    ListSharedProjectsOutput.isa = isa;
})(ListSharedProjectsOutput = exports.ListSharedProjectsOutput || (exports.ListSharedProjectsOutput = {}));
var ListSharedReportGroupsInput;
(function (ListSharedReportGroupsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSharedReportGroupsInput");
    }
    ListSharedReportGroupsInput.isa = isa;
})(ListSharedReportGroupsInput = exports.ListSharedReportGroupsInput || (exports.ListSharedReportGroupsInput = {}));
var ListSharedReportGroupsOutput;
(function (ListSharedReportGroupsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSharedReportGroupsOutput");
    }
    ListSharedReportGroupsOutput.isa = isa;
})(ListSharedReportGroupsOutput = exports.ListSharedReportGroupsOutput || (exports.ListSharedReportGroupsOutput = {}));
var ListSourceCredentialsInput;
(function (ListSourceCredentialsInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSourceCredentialsInput");
    }
    ListSourceCredentialsInput.isa = isa;
})(ListSourceCredentialsInput = exports.ListSourceCredentialsInput || (exports.ListSourceCredentialsInput = {}));
var ListSourceCredentialsOutput;
(function (ListSourceCredentialsOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSourceCredentialsOutput");
    }
    ListSourceCredentialsOutput.isa = isa;
})(ListSourceCredentialsOutput = exports.ListSourceCredentialsOutput || (exports.ListSourceCredentialsOutput = {}));
var LogsConfig;
(function (LogsConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "LogsConfig");
    }
    LogsConfig.isa = isa;
})(LogsConfig = exports.LogsConfig || (exports.LogsConfig = {}));
var LogsConfigStatusType;
(function (LogsConfigStatusType) {
    LogsConfigStatusType["DISABLED"] = "DISABLED";
    LogsConfigStatusType["ENABLED"] = "ENABLED";
})(LogsConfigStatusType = exports.LogsConfigStatusType || (exports.LogsConfigStatusType = {}));
var LogsLocation;
(function (LogsLocation) {
    function isa(o) {
        return smithy_client_1.isa(o, "LogsLocation");
    }
    LogsLocation.isa = isa;
})(LogsLocation = exports.LogsLocation || (exports.LogsLocation = {}));
var NetworkInterface;
(function (NetworkInterface) {
    function isa(o) {
        return smithy_client_1.isa(o, "NetworkInterface");
    }
    NetworkInterface.isa = isa;
})(NetworkInterface = exports.NetworkInterface || (exports.NetworkInterface = {}));
var OAuthProviderException;
(function (OAuthProviderException) {
    function isa(o) {
        return smithy_client_1.isa(o, "OAuthProviderException");
    }
    OAuthProviderException.isa = isa;
})(OAuthProviderException = exports.OAuthProviderException || (exports.OAuthProviderException = {}));
var PhaseContext;
(function (PhaseContext) {
    function isa(o) {
        return smithy_client_1.isa(o, "PhaseContext");
    }
    PhaseContext.isa = isa;
})(PhaseContext = exports.PhaseContext || (exports.PhaseContext = {}));
var PlatformType;
(function (PlatformType) {
    PlatformType["AMAZON_LINUX"] = "AMAZON_LINUX";
    PlatformType["DEBIAN"] = "DEBIAN";
    PlatformType["UBUNTU"] = "UBUNTU";
    PlatformType["WINDOWS_SERVER"] = "WINDOWS_SERVER";
})(PlatformType = exports.PlatformType || (exports.PlatformType = {}));
var Project;
(function (Project) {
    function isa(o) {
        return smithy_client_1.isa(o, "Project");
    }
    Project.isa = isa;
})(Project = exports.Project || (exports.Project = {}));
var ProjectArtifacts;
(function (ProjectArtifacts) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProjectArtifacts");
    }
    ProjectArtifacts.isa = isa;
})(ProjectArtifacts = exports.ProjectArtifacts || (exports.ProjectArtifacts = {}));
var ProjectBadge;
(function (ProjectBadge) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProjectBadge");
    }
    ProjectBadge.isa = isa;
})(ProjectBadge = exports.ProjectBadge || (exports.ProjectBadge = {}));
var ProjectCache;
(function (ProjectCache) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProjectCache");
    }
    ProjectCache.isa = isa;
})(ProjectCache = exports.ProjectCache || (exports.ProjectCache = {}));
var ProjectEnvironment;
(function (ProjectEnvironment) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProjectEnvironment");
    }
    ProjectEnvironment.isa = isa;
})(ProjectEnvironment = exports.ProjectEnvironment || (exports.ProjectEnvironment = {}));
var ProjectSortByType;
(function (ProjectSortByType) {
    ProjectSortByType["CREATED_TIME"] = "CREATED_TIME";
    ProjectSortByType["LAST_MODIFIED_TIME"] = "LAST_MODIFIED_TIME";
    ProjectSortByType["NAME"] = "NAME";
})(ProjectSortByType = exports.ProjectSortByType || (exports.ProjectSortByType = {}));
var ProjectSource;
(function (ProjectSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProjectSource");
    }
    ProjectSource.isa = isa;
})(ProjectSource = exports.ProjectSource || (exports.ProjectSource = {}));
var ProjectSourceVersion;
(function (ProjectSourceVersion) {
    function isa(o) {
        return smithy_client_1.isa(o, "ProjectSourceVersion");
    }
    ProjectSourceVersion.isa = isa;
})(ProjectSourceVersion = exports.ProjectSourceVersion || (exports.ProjectSourceVersion = {}));
var PutResourcePolicyInput;
(function (PutResourcePolicyInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutResourcePolicyInput");
    }
    PutResourcePolicyInput.isa = isa;
})(PutResourcePolicyInput = exports.PutResourcePolicyInput || (exports.PutResourcePolicyInput = {}));
var PutResourcePolicyOutput;
(function (PutResourcePolicyOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutResourcePolicyOutput");
    }
    PutResourcePolicyOutput.isa = isa;
})(PutResourcePolicyOutput = exports.PutResourcePolicyOutput || (exports.PutResourcePolicyOutput = {}));
var RegistryCredential;
(function (RegistryCredential) {
    function isa(o) {
        return smithy_client_1.isa(o, "RegistryCredential");
    }
    RegistryCredential.isa = isa;
})(RegistryCredential = exports.RegistryCredential || (exports.RegistryCredential = {}));
var Report;
(function (Report) {
    function isa(o) {
        return smithy_client_1.isa(o, "Report");
    }
    Report.isa = isa;
})(Report = exports.Report || (exports.Report = {}));
var ReportExportConfig;
(function (ReportExportConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReportExportConfig");
    }
    ReportExportConfig.isa = isa;
})(ReportExportConfig = exports.ReportExportConfig || (exports.ReportExportConfig = {}));
var ReportExportConfigType;
(function (ReportExportConfigType) {
    ReportExportConfigType["NO_EXPORT"] = "NO_EXPORT";
    ReportExportConfigType["S3"] = "S3";
})(ReportExportConfigType = exports.ReportExportConfigType || (exports.ReportExportConfigType = {}));
var ReportFilter;
(function (ReportFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReportFilter");
    }
    ReportFilter.isa = isa;
})(ReportFilter = exports.ReportFilter || (exports.ReportFilter = {}));
var ReportGroup;
(function (ReportGroup) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReportGroup");
    }
    ReportGroup.isa = isa;
})(ReportGroup = exports.ReportGroup || (exports.ReportGroup = {}));
var ReportGroupSortByType;
(function (ReportGroupSortByType) {
    ReportGroupSortByType["CREATED_TIME"] = "CREATED_TIME";
    ReportGroupSortByType["LAST_MODIFIED_TIME"] = "LAST_MODIFIED_TIME";
    ReportGroupSortByType["NAME"] = "NAME";
})(ReportGroupSortByType = exports.ReportGroupSortByType || (exports.ReportGroupSortByType = {}));
var ReportPackagingType;
(function (ReportPackagingType) {
    ReportPackagingType["NONE"] = "NONE";
    ReportPackagingType["ZIP"] = "ZIP";
})(ReportPackagingType = exports.ReportPackagingType || (exports.ReportPackagingType = {}));
var ReportStatusType;
(function (ReportStatusType) {
    ReportStatusType["DELETING"] = "DELETING";
    ReportStatusType["FAILED"] = "FAILED";
    ReportStatusType["GENERATING"] = "GENERATING";
    ReportStatusType["INCOMPLETE"] = "INCOMPLETE";
    ReportStatusType["SUCCEEDED"] = "SUCCEEDED";
})(ReportStatusType = exports.ReportStatusType || (exports.ReportStatusType = {}));
var ReportType;
(function (ReportType) {
    ReportType["TEST"] = "TEST";
})(ReportType = exports.ReportType || (exports.ReportType = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceAlreadyExistsException");
    }
    ResourceAlreadyExistsException.isa = isa;
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var S3LogsConfig;
(function (S3LogsConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3LogsConfig");
    }
    S3LogsConfig.isa = isa;
})(S3LogsConfig = exports.S3LogsConfig || (exports.S3LogsConfig = {}));
var S3ReportExportConfig;
(function (S3ReportExportConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "S3ReportExportConfig");
    }
    S3ReportExportConfig.isa = isa;
})(S3ReportExportConfig = exports.S3ReportExportConfig || (exports.S3ReportExportConfig = {}));
var ServerType;
(function (ServerType) {
    ServerType["BITBUCKET"] = "BITBUCKET";
    ServerType["GITHUB"] = "GITHUB";
    ServerType["GITHUB_ENTERPRISE"] = "GITHUB_ENTERPRISE";
})(ServerType = exports.ServerType || (exports.ServerType = {}));
var SharedResourceSortByType;
(function (SharedResourceSortByType) {
    SharedResourceSortByType["ARN"] = "ARN";
    SharedResourceSortByType["MODIFIED_TIME"] = "MODIFIED_TIME";
})(SharedResourceSortByType = exports.SharedResourceSortByType || (exports.SharedResourceSortByType = {}));
var SortOrderType;
(function (SortOrderType) {
    SortOrderType["ASCENDING"] = "ASCENDING";
    SortOrderType["DESCENDING"] = "DESCENDING";
})(SortOrderType = exports.SortOrderType || (exports.SortOrderType = {}));
var SourceAuth;
(function (SourceAuth) {
    function isa(o) {
        return smithy_client_1.isa(o, "SourceAuth");
    }
    SourceAuth.isa = isa;
})(SourceAuth = exports.SourceAuth || (exports.SourceAuth = {}));
var SourceAuthType;
(function (SourceAuthType) {
    SourceAuthType["OAUTH"] = "OAUTH";
})(SourceAuthType = exports.SourceAuthType || (exports.SourceAuthType = {}));
var SourceCredentialsInfo;
(function (SourceCredentialsInfo) {
    function isa(o) {
        return smithy_client_1.isa(o, "SourceCredentialsInfo");
    }
    SourceCredentialsInfo.isa = isa;
})(SourceCredentialsInfo = exports.SourceCredentialsInfo || (exports.SourceCredentialsInfo = {}));
var SourceType;
(function (SourceType) {
    SourceType["BITBUCKET"] = "BITBUCKET";
    SourceType["CODECOMMIT"] = "CODECOMMIT";
    SourceType["CODEPIPELINE"] = "CODEPIPELINE";
    SourceType["GITHUB"] = "GITHUB";
    SourceType["GITHUB_ENTERPRISE"] = "GITHUB_ENTERPRISE";
    SourceType["NO_SOURCE"] = "NO_SOURCE";
    SourceType["S3"] = "S3";
})(SourceType = exports.SourceType || (exports.SourceType = {}));
var StartBuildInput;
(function (StartBuildInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartBuildInput");
    }
    StartBuildInput.isa = isa;
})(StartBuildInput = exports.StartBuildInput || (exports.StartBuildInput = {}));
var StartBuildOutput;
(function (StartBuildOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StartBuildOutput");
    }
    StartBuildOutput.isa = isa;
})(StartBuildOutput = exports.StartBuildOutput || (exports.StartBuildOutput = {}));
var StatusType;
(function (StatusType) {
    StatusType["FAILED"] = "FAILED";
    StatusType["FAULT"] = "FAULT";
    StatusType["IN_PROGRESS"] = "IN_PROGRESS";
    StatusType["STOPPED"] = "STOPPED";
    StatusType["SUCCEEDED"] = "SUCCEEDED";
    StatusType["TIMED_OUT"] = "TIMED_OUT";
})(StatusType = exports.StatusType || (exports.StatusType = {}));
var StopBuildInput;
(function (StopBuildInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopBuildInput");
    }
    StopBuildInput.isa = isa;
})(StopBuildInput = exports.StopBuildInput || (exports.StopBuildInput = {}));
var StopBuildOutput;
(function (StopBuildOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "StopBuildOutput");
    }
    StopBuildOutput.isa = isa;
})(StopBuildOutput = exports.StopBuildOutput || (exports.StopBuildOutput = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TestCase;
(function (TestCase) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestCase");
    }
    TestCase.isa = isa;
})(TestCase = exports.TestCase || (exports.TestCase = {}));
var TestCaseFilter;
(function (TestCaseFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestCaseFilter");
    }
    TestCaseFilter.isa = isa;
})(TestCaseFilter = exports.TestCaseFilter || (exports.TestCaseFilter = {}));
var TestReportSummary;
(function (TestReportSummary) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestReportSummary");
    }
    TestReportSummary.isa = isa;
})(TestReportSummary = exports.TestReportSummary || (exports.TestReportSummary = {}));
var UpdateProjectInput;
(function (UpdateProjectInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateProjectInput");
    }
    UpdateProjectInput.isa = isa;
})(UpdateProjectInput = exports.UpdateProjectInput || (exports.UpdateProjectInput = {}));
var UpdateProjectOutput;
(function (UpdateProjectOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateProjectOutput");
    }
    UpdateProjectOutput.isa = isa;
})(UpdateProjectOutput = exports.UpdateProjectOutput || (exports.UpdateProjectOutput = {}));
var UpdateReportGroupInput;
(function (UpdateReportGroupInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateReportGroupInput");
    }
    UpdateReportGroupInput.isa = isa;
})(UpdateReportGroupInput = exports.UpdateReportGroupInput || (exports.UpdateReportGroupInput = {}));
var UpdateReportGroupOutput;
(function (UpdateReportGroupOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateReportGroupOutput");
    }
    UpdateReportGroupOutput.isa = isa;
})(UpdateReportGroupOutput = exports.UpdateReportGroupOutput || (exports.UpdateReportGroupOutput = {}));
var UpdateWebhookInput;
(function (UpdateWebhookInput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateWebhookInput");
    }
    UpdateWebhookInput.isa = isa;
})(UpdateWebhookInput = exports.UpdateWebhookInput || (exports.UpdateWebhookInput = {}));
var UpdateWebhookOutput;
(function (UpdateWebhookOutput) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateWebhookOutput");
    }
    UpdateWebhookOutput.isa = isa;
})(UpdateWebhookOutput = exports.UpdateWebhookOutput || (exports.UpdateWebhookOutput = {}));
var VpcConfig;
(function (VpcConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "VpcConfig");
    }
    VpcConfig.isa = isa;
})(VpcConfig = exports.VpcConfig || (exports.VpcConfig = {}));
var Webhook;
(function (Webhook) {
    function isa(o) {
        return smithy_client_1.isa(o, "Webhook");
    }
    Webhook.isa = isa;
})(Webhook = exports.Webhook || (exports.Webhook = {}));
var WebhookFilter;
(function (WebhookFilter) {
    function isa(o) {
        return smithy_client_1.isa(o, "WebhookFilter");
    }
    WebhookFilter.isa = isa;
})(WebhookFilter = exports.WebhookFilter || (exports.WebhookFilter = {}));
var WebhookFilterType;
(function (WebhookFilterType) {
    WebhookFilterType["ACTOR_ACCOUNT_ID"] = "ACTOR_ACCOUNT_ID";
    WebhookFilterType["BASE_REF"] = "BASE_REF";
    WebhookFilterType["EVENT"] = "EVENT";
    WebhookFilterType["FILE_PATH"] = "FILE_PATH";
    WebhookFilterType["HEAD_REF"] = "HEAD_REF";
})(WebhookFilterType = exports.WebhookFilterType || (exports.WebhookFilterType = {}));
//# sourceMappingURL=index.js.map