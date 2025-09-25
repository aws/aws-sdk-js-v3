// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  InvalidParameterException as __InvalidParameterException,
  UnprocessableEntityException as __UnprocessableEntityException,
} from "../models/index";
import {
  _A,
  _a,
  _acc,
  _ACPD,
  _AL,
  _c,
  _CANG,
  _CANGR,
  _CANGRh,
  _CNNA,
  _CNNAR,
  _CNNARh,
  _CNPA,
  _CNPAR,
  _CNPARh,
  _des,
  _e,
  _ePD,
  _h,
  _hE,
  _IPE,
  _m,
  _nPD,
  _pD,
  _pT,
  _r,
  _rea,
  _res,
  _RS,
  _RSL,
  _rT,
  _sI,
  _sIt,
  _UEE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessCheckPolicyDocument = sim(n0, _ACPD, 0, 8);
export var Access = struct(n0, _A, 0, [_a, _r], [64 | 0, 64 | 0]);
export var CheckAccessNotGrantedRequest = struct(
  n0,
  _CANGR,
  0,
  [_pD, _acc, _pT],
  [[() => AccessCheckPolicyDocument, 0], () => AccessList, 0]
);
export var CheckAccessNotGrantedResponse = struct(n0, _CANGRh, 0, [_res, _m, _rea], [0, 0, () => ReasonSummaryList]);
export var CheckNoNewAccessRequest = struct(
  n0,
  _CNNAR,
  0,
  [_nPD, _ePD, _pT],
  [[() => AccessCheckPolicyDocument, 0], [() => AccessCheckPolicyDocument, 0], 0]
);
export var CheckNoNewAccessResponse = struct(n0, _CNNARh, 0, [_res, _m, _rea], [0, 0, () => ReasonSummaryList]);
export var CheckNoPublicAccessRequest = struct(n0, _CNPAR, 0, [_pD, _rT], [[() => AccessCheckPolicyDocument, 0], 0]);
export var CheckNoPublicAccessResponse = struct(n0, _CNPARh, 0, [_res, _m, _rea], [0, 0, () => ReasonSummaryList]);
export var InvalidParameterException = error(
  n0,
  _IPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidParameterException
);
export var ReasonSummary = struct(n0, _RS, 0, [_des, _sI, _sIt], [0, 1, 0]);
export var UnprocessableEntityException = error(
  n0,
  _UEE,
  {
    [_e]: _c,
    [_hE]: 422,
  },
  [_m],
  [0],

  __UnprocessableEntityException
);
export var AccessList = list(n0, _AL, 0, () => Access);
export var ActionsList = 64 | 0;

export var ReasonSummaryList = list(n0, _RSL, 0, () => ReasonSummary);
export var ResourcesList = 64 | 0;

export var CheckAccessNotGranted = op(
  n0,
  _CANG,
  {
    [_h]: ["POST", "/policy/check-access-not-granted", 200],
  },
  () => CheckAccessNotGrantedRequest,
  () => CheckAccessNotGrantedResponse
);
export var CheckNoNewAccess = op(
  n0,
  _CNNA,
  {
    [_h]: ["POST", "/policy/check-no-new-access", 200],
  },
  () => CheckNoNewAccessRequest,
  () => CheckNoNewAccessResponse
);
export var CheckNoPublicAccess = op(
  n0,
  _CNPA,
  {
    [_h]: ["POST", "/policy/check-no-public-access", 200],
  },
  () => CheckNoPublicAccessRequest,
  () => CheckNoPublicAccessResponse
);
