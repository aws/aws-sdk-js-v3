// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CC,
  _cCI,
  _CCl,
  _cD,
  _d,
  _eD,
  _GCC,
  _GCCe,
  _GCCet,
  _GCCR,
  _GCCRe,
  _GCCRet,
  _hQ,
  _ht,
  _it,
  _ite,
  _jN,
  _li,
  _LOCC,
  _p,
  _pEC,
  _pO,
  _t,
  _UCC,
  _UCCR,
  ListOfPatchOperation,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClientCertificate = struct(n0, _CC, 0, [_cCI, _d, _pEC, _cD, _eD, _t], [0, 0, 0, 4, 4, 128 | 0]);
export var ClientCertificates = struct(
  n0,
  _CCl,
  0,
  [_it, _p],
  [
    [
      () => ListOfClientCertificate,
      {
        [_jN]: _ite,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
  ]
);
export var GenerateClientCertificateRequest = struct(n0, _GCCR, 0, [_d, _t], [0, 128 | 0]);
export var GetClientCertificateRequest = struct(n0, _GCCRe, 0, [_cCI], [[0, 1]]);
export var GetClientCertificatesRequest = struct(
  n0,
  _GCCRet,
  0,
  [_p, _li],
  [
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
  ]
);
export var UpdateClientCertificateRequest = struct(n0, _UCCR, 0, [_cCI, _pO], [[0, 1], () => ListOfPatchOperation]);
export var ListOfClientCertificate = list(n0, _LOCC, 0, () => ClientCertificate);
export var GenerateClientCertificate = op(
  n0,
  _GCC,
  {
    [_ht]: ["POST", "/clientcertificates", 201],
  },
  () => GenerateClientCertificateRequest,
  () => ClientCertificate
);
export var GetClientCertificate = op(
  n0,
  _GCCe,
  {
    [_ht]: ["GET", "/clientcertificates/{clientCertificateId}", 200],
  },
  () => GetClientCertificateRequest,
  () => ClientCertificate
);
export var GetClientCertificates = op(
  n0,
  _GCCet,
  {
    [_ht]: ["GET", "/clientcertificates", 200],
  },
  () => GetClientCertificatesRequest,
  () => ClientCertificates
);
export var UpdateClientCertificate = op(
  n0,
  _UCC,
  {
    [_ht]: ["PATCH", "/clientcertificates/{clientCertificateId}", 200],
  },
  () => UpdateClientCertificateRequest,
  () => ClientCertificate
);
