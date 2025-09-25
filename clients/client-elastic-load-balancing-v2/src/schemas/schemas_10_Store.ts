// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidRevocationContentException as __InvalidRevocationContentException,
  RevocationContentNotFoundException as __RevocationContentNotFoundException,
  RevocationIdNotFoundException as __RevocationIdNotFoundException,
  TooManyTrustStoreRevocationEntriesException as __TooManyTrustStoreRevocationEntriesException,
} from "../models/index";
import {
  _aQE,
  _ATSR,
  _ATSRI,
  _ATSRO,
  _c,
  _e,
  _GTSRC,
  _GTSRCI,
  _GTSRCO,
  _hE,
  _IRCE,
  _Lo,
  _M,
  _NORE,
  _RCe,
  _RCev,
  _RCNFE,
  _RI,
  _RIe,
  _RINFE,
  _RT,
  _RTSR,
  _RTSRI,
  _RTSRO,
  _SB,
  _SK,
  _SOV,
  _TMTSREE,
  _TSA,
  _TSR,
  _TSRr,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddTrustStoreRevocationsInput = struct(n0, _ATSRI, 0, [_TSA, _RCe], [0, () => RevocationContents]);
export var AddTrustStoreRevocationsOutput = struct(n0, _ATSRO, 0, [_TSR], [() => TrustStoreRevocations]);
export var GetTrustStoreRevocationContentInput = struct(n0, _GTSRCI, 0, [_TSA, _RI], [0, 1]);
export var GetTrustStoreRevocationContentOutput = struct(n0, _GTSRCO, 0, [_Lo], [0]);
export var InvalidRevocationContentException = error(
  n0,
  _IRCE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidRevocationContent`, 400],
  },
  [_M],
  [0],

  __InvalidRevocationContentException
);
export var RemoveTrustStoreRevocationsInput = struct(n0, _RTSRI, 0, [_TSA, _RIe], [0, 64 | 1]);
export var RemoveTrustStoreRevocationsOutput = struct(n0, _RTSRO, 0, [], []);
export var RevocationContent = struct(n0, _RCev, 0, [_SB, _SK, _SOV, _RT], [0, 0, 0, 0]);
export var RevocationContentNotFoundException = error(
  n0,
  _RCNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`RevocationContentNotFound`, 400],
  },
  [_M],
  [0],

  __RevocationContentNotFoundException
);
export var RevocationIdNotFoundException = error(
  n0,
  _RINFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`RevocationIdNotFound`, 400],
  },
  [_M],
  [0],

  __RevocationIdNotFoundException
);
export var TooManyTrustStoreRevocationEntriesException = error(
  n0,
  _TMTSREE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyTrustStoreRevocationEntries`, 400],
  },
  [_M],
  [0],

  __TooManyTrustStoreRevocationEntriesException
);
export var TrustStoreRevocation = struct(n0, _TSRr, 0, [_TSA, _RI, _RT, _NORE], [0, 1, 0, 1]);
export var RevocationContents = list(n0, _RCe, 0, () => RevocationContent);
export var RevocationIds = 64 | 1;

export var TrustStoreRevocations = list(n0, _TSR, 0, () => TrustStoreRevocation);
export var AddTrustStoreRevocations = op(
  n0,
  _ATSR,
  0,
  () => AddTrustStoreRevocationsInput,
  () => AddTrustStoreRevocationsOutput
);
export var GetTrustStoreRevocationContent = op(
  n0,
  _GTSRC,
  0,
  () => GetTrustStoreRevocationContentInput,
  () => GetTrustStoreRevocationContentOutput
);
export var RemoveTrustStoreRevocations = op(
  n0,
  _RTSR,
  0,
  () => RemoveTrustStoreRevocationsInput,
  () => RemoveTrustStoreRevocationsOutput
);
