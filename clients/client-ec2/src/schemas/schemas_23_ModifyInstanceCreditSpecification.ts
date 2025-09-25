// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CCp,
  _Co,
  _co,
  _CT,
  _DR,
  _eQN,
  _Er,
  _er,
  _ICS,
  _ICSLR,
  _ICSn,
  _ICSR,
  _II,
  _iI,
  _it,
  _Me,
  _me,
  _MICS,
  _MICSR,
  _MICSRo,
  _SICS,
  _SICSI,
  _SICSS,
  _sICSS,
  _UICS,
  _UICSI,
  _UICSIE,
  _UICSS,
  _uICSS,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InstanceCreditSpecificationRequest = struct(n0, _ICSR, 0, [_II, _CCp], [0, 0]);
export var ModifyInstanceCreditSpecificationRequest = struct(
  n0,
  _MICSR,
  0,
  [_DR, _CT, _ICS],
  [
    2,
    0,
    [
      () => InstanceCreditSpecificationListRequest,
      {
        [_xN]: _ICSn,
      },
    ],
  ]
);
export var ModifyInstanceCreditSpecificationResult = struct(
  n0,
  _MICSRo,
  0,
  [_SICS, _UICS],
  [
    [
      () => SuccessfulInstanceCreditSpecificationSet,
      {
        [_eQN]: `SuccessfulInstanceCreditSpecificationSet`,
        [_xN]: _sICSS,
      },
    ],
    [
      () => UnsuccessfulInstanceCreditSpecificationSet,
      {
        [_eQN]: `UnsuccessfulInstanceCreditSpecificationSet`,
        [_xN]: _uICSS,
      },
    ],
  ]
);
export var SuccessfulInstanceCreditSpecificationItem = struct(
  n0,
  _SICSI,
  0,
  [_II],
  [
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
  ]
);
export var UnsuccessfulInstanceCreditSpecificationItem = struct(
  n0,
  _UICSI,
  0,
  [_II, _Er],
  [
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      () => UnsuccessfulInstanceCreditSpecificationItemError,
      {
        [_eQN]: `Error`,
        [_xN]: _er,
      },
    ],
  ]
);
export var UnsuccessfulInstanceCreditSpecificationItemError = struct(
  n0,
  _UICSIE,
  0,
  [_Co, _Me],
  [
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
  ]
);
export var InstanceCreditSpecificationListRequest = list(n0, _ICSLR, 0, [
  () => InstanceCreditSpecificationRequest,
  {
    [_xN]: _it,
  },
]);
export var SuccessfulInstanceCreditSpecificationSet = list(n0, _SICSS, 0, [
  () => SuccessfulInstanceCreditSpecificationItem,
  {
    [_xN]: _it,
  },
]);
export var UnsuccessfulInstanceCreditSpecificationSet = list(n0, _UICSS, 0, [
  () => UnsuccessfulInstanceCreditSpecificationItem,
  {
    [_xN]: _it,
  },
]);
export var ModifyInstanceCreditSpecification = op(
  n0,
  _MICS,
  0,
  () => ModifyInstanceCreditSpecificationRequest,
  () => ModifyInstanceCreditSpecificationResult
);
