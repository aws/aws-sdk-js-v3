// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  map,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AssociateToConfigurationCommandInput,
  AssociateToConfigurationCommandOutput,
} from "../commands/AssociateToConfigurationCommand";
import {
  CreateChimeWebhookConfigurationCommandInput,
  CreateChimeWebhookConfigurationCommandOutput,
} from "../commands/CreateChimeWebhookConfigurationCommand";
import { CreateCustomActionCommandInput, CreateCustomActionCommandOutput } from "../commands/CreateCustomActionCommand";
import {
  CreateMicrosoftTeamsChannelConfigurationCommandInput,
  CreateMicrosoftTeamsChannelConfigurationCommandOutput,
} from "../commands/CreateMicrosoftTeamsChannelConfigurationCommand";
import {
  CreateSlackChannelConfigurationCommandInput,
  CreateSlackChannelConfigurationCommandOutput,
} from "../commands/CreateSlackChannelConfigurationCommand";
import {
  DeleteChimeWebhookConfigurationCommandInput,
  DeleteChimeWebhookConfigurationCommandOutput,
} from "../commands/DeleteChimeWebhookConfigurationCommand";
import { DeleteCustomActionCommandInput, DeleteCustomActionCommandOutput } from "../commands/DeleteCustomActionCommand";
import {
  DeleteMicrosoftTeamsChannelConfigurationCommandInput,
  DeleteMicrosoftTeamsChannelConfigurationCommandOutput,
} from "../commands/DeleteMicrosoftTeamsChannelConfigurationCommand";
import {
  DeleteMicrosoftTeamsConfiguredTeamCommandInput,
  DeleteMicrosoftTeamsConfiguredTeamCommandOutput,
} from "../commands/DeleteMicrosoftTeamsConfiguredTeamCommand";
import {
  DeleteMicrosoftTeamsUserIdentityCommandInput,
  DeleteMicrosoftTeamsUserIdentityCommandOutput,
} from "../commands/DeleteMicrosoftTeamsUserIdentityCommand";
import {
  DeleteSlackChannelConfigurationCommandInput,
  DeleteSlackChannelConfigurationCommandOutput,
} from "../commands/DeleteSlackChannelConfigurationCommand";
import {
  DeleteSlackUserIdentityCommandInput,
  DeleteSlackUserIdentityCommandOutput,
} from "../commands/DeleteSlackUserIdentityCommand";
import {
  DeleteSlackWorkspaceAuthorizationCommandInput,
  DeleteSlackWorkspaceAuthorizationCommandOutput,
} from "../commands/DeleteSlackWorkspaceAuthorizationCommand";
import {
  DescribeChimeWebhookConfigurationsCommandInput,
  DescribeChimeWebhookConfigurationsCommandOutput,
} from "../commands/DescribeChimeWebhookConfigurationsCommand";
import {
  DescribeSlackChannelConfigurationsCommandInput,
  DescribeSlackChannelConfigurationsCommandOutput,
} from "../commands/DescribeSlackChannelConfigurationsCommand";
import {
  DescribeSlackUserIdentitiesCommandInput,
  DescribeSlackUserIdentitiesCommandOutput,
} from "../commands/DescribeSlackUserIdentitiesCommand";
import {
  DescribeSlackWorkspacesCommandInput,
  DescribeSlackWorkspacesCommandOutput,
} from "../commands/DescribeSlackWorkspacesCommand";
import {
  DisassociateFromConfigurationCommandInput,
  DisassociateFromConfigurationCommandOutput,
} from "../commands/DisassociateFromConfigurationCommand";
import {
  GetAccountPreferencesCommandInput,
  GetAccountPreferencesCommandOutput,
} from "../commands/GetAccountPreferencesCommand";
import { GetCustomActionCommandInput, GetCustomActionCommandOutput } from "../commands/GetCustomActionCommand";
import {
  GetMicrosoftTeamsChannelConfigurationCommandInput,
  GetMicrosoftTeamsChannelConfigurationCommandOutput,
} from "../commands/GetMicrosoftTeamsChannelConfigurationCommand";
import { ListAssociationsCommandInput, ListAssociationsCommandOutput } from "../commands/ListAssociationsCommand";
import { ListCustomActionsCommandInput, ListCustomActionsCommandOutput } from "../commands/ListCustomActionsCommand";
import {
  ListMicrosoftTeamsChannelConfigurationsCommandInput,
  ListMicrosoftTeamsChannelConfigurationsCommandOutput,
} from "../commands/ListMicrosoftTeamsChannelConfigurationsCommand";
import {
  ListMicrosoftTeamsConfiguredTeamsCommandInput,
  ListMicrosoftTeamsConfiguredTeamsCommandOutput,
} from "../commands/ListMicrosoftTeamsConfiguredTeamsCommand";
import {
  ListMicrosoftTeamsUserIdentitiesCommandInput,
  ListMicrosoftTeamsUserIdentitiesCommandOutput,
} from "../commands/ListMicrosoftTeamsUserIdentitiesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAccountPreferencesCommandInput,
  UpdateAccountPreferencesCommandOutput,
} from "../commands/UpdateAccountPreferencesCommand";
import {
  UpdateChimeWebhookConfigurationCommandInput,
  UpdateChimeWebhookConfigurationCommandOutput,
} from "../commands/UpdateChimeWebhookConfigurationCommand";
import { UpdateCustomActionCommandInput, UpdateCustomActionCommandOutput } from "../commands/UpdateCustomActionCommand";
import {
  UpdateMicrosoftTeamsChannelConfigurationCommandInput,
  UpdateMicrosoftTeamsChannelConfigurationCommandOutput,
} from "../commands/UpdateMicrosoftTeamsChannelConfigurationCommand";
import {
  UpdateSlackChannelConfigurationCommandInput,
  UpdateSlackChannelConfigurationCommandOutput,
} from "../commands/UpdateSlackChannelConfigurationCommand";
import { ChatbotServiceException as __BaseException } from "../models/ChatbotServiceException";
import {
  ConflictException,
  CreateChimeWebhookConfigurationException,
  CreateSlackChannelConfigurationException,
  CreateTeamsChannelConfigurationException,
  CustomActionAttachment,
  CustomActionAttachmentCriteria,
  CustomActionDefinition,
  DeleteChimeWebhookConfigurationException,
  DeleteMicrosoftTeamsUserIdentityException,
  DeleteSlackChannelConfigurationException,
  DeleteSlackUserIdentityException,
  DeleteSlackWorkspaceAuthorizationFault,
  DeleteTeamsChannelConfigurationException,
  DeleteTeamsConfiguredTeamException,
  DescribeChimeWebhookConfigurationsException,
  DescribeSlackChannelConfigurationsException,
  DescribeSlackUserIdentitiesException,
  DescribeSlackWorkspacesException,
  GetAccountPreferencesException,
  GetTeamsChannelConfigurationException,
  InternalServiceError,
  InvalidParameterException,
  InvalidRequestException,
  LimitExceededException,
  ListMicrosoftTeamsConfiguredTeamsException,
  ListMicrosoftTeamsUserIdentitiesException,
  ListTeamsChannelConfigurationsException,
  ResourceNotFoundException,
  ServiceUnavailableException,
  Tag,
  TooManyTagsException,
  UnauthorizedException,
  UpdateAccountPreferencesException,
  UpdateChimeWebhookConfigurationException,
  UpdateSlackChannelConfigurationException,
  UpdateTeamsChannelConfigurationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateToConfigurationCommand
 */
export const se_AssociateToConfigurationCommand = async (
  input: AssociateToConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/associate-to-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChatConfiguration: [],
      Resource: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateChimeWebhookConfigurationCommand
 */
export const se_CreateChimeWebhookConfigurationCommand = async (
  input: CreateChimeWebhookConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/create-chime-webhook-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConfigurationName: [],
      IamRoleArn: [],
      LoggingLevel: [],
      SnsTopicArns: (_) => _json(_),
      Tags: (_) => _json(_),
      WebhookDescription: [],
      WebhookUrl: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCustomActionCommand
 */
export const se_CreateCustomActionCommand = async (
  input: CreateCustomActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/create-custom-action");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ActionName: [],
      AliasName: [],
      Attachments: (_) => _json(_),
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Definition: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMicrosoftTeamsChannelConfigurationCommand
 */
export const se_CreateMicrosoftTeamsChannelConfigurationCommand = async (
  input: CreateMicrosoftTeamsChannelConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/create-ms-teams-channel-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChannelId: [],
      ChannelName: [],
      ConfigurationName: [],
      GuardrailPolicyArns: (_) => _json(_),
      IamRoleArn: [],
      LoggingLevel: [],
      SnsTopicArns: (_) => _json(_),
      Tags: (_) => _json(_),
      TeamId: [],
      TeamName: [],
      TenantId: [],
      UserAuthorizationRequired: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSlackChannelConfigurationCommand
 */
export const se_CreateSlackChannelConfigurationCommand = async (
  input: CreateSlackChannelConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/create-slack-channel-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConfigurationName: [],
      GuardrailPolicyArns: (_) => _json(_),
      IamRoleArn: [],
      LoggingLevel: [],
      SlackChannelId: [],
      SlackChannelName: [],
      SlackTeamId: [],
      SnsTopicArns: (_) => _json(_),
      Tags: (_) => _json(_),
      UserAuthorizationRequired: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteChimeWebhookConfigurationCommand
 */
export const se_DeleteChimeWebhookConfigurationCommand = async (
  input: DeleteChimeWebhookConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-chime-webhook-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChatConfigurationArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCustomActionCommand
 */
export const se_DeleteCustomActionCommand = async (
  input: DeleteCustomActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-custom-action");
  let body: any;
  body = JSON.stringify(
    take(input, {
      CustomActionArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMicrosoftTeamsChannelConfigurationCommand
 */
export const se_DeleteMicrosoftTeamsChannelConfigurationCommand = async (
  input: DeleteMicrosoftTeamsChannelConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-ms-teams-channel-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChatConfigurationArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMicrosoftTeamsConfiguredTeamCommand
 */
export const se_DeleteMicrosoftTeamsConfiguredTeamCommand = async (
  input: DeleteMicrosoftTeamsConfiguredTeamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-ms-teams-configured-teams");
  let body: any;
  body = JSON.stringify(
    take(input, {
      TeamId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMicrosoftTeamsUserIdentityCommand
 */
export const se_DeleteMicrosoftTeamsUserIdentityCommand = async (
  input: DeleteMicrosoftTeamsUserIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-ms-teams-user-identity");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChatConfigurationArn: [],
      UserId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSlackChannelConfigurationCommand
 */
export const se_DeleteSlackChannelConfigurationCommand = async (
  input: DeleteSlackChannelConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-slack-channel-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChatConfigurationArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSlackUserIdentityCommand
 */
export const se_DeleteSlackUserIdentityCommand = async (
  input: DeleteSlackUserIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-slack-user-identity");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChatConfigurationArn: [],
      SlackTeamId: [],
      SlackUserId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSlackWorkspaceAuthorizationCommand
 */
export const se_DeleteSlackWorkspaceAuthorizationCommand = async (
  input: DeleteSlackWorkspaceAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-slack-workspace-authorization");
  let body: any;
  body = JSON.stringify(
    take(input, {
      SlackTeamId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeChimeWebhookConfigurationsCommand
 */
export const se_DescribeChimeWebhookConfigurationsCommand = async (
  input: DescribeChimeWebhookConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describe-chime-webhook-configurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChatConfigurationArn: [],
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeSlackChannelConfigurationsCommand
 */
export const se_DescribeSlackChannelConfigurationsCommand = async (
  input: DescribeSlackChannelConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describe-slack-channel-configurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChatConfigurationArn: [],
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeSlackUserIdentitiesCommand
 */
export const se_DescribeSlackUserIdentitiesCommand = async (
  input: DescribeSlackUserIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describe-slack-user-identities");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChatConfigurationArn: [],
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeSlackWorkspacesCommand
 */
export const se_DescribeSlackWorkspacesCommand = async (
  input: DescribeSlackWorkspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describe-slack-workspaces");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateFromConfigurationCommand
 */
export const se_DisassociateFromConfigurationCommand = async (
  input: DisassociateFromConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/disassociate-from-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChatConfiguration: [],
      Resource: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAccountPreferencesCommand
 */
export const se_GetAccountPreferencesCommand = async (
  input: GetAccountPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/get-account-preferences");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCustomActionCommand
 */
export const se_GetCustomActionCommand = async (
  input: GetCustomActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/get-custom-action");
  let body: any;
  body = JSON.stringify(
    take(input, {
      CustomActionArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMicrosoftTeamsChannelConfigurationCommand
 */
export const se_GetMicrosoftTeamsChannelConfigurationCommand = async (
  input: GetMicrosoftTeamsChannelConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/get-ms-teams-channel-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChatConfigurationArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssociationsCommand
 */
export const se_ListAssociationsCommand = async (
  input: ListAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-associations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChatConfiguration: [],
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCustomActionsCommand
 */
export const se_ListCustomActionsCommand = async (
  input: ListCustomActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-custom-actions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMicrosoftTeamsChannelConfigurationsCommand
 */
export const se_ListMicrosoftTeamsChannelConfigurationsCommand = async (
  input: ListMicrosoftTeamsChannelConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-ms-teams-channel-configurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      TeamId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMicrosoftTeamsConfiguredTeamsCommand
 */
export const se_ListMicrosoftTeamsConfiguredTeamsCommand = async (
  input: ListMicrosoftTeamsConfiguredTeamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-ms-teams-configured-teams");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMicrosoftTeamsUserIdentitiesCommand
 */
export const se_ListMicrosoftTeamsUserIdentitiesCommand = async (
  input: ListMicrosoftTeamsUserIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-ms-teams-user-identities");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChatConfigurationArn: [],
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-tags-for-resource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tag-resource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/untag-resource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
      TagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAccountPreferencesCommand
 */
export const se_UpdateAccountPreferencesCommand = async (
  input: UpdateAccountPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-account-preferences");
  let body: any;
  body = JSON.stringify(
    take(input, {
      TrainingDataCollectionEnabled: [],
      UserAuthorizationRequired: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateChimeWebhookConfigurationCommand
 */
export const se_UpdateChimeWebhookConfigurationCommand = async (
  input: UpdateChimeWebhookConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-chime-webhook-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChatConfigurationArn: [],
      IamRoleArn: [],
      LoggingLevel: [],
      SnsTopicArns: (_) => _json(_),
      WebhookDescription: [],
      WebhookUrl: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCustomActionCommand
 */
export const se_UpdateCustomActionCommand = async (
  input: UpdateCustomActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-custom-action");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AliasName: [],
      Attachments: (_) => _json(_),
      CustomActionArn: [],
      Definition: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateMicrosoftTeamsChannelConfigurationCommand
 */
export const se_UpdateMicrosoftTeamsChannelConfigurationCommand = async (
  input: UpdateMicrosoftTeamsChannelConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-ms-teams-channel-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChannelId: [],
      ChannelName: [],
      ChatConfigurationArn: [],
      GuardrailPolicyArns: (_) => _json(_),
      IamRoleArn: [],
      LoggingLevel: [],
      SnsTopicArns: (_) => _json(_),
      UserAuthorizationRequired: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSlackChannelConfigurationCommand
 */
export const se_UpdateSlackChannelConfigurationCommand = async (
  input: UpdateSlackChannelConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-slack-channel-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChatConfigurationArn: [],
      GuardrailPolicyArns: (_) => _json(_),
      IamRoleArn: [],
      LoggingLevel: [],
      SlackChannelId: [],
      SlackChannelName: [],
      SnsTopicArns: (_) => _json(_),
      UserAuthorizationRequired: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateToConfigurationCommand
 */
export const de_AssociateToConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateToConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateChimeWebhookConfigurationCommand
 */
export const de_CreateChimeWebhookConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChimeWebhookConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    WebhookConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCustomActionCommand
 */
export const de_CreateCustomActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomActionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CustomActionArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMicrosoftTeamsChannelConfigurationCommand
 */
export const de_CreateMicrosoftTeamsChannelConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMicrosoftTeamsChannelConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSlackChannelConfigurationCommand
 */
export const de_CreateSlackChannelConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlackChannelConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChimeWebhookConfigurationCommand
 */
export const de_DeleteChimeWebhookConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChimeWebhookConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCustomActionCommand
 */
export const de_DeleteCustomActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomActionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMicrosoftTeamsChannelConfigurationCommand
 */
export const de_DeleteMicrosoftTeamsChannelConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMicrosoftTeamsChannelConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMicrosoftTeamsConfiguredTeamCommand
 */
export const de_DeleteMicrosoftTeamsConfiguredTeamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMicrosoftTeamsConfiguredTeamCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMicrosoftTeamsUserIdentityCommand
 */
export const de_DeleteMicrosoftTeamsUserIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMicrosoftTeamsUserIdentityCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSlackChannelConfigurationCommand
 */
export const de_DeleteSlackChannelConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlackChannelConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSlackUserIdentityCommand
 */
export const de_DeleteSlackUserIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlackUserIdentityCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSlackWorkspaceAuthorizationCommand
 */
export const de_DeleteSlackWorkspaceAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlackWorkspaceAuthorizationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChimeWebhookConfigurationsCommand
 */
export const de_DescribeChimeWebhookConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChimeWebhookConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    WebhookConfigurations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSlackChannelConfigurationsCommand
 */
export const de_DescribeSlackChannelConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSlackChannelConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    SlackChannelConfigurations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSlackUserIdentitiesCommand
 */
export const de_DescribeSlackUserIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSlackUserIdentitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    SlackUserIdentities: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSlackWorkspacesCommand
 */
export const de_DescribeSlackWorkspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSlackWorkspacesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    SlackWorkspaces: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateFromConfigurationCommand
 */
export const de_DisassociateFromConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetAccountPreferencesCommand
 */
export const de_GetAccountPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountPreferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountPreferences: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCustomActionCommand
 */
export const de_GetCustomActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CustomAction: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMicrosoftTeamsChannelConfigurationCommand
 */
export const de_GetMicrosoftTeamsChannelConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMicrosoftTeamsChannelConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssociationsCommand
 */
export const de_ListAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Associations: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCustomActionsCommand
 */
export const de_ListCustomActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CustomActions: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMicrosoftTeamsChannelConfigurationsCommand
 */
export const de_ListMicrosoftTeamsChannelConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMicrosoftTeamsChannelConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    TeamChannelConfigurations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMicrosoftTeamsConfiguredTeamsCommand
 */
export const de_ListMicrosoftTeamsConfiguredTeamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMicrosoftTeamsConfiguredTeamsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConfiguredTeams: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMicrosoftTeamsUserIdentitiesCommand
 */
export const de_ListMicrosoftTeamsUserIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMicrosoftTeamsUserIdentitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    TeamsUserIdentities: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAccountPreferencesCommand
 */
export const de_UpdateAccountPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountPreferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountPreferences: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateChimeWebhookConfigurationCommand
 */
export const de_UpdateChimeWebhookConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChimeWebhookConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    WebhookConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCustomActionCommand
 */
export const de_UpdateCustomActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CustomActionArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMicrosoftTeamsChannelConfigurationCommand
 */
export const de_UpdateMicrosoftTeamsChannelConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMicrosoftTeamsChannelConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSlackChannelConfigurationCommand
 */
export const de_UpdateSlackChannelConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSlackChannelConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChannelConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.chatbot#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.chatbot#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.chatbot#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chatbot#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "CreateChimeWebhookConfigurationException":
    case "com.amazonaws.chatbot#CreateChimeWebhookConfigurationException":
      throw await de_CreateChimeWebhookConfigurationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.chatbot#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.chatbot#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "CreateTeamsChannelConfigurationException":
    case "com.amazonaws.chatbot#CreateTeamsChannelConfigurationException":
      throw await de_CreateTeamsChannelConfigurationExceptionRes(parsedOutput, context);
    case "CreateSlackChannelConfigurationException":
    case "com.amazonaws.chatbot#CreateSlackChannelConfigurationException":
      throw await de_CreateSlackChannelConfigurationExceptionRes(parsedOutput, context);
    case "DeleteChimeWebhookConfigurationException":
    case "com.amazonaws.chatbot#DeleteChimeWebhookConfigurationException":
      throw await de_DeleteChimeWebhookConfigurationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.chatbot#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "DeleteTeamsChannelConfigurationException":
    case "com.amazonaws.chatbot#DeleteTeamsChannelConfigurationException":
      throw await de_DeleteTeamsChannelConfigurationExceptionRes(parsedOutput, context);
    case "DeleteTeamsConfiguredTeamException":
    case "com.amazonaws.chatbot#DeleteTeamsConfiguredTeamException":
      throw await de_DeleteTeamsConfiguredTeamExceptionRes(parsedOutput, context);
    case "DeleteMicrosoftTeamsUserIdentityException":
    case "com.amazonaws.chatbot#DeleteMicrosoftTeamsUserIdentityException":
      throw await de_DeleteMicrosoftTeamsUserIdentityExceptionRes(parsedOutput, context);
    case "DeleteSlackChannelConfigurationException":
    case "com.amazonaws.chatbot#DeleteSlackChannelConfigurationException":
      throw await de_DeleteSlackChannelConfigurationExceptionRes(parsedOutput, context);
    case "DeleteSlackUserIdentityException":
    case "com.amazonaws.chatbot#DeleteSlackUserIdentityException":
      throw await de_DeleteSlackUserIdentityExceptionRes(parsedOutput, context);
    case "DeleteSlackWorkspaceAuthorizationFault":
    case "com.amazonaws.chatbot#DeleteSlackWorkspaceAuthorizationFault":
      throw await de_DeleteSlackWorkspaceAuthorizationFaultRes(parsedOutput, context);
    case "DescribeChimeWebhookConfigurationsException":
    case "com.amazonaws.chatbot#DescribeChimeWebhookConfigurationsException":
      throw await de_DescribeChimeWebhookConfigurationsExceptionRes(parsedOutput, context);
    case "DescribeSlackChannelConfigurationsException":
    case "com.amazonaws.chatbot#DescribeSlackChannelConfigurationsException":
      throw await de_DescribeSlackChannelConfigurationsExceptionRes(parsedOutput, context);
    case "DescribeSlackUserIdentitiesException":
    case "com.amazonaws.chatbot#DescribeSlackUserIdentitiesException":
      throw await de_DescribeSlackUserIdentitiesExceptionRes(parsedOutput, context);
    case "DescribeSlackWorkspacesException":
    case "com.amazonaws.chatbot#DescribeSlackWorkspacesException":
      throw await de_DescribeSlackWorkspacesExceptionRes(parsedOutput, context);
    case "GetAccountPreferencesException":
    case "com.amazonaws.chatbot#GetAccountPreferencesException":
      throw await de_GetAccountPreferencesExceptionRes(parsedOutput, context);
    case "GetTeamsChannelConfigurationException":
    case "com.amazonaws.chatbot#GetTeamsChannelConfigurationException":
      throw await de_GetTeamsChannelConfigurationExceptionRes(parsedOutput, context);
    case "ListTeamsChannelConfigurationsException":
    case "com.amazonaws.chatbot#ListTeamsChannelConfigurationsException":
      throw await de_ListTeamsChannelConfigurationsExceptionRes(parsedOutput, context);
    case "ListMicrosoftTeamsConfiguredTeamsException":
    case "com.amazonaws.chatbot#ListMicrosoftTeamsConfiguredTeamsException":
      throw await de_ListMicrosoftTeamsConfiguredTeamsExceptionRes(parsedOutput, context);
    case "ListMicrosoftTeamsUserIdentitiesException":
    case "com.amazonaws.chatbot#ListMicrosoftTeamsUserIdentitiesException":
      throw await de_ListMicrosoftTeamsUserIdentitiesExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chatbot#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.chatbot#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "UpdateAccountPreferencesException":
    case "com.amazonaws.chatbot#UpdateAccountPreferencesException":
      throw await de_UpdateAccountPreferencesExceptionRes(parsedOutput, context);
    case "UpdateChimeWebhookConfigurationException":
    case "com.amazonaws.chatbot#UpdateChimeWebhookConfigurationException":
      throw await de_UpdateChimeWebhookConfigurationExceptionRes(parsedOutput, context);
    case "UpdateTeamsChannelConfigurationException":
    case "com.amazonaws.chatbot#UpdateTeamsChannelConfigurationException":
      throw await de_UpdateTeamsChannelConfigurationExceptionRes(parsedOutput, context);
    case "UpdateSlackChannelConfigurationException":
    case "com.amazonaws.chatbot#UpdateSlackChannelConfigurationException":
      throw await de_UpdateSlackChannelConfigurationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1CreateChimeWebhookConfigurationExceptionRes
 */
const de_CreateChimeWebhookConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CreateChimeWebhookConfigurationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new CreateChimeWebhookConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1CreateSlackChannelConfigurationExceptionRes
 */
const de_CreateSlackChannelConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CreateSlackChannelConfigurationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new CreateSlackChannelConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1CreateTeamsChannelConfigurationExceptionRes
 */
const de_CreateTeamsChannelConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CreateTeamsChannelConfigurationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new CreateTeamsChannelConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DeleteChimeWebhookConfigurationExceptionRes
 */
const de_DeleteChimeWebhookConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeleteChimeWebhookConfigurationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DeleteChimeWebhookConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DeleteMicrosoftTeamsUserIdentityExceptionRes
 */
const de_DeleteMicrosoftTeamsUserIdentityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeleteMicrosoftTeamsUserIdentityException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DeleteMicrosoftTeamsUserIdentityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DeleteSlackChannelConfigurationExceptionRes
 */
const de_DeleteSlackChannelConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeleteSlackChannelConfigurationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DeleteSlackChannelConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DeleteSlackUserIdentityExceptionRes
 */
const de_DeleteSlackUserIdentityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeleteSlackUserIdentityException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DeleteSlackUserIdentityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DeleteSlackWorkspaceAuthorizationFaultRes
 */
const de_DeleteSlackWorkspaceAuthorizationFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeleteSlackWorkspaceAuthorizationFault> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DeleteSlackWorkspaceAuthorizationFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DeleteTeamsChannelConfigurationExceptionRes
 */
const de_DeleteTeamsChannelConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeleteTeamsChannelConfigurationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DeleteTeamsChannelConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DeleteTeamsConfiguredTeamExceptionRes
 */
const de_DeleteTeamsConfiguredTeamExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeleteTeamsConfiguredTeamException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DeleteTeamsConfiguredTeamException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DescribeChimeWebhookConfigurationsExceptionRes
 */
const de_DescribeChimeWebhookConfigurationsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DescribeChimeWebhookConfigurationsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DescribeChimeWebhookConfigurationsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DescribeSlackChannelConfigurationsExceptionRes
 */
const de_DescribeSlackChannelConfigurationsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DescribeSlackChannelConfigurationsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DescribeSlackChannelConfigurationsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DescribeSlackUserIdentitiesExceptionRes
 */
const de_DescribeSlackUserIdentitiesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DescribeSlackUserIdentitiesException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DescribeSlackUserIdentitiesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DescribeSlackWorkspacesExceptionRes
 */
const de_DescribeSlackWorkspacesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DescribeSlackWorkspacesException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DescribeSlackWorkspacesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1GetAccountPreferencesExceptionRes
 */
const de_GetAccountPreferencesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GetAccountPreferencesException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new GetAccountPreferencesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1GetTeamsChannelConfigurationExceptionRes
 */
const de_GetTeamsChannelConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GetTeamsChannelConfigurationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new GetTeamsChannelConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServiceErrorRes
 */
const de_InternalServiceErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServiceError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ListMicrosoftTeamsConfiguredTeamsExceptionRes
 */
const de_ListMicrosoftTeamsConfiguredTeamsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ListMicrosoftTeamsConfiguredTeamsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ListMicrosoftTeamsConfiguredTeamsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ListMicrosoftTeamsUserIdentitiesExceptionRes
 */
const de_ListMicrosoftTeamsUserIdentitiesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ListMicrosoftTeamsUserIdentitiesException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ListMicrosoftTeamsUserIdentitiesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ListTeamsChannelConfigurationsExceptionRes
 */
const de_ListTeamsChannelConfigurationsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ListTeamsChannelConfigurationsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ListTeamsChannelConfigurationsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UpdateAccountPreferencesExceptionRes
 */
const de_UpdateAccountPreferencesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UpdateAccountPreferencesException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UpdateAccountPreferencesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UpdateChimeWebhookConfigurationExceptionRes
 */
const de_UpdateChimeWebhookConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UpdateChimeWebhookConfigurationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UpdateChimeWebhookConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UpdateSlackChannelConfigurationExceptionRes
 */
const de_UpdateSlackChannelConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UpdateSlackChannelConfigurationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UpdateSlackChannelConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UpdateTeamsChannelConfigurationExceptionRes
 */
const de_UpdateTeamsChannelConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UpdateTeamsChannelConfigurationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UpdateTeamsChannelConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_CustomActionAttachment omitted.

// se_CustomActionAttachmentCriteria omitted.

// se_CustomActionAttachmentCriteriaList omitted.

// se_CustomActionAttachmentList omitted.

// se_CustomActionAttachmentVariables omitted.

// se_CustomActionDefinition omitted.

// se_GuardrailPolicyArnList omitted.

// se_SnsTopicArnList omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_Tags omitted.

// de_AccountPreferences omitted.

// de_AssociationList omitted.

// de_AssociationListing omitted.

// de_ChimeWebhookConfiguration omitted.

// de_ChimeWebhookConfigurationList omitted.

// de_ConfiguredTeam omitted.

// de_ConfiguredTeamsList omitted.

// de_CustomAction omitted.

// de_CustomActionArnList omitted.

// de_CustomActionAttachment omitted.

// de_CustomActionAttachmentCriteria omitted.

// de_CustomActionAttachmentCriteriaList omitted.

// de_CustomActionAttachmentList omitted.

// de_CustomActionAttachmentVariables omitted.

// de_CustomActionDefinition omitted.

// de_GuardrailPolicyArnList omitted.

// de_SlackChannelConfiguration omitted.

// de_SlackChannelConfigurationList omitted.

// de_SlackUserIdentitiesList omitted.

// de_SlackUserIdentity omitted.

// de_SlackWorkspace omitted.

// de_SlackWorkspacesList omitted.

// de_SnsTopicArnList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_Tags omitted.

// de_TeamChannelConfigurationsList omitted.

// de_TeamsChannelConfiguration omitted.

// de_TeamsUserIdentitiesList omitted.

// de_TeamsUserIdentity omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
