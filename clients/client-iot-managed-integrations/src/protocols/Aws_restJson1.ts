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
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  CreateCredentialLockerCommandInput,
  CreateCredentialLockerCommandOutput,
} from "../commands/CreateCredentialLockerCommand";
import { CreateDestinationCommandInput, CreateDestinationCommandOutput } from "../commands/CreateDestinationCommand";
import {
  CreateEventLogConfigurationCommandInput,
  CreateEventLogConfigurationCommandOutput,
} from "../commands/CreateEventLogConfigurationCommand";
import { CreateManagedThingCommandInput, CreateManagedThingCommandOutput } from "../commands/CreateManagedThingCommand";
import {
  CreateNotificationConfigurationCommandInput,
  CreateNotificationConfigurationCommandOutput,
} from "../commands/CreateNotificationConfigurationCommand";
import { CreateOtaTaskCommandInput, CreateOtaTaskCommandOutput } from "../commands/CreateOtaTaskCommand";
import {
  CreateOtaTaskConfigurationCommandInput,
  CreateOtaTaskConfigurationCommandOutput,
} from "../commands/CreateOtaTaskConfigurationCommand";
import {
  CreateProvisioningProfileCommandInput,
  CreateProvisioningProfileCommandOutput,
} from "../commands/CreateProvisioningProfileCommand";
import {
  DeleteCredentialLockerCommandInput,
  DeleteCredentialLockerCommandOutput,
} from "../commands/DeleteCredentialLockerCommand";
import { DeleteDestinationCommandInput, DeleteDestinationCommandOutput } from "../commands/DeleteDestinationCommand";
import {
  DeleteEventLogConfigurationCommandInput,
  DeleteEventLogConfigurationCommandOutput,
} from "../commands/DeleteEventLogConfigurationCommand";
import { DeleteManagedThingCommandInput, DeleteManagedThingCommandOutput } from "../commands/DeleteManagedThingCommand";
import {
  DeleteNotificationConfigurationCommandInput,
  DeleteNotificationConfigurationCommandOutput,
} from "../commands/DeleteNotificationConfigurationCommand";
import { DeleteOtaTaskCommandInput, DeleteOtaTaskCommandOutput } from "../commands/DeleteOtaTaskCommand";
import {
  DeleteOtaTaskConfigurationCommandInput,
  DeleteOtaTaskConfigurationCommandOutput,
} from "../commands/DeleteOtaTaskConfigurationCommand";
import {
  DeleteProvisioningProfileCommandInput,
  DeleteProvisioningProfileCommandOutput,
} from "../commands/DeleteProvisioningProfileCommand";
import {
  GetCredentialLockerCommandInput,
  GetCredentialLockerCommandOutput,
} from "../commands/GetCredentialLockerCommand";
import { GetCustomEndpointCommandInput, GetCustomEndpointCommandOutput } from "../commands/GetCustomEndpointCommand";
import {
  GetDefaultEncryptionConfigurationCommandInput,
  GetDefaultEncryptionConfigurationCommandOutput,
} from "../commands/GetDefaultEncryptionConfigurationCommand";
import { GetDestinationCommandInput, GetDestinationCommandOutput } from "../commands/GetDestinationCommand";
import { GetDeviceDiscoveryCommandInput, GetDeviceDiscoveryCommandOutput } from "../commands/GetDeviceDiscoveryCommand";
import {
  GetEventLogConfigurationCommandInput,
  GetEventLogConfigurationCommandOutput,
} from "../commands/GetEventLogConfigurationCommand";
import {
  GetHubConfigurationCommandInput,
  GetHubConfigurationCommandOutput,
} from "../commands/GetHubConfigurationCommand";
import {
  GetManagedThingCapabilitiesCommandInput,
  GetManagedThingCapabilitiesCommandOutput,
} from "../commands/GetManagedThingCapabilitiesCommand";
import { GetManagedThingCommandInput, GetManagedThingCommandOutput } from "../commands/GetManagedThingCommand";
import {
  GetManagedThingConnectivityDataCommandInput,
  GetManagedThingConnectivityDataCommandOutput,
} from "../commands/GetManagedThingConnectivityDataCommand";
import {
  GetManagedThingMetaDataCommandInput,
  GetManagedThingMetaDataCommandOutput,
} from "../commands/GetManagedThingMetaDataCommand";
import {
  GetManagedThingStateCommandInput,
  GetManagedThingStateCommandOutput,
} from "../commands/GetManagedThingStateCommand";
import {
  GetNotificationConfigurationCommandInput,
  GetNotificationConfigurationCommandOutput,
} from "../commands/GetNotificationConfigurationCommand";
import { GetOtaTaskCommandInput, GetOtaTaskCommandOutput } from "../commands/GetOtaTaskCommand";
import {
  GetOtaTaskConfigurationCommandInput,
  GetOtaTaskConfigurationCommandOutput,
} from "../commands/GetOtaTaskConfigurationCommand";
import {
  GetProvisioningProfileCommandInput,
  GetProvisioningProfileCommandOutput,
} from "../commands/GetProvisioningProfileCommand";
import {
  GetRuntimeLogConfigurationCommandInput,
  GetRuntimeLogConfigurationCommandOutput,
} from "../commands/GetRuntimeLogConfigurationCommand";
import { GetSchemaVersionCommandInput, GetSchemaVersionCommandOutput } from "../commands/GetSchemaVersionCommand";
import {
  ListCredentialLockersCommandInput,
  ListCredentialLockersCommandOutput,
} from "../commands/ListCredentialLockersCommand";
import { ListDestinationsCommandInput, ListDestinationsCommandOutput } from "../commands/ListDestinationsCommand";
import {
  ListEventLogConfigurationsCommandInput,
  ListEventLogConfigurationsCommandOutput,
} from "../commands/ListEventLogConfigurationsCommand";
import {
  ListManagedThingSchemasCommandInput,
  ListManagedThingSchemasCommandOutput,
} from "../commands/ListManagedThingSchemasCommand";
import { ListManagedThingsCommandInput, ListManagedThingsCommandOutput } from "../commands/ListManagedThingsCommand";
import {
  ListNotificationConfigurationsCommandInput,
  ListNotificationConfigurationsCommandOutput,
} from "../commands/ListNotificationConfigurationsCommand";
import {
  ListOtaTaskConfigurationsCommandInput,
  ListOtaTaskConfigurationsCommandOutput,
} from "../commands/ListOtaTaskConfigurationsCommand";
import {
  ListOtaTaskExecutionsCommandInput,
  ListOtaTaskExecutionsCommandOutput,
} from "../commands/ListOtaTaskExecutionsCommand";
import { ListOtaTasksCommandInput, ListOtaTasksCommandOutput } from "../commands/ListOtaTasksCommand";
import {
  ListProvisioningProfilesCommandInput,
  ListProvisioningProfilesCommandOutput,
} from "../commands/ListProvisioningProfilesCommand";
import { ListSchemaVersionsCommandInput, ListSchemaVersionsCommandOutput } from "../commands/ListSchemaVersionsCommand";
import {
  PutDefaultEncryptionConfigurationCommandInput,
  PutDefaultEncryptionConfigurationCommandOutput,
} from "../commands/PutDefaultEncryptionConfigurationCommand";
import {
  PutHubConfigurationCommandInput,
  PutHubConfigurationCommandOutput,
} from "../commands/PutHubConfigurationCommand";
import {
  PutRuntimeLogConfigurationCommandInput,
  PutRuntimeLogConfigurationCommandOutput,
} from "../commands/PutRuntimeLogConfigurationCommand";
import {
  RegisterCustomEndpointCommandInput,
  RegisterCustomEndpointCommandOutput,
} from "../commands/RegisterCustomEndpointCommand";
import {
  ResetRuntimeLogConfigurationCommandInput,
  ResetRuntimeLogConfigurationCommandOutput,
} from "../commands/ResetRuntimeLogConfigurationCommand";
import {
  SendManagedThingCommandCommandInput,
  SendManagedThingCommandCommandOutput,
} from "../commands/SendManagedThingCommandCommand";
import {
  StartDeviceDiscoveryCommandInput,
  StartDeviceDiscoveryCommandOutput,
} from "../commands/StartDeviceDiscoveryCommand";
import { UpdateDestinationCommandInput, UpdateDestinationCommandOutput } from "../commands/UpdateDestinationCommand";
import {
  UpdateEventLogConfigurationCommandInput,
  UpdateEventLogConfigurationCommandOutput,
} from "../commands/UpdateEventLogConfigurationCommand";
import { UpdateManagedThingCommandInput, UpdateManagedThingCommandOutput } from "../commands/UpdateManagedThingCommand";
import {
  UpdateNotificationConfigurationCommandInput,
  UpdateNotificationConfigurationCommandOutput,
} from "../commands/UpdateNotificationConfigurationCommand";
import { UpdateOtaTaskCommandInput, UpdateOtaTaskCommandOutput } from "../commands/UpdateOtaTaskCommand";
import { IoTManagedIntegrationsServiceException as __BaseException } from "../models/IoTManagedIntegrationsServiceException";
import {
  AbortConfigCriteria,
  AccessDeniedException,
  CapabilityAction,
  CapabilityReport,
  CapabilityReportCapability,
  CapabilityReportEndpoint,
  CommandCapability,
  CommandEndpoint,
  ConflictException,
  CredentialLockerSummary,
  ExponentialRolloutRate,
  InternalFailureException,
  InternalServerException,
  ManagedThingSchemaListItem,
  ManagedThingSummary,
  OtaTaskAbortConfig,
  OtaTaskConfigurationSummary,
  OtaTaskExecutionRetryConfig,
  OtaTaskExecutionRolloutConfig,
  OtaTaskExecutionSummaries,
  OtaTaskExecutionSummary,
  OtaTaskSchedulingConfig,
  OtaTaskSummary,
  OtaTaskTimeoutConfig,
  PushConfig,
  ResourceNotFoundException,
  RetryConfigCriteria,
  RolloutRateIncreaseCriteria,
  RuntimeLogConfigurations,
  ScheduleMaintenanceWindow,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  StateCapability,
  StateEndpoint,
  ThrottlingException,
  UnauthorizedException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateCredentialLockerCommand
 */
export const se_CreateCredentialLockerCommand = async (
  input: CreateCredentialLockerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/credential-lockers");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Name: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDestinationCommand
 */
export const se_CreateDestinationCommand = async (
  input: CreateDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/destinations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      DeliveryDestinationArn: [],
      DeliveryDestinationType: [],
      Description: [],
      Name: [],
      RoleArn: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEventLogConfigurationCommand
 */
export const se_CreateEventLogConfigurationCommand = async (
  input: CreateEventLogConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/event-log-configurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      EventLogLevel: [],
      ResourceId: [],
      ResourceType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateManagedThingCommand
 */
export const se_CreateManagedThingCommand = async (
  input: CreateManagedThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/managed-things");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AuthenticationMaterial: [],
      AuthenticationMaterialType: [],
      Brand: [],
      Capabilities: [],
      CapabilityReport: (_) => _json(_),
      Classification: [],
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      CredentialLockerId: [],
      MetaData: (_) => _json(_),
      Model: [],
      Name: [],
      Owner: [],
      Role: [],
      SerialNumber: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateNotificationConfigurationCommand
 */
export const se_CreateNotificationConfigurationCommand = async (
  input: CreateNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/notification-configurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      DestinationName: [],
      EventType: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateOtaTaskCommand
 */
export const se_CreateOtaTaskCommand = async (
  input: CreateOtaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ota-tasks");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      OtaMechanism: [],
      OtaSchedulingConfig: (_) => _json(_),
      OtaTargetQueryString: [],
      OtaTaskExecutionRetryConfig: (_) => _json(_),
      OtaType: [],
      Protocol: [],
      S3Url: [],
      Tags: (_) => _json(_),
      Target: (_) => _json(_),
      TaskConfigurationId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateOtaTaskConfigurationCommand
 */
export const se_CreateOtaTaskConfigurationCommand = async (
  input: CreateOtaTaskConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ota-task-configurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      Name: [],
      PushConfig: (_) => se_PushConfig(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProvisioningProfileCommand
 */
export const se_CreateProvisioningProfileCommand = async (
  input: CreateProvisioningProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/provisioning-profiles");
  let body: any;
  body = JSON.stringify(
    take(input, {
      CaCertificate: [],
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Name: [],
      ProvisioningType: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCredentialLockerCommand
 */
export const se_DeleteCredentialLockerCommand = async (
  input: DeleteCredentialLockerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/credential-lockers/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDestinationCommand
 */
export const se_DeleteDestinationCommand = async (
  input: DeleteDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/destinations/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEventLogConfigurationCommand
 */
export const se_DeleteEventLogConfigurationCommand = async (
  input: DeleteEventLogConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/event-log-configurations/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteManagedThingCommand
 */
export const se_DeleteManagedThingCommand = async (
  input: DeleteManagedThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/managed-things/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  const query: any = map({
    [_F]: [() => input.Force !== void 0, () => input[_F]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteNotificationConfigurationCommand
 */
export const se_DeleteNotificationConfigurationCommand = async (
  input: DeleteNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/notification-configurations/{EventType}");
  b.p("EventType", () => input.EventType!, "{EventType}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteOtaTaskCommand
 */
export const se_DeleteOtaTaskCommand = async (
  input: DeleteOtaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ota-tasks/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteOtaTaskConfigurationCommand
 */
export const se_DeleteOtaTaskConfigurationCommand = async (
  input: DeleteOtaTaskConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ota-task-configurations/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProvisioningProfileCommand
 */
export const se_DeleteProvisioningProfileCommand = async (
  input: DeleteProvisioningProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/provisioning-profiles/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCredentialLockerCommand
 */
export const se_GetCredentialLockerCommand = async (
  input: GetCredentialLockerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/credential-lockers/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCustomEndpointCommand
 */
export const se_GetCustomEndpointCommand = async (
  input: GetCustomEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/custom-endpoint");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDefaultEncryptionConfigurationCommand
 */
export const se_GetDefaultEncryptionConfigurationCommand = async (
  input: GetDefaultEncryptionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configuration/account/encryption");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDestinationCommand
 */
export const se_GetDestinationCommand = async (
  input: GetDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/destinations/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDeviceDiscoveryCommand
 */
export const se_GetDeviceDiscoveryCommand = async (
  input: GetDeviceDiscoveryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/device-discoveries/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEventLogConfigurationCommand
 */
export const se_GetEventLogConfigurationCommand = async (
  input: GetEventLogConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/event-log-configurations/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetHubConfigurationCommand
 */
export const se_GetHubConfigurationCommand = async (
  input: GetHubConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/hub-configuration");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetManagedThingCommand
 */
export const se_GetManagedThingCommand = async (
  input: GetManagedThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/managed-things/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetManagedThingCapabilitiesCommand
 */
export const se_GetManagedThingCapabilitiesCommand = async (
  input: GetManagedThingCapabilitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/managed-things-capabilities/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetManagedThingConnectivityDataCommand
 */
export const se_GetManagedThingConnectivityDataCommand = async (
  input: GetManagedThingConnectivityDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/managed-things-connectivity-data/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetManagedThingMetaDataCommand
 */
export const se_GetManagedThingMetaDataCommand = async (
  input: GetManagedThingMetaDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/managed-things-metadata/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetManagedThingStateCommand
 */
export const se_GetManagedThingStateCommand = async (
  input: GetManagedThingStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/managed-thing-states/{ManagedThingId}");
  b.p("ManagedThingId", () => input.ManagedThingId!, "{ManagedThingId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetNotificationConfigurationCommand
 */
export const se_GetNotificationConfigurationCommand = async (
  input: GetNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/notification-configurations/{EventType}");
  b.p("EventType", () => input.EventType!, "{EventType}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetOtaTaskCommand
 */
export const se_GetOtaTaskCommand = async (
  input: GetOtaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ota-tasks/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetOtaTaskConfigurationCommand
 */
export const se_GetOtaTaskConfigurationCommand = async (
  input: GetOtaTaskConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ota-task-configurations/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProvisioningProfileCommand
 */
export const se_GetProvisioningProfileCommand = async (
  input: GetProvisioningProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/provisioning-profiles/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRuntimeLogConfigurationCommand
 */
export const se_GetRuntimeLogConfigurationCommand = async (
  input: GetRuntimeLogConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/runtime-log-configurations/{ManagedThingId}");
  b.p("ManagedThingId", () => input.ManagedThingId!, "{ManagedThingId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSchemaVersionCommand
 */
export const se_GetSchemaVersionCommand = async (
  input: GetSchemaVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/schema-versions/{Type}/{SchemaVersionedId}");
  b.p("Type", () => input.Type!, "{Type}", false);
  b.p("SchemaVersionedId", () => input.SchemaVersionedId!, "{SchemaVersionedId}", false);
  const query: any = map({
    [_Fo]: [, input[_Fo]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCredentialLockersCommand
 */
export const se_ListCredentialLockersCommand = async (
  input: ListCredentialLockersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/credential-lockers");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDestinationsCommand
 */
export const se_ListDestinationsCommand = async (
  input: ListDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/destinations");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEventLogConfigurationsCommand
 */
export const se_ListEventLogConfigurationsCommand = async (
  input: ListEventLogConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/event-log-configurations");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListManagedThingsCommand
 */
export const se_ListManagedThingsCommand = async (
  input: ListManagedThingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/managed-things");
  const query: any = map({
    [_OF]: [, input[_OF]!],
    [_CLF]: [, input[_CLF]!],
    [_RF]: [, input[_RF]!],
    [_PCIF]: [, input[_PCIF]!],
    [_CPIF]: [, input[_CPIF]!],
    [_SNF]: [, input[_SNF]!],
    [_PSF]: [, input[_PSF]!],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListManagedThingSchemasCommand
 */
export const se_ListManagedThingSchemasCommand = async (
  input: ListManagedThingSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/managed-thing-schemas/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  const query: any = map({
    [_EIF]: [, input[_EIF]!],
    [_CIF]: [, input[_CIF]!],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListNotificationConfigurationsCommand
 */
export const se_ListNotificationConfigurationsCommand = async (
  input: ListNotificationConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/notification-configurations");
  const query: any = map({
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListOtaTaskConfigurationsCommand
 */
export const se_ListOtaTaskConfigurationsCommand = async (
  input: ListOtaTaskConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ota-task-configurations");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListOtaTaskExecutionsCommand
 */
export const se_ListOtaTaskExecutionsCommand = async (
  input: ListOtaTaskExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ota-tasks/{Identifier}/devices");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListOtaTasksCommand
 */
export const se_ListOtaTasksCommand = async (
  input: ListOtaTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ota-tasks");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProvisioningProfilesCommand
 */
export const se_ListProvisioningProfilesCommand = async (
  input: ListProvisioningProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/provisioning-profiles");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSchemaVersionsCommand
 */
export const se_ListSchemaVersionsCommand = async (
  input: ListSchemaVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/schema-versions/{Type}");
  b.p("Type", () => input.Type!, "{Type}", false);
  const query: any = map({
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
    [_SIF]: [, input[_SI]!],
    [_NF]: [, input[_N]!],
    [_VF]: [, input[_V]!],
    [_SVF]: [, input[_SV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutDefaultEncryptionConfigurationCommand
 */
export const se_PutDefaultEncryptionConfigurationCommand = async (
  input: PutDefaultEncryptionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configuration/account/encryption");
  let body: any;
  body = JSON.stringify(
    take(input, {
      encryptionType: [],
      kmsKeyArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutHubConfigurationCommand
 */
export const se_PutHubConfigurationCommand = async (
  input: PutHubConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/hub-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      HubTokenTimerExpirySettingInSeconds: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutRuntimeLogConfigurationCommand
 */
export const se_PutRuntimeLogConfigurationCommand = async (
  input: PutRuntimeLogConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/runtime-log-configurations/{ManagedThingId}");
  b.p("ManagedThingId", () => input.ManagedThingId!, "{ManagedThingId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      RuntimeLogConfigurations: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterCustomEndpointCommand
 */
export const se_RegisterCustomEndpointCommand = async (
  input: RegisterCustomEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/custom-endpoint");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResetRuntimeLogConfigurationCommand
 */
export const se_ResetRuntimeLogConfigurationCommand = async (
  input: ResetRuntimeLogConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/runtime-log-configurations/{ManagedThingId}");
  b.p("ManagedThingId", () => input.ManagedThingId!, "{ManagedThingId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendManagedThingCommandCommand
 */
export const se_SendManagedThingCommandCommand = async (
  input: SendManagedThingCommandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/managed-things-command/{ManagedThingId}");
  b.p("ManagedThingId", () => input.ManagedThingId!, "{ManagedThingId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConnectorAssociationId: [],
      Endpoints: (_) => se_CommandEndpoints(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartDeviceDiscoveryCommand
 */
export const se_StartDeviceDiscoveryCommand = async (
  input: StartDeviceDiscoveryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/device-discoveries");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AuthenticationMaterial: [],
      AuthenticationMaterialType: [],
      ClientToken: [],
      ConnectorAssociationIdentifier: [],
      ControllerIdentifier: [],
      DiscoveryType: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDestinationCommand
 */
export const se_UpdateDestinationCommand = async (
  input: UpdateDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/destinations/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DeliveryDestinationArn: [],
      DeliveryDestinationType: [],
      Description: [],
      RoleArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEventLogConfigurationCommand
 */
export const se_UpdateEventLogConfigurationCommand = async (
  input: UpdateEventLogConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/event-log-configurations/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      EventLogLevel: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateManagedThingCommand
 */
export const se_UpdateManagedThingCommand = async (
  input: UpdateManagedThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/managed-things/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Brand: [],
      Capabilities: [],
      CapabilityReport: (_) => _json(_),
      Classification: [],
      CredentialLockerId: [],
      HubNetworkMode: [],
      MetaData: (_) => _json(_),
      Model: [],
      Name: [],
      Owner: [],
      SerialNumber: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateNotificationConfigurationCommand
 */
export const se_UpdateNotificationConfigurationCommand = async (
  input: UpdateNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/notification-configurations/{EventType}");
  b.p("EventType", () => input.EventType!, "{EventType}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DestinationName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateOtaTaskCommand
 */
export const se_UpdateOtaTaskCommand = async (
  input: UpdateOtaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ota-tasks/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      TaskConfigurationId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateCredentialLockerCommand
 */
export const de_CreateCredentialLockerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCredentialLockerCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDestinationCommand
 */
export const de_CreateDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDestinationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEventLogConfigurationCommand
 */
export const de_CreateEventLogConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventLogConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateManagedThingCommand
 */
export const de_CreateManagedThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateManagedThingCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateNotificationConfigurationCommand
 */
export const de_CreateNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EventType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateOtaTaskCommand
 */
export const de_CreateOtaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOtaTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Description: __expectString,
    TaskArn: __expectString,
    TaskId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateOtaTaskConfigurationCommand
 */
export const de_CreateOtaTaskConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOtaTaskConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TaskConfigurationId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProvisioningProfileCommand
 */
export const de_CreateProvisioningProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProvisioningProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    ClaimCertificate: __expectString,
    ClaimCertificatePrivateKey: __expectString,
    Id: __expectString,
    Name: __expectString,
    ProvisioningType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCredentialLockerCommand
 */
export const de_DeleteCredentialLockerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCredentialLockerCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDestinationCommand
 */
export const de_DeleteDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDestinationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteEventLogConfigurationCommand
 */
export const de_DeleteEventLogConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventLogConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteManagedThingCommand
 */
export const de_DeleteManagedThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteManagedThingCommandOutput> => {
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
 * deserializeAws_restJson1DeleteNotificationConfigurationCommand
 */
export const de_DeleteNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteOtaTaskCommand
 */
export const de_DeleteOtaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOtaTaskCommandOutput> => {
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
 * deserializeAws_restJson1DeleteOtaTaskConfigurationCommand
 */
export const de_DeleteOtaTaskConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOtaTaskConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteProvisioningProfileCommand
 */
export const de_DeleteProvisioningProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProvisioningProfileCommandOutput> => {
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
 * deserializeAws_restJson1GetCredentialLockerCommand
 */
export const de_GetCredentialLockerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCredentialLockerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    Name: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCustomEndpointCommand
 */
export const de_GetCustomEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EndpointAddress: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDefaultEncryptionConfigurationCommand
 */
export const de_GetDefaultEncryptionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDefaultEncryptionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configurationStatus: _json,
    encryptionType: __expectString,
    kmsKeyArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDestinationCommand
 */
export const de_GetDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeliveryDestinationArn: __expectString,
    DeliveryDestinationType: __expectString,
    Description: __expectString,
    Name: __expectString,
    RoleArn: __expectString,
    Tags: _json,
    UpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDeviceDiscoveryCommand
 */
export const de_GetDeviceDiscoveryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceDiscoveryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    ConnectorAssociationId: __expectString,
    ControllerId: __expectString,
    DiscoveryType: __expectString,
    FinishedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    StartedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEventLogConfigurationCommand
 */
export const de_GetEventLogConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventLogConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EventLogLevel: __expectString,
    Id: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetHubConfigurationCommand
 */
export const de_GetHubConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHubConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    HubTokenTimerExpirySettingInSeconds: __expectLong,
    UpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetManagedThingCommand
 */
export const de_GetManagedThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetManagedThingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ActivatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    AdvertisedProductId: __expectString,
    Arn: __expectString,
    Brand: __expectString,
    Classification: __expectString,
    ConnectorDeviceId: __expectString,
    ConnectorPolicyId: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CredentialLockerId: __expectString,
    DeviceSpecificKey: __expectString,
    HubNetworkMode: __expectString,
    Id: __expectString,
    InternationalArticleNumber: __expectString,
    MacAddress: __expectString,
    MetaData: _json,
    Model: __expectString,
    Name: __expectString,
    Owner: __expectString,
    ParentControllerId: __expectString,
    ProvisioningStatus: __expectString,
    Role: __expectString,
    SerialNumber: __expectString,
    Tags: _json,
    UniversalProductCode: __expectString,
    UpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetManagedThingCapabilitiesCommand
 */
export const de_GetManagedThingCapabilitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetManagedThingCapabilitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Capabilities: __expectString,
    CapabilityReport: _json,
    ManagedThingId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetManagedThingConnectivityDataCommand
 */
export const de_GetManagedThingConnectivityDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetManagedThingConnectivityDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Connected: __expectBoolean,
    DisconnectReason: __expectString,
    ManagedThingId: __expectString,
    Timestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetManagedThingMetaDataCommand
 */
export const de_GetManagedThingMetaDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetManagedThingMetaDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ManagedThingId: __expectString,
    MetaData: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetManagedThingStateCommand
 */
export const de_GetManagedThingStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetManagedThingStateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Endpoints: (_) => de_StateEndpoints(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetNotificationConfigurationCommand
 */
export const de_GetNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DestinationName: __expectString,
    EventType: __expectString,
    Tags: _json,
    UpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetOtaTaskCommand
 */
export const de_GetOtaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOtaTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OtaMechanism: __expectString,
    OtaSchedulingConfig: _json,
    OtaTargetQueryString: __expectString,
    OtaTaskExecutionRetryConfig: _json,
    OtaType: __expectString,
    Protocol: __expectString,
    S3Url: __expectString,
    Status: __expectString,
    Target: _json,
    TaskArn: __expectString,
    TaskConfigurationId: __expectString,
    TaskId: __expectString,
    TaskProcessingDetails: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetOtaTaskConfigurationCommand
 */
export const de_GetOtaTaskConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOtaTaskConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Name: __expectString,
    PushConfig: (_) => de_PushConfig(_, context),
    TaskConfigurationId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProvisioningProfileCommand
 */
export const de_GetProvisioningProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProvisioningProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    ClaimCertificate: __expectString,
    Id: __expectString,
    Name: __expectString,
    ProvisioningType: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRuntimeLogConfigurationCommand
 */
export const de_GetRuntimeLogConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuntimeLogConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ManagedThingId: __expectString,
    RuntimeLogConfigurations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSchemaVersionCommand
 */
export const de_GetSchemaVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Description: __expectString,
    Namespace: __expectString,
    Schema: (_) => de_SchemaVersionSchema(_, context),
    SchemaId: __expectString,
    SemanticVersion: __expectString,
    Type: __expectString,
    Visibility: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCredentialLockersCommand
 */
export const de_ListCredentialLockersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCredentialLockersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_CredentialLockerListDefinition(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDestinationsCommand
 */
export const de_ListDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DestinationList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEventLogConfigurationsCommand
 */
export const de_ListEventLogConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventLogConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EventLogConfigurationList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListManagedThingsCommand
 */
export const de_ListManagedThingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedThingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_ManagedThingListDefinition(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListManagedThingSchemasCommand
 */
export const de_ListManagedThingSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedThingSchemasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_ManagedThingSchemaListDefinition(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListNotificationConfigurationsCommand
 */
export const de_ListNotificationConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    NotificationConfigurationList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListOtaTaskConfigurationsCommand
 */
export const de_ListOtaTaskConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOtaTaskConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: (_) => de_OtaTaskConfigurationListDefinition(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListOtaTaskExecutionsCommand
 */
export const de_ListOtaTaskExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOtaTaskExecutionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ExecutionSummaries: (_) => de_OtaTaskExecutionSummariesListDefinition(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListOtaTasksCommand
 */
export const de_ListOtaTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOtaTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Tasks: (_) => de_OtaTaskListDefinition(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProvisioningProfilesCommand
 */
export const de_ListProvisioningProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisioningProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSchemaVersionsCommand
 */
export const de_ListSchemaVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemaVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Items: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutDefaultEncryptionConfigurationCommand
 */
export const de_PutDefaultEncryptionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDefaultEncryptionConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configurationStatus: _json,
    encryptionType: __expectString,
    kmsKeyArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutHubConfigurationCommand
 */
export const de_PutHubConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutHubConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    HubTokenTimerExpirySettingInSeconds: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutRuntimeLogConfigurationCommand
 */
export const de_PutRuntimeLogConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRuntimeLogConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1RegisterCustomEndpointCommand
 */
export const de_RegisterCustomEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterCustomEndpointCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EndpointAddress: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ResetRuntimeLogConfigurationCommand
 */
export const de_ResetRuntimeLogConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetRuntimeLogConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1SendManagedThingCommandCommand
 */
export const de_SendManagedThingCommandCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendManagedThingCommandCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TraceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartDeviceDiscoveryCommand
 */
export const de_StartDeviceDiscoveryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeviceDiscoveryCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Id: __expectString,
    StartedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDestinationCommand
 */
export const de_UpdateDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDestinationCommandOutput> => {
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
 * deserializeAws_restJson1UpdateEventLogConfigurationCommand
 */
export const de_UpdateEventLogConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventLogConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1UpdateManagedThingCommand
 */
export const de_UpdateManagedThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateManagedThingCommandOutput> => {
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
 * deserializeAws_restJson1UpdateNotificationConfigurationCommand
 */
export const de_UpdateNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1UpdateOtaTaskCommand
 */
export const de_UpdateOtaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOtaTaskCommandOutput> => {
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
    case "com.amazonaws.iotmanagedintegrations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotmanagedintegrations#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotmanagedintegrations#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.iotmanagedintegrations#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotmanagedintegrations#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotmanagedintegrations#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotmanagedintegrations#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotmanagedintegrations#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.iotmanagedintegrations#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotmanagedintegrations#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
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
 * deserializeAws_restJson1InternalFailureExceptionRes
 */
const de_InternalFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
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
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
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
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AbortConfigCriteria
 */
const se_AbortConfigCriteria = (input: AbortConfigCriteria, context: __SerdeContext): any => {
  return take(input, {
    Action: [],
    FailureType: [],
    MinNumberOfExecutedThings: [],
    ThresholdPercentage: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1AbortConfigCriteriaList
 */
const se_AbortConfigCriteriaList = (input: AbortConfigCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AbortConfigCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1CapabilityAction
 */
const se_CapabilityAction = (input: CapabilityAction, context: __SerdeContext): any => {
  return take(input, {
    actionTraceId: [],
    name: [],
    parameters: (_) => se_CapabilityProperties(_, context),
    ref: [],
  });
};

/**
 * serializeAws_restJson1CapabilityActions
 */
const se_CapabilityActions = (input: CapabilityAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CapabilityAction(entry, context);
    });
};

/**
 * serializeAws_restJson1CapabilityProperties
 */
const se_CapabilityProperties = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// se_CapabilityReport omitted.

// se_CapabilityReportActions omitted.

// se_CapabilityReportCapabilities omitted.

// se_CapabilityReportCapability omitted.

// se_CapabilityReportEndpoint omitted.

// se_CapabilityReportEndpoints omitted.

// se_CapabilityReportEvents omitted.

// se_CapabilityReportProperties omitted.

/**
 * serializeAws_restJson1CommandCapabilities
 */
const se_CommandCapabilities = (input: CommandCapability[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CommandCapability(entry, context);
    });
};

/**
 * serializeAws_restJson1CommandCapability
 */
const se_CommandCapability = (input: CommandCapability, context: __SerdeContext): any => {
  return take(input, {
    actions: (_) => se_CapabilityActions(_, context),
    id: [],
    name: [],
    version: [],
  });
};

/**
 * serializeAws_restJson1CommandEndpoint
 */
const se_CommandEndpoint = (input: CommandEndpoint, context: __SerdeContext): any => {
  return take(input, {
    capabilities: (_) => se_CommandCapabilities(_, context),
    endpointId: [],
  });
};

/**
 * serializeAws_restJson1CommandEndpoints
 */
const se_CommandEndpoints = (input: CommandEndpoint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CommandEndpoint(entry, context);
    });
};

// se_DeviceTypes omitted.

/**
 * serializeAws_restJson1ExponentialRolloutRate
 */
const se_ExponentialRolloutRate = (input: ExponentialRolloutRate, context: __SerdeContext): any => {
  return take(input, {
    BaseRatePerMinute: [],
    IncrementFactor: __serializeFloat,
    RateIncreaseCriteria: _json,
  });
};

// se_MetaData omitted.

/**
 * serializeAws_restJson1OtaTaskAbortConfig
 */
const se_OtaTaskAbortConfig = (input: OtaTaskAbortConfig, context: __SerdeContext): any => {
  return take(input, {
    AbortConfigCriteriaList: (_) => se_AbortConfigCriteriaList(_, context),
  });
};

// se_OtaTaskExecutionRetryConfig omitted.

/**
 * serializeAws_restJson1OtaTaskExecutionRolloutConfig
 */
const se_OtaTaskExecutionRolloutConfig = (input: OtaTaskExecutionRolloutConfig, context: __SerdeContext): any => {
  return take(input, {
    ExponentialRolloutRate: (_) => se_ExponentialRolloutRate(_, context),
    MaximumPerMinute: [],
  });
};

// se_OtaTaskSchedulingConfig omitted.

// se_OtaTaskTimeoutConfig omitted.

/**
 * serializeAws_restJson1PushConfig
 */
const se_PushConfig = (input: PushConfig, context: __SerdeContext): any => {
  return take(input, {
    AbortConfig: (_) => se_OtaTaskAbortConfig(_, context),
    RolloutConfig: (_) => se_OtaTaskExecutionRolloutConfig(_, context),
    TimeoutConfig: _json,
  });
};

// se_RetryConfigCriteria omitted.

// se_RetryConfigCriteriaList omitted.

// se_RolloutRateIncreaseCriteria omitted.

// se_RuntimeLogConfigurations omitted.

// se_ScheduleMaintenanceWindow omitted.

// se_ScheduleMaintenanceWindowList omitted.

// se_TagsMap omitted.

// se_Target omitted.

/**
 * deserializeAws_restJson1AbortConfigCriteria
 */
const de_AbortConfigCriteria = (output: any, context: __SerdeContext): AbortConfigCriteria => {
  return take(output, {
    Action: __expectString,
    FailureType: __expectString,
    MinNumberOfExecutedThings: __expectInt32,
    ThresholdPercentage: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1AbortConfigCriteriaList
 */
const de_AbortConfigCriteriaList = (output: any, context: __SerdeContext): AbortConfigCriteria[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AbortConfigCriteria(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CapabilityProperties
 */
const de_CapabilityProperties = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

// de_CapabilityReport omitted.

// de_CapabilityReportActions omitted.

// de_CapabilityReportCapabilities omitted.

// de_CapabilityReportCapability omitted.

// de_CapabilityReportEndpoint omitted.

// de_CapabilityReportEndpoints omitted.

// de_CapabilityReportEvents omitted.

// de_CapabilityReportProperties omitted.

// de_ConfigurationError omitted.

// de_ConfigurationStatus omitted.

/**
 * deserializeAws_restJson1CredentialLockerListDefinition
 */
const de_CredentialLockerListDefinition = (output: any, context: __SerdeContext): CredentialLockerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CredentialLockerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CredentialLockerSummary
 */
const de_CredentialLockerSummary = (output: any, context: __SerdeContext): CredentialLockerSummary => {
  return take(output, {
    Arn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    Name: __expectString,
  }) as any;
};

// de_DestinationListDefinition omitted.

// de_DestinationSummary omitted.

// de_DeviceTypes omitted.

// de_EventLogConfigurationListDefinition omitted.

// de_EventLogConfigurationSummary omitted.

/**
 * deserializeAws_restJson1ExponentialRolloutRate
 */
const de_ExponentialRolloutRate = (output: any, context: __SerdeContext): ExponentialRolloutRate => {
  return take(output, {
    BaseRatePerMinute: __expectInt32,
    IncrementFactor: __limitedParseDouble,
    RateIncreaseCriteria: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ManagedThingListDefinition
 */
const de_ManagedThingListDefinition = (output: any, context: __SerdeContext): ManagedThingSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ManagedThingSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ManagedThingSchemaListDefinition
 */
const de_ManagedThingSchemaListDefinition = (output: any, context: __SerdeContext): ManagedThingSchemaListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ManagedThingSchemaListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ManagedThingSchemaListItem
 */
const de_ManagedThingSchemaListItem = (output: any, context: __SerdeContext): ManagedThingSchemaListItem => {
  return take(output, {
    CapabilityId: __expectString,
    EndpointId: __expectString,
    Schema: (_: any) => de_ValidationSchema(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ManagedThingSummary
 */
const de_ManagedThingSummary = (output: any, context: __SerdeContext): ManagedThingSummary => {
  return take(output, {
    ActivatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    AdvertisedProductId: __expectString,
    Arn: __expectString,
    Brand: __expectString,
    Classification: __expectString,
    ConnectorDeviceId: __expectString,
    ConnectorPolicyId: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CredentialLockerId: __expectString,
    Id: __expectString,
    Model: __expectString,
    Name: __expectString,
    Owner: __expectString,
    ParentControllerId: __expectString,
    ProvisioningStatus: __expectString,
    Role: __expectString,
    SerialNumber: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_MetaData omitted.

// de_NotificationConfigurationListDefinition omitted.

// de_NotificationConfigurationSummary omitted.

/**
 * deserializeAws_restJson1OtaTaskAbortConfig
 */
const de_OtaTaskAbortConfig = (output: any, context: __SerdeContext): OtaTaskAbortConfig => {
  return take(output, {
    AbortConfigCriteriaList: (_: any) => de_AbortConfigCriteriaList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1OtaTaskConfigurationListDefinition
 */
const de_OtaTaskConfigurationListDefinition = (output: any, context: __SerdeContext): OtaTaskConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OtaTaskConfigurationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OtaTaskConfigurationSummary
 */
const de_OtaTaskConfigurationSummary = (output: any, context: __SerdeContext): OtaTaskConfigurationSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    TaskConfigurationId: __expectString,
  }) as any;
};

// de_OtaTaskExecutionRetryConfig omitted.

/**
 * deserializeAws_restJson1OtaTaskExecutionRolloutConfig
 */
const de_OtaTaskExecutionRolloutConfig = (output: any, context: __SerdeContext): OtaTaskExecutionRolloutConfig => {
  return take(output, {
    ExponentialRolloutRate: (_: any) => de_ExponentialRolloutRate(_, context),
    MaximumPerMinute: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1OtaTaskExecutionSummaries
 */
const de_OtaTaskExecutionSummaries = (output: any, context: __SerdeContext): OtaTaskExecutionSummaries => {
  return take(output, {
    ManagedThingId: __expectString,
    TaskExecutionSummary: (_: any) => de_OtaTaskExecutionSummary(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1OtaTaskExecutionSummariesListDefinition
 */
const de_OtaTaskExecutionSummariesListDefinition = (
  output: any,
  context: __SerdeContext
): OtaTaskExecutionSummaries[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OtaTaskExecutionSummaries(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OtaTaskExecutionSummary
 */
const de_OtaTaskExecutionSummary = (output: any, context: __SerdeContext): OtaTaskExecutionSummary => {
  return take(output, {
    ExecutionNumber: __expectLong,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    QueuedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RetryAttempt: __expectInt32,
    StartedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1OtaTaskListDefinition
 */
const de_OtaTaskListDefinition = (output: any, context: __SerdeContext): OtaTaskSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OtaTaskSummary(entry, context);
    });
  return retVal;
};

// de_OtaTaskSchedulingConfig omitted.

/**
 * deserializeAws_restJson1OtaTaskSummary
 */
const de_OtaTaskSummary = (output: any, context: __SerdeContext): OtaTaskSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    TaskArn: __expectString,
    TaskConfigurationId: __expectString,
    TaskId: __expectString,
  }) as any;
};

// de_OtaTaskTimeoutConfig omitted.

// de_ProvisioningProfileListDefinition omitted.

// de_ProvisioningProfileSummary omitted.

/**
 * deserializeAws_restJson1PushConfig
 */
const de_PushConfig = (output: any, context: __SerdeContext): PushConfig => {
  return take(output, {
    AbortConfig: (_: any) => de_OtaTaskAbortConfig(_, context),
    RolloutConfig: (_: any) => de_OtaTaskExecutionRolloutConfig(_, context),
    TimeoutConfig: _json,
  }) as any;
};

// de_RetryConfigCriteria omitted.

// de_RetryConfigCriteriaList omitted.

// de_RolloutRateIncreaseCriteria omitted.

// de_RuntimeLogConfigurations omitted.

// de_ScheduleMaintenanceWindow omitted.

// de_ScheduleMaintenanceWindowList omitted.

// de_SchemaVersionList omitted.

// de_SchemaVersionListItem omitted.

/**
 * deserializeAws_restJson1SchemaVersionSchema
 */
const de_SchemaVersionSchema = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

/**
 * deserializeAws_restJson1StateCapabilities
 */
const de_StateCapabilities = (output: any, context: __SerdeContext): StateCapability[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StateCapability(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StateCapability
 */
const de_StateCapability = (output: any, context: __SerdeContext): StateCapability => {
  return take(output, {
    id: __expectString,
    name: __expectString,
    properties: (_: any) => de_CapabilityProperties(_, context),
    version: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1StateEndpoint
 */
const de_StateEndpoint = (output: any, context: __SerdeContext): StateEndpoint => {
  return take(output, {
    capabilities: (_: any) => de_StateCapabilities(_, context),
    endpointId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1StateEndpoints
 */
const de_StateEndpoints = (output: any, context: __SerdeContext): StateEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StateEndpoint(entry, context);
    });
  return retVal;
};

// de_TagsMap omitted.

// de_Target omitted.

// de_TaskProcessingDetails omitted.

/**
 * deserializeAws_restJson1ValidationSchema
 */
const de_ValidationSchema = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
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

const _CIF = "CapabilityIdFilter";
const _CLF = "CredentialLockerFilter";
const _CPIF = "ConnectorPolicyIdFilter";
const _EIF = "EndpointIdFilter";
const _F = "Force";
const _Fo = "Format";
const _MR = "MaxResults";
const _N = "Namespace";
const _NF = "NamespaceFilter";
const _NT = "NextToken";
const _OF = "OwnerFilter";
const _PCIF = "ParentControllerIdentifierFilter";
const _PSF = "ProvisioningStatusFilter";
const _RF = "RoleFilter";
const _SI = "SchemaId";
const _SIF = "SchemaIdFilter";
const _SNF = "SerialNumberFilter";
const _SV = "SemanticVersion";
const _SVF = "SemanticVersionFilter";
const _V = "Visibility";
const _VF = "VisibilityFilter";
