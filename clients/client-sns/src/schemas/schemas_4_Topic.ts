// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  BatchEntryIdsNotDistinctException as __BatchEntryIdsNotDistinctException,
  BatchRequestTooLongException as __BatchRequestTooLongException,
  EmptyBatchRequestException as __EmptyBatchRequestException,
  EndpointDisabledException as __EndpointDisabledException,
  InvalidBatchEntryIdException as __InvalidBatchEntryIdException,
  InvalidParameterValueException as __InvalidParameterValueException,
  InvalidSecurityException as __InvalidSecurityException,
  KMSAccessDeniedException as __KMSAccessDeniedException,
  KMSDisabledException as __KMSDisabledException,
  KMSInvalidStateException as __KMSInvalidStateException,
  KMSNotFoundException as __KMSNotFoundException,
  KMSOptInRequired as __KMSOptInRequired,
  KMSThrottlingException as __KMSThrottlingException,
  PlatformApplicationDisabledException as __PlatformApplicationDisabledException,
  TooManyEntriesInBatchRequestException as __TooManyEntriesInBatchRequestException,
  TopicLimitExceededException as __TopicLimitExceededException,
} from "../models/index";
import {
  _A,
  _ANt,
  _aQE,
  _AV,
  _BEINDE,
  _BREE,
  _BREEL,
  _BRTLE,
  _BV,
  _C,
  _c,
  _CT,
  _CTI,
  _CTR,
  _DPP,
  _DT,
  _E,
  _e,
  _EBRE,
  _EDE,
  _F,
  _GDPP,
  _GDPPI,
  _GDPPR,
  _GTA,
  _GTAI,
  _GTAR,
  _hE,
  _I,
  _IBEIE,
  _IPVE,
  _ISE,
  _KMSADE,
  _KMSDE,
  _KMSISE,
  _KMSNFE,
  _KMSOIR,
  _KMSTE,
  _M,
  _m,
  _MA,
  _MAM,
  _MAV,
  _MDI,
  _MGI,
  _MI,
  _MS,
  _N,
  _PADE,
  _PB,
  _PBI,
  _PBR,
  _PBRE,
  _PBREL,
  _PBRELu,
  _PBREu,
  _PBREub,
  _PDPP,
  _PDPPI,
  _PI,
  _PN,
  _PR,
  _Pr,
  _Pu,
  _RA,
  _RSA,
  _SA,
  _SF,
  _SI,
  _SN,
  _SR,
  _STA,
  _STAI,
  _Su,
  _Subs,
  _Suc,
  _SV,
  _TA,
  _Ta,
  _TAa,
  _TLEEo,
  _TMEIBRE,
  _U,
  _UI,
  _V,
  _xN,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_2_Phone";
import { TagList } from "./schemas_8_Resource";
import { PhoneNumber } from "./schemas_13_Number";

/* eslint no-var: 0 */

export var BatchEntryIdsNotDistinctException = error(
  n0,
  _BEINDE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`BatchEntryIdsNotDistinct`, 400],
  },
  [_m],
  [0],

  __BatchEntryIdsNotDistinctException
);
export var BatchRequestTooLongException = error(
  n0,
  _BRTLE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`BatchRequestTooLong`, 400],
  },
  [_m],
  [0],

  __BatchRequestTooLongException
);
export var BatchResultErrorEntry = struct(n0, _BREE, 0, [_I, _C, _M, _SF], [0, 0, 0, 2]);
export var CreateTopicInput = struct(n0, _CTI, 0, [_N, _A, _Ta, _DPP], [0, 128 | 0, () => TagList, 0]);
export var CreateTopicResponse = struct(n0, _CTR, 0, [_TA], [0]);
export var EmptyBatchRequestException = error(
  n0,
  _EBRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`EmptyBatchRequest`, 400],
  },
  [_m],
  [0],

  __EmptyBatchRequestException
);
export var EndpointDisabledException = error(
  n0,
  _EDE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`EndpointDisabled`, 400],
  },
  [_m],
  [0],

  __EndpointDisabledException
);
export var GetDataProtectionPolicyInput = struct(n0, _GDPPI, 0, [_RA], [0]);
export var GetDataProtectionPolicyResponse = struct(n0, _GDPPR, 0, [_DPP], [0]);
export var GetTopicAttributesInput = struct(n0, _GTAI, 0, [_TA], [0]);
export var GetTopicAttributesResponse = struct(n0, _GTAR, 0, [_A], [128 | 0]);
export var InvalidBatchEntryIdException = error(
  n0,
  _IBEIE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidBatchEntryId`, 400],
  },
  [_m],
  [0],

  __InvalidBatchEntryIdException
);
export var InvalidParameterValueException = error(
  n0,
  _IPVE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ParameterValueInvalid`, 400],
  },
  [_m],
  [0],

  __InvalidParameterValueException
);
export var InvalidSecurityException = error(
  n0,
  _ISE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`InvalidSecurity`, 403],
  },
  [_m],
  [0],

  __InvalidSecurityException
);
export var KMSAccessDeniedException = error(
  n0,
  _KMSADE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`KMSAccessDenied`, 400],
  },
  [_m],
  [0],

  __KMSAccessDeniedException
);
export var KMSDisabledException = error(
  n0,
  _KMSDE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`KMSDisabled`, 400],
  },
  [_m],
  [0],

  __KMSDisabledException
);
export var KMSInvalidStateException = error(
  n0,
  _KMSISE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`KMSInvalidState`, 400],
  },
  [_m],
  [0],

  __KMSInvalidStateException
);
export var KMSNotFoundException = error(
  n0,
  _KMSNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`KMSNotFound`, 400],
  },
  [_m],
  [0],

  __KMSNotFoundException
);
export var KMSOptInRequired = error(
  n0,
  _KMSOIR,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`KMSOptInRequired`, 403],
  },
  [_m],
  [0],

  __KMSOptInRequired
);
export var KMSThrottlingException = error(
  n0,
  _KMSTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`KMSThrottling`, 400],
  },
  [_m],
  [0],

  __KMSThrottlingException
);
export var MessageAttributeValue = struct(n0, _MAV, 0, [_DT, _SV, _BV], [0, 0, 21]);
export var PlatformApplicationDisabledException = error(
  n0,
  _PADE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`PlatformApplicationDisabled`, 400],
  },
  [_m],
  [0],

  __PlatformApplicationDisabledException
);
export var PublishBatchInput = struct(n0, _PBI, 0, [_TA, _PBRE], [0, [() => PublishBatchRequestEntryList, 0]]);
export var PublishBatchRequestEntry = struct(
  n0,
  _PBREu,
  0,
  [_I, _M, _Su, _MS, _MA, _MDI, _MGI],
  [0, 0, 0, 0, [() => MessageAttributeMap, 0], 0, 0]
);
export var PublishBatchResponse = struct(
  n0,
  _PBR,
  0,
  [_Suc, _F],
  [() => PublishBatchResultEntryList, () => BatchResultErrorEntryList]
);
export var PublishBatchResultEntry = struct(n0, _PBREub, 0, [_I, _MI, _SN], [0, 0, 0]);
export var PublishInput = struct(
  n0,
  _PI,
  0,
  [_TA, _TAa, _PN, _M, _Su, _MS, _MA, _MDI, _MGI],
  [0, 0, [() => PhoneNumber, 0], 0, 0, 0, [() => MessageAttributeMap, 0], 0, 0]
);
export var PublishResponse = struct(n0, _PR, 0, [_MI, _SN], [0, 0]);
export var PutDataProtectionPolicyInput = struct(n0, _PDPPI, 0, [_RA, _DPP], [0, 0]);
export var SetTopicAttributesInput = struct(n0, _STAI, 0, [_TA, _ANt, _AV], [0, 0, 0]);
export var SubscribeInput = struct(n0, _SI, 0, [_TA, _Pr, _E, _A, _RSA], [0, 0, 0, 128 | 0, 2]);
export var SubscribeResponse = struct(n0, _SR, 0, [_SA], [0]);
export var TooManyEntriesInBatchRequestException = error(
  n0,
  _TMEIBRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyEntriesInBatchRequest`, 400],
  },
  [_m],
  [0],

  __TooManyEntriesInBatchRequestException
);
export var TopicLimitExceededException = error(
  n0,
  _TLEEo,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`TopicLimitExceeded`, 403],
  },
  [_m],
  [0],

  __TopicLimitExceededException
);
export var UnsubscribeInput = struct(n0, _UI, 0, [_SA], [0]);
export var BatchResultErrorEntryList = list(n0, _BREEL, 0, () => BatchResultErrorEntry);
export var PublishBatchRequestEntryList = list(n0, _PBREL, 0, [() => PublishBatchRequestEntry, 0]);
export var PublishBatchResultEntryList = list(n0, _PBRELu, 0, () => PublishBatchResultEntry);
export var MessageAttributeMap = map(
  n0,
  _MAM,
  0,
  [
    0,
    {
      [_xN]: _N,
    },
  ],
  [
    () => MessageAttributeValue,
    {
      [_xN]: _V,
    },
  ]
);
export var TopicAttributesMap = 128 | 0;

export var CreateTopic = op(
  n0,
  _CT,
  0,
  () => CreateTopicInput,
  () => CreateTopicResponse
);
export var GetDataProtectionPolicy = op(
  n0,
  _GDPP,
  0,
  () => GetDataProtectionPolicyInput,
  () => GetDataProtectionPolicyResponse
);
export var GetTopicAttributes = op(
  n0,
  _GTA,
  0,
  () => GetTopicAttributesInput,
  () => GetTopicAttributesResponse
);
export var Publish = op(
  n0,
  _Pu,
  0,
  () => PublishInput,
  () => PublishResponse
);
export var PublishBatch = op(
  n0,
  _PB,
  0,
  () => PublishBatchInput,
  () => PublishBatchResponse
);
export var PutDataProtectionPolicy = op(
  n0,
  _PDPP,
  0,
  () => PutDataProtectionPolicyInput,
  () => Unit
);
export var SetTopicAttributes = op(
  n0,
  _STA,
  0,
  () => SetTopicAttributesInput,
  () => Unit
);
export var Subscribe = op(
  n0,
  _Subs,
  0,
  () => SubscribeInput,
  () => SubscribeResponse
);
export var Unsubscribe = op(
  n0,
  _U,
  0,
  () => UnsubscribeInput,
  () => Unit
);
