// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _DK,
  _DKO,
  _dko,
  _DKR,
  _DKRR,
  _DKRRe,
  _FKR,
  _FKRE,
  _FKREa,
  _h,
  _hQ,
  _KA,
  _KR,
  _M,
  _QDK,
  _QDKA,
  _QDKT,
  _RCMK,
  _RI,
  _SCt,
  _SFe,
  _SKR,
  _SKRE,
  _SKREu,
  _St,
  _UKR,
  _UKRR,
  _UKRRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeKeyRegistrationRequest = struct(
  n0,
  _DKRR,
  0,
  [_AAI, _DKO],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _dko,
      },
    ],
  ]
);
export var DescribeKeyRegistrationResponse = struct(
  n0,
  _DKRRe,
  0,
  [_AAI, _KR, _QDK, _RI, _St],
  [0, () => KeyRegistration, () => QDataKey, 0, 1]
);
export var FailedKeyRegistrationEntry = struct(n0, _FKRE, 0, [_KA, _M, _SCt, _SFe], [0, 0, 1, 2]);
export var QDataKey = struct(n0, _QDK, 0, [_QDKA, _QDKT], [0, 0]);
export var RegisteredCustomerManagedKey = struct(n0, _RCMK, 0, [_KA, _DK], [0, 2]);
export var SuccessfulKeyRegistrationEntry = struct(n0, _SKRE, 0, [_KA, _SCt], [0, 1]);
export var UpdateKeyRegistrationRequest = struct(n0, _UKRR, 0, [_AAI, _KR], [[0, 1], () => KeyRegistration]);
export var UpdateKeyRegistrationResponse = struct(
  n0,
  _UKRRp,
  0,
  [_FKR, _SKR, _RI],
  [() => FailedKeyRegistrationEntries, () => SuccessfulKeyRegistrationEntries, 0]
);
export var FailedKeyRegistrationEntries = list(n0, _FKREa, 0, () => FailedKeyRegistrationEntry);
export var KeyRegistration = list(n0, _KR, 0, () => RegisteredCustomerManagedKey);
export var SuccessfulKeyRegistrationEntries = list(n0, _SKREu, 0, () => SuccessfulKeyRegistrationEntry);
export var DescribeKeyRegistration = op(
  n0,
  _DKR,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/key-registration", 200],
  },
  () => DescribeKeyRegistrationRequest,
  () => DescribeKeyRegistrationResponse
);
export var UpdateKeyRegistration = op(
  n0,
  _UKR,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/key-registration", 200],
  },
  () => UpdateKeyRegistrationRequest,
  () => UpdateKeyRegistrationResponse
);
