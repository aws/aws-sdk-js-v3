// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DescriptionTooLongException as __DescriptionTooLongException,
  InvalidRevisionException as __InvalidRevisionException,
  RevisionDoesNotExistException as __RevisionDoesNotExistException,
  RevisionRequiredException as __RevisionRequiredException,
} from "../models/index";
import {
  _aN,
  _ASC,
  _aSC,
  _b,
  _BGAR,
  _BGARI,
  _BGARO,
  _bT,
  _c,
  _cI,
  _co,
  _d,
  _dG,
  _DTLE,
  _eM,
  _er,
  _eTa,
  _fUT,
  _GAR,
  _GARI,
  _GARO,
  _GHL,
  _gHL,
  _GRI,
  _gRI,
  _IRE,
  _k,
  _lUT,
  _m,
  _r,
  _RAR,
  _RARI,
  _RDNEE,
  _re,
  _rep,
  _RI,
  _rIe,
  _RIL,
  _RL,
  _rL,
  _RLL,
  _RRE,
  _RS,
  _rTe,
  _rTev,
  _s,
  _SL,
  _sL,
  _str,
  _ve,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AppSpecContent = struct(n0, _ASC, 0, [_co, _s], [0, 0]);
export var BatchGetApplicationRevisionsInput = struct(n0, _BGARI, 0, [_aN, _r], [0, () => RevisionLocationList]);
export var BatchGetApplicationRevisionsOutput = struct(n0, _BGARO, 0, [_aN, _eM, _r], [0, 0, () => RevisionInfoList]);
export var DescriptionTooLongException = error(
  n0,
  _DTLE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __DescriptionTooLongException
);
export var GenericRevisionInfo = struct(n0, _GRI, 0, [_d, _dG, _fUT, _lUT, _rTe], [0, 64 | 0, 4, 4, 4]);
export var GetApplicationRevisionInput = struct(n0, _GARI, 0, [_aN, _re], [0, () => RevisionLocation]);
export var GetApplicationRevisionOutput = struct(
  n0,
  _GARO,
  0,
  [_aN, _re, _rIe],
  [0, () => RevisionLocation, () => GenericRevisionInfo]
);
export var GitHubLocation = struct(n0, _GHL, 0, [_rep, _cI], [0, 0]);
export var InvalidRevisionException = error(
  n0,
  _IRE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidRevisionException
);
export var RawString = struct(n0, _RS, 0, [_co, _s], [0, 0]);
export var RegisterApplicationRevisionInput = struct(n0, _RARI, 0, [_aN, _d, _re], [0, 0, () => RevisionLocation]);
export var RevisionDoesNotExistException = error(
  n0,
  _RDNEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __RevisionDoesNotExistException
);
export var RevisionInfo = struct(n0, _RI, 0, [_rL, _gRI], [() => RevisionLocation, () => GenericRevisionInfo]);
export var RevisionLocation = struct(
  n0,
  _RL,
  0,
  [_rTev, _sL, _gHL, _str, _aSC],
  [0, () => S3Location, () => GitHubLocation, () => RawString, () => AppSpecContent]
);
export var RevisionRequiredException = error(
  n0,
  _RRE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __RevisionRequiredException
);
export var S3Location = struct(n0, _SL, 0, [_b, _k, _bT, _ve, _eTa], [0, 0, 0, 0, 0]);
export var RevisionInfoList = list(n0, _RIL, 0, () => RevisionInfo);
export var RevisionLocationList = list(n0, _RLL, 0, () => RevisionLocation);
export var BatchGetApplicationRevisions = op(
  n0,
  _BGAR,
  0,
  () => BatchGetApplicationRevisionsInput,
  () => BatchGetApplicationRevisionsOutput
);
export var GetApplicationRevision = op(
  n0,
  _GAR,
  0,
  () => GetApplicationRevisionInput,
  () => GetApplicationRevisionOutput
);
export var RegisterApplicationRevision = op(
  n0,
  _RAR,
  0,
  () => RegisterApplicationRevisionInput,
  () => Unit
);
