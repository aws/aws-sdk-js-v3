import {
  CreateAppCommandInput,
  CreateAppCommandOutput
} from "../commands/CreateAppCommand";
import {
  CreateBackendEnvironmentCommandInput,
  CreateBackendEnvironmentCommandOutput
} from "../commands/CreateBackendEnvironmentCommand";
import {
  CreateBranchCommandInput,
  CreateBranchCommandOutput
} from "../commands/CreateBranchCommand";
import {
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput
} from "../commands/CreateDeploymentCommand";
import {
  CreateDomainAssociationCommandInput,
  CreateDomainAssociationCommandOutput
} from "../commands/CreateDomainAssociationCommand";
import {
  CreateWebhookCommandInput,
  CreateWebhookCommandOutput
} from "../commands/CreateWebhookCommand";
import {
  DeleteAppCommandInput,
  DeleteAppCommandOutput
} from "../commands/DeleteAppCommand";
import {
  DeleteBackendEnvironmentCommandInput,
  DeleteBackendEnvironmentCommandOutput
} from "../commands/DeleteBackendEnvironmentCommand";
import {
  DeleteBranchCommandInput,
  DeleteBranchCommandOutput
} from "../commands/DeleteBranchCommand";
import {
  DeleteDomainAssociationCommandInput,
  DeleteDomainAssociationCommandOutput
} from "../commands/DeleteDomainAssociationCommand";
import {
  DeleteJobCommandInput,
  DeleteJobCommandOutput
} from "../commands/DeleteJobCommand";
import {
  DeleteWebhookCommandInput,
  DeleteWebhookCommandOutput
} from "../commands/DeleteWebhookCommand";
import {
  GenerateAccessLogsCommandInput,
  GenerateAccessLogsCommandOutput
} from "../commands/GenerateAccessLogsCommand";
import {
  GetAppCommandInput,
  GetAppCommandOutput
} from "../commands/GetAppCommand";
import {
  GetArtifactUrlCommandInput,
  GetArtifactUrlCommandOutput
} from "../commands/GetArtifactUrlCommand";
import {
  GetBackendEnvironmentCommandInput,
  GetBackendEnvironmentCommandOutput
} from "../commands/GetBackendEnvironmentCommand";
import {
  GetBranchCommandInput,
  GetBranchCommandOutput
} from "../commands/GetBranchCommand";
import {
  GetDomainAssociationCommandInput,
  GetDomainAssociationCommandOutput
} from "../commands/GetDomainAssociationCommand";
import {
  GetJobCommandInput,
  GetJobCommandOutput
} from "../commands/GetJobCommand";
import {
  GetWebhookCommandInput,
  GetWebhookCommandOutput
} from "../commands/GetWebhookCommand";
import {
  ListAppsCommandInput,
  ListAppsCommandOutput
} from "../commands/ListAppsCommand";
import {
  ListArtifactsCommandInput,
  ListArtifactsCommandOutput
} from "../commands/ListArtifactsCommand";
import {
  ListBackendEnvironmentsCommandInput,
  ListBackendEnvironmentsCommandOutput
} from "../commands/ListBackendEnvironmentsCommand";
import {
  ListBranchesCommandInput,
  ListBranchesCommandOutput
} from "../commands/ListBranchesCommand";
import {
  ListDomainAssociationsCommandInput,
  ListDomainAssociationsCommandOutput
} from "../commands/ListDomainAssociationsCommand";
import {
  ListJobsCommandInput,
  ListJobsCommandOutput
} from "../commands/ListJobsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListWebhooksCommandInput,
  ListWebhooksCommandOutput
} from "../commands/ListWebhooksCommand";
import {
  StartDeploymentCommandInput,
  StartDeploymentCommandOutput
} from "../commands/StartDeploymentCommand";
import {
  StartJobCommandInput,
  StartJobCommandOutput
} from "../commands/StartJobCommand";
import {
  StopJobCommandInput,
  StopJobCommandOutput
} from "../commands/StopJobCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateAppCommandInput,
  UpdateAppCommandOutput
} from "../commands/UpdateAppCommand";
import {
  UpdateBranchCommandInput,
  UpdateBranchCommandOutput
} from "../commands/UpdateBranchCommand";
import {
  UpdateDomainAssociationCommandInput,
  UpdateDomainAssociationCommandOutput
} from "../commands/UpdateDomainAssociationCommand";
import {
  UpdateWebhookCommandInput,
  UpdateWebhookCommandOutput
} from "../commands/UpdateWebhookCommand";
import {
  App,
  Artifact,
  AutoBranchCreationConfig,
  BackendEnvironment,
  BadRequestException,
  Branch,
  CustomRule,
  DependentServiceFailureException,
  DomainAssociation,
  InternalFailureException,
  Job,
  JobSummary,
  LimitExceededException,
  NotFoundException,
  ProductionBranch,
  ResourceNotFoundException,
  Step,
  SubDomain,
  SubDomainSetting,
  UnauthorizedException,
  Webhook
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1CreateAppCommand(
  input: CreateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apps";
  let body: any = {};
  const bodyParams: any = {};
  if (input.accessToken !== undefined) {
    bodyParams["accessToken"] = input.accessToken;
  }
  if (input.autoBranchCreationConfig !== undefined) {
    bodyParams[
      "autoBranchCreationConfig"
    ] = serializeAws_restJson1_1AutoBranchCreationConfig(
      input.autoBranchCreationConfig,
      context
    );
  }
  if (input.autoBranchCreationPatterns !== undefined) {
    bodyParams[
      "autoBranchCreationPatterns"
    ] = serializeAws_restJson1_1AutoBranchCreationPatterns(
      input.autoBranchCreationPatterns,
      context
    );
  }
  if (input.basicAuthCredentials !== undefined) {
    bodyParams["basicAuthCredentials"] = input.basicAuthCredentials;
  }
  if (input.buildSpec !== undefined) {
    bodyParams["buildSpec"] = input.buildSpec;
  }
  if (input.customRules !== undefined) {
    bodyParams["customRules"] = serializeAws_restJson1_1CustomRules(
      input.customRules,
      context
    );
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.enableAutoBranchCreation !== undefined) {
    bodyParams["enableAutoBranchCreation"] = input.enableAutoBranchCreation;
  }
  if (input.enableBasicAuth !== undefined) {
    bodyParams["enableBasicAuth"] = input.enableBasicAuth;
  }
  if (input.enableBranchAutoBuild !== undefined) {
    bodyParams["enableBranchAutoBuild"] = input.enableBranchAutoBuild;
  }
  if (input.environmentVariables !== undefined) {
    bodyParams[
      "environmentVariables"
    ] = serializeAws_restJson1_1EnvironmentVariables(
      input.environmentVariables,
      context
    );
  }
  if (input.iamServiceRoleArn !== undefined) {
    bodyParams["iamServiceRoleArn"] = input.iamServiceRoleArn;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.oauthToken !== undefined) {
    bodyParams["oauthToken"] = input.oauthToken;
  }
  if (input.platform !== undefined) {
    bodyParams["platform"] = input.platform;
  }
  if (input.repository !== undefined) {
    bodyParams["repository"] = input.repository;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateBackendEnvironmentCommand(
  input: CreateBackendEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apps/{appId}/backendenvironments";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.deploymentArtifacts !== undefined) {
    bodyParams["deploymentArtifacts"] = input.deploymentArtifacts;
  }
  if (input.environmentName !== undefined) {
    bodyParams["environmentName"] = input.environmentName;
  }
  if (input.stackName !== undefined) {
    bodyParams["stackName"] = input.stackName;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateBranchCommand(
  input: CreateBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apps/{appId}/branches";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.backendEnvironmentArn !== undefined) {
    bodyParams["backendEnvironmentArn"] = input.backendEnvironmentArn;
  }
  if (input.basicAuthCredentials !== undefined) {
    bodyParams["basicAuthCredentials"] = input.basicAuthCredentials;
  }
  if (input.branchName !== undefined) {
    bodyParams["branchName"] = input.branchName;
  }
  if (input.buildSpec !== undefined) {
    bodyParams["buildSpec"] = input.buildSpec;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.displayName !== undefined) {
    bodyParams["displayName"] = input.displayName;
  }
  if (input.enableAutoBuild !== undefined) {
    bodyParams["enableAutoBuild"] = input.enableAutoBuild;
  }
  if (input.enableBasicAuth !== undefined) {
    bodyParams["enableBasicAuth"] = input.enableBasicAuth;
  }
  if (input.enableNotification !== undefined) {
    bodyParams["enableNotification"] = input.enableNotification;
  }
  if (input.enablePullRequestPreview !== undefined) {
    bodyParams["enablePullRequestPreview"] = input.enablePullRequestPreview;
  }
  if (input.environmentVariables !== undefined) {
    bodyParams[
      "environmentVariables"
    ] = serializeAws_restJson1_1EnvironmentVariables(
      input.environmentVariables,
      context
    );
  }
  if (input.framework !== undefined) {
    bodyParams["framework"] = input.framework;
  }
  if (input.pullRequestEnvironmentName !== undefined) {
    bodyParams["pullRequestEnvironmentName"] = input.pullRequestEnvironmentName;
  }
  if (input.stage !== undefined) {
    bodyParams["stage"] = input.stage;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  if (input.ttl !== undefined) {
    bodyParams["ttl"] = input.ttl;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateDeploymentCommand(
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apps/{appId}/branches/{branchName}/deployments";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: any = input.branchName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.fileMap !== undefined) {
    bodyParams["fileMap"] = serializeAws_restJson1_1FileMap(
      input.fileMap,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateDomainAssociationCommand(
  input: CreateDomainAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apps/{appId}/domains";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.domainName !== undefined) {
    bodyParams["domainName"] = input.domainName;
  }
  if (input.enableAutoSubDomain !== undefined) {
    bodyParams["enableAutoSubDomain"] = input.enableAutoSubDomain;
  }
  if (input.subDomainSettings !== undefined) {
    bodyParams["subDomainSettings"] = serializeAws_restJson1_1SubDomainSettings(
      input.subDomainSettings,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateWebhookCommand(
  input: CreateWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apps/{appId}/webhooks";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.branchName !== undefined) {
    bodyParams["branchName"] = input.branchName;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteAppCommand(
  input: DeleteAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apps/{appId}";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteBackendEnvironmentCommand(
  input: DeleteBackendEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apps/{appId}/backendenvironments/{environmentName}";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.environmentName !== undefined) {
    const labelValue: any = input.environmentName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: environmentName."
      );
    }
    resolvedPath = resolvedPath.replace("{environmentName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: environmentName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteBranchCommand(
  input: DeleteBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apps/{appId}/branches/{branchName}";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: any = input.branchName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteDomainAssociationCommand(
  input: DeleteDomainAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apps/{appId}/domains/{domainName}";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.domainName !== undefined) {
    const labelValue: any = input.domainName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: domainName.");
    }
    resolvedPath = resolvedPath.replace("{domainName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: domainName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteJobCommand(
  input: DeleteJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apps/{appId}/branches/{branchName}/jobs/{jobId}";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: any = input.branchName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  if (input.jobId !== undefined) {
    const labelValue: any = input.jobId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteWebhookCommand(
  input: DeleteWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/webhooks/{webhookId}";
  if (input.webhookId !== undefined) {
    const labelValue: any = input.webhookId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: webhookId.");
    }
    resolvedPath = resolvedPath.replace("{webhookId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: webhookId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GenerateAccessLogsCommand(
  input: GenerateAccessLogsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apps/{appId}/accesslogs";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.domainName !== undefined) {
    bodyParams["domainName"] = input.domainName;
  }
  if (input.endTime !== undefined) {
    bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
  }
  if (input.startTime !== undefined) {
    bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetAppCommand(
  input: GetAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apps/{appId}";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetArtifactUrlCommand(
  input: GetArtifactUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/artifacts/{artifactId}";
  if (input.artifactId !== undefined) {
    const labelValue: any = input.artifactId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: artifactId.");
    }
    resolvedPath = resolvedPath.replace("{artifactId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: artifactId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetBackendEnvironmentCommand(
  input: GetBackendEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apps/{appId}/backendenvironments/{environmentName}";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.environmentName !== undefined) {
    const labelValue: any = input.environmentName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: environmentName."
      );
    }
    resolvedPath = resolvedPath.replace("{environmentName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: environmentName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetBranchCommand(
  input: GetBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apps/{appId}/branches/{branchName}";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: any = input.branchName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetDomainAssociationCommand(
  input: GetDomainAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apps/{appId}/domains/{domainName}";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.domainName !== undefined) {
    const labelValue: any = input.domainName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: domainName.");
    }
    resolvedPath = resolvedPath.replace("{domainName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: domainName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetJobCommand(
  input: GetJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apps/{appId}/branches/{branchName}/jobs/{jobId}";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: any = input.branchName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  if (input.jobId !== undefined) {
    const labelValue: any = input.jobId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetWebhookCommand(
  input: GetWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/webhooks/{webhookId}";
  if (input.webhookId !== undefined) {
    const labelValue: any = input.webhookId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: webhookId.");
    }
    resolvedPath = resolvedPath.replace("{webhookId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: webhookId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListAppsCommand(
  input: ListAppsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apps";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListArtifactsCommand(
  input: ListArtifactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/apps/{appId}/branches/{branchName}/jobs/{jobId}/artifacts";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: any = input.branchName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  if (input.jobId !== undefined) {
    const labelValue: any = input.jobId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListBackendEnvironmentsCommand(
  input: ListBackendEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apps/{appId}/backendenvironments";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.environmentName !== undefined) {
    bodyParams["environmentName"] = input.environmentName;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body
  });
}

export async function serializeAws_restJson1_1ListBranchesCommand(
  input: ListBranchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apps/{appId}/branches";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListDomainAssociationsCommand(
  input: ListDomainAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apps/{appId}/domains";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListJobsCommand(
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apps/{appId}/branches/{branchName}/jobs";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: any = input.branchName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: any = input.resourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListWebhooksCommand(
  input: ListWebhooksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apps/{appId}/webhooks";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1StartDeploymentCommand(
  input: StartDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apps/{appId}/branches/{branchName}/deployments/start";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: any = input.branchName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.jobId !== undefined) {
    bodyParams["jobId"] = input.jobId;
  }
  if (input.sourceUrl !== undefined) {
    bodyParams["sourceUrl"] = input.sourceUrl;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1StartJobCommand(
  input: StartJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apps/{appId}/branches/{branchName}/jobs";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: any = input.branchName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.commitId !== undefined) {
    bodyParams["commitId"] = input.commitId;
  }
  if (input.commitMessage !== undefined) {
    bodyParams["commitMessage"] = input.commitMessage;
  }
  if (input.commitTime !== undefined) {
    bodyParams["commitTime"] = Math.round(input.commitTime.getTime() / 1000);
  }
  if (input.jobId !== undefined) {
    bodyParams["jobId"] = input.jobId;
  }
  if (input.jobReason !== undefined) {
    bodyParams["jobReason"] = input.jobReason;
  }
  if (input.jobType !== undefined) {
    bodyParams["jobType"] = input.jobType;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1StopJobCommand(
  input: StopJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apps/{appId}/branches/{branchName}/jobs/{jobId}/stop";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: any = input.branchName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  if (input.jobId !== undefined) {
    const labelValue: any = input.jobId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: any = input.resourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: any = input.resourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {};
  if (input.tagKeys !== undefined) {
    query["tagKeys"] = input.tagKeys;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1UpdateAppCommand(
  input: UpdateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apps/{appId}";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.accessToken !== undefined) {
    bodyParams["accessToken"] = input.accessToken;
  }
  if (input.autoBranchCreationConfig !== undefined) {
    bodyParams[
      "autoBranchCreationConfig"
    ] = serializeAws_restJson1_1AutoBranchCreationConfig(
      input.autoBranchCreationConfig,
      context
    );
  }
  if (input.autoBranchCreationPatterns !== undefined) {
    bodyParams[
      "autoBranchCreationPatterns"
    ] = serializeAws_restJson1_1AutoBranchCreationPatterns(
      input.autoBranchCreationPatterns,
      context
    );
  }
  if (input.basicAuthCredentials !== undefined) {
    bodyParams["basicAuthCredentials"] = input.basicAuthCredentials;
  }
  if (input.buildSpec !== undefined) {
    bodyParams["buildSpec"] = input.buildSpec;
  }
  if (input.customRules !== undefined) {
    bodyParams["customRules"] = serializeAws_restJson1_1CustomRules(
      input.customRules,
      context
    );
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.enableAutoBranchCreation !== undefined) {
    bodyParams["enableAutoBranchCreation"] = input.enableAutoBranchCreation;
  }
  if (input.enableBasicAuth !== undefined) {
    bodyParams["enableBasicAuth"] = input.enableBasicAuth;
  }
  if (input.enableBranchAutoBuild !== undefined) {
    bodyParams["enableBranchAutoBuild"] = input.enableBranchAutoBuild;
  }
  if (input.environmentVariables !== undefined) {
    bodyParams[
      "environmentVariables"
    ] = serializeAws_restJson1_1EnvironmentVariables(
      input.environmentVariables,
      context
    );
  }
  if (input.iamServiceRoleArn !== undefined) {
    bodyParams["iamServiceRoleArn"] = input.iamServiceRoleArn;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.oauthToken !== undefined) {
    bodyParams["oauthToken"] = input.oauthToken;
  }
  if (input.platform !== undefined) {
    bodyParams["platform"] = input.platform;
  }
  if (input.repository !== undefined) {
    bodyParams["repository"] = input.repository;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateBranchCommand(
  input: UpdateBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apps/{appId}/branches/{branchName}";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: any = input.branchName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace("{branchName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.backendEnvironmentArn !== undefined) {
    bodyParams["backendEnvironmentArn"] = input.backendEnvironmentArn;
  }
  if (input.basicAuthCredentials !== undefined) {
    bodyParams["basicAuthCredentials"] = input.basicAuthCredentials;
  }
  if (input.buildSpec !== undefined) {
    bodyParams["buildSpec"] = input.buildSpec;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.displayName !== undefined) {
    bodyParams["displayName"] = input.displayName;
  }
  if (input.enableAutoBuild !== undefined) {
    bodyParams["enableAutoBuild"] = input.enableAutoBuild;
  }
  if (input.enableBasicAuth !== undefined) {
    bodyParams["enableBasicAuth"] = input.enableBasicAuth;
  }
  if (input.enableNotification !== undefined) {
    bodyParams["enableNotification"] = input.enableNotification;
  }
  if (input.enablePullRequestPreview !== undefined) {
    bodyParams["enablePullRequestPreview"] = input.enablePullRequestPreview;
  }
  if (input.environmentVariables !== undefined) {
    bodyParams[
      "environmentVariables"
    ] = serializeAws_restJson1_1EnvironmentVariables(
      input.environmentVariables,
      context
    );
  }
  if (input.framework !== undefined) {
    bodyParams["framework"] = input.framework;
  }
  if (input.pullRequestEnvironmentName !== undefined) {
    bodyParams["pullRequestEnvironmentName"] = input.pullRequestEnvironmentName;
  }
  if (input.stage !== undefined) {
    bodyParams["stage"] = input.stage;
  }
  if (input.ttl !== undefined) {
    bodyParams["ttl"] = input.ttl;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateDomainAssociationCommand(
  input: UpdateDomainAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apps/{appId}/domains/{domainName}";
  if (input.appId !== undefined) {
    const labelValue: any = input.appId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.domainName !== undefined) {
    const labelValue: any = input.domainName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: domainName.");
    }
    resolvedPath = resolvedPath.replace("{domainName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: domainName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.enableAutoSubDomain !== undefined) {
    bodyParams["enableAutoSubDomain"] = input.enableAutoSubDomain;
  }
  if (input.subDomainSettings !== undefined) {
    bodyParams["subDomainSettings"] = serializeAws_restJson1_1SubDomainSettings(
      input.subDomainSettings,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateWebhookCommand(
  input: UpdateWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/webhooks/{webhookId}";
  if (input.webhookId !== undefined) {
    const labelValue: any = input.webhookId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: webhookId.");
    }
    resolvedPath = resolvedPath.replace("{webhookId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: webhookId.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.branchName !== undefined) {
    bodyParams["branchName"] = input.branchName;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CreateAppCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateAppCommandError(output, context);
  }
  const contents: CreateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateAppResult",
    app: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.app !== undefined) {
    contents.app = deserializeAws_restJson1_1App(data.app, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateAppCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = await deserializeAws_restJson1_1DependentServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateBackendEnvironmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendEnvironmentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateBackendEnvironmentCommandError(
      output,
      context
    );
  }
  const contents: CreateBackendEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateBackendEnvironmentResult",
    backendEnvironment: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.backendEnvironment !== undefined) {
    contents.backendEnvironment = deserializeAws_restJson1_1BackendEnvironment(
      data.backendEnvironment,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateBackendEnvironmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendEnvironmentCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateBranchCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBranchCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateBranchCommandError(output, context);
  }
  const contents: CreateBranchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateBranchResult",
    branch: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.branch !== undefined) {
    contents.branch = deserializeAws_restJson1_1Branch(data.branch, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateBranchCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBranchCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = await deserializeAws_restJson1_1DependentServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateDeploymentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateDeploymentCommandError(
      output,
      context
    );
  }
  const contents: CreateDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDeploymentResult",
    fileUploadUrls: undefined,
    jobId: undefined,
    zipUploadUrl: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.fileUploadUrls !== undefined) {
    contents.fileUploadUrls = deserializeAws_restJson1_1FileUploadUrls(
      data.fileUploadUrls,
      context
    );
  }
  if (data.jobId !== undefined) {
    contents.jobId = data.jobId;
  }
  if (data.zipUploadUrl !== undefined) {
    contents.zipUploadUrl = data.zipUploadUrl;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateDeploymentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateDomainAssociationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainAssociationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateDomainAssociationCommandError(
      output,
      context
    );
  }
  const contents: CreateDomainAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDomainAssociationResult",
    domainAssociation: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.domainAssociation !== undefined) {
    contents.domainAssociation = deserializeAws_restJson1_1DomainAssociation(
      data.domainAssociation,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateDomainAssociationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainAssociationCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = await deserializeAws_restJson1_1DependentServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateWebhookCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebhookCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateWebhookCommandError(output, context);
  }
  const contents: CreateWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateWebhookResult",
    webhook: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.webhook !== undefined) {
    contents.webhook = deserializeAws_restJson1_1Webhook(data.webhook, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateWebhookCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebhookCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = await deserializeAws_restJson1_1DependentServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteAppCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteAppCommandError(output, context);
  }
  const contents: DeleteAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteAppResult",
    app: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.app !== undefined) {
    contents.app = deserializeAws_restJson1_1App(data.app, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteAppCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = await deserializeAws_restJson1_1DependentServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteBackendEnvironmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendEnvironmentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteBackendEnvironmentCommandError(
      output,
      context
    );
  }
  const contents: DeleteBackendEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteBackendEnvironmentResult",
    backendEnvironment: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.backendEnvironment !== undefined) {
    contents.backendEnvironment = deserializeAws_restJson1_1BackendEnvironment(
      data.backendEnvironment,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteBackendEnvironmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendEnvironmentCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = await deserializeAws_restJson1_1DependentServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteBranchCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBranchCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteBranchCommandError(output, context);
  }
  const contents: DeleteBranchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteBranchResult",
    branch: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.branch !== undefined) {
    contents.branch = deserializeAws_restJson1_1Branch(data.branch, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteBranchCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBranchCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = await deserializeAws_restJson1_1DependentServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteDomainAssociationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainAssociationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteDomainAssociationCommandError(
      output,
      context
    );
  }
  const contents: DeleteDomainAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDomainAssociationResult",
    domainAssociation: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.domainAssociation !== undefined) {
    contents.domainAssociation = deserializeAws_restJson1_1DomainAssociation(
      data.domainAssociation,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteDomainAssociationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainAssociationCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = await deserializeAws_restJson1_1DependentServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteJobCommandError(output, context);
  }
  const contents: DeleteJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteJobResult",
    jobSummary: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobSummary !== undefined) {
    contents.jobSummary = deserializeAws_restJson1_1JobSummary(
      data.jobSummary,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteWebhookCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebhookCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteWebhookCommandError(output, context);
  }
  const contents: DeleteWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteWebhookResult",
    webhook: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.webhook !== undefined) {
    contents.webhook = deserializeAws_restJson1_1Webhook(data.webhook, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteWebhookCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebhookCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GenerateAccessLogsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateAccessLogsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GenerateAccessLogsCommandError(
      output,
      context
    );
  }
  const contents: GenerateAccessLogsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GenerateAccessLogsResult",
    logUrl: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.logUrl !== undefined) {
    contents.logUrl = data.logUrl;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GenerateAccessLogsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateAccessLogsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetAppCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetAppCommandError(output, context);
  }
  const contents: GetAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAppResult",
    app: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.app !== undefined) {
    contents.app = deserializeAws_restJson1_1App(data.app, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetAppCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetArtifactUrlCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArtifactUrlCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetArtifactUrlCommandError(
      output,
      context
    );
  }
  const contents: GetArtifactUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetArtifactUrlResult",
    artifactId: undefined,
    artifactUrl: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.artifactId !== undefined) {
    contents.artifactId = data.artifactId;
  }
  if (data.artifactUrl !== undefined) {
    contents.artifactUrl = data.artifactUrl;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetArtifactUrlCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArtifactUrlCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetBackendEnvironmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendEnvironmentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBackendEnvironmentCommandError(
      output,
      context
    );
  }
  const contents: GetBackendEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBackendEnvironmentResult",
    backendEnvironment: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.backendEnvironment !== undefined) {
    contents.backendEnvironment = deserializeAws_restJson1_1BackendEnvironment(
      data.backendEnvironment,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetBackendEnvironmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendEnvironmentCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetBranchCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBranchCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBranchCommandError(output, context);
  }
  const contents: GetBranchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBranchResult",
    branch: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.branch !== undefined) {
    contents.branch = deserializeAws_restJson1_1Branch(data.branch, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetBranchCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBranchCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetDomainAssociationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainAssociationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDomainAssociationCommandError(
      output,
      context
    );
  }
  const contents: GetDomainAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDomainAssociationResult",
    domainAssociation: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.domainAssociation !== undefined) {
    contents.domainAssociation = deserializeAws_restJson1_1DomainAssociation(
      data.domainAssociation,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDomainAssociationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainAssociationCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetJobCommandError(output, context);
  }
  const contents: GetJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetJobResult",
    job: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.job !== undefined) {
    contents.job = deserializeAws_restJson1_1Job(data.job, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetWebhookCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebhookCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetWebhookCommandError(output, context);
  }
  const contents: GetWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetWebhookResult",
    webhook: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.webhook !== undefined) {
    contents.webhook = deserializeAws_restJson1_1Webhook(data.webhook, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetWebhookCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebhookCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListAppsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListAppsCommandError(output, context);
  }
  const contents: ListAppsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAppsResult",
    apps: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apps !== undefined) {
    contents.apps = deserializeAws_restJson1_1Apps(data.apps, context);
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListAppsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListArtifactsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArtifactsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListArtifactsCommandError(output, context);
  }
  const contents: ListArtifactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListArtifactsResult",
    artifacts: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.artifacts !== undefined) {
    contents.artifacts = deserializeAws_restJson1_1Artifacts(
      data.artifacts,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListArtifactsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArtifactsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListBackendEnvironmentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackendEnvironmentsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListBackendEnvironmentsCommandError(
      output,
      context
    );
  }
  const contents: ListBackendEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListBackendEnvironmentsResult",
    backendEnvironments: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.backendEnvironments !== undefined) {
    contents.backendEnvironments = deserializeAws_restJson1_1BackendEnvironments(
      data.backendEnvironments,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListBackendEnvironmentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackendEnvironmentsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListBranchesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBranchesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListBranchesCommandError(output, context);
  }
  const contents: ListBranchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListBranchesResult",
    branches: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.branches !== undefined) {
    contents.branches = deserializeAws_restJson1_1Branches(
      data.branches,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListBranchesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBranchesCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListDomainAssociationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainAssociationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDomainAssociationsCommandError(
      output,
      context
    );
  }
  const contents: ListDomainAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDomainAssociationsResult",
    domainAssociations: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.domainAssociations !== undefined) {
    contents.domainAssociations = deserializeAws_restJson1_1DomainAssociations(
      data.domainAssociations,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDomainAssociationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainAssociationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListJobsCommandError(output, context);
  }
  const contents: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListJobsResult",
    jobSummaries: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobSummaries !== undefined) {
    contents.jobSummaries = deserializeAws_restJson1_1JobSummaries(
      data.jobSummaries,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined) {
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amplify#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListWebhooksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebhooksCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListWebhooksCommandError(output, context);
  }
  const contents: ListWebhooksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListWebhooksResult",
    nextToken: undefined,
    webhooks: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  if (data.webhooks !== undefined) {
    contents.webhooks = deserializeAws_restJson1_1Webhooks(
      data.webhooks,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListWebhooksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebhooksCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1StartDeploymentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeploymentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartDeploymentCommandError(
      output,
      context
    );
  }
  const contents: StartDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartDeploymentResult",
    jobSummary: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobSummary !== undefined) {
    contents.jobSummary = deserializeAws_restJson1_1JobSummary(
      data.jobSummary,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartDeploymentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeploymentCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1StartJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartJobCommandError(output, context);
  }
  const contents: StartJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartJobResult",
    jobSummary: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobSummary !== undefined) {
    contents.jobSummary = deserializeAws_restJson1_1JobSummary(
      data.jobSummary,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1StopJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StopJobCommandError(output, context);
  }
  const contents: StopJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopJobResult",
    jobSummary: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobSummary !== undefined) {
    contents.jobSummary = deserializeAws_restJson1_1JobSummary(
      data.jobSummary,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StopJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amplify#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amplify#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateAppCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateAppCommandError(output, context);
  }
  const contents: UpdateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateAppResult",
    app: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.app !== undefined) {
    contents.app = deserializeAws_restJson1_1App(data.app, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateAppCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateBranchCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBranchCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateBranchCommandError(output, context);
  }
  const contents: UpdateBranchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateBranchResult",
    branch: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.branch !== undefined) {
    contents.branch = deserializeAws_restJson1_1Branch(data.branch, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateBranchCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBranchCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = await deserializeAws_restJson1_1DependentServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateDomainAssociationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainAssociationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateDomainAssociationCommandError(
      output,
      context
    );
  }
  const contents: UpdateDomainAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDomainAssociationResult",
    domainAssociation: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.domainAssociation !== undefined) {
    contents.domainAssociation = deserializeAws_restJson1_1DomainAssociation(
      data.domainAssociation,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateDomainAssociationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainAssociationCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = await deserializeAws_restJson1_1DependentServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateWebhookCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebhookCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateWebhookCommandError(output, context);
  }
  const contents: UpdateWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateWebhookResult",
    webhook: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.webhook !== undefined) {
    contents.webhook = deserializeAws_restJson1_1Webhook(data.webhook, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateWebhookCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebhookCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = await deserializeAws_restJson1_1DependentServiceFailureExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.amplify#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    __type: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1DependentServiceFailureExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DependentServiceFailureException> => {
  const contents: DependentServiceFailureException = {
    __type: "DependentServiceFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalFailureExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    __type: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    __type: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    code: undefined,
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.code !== undefined) {
    contents.code = data.code;
  }
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnauthorizedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: UnauthorizedException = {
    __type: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1AutoBranchCreationConfig = (
  input: AutoBranchCreationConfig,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.basicAuthCredentials !== undefined) {
    bodyParams["basicAuthCredentials"] = input.basicAuthCredentials;
  }
  if (input.buildSpec !== undefined) {
    bodyParams["buildSpec"] = input.buildSpec;
  }
  if (input.enableAutoBuild !== undefined) {
    bodyParams["enableAutoBuild"] = input.enableAutoBuild;
  }
  if (input.enableBasicAuth !== undefined) {
    bodyParams["enableBasicAuth"] = input.enableBasicAuth;
  }
  if (input.enablePullRequestPreview !== undefined) {
    bodyParams["enablePullRequestPreview"] = input.enablePullRequestPreview;
  }
  if (input.environmentVariables !== undefined) {
    bodyParams[
      "environmentVariables"
    ] = serializeAws_restJson1_1EnvironmentVariables(
      input.environmentVariables,
      context
    );
  }
  if (input.framework !== undefined) {
    bodyParams["framework"] = input.framework;
  }
  if (input.pullRequestEnvironmentName !== undefined) {
    bodyParams["pullRequestEnvironmentName"] = input.pullRequestEnvironmentName;
  }
  if (input.stage !== undefined) {
    bodyParams["stage"] = input.stage;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AutoBranchCreationPatterns = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1CustomRule = (
  input: CustomRule,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.condition !== undefined) {
    bodyParams["condition"] = input.condition;
  }
  if (input.source !== undefined) {
    bodyParams["source"] = input.source;
  }
  if (input.status !== undefined) {
    bodyParams["status"] = input.status;
  }
  if (input.target !== undefined) {
    bodyParams["target"] = input.target;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CustomRules = (
  input: Array<CustomRule>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1CustomRule(entry, context)
  );
};

const serializeAws_restJson1_1EnvironmentVariables = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1FileMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1SubDomainSetting = (
  input: SubDomainSetting,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.branchName !== undefined) {
    bodyParams["branchName"] = input.branchName;
  }
  if (input.prefix !== undefined) {
    bodyParams["prefix"] = input.prefix;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SubDomainSettings = (
  input: Array<SubDomainSetting>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1SubDomainSetting(entry, context)
  );
};

const serializeAws_restJson1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1App = (
  output: any,
  context: __SerdeContext
): App => {
  let contents: any = {
    __type: "App",
    appArn: undefined,
    appId: undefined,
    autoBranchCreationConfig: undefined,
    autoBranchCreationPatterns: undefined,
    basicAuthCredentials: undefined,
    buildSpec: undefined,
    createTime: undefined,
    customRules: undefined,
    defaultDomain: undefined,
    description: undefined,
    enableAutoBranchCreation: undefined,
    enableBasicAuth: undefined,
    enableBranchAutoBuild: undefined,
    environmentVariables: undefined,
    iamServiceRoleArn: undefined,
    name: undefined,
    platform: undefined,
    productionBranch: undefined,
    repository: undefined,
    tags: undefined,
    updateTime: undefined
  };
  if (output.appArn !== undefined) {
    contents.appArn = output.appArn;
  }
  if (output.appId !== undefined) {
    contents.appId = output.appId;
  }
  if (output.autoBranchCreationConfig !== undefined) {
    contents.autoBranchCreationConfig = deserializeAws_restJson1_1AutoBranchCreationConfig(
      output.autoBranchCreationConfig,
      context
    );
  }
  if (output.autoBranchCreationPatterns !== undefined) {
    contents.autoBranchCreationPatterns = deserializeAws_restJson1_1AutoBranchCreationPatterns(
      output.autoBranchCreationPatterns,
      context
    );
  }
  if (output.basicAuthCredentials !== undefined) {
    contents.basicAuthCredentials = output.basicAuthCredentials;
  }
  if (output.buildSpec !== undefined) {
    contents.buildSpec = output.buildSpec;
  }
  if (output.createTime !== undefined) {
    contents.createTime = new Date(
      output.createTime % 1 != 0
        ? Math.round(output.createTime * 1000)
        : output.createTime
    );
  }
  if (output.customRules !== undefined) {
    contents.customRules = deserializeAws_restJson1_1CustomRules(
      output.customRules,
      context
    );
  }
  if (output.defaultDomain !== undefined) {
    contents.defaultDomain = output.defaultDomain;
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.enableAutoBranchCreation !== undefined) {
    contents.enableAutoBranchCreation = output.enableAutoBranchCreation;
  }
  if (output.enableBasicAuth !== undefined) {
    contents.enableBasicAuth = output.enableBasicAuth;
  }
  if (output.enableBranchAutoBuild !== undefined) {
    contents.enableBranchAutoBuild = output.enableBranchAutoBuild;
  }
  if (output.environmentVariables !== undefined) {
    contents.environmentVariables = deserializeAws_restJson1_1EnvironmentVariables(
      output.environmentVariables,
      context
    );
  }
  if (output.iamServiceRoleArn !== undefined) {
    contents.iamServiceRoleArn = output.iamServiceRoleArn;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.platform !== undefined) {
    contents.platform = output.platform;
  }
  if (output.productionBranch !== undefined) {
    contents.productionBranch = deserializeAws_restJson1_1ProductionBranch(
      output.productionBranch,
      context
    );
  }
  if (output.repository !== undefined) {
    contents.repository = output.repository;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  if (output.updateTime !== undefined) {
    contents.updateTime = new Date(
      output.updateTime % 1 != 0
        ? Math.round(output.updateTime * 1000)
        : output.updateTime
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Apps = (
  output: any,
  context: __SerdeContext
): Array<App> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1App(entry, context)
  );
};

const deserializeAws_restJson1_1Artifact = (
  output: any,
  context: __SerdeContext
): Artifact => {
  let contents: any = {
    __type: "Artifact",
    artifactFileName: undefined,
    artifactId: undefined
  };
  if (output.artifactFileName !== undefined) {
    contents.artifactFileName = output.artifactFileName;
  }
  if (output.artifactId !== undefined) {
    contents.artifactId = output.artifactId;
  }
  return contents;
};

const deserializeAws_restJson1_1Artifacts = (
  output: any,
  context: __SerdeContext
): Array<Artifact> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Artifact(entry, context)
  );
};

const deserializeAws_restJson1_1AssociatedResources = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1AutoBranchCreationConfig = (
  output: any,
  context: __SerdeContext
): AutoBranchCreationConfig => {
  let contents: any = {
    __type: "AutoBranchCreationConfig",
    basicAuthCredentials: undefined,
    buildSpec: undefined,
    enableAutoBuild: undefined,
    enableBasicAuth: undefined,
    enablePullRequestPreview: undefined,
    environmentVariables: undefined,
    framework: undefined,
    pullRequestEnvironmentName: undefined,
    stage: undefined
  };
  if (output.basicAuthCredentials !== undefined) {
    contents.basicAuthCredentials = output.basicAuthCredentials;
  }
  if (output.buildSpec !== undefined) {
    contents.buildSpec = output.buildSpec;
  }
  if (output.enableAutoBuild !== undefined) {
    contents.enableAutoBuild = output.enableAutoBuild;
  }
  if (output.enableBasicAuth !== undefined) {
    contents.enableBasicAuth = output.enableBasicAuth;
  }
  if (output.enablePullRequestPreview !== undefined) {
    contents.enablePullRequestPreview = output.enablePullRequestPreview;
  }
  if (output.environmentVariables !== undefined) {
    contents.environmentVariables = deserializeAws_restJson1_1EnvironmentVariables(
      output.environmentVariables,
      context
    );
  }
  if (output.framework !== undefined) {
    contents.framework = output.framework;
  }
  if (output.pullRequestEnvironmentName !== undefined) {
    contents.pullRequestEnvironmentName = output.pullRequestEnvironmentName;
  }
  if (output.stage !== undefined) {
    contents.stage = output.stage;
  }
  return contents;
};

const deserializeAws_restJson1_1AutoBranchCreationPatterns = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1BackendEnvironment = (
  output: any,
  context: __SerdeContext
): BackendEnvironment => {
  let contents: any = {
    __type: "BackendEnvironment",
    backendEnvironmentArn: undefined,
    createTime: undefined,
    deploymentArtifacts: undefined,
    environmentName: undefined,
    stackName: undefined,
    updateTime: undefined
  };
  if (output.backendEnvironmentArn !== undefined) {
    contents.backendEnvironmentArn = output.backendEnvironmentArn;
  }
  if (output.createTime !== undefined) {
    contents.createTime = new Date(
      output.createTime % 1 != 0
        ? Math.round(output.createTime * 1000)
        : output.createTime
    );
  }
  if (output.deploymentArtifacts !== undefined) {
    contents.deploymentArtifacts = output.deploymentArtifacts;
  }
  if (output.environmentName !== undefined) {
    contents.environmentName = output.environmentName;
  }
  if (output.stackName !== undefined) {
    contents.stackName = output.stackName;
  }
  if (output.updateTime !== undefined) {
    contents.updateTime = new Date(
      output.updateTime % 1 != 0
        ? Math.round(output.updateTime * 1000)
        : output.updateTime
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BackendEnvironments = (
  output: any,
  context: __SerdeContext
): Array<BackendEnvironment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BackendEnvironment(entry, context)
  );
};

const deserializeAws_restJson1_1Branch = (
  output: any,
  context: __SerdeContext
): Branch => {
  let contents: any = {
    __type: "Branch",
    activeJobId: undefined,
    associatedResources: undefined,
    backendEnvironmentArn: undefined,
    basicAuthCredentials: undefined,
    branchArn: undefined,
    branchName: undefined,
    buildSpec: undefined,
    createTime: undefined,
    customDomains: undefined,
    description: undefined,
    destinationBranch: undefined,
    displayName: undefined,
    enableAutoBuild: undefined,
    enableBasicAuth: undefined,
    enableNotification: undefined,
    enablePullRequestPreview: undefined,
    environmentVariables: undefined,
    framework: undefined,
    pullRequestEnvironmentName: undefined,
    sourceBranch: undefined,
    stage: undefined,
    tags: undefined,
    thumbnailUrl: undefined,
    totalNumberOfJobs: undefined,
    ttl: undefined,
    updateTime: undefined
  };
  if (output.activeJobId !== undefined) {
    contents.activeJobId = output.activeJobId;
  }
  if (output.associatedResources !== undefined) {
    contents.associatedResources = deserializeAws_restJson1_1AssociatedResources(
      output.associatedResources,
      context
    );
  }
  if (output.backendEnvironmentArn !== undefined) {
    contents.backendEnvironmentArn = output.backendEnvironmentArn;
  }
  if (output.basicAuthCredentials !== undefined) {
    contents.basicAuthCredentials = output.basicAuthCredentials;
  }
  if (output.branchArn !== undefined) {
    contents.branchArn = output.branchArn;
  }
  if (output.branchName !== undefined) {
    contents.branchName = output.branchName;
  }
  if (output.buildSpec !== undefined) {
    contents.buildSpec = output.buildSpec;
  }
  if (output.createTime !== undefined) {
    contents.createTime = new Date(
      output.createTime % 1 != 0
        ? Math.round(output.createTime * 1000)
        : output.createTime
    );
  }
  if (output.customDomains !== undefined) {
    contents.customDomains = deserializeAws_restJson1_1CustomDomains(
      output.customDomains,
      context
    );
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.destinationBranch !== undefined) {
    contents.destinationBranch = output.destinationBranch;
  }
  if (output.displayName !== undefined) {
    contents.displayName = output.displayName;
  }
  if (output.enableAutoBuild !== undefined) {
    contents.enableAutoBuild = output.enableAutoBuild;
  }
  if (output.enableBasicAuth !== undefined) {
    contents.enableBasicAuth = output.enableBasicAuth;
  }
  if (output.enableNotification !== undefined) {
    contents.enableNotification = output.enableNotification;
  }
  if (output.enablePullRequestPreview !== undefined) {
    contents.enablePullRequestPreview = output.enablePullRequestPreview;
  }
  if (output.environmentVariables !== undefined) {
    contents.environmentVariables = deserializeAws_restJson1_1EnvironmentVariables(
      output.environmentVariables,
      context
    );
  }
  if (output.framework !== undefined) {
    contents.framework = output.framework;
  }
  if (output.pullRequestEnvironmentName !== undefined) {
    contents.pullRequestEnvironmentName = output.pullRequestEnvironmentName;
  }
  if (output.sourceBranch !== undefined) {
    contents.sourceBranch = output.sourceBranch;
  }
  if (output.stage !== undefined) {
    contents.stage = output.stage;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  if (output.thumbnailUrl !== undefined) {
    contents.thumbnailUrl = output.thumbnailUrl;
  }
  if (output.totalNumberOfJobs !== undefined) {
    contents.totalNumberOfJobs = output.totalNumberOfJobs;
  }
  if (output.ttl !== undefined) {
    contents.ttl = output.ttl;
  }
  if (output.updateTime !== undefined) {
    contents.updateTime = new Date(
      output.updateTime % 1 != 0
        ? Math.round(output.updateTime * 1000)
        : output.updateTime
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Branches = (
  output: any,
  context: __SerdeContext
): Array<Branch> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Branch(entry, context)
  );
};

const deserializeAws_restJson1_1CustomDomains = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1CustomRule = (
  output: any,
  context: __SerdeContext
): CustomRule => {
  let contents: any = {
    __type: "CustomRule",
    condition: undefined,
    source: undefined,
    status: undefined,
    target: undefined
  };
  if (output.condition !== undefined) {
    contents.condition = output.condition;
  }
  if (output.source !== undefined) {
    contents.source = output.source;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.target !== undefined) {
    contents.target = output.target;
  }
  return contents;
};

const deserializeAws_restJson1_1CustomRules = (
  output: any,
  context: __SerdeContext
): Array<CustomRule> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CustomRule(entry, context)
  );
};

const deserializeAws_restJson1_1DomainAssociation = (
  output: any,
  context: __SerdeContext
): DomainAssociation => {
  let contents: any = {
    __type: "DomainAssociation",
    certificateVerificationDNSRecord: undefined,
    domainAssociationArn: undefined,
    domainName: undefined,
    domainStatus: undefined,
    enableAutoSubDomain: undefined,
    statusReason: undefined,
    subDomains: undefined
  };
  if (output.certificateVerificationDNSRecord !== undefined) {
    contents.certificateVerificationDNSRecord =
      output.certificateVerificationDNSRecord;
  }
  if (output.domainAssociationArn !== undefined) {
    contents.domainAssociationArn = output.domainAssociationArn;
  }
  if (output.domainName !== undefined) {
    contents.domainName = output.domainName;
  }
  if (output.domainStatus !== undefined) {
    contents.domainStatus = output.domainStatus;
  }
  if (output.enableAutoSubDomain !== undefined) {
    contents.enableAutoSubDomain = output.enableAutoSubDomain;
  }
  if (output.statusReason !== undefined) {
    contents.statusReason = output.statusReason;
  }
  if (output.subDomains !== undefined) {
    contents.subDomains = deserializeAws_restJson1_1SubDomains(
      output.subDomains,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DomainAssociations = (
  output: any,
  context: __SerdeContext
): Array<DomainAssociation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DomainAssociation(entry, context)
  );
};

const deserializeAws_restJson1_1EnvironmentVariables = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1FileUploadUrls = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1Job = (
  output: any,
  context: __SerdeContext
): Job => {
  let contents: any = {
    __type: "Job",
    steps: undefined,
    summary: undefined
  };
  if (output.steps !== undefined) {
    contents.steps = deserializeAws_restJson1_1Steps(output.steps, context);
  }
  if (output.summary !== undefined) {
    contents.summary = deserializeAws_restJson1_1JobSummary(
      output.summary,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1JobSummaries = (
  output: any,
  context: __SerdeContext
): Array<JobSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1JobSummary(entry, context)
  );
};

const deserializeAws_restJson1_1JobSummary = (
  output: any,
  context: __SerdeContext
): JobSummary => {
  let contents: any = {
    __type: "JobSummary",
    commitId: undefined,
    commitMessage: undefined,
    commitTime: undefined,
    endTime: undefined,
    jobArn: undefined,
    jobId: undefined,
    jobType: undefined,
    startTime: undefined,
    status: undefined
  };
  if (output.commitId !== undefined) {
    contents.commitId = output.commitId;
  }
  if (output.commitMessage !== undefined) {
    contents.commitMessage = output.commitMessage;
  }
  if (output.commitTime !== undefined) {
    contents.commitTime = new Date(
      output.commitTime % 1 != 0
        ? Math.round(output.commitTime * 1000)
        : output.commitTime
    );
  }
  if (output.endTime !== undefined) {
    contents.endTime = new Date(
      output.endTime % 1 != 0
        ? Math.round(output.endTime * 1000)
        : output.endTime
    );
  }
  if (output.jobArn !== undefined) {
    contents.jobArn = output.jobArn;
  }
  if (output.jobId !== undefined) {
    contents.jobId = output.jobId;
  }
  if (output.jobType !== undefined) {
    contents.jobType = output.jobType;
  }
  if (output.startTime !== undefined) {
    contents.startTime = new Date(
      output.startTime % 1 != 0
        ? Math.round(output.startTime * 1000)
        : output.startTime
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1ProductionBranch = (
  output: any,
  context: __SerdeContext
): ProductionBranch => {
  let contents: any = {
    __type: "ProductionBranch",
    branchName: undefined,
    lastDeployTime: undefined,
    status: undefined,
    thumbnailUrl: undefined
  };
  if (output.branchName !== undefined) {
    contents.branchName = output.branchName;
  }
  if (output.lastDeployTime !== undefined) {
    contents.lastDeployTime = new Date(
      output.lastDeployTime % 1 != 0
        ? Math.round(output.lastDeployTime * 1000)
        : output.lastDeployTime
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.thumbnailUrl !== undefined) {
    contents.thumbnailUrl = output.thumbnailUrl;
  }
  return contents;
};

const deserializeAws_restJson1_1Screenshots = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1Step = (
  output: any,
  context: __SerdeContext
): Step => {
  let contents: any = {
    __type: "Step",
    artifactsUrl: undefined,
    context: undefined,
    endTime: undefined,
    logUrl: undefined,
    screenshots: undefined,
    startTime: undefined,
    status: undefined,
    statusReason: undefined,
    stepName: undefined,
    testArtifactsUrl: undefined,
    testConfigUrl: undefined
  };
  if (output.artifactsUrl !== undefined) {
    contents.artifactsUrl = output.artifactsUrl;
  }
  if (output.context !== undefined) {
    contents.context = output.context;
  }
  if (output.endTime !== undefined) {
    contents.endTime = new Date(
      output.endTime % 1 != 0
        ? Math.round(output.endTime * 1000)
        : output.endTime
    );
  }
  if (output.logUrl !== undefined) {
    contents.logUrl = output.logUrl;
  }
  if (output.screenshots !== undefined) {
    contents.screenshots = deserializeAws_restJson1_1Screenshots(
      output.screenshots,
      context
    );
  }
  if (output.startTime !== undefined) {
    contents.startTime = new Date(
      output.startTime % 1 != 0
        ? Math.round(output.startTime * 1000)
        : output.startTime
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.statusReason !== undefined) {
    contents.statusReason = output.statusReason;
  }
  if (output.stepName !== undefined) {
    contents.stepName = output.stepName;
  }
  if (output.testArtifactsUrl !== undefined) {
    contents.testArtifactsUrl = output.testArtifactsUrl;
  }
  if (output.testConfigUrl !== undefined) {
    contents.testConfigUrl = output.testConfigUrl;
  }
  return contents;
};

const deserializeAws_restJson1_1Steps = (
  output: any,
  context: __SerdeContext
): Array<Step> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Step(entry, context)
  );
};

const deserializeAws_restJson1_1SubDomain = (
  output: any,
  context: __SerdeContext
): SubDomain => {
  let contents: any = {
    __type: "SubDomain",
    dnsRecord: undefined,
    subDomainSetting: undefined,
    verified: undefined
  };
  if (output.dnsRecord !== undefined) {
    contents.dnsRecord = output.dnsRecord;
  }
  if (output.subDomainSetting !== undefined) {
    contents.subDomainSetting = deserializeAws_restJson1_1SubDomainSetting(
      output.subDomainSetting,
      context
    );
  }
  if (output.verified !== undefined) {
    contents.verified = output.verified;
  }
  return contents;
};

const deserializeAws_restJson1_1SubDomainSetting = (
  output: any,
  context: __SerdeContext
): SubDomainSetting => {
  let contents: any = {
    __type: "SubDomainSetting",
    branchName: undefined,
    prefix: undefined
  };
  if (output.branchName !== undefined) {
    contents.branchName = output.branchName;
  }
  if (output.prefix !== undefined) {
    contents.prefix = output.prefix;
  }
  return contents;
};

const deserializeAws_restJson1_1SubDomains = (
  output: any,
  context: __SerdeContext
): Array<SubDomain> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SubDomain(entry, context)
  );
};

const deserializeAws_restJson1_1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1Webhook = (
  output: any,
  context: __SerdeContext
): Webhook => {
  let contents: any = {
    __type: "Webhook",
    branchName: undefined,
    createTime: undefined,
    description: undefined,
    updateTime: undefined,
    webhookArn: undefined,
    webhookId: undefined,
    webhookUrl: undefined
  };
  if (output.branchName !== undefined) {
    contents.branchName = output.branchName;
  }
  if (output.createTime !== undefined) {
    contents.createTime = new Date(
      output.createTime % 1 != 0
        ? Math.round(output.createTime * 1000)
        : output.createTime
    );
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.updateTime !== undefined) {
    contents.updateTime = new Date(
      output.updateTime % 1 != 0
        ? Math.round(output.updateTime * 1000)
        : output.updateTime
    );
  }
  if (output.webhookArn !== undefined) {
    contents.webhookArn = output.webhookArn;
  }
  if (output.webhookId !== undefined) {
    contents.webhookId = output.webhookId;
  }
  if (output.webhookUrl !== undefined) {
    contents.webhookUrl = output.webhookUrl;
  }
  return contents;
};

const deserializeAws_restJson1_1Webhooks = (
  output: any,
  context: __SerdeContext
): Array<Webhook> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Webhook(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  return context.streamCollector(streamBody) || new Uint8Array();
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
