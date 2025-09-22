// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  CertificateStateException as __CertificateStateException,
  TransferConflictException as __TransferConflictException,
} from "../models/index";
import {
  _cI,
  _cl,
  _CSE,
  _DCAC,
  _DCACR,
  _DCACRe,
  _er,
  _h,
  _hE,
  _hQ,
  _me,
  _nS,
  _tAA,
  _tCA,
  _TCE,
  _TCR,
  _TCr,
  _TCRr,
  _tM,
  _UC,
  _UCR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CertificateStateException = error(
  n0,
  _CSE,
  {
    [_er]: _cl,
    [_hE]: 406,
  },
  [_me],
  [0],

  __CertificateStateException
);
export var DeleteCACertificateRequest = struct(n0, _DCACR, 0, [_cI], [[0, 1]]);
export var DeleteCACertificateResponse = struct(n0, _DCACRe, 0, [], []);
export var TransferCertificateRequest = struct(
  n0,
  _TCR,
  0,
  [_cI, _tAA, _tM],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _tAA,
      },
    ],
    0,
  ]
);
export var TransferCertificateResponse = struct(n0, _TCRr, 0, [_tCA], [0]);
export var TransferConflictException = error(
  n0,
  _TCE,
  {
    [_er]: _cl,
    [_hE]: 409,
  },
  [_me],
  [0],

  __TransferConflictException
);
export var UpdateCertificateRequest = struct(
  n0,
  _UCR,
  0,
  [_cI, _nS],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nS,
      },
    ],
  ]
);
export var DeleteCACertificate = op(
  n0,
  _DCAC,
  {
    [_h]: ["DELETE", "/cacertificate/{certificateId}", 200],
  },
  () => DeleteCACertificateRequest,
  () => DeleteCACertificateResponse
);
export var TransferCertificate = op(
  n0,
  _TCr,
  {
    [_h]: ["PATCH", "/transfer-certificate/{certificateId}", 200],
  },
  () => TransferCertificateRequest,
  () => TransferCertificateResponse
);
export var UpdateCertificate = op(
  n0,
  _UC,
  {
    [_h]: ["PUT", "/certificates/{certificateId}", 200],
  },
  () => UpdateCertificateRequest,
  () => Unit
);
