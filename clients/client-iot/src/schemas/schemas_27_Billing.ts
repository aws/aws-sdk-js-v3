// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ATTBG,
  _ATTBGR,
  _ATTBGRd,
  _bG,
  _bGA,
  _bGD,
  _bGI,
  _bGN,
  _BGNAAL,
  _BGP,
  _bGP,
  _CBG,
  _CBGR,
  _CBGRr,
  _DBG,
  _DBGR,
  _DBGRe,
  _eV,
  _h,
  _hQ,
  _LBG,
  _LBGR,
  _LBGRi,
  _LTIBG,
  _LTIBGR,
  _LTIBGRi,
  _mR,
  _nPF,
  _nT,
  _RTFBG,
  _RTFBGR,
  _RTFBGRe,
  _tA,
  _tag,
  _th,
  _tN,
  _UBG,
  _UBGR,
  _UBGRp,
  _ve,
  n0,
  TagList,
} from "./schemas_0";
import { GroupNameAndArn } from "./schemas_42_Thing";

/* eslint no-var: 0 */

export var AddThingToBillingGroupRequest = struct(n0, _ATTBGR, 0, [_bGN, _bGA, _tN, _tA], [0, 0, 0, 0]);
export var AddThingToBillingGroupResponse = struct(n0, _ATTBGRd, 0, [], []);
export var BillingGroupProperties = struct(n0, _BGP, 0, [_bGD], [0]);
export var CreateBillingGroupRequest = struct(
  n0,
  _CBGR,
  0,
  [_bGN, _bGP, _tag],
  [[0, 1], () => BillingGroupProperties, () => TagList]
);
export var CreateBillingGroupResponse = struct(n0, _CBGRr, 0, [_bGN, _bGA, _bGI], [0, 0, 0]);
export var DeleteBillingGroupRequest = struct(
  n0,
  _DBGR,
  0,
  [_bGN, _eV],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _eV,
      },
    ],
  ]
);
export var DeleteBillingGroupResponse = struct(n0, _DBGRe, 0, [], []);
export var ListBillingGroupsRequest = struct(
  n0,
  _LBGR,
  0,
  [_nT, _mR, _nPF],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nPF,
      },
    ],
  ]
);
export var ListBillingGroupsResponse = struct(n0, _LBGRi, 0, [_bG, _nT], [() => BillingGroupNameAndArnList, 0]);
export var ListThingsInBillingGroupRequest = struct(
  n0,
  _LTIBGR,
  0,
  [_bGN, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListThingsInBillingGroupResponse = struct(n0, _LTIBGRi, 0, [_th, _nT], [64 | 0, 0]);
export var RemoveThingFromBillingGroupRequest = struct(n0, _RTFBGR, 0, [_bGN, _bGA, _tN, _tA], [0, 0, 0, 0]);
export var RemoveThingFromBillingGroupResponse = struct(n0, _RTFBGRe, 0, [], []);
export var UpdateBillingGroupRequest = struct(
  n0,
  _UBGR,
  0,
  [_bGN, _bGP, _eV],
  [[0, 1], () => BillingGroupProperties, 1]
);
export var UpdateBillingGroupResponse = struct(n0, _UBGRp, 0, [_ve], [1]);
export var BillingGroupNameAndArnList = list(n0, _BGNAAL, 0, () => GroupNameAndArn);
export var AddThingToBillingGroup = op(
  n0,
  _ATTBG,
  {
    [_h]: ["PUT", "/billing-groups/addThingToBillingGroup", 200],
  },
  () => AddThingToBillingGroupRequest,
  () => AddThingToBillingGroupResponse
);
export var CreateBillingGroup = op(
  n0,
  _CBG,
  {
    [_h]: ["POST", "/billing-groups/{billingGroupName}", 200],
  },
  () => CreateBillingGroupRequest,
  () => CreateBillingGroupResponse
);
export var DeleteBillingGroup = op(
  n0,
  _DBG,
  {
    [_h]: ["DELETE", "/billing-groups/{billingGroupName}", 200],
  },
  () => DeleteBillingGroupRequest,
  () => DeleteBillingGroupResponse
);
export var ListBillingGroups = op(
  n0,
  _LBG,
  {
    [_h]: ["GET", "/billing-groups", 200],
  },
  () => ListBillingGroupsRequest,
  () => ListBillingGroupsResponse
);
export var ListThingsInBillingGroup = op(
  n0,
  _LTIBG,
  {
    [_h]: ["GET", "/billing-groups/{billingGroupName}/things", 200],
  },
  () => ListThingsInBillingGroupRequest,
  () => ListThingsInBillingGroupResponse
);
export var RemoveThingFromBillingGroup = op(
  n0,
  _RTFBG,
  {
    [_h]: ["PUT", "/billing-groups/removeThingFromBillingGroup", 200],
  },
  () => RemoveThingFromBillingGroupRequest,
  () => RemoveThingFromBillingGroupResponse
);
export var UpdateBillingGroup = op(
  n0,
  _UBG,
  {
    [_h]: ["PATCH", "/billing-groups/{billingGroupName}", 200],
  },
  () => UpdateBillingGroupRequest,
  () => UpdateBillingGroupResponse
);
