// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AlreadyExistsException as __AlreadyExistsException,
  BadRequestException as __BadRequestException,
  InternalServiceErrorException as __InternalServiceErrorException,
  LimitExceededException as __LimitExceededException,
  NotFoundException as __NotFoundException,
  TooManyRequestsException as __TooManyRequestsException,
} from "../models/index";
import {
  _AEE,
  _BRE,
  _C,
  _c,
  _CCS,
  _CCSED,
  _CCSEDR,
  _CCSEDRr,
  _CCSR,
  _CCSRr,
  _CI,
  _CIM,
  _CIMT,
  _CS,
  _CSN,
  _CWLD,
  _DCS,
  _DCSED,
  _DCSEDR,
  _DCSEDRe,
  _DCSR,
  _DCSRe,
  _DPN,
  _DSA,
  _E,
  _e,
  _ED,
  _EDD,
  _EDN,
  _EDv,
  _GCSED,
  _GCSEDR,
  _GCSEDRe,
  _h,
  _hE,
  _hQ,
  _IRA,
  _ISEE,
  _KFD,
  _LC,
  _LCS,
  _LCSR,
  _LCSRi,
  _LEE,
  _LGA,
  _M,
  _MET,
  _MI,
  _N,
  _NFE,
  _NT,
  _OPN,
  _PS,
  _PTM,
  _PTMT,
  _s,
  _SD,
  _SSMLM,
  _SSMLMT,
  _SVM,
  _SVMR,
  _SVMRe,
  _T,
  _TA,
  _TMRE,
  _UCSED,
  _UCSEDR,
  _UCSEDRp,
  _VI,
  _VMC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AlreadyExistsException = error(
  n0,
  _AEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __AlreadyExistsException
);
export var BadRequestException = error(
  n0,
  _BRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __BadRequestException
);
export var CallInstructionsMessageType = struct(n0, _CIMT, 0, [_T], [0]);
export var CloudWatchLogsDestination = struct(n0, _CWLD, 0, [_IRA, _LGA], [0, 0]);
export var CreateConfigurationSetEventDestinationRequest = struct(
  n0,
  _CCSEDR,
  0,
  [_CSN, _ED, _EDN],
  [[0, 1], () => EventDestinationDefinition, 0]
);
export var CreateConfigurationSetEventDestinationResponse = struct(n0, _CCSEDRr, 0, [], []);
export var CreateConfigurationSetRequest = struct(n0, _CCSR, 0, [_CSN], [0]);
export var CreateConfigurationSetResponse = struct(n0, _CCSRr, 0, [], []);
export var DeleteConfigurationSetEventDestinationRequest = struct(
  n0,
  _DCSEDR,
  0,
  [_CSN, _EDN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteConfigurationSetEventDestinationResponse = struct(n0, _DCSEDRe, 0, [], []);
export var DeleteConfigurationSetRequest = struct(n0, _DCSR, 0, [_CSN], [[0, 1]]);
export var DeleteConfigurationSetResponse = struct(n0, _DCSRe, 0, [], []);
export var EventDestination = struct(
  n0,
  _ED,
  0,
  [_CWLD, _E, _KFD, _MET, _N, _SD],
  [() => CloudWatchLogsDestination, 2, () => KinesisFirehoseDestination, 64 | 0, 0, () => SnsDestination]
);
export var EventDestinationDefinition = struct(
  n0,
  _EDD,
  0,
  [_CWLD, _E, _KFD, _MET, _SD],
  [() => CloudWatchLogsDestination, 2, () => KinesisFirehoseDestination, 64 | 0, () => SnsDestination]
);
export var GetConfigurationSetEventDestinationsRequest = struct(n0, _GCSEDR, 0, [_CSN], [[0, 1]]);
export var GetConfigurationSetEventDestinationsResponse = struct(n0, _GCSEDRe, 0, [_EDv], [() => EventDestinations]);
export var InternalServiceErrorException = error(
  n0,
  _ISEE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalServiceErrorException
);
export var KinesisFirehoseDestination = struct(n0, _KFD, 0, [_DSA, _IRA], [0, 0]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 412,
  },
  [_M],
  [0],

  __LimitExceededException
);
export var ListConfigurationSetsRequest = struct(
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
  ]
);
export var ListConfigurationSetsResponse = struct(n0, _LCSRi, 0, [_CS, _NT], [64 | 0, 0]);
export var NotFoundException = error(
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NotFoundException
);
export var PlainTextMessageType = struct(n0, _PTMT, 0, [_LC, _T, _VI], [0, 0, 0]);
export var SendVoiceMessageRequest = struct(
  n0,
  _SVMR,
  0,
  [_CI, _CSN, _C, _DPN, _OPN],
  [0, 0, () => VoiceMessageContent, 0, 0]
);
export var SendVoiceMessageResponse = struct(n0, _SVMRe, 0, [_MI], [0]);
export var SnsDestination = struct(n0, _SD, 0, [_TA], [0]);
export var SSMLMessageType = struct(n0, _SSMLMT, 0, [_LC, _T, _VI], [0, 0, 0]);
export var TooManyRequestsException = error(
  n0,
  _TMRE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __TooManyRequestsException
);
export var UpdateConfigurationSetEventDestinationRequest = struct(
  n0,
  _UCSEDR,
  0,
  [_CSN, _ED, _EDN],
  [[0, 1], () => EventDestinationDefinition, [0, 1]]
);
export var UpdateConfigurationSetEventDestinationResponse = struct(n0, _UCSEDRp, 0, [], []);
export var VoiceMessageContent = struct(
  n0,
  _VMC,
  0,
  [_CIM, _PTM, _SSMLM],
  [() => CallInstructionsMessageType, () => PlainTextMessageType, () => SSMLMessageType]
);
export var Unit = "unit" as const;

export var ConfigurationSets = 64 | 0;

export var EventDestinations = list(n0, _EDv, 0, () => EventDestination);
export var EventTypes = 64 | 0;

export var CreateConfigurationSet = op(
  n0,
  _CCS,
  {
    [_h]: ["POST", "/v1/sms-voice/configuration-sets", 200],
  },
  () => CreateConfigurationSetRequest,
  () => CreateConfigurationSetResponse
);
export var CreateConfigurationSetEventDestination = op(
  n0,
  _CCSED,
  {
    [_h]: ["POST", "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations", 200],
  },
  () => CreateConfigurationSetEventDestinationRequest,
  () => CreateConfigurationSetEventDestinationResponse
);
export var DeleteConfigurationSet = op(
  n0,
  _DCS,
  {
    [_h]: ["DELETE", "/v1/sms-voice/configuration-sets/{ConfigurationSetName}", 200],
  },
  () => DeleteConfigurationSetRequest,
  () => DeleteConfigurationSetResponse
);
export var DeleteConfigurationSetEventDestination = op(
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
  () => DeleteConfigurationSetEventDestinationResponse
);
export var GetConfigurationSetEventDestinations = op(
  n0,
  _GCSED,
  {
    [_h]: ["GET", "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations", 200],
  },
  () => GetConfigurationSetEventDestinationsRequest,
  () => GetConfigurationSetEventDestinationsResponse
);
export var ListConfigurationSets = op(
  n0,
  _LCS,
  {
    [_h]: ["GET", "/v1/sms-voice/configuration-sets", 200],
  },
  () => ListConfigurationSetsRequest,
  () => ListConfigurationSetsResponse
);
export var SendVoiceMessage = op(
  n0,
  _SVM,
  {
    [_h]: ["POST", "/v1/sms-voice/voice/message", 200],
  },
  () => SendVoiceMessageRequest,
  () => SendVoiceMessageResponse
);
export var UpdateConfigurationSetEventDestination = op(
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
  () => UpdateConfigurationSetEventDestinationResponse
);
