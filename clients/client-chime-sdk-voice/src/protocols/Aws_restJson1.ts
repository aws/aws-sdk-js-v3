// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AssociatePhoneNumbersWithVoiceConnectorCommandInput,
  AssociatePhoneNumbersWithVoiceConnectorCommandOutput,
} from "../commands/AssociatePhoneNumbersWithVoiceConnectorCommand";
import {
  AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
  AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput,
} from "../commands/AssociatePhoneNumbersWithVoiceConnectorGroupCommand";
import {
  BatchDeletePhoneNumberCommandInput,
  BatchDeletePhoneNumberCommandOutput,
} from "../commands/BatchDeletePhoneNumberCommand";
import {
  BatchUpdatePhoneNumberCommandInput,
  BatchUpdatePhoneNumberCommandOutput,
} from "../commands/BatchUpdatePhoneNumberCommand";
import {
  CreatePhoneNumberOrderCommandInput,
  CreatePhoneNumberOrderCommandOutput,
} from "../commands/CreatePhoneNumberOrderCommand";
import { CreateProxySessionCommandInput, CreateProxySessionCommandOutput } from "../commands/CreateProxySessionCommand";
import {
  CreateSipMediaApplicationCallCommandInput,
  CreateSipMediaApplicationCallCommandOutput,
} from "../commands/CreateSipMediaApplicationCallCommand";
import {
  CreateSipMediaApplicationCommandInput,
  CreateSipMediaApplicationCommandOutput,
} from "../commands/CreateSipMediaApplicationCommand";
import { CreateSipRuleCommandInput, CreateSipRuleCommandOutput } from "../commands/CreateSipRuleCommand";
import {
  CreateVoiceConnectorCommandInput,
  CreateVoiceConnectorCommandOutput,
} from "../commands/CreateVoiceConnectorCommand";
import {
  CreateVoiceConnectorGroupCommandInput,
  CreateVoiceConnectorGroupCommandOutput,
} from "../commands/CreateVoiceConnectorGroupCommand";
import { CreateVoiceProfileCommandInput, CreateVoiceProfileCommandOutput } from "../commands/CreateVoiceProfileCommand";
import {
  CreateVoiceProfileDomainCommandInput,
  CreateVoiceProfileDomainCommandOutput,
} from "../commands/CreateVoiceProfileDomainCommand";
import { DeletePhoneNumberCommandInput, DeletePhoneNumberCommandOutput } from "../commands/DeletePhoneNumberCommand";
import { DeleteProxySessionCommandInput, DeleteProxySessionCommandOutput } from "../commands/DeleteProxySessionCommand";
import {
  DeleteSipMediaApplicationCommandInput,
  DeleteSipMediaApplicationCommandOutput,
} from "../commands/DeleteSipMediaApplicationCommand";
import { DeleteSipRuleCommandInput, DeleteSipRuleCommandOutput } from "../commands/DeleteSipRuleCommand";
import {
  DeleteVoiceConnectorCommandInput,
  DeleteVoiceConnectorCommandOutput,
} from "../commands/DeleteVoiceConnectorCommand";
import {
  DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
  DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "../commands/DeleteVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  DeleteVoiceConnectorExternalSystemsConfigurationCommandInput,
  DeleteVoiceConnectorExternalSystemsConfigurationCommandOutput,
} from "../commands/DeleteVoiceConnectorExternalSystemsConfigurationCommand";
import {
  DeleteVoiceConnectorGroupCommandInput,
  DeleteVoiceConnectorGroupCommandOutput,
} from "../commands/DeleteVoiceConnectorGroupCommand";
import {
  DeleteVoiceConnectorOriginationCommandInput,
  DeleteVoiceConnectorOriginationCommandOutput,
} from "../commands/DeleteVoiceConnectorOriginationCommand";
import {
  DeleteVoiceConnectorProxyCommandInput,
  DeleteVoiceConnectorProxyCommandOutput,
} from "../commands/DeleteVoiceConnectorProxyCommand";
import {
  DeleteVoiceConnectorStreamingConfigurationCommandInput,
  DeleteVoiceConnectorStreamingConfigurationCommandOutput,
} from "../commands/DeleteVoiceConnectorStreamingConfigurationCommand";
import {
  DeleteVoiceConnectorTerminationCommandInput,
  DeleteVoiceConnectorTerminationCommandOutput,
} from "../commands/DeleteVoiceConnectorTerminationCommand";
import {
  DeleteVoiceConnectorTerminationCredentialsCommandInput,
  DeleteVoiceConnectorTerminationCredentialsCommandOutput,
} from "../commands/DeleteVoiceConnectorTerminationCredentialsCommand";
import { DeleteVoiceProfileCommandInput, DeleteVoiceProfileCommandOutput } from "../commands/DeleteVoiceProfileCommand";
import {
  DeleteVoiceProfileDomainCommandInput,
  DeleteVoiceProfileDomainCommandOutput,
} from "../commands/DeleteVoiceProfileDomainCommand";
import {
  DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorCommandOutput,
} from "../commands/DisassociatePhoneNumbersFromVoiceConnectorCommand";
import {
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput,
} from "../commands/DisassociatePhoneNumbersFromVoiceConnectorGroupCommand";
import { GetGlobalSettingsCommandInput, GetGlobalSettingsCommandOutput } from "../commands/GetGlobalSettingsCommand";
import { GetPhoneNumberCommandInput, GetPhoneNumberCommandOutput } from "../commands/GetPhoneNumberCommand";
import {
  GetPhoneNumberOrderCommandInput,
  GetPhoneNumberOrderCommandOutput,
} from "../commands/GetPhoneNumberOrderCommand";
import {
  GetPhoneNumberSettingsCommandInput,
  GetPhoneNumberSettingsCommandOutput,
} from "../commands/GetPhoneNumberSettingsCommand";
import { GetProxySessionCommandInput, GetProxySessionCommandOutput } from "../commands/GetProxySessionCommand";
import {
  GetSipMediaApplicationAlexaSkillConfigurationCommandInput,
  GetSipMediaApplicationAlexaSkillConfigurationCommandOutput,
} from "../commands/GetSipMediaApplicationAlexaSkillConfigurationCommand";
import {
  GetSipMediaApplicationCommandInput,
  GetSipMediaApplicationCommandOutput,
} from "../commands/GetSipMediaApplicationCommand";
import {
  GetSipMediaApplicationLoggingConfigurationCommandInput,
  GetSipMediaApplicationLoggingConfigurationCommandOutput,
} from "../commands/GetSipMediaApplicationLoggingConfigurationCommand";
import { GetSipRuleCommandInput, GetSipRuleCommandOutput } from "../commands/GetSipRuleCommand";
import {
  GetSpeakerSearchTaskCommandInput,
  GetSpeakerSearchTaskCommandOutput,
} from "../commands/GetSpeakerSearchTaskCommand";
import { GetVoiceConnectorCommandInput, GetVoiceConnectorCommandOutput } from "../commands/GetVoiceConnectorCommand";
import {
  GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
  GetVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "../commands/GetVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  GetVoiceConnectorExternalSystemsConfigurationCommandInput,
  GetVoiceConnectorExternalSystemsConfigurationCommandOutput,
} from "../commands/GetVoiceConnectorExternalSystemsConfigurationCommand";
import {
  GetVoiceConnectorGroupCommandInput,
  GetVoiceConnectorGroupCommandOutput,
} from "../commands/GetVoiceConnectorGroupCommand";
import {
  GetVoiceConnectorLoggingConfigurationCommandInput,
  GetVoiceConnectorLoggingConfigurationCommandOutput,
} from "../commands/GetVoiceConnectorLoggingConfigurationCommand";
import {
  GetVoiceConnectorOriginationCommandInput,
  GetVoiceConnectorOriginationCommandOutput,
} from "../commands/GetVoiceConnectorOriginationCommand";
import {
  GetVoiceConnectorProxyCommandInput,
  GetVoiceConnectorProxyCommandOutput,
} from "../commands/GetVoiceConnectorProxyCommand";
import {
  GetVoiceConnectorStreamingConfigurationCommandInput,
  GetVoiceConnectorStreamingConfigurationCommandOutput,
} from "../commands/GetVoiceConnectorStreamingConfigurationCommand";
import {
  GetVoiceConnectorTerminationCommandInput,
  GetVoiceConnectorTerminationCommandOutput,
} from "../commands/GetVoiceConnectorTerminationCommand";
import {
  GetVoiceConnectorTerminationHealthCommandInput,
  GetVoiceConnectorTerminationHealthCommandOutput,
} from "../commands/GetVoiceConnectorTerminationHealthCommand";
import { GetVoiceProfileCommandInput, GetVoiceProfileCommandOutput } from "../commands/GetVoiceProfileCommand";
import {
  GetVoiceProfileDomainCommandInput,
  GetVoiceProfileDomainCommandOutput,
} from "../commands/GetVoiceProfileDomainCommand";
import {
  GetVoiceToneAnalysisTaskCommandInput,
  GetVoiceToneAnalysisTaskCommandOutput,
} from "../commands/GetVoiceToneAnalysisTaskCommand";
import {
  ListAvailableVoiceConnectorRegionsCommandInput,
  ListAvailableVoiceConnectorRegionsCommandOutput,
} from "../commands/ListAvailableVoiceConnectorRegionsCommand";
import {
  ListPhoneNumberOrdersCommandInput,
  ListPhoneNumberOrdersCommandOutput,
} from "../commands/ListPhoneNumberOrdersCommand";
import { ListPhoneNumbersCommandInput, ListPhoneNumbersCommandOutput } from "../commands/ListPhoneNumbersCommand";
import { ListProxySessionsCommandInput, ListProxySessionsCommandOutput } from "../commands/ListProxySessionsCommand";
import {
  ListSipMediaApplicationsCommandInput,
  ListSipMediaApplicationsCommandOutput,
} from "../commands/ListSipMediaApplicationsCommand";
import { ListSipRulesCommandInput, ListSipRulesCommandOutput } from "../commands/ListSipRulesCommand";
import {
  ListSupportedPhoneNumberCountriesCommandInput,
  ListSupportedPhoneNumberCountriesCommandOutput,
} from "../commands/ListSupportedPhoneNumberCountriesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListVoiceConnectorGroupsCommandInput,
  ListVoiceConnectorGroupsCommandOutput,
} from "../commands/ListVoiceConnectorGroupsCommand";
import {
  ListVoiceConnectorsCommandInput,
  ListVoiceConnectorsCommandOutput,
} from "../commands/ListVoiceConnectorsCommand";
import {
  ListVoiceConnectorTerminationCredentialsCommandInput,
  ListVoiceConnectorTerminationCredentialsCommandOutput,
} from "../commands/ListVoiceConnectorTerminationCredentialsCommand";
import {
  ListVoiceProfileDomainsCommandInput,
  ListVoiceProfileDomainsCommandOutput,
} from "../commands/ListVoiceProfileDomainsCommand";
import { ListVoiceProfilesCommandInput, ListVoiceProfilesCommandOutput } from "../commands/ListVoiceProfilesCommand";
import {
  PutSipMediaApplicationAlexaSkillConfigurationCommandInput,
  PutSipMediaApplicationAlexaSkillConfigurationCommandOutput,
} from "../commands/PutSipMediaApplicationAlexaSkillConfigurationCommand";
import {
  PutSipMediaApplicationLoggingConfigurationCommandInput,
  PutSipMediaApplicationLoggingConfigurationCommandOutput,
} from "../commands/PutSipMediaApplicationLoggingConfigurationCommand";
import {
  PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
  PutVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "../commands/PutVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  PutVoiceConnectorExternalSystemsConfigurationCommandInput,
  PutVoiceConnectorExternalSystemsConfigurationCommandOutput,
} from "../commands/PutVoiceConnectorExternalSystemsConfigurationCommand";
import {
  PutVoiceConnectorLoggingConfigurationCommandInput,
  PutVoiceConnectorLoggingConfigurationCommandOutput,
} from "../commands/PutVoiceConnectorLoggingConfigurationCommand";
import {
  PutVoiceConnectorOriginationCommandInput,
  PutVoiceConnectorOriginationCommandOutput,
} from "../commands/PutVoiceConnectorOriginationCommand";
import {
  PutVoiceConnectorProxyCommandInput,
  PutVoiceConnectorProxyCommandOutput,
} from "../commands/PutVoiceConnectorProxyCommand";
import {
  PutVoiceConnectorStreamingConfigurationCommandInput,
  PutVoiceConnectorStreamingConfigurationCommandOutput,
} from "../commands/PutVoiceConnectorStreamingConfigurationCommand";
import {
  PutVoiceConnectorTerminationCommandInput,
  PutVoiceConnectorTerminationCommandOutput,
} from "../commands/PutVoiceConnectorTerminationCommand";
import {
  PutVoiceConnectorTerminationCredentialsCommandInput,
  PutVoiceConnectorTerminationCredentialsCommandOutput,
} from "../commands/PutVoiceConnectorTerminationCredentialsCommand";
import { RestorePhoneNumberCommandInput, RestorePhoneNumberCommandOutput } from "../commands/RestorePhoneNumberCommand";
import {
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
} from "../commands/SearchAvailablePhoneNumbersCommand";
import {
  StartSpeakerSearchTaskCommandInput,
  StartSpeakerSearchTaskCommandOutput,
} from "../commands/StartSpeakerSearchTaskCommand";
import {
  StartVoiceToneAnalysisTaskCommandInput,
  StartVoiceToneAnalysisTaskCommandOutput,
} from "../commands/StartVoiceToneAnalysisTaskCommand";
import {
  StopSpeakerSearchTaskCommandInput,
  StopSpeakerSearchTaskCommandOutput,
} from "../commands/StopSpeakerSearchTaskCommand";
import {
  StopVoiceToneAnalysisTaskCommandInput,
  StopVoiceToneAnalysisTaskCommandOutput,
} from "../commands/StopVoiceToneAnalysisTaskCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "../commands/UpdateGlobalSettingsCommand";
import { UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput } from "../commands/UpdatePhoneNumberCommand";
import {
  UpdatePhoneNumberSettingsCommandInput,
  UpdatePhoneNumberSettingsCommandOutput,
} from "../commands/UpdatePhoneNumberSettingsCommand";
import { UpdateProxySessionCommandInput, UpdateProxySessionCommandOutput } from "../commands/UpdateProxySessionCommand";
import {
  UpdateSipMediaApplicationCallCommandInput,
  UpdateSipMediaApplicationCallCommandOutput,
} from "../commands/UpdateSipMediaApplicationCallCommand";
import {
  UpdateSipMediaApplicationCommandInput,
  UpdateSipMediaApplicationCommandOutput,
} from "../commands/UpdateSipMediaApplicationCommand";
import { UpdateSipRuleCommandInput, UpdateSipRuleCommandOutput } from "../commands/UpdateSipRuleCommand";
import {
  UpdateVoiceConnectorCommandInput,
  UpdateVoiceConnectorCommandOutput,
} from "../commands/UpdateVoiceConnectorCommand";
import {
  UpdateVoiceConnectorGroupCommandInput,
  UpdateVoiceConnectorGroupCommandOutput,
} from "../commands/UpdateVoiceConnectorGroupCommand";
import { UpdateVoiceProfileCommandInput, UpdateVoiceProfileCommandOutput } from "../commands/UpdateVoiceProfileCommand";
import {
  UpdateVoiceProfileDomainCommandInput,
  UpdateVoiceProfileDomainCommandOutput,
} from "../commands/UpdateVoiceProfileDomainCommand";
import {
  ValidateE911AddressCommandInput,
  ValidateE911AddressCommandOutput,
} from "../commands/ValidateE911AddressCommand";
import { ChimeSDKVoiceServiceException as __BaseException } from "../models/ChimeSDKVoiceServiceException";
import {
  AccessDeniedException,
  BadRequestException,
  Capability,
  ConflictException,
  ContactCenterSystemType,
  Credential,
  DNISEmergencyCallingConfiguration,
  EmergencyCallingConfiguration,
  ForbiddenException,
  GeoMatchParams,
  GoneException,
  LoggingConfiguration,
  MediaInsightsConfiguration,
  NotFoundException,
  Origination,
  OriginationRoute,
  PhoneNumber,
  PhoneNumberAssociation,
  PhoneNumberOrder,
  ProxySession,
  ResourceLimitExceededException,
  ServerSideEncryptionConfiguration,
  ServiceFailureException,
  ServiceUnavailableException,
  SessionBorderControllerType,
  SipMediaApplication,
  SipMediaApplicationAlexaSkillConfiguration,
  SipMediaApplicationEndpoint,
  SipMediaApplicationLoggingConfiguration,
  SipRule,
  SipRuleTargetApplication,
  SpeakerSearchDetails,
  SpeakerSearchResult,
  SpeakerSearchTask,
  StreamingConfiguration,
  StreamingNotificationTarget,
  Tag,
  Termination,
  TerminationHealth,
  ThrottledClientException,
  UnauthorizedClientException,
  UnprocessableEntityException,
  UpdatePhoneNumberRequestItem,
  VoiceConnector,
  VoiceConnectorGroup,
  VoiceConnectorItem,
  VoiceConnectorSettings,
  VoiceProfile,
  VoiceProfileDomain,
  VoiceProfileDomainSummary,
  VoiceProfileSummary,
  VoiceToneAnalysisTask,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorCommand
 */
export const se_AssociatePhoneNumbersWithVoiceConnectorCommand = async (
  input: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  const query: any = map({
    [_o]: [, "associate-phone-numbers"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      E164PhoneNumbers: (_) => _json(_),
      ForceAssociate: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorGroupCommand
 */
export const se_AssociatePhoneNumbersWithVoiceConnectorGroupCommand = async (
  input: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connector-groups/{VoiceConnectorGroupId}");
  b.p("VoiceConnectorGroupId", () => input.VoiceConnectorGroupId!, "{VoiceConnectorGroupId}", false);
  const query: any = map({
    [_o]: [, "associate-phone-numbers"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      E164PhoneNumbers: (_) => _json(_),
      ForceAssociate: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchDeletePhoneNumberCommand
 */
export const se_BatchDeletePhoneNumberCommand = async (
  input: BatchDeletePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/phone-numbers");
  const query: any = map({
    [_o]: [, "batch-delete"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      PhoneNumberIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchUpdatePhoneNumberCommand
 */
export const se_BatchUpdatePhoneNumberCommand = async (
  input: BatchUpdatePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/phone-numbers");
  const query: any = map({
    [_o]: [, "batch-update"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      UpdatePhoneNumberRequestItems: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePhoneNumberOrderCommand
 */
export const se_CreatePhoneNumberOrderCommand = async (
  input: CreatePhoneNumberOrderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/phone-number-orders");
  let body: any;
  body = JSON.stringify(
    take(input, {
      E164PhoneNumbers: (_) => _json(_),
      Name: [],
      ProductType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProxySessionCommand
 */
export const se_CreateProxySessionCommand = async (
  input: CreateProxySessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/proxy-sessions");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Capabilities: (_) => _json(_),
      ExpiryMinutes: [],
      GeoMatchLevel: [],
      GeoMatchParams: (_) => _json(_),
      Name: [],
      NumberSelectionBehavior: [],
      ParticipantPhoneNumbers: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSipMediaApplicationCommand
 */
export const se_CreateSipMediaApplicationCommand = async (
  input: CreateSipMediaApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sip-media-applications");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AwsRegion: [],
      Endpoints: (_) => _json(_),
      Name: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSipMediaApplicationCallCommand
 */
export const se_CreateSipMediaApplicationCallCommand = async (
  input: CreateSipMediaApplicationCallCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sip-media-applications/{SipMediaApplicationId}/calls");
  b.p("SipMediaApplicationId", () => input.SipMediaApplicationId!, "{SipMediaApplicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ArgumentsMap: (_) => _json(_),
      FromPhoneNumber: [],
      SipHeaders: (_) => _json(_),
      ToPhoneNumber: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSipRuleCommand
 */
export const se_CreateSipRuleCommand = async (
  input: CreateSipRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sip-rules");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Disabled: [],
      Name: [],
      TargetApplications: (_) => _json(_),
      TriggerType: [],
      TriggerValue: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateVoiceConnectorCommand
 */
export const se_CreateVoiceConnectorCommand = async (
  input: CreateVoiceConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AwsRegion: [],
      IntegrationType: [],
      Name: [],
      RequireEncryption: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateVoiceConnectorGroupCommand
 */
export const se_CreateVoiceConnectorGroupCommand = async (
  input: CreateVoiceConnectorGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connector-groups");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
      VoiceConnectorItems: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateVoiceProfileCommand
 */
export const se_CreateVoiceProfileCommand = async (
  input: CreateVoiceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-profiles");
  let body: any;
  body = JSON.stringify(
    take(input, {
      SpeakerSearchTaskId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateVoiceProfileDomainCommand
 */
export const se_CreateVoiceProfileDomainCommand = async (
  input: CreateVoiceProfileDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-profile-domains");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [],
      Description: [],
      Name: [],
      ServerSideEncryptionConfiguration: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePhoneNumberCommand
 */
export const se_DeletePhoneNumberCommand = async (
  input: DeletePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-numbers/{PhoneNumberId}");
  b.p("PhoneNumberId", () => input.PhoneNumberId!, "{PhoneNumberId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProxySessionCommand
 */
export const se_DeleteProxySessionCommand = async (
  input: DeleteProxySessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  b.p("ProxySessionId", () => input.ProxySessionId!, "{ProxySessionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSipMediaApplicationCommand
 */
export const se_DeleteSipMediaApplicationCommand = async (
  input: DeleteSipMediaApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sip-media-applications/{SipMediaApplicationId}");
  b.p("SipMediaApplicationId", () => input.SipMediaApplicationId!, "{SipMediaApplicationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSipRuleCommand
 */
export const se_DeleteSipRuleCommand = async (
  input: DeleteSipRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sip-rules/{SipRuleId}");
  b.p("SipRuleId", () => input.SipRuleId!, "{SipRuleId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVoiceConnectorCommand
 */
export const se_DeleteVoiceConnectorCommand = async (
  input: DeleteVoiceConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVoiceConnectorEmergencyCallingConfigurationCommand
 */
export const se_DeleteVoiceConnectorEmergencyCallingConfigurationCommand = async (
  input: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/emergency-calling-configuration");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVoiceConnectorExternalSystemsConfigurationCommand
 */
export const se_DeleteVoiceConnectorExternalSystemsConfigurationCommand = async (
  input: DeleteVoiceConnectorExternalSystemsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/external-systems-configuration");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVoiceConnectorGroupCommand
 */
export const se_DeleteVoiceConnectorGroupCommand = async (
  input: DeleteVoiceConnectorGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connector-groups/{VoiceConnectorGroupId}");
  b.p("VoiceConnectorGroupId", () => input.VoiceConnectorGroupId!, "{VoiceConnectorGroupId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVoiceConnectorOriginationCommand
 */
export const se_DeleteVoiceConnectorOriginationCommand = async (
  input: DeleteVoiceConnectorOriginationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/origination");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVoiceConnectorProxyCommand
 */
export const se_DeleteVoiceConnectorProxyCommand = async (
  input: DeleteVoiceConnectorProxyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVoiceConnectorStreamingConfigurationCommand
 */
export const se_DeleteVoiceConnectorStreamingConfigurationCommand = async (
  input: DeleteVoiceConnectorStreamingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/streaming-configuration");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVoiceConnectorTerminationCommand
 */
export const se_DeleteVoiceConnectorTerminationCommand = async (
  input: DeleteVoiceConnectorTerminationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/termination");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVoiceConnectorTerminationCredentialsCommand
 */
export const se_DeleteVoiceConnectorTerminationCredentialsCommand = async (
  input: DeleteVoiceConnectorTerminationCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/termination/credentials");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  const query: any = map({
    [_o]: [, "delete"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Usernames: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVoiceProfileCommand
 */
export const se_DeleteVoiceProfileCommand = async (
  input: DeleteVoiceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-profiles/{VoiceProfileId}");
  b.p("VoiceProfileId", () => input.VoiceProfileId!, "{VoiceProfileId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVoiceProfileDomainCommand
 */
export const se_DeleteVoiceProfileDomainCommand = async (
  input: DeleteVoiceProfileDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-profile-domains/{VoiceProfileDomainId}");
  b.p("VoiceProfileDomainId", () => input.VoiceProfileDomainId!, "{VoiceProfileDomainId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorCommand
 */
export const se_DisassociatePhoneNumbersFromVoiceConnectorCommand = async (
  input: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  const query: any = map({
    [_o]: [, "disassociate-phone-numbers"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      E164PhoneNumbers: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorGroupCommand
 */
export const se_DisassociatePhoneNumbersFromVoiceConnectorGroupCommand = async (
  input: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connector-groups/{VoiceConnectorGroupId}");
  b.p("VoiceConnectorGroupId", () => input.VoiceConnectorGroupId!, "{VoiceConnectorGroupId}", false);
  const query: any = map({
    [_o]: [, "disassociate-phone-numbers"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      E164PhoneNumbers: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGlobalSettingsCommand
 */
export const se_GetGlobalSettingsCommand = async (
  input: GetGlobalSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/settings");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPhoneNumberCommand
 */
export const se_GetPhoneNumberCommand = async (
  input: GetPhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-numbers/{PhoneNumberId}");
  b.p("PhoneNumberId", () => input.PhoneNumberId!, "{PhoneNumberId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPhoneNumberOrderCommand
 */
export const se_GetPhoneNumberOrderCommand = async (
  input: GetPhoneNumberOrderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-number-orders/{PhoneNumberOrderId}");
  b.p("PhoneNumberOrderId", () => input.PhoneNumberOrderId!, "{PhoneNumberOrderId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPhoneNumberSettingsCommand
 */
export const se_GetPhoneNumberSettingsCommand = async (
  input: GetPhoneNumberSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/settings/phone-number");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProxySessionCommand
 */
export const se_GetProxySessionCommand = async (
  input: GetProxySessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  b.p("ProxySessionId", () => input.ProxySessionId!, "{ProxySessionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSipMediaApplicationCommand
 */
export const se_GetSipMediaApplicationCommand = async (
  input: GetSipMediaApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sip-media-applications/{SipMediaApplicationId}");
  b.p("SipMediaApplicationId", () => input.SipMediaApplicationId!, "{SipMediaApplicationId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSipMediaApplicationAlexaSkillConfigurationCommand
 */
export const se_GetSipMediaApplicationAlexaSkillConfigurationCommand = async (
  input: GetSipMediaApplicationAlexaSkillConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sip-media-applications/{SipMediaApplicationId}/alexa-skill-configuration");
  b.p("SipMediaApplicationId", () => input.SipMediaApplicationId!, "{SipMediaApplicationId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommand
 */
export const se_GetSipMediaApplicationLoggingConfigurationCommand = async (
  input: GetSipMediaApplicationLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sip-media-applications/{SipMediaApplicationId}/logging-configuration");
  b.p("SipMediaApplicationId", () => input.SipMediaApplicationId!, "{SipMediaApplicationId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSipRuleCommand
 */
export const se_GetSipRuleCommand = async (
  input: GetSipRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sip-rules/{SipRuleId}");
  b.p("SipRuleId", () => input.SipRuleId!, "{SipRuleId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSpeakerSearchTaskCommand
 */
export const se_GetSpeakerSearchTaskCommand = async (
  input: GetSpeakerSearchTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/speaker-search-tasks/{SpeakerSearchTaskId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  b.p("SpeakerSearchTaskId", () => input.SpeakerSearchTaskId!, "{SpeakerSearchTaskId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceConnectorCommand
 */
export const se_GetVoiceConnectorCommand = async (
  input: GetVoiceConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceConnectorEmergencyCallingConfigurationCommand
 */
export const se_GetVoiceConnectorEmergencyCallingConfigurationCommand = async (
  input: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/emergency-calling-configuration");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceConnectorExternalSystemsConfigurationCommand
 */
export const se_GetVoiceConnectorExternalSystemsConfigurationCommand = async (
  input: GetVoiceConnectorExternalSystemsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/external-systems-configuration");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceConnectorGroupCommand
 */
export const se_GetVoiceConnectorGroupCommand = async (
  input: GetVoiceConnectorGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connector-groups/{VoiceConnectorGroupId}");
  b.p("VoiceConnectorGroupId", () => input.VoiceConnectorGroupId!, "{VoiceConnectorGroupId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceConnectorLoggingConfigurationCommand
 */
export const se_GetVoiceConnectorLoggingConfigurationCommand = async (
  input: GetVoiceConnectorLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/logging-configuration");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceConnectorOriginationCommand
 */
export const se_GetVoiceConnectorOriginationCommand = async (
  input: GetVoiceConnectorOriginationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/origination");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceConnectorProxyCommand
 */
export const se_GetVoiceConnectorProxyCommand = async (
  input: GetVoiceConnectorProxyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceConnectorStreamingConfigurationCommand
 */
export const se_GetVoiceConnectorStreamingConfigurationCommand = async (
  input: GetVoiceConnectorStreamingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/streaming-configuration");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceConnectorTerminationCommand
 */
export const se_GetVoiceConnectorTerminationCommand = async (
  input: GetVoiceConnectorTerminationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/termination");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceConnectorTerminationHealthCommand
 */
export const se_GetVoiceConnectorTerminationHealthCommand = async (
  input: GetVoiceConnectorTerminationHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/termination/health");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceProfileCommand
 */
export const se_GetVoiceProfileCommand = async (
  input: GetVoiceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-profiles/{VoiceProfileId}");
  b.p("VoiceProfileId", () => input.VoiceProfileId!, "{VoiceProfileId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceProfileDomainCommand
 */
export const se_GetVoiceProfileDomainCommand = async (
  input: GetVoiceProfileDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-profile-domains/{VoiceProfileDomainId}");
  b.p("VoiceProfileDomainId", () => input.VoiceProfileDomainId!, "{VoiceProfileDomainId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVoiceToneAnalysisTaskCommand
 */
export const se_GetVoiceToneAnalysisTaskCommand = async (
  input: GetVoiceToneAnalysisTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  b.p("VoiceToneAnalysisTaskId", () => input.VoiceToneAnalysisTaskId!, "{VoiceToneAnalysisTaskId}", false);
  const query: any = map({
    [_iC]: [__expectNonNull(input.IsCaller, `IsCaller`) != null, () => input[_IC]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAvailableVoiceConnectorRegionsCommand
 */
export const se_ListAvailableVoiceConnectorRegionsCommand = async (
  input: ListAvailableVoiceConnectorRegionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connector-regions");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPhoneNumberOrdersCommand
 */
export const se_ListPhoneNumberOrdersCommand = async (
  input: ListPhoneNumberOrdersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-number-orders");
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPhoneNumbersCommand
 */
export const se_ListPhoneNumbersCommand = async (
  input: ListPhoneNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-numbers");
  const query: any = map({
    [_s]: [, input[_S]!],
    [_pt]: [, input[_PT]!],
    [_fn]: [, input[_FN]!],
    [_fv]: [, input[_FV]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProxySessionsCommand
 */
export const se_ListProxySessionsCommand = async (
  input: ListProxySessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/proxy-sessions");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  const query: any = map({
    [_s]: [, input[_S]!],
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSipMediaApplicationsCommand
 */
export const se_ListSipMediaApplicationsCommand = async (
  input: ListSipMediaApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sip-media-applications");
  const query: any = map({
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSipRulesCommand
 */
export const se_ListSipRulesCommand = async (
  input: ListSipRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sip-rules");
  const query: any = map({
    [_sma]: [, input[_SMAI]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSupportedPhoneNumberCountriesCommand
 */
export const se_ListSupportedPhoneNumberCountriesCommand = async (
  input: ListSupportedPhoneNumberCountriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-number-countries");
  const query: any = map({
    [_pt]: [, __expectNonNull(input[_PT]!, `ProductType`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
  const headers: any = {};
  b.bp("/tags");
  const query: any = map({
    [_a]: [, __expectNonNull(input[_RARN]!, `ResourceARN`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListVoiceConnectorGroupsCommand
 */
export const se_ListVoiceConnectorGroupsCommand = async (
  input: ListVoiceConnectorGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connector-groups");
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListVoiceConnectorsCommand
 */
export const se_ListVoiceConnectorsCommand = async (
  input: ListVoiceConnectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors");
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListVoiceConnectorTerminationCredentialsCommand
 */
export const se_ListVoiceConnectorTerminationCredentialsCommand = async (
  input: ListVoiceConnectorTerminationCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/termination/credentials");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListVoiceProfileDomainsCommand
 */
export const se_ListVoiceProfileDomainsCommand = async (
  input: ListVoiceProfileDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-profile-domains");
  const query: any = map({
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListVoiceProfilesCommand
 */
export const se_ListVoiceProfilesCommand = async (
  input: ListVoiceProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-profiles");
  const query: any = map({
    [_vpdi]: [, __expectNonNull(input[_VPDI]!, `VoiceProfileDomainId`)],
    [_nt]: [, input[_NT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutSipMediaApplicationAlexaSkillConfigurationCommand
 */
export const se_PutSipMediaApplicationAlexaSkillConfigurationCommand = async (
  input: PutSipMediaApplicationAlexaSkillConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sip-media-applications/{SipMediaApplicationId}/alexa-skill-configuration");
  b.p("SipMediaApplicationId", () => input.SipMediaApplicationId!, "{SipMediaApplicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      SipMediaApplicationAlexaSkillConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutSipMediaApplicationLoggingConfigurationCommand
 */
export const se_PutSipMediaApplicationLoggingConfigurationCommand = async (
  input: PutSipMediaApplicationLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sip-media-applications/{SipMediaApplicationId}/logging-configuration");
  b.p("SipMediaApplicationId", () => input.SipMediaApplicationId!, "{SipMediaApplicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      SipMediaApplicationLoggingConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutVoiceConnectorEmergencyCallingConfigurationCommand
 */
export const se_PutVoiceConnectorEmergencyCallingConfigurationCommand = async (
  input: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/emergency-calling-configuration");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      EmergencyCallingConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutVoiceConnectorExternalSystemsConfigurationCommand
 */
export const se_PutVoiceConnectorExternalSystemsConfigurationCommand = async (
  input: PutVoiceConnectorExternalSystemsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/external-systems-configuration");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContactCenterSystemTypes: (_) => _json(_),
      SessionBorderControllerTypes: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutVoiceConnectorLoggingConfigurationCommand
 */
export const se_PutVoiceConnectorLoggingConfigurationCommand = async (
  input: PutVoiceConnectorLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/logging-configuration");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      LoggingConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutVoiceConnectorOriginationCommand
 */
export const se_PutVoiceConnectorOriginationCommand = async (
  input: PutVoiceConnectorOriginationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/origination");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Origination: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutVoiceConnectorProxyCommand
 */
export const se_PutVoiceConnectorProxyCommand = async (
  input: PutVoiceConnectorProxyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DefaultSessionExpiryMinutes: [],
      Disabled: [],
      FallBackPhoneNumber: [],
      PhoneNumberPoolCountries: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutVoiceConnectorStreamingConfigurationCommand
 */
export const se_PutVoiceConnectorStreamingConfigurationCommand = async (
  input: PutVoiceConnectorStreamingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/streaming-configuration");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      StreamingConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutVoiceConnectorTerminationCommand
 */
export const se_PutVoiceConnectorTerminationCommand = async (
  input: PutVoiceConnectorTerminationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/termination");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Termination: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutVoiceConnectorTerminationCredentialsCommand
 */
export const se_PutVoiceConnectorTerminationCredentialsCommand = async (
  input: PutVoiceConnectorTerminationCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/termination/credentials");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  const query: any = map({
    [_o]: [, "put"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Credentials: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RestorePhoneNumberCommand
 */
export const se_RestorePhoneNumberCommand = async (
  input: RestorePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/phone-numbers/{PhoneNumberId}");
  b.p("PhoneNumberId", () => input.PhoneNumberId!, "{PhoneNumberId}", false);
  const query: any = map({
    [_o]: [, "restore"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchAvailablePhoneNumbersCommand
 */
export const se_SearchAvailablePhoneNumbersCommand = async (
  input: SearchAvailablePhoneNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/search");
  const query: any = map({
    [_t]: [, "phone-numbers"],
    [_ac]: [, input[_AC]!],
    [_c]: [, input[_C]!],
    [_co]: [, input[_Co]!],
    [_st]: [, input[_St]!],
    [_tfp]: [, input[_TFP]!],
    [_pnt]: [, input[_PNT]!],
    [_mr]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nt]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartSpeakerSearchTaskCommand
 */
export const se_StartSpeakerSearchTaskCommand = async (
  input: StartSpeakerSearchTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/speaker-search-tasks");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CallLeg: [],
      ClientRequestToken: [],
      TransactionId: [],
      VoiceProfileDomainId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartVoiceToneAnalysisTaskCommand
 */
export const se_StartVoiceToneAnalysisTaskCommand = async (
  input: StartVoiceToneAnalysisTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [],
      LanguageCode: [],
      TransactionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopSpeakerSearchTaskCommand
 */
export const se_StopSpeakerSearchTaskCommand = async (
  input: StopSpeakerSearchTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/speaker-search-tasks/{SpeakerSearchTaskId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  b.p("SpeakerSearchTaskId", () => input.SpeakerSearchTaskId!, "{SpeakerSearchTaskId}", false);
  const query: any = map({
    [_o]: [, "stop"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopVoiceToneAnalysisTaskCommand
 */
export const se_StopVoiceToneAnalysisTaskCommand = async (
  input: StopVoiceToneAnalysisTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  b.p("VoiceToneAnalysisTaskId", () => input.VoiceToneAnalysisTaskId!, "{VoiceToneAnalysisTaskId}", false);
  const query: any = map({
    [_o]: [, "stop"],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
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
  b.bp("/tags");
  const query: any = map({
    [_o]: [, "tag-resource"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
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
  b.bp("/tags");
  const query: any = map({
    [_o]: [, "untag-resource"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
      TagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGlobalSettingsCommand
 */
export const se_UpdateGlobalSettingsCommand = async (
  input: UpdateGlobalSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/settings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      VoiceConnector: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePhoneNumberCommand
 */
export const se_UpdatePhoneNumberCommand = async (
  input: UpdatePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/phone-numbers/{PhoneNumberId}");
  b.p("PhoneNumberId", () => input.PhoneNumberId!, "{PhoneNumberId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CallingName: [],
      Name: [],
      ProductType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePhoneNumberSettingsCommand
 */
export const se_UpdatePhoneNumberSettingsCommand = async (
  input: UpdatePhoneNumberSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/settings/phone-number");
  let body: any;
  body = JSON.stringify(
    take(input, {
      CallingName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateProxySessionCommand
 */
export const se_UpdateProxySessionCommand = async (
  input: UpdateProxySessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  b.p("ProxySessionId", () => input.ProxySessionId!, "{ProxySessionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Capabilities: (_) => _json(_),
      ExpiryMinutes: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSipMediaApplicationCommand
 */
export const se_UpdateSipMediaApplicationCommand = async (
  input: UpdateSipMediaApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sip-media-applications/{SipMediaApplicationId}");
  b.p("SipMediaApplicationId", () => input.SipMediaApplicationId!, "{SipMediaApplicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Endpoints: (_) => _json(_),
      Name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSipMediaApplicationCallCommand
 */
export const se_UpdateSipMediaApplicationCallCommand = async (
  input: UpdateSipMediaApplicationCallCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sip-media-applications/{SipMediaApplicationId}/calls/{TransactionId}");
  b.p("SipMediaApplicationId", () => input.SipMediaApplicationId!, "{SipMediaApplicationId}", false);
  b.p("TransactionId", () => input.TransactionId!, "{TransactionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Arguments: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSipRuleCommand
 */
export const se_UpdateSipRuleCommand = async (
  input: UpdateSipRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sip-rules/{SipRuleId}");
  b.p("SipRuleId", () => input.SipRuleId!, "{SipRuleId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Disabled: [],
      Name: [],
      TargetApplications: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateVoiceConnectorCommand
 */
export const se_UpdateVoiceConnectorCommand = async (
  input: UpdateVoiceConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connectors/{VoiceConnectorId}");
  b.p("VoiceConnectorId", () => input.VoiceConnectorId!, "{VoiceConnectorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
      RequireEncryption: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateVoiceConnectorGroupCommand
 */
export const se_UpdateVoiceConnectorGroupCommand = async (
  input: UpdateVoiceConnectorGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-connector-groups/{VoiceConnectorGroupId}");
  b.p("VoiceConnectorGroupId", () => input.VoiceConnectorGroupId!, "{VoiceConnectorGroupId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
      VoiceConnectorItems: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateVoiceProfileCommand
 */
export const se_UpdateVoiceProfileCommand = async (
  input: UpdateVoiceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-profiles/{VoiceProfileId}");
  b.p("VoiceProfileId", () => input.VoiceProfileId!, "{VoiceProfileId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      SpeakerSearchTaskId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateVoiceProfileDomainCommand
 */
export const se_UpdateVoiceProfileDomainCommand = async (
  input: UpdateVoiceProfileDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/voice-profile-domains/{VoiceProfileDomainId}");
  b.p("VoiceProfileDomainId", () => input.VoiceProfileDomainId!, "{VoiceProfileDomainId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ValidateE911AddressCommand
 */
export const se_ValidateE911AddressCommand = async (
  input: ValidateE911AddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/emergency-calling/address");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AwsAccountId: [],
      City: [],
      Country: [],
      PostalCode: [],
      State: [],
      StreetInfo: [],
      StreetNumber: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorCommand
 */
export const de_AssociatePhoneNumbersWithVoiceConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePhoneNumbersWithVoiceConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociatePhoneNumbersWithVoiceConnectorGroupCommand
 */
export const de_AssociatePhoneNumbersWithVoiceConnectorGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchDeletePhoneNumberCommand
 */
export const de_BatchDeletePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeletePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpdatePhoneNumberCommand
 */
export const de_BatchUpdatePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdatePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePhoneNumberOrderCommand
 */
export const de_CreatePhoneNumberOrderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePhoneNumberOrderCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberOrder: (_) => de_PhoneNumberOrder(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProxySessionCommand
 */
export const de_CreateProxySessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProxySessionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProxySession: (_) => de_ProxySession(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSipMediaApplicationCommand
 */
export const de_CreateSipMediaApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSipMediaApplicationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipMediaApplication: (_) => de_SipMediaApplication(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSipMediaApplicationCallCommand
 */
export const de_CreateSipMediaApplicationCallCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSipMediaApplicationCallCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipMediaApplicationCall: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSipRuleCommand
 */
export const de_CreateSipRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSipRuleCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipRule: (_) => de_SipRule(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateVoiceConnectorCommand
 */
export const de_CreateVoiceConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVoiceConnectorCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceConnector: (_) => de_VoiceConnector(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateVoiceConnectorGroupCommand
 */
export const de_CreateVoiceConnectorGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVoiceConnectorGroupCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceConnectorGroup: (_) => de_VoiceConnectorGroup(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateVoiceProfileCommand
 */
export const de_CreateVoiceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVoiceProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceProfile: (_) => de_VoiceProfile(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateVoiceProfileDomainCommand
 */
export const de_CreateVoiceProfileDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVoiceProfileDomainCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceProfileDomain: (_) => de_VoiceProfileDomain(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePhoneNumberCommand
 */
export const de_DeletePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePhoneNumberCommandOutput> => {
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
 * deserializeAws_restJson1DeleteProxySessionCommand
 */
export const de_DeleteProxySessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProxySessionCommandOutput> => {
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
 * deserializeAws_restJson1DeleteSipMediaApplicationCommand
 */
export const de_DeleteSipMediaApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSipMediaApplicationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteSipRuleCommand
 */
export const de_DeleteSipRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSipRuleCommandOutput> => {
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
 * deserializeAws_restJson1DeleteVoiceConnectorCommand
 */
export const de_DeleteVoiceConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorCommandOutput> => {
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
 * deserializeAws_restJson1DeleteVoiceConnectorEmergencyCallingConfigurationCommand
 */
export const de_DeleteVoiceConnectorEmergencyCallingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteVoiceConnectorExternalSystemsConfigurationCommand
 */
export const de_DeleteVoiceConnectorExternalSystemsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorExternalSystemsConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteVoiceConnectorGroupCommand
 */
export const de_DeleteVoiceConnectorGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorGroupCommandOutput> => {
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
 * deserializeAws_restJson1DeleteVoiceConnectorOriginationCommand
 */
export const de_DeleteVoiceConnectorOriginationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorOriginationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteVoiceConnectorProxyCommand
 */
export const de_DeleteVoiceConnectorProxyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorProxyCommandOutput> => {
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
 * deserializeAws_restJson1DeleteVoiceConnectorStreamingConfigurationCommand
 */
export const de_DeleteVoiceConnectorStreamingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorStreamingConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteVoiceConnectorTerminationCommand
 */
export const de_DeleteVoiceConnectorTerminationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorTerminationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteVoiceConnectorTerminationCredentialsCommand
 */
export const de_DeleteVoiceConnectorTerminationCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceConnectorTerminationCredentialsCommandOutput> => {
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
 * deserializeAws_restJson1DeleteVoiceProfileCommand
 */
export const de_DeleteVoiceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceProfileCommandOutput> => {
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
 * deserializeAws_restJson1DeleteVoiceProfileDomainCommand
 */
export const de_DeleteVoiceProfileDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceProfileDomainCommandOutput> => {
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
 * deserializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorCommand
 */
export const de_DisassociatePhoneNumbersFromVoiceConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePhoneNumbersFromVoiceConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorGroupCommand
 */
export const de_DisassociatePhoneNumbersFromVoiceConnectorGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberErrors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGlobalSettingsCommand
 */
export const de_GetGlobalSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGlobalSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceConnector: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPhoneNumberCommand
 */
export const de_GetPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumber: (_) => de_PhoneNumber(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPhoneNumberOrderCommand
 */
export const de_GetPhoneNumberOrderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPhoneNumberOrderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberOrder: (_) => de_PhoneNumberOrder(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPhoneNumberSettingsCommand
 */
export const de_GetPhoneNumberSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPhoneNumberSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CallingName: __expectString,
    CallingNameUpdatedTimestamp: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProxySessionCommand
 */
export const de_GetProxySessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProxySessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProxySession: (_) => de_ProxySession(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSipMediaApplicationCommand
 */
export const de_GetSipMediaApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSipMediaApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipMediaApplication: (_) => de_SipMediaApplication(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSipMediaApplicationAlexaSkillConfigurationCommand
 */
export const de_GetSipMediaApplicationAlexaSkillConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSipMediaApplicationAlexaSkillConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipMediaApplicationAlexaSkillConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSipMediaApplicationLoggingConfigurationCommand
 */
export const de_GetSipMediaApplicationLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSipMediaApplicationLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipMediaApplicationLoggingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSipRuleCommand
 */
export const de_GetSipRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSipRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipRule: (_) => de_SipRule(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSpeakerSearchTaskCommand
 */
export const de_GetSpeakerSearchTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSpeakerSearchTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SpeakerSearchTask: (_) => de_SpeakerSearchTask(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceConnectorCommand
 */
export const de_GetVoiceConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceConnector: (_) => de_VoiceConnector(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceConnectorEmergencyCallingConfigurationCommand
 */
export const de_GetVoiceConnectorEmergencyCallingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorEmergencyCallingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EmergencyCallingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceConnectorExternalSystemsConfigurationCommand
 */
export const de_GetVoiceConnectorExternalSystemsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorExternalSystemsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ExternalSystemsConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceConnectorGroupCommand
 */
export const de_GetVoiceConnectorGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceConnectorGroup: (_) => de_VoiceConnectorGroup(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceConnectorLoggingConfigurationCommand
 */
export const de_GetVoiceConnectorLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LoggingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceConnectorOriginationCommand
 */
export const de_GetVoiceConnectorOriginationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorOriginationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Origination: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceConnectorProxyCommand
 */
export const de_GetVoiceConnectorProxyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorProxyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Proxy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceConnectorStreamingConfigurationCommand
 */
export const de_GetVoiceConnectorStreamingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorStreamingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    StreamingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceConnectorTerminationCommand
 */
export const de_GetVoiceConnectorTerminationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorTerminationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Termination: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceConnectorTerminationHealthCommand
 */
export const de_GetVoiceConnectorTerminationHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceConnectorTerminationHealthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TerminationHealth: (_) => de_TerminationHealth(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceProfileCommand
 */
export const de_GetVoiceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceProfile: (_) => de_VoiceProfile(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceProfileDomainCommand
 */
export const de_GetVoiceProfileDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceProfileDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceProfileDomain: (_) => de_VoiceProfileDomain(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceToneAnalysisTaskCommand
 */
export const de_GetVoiceToneAnalysisTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceToneAnalysisTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceToneAnalysisTask: (_) => de_VoiceToneAnalysisTask(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAvailableVoiceConnectorRegionsCommand
 */
export const de_ListAvailableVoiceConnectorRegionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableVoiceConnectorRegionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceConnectorRegions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPhoneNumberOrdersCommand
 */
export const de_ListPhoneNumberOrdersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumberOrdersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    PhoneNumberOrders: (_) => de_PhoneNumberOrderList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPhoneNumbersCommand
 */
export const de_ListPhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    PhoneNumbers: (_) => de_PhoneNumberList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProxySessionsCommand
 */
export const de_ListProxySessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProxySessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ProxySessions: (_) => de_ProxySessions(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSipMediaApplicationsCommand
 */
export const de_ListSipMediaApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSipMediaApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    SipMediaApplications: (_) => de_SipMediaApplicationList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSipRulesCommand
 */
export const de_ListSipRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSipRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    SipRules: (_) => de_SipRuleList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSupportedPhoneNumberCountriesCommand
 */
export const de_ListSupportedPhoneNumberCountriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSupportedPhoneNumberCountriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumberCountries: _json,
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
 * deserializeAws_restJson1ListVoiceConnectorGroupsCommand
 */
export const de_ListVoiceConnectorGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVoiceConnectorGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    VoiceConnectorGroups: (_) => de_VoiceConnectorGroupList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListVoiceConnectorsCommand
 */
export const de_ListVoiceConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVoiceConnectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    VoiceConnectors: (_) => de_VoiceConnectorList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListVoiceConnectorTerminationCredentialsCommand
 */
export const de_ListVoiceConnectorTerminationCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVoiceConnectorTerminationCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Usernames: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListVoiceProfileDomainsCommand
 */
export const de_ListVoiceProfileDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVoiceProfileDomainsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    VoiceProfileDomains: (_) => de_VoiceProfileDomainSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListVoiceProfilesCommand
 */
export const de_ListVoiceProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVoiceProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    VoiceProfiles: (_) => de_VoiceProfileSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutSipMediaApplicationAlexaSkillConfigurationCommand
 */
export const de_PutSipMediaApplicationAlexaSkillConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSipMediaApplicationAlexaSkillConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipMediaApplicationAlexaSkillConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutSipMediaApplicationLoggingConfigurationCommand
 */
export const de_PutSipMediaApplicationLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSipMediaApplicationLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipMediaApplicationLoggingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutVoiceConnectorEmergencyCallingConfigurationCommand
 */
export const de_PutVoiceConnectorEmergencyCallingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorEmergencyCallingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EmergencyCallingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutVoiceConnectorExternalSystemsConfigurationCommand
 */
export const de_PutVoiceConnectorExternalSystemsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorExternalSystemsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ExternalSystemsConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutVoiceConnectorLoggingConfigurationCommand
 */
export const de_PutVoiceConnectorLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LoggingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutVoiceConnectorOriginationCommand
 */
export const de_PutVoiceConnectorOriginationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorOriginationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Origination: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutVoiceConnectorProxyCommand
 */
export const de_PutVoiceConnectorProxyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorProxyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Proxy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutVoiceConnectorStreamingConfigurationCommand
 */
export const de_PutVoiceConnectorStreamingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorStreamingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    StreamingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutVoiceConnectorTerminationCommand
 */
export const de_PutVoiceConnectorTerminationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorTerminationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Termination: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutVoiceConnectorTerminationCredentialsCommand
 */
export const de_PutVoiceConnectorTerminationCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVoiceConnectorTerminationCredentialsCommandOutput> => {
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
 * deserializeAws_restJson1RestorePhoneNumberCommand
 */
export const de_RestorePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestorePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumber: (_) => de_PhoneNumber(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchAvailablePhoneNumbersCommand
 */
export const de_SearchAvailablePhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAvailablePhoneNumbersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    E164PhoneNumbers: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartSpeakerSearchTaskCommand
 */
export const de_StartSpeakerSearchTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSpeakerSearchTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SpeakerSearchTask: (_) => de_SpeakerSearchTask(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartVoiceToneAnalysisTaskCommand
 */
export const de_StartVoiceToneAnalysisTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartVoiceToneAnalysisTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceToneAnalysisTask: (_) => de_VoiceToneAnalysisTask(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopSpeakerSearchTaskCommand
 */
export const de_StopSpeakerSearchTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSpeakerSearchTaskCommandOutput> => {
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
 * deserializeAws_restJson1StopVoiceToneAnalysisTaskCommand
 */
export const de_StopVoiceToneAnalysisTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopVoiceToneAnalysisTaskCommandOutput> => {
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
 * deserializeAws_restJson1UpdateGlobalSettingsCommand
 */
export const de_UpdateGlobalSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalSettingsCommandOutput> => {
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
 * deserializeAws_restJson1UpdatePhoneNumberCommand
 */
export const de_UpdatePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePhoneNumberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PhoneNumber: (_) => de_PhoneNumber(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePhoneNumberSettingsCommand
 */
export const de_UpdatePhoneNumberSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePhoneNumberSettingsCommandOutput> => {
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
 * deserializeAws_restJson1UpdateProxySessionCommand
 */
export const de_UpdateProxySessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProxySessionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProxySession: (_) => de_ProxySession(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSipMediaApplicationCommand
 */
export const de_UpdateSipMediaApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSipMediaApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipMediaApplication: (_) => de_SipMediaApplication(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSipMediaApplicationCallCommand
 */
export const de_UpdateSipMediaApplicationCallCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSipMediaApplicationCallCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipMediaApplicationCall: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSipRuleCommand
 */
export const de_UpdateSipRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSipRuleCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SipRule: (_) => de_SipRule(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVoiceConnectorCommand
 */
export const de_UpdateVoiceConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceConnectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceConnector: (_) => de_VoiceConnector(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVoiceConnectorGroupCommand
 */
export const de_UpdateVoiceConnectorGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceConnectorGroupCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceConnectorGroup: (_) => de_VoiceConnectorGroup(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVoiceProfileCommand
 */
export const de_UpdateVoiceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceProfile: (_) => de_VoiceProfile(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVoiceProfileDomainCommand
 */
export const de_UpdateVoiceProfileDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceProfileDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VoiceProfileDomain: (_) => de_VoiceProfileDomain(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ValidateE911AddressCommand
 */
export const de_ValidateE911AddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateE911AddressCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Address: _json,
    AddressExternalId: __expectString,
    CandidateAddressList: _json,
    ValidationResult: __expectInt32,
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
    case "AccessDeniedException":
    case "com.amazonaws.chimesdkvoice#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.chimesdkvoice#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.chimesdkvoice#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.chimesdkvoice#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkvoice#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkvoice#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkvoice#ThrottledClientException":
      throw await de_ThrottledClientExceptionRes(parsedOutput, context);
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkvoice#UnauthorizedClientException":
      throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkvoice#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.chimesdkvoice#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "GoneException":
    case "com.amazonaws.chimesdkvoice#GoneException":
      throw await de_GoneExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.chimesdkvoice#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1GoneExceptionRes
 */
const de_GoneExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<GoneException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new GoneException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceLimitExceededExceptionRes
 */
const de_ResourceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceFailureExceptionRes
 */
const de_ServiceFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceFailureException({
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
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottledClientExceptionRes
 */
const de_ThrottledClientExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottledClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnauthorizedClientExceptionRes
 */
const de_UnauthorizedClientExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnprocessableEntityExceptionRes
 */
const de_UnprocessableEntityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnprocessableEntityException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnprocessableEntityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AlexaSkillIdList omitted.

// se_CallingRegionList omitted.

// se_CapabilityList omitted.

// se_ContactCenterSystemTypeList omitted.

// se_CountryList omitted.

// se_Credential omitted.

// se_CredentialList omitted.

// se_DNISEmergencyCallingConfiguration omitted.

// se_DNISEmergencyCallingConfigurationList omitted.

// se_E164PhoneNumberList omitted.

// se_EmergencyCallingConfiguration omitted.

// se_GeoMatchParams omitted.

// se_LoggingConfiguration omitted.

// se_MediaInsightsConfiguration omitted.

// se_NonEmptyStringList omitted.

// se_Origination omitted.

// se_OriginationRoute omitted.

// se_OriginationRouteList omitted.

// se_ParticipantPhoneNumberList omitted.

// se_SensitiveStringList omitted.

// se_ServerSideEncryptionConfiguration omitted.

// se_SessionBorderControllerTypeList omitted.

// se_SipHeadersMap omitted.

// se_SipMediaApplicationAlexaSkillConfiguration omitted.

// se_SipMediaApplicationEndpoint omitted.

// se_SipMediaApplicationEndpointList omitted.

// se_SipMediaApplicationLoggingConfiguration omitted.

// se_SipRuleTargetApplication omitted.

// se_SipRuleTargetApplicationList omitted.

// se_SMACreateCallArgumentsMap omitted.

// se_SMAUpdateCallArgumentsMap omitted.

// se_StreamingConfiguration omitted.

// se_StreamingNotificationTarget omitted.

// se_StreamingNotificationTargetList omitted.

// se_StringList omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_Termination omitted.

// se_UpdatePhoneNumberRequestItem omitted.

// se_UpdatePhoneNumberRequestItemList omitted.

// se_VoiceConnectorItem omitted.

// se_VoiceConnectorItemList omitted.

// se_VoiceConnectorSettings omitted.

// de_Address omitted.

// de_AlexaSkillIdList omitted.

// de_CallDetails omitted.

// de_CallingRegionList omitted.

// de_CandidateAddress omitted.

// de_CandidateAddressList omitted.

// de_CapabilityList omitted.

// de_ContactCenterSystemTypeList omitted.

// de_DNISEmergencyCallingConfiguration omitted.

// de_DNISEmergencyCallingConfigurationList omitted.

// de_E164PhoneNumberList omitted.

// de_EmergencyCallingConfiguration omitted.

// de_ExternalSystemsConfiguration omitted.

// de_GeoMatchParams omitted.

// de_LoggingConfiguration omitted.

// de_MediaInsightsConfiguration omitted.

// de_OrderedPhoneNumber omitted.

// de_OrderedPhoneNumberList omitted.

// de_Origination omitted.

// de_OriginationRoute omitted.

// de_OriginationRouteList omitted.

// de_Participant omitted.

// de_Participants omitted.

/**
 * deserializeAws_restJson1PhoneNumber
 */
const de_PhoneNumber = (output: any, context: __SerdeContext): PhoneNumber => {
  return take(output, {
    Associations: (_: any) => de_PhoneNumberAssociationList(_, context),
    CallingName: __expectString,
    CallingNameStatus: __expectString,
    Capabilities: _json,
    Country: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DeletionTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    E164PhoneNumber: __expectString,
    Name: __expectString,
    OrderId: __expectString,
    PhoneNumberId: __expectString,
    ProductType: __expectString,
    Status: __expectString,
    Type: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1PhoneNumberAssociation
 */
const de_PhoneNumberAssociation = (output: any, context: __SerdeContext): PhoneNumberAssociation => {
  return take(output, {
    AssociatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Name: __expectString,
    Value: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PhoneNumberAssociationList
 */
const de_PhoneNumberAssociationList = (output: any, context: __SerdeContext): PhoneNumberAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PhoneNumberAssociation(entry, context);
    });
  return retVal;
};

// de_PhoneNumberCapabilities omitted.

// de_PhoneNumberCountriesList omitted.

// de_PhoneNumberCountry omitted.

// de_PhoneNumberError omitted.

// de_PhoneNumberErrorList omitted.

/**
 * deserializeAws_restJson1PhoneNumberList
 */
const de_PhoneNumberList = (output: any, context: __SerdeContext): PhoneNumber[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PhoneNumber(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PhoneNumberOrder
 */
const de_PhoneNumberOrder = (output: any, context: __SerdeContext): PhoneNumberOrder => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    OrderType: __expectString,
    OrderedPhoneNumbers: _json,
    PhoneNumberOrderId: __expectString,
    ProductType: __expectString,
    Status: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1PhoneNumberOrderList
 */
const de_PhoneNumberOrderList = (output: any, context: __SerdeContext): PhoneNumberOrder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PhoneNumberOrder(entry, context);
    });
  return retVal;
};

// de_PhoneNumberTypeList omitted.

// de_Proxy omitted.

/**
 * deserializeAws_restJson1ProxySession
 */
const de_ProxySession = (output: any, context: __SerdeContext): ProxySession => {
  return take(output, {
    Capabilities: _json,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    EndedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ExpiryMinutes: __expectInt32,
    GeoMatchLevel: __expectString,
    GeoMatchParams: _json,
    Name: __expectString,
    NumberSelectionBehavior: __expectString,
    Participants: _json,
    ProxySessionId: __expectString,
    Status: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    VoiceConnectorId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ProxySessions
 */
const de_ProxySessions = (output: any, context: __SerdeContext): ProxySession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProxySession(entry, context);
    });
  return retVal;
};

// de_SensitiveStringList omitted.

// de_ServerSideEncryptionConfiguration omitted.

// de_SessionBorderControllerTypeList omitted.

/**
 * deserializeAws_restJson1SipMediaApplication
 */
const de_SipMediaApplication = (output: any, context: __SerdeContext): SipMediaApplication => {
  return take(output, {
    AwsRegion: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Endpoints: _json,
    Name: __expectString,
    SipMediaApplicationArn: __expectString,
    SipMediaApplicationId: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_SipMediaApplicationAlexaSkillConfiguration omitted.

// de_SipMediaApplicationCall omitted.

// de_SipMediaApplicationEndpoint omitted.

// de_SipMediaApplicationEndpointList omitted.

/**
 * deserializeAws_restJson1SipMediaApplicationList
 */
const de_SipMediaApplicationList = (output: any, context: __SerdeContext): SipMediaApplication[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SipMediaApplication(entry, context);
    });
  return retVal;
};

// de_SipMediaApplicationLoggingConfiguration omitted.

/**
 * deserializeAws_restJson1SipRule
 */
const de_SipRule = (output: any, context: __SerdeContext): SipRule => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Disabled: __expectBoolean,
    Name: __expectString,
    SipRuleId: __expectString,
    TargetApplications: _json,
    TriggerType: __expectString,
    TriggerValue: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1SipRuleList
 */
const de_SipRuleList = (output: any, context: __SerdeContext): SipRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SipRule(entry, context);
    });
  return retVal;
};

// de_SipRuleTargetApplication omitted.

// de_SipRuleTargetApplicationList omitted.

/**
 * deserializeAws_restJson1SpeakerSearchDetails
 */
const de_SpeakerSearchDetails = (output: any, context: __SerdeContext): SpeakerSearchDetails => {
  return take(output, {
    Results: (_: any) => de_SpeakerSearchResultList(_, context),
    VoiceprintGenerationStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SpeakerSearchResult
 */
const de_SpeakerSearchResult = (output: any, context: __SerdeContext): SpeakerSearchResult => {
  return take(output, {
    ConfidenceScore: __limitedParseFloat32,
    VoiceProfileId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SpeakerSearchResultList
 */
const de_SpeakerSearchResultList = (output: any, context: __SerdeContext): SpeakerSearchResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SpeakerSearchResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SpeakerSearchTask
 */
const de_SpeakerSearchTask = (output: any, context: __SerdeContext): SpeakerSearchTask => {
  return take(output, {
    CallDetails: _json,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    SpeakerSearchDetails: (_: any) => de_SpeakerSearchDetails(_, context),
    SpeakerSearchTaskId: __expectString,
    SpeakerSearchTaskStatus: __expectString,
    StartedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    StatusMessage: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_StreamingConfiguration omitted.

// de_StreamingNotificationTarget omitted.

// de_StreamingNotificationTargetList omitted.

// de_StringList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_Termination omitted.

/**
 * deserializeAws_restJson1TerminationHealth
 */
const de_TerminationHealth = (output: any, context: __SerdeContext): TerminationHealth => {
  return take(output, {
    Source: __expectString,
    Timestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1VoiceConnector
 */
const de_VoiceConnector = (output: any, context: __SerdeContext): VoiceConnector => {
  return take(output, {
    AwsRegion: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    IntegrationType: __expectString,
    Name: __expectString,
    OutboundHostName: __expectString,
    RequireEncryption: __expectBoolean,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    VoiceConnectorArn: __expectString,
    VoiceConnectorId: __expectString,
  }) as any;
};

// de_VoiceConnectorAwsRegionList omitted.

/**
 * deserializeAws_restJson1VoiceConnectorGroup
 */
const de_VoiceConnectorGroup = (output: any, context: __SerdeContext): VoiceConnectorGroup => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Name: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    VoiceConnectorGroupArn: __expectString,
    VoiceConnectorGroupId: __expectString,
    VoiceConnectorItems: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1VoiceConnectorGroupList
 */
const de_VoiceConnectorGroupList = (output: any, context: __SerdeContext): VoiceConnectorGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VoiceConnectorGroup(entry, context);
    });
  return retVal;
};

// de_VoiceConnectorItem omitted.

// de_VoiceConnectorItemList omitted.

/**
 * deserializeAws_restJson1VoiceConnectorList
 */
const de_VoiceConnectorList = (output: any, context: __SerdeContext): VoiceConnector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VoiceConnector(entry, context);
    });
  return retVal;
};

// de_VoiceConnectorSettings omitted.

/**
 * deserializeAws_restJson1VoiceProfile
 */
const de_VoiceProfile = (output: any, context: __SerdeContext): VoiceProfile => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ExpirationTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    VoiceProfileArn: __expectString,
    VoiceProfileDomainId: __expectString,
    VoiceProfileId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1VoiceProfileDomain
 */
const de_VoiceProfileDomain = (output: any, context: __SerdeContext): VoiceProfileDomain => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    Name: __expectString,
    ServerSideEncryptionConfiguration: _json,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    VoiceProfileDomainArn: __expectString,
    VoiceProfileDomainId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1VoiceProfileDomainSummary
 */
const de_VoiceProfileDomainSummary = (output: any, context: __SerdeContext): VoiceProfileDomainSummary => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    Name: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    VoiceProfileDomainArn: __expectString,
    VoiceProfileDomainId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1VoiceProfileDomainSummaryList
 */
const de_VoiceProfileDomainSummaryList = (output: any, context: __SerdeContext): VoiceProfileDomainSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VoiceProfileDomainSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VoiceProfileSummary
 */
const de_VoiceProfileSummary = (output: any, context: __SerdeContext): VoiceProfileSummary => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ExpirationTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    VoiceProfileArn: __expectString,
    VoiceProfileDomainId: __expectString,
    VoiceProfileId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1VoiceProfileSummaryList
 */
const de_VoiceProfileSummaryList = (output: any, context: __SerdeContext): VoiceProfileSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VoiceProfileSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VoiceToneAnalysisTask
 */
const de_VoiceToneAnalysisTask = (output: any, context: __SerdeContext): VoiceToneAnalysisTask => {
  return take(output, {
    CallDetails: _json,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    StartedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    StatusMessage: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    VoiceToneAnalysisTaskId: __expectString,
    VoiceToneAnalysisTaskStatus: __expectString,
  }) as any;
};

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

const _AC = "AreaCode";
const _C = "City";
const _Co = "Country";
const _FN = "FilterName";
const _FV = "FilterValue";
const _IC = "IsCaller";
const _MR = "MaxResults";
const _NT = "NextToken";
const _PNT = "PhoneNumberType";
const _PT = "ProductType";
const _RARN = "ResourceARN";
const _S = "Status";
const _SMAI = "SipMediaApplicationId";
const _St = "State";
const _TFP = "TollFreePrefix";
const _VPDI = "VoiceProfileDomainId";
const _a = "arn";
const _ac = "area-code";
const _c = "city";
const _co = "country";
const _fn = "filter-name";
const _fv = "filter-value";
const _iC = "isCaller";
const _mr = "max-results";
const _nt = "next-token";
const _o = "operation";
const _pnt = "phone-number-type";
const _pt = "product-type";
const _s = "status";
const _sma = "sip-media-application";
const _st = "state";
const _t = "type";
const _tfp = "toll-free-prefix";
const _vpdi = "voice-profile-domain-id";
