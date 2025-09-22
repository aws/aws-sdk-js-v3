// smithy-typescript generated code
import { error, list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _a,
  _ac,
  _ARA,
  _aRA,
  _c,
  _cC,
  _CE,
  _CRP,
  _CRPI,
  _CRPO,
  _CRS,
  _CRSI,
  _CRSO,
  _cT,
  _CTE,
  _CTEI,
  _CTEO,
  _dN,
  _DRA,
  _dRA,
  _e,
  _eD,
  _eI,
  _en,
  _eR,
  _eTv,
  _eTve,
  _h,
  _hE,
  _hQ,
  _i,
  _im,
  _iRA,
  _iT,
  _iTA,
  _iTDS,
  _iTI,
  _iTNT,
  _iTR,
  _iTS,
  _iTT,
  _iTTn,
  _m,
  _n,
  _nTo,
  _qC,
  _r,
  _rA,
  _rAe,
  _rD,
  _rI,
  _rIe,
  _RIU,
  _rIU,
  _RMI,
  _RMIV,
  _rN,
  _rPA,
  _rT,
  _s,
  _sC,
  _SI,
  _SII,
  _SIO,
  _sKKI,
  _so,
  _SQEE,
  _st,
  _t,
  _tAr,
  _TD,
  _tD,
  _ti,
  _tim,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _UAL,
  _UIR,
  _UIRI,
  _UIRO,
  _UR,
  _URI,
  _URII,
  _URIO,
  _URP,
  _URPI,
  _URPO,
  _URR,
  _URRn,
  _URS,
  _URSA,
  _URSI,
  _URSO,
  _UTE,
  _UTEI,
  _UTEO,
  n0,
} from "./schemas_0";
import { ActionsList, ChatChannel, IncidentTemplate, Integrations, NotificationTargetSet } from "./schemas_2_Incident";
import { EventReferenceList, ItemIdentifier, RelatedItem, RelatedItemList } from "./schemas_7_Timeline";

/* eslint no-var: 0 */

export var AddRegionAction = struct(n0, _ARA, 0, [_rN, _sKKI], [0, 0]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI, _rT, _rA],
  [0, 0, 0, 4],

  __ConflictException
);
export var CreateReplicationSetInput = struct(n0, _CRSI, 0, [_r, _cT, _t], [() => RegionMapInput, [0, 4], 128 | 0]);
export var CreateReplicationSetOutput = struct(n0, _CRSO, 0, [_a], [0]);
export var CreateResponsePlanInput = struct(
  n0,
  _CRPI,
  0,
  [_cT, _n, _dN, _iT, _cC, _en, _ac, _t, _i],
  [[0, 4], 0, 0, () => IncidentTemplate, () => ChatChannel, 64 | 0, () => ActionsList, 128 | 0, () => Integrations]
);
export var CreateResponsePlanOutput = struct(n0, _CRPO, 0, [_a], [0]);
export var CreateTimelineEventInput = struct(
  n0,
  _CTEI,
  0,
  [_cT, _iRA, _eTv, _eTve, _eD, _eR],
  [[0, 4], 0, 4, 0, 0, () => EventReferenceList]
);
export var CreateTimelineEventOutput = struct(n0, _CTEO, 0, [_iRA, _eI], [0, 0]);
export var DeleteRegionAction = struct(n0, _DRA, 0, [_rN], [0]);
export var RegionMapInputValue = struct(n0, _RMIV, 0, [_sKKI], [0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var StartIncidentInput = struct(
  n0,
  _SII,
  0,
  [_cT, _rPA, _ti, _im, _tD, _rIe],
  [[0, 4], 0, 0, 1, () => TriggerDetails, () => RelatedItemList]
);
export var StartIncidentOutput = struct(n0, _SIO, 0, [_iRA], [0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rAe, _t], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TriggerDetails = struct(n0, _TD, 0, [_so, _tAr, _tim, _rD], [0, 0, 4, 0]);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rAe, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdateIncidentRecordInput = struct(
  n0,
  _UIRI,
  0,
  [_cT, _a, _ti, _s, _im, _st, _cC, _nTo],
  [[0, 4], 0, 0, 0, 1, 0, () => ChatChannel, () => NotificationTargetSet]
);
export var UpdateIncidentRecordOutput = struct(n0, _UIRO, 0, [], []);
export var UpdateRelatedItemsInput = struct(n0, _URII, 0, [_cT, _iRA, _rIU], [[0, 4], 0, () => RelatedItemsUpdate]);
export var UpdateRelatedItemsOutput = struct(n0, _URIO, 0, [], []);
export var UpdateReplicationSetInput = struct(n0, _URSI, 0, [_a, _ac, _cT], [0, () => UpdateActionList, [0, 4]]);
export var UpdateReplicationSetOutput = struct(n0, _URSO, 0, [], []);
export var UpdateResponsePlanInput = struct(
  n0,
  _URPI,
  0,
  [_cT, _a, _dN, _iTT, _iTI, _iTS, _iTDS, _iTNT, _cC, _en, _ac, _iTTn, _i],
  [
    [0, 4],
    0,
    0,
    0,
    1,
    0,
    0,
    () => NotificationTargetSet,
    () => ChatChannel,
    64 | 0,
    () => ActionsList,
    128 | 0,
    () => Integrations,
  ]
);
export var UpdateResponsePlanOutput = struct(n0, _URPO, 0, [], []);
export var UpdateTimelineEventInput = struct(
  n0,
  _UTEI,
  0,
  [_cT, _iRA, _eI, _eTv, _eTve, _eD, _eR],
  [[0, 4], 0, 0, 4, 0, 0, () => EventReferenceList]
);
export var UpdateTimelineEventOutput = struct(n0, _UTEO, 0, [], []);
export var TagKeyList = 64 | 0;

export var UpdateActionList = list(n0, _UAL, 0, () => UpdateReplicationSetAction);
export var RegionMapInput = map(n0, _RMI, 0, 0, () => RegionMapInputValue);
export var TagMapUpdate = 128 | 0;

export var RelatedItemsUpdate = uni(n0, _RIU, 0, [_iTA, _iTR], [() => RelatedItem, () => ItemIdentifier]);
export var UpdateReplicationSetAction = uni(
  n0,
  _URSA,
  0,
  [_aRA, _dRA],
  [() => AddRegionAction, () => DeleteRegionAction]
);
export var CreateReplicationSet = op(
  n0,
  _CRS,
  {
    [_h]: ["POST", "/createReplicationSet", 201],
  },
  () => CreateReplicationSetInput,
  () => CreateReplicationSetOutput
);
export var CreateResponsePlan = op(
  n0,
  _CRP,
  {
    [_h]: ["POST", "/createResponsePlan", 201],
  },
  () => CreateResponsePlanInput,
  () => CreateResponsePlanOutput
);
export var CreateTimelineEvent = op(
  n0,
  _CTE,
  {
    [_h]: ["POST", "/createTimelineEvent", 201],
  },
  () => CreateTimelineEventInput,
  () => CreateTimelineEventOutput
);
export var StartIncident = op(
  n0,
  _SI,
  {
    [_h]: ["POST", "/startIncident", 200],
  },
  () => StartIncidentInput,
  () => StartIncidentOutput
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 204],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 204],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateIncidentRecord = op(
  n0,
  _UIR,
  {
    [_h]: ["POST", "/updateIncidentRecord", 204],
  },
  () => UpdateIncidentRecordInput,
  () => UpdateIncidentRecordOutput
);
export var UpdateRelatedItems = op(
  n0,
  _URI,
  {
    [_h]: ["POST", "/updateRelatedItems", 204],
  },
  () => UpdateRelatedItemsInput,
  () => UpdateRelatedItemsOutput
);
export var UpdateReplicationSet = op(
  n0,
  _URS,
  {
    [_h]: ["POST", "/updateReplicationSet", 204],
  },
  () => UpdateReplicationSetInput,
  () => UpdateReplicationSetOutput
);
export var UpdateResponsePlan = op(
  n0,
  _URP,
  {
    [_h]: ["POST", "/updateResponsePlan", 204],
  },
  () => UpdateResponsePlanInput,
  () => UpdateResponsePlanOutput
);
export var UpdateTimelineEvent = op(
  n0,
  _UTE,
  {
    [_h]: ["POST", "/updateTimelineEvent", 204],
  },
  () => UpdateTimelineEventInput,
  () => UpdateTimelineEventOutput
);
