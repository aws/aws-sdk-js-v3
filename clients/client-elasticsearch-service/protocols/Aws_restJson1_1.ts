import {
  AddTagsCommandInput,
  AddTagsCommandOutput
} from "../commands/AddTagsCommand";
import {
  CancelElasticsearchServiceSoftwareUpdateCommandInput,
  CancelElasticsearchServiceSoftwareUpdateCommandOutput
} from "../commands/CancelElasticsearchServiceSoftwareUpdateCommand";
import {
  CreateElasticsearchDomainCommandInput,
  CreateElasticsearchDomainCommandOutput
} from "../commands/CreateElasticsearchDomainCommand";
import {
  DeleteElasticsearchDomainCommandInput,
  DeleteElasticsearchDomainCommandOutput
} from "../commands/DeleteElasticsearchDomainCommand";
import {
  DeleteElasticsearchServiceRoleCommandInput,
  DeleteElasticsearchServiceRoleCommandOutput
} from "../commands/DeleteElasticsearchServiceRoleCommand";
import {
  DescribeElasticsearchDomainCommandInput,
  DescribeElasticsearchDomainCommandOutput
} from "../commands/DescribeElasticsearchDomainCommand";
import {
  DescribeElasticsearchDomainConfigCommandInput,
  DescribeElasticsearchDomainConfigCommandOutput
} from "../commands/DescribeElasticsearchDomainConfigCommand";
import {
  DescribeElasticsearchDomainsCommandInput,
  DescribeElasticsearchDomainsCommandOutput
} from "../commands/DescribeElasticsearchDomainsCommand";
import {
  DescribeElasticsearchInstanceTypeLimitsCommandInput,
  DescribeElasticsearchInstanceTypeLimitsCommandOutput
} from "../commands/DescribeElasticsearchInstanceTypeLimitsCommand";
import {
  DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  DescribeReservedElasticsearchInstanceOfferingsCommandOutput
} from "../commands/DescribeReservedElasticsearchInstanceOfferingsCommand";
import {
  DescribeReservedElasticsearchInstancesCommandInput,
  DescribeReservedElasticsearchInstancesCommandOutput
} from "../commands/DescribeReservedElasticsearchInstancesCommand";
import {
  GetCompatibleElasticsearchVersionsCommandInput,
  GetCompatibleElasticsearchVersionsCommandOutput
} from "../commands/GetCompatibleElasticsearchVersionsCommand";
import {
  GetUpgradeHistoryCommandInput,
  GetUpgradeHistoryCommandOutput
} from "../commands/GetUpgradeHistoryCommand";
import {
  GetUpgradeStatusCommandInput,
  GetUpgradeStatusCommandOutput
} from "../commands/GetUpgradeStatusCommand";
import {
  ListDomainNamesCommandInput,
  ListDomainNamesCommandOutput
} from "../commands/ListDomainNamesCommand";
import {
  ListElasticsearchInstanceTypesCommandInput,
  ListElasticsearchInstanceTypesCommandOutput
} from "../commands/ListElasticsearchInstanceTypesCommand";
import {
  ListElasticsearchVersionsCommandInput,
  ListElasticsearchVersionsCommandOutput
} from "../commands/ListElasticsearchVersionsCommand";
import {
  ListTagsCommandInput,
  ListTagsCommandOutput
} from "../commands/ListTagsCommand";
import {
  PurchaseReservedElasticsearchInstanceOfferingCommandInput,
  PurchaseReservedElasticsearchInstanceOfferingCommandOutput
} from "../commands/PurchaseReservedElasticsearchInstanceOfferingCommand";
import {
  RemoveTagsCommandInput,
  RemoveTagsCommandOutput
} from "../commands/RemoveTagsCommand";
import {
  StartElasticsearchServiceSoftwareUpdateCommandInput,
  StartElasticsearchServiceSoftwareUpdateCommandOutput
} from "../commands/StartElasticsearchServiceSoftwareUpdateCommand";
import {
  UpdateElasticsearchDomainConfigCommandInput,
  UpdateElasticsearchDomainConfigCommandOutput
} from "../commands/UpdateElasticsearchDomainConfigCommand";
import {
  UpgradeElasticsearchDomainCommandInput,
  UpgradeElasticsearchDomainCommandOutput
} from "../commands/UpgradeElasticsearchDomainCommand";
import {
  AccessPoliciesStatus,
  AdditionalLimit,
  AdvancedOptionsStatus,
  BaseException,
  CognitoOptions,
  CognitoOptionsStatus,
  CompatibleVersionsMap,
  DisabledOperationException,
  DomainEndpointOptions,
  DomainEndpointOptionsStatus,
  DomainInfo,
  EBSOptions,
  EBSOptionsStatus,
  ESPartitionInstanceType,
  ElasticsearchClusterConfig,
  ElasticsearchClusterConfigStatus,
  ElasticsearchDomainConfig,
  ElasticsearchDomainStatus,
  ElasticsearchVersionStatus,
  EncryptionAtRestOptions,
  EncryptionAtRestOptionsStatus,
  InstanceCountLimits,
  InstanceLimits,
  InternalException,
  InvalidTypeException,
  LimitExceededException,
  Limits,
  LogPublishingOption,
  LogPublishingOptionsStatus,
  NodeToNodeEncryptionOptions,
  NodeToNodeEncryptionOptionsStatus,
  OptionStatus,
  RecurringCharge,
  ReservedElasticsearchInstance,
  ReservedElasticsearchInstanceOffering,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  ServiceSoftwareOptions,
  SnapshotOptions,
  SnapshotOptionsStatus,
  StorageType,
  StorageTypeLimit,
  Tag,
  UpgradeHistory,
  UpgradeStepItem,
  VPCDerivedInfo,
  VPCDerivedInfoStatus,
  VPCOptions,
  ValidationException,
  ZoneAwarenessConfig
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

export async function serializeAws_restJson1_1AddTagsCommand(
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-01-01/tags";
  let body: any;
  const bodyParams: any = {};
  if (input.ARN !== undefined) {
    bodyParams["ARN"] = input.ARN;
  }
  if (input.TagList !== undefined) {
    bodyParams["TagList"] = serializeAws_restJson1_1TagList(
      input.TagList,
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

export async function serializeAws_restJson1_1CancelElasticsearchServiceSoftwareUpdateCommand(
  input: CancelElasticsearchServiceSoftwareUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-01-01/es/serviceSoftwareUpdate/cancel";
  let body: any;
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
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

export async function serializeAws_restJson1_1CreateElasticsearchDomainCommand(
  input: CreateElasticsearchDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-01-01/es/domain";
  let body: any;
  const bodyParams: any = {};
  if (input.AccessPolicies !== undefined) {
    bodyParams["AccessPolicies"] = input.AccessPolicies;
  }
  if (input.AdvancedOptions !== undefined) {
    bodyParams["AdvancedOptions"] = serializeAws_restJson1_1AdvancedOptions(
      input.AdvancedOptions,
      context
    );
  }
  if (input.CognitoOptions !== undefined) {
    bodyParams["CognitoOptions"] = serializeAws_restJson1_1CognitoOptions(
      input.CognitoOptions,
      context
    );
  }
  if (input.DomainEndpointOptions !== undefined) {
    bodyParams[
      "DomainEndpointOptions"
    ] = serializeAws_restJson1_1DomainEndpointOptions(
      input.DomainEndpointOptions,
      context
    );
  }
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.EBSOptions !== undefined) {
    bodyParams["EBSOptions"] = serializeAws_restJson1_1EBSOptions(
      input.EBSOptions,
      context
    );
  }
  if (input.ElasticsearchClusterConfig !== undefined) {
    bodyParams[
      "ElasticsearchClusterConfig"
    ] = serializeAws_restJson1_1ElasticsearchClusterConfig(
      input.ElasticsearchClusterConfig,
      context
    );
  }
  if (input.ElasticsearchVersion !== undefined) {
    bodyParams["ElasticsearchVersion"] = input.ElasticsearchVersion;
  }
  if (input.EncryptionAtRestOptions !== undefined) {
    bodyParams[
      "EncryptionAtRestOptions"
    ] = serializeAws_restJson1_1EncryptionAtRestOptions(
      input.EncryptionAtRestOptions,
      context
    );
  }
  if (input.LogPublishingOptions !== undefined) {
    bodyParams[
      "LogPublishingOptions"
    ] = serializeAws_restJson1_1LogPublishingOptions(
      input.LogPublishingOptions,
      context
    );
  }
  if (input.NodeToNodeEncryptionOptions !== undefined) {
    bodyParams[
      "NodeToNodeEncryptionOptions"
    ] = serializeAws_restJson1_1NodeToNodeEncryptionOptions(
      input.NodeToNodeEncryptionOptions,
      context
    );
  }
  if (input.SnapshotOptions !== undefined) {
    bodyParams["SnapshotOptions"] = serializeAws_restJson1_1SnapshotOptions(
      input.SnapshotOptions,
      context
    );
  }
  if (input.VPCOptions !== undefined) {
    bodyParams["VPCOptions"] = serializeAws_restJson1_1VPCOptions(
      input.VPCOptions,
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

export async function serializeAws_restJson1_1DeleteElasticsearchDomainCommand(
  input: DeleteElasticsearchDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-01-01/es/domain/{DomainName}";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace(
      "{DomainName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteElasticsearchServiceRoleCommand(
  input: DeleteElasticsearchServiceRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-01-01/es/role";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeElasticsearchDomainCommand(
  input: DescribeElasticsearchDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-01-01/es/domain/{DomainName}";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace(
      "{DomainName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeElasticsearchDomainConfigCommand(
  input: DescribeElasticsearchDomainConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-01-01/es/domain/{DomainName}/config";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace(
      "{DomainName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeElasticsearchDomainsCommand(
  input: DescribeElasticsearchDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-01-01/es/domain-info";
  let body: any;
  const bodyParams: any = {};
  if (input.DomainNames !== undefined) {
    bodyParams["DomainNames"] = serializeAws_restJson1_1DomainNameList(
      input.DomainNames,
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

export async function serializeAws_restJson1_1DescribeElasticsearchInstanceTypeLimitsCommand(
  input: DescribeElasticsearchInstanceTypeLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/2015-01-01/es/instanceTypeLimits/{ElasticsearchVersion}/{InstanceType}";
  if (input.ElasticsearchVersion !== undefined) {
    const labelValue: string = input.ElasticsearchVersion;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ElasticsearchVersion."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ElasticsearchVersion}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ElasticsearchVersion."
    );
  }
  if (input.InstanceType !== undefined) {
    const labelValue: string = input.InstanceType;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: InstanceType."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceType}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceType.");
  }
  const query: any = {};
  if (input.DomainName !== undefined) {
    query["domainName"] = input.DomainName;
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

export async function serializeAws_restJson1_1DescribeReservedElasticsearchInstanceOfferingsCommand(
  input: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-01-01/es/reservedInstanceOfferings";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.ReservedElasticsearchInstanceOfferingId !== undefined) {
    query["offeringId"] = input.ReservedElasticsearchInstanceOfferingId;
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

export async function serializeAws_restJson1_1DescribeReservedElasticsearchInstancesCommand(
  input: DescribeReservedElasticsearchInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-01-01/es/reservedInstances";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.ReservedElasticsearchInstanceId !== undefined) {
    query["reservationId"] = input.ReservedElasticsearchInstanceId;
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

export async function serializeAws_restJson1_1GetCompatibleElasticsearchVersionsCommand(
  input: GetCompatibleElasticsearchVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-01-01/es/compatibleVersions";
  const query: any = {};
  if (input.DomainName !== undefined) {
    query["domainName"] = input.DomainName;
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

export async function serializeAws_restJson1_1GetUpgradeHistoryCommand(
  input: GetUpgradeHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-01-01/es/upgradeDomain/{DomainName}/history";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace(
      "{DomainName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
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

export async function serializeAws_restJson1_1GetUpgradeStatusCommand(
  input: GetUpgradeStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-01-01/es/upgradeDomain/{DomainName}/status";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace(
      "{DomainName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListDomainNamesCommand(
  input: ListDomainNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-01-01/domain";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListElasticsearchInstanceTypesCommand(
  input: ListElasticsearchInstanceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-01-01/es/instanceTypes/{ElasticsearchVersion}";
  if (input.ElasticsearchVersion !== undefined) {
    const labelValue: string = input.ElasticsearchVersion;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ElasticsearchVersion."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ElasticsearchVersion}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ElasticsearchVersion."
    );
  }
  const query: any = {};
  if (input.DomainName !== undefined) {
    query["domainName"] = input.DomainName;
  }
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

export async function serializeAws_restJson1_1ListElasticsearchVersionsCommand(
  input: ListElasticsearchVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-01-01/es/versions";
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

export async function serializeAws_restJson1_1ListTagsCommand(
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-01-01/tags";
  const query: any = {};
  if (input.ARN !== undefined) {
    query["arn"] = input.ARN;
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

export async function serializeAws_restJson1_1PurchaseReservedElasticsearchInstanceOfferingCommand(
  input: PurchaseReservedElasticsearchInstanceOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-01-01/es/purchaseReservedInstanceOffering";
  let body: any;
  const bodyParams: any = {};
  if (input.InstanceCount !== undefined) {
    bodyParams["InstanceCount"] = input.InstanceCount;
  }
  if (input.ReservationName !== undefined) {
    bodyParams["ReservationName"] = input.ReservationName;
  }
  if (input.ReservedElasticsearchInstanceOfferingId !== undefined) {
    bodyParams["ReservedElasticsearchInstanceOfferingId"] =
      input.ReservedElasticsearchInstanceOfferingId;
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

export async function serializeAws_restJson1_1RemoveTagsCommand(
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-01-01/tags-removal";
  let body: any;
  const bodyParams: any = {};
  if (input.ARN !== undefined) {
    bodyParams["ARN"] = input.ARN;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_restJson1_1StringList(
      input.TagKeys,
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

export async function serializeAws_restJson1_1StartElasticsearchServiceSoftwareUpdateCommand(
  input: StartElasticsearchServiceSoftwareUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-01-01/es/serviceSoftwareUpdate/start";
  let body: any;
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
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

export async function serializeAws_restJson1_1UpdateElasticsearchDomainConfigCommand(
  input: UpdateElasticsearchDomainConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-01-01/es/domain/{DomainName}/config";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace(
      "{DomainName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.AccessPolicies !== undefined) {
    bodyParams["AccessPolicies"] = input.AccessPolicies;
  }
  if (input.AdvancedOptions !== undefined) {
    bodyParams["AdvancedOptions"] = serializeAws_restJson1_1AdvancedOptions(
      input.AdvancedOptions,
      context
    );
  }
  if (input.CognitoOptions !== undefined) {
    bodyParams["CognitoOptions"] = serializeAws_restJson1_1CognitoOptions(
      input.CognitoOptions,
      context
    );
  }
  if (input.DomainEndpointOptions !== undefined) {
    bodyParams[
      "DomainEndpointOptions"
    ] = serializeAws_restJson1_1DomainEndpointOptions(
      input.DomainEndpointOptions,
      context
    );
  }
  if (input.EBSOptions !== undefined) {
    bodyParams["EBSOptions"] = serializeAws_restJson1_1EBSOptions(
      input.EBSOptions,
      context
    );
  }
  if (input.ElasticsearchClusterConfig !== undefined) {
    bodyParams[
      "ElasticsearchClusterConfig"
    ] = serializeAws_restJson1_1ElasticsearchClusterConfig(
      input.ElasticsearchClusterConfig,
      context
    );
  }
  if (input.LogPublishingOptions !== undefined) {
    bodyParams[
      "LogPublishingOptions"
    ] = serializeAws_restJson1_1LogPublishingOptions(
      input.LogPublishingOptions,
      context
    );
  }
  if (input.SnapshotOptions !== undefined) {
    bodyParams["SnapshotOptions"] = serializeAws_restJson1_1SnapshotOptions(
      input.SnapshotOptions,
      context
    );
  }
  if (input.VPCOptions !== undefined) {
    bodyParams["VPCOptions"] = serializeAws_restJson1_1VPCOptions(
      input.VPCOptions,
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

export async function serializeAws_restJson1_1UpgradeElasticsearchDomainCommand(
  input: UpgradeElasticsearchDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-01-01/es/upgradeDomain";
  let body: any;
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.PerformCheckOnly !== undefined) {
    bodyParams["PerformCheckOnly"] = input.PerformCheckOnly;
  }
  if (input.TargetVersion !== undefined) {
    bodyParams["TargetVersion"] = input.TargetVersion;
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

export async function deserializeAws_restJson1_1AddTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AddTagsCommandError(output, context);
  }
  const contents: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AddTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.a9.es.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1CancelElasticsearchServiceSoftwareUpdateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelElasticsearchServiceSoftwareUpdateCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CancelElasticsearchServiceSoftwareUpdateCommandError(
      output,
      context
    );
  }
  const contents: CancelElasticsearchServiceSoftwareUpdateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelElasticsearchServiceSoftwareUpdateResponse",
    ServiceSoftwareOptions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.ServiceSoftwareOptions !== undefined &&
    data.ServiceSoftwareOptions !== null
  ) {
    contents.ServiceSoftwareOptions = deserializeAws_restJson1_1ServiceSoftwareOptions(
      data.ServiceSoftwareOptions,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CancelElasticsearchServiceSoftwareUpdateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelElasticsearchServiceSoftwareUpdateCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateElasticsearchDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateElasticsearchDomainCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateElasticsearchDomainCommandError(
      output,
      context
    );
  }
  const contents: CreateElasticsearchDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateElasticsearchDomainResponse",
    DomainStatus: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DomainStatus !== undefined && data.DomainStatus !== null) {
    contents.DomainStatus = deserializeAws_restJson1_1ElasticsearchDomainStatus(
      data.DomainStatus,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateElasticsearchDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateElasticsearchDomainCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledOperationException":
    case "com.a9.es.exceptions#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1_1DisabledOperationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.a9.es.exceptions#InvalidTypeException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidTypeExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.a9.es.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.a9.es.exceptions#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DeleteElasticsearchDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteElasticsearchDomainCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteElasticsearchDomainCommandError(
      output,
      context
    );
  }
  const contents: DeleteElasticsearchDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteElasticsearchDomainResponse",
    DomainStatus: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DomainStatus !== undefined && data.DomainStatus !== null) {
    contents.DomainStatus = deserializeAws_restJson1_1ElasticsearchDomainStatus(
      data.DomainStatus,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteElasticsearchDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteElasticsearchDomainCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DeleteElasticsearchServiceRoleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteElasticsearchServiceRoleCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteElasticsearchServiceRoleCommandError(
      output,
      context
    );
  }
  const contents: DeleteElasticsearchServiceRoleCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteElasticsearchServiceRoleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteElasticsearchServiceRoleCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeElasticsearchDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeElasticsearchDomainCommandError(
      output,
      context
    );
  }
  const contents: DescribeElasticsearchDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeElasticsearchDomainResponse",
    DomainStatus: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DomainStatus !== undefined && data.DomainStatus !== null) {
    contents.DomainStatus = deserializeAws_restJson1_1ElasticsearchDomainStatus(
      data.DomainStatus,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeElasticsearchDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeElasticsearchDomainConfigCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainConfigCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeElasticsearchDomainConfigCommandError(
      output,
      context
    );
  }
  const contents: DescribeElasticsearchDomainConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeElasticsearchDomainConfigResponse",
    DomainConfig: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DomainConfig !== undefined && data.DomainConfig !== null) {
    contents.DomainConfig = deserializeAws_restJson1_1ElasticsearchDomainConfig(
      data.DomainConfig,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeElasticsearchDomainConfigCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainConfigCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeElasticsearchDomainsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeElasticsearchDomainsCommandError(
      output,
      context
    );
  }
  const contents: DescribeElasticsearchDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeElasticsearchDomainsResponse",
    DomainStatusList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DomainStatusList !== undefined && data.DomainStatusList !== null) {
    contents.DomainStatusList = deserializeAws_restJson1_1ElasticsearchDomainStatusList(
      data.DomainStatusList,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeElasticsearchDomainsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeElasticsearchInstanceTypeLimitsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchInstanceTypeLimitsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeElasticsearchInstanceTypeLimitsCommandError(
      output,
      context
    );
  }
  const contents: DescribeElasticsearchInstanceTypeLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeElasticsearchInstanceTypeLimitsResponse",
    LimitsByRole: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.LimitsByRole !== undefined && data.LimitsByRole !== null) {
    contents.LimitsByRole = deserializeAws_restJson1_1LimitsByRole(
      data.LimitsByRole,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeElasticsearchInstanceTypeLimitsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchInstanceTypeLimitsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.a9.es.exceptions#InvalidTypeException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidTypeExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.a9.es.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeReservedElasticsearchInstanceOfferingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedElasticsearchInstanceOfferingsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeReservedElasticsearchInstanceOfferingsCommandError(
      output,
      context
    );
  }
  const contents: DescribeReservedElasticsearchInstanceOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeReservedElasticsearchInstanceOfferingsResponse",
    NextToken: undefined,
    ReservedElasticsearchInstanceOfferings: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (
    data.ReservedElasticsearchInstanceOfferings !== undefined &&
    data.ReservedElasticsearchInstanceOfferings !== null
  ) {
    contents.ReservedElasticsearchInstanceOfferings = deserializeAws_restJson1_1ReservedElasticsearchInstanceOfferingList(
      data.ReservedElasticsearchInstanceOfferings,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeReservedElasticsearchInstanceOfferingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedElasticsearchInstanceOfferingsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.a9.es.exceptions#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1_1DisabledOperationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeReservedElasticsearchInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedElasticsearchInstancesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeReservedElasticsearchInstancesCommandError(
      output,
      context
    );
  }
  const contents: DescribeReservedElasticsearchInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeReservedElasticsearchInstancesResponse",
    NextToken: undefined,
    ReservedElasticsearchInstances: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (
    data.ReservedElasticsearchInstances !== undefined &&
    data.ReservedElasticsearchInstances !== null
  ) {
    contents.ReservedElasticsearchInstances = deserializeAws_restJson1_1ReservedElasticsearchInstanceList(
      data.ReservedElasticsearchInstances,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeReservedElasticsearchInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedElasticsearchInstancesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.a9.es.exceptions#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1_1DisabledOperationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1GetCompatibleElasticsearchVersionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCompatibleElasticsearchVersionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetCompatibleElasticsearchVersionsCommandError(
      output,
      context
    );
  }
  const contents: GetCompatibleElasticsearchVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCompatibleElasticsearchVersionsResponse",
    CompatibleElasticsearchVersions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.CompatibleElasticsearchVersions !== undefined &&
    data.CompatibleElasticsearchVersions !== null
  ) {
    contents.CompatibleElasticsearchVersions = deserializeAws_restJson1_1CompatibleElasticsearchVersionsList(
      data.CompatibleElasticsearchVersions,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetCompatibleElasticsearchVersionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCompatibleElasticsearchVersionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledOperationException":
    case "com.a9.es.exceptions#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1_1DisabledOperationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1GetUpgradeHistoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeHistoryCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetUpgradeHistoryCommandError(
      output,
      context
    );
  }
  const contents: GetUpgradeHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetUpgradeHistoryResponse",
    NextToken: undefined,
    UpgradeHistories: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.UpgradeHistories !== undefined && data.UpgradeHistories !== null) {
    contents.UpgradeHistories = deserializeAws_restJson1_1UpgradeHistoryList(
      data.UpgradeHistories,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetUpgradeHistoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeHistoryCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledOperationException":
    case "com.a9.es.exceptions#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1_1DisabledOperationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1GetUpgradeStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeStatusCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetUpgradeStatusCommandError(
      output,
      context
    );
  }
  const contents: GetUpgradeStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetUpgradeStatusResponse",
    StepStatus: undefined,
    UpgradeName: undefined,
    UpgradeStep: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.StepStatus !== undefined && data.StepStatus !== null) {
    contents.StepStatus = data.StepStatus;
  }
  if (data.UpgradeName !== undefined && data.UpgradeName !== null) {
    contents.UpgradeName = data.UpgradeName;
  }
  if (data.UpgradeStep !== undefined && data.UpgradeStep !== null) {
    contents.UpgradeStep = data.UpgradeStep;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetUpgradeStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeStatusCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledOperationException":
    case "com.a9.es.exceptions#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1_1DisabledOperationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1ListDomainNamesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDomainNamesCommandError(
      output,
      context
    );
  }
  const contents: ListDomainNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDomainNamesResponse",
    DomainNames: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DomainNames !== undefined && data.DomainNames !== null) {
    contents.DomainNames = deserializeAws_restJson1_1DomainInfoList(
      data.DomainNames,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDomainNamesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1ListElasticsearchInstanceTypesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListElasticsearchInstanceTypesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListElasticsearchInstanceTypesCommandError(
      output,
      context
    );
  }
  const contents: ListElasticsearchInstanceTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListElasticsearchInstanceTypesResponse",
    ElasticsearchInstanceTypes: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.ElasticsearchInstanceTypes !== undefined &&
    data.ElasticsearchInstanceTypes !== null
  ) {
    contents.ElasticsearchInstanceTypes = deserializeAws_restJson1_1ElasticsearchInstanceTypeList(
      data.ElasticsearchInstanceTypes,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListElasticsearchInstanceTypesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListElasticsearchInstanceTypesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1ListElasticsearchVersionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListElasticsearchVersionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListElasticsearchVersionsCommandError(
      output,
      context
    );
  }
  const contents: ListElasticsearchVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListElasticsearchVersionsResponse",
    ElasticsearchVersions: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.ElasticsearchVersions !== undefined &&
    data.ElasticsearchVersions !== null
  ) {
    contents.ElasticsearchVersions = deserializeAws_restJson1_1ElasticsearchVersionList(
      data.ElasticsearchVersions,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListElasticsearchVersionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListElasticsearchVersionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1ListTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsCommandError(output, context);
  }
  const contents: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsResponse",
    TagList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.TagList !== undefined && data.TagList !== null) {
    contents.TagList = deserializeAws_restJson1_1TagList(data.TagList, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1PurchaseReservedElasticsearchInstanceOfferingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedElasticsearchInstanceOfferingCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PurchaseReservedElasticsearchInstanceOfferingCommandError(
      output,
      context
    );
  }
  const contents: PurchaseReservedElasticsearchInstanceOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PurchaseReservedElasticsearchInstanceOfferingResponse",
    ReservationName: undefined,
    ReservedElasticsearchInstanceId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ReservationName !== undefined && data.ReservationName !== null) {
    contents.ReservationName = data.ReservationName;
  }
  if (
    data.ReservedElasticsearchInstanceId !== undefined &&
    data.ReservedElasticsearchInstanceId !== null
  ) {
    contents.ReservedElasticsearchInstanceId =
      data.ReservedElasticsearchInstanceId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PurchaseReservedElasticsearchInstanceOfferingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedElasticsearchInstanceOfferingCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.a9.es.exceptions#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1_1DisabledOperationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.a9.es.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.a9.es.exceptions#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1RemoveTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RemoveTagsCommandError(output, context);
  }
  const contents: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RemoveTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1StartElasticsearchServiceSoftwareUpdateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartElasticsearchServiceSoftwareUpdateCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartElasticsearchServiceSoftwareUpdateCommandError(
      output,
      context
    );
  }
  const contents: StartElasticsearchServiceSoftwareUpdateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartElasticsearchServiceSoftwareUpdateResponse",
    ServiceSoftwareOptions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.ServiceSoftwareOptions !== undefined &&
    data.ServiceSoftwareOptions !== null
  ) {
    contents.ServiceSoftwareOptions = deserializeAws_restJson1_1ServiceSoftwareOptions(
      data.ServiceSoftwareOptions,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartElasticsearchServiceSoftwareUpdateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartElasticsearchServiceSoftwareUpdateCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateElasticsearchDomainConfigCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateElasticsearchDomainConfigCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateElasticsearchDomainConfigCommandError(
      output,
      context
    );
  }
  const contents: UpdateElasticsearchDomainConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateElasticsearchDomainConfigResponse",
    DomainConfig: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DomainConfig !== undefined && data.DomainConfig !== null) {
    contents.DomainConfig = deserializeAws_restJson1_1ElasticsearchDomainConfig(
      data.DomainConfig,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateElasticsearchDomainConfigCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateElasticsearchDomainConfigCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.a9.es.exceptions#InvalidTypeException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidTypeExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.a9.es.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1UpgradeElasticsearchDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeElasticsearchDomainCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpgradeElasticsearchDomainCommandError(
      output,
      context
    );
  }
  const contents: UpgradeElasticsearchDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpgradeElasticsearchDomainResponse",
    DomainName: undefined,
    PerformCheckOnly: undefined,
    TargetVersion: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DomainName !== undefined && data.DomainName !== null) {
    contents.DomainName = data.DomainName;
  }
  if (data.PerformCheckOnly !== undefined && data.PerformCheckOnly !== null) {
    contents.PerformCheckOnly = data.PerformCheckOnly;
  }
  if (data.TargetVersion !== undefined && data.TargetVersion !== null) {
    contents.TargetVersion = data.TargetVersion;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpgradeElasticsearchDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeElasticsearchDomainCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BaseException":
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledOperationException":
    case "com.a9.es.exceptions#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1_1DisabledOperationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.a9.es.exceptions#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

const deserializeAws_restJson1_1BaseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BaseException> => {
  const contents: BaseException = {
    name: "BaseException",
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

const deserializeAws_restJson1_1DisabledOperationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DisabledOperationException> => {
  const contents: DisabledOperationException = {
    name: "DisabledOperationException",
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

const deserializeAws_restJson1_1InternalExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const contents: InternalException = {
    name: "InternalException",
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

const deserializeAws_restJson1_1InvalidTypeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTypeException> => {
  const contents: InvalidTypeException = {
    name: "InvalidTypeException",
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

const deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
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

const deserializeAws_restJson1_1ValidationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
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

const serializeAws_restJson1_1AdvancedOptions = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1CognitoOptions = (
  input: CognitoOptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.IdentityPoolId !== undefined) {
    bodyParams["IdentityPoolId"] = input.IdentityPoolId;
  }
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  if (input.UserPoolId !== undefined) {
    bodyParams["UserPoolId"] = input.UserPoolId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DomainEndpointOptions = (
  input: DomainEndpointOptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EnforceHTTPS !== undefined) {
    bodyParams["EnforceHTTPS"] = input.EnforceHTTPS;
  }
  if (input.TLSSecurityPolicy !== undefined) {
    bodyParams["TLSSecurityPolicy"] = input.TLSSecurityPolicy;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DomainNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1EBSOptions = (
  input: EBSOptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EBSEnabled !== undefined) {
    bodyParams["EBSEnabled"] = input.EBSEnabled;
  }
  if (input.Iops !== undefined) {
    bodyParams["Iops"] = input.Iops;
  }
  if (input.VolumeSize !== undefined) {
    bodyParams["VolumeSize"] = input.VolumeSize;
  }
  if (input.VolumeType !== undefined) {
    bodyParams["VolumeType"] = input.VolumeType;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ElasticsearchClusterConfig = (
  input: ElasticsearchClusterConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DedicatedMasterCount !== undefined) {
    bodyParams["DedicatedMasterCount"] = input.DedicatedMasterCount;
  }
  if (input.DedicatedMasterEnabled !== undefined) {
    bodyParams["DedicatedMasterEnabled"] = input.DedicatedMasterEnabled;
  }
  if (input.DedicatedMasterType !== undefined) {
    bodyParams["DedicatedMasterType"] = input.DedicatedMasterType;
  }
  if (input.InstanceCount !== undefined) {
    bodyParams["InstanceCount"] = input.InstanceCount;
  }
  if (input.InstanceType !== undefined) {
    bodyParams["InstanceType"] = input.InstanceType;
  }
  if (input.WarmCount !== undefined) {
    bodyParams["WarmCount"] = input.WarmCount;
  }
  if (input.WarmEnabled !== undefined) {
    bodyParams["WarmEnabled"] = input.WarmEnabled;
  }
  if (input.WarmType !== undefined) {
    bodyParams["WarmType"] = input.WarmType;
  }
  if (input.ZoneAwarenessConfig !== undefined) {
    bodyParams[
      "ZoneAwarenessConfig"
    ] = serializeAws_restJson1_1ZoneAwarenessConfig(
      input.ZoneAwarenessConfig,
      context
    );
  }
  if (input.ZoneAwarenessEnabled !== undefined) {
    bodyParams["ZoneAwarenessEnabled"] = input.ZoneAwarenessEnabled;
  }
  return bodyParams;
};

const serializeAws_restJson1_1EncryptionAtRestOptions = (
  input: EncryptionAtRestOptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.KmsKeyId !== undefined) {
    bodyParams["KmsKeyId"] = input.KmsKeyId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1LogPublishingOption = (
  input: LogPublishingOption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CloudWatchLogsLogGroupArn !== undefined) {
    bodyParams["CloudWatchLogsLogGroupArn"] = input.CloudWatchLogsLogGroupArn;
  }
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  return bodyParams;
};

const serializeAws_restJson1_1LogPublishingOptions = (
  input: { [key: string]: LogPublishingOption },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_restJson1_1LogPublishingOption(
      input[key],
      context
    );
  });
  return mapParams;
};

const serializeAws_restJson1_1NodeToNodeEncryptionOptions = (
  input: NodeToNodeEncryptionOptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SnapshotOptions = (
  input: SnapshotOptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AutomatedSnapshotStartHour !== undefined) {
    bodyParams["AutomatedSnapshotStartHour"] = input.AutomatedSnapshotStartHour;
  }
  return bodyParams;
};

const serializeAws_restJson1_1StringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1VPCOptions = (
  input: VPCOptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SecurityGroupIds !== undefined) {
    bodyParams["SecurityGroupIds"] = serializeAws_restJson1_1StringList(
      input.SecurityGroupIds,
      context
    );
  }
  if (input.SubnetIds !== undefined) {
    bodyParams["SubnetIds"] = serializeAws_restJson1_1StringList(
      input.SubnetIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ZoneAwarenessConfig = (
  input: ZoneAwarenessConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AvailabilityZoneCount !== undefined) {
    bodyParams["AvailabilityZoneCount"] = input.AvailabilityZoneCount;
  }
  return bodyParams;
};

const deserializeAws_restJson1_1AccessPoliciesStatus = (
  output: any,
  context: __SerdeContext
): AccessPoliciesStatus => {
  let contents: any = {
    __type: "AccessPoliciesStatus",
    Options: undefined,
    Status: undefined
  };
  if (output.Options !== undefined && output.Options !== null) {
    contents.Options = output.Options;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_restJson1_1OptionStatus(
      output.Status,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AdditionalLimit = (
  output: any,
  context: __SerdeContext
): AdditionalLimit => {
  let contents: any = {
    __type: "AdditionalLimit",
    LimitName: undefined,
    LimitValues: undefined
  };
  if (output.LimitName !== undefined && output.LimitName !== null) {
    contents.LimitName = output.LimitName;
  }
  if (output.LimitValues !== undefined && output.LimitValues !== null) {
    contents.LimitValues = deserializeAws_restJson1_1LimitValueList(
      output.LimitValues,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AdditionalLimitList = (
  output: any,
  context: __SerdeContext
): Array<AdditionalLimit> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AdditionalLimit(entry, context)
  );
};

const deserializeAws_restJson1_1AdvancedOptions = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1AdvancedOptionsStatus = (
  output: any,
  context: __SerdeContext
): AdvancedOptionsStatus => {
  let contents: any = {
    __type: "AdvancedOptionsStatus",
    Options: undefined,
    Status: undefined
  };
  if (output.Options !== undefined && output.Options !== null) {
    contents.Options = deserializeAws_restJson1_1AdvancedOptions(
      output.Options,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_restJson1_1OptionStatus(
      output.Status,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1CognitoOptions = (
  output: any,
  context: __SerdeContext
): CognitoOptions => {
  let contents: any = {
    __type: "CognitoOptions",
    Enabled: undefined,
    IdentityPoolId: undefined,
    RoleArn: undefined,
    UserPoolId: undefined
  };
  if (output.Enabled !== undefined && output.Enabled !== null) {
    contents.Enabled = output.Enabled;
  }
  if (output.IdentityPoolId !== undefined && output.IdentityPoolId !== null) {
    contents.IdentityPoolId = output.IdentityPoolId;
  }
  if (output.RoleArn !== undefined && output.RoleArn !== null) {
    contents.RoleArn = output.RoleArn;
  }
  if (output.UserPoolId !== undefined && output.UserPoolId !== null) {
    contents.UserPoolId = output.UserPoolId;
  }
  return contents;
};

const deserializeAws_restJson1_1CognitoOptionsStatus = (
  output: any,
  context: __SerdeContext
): CognitoOptionsStatus => {
  let contents: any = {
    __type: "CognitoOptionsStatus",
    Options: undefined,
    Status: undefined
  };
  if (output.Options !== undefined && output.Options !== null) {
    contents.Options = deserializeAws_restJson1_1CognitoOptions(
      output.Options,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_restJson1_1OptionStatus(
      output.Status,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1CompatibleElasticsearchVersionsList = (
  output: any,
  context: __SerdeContext
): Array<CompatibleVersionsMap> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CompatibleVersionsMap(entry, context)
  );
};

const deserializeAws_restJson1_1CompatibleVersionsMap = (
  output: any,
  context: __SerdeContext
): CompatibleVersionsMap => {
  let contents: any = {
    __type: "CompatibleVersionsMap",
    SourceVersion: undefined,
    TargetVersions: undefined
  };
  if (output.SourceVersion !== undefined && output.SourceVersion !== null) {
    contents.SourceVersion = output.SourceVersion;
  }
  if (output.TargetVersions !== undefined && output.TargetVersions !== null) {
    contents.TargetVersions = deserializeAws_restJson1_1ElasticsearchVersionList(
      output.TargetVersions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DomainEndpointOptions = (
  output: any,
  context: __SerdeContext
): DomainEndpointOptions => {
  let contents: any = {
    __type: "DomainEndpointOptions",
    EnforceHTTPS: undefined,
    TLSSecurityPolicy: undefined
  };
  if (output.EnforceHTTPS !== undefined && output.EnforceHTTPS !== null) {
    contents.EnforceHTTPS = output.EnforceHTTPS;
  }
  if (
    output.TLSSecurityPolicy !== undefined &&
    output.TLSSecurityPolicy !== null
  ) {
    contents.TLSSecurityPolicy = output.TLSSecurityPolicy;
  }
  return contents;
};

const deserializeAws_restJson1_1DomainEndpointOptionsStatus = (
  output: any,
  context: __SerdeContext
): DomainEndpointOptionsStatus => {
  let contents: any = {
    __type: "DomainEndpointOptionsStatus",
    Options: undefined,
    Status: undefined
  };
  if (output.Options !== undefined && output.Options !== null) {
    contents.Options = deserializeAws_restJson1_1DomainEndpointOptions(
      output.Options,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_restJson1_1OptionStatus(
      output.Status,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DomainInfo = (
  output: any,
  context: __SerdeContext
): DomainInfo => {
  let contents: any = {
    __type: "DomainInfo",
    DomainName: undefined
  };
  if (output.DomainName !== undefined && output.DomainName !== null) {
    contents.DomainName = output.DomainName;
  }
  return contents;
};

const deserializeAws_restJson1_1DomainInfoList = (
  output: any,
  context: __SerdeContext
): Array<DomainInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DomainInfo(entry, context)
  );
};

const deserializeAws_restJson1_1EBSOptions = (
  output: any,
  context: __SerdeContext
): EBSOptions => {
  let contents: any = {
    __type: "EBSOptions",
    EBSEnabled: undefined,
    Iops: undefined,
    VolumeSize: undefined,
    VolumeType: undefined
  };
  if (output.EBSEnabled !== undefined && output.EBSEnabled !== null) {
    contents.EBSEnabled = output.EBSEnabled;
  }
  if (output.Iops !== undefined && output.Iops !== null) {
    contents.Iops = output.Iops;
  }
  if (output.VolumeSize !== undefined && output.VolumeSize !== null) {
    contents.VolumeSize = output.VolumeSize;
  }
  if (output.VolumeType !== undefined && output.VolumeType !== null) {
    contents.VolumeType = output.VolumeType;
  }
  return contents;
};

const deserializeAws_restJson1_1EBSOptionsStatus = (
  output: any,
  context: __SerdeContext
): EBSOptionsStatus => {
  let contents: any = {
    __type: "EBSOptionsStatus",
    Options: undefined,
    Status: undefined
  };
  if (output.Options !== undefined && output.Options !== null) {
    contents.Options = deserializeAws_restJson1_1EBSOptions(
      output.Options,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_restJson1_1OptionStatus(
      output.Status,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ElasticsearchClusterConfig = (
  output: any,
  context: __SerdeContext
): ElasticsearchClusterConfig => {
  let contents: any = {
    __type: "ElasticsearchClusterConfig",
    DedicatedMasterCount: undefined,
    DedicatedMasterEnabled: undefined,
    DedicatedMasterType: undefined,
    InstanceCount: undefined,
    InstanceType: undefined,
    WarmCount: undefined,
    WarmEnabled: undefined,
    WarmType: undefined,
    ZoneAwarenessConfig: undefined,
    ZoneAwarenessEnabled: undefined
  };
  if (
    output.DedicatedMasterCount !== undefined &&
    output.DedicatedMasterCount !== null
  ) {
    contents.DedicatedMasterCount = output.DedicatedMasterCount;
  }
  if (
    output.DedicatedMasterEnabled !== undefined &&
    output.DedicatedMasterEnabled !== null
  ) {
    contents.DedicatedMasterEnabled = output.DedicatedMasterEnabled;
  }
  if (
    output.DedicatedMasterType !== undefined &&
    output.DedicatedMasterType !== null
  ) {
    contents.DedicatedMasterType = output.DedicatedMasterType;
  }
  if (output.InstanceCount !== undefined && output.InstanceCount !== null) {
    contents.InstanceCount = output.InstanceCount;
  }
  if (output.InstanceType !== undefined && output.InstanceType !== null) {
    contents.InstanceType = output.InstanceType;
  }
  if (output.WarmCount !== undefined && output.WarmCount !== null) {
    contents.WarmCount = output.WarmCount;
  }
  if (output.WarmEnabled !== undefined && output.WarmEnabled !== null) {
    contents.WarmEnabled = output.WarmEnabled;
  }
  if (output.WarmType !== undefined && output.WarmType !== null) {
    contents.WarmType = output.WarmType;
  }
  if (
    output.ZoneAwarenessConfig !== undefined &&
    output.ZoneAwarenessConfig !== null
  ) {
    contents.ZoneAwarenessConfig = deserializeAws_restJson1_1ZoneAwarenessConfig(
      output.ZoneAwarenessConfig,
      context
    );
  }
  if (
    output.ZoneAwarenessEnabled !== undefined &&
    output.ZoneAwarenessEnabled !== null
  ) {
    contents.ZoneAwarenessEnabled = output.ZoneAwarenessEnabled;
  }
  return contents;
};

const deserializeAws_restJson1_1ElasticsearchClusterConfigStatus = (
  output: any,
  context: __SerdeContext
): ElasticsearchClusterConfigStatus => {
  let contents: any = {
    __type: "ElasticsearchClusterConfigStatus",
    Options: undefined,
    Status: undefined
  };
  if (output.Options !== undefined && output.Options !== null) {
    contents.Options = deserializeAws_restJson1_1ElasticsearchClusterConfig(
      output.Options,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_restJson1_1OptionStatus(
      output.Status,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ElasticsearchDomainConfig = (
  output: any,
  context: __SerdeContext
): ElasticsearchDomainConfig => {
  let contents: any = {
    __type: "ElasticsearchDomainConfig",
    AccessPolicies: undefined,
    AdvancedOptions: undefined,
    CognitoOptions: undefined,
    DomainEndpointOptions: undefined,
    EBSOptions: undefined,
    ElasticsearchClusterConfig: undefined,
    ElasticsearchVersion: undefined,
    EncryptionAtRestOptions: undefined,
    LogPublishingOptions: undefined,
    NodeToNodeEncryptionOptions: undefined,
    SnapshotOptions: undefined,
    VPCOptions: undefined
  };
  if (output.AccessPolicies !== undefined && output.AccessPolicies !== null) {
    contents.AccessPolicies = deserializeAws_restJson1_1AccessPoliciesStatus(
      output.AccessPolicies,
      context
    );
  }
  if (output.AdvancedOptions !== undefined && output.AdvancedOptions !== null) {
    contents.AdvancedOptions = deserializeAws_restJson1_1AdvancedOptionsStatus(
      output.AdvancedOptions,
      context
    );
  }
  if (output.CognitoOptions !== undefined && output.CognitoOptions !== null) {
    contents.CognitoOptions = deserializeAws_restJson1_1CognitoOptionsStatus(
      output.CognitoOptions,
      context
    );
  }
  if (
    output.DomainEndpointOptions !== undefined &&
    output.DomainEndpointOptions !== null
  ) {
    contents.DomainEndpointOptions = deserializeAws_restJson1_1DomainEndpointOptionsStatus(
      output.DomainEndpointOptions,
      context
    );
  }
  if (output.EBSOptions !== undefined && output.EBSOptions !== null) {
    contents.EBSOptions = deserializeAws_restJson1_1EBSOptionsStatus(
      output.EBSOptions,
      context
    );
  }
  if (
    output.ElasticsearchClusterConfig !== undefined &&
    output.ElasticsearchClusterConfig !== null
  ) {
    contents.ElasticsearchClusterConfig = deserializeAws_restJson1_1ElasticsearchClusterConfigStatus(
      output.ElasticsearchClusterConfig,
      context
    );
  }
  if (
    output.ElasticsearchVersion !== undefined &&
    output.ElasticsearchVersion !== null
  ) {
    contents.ElasticsearchVersion = deserializeAws_restJson1_1ElasticsearchVersionStatus(
      output.ElasticsearchVersion,
      context
    );
  }
  if (
    output.EncryptionAtRestOptions !== undefined &&
    output.EncryptionAtRestOptions !== null
  ) {
    contents.EncryptionAtRestOptions = deserializeAws_restJson1_1EncryptionAtRestOptionsStatus(
      output.EncryptionAtRestOptions,
      context
    );
  }
  if (
    output.LogPublishingOptions !== undefined &&
    output.LogPublishingOptions !== null
  ) {
    contents.LogPublishingOptions = deserializeAws_restJson1_1LogPublishingOptionsStatus(
      output.LogPublishingOptions,
      context
    );
  }
  if (
    output.NodeToNodeEncryptionOptions !== undefined &&
    output.NodeToNodeEncryptionOptions !== null
  ) {
    contents.NodeToNodeEncryptionOptions = deserializeAws_restJson1_1NodeToNodeEncryptionOptionsStatus(
      output.NodeToNodeEncryptionOptions,
      context
    );
  }
  if (output.SnapshotOptions !== undefined && output.SnapshotOptions !== null) {
    contents.SnapshotOptions = deserializeAws_restJson1_1SnapshotOptionsStatus(
      output.SnapshotOptions,
      context
    );
  }
  if (output.VPCOptions !== undefined && output.VPCOptions !== null) {
    contents.VPCOptions = deserializeAws_restJson1_1VPCDerivedInfoStatus(
      output.VPCOptions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ElasticsearchDomainStatus = (
  output: any,
  context: __SerdeContext
): ElasticsearchDomainStatus => {
  let contents: any = {
    __type: "ElasticsearchDomainStatus",
    ARN: undefined,
    AccessPolicies: undefined,
    AdvancedOptions: undefined,
    CognitoOptions: undefined,
    Created: undefined,
    Deleted: undefined,
    DomainEndpointOptions: undefined,
    DomainId: undefined,
    DomainName: undefined,
    EBSOptions: undefined,
    ElasticsearchClusterConfig: undefined,
    ElasticsearchVersion: undefined,
    EncryptionAtRestOptions: undefined,
    Endpoint: undefined,
    Endpoints: undefined,
    LogPublishingOptions: undefined,
    NodeToNodeEncryptionOptions: undefined,
    Processing: undefined,
    ServiceSoftwareOptions: undefined,
    SnapshotOptions: undefined,
    UpgradeProcessing: undefined,
    VPCOptions: undefined
  };
  if (output.ARN !== undefined && output.ARN !== null) {
    contents.ARN = output.ARN;
  }
  if (output.AccessPolicies !== undefined && output.AccessPolicies !== null) {
    contents.AccessPolicies = output.AccessPolicies;
  }
  if (output.AdvancedOptions !== undefined && output.AdvancedOptions !== null) {
    contents.AdvancedOptions = deserializeAws_restJson1_1AdvancedOptions(
      output.AdvancedOptions,
      context
    );
  }
  if (output.CognitoOptions !== undefined && output.CognitoOptions !== null) {
    contents.CognitoOptions = deserializeAws_restJson1_1CognitoOptions(
      output.CognitoOptions,
      context
    );
  }
  if (output.Created !== undefined && output.Created !== null) {
    contents.Created = output.Created;
  }
  if (output.Deleted !== undefined && output.Deleted !== null) {
    contents.Deleted = output.Deleted;
  }
  if (
    output.DomainEndpointOptions !== undefined &&
    output.DomainEndpointOptions !== null
  ) {
    contents.DomainEndpointOptions = deserializeAws_restJson1_1DomainEndpointOptions(
      output.DomainEndpointOptions,
      context
    );
  }
  if (output.DomainId !== undefined && output.DomainId !== null) {
    contents.DomainId = output.DomainId;
  }
  if (output.DomainName !== undefined && output.DomainName !== null) {
    contents.DomainName = output.DomainName;
  }
  if (output.EBSOptions !== undefined && output.EBSOptions !== null) {
    contents.EBSOptions = deserializeAws_restJson1_1EBSOptions(
      output.EBSOptions,
      context
    );
  }
  if (
    output.ElasticsearchClusterConfig !== undefined &&
    output.ElasticsearchClusterConfig !== null
  ) {
    contents.ElasticsearchClusterConfig = deserializeAws_restJson1_1ElasticsearchClusterConfig(
      output.ElasticsearchClusterConfig,
      context
    );
  }
  if (
    output.ElasticsearchVersion !== undefined &&
    output.ElasticsearchVersion !== null
  ) {
    contents.ElasticsearchVersion = output.ElasticsearchVersion;
  }
  if (
    output.EncryptionAtRestOptions !== undefined &&
    output.EncryptionAtRestOptions !== null
  ) {
    contents.EncryptionAtRestOptions = deserializeAws_restJson1_1EncryptionAtRestOptions(
      output.EncryptionAtRestOptions,
      context
    );
  }
  if (output.Endpoint !== undefined && output.Endpoint !== null) {
    contents.Endpoint = output.Endpoint;
  }
  if (output.Endpoints !== undefined && output.Endpoints !== null) {
    contents.Endpoints = deserializeAws_restJson1_1EndpointsMap(
      output.Endpoints,
      context
    );
  }
  if (
    output.LogPublishingOptions !== undefined &&
    output.LogPublishingOptions !== null
  ) {
    contents.LogPublishingOptions = deserializeAws_restJson1_1LogPublishingOptions(
      output.LogPublishingOptions,
      context
    );
  }
  if (
    output.NodeToNodeEncryptionOptions !== undefined &&
    output.NodeToNodeEncryptionOptions !== null
  ) {
    contents.NodeToNodeEncryptionOptions = deserializeAws_restJson1_1NodeToNodeEncryptionOptions(
      output.NodeToNodeEncryptionOptions,
      context
    );
  }
  if (output.Processing !== undefined && output.Processing !== null) {
    contents.Processing = output.Processing;
  }
  if (
    output.ServiceSoftwareOptions !== undefined &&
    output.ServiceSoftwareOptions !== null
  ) {
    contents.ServiceSoftwareOptions = deserializeAws_restJson1_1ServiceSoftwareOptions(
      output.ServiceSoftwareOptions,
      context
    );
  }
  if (output.SnapshotOptions !== undefined && output.SnapshotOptions !== null) {
    contents.SnapshotOptions = deserializeAws_restJson1_1SnapshotOptions(
      output.SnapshotOptions,
      context
    );
  }
  if (
    output.UpgradeProcessing !== undefined &&
    output.UpgradeProcessing !== null
  ) {
    contents.UpgradeProcessing = output.UpgradeProcessing;
  }
  if (output.VPCOptions !== undefined && output.VPCOptions !== null) {
    contents.VPCOptions = deserializeAws_restJson1_1VPCDerivedInfo(
      output.VPCOptions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ElasticsearchDomainStatusList = (
  output: any,
  context: __SerdeContext
): Array<ElasticsearchDomainStatus> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ElasticsearchDomainStatus(entry, context)
  );
};

const deserializeAws_restJson1_1ElasticsearchInstanceTypeList = (
  output: any,
  context: __SerdeContext
): Array<ESPartitionInstanceType | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1ElasticsearchVersionList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1ElasticsearchVersionStatus = (
  output: any,
  context: __SerdeContext
): ElasticsearchVersionStatus => {
  let contents: any = {
    __type: "ElasticsearchVersionStatus",
    Options: undefined,
    Status: undefined
  };
  if (output.Options !== undefined && output.Options !== null) {
    contents.Options = output.Options;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_restJson1_1OptionStatus(
      output.Status,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1EncryptionAtRestOptions = (
  output: any,
  context: __SerdeContext
): EncryptionAtRestOptions => {
  let contents: any = {
    __type: "EncryptionAtRestOptions",
    Enabled: undefined,
    KmsKeyId: undefined
  };
  if (output.Enabled !== undefined && output.Enabled !== null) {
    contents.Enabled = output.Enabled;
  }
  if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
    contents.KmsKeyId = output.KmsKeyId;
  }
  return contents;
};

const deserializeAws_restJson1_1EncryptionAtRestOptionsStatus = (
  output: any,
  context: __SerdeContext
): EncryptionAtRestOptionsStatus => {
  let contents: any = {
    __type: "EncryptionAtRestOptionsStatus",
    Options: undefined,
    Status: undefined
  };
  if (output.Options !== undefined && output.Options !== null) {
    contents.Options = deserializeAws_restJson1_1EncryptionAtRestOptions(
      output.Options,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_restJson1_1OptionStatus(
      output.Status,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1EndpointsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1InstanceCountLimits = (
  output: any,
  context: __SerdeContext
): InstanceCountLimits => {
  let contents: any = {
    __type: "InstanceCountLimits",
    MaximumInstanceCount: undefined,
    MinimumInstanceCount: undefined
  };
  if (
    output.MaximumInstanceCount !== undefined &&
    output.MaximumInstanceCount !== null
  ) {
    contents.MaximumInstanceCount = output.MaximumInstanceCount;
  }
  if (
    output.MinimumInstanceCount !== undefined &&
    output.MinimumInstanceCount !== null
  ) {
    contents.MinimumInstanceCount = output.MinimumInstanceCount;
  }
  return contents;
};

const deserializeAws_restJson1_1InstanceLimits = (
  output: any,
  context: __SerdeContext
): InstanceLimits => {
  let contents: any = {
    __type: "InstanceLimits",
    InstanceCountLimits: undefined
  };
  if (
    output.InstanceCountLimits !== undefined &&
    output.InstanceCountLimits !== null
  ) {
    contents.InstanceCountLimits = deserializeAws_restJson1_1InstanceCountLimits(
      output.InstanceCountLimits,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Issues = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1LimitValueList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Limits = (
  output: any,
  context: __SerdeContext
): Limits => {
  let contents: any = {
    __type: "Limits",
    AdditionalLimits: undefined,
    InstanceLimits: undefined,
    StorageTypes: undefined
  };
  if (
    output.AdditionalLimits !== undefined &&
    output.AdditionalLimits !== null
  ) {
    contents.AdditionalLimits = deserializeAws_restJson1_1AdditionalLimitList(
      output.AdditionalLimits,
      context
    );
  }
  if (output.InstanceLimits !== undefined && output.InstanceLimits !== null) {
    contents.InstanceLimits = deserializeAws_restJson1_1InstanceLimits(
      output.InstanceLimits,
      context
    );
  }
  if (output.StorageTypes !== undefined && output.StorageTypes !== null) {
    contents.StorageTypes = deserializeAws_restJson1_1StorageTypeList(
      output.StorageTypes,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1LimitsByRole = (
  output: any,
  context: __SerdeContext
): { [key: string]: Limits } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_restJson1_1Limits(output[key], context);
  });
  return mapParams;
};

const deserializeAws_restJson1_1LogPublishingOption = (
  output: any,
  context: __SerdeContext
): LogPublishingOption => {
  let contents: any = {
    __type: "LogPublishingOption",
    CloudWatchLogsLogGroupArn: undefined,
    Enabled: undefined
  };
  if (
    output.CloudWatchLogsLogGroupArn !== undefined &&
    output.CloudWatchLogsLogGroupArn !== null
  ) {
    contents.CloudWatchLogsLogGroupArn = output.CloudWatchLogsLogGroupArn;
  }
  if (output.Enabled !== undefined && output.Enabled !== null) {
    contents.Enabled = output.Enabled;
  }
  return contents;
};

const deserializeAws_restJson1_1LogPublishingOptions = (
  output: any,
  context: __SerdeContext
): { [key: string]: LogPublishingOption } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_restJson1_1LogPublishingOption(
      output[key],
      context
    );
  });
  return mapParams;
};

const deserializeAws_restJson1_1LogPublishingOptionsStatus = (
  output: any,
  context: __SerdeContext
): LogPublishingOptionsStatus => {
  let contents: any = {
    __type: "LogPublishingOptionsStatus",
    Options: undefined,
    Status: undefined
  };
  if (output.Options !== undefined && output.Options !== null) {
    contents.Options = deserializeAws_restJson1_1LogPublishingOptions(
      output.Options,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_restJson1_1OptionStatus(
      output.Status,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1NodeToNodeEncryptionOptions = (
  output: any,
  context: __SerdeContext
): NodeToNodeEncryptionOptions => {
  let contents: any = {
    __type: "NodeToNodeEncryptionOptions",
    Enabled: undefined
  };
  if (output.Enabled !== undefined && output.Enabled !== null) {
    contents.Enabled = output.Enabled;
  }
  return contents;
};

const deserializeAws_restJson1_1NodeToNodeEncryptionOptionsStatus = (
  output: any,
  context: __SerdeContext
): NodeToNodeEncryptionOptionsStatus => {
  let contents: any = {
    __type: "NodeToNodeEncryptionOptionsStatus",
    Options: undefined,
    Status: undefined
  };
  if (output.Options !== undefined && output.Options !== null) {
    contents.Options = deserializeAws_restJson1_1NodeToNodeEncryptionOptions(
      output.Options,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_restJson1_1OptionStatus(
      output.Status,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1OptionStatus = (
  output: any,
  context: __SerdeContext
): OptionStatus => {
  let contents: any = {
    __type: "OptionStatus",
    CreationDate: undefined,
    PendingDeletion: undefined,
    State: undefined,
    UpdateDate: undefined,
    UpdateVersion: undefined
  };
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
  }
  if (output.PendingDeletion !== undefined && output.PendingDeletion !== null) {
    contents.PendingDeletion = output.PendingDeletion;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.UpdateDate !== undefined && output.UpdateDate !== null) {
    contents.UpdateDate = new Date(Math.round(output.UpdateDate * 1000));
  }
  if (output.UpdateVersion !== undefined && output.UpdateVersion !== null) {
    contents.UpdateVersion = output.UpdateVersion;
  }
  return contents;
};

const deserializeAws_restJson1_1RecurringCharge = (
  output: any,
  context: __SerdeContext
): RecurringCharge => {
  let contents: any = {
    __type: "RecurringCharge",
    RecurringChargeAmount: undefined,
    RecurringChargeFrequency: undefined
  };
  if (
    output.RecurringChargeAmount !== undefined &&
    output.RecurringChargeAmount !== null
  ) {
    contents.RecurringChargeAmount = output.RecurringChargeAmount;
  }
  if (
    output.RecurringChargeFrequency !== undefined &&
    output.RecurringChargeFrequency !== null
  ) {
    contents.RecurringChargeFrequency = output.RecurringChargeFrequency;
  }
  return contents;
};

const deserializeAws_restJson1_1RecurringChargeList = (
  output: any,
  context: __SerdeContext
): Array<RecurringCharge> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1RecurringCharge(entry, context)
  );
};

const deserializeAws_restJson1_1ReservedElasticsearchInstance = (
  output: any,
  context: __SerdeContext
): ReservedElasticsearchInstance => {
  let contents: any = {
    __type: "ReservedElasticsearchInstance",
    CurrencyCode: undefined,
    Duration: undefined,
    ElasticsearchInstanceCount: undefined,
    ElasticsearchInstanceType: undefined,
    FixedPrice: undefined,
    PaymentOption: undefined,
    RecurringCharges: undefined,
    ReservationName: undefined,
    ReservedElasticsearchInstanceId: undefined,
    ReservedElasticsearchInstanceOfferingId: undefined,
    StartTime: undefined,
    State: undefined,
    UsagePrice: undefined
  };
  if (output.CurrencyCode !== undefined && output.CurrencyCode !== null) {
    contents.CurrencyCode = output.CurrencyCode;
  }
  if (output.Duration !== undefined && output.Duration !== null) {
    contents.Duration = output.Duration;
  }
  if (
    output.ElasticsearchInstanceCount !== undefined &&
    output.ElasticsearchInstanceCount !== null
  ) {
    contents.ElasticsearchInstanceCount = output.ElasticsearchInstanceCount;
  }
  if (
    output.ElasticsearchInstanceType !== undefined &&
    output.ElasticsearchInstanceType !== null
  ) {
    contents.ElasticsearchInstanceType = output.ElasticsearchInstanceType;
  }
  if (output.FixedPrice !== undefined && output.FixedPrice !== null) {
    contents.FixedPrice = output.FixedPrice;
  }
  if (output.PaymentOption !== undefined && output.PaymentOption !== null) {
    contents.PaymentOption = output.PaymentOption;
  }
  if (
    output.RecurringCharges !== undefined &&
    output.RecurringCharges !== null
  ) {
    contents.RecurringCharges = deserializeAws_restJson1_1RecurringChargeList(
      output.RecurringCharges,
      context
    );
  }
  if (output.ReservationName !== undefined && output.ReservationName !== null) {
    contents.ReservationName = output.ReservationName;
  }
  if (
    output.ReservedElasticsearchInstanceId !== undefined &&
    output.ReservedElasticsearchInstanceId !== null
  ) {
    contents.ReservedElasticsearchInstanceId =
      output.ReservedElasticsearchInstanceId;
  }
  if (
    output.ReservedElasticsearchInstanceOfferingId !== undefined &&
    output.ReservedElasticsearchInstanceOfferingId !== null
  ) {
    contents.ReservedElasticsearchInstanceOfferingId =
      output.ReservedElasticsearchInstanceOfferingId;
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = new Date(Math.round(output.StartTime * 1000));
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.UsagePrice !== undefined && output.UsagePrice !== null) {
    contents.UsagePrice = output.UsagePrice;
  }
  return contents;
};

const deserializeAws_restJson1_1ReservedElasticsearchInstanceList = (
  output: any,
  context: __SerdeContext
): Array<ReservedElasticsearchInstance> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ReservedElasticsearchInstance(entry, context)
  );
};

const deserializeAws_restJson1_1ReservedElasticsearchInstanceOffering = (
  output: any,
  context: __SerdeContext
): ReservedElasticsearchInstanceOffering => {
  let contents: any = {
    __type: "ReservedElasticsearchInstanceOffering",
    CurrencyCode: undefined,
    Duration: undefined,
    ElasticsearchInstanceType: undefined,
    FixedPrice: undefined,
    PaymentOption: undefined,
    RecurringCharges: undefined,
    ReservedElasticsearchInstanceOfferingId: undefined,
    UsagePrice: undefined
  };
  if (output.CurrencyCode !== undefined && output.CurrencyCode !== null) {
    contents.CurrencyCode = output.CurrencyCode;
  }
  if (output.Duration !== undefined && output.Duration !== null) {
    contents.Duration = output.Duration;
  }
  if (
    output.ElasticsearchInstanceType !== undefined &&
    output.ElasticsearchInstanceType !== null
  ) {
    contents.ElasticsearchInstanceType = output.ElasticsearchInstanceType;
  }
  if (output.FixedPrice !== undefined && output.FixedPrice !== null) {
    contents.FixedPrice = output.FixedPrice;
  }
  if (output.PaymentOption !== undefined && output.PaymentOption !== null) {
    contents.PaymentOption = output.PaymentOption;
  }
  if (
    output.RecurringCharges !== undefined &&
    output.RecurringCharges !== null
  ) {
    contents.RecurringCharges = deserializeAws_restJson1_1RecurringChargeList(
      output.RecurringCharges,
      context
    );
  }
  if (
    output.ReservedElasticsearchInstanceOfferingId !== undefined &&
    output.ReservedElasticsearchInstanceOfferingId !== null
  ) {
    contents.ReservedElasticsearchInstanceOfferingId =
      output.ReservedElasticsearchInstanceOfferingId;
  }
  if (output.UsagePrice !== undefined && output.UsagePrice !== null) {
    contents.UsagePrice = output.UsagePrice;
  }
  return contents;
};

const deserializeAws_restJson1_1ReservedElasticsearchInstanceOfferingList = (
  output: any,
  context: __SerdeContext
): Array<ReservedElasticsearchInstanceOffering> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ReservedElasticsearchInstanceOffering(
      entry,
      context
    )
  );
};

const deserializeAws_restJson1_1ServiceSoftwareOptions = (
  output: any,
  context: __SerdeContext
): ServiceSoftwareOptions => {
  let contents: any = {
    __type: "ServiceSoftwareOptions",
    AutomatedUpdateDate: undefined,
    Cancellable: undefined,
    CurrentVersion: undefined,
    Description: undefined,
    NewVersion: undefined,
    UpdateAvailable: undefined,
    UpdateStatus: undefined
  };
  if (
    output.AutomatedUpdateDate !== undefined &&
    output.AutomatedUpdateDate !== null
  ) {
    contents.AutomatedUpdateDate = new Date(
      Math.round(output.AutomatedUpdateDate * 1000)
    );
  }
  if (output.Cancellable !== undefined && output.Cancellable !== null) {
    contents.Cancellable = output.Cancellable;
  }
  if (output.CurrentVersion !== undefined && output.CurrentVersion !== null) {
    contents.CurrentVersion = output.CurrentVersion;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.NewVersion !== undefined && output.NewVersion !== null) {
    contents.NewVersion = output.NewVersion;
  }
  if (output.UpdateAvailable !== undefined && output.UpdateAvailable !== null) {
    contents.UpdateAvailable = output.UpdateAvailable;
  }
  if (output.UpdateStatus !== undefined && output.UpdateStatus !== null) {
    contents.UpdateStatus = output.UpdateStatus;
  }
  return contents;
};

const deserializeAws_restJson1_1SnapshotOptions = (
  output: any,
  context: __SerdeContext
): SnapshotOptions => {
  let contents: any = {
    __type: "SnapshotOptions",
    AutomatedSnapshotStartHour: undefined
  };
  if (
    output.AutomatedSnapshotStartHour !== undefined &&
    output.AutomatedSnapshotStartHour !== null
  ) {
    contents.AutomatedSnapshotStartHour = output.AutomatedSnapshotStartHour;
  }
  return contents;
};

const deserializeAws_restJson1_1SnapshotOptionsStatus = (
  output: any,
  context: __SerdeContext
): SnapshotOptionsStatus => {
  let contents: any = {
    __type: "SnapshotOptionsStatus",
    Options: undefined,
    Status: undefined
  };
  if (output.Options !== undefined && output.Options !== null) {
    contents.Options = deserializeAws_restJson1_1SnapshotOptions(
      output.Options,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_restJson1_1OptionStatus(
      output.Status,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1StorageType = (
  output: any,
  context: __SerdeContext
): StorageType => {
  let contents: any = {
    __type: "StorageType",
    StorageSubTypeName: undefined,
    StorageTypeLimits: undefined,
    StorageTypeName: undefined
  };
  if (
    output.StorageSubTypeName !== undefined &&
    output.StorageSubTypeName !== null
  ) {
    contents.StorageSubTypeName = output.StorageSubTypeName;
  }
  if (
    output.StorageTypeLimits !== undefined &&
    output.StorageTypeLimits !== null
  ) {
    contents.StorageTypeLimits = deserializeAws_restJson1_1StorageTypeLimitList(
      output.StorageTypeLimits,
      context
    );
  }
  if (output.StorageTypeName !== undefined && output.StorageTypeName !== null) {
    contents.StorageTypeName = output.StorageTypeName;
  }
  return contents;
};

const deserializeAws_restJson1_1StorageTypeLimit = (
  output: any,
  context: __SerdeContext
): StorageTypeLimit => {
  let contents: any = {
    __type: "StorageTypeLimit",
    LimitName: undefined,
    LimitValues: undefined
  };
  if (output.LimitName !== undefined && output.LimitName !== null) {
    contents.LimitName = output.LimitName;
  }
  if (output.LimitValues !== undefined && output.LimitValues !== null) {
    contents.LimitValues = deserializeAws_restJson1_1LimitValueList(
      output.LimitValues,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1StorageTypeLimitList = (
  output: any,
  context: __SerdeContext
): Array<StorageTypeLimit> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1StorageTypeLimit(entry, context)
  );
};

const deserializeAws_restJson1_1StorageTypeList = (
  output: any,
  context: __SerdeContext
): Array<StorageType> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1StorageType(entry, context)
  );
};

const deserializeAws_restJson1_1StringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_restJson1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Tag(entry, context)
  );
};

const deserializeAws_restJson1_1UpgradeHistory = (
  output: any,
  context: __SerdeContext
): UpgradeHistory => {
  let contents: any = {
    __type: "UpgradeHistory",
    StartTimestamp: undefined,
    StepsList: undefined,
    UpgradeName: undefined,
    UpgradeStatus: undefined
  };
  if (output.StartTimestamp !== undefined && output.StartTimestamp !== null) {
    contents.StartTimestamp = new Date(
      Math.round(output.StartTimestamp * 1000)
    );
  }
  if (output.StepsList !== undefined && output.StepsList !== null) {
    contents.StepsList = deserializeAws_restJson1_1UpgradeStepsList(
      output.StepsList,
      context
    );
  }
  if (output.UpgradeName !== undefined && output.UpgradeName !== null) {
    contents.UpgradeName = output.UpgradeName;
  }
  if (output.UpgradeStatus !== undefined && output.UpgradeStatus !== null) {
    contents.UpgradeStatus = output.UpgradeStatus;
  }
  return contents;
};

const deserializeAws_restJson1_1UpgradeHistoryList = (
  output: any,
  context: __SerdeContext
): Array<UpgradeHistory> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1UpgradeHistory(entry, context)
  );
};

const deserializeAws_restJson1_1UpgradeStepItem = (
  output: any,
  context: __SerdeContext
): UpgradeStepItem => {
  let contents: any = {
    __type: "UpgradeStepItem",
    Issues: undefined,
    ProgressPercent: undefined,
    UpgradeStep: undefined,
    UpgradeStepStatus: undefined
  };
  if (output.Issues !== undefined && output.Issues !== null) {
    contents.Issues = deserializeAws_restJson1_1Issues(output.Issues, context);
  }
  if (output.ProgressPercent !== undefined && output.ProgressPercent !== null) {
    contents.ProgressPercent = output.ProgressPercent;
  }
  if (output.UpgradeStep !== undefined && output.UpgradeStep !== null) {
    contents.UpgradeStep = output.UpgradeStep;
  }
  if (
    output.UpgradeStepStatus !== undefined &&
    output.UpgradeStepStatus !== null
  ) {
    contents.UpgradeStepStatus = output.UpgradeStepStatus;
  }
  return contents;
};

const deserializeAws_restJson1_1UpgradeStepsList = (
  output: any,
  context: __SerdeContext
): Array<UpgradeStepItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1UpgradeStepItem(entry, context)
  );
};

const deserializeAws_restJson1_1VPCDerivedInfo = (
  output: any,
  context: __SerdeContext
): VPCDerivedInfo => {
  let contents: any = {
    __type: "VPCDerivedInfo",
    AvailabilityZones: undefined,
    SecurityGroupIds: undefined,
    SubnetIds: undefined,
    VPCId: undefined
  };
  if (
    output.AvailabilityZones !== undefined &&
    output.AvailabilityZones !== null
  ) {
    contents.AvailabilityZones = deserializeAws_restJson1_1StringList(
      output.AvailabilityZones,
      context
    );
  }
  if (
    output.SecurityGroupIds !== undefined &&
    output.SecurityGroupIds !== null
  ) {
    contents.SecurityGroupIds = deserializeAws_restJson1_1StringList(
      output.SecurityGroupIds,
      context
    );
  }
  if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
    contents.SubnetIds = deserializeAws_restJson1_1StringList(
      output.SubnetIds,
      context
    );
  }
  if (output.VPCId !== undefined && output.VPCId !== null) {
    contents.VPCId = output.VPCId;
  }
  return contents;
};

const deserializeAws_restJson1_1VPCDerivedInfoStatus = (
  output: any,
  context: __SerdeContext
): VPCDerivedInfoStatus => {
  let contents: any = {
    __type: "VPCDerivedInfoStatus",
    Options: undefined,
    Status: undefined
  };
  if (output.Options !== undefined && output.Options !== null) {
    contents.Options = deserializeAws_restJson1_1VPCDerivedInfo(
      output.Options,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_restJson1_1OptionStatus(
      output.Status,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ZoneAwarenessConfig = (
  output: any,
  context: __SerdeContext
): ZoneAwarenessConfig => {
  let contents: any = {
    __type: "ZoneAwarenessConfig",
    AvailabilityZoneCount: undefined
  };
  if (
    output.AvailabilityZoneCount !== undefined &&
    output.AvailabilityZoneCount !== null
  ) {
    contents.AvailabilityZoneCount = output.AvailabilityZoneCount;
  }
  return contents;
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
