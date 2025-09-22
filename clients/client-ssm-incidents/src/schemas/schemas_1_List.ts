// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _af,
  _AVL,
  _b,
  _C,
  _con,
  _cTr,
  _dN,
  _eI,
  _eq,
  _eR,
  _ES,
  _eS,
  _ESL,
  _eTv,
  _eTve,
  _eUT,
  _F,
  _f,
  _fi,
  _FL,
  _FS,
  _FSL,
  _GRP,
  _GRPI,
  _GRPO,
  _h,
  _hQ,
  _id,
  _im,
  _iRA,
  _iRS,
  _IRSL,
  _IRSn,
  _iRSn,
  _iV,
  _k,
  _LIF,
  _LIFI,
  _LIFO,
  _LIR,
  _LIRI,
  _LIRO,
  _lMT,
  _LRI,
  _LRII,
  _LRIO,
  _LRP,
  _LRPI,
  _LRPO,
  _LRS,
  _LRSI,
  _LRSO,
  _LTE,
  _LTEI,
  _LTEO,
  _mR,
  _n,
  _nT,
  _pD,
  _pI,
  _rAe,
  _rIe,
  _RP,
  _rP,
  _RPL,
  _RPS,
  _rPS,
  _RPSL,
  _rRSR,
  _rSA,
  _rTe,
  _sB,
  _sO,
  _st,
  _sV,
  _ti,
  n0,
} from "./schemas_0";
import { IncidentRecordSource } from "./schemas_2_Incident";
import { EventReferenceList, RelatedItemList } from "./schemas_7_Timeline";

/* eslint no-var: 0 */

export var EventSummary = struct(
  n0,
  _ES,
  0,
  [_iRA, _eI, _eTv, _eUT, _eTve, _eR],
  [0, 0, 4, 4, 0, () => EventReferenceList]
);
export var Filter = struct(n0, _F, 0, [_k, _con], [0, () => Condition]);
export var FindingSummary = struct(n0, _FS, 0, [_id, _lMT], [0, 4]);
export var GetResourcePoliciesInput = struct(
  n0,
  _GRPI,
  0,
  [_rAe, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _rAe,
      },
    ],
    1,
    0,
  ]
);
export var GetResourcePoliciesOutput = struct(n0, _GRPO, 0, [_rP, _nT], [() => ResourcePolicyList, 0]);
export var IncidentRecordSummary = struct(
  n0,
  _IRSn,
  0,
  [_a, _ti, _st, _im, _cTr, _rTe, _iRS],
  [0, 0, 0, 1, 4, 4, () => IncidentRecordSource]
);
export var ListIncidentFindingsInput = struct(n0, _LIFI, 0, [_iRA, _mR, _nT], [0, 1, 0]);
export var ListIncidentFindingsOutput = struct(n0, _LIFO, 0, [_f, _nT], [() => FindingSummaryList, 0]);
export var ListIncidentRecordsInput = struct(n0, _LIRI, 0, [_fi, _mR, _nT], [() => FilterList, 1, 0]);
export var ListIncidentRecordsOutput = struct(n0, _LIRO, 0, [_iRSn, _nT], [() => IncidentRecordSummaryList, 0]);
export var ListRelatedItemsInput = struct(n0, _LRII, 0, [_iRA, _mR, _nT], [0, 1, 0]);
export var ListRelatedItemsOutput = struct(n0, _LRIO, 0, [_rIe, _nT], [() => RelatedItemList, 0]);
export var ListReplicationSetsInput = struct(n0, _LRSI, 0, [_mR, _nT], [1, 0]);
export var ListReplicationSetsOutput = struct(n0, _LRSO, 0, [_rSA, _nT], [64 | 0, 0]);
export var ListResponsePlansInput = struct(n0, _LRPI, 0, [_mR, _nT], [1, 0]);
export var ListResponsePlansOutput = struct(n0, _LRPO, 0, [_rPS, _nT], [() => ResponsePlanSummaryList, 0]);
export var ListTimelineEventsInput = struct(
  n0,
  _LTEI,
  0,
  [_iRA, _fi, _sB, _sO, _mR, _nT],
  [0, () => FilterList, 0, 0, 1, 0]
);
export var ListTimelineEventsOutput = struct(n0, _LTEO, 0, [_eS, _nT], [() => EventSummaryList, 0]);
export var ResourcePolicy = struct(n0, _RP, 0, [_pD, _pI, _rRSR], [0, 0, 0]);
export var ResponsePlanSummary = struct(n0, _RPS, 0, [_a, _n, _dN], [0, 0, 0]);
export var EventSummaryList = list(n0, _ESL, 0, () => EventSummary);
export var FilterList = list(n0, _FL, 0, () => Filter);
export var FindingSummaryList = list(n0, _FSL, 0, () => FindingSummary);
export var IncidentRecordSummaryList = list(n0, _IRSL, 0, () => IncidentRecordSummary);
export var IntegerList = 64 | 1;

export var ReplicationSetArnList = 64 | 0;

export var ResourcePolicyList = list(n0, _RPL, 0, () => ResourcePolicy);
export var ResponsePlanSummaryList = list(n0, _RPSL, 0, () => ResponsePlanSummary);
export var StringList = 64 | 0;

export var AttributeValueList = uni(n0, _AVL, 0, [_sV, _iV], [64 | 0, 64 | 1]);
export var Condition = uni(n0, _C, 0, [_b, _af, _eq], [4, 4, () => AttributeValueList]);
export var GetResourcePolicies = op(
  n0,
  _GRP,
  {
    [_h]: ["POST", "/getResourcePolicies", 200],
  },
  () => GetResourcePoliciesInput,
  () => GetResourcePoliciesOutput
);
export var ListIncidentFindings = op(
  n0,
  _LIF,
  {
    [_h]: ["POST", "/listIncidentFindings", 200],
  },
  () => ListIncidentFindingsInput,
  () => ListIncidentFindingsOutput
);
export var ListIncidentRecords = op(
  n0,
  _LIR,
  {
    [_h]: ["POST", "/listIncidentRecords", 200],
  },
  () => ListIncidentRecordsInput,
  () => ListIncidentRecordsOutput
);
export var ListRelatedItems = op(
  n0,
  _LRI,
  {
    [_h]: ["POST", "/listRelatedItems", 200],
  },
  () => ListRelatedItemsInput,
  () => ListRelatedItemsOutput
);
export var ListReplicationSets = op(
  n0,
  _LRS,
  {
    [_h]: ["POST", "/listReplicationSets", 200],
  },
  () => ListReplicationSetsInput,
  () => ListReplicationSetsOutput
);
export var ListResponsePlans = op(
  n0,
  _LRP,
  {
    [_h]: ["POST", "/listResponsePlans", 200],
  },
  () => ListResponsePlansInput,
  () => ListResponsePlansOutput
);
export var ListTimelineEvents = op(
  n0,
  _LTE,
  {
    [_h]: ["POST", "/listTimelineEvents", 200],
  },
  () => ListTimelineEventsInput,
  () => ListTimelineEventsOutput
);
