import {
  BulkPublishCommandInput,
  BulkPublishCommandOutput
} from "../commands/BulkPublishCommand";
import {
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput
} from "../commands/DeleteDatasetCommand";
import {
  DescribeDatasetCommandInput,
  DescribeDatasetCommandOutput
} from "../commands/DescribeDatasetCommand";
import {
  DescribeIdentityPoolUsageCommandInput,
  DescribeIdentityPoolUsageCommandOutput
} from "../commands/DescribeIdentityPoolUsageCommand";
import {
  DescribeIdentityUsageCommandInput,
  DescribeIdentityUsageCommandOutput
} from "../commands/DescribeIdentityUsageCommand";
import {
  GetBulkPublishDetailsCommandInput,
  GetBulkPublishDetailsCommandOutput
} from "../commands/GetBulkPublishDetailsCommand";
import {
  GetCognitoEventsCommandInput,
  GetCognitoEventsCommandOutput
} from "../commands/GetCognitoEventsCommand";
import {
  GetIdentityPoolConfigurationCommandInput,
  GetIdentityPoolConfigurationCommandOutput
} from "../commands/GetIdentityPoolConfigurationCommand";
import {
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput
} from "../commands/ListDatasetsCommand";
import {
  ListIdentityPoolUsageCommandInput,
  ListIdentityPoolUsageCommandOutput
} from "../commands/ListIdentityPoolUsageCommand";
import {
  ListRecordsCommandInput,
  ListRecordsCommandOutput
} from "../commands/ListRecordsCommand";
import {
  RegisterDeviceCommandInput,
  RegisterDeviceCommandOutput
} from "../commands/RegisterDeviceCommand";
import {
  SetCognitoEventsCommandInput,
  SetCognitoEventsCommandOutput
} from "../commands/SetCognitoEventsCommand";
import {
  SetIdentityPoolConfigurationCommandInput,
  SetIdentityPoolConfigurationCommandOutput
} from "../commands/SetIdentityPoolConfigurationCommand";
import {
  SubscribeToDatasetCommandInput,
  SubscribeToDatasetCommandOutput
} from "../commands/SubscribeToDatasetCommand";
import {
  UnsubscribeFromDatasetCommandInput,
  UnsubscribeFromDatasetCommandOutput
} from "../commands/UnsubscribeFromDatasetCommand";
import {
  UpdateRecordsCommandInput,
  UpdateRecordsCommandOutput
} from "../commands/UpdateRecordsCommand";
import {
  AlreadyStreamedException,
  CognitoStreams,
  ConcurrentModificationException,
  Dataset,
  DuplicateRequestException,
  IdentityPoolUsage,
  IdentityUsage,
  InternalErrorException,
  InvalidConfigurationException,
  InvalidLambdaFunctionOutputException,
  InvalidParameterException,
  LambdaSocketTimeoutException,
  LambdaThrottledException,
  LimitExceededException,
  NotAuthorizedException,
  PushSync,
  RecordPatch,
  ResourceConflictException,
  ResourceNotFoundException,
  TooManyRequestsException,
  _Record
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

export async function serializeAws_restJson1_1BulkPublishCommand(
  input: BulkPublishCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/identitypools/{IdentityPoolId}/bulkpublish";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IdentityPoolId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityPoolId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteDatasetCommand(
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}";
  if (input.DatasetName !== undefined) {
    const labelValue: string = input.DatasetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DatasetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{DatasetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DatasetName.");
  }
  if (input.IdentityId !== undefined) {
    const labelValue: string = input.IdentityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityId.");
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityId.");
  }
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IdentityPoolId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityPoolId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeDatasetCommand(
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}";
  if (input.DatasetName !== undefined) {
    const labelValue: string = input.DatasetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DatasetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{DatasetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DatasetName.");
  }
  if (input.IdentityId !== undefined) {
    const labelValue: string = input.IdentityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityId.");
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityId.");
  }
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IdentityPoolId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityPoolId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeIdentityPoolUsageCommand(
  input: DescribeIdentityPoolUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/identitypools/{IdentityPoolId}";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IdentityPoolId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityPoolId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeIdentityUsageCommand(
  input: DescribeIdentityUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/identitypools/{IdentityPoolId}/identities/{IdentityId}";
  if (input.IdentityId !== undefined) {
    const labelValue: string = input.IdentityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityId.");
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityId.");
  }
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IdentityPoolId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityPoolId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetBulkPublishDetailsCommand(
  input: GetBulkPublishDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/identitypools/{IdentityPoolId}/getBulkPublishDetails";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IdentityPoolId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityPoolId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetCognitoEventsCommand(
  input: GetCognitoEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/identitypools/{IdentityPoolId}/events";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IdentityPoolId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityPoolId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetIdentityPoolConfigurationCommand(
  input: GetIdentityPoolConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/identitypools/{IdentityPoolId}/configuration";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IdentityPoolId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityPoolId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListDatasetsCommand(
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets";
  if (input.IdentityId !== undefined) {
    const labelValue: string = input.IdentityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityId.");
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityId.");
  }
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IdentityPoolId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityPoolId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListIdentityPoolUsageCommand(
  input: ListIdentityPoolUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/identitypools";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListRecordsCommand(
  input: ListRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records";
  if (input.DatasetName !== undefined) {
    const labelValue: string = input.DatasetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DatasetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{DatasetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DatasetName.");
  }
  if (input.IdentityId !== undefined) {
    const labelValue: string = input.IdentityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityId.");
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityId.");
  }
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IdentityPoolId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityPoolId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  const query: any = {};
  if (input.LastSyncCount !== undefined) {
    query["lastSyncCount"] = input.LastSyncCount.toString();
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.SyncSessionToken !== undefined) {
    query["syncSessionToken"] = input.SyncSessionToken;
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

export async function serializeAws_restJson1_1RegisterDeviceCommand(
  input: RegisterDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/identitypools/{IdentityPoolId}/identity/{IdentityId}/device";
  if (input.IdentityId !== undefined) {
    const labelValue: string = input.IdentityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityId.");
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityId.");
  }
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IdentityPoolId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityPoolId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Platform !== undefined) {
    bodyParams["Platform"] = input.Platform;
  }
  if (input.Token !== undefined) {
    bodyParams["Token"] = input.Token;
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

export async function serializeAws_restJson1_1SetCognitoEventsCommand(
  input: SetCognitoEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/identitypools/{IdentityPoolId}/events";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IdentityPoolId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityPoolId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Events !== undefined) {
    bodyParams["Events"] = serializeAws_restJson1_1Events(
      input.Events,
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

export async function serializeAws_restJson1_1SetIdentityPoolConfigurationCommand(
  input: SetIdentityPoolConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/identitypools/{IdentityPoolId}/configuration";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IdentityPoolId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityPoolId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.CognitoStreams !== undefined) {
    bodyParams["CognitoStreams"] = serializeAws_restJson1_1CognitoStreams(
      input.CognitoStreams,
      context
    );
  }
  if (input.PushSync !== undefined) {
    bodyParams["PushSync"] = serializeAws_restJson1_1PushSync(
      input.PushSync,
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

export async function serializeAws_restJson1_1SubscribeToDatasetCommand(
  input: SubscribeToDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}";
  if (input.DatasetName !== undefined) {
    const labelValue: string = input.DatasetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DatasetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{DatasetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DatasetName.");
  }
  if (input.DeviceId !== undefined) {
    const labelValue: string = input.DeviceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeviceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DeviceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DeviceId.");
  }
  if (input.IdentityId !== undefined) {
    const labelValue: string = input.IdentityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityId.");
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityId.");
  }
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IdentityPoolId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityPoolId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1UnsubscribeFromDatasetCommand(
  input: UnsubscribeFromDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}";
  if (input.DatasetName !== undefined) {
    const labelValue: string = input.DatasetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DatasetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{DatasetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DatasetName.");
  }
  if (input.DeviceId !== undefined) {
    const labelValue: string = input.DeviceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeviceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DeviceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DeviceId.");
  }
  if (input.IdentityId !== undefined) {
    const labelValue: string = input.IdentityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityId.");
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityId.");
  }
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IdentityPoolId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityPoolId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1UpdateRecordsCommand(
  input: UpdateRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.ClientContext !== undefined) {
    headers["x-amz-Client-Context"] = input.ClientContext;
  }
  let resolvedPath =
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}";
  if (input.DatasetName !== undefined) {
    const labelValue: string = input.DatasetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DatasetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{DatasetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DatasetName.");
  }
  if (input.IdentityId !== undefined) {
    const labelValue: string = input.IdentityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityId.");
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityId.");
  }
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IdentityPoolId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{IdentityPoolId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.DeviceId !== undefined) {
    bodyParams["DeviceId"] = input.DeviceId;
  }
  if (input.RecordPatches !== undefined) {
    bodyParams["RecordPatches"] = serializeAws_restJson1_1RecordPatchList(
      input.RecordPatches,
      context
    );
  }
  if (input.SyncSessionToken !== undefined) {
    bodyParams["SyncSessionToken"] = input.SyncSessionToken;
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

export async function deserializeAws_restJson1_1BulkPublishCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BulkPublishCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1BulkPublishCommandError(output, context);
  }
  const contents: BulkPublishCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BulkPublishResponse",
    IdentityPoolId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.IdentityPoolId !== undefined && data.IdentityPoolId !== null) {
    contents.IdentityPoolId = data.IdentityPoolId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1BulkPublishCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BulkPublishCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AlreadyStreamedException":
    case "com.amazonaws.cognito.sync.model#AlreadyStreamedException":
      response = {
        ...(await deserializeAws_restJson1_1AlreadyStreamedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateRequestException":
    case "com.amazonaws.cognito.sync.model#DuplicateRequestException":
      response = {
        ...(await deserializeAws_restJson1_1DuplicateRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.cognito.sync.model#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.sync.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.sync.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.sync.model#ResourceNotFoundException":
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

export async function deserializeAws_restJson1_1DeleteDatasetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteDatasetCommandError(output, context);
  }
  const contents: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDatasetResponse",
    Dataset: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Dataset !== undefined && data.Dataset !== null) {
    contents.Dataset = deserializeAws_restJson1_1Dataset(data.Dataset, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteDatasetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognito.sync.model#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.sync.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.sync.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognito.sync.model#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.sync.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.sync.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeDatasetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeDatasetCommandError(
      output,
      context
    );
  }
  const contents: DescribeDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDatasetResponse",
    Dataset: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Dataset !== undefined && data.Dataset !== null) {
    contents.Dataset = deserializeAws_restJson1_1Dataset(data.Dataset, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeDatasetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognito.sync.model#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.sync.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.sync.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.sync.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.sync.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeIdentityPoolUsageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityPoolUsageCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeIdentityPoolUsageCommandError(
      output,
      context
    );
  }
  const contents: DescribeIdentityPoolUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeIdentityPoolUsageResponse",
    IdentityPoolUsage: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.IdentityPoolUsage !== undefined && data.IdentityPoolUsage !== null) {
    contents.IdentityPoolUsage = deserializeAws_restJson1_1IdentityPoolUsage(
      data.IdentityPoolUsage,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeIdentityPoolUsageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityPoolUsageCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognito.sync.model#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.sync.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.sync.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.sync.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.sync.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeIdentityUsageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityUsageCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeIdentityUsageCommandError(
      output,
      context
    );
  }
  const contents: DescribeIdentityUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeIdentityUsageResponse",
    IdentityUsage: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.IdentityUsage !== undefined && data.IdentityUsage !== null) {
    contents.IdentityUsage = deserializeAws_restJson1_1IdentityUsage(
      data.IdentityUsage,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeIdentityUsageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityUsageCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognito.sync.model#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.sync.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.sync.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.sync.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.sync.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1GetBulkPublishDetailsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBulkPublishDetailsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBulkPublishDetailsCommandError(
      output,
      context
    );
  }
  const contents: GetBulkPublishDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBulkPublishDetailsResponse",
    BulkPublishCompleteTime: undefined,
    BulkPublishStartTime: undefined,
    BulkPublishStatus: undefined,
    FailureMessage: undefined,
    IdentityPoolId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.BulkPublishCompleteTime !== undefined &&
    data.BulkPublishCompleteTime !== null
  ) {
    contents.BulkPublishCompleteTime = new Date(
      Math.round(data.BulkPublishCompleteTime * 1000)
    );
  }
  if (
    data.BulkPublishStartTime !== undefined &&
    data.BulkPublishStartTime !== null
  ) {
    contents.BulkPublishStartTime = new Date(
      Math.round(data.BulkPublishStartTime * 1000)
    );
  }
  if (data.BulkPublishStatus !== undefined && data.BulkPublishStatus !== null) {
    contents.BulkPublishStatus = data.BulkPublishStatus;
  }
  if (data.FailureMessage !== undefined && data.FailureMessage !== null) {
    contents.FailureMessage = data.FailureMessage;
  }
  if (data.IdentityPoolId !== undefined && data.IdentityPoolId !== null) {
    contents.IdentityPoolId = data.IdentityPoolId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetBulkPublishDetailsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBulkPublishDetailsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognito.sync.model#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.sync.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.sync.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.sync.model#ResourceNotFoundException":
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

export async function deserializeAws_restJson1_1GetCognitoEventsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCognitoEventsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetCognitoEventsCommandError(
      output,
      context
    );
  }
  const contents: GetCognitoEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCognitoEventsResponse",
    Events: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Events !== undefined && data.Events !== null) {
    contents.Events = deserializeAws_restJson1_1Events(data.Events, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetCognitoEventsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCognitoEventsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognito.sync.model#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.sync.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.sync.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.sync.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.sync.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1GetIdentityPoolConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityPoolConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetIdentityPoolConfigurationCommandError(
      output,
      context
    );
  }
  const contents: GetIdentityPoolConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetIdentityPoolConfigurationResponse",
    CognitoStreams: undefined,
    IdentityPoolId: undefined,
    PushSync: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CognitoStreams !== undefined && data.CognitoStreams !== null) {
    contents.CognitoStreams = deserializeAws_restJson1_1CognitoStreams(
      data.CognitoStreams,
      context
    );
  }
  if (data.IdentityPoolId !== undefined && data.IdentityPoolId !== null) {
    contents.IdentityPoolId = data.IdentityPoolId;
  }
  if (data.PushSync !== undefined && data.PushSync !== null) {
    contents.PushSync = deserializeAws_restJson1_1PushSync(
      data.PushSync,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetIdentityPoolConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityPoolConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognito.sync.model#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.sync.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.sync.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.sync.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.sync.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1ListDatasetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDatasetsCommandError(output, context);
  }
  const contents: ListDatasetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDatasetsResponse",
    Count: undefined,
    Datasets: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Count !== undefined && data.Count !== null) {
    contents.Count = data.Count;
  }
  if (data.Datasets !== undefined && data.Datasets !== null) {
    contents.Datasets = deserializeAws_restJson1_1DatasetList(
      data.Datasets,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDatasetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognito.sync.model#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.sync.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.sync.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.sync.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1ListIdentityPoolUsageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityPoolUsageCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListIdentityPoolUsageCommandError(
      output,
      context
    );
  }
  const contents: ListIdentityPoolUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListIdentityPoolUsageResponse",
    Count: undefined,
    IdentityPoolUsages: undefined,
    MaxResults: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Count !== undefined && data.Count !== null) {
    contents.Count = data.Count;
  }
  if (
    data.IdentityPoolUsages !== undefined &&
    data.IdentityPoolUsages !== null
  ) {
    contents.IdentityPoolUsages = deserializeAws_restJson1_1IdentityPoolUsageList(
      data.IdentityPoolUsages,
      context
    );
  }
  if (data.MaxResults !== undefined && data.MaxResults !== null) {
    contents.MaxResults = data.MaxResults;
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListIdentityPoolUsageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityPoolUsageCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognito.sync.model#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.sync.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.sync.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.sync.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1ListRecordsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecordsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListRecordsCommandError(output, context);
  }
  const contents: ListRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRecordsResponse",
    Count: undefined,
    DatasetDeletedAfterRequestedSyncCount: undefined,
    DatasetExists: undefined,
    DatasetSyncCount: undefined,
    LastModifiedBy: undefined,
    MergedDatasetNames: undefined,
    NextToken: undefined,
    Records: undefined,
    SyncSessionToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Count !== undefined && data.Count !== null) {
    contents.Count = data.Count;
  }
  if (
    data.DatasetDeletedAfterRequestedSyncCount !== undefined &&
    data.DatasetDeletedAfterRequestedSyncCount !== null
  ) {
    contents.DatasetDeletedAfterRequestedSyncCount =
      data.DatasetDeletedAfterRequestedSyncCount;
  }
  if (data.DatasetExists !== undefined && data.DatasetExists !== null) {
    contents.DatasetExists = data.DatasetExists;
  }
  if (data.DatasetSyncCount !== undefined && data.DatasetSyncCount !== null) {
    contents.DatasetSyncCount = data.DatasetSyncCount;
  }
  if (data.LastModifiedBy !== undefined && data.LastModifiedBy !== null) {
    contents.LastModifiedBy = data.LastModifiedBy;
  }
  if (
    data.MergedDatasetNames !== undefined &&
    data.MergedDatasetNames !== null
  ) {
    contents.MergedDatasetNames = deserializeAws_restJson1_1MergedDatasetNameList(
      data.MergedDatasetNames,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Records !== undefined && data.Records !== null) {
    contents.Records = deserializeAws_restJson1_1RecordList(
      data.Records,
      context
    );
  }
  if (data.SyncSessionToken !== undefined && data.SyncSessionToken !== null) {
    contents.SyncSessionToken = data.SyncSessionToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListRecordsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecordsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognito.sync.model#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.sync.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.sync.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.sync.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1RegisterDeviceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDeviceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RegisterDeviceCommandError(
      output,
      context
    );
  }
  const contents: RegisterDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterDeviceResponse",
    DeviceId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DeviceId !== undefined && data.DeviceId !== null) {
    contents.DeviceId = data.DeviceId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RegisterDeviceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDeviceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognito.sync.model#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationException":
    case "com.amazonaws.cognito.sync.model#InvalidConfigurationException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidConfigurationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.sync.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.sync.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.sync.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.sync.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1SetCognitoEventsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetCognitoEventsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SetCognitoEventsCommandError(
      output,
      context
    );
  }
  const contents: SetCognitoEventsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1SetCognitoEventsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetCognitoEventsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognito.sync.model#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.sync.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.sync.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.sync.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.sync.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1SetIdentityPoolConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityPoolConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SetIdentityPoolConfigurationCommandError(
      output,
      context
    );
  }
  const contents: SetIdentityPoolConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SetIdentityPoolConfigurationResponse",
    CognitoStreams: undefined,
    IdentityPoolId: undefined,
    PushSync: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CognitoStreams !== undefined && data.CognitoStreams !== null) {
    contents.CognitoStreams = deserializeAws_restJson1_1CognitoStreams(
      data.CognitoStreams,
      context
    );
  }
  if (data.IdentityPoolId !== undefined && data.IdentityPoolId !== null) {
    contents.IdentityPoolId = data.IdentityPoolId;
  }
  if (data.PushSync !== undefined && data.PushSync !== null) {
    contents.PushSync = deserializeAws_restJson1_1PushSync(
      data.PushSync,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1SetIdentityPoolConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityPoolConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cognito.sync.model#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.cognito.sync.model#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.sync.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.sync.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.sync.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.sync.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1SubscribeToDatasetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeToDatasetCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SubscribeToDatasetCommandError(
      output,
      context
    );
  }
  const contents: SubscribeToDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SubscribeToDatasetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1SubscribeToDatasetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeToDatasetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognito.sync.model#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationException":
    case "com.amazonaws.cognito.sync.model#InvalidConfigurationException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidConfigurationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.sync.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.sync.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.sync.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.sync.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1UnsubscribeFromDatasetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeFromDatasetCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UnsubscribeFromDatasetCommandError(
      output,
      context
    );
  }
  const contents: UnsubscribeFromDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UnsubscribeFromDatasetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UnsubscribeFromDatasetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeFromDatasetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognito.sync.model#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationException":
    case "com.amazonaws.cognito.sync.model#InvalidConfigurationException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidConfigurationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.sync.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.sync.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.sync.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.sync.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateRecordsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecordsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateRecordsCommandError(output, context);
  }
  const contents: UpdateRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRecordsResponse",
    Records: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Records !== undefined && data.Records !== null) {
    contents.Records = deserializeAws_restJson1_1RecordList(
      data.Records,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateRecordsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecordsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognito.sync.model#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidLambdaFunctionOutputException":
    case "com.amazonaws.cognito.sync.model#InvalidLambdaFunctionOutputException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidLambdaFunctionOutputExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.sync.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LambdaSocketTimeoutException":
    case "com.amazonaws.cognito.sync.model#LambdaSocketTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1LambdaSocketTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LambdaThrottledException":
    case "com.amazonaws.cognito.sync.model#LambdaThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1LambdaThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cognito.sync.model#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.sync.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognito.sync.model#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.sync.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.sync.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

const deserializeAws_restJson1_1AlreadyStreamedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AlreadyStreamedException> => {
  const contents: AlreadyStreamedException = {
    name: "AlreadyStreamedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConcurrentModificationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1DuplicateRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DuplicateRequestException> => {
  const contents: DuplicateRequestException = {
    name: "DuplicateRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const contents: InternalErrorException = {
    name: "InternalErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidConfigurationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidConfigurationException> => {
  const contents: InvalidConfigurationException = {
    name: "InvalidConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidLambdaFunctionOutputExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidLambdaFunctionOutputException> => {
  const contents: InvalidLambdaFunctionOutputException = {
    name: "InvalidLambdaFunctionOutputException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidParameterExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LambdaSocketTimeoutExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LambdaSocketTimeoutException> => {
  const contents: LambdaSocketTimeoutException = {
    name: "LambdaSocketTimeoutException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LambdaThrottledExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LambdaThrottledException> => {
  const contents: LambdaThrottledException = {
    name: "LambdaThrottledException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotAuthorizedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const contents: NotAuthorizedException = {
    name: "NotAuthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const contents: ResourceConflictException = {
    name: "ResourceConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
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
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1ApplicationArnList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1CognitoStreams = (
  input: CognitoStreams,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DisabledReason !== undefined) {
    bodyParams["DisabledReason"] = input.DisabledReason;
  }
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  if (input.StreamingStatus !== undefined) {
    bodyParams["StreamingStatus"] = input.StreamingStatus;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Events = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1PushSync = (
  input: PushSync,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationArns !== undefined) {
    bodyParams["ApplicationArns"] = serializeAws_restJson1_1ApplicationArnList(
      input.ApplicationArns,
      context
    );
  }
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1RecordPatch = (
  input: RecordPatch,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeviceLastModifiedDate !== undefined) {
    bodyParams["DeviceLastModifiedDate"] = Math.round(
      input.DeviceLastModifiedDate.getTime() / 1000
    );
  }
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Op !== undefined) {
    bodyParams["Op"] = input.Op;
  }
  if (input.SyncCount !== undefined) {
    bodyParams["SyncCount"] = input.SyncCount;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1RecordPatchList = (
  input: Array<RecordPatch>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1RecordPatch(entry, context));
  }
  return contents;
};

const deserializeAws_restJson1_1ApplicationArnList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1CognitoStreams = (
  output: any,
  context: __SerdeContext
): CognitoStreams => {
  let contents: any = {
    __type: "CognitoStreams",
    DisabledReason: undefined,
    RoleArn: undefined,
    StreamName: undefined,
    StreamingStatus: undefined
  };
  if (output.DisabledReason !== undefined && output.DisabledReason !== null) {
    contents.DisabledReason = output.DisabledReason;
  }
  if (output.RoleArn !== undefined && output.RoleArn !== null) {
    contents.RoleArn = output.RoleArn;
  }
  if (output.StreamName !== undefined && output.StreamName !== null) {
    contents.StreamName = output.StreamName;
  }
  if (output.StreamingStatus !== undefined && output.StreamingStatus !== null) {
    contents.StreamingStatus = output.StreamingStatus;
  }
  return contents;
};

const deserializeAws_restJson1_1Dataset = (
  output: any,
  context: __SerdeContext
): Dataset => {
  let contents: any = {
    __type: "Dataset",
    CreationDate: undefined,
    DataStorage: undefined,
    DatasetName: undefined,
    IdentityId: undefined,
    LastModifiedBy: undefined,
    LastModifiedDate: undefined,
    NumRecords: undefined
  };
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
  }
  if (output.DataStorage !== undefined && output.DataStorage !== null) {
    contents.DataStorage = output.DataStorage;
  }
  if (output.DatasetName !== undefined && output.DatasetName !== null) {
    contents.DatasetName = output.DatasetName;
  }
  if (output.IdentityId !== undefined && output.IdentityId !== null) {
    contents.IdentityId = output.IdentityId;
  }
  if (output.LastModifiedBy !== undefined && output.LastModifiedBy !== null) {
    contents.LastModifiedBy = output.LastModifiedBy;
  }
  if (
    output.LastModifiedDate !== undefined &&
    output.LastModifiedDate !== null
  ) {
    contents.LastModifiedDate = new Date(
      Math.round(output.LastModifiedDate * 1000)
    );
  }
  if (output.NumRecords !== undefined && output.NumRecords !== null) {
    contents.NumRecords = output.NumRecords;
  }
  return contents;
};

const deserializeAws_restJson1_1DatasetList = (
  output: any,
  context: __SerdeContext
): Array<Dataset> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Dataset(entry, context)
  );
};

const deserializeAws_restJson1_1Events = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1IdentityPoolUsage = (
  output: any,
  context: __SerdeContext
): IdentityPoolUsage => {
  let contents: any = {
    __type: "IdentityPoolUsage",
    DataStorage: undefined,
    IdentityPoolId: undefined,
    LastModifiedDate: undefined,
    SyncSessionsCount: undefined
  };
  if (output.DataStorage !== undefined && output.DataStorage !== null) {
    contents.DataStorage = output.DataStorage;
  }
  if (output.IdentityPoolId !== undefined && output.IdentityPoolId !== null) {
    contents.IdentityPoolId = output.IdentityPoolId;
  }
  if (
    output.LastModifiedDate !== undefined &&
    output.LastModifiedDate !== null
  ) {
    contents.LastModifiedDate = new Date(
      Math.round(output.LastModifiedDate * 1000)
    );
  }
  if (
    output.SyncSessionsCount !== undefined &&
    output.SyncSessionsCount !== null
  ) {
    contents.SyncSessionsCount = output.SyncSessionsCount;
  }
  return contents;
};

const deserializeAws_restJson1_1IdentityPoolUsageList = (
  output: any,
  context: __SerdeContext
): Array<IdentityPoolUsage> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1IdentityPoolUsage(entry, context)
  );
};

const deserializeAws_restJson1_1IdentityUsage = (
  output: any,
  context: __SerdeContext
): IdentityUsage => {
  let contents: any = {
    __type: "IdentityUsage",
    DataStorage: undefined,
    DatasetCount: undefined,
    IdentityId: undefined,
    IdentityPoolId: undefined,
    LastModifiedDate: undefined
  };
  if (output.DataStorage !== undefined && output.DataStorage !== null) {
    contents.DataStorage = output.DataStorage;
  }
  if (output.DatasetCount !== undefined && output.DatasetCount !== null) {
    contents.DatasetCount = output.DatasetCount;
  }
  if (output.IdentityId !== undefined && output.IdentityId !== null) {
    contents.IdentityId = output.IdentityId;
  }
  if (output.IdentityPoolId !== undefined && output.IdentityPoolId !== null) {
    contents.IdentityPoolId = output.IdentityPoolId;
  }
  if (
    output.LastModifiedDate !== undefined &&
    output.LastModifiedDate !== null
  ) {
    contents.LastModifiedDate = new Date(
      Math.round(output.LastModifiedDate * 1000)
    );
  }
  return contents;
};

const deserializeAws_restJson1_1MergedDatasetNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1PushSync = (
  output: any,
  context: __SerdeContext
): PushSync => {
  let contents: any = {
    __type: "PushSync",
    ApplicationArns: undefined,
    RoleArn: undefined
  };
  if (output.ApplicationArns !== undefined && output.ApplicationArns !== null) {
    contents.ApplicationArns = deserializeAws_restJson1_1ApplicationArnList(
      output.ApplicationArns,
      context
    );
  }
  if (output.RoleArn !== undefined && output.RoleArn !== null) {
    contents.RoleArn = output.RoleArn;
  }
  return contents;
};

const deserializeAws_restJson1_1_Record = (
  output: any,
  context: __SerdeContext
): _Record => {
  let contents: any = {
    __type: "Record",
    DeviceLastModifiedDate: undefined,
    Key: undefined,
    LastModifiedBy: undefined,
    LastModifiedDate: undefined,
    SyncCount: undefined,
    Value: undefined
  };
  if (
    output.DeviceLastModifiedDate !== undefined &&
    output.DeviceLastModifiedDate !== null
  ) {
    contents.DeviceLastModifiedDate = new Date(
      Math.round(output.DeviceLastModifiedDate * 1000)
    );
  }
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.LastModifiedBy !== undefined && output.LastModifiedBy !== null) {
    contents.LastModifiedBy = output.LastModifiedBy;
  }
  if (
    output.LastModifiedDate !== undefined &&
    output.LastModifiedDate !== null
  ) {
    contents.LastModifiedDate = new Date(
      Math.round(output.LastModifiedDate * 1000)
    );
  }
  if (output.SyncCount !== undefined && output.SyncCount !== null) {
    contents.SyncCount = output.SyncCount;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_restJson1_1RecordList = (
  output: any,
  context: __SerdeContext
): Array<_Record> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1_Record(entry, context)
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
