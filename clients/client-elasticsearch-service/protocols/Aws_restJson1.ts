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
  LogType,
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

export const serializeAws_restJson1AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2015-01-01/tags";
  let body: any;
  body = JSON.stringify({
    ...(input.ARN !== undefined && { ARN: input.ARN }),
    ...(input.TagList !== undefined && {
      TagList: serializeAws_restJson1TagList(input.TagList, context)
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

export const serializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand = async (
  input: CancelElasticsearchServiceSoftwareUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2015-01-01/es/serviceSoftwareUpdate/cancel";
  let body: any;
  body = JSON.stringify({
    ...(input.DomainName !== undefined && { DomainName: input.DomainName })
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

export const serializeAws_restJson1CreateElasticsearchDomainCommand = async (
  input: CreateElasticsearchDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2015-01-01/es/domain";
  let body: any;
  body = JSON.stringify({
    ...(input.AccessPolicies !== undefined && {
      AccessPolicies: input.AccessPolicies
    }),
    ...(input.AdvancedOptions !== undefined && {
      AdvancedOptions: serializeAws_restJson1AdvancedOptions(
        input.AdvancedOptions,
        context
      )
    }),
    ...(input.CognitoOptions !== undefined && {
      CognitoOptions: serializeAws_restJson1CognitoOptions(
        input.CognitoOptions,
        context
      )
    }),
    ...(input.DomainEndpointOptions !== undefined && {
      DomainEndpointOptions: serializeAws_restJson1DomainEndpointOptions(
        input.DomainEndpointOptions,
        context
      )
    }),
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.EBSOptions !== undefined && {
      EBSOptions: serializeAws_restJson1EBSOptions(input.EBSOptions, context)
    }),
    ...(input.ElasticsearchClusterConfig !== undefined && {
      ElasticsearchClusterConfig: serializeAws_restJson1ElasticsearchClusterConfig(
        input.ElasticsearchClusterConfig,
        context
      )
    }),
    ...(input.ElasticsearchVersion !== undefined && {
      ElasticsearchVersion: input.ElasticsearchVersion
    }),
    ...(input.EncryptionAtRestOptions !== undefined && {
      EncryptionAtRestOptions: serializeAws_restJson1EncryptionAtRestOptions(
        input.EncryptionAtRestOptions,
        context
      )
    }),
    ...(input.LogPublishingOptions !== undefined && {
      LogPublishingOptions: serializeAws_restJson1LogPublishingOptions(
        input.LogPublishingOptions,
        context
      )
    }),
    ...(input.NodeToNodeEncryptionOptions !== undefined && {
      NodeToNodeEncryptionOptions: serializeAws_restJson1NodeToNodeEncryptionOptions(
        input.NodeToNodeEncryptionOptions,
        context
      )
    }),
    ...(input.SnapshotOptions !== undefined && {
      SnapshotOptions: serializeAws_restJson1SnapshotOptions(
        input.SnapshotOptions,
        context
      )
    }),
    ...(input.VPCOptions !== undefined && {
      VPCOptions: serializeAws_restJson1VPCOptions(input.VPCOptions, context)
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

export const serializeAws_restJson1DeleteElasticsearchDomainCommand = async (
  input: DeleteElasticsearchDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1DeleteElasticsearchServiceRoleCommand = async (
  input: DeleteElasticsearchServiceRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2015-01-01/es/role";
  let body: any;
  body = "{}";
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

export const serializeAws_restJson1DescribeElasticsearchDomainCommand = async (
  input: DescribeElasticsearchDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1DescribeElasticsearchDomainConfigCommand = async (
  input: DescribeElasticsearchDomainConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1DescribeElasticsearchDomainsCommand = async (
  input: DescribeElasticsearchDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2015-01-01/es/domain-info";
  let body: any;
  body = JSON.stringify({
    ...(input.DomainNames !== undefined && {
      DomainNames: serializeAws_restJson1DomainNameList(
        input.DomainNames,
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

export const serializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand = async (
  input: DescribeElasticsearchInstanceTypeLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.DomainName !== undefined && { domainName: input.DomainName })
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

export const serializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand = async (
  input: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2015-01-01/es/reservedInstanceOfferings";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.ReservedElasticsearchInstanceOfferingId !== undefined && {
      offeringId: input.ReservedElasticsearchInstanceOfferingId
    })
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

export const serializeAws_restJson1DescribeReservedElasticsearchInstancesCommand = async (
  input: DescribeReservedElasticsearchInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2015-01-01/es/reservedInstances";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.ReservedElasticsearchInstanceId !== undefined && {
      reservationId: input.ReservedElasticsearchInstanceId
    })
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

export const serializeAws_restJson1GetCompatibleElasticsearchVersionsCommand = async (
  input: GetCompatibleElasticsearchVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2015-01-01/es/compatibleVersions";
  const query: any = {
    ...(input.DomainName !== undefined && { domainName: input.DomainName })
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

export const serializeAws_restJson1GetUpgradeHistoryCommand = async (
  input: GetUpgradeHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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

export const serializeAws_restJson1GetUpgradeStatusCommand = async (
  input: GetUpgradeStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1ListDomainNamesCommand = async (
  input: ListDomainNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2015-01-01/domain";
  let body: any;
  body = "{}";
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

export const serializeAws_restJson1ListElasticsearchInstanceTypesCommand = async (
  input: ListElasticsearchInstanceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.DomainName !== undefined && { domainName: input.DomainName }),
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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

export const serializeAws_restJson1ListElasticsearchVersionsCommand = async (
  input: ListElasticsearchVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2015-01-01/es/versions";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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

export const serializeAws_restJson1ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2015-01-01/tags";
  const query: any = {
    ...(input.ARN !== undefined && { arn: input.ARN })
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

export const serializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand = async (
  input: PurchaseReservedElasticsearchInstanceOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2015-01-01/es/purchaseReservedInstanceOffering";
  let body: any;
  body = JSON.stringify({
    ...(input.InstanceCount !== undefined && {
      InstanceCount: input.InstanceCount
    }),
    ...(input.ReservationName !== undefined && {
      ReservationName: input.ReservationName
    }),
    ...(input.ReservedElasticsearchInstanceOfferingId !== undefined && {
      ReservedElasticsearchInstanceOfferingId:
        input.ReservedElasticsearchInstanceOfferingId
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

export const serializeAws_restJson1RemoveTagsCommand = async (
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2015-01-01/tags-removal";
  let body: any;
  body = JSON.stringify({
    ...(input.ARN !== undefined && { ARN: input.ARN }),
    ...(input.TagKeys !== undefined && {
      TagKeys: serializeAws_restJson1StringList(input.TagKeys, context)
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

export const serializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand = async (
  input: StartElasticsearchServiceSoftwareUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2015-01-01/es/serviceSoftwareUpdate/start";
  let body: any;
  body = JSON.stringify({
    ...(input.DomainName !== undefined && { DomainName: input.DomainName })
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

export const serializeAws_restJson1UpdateElasticsearchDomainConfigCommand = async (
  input: UpdateElasticsearchDomainConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.AccessPolicies !== undefined && {
      AccessPolicies: input.AccessPolicies
    }),
    ...(input.AdvancedOptions !== undefined && {
      AdvancedOptions: serializeAws_restJson1AdvancedOptions(
        input.AdvancedOptions,
        context
      )
    }),
    ...(input.CognitoOptions !== undefined && {
      CognitoOptions: serializeAws_restJson1CognitoOptions(
        input.CognitoOptions,
        context
      )
    }),
    ...(input.DomainEndpointOptions !== undefined && {
      DomainEndpointOptions: serializeAws_restJson1DomainEndpointOptions(
        input.DomainEndpointOptions,
        context
      )
    }),
    ...(input.EBSOptions !== undefined && {
      EBSOptions: serializeAws_restJson1EBSOptions(input.EBSOptions, context)
    }),
    ...(input.ElasticsearchClusterConfig !== undefined && {
      ElasticsearchClusterConfig: serializeAws_restJson1ElasticsearchClusterConfig(
        input.ElasticsearchClusterConfig,
        context
      )
    }),
    ...(input.LogPublishingOptions !== undefined && {
      LogPublishingOptions: serializeAws_restJson1LogPublishingOptions(
        input.LogPublishingOptions,
        context
      )
    }),
    ...(input.SnapshotOptions !== undefined && {
      SnapshotOptions: serializeAws_restJson1SnapshotOptions(
        input.SnapshotOptions,
        context
      )
    }),
    ...(input.VPCOptions !== undefined && {
      VPCOptions: serializeAws_restJson1VPCOptions(input.VPCOptions, context)
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

export const serializeAws_restJson1UpgradeElasticsearchDomainCommand = async (
  input: UpgradeElasticsearchDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2015-01-01/es/upgradeDomain";
  let body: any;
  body = JSON.stringify({
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.PerformCheckOnly !== undefined && {
      PerformCheckOnly: input.PerformCheckOnly
    }),
    ...(input.TargetVersion !== undefined && {
      TargetVersion: input.TargetVersion
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

export const deserializeAws_restJson1AddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1AddTagsCommandError(output, context);
  }
  const contents: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AddTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.elasticsearchservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelElasticsearchServiceSoftwareUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommandError(
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
    contents.ServiceSoftwareOptions = deserializeAws_restJson1ServiceSoftwareOptions(
      data.ServiceSoftwareOptions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelElasticsearchServiceSoftwareUpdateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1CreateElasticsearchDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateElasticsearchDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateElasticsearchDomainCommandError(
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
    contents.DomainStatus = deserializeAws_restJson1ElasticsearchDomainStatus(
      data.DomainStatus,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateElasticsearchDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateElasticsearchDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.elasticsearchservice#InvalidTypeException":
      response = {
        ...(await deserializeAws_restJson1InvalidTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.elasticsearchservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.elasticsearchservice#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1DeleteElasticsearchDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteElasticsearchDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteElasticsearchDomainCommandError(
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
    contents.DomainStatus = deserializeAws_restJson1ElasticsearchDomainStatus(
      data.DomainStatus,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteElasticsearchDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteElasticsearchDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1DeleteElasticsearchServiceRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteElasticsearchServiceRoleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteElasticsearchServiceRoleCommandError(
      output,
      context
    );
  }
  const contents: DeleteElasticsearchServiceRoleCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteElasticsearchServiceRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteElasticsearchServiceRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1DescribeElasticsearchDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeElasticsearchDomainCommandError(
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
    contents.DomainStatus = deserializeAws_restJson1ElasticsearchDomainStatus(
      data.DomainStatus,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeElasticsearchDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1DescribeElasticsearchDomainConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeElasticsearchDomainConfigCommandError(
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
    contents.DomainConfig = deserializeAws_restJson1ElasticsearchDomainConfig(
      data.DomainConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeElasticsearchDomainConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1DescribeElasticsearchDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeElasticsearchDomainsCommandError(
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
    contents.DomainStatusList = deserializeAws_restJson1ElasticsearchDomainStatusList(
      data.DomainStatusList,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeElasticsearchDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchInstanceTypeLimitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommandError(
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
    contents.LimitsByRole = deserializeAws_restJson1LimitsByRole(
      data.LimitsByRole,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchInstanceTypeLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.elasticsearchservice#InvalidTypeException":
      response = {
        ...(await deserializeAws_restJson1InvalidTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.elasticsearchservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedElasticsearchInstanceOfferingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommandError(
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
    contents.ReservedElasticsearchInstanceOfferings = deserializeAws_restJson1ReservedElasticsearchInstanceOfferingList(
      data.ReservedElasticsearchInstanceOfferings,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedElasticsearchInstanceOfferingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedElasticsearchInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommandError(
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
    contents.ReservedElasticsearchInstances = deserializeAws_restJson1ReservedElasticsearchInstanceList(
      data.ReservedElasticsearchInstances,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedElasticsearchInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCompatibleElasticsearchVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommandError(
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
    contents.CompatibleElasticsearchVersions = deserializeAws_restJson1CompatibleElasticsearchVersionsList(
      data.CompatibleElasticsearchVersions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCompatibleElasticsearchVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1GetUpgradeHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetUpgradeHistoryCommandError(
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
    contents.UpgradeHistories = deserializeAws_restJson1UpgradeHistoryList(
      data.UpgradeHistories,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetUpgradeHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1GetUpgradeStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetUpgradeStatusCommandError(
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
};

const deserializeAws_restJson1GetUpgradeStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1ListDomainNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListDomainNamesCommandError(output, context);
  }
  const contents: ListDomainNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDomainNamesResponse",
    DomainNames: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DomainNames !== undefined && data.DomainNames !== null) {
    contents.DomainNames = deserializeAws_restJson1DomainInfoList(
      data.DomainNames,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDomainNamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1ListElasticsearchInstanceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListElasticsearchInstanceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListElasticsearchInstanceTypesCommandError(
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
    contents.ElasticsearchInstanceTypes = deserializeAws_restJson1ElasticsearchInstanceTypeList(
      data.ElasticsearchInstanceTypes,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListElasticsearchInstanceTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListElasticsearchInstanceTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1ListElasticsearchVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListElasticsearchVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListElasticsearchVersionsCommandError(
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
    contents.ElasticsearchVersions = deserializeAws_restJson1ElasticsearchVersionList(
      data.ElasticsearchVersions,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListElasticsearchVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListElasticsearchVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListTagsCommandError(output, context);
  }
  const contents: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsResponse",
    TagList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.TagList !== undefined && data.TagList !== null) {
    contents.TagList = deserializeAws_restJson1TagList(data.TagList, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedElasticsearchInstanceOfferingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommandError(
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
};

const deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedElasticsearchInstanceOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.elasticsearchservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.elasticsearchservice#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1RemoveTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1RemoveTagsCommandError(output, context);
  }
  const contents: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartElasticsearchServiceSoftwareUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommandError(
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
    contents.ServiceSoftwareOptions = deserializeAws_restJson1ServiceSoftwareOptions(
      data.ServiceSoftwareOptions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartElasticsearchServiceSoftwareUpdateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1UpdateElasticsearchDomainConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateElasticsearchDomainConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateElasticsearchDomainConfigCommandError(
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
    contents.DomainConfig = deserializeAws_restJson1ElasticsearchDomainConfig(
      data.DomainConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateElasticsearchDomainConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateElasticsearchDomainConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.elasticsearchservice#InvalidTypeException":
      response = {
        ...(await deserializeAws_restJson1InvalidTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.elasticsearchservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1UpgradeElasticsearchDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeElasticsearchDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpgradeElasticsearchDomainCommandError(
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
};

const deserializeAws_restJson1UpgradeElasticsearchDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeElasticsearchDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.elasticsearchservice#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

const deserializeAws_restJson1BaseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BaseException> => {
  const contents: BaseException = {
    name: "BaseException",
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

const deserializeAws_restJson1DisabledOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DisabledOperationException> => {
  const contents: DisabledOperationException = {
    name: "DisabledOperationException",
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

const deserializeAws_restJson1InternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const contents: InternalException = {
    name: "InternalException",
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

const deserializeAws_restJson1InvalidTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTypeException> => {
  const contents: InvalidTypeException = {
    name: "InvalidTypeException",
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

const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
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
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
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

const serializeAws_restJson1AdvancedOptions = (
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

const serializeAws_restJson1CognitoOptions = (
  input: CognitoOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.IdentityPoolId !== undefined && {
      IdentityPoolId: input.IdentityPoolId
    }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
    ...(input.UserPoolId !== undefined && { UserPoolId: input.UserPoolId })
  };
};

const serializeAws_restJson1DomainEndpointOptions = (
  input: DomainEndpointOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.EnforceHTTPS !== undefined && {
      EnforceHTTPS: input.EnforceHTTPS
    }),
    ...(input.TLSSecurityPolicy !== undefined && {
      TLSSecurityPolicy: input.TLSSecurityPolicy
    })
  };
};

const serializeAws_restJson1DomainNameList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1EBSOptions = (
  input: EBSOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.EBSEnabled !== undefined && { EBSEnabled: input.EBSEnabled }),
    ...(input.Iops !== undefined && { Iops: input.Iops }),
    ...(input.VolumeSize !== undefined && { VolumeSize: input.VolumeSize }),
    ...(input.VolumeType !== undefined && { VolumeType: input.VolumeType })
  };
};

const serializeAws_restJson1ElasticsearchClusterConfig = (
  input: ElasticsearchClusterConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.DedicatedMasterCount !== undefined && {
      DedicatedMasterCount: input.DedicatedMasterCount
    }),
    ...(input.DedicatedMasterEnabled !== undefined && {
      DedicatedMasterEnabled: input.DedicatedMasterEnabled
    }),
    ...(input.DedicatedMasterType !== undefined && {
      DedicatedMasterType: input.DedicatedMasterType
    }),
    ...(input.InstanceCount !== undefined && {
      InstanceCount: input.InstanceCount
    }),
    ...(input.InstanceType !== undefined && {
      InstanceType: input.InstanceType
    }),
    ...(input.WarmCount !== undefined && { WarmCount: input.WarmCount }),
    ...(input.WarmEnabled !== undefined && { WarmEnabled: input.WarmEnabled }),
    ...(input.WarmType !== undefined && { WarmType: input.WarmType }),
    ...(input.ZoneAwarenessConfig !== undefined && {
      ZoneAwarenessConfig: serializeAws_restJson1ZoneAwarenessConfig(
        input.ZoneAwarenessConfig,
        context
      )
    }),
    ...(input.ZoneAwarenessEnabled !== undefined && {
      ZoneAwarenessEnabled: input.ZoneAwarenessEnabled
    })
  };
};

const serializeAws_restJson1EncryptionAtRestOptions = (
  input: EncryptionAtRestOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.KmsKeyId !== undefined && { KmsKeyId: input.KmsKeyId })
  };
};

const serializeAws_restJson1LogPublishingOption = (
  input: LogPublishingOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLogsLogGroupArn !== undefined && {
      CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn
    }),
    ...(input.Enabled !== undefined && { Enabled: input.Enabled })
  };
};

const serializeAws_restJson1LogPublishingOptions = (
  input: { [key: string]: LogPublishingOption },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (
      acc: { [key: string]: LogPublishingOption },
      [key, value]: [LogType | string, any]
    ) => ({
      ...acc,
      [key]: serializeAws_restJson1LogPublishingOption(value, context)
    }),
    {}
  );
};

const serializeAws_restJson1NodeToNodeEncryptionOptions = (
  input: NodeToNodeEncryptionOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && { Enabled: input.Enabled })
  };
};

const serializeAws_restJson1SnapshotOptions = (
  input: SnapshotOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomatedSnapshotStartHour !== undefined && {
      AutomatedSnapshotStartHour: input.AutomatedSnapshotStartHour
    })
  };
};

const serializeAws_restJson1StringList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_restJson1TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Tag(entry, context));
};

const serializeAws_restJson1VPCOptions = (
  input: VPCOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroupIds !== undefined && {
      SecurityGroupIds: serializeAws_restJson1StringList(
        input.SecurityGroupIds,
        context
      )
    }),
    ...(input.SubnetIds !== undefined && {
      SubnetIds: serializeAws_restJson1StringList(input.SubnetIds, context)
    })
  };
};

const serializeAws_restJson1ZoneAwarenessConfig = (
  input: ZoneAwarenessConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZoneCount !== undefined && {
      AvailabilityZoneCount: input.AvailabilityZoneCount
    })
  };
};

const deserializeAws_restJson1AccessPoliciesStatus = (
  output: any,
  context: __SerdeContext
): AccessPoliciesStatus => {
  return {
    __type: "AccessPoliciesStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? output.Options
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1AdditionalLimit = (
  output: any,
  context: __SerdeContext
): AdditionalLimit => {
  return {
    __type: "AdditionalLimit",
    LimitName:
      output.LimitName !== undefined && output.LimitName !== null
        ? output.LimitName
        : undefined,
    LimitValues:
      output.LimitValues !== undefined && output.LimitValues !== null
        ? deserializeAws_restJson1LimitValueList(output.LimitValues, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1AdditionalLimitList = (
  output: any,
  context: __SerdeContext
): AdditionalLimit[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1AdditionalLimit(entry, context)
  );
};

const deserializeAws_restJson1AdvancedOptions = (
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

const deserializeAws_restJson1AdvancedOptionsStatus = (
  output: any,
  context: __SerdeContext
): AdvancedOptionsStatus => {
  return {
    __type: "AdvancedOptionsStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1AdvancedOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1CognitoOptions = (
  output: any,
  context: __SerdeContext
): CognitoOptions => {
  return {
    __type: "CognitoOptions",
    Enabled:
      output.Enabled !== undefined && output.Enabled !== null
        ? output.Enabled
        : undefined,
    IdentityPoolId:
      output.IdentityPoolId !== undefined && output.IdentityPoolId !== null
        ? output.IdentityPoolId
        : undefined,
    RoleArn:
      output.RoleArn !== undefined && output.RoleArn !== null
        ? output.RoleArn
        : undefined,
    UserPoolId:
      output.UserPoolId !== undefined && output.UserPoolId !== null
        ? output.UserPoolId
        : undefined
  } as any;
};

const deserializeAws_restJson1CognitoOptionsStatus = (
  output: any,
  context: __SerdeContext
): CognitoOptionsStatus => {
  return {
    __type: "CognitoOptionsStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1CognitoOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1CompatibleElasticsearchVersionsList = (
  output: any,
  context: __SerdeContext
): CompatibleVersionsMap[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1CompatibleVersionsMap(entry, context)
  );
};

const deserializeAws_restJson1CompatibleVersionsMap = (
  output: any,
  context: __SerdeContext
): CompatibleVersionsMap => {
  return {
    __type: "CompatibleVersionsMap",
    SourceVersion:
      output.SourceVersion !== undefined && output.SourceVersion !== null
        ? output.SourceVersion
        : undefined,
    TargetVersions:
      output.TargetVersions !== undefined && output.TargetVersions !== null
        ? deserializeAws_restJson1ElasticsearchVersionList(
            output.TargetVersions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1DomainEndpointOptions = (
  output: any,
  context: __SerdeContext
): DomainEndpointOptions => {
  return {
    __type: "DomainEndpointOptions",
    EnforceHTTPS:
      output.EnforceHTTPS !== undefined && output.EnforceHTTPS !== null
        ? output.EnforceHTTPS
        : undefined,
    TLSSecurityPolicy:
      output.TLSSecurityPolicy !== undefined &&
      output.TLSSecurityPolicy !== null
        ? output.TLSSecurityPolicy
        : undefined
  } as any;
};

const deserializeAws_restJson1DomainEndpointOptionsStatus = (
  output: any,
  context: __SerdeContext
): DomainEndpointOptionsStatus => {
  return {
    __type: "DomainEndpointOptionsStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1DomainEndpointOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1DomainInfo = (
  output: any,
  context: __SerdeContext
): DomainInfo => {
  return {
    __type: "DomainInfo",
    DomainName:
      output.DomainName !== undefined && output.DomainName !== null
        ? output.DomainName
        : undefined
  } as any;
};

const deserializeAws_restJson1DomainInfoList = (
  output: any,
  context: __SerdeContext
): DomainInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1DomainInfo(entry, context)
  );
};

const deserializeAws_restJson1EBSOptions = (
  output: any,
  context: __SerdeContext
): EBSOptions => {
  return {
    __type: "EBSOptions",
    EBSEnabled:
      output.EBSEnabled !== undefined && output.EBSEnabled !== null
        ? output.EBSEnabled
        : undefined,
    Iops:
      output.Iops !== undefined && output.Iops !== null
        ? output.Iops
        : undefined,
    VolumeSize:
      output.VolumeSize !== undefined && output.VolumeSize !== null
        ? output.VolumeSize
        : undefined,
    VolumeType:
      output.VolumeType !== undefined && output.VolumeType !== null
        ? output.VolumeType
        : undefined
  } as any;
};

const deserializeAws_restJson1EBSOptionsStatus = (
  output: any,
  context: __SerdeContext
): EBSOptionsStatus => {
  return {
    __type: "EBSOptionsStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1EBSOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1ElasticsearchClusterConfig = (
  output: any,
  context: __SerdeContext
): ElasticsearchClusterConfig => {
  return {
    __type: "ElasticsearchClusterConfig",
    DedicatedMasterCount:
      output.DedicatedMasterCount !== undefined &&
      output.DedicatedMasterCount !== null
        ? output.DedicatedMasterCount
        : undefined,
    DedicatedMasterEnabled:
      output.DedicatedMasterEnabled !== undefined &&
      output.DedicatedMasterEnabled !== null
        ? output.DedicatedMasterEnabled
        : undefined,
    DedicatedMasterType:
      output.DedicatedMasterType !== undefined &&
      output.DedicatedMasterType !== null
        ? output.DedicatedMasterType
        : undefined,
    InstanceCount:
      output.InstanceCount !== undefined && output.InstanceCount !== null
        ? output.InstanceCount
        : undefined,
    InstanceType:
      output.InstanceType !== undefined && output.InstanceType !== null
        ? output.InstanceType
        : undefined,
    WarmCount:
      output.WarmCount !== undefined && output.WarmCount !== null
        ? output.WarmCount
        : undefined,
    WarmEnabled:
      output.WarmEnabled !== undefined && output.WarmEnabled !== null
        ? output.WarmEnabled
        : undefined,
    WarmType:
      output.WarmType !== undefined && output.WarmType !== null
        ? output.WarmType
        : undefined,
    ZoneAwarenessConfig:
      output.ZoneAwarenessConfig !== undefined &&
      output.ZoneAwarenessConfig !== null
        ? deserializeAws_restJson1ZoneAwarenessConfig(
            output.ZoneAwarenessConfig,
            context
          )
        : undefined,
    ZoneAwarenessEnabled:
      output.ZoneAwarenessEnabled !== undefined &&
      output.ZoneAwarenessEnabled !== null
        ? output.ZoneAwarenessEnabled
        : undefined
  } as any;
};

const deserializeAws_restJson1ElasticsearchClusterConfigStatus = (
  output: any,
  context: __SerdeContext
): ElasticsearchClusterConfigStatus => {
  return {
    __type: "ElasticsearchClusterConfigStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1ElasticsearchClusterConfig(
            output.Options,
            context
          )
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1ElasticsearchDomainConfig = (
  output: any,
  context: __SerdeContext
): ElasticsearchDomainConfig => {
  return {
    __type: "ElasticsearchDomainConfig",
    AccessPolicies:
      output.AccessPolicies !== undefined && output.AccessPolicies !== null
        ? deserializeAws_restJson1AccessPoliciesStatus(
            output.AccessPolicies,
            context
          )
        : undefined,
    AdvancedOptions:
      output.AdvancedOptions !== undefined && output.AdvancedOptions !== null
        ? deserializeAws_restJson1AdvancedOptionsStatus(
            output.AdvancedOptions,
            context
          )
        : undefined,
    CognitoOptions:
      output.CognitoOptions !== undefined && output.CognitoOptions !== null
        ? deserializeAws_restJson1CognitoOptionsStatus(
            output.CognitoOptions,
            context
          )
        : undefined,
    DomainEndpointOptions:
      output.DomainEndpointOptions !== undefined &&
      output.DomainEndpointOptions !== null
        ? deserializeAws_restJson1DomainEndpointOptionsStatus(
            output.DomainEndpointOptions,
            context
          )
        : undefined,
    EBSOptions:
      output.EBSOptions !== undefined && output.EBSOptions !== null
        ? deserializeAws_restJson1EBSOptionsStatus(output.EBSOptions, context)
        : undefined,
    ElasticsearchClusterConfig:
      output.ElasticsearchClusterConfig !== undefined &&
      output.ElasticsearchClusterConfig !== null
        ? deserializeAws_restJson1ElasticsearchClusterConfigStatus(
            output.ElasticsearchClusterConfig,
            context
          )
        : undefined,
    ElasticsearchVersion:
      output.ElasticsearchVersion !== undefined &&
      output.ElasticsearchVersion !== null
        ? deserializeAws_restJson1ElasticsearchVersionStatus(
            output.ElasticsearchVersion,
            context
          )
        : undefined,
    EncryptionAtRestOptions:
      output.EncryptionAtRestOptions !== undefined &&
      output.EncryptionAtRestOptions !== null
        ? deserializeAws_restJson1EncryptionAtRestOptionsStatus(
            output.EncryptionAtRestOptions,
            context
          )
        : undefined,
    LogPublishingOptions:
      output.LogPublishingOptions !== undefined &&
      output.LogPublishingOptions !== null
        ? deserializeAws_restJson1LogPublishingOptionsStatus(
            output.LogPublishingOptions,
            context
          )
        : undefined,
    NodeToNodeEncryptionOptions:
      output.NodeToNodeEncryptionOptions !== undefined &&
      output.NodeToNodeEncryptionOptions !== null
        ? deserializeAws_restJson1NodeToNodeEncryptionOptionsStatus(
            output.NodeToNodeEncryptionOptions,
            context
          )
        : undefined,
    SnapshotOptions:
      output.SnapshotOptions !== undefined && output.SnapshotOptions !== null
        ? deserializeAws_restJson1SnapshotOptionsStatus(
            output.SnapshotOptions,
            context
          )
        : undefined,
    VPCOptions:
      output.VPCOptions !== undefined && output.VPCOptions !== null
        ? deserializeAws_restJson1VPCDerivedInfoStatus(
            output.VPCOptions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1ElasticsearchDomainStatus = (
  output: any,
  context: __SerdeContext
): ElasticsearchDomainStatus => {
  return {
    __type: "ElasticsearchDomainStatus",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    AccessPolicies:
      output.AccessPolicies !== undefined && output.AccessPolicies !== null
        ? output.AccessPolicies
        : undefined,
    AdvancedOptions:
      output.AdvancedOptions !== undefined && output.AdvancedOptions !== null
        ? deserializeAws_restJson1AdvancedOptions(
            output.AdvancedOptions,
            context
          )
        : undefined,
    CognitoOptions:
      output.CognitoOptions !== undefined && output.CognitoOptions !== null
        ? deserializeAws_restJson1CognitoOptions(output.CognitoOptions, context)
        : undefined,
    Created:
      output.Created !== undefined && output.Created !== null
        ? output.Created
        : undefined,
    Deleted:
      output.Deleted !== undefined && output.Deleted !== null
        ? output.Deleted
        : undefined,
    DomainEndpointOptions:
      output.DomainEndpointOptions !== undefined &&
      output.DomainEndpointOptions !== null
        ? deserializeAws_restJson1DomainEndpointOptions(
            output.DomainEndpointOptions,
            context
          )
        : undefined,
    DomainId:
      output.DomainId !== undefined && output.DomainId !== null
        ? output.DomainId
        : undefined,
    DomainName:
      output.DomainName !== undefined && output.DomainName !== null
        ? output.DomainName
        : undefined,
    EBSOptions:
      output.EBSOptions !== undefined && output.EBSOptions !== null
        ? deserializeAws_restJson1EBSOptions(output.EBSOptions, context)
        : undefined,
    ElasticsearchClusterConfig:
      output.ElasticsearchClusterConfig !== undefined &&
      output.ElasticsearchClusterConfig !== null
        ? deserializeAws_restJson1ElasticsearchClusterConfig(
            output.ElasticsearchClusterConfig,
            context
          )
        : undefined,
    ElasticsearchVersion:
      output.ElasticsearchVersion !== undefined &&
      output.ElasticsearchVersion !== null
        ? output.ElasticsearchVersion
        : undefined,
    EncryptionAtRestOptions:
      output.EncryptionAtRestOptions !== undefined &&
      output.EncryptionAtRestOptions !== null
        ? deserializeAws_restJson1EncryptionAtRestOptions(
            output.EncryptionAtRestOptions,
            context
          )
        : undefined,
    Endpoint:
      output.Endpoint !== undefined && output.Endpoint !== null
        ? output.Endpoint
        : undefined,
    Endpoints:
      output.Endpoints !== undefined && output.Endpoints !== null
        ? deserializeAws_restJson1EndpointsMap(output.Endpoints, context)
        : undefined,
    LogPublishingOptions:
      output.LogPublishingOptions !== undefined &&
      output.LogPublishingOptions !== null
        ? deserializeAws_restJson1LogPublishingOptions(
            output.LogPublishingOptions,
            context
          )
        : undefined,
    NodeToNodeEncryptionOptions:
      output.NodeToNodeEncryptionOptions !== undefined &&
      output.NodeToNodeEncryptionOptions !== null
        ? deserializeAws_restJson1NodeToNodeEncryptionOptions(
            output.NodeToNodeEncryptionOptions,
            context
          )
        : undefined,
    Processing:
      output.Processing !== undefined && output.Processing !== null
        ? output.Processing
        : undefined,
    ServiceSoftwareOptions:
      output.ServiceSoftwareOptions !== undefined &&
      output.ServiceSoftwareOptions !== null
        ? deserializeAws_restJson1ServiceSoftwareOptions(
            output.ServiceSoftwareOptions,
            context
          )
        : undefined,
    SnapshotOptions:
      output.SnapshotOptions !== undefined && output.SnapshotOptions !== null
        ? deserializeAws_restJson1SnapshotOptions(
            output.SnapshotOptions,
            context
          )
        : undefined,
    UpgradeProcessing:
      output.UpgradeProcessing !== undefined &&
      output.UpgradeProcessing !== null
        ? output.UpgradeProcessing
        : undefined,
    VPCOptions:
      output.VPCOptions !== undefined && output.VPCOptions !== null
        ? deserializeAws_restJson1VPCDerivedInfo(output.VPCOptions, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1ElasticsearchDomainStatusList = (
  output: any,
  context: __SerdeContext
): ElasticsearchDomainStatus[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ElasticsearchDomainStatus(entry, context)
  );
};

const deserializeAws_restJson1ElasticsearchInstanceTypeList = (
  output: any,
  context: __SerdeContext
): (ESPartitionInstanceType | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1ElasticsearchVersionList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1ElasticsearchVersionStatus = (
  output: any,
  context: __SerdeContext
): ElasticsearchVersionStatus => {
  return {
    __type: "ElasticsearchVersionStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? output.Options
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1EncryptionAtRestOptions = (
  output: any,
  context: __SerdeContext
): EncryptionAtRestOptions => {
  return {
    __type: "EncryptionAtRestOptions",
    Enabled:
      output.Enabled !== undefined && output.Enabled !== null
        ? output.Enabled
        : undefined,
    KmsKeyId:
      output.KmsKeyId !== undefined && output.KmsKeyId !== null
        ? output.KmsKeyId
        : undefined
  } as any;
};

const deserializeAws_restJson1EncryptionAtRestOptionsStatus = (
  output: any,
  context: __SerdeContext
): EncryptionAtRestOptionsStatus => {
  return {
    __type: "EncryptionAtRestOptionsStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1EncryptionAtRestOptions(
            output.Options,
            context
          )
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1EndpointsMap = (
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

const deserializeAws_restJson1InstanceCountLimits = (
  output: any,
  context: __SerdeContext
): InstanceCountLimits => {
  return {
    __type: "InstanceCountLimits",
    MaximumInstanceCount:
      output.MaximumInstanceCount !== undefined &&
      output.MaximumInstanceCount !== null
        ? output.MaximumInstanceCount
        : undefined,
    MinimumInstanceCount:
      output.MinimumInstanceCount !== undefined &&
      output.MinimumInstanceCount !== null
        ? output.MinimumInstanceCount
        : undefined
  } as any;
};

const deserializeAws_restJson1InstanceLimits = (
  output: any,
  context: __SerdeContext
): InstanceLimits => {
  return {
    __type: "InstanceLimits",
    InstanceCountLimits:
      output.InstanceCountLimits !== undefined &&
      output.InstanceCountLimits !== null
        ? deserializeAws_restJson1InstanceCountLimits(
            output.InstanceCountLimits,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1Issues = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1Limits = (
  output: any,
  context: __SerdeContext
): Limits => {
  return {
    __type: "Limits",
    AdditionalLimits:
      output.AdditionalLimits !== undefined && output.AdditionalLimits !== null
        ? deserializeAws_restJson1AdditionalLimitList(
            output.AdditionalLimits,
            context
          )
        : undefined,
    InstanceLimits:
      output.InstanceLimits !== undefined && output.InstanceLimits !== null
        ? deserializeAws_restJson1InstanceLimits(output.InstanceLimits, context)
        : undefined,
    StorageTypes:
      output.StorageTypes !== undefined && output.StorageTypes !== null
        ? deserializeAws_restJson1StorageTypeList(output.StorageTypes, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1LimitsByRole = (
  output: any,
  context: __SerdeContext
): { [key: string]: Limits } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: Limits }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1Limits(value, context)
    }),
    {}
  );
};

const deserializeAws_restJson1LimitValueList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1LogPublishingOption = (
  output: any,
  context: __SerdeContext
): LogPublishingOption => {
  return {
    __type: "LogPublishingOption",
    CloudWatchLogsLogGroupArn:
      output.CloudWatchLogsLogGroupArn !== undefined &&
      output.CloudWatchLogsLogGroupArn !== null
        ? output.CloudWatchLogsLogGroupArn
        : undefined,
    Enabled:
      output.Enabled !== undefined && output.Enabled !== null
        ? output.Enabled
        : undefined
  } as any;
};

const deserializeAws_restJson1LogPublishingOptions = (
  output: any,
  context: __SerdeContext
): { [key: string]: LogPublishingOption } => {
  return Object.entries(output).reduce(
    (
      acc: { [key: string]: LogPublishingOption },
      [key, value]: [LogType | string, any]
    ) => ({
      ...acc,
      [key]: deserializeAws_restJson1LogPublishingOption(value, context)
    }),
    {}
  );
};

const deserializeAws_restJson1LogPublishingOptionsStatus = (
  output: any,
  context: __SerdeContext
): LogPublishingOptionsStatus => {
  return {
    __type: "LogPublishingOptionsStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1LogPublishingOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1NodeToNodeEncryptionOptions = (
  output: any,
  context: __SerdeContext
): NodeToNodeEncryptionOptions => {
  return {
    __type: "NodeToNodeEncryptionOptions",
    Enabled:
      output.Enabled !== undefined && output.Enabled !== null
        ? output.Enabled
        : undefined
  } as any;
};

const deserializeAws_restJson1NodeToNodeEncryptionOptionsStatus = (
  output: any,
  context: __SerdeContext
): NodeToNodeEncryptionOptionsStatus => {
  return {
    __type: "NodeToNodeEncryptionOptionsStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1NodeToNodeEncryptionOptions(
            output.Options,
            context
          )
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1OptionStatus = (
  output: any,
  context: __SerdeContext
): OptionStatus => {
  return {
    __type: "OptionStatus",
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    PendingDeletion:
      output.PendingDeletion !== undefined && output.PendingDeletion !== null
        ? output.PendingDeletion
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    UpdateDate:
      output.UpdateDate !== undefined && output.UpdateDate !== null
        ? new Date(Math.round(output.UpdateDate * 1000))
        : undefined,
    UpdateVersion:
      output.UpdateVersion !== undefined && output.UpdateVersion !== null
        ? output.UpdateVersion
        : undefined
  } as any;
};

const deserializeAws_restJson1RecurringCharge = (
  output: any,
  context: __SerdeContext
): RecurringCharge => {
  return {
    __type: "RecurringCharge",
    RecurringChargeAmount:
      output.RecurringChargeAmount !== undefined &&
      output.RecurringChargeAmount !== null
        ? output.RecurringChargeAmount
        : undefined,
    RecurringChargeFrequency:
      output.RecurringChargeFrequency !== undefined &&
      output.RecurringChargeFrequency !== null
        ? output.RecurringChargeFrequency
        : undefined
  } as any;
};

const deserializeAws_restJson1RecurringChargeList = (
  output: any,
  context: __SerdeContext
): RecurringCharge[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1RecurringCharge(entry, context)
  );
};

const deserializeAws_restJson1ReservedElasticsearchInstance = (
  output: any,
  context: __SerdeContext
): ReservedElasticsearchInstance => {
  return {
    __type: "ReservedElasticsearchInstance",
    CurrencyCode:
      output.CurrencyCode !== undefined && output.CurrencyCode !== null
        ? output.CurrencyCode
        : undefined,
    Duration:
      output.Duration !== undefined && output.Duration !== null
        ? output.Duration
        : undefined,
    ElasticsearchInstanceCount:
      output.ElasticsearchInstanceCount !== undefined &&
      output.ElasticsearchInstanceCount !== null
        ? output.ElasticsearchInstanceCount
        : undefined,
    ElasticsearchInstanceType:
      output.ElasticsearchInstanceType !== undefined &&
      output.ElasticsearchInstanceType !== null
        ? output.ElasticsearchInstanceType
        : undefined,
    FixedPrice:
      output.FixedPrice !== undefined && output.FixedPrice !== null
        ? output.FixedPrice
        : undefined,
    PaymentOption:
      output.PaymentOption !== undefined && output.PaymentOption !== null
        ? output.PaymentOption
        : undefined,
    RecurringCharges:
      output.RecurringCharges !== undefined && output.RecurringCharges !== null
        ? deserializeAws_restJson1RecurringChargeList(
            output.RecurringCharges,
            context
          )
        : undefined,
    ReservationName:
      output.ReservationName !== undefined && output.ReservationName !== null
        ? output.ReservationName
        : undefined,
    ReservedElasticsearchInstanceId:
      output.ReservedElasticsearchInstanceId !== undefined &&
      output.ReservedElasticsearchInstanceId !== null
        ? output.ReservedElasticsearchInstanceId
        : undefined,
    ReservedElasticsearchInstanceOfferingId:
      output.ReservedElasticsearchInstanceOfferingId !== undefined &&
      output.ReservedElasticsearchInstanceOfferingId !== null
        ? output.ReservedElasticsearchInstanceOfferingId
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    UsagePrice:
      output.UsagePrice !== undefined && output.UsagePrice !== null
        ? output.UsagePrice
        : undefined
  } as any;
};

const deserializeAws_restJson1ReservedElasticsearchInstanceList = (
  output: any,
  context: __SerdeContext
): ReservedElasticsearchInstance[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ReservedElasticsearchInstance(entry, context)
  );
};

const deserializeAws_restJson1ReservedElasticsearchInstanceOffering = (
  output: any,
  context: __SerdeContext
): ReservedElasticsearchInstanceOffering => {
  return {
    __type: "ReservedElasticsearchInstanceOffering",
    CurrencyCode:
      output.CurrencyCode !== undefined && output.CurrencyCode !== null
        ? output.CurrencyCode
        : undefined,
    Duration:
      output.Duration !== undefined && output.Duration !== null
        ? output.Duration
        : undefined,
    ElasticsearchInstanceType:
      output.ElasticsearchInstanceType !== undefined &&
      output.ElasticsearchInstanceType !== null
        ? output.ElasticsearchInstanceType
        : undefined,
    FixedPrice:
      output.FixedPrice !== undefined && output.FixedPrice !== null
        ? output.FixedPrice
        : undefined,
    PaymentOption:
      output.PaymentOption !== undefined && output.PaymentOption !== null
        ? output.PaymentOption
        : undefined,
    RecurringCharges:
      output.RecurringCharges !== undefined && output.RecurringCharges !== null
        ? deserializeAws_restJson1RecurringChargeList(
            output.RecurringCharges,
            context
          )
        : undefined,
    ReservedElasticsearchInstanceOfferingId:
      output.ReservedElasticsearchInstanceOfferingId !== undefined &&
      output.ReservedElasticsearchInstanceOfferingId !== null
        ? output.ReservedElasticsearchInstanceOfferingId
        : undefined,
    UsagePrice:
      output.UsagePrice !== undefined && output.UsagePrice !== null
        ? output.UsagePrice
        : undefined
  } as any;
};

const deserializeAws_restJson1ReservedElasticsearchInstanceOfferingList = (
  output: any,
  context: __SerdeContext
): ReservedElasticsearchInstanceOffering[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ReservedElasticsearchInstanceOffering(
      entry,
      context
    )
  );
};

const deserializeAws_restJson1ServiceSoftwareOptions = (
  output: any,
  context: __SerdeContext
): ServiceSoftwareOptions => {
  return {
    __type: "ServiceSoftwareOptions",
    AutomatedUpdateDate:
      output.AutomatedUpdateDate !== undefined &&
      output.AutomatedUpdateDate !== null
        ? new Date(Math.round(output.AutomatedUpdateDate * 1000))
        : undefined,
    Cancellable:
      output.Cancellable !== undefined && output.Cancellable !== null
        ? output.Cancellable
        : undefined,
    CurrentVersion:
      output.CurrentVersion !== undefined && output.CurrentVersion !== null
        ? output.CurrentVersion
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    NewVersion:
      output.NewVersion !== undefined && output.NewVersion !== null
        ? output.NewVersion
        : undefined,
    UpdateAvailable:
      output.UpdateAvailable !== undefined && output.UpdateAvailable !== null
        ? output.UpdateAvailable
        : undefined,
    UpdateStatus:
      output.UpdateStatus !== undefined && output.UpdateStatus !== null
        ? output.UpdateStatus
        : undefined
  } as any;
};

const deserializeAws_restJson1SnapshotOptions = (
  output: any,
  context: __SerdeContext
): SnapshotOptions => {
  return {
    __type: "SnapshotOptions",
    AutomatedSnapshotStartHour:
      output.AutomatedSnapshotStartHour !== undefined &&
      output.AutomatedSnapshotStartHour !== null
        ? output.AutomatedSnapshotStartHour
        : undefined
  } as any;
};

const deserializeAws_restJson1SnapshotOptionsStatus = (
  output: any,
  context: __SerdeContext
): SnapshotOptionsStatus => {
  return {
    __type: "SnapshotOptionsStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1SnapshotOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1StorageType = (
  output: any,
  context: __SerdeContext
): StorageType => {
  return {
    __type: "StorageType",
    StorageSubTypeName:
      output.StorageSubTypeName !== undefined &&
      output.StorageSubTypeName !== null
        ? output.StorageSubTypeName
        : undefined,
    StorageTypeLimits:
      output.StorageTypeLimits !== undefined &&
      output.StorageTypeLimits !== null
        ? deserializeAws_restJson1StorageTypeLimitList(
            output.StorageTypeLimits,
            context
          )
        : undefined,
    StorageTypeName:
      output.StorageTypeName !== undefined && output.StorageTypeName !== null
        ? output.StorageTypeName
        : undefined
  } as any;
};

const deserializeAws_restJson1StorageTypeLimit = (
  output: any,
  context: __SerdeContext
): StorageTypeLimit => {
  return {
    __type: "StorageTypeLimit",
    LimitName:
      output.LimitName !== undefined && output.LimitName !== null
        ? output.LimitName
        : undefined,
    LimitValues:
      output.LimitValues !== undefined && output.LimitValues !== null
        ? deserializeAws_restJson1LimitValueList(output.LimitValues, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1StorageTypeLimitList = (
  output: any,
  context: __SerdeContext
): StorageTypeLimit[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1StorageTypeLimit(entry, context)
  );
};

const deserializeAws_restJson1StorageTypeList = (
  output: any,
  context: __SerdeContext
): StorageType[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1StorageType(entry, context)
  );
};

const deserializeAws_restJson1StringList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_restJson1TagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Tag(entry, context)
  );
};

const deserializeAws_restJson1UpgradeHistory = (
  output: any,
  context: __SerdeContext
): UpgradeHistory => {
  return {
    __type: "UpgradeHistory",
    StartTimestamp:
      output.StartTimestamp !== undefined && output.StartTimestamp !== null
        ? new Date(Math.round(output.StartTimestamp * 1000))
        : undefined,
    StepsList:
      output.StepsList !== undefined && output.StepsList !== null
        ? deserializeAws_restJson1UpgradeStepsList(output.StepsList, context)
        : undefined,
    UpgradeName:
      output.UpgradeName !== undefined && output.UpgradeName !== null
        ? output.UpgradeName
        : undefined,
    UpgradeStatus:
      output.UpgradeStatus !== undefined && output.UpgradeStatus !== null
        ? output.UpgradeStatus
        : undefined
  } as any;
};

const deserializeAws_restJson1UpgradeHistoryList = (
  output: any,
  context: __SerdeContext
): UpgradeHistory[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1UpgradeHistory(entry, context)
  );
};

const deserializeAws_restJson1UpgradeStepItem = (
  output: any,
  context: __SerdeContext
): UpgradeStepItem => {
  return {
    __type: "UpgradeStepItem",
    Issues:
      output.Issues !== undefined && output.Issues !== null
        ? deserializeAws_restJson1Issues(output.Issues, context)
        : undefined,
    ProgressPercent:
      output.ProgressPercent !== undefined && output.ProgressPercent !== null
        ? output.ProgressPercent
        : undefined,
    UpgradeStep:
      output.UpgradeStep !== undefined && output.UpgradeStep !== null
        ? output.UpgradeStep
        : undefined,
    UpgradeStepStatus:
      output.UpgradeStepStatus !== undefined &&
      output.UpgradeStepStatus !== null
        ? output.UpgradeStepStatus
        : undefined
  } as any;
};

const deserializeAws_restJson1UpgradeStepsList = (
  output: any,
  context: __SerdeContext
): UpgradeStepItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1UpgradeStepItem(entry, context)
  );
};

const deserializeAws_restJson1VPCDerivedInfo = (
  output: any,
  context: __SerdeContext
): VPCDerivedInfo => {
  return {
    __type: "VPCDerivedInfo",
    AvailabilityZones:
      output.AvailabilityZones !== undefined &&
      output.AvailabilityZones !== null
        ? deserializeAws_restJson1StringList(output.AvailabilityZones, context)
        : undefined,
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_restJson1StringList(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_restJson1StringList(output.SubnetIds, context)
        : undefined,
    VPCId:
      output.VPCId !== undefined && output.VPCId !== null
        ? output.VPCId
        : undefined
  } as any;
};

const deserializeAws_restJson1VPCDerivedInfoStatus = (
  output: any,
  context: __SerdeContext
): VPCDerivedInfoStatus => {
  return {
    __type: "VPCDerivedInfoStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1VPCDerivedInfo(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1ZoneAwarenessConfig = (
  output: any,
  context: __SerdeContext
): ZoneAwarenessConfig => {
  return {
    __type: "ZoneAwarenessConfig",
    AvailabilityZoneCount:
      output.AvailabilityZoneCount !== undefined &&
      output.AvailabilityZoneCount !== null
        ? output.AvailabilityZoneCount
        : undefined
  } as any;
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
