import {
  CreateUserCommandInput,
  CreateUserCommandOutput
} from "../commands/CreateUserCommand";
import {
  DeleteUserCommandInput,
  DeleteUserCommandOutput
} from "../commands/DeleteUserCommand";
import {
  DescribeUserCommandInput,
  DescribeUserCommandOutput
} from "../commands/DescribeUserCommand";
import {
  DescribeUserHierarchyGroupCommandInput,
  DescribeUserHierarchyGroupCommandOutput
} from "../commands/DescribeUserHierarchyGroupCommand";
import {
  DescribeUserHierarchyStructureCommandInput,
  DescribeUserHierarchyStructureCommandOutput
} from "../commands/DescribeUserHierarchyStructureCommand";
import {
  GetContactAttributesCommandInput,
  GetContactAttributesCommandOutput
} from "../commands/GetContactAttributesCommand";
import {
  GetCurrentMetricDataCommandInput,
  GetCurrentMetricDataCommandOutput
} from "../commands/GetCurrentMetricDataCommand";
import {
  GetFederationTokenCommandInput,
  GetFederationTokenCommandOutput
} from "../commands/GetFederationTokenCommand";
import {
  GetMetricDataCommandInput,
  GetMetricDataCommandOutput
} from "../commands/GetMetricDataCommand";
import {
  ListContactFlowsCommandInput,
  ListContactFlowsCommandOutput
} from "../commands/ListContactFlowsCommand";
import {
  ListHoursOfOperationsCommandInput,
  ListHoursOfOperationsCommandOutput
} from "../commands/ListHoursOfOperationsCommand";
import {
  ListPhoneNumbersCommandInput,
  ListPhoneNumbersCommandOutput
} from "../commands/ListPhoneNumbersCommand";
import {
  ListQueuesCommandInput,
  ListQueuesCommandOutput
} from "../commands/ListQueuesCommand";
import {
  ListRoutingProfilesCommandInput,
  ListRoutingProfilesCommandOutput
} from "../commands/ListRoutingProfilesCommand";
import {
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput
} from "../commands/ListSecurityProfilesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListUserHierarchyGroupsCommandInput,
  ListUserHierarchyGroupsCommandOutput
} from "../commands/ListUserHierarchyGroupsCommand";
import {
  ListUsersCommandInput,
  ListUsersCommandOutput
} from "../commands/ListUsersCommand";
import {
  StartChatContactCommandInput,
  StartChatContactCommandOutput
} from "../commands/StartChatContactCommand";
import {
  StartOutboundVoiceContactCommandInput,
  StartOutboundVoiceContactCommandOutput
} from "../commands/StartOutboundVoiceContactCommand";
import {
  StopContactCommandInput,
  StopContactCommandOutput
} from "../commands/StopContactCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateContactAttributesCommandInput,
  UpdateContactAttributesCommandOutput
} from "../commands/UpdateContactAttributesCommand";
import {
  UpdateUserHierarchyCommandInput,
  UpdateUserHierarchyCommandOutput
} from "../commands/UpdateUserHierarchyCommand";
import {
  UpdateUserIdentityInfoCommandInput,
  UpdateUserIdentityInfoCommandOutput
} from "../commands/UpdateUserIdentityInfoCommand";
import {
  UpdateUserPhoneConfigCommandInput,
  UpdateUserPhoneConfigCommandOutput
} from "../commands/UpdateUserPhoneConfigCommand";
import {
  UpdateUserRoutingProfileCommandInput,
  UpdateUserRoutingProfileCommandOutput
} from "../commands/UpdateUserRoutingProfileCommand";
import {
  UpdateUserSecurityProfilesCommandInput,
  UpdateUserSecurityProfilesCommandOutput
} from "../commands/UpdateUserSecurityProfilesCommand";
import {
  Channel,
  ChatMessage,
  ContactFlowSummary,
  ContactNotFoundException,
  Credentials,
  CurrentMetric,
  CurrentMetricData,
  CurrentMetricResult,
  DestinationNotAllowedException,
  Dimensions,
  DuplicateResourceException,
  Filters,
  Grouping,
  HierarchyGroup,
  HierarchyGroupSummary,
  HierarchyLevel,
  HierarchyPath,
  HierarchyStructure,
  HistoricalMetric,
  HistoricalMetricData,
  HistoricalMetricResult,
  HoursOfOperationSummary,
  InternalServiceException,
  InvalidParameterException,
  InvalidRequestException,
  LimitExceededException,
  OutboundContactNotPermittedException,
  ParticipantDetails,
  PhoneNumberSummary,
  QueueReference,
  QueueSummary,
  ResourceNotFoundException,
  RoutingProfileSummary,
  SecurityProfileSummary,
  Threshold,
  ThrottlingException,
  User,
  UserIdentityInfo,
  UserNotFoundException,
  UserPhoneConfig,
  UserSummary
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
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1_1CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/users/{InstanceId}";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.DirectoryUserId !== undefined) {
    bodyParams["DirectoryUserId"] = input.DirectoryUserId;
  }
  if (input.HierarchyGroupId !== undefined) {
    bodyParams["HierarchyGroupId"] = input.HierarchyGroupId;
  }
  if (input.IdentityInfo !== undefined) {
    bodyParams["IdentityInfo"] = serializeAws_restJson1_1UserIdentityInfo(
      input.IdentityInfo,
      context
    );
  }
  if (input.Password !== undefined) {
    bodyParams["Password"] = input.Password;
  }
  if (input.PhoneConfig !== undefined) {
    bodyParams["PhoneConfig"] = serializeAws_restJson1_1UserPhoneConfig(
      input.PhoneConfig,
      context
    );
  }
  if (input.RoutingProfileId !== undefined) {
    bodyParams["RoutingProfileId"] = input.RoutingProfileId;
  }
  if (input.SecurityProfileIds !== undefined) {
    bodyParams[
      "SecurityProfileIds"
    ] = serializeAws_restJson1_1SecurityProfileIds(
      input.SecurityProfileIds,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagMap(input.Tags, context);
  }
  if (input.Username !== undefined) {
    bodyParams["Username"] = input.Username;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/users/{InstanceId}/{UserId}";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
  }
  if (input.UserId !== undefined) {
    const labelValue: string = input.UserId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserId.");
    }
    resolvedPath = resolvedPath.replace(
      "{UserId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: UserId.");
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

export const serializeAws_restJson1_1DescribeUserCommand = async (
  input: DescribeUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/users/{InstanceId}/{UserId}";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
  }
  if (input.UserId !== undefined) {
    const labelValue: string = input.UserId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserId.");
    }
    resolvedPath = resolvedPath.replace(
      "{UserId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: UserId.");
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

export const serializeAws_restJson1_1DescribeUserHierarchyGroupCommand = async (
  input: DescribeUserHierarchyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}";
  if (input.HierarchyGroupId !== undefined) {
    const labelValue: string = input.HierarchyGroupId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: HierarchyGroupId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{HierarchyGroupId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: HierarchyGroupId."
    );
  }
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
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

export const serializeAws_restJson1_1DescribeUserHierarchyStructureCommand = async (
  input: DescribeUserHierarchyStructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/user-hierarchy-structure/{InstanceId}";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
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

export const serializeAws_restJson1_1GetContactAttributesCommand = async (
  input: GetContactAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/contact/attributes/{InstanceId}/{InitialContactId}";
  if (input.InitialContactId !== undefined) {
    const labelValue: string = input.InitialContactId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: InitialContactId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{InitialContactId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: InitialContactId."
    );
  }
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
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

export const serializeAws_restJson1_1GetCurrentMetricDataCommand = async (
  input: GetCurrentMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/metrics/current/{InstanceId}";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.CurrentMetrics !== undefined) {
    bodyParams["CurrentMetrics"] = serializeAws_restJson1_1CurrentMetrics(
      input.CurrentMetrics,
      context
    );
  }
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_restJson1_1Filters(
      input.Filters,
      context
    );
  }
  if (input.Groupings !== undefined) {
    bodyParams["Groupings"] = serializeAws_restJson1_1Groupings(
      input.Groupings,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  body = JSON.stringify(bodyParams);
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

export const serializeAws_restJson1_1GetFederationTokenCommand = async (
  input: GetFederationTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/user/federate/{InstanceId}";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
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

export const serializeAws_restJson1_1GetMetricDataCommand = async (
  input: GetMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/metrics/historical/{InstanceId}";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.EndTime !== undefined) {
    bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
  }
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_restJson1_1Filters(
      input.Filters,
      context
    );
  }
  if (input.Groupings !== undefined) {
    bodyParams["Groupings"] = serializeAws_restJson1_1Groupings(
      input.Groupings,
      context
    );
  }
  if (input.HistoricalMetrics !== undefined) {
    bodyParams["HistoricalMetrics"] = serializeAws_restJson1_1HistoricalMetrics(
      input.HistoricalMetrics,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.StartTime !== undefined) {
    bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
  }
  body = JSON.stringify(bodyParams);
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

export const serializeAws_restJson1_1ListContactFlowsCommand = async (
  input: ListContactFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/contact-flows-summary/{InstanceId}";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
  }
  const query: any = {
    ...(input.ContactFlowTypes !== undefined && {
      contactFlowTypes: (input.ContactFlowTypes || []).map(_entry => _entry)
    }),
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

export const serializeAws_restJson1_1ListHoursOfOperationsCommand = async (
  input: ListHoursOfOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/hours-of-operations-summary/{InstanceId}";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
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

export const serializeAws_restJson1_1ListPhoneNumbersCommand = async (
  input: ListPhoneNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/phone-numbers-summary/{InstanceId}";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.PhoneNumberCountryCodes !== undefined && {
      phoneNumberCountryCodes: (input.PhoneNumberCountryCodes || []).map(
        _entry => _entry
      )
    }),
    ...(input.PhoneNumberTypes !== undefined && {
      phoneNumberTypes: (input.PhoneNumberTypes || []).map(_entry => _entry)
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

export const serializeAws_restJson1_1ListQueuesCommand = async (
  input: ListQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/queues-summary/{InstanceId}";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.QueueTypes !== undefined && {
      queueTypes: (input.QueueTypes || []).map(_entry => _entry)
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

export const serializeAws_restJson1_1ListRoutingProfilesCommand = async (
  input: ListRoutingProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/routing-profiles-summary/{InstanceId}";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
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

export const serializeAws_restJson1_1ListSecurityProfilesCommand = async (
  input: ListSecurityProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/security-profiles-summary/{InstanceId}";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
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

export const serializeAws_restJson1_1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1_1ListUserHierarchyGroupsCommand = async (
  input: ListUserHierarchyGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/user-hierarchy-groups-summary/{InstanceId}";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
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

export const serializeAws_restJson1_1ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/users-summary/{InstanceId}";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
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

export const serializeAws_restJson1_1StartChatContactCommand = async (
  input: StartChatContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/contact/chat";
  let body: any;
  const bodyParams: any = {};
  if (input.Attributes !== undefined) {
    bodyParams["Attributes"] = serializeAws_restJson1_1Attributes(
      input.Attributes,
      context
    );
  }
  if (input.ClientToken === undefined) {
    input.ClientToken = generateIdempotencyToken();
  }
  if (input.ClientToken !== undefined) {
    bodyParams["ClientToken"] = input.ClientToken;
  }
  if (input.ContactFlowId !== undefined) {
    bodyParams["ContactFlowId"] = input.ContactFlowId;
  }
  if (input.InitialMessage !== undefined) {
    bodyParams["InitialMessage"] = serializeAws_restJson1_1ChatMessage(
      input.InitialMessage,
      context
    );
  }
  if (input.InstanceId !== undefined) {
    bodyParams["InstanceId"] = input.InstanceId;
  }
  if (input.ParticipantDetails !== undefined) {
    bodyParams[
      "ParticipantDetails"
    ] = serializeAws_restJson1_1ParticipantDetails(
      input.ParticipantDetails,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1StartOutboundVoiceContactCommand = async (
  input: StartOutboundVoiceContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/contact/outbound-voice";
  let body: any;
  const bodyParams: any = {};
  if (input.Attributes !== undefined) {
    bodyParams["Attributes"] = serializeAws_restJson1_1Attributes(
      input.Attributes,
      context
    );
  }
  if (input.ClientToken === undefined) {
    input.ClientToken = generateIdempotencyToken();
  }
  if (input.ClientToken !== undefined) {
    bodyParams["ClientToken"] = input.ClientToken;
  }
  if (input.ContactFlowId !== undefined) {
    bodyParams["ContactFlowId"] = input.ContactFlowId;
  }
  if (input.DestinationPhoneNumber !== undefined) {
    bodyParams["DestinationPhoneNumber"] = input.DestinationPhoneNumber;
  }
  if (input.InstanceId !== undefined) {
    bodyParams["InstanceId"] = input.InstanceId;
  }
  if (input.QueueId !== undefined) {
    bodyParams["QueueId"] = input.QueueId;
  }
  if (input.SourcePhoneNumber !== undefined) {
    bodyParams["SourcePhoneNumber"] = input.SourcePhoneNumber;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1StopContactCommand = async (
  input: StopContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/contact/stop";
  let body: any;
  const bodyParams: any = {};
  if (input.ContactId !== undefined) {
    bodyParams["ContactId"] = input.ContactId;
  }
  if (input.InstanceId !== undefined) {
    bodyParams["InstanceId"] = input.InstanceId;
  }
  body = JSON.stringify(bodyParams);
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

export const serializeAws_restJson1_1TagResourceCommand = async (
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
  const bodyParams: any = {};
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
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

export const serializeAws_restJson1_1UntagResourceCommand = async (
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

export const serializeAws_restJson1_1UpdateContactAttributesCommand = async (
  input: UpdateContactAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/contact/attributes";
  let body: any;
  const bodyParams: any = {};
  if (input.Attributes !== undefined) {
    bodyParams["Attributes"] = serializeAws_restJson1_1Attributes(
      input.Attributes,
      context
    );
  }
  if (input.InitialContactId !== undefined) {
    bodyParams["InitialContactId"] = input.InitialContactId;
  }
  if (input.InstanceId !== undefined) {
    bodyParams["InstanceId"] = input.InstanceId;
  }
  body = JSON.stringify(bodyParams);
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

export const serializeAws_restJson1_1UpdateUserHierarchyCommand = async (
  input: UpdateUserHierarchyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/users/{InstanceId}/{UserId}/hierarchy";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
  }
  if (input.UserId !== undefined) {
    const labelValue: string = input.UserId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserId.");
    }
    resolvedPath = resolvedPath.replace(
      "{UserId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: UserId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.HierarchyGroupId !== undefined) {
    bodyParams["HierarchyGroupId"] = input.HierarchyGroupId;
  }
  body = JSON.stringify(bodyParams);
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

export const serializeAws_restJson1_1UpdateUserIdentityInfoCommand = async (
  input: UpdateUserIdentityInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/users/{InstanceId}/{UserId}/identity-info";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
  }
  if (input.UserId !== undefined) {
    const labelValue: string = input.UserId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserId.");
    }
    resolvedPath = resolvedPath.replace(
      "{UserId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: UserId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.IdentityInfo !== undefined) {
    bodyParams["IdentityInfo"] = serializeAws_restJson1_1UserIdentityInfo(
      input.IdentityInfo,
      context
    );
  }
  body = JSON.stringify(bodyParams);
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

export const serializeAws_restJson1_1UpdateUserPhoneConfigCommand = async (
  input: UpdateUserPhoneConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/users/{InstanceId}/{UserId}/phone-config";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
  }
  if (input.UserId !== undefined) {
    const labelValue: string = input.UserId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserId.");
    }
    resolvedPath = resolvedPath.replace(
      "{UserId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: UserId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.PhoneConfig !== undefined) {
    bodyParams["PhoneConfig"] = serializeAws_restJson1_1UserPhoneConfig(
      input.PhoneConfig,
      context
    );
  }
  body = JSON.stringify(bodyParams);
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

export const serializeAws_restJson1_1UpdateUserRoutingProfileCommand = async (
  input: UpdateUserRoutingProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/users/{InstanceId}/{UserId}/routing-profile";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
  }
  if (input.UserId !== undefined) {
    const labelValue: string = input.UserId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserId.");
    }
    resolvedPath = resolvedPath.replace(
      "{UserId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: UserId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.RoutingProfileId !== undefined) {
    bodyParams["RoutingProfileId"] = input.RoutingProfileId;
  }
  body = JSON.stringify(bodyParams);
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

export const serializeAws_restJson1_1UpdateUserSecurityProfilesCommand = async (
  input: UpdateUserSecurityProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/users/{InstanceId}/{UserId}/security-profiles";
  if (input.InstanceId !== undefined) {
    const labelValue: string = input.InstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InstanceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InstanceId.");
  }
  if (input.UserId !== undefined) {
    const labelValue: string = input.UserId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserId.");
    }
    resolvedPath = resolvedPath.replace(
      "{UserId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: UserId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.SecurityProfileIds !== undefined) {
    bodyParams[
      "SecurityProfileIds"
    ] = serializeAws_restJson1_1SecurityProfileIds(
      input.SecurityProfileIds,
      context
    );
  }
  body = JSON.stringify(bodyParams);
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

export const deserializeAws_restJson1_1CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateUserCommandError(output, context);
  }
  const contents: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateUserResponse",
    UserArn: undefined,
    UserId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.UserArn !== undefined && data.UserArn !== null) {
    contents.UserArn = data.UserArn;
  }
  if (data.UserId !== undefined && data.UserId !== null) {
    contents.UserId = data.UserId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.amazonconnectservice.v20170808#DuplicateResourceException":
      response = {
        ...(await deserializeAws_restJson1_1DuplicateResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amazonconnectservice.v20170808#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteUserCommandError(output, context);
  }
  const contents: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1DescribeUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeUserCommandError(output, context);
  }
  const contents: DescribeUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeUserResponse",
    User: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.User !== undefined && data.User !== null) {
    contents.User = deserializeAws_restJson1_1User(data.User, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1DescribeUserHierarchyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserHierarchyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeUserHierarchyGroupCommandError(
      output,
      context
    );
  }
  const contents: DescribeUserHierarchyGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeUserHierarchyGroupResponse",
    HierarchyGroup: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.HierarchyGroup !== undefined && data.HierarchyGroup !== null) {
    contents.HierarchyGroup = deserializeAws_restJson1_1HierarchyGroup(
      data.HierarchyGroup,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeUserHierarchyGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserHierarchyGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1DescribeUserHierarchyStructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserHierarchyStructureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeUserHierarchyStructureCommandError(
      output,
      context
    );
  }
  const contents: DescribeUserHierarchyStructureCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeUserHierarchyStructureResponse",
    HierarchyStructure: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.HierarchyStructure !== undefined &&
    data.HierarchyStructure !== null
  ) {
    contents.HierarchyStructure = deserializeAws_restJson1_1HierarchyStructure(
      data.HierarchyStructure,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeUserHierarchyStructureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserHierarchyStructureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1GetContactAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetContactAttributesCommandError(
      output,
      context
    );
  }
  const contents: GetContactAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetContactAttributesResponse",
    Attributes: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Attributes !== undefined && data.Attributes !== null) {
    contents.Attributes = deserializeAws_restJson1_1Attributes(
      data.Attributes,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetContactAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1GetCurrentMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCurrentMetricDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetCurrentMetricDataCommandError(
      output,
      context
    );
  }
  const contents: GetCurrentMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCurrentMetricDataResponse",
    DataSnapshotTime: undefined,
    MetricResults: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DataSnapshotTime !== undefined && data.DataSnapshotTime !== null) {
    contents.DataSnapshotTime = new Date(
      Math.round(data.DataSnapshotTime * 1000)
    );
  }
  if (data.MetricResults !== undefined && data.MetricResults !== null) {
    contents.MetricResults = deserializeAws_restJson1_1CurrentMetricResults(
      data.MetricResults,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetCurrentMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCurrentMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1GetFederationTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFederationTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetFederationTokenCommandError(
      output,
      context
    );
  }
  const contents: GetFederationTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFederationTokenResponse",
    Credentials: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Credentials !== undefined && data.Credentials !== null) {
    contents.Credentials = deserializeAws_restJson1_1Credentials(
      data.Credentials,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetFederationTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFederationTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateResourceException":
    case "com.amazonaws.amazonconnectservice.v20170808#DuplicateResourceException":
      response = {
        ...(await deserializeAws_restJson1_1DuplicateResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UserNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#UserNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1UserNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1GetMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetMetricDataCommandError(output, context);
  }
  const contents: GetMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMetricDataResponse",
    MetricResults: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.MetricResults !== undefined && data.MetricResults !== null) {
    contents.MetricResults = deserializeAws_restJson1_1HistoricalMetricResults(
      data.MetricResults,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1ListContactFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactFlowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListContactFlowsCommandError(
      output,
      context
    );
  }
  const contents: ListContactFlowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListContactFlowsResponse",
    ContactFlowSummaryList: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.ContactFlowSummaryList !== undefined &&
    data.ContactFlowSummaryList !== null
  ) {
    contents.ContactFlowSummaryList = deserializeAws_restJson1_1ContactFlowSummaryList(
      data.ContactFlowSummaryList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListContactFlowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactFlowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1ListHoursOfOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHoursOfOperationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListHoursOfOperationsCommandError(
      output,
      context
    );
  }
  const contents: ListHoursOfOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListHoursOfOperationsResponse",
    HoursOfOperationSummaryList: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.HoursOfOperationSummaryList !== undefined &&
    data.HoursOfOperationSummaryList !== null
  ) {
    contents.HoursOfOperationSummaryList = deserializeAws_restJson1_1HoursOfOperationSummaryList(
      data.HoursOfOperationSummaryList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListHoursOfOperationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHoursOfOperationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1ListPhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListPhoneNumbersCommandError(
      output,
      context
    );
  }
  const contents: ListPhoneNumbersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPhoneNumbersResponse",
    NextToken: undefined,
    PhoneNumberSummaryList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (
    data.PhoneNumberSummaryList !== undefined &&
    data.PhoneNumberSummaryList !== null
  ) {
    contents.PhoneNumberSummaryList = deserializeAws_restJson1_1PhoneNumberSummaryList(
      data.PhoneNumberSummaryList,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListPhoneNumbersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1ListQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListQueuesCommandError(output, context);
  }
  const contents: ListQueuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListQueuesResponse",
    NextToken: undefined,
    QueueSummaryList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.QueueSummaryList !== undefined && data.QueueSummaryList !== null) {
    contents.QueueSummaryList = deserializeAws_restJson1_1QueueSummaryList(
      data.QueueSummaryList,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListQueuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1ListRoutingProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutingProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListRoutingProfilesCommandError(
      output,
      context
    );
  }
  const contents: ListRoutingProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRoutingProfilesResponse",
    NextToken: undefined,
    RoutingProfileSummaryList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (
    data.RoutingProfileSummaryList !== undefined &&
    data.RoutingProfileSummaryList !== null
  ) {
    contents.RoutingProfileSummaryList = deserializeAws_restJson1_1RoutingProfileSummaryList(
      data.RoutingProfileSummaryList,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListRoutingProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutingProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1ListSecurityProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListSecurityProfilesCommandError(
      output,
      context
    );
  }
  const contents: ListSecurityProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSecurityProfilesResponse",
    NextToken: undefined,
    SecurityProfileSummaryList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (
    data.SecurityProfileSummaryList !== undefined &&
    data.SecurityProfileSummaryList !== null
  ) {
    contents.SecurityProfileSummaryList = deserializeAws_restJson1_1SecurityProfileSummaryList(
      data.SecurityProfileSummaryList,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListSecurityProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
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
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListTagsForResourceCommandError = async (
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
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1ListUserHierarchyGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserHierarchyGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListUserHierarchyGroupsCommandError(
      output,
      context
    );
  }
  const contents: ListUserHierarchyGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListUserHierarchyGroupsResponse",
    NextToken: undefined,
    UserHierarchyGroupSummaryList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (
    data.UserHierarchyGroupSummaryList !== undefined &&
    data.UserHierarchyGroupSummaryList !== null
  ) {
    contents.UserHierarchyGroupSummaryList = deserializeAws_restJson1_1HierarchyGroupSummaryList(
      data.UserHierarchyGroupSummaryList,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListUserHierarchyGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserHierarchyGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListUsersCommandError(output, context);
  }
  const contents: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListUsersResponse",
    NextToken: undefined,
    UserSummaryList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.UserSummaryList !== undefined && data.UserSummaryList !== null) {
    contents.UserSummaryList = deserializeAws_restJson1_1UserSummaryList(
      data.UserSummaryList,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1StartChatContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChatContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartChatContactCommandError(
      output,
      context
    );
  }
  const contents: StartChatContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartChatContactResponse",
    ContactId: undefined,
    ParticipantId: undefined,
    ParticipantToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ContactId !== undefined && data.ContactId !== null) {
    contents.ContactId = data.ContactId;
  }
  if (data.ParticipantId !== undefined && data.ParticipantId !== null) {
    contents.ParticipantId = data.ParticipantId;
  }
  if (data.ParticipantToken !== undefined && data.ParticipantToken !== null) {
    contents.ParticipantToken = data.ParticipantToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1StartChatContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChatContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amazonconnectservice.v20170808#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1StartOutboundVoiceContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOutboundVoiceContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartOutboundVoiceContactCommandError(
      output,
      context
    );
  }
  const contents: StartOutboundVoiceContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartOutboundVoiceContactResponse",
    ContactId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ContactId !== undefined && data.ContactId !== null) {
    contents.ContactId = data.ContactId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1StartOutboundVoiceContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOutboundVoiceContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DestinationNotAllowedException":
    case "com.amazonaws.amazonconnectservice.v20170808#DestinationNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1_1DestinationNotAllowedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.amazonconnectservice.v20170808#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OutboundContactNotPermittedException":
    case "com.amazonaws.amazonconnectservice.v20170808#OutboundContactNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OutboundContactNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1StopContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StopContactCommandError(output, context);
  }
  const contents: StopContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopContactResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1StopContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContactNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ContactNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ContactNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1TagResourceCommandError = async (
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
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UntagResourceCommandError = async (
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
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateContactAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateContactAttributesCommandError(
      output,
      context
    );
  }
  const contents: UpdateContactAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateContactAttributesResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateContactAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateUserHierarchyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserHierarchyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateUserHierarchyCommandError(
      output,
      context
    );
  }
  const contents: UpdateUserHierarchyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateUserHierarchyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserHierarchyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateUserIdentityInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserIdentityInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateUserIdentityInfoCommandError(
      output,
      context
    );
  }
  const contents: UpdateUserIdentityInfoCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateUserIdentityInfoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserIdentityInfoCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateUserPhoneConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserPhoneConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateUserPhoneConfigCommandError(
      output,
      context
    );
  }
  const contents: UpdateUserPhoneConfigCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateUserPhoneConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserPhoneConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateUserRoutingProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserRoutingProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateUserRoutingProfileCommandError(
      output,
      context
    );
  }
  const contents: UpdateUserRoutingProfileCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateUserRoutingProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserRoutingProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateUserSecurityProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserSecurityProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateUserSecurityProfilesCommandError(
      output,
      context
    );
  }
  const contents: UpdateUserSecurityProfilesCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateUserSecurityProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserSecurityProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.amazonconnectservice.v20170808#InternalServiceException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.amazonconnectservice.v20170808#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.amazonconnectservice.v20170808#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.amazonconnectservice.v20170808#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

const deserializeAws_restJson1_1ContactNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ContactNotFoundException> => {
  const contents: ContactNotFoundException = {
    name: "ContactNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1DestinationNotAllowedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DestinationNotAllowedException> => {
  const contents: DestinationNotAllowedException = {
    name: "DestinationNotAllowedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1DuplicateResourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateResourceException> => {
  const contents: DuplicateResourceException = {
    name: "DuplicateResourceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: InternalServiceException = {
    name: "InternalServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1OutboundContactNotPermittedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OutboundContactNotPermittedException> => {
  const contents: OutboundContactNotPermittedException = {
    name: "OutboundContactNotPermittedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1UserNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserNotFoundException> => {
  const contents: UserNotFoundException = {
    name: "UserNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1Attributes = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = input[key];
    return acc;
  }, {});
};

const serializeAws_restJson1_1ChatMessage = (
  input: ChatMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Content !== undefined && { Content: input.Content }),
    ...(input.ContentType !== undefined && { ContentType: input.ContentType })
  };
};

const serializeAws_restJson1_1ParticipantDetails = (
  input: ParticipantDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DisplayName !== undefined && { DisplayName: input.DisplayName })
  };
};

const serializeAws_restJson1_1Channels = (
  input: (Channel | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1CurrentMetric = (
  input: CurrentMetric,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Unit !== undefined && { Unit: input.Unit })
  };
};

const serializeAws_restJson1_1CurrentMetrics = (
  input: CurrentMetric[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1CurrentMetric(entry, context)
  );
};

const serializeAws_restJson1_1Filters = (
  input: Filters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Channels !== undefined && {
      Channels: serializeAws_restJson1_1Channels(input.Channels, context)
    }),
    ...(input.Queues !== undefined && {
      Queues: serializeAws_restJson1_1Queues(input.Queues, context)
    })
  };
};

const serializeAws_restJson1_1Groupings = (
  input: (Grouping | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1HistoricalMetric = (
  input: HistoricalMetric,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Statistic !== undefined && { Statistic: input.Statistic }),
    ...(input.Threshold !== undefined && {
      Threshold: serializeAws_restJson1_1Threshold(input.Threshold, context)
    }),
    ...(input.Unit !== undefined && { Unit: input.Unit })
  };
};

const serializeAws_restJson1_1HistoricalMetrics = (
  input: HistoricalMetric[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1HistoricalMetric(entry, context)
  );
};

const serializeAws_restJson1_1Queues = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1Threshold = (
  input: Threshold,
  context: __SerdeContext
): any => {
  return {
    ...(input.Comparison !== undefined && { Comparison: input.Comparison }),
    ...(input.ThresholdValue !== undefined && {
      ThresholdValue: input.ThresholdValue
    })
  };
};

const serializeAws_restJson1_1SecurityProfileIds = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = input[key];
    return acc;
  }, {});
};

const serializeAws_restJson1_1UserIdentityInfo = (
  input: UserIdentityInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.Email !== undefined && { Email: input.Email }),
    ...(input.FirstName !== undefined && { FirstName: input.FirstName }),
    ...(input.LastName !== undefined && { LastName: input.LastName })
  };
};

const serializeAws_restJson1_1UserPhoneConfig = (
  input: UserPhoneConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.AfterContactWorkTimeLimit !== undefined && {
      AfterContactWorkTimeLimit: input.AfterContactWorkTimeLimit
    }),
    ...(input.AutoAccept !== undefined && { AutoAccept: input.AutoAccept }),
    ...(input.DeskPhoneNumber !== undefined && {
      DeskPhoneNumber: input.DeskPhoneNumber
    }),
    ...(input.PhoneType !== undefined && { PhoneType: input.PhoneType })
  };
};

const deserializeAws_restJson1_1Attributes = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = output[key];
    return acc;
  }, {});
};

const deserializeAws_restJson1_1CurrentMetric = (
  output: any,
  context: __SerdeContext
): CurrentMetric => {
  let contents: any = {
    __type: "CurrentMetric",
    Name: undefined,
    Unit: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Unit !== undefined && output.Unit !== null) {
    contents.Unit = output.Unit;
  }
  return contents;
};

const deserializeAws_restJson1_1CurrentMetricData = (
  output: any,
  context: __SerdeContext
): CurrentMetricData => {
  let contents: any = {
    __type: "CurrentMetricData",
    Metric: undefined,
    Value: undefined
  };
  if (output.Metric !== undefined && output.Metric !== null) {
    contents.Metric = deserializeAws_restJson1_1CurrentMetric(
      output.Metric,
      context
    );
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_restJson1_1CurrentMetricDataCollections = (
  output: any,
  context: __SerdeContext
): CurrentMetricData[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CurrentMetricData(entry, context)
  );
};

const deserializeAws_restJson1_1CurrentMetricResult = (
  output: any,
  context: __SerdeContext
): CurrentMetricResult => {
  let contents: any = {
    __type: "CurrentMetricResult",
    Collections: undefined,
    Dimensions: undefined
  };
  if (output.Collections !== undefined && output.Collections !== null) {
    contents.Collections = deserializeAws_restJson1_1CurrentMetricDataCollections(
      output.Collections,
      context
    );
  }
  if (output.Dimensions !== undefined && output.Dimensions !== null) {
    contents.Dimensions = deserializeAws_restJson1_1Dimensions(
      output.Dimensions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1CurrentMetricResults = (
  output: any,
  context: __SerdeContext
): CurrentMetricResult[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CurrentMetricResult(entry, context)
  );
};

const deserializeAws_restJson1_1Dimensions = (
  output: any,
  context: __SerdeContext
): Dimensions => {
  let contents: any = {
    __type: "Dimensions",
    Channel: undefined,
    Queue: undefined
  };
  if (output.Channel !== undefined && output.Channel !== null) {
    contents.Channel = output.Channel;
  }
  if (output.Queue !== undefined && output.Queue !== null) {
    contents.Queue = deserializeAws_restJson1_1QueueReference(
      output.Queue,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1HistoricalMetric = (
  output: any,
  context: __SerdeContext
): HistoricalMetric => {
  let contents: any = {
    __type: "HistoricalMetric",
    Name: undefined,
    Statistic: undefined,
    Threshold: undefined,
    Unit: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Statistic !== undefined && output.Statistic !== null) {
    contents.Statistic = output.Statistic;
  }
  if (output.Threshold !== undefined && output.Threshold !== null) {
    contents.Threshold = deserializeAws_restJson1_1Threshold(
      output.Threshold,
      context
    );
  }
  if (output.Unit !== undefined && output.Unit !== null) {
    contents.Unit = output.Unit;
  }
  return contents;
};

const deserializeAws_restJson1_1HistoricalMetricData = (
  output: any,
  context: __SerdeContext
): HistoricalMetricData => {
  let contents: any = {
    __type: "HistoricalMetricData",
    Metric: undefined,
    Value: undefined
  };
  if (output.Metric !== undefined && output.Metric !== null) {
    contents.Metric = deserializeAws_restJson1_1HistoricalMetric(
      output.Metric,
      context
    );
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_restJson1_1HistoricalMetricDataCollections = (
  output: any,
  context: __SerdeContext
): HistoricalMetricData[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1HistoricalMetricData(entry, context)
  );
};

const deserializeAws_restJson1_1HistoricalMetricResult = (
  output: any,
  context: __SerdeContext
): HistoricalMetricResult => {
  let contents: any = {
    __type: "HistoricalMetricResult",
    Collections: undefined,
    Dimensions: undefined
  };
  if (output.Collections !== undefined && output.Collections !== null) {
    contents.Collections = deserializeAws_restJson1_1HistoricalMetricDataCollections(
      output.Collections,
      context
    );
  }
  if (output.Dimensions !== undefined && output.Dimensions !== null) {
    contents.Dimensions = deserializeAws_restJson1_1Dimensions(
      output.Dimensions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1HistoricalMetricResults = (
  output: any,
  context: __SerdeContext
): HistoricalMetricResult[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1HistoricalMetricResult(entry, context)
  );
};

const deserializeAws_restJson1_1QueueReference = (
  output: any,
  context: __SerdeContext
): QueueReference => {
  let contents: any = {
    __type: "QueueReference",
    Arn: undefined,
    Id: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  return contents;
};

const deserializeAws_restJson1_1Threshold = (
  output: any,
  context: __SerdeContext
): Threshold => {
  let contents: any = {
    __type: "Threshold",
    Comparison: undefined,
    ThresholdValue: undefined
  };
  if (output.Comparison !== undefined && output.Comparison !== null) {
    contents.Comparison = output.Comparison;
  }
  if (output.ThresholdValue !== undefined && output.ThresholdValue !== null) {
    contents.ThresholdValue = output.ThresholdValue;
  }
  return contents;
};

const deserializeAws_restJson1_1ContactFlowSummary = (
  output: any,
  context: __SerdeContext
): ContactFlowSummary => {
  let contents: any = {
    __type: "ContactFlowSummary",
    Arn: undefined,
    ContactFlowType: undefined,
    Id: undefined,
    Name: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.ContactFlowType !== undefined && output.ContactFlowType !== null) {
    contents.ContactFlowType = output.ContactFlowType;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_restJson1_1ContactFlowSummaryList = (
  output: any,
  context: __SerdeContext
): ContactFlowSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ContactFlowSummary(entry, context)
  );
};

const deserializeAws_restJson1_1Credentials = (
  output: any,
  context: __SerdeContext
): Credentials => {
  let contents: any = {
    __type: "Credentials",
    AccessToken: undefined,
    AccessTokenExpiration: undefined,
    RefreshToken: undefined,
    RefreshTokenExpiration: undefined
  };
  if (output.AccessToken !== undefined && output.AccessToken !== null) {
    contents.AccessToken = output.AccessToken;
  }
  if (
    output.AccessTokenExpiration !== undefined &&
    output.AccessTokenExpiration !== null
  ) {
    contents.AccessTokenExpiration = new Date(
      Math.round(output.AccessTokenExpiration * 1000)
    );
  }
  if (output.RefreshToken !== undefined && output.RefreshToken !== null) {
    contents.RefreshToken = output.RefreshToken;
  }
  if (
    output.RefreshTokenExpiration !== undefined &&
    output.RefreshTokenExpiration !== null
  ) {
    contents.RefreshTokenExpiration = new Date(
      Math.round(output.RefreshTokenExpiration * 1000)
    );
  }
  return contents;
};

const deserializeAws_restJson1_1HierarchyGroup = (
  output: any,
  context: __SerdeContext
): HierarchyGroup => {
  let contents: any = {
    __type: "HierarchyGroup",
    Arn: undefined,
    HierarchyPath: undefined,
    Id: undefined,
    LevelId: undefined,
    Name: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.HierarchyPath !== undefined && output.HierarchyPath !== null) {
    contents.HierarchyPath = deserializeAws_restJson1_1HierarchyPath(
      output.HierarchyPath,
      context
    );
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.LevelId !== undefined && output.LevelId !== null) {
    contents.LevelId = output.LevelId;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_restJson1_1HierarchyGroupSummary = (
  output: any,
  context: __SerdeContext
): HierarchyGroupSummary => {
  let contents: any = {
    __type: "HierarchyGroupSummary",
    Arn: undefined,
    Id: undefined,
    Name: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_restJson1_1HierarchyGroupSummaryList = (
  output: any,
  context: __SerdeContext
): HierarchyGroupSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1HierarchyGroupSummary(entry, context)
  );
};

const deserializeAws_restJson1_1HierarchyLevel = (
  output: any,
  context: __SerdeContext
): HierarchyLevel => {
  let contents: any = {
    __type: "HierarchyLevel",
    Arn: undefined,
    Id: undefined,
    Name: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_restJson1_1HierarchyPath = (
  output: any,
  context: __SerdeContext
): HierarchyPath => {
  let contents: any = {
    __type: "HierarchyPath",
    LevelFive: undefined,
    LevelFour: undefined,
    LevelOne: undefined,
    LevelThree: undefined,
    LevelTwo: undefined
  };
  if (output.LevelFive !== undefined && output.LevelFive !== null) {
    contents.LevelFive = deserializeAws_restJson1_1HierarchyGroupSummary(
      output.LevelFive,
      context
    );
  }
  if (output.LevelFour !== undefined && output.LevelFour !== null) {
    contents.LevelFour = deserializeAws_restJson1_1HierarchyGroupSummary(
      output.LevelFour,
      context
    );
  }
  if (output.LevelOne !== undefined && output.LevelOne !== null) {
    contents.LevelOne = deserializeAws_restJson1_1HierarchyGroupSummary(
      output.LevelOne,
      context
    );
  }
  if (output.LevelThree !== undefined && output.LevelThree !== null) {
    contents.LevelThree = deserializeAws_restJson1_1HierarchyGroupSummary(
      output.LevelThree,
      context
    );
  }
  if (output.LevelTwo !== undefined && output.LevelTwo !== null) {
    contents.LevelTwo = deserializeAws_restJson1_1HierarchyGroupSummary(
      output.LevelTwo,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1HierarchyStructure = (
  output: any,
  context: __SerdeContext
): HierarchyStructure => {
  let contents: any = {
    __type: "HierarchyStructure",
    LevelFive: undefined,
    LevelFour: undefined,
    LevelOne: undefined,
    LevelThree: undefined,
    LevelTwo: undefined
  };
  if (output.LevelFive !== undefined && output.LevelFive !== null) {
    contents.LevelFive = deserializeAws_restJson1_1HierarchyLevel(
      output.LevelFive,
      context
    );
  }
  if (output.LevelFour !== undefined && output.LevelFour !== null) {
    contents.LevelFour = deserializeAws_restJson1_1HierarchyLevel(
      output.LevelFour,
      context
    );
  }
  if (output.LevelOne !== undefined && output.LevelOne !== null) {
    contents.LevelOne = deserializeAws_restJson1_1HierarchyLevel(
      output.LevelOne,
      context
    );
  }
  if (output.LevelThree !== undefined && output.LevelThree !== null) {
    contents.LevelThree = deserializeAws_restJson1_1HierarchyLevel(
      output.LevelThree,
      context
    );
  }
  if (output.LevelTwo !== undefined && output.LevelTwo !== null) {
    contents.LevelTwo = deserializeAws_restJson1_1HierarchyLevel(
      output.LevelTwo,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1HoursOfOperationSummary = (
  output: any,
  context: __SerdeContext
): HoursOfOperationSummary => {
  let contents: any = {
    __type: "HoursOfOperationSummary",
    Arn: undefined,
    Id: undefined,
    Name: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_restJson1_1HoursOfOperationSummaryList = (
  output: any,
  context: __SerdeContext
): HoursOfOperationSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1HoursOfOperationSummary(entry, context)
  );
};

const deserializeAws_restJson1_1PhoneNumberSummary = (
  output: any,
  context: __SerdeContext
): PhoneNumberSummary => {
  let contents: any = {
    __type: "PhoneNumberSummary",
    Arn: undefined,
    Id: undefined,
    PhoneNumber: undefined,
    PhoneNumberCountryCode: undefined,
    PhoneNumberType: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.PhoneNumber !== undefined && output.PhoneNumber !== null) {
    contents.PhoneNumber = output.PhoneNumber;
  }
  if (
    output.PhoneNumberCountryCode !== undefined &&
    output.PhoneNumberCountryCode !== null
  ) {
    contents.PhoneNumberCountryCode = output.PhoneNumberCountryCode;
  }
  if (output.PhoneNumberType !== undefined && output.PhoneNumberType !== null) {
    contents.PhoneNumberType = output.PhoneNumberType;
  }
  return contents;
};

const deserializeAws_restJson1_1PhoneNumberSummaryList = (
  output: any,
  context: __SerdeContext
): PhoneNumberSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PhoneNumberSummary(entry, context)
  );
};

const deserializeAws_restJson1_1QueueSummary = (
  output: any,
  context: __SerdeContext
): QueueSummary => {
  let contents: any = {
    __type: "QueueSummary",
    Arn: undefined,
    Id: undefined,
    Name: undefined,
    QueueType: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.QueueType !== undefined && output.QueueType !== null) {
    contents.QueueType = output.QueueType;
  }
  return contents;
};

const deserializeAws_restJson1_1QueueSummaryList = (
  output: any,
  context: __SerdeContext
): QueueSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1QueueSummary(entry, context)
  );
};

const deserializeAws_restJson1_1RoutingProfileSummary = (
  output: any,
  context: __SerdeContext
): RoutingProfileSummary => {
  let contents: any = {
    __type: "RoutingProfileSummary",
    Arn: undefined,
    Id: undefined,
    Name: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_restJson1_1RoutingProfileSummaryList = (
  output: any,
  context: __SerdeContext
): RoutingProfileSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1RoutingProfileSummary(entry, context)
  );
};

const deserializeAws_restJson1_1SecurityProfileIds = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1SecurityProfileSummary = (
  output: any,
  context: __SerdeContext
): SecurityProfileSummary => {
  let contents: any = {
    __type: "SecurityProfileSummary",
    Arn: undefined,
    Id: undefined,
    Name: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_restJson1_1SecurityProfileSummaryList = (
  output: any,
  context: __SerdeContext
): SecurityProfileSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SecurityProfileSummary(entry, context)
  );
};

const deserializeAws_restJson1_1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = output[key];
    return acc;
  }, {});
};

const deserializeAws_restJson1_1User = (
  output: any,
  context: __SerdeContext
): User => {
  let contents: any = {
    __type: "User",
    Arn: undefined,
    DirectoryUserId: undefined,
    HierarchyGroupId: undefined,
    Id: undefined,
    IdentityInfo: undefined,
    PhoneConfig: undefined,
    RoutingProfileId: undefined,
    SecurityProfileIds: undefined,
    Tags: undefined,
    Username: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.DirectoryUserId !== undefined && output.DirectoryUserId !== null) {
    contents.DirectoryUserId = output.DirectoryUserId;
  }
  if (
    output.HierarchyGroupId !== undefined &&
    output.HierarchyGroupId !== null
  ) {
    contents.HierarchyGroupId = output.HierarchyGroupId;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.IdentityInfo !== undefined && output.IdentityInfo !== null) {
    contents.IdentityInfo = deserializeAws_restJson1_1UserIdentityInfo(
      output.IdentityInfo,
      context
    );
  }
  if (output.PhoneConfig !== undefined && output.PhoneConfig !== null) {
    contents.PhoneConfig = deserializeAws_restJson1_1UserPhoneConfig(
      output.PhoneConfig,
      context
    );
  }
  if (
    output.RoutingProfileId !== undefined &&
    output.RoutingProfileId !== null
  ) {
    contents.RoutingProfileId = output.RoutingProfileId;
  }
  if (
    output.SecurityProfileIds !== undefined &&
    output.SecurityProfileIds !== null
  ) {
    contents.SecurityProfileIds = deserializeAws_restJson1_1SecurityProfileIds(
      output.SecurityProfileIds,
      context
    );
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagMap(output.Tags, context);
  }
  if (output.Username !== undefined && output.Username !== null) {
    contents.Username = output.Username;
  }
  return contents;
};

const deserializeAws_restJson1_1UserIdentityInfo = (
  output: any,
  context: __SerdeContext
): UserIdentityInfo => {
  let contents: any = {
    __type: "UserIdentityInfo",
    Email: undefined,
    FirstName: undefined,
    LastName: undefined
  };
  if (output.Email !== undefined && output.Email !== null) {
    contents.Email = output.Email;
  }
  if (output.FirstName !== undefined && output.FirstName !== null) {
    contents.FirstName = output.FirstName;
  }
  if (output.LastName !== undefined && output.LastName !== null) {
    contents.LastName = output.LastName;
  }
  return contents;
};

const deserializeAws_restJson1_1UserPhoneConfig = (
  output: any,
  context: __SerdeContext
): UserPhoneConfig => {
  let contents: any = {
    __type: "UserPhoneConfig",
    AfterContactWorkTimeLimit: undefined,
    AutoAccept: undefined,
    DeskPhoneNumber: undefined,
    PhoneType: undefined
  };
  if (
    output.AfterContactWorkTimeLimit !== undefined &&
    output.AfterContactWorkTimeLimit !== null
  ) {
    contents.AfterContactWorkTimeLimit = output.AfterContactWorkTimeLimit;
  }
  if (output.AutoAccept !== undefined && output.AutoAccept !== null) {
    contents.AutoAccept = output.AutoAccept;
  }
  if (output.DeskPhoneNumber !== undefined && output.DeskPhoneNumber !== null) {
    contents.DeskPhoneNumber = output.DeskPhoneNumber;
  }
  if (output.PhoneType !== undefined && output.PhoneType !== null) {
    contents.PhoneType = output.PhoneType;
  }
  return contents;
};

const deserializeAws_restJson1_1UserSummary = (
  output: any,
  context: __SerdeContext
): UserSummary => {
  let contents: any = {
    __type: "UserSummary",
    Arn: undefined,
    Id: undefined,
    Username: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Username !== undefined && output.Username !== null) {
    contents.Username = output.Username;
  }
  return contents;
};

const deserializeAws_restJson1_1UserSummaryList = (
  output: any,
  context: __SerdeContext
): UserSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1UserSummary(entry, context)
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
