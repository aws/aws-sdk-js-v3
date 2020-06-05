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
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_restJson1CreateAppCommand = async (
  input: CreateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/apps";
  let body: any;
  body = JSON.stringify({
    ...(input.accessToken !== undefined && { accessToken: input.accessToken }),
    ...(input.autoBranchCreationConfig !== undefined && {
      autoBranchCreationConfig: serializeAws_restJson1AutoBranchCreationConfig(
        input.autoBranchCreationConfig,
        context
      )
    }),
    ...(input.autoBranchCreationPatterns !== undefined && {
      autoBranchCreationPatterns: serializeAws_restJson1AutoBranchCreationPatterns(
        input.autoBranchCreationPatterns,
        context
      )
    }),
    ...(input.basicAuthCredentials !== undefined && {
      basicAuthCredentials: input.basicAuthCredentials
    }),
    ...(input.buildSpec !== undefined && { buildSpec: input.buildSpec }),
    ...(input.customRules !== undefined && {
      customRules: serializeAws_restJson1CustomRules(input.customRules, context)
    }),
    ...(input.description !== undefined && { description: input.description }),
    ...(input.enableAutoBranchCreation !== undefined && {
      enableAutoBranchCreation: input.enableAutoBranchCreation
    }),
    ...(input.enableBasicAuth !== undefined && {
      enableBasicAuth: input.enableBasicAuth
    }),
    ...(input.enableBranchAutoBuild !== undefined && {
      enableBranchAutoBuild: input.enableBranchAutoBuild
    }),
    ...(input.environmentVariables !== undefined && {
      environmentVariables: serializeAws_restJson1EnvironmentVariables(
        input.environmentVariables,
        context
      )
    }),
    ...(input.iamServiceRoleArn !== undefined && {
      iamServiceRoleArn: input.iamServiceRoleArn
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.oauthToken !== undefined && { oauthToken: input.oauthToken }),
    ...(input.platform !== undefined && { platform: input.platform }),
    ...(input.repository !== undefined && { repository: input.repository }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1TagMap(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateBackendEnvironmentCommand = async (
  input: CreateBackendEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/apps/{appId}/backendenvironments";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.deploymentArtifacts !== undefined && {
      deploymentArtifacts: input.deploymentArtifacts
    }),
    ...(input.environmentName !== undefined && {
      environmentName: input.environmentName
    }),
    ...(input.stackName !== undefined && { stackName: input.stackName })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateBranchCommand = async (
  input: CreateBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/apps/{appId}/branches";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.backendEnvironmentArn !== undefined && {
      backendEnvironmentArn: input.backendEnvironmentArn
    }),
    ...(input.basicAuthCredentials !== undefined && {
      basicAuthCredentials: input.basicAuthCredentials
    }),
    ...(input.branchName !== undefined && { branchName: input.branchName }),
    ...(input.buildSpec !== undefined && { buildSpec: input.buildSpec }),
    ...(input.description !== undefined && { description: input.description }),
    ...(input.displayName !== undefined && { displayName: input.displayName }),
    ...(input.enableAutoBuild !== undefined && {
      enableAutoBuild: input.enableAutoBuild
    }),
    ...(input.enableBasicAuth !== undefined && {
      enableBasicAuth: input.enableBasicAuth
    }),
    ...(input.enableNotification !== undefined && {
      enableNotification: input.enableNotification
    }),
    ...(input.enablePullRequestPreview !== undefined && {
      enablePullRequestPreview: input.enablePullRequestPreview
    }),
    ...(input.environmentVariables !== undefined && {
      environmentVariables: serializeAws_restJson1EnvironmentVariables(
        input.environmentVariables,
        context
      )
    }),
    ...(input.framework !== undefined && { framework: input.framework }),
    ...(input.pullRequestEnvironmentName !== undefined && {
      pullRequestEnvironmentName: input.pullRequestEnvironmentName
    }),
    ...(input.stage !== undefined && { stage: input.stage }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1TagMap(input.tags, context)
    }),
    ...(input.ttl !== undefined && { ttl: input.ttl })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateDeploymentCommand = async (
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/apps/{appId}/branches/{branchName}/deployments";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: string = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace(
      "{branchName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.fileMap !== undefined && {
      fileMap: serializeAws_restJson1FileMap(input.fileMap, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateDomainAssociationCommand = async (
  input: CreateDomainAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/apps/{appId}/domains";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.domainName !== undefined && { domainName: input.domainName }),
    ...(input.enableAutoSubDomain !== undefined && {
      enableAutoSubDomain: input.enableAutoSubDomain
    }),
    ...(input.subDomainSettings !== undefined && {
      subDomainSettings: serializeAws_restJson1SubDomainSettings(
        input.subDomainSettings,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateWebhookCommand = async (
  input: CreateWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/apps/{appId}/webhooks";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.branchName !== undefined && { branchName: input.branchName }),
    ...(input.description !== undefined && { description: input.description })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteAppCommand = async (
  input: DeleteAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/apps/{appId}";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteBackendEnvironmentCommand = async (
  input: DeleteBackendEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/apps/{appId}/backendenvironments/{environmentName}";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.environmentName !== undefined) {
    const labelValue: string = input.environmentName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: environmentName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{environmentName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: environmentName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteBranchCommand = async (
  input: DeleteBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/apps/{appId}/branches/{branchName}";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: string = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace(
      "{branchName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteDomainAssociationCommand = async (
  input: DeleteDomainAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/apps/{appId}/domains/{domainName}";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.domainName !== undefined) {
    const labelValue: string = input.domainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: domainName.");
    }
    resolvedPath = resolvedPath.replace(
      "{domainName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: domainName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteJobCommand = async (
  input: DeleteJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/apps/{appId}/branches/{branchName}/jobs/{jobId}";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: string = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace(
      "{branchName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  if (input.jobId !== undefined) {
    const labelValue: string = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace(
      "{jobId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteWebhookCommand = async (
  input: DeleteWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/webhooks/{webhookId}";
  if (input.webhookId !== undefined) {
    const labelValue: string = input.webhookId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: webhookId.");
    }
    resolvedPath = resolvedPath.replace(
      "{webhookId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: webhookId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GenerateAccessLogsCommand = async (
  input: GenerateAccessLogsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/apps/{appId}/accesslogs";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.domainName !== undefined && { domainName: input.domainName }),
    ...(input.endTime !== undefined && {
      endTime: Math.round(input.endTime.getTime() / 1000)
    }),
    ...(input.startTime !== undefined && {
      startTime: Math.round(input.startTime.getTime() / 1000)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetAppCommand = async (
  input: GetAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/apps/{appId}";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetArtifactUrlCommand = async (
  input: GetArtifactUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/artifacts/{artifactId}";
  if (input.artifactId !== undefined) {
    const labelValue: string = input.artifactId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: artifactId.");
    }
    resolvedPath = resolvedPath.replace(
      "{artifactId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: artifactId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetBackendEnvironmentCommand = async (
  input: GetBackendEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/apps/{appId}/backendenvironments/{environmentName}";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.environmentName !== undefined) {
    const labelValue: string = input.environmentName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: environmentName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{environmentName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: environmentName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetBranchCommand = async (
  input: GetBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/apps/{appId}/branches/{branchName}";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: string = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace(
      "{branchName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetDomainAssociationCommand = async (
  input: GetDomainAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/apps/{appId}/domains/{domainName}";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.domainName !== undefined) {
    const labelValue: string = input.domainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: domainName.");
    }
    resolvedPath = resolvedPath.replace(
      "{domainName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: domainName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetJobCommand = async (
  input: GetJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/apps/{appId}/branches/{branchName}/jobs/{jobId}";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: string = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace(
      "{branchName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  if (input.jobId !== undefined) {
    const labelValue: string = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace(
      "{jobId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetWebhookCommand = async (
  input: GetWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/webhooks/{webhookId}";
  if (input.webhookId !== undefined) {
    const labelValue: string = input.webhookId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: webhookId.");
    }
    resolvedPath = resolvedPath.replace(
      "{webhookId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: webhookId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListAppsCommand = async (
  input: ListAppsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/apps";
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1ListArtifactsCommand = async (
  input: ListArtifactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/apps/{appId}/branches/{branchName}/jobs/{jobId}/artifacts";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: string = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace(
      "{branchName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  if (input.jobId !== undefined) {
    const labelValue: string = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace(
      "{jobId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1ListBackendEnvironmentsCommand = async (
  input: ListBackendEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/apps/{appId}/backendenvironments";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  body = JSON.stringify({
    ...(input.environmentName !== undefined && {
      environmentName: input.environmentName
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1ListBranchesCommand = async (
  input: ListBranchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/apps/{appId}/branches";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1ListDomainAssociationsCommand = async (
  input: ListDomainAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/apps/{appId}/domains";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/apps/{appId}/branches/{branchName}/jobs";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: string = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace(
      "{branchName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListWebhooksCommand = async (
  input: ListWebhooksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/apps/{appId}/webhooks";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1StartDeploymentCommand = async (
  input: StartDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/apps/{appId}/branches/{branchName}/deployments/start";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: string = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace(
      "{branchName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.jobId !== undefined && { jobId: input.jobId }),
    ...(input.sourceUrl !== undefined && { sourceUrl: input.sourceUrl })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1StartJobCommand = async (
  input: StartJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/apps/{appId}/branches/{branchName}/jobs";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: string = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace(
      "{branchName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.commitId !== undefined && { commitId: input.commitId }),
    ...(input.commitMessage !== undefined && {
      commitMessage: input.commitMessage
    }),
    ...(input.commitTime !== undefined && {
      commitTime: Math.round(input.commitTime.getTime() / 1000)
    }),
    ...(input.jobId !== undefined && { jobId: input.jobId }),
    ...(input.jobReason !== undefined && { jobReason: input.jobReason }),
    ...(input.jobType !== undefined && { jobType: input.jobType })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1StopJobCommand = async (
  input: StopJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/apps/{appId}/branches/{branchName}/jobs/{jobId}/stop";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: string = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace(
      "{branchName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  if (input.jobId !== undefined) {
    const labelValue: string = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace(
      "{jobId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1TagMap(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {
    ...(input.tagKeys !== undefined && {
      tagKeys: (input.tagKeys || []).map(_entry => _entry)
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1UpdateAppCommand = async (
  input: UpdateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/apps/{appId}";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.accessToken !== undefined && { accessToken: input.accessToken }),
    ...(input.autoBranchCreationConfig !== undefined && {
      autoBranchCreationConfig: serializeAws_restJson1AutoBranchCreationConfig(
        input.autoBranchCreationConfig,
        context
      )
    }),
    ...(input.autoBranchCreationPatterns !== undefined && {
      autoBranchCreationPatterns: serializeAws_restJson1AutoBranchCreationPatterns(
        input.autoBranchCreationPatterns,
        context
      )
    }),
    ...(input.basicAuthCredentials !== undefined && {
      basicAuthCredentials: input.basicAuthCredentials
    }),
    ...(input.buildSpec !== undefined && { buildSpec: input.buildSpec }),
    ...(input.customRules !== undefined && {
      customRules: serializeAws_restJson1CustomRules(input.customRules, context)
    }),
    ...(input.description !== undefined && { description: input.description }),
    ...(input.enableAutoBranchCreation !== undefined && {
      enableAutoBranchCreation: input.enableAutoBranchCreation
    }),
    ...(input.enableBasicAuth !== undefined && {
      enableBasicAuth: input.enableBasicAuth
    }),
    ...(input.enableBranchAutoBuild !== undefined && {
      enableBranchAutoBuild: input.enableBranchAutoBuild
    }),
    ...(input.environmentVariables !== undefined && {
      environmentVariables: serializeAws_restJson1EnvironmentVariables(
        input.environmentVariables,
        context
      )
    }),
    ...(input.iamServiceRoleArn !== undefined && {
      iamServiceRoleArn: input.iamServiceRoleArn
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.oauthToken !== undefined && { oauthToken: input.oauthToken }),
    ...(input.platform !== undefined && { platform: input.platform }),
    ...(input.repository !== undefined && { repository: input.repository })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateBranchCommand = async (
  input: UpdateBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/apps/{appId}/branches/{branchName}";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.branchName !== undefined) {
    const labelValue: string = input.branchName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: branchName.");
    }
    resolvedPath = resolvedPath.replace(
      "{branchName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: branchName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.backendEnvironmentArn !== undefined && {
      backendEnvironmentArn: input.backendEnvironmentArn
    }),
    ...(input.basicAuthCredentials !== undefined && {
      basicAuthCredentials: input.basicAuthCredentials
    }),
    ...(input.buildSpec !== undefined && { buildSpec: input.buildSpec }),
    ...(input.description !== undefined && { description: input.description }),
    ...(input.displayName !== undefined && { displayName: input.displayName }),
    ...(input.enableAutoBuild !== undefined && {
      enableAutoBuild: input.enableAutoBuild
    }),
    ...(input.enableBasicAuth !== undefined && {
      enableBasicAuth: input.enableBasicAuth
    }),
    ...(input.enableNotification !== undefined && {
      enableNotification: input.enableNotification
    }),
    ...(input.enablePullRequestPreview !== undefined && {
      enablePullRequestPreview: input.enablePullRequestPreview
    }),
    ...(input.environmentVariables !== undefined && {
      environmentVariables: serializeAws_restJson1EnvironmentVariables(
        input.environmentVariables,
        context
      )
    }),
    ...(input.framework !== undefined && { framework: input.framework }),
    ...(input.pullRequestEnvironmentName !== undefined && {
      pullRequestEnvironmentName: input.pullRequestEnvironmentName
    }),
    ...(input.stage !== undefined && { stage: input.stage }),
    ...(input.ttl !== undefined && { ttl: input.ttl })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateDomainAssociationCommand = async (
  input: UpdateDomainAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/apps/{appId}/domains/{domainName}";
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace(
      "{appId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.domainName !== undefined) {
    const labelValue: string = input.domainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: domainName.");
    }
    resolvedPath = resolvedPath.replace(
      "{domainName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: domainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.enableAutoSubDomain !== undefined && {
      enableAutoSubDomain: input.enableAutoSubDomain
    }),
    ...(input.subDomainSettings !== undefined && {
      subDomainSettings: serializeAws_restJson1SubDomainSettings(
        input.subDomainSettings,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateWebhookCommand = async (
  input: UpdateWebhookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/webhooks/{webhookId}";
  if (input.webhookId !== undefined) {
    const labelValue: string = input.webhookId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: webhookId.");
    }
    resolvedPath = resolvedPath.replace(
      "{webhookId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: webhookId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.branchName !== undefined && { branchName: input.branchName }),
    ...(input.description !== undefined && { description: input.description })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1CreateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateAppCommandError(output, context);
  }
  const contents: CreateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateAppResult",
    app: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.app !== undefined && data.app !== null) {
    contents.app = deserializeAws_restJson1App(data.app, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateBackendEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateBackendEnvironmentCommandError(
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
  if (
    data.backendEnvironment !== undefined &&
    data.backendEnvironment !== null
  ) {
    contents.backendEnvironment = deserializeAws_restJson1BackendEnvironment(
      data.backendEnvironment,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateBackendEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackendEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateBranchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBranchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateBranchCommandError(output, context);
  }
  const contents: CreateBranchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateBranchResult",
    branch: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.branch !== undefined && data.branch !== null) {
    contents.branch = deserializeAws_restJson1Branch(data.branch, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateBranchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBranchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateDeploymentCommandError(
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
  if (data.fileUploadUrls !== undefined && data.fileUploadUrls !== null) {
    contents.fileUploadUrls = deserializeAws_restJson1FileUploadUrls(
      data.fileUploadUrls,
      context
    );
  }
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.jobId = data.jobId;
  }
  if (data.zipUploadUrl !== undefined && data.zipUploadUrl !== null) {
    contents.zipUploadUrl = data.zipUploadUrl;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateDomainAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateDomainAssociationCommandError(
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
  if (data.domainAssociation !== undefined && data.domainAssociation !== null) {
    contents.domainAssociation = deserializeAws_restJson1DomainAssociation(
      data.domainAssociation,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDomainAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebhookCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateWebhookCommandError(output, context);
  }
  const contents: CreateWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateWebhookResult",
    webhook: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.webhook !== undefined && data.webhook !== null) {
    contents.webhook = deserializeAws_restJson1Webhook(data.webhook, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateWebhookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebhookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteAppCommandError(output, context);
  }
  const contents: DeleteAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteAppResult",
    app: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.app !== undefined && data.app !== null) {
    contents.app = deserializeAws_restJson1App(data.app, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteBackendEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteBackendEnvironmentCommandError(
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
  if (
    data.backendEnvironment !== undefined &&
    data.backendEnvironment !== null
  ) {
    contents.backendEnvironment = deserializeAws_restJson1BackendEnvironment(
      data.backendEnvironment,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteBackendEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackendEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteBranchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBranchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteBranchCommandError(output, context);
  }
  const contents: DeleteBranchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteBranchResult",
    branch: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.branch !== undefined && data.branch !== null) {
    contents.branch = deserializeAws_restJson1Branch(data.branch, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteBranchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBranchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteDomainAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteDomainAssociationCommandError(
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
  if (data.domainAssociation !== undefined && data.domainAssociation !== null) {
    contents.domainAssociation = deserializeAws_restJson1DomainAssociation(
      data.domainAssociation,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDomainAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteJobCommandError(output, context);
  }
  const contents: DeleteJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteJobResult",
    jobSummary: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobSummary !== undefined && data.jobSummary !== null) {
    contents.jobSummary = deserializeAws_restJson1JobSummary(
      data.jobSummary,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebhookCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteWebhookCommandError(output, context);
  }
  const contents: DeleteWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteWebhookResult",
    webhook: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.webhook !== undefined && data.webhook !== null) {
    contents.webhook = deserializeAws_restJson1Webhook(data.webhook, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteWebhookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebhookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GenerateAccessLogsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateAccessLogsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GenerateAccessLogsCommandError(
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
  if (data.logUrl !== undefined && data.logUrl !== null) {
    contents.logUrl = data.logUrl;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GenerateAccessLogsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateAccessLogsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetAppCommandError(output, context);
  }
  const contents: GetAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAppResult",
    app: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.app !== undefined && data.app !== null) {
    contents.app = deserializeAws_restJson1App(data.app, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetArtifactUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArtifactUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetArtifactUrlCommandError(output, context);
  }
  const contents: GetArtifactUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetArtifactUrlResult",
    artifactId: undefined,
    artifactUrl: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.artifactId !== undefined && data.artifactId !== null) {
    contents.artifactId = data.artifactId;
  }
  if (data.artifactUrl !== undefined && data.artifactUrl !== null) {
    contents.artifactUrl = data.artifactUrl;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetArtifactUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArtifactUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetBackendEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetBackendEnvironmentCommandError(
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
  if (
    data.backendEnvironment !== undefined &&
    data.backendEnvironment !== null
  ) {
    contents.backendEnvironment = deserializeAws_restJson1BackendEnvironment(
      data.backendEnvironment,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBackendEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackendEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetBranchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBranchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetBranchCommandError(output, context);
  }
  const contents: GetBranchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBranchResult",
    branch: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.branch !== undefined && data.branch !== null) {
    contents.branch = deserializeAws_restJson1Branch(data.branch, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBranchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBranchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetDomainAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetDomainAssociationCommandError(
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
  if (data.domainAssociation !== undefined && data.domainAssociation !== null) {
    contents.domainAssociation = deserializeAws_restJson1DomainAssociation(
      data.domainAssociation,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDomainAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetJobCommandError(output, context);
  }
  const contents: GetJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetJobResult",
    job: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.job !== undefined && data.job !== null) {
    contents.job = deserializeAws_restJson1Job(data.job, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebhookCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetWebhookCommandError(output, context);
  }
  const contents: GetWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetWebhookResult",
    webhook: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.webhook !== undefined && data.webhook !== null) {
    contents.webhook = deserializeAws_restJson1Webhook(data.webhook, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetWebhookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebhookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListAppsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListAppsCommandError(output, context);
  }
  const contents: ListAppsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAppsResult",
    apps: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apps !== undefined && data.apps !== null) {
    contents.apps = deserializeAws_restJson1Apps(data.apps, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAppsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListArtifactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArtifactsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListArtifactsCommandError(output, context);
  }
  const contents: ListArtifactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListArtifactsResult",
    artifacts: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.artifacts !== undefined && data.artifacts !== null) {
    contents.artifacts = deserializeAws_restJson1Artifacts(
      data.artifacts,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListArtifactsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArtifactsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListBackendEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackendEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListBackendEnvironmentsCommandError(
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
  if (
    data.backendEnvironments !== undefined &&
    data.backendEnvironments !== null
  ) {
    contents.backendEnvironments = deserializeAws_restJson1BackendEnvironments(
      data.backendEnvironments,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBackendEnvironmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackendEnvironmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListBranchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBranchesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListBranchesCommandError(output, context);
  }
  const contents: ListBranchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListBranchesResult",
    branches: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.branches !== undefined && data.branches !== null) {
    contents.branches = deserializeAws_restJson1Branches(
      data.branches,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBranchesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBranchesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListDomainAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListDomainAssociationsCommandError(
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
  if (
    data.domainAssociations !== undefined &&
    data.domainAssociations !== null
  ) {
    contents.domainAssociations = deserializeAws_restJson1DomainAssociations(
      data.domainAssociations,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDomainAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListJobsCommandError(output, context);
  }
  const contents: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListJobsResult",
    jobSummaries: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobSummaries !== undefined && data.jobSummaries !== null) {
    contents.jobSummaries = deserializeAws_restJson1JobSummaries(
      data.jobSummaries,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(
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
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amplify#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListWebhooksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebhooksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListWebhooksCommandError(output, context);
  }
  const contents: ListWebhooksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListWebhooksResult",
    nextToken: undefined,
    webhooks: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.webhooks !== undefined && data.webhooks !== null) {
    contents.webhooks = deserializeAws_restJson1Webhooks(
      data.webhooks,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListWebhooksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebhooksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StartDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1StartDeploymentCommandError(output, context);
  }
  const contents: StartDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartDeploymentResult",
    jobSummary: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobSummary !== undefined && data.jobSummary !== null) {
    contents.jobSummary = deserializeAws_restJson1JobSummary(
      data.jobSummary,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StartJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1StartJobCommandError(output, context);
  }
  const contents: StartJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartJobResult",
    jobSummary: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobSummary !== undefined && data.jobSummary !== null) {
    contents.jobSummary = deserializeAws_restJson1JobSummary(
      data.jobSummary,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StopJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1StopJobCommandError(output, context);
  }
  const contents: StopJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopJobResult",
    jobSummary: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobSummary !== undefined && data.jobSummary !== null) {
    contents.jobSummary = deserializeAws_restJson1JobSummary(
      data.jobSummary,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StopJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amplify#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amplify#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amplify#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateAppCommandError(output, context);
  }
  const contents: UpdateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateAppResult",
    app: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.app !== undefined && data.app !== null) {
    contents.app = deserializeAws_restJson1App(data.app, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateBranchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBranchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateBranchCommandError(output, context);
  }
  const contents: UpdateBranchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateBranchResult",
    branch: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.branch !== undefined && data.branch !== null) {
    contents.branch = deserializeAws_restJson1Branch(data.branch, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateBranchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBranchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateDomainAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateDomainAssociationCommandError(
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
  if (data.domainAssociation !== undefined && data.domainAssociation !== null) {
    contents.domainAssociation = deserializeAws_restJson1DomainAssociation(
      data.domainAssociation,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDomainAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateWebhookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebhookCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateWebhookCommandError(output, context);
  }
  const contents: UpdateWebhookCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateWebhookResult",
    webhook: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.webhook !== undefined && data.webhook !== null) {
    contents.webhook = deserializeAws_restJson1Webhook(data.webhook, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateWebhookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebhookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.amplify#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependentServiceFailureException":
    case "com.amazonaws.amplify#DependentServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1DependentServiceFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.amplify#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.amplify#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.amplify#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1DependentServiceFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependentServiceFailureException> => {
  const contents: DependentServiceFailureException = {
    name: "DependentServiceFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = data.code;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1UnauthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: UnauthorizedException = {
    name: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1AutoBranchCreationConfig = (
  input: AutoBranchCreationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.basicAuthCredentials !== undefined && {
      basicAuthCredentials: input.basicAuthCredentials
    }),
    ...(input.buildSpec !== undefined && { buildSpec: input.buildSpec }),
    ...(input.enableAutoBuild !== undefined && {
      enableAutoBuild: input.enableAutoBuild
    }),
    ...(input.enableBasicAuth !== undefined && {
      enableBasicAuth: input.enableBasicAuth
    }),
    ...(input.enablePullRequestPreview !== undefined && {
      enablePullRequestPreview: input.enablePullRequestPreview
    }),
    ...(input.environmentVariables !== undefined && {
      environmentVariables: serializeAws_restJson1EnvironmentVariables(
        input.environmentVariables,
        context
      )
    }),
    ...(input.framework !== undefined && { framework: input.framework }),
    ...(input.pullRequestEnvironmentName !== undefined && {
      pullRequestEnvironmentName: input.pullRequestEnvironmentName
    }),
    ...(input.stage !== undefined && { stage: input.stage })
  };
};

const serializeAws_restJson1AutoBranchCreationPatterns = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1CustomRule = (
  input: CustomRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.condition !== undefined && { condition: input.condition }),
    ...(input.source !== undefined && { source: input.source }),
    ...(input.status !== undefined && { status: input.status }),
    ...(input.target !== undefined && { target: input.target })
  };
};

const serializeAws_restJson1CustomRules = (
  input: CustomRule[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1CustomRule(entry, context));
};

const serializeAws_restJson1EnvironmentVariables = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1FileMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1SubDomainSetting = (
  input: SubDomainSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.branchName !== undefined && { branchName: input.branchName }),
    ...(input.prefix !== undefined && { prefix: input.prefix })
  };
};

const serializeAws_restJson1SubDomainSettings = (
  input: SubDomainSetting[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1SubDomainSetting(entry, context)
  );
};

const serializeAws_restJson1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1App = (
  output: any,
  context: __SerdeContext
): App => {
  return {
    __type: "App",
    appArn:
      output.appArn !== undefined && output.appArn !== null
        ? output.appArn
        : undefined,
    appId:
      output.appId !== undefined && output.appId !== null
        ? output.appId
        : undefined,
    autoBranchCreationConfig:
      output.autoBranchCreationConfig !== undefined &&
      output.autoBranchCreationConfig !== null
        ? deserializeAws_restJson1AutoBranchCreationConfig(
            output.autoBranchCreationConfig,
            context
          )
        : undefined,
    autoBranchCreationPatterns:
      output.autoBranchCreationPatterns !== undefined &&
      output.autoBranchCreationPatterns !== null
        ? deserializeAws_restJson1AutoBranchCreationPatterns(
            output.autoBranchCreationPatterns,
            context
          )
        : undefined,
    basicAuthCredentials:
      output.basicAuthCredentials !== undefined &&
      output.basicAuthCredentials !== null
        ? output.basicAuthCredentials
        : undefined,
    buildSpec:
      output.buildSpec !== undefined && output.buildSpec !== null
        ? output.buildSpec
        : undefined,
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? new Date(Math.round(output.createTime * 1000))
        : undefined,
    customRules:
      output.customRules !== undefined && output.customRules !== null
        ? deserializeAws_restJson1CustomRules(output.customRules, context)
        : undefined,
    defaultDomain:
      output.defaultDomain !== undefined && output.defaultDomain !== null
        ? output.defaultDomain
        : undefined,
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    enableAutoBranchCreation:
      output.enableAutoBranchCreation !== undefined &&
      output.enableAutoBranchCreation !== null
        ? output.enableAutoBranchCreation
        : undefined,
    enableBasicAuth:
      output.enableBasicAuth !== undefined && output.enableBasicAuth !== null
        ? output.enableBasicAuth
        : undefined,
    enableBranchAutoBuild:
      output.enableBranchAutoBuild !== undefined &&
      output.enableBranchAutoBuild !== null
        ? output.enableBranchAutoBuild
        : undefined,
    environmentVariables:
      output.environmentVariables !== undefined &&
      output.environmentVariables !== null
        ? deserializeAws_restJson1EnvironmentVariables(
            output.environmentVariables,
            context
          )
        : undefined,
    iamServiceRoleArn:
      output.iamServiceRoleArn !== undefined &&
      output.iamServiceRoleArn !== null
        ? output.iamServiceRoleArn
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    platform:
      output.platform !== undefined && output.platform !== null
        ? output.platform
        : undefined,
    productionBranch:
      output.productionBranch !== undefined && output.productionBranch !== null
        ? deserializeAws_restJson1ProductionBranch(
            output.productionBranch,
            context
          )
        : undefined,
    repository:
      output.repository !== undefined && output.repository !== null
        ? output.repository
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    updateTime:
      output.updateTime !== undefined && output.updateTime !== null
        ? new Date(Math.round(output.updateTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_restJson1Apps = (
  output: any,
  context: __SerdeContext
): App[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1App(entry, context)
  );
};

const deserializeAws_restJson1Artifact = (
  output: any,
  context: __SerdeContext
): Artifact => {
  return {
    __type: "Artifact",
    artifactFileName:
      output.artifactFileName !== undefined && output.artifactFileName !== null
        ? output.artifactFileName
        : undefined,
    artifactId:
      output.artifactId !== undefined && output.artifactId !== null
        ? output.artifactId
        : undefined
  } as any;
};

const deserializeAws_restJson1Artifacts = (
  output: any,
  context: __SerdeContext
): Artifact[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Artifact(entry, context)
  );
};

const deserializeAws_restJson1AssociatedResources = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1AutoBranchCreationConfig = (
  output: any,
  context: __SerdeContext
): AutoBranchCreationConfig => {
  return {
    __type: "AutoBranchCreationConfig",
    basicAuthCredentials:
      output.basicAuthCredentials !== undefined &&
      output.basicAuthCredentials !== null
        ? output.basicAuthCredentials
        : undefined,
    buildSpec:
      output.buildSpec !== undefined && output.buildSpec !== null
        ? output.buildSpec
        : undefined,
    enableAutoBuild:
      output.enableAutoBuild !== undefined && output.enableAutoBuild !== null
        ? output.enableAutoBuild
        : undefined,
    enableBasicAuth:
      output.enableBasicAuth !== undefined && output.enableBasicAuth !== null
        ? output.enableBasicAuth
        : undefined,
    enablePullRequestPreview:
      output.enablePullRequestPreview !== undefined &&
      output.enablePullRequestPreview !== null
        ? output.enablePullRequestPreview
        : undefined,
    environmentVariables:
      output.environmentVariables !== undefined &&
      output.environmentVariables !== null
        ? deserializeAws_restJson1EnvironmentVariables(
            output.environmentVariables,
            context
          )
        : undefined,
    framework:
      output.framework !== undefined && output.framework !== null
        ? output.framework
        : undefined,
    pullRequestEnvironmentName:
      output.pullRequestEnvironmentName !== undefined &&
      output.pullRequestEnvironmentName !== null
        ? output.pullRequestEnvironmentName
        : undefined,
    stage:
      output.stage !== undefined && output.stage !== null
        ? output.stage
        : undefined
  } as any;
};

const deserializeAws_restJson1AutoBranchCreationPatterns = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1BackendEnvironment = (
  output: any,
  context: __SerdeContext
): BackendEnvironment => {
  return {
    __type: "BackendEnvironment",
    backendEnvironmentArn:
      output.backendEnvironmentArn !== undefined &&
      output.backendEnvironmentArn !== null
        ? output.backendEnvironmentArn
        : undefined,
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? new Date(Math.round(output.createTime * 1000))
        : undefined,
    deploymentArtifacts:
      output.deploymentArtifacts !== undefined &&
      output.deploymentArtifacts !== null
        ? output.deploymentArtifacts
        : undefined,
    environmentName:
      output.environmentName !== undefined && output.environmentName !== null
        ? output.environmentName
        : undefined,
    stackName:
      output.stackName !== undefined && output.stackName !== null
        ? output.stackName
        : undefined,
    updateTime:
      output.updateTime !== undefined && output.updateTime !== null
        ? new Date(Math.round(output.updateTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_restJson1BackendEnvironments = (
  output: any,
  context: __SerdeContext
): BackendEnvironment[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1BackendEnvironment(entry, context)
  );
};

const deserializeAws_restJson1Branch = (
  output: any,
  context: __SerdeContext
): Branch => {
  return {
    __type: "Branch",
    activeJobId:
      output.activeJobId !== undefined && output.activeJobId !== null
        ? output.activeJobId
        : undefined,
    associatedResources:
      output.associatedResources !== undefined &&
      output.associatedResources !== null
        ? deserializeAws_restJson1AssociatedResources(
            output.associatedResources,
            context
          )
        : undefined,
    backendEnvironmentArn:
      output.backendEnvironmentArn !== undefined &&
      output.backendEnvironmentArn !== null
        ? output.backendEnvironmentArn
        : undefined,
    basicAuthCredentials:
      output.basicAuthCredentials !== undefined &&
      output.basicAuthCredentials !== null
        ? output.basicAuthCredentials
        : undefined,
    branchArn:
      output.branchArn !== undefined && output.branchArn !== null
        ? output.branchArn
        : undefined,
    branchName:
      output.branchName !== undefined && output.branchName !== null
        ? output.branchName
        : undefined,
    buildSpec:
      output.buildSpec !== undefined && output.buildSpec !== null
        ? output.buildSpec
        : undefined,
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? new Date(Math.round(output.createTime * 1000))
        : undefined,
    customDomains:
      output.customDomains !== undefined && output.customDomains !== null
        ? deserializeAws_restJson1CustomDomains(output.customDomains, context)
        : undefined,
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    destinationBranch:
      output.destinationBranch !== undefined &&
      output.destinationBranch !== null
        ? output.destinationBranch
        : undefined,
    displayName:
      output.displayName !== undefined && output.displayName !== null
        ? output.displayName
        : undefined,
    enableAutoBuild:
      output.enableAutoBuild !== undefined && output.enableAutoBuild !== null
        ? output.enableAutoBuild
        : undefined,
    enableBasicAuth:
      output.enableBasicAuth !== undefined && output.enableBasicAuth !== null
        ? output.enableBasicAuth
        : undefined,
    enableNotification:
      output.enableNotification !== undefined &&
      output.enableNotification !== null
        ? output.enableNotification
        : undefined,
    enablePullRequestPreview:
      output.enablePullRequestPreview !== undefined &&
      output.enablePullRequestPreview !== null
        ? output.enablePullRequestPreview
        : undefined,
    environmentVariables:
      output.environmentVariables !== undefined &&
      output.environmentVariables !== null
        ? deserializeAws_restJson1EnvironmentVariables(
            output.environmentVariables,
            context
          )
        : undefined,
    framework:
      output.framework !== undefined && output.framework !== null
        ? output.framework
        : undefined,
    pullRequestEnvironmentName:
      output.pullRequestEnvironmentName !== undefined &&
      output.pullRequestEnvironmentName !== null
        ? output.pullRequestEnvironmentName
        : undefined,
    sourceBranch:
      output.sourceBranch !== undefined && output.sourceBranch !== null
        ? output.sourceBranch
        : undefined,
    stage:
      output.stage !== undefined && output.stage !== null
        ? output.stage
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    thumbnailUrl:
      output.thumbnailUrl !== undefined && output.thumbnailUrl !== null
        ? output.thumbnailUrl
        : undefined,
    totalNumberOfJobs:
      output.totalNumberOfJobs !== undefined &&
      output.totalNumberOfJobs !== null
        ? output.totalNumberOfJobs
        : undefined,
    ttl:
      output.ttl !== undefined && output.ttl !== null ? output.ttl : undefined,
    updateTime:
      output.updateTime !== undefined && output.updateTime !== null
        ? new Date(Math.round(output.updateTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_restJson1Branches = (
  output: any,
  context: __SerdeContext
): Branch[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Branch(entry, context)
  );
};

const deserializeAws_restJson1CustomDomains = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1CustomRule = (
  output: any,
  context: __SerdeContext
): CustomRule => {
  return {
    __type: "CustomRule",
    condition:
      output.condition !== undefined && output.condition !== null
        ? output.condition
        : undefined,
    source:
      output.source !== undefined && output.source !== null
        ? output.source
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    target:
      output.target !== undefined && output.target !== null
        ? output.target
        : undefined
  } as any;
};

const deserializeAws_restJson1CustomRules = (
  output: any,
  context: __SerdeContext
): CustomRule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1CustomRule(entry, context)
  );
};

const deserializeAws_restJson1DomainAssociation = (
  output: any,
  context: __SerdeContext
): DomainAssociation => {
  return {
    __type: "DomainAssociation",
    certificateVerificationDNSRecord:
      output.certificateVerificationDNSRecord !== undefined &&
      output.certificateVerificationDNSRecord !== null
        ? output.certificateVerificationDNSRecord
        : undefined,
    domainAssociationArn:
      output.domainAssociationArn !== undefined &&
      output.domainAssociationArn !== null
        ? output.domainAssociationArn
        : undefined,
    domainName:
      output.domainName !== undefined && output.domainName !== null
        ? output.domainName
        : undefined,
    domainStatus:
      output.domainStatus !== undefined && output.domainStatus !== null
        ? output.domainStatus
        : undefined,
    enableAutoSubDomain:
      output.enableAutoSubDomain !== undefined &&
      output.enableAutoSubDomain !== null
        ? output.enableAutoSubDomain
        : undefined,
    statusReason:
      output.statusReason !== undefined && output.statusReason !== null
        ? output.statusReason
        : undefined,
    subDomains:
      output.subDomains !== undefined && output.subDomains !== null
        ? deserializeAws_restJson1SubDomains(output.subDomains, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1DomainAssociations = (
  output: any,
  context: __SerdeContext
): DomainAssociation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1DomainAssociation(entry, context)
  );
};

const deserializeAws_restJson1EnvironmentVariables = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1FileUploadUrls = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1Job = (
  output: any,
  context: __SerdeContext
): Job => {
  return {
    __type: "Job",
    steps:
      output.steps !== undefined && output.steps !== null
        ? deserializeAws_restJson1Steps(output.steps, context)
        : undefined,
    summary:
      output.summary !== undefined && output.summary !== null
        ? deserializeAws_restJson1JobSummary(output.summary, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1JobSummaries = (
  output: any,
  context: __SerdeContext
): JobSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1JobSummary(entry, context)
  );
};

const deserializeAws_restJson1JobSummary = (
  output: any,
  context: __SerdeContext
): JobSummary => {
  return {
    __type: "JobSummary",
    commitId:
      output.commitId !== undefined && output.commitId !== null
        ? output.commitId
        : undefined,
    commitMessage:
      output.commitMessage !== undefined && output.commitMessage !== null
        ? output.commitMessage
        : undefined,
    commitTime:
      output.commitTime !== undefined && output.commitTime !== null
        ? new Date(Math.round(output.commitTime * 1000))
        : undefined,
    endTime:
      output.endTime !== undefined && output.endTime !== null
        ? new Date(Math.round(output.endTime * 1000))
        : undefined,
    jobArn:
      output.jobArn !== undefined && output.jobArn !== null
        ? output.jobArn
        : undefined,
    jobId:
      output.jobId !== undefined && output.jobId !== null
        ? output.jobId
        : undefined,
    jobType:
      output.jobType !== undefined && output.jobType !== null
        ? output.jobType
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1ProductionBranch = (
  output: any,
  context: __SerdeContext
): ProductionBranch => {
  return {
    __type: "ProductionBranch",
    branchName:
      output.branchName !== undefined && output.branchName !== null
        ? output.branchName
        : undefined,
    lastDeployTime:
      output.lastDeployTime !== undefined && output.lastDeployTime !== null
        ? new Date(Math.round(output.lastDeployTime * 1000))
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    thumbnailUrl:
      output.thumbnailUrl !== undefined && output.thumbnailUrl !== null
        ? output.thumbnailUrl
        : undefined
  } as any;
};

const deserializeAws_restJson1Screenshots = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1Step = (
  output: any,
  context: __SerdeContext
): Step => {
  return {
    __type: "Step",
    artifactsUrl:
      output.artifactsUrl !== undefined && output.artifactsUrl !== null
        ? output.artifactsUrl
        : undefined,
    context:
      output.context !== undefined && output.context !== null
        ? output.context
        : undefined,
    endTime:
      output.endTime !== undefined && output.endTime !== null
        ? new Date(Math.round(output.endTime * 1000))
        : undefined,
    logUrl:
      output.logUrl !== undefined && output.logUrl !== null
        ? output.logUrl
        : undefined,
    screenshots:
      output.screenshots !== undefined && output.screenshots !== null
        ? deserializeAws_restJson1Screenshots(output.screenshots, context)
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    statusReason:
      output.statusReason !== undefined && output.statusReason !== null
        ? output.statusReason
        : undefined,
    stepName:
      output.stepName !== undefined && output.stepName !== null
        ? output.stepName
        : undefined,
    testArtifactsUrl:
      output.testArtifactsUrl !== undefined && output.testArtifactsUrl !== null
        ? output.testArtifactsUrl
        : undefined,
    testConfigUrl:
      output.testConfigUrl !== undefined && output.testConfigUrl !== null
        ? output.testConfigUrl
        : undefined
  } as any;
};

const deserializeAws_restJson1Steps = (
  output: any,
  context: __SerdeContext
): Step[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Step(entry, context)
  );
};

const deserializeAws_restJson1SubDomain = (
  output: any,
  context: __SerdeContext
): SubDomain => {
  return {
    __type: "SubDomain",
    dnsRecord:
      output.dnsRecord !== undefined && output.dnsRecord !== null
        ? output.dnsRecord
        : undefined,
    subDomainSetting:
      output.subDomainSetting !== undefined && output.subDomainSetting !== null
        ? deserializeAws_restJson1SubDomainSetting(
            output.subDomainSetting,
            context
          )
        : undefined,
    verified:
      output.verified !== undefined && output.verified !== null
        ? output.verified
        : undefined
  } as any;
};

const deserializeAws_restJson1SubDomains = (
  output: any,
  context: __SerdeContext
): SubDomain[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1SubDomain(entry, context)
  );
};

const deserializeAws_restJson1SubDomainSetting = (
  output: any,
  context: __SerdeContext
): SubDomainSetting => {
  return {
    __type: "SubDomainSetting",
    branchName:
      output.branchName !== undefined && output.branchName !== null
        ? output.branchName
        : undefined,
    prefix:
      output.prefix !== undefined && output.prefix !== null
        ? output.prefix
        : undefined
  } as any;
};

const deserializeAws_restJson1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1Webhook = (
  output: any,
  context: __SerdeContext
): Webhook => {
  return {
    __type: "Webhook",
    branchName:
      output.branchName !== undefined && output.branchName !== null
        ? output.branchName
        : undefined,
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? new Date(Math.round(output.createTime * 1000))
        : undefined,
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    updateTime:
      output.updateTime !== undefined && output.updateTime !== null
        ? new Date(Math.round(output.updateTime * 1000))
        : undefined,
    webhookArn:
      output.webhookArn !== undefined && output.webhookArn !== null
        ? output.webhookArn
        : undefined,
    webhookId:
      output.webhookId !== undefined && output.webhookId !== null
        ? output.webhookId
        : undefined,
    webhookUrl:
      output.webhookUrl !== undefined && output.webhookUrl !== null
        ? output.webhookUrl
        : undefined
  } as any;
};

const deserializeAws_restJson1Webhooks = (
  output: any,
  context: __SerdeContext
): Webhook[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Webhook(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
