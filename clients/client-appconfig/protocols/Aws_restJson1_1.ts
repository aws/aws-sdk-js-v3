import {
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput
} from "../commands/CreateApplicationCommand";
import {
  CreateConfigurationProfileCommandInput,
  CreateConfigurationProfileCommandOutput
} from "../commands/CreateConfigurationProfileCommand";
import {
  CreateDeploymentStrategyCommandInput,
  CreateDeploymentStrategyCommandOutput
} from "../commands/CreateDeploymentStrategyCommand";
import {
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput
} from "../commands/CreateEnvironmentCommand";
import {
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput
} from "../commands/DeleteApplicationCommand";
import {
  DeleteConfigurationProfileCommandInput,
  DeleteConfigurationProfileCommandOutput
} from "../commands/DeleteConfigurationProfileCommand";
import {
  DeleteDeploymentStrategyCommandInput,
  DeleteDeploymentStrategyCommandOutput
} from "../commands/DeleteDeploymentStrategyCommand";
import {
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput
} from "../commands/DeleteEnvironmentCommand";
import {
  GetApplicationCommandInput,
  GetApplicationCommandOutput
} from "../commands/GetApplicationCommand";
import {
  GetConfigurationCommandInput,
  GetConfigurationCommandOutput
} from "../commands/GetConfigurationCommand";
import {
  GetConfigurationProfileCommandInput,
  GetConfigurationProfileCommandOutput
} from "../commands/GetConfigurationProfileCommand";
import {
  GetDeploymentCommandInput,
  GetDeploymentCommandOutput
} from "../commands/GetDeploymentCommand";
import {
  GetDeploymentStrategyCommandInput,
  GetDeploymentStrategyCommandOutput
} from "../commands/GetDeploymentStrategyCommand";
import {
  GetEnvironmentCommandInput,
  GetEnvironmentCommandOutput
} from "../commands/GetEnvironmentCommand";
import {
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput
} from "../commands/ListApplicationsCommand";
import {
  ListConfigurationProfilesCommandInput,
  ListConfigurationProfilesCommandOutput
} from "../commands/ListConfigurationProfilesCommand";
import {
  ListDeploymentStrategiesCommandInput,
  ListDeploymentStrategiesCommandOutput
} from "../commands/ListDeploymentStrategiesCommand";
import {
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput
} from "../commands/ListDeploymentsCommand";
import {
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput
} from "../commands/ListEnvironmentsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  StartDeploymentCommandInput,
  StartDeploymentCommandOutput
} from "../commands/StartDeploymentCommand";
import {
  StopDeploymentCommandInput,
  StopDeploymentCommandOutput
} from "../commands/StopDeploymentCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput
} from "../commands/UpdateApplicationCommand";
import {
  UpdateConfigurationProfileCommandInput,
  UpdateConfigurationProfileCommandOutput
} from "../commands/UpdateConfigurationProfileCommand";
import {
  UpdateDeploymentStrategyCommandInput,
  UpdateDeploymentStrategyCommandOutput
} from "../commands/UpdateDeploymentStrategyCommand";
import {
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput
} from "../commands/UpdateEnvironmentCommand";
import {
  ValidateConfigurationCommandInput,
  ValidateConfigurationCommandOutput
} from "../commands/ValidateConfigurationCommand";
import {
  Application,
  BadRequestException,
  ConfigurationProfileSummary,
  ConflictException,
  DeploymentStrategy,
  DeploymentSummary,
  Environment,
  InternalServerException,
  Monitor,
  ResourceNotFoundException,
  Validator,
  ValidatorType
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

export async function serializeAws_restJson1_1CreateApplicationCommand(
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/applications";
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagMap(input.Tags, context);
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

export async function serializeAws_restJson1_1CreateConfigurationProfileCommand(
  input: CreateConfigurationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/applications/{ApplicationId}/configurationprofiles";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.LocationUri !== undefined) {
    bodyParams["LocationUri"] = input.LocationUri;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.RetrievalRoleArn !== undefined) {
    bodyParams["RetrievalRoleArn"] = input.RetrievalRoleArn;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagMap(input.Tags, context);
  }
  if (input.Validators !== undefined) {
    bodyParams["Validators"] = serializeAws_restJson1_1ValidatorList(
      input.Validators,
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

export async function serializeAws_restJson1_1CreateDeploymentStrategyCommand(
  input: CreateDeploymentStrategyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/deploymentstrategies";
  let body: any;
  const bodyParams: any = {};
  if (input.DeploymentDurationInMinutes !== undefined) {
    bodyParams["DeploymentDurationInMinutes"] =
      input.DeploymentDurationInMinutes;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.FinalBakeTimeInMinutes !== undefined) {
    bodyParams["FinalBakeTimeInMinutes"] = input.FinalBakeTimeInMinutes;
  }
  if (input.GrowthFactor !== undefined) {
    bodyParams["GrowthFactor"] = input.GrowthFactor;
  }
  if (input.GrowthType !== undefined) {
    bodyParams["GrowthType"] = input.GrowthType;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ReplicateTo !== undefined) {
    bodyParams["ReplicateTo"] = input.ReplicateTo;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagMap(input.Tags, context);
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

export async function serializeAws_restJson1_1CreateEnvironmentCommand(
  input: CreateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/applications/{ApplicationId}/environments";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Monitors !== undefined) {
    bodyParams["Monitors"] = serializeAws_restJson1_1MonitorList(
      input.Monitors,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagMap(input.Tags, context);
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

export async function serializeAws_restJson1_1DeleteApplicationCommand(
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/applications/{ApplicationId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteConfigurationProfileCommand(
  input: DeleteConfigurationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.ConfigurationProfileId !== undefined) {
    const labelValue: string = input.ConfigurationProfileId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationProfileId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationProfileId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationProfileId."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteDeploymentStrategyCommand(
  input: DeleteDeploymentStrategyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/deployementstrategies/{DeploymentStrategyId}";
  if (input.DeploymentStrategyId !== undefined) {
    const labelValue: string = input.DeploymentStrategyId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DeploymentStrategyId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{DeploymentStrategyId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: DeploymentStrategyId."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteEnvironmentCommand(
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/applications/{ApplicationId}/environments/{EnvironmentId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.EnvironmentId !== undefined) {
    const labelValue: string = input.EnvironmentId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EnvironmentId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{EnvironmentId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: EnvironmentId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetApplicationCommand(
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/applications/{ApplicationId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetConfigurationCommand(
  input: GetConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/applications/{Application}/environments/{Environment}/configurations/{Configuration}";
  if (input.Application !== undefined) {
    const labelValue: string = input.Application;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: Application."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{Application}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Application.");
  }
  if (input.Configuration !== undefined) {
    const labelValue: string = input.Configuration;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: Configuration."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{Configuration}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Configuration.");
  }
  if (input.Environment !== undefined) {
    const labelValue: string = input.Environment;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: Environment."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{Environment}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Environment.");
  }
  const query: any = {};
  if (input.ClientConfigurationVersion !== undefined) {
    query["client_configuration_version"] = input.ClientConfigurationVersion;
  }
  if (input.ClientId !== undefined) {
    query["client_id"] = input.ClientId;
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

export async function serializeAws_restJson1_1GetConfigurationProfileCommand(
  input: GetConfigurationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.ConfigurationProfileId !== undefined) {
    const labelValue: string = input.ConfigurationProfileId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationProfileId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationProfileId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationProfileId."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetDeploymentCommand(
  input: GetDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.DeploymentNumber !== undefined) {
    const labelValue: string = input.DeploymentNumber.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DeploymentNumber."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{DeploymentNumber}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: DeploymentNumber."
    );
  }
  if (input.EnvironmentId !== undefined) {
    const labelValue: string = input.EnvironmentId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EnvironmentId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{EnvironmentId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: EnvironmentId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetDeploymentStrategyCommand(
  input: GetDeploymentStrategyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/deploymentstrategies/{DeploymentStrategyId}";
  if (input.DeploymentStrategyId !== undefined) {
    const labelValue: string = input.DeploymentStrategyId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DeploymentStrategyId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{DeploymentStrategyId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: DeploymentStrategyId."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetEnvironmentCommand(
  input: GetEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/applications/{ApplicationId}/environments/{EnvironmentId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.EnvironmentId !== undefined) {
    const labelValue: string = input.EnvironmentId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EnvironmentId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{EnvironmentId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: EnvironmentId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListApplicationsCommand(
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/applications";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["max_results"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["next_token"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListConfigurationProfilesCommand(
  input: ListConfigurationProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/applications/{ApplicationId}/configurationprofiles";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["max_results"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["next_token"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListDeploymentStrategiesCommand(
  input: ListDeploymentStrategiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/deploymentstrategies";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["max_results"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["next_token"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListDeploymentsCommand(
  input: ListDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.EnvironmentId !== undefined) {
    const labelValue: string = input.EnvironmentId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EnvironmentId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{EnvironmentId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: EnvironmentId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["max_results"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["next_token"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListEnvironmentsCommand(
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/applications/{ApplicationId}/environments";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["max_results"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["next_token"] = input.NextToken;
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
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1StartDeploymentCommand(
  input: StartDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.EnvironmentId !== undefined) {
    const labelValue: string = input.EnvironmentId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EnvironmentId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{EnvironmentId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: EnvironmentId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.ConfigurationProfileId !== undefined) {
    bodyParams["ConfigurationProfileId"] = input.ConfigurationProfileId;
  }
  if (input.ConfigurationVersion !== undefined) {
    bodyParams["ConfigurationVersion"] = input.ConfigurationVersion;
  }
  if (input.DeploymentStrategyId !== undefined) {
    bodyParams["DeploymentStrategyId"] = input.DeploymentStrategyId;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagMap(input.Tags, context);
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

export async function serializeAws_restJson1_1StopDeploymentCommand(
  input: StopDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/applications/{ApplicationId}/environments/{EnvironmentId}/deployments/{DeploymentNumber}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.DeploymentNumber !== undefined) {
    const labelValue: string = input.DeploymentNumber.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DeploymentNumber."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{DeploymentNumber}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: DeploymentNumber."
    );
  }
  if (input.EnvironmentId !== undefined) {
    const labelValue: string = input.EnvironmentId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EnvironmentId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{EnvironmentId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: EnvironmentId.");
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
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagMap(input.Tags, context);
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
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {};
  if (input.TagKeys !== undefined) {
    query["tagKeys"] = input.TagKeys;
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

export async function serializeAws_restJson1_1UpdateApplicationCommand(
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/applications/{ApplicationId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateConfigurationProfileCommand(
  input: UpdateConfigurationProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.ConfigurationProfileId !== undefined) {
    const labelValue: string = input.ConfigurationProfileId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationProfileId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationProfileId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationProfileId."
    );
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.RetrievalRoleArn !== undefined) {
    bodyParams["RetrievalRoleArn"] = input.RetrievalRoleArn;
  }
  if (input.Validators !== undefined) {
    bodyParams["Validators"] = serializeAws_restJson1_1ValidatorList(
      input.Validators,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateDeploymentStrategyCommand(
  input: UpdateDeploymentStrategyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/deploymentstrategies/{DeploymentStrategyId}";
  if (input.DeploymentStrategyId !== undefined) {
    const labelValue: string = input.DeploymentStrategyId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DeploymentStrategyId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{DeploymentStrategyId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: DeploymentStrategyId."
    );
  }
  let body: any;
  const bodyParams: any = {};
  if (input.DeploymentDurationInMinutes !== undefined) {
    bodyParams["DeploymentDurationInMinutes"] =
      input.DeploymentDurationInMinutes;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.FinalBakeTimeInMinutes !== undefined) {
    bodyParams["FinalBakeTimeInMinutes"] = input.FinalBakeTimeInMinutes;
  }
  if (input.GrowthFactor !== undefined) {
    bodyParams["GrowthFactor"] = input.GrowthFactor;
  }
  if (input.GrowthType !== undefined) {
    bodyParams["GrowthType"] = input.GrowthType;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateEnvironmentCommand(
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/applications/{ApplicationId}/environments/{EnvironmentId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.EnvironmentId !== undefined) {
    const labelValue: string = input.EnvironmentId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EnvironmentId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{EnvironmentId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: EnvironmentId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Monitors !== undefined) {
    bodyParams["Monitors"] = serializeAws_restJson1_1MonitorList(
      input.Monitors,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ValidateConfigurationCommand(
  input: ValidateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/validators";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ApplicationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ApplicationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.ConfigurationProfileId !== undefined) {
    const labelValue: string = input.ConfigurationProfileId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationProfileId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationProfileId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationProfileId."
    );
  }
  const query: any = {};
  if (input.ConfigurationVersion !== undefined) {
    query["configuration_version"] = input.ConfigurationVersion;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function deserializeAws_restJson1_1CreateApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateApplicationCommandError(
      output,
      context
    );
  }
  const contents: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Application",
    Description: undefined,
    Id: undefined,
    Name: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateConfigurationProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationProfileCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateConfigurationProfileCommandError(
      output,
      context
    );
  }
  const contents: CreateConfigurationProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfigurationProfile",
    ApplicationId: undefined,
    Description: undefined,
    Id: undefined,
    LocationUri: undefined,
    Name: undefined,
    RetrievalRoleArn: undefined,
    Validators: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = data.ApplicationId;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.LocationUri !== undefined && data.LocationUri !== null) {
    contents.LocationUri = data.LocationUri;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.RetrievalRoleArn !== undefined && data.RetrievalRoleArn !== null) {
    contents.RetrievalRoleArn = data.RetrievalRoleArn;
  }
  if (data.Validators !== undefined && data.Validators !== null) {
    contents.Validators = deserializeAws_restJson1_1ValidatorList(
      data.Validators,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateConfigurationProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationProfileCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateDeploymentStrategyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentStrategyCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateDeploymentStrategyCommandError(
      output,
      context
    );
  }
  const contents: CreateDeploymentStrategyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeploymentStrategy",
    DeploymentDurationInMinutes: undefined,
    Description: undefined,
    FinalBakeTimeInMinutes: undefined,
    GrowthFactor: undefined,
    GrowthType: undefined,
    Id: undefined,
    Name: undefined,
    ReplicateTo: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.DeploymentDurationInMinutes !== undefined &&
    data.DeploymentDurationInMinutes !== null
  ) {
    contents.DeploymentDurationInMinutes = data.DeploymentDurationInMinutes;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (
    data.FinalBakeTimeInMinutes !== undefined &&
    data.FinalBakeTimeInMinutes !== null
  ) {
    contents.FinalBakeTimeInMinutes = data.FinalBakeTimeInMinutes;
  }
  if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
    contents.GrowthFactor = data.GrowthFactor;
  }
  if (data.GrowthType !== undefined && data.GrowthType !== null) {
    contents.GrowthType = data.GrowthType;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.ReplicateTo !== undefined && data.ReplicateTo !== null) {
    contents.ReplicateTo = data.ReplicateTo;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateDeploymentStrategyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentStrategyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateEnvironmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateEnvironmentCommandError(
      output,
      context
    );
  }
  const contents: CreateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Environment",
    ApplicationId: undefined,
    Description: undefined,
    Id: undefined,
    Monitors: undefined,
    Name: undefined,
    State: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = data.ApplicationId;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.Monitors !== undefined && data.Monitors !== null) {
    contents.Monitors = deserializeAws_restJson1_1MonitorList(
      data.Monitors,
      context
    );
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateEnvironmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteApplicationCommandError(
      output,
      context
    );
  }
  const contents: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteConfigurationProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationProfileCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteConfigurationProfileCommandError(
      output,
      context
    );
  }
  const contents: DeleteConfigurationProfileCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteConfigurationProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationProfileCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.services.blue#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteDeploymentStrategyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentStrategyCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteDeploymentStrategyCommandError(
      output,
      context
    );
  }
  const contents: DeleteDeploymentStrategyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteDeploymentStrategyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentStrategyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteEnvironmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteEnvironmentCommandError(
      output,
      context
    );
  }
  const contents: DeleteEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteEnvironmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.services.blue#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetApplicationCommandError(
      output,
      context
    );
  }
  const contents: GetApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Application",
    Description: undefined,
    Id: undefined,
    Name: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetConfigurationCommandError(
      output,
      context
    );
  }
  const contents: GetConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Configuration",
    ConfigurationVersion: undefined,
    Content: undefined,
    ContentType: undefined
  };
  if (output.headers["configuration-version"] !== undefined) {
    contents.ConfigurationVersion = output.headers["configuration-version"];
  }
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  const data: any = await collectBody(output.body, context);
  contents.Content = data;
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetConfigurationProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationProfileCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetConfigurationProfileCommandError(
      output,
      context
    );
  }
  const contents: GetConfigurationProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfigurationProfile",
    ApplicationId: undefined,
    Description: undefined,
    Id: undefined,
    LocationUri: undefined,
    Name: undefined,
    RetrievalRoleArn: undefined,
    Validators: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = data.ApplicationId;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.LocationUri !== undefined && data.LocationUri !== null) {
    contents.LocationUri = data.LocationUri;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.RetrievalRoleArn !== undefined && data.RetrievalRoleArn !== null) {
    contents.RetrievalRoleArn = data.RetrievalRoleArn;
  }
  if (data.Validators !== undefined && data.Validators !== null) {
    contents.Validators = deserializeAws_restJson1_1ValidatorList(
      data.Validators,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetConfigurationProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationProfileCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetDeploymentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDeploymentCommandError(output, context);
  }
  const contents: GetDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Deployment",
    ApplicationId: undefined,
    CompletedAt: undefined,
    ConfigurationLocationUri: undefined,
    ConfigurationName: undefined,
    ConfigurationProfileId: undefined,
    ConfigurationVersion: undefined,
    DeploymentDurationInMinutes: undefined,
    DeploymentNumber: undefined,
    DeploymentStrategyId: undefined,
    Description: undefined,
    EnvironmentId: undefined,
    FinalBakeTimeInMinutes: undefined,
    GrowthFactor: undefined,
    GrowthType: undefined,
    PercentageComplete: undefined,
    StartedAt: undefined,
    State: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = data.ApplicationId;
  }
  if (data.CompletedAt !== undefined && data.CompletedAt !== null) {
    contents.CompletedAt = new Date(data.CompletedAt);
  }
  if (
    data.ConfigurationLocationUri !== undefined &&
    data.ConfigurationLocationUri !== null
  ) {
    contents.ConfigurationLocationUri = data.ConfigurationLocationUri;
  }
  if (data.ConfigurationName !== undefined && data.ConfigurationName !== null) {
    contents.ConfigurationName = data.ConfigurationName;
  }
  if (
    data.ConfigurationProfileId !== undefined &&
    data.ConfigurationProfileId !== null
  ) {
    contents.ConfigurationProfileId = data.ConfigurationProfileId;
  }
  if (
    data.ConfigurationVersion !== undefined &&
    data.ConfigurationVersion !== null
  ) {
    contents.ConfigurationVersion = data.ConfigurationVersion;
  }
  if (
    data.DeploymentDurationInMinutes !== undefined &&
    data.DeploymentDurationInMinutes !== null
  ) {
    contents.DeploymentDurationInMinutes = data.DeploymentDurationInMinutes;
  }
  if (data.DeploymentNumber !== undefined && data.DeploymentNumber !== null) {
    contents.DeploymentNumber = data.DeploymentNumber;
  }
  if (
    data.DeploymentStrategyId !== undefined &&
    data.DeploymentStrategyId !== null
  ) {
    contents.DeploymentStrategyId = data.DeploymentStrategyId;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.EnvironmentId !== undefined && data.EnvironmentId !== null) {
    contents.EnvironmentId = data.EnvironmentId;
  }
  if (
    data.FinalBakeTimeInMinutes !== undefined &&
    data.FinalBakeTimeInMinutes !== null
  ) {
    contents.FinalBakeTimeInMinutes = data.FinalBakeTimeInMinutes;
  }
  if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
    contents.GrowthFactor = data.GrowthFactor;
  }
  if (data.GrowthType !== undefined && data.GrowthType !== null) {
    contents.GrowthType = data.GrowthType;
  }
  if (
    data.PercentageComplete !== undefined &&
    data.PercentageComplete !== null
  ) {
    contents.PercentageComplete = data.PercentageComplete;
  }
  if (data.StartedAt !== undefined && data.StartedAt !== null) {
    contents.StartedAt = new Date(data.StartedAt);
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDeploymentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetDeploymentStrategyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentStrategyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDeploymentStrategyCommandError(
      output,
      context
    );
  }
  const contents: GetDeploymentStrategyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeploymentStrategy",
    DeploymentDurationInMinutes: undefined,
    Description: undefined,
    FinalBakeTimeInMinutes: undefined,
    GrowthFactor: undefined,
    GrowthType: undefined,
    Id: undefined,
    Name: undefined,
    ReplicateTo: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.DeploymentDurationInMinutes !== undefined &&
    data.DeploymentDurationInMinutes !== null
  ) {
    contents.DeploymentDurationInMinutes = data.DeploymentDurationInMinutes;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (
    data.FinalBakeTimeInMinutes !== undefined &&
    data.FinalBakeTimeInMinutes !== null
  ) {
    contents.FinalBakeTimeInMinutes = data.FinalBakeTimeInMinutes;
  }
  if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
    contents.GrowthFactor = data.GrowthFactor;
  }
  if (data.GrowthType !== undefined && data.GrowthType !== null) {
    contents.GrowthType = data.GrowthType;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.ReplicateTo !== undefined && data.ReplicateTo !== null) {
    contents.ReplicateTo = data.ReplicateTo;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDeploymentStrategyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentStrategyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetEnvironmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetEnvironmentCommandError(
      output,
      context
    );
  }
  const contents: GetEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Environment",
    ApplicationId: undefined,
    Description: undefined,
    Id: undefined,
    Monitors: undefined,
    Name: undefined,
    State: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = data.ApplicationId;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.Monitors !== undefined && data.Monitors !== null) {
    contents.Monitors = deserializeAws_restJson1_1MonitorList(
      data.Monitors,
      context
    );
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetEnvironmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListApplicationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListApplicationsCommandError(
      output,
      context
    );
  }
  const contents: ListApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Applications",
    Items: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1_1ApplicationList(
      data.Items,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListApplicationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListConfigurationProfilesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationProfilesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListConfigurationProfilesCommandError(
      output,
      context
    );
  }
  const contents: ListConfigurationProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfigurationProfiles",
    Items: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1_1ConfigurationProfileSummaryList(
      data.Items,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListConfigurationProfilesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationProfilesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListDeploymentStrategiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentStrategiesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDeploymentStrategiesCommandError(
      output,
      context
    );
  }
  const contents: ListDeploymentStrategiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeploymentStrategies",
    Items: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1_1DeploymentStrategyList(
      data.Items,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDeploymentStrategiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentStrategiesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListDeploymentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDeploymentsCommandError(
      output,
      context
    );
  }
  const contents: ListDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Deployments",
    Items: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1_1DeploymentList(
      data.Items,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDeploymentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListEnvironmentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListEnvironmentsCommandError(
      output,
      context
    );
  }
  const contents: ListEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Environments",
    Items: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1_1EnvironmentList(
      data.Items,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListEnvironmentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
    __type: "ResourceTags",
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1StartDeploymentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeploymentCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartDeploymentCommandError(
      output,
      context
    );
  }
  const contents: StartDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Deployment",
    ApplicationId: undefined,
    CompletedAt: undefined,
    ConfigurationLocationUri: undefined,
    ConfigurationName: undefined,
    ConfigurationProfileId: undefined,
    ConfigurationVersion: undefined,
    DeploymentDurationInMinutes: undefined,
    DeploymentNumber: undefined,
    DeploymentStrategyId: undefined,
    Description: undefined,
    EnvironmentId: undefined,
    FinalBakeTimeInMinutes: undefined,
    GrowthFactor: undefined,
    GrowthType: undefined,
    PercentageComplete: undefined,
    StartedAt: undefined,
    State: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = data.ApplicationId;
  }
  if (data.CompletedAt !== undefined && data.CompletedAt !== null) {
    contents.CompletedAt = new Date(data.CompletedAt);
  }
  if (
    data.ConfigurationLocationUri !== undefined &&
    data.ConfigurationLocationUri !== null
  ) {
    contents.ConfigurationLocationUri = data.ConfigurationLocationUri;
  }
  if (data.ConfigurationName !== undefined && data.ConfigurationName !== null) {
    contents.ConfigurationName = data.ConfigurationName;
  }
  if (
    data.ConfigurationProfileId !== undefined &&
    data.ConfigurationProfileId !== null
  ) {
    contents.ConfigurationProfileId = data.ConfigurationProfileId;
  }
  if (
    data.ConfigurationVersion !== undefined &&
    data.ConfigurationVersion !== null
  ) {
    contents.ConfigurationVersion = data.ConfigurationVersion;
  }
  if (
    data.DeploymentDurationInMinutes !== undefined &&
    data.DeploymentDurationInMinutes !== null
  ) {
    contents.DeploymentDurationInMinutes = data.DeploymentDurationInMinutes;
  }
  if (data.DeploymentNumber !== undefined && data.DeploymentNumber !== null) {
    contents.DeploymentNumber = data.DeploymentNumber;
  }
  if (
    data.DeploymentStrategyId !== undefined &&
    data.DeploymentStrategyId !== null
  ) {
    contents.DeploymentStrategyId = data.DeploymentStrategyId;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.EnvironmentId !== undefined && data.EnvironmentId !== null) {
    contents.EnvironmentId = data.EnvironmentId;
  }
  if (
    data.FinalBakeTimeInMinutes !== undefined &&
    data.FinalBakeTimeInMinutes !== null
  ) {
    contents.FinalBakeTimeInMinutes = data.FinalBakeTimeInMinutes;
  }
  if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
    contents.GrowthFactor = data.GrowthFactor;
  }
  if (data.GrowthType !== undefined && data.GrowthType !== null) {
    contents.GrowthType = data.GrowthType;
  }
  if (
    data.PercentageComplete !== undefined &&
    data.PercentageComplete !== null
  ) {
    contents.PercentageComplete = data.PercentageComplete;
  }
  if (data.StartedAt !== undefined && data.StartedAt !== null) {
    contents.StartedAt = new Date(data.StartedAt);
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartDeploymentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeploymentCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.services.blue#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1StopDeploymentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeploymentCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StopDeploymentCommandError(
      output,
      context
    );
  }
  const contents: StopDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Deployment",
    ApplicationId: undefined,
    CompletedAt: undefined,
    ConfigurationLocationUri: undefined,
    ConfigurationName: undefined,
    ConfigurationProfileId: undefined,
    ConfigurationVersion: undefined,
    DeploymentDurationInMinutes: undefined,
    DeploymentNumber: undefined,
    DeploymentStrategyId: undefined,
    Description: undefined,
    EnvironmentId: undefined,
    FinalBakeTimeInMinutes: undefined,
    GrowthFactor: undefined,
    GrowthType: undefined,
    PercentageComplete: undefined,
    StartedAt: undefined,
    State: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = data.ApplicationId;
  }
  if (data.CompletedAt !== undefined && data.CompletedAt !== null) {
    contents.CompletedAt = new Date(data.CompletedAt);
  }
  if (
    data.ConfigurationLocationUri !== undefined &&
    data.ConfigurationLocationUri !== null
  ) {
    contents.ConfigurationLocationUri = data.ConfigurationLocationUri;
  }
  if (data.ConfigurationName !== undefined && data.ConfigurationName !== null) {
    contents.ConfigurationName = data.ConfigurationName;
  }
  if (
    data.ConfigurationProfileId !== undefined &&
    data.ConfigurationProfileId !== null
  ) {
    contents.ConfigurationProfileId = data.ConfigurationProfileId;
  }
  if (
    data.ConfigurationVersion !== undefined &&
    data.ConfigurationVersion !== null
  ) {
    contents.ConfigurationVersion = data.ConfigurationVersion;
  }
  if (
    data.DeploymentDurationInMinutes !== undefined &&
    data.DeploymentDurationInMinutes !== null
  ) {
    contents.DeploymentDurationInMinutes = data.DeploymentDurationInMinutes;
  }
  if (data.DeploymentNumber !== undefined && data.DeploymentNumber !== null) {
    contents.DeploymentNumber = data.DeploymentNumber;
  }
  if (
    data.DeploymentStrategyId !== undefined &&
    data.DeploymentStrategyId !== null
  ) {
    contents.DeploymentStrategyId = data.DeploymentStrategyId;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.EnvironmentId !== undefined && data.EnvironmentId !== null) {
    contents.EnvironmentId = data.EnvironmentId;
  }
  if (
    data.FinalBakeTimeInMinutes !== undefined &&
    data.FinalBakeTimeInMinutes !== null
  ) {
    contents.FinalBakeTimeInMinutes = data.FinalBakeTimeInMinutes;
  }
  if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
    contents.GrowthFactor = data.GrowthFactor;
  }
  if (data.GrowthType !== undefined && data.GrowthType !== null) {
    contents.GrowthType = data.GrowthType;
  }
  if (
    data.PercentageComplete !== undefined &&
    data.PercentageComplete !== null
  ) {
    contents.PercentageComplete = data.PercentageComplete;
  }
  if (data.StartedAt !== undefined && data.StartedAt !== null) {
    contents.StartedAt = new Date(data.StartedAt);
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StopDeploymentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeploymentCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UpdateApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateApplicationCommandError(
      output,
      context
    );
  }
  const contents: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Application",
    Description: undefined,
    Id: undefined,
    Name: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UpdateConfigurationProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationProfileCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateConfigurationProfileCommandError(
      output,
      context
    );
  }
  const contents: UpdateConfigurationProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfigurationProfile",
    ApplicationId: undefined,
    Description: undefined,
    Id: undefined,
    LocationUri: undefined,
    Name: undefined,
    RetrievalRoleArn: undefined,
    Validators: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = data.ApplicationId;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.LocationUri !== undefined && data.LocationUri !== null) {
    contents.LocationUri = data.LocationUri;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.RetrievalRoleArn !== undefined && data.RetrievalRoleArn !== null) {
    contents.RetrievalRoleArn = data.RetrievalRoleArn;
  }
  if (data.Validators !== undefined && data.Validators !== null) {
    contents.Validators = deserializeAws_restJson1_1ValidatorList(
      data.Validators,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateConfigurationProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationProfileCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UpdateDeploymentStrategyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentStrategyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateDeploymentStrategyCommandError(
      output,
      context
    );
  }
  const contents: UpdateDeploymentStrategyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeploymentStrategy",
    DeploymentDurationInMinutes: undefined,
    Description: undefined,
    FinalBakeTimeInMinutes: undefined,
    GrowthFactor: undefined,
    GrowthType: undefined,
    Id: undefined,
    Name: undefined,
    ReplicateTo: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.DeploymentDurationInMinutes !== undefined &&
    data.DeploymentDurationInMinutes !== null
  ) {
    contents.DeploymentDurationInMinutes = data.DeploymentDurationInMinutes;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (
    data.FinalBakeTimeInMinutes !== undefined &&
    data.FinalBakeTimeInMinutes !== null
  ) {
    contents.FinalBakeTimeInMinutes = data.FinalBakeTimeInMinutes;
  }
  if (data.GrowthFactor !== undefined && data.GrowthFactor !== null) {
    contents.GrowthFactor = data.GrowthFactor;
  }
  if (data.GrowthType !== undefined && data.GrowthType !== null) {
    contents.GrowthType = data.GrowthType;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.ReplicateTo !== undefined && data.ReplicateTo !== null) {
    contents.ReplicateTo = data.ReplicateTo;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateDeploymentStrategyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentStrategyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UpdateEnvironmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateEnvironmentCommandError(
      output,
      context
    );
  }
  const contents: UpdateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Environment",
    ApplicationId: undefined,
    Description: undefined,
    Id: undefined,
    Monitors: undefined,
    Name: undefined,
    State: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ApplicationId !== undefined && data.ApplicationId !== null) {
    contents.ApplicationId = data.ApplicationId;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  if (data.Monitors !== undefined && data.Monitors !== null) {
    contents.Monitors = deserializeAws_restJson1_1MonitorList(
      data.Monitors,
      context
    );
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateEnvironmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ValidateConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateConfigurationCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ValidateConfigurationCommandError(
      output,
      context
    );
  }
  const contents: ValidateConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ValidateConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.services.blue#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.services.blue#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.blue#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
    ResourceName: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceName !== undefined && data.ResourceName !== null) {
    contents.ResourceName = data.ResourceName;
  }
  return contents;
};

const serializeAws_restJson1_1Monitor = (
  input: Monitor,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AlarmArn !== undefined) {
    bodyParams["AlarmArn"] = input.AlarmArn;
  }
  if (input.AlarmRoleArn !== undefined) {
    bodyParams["AlarmRoleArn"] = input.AlarmRoleArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MonitorList = (
  input: Array<Monitor>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Monitor(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1Validator = (
  input: Validator,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Content !== undefined) {
    bodyParams["Content"] = input.Content;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ValidatorList = (
  input: Array<Validator>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Validator(entry, context));
  }
  return contents;
};

const deserializeAws_restJson1_1Application = (
  output: any,
  context: __SerdeContext
): Application => {
  let contents: any = {
    __type: "Application",
    Description: undefined,
    Id: undefined,
    Name: undefined
  };
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_restJson1_1ApplicationList = (
  output: any,
  context: __SerdeContext
): Array<Application> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Application(entry, context)
  );
};

const deserializeAws_restJson1_1ConfigurationProfileSummary = (
  output: any,
  context: __SerdeContext
): ConfigurationProfileSummary => {
  let contents: any = {
    __type: "ConfigurationProfileSummary",
    ApplicationId: undefined,
    Id: undefined,
    LocationUri: undefined,
    Name: undefined,
    ValidatorTypes: undefined
  };
  if (output.ApplicationId !== undefined && output.ApplicationId !== null) {
    contents.ApplicationId = output.ApplicationId;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.LocationUri !== undefined && output.LocationUri !== null) {
    contents.LocationUri = output.LocationUri;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.ValidatorTypes !== undefined && output.ValidatorTypes !== null) {
    contents.ValidatorTypes = deserializeAws_restJson1_1ValidatorTypeList(
      output.ValidatorTypes,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ConfigurationProfileSummaryList = (
  output: any,
  context: __SerdeContext
): Array<ConfigurationProfileSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ConfigurationProfileSummary(entry, context)
  );
};

const deserializeAws_restJson1_1DeploymentList = (
  output: any,
  context: __SerdeContext
): Array<DeploymentSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DeploymentSummary(entry, context)
  );
};

const deserializeAws_restJson1_1DeploymentStrategy = (
  output: any,
  context: __SerdeContext
): DeploymentStrategy => {
  let contents: any = {
    __type: "DeploymentStrategy",
    DeploymentDurationInMinutes: undefined,
    Description: undefined,
    FinalBakeTimeInMinutes: undefined,
    GrowthFactor: undefined,
    GrowthType: undefined,
    Id: undefined,
    Name: undefined,
    ReplicateTo: undefined
  };
  if (
    output.DeploymentDurationInMinutes !== undefined &&
    output.DeploymentDurationInMinutes !== null
  ) {
    contents.DeploymentDurationInMinutes = output.DeploymentDurationInMinutes;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (
    output.FinalBakeTimeInMinutes !== undefined &&
    output.FinalBakeTimeInMinutes !== null
  ) {
    contents.FinalBakeTimeInMinutes = output.FinalBakeTimeInMinutes;
  }
  if (output.GrowthFactor !== undefined && output.GrowthFactor !== null) {
    contents.GrowthFactor = output.GrowthFactor;
  }
  if (output.GrowthType !== undefined && output.GrowthType !== null) {
    contents.GrowthType = output.GrowthType;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.ReplicateTo !== undefined && output.ReplicateTo !== null) {
    contents.ReplicateTo = output.ReplicateTo;
  }
  return contents;
};

const deserializeAws_restJson1_1DeploymentStrategyList = (
  output: any,
  context: __SerdeContext
): Array<DeploymentStrategy> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DeploymentStrategy(entry, context)
  );
};

const deserializeAws_restJson1_1DeploymentSummary = (
  output: any,
  context: __SerdeContext
): DeploymentSummary => {
  let contents: any = {
    __type: "DeploymentSummary",
    CompletedAt: undefined,
    ConfigurationName: undefined,
    ConfigurationVersion: undefined,
    DeploymentDurationInMinutes: undefined,
    DeploymentNumber: undefined,
    FinalBakeTimeInMinutes: undefined,
    GrowthFactor: undefined,
    GrowthType: undefined,
    PercentageComplete: undefined,
    StartedAt: undefined,
    State: undefined
  };
  if (output.CompletedAt !== undefined && output.CompletedAt !== null) {
    contents.CompletedAt = new Date(output.CompletedAt);
  }
  if (
    output.ConfigurationName !== undefined &&
    output.ConfigurationName !== null
  ) {
    contents.ConfigurationName = output.ConfigurationName;
  }
  if (
    output.ConfigurationVersion !== undefined &&
    output.ConfigurationVersion !== null
  ) {
    contents.ConfigurationVersion = output.ConfigurationVersion;
  }
  if (
    output.DeploymentDurationInMinutes !== undefined &&
    output.DeploymentDurationInMinutes !== null
  ) {
    contents.DeploymentDurationInMinutes = output.DeploymentDurationInMinutes;
  }
  if (
    output.DeploymentNumber !== undefined &&
    output.DeploymentNumber !== null
  ) {
    contents.DeploymentNumber = output.DeploymentNumber;
  }
  if (
    output.FinalBakeTimeInMinutes !== undefined &&
    output.FinalBakeTimeInMinutes !== null
  ) {
    contents.FinalBakeTimeInMinutes = output.FinalBakeTimeInMinutes;
  }
  if (output.GrowthFactor !== undefined && output.GrowthFactor !== null) {
    contents.GrowthFactor = output.GrowthFactor;
  }
  if (output.GrowthType !== undefined && output.GrowthType !== null) {
    contents.GrowthType = output.GrowthType;
  }
  if (
    output.PercentageComplete !== undefined &&
    output.PercentageComplete !== null
  ) {
    contents.PercentageComplete = output.PercentageComplete;
  }
  if (output.StartedAt !== undefined && output.StartedAt !== null) {
    contents.StartedAt = new Date(output.StartedAt);
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_restJson1_1Environment = (
  output: any,
  context: __SerdeContext
): Environment => {
  let contents: any = {
    __type: "Environment",
    ApplicationId: undefined,
    Description: undefined,
    Id: undefined,
    Monitors: undefined,
    Name: undefined,
    State: undefined
  };
  if (output.ApplicationId !== undefined && output.ApplicationId !== null) {
    contents.ApplicationId = output.ApplicationId;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Monitors !== undefined && output.Monitors !== null) {
    contents.Monitors = deserializeAws_restJson1_1MonitorList(
      output.Monitors,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_restJson1_1EnvironmentList = (
  output: any,
  context: __SerdeContext
): Array<Environment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Environment(entry, context)
  );
};

const deserializeAws_restJson1_1Monitor = (
  output: any,
  context: __SerdeContext
): Monitor => {
  let contents: any = {
    __type: "Monitor",
    AlarmArn: undefined,
    AlarmRoleArn: undefined
  };
  if (output.AlarmArn !== undefined && output.AlarmArn !== null) {
    contents.AlarmArn = output.AlarmArn;
  }
  if (output.AlarmRoleArn !== undefined && output.AlarmRoleArn !== null) {
    contents.AlarmRoleArn = output.AlarmRoleArn;
  }
  return contents;
};

const deserializeAws_restJson1_1MonitorList = (
  output: any,
  context: __SerdeContext
): Array<Monitor> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Monitor(entry, context)
  );
};

const deserializeAws_restJson1_1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1Validator = (
  output: any,
  context: __SerdeContext
): Validator => {
  let contents: any = {
    __type: "Validator",
    Content: undefined,
    Type: undefined
  };
  if (output.Content !== undefined && output.Content !== null) {
    contents.Content = output.Content;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidatorList = (
  output: any,
  context: __SerdeContext
): Array<Validator> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Validator(entry, context)
  );
};

const deserializeAws_restJson1_1ValidatorTypeList = (
  output: any,
  context: __SerdeContext
): Array<ValidatorType | string> => {
  return (output || []).map((entry: any) => entry);
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
