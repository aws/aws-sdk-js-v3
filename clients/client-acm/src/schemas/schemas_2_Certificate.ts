// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  InvalidParameterException as __InvalidParameterException,
  InvalidTagException as __InvalidTagException,
  TagPolicyException as __TagPolicyException,
  TooManyTagsException as __TooManyTagsException,
} from "../models/index";
import {
  _C,
  _c,
  _CA,
  _CC,
  _e,
  _IC,
  _ICR,
  _ICRm,
  _IPE,
  _ITE,
  _K,
  _LTFC,
  _LTFCR,
  _LTFCRi,
  _m,
  _PK,
  _PKB,
  _T,
  _Ta,
  _TL,
  _TMTE,
  _TPE,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var PrivateKeyBlob = sim(n0, _PKB, 21, 8);
export var ImportCertificateRequest = struct(
  n0,
  _ICR,
  0,
  [_CA, _C, _PK, _CC, _T],
  [0, 21, [() => PrivateKeyBlob, 0], 21, () => TagList]
);
export var ImportCertificateResponse = struct(n0, _ICRm, 0, [_CA], [0]);
export var InvalidParameterException = error(
  n0,
  _IPE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidParameterException
);
export var InvalidTagException = error(
  n0,
  _ITE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidTagException
);
export var ListTagsForCertificateRequest = struct(n0, _LTFCR, 0, [_CA], [0]);
export var ListTagsForCertificateResponse = struct(n0, _LTFCRi, 0, [_T], [() => TagList]);
export var Tag = struct(n0, _Ta, 0, [_K, _V], [0, 0]);
export var TagPolicyException = error(
  n0,
  _TPE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TagPolicyException
);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TooManyTagsException
);
export var TagList = list(n0, _TL, 0, () => Tag);
export var ImportCertificate = op(
  n0,
  _IC,
  0,
  () => ImportCertificateRequest,
  () => ImportCertificateResponse
);
export var ListTagsForCertificate = op(
  n0,
  _LTFC,
  0,
  () => ListTagsForCertificateRequest,
  () => ListTagsForCertificateResponse
);
