// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CCp,
  _cCp,
  _DR,
  _eQN,
  _GDCS,
  _GDCSR,
  _GDCSRe,
  _IF,
  _iF,
  _IFCS,
  _iFCS,
  _MDCS,
  _MDCSR,
  _MDCSRo,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetDefaultCreditSpecificationRequest = struct(n0, _GDCSR, 0, [_DR, _IF], [2, 0]);
export var GetDefaultCreditSpecificationResult = struct(
  n0,
  _GDCSRe,
  0,
  [_IFCS],
  [
    [
      () => InstanceFamilyCreditSpecification,
      {
        [_eQN]: `InstanceFamilyCreditSpecification`,
        [_xN]: _iFCS,
      },
    ],
  ]
);
export var InstanceFamilyCreditSpecification = struct(
  n0,
  _IFCS,
  0,
  [_IF, _CCp],
  [
    [
      0,
      {
        [_eQN]: `InstanceFamily`,
        [_xN]: _iF,
      },
    ],
    [
      0,
      {
        [_eQN]: `CpuCredits`,
        [_xN]: _cCp,
      },
    ],
  ]
);
export var ModifyDefaultCreditSpecificationRequest = struct(n0, _MDCSR, 0, [_DR, _IF, _CCp], [2, 0, 0]);
export var ModifyDefaultCreditSpecificationResult = struct(
  n0,
  _MDCSRo,
  0,
  [_IFCS],
  [
    [
      () => InstanceFamilyCreditSpecification,
      {
        [_eQN]: `InstanceFamilyCreditSpecification`,
        [_xN]: _iFCS,
      },
    ],
  ]
);
export var GetDefaultCreditSpecification = op(
  n0,
  _GDCS,
  0,
  () => GetDefaultCreditSpecificationRequest,
  () => GetDefaultCreditSpecificationResult
);
export var ModifyDefaultCreditSpecification = op(
  n0,
  _MDCS,
  0,
  () => ModifyDefaultCreditSpecificationRequest,
  () => ModifyDefaultCreditSpecificationResult
);
