// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _APC,
  _CA,
  _CAo,
  _CET,
  _CETR,
  _CETRr,
  _COom,
  _CRr,
  _CTo,
  _CUJ,
  _CUJR,
  _CUJRr,
  _D,
  _DE,
  _DN,
  _DNi,
  _DPOT,
  _DPOTe,
  _DPOTet,
  _DPOTRet,
  _DPOTRete,
  _ED,
  _EE,
  _EK,
  _ETC,
  _ETCv,
  _ETD,
  _ETDv,
  _ETL,
  _ETN,
  _Fi,
  _FM,
  _FNie,
  _FNiel,
  _FR,
  _GET,
  _GETR,
  _GETRe,
  _GPOT,
  _GPOTR,
  _GPOTRe,
  _GPOTT,
  _GPOTTR,
  _GPOTTRe,
  _GUJ,
  _GUJR,
  _GUJRe,
  _h,
  _JI,
  _jN,
  _K,
  _KM,
  _LO,
  _LUA,
  _MAPOC,
  _MIPP,
  _MPOC,
  _O,
  _OA,
  _OAb,
  _OTF,
  _OTK,
  _OTKL,
  _OTN,
  _Pe,
  _Per,
  _PPOT,
  _PPOTR,
  _PPOTRu,
  _RS,
  _SF,
  _SIt,
  _SLUTF,
  _SN,
  _SO,
  _So,
  _SR,
  _Sta,
  _Ta,
  _Tar,
  _TI,
  _UET,
  _UETR,
  _UETRp,
  _UK,
  _Un,
  _Unl,
  _UR,
  _V,
  _Va,
  n0,
  sensitiveText,
} from "./schemas_0";
import { stringifiedJson } from "./schemas_8_Profile";

/* eslint no-var: 0 */

export var CreateEventTriggerRequest = struct(
  n0,
  _CETR,
  0,
  [_DN, _ETN, _OTN, _D, _ETC, _SF, _ETL, _Ta],
  [[0, 1], [0, 1], 0, [() => sensitiveText, 0], [() => EventTriggerConditions, 0], 0, () => EventTriggerLimits, 128 | 0]
);
export var CreateEventTriggerResponse = struct(
  n0,
  _CETRr,
  0,
  [_ETN, _OTN, _D, _ETC, _SF, _ETL, _CA, _LUA, _Ta],
  [0, 0, [() => sensitiveText, 0], [() => EventTriggerConditions, 0], 0, () => EventTriggerLimits, 4, 4, 128 | 0]
);
export var CreateUploadJobRequest = struct(
  n0,
  _CUJR,
  0,
  [_DN, _DNi, _Fi, _UK, _DE],
  [[0, 1], 0, [() => FieldMap, 0], 0, 1]
);
export var CreateUploadJobResponse = struct(
  n0,
  _CUJRr,
  0,
  [_JI],
  [
    [
      0,
      {
        [_jN]: _JI,
      },
    ],
  ]
);
export var DetectedProfileObjectType = struct(
  n0,
  _DPOT,
  0,
  [_SLUTF, _Fi, _K],
  [0, [() => FieldMap, 0], [() => KeyMap, 0]]
);
export var DetectProfileObjectTypeRequest = struct(
  n0,
  _DPOTRet,
  0,
  [_O, _DN],
  [
    [() => Objects, 0],
    [0, 1],
  ]
);
export var DetectProfileObjectTypeResponse = struct(
  n0,
  _DPOTRete,
  0,
  [_DPOTe],
  [[() => DetectedProfileObjectTypes, 0]]
);
export var EventTriggerCondition = struct(n0, _ETCv, 0, [_ETD, _LO], [() => EventTriggerDimensions, 0]);
export var EventTriggerDimension = struct(n0, _ETDv, 0, [_OA], [() => ObjectAttributes]);
export var EventTriggerLimits = struct(n0, _ETL, 0, [_EE, _Pe], [1, () => Periods]);
export var GetEventTriggerRequest = struct(
  n0,
  _GETR,
  0,
  [_DN, _ETN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetEventTriggerResponse = struct(
  n0,
  _GETRe,
  0,
  [_ETN, _OTN, _D, _ETC, _SF, _ETL, _CA, _LUA, _Ta],
  [0, 0, [() => sensitiveText, 0], [() => EventTriggerConditions, 0], 0, () => EventTriggerLimits, 4, 4, 128 | 0]
);
export var GetProfileObjectTypeRequest = struct(
  n0,
  _GPOTR,
  0,
  [_DN, _OTN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetProfileObjectTypeResponse = struct(
  n0,
  _GPOTRe,
  0,
  [_OTN, _D, _TI, _ED, _EK, _APC, _SLUTF, _MAPOC, _MPOC, _Fi, _K, _CA, _LUA, _Ta],
  [0, [() => sensitiveText, 0], 0, 1, 0, 2, 0, 1, 1, [() => FieldMap, 0], [() => KeyMap, 0], 4, 4, 128 | 0]
);
export var GetProfileObjectTypeTemplateRequest = struct(n0, _GPOTTR, 0, [_TI], [[0, 1]]);
export var GetProfileObjectTypeTemplateResponse = struct(
  n0,
  _GPOTTRe,
  0,
  [_TI, _SN, _SO, _APC, _SLUTF, _Fi, _K],
  [0, 0, 0, 2, 0, [() => FieldMap, 0], [() => KeyMap, 0]]
);
export var GetUploadJobRequest = struct(
  n0,
  _GUJR,
  0,
  [_DN, _JI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetUploadJobResponse = struct(
  n0,
  _GUJRe,
  0,
  [_JI, _DNi, _Sta, _SR, _CA, _CAo, _Fi, _UK, _RS, _DE],
  [
    [
      0,
      {
        [_jN]: _JI,
      },
    ],
    [
      0,
      {
        [_jN]: _DNi,
      },
    ],
    [
      0,
      {
        [_jN]: _Sta,
      },
    ],
    [
      0,
      {
        [_jN]: _SR,
      },
    ],
    [
      4,
      {
        [_jN]: _CA,
      },
    ],
    [
      4,
      {
        [_jN]: _CAo,
      },
    ],
    [
      () => FieldMap,
      {
        [_jN]: _Fi,
      },
    ],
    [
      0,
      {
        [_jN]: _UK,
      },
    ],
    [
      () => ResultsSummary,
      {
        [_jN]: _RS,
      },
    ],
    [
      1,
      {
        [_jN]: _DE,
      },
    ],
  ]
);
export var ObjectAttribute = struct(n0, _OAb, 0, [_So, _FNie, _COom, _V], [0, 0, 0, 64 | 0]);
export var ObjectTypeField = struct(n0, _OTF, 0, [_So, _Tar, _CTo], [0, 0, 0]);
export var ObjectTypeKey = struct(n0, _OTK, 0, [_SIt, _FNiel], [64 | 0, 64 | 0]);
export var Period = struct(n0, _Per, 0, [_Un, _Va, _MIPP, _Unl], [0, 1, 1, 2]);
export var PutProfileObjectTypeRequest = struct(
  n0,
  _PPOTR,
  0,
  [_DN, _OTN, _D, _TI, _ED, _EK, _APC, _SLUTF, _MPOC, _Fi, _K, _Ta],
  [[0, 1], [0, 1], [() => sensitiveText, 0], 0, 1, 0, 2, 0, 1, [() => FieldMap, 0], [() => KeyMap, 0], 128 | 0]
);
export var PutProfileObjectTypeResponse = struct(
  n0,
  _PPOTRu,
  0,
  [_OTN, _D, _TI, _ED, _EK, _APC, _SLUTF, _MPOC, _MAPOC, _Fi, _K, _CA, _LUA, _Ta],
  [0, [() => sensitiveText, 0], 0, 1, 0, 2, 0, 1, 1, [() => FieldMap, 0], [() => KeyMap, 0], 4, 4, 128 | 0]
);
export var ResultsSummary = struct(
  n0,
  _RS,
  0,
  [_UR, _CRr, _FR],
  [
    [
      1,
      {
        [_jN]: _UR,
      },
    ],
    [
      1,
      {
        [_jN]: _CRr,
      },
    ],
    [
      1,
      {
        [_jN]: _FR,
      },
    ],
  ]
);
export var UpdateEventTriggerRequest = struct(
  n0,
  _UETR,
  0,
  [_DN, _ETN, _OTN, _D, _ETC, _SF, _ETL],
  [[0, 1], [0, 1], 0, [() => sensitiveText, 0], [() => EventTriggerConditions, 0], 0, () => EventTriggerLimits]
);
export var UpdateEventTriggerResponse = struct(
  n0,
  _UETRp,
  0,
  [_ETN, _OTN, _D, _ETC, _SF, _ETL, _CA, _LUA, _Ta],
  [0, 0, [() => sensitiveText, 0], [() => EventTriggerConditions, 0], 0, () => EventTriggerLimits, 4, 4, 128 | 0]
);
export var DetectedProfileObjectTypes = list(n0, _DPOTe, 0, [() => DetectedProfileObjectType, 0]);
export var EventTriggerConditions = list(n0, _ETC, 8, () => EventTriggerCondition);
export var EventTriggerDimensions = list(n0, _ETD, 0, () => EventTriggerDimension);
export var EventTriggerValues = 64 | 0;

export var FieldNameList = 64 | 0;

export var ObjectAttributes = list(n0, _OA, 0, () => ObjectAttribute);
export var Objects = list(n0, _O, 8, [() => stringifiedJson, 0]);
export var ObjectTypeKeyList = list(n0, _OTKL, 0, () => ObjectTypeKey);
export var Periods = list(n0, _Pe, 0, () => Period);
export var StandardIdentifierList = 64 | 0;

export var FieldMap = map(n0, _FM, 8, 0, () => ObjectTypeField);
export var KeyMap = map(n0, _KM, 8, 0, () => ObjectTypeKeyList);
export var CreateEventTrigger = op(
  n0,
  _CET,
  {
    [_h]: ["POST", "/domains/{DomainName}/event-triggers/{EventTriggerName}", 200],
  },
  () => CreateEventTriggerRequest,
  () => CreateEventTriggerResponse
);
export var CreateUploadJob = op(
  n0,
  _CUJ,
  {
    [_h]: ["POST", "/domains/{DomainName}/upload-jobs", 200],
  },
  () => CreateUploadJobRequest,
  () => CreateUploadJobResponse
);
export var DetectProfileObjectType = op(
  n0,
  _DPOTet,
  {
    [_h]: ["POST", "/domains/{DomainName}/detect/object-types", 200],
  },
  () => DetectProfileObjectTypeRequest,
  () => DetectProfileObjectTypeResponse
);
export var GetEventTrigger = op(
  n0,
  _GET,
  {
    [_h]: ["GET", "/domains/{DomainName}/event-triggers/{EventTriggerName}", 200],
  },
  () => GetEventTriggerRequest,
  () => GetEventTriggerResponse
);
export var GetProfileObjectType = op(
  n0,
  _GPOT,
  {
    [_h]: ["GET", "/domains/{DomainName}/object-types/{ObjectTypeName}", 200],
  },
  () => GetProfileObjectTypeRequest,
  () => GetProfileObjectTypeResponse
);
export var GetProfileObjectTypeTemplate = op(
  n0,
  _GPOTT,
  {
    [_h]: ["GET", "/templates/{TemplateId}", 200],
  },
  () => GetProfileObjectTypeTemplateRequest,
  () => GetProfileObjectTypeTemplateResponse
);
export var GetUploadJob = op(
  n0,
  _GUJ,
  {
    [_h]: ["GET", "/domains/{DomainName}/upload-jobs/{JobId}", 200],
  },
  () => GetUploadJobRequest,
  () => GetUploadJobResponse
);
export var PutProfileObjectType = op(
  n0,
  _PPOT,
  {
    [_h]: ["PUT", "/domains/{DomainName}/object-types/{ObjectTypeName}", 200],
  },
  () => PutProfileObjectTypeRequest,
  () => PutProfileObjectTypeResponse
);
export var UpdateEventTrigger = op(
  n0,
  _UET,
  {
    [_h]: ["PUT", "/domains/{DomainName}/event-triggers/{EventTriggerName}", 200],
  },
  () => UpdateEventTriggerRequest,
  () => UpdateEventTriggerResponse
);
