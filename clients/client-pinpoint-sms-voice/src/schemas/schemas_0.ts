const _AEE = "AlreadyExistsException";
const _BRE = "BadRequestException";
const _C = "Content";
const _CCS = "CreateConfigurationSet";
const _CCSED = "CreateConfigurationSetEventDestination";
const _CCSEDR = "CreateConfigurationSetEventDestinationRequest";
const _CCSEDRr = "CreateConfigurationSetEventDestinationResponse";
const _CCSR = "CreateConfigurationSetRequest";
const _CCSRr = "CreateConfigurationSetResponse";
const _CI = "CallerId";
const _CIM = "CallInstructionsMessage";
const _CIMT = "CallInstructionsMessageType";
const _CS = "ConfigurationSets";
const _CSN = "ConfigurationSetName";
const _CWLD = "CloudWatchLogsDestination";
const _DCS = "DeleteConfigurationSet";
const _DCSED = "DeleteConfigurationSetEventDestination";
const _DCSEDR = "DeleteConfigurationSetEventDestinationRequest";
const _DCSEDRe = "DeleteConfigurationSetEventDestinationResponse";
const _DCSR = "DeleteConfigurationSetRequest";
const _DCSRe = "DeleteConfigurationSetResponse";
const _DPN = "DestinationPhoneNumber";
const _DSA = "DeliveryStreamArn";
const _E = "Enabled";
const _ED = "EventDestination";
const _EDD = "EventDestinationDefinition";
const _EDN = "EventDestinationName";
const _EDv = "EventDestinations";
const _GCSED = "GetConfigurationSetEventDestinations";
const _GCSEDR = "GetConfigurationSetEventDestinationsRequest";
const _GCSEDRe = "GetConfigurationSetEventDestinationsResponse";
const _IRA = "IamRoleArn";
const _ISEE = "InternalServiceErrorException";
const _KFD = "KinesisFirehoseDestination";
const _LC = "LanguageCode";
const _LCS = "ListConfigurationSets";
const _LCSR = "ListConfigurationSetsRequest";
const _LCSRi = "ListConfigurationSetsResponse";
const _LEE = "LimitExceededException";
const _LGA = "LogGroupArn";
const _M = "Message";
const _MET = "MatchingEventTypes";
const _MI = "MessageId";
const _N = "Name";
const _NFE = "NotFoundException";
const _NT = "NextToken";
const _OPN = "OriginationPhoneNumber";
const _PS = "PageSize";
const _PTM = "PlainTextMessage";
const _PTMT = "PlainTextMessageType";
const _SD = "SnsDestination";
const _SSMLM = "SSMLMessage";
const _SSMLMT = "SSMLMessageType";
const _SVM = "SendVoiceMessage";
const _SVMR = "SendVoiceMessageRequest";
const _SVMRe = "SendVoiceMessageResponse";
const _T = "Text";
const _TA = "TopicArn";
const _TMRE = "TooManyRequestsException";
const _UCSED = "UpdateConfigurationSetEventDestination";
const _UCSEDR = "UpdateConfigurationSetEventDestinationRequest";
const _UCSEDRp = "UpdateConfigurationSetEventDestinationResponse";
const _VI = "VoiceId";
const _VMC = "VoiceMessageContent";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.pinpointsmsvoice";
const n0 = "com.amazonaws.pinpointsmsvoice";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AlreadyExistsException as __AlreadyExistsException,
  BadRequestException as __BadRequestException,
  InternalServiceErrorException as __InternalServiceErrorException,
  LimitExceededException as __LimitExceededException,
  NotFoundException as __NotFoundException,
  TooManyRequestsException as __TooManyRequestsException,
} from "../models/errors";
import { PinpointSMSVoiceServiceException as __PinpointSMSVoiceServiceException } from "../models/PinpointSMSVoiceServiceException";

/* eslint no-var: 0 */

export var AlreadyExistsException: StaticErrorSchema = [
  -3,
  n0,
  _AEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(AlreadyExistsException, __AlreadyExistsException);

export var BadRequestException: StaticErrorSchema = [
  -3,
  n0,
  _BRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(BadRequestException, __BadRequestException);

export var CallInstructionsMessageType: StaticStructureSchema = [3, n0, _CIMT, 0, [_T], [0]];
export var CloudWatchLogsDestination: StaticStructureSchema = [3, n0, _CWLD, 0, [_IRA, _LGA], [0, 0]];
export var CreateConfigurationSetEventDestinationRequest: StaticStructureSchema = [
  3,
  n0,
  _CCSEDR,
  0,
  [_CSN, _ED, _EDN],
  [[0, 1], () => EventDestinationDefinition, 0],
];
export var CreateConfigurationSetEventDestinationResponse: StaticStructureSchema = [3, n0, _CCSEDRr, 0, [], []];
export var CreateConfigurationSetRequest: StaticStructureSchema = [3, n0, _CCSR, 0, [_CSN], [0]];
export var CreateConfigurationSetResponse: StaticStructureSchema = [3, n0, _CCSRr, 0, [], []];
export var DeleteConfigurationSetEventDestinationRequest: StaticStructureSchema = [
  3,
  n0,
  _DCSEDR,
  0,
  [_CSN, _EDN],
  [
    [0, 1],
    [0, 1],
  ],
];
export var DeleteConfigurationSetEventDestinationResponse: StaticStructureSchema = [3, n0, _DCSEDRe, 0, [], []];
export var DeleteConfigurationSetRequest: StaticStructureSchema = [3, n0, _DCSR, 0, [_CSN], [[0, 1]]];
export var DeleteConfigurationSetResponse: StaticStructureSchema = [3, n0, _DCSRe, 0, [], []];
export var EventDestination: StaticStructureSchema = [
  3,
  n0,
  _ED,
  0,
  [_CWLD, _E, _KFD, _MET, _N, _SD],
  [() => CloudWatchLogsDestination, 2, () => KinesisFirehoseDestination, 64 | 0, 0, () => SnsDestination],
];
export var EventDestinationDefinition: StaticStructureSchema = [
  3,
  n0,
  _EDD,
  0,
  [_CWLD, _E, _KFD, _MET, _SD],
  [() => CloudWatchLogsDestination, 2, () => KinesisFirehoseDestination, 64 | 0, () => SnsDestination],
];
export var GetConfigurationSetEventDestinationsRequest: StaticStructureSchema = [3, n0, _GCSEDR, 0, [_CSN], [[0, 1]]];
export var GetConfigurationSetEventDestinationsResponse: StaticStructureSchema = [
  3,
  n0,
  _GCSEDRe,
  0,
  [_EDv],
  [() => EventDestinations],
];
export var InternalServiceErrorException: StaticErrorSchema = [
  -3,
  n0,
  _ISEE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServiceErrorException, __InternalServiceErrorException);

export var KinesisFirehoseDestination: StaticStructureSchema = [3, n0, _KFD, 0, [_DSA, _IRA], [0, 0]];
export var LimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 412,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(LimitExceededException, __LimitExceededException);

export var ListConfigurationSetsRequest: StaticStructureSchema = [
  3,
  n0,
  _LCSR,
  0,
  [_NT, _PS],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      0,
      {
        [_hQ]: _PS,
      },
    ],
  ],
];
export var ListConfigurationSetsResponse: StaticStructureSchema = [3, n0, _LCSRi, 0, [_CS, _NT], [64 | 0, 0]];
export var NotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(NotFoundException, __NotFoundException);

export var PlainTextMessageType: StaticStructureSchema = [3, n0, _PTMT, 0, [_LC, _T, _VI], [0, 0, 0]];
export var SendVoiceMessageRequest: StaticStructureSchema = [
  3,
  n0,
  _SVMR,
  0,
  [_CI, _CSN, _C, _DPN, _OPN],
  [0, 0, () => VoiceMessageContent, 0, 0],
];
export var SendVoiceMessageResponse: StaticStructureSchema = [3, n0, _SVMRe, 0, [_MI], [0]];
export var SnsDestination: StaticStructureSchema = [3, n0, _SD, 0, [_TA], [0]];
export var SSMLMessageType: StaticStructureSchema = [3, n0, _SSMLMT, 0, [_LC, _T, _VI], [0, 0, 0]];
export var TooManyRequestsException: StaticErrorSchema = [
  -3,
  n0,
  _TMRE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(TooManyRequestsException, __TooManyRequestsException);

export var UpdateConfigurationSetEventDestinationRequest: StaticStructureSchema = [
  3,
  n0,
  _UCSEDR,
  0,
  [_CSN, _ED, _EDN],
  [[0, 1], () => EventDestinationDefinition, [0, 1]],
];
export var UpdateConfigurationSetEventDestinationResponse: StaticStructureSchema = [3, n0, _UCSEDRp, 0, [], []];
export var VoiceMessageContent: StaticStructureSchema = [
  3,
  n0,
  _VMC,
  0,
  [_CIM, _PTM, _SSMLM],
  [() => CallInstructionsMessageType, () => PlainTextMessageType, () => SSMLMessageType],
];
export var __Unit = "unit" as const;

export var PinpointSMSVoiceServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "PinpointSMSVoiceServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(PinpointSMSVoiceServiceException, __PinpointSMSVoiceServiceException);

export var ConfigurationSets = 64 | 0;

export var EventDestinations: StaticListSchema = [1, n0, _EDv, 0, () => EventDestination];
export var EventTypes = 64 | 0;

export var CreateConfigurationSet: StaticOperationSchema = [
  9,
  n0,
  _CCS,
  {
    [_h]: ["POST", "/v1/sms-voice/configuration-sets", 200],
  },
  () => CreateConfigurationSetRequest,
  () => CreateConfigurationSetResponse,
];
export var CreateConfigurationSetEventDestination: StaticOperationSchema = [
  9,
  n0,
  _CCSED,
  {
    [_h]: ["POST", "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations", 200],
  },
  () => CreateConfigurationSetEventDestinationRequest,
  () => CreateConfigurationSetEventDestinationResponse,
];
export var DeleteConfigurationSet: StaticOperationSchema = [
  9,
  n0,
  _DCS,
  {
    [_h]: ["DELETE", "/v1/sms-voice/configuration-sets/{ConfigurationSetName}", 200],
  },
  () => DeleteConfigurationSetRequest,
  () => DeleteConfigurationSetResponse,
];
export var DeleteConfigurationSetEventDestination: StaticOperationSchema = [
  9,
  n0,
  _DCSED,
  {
    [_h]: [
      "DELETE",
      "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
      200,
    ],
  },
  () => DeleteConfigurationSetEventDestinationRequest,
  () => DeleteConfigurationSetEventDestinationResponse,
];
export var GetConfigurationSetEventDestinations: StaticOperationSchema = [
  9,
  n0,
  _GCSED,
  {
    [_h]: ["GET", "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations", 200],
  },
  () => GetConfigurationSetEventDestinationsRequest,
  () => GetConfigurationSetEventDestinationsResponse,
];
export var ListConfigurationSets: StaticOperationSchema = [
  9,
  n0,
  _LCS,
  {
    [_h]: ["GET", "/v1/sms-voice/configuration-sets", 200],
  },
  () => ListConfigurationSetsRequest,
  () => ListConfigurationSetsResponse,
];
export var SendVoiceMessage: StaticOperationSchema = [
  9,
  n0,
  _SVM,
  {
    [_h]: ["POST", "/v1/sms-voice/voice/message", 200],
  },
  () => SendVoiceMessageRequest,
  () => SendVoiceMessageResponse,
];
export var UpdateConfigurationSetEventDestination: StaticOperationSchema = [
  9,
  n0,
  _UCSED,
  {
    [_h]: [
      "PUT",
      "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}",
      200,
    ],
  },
  () => UpdateConfigurationSetEventDestinationRequest,
  () => UpdateConfigurationSetEventDestinationResponse,
];
