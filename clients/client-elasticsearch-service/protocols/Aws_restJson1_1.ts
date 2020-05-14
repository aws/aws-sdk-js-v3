import { AddTagsCommandInput, AddTagsCommandOutput } from "../commands/AddTagsCommand";
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
import { GetUpgradeHistoryCommandInput, GetUpgradeHistoryCommandOutput } from "../commands/GetUpgradeHistoryCommand";
import { GetUpgradeStatusCommandInput, GetUpgradeStatusCommandOutput } from "../commands/GetUpgradeStatusCommand";
import { ListDomainNamesCommandInput, ListDomainNamesCommandOutput } from "../commands/ListDomainNamesCommand";
import {
  ListElasticsearchInstanceTypesCommandInput,
  ListElasticsearchInstanceTypesCommandOutput
} from "../commands/ListElasticsearchInstanceTypesCommand";
import {
  ListElasticsearchVersionsCommandInput,
  ListElasticsearchVersionsCommandOutput
} from "../commands/ListElasticsearchVersionsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import {
  PurchaseReservedElasticsearchInstanceOfferingCommandInput,
  PurchaseReservedElasticsearchInstanceOfferingCommandOutput
} from "../commands/PurchaseReservedElasticsearchInstanceOfferingCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "../commands/RemoveTagsCommand";
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
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

export const serializeAws_restJson1_1AddTagsCommand = async (
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
      TagList: serializeAws_restJson1_1TagList(input.TagList, context)
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

export const serializeAws_restJson1_1CancelElasticsearchServiceSoftwareUpdateCommand = async (
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

export const serializeAws_restJson1_1CreateElasticsearchDomainCommand = async (
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
      AdvancedOptions: serializeAws_restJson1_1AdvancedOptions(input.AdvancedOptions, context)
    }),
    ...(input.CognitoOptions !== undefined && {
      CognitoOptions: serializeAws_restJson1_1CognitoOptions(input.CognitoOptions, context)
    }),
    ...(input.DomainEndpointOptions !== undefined && {
      DomainEndpointOptions: serializeAws_restJson1_1DomainEndpointOptions(input.DomainEndpointOptions, context)
    }),
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.EBSOptions !== undefined && {
      EBSOptions: serializeAws_restJson1_1EBSOptions(input.EBSOptions, context)
    }),
    ...(input.ElasticsearchClusterConfig !== undefined && {
      ElasticsearchClusterConfig: serializeAws_restJson1_1ElasticsearchClusterConfig(
        input.ElasticsearchClusterConfig,
        context
      )
    }),
    ...(input.ElasticsearchVersion !== undefined && {
      ElasticsearchVersion: input.ElasticsearchVersion
    }),
    ...(input.EncryptionAtRestOptions !== undefined && {
      EncryptionAtRestOptions: serializeAws_restJson1_1EncryptionAtRestOptions(input.EncryptionAtRestOptions, context)
    }),
    ...(input.LogPublishingOptions !== undefined && {
      LogPublishingOptions: serializeAws_restJson1_1LogPublishingOptions(input.LogPublishingOptions, context)
    }),
    ...(input.NodeToNodeEncryptionOptions !== undefined && {
      NodeToNodeEncryptionOptions: serializeAws_restJson1_1NodeToNodeEncryptionOptions(
        input.NodeToNodeEncryptionOptions,
        context
      )
    }),
    ...(input.SnapshotOptions !== undefined && {
      SnapshotOptions: serializeAws_restJson1_1SnapshotOptions(input.SnapshotOptions, context)
    }),
    ...(input.VPCOptions !== undefined && {
      VPCOptions: serializeAws_restJson1_1VPCOptions(input.VPCOptions, context)
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

export const serializeAws_restJson1_1DeleteElasticsearchDomainCommand = async (
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
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
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

export const serializeAws_restJson1_1DeleteElasticsearchServiceRoleCommand = async (
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

export const serializeAws_restJson1_1DescribeElasticsearchDomainCommand = async (
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
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
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

export const serializeAws_restJson1_1DescribeElasticsearchDomainConfigCommand = async (
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
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
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

export const serializeAws_restJson1_1DescribeElasticsearchDomainsCommand = async (
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
      DomainNames: serializeAws_restJson1_1DomainNameList(input.DomainNames, context)
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

export const serializeAws_restJson1_1DescribeElasticsearchInstanceTypeLimitsCommand = async (
  input: DescribeElasticsearchInstanceTypeLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2015-01-01/es/instanceTypeLimits/{ElasticsearchVersion}/{InstanceType}";
  if (input.ElasticsearchVersion !== undefined) {
    const labelValue: string = input.ElasticsearchVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ElasticsearchVersion.");
    }
    resolvedPath = resolvedPath.replace("{ElasticsearchVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ElasticsearchVersion.");
  }
  if (input.InstanceType !== undefined) {
    const labelValue: string = input.InstanceType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceType.");
    }
    resolvedPath = resolvedPath.replace("{InstanceType}", __extendedEncodeURIComponent(labelValue));
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

export const serializeAws_restJson1_1DescribeReservedElasticsearchInstanceOfferingsCommand = async (
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

export const serializeAws_restJson1_1DescribeReservedElasticsearchInstancesCommand = async (
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

export const serializeAws_restJson1_1GetCompatibleElasticsearchVersionsCommand = async (
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

export const serializeAws_restJson1_1GetUpgradeHistoryCommand = async (
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
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
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

export const serializeAws_restJson1_1GetUpgradeStatusCommand = async (
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
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
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

export const serializeAws_restJson1_1ListDomainNamesCommand = async (
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

export const serializeAws_restJson1_1ListElasticsearchInstanceTypesCommand = async (
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
      throw new Error("Empty value provided for input HTTP label: ElasticsearchVersion.");
    }
    resolvedPath = resolvedPath.replace("{ElasticsearchVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ElasticsearchVersion.");
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

export const serializeAws_restJson1_1ListElasticsearchVersionsCommand = async (
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

export const serializeAws_restJson1_1ListTagsCommand = async (
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

export const serializeAws_restJson1_1PurchaseReservedElasticsearchInstanceOfferingCommand = async (
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
      ReservedElasticsearchInstanceOfferingId: input.ReservedElasticsearchInstanceOfferingId
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

export const serializeAws_restJson1_1RemoveTagsCommand = async (
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
      TagKeys: serializeAws_restJson1_1StringList(input.TagKeys, context)
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

export const serializeAws_restJson1_1StartElasticsearchServiceSoftwareUpdateCommand = async (
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

export const serializeAws_restJson1_1UpdateElasticsearchDomainConfigCommand = async (
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
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AccessPolicies !== undefined && {
      AccessPolicies: input.AccessPolicies
    }),
    ...(input.AdvancedOptions !== undefined && {
      AdvancedOptions: serializeAws_restJson1_1AdvancedOptions(input.AdvancedOptions, context)
    }),
    ...(input.CognitoOptions !== undefined && {
      CognitoOptions: serializeAws_restJson1_1CognitoOptions(input.CognitoOptions, context)
    }),
    ...(input.DomainEndpointOptions !== undefined && {
      DomainEndpointOptions: serializeAws_restJson1_1DomainEndpointOptions(input.DomainEndpointOptions, context)
    }),
    ...(input.EBSOptions !== undefined && {
      EBSOptions: serializeAws_restJson1_1EBSOptions(input.EBSOptions, context)
    }),
    ...(input.ElasticsearchClusterConfig !== undefined && {
      ElasticsearchClusterConfig: serializeAws_restJson1_1ElasticsearchClusterConfig(
        input.ElasticsearchClusterConfig,
        context
      )
    }),
    ...(input.LogPublishingOptions !== undefined && {
      LogPublishingOptions: serializeAws_restJson1_1LogPublishingOptions(input.LogPublishingOptions, context)
    }),
    ...(input.SnapshotOptions !== undefined && {
      SnapshotOptions: serializeAws_restJson1_1SnapshotOptions(input.SnapshotOptions, context)
    }),
    ...(input.VPCOptions !== undefined && {
      VPCOptions: serializeAws_restJson1_1VPCOptions(input.VPCOptions, context)
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

export const serializeAws_restJson1_1UpgradeElasticsearchDomainCommand = async (
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

export const deserializeAws_restJson1_1AddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AddTagsCommandError(output, context);
  }
  const contents: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1AddTagsCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.a9.es.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1CancelElasticsearchServiceSoftwareUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelElasticsearchServiceSoftwareUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CancelElasticsearchServiceSoftwareUpdateCommandError(output, context);
  }
  const contents: CancelElasticsearchServiceSoftwareUpdateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelElasticsearchServiceSoftwareUpdateResponse",
    ServiceSoftwareOptions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ServiceSoftwareOptions !== undefined && data.ServiceSoftwareOptions !== null) {
    contents.ServiceSoftwareOptions = deserializeAws_restJson1_1ServiceSoftwareOptions(
      data.ServiceSoftwareOptions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CancelElasticsearchServiceSoftwareUpdateCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1CreateElasticsearchDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateElasticsearchDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateElasticsearchDomainCommandError(output, context);
  }
  const contents: CreateElasticsearchDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateElasticsearchDomainResponse",
    DomainStatus: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DomainStatus !== undefined && data.DomainStatus !== null) {
    contents.DomainStatus = deserializeAws_restJson1_1ElasticsearchDomainStatus(data.DomainStatus, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateElasticsearchDomainCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledOperationException":
    case "com.a9.es.exceptions#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1_1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.a9.es.exceptions#InvalidTypeException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.a9.es.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.a9.es.exceptions#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1DeleteElasticsearchDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteElasticsearchDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteElasticsearchDomainCommandError(output, context);
  }
  const contents: DeleteElasticsearchDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteElasticsearchDomainResponse",
    DomainStatus: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DomainStatus !== undefined && data.DomainStatus !== null) {
    contents.DomainStatus = deserializeAws_restJson1_1ElasticsearchDomainStatus(data.DomainStatus, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteElasticsearchDomainCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1DeleteElasticsearchServiceRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteElasticsearchServiceRoleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteElasticsearchServiceRoleCommandError(output, context);
  }
  const contents: DeleteElasticsearchServiceRoleCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteElasticsearchServiceRoleCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1DescribeElasticsearchDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeElasticsearchDomainCommandError(output, context);
  }
  const contents: DescribeElasticsearchDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeElasticsearchDomainResponse",
    DomainStatus: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DomainStatus !== undefined && data.DomainStatus !== null) {
    contents.DomainStatus = deserializeAws_restJson1_1ElasticsearchDomainStatus(data.DomainStatus, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeElasticsearchDomainCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1DescribeElasticsearchDomainConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeElasticsearchDomainConfigCommandError(output, context);
  }
  const contents: DescribeElasticsearchDomainConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeElasticsearchDomainConfigResponse",
    DomainConfig: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DomainConfig !== undefined && data.DomainConfig !== null) {
    contents.DomainConfig = deserializeAws_restJson1_1ElasticsearchDomainConfig(data.DomainConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeElasticsearchDomainConfigCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1DescribeElasticsearchDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeElasticsearchDomainsCommandError(output, context);
  }
  const contents: DescribeElasticsearchDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeElasticsearchDomainsResponse",
    DomainStatusList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DomainStatusList !== undefined && data.DomainStatusList !== null) {
    contents.DomainStatusList = deserializeAws_restJson1_1ElasticsearchDomainStatusList(data.DomainStatusList, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeElasticsearchDomainsCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1DescribeElasticsearchInstanceTypeLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchInstanceTypeLimitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeElasticsearchInstanceTypeLimitsCommandError(output, context);
  }
  const contents: DescribeElasticsearchInstanceTypeLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeElasticsearchInstanceTypeLimitsResponse",
    LimitsByRole: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.LimitsByRole !== undefined && data.LimitsByRole !== null) {
    contents.LimitsByRole = deserializeAws_restJson1_1LimitsByRole(data.LimitsByRole, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeElasticsearchInstanceTypeLimitsCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.a9.es.exceptions#InvalidTypeException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.a9.es.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1DescribeReservedElasticsearchInstanceOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedElasticsearchInstanceOfferingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeReservedElasticsearchInstanceOfferingsCommandError(output, context);
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
};

const deserializeAws_restJson1_1DescribeReservedElasticsearchInstanceOfferingsCommandError = async (
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
    case "com.a9.es.exceptions#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1_1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1DescribeReservedElasticsearchInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedElasticsearchInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeReservedElasticsearchInstancesCommandError(output, context);
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
  if (data.ReservedElasticsearchInstances !== undefined && data.ReservedElasticsearchInstances !== null) {
    contents.ReservedElasticsearchInstances = deserializeAws_restJson1_1ReservedElasticsearchInstanceList(
      data.ReservedElasticsearchInstances,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeReservedElasticsearchInstancesCommandError = async (
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
    case "com.a9.es.exceptions#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1_1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1GetCompatibleElasticsearchVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCompatibleElasticsearchVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetCompatibleElasticsearchVersionsCommandError(output, context);
  }
  const contents: GetCompatibleElasticsearchVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCompatibleElasticsearchVersionsResponse",
    CompatibleElasticsearchVersions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CompatibleElasticsearchVersions !== undefined && data.CompatibleElasticsearchVersions !== null) {
    contents.CompatibleElasticsearchVersions = deserializeAws_restJson1_1CompatibleElasticsearchVersionsList(
      data.CompatibleElasticsearchVersions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetCompatibleElasticsearchVersionsCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledOperationException":
    case "com.a9.es.exceptions#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1_1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1GetUpgradeHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetUpgradeHistoryCommandError(output, context);
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
    contents.UpgradeHistories = deserializeAws_restJson1_1UpgradeHistoryList(data.UpgradeHistories, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetUpgradeHistoryCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledOperationException":
    case "com.a9.es.exceptions#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1_1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1GetUpgradeStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetUpgradeStatusCommandError(output, context);
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

const deserializeAws_restJson1_1GetUpgradeStatusCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledOperationException":
    case "com.a9.es.exceptions#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1_1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1ListDomainNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDomainNamesCommandError(output, context);
  }
  const contents: ListDomainNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDomainNamesResponse",
    DomainNames: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DomainNames !== undefined && data.DomainNames !== null) {
    contents.DomainNames = deserializeAws_restJson1_1DomainInfoList(data.DomainNames, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListDomainNamesCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1ListElasticsearchInstanceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListElasticsearchInstanceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListElasticsearchInstanceTypesCommandError(output, context);
  }
  const contents: ListElasticsearchInstanceTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListElasticsearchInstanceTypesResponse",
    ElasticsearchInstanceTypes: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ElasticsearchInstanceTypes !== undefined && data.ElasticsearchInstanceTypes !== null) {
    contents.ElasticsearchInstanceTypes = deserializeAws_restJson1_1ElasticsearchInstanceTypeList(
      data.ElasticsearchInstanceTypes,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListElasticsearchInstanceTypesCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1ListElasticsearchVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListElasticsearchVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListElasticsearchVersionsCommandError(output, context);
  }
  const contents: ListElasticsearchVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListElasticsearchVersionsResponse",
    ElasticsearchVersions: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ElasticsearchVersions !== undefined && data.ElasticsearchVersions !== null) {
    contents.ElasticsearchVersions = deserializeAws_restJson1_1ElasticsearchVersionList(
      data.ElasticsearchVersions,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListElasticsearchVersionsCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListTagsCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1PurchaseReservedElasticsearchInstanceOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedElasticsearchInstanceOfferingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PurchaseReservedElasticsearchInstanceOfferingCommandError(output, context);
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
  if (data.ReservedElasticsearchInstanceId !== undefined && data.ReservedElasticsearchInstanceId !== null) {
    contents.ReservedElasticsearchInstanceId = data.ReservedElasticsearchInstanceId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PurchaseReservedElasticsearchInstanceOfferingCommandError = async (
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
    case "com.a9.es.exceptions#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1_1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.a9.es.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.a9.es.exceptions#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1RemoveTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RemoveTagsCommandError(output, context);
  }
  const contents: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1RemoveTagsCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1StartElasticsearchServiceSoftwareUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartElasticsearchServiceSoftwareUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartElasticsearchServiceSoftwareUpdateCommandError(output, context);
  }
  const contents: StartElasticsearchServiceSoftwareUpdateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartElasticsearchServiceSoftwareUpdateResponse",
    ServiceSoftwareOptions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ServiceSoftwareOptions !== undefined && data.ServiceSoftwareOptions !== null) {
    contents.ServiceSoftwareOptions = deserializeAws_restJson1_1ServiceSoftwareOptions(
      data.ServiceSoftwareOptions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1StartElasticsearchServiceSoftwareUpdateCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1UpdateElasticsearchDomainConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateElasticsearchDomainConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateElasticsearchDomainConfigCommandError(output, context);
  }
  const contents: UpdateElasticsearchDomainConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateElasticsearchDomainConfigResponse",
    DomainConfig: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DomainConfig !== undefined && data.DomainConfig !== null) {
    contents.DomainConfig = deserializeAws_restJson1_1ElasticsearchDomainConfig(data.DomainConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateElasticsearchDomainConfigCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTypeException":
    case "com.a9.es.exceptions#InvalidTypeException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.a9.es.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1_1UpgradeElasticsearchDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeElasticsearchDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpgradeElasticsearchDomainCommandError(output, context);
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

const deserializeAws_restJson1_1UpgradeElasticsearchDomainCommandError = async (
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
    case "com.a9.es.exceptions#BaseException":
      response = {
        ...(await deserializeAws_restJson1_1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DisabledOperationException":
    case "com.a9.es.exceptions#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1_1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.a9.es.exceptions#InternalException":
      response = {
        ...(await deserializeAws_restJson1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.a9.es.exceptions#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.a9.es.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.a9.es.exceptions#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1_1BaseExceptionResponse = async (
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

const deserializeAws_restJson1_1DisabledOperationExceptionResponse = async (
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

const deserializeAws_restJson1_1InternalExceptionResponse = async (
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

const deserializeAws_restJson1_1InvalidTypeExceptionResponse = async (
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

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse = async (
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

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1_1ValidationExceptionResponse = async (
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

const serializeAws_restJson1_1AdvancedOptions = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1_1CognitoOptions = (input: CognitoOptions, context: __SerdeContext): any => {
  return {
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.IdentityPoolId !== undefined && {
      IdentityPoolId: input.IdentityPoolId
    }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
    ...(input.UserPoolId !== undefined && { UserPoolId: input.UserPoolId })
  };
};

const serializeAws_restJson1_1DomainEndpointOptions = (input: DomainEndpointOptions, context: __SerdeContext): any => {
  return {
    ...(input.EnforceHTTPS !== undefined && {
      EnforceHTTPS: input.EnforceHTTPS
    }),
    ...(input.TLSSecurityPolicy !== undefined && {
      TLSSecurityPolicy: input.TLSSecurityPolicy
    })
  };
};

const serializeAws_restJson1_1DomainNameList = (input: string[], context: __SerdeContext): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1EBSOptions = (input: EBSOptions, context: __SerdeContext): any => {
  return {
    ...(input.EBSEnabled !== undefined && { EBSEnabled: input.EBSEnabled }),
    ...(input.Iops !== undefined && { Iops: input.Iops }),
    ...(input.VolumeSize !== undefined && { VolumeSize: input.VolumeSize }),
    ...(input.VolumeType !== undefined && { VolumeType: input.VolumeType })
  };
};

const serializeAws_restJson1_1ElasticsearchClusterConfig = (
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
      ZoneAwarenessConfig: serializeAws_restJson1_1ZoneAwarenessConfig(input.ZoneAwarenessConfig, context)
    }),
    ...(input.ZoneAwarenessEnabled !== undefined && {
      ZoneAwarenessEnabled: input.ZoneAwarenessEnabled
    })
  };
};

const serializeAws_restJson1_1EncryptionAtRestOptions = (
  input: EncryptionAtRestOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.KmsKeyId !== undefined && { KmsKeyId: input.KmsKeyId })
  };
};

const serializeAws_restJson1_1LogPublishingOption = (input: LogPublishingOption, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogsLogGroupArn !== undefined && {
      CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn
    }),
    ...(input.Enabled !== undefined && { Enabled: input.Enabled })
  };
};

const serializeAws_restJson1_1LogPublishingOptions = (
  input: { [key: string]: LogPublishingOption },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: LogPublishingOption }, [key, value]: [LogType | string, any]) => ({
      ...acc,
      [key]: serializeAws_restJson1_1LogPublishingOption(value, context)
    }),
    {}
  );
};

const serializeAws_restJson1_1NodeToNodeEncryptionOptions = (
  input: NodeToNodeEncryptionOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && { Enabled: input.Enabled })
  };
};

const serializeAws_restJson1_1SnapshotOptions = (input: SnapshotOptions, context: __SerdeContext): any => {
  return {
    ...(input.AutomatedSnapshotStartHour !== undefined && {
      AutomatedSnapshotStartHour: input.AutomatedSnapshotStartHour
    })
  };
};

const serializeAws_restJson1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_restJson1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input.map(entry => serializeAws_restJson1_1Tag(entry, context));
};

const serializeAws_restJson1_1VPCOptions = (input: VPCOptions, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds !== undefined && {
      SecurityGroupIds: serializeAws_restJson1_1StringList(input.SecurityGroupIds, context)
    }),
    ...(input.SubnetIds !== undefined && {
      SubnetIds: serializeAws_restJson1_1StringList(input.SubnetIds, context)
    })
  };
};

const serializeAws_restJson1_1ZoneAwarenessConfig = (input: ZoneAwarenessConfig, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZoneCount !== undefined && {
      AvailabilityZoneCount: input.AvailabilityZoneCount
    })
  };
};

const deserializeAws_restJson1_1AccessPoliciesStatus = (output: any, context: __SerdeContext): AccessPoliciesStatus => {
  return {
    __type: "AccessPoliciesStatus",
    Options: output.Options !== undefined && output.Options !== null ? output.Options : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1_1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AdditionalLimit = (output: any, context: __SerdeContext): AdditionalLimit => {
  return {
    __type: "AdditionalLimit",
    LimitName: output.LimitName !== undefined && output.LimitName !== null ? output.LimitName : undefined,
    LimitValues:
      output.LimitValues !== undefined && output.LimitValues !== null
        ? deserializeAws_restJson1_1LimitValueList(output.LimitValues, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AdditionalLimitList = (output: any, context: __SerdeContext): AdditionalLimit[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1_1AdditionalLimit(entry, context));
};

const deserializeAws_restJson1_1AdvancedOptions = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1_1AdvancedOptionsStatus = (
  output: any,
  context: __SerdeContext
): AdvancedOptionsStatus => {
  return {
    __type: "AdvancedOptionsStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1_1AdvancedOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1_1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CognitoOptions = (output: any, context: __SerdeContext): CognitoOptions => {
  return {
    __type: "CognitoOptions",
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    IdentityPoolId:
      output.IdentityPoolId !== undefined && output.IdentityPoolId !== null ? output.IdentityPoolId : undefined,
    RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    UserPoolId: output.UserPoolId !== undefined && output.UserPoolId !== null ? output.UserPoolId : undefined
  } as any;
};

const deserializeAws_restJson1_1CognitoOptionsStatus = (output: any, context: __SerdeContext): CognitoOptionsStatus => {
  return {
    __type: "CognitoOptionsStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1_1CognitoOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1_1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CompatibleElasticsearchVersionsList = (
  output: any,
  context: __SerdeContext
): CompatibleVersionsMap[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1_1CompatibleVersionsMap(entry, context));
};

const deserializeAws_restJson1_1CompatibleVersionsMap = (
  output: any,
  context: __SerdeContext
): CompatibleVersionsMap => {
  return {
    __type: "CompatibleVersionsMap",
    SourceVersion:
      output.SourceVersion !== undefined && output.SourceVersion !== null ? output.SourceVersion : undefined,
    TargetVersions:
      output.TargetVersions !== undefined && output.TargetVersions !== null
        ? deserializeAws_restJson1_1ElasticsearchVersionList(output.TargetVersions, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DomainEndpointOptions = (
  output: any,
  context: __SerdeContext
): DomainEndpointOptions => {
  return {
    __type: "DomainEndpointOptions",
    EnforceHTTPS: output.EnforceHTTPS !== undefined && output.EnforceHTTPS !== null ? output.EnforceHTTPS : undefined,
    TLSSecurityPolicy:
      output.TLSSecurityPolicy !== undefined && output.TLSSecurityPolicy !== null ? output.TLSSecurityPolicy : undefined
  } as any;
};

const deserializeAws_restJson1_1DomainEndpointOptionsStatus = (
  output: any,
  context: __SerdeContext
): DomainEndpointOptionsStatus => {
  return {
    __type: "DomainEndpointOptionsStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1_1DomainEndpointOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1_1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DomainInfo = (output: any, context: __SerdeContext): DomainInfo => {
  return {
    __type: "DomainInfo",
    DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined
  } as any;
};

const deserializeAws_restJson1_1DomainInfoList = (output: any, context: __SerdeContext): DomainInfo[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1_1DomainInfo(entry, context));
};

const deserializeAws_restJson1_1EBSOptions = (output: any, context: __SerdeContext): EBSOptions => {
  return {
    __type: "EBSOptions",
    EBSEnabled: output.EBSEnabled !== undefined && output.EBSEnabled !== null ? output.EBSEnabled : undefined,
    Iops: output.Iops !== undefined && output.Iops !== null ? output.Iops : undefined,
    VolumeSize: output.VolumeSize !== undefined && output.VolumeSize !== null ? output.VolumeSize : undefined,
    VolumeType: output.VolumeType !== undefined && output.VolumeType !== null ? output.VolumeType : undefined
  } as any;
};

const deserializeAws_restJson1_1EBSOptionsStatus = (output: any, context: __SerdeContext): EBSOptionsStatus => {
  return {
    __type: "EBSOptionsStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1_1EBSOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1_1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ElasticsearchClusterConfig = (
  output: any,
  context: __SerdeContext
): ElasticsearchClusterConfig => {
  return {
    __type: "ElasticsearchClusterConfig",
    DedicatedMasterCount:
      output.DedicatedMasterCount !== undefined && output.DedicatedMasterCount !== null
        ? output.DedicatedMasterCount
        : undefined,
    DedicatedMasterEnabled:
      output.DedicatedMasterEnabled !== undefined && output.DedicatedMasterEnabled !== null
        ? output.DedicatedMasterEnabled
        : undefined,
    DedicatedMasterType:
      output.DedicatedMasterType !== undefined && output.DedicatedMasterType !== null
        ? output.DedicatedMasterType
        : undefined,
    InstanceCount:
      output.InstanceCount !== undefined && output.InstanceCount !== null ? output.InstanceCount : undefined,
    InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
    WarmCount: output.WarmCount !== undefined && output.WarmCount !== null ? output.WarmCount : undefined,
    WarmEnabled: output.WarmEnabled !== undefined && output.WarmEnabled !== null ? output.WarmEnabled : undefined,
    WarmType: output.WarmType !== undefined && output.WarmType !== null ? output.WarmType : undefined,
    ZoneAwarenessConfig:
      output.ZoneAwarenessConfig !== undefined && output.ZoneAwarenessConfig !== null
        ? deserializeAws_restJson1_1ZoneAwarenessConfig(output.ZoneAwarenessConfig, context)
        : undefined,
    ZoneAwarenessEnabled:
      output.ZoneAwarenessEnabled !== undefined && output.ZoneAwarenessEnabled !== null
        ? output.ZoneAwarenessEnabled
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ElasticsearchClusterConfigStatus = (
  output: any,
  context: __SerdeContext
): ElasticsearchClusterConfigStatus => {
  return {
    __type: "ElasticsearchClusterConfigStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1_1ElasticsearchClusterConfig(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1_1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ElasticsearchDomainConfig = (
  output: any,
  context: __SerdeContext
): ElasticsearchDomainConfig => {
  return {
    __type: "ElasticsearchDomainConfig",
    AccessPolicies:
      output.AccessPolicies !== undefined && output.AccessPolicies !== null
        ? deserializeAws_restJson1_1AccessPoliciesStatus(output.AccessPolicies, context)
        : undefined,
    AdvancedOptions:
      output.AdvancedOptions !== undefined && output.AdvancedOptions !== null
        ? deserializeAws_restJson1_1AdvancedOptionsStatus(output.AdvancedOptions, context)
        : undefined,
    CognitoOptions:
      output.CognitoOptions !== undefined && output.CognitoOptions !== null
        ? deserializeAws_restJson1_1CognitoOptionsStatus(output.CognitoOptions, context)
        : undefined,
    DomainEndpointOptions:
      output.DomainEndpointOptions !== undefined && output.DomainEndpointOptions !== null
        ? deserializeAws_restJson1_1DomainEndpointOptionsStatus(output.DomainEndpointOptions, context)
        : undefined,
    EBSOptions:
      output.EBSOptions !== undefined && output.EBSOptions !== null
        ? deserializeAws_restJson1_1EBSOptionsStatus(output.EBSOptions, context)
        : undefined,
    ElasticsearchClusterConfig:
      output.ElasticsearchClusterConfig !== undefined && output.ElasticsearchClusterConfig !== null
        ? deserializeAws_restJson1_1ElasticsearchClusterConfigStatus(output.ElasticsearchClusterConfig, context)
        : undefined,
    ElasticsearchVersion:
      output.ElasticsearchVersion !== undefined && output.ElasticsearchVersion !== null
        ? deserializeAws_restJson1_1ElasticsearchVersionStatus(output.ElasticsearchVersion, context)
        : undefined,
    EncryptionAtRestOptions:
      output.EncryptionAtRestOptions !== undefined && output.EncryptionAtRestOptions !== null
        ? deserializeAws_restJson1_1EncryptionAtRestOptionsStatus(output.EncryptionAtRestOptions, context)
        : undefined,
    LogPublishingOptions:
      output.LogPublishingOptions !== undefined && output.LogPublishingOptions !== null
        ? deserializeAws_restJson1_1LogPublishingOptionsStatus(output.LogPublishingOptions, context)
        : undefined,
    NodeToNodeEncryptionOptions:
      output.NodeToNodeEncryptionOptions !== undefined && output.NodeToNodeEncryptionOptions !== null
        ? deserializeAws_restJson1_1NodeToNodeEncryptionOptionsStatus(output.NodeToNodeEncryptionOptions, context)
        : undefined,
    SnapshotOptions:
      output.SnapshotOptions !== undefined && output.SnapshotOptions !== null
        ? deserializeAws_restJson1_1SnapshotOptionsStatus(output.SnapshotOptions, context)
        : undefined,
    VPCOptions:
      output.VPCOptions !== undefined && output.VPCOptions !== null
        ? deserializeAws_restJson1_1VPCDerivedInfoStatus(output.VPCOptions, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ElasticsearchDomainStatus = (
  output: any,
  context: __SerdeContext
): ElasticsearchDomainStatus => {
  return {
    __type: "ElasticsearchDomainStatus",
    ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
    AccessPolicies:
      output.AccessPolicies !== undefined && output.AccessPolicies !== null ? output.AccessPolicies : undefined,
    AdvancedOptions:
      output.AdvancedOptions !== undefined && output.AdvancedOptions !== null
        ? deserializeAws_restJson1_1AdvancedOptions(output.AdvancedOptions, context)
        : undefined,
    CognitoOptions:
      output.CognitoOptions !== undefined && output.CognitoOptions !== null
        ? deserializeAws_restJson1_1CognitoOptions(output.CognitoOptions, context)
        : undefined,
    Created: output.Created !== undefined && output.Created !== null ? output.Created : undefined,
    Deleted: output.Deleted !== undefined && output.Deleted !== null ? output.Deleted : undefined,
    DomainEndpointOptions:
      output.DomainEndpointOptions !== undefined && output.DomainEndpointOptions !== null
        ? deserializeAws_restJson1_1DomainEndpointOptions(output.DomainEndpointOptions, context)
        : undefined,
    DomainId: output.DomainId !== undefined && output.DomainId !== null ? output.DomainId : undefined,
    DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
    EBSOptions:
      output.EBSOptions !== undefined && output.EBSOptions !== null
        ? deserializeAws_restJson1_1EBSOptions(output.EBSOptions, context)
        : undefined,
    ElasticsearchClusterConfig:
      output.ElasticsearchClusterConfig !== undefined && output.ElasticsearchClusterConfig !== null
        ? deserializeAws_restJson1_1ElasticsearchClusterConfig(output.ElasticsearchClusterConfig, context)
        : undefined,
    ElasticsearchVersion:
      output.ElasticsearchVersion !== undefined && output.ElasticsearchVersion !== null
        ? output.ElasticsearchVersion
        : undefined,
    EncryptionAtRestOptions:
      output.EncryptionAtRestOptions !== undefined && output.EncryptionAtRestOptions !== null
        ? deserializeAws_restJson1_1EncryptionAtRestOptions(output.EncryptionAtRestOptions, context)
        : undefined,
    Endpoint: output.Endpoint !== undefined && output.Endpoint !== null ? output.Endpoint : undefined,
    Endpoints:
      output.Endpoints !== undefined && output.Endpoints !== null
        ? deserializeAws_restJson1_1EndpointsMap(output.Endpoints, context)
        : undefined,
    LogPublishingOptions:
      output.LogPublishingOptions !== undefined && output.LogPublishingOptions !== null
        ? deserializeAws_restJson1_1LogPublishingOptions(output.LogPublishingOptions, context)
        : undefined,
    NodeToNodeEncryptionOptions:
      output.NodeToNodeEncryptionOptions !== undefined && output.NodeToNodeEncryptionOptions !== null
        ? deserializeAws_restJson1_1NodeToNodeEncryptionOptions(output.NodeToNodeEncryptionOptions, context)
        : undefined,
    Processing: output.Processing !== undefined && output.Processing !== null ? output.Processing : undefined,
    ServiceSoftwareOptions:
      output.ServiceSoftwareOptions !== undefined && output.ServiceSoftwareOptions !== null
        ? deserializeAws_restJson1_1ServiceSoftwareOptions(output.ServiceSoftwareOptions, context)
        : undefined,
    SnapshotOptions:
      output.SnapshotOptions !== undefined && output.SnapshotOptions !== null
        ? deserializeAws_restJson1_1SnapshotOptions(output.SnapshotOptions, context)
        : undefined,
    UpgradeProcessing:
      output.UpgradeProcessing !== undefined && output.UpgradeProcessing !== null
        ? output.UpgradeProcessing
        : undefined,
    VPCOptions:
      output.VPCOptions !== undefined && output.VPCOptions !== null
        ? deserializeAws_restJson1_1VPCDerivedInfo(output.VPCOptions, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ElasticsearchDomainStatusList = (
  output: any,
  context: __SerdeContext
): ElasticsearchDomainStatus[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1_1ElasticsearchDomainStatus(entry, context));
};

const deserializeAws_restJson1_1ElasticsearchInstanceTypeList = (
  output: any,
  context: __SerdeContext
): (ESPartitionInstanceType | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1ElasticsearchVersionList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1ElasticsearchVersionStatus = (
  output: any,
  context: __SerdeContext
): ElasticsearchVersionStatus => {
  return {
    __type: "ElasticsearchVersionStatus",
    Options: output.Options !== undefined && output.Options !== null ? output.Options : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1_1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1EncryptionAtRestOptions = (
  output: any,
  context: __SerdeContext
): EncryptionAtRestOptions => {
  return {
    __type: "EncryptionAtRestOptions",
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined
  } as any;
};

const deserializeAws_restJson1_1EncryptionAtRestOptionsStatus = (
  output: any,
  context: __SerdeContext
): EncryptionAtRestOptionsStatus => {
  return {
    __type: "EncryptionAtRestOptionsStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1_1EncryptionAtRestOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1_1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1EndpointsMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1_1InstanceCountLimits = (output: any, context: __SerdeContext): InstanceCountLimits => {
  return {
    __type: "InstanceCountLimits",
    MaximumInstanceCount:
      output.MaximumInstanceCount !== undefined && output.MaximumInstanceCount !== null
        ? output.MaximumInstanceCount
        : undefined,
    MinimumInstanceCount:
      output.MinimumInstanceCount !== undefined && output.MinimumInstanceCount !== null
        ? output.MinimumInstanceCount
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InstanceLimits = (output: any, context: __SerdeContext): InstanceLimits => {
  return {
    __type: "InstanceLimits",
    InstanceCountLimits:
      output.InstanceCountLimits !== undefined && output.InstanceCountLimits !== null
        ? deserializeAws_restJson1_1InstanceCountLimits(output.InstanceCountLimits, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Issues = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1LimitValueList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Limits = (output: any, context: __SerdeContext): Limits => {
  return {
    __type: "Limits",
    AdditionalLimits:
      output.AdditionalLimits !== undefined && output.AdditionalLimits !== null
        ? deserializeAws_restJson1_1AdditionalLimitList(output.AdditionalLimits, context)
        : undefined,
    InstanceLimits:
      output.InstanceLimits !== undefined && output.InstanceLimits !== null
        ? deserializeAws_restJson1_1InstanceLimits(output.InstanceLimits, context)
        : undefined,
    StorageTypes:
      output.StorageTypes !== undefined && output.StorageTypes !== null
        ? deserializeAws_restJson1_1StorageTypeList(output.StorageTypes, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1LimitsByRole = (output: any, context: __SerdeContext): { [key: string]: Limits } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: Limits }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1_1Limits(value, context)
    }),
    {}
  );
};

const deserializeAws_restJson1_1LogPublishingOption = (output: any, context: __SerdeContext): LogPublishingOption => {
  return {
    __type: "LogPublishingOption",
    CloudWatchLogsLogGroupArn:
      output.CloudWatchLogsLogGroupArn !== undefined && output.CloudWatchLogsLogGroupArn !== null
        ? output.CloudWatchLogsLogGroupArn
        : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined
  } as any;
};

const deserializeAws_restJson1_1LogPublishingOptions = (
  output: any,
  context: __SerdeContext
): { [key: string]: LogPublishingOption } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: LogPublishingOption }, [key, value]: [LogType | string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1_1LogPublishingOption(value, context)
    }),
    {}
  );
};

const deserializeAws_restJson1_1LogPublishingOptionsStatus = (
  output: any,
  context: __SerdeContext
): LogPublishingOptionsStatus => {
  return {
    __type: "LogPublishingOptionsStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1_1LogPublishingOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1_1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1NodeToNodeEncryptionOptions = (
  output: any,
  context: __SerdeContext
): NodeToNodeEncryptionOptions => {
  return {
    __type: "NodeToNodeEncryptionOptions",
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined
  } as any;
};

const deserializeAws_restJson1_1NodeToNodeEncryptionOptionsStatus = (
  output: any,
  context: __SerdeContext
): NodeToNodeEncryptionOptionsStatus => {
  return {
    __type: "NodeToNodeEncryptionOptionsStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1_1NodeToNodeEncryptionOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1_1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1OptionStatus = (output: any, context: __SerdeContext): OptionStatus => {
  return {
    __type: "OptionStatus",
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    PendingDeletion:
      output.PendingDeletion !== undefined && output.PendingDeletion !== null ? output.PendingDeletion : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    UpdateDate:
      output.UpdateDate !== undefined && output.UpdateDate !== null
        ? new Date(Math.round(output.UpdateDate * 1000))
        : undefined,
    UpdateVersion:
      output.UpdateVersion !== undefined && output.UpdateVersion !== null ? output.UpdateVersion : undefined
  } as any;
};

const deserializeAws_restJson1_1RecurringCharge = (output: any, context: __SerdeContext): RecurringCharge => {
  return {
    __type: "RecurringCharge",
    RecurringChargeAmount:
      output.RecurringChargeAmount !== undefined && output.RecurringChargeAmount !== null
        ? output.RecurringChargeAmount
        : undefined,
    RecurringChargeFrequency:
      output.RecurringChargeFrequency !== undefined && output.RecurringChargeFrequency !== null
        ? output.RecurringChargeFrequency
        : undefined
  } as any;
};

const deserializeAws_restJson1_1RecurringChargeList = (output: any, context: __SerdeContext): RecurringCharge[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1_1RecurringCharge(entry, context));
};

const deserializeAws_restJson1_1ReservedElasticsearchInstance = (
  output: any,
  context: __SerdeContext
): ReservedElasticsearchInstance => {
  return {
    __type: "ReservedElasticsearchInstance",
    CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
    Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
    ElasticsearchInstanceCount:
      output.ElasticsearchInstanceCount !== undefined && output.ElasticsearchInstanceCount !== null
        ? output.ElasticsearchInstanceCount
        : undefined,
    ElasticsearchInstanceType:
      output.ElasticsearchInstanceType !== undefined && output.ElasticsearchInstanceType !== null
        ? output.ElasticsearchInstanceType
        : undefined,
    FixedPrice: output.FixedPrice !== undefined && output.FixedPrice !== null ? output.FixedPrice : undefined,
    PaymentOption:
      output.PaymentOption !== undefined && output.PaymentOption !== null ? output.PaymentOption : undefined,
    RecurringCharges:
      output.RecurringCharges !== undefined && output.RecurringCharges !== null
        ? deserializeAws_restJson1_1RecurringChargeList(output.RecurringCharges, context)
        : undefined,
    ReservationName:
      output.ReservationName !== undefined && output.ReservationName !== null ? output.ReservationName : undefined,
    ReservedElasticsearchInstanceId:
      output.ReservedElasticsearchInstanceId !== undefined && output.ReservedElasticsearchInstanceId !== null
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
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    UsagePrice: output.UsagePrice !== undefined && output.UsagePrice !== null ? output.UsagePrice : undefined
  } as any;
};

const deserializeAws_restJson1_1ReservedElasticsearchInstanceList = (
  output: any,
  context: __SerdeContext
): ReservedElasticsearchInstance[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1_1ReservedElasticsearchInstance(entry, context));
};

const deserializeAws_restJson1_1ReservedElasticsearchInstanceOffering = (
  output: any,
  context: __SerdeContext
): ReservedElasticsearchInstanceOffering => {
  return {
    __type: "ReservedElasticsearchInstanceOffering",
    CurrencyCode: output.CurrencyCode !== undefined && output.CurrencyCode !== null ? output.CurrencyCode : undefined,
    Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
    ElasticsearchInstanceType:
      output.ElasticsearchInstanceType !== undefined && output.ElasticsearchInstanceType !== null
        ? output.ElasticsearchInstanceType
        : undefined,
    FixedPrice: output.FixedPrice !== undefined && output.FixedPrice !== null ? output.FixedPrice : undefined,
    PaymentOption:
      output.PaymentOption !== undefined && output.PaymentOption !== null ? output.PaymentOption : undefined,
    RecurringCharges:
      output.RecurringCharges !== undefined && output.RecurringCharges !== null
        ? deserializeAws_restJson1_1RecurringChargeList(output.RecurringCharges, context)
        : undefined,
    ReservedElasticsearchInstanceOfferingId:
      output.ReservedElasticsearchInstanceOfferingId !== undefined &&
      output.ReservedElasticsearchInstanceOfferingId !== null
        ? output.ReservedElasticsearchInstanceOfferingId
        : undefined,
    UsagePrice: output.UsagePrice !== undefined && output.UsagePrice !== null ? output.UsagePrice : undefined
  } as any;
};

const deserializeAws_restJson1_1ReservedElasticsearchInstanceOfferingList = (
  output: any,
  context: __SerdeContext
): ReservedElasticsearchInstanceOffering[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ReservedElasticsearchInstanceOffering(entry, context)
  );
};

const deserializeAws_restJson1_1ServiceSoftwareOptions = (
  output: any,
  context: __SerdeContext
): ServiceSoftwareOptions => {
  return {
    __type: "ServiceSoftwareOptions",
    AutomatedUpdateDate:
      output.AutomatedUpdateDate !== undefined && output.AutomatedUpdateDate !== null
        ? new Date(Math.round(output.AutomatedUpdateDate * 1000))
        : undefined,
    Cancellable: output.Cancellable !== undefined && output.Cancellable !== null ? output.Cancellable : undefined,
    CurrentVersion:
      output.CurrentVersion !== undefined && output.CurrentVersion !== null ? output.CurrentVersion : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    NewVersion: output.NewVersion !== undefined && output.NewVersion !== null ? output.NewVersion : undefined,
    UpdateAvailable:
      output.UpdateAvailable !== undefined && output.UpdateAvailable !== null ? output.UpdateAvailable : undefined,
    UpdateStatus: output.UpdateStatus !== undefined && output.UpdateStatus !== null ? output.UpdateStatus : undefined
  } as any;
};

const deserializeAws_restJson1_1SnapshotOptions = (output: any, context: __SerdeContext): SnapshotOptions => {
  return {
    __type: "SnapshotOptions",
    AutomatedSnapshotStartHour:
      output.AutomatedSnapshotStartHour !== undefined && output.AutomatedSnapshotStartHour !== null
        ? output.AutomatedSnapshotStartHour
        : undefined
  } as any;
};

const deserializeAws_restJson1_1SnapshotOptionsStatus = (
  output: any,
  context: __SerdeContext
): SnapshotOptionsStatus => {
  return {
    __type: "SnapshotOptionsStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1_1SnapshotOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1_1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1StorageType = (output: any, context: __SerdeContext): StorageType => {
  return {
    __type: "StorageType",
    StorageSubTypeName:
      output.StorageSubTypeName !== undefined && output.StorageSubTypeName !== null
        ? output.StorageSubTypeName
        : undefined,
    StorageTypeLimits:
      output.StorageTypeLimits !== undefined && output.StorageTypeLimits !== null
        ? deserializeAws_restJson1_1StorageTypeLimitList(output.StorageTypeLimits, context)
        : undefined,
    StorageTypeName:
      output.StorageTypeName !== undefined && output.StorageTypeName !== null ? output.StorageTypeName : undefined
  } as any;
};

const deserializeAws_restJson1_1StorageTypeLimit = (output: any, context: __SerdeContext): StorageTypeLimit => {
  return {
    __type: "StorageTypeLimit",
    LimitName: output.LimitName !== undefined && output.LimitName !== null ? output.LimitName : undefined,
    LimitValues:
      output.LimitValues !== undefined && output.LimitValues !== null
        ? deserializeAws_restJson1_1LimitValueList(output.LimitValues, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1StorageTypeLimitList = (output: any, context: __SerdeContext): StorageTypeLimit[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1_1StorageTypeLimit(entry, context));
};

const deserializeAws_restJson1_1StorageTypeList = (output: any, context: __SerdeContext): StorageType[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1_1StorageType(entry, context));
};

const deserializeAws_restJson1_1StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    __type: "Tag",
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined
  } as any;
};

const deserializeAws_restJson1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1_1Tag(entry, context));
};

const deserializeAws_restJson1_1UpgradeHistory = (output: any, context: __SerdeContext): UpgradeHistory => {
  return {
    __type: "UpgradeHistory",
    StartTimestamp:
      output.StartTimestamp !== undefined && output.StartTimestamp !== null
        ? new Date(Math.round(output.StartTimestamp * 1000))
        : undefined,
    StepsList:
      output.StepsList !== undefined && output.StepsList !== null
        ? deserializeAws_restJson1_1UpgradeStepsList(output.StepsList, context)
        : undefined,
    UpgradeName: output.UpgradeName !== undefined && output.UpgradeName !== null ? output.UpgradeName : undefined,
    UpgradeStatus:
      output.UpgradeStatus !== undefined && output.UpgradeStatus !== null ? output.UpgradeStatus : undefined
  } as any;
};

const deserializeAws_restJson1_1UpgradeHistoryList = (output: any, context: __SerdeContext): UpgradeHistory[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1_1UpgradeHistory(entry, context));
};

const deserializeAws_restJson1_1UpgradeStepItem = (output: any, context: __SerdeContext): UpgradeStepItem => {
  return {
    __type: "UpgradeStepItem",
    Issues:
      output.Issues !== undefined && output.Issues !== null
        ? deserializeAws_restJson1_1Issues(output.Issues, context)
        : undefined,
    ProgressPercent:
      output.ProgressPercent !== undefined && output.ProgressPercent !== null ? output.ProgressPercent : undefined,
    UpgradeStep: output.UpgradeStep !== undefined && output.UpgradeStep !== null ? output.UpgradeStep : undefined,
    UpgradeStepStatus:
      output.UpgradeStepStatus !== undefined && output.UpgradeStepStatus !== null ? output.UpgradeStepStatus : undefined
  } as any;
};

const deserializeAws_restJson1_1UpgradeStepsList = (output: any, context: __SerdeContext): UpgradeStepItem[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1_1UpgradeStepItem(entry, context));
};

const deserializeAws_restJson1_1VPCDerivedInfo = (output: any, context: __SerdeContext): VPCDerivedInfo => {
  return {
    __type: "VPCDerivedInfo",
    AvailabilityZones:
      output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
        ? deserializeAws_restJson1_1StringList(output.AvailabilityZones, context)
        : undefined,
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_restJson1_1StringList(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_restJson1_1StringList(output.SubnetIds, context)
        : undefined,
    VPCId: output.VPCId !== undefined && output.VPCId !== null ? output.VPCId : undefined
  } as any;
};

const deserializeAws_restJson1_1VPCDerivedInfoStatus = (output: any, context: __SerdeContext): VPCDerivedInfoStatus => {
  return {
    __type: "VPCDerivedInfoStatus",
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1_1VPCDerivedInfo(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1_1OptionStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ZoneAwarenessConfig = (output: any, context: __SerdeContext): ZoneAwarenessConfig => {
  return {
    __type: "ZoneAwarenessConfig",
    AvailabilityZoneCount:
      output.AvailabilityZoneCount !== undefined && output.AvailabilityZoneCount !== null
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
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
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
  const findKey = (object: any, key: string) => Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

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
