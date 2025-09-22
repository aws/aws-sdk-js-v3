// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CodeBuildNotInServiceRegionException as __CodeBuildNotInServiceRegionException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ResourceTypeNotSupportedException as __ResourceTypeNotSupportedException,
  TooManyApplicationsException as __TooManyApplicationsException,
  TooManyApplicationVersionsException as __TooManyApplicationVersionsException,
  TooManyTagsException as __TooManyTagsException,
} from "../models/index";
import {
  _ACA,
  _AN,
  _ANr,
  _aQE,
  _BC,
  _c,
  _CAM,
  _CAr,
  _CAV,
  _CAVM,
  _CBNISRE,
  _CBSR,
  _CTo,
  _D,
  _e,
  _hE,
  _I,
  _K,
  _LTFR,
  _LTFRM,
  _m,
  _Pr,
  _RAe,
  _RLC,
  _RNFE,
  _RT,
  _RTDM,
  _RTNSE,
  _SB,
  _SBI,
  _T,
  _Ta,
  _TIM,
  _TL,
  _TMAE,
  _TMAVE,
  _TMTE,
  _TTA,
  _TTR,
  _UTFR,
  _UTFRM,
  _Va,
  _VL,
  n0,
  Unit,
} from "./schemas_0";
import { ApplicationDescriptionMessage, ApplicationResourceLifecycleConfig } from "./schemas_3_Application";
import { ApplicationVersionDescriptionMessage, S3Location, SourceBuildInformation } from "./schemas_9_Version";

/* eslint no-var: 0 */

export var BuildConfiguration = struct(n0, _BC, 0, [_ANr, _CBSR, _CTo, _I, _TIM], [0, 0, 0, 0, 1]);
export var CodeBuildNotInServiceRegionException = error(
  n0,
  _CBNISRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CodeBuildNotInServiceRegionException`, 400],
  },
  [_m],
  [0],

  __CodeBuildNotInServiceRegionException
);
export var CreateApplicationMessage = struct(
  n0,
  _CAM,
  0,
  [_AN, _D, _RLC, _T],
  [0, 0, () => ApplicationResourceLifecycleConfig, () => Tags]
);
export var CreateApplicationVersionMessage = struct(
  n0,
  _CAVM,
  0,
  [_AN, _VL, _D, _SBI, _SB, _BC, _ACA, _Pr, _T],
  [0, 0, 0, () => SourceBuildInformation, () => S3Location, () => BuildConfiguration, 2, 2, () => Tags]
);
export var ListTagsForResourceMessage = struct(n0, _LTFRM, 0, [_RAe], [0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ResourceNotFoundException`, 400],
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var ResourceTagsDescriptionMessage = struct(n0, _RTDM, 0, [_RAe, _RT], [0, () => TagList]);
export var ResourceTypeNotSupportedException = error(
  n0,
  _RTNSE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ResourceTypeNotSupportedException`, 400],
  },
  [_m],
  [0],

  __ResourceTypeNotSupportedException
);
export var Tag = struct(n0, _Ta, 0, [_K, _Va], [0, 0]);
export var TooManyApplicationsException = error(
  n0,
  _TMAE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyApplicationsException`, 400],
  },
  [_m],
  [0],

  __TooManyApplicationsException
);
export var TooManyApplicationVersionsException = error(
  n0,
  _TMAVE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TooManyApplicationVersionsException
);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyTagsException`, 400],
  },
  [_m],
  [0],

  __TooManyTagsException
);
export var UpdateTagsForResourceMessage = struct(n0, _UTFRM, 0, [_RAe, _TTA, _TTR], [0, () => TagList, 64 | 0]);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var Tags = list(n0, _T, 0, () => Tag);
export var CreateApplication = op(
  n0,
  _CAr,
  0,
  () => CreateApplicationMessage,
  () => ApplicationDescriptionMessage
);
export var CreateApplicationVersion = op(
  n0,
  _CAV,
  0,
  () => CreateApplicationVersionMessage,
  () => ApplicationVersionDescriptionMessage
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceMessage,
  () => ResourceTagsDescriptionMessage
);
export var UpdateTagsForResource = op(
  n0,
  _UTFR,
  0,
  () => UpdateTagsForResourceMessage,
  () => Unit
);
