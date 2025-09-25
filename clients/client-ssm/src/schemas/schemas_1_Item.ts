// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  OpsItemAlreadyExistsException as __OpsItemAlreadyExistsException,
  OpsItemLimitExceededException as __OpsItemLimitExceededException,
  OpsItemRelatedItemAlreadyExistsException as __OpsItemRelatedItemAlreadyExistsException,
  ResourcePolicyLimitExceededException as __ResourcePolicyLimitExceededException,
} from "../models/index";
import {
  _AEP,
  _AETc,
  _AI,
  _AIss,
  _AOIRI,
  _AOIRIR,
  _AOIRIRs,
  _aQE,
  _AST,
  _AT,
  _Aut,
  _c,
  _Ca,
  _CBr,
  _COI,
  _COIR,
  _COIRr,
  _Cou,
  _CT,
  _D,
  _Det,
  _DPGS,
  _DPGSR,
  _DPGSRe,
  _DTe,
  _e,
  _EAn,
  _EIv,
  _EPI,
  _EPx,
  _Fi,
  _GEP,
  _GEPR,
  _GEPRe,
  _In,
  _IWASU,
  _IWCNCP,
  _IWFP,
  _IWIOP,
  _IWIP,
  _IWIPRP,
  _IWIRP,
  _IWMP,
  _IWNAP,
  _IWONCP,
  _IWSNCP,
  _IWUNAP,
  _K,
  _Li,
  _LOIE,
  _LOIER,
  _LOIERi,
  _LTi,
  _M,
  _MR,
  _No,
  _NT,
  _OD,
  _ODTD,
  _OIA,
  _OIAEE,
  _OIEF,
  _OIEFp,
  _OIES,
  _OIESp,
  _OII,
  _OILEE,
  _OIRIAEE,
  _OIT,
  _Ope,
  _PET,
  _PG,
  _PH,
  _PI,
  _Pol,
  _Pr,
  _PRP,
  _PRPR,
  _PRPRu,
  _PST,
  _RA,
  _Re,
  _ROI,
  _RPLEE,
  _RT,
  _RTes,
  _RU,
  _Se,
  _SM,
  _Sou,
  _SP,
  _St,
  _Summ,
  _T,
  _TAo,
  _Ti,
  _TP,
  _TPar,
  _TPL,
  _TT,
  _UOI,
  _UOIR,
  _UOIRp,
  _Va,
  n0,
  TagList,
} from "./schemas_0";
import { OpsItemIdentity } from "./schemas_43_Item";
import { OpsItemNotifications, OpsItemOperationalData, RelatedOpsItems } from "./schemas_47_Ops";

/* eslint no-var: 0 */

export var AssociateOpsItemRelatedItemRequest = struct(n0, _AOIRIR, 0, [_OII, _AT, _RT, _RU], [0, 0, 0, 0]);
export var AssociateOpsItemRelatedItemResponse = struct(n0, _AOIRIRs, 0, [_AIss], [0]);
export var AutomationExecutionPreview = struct(
  n0,
  _AEP,
  0,
  [_SP, _Re, _TP, _TAo],
  [128 | 1, 64 | 0, () => TargetPreviewList, 1]
);
export var CreateOpsItemRequest = struct(
  n0,
  _COIR,
  0,
  [_D, _OIT, _OD, _No, _Pr, _ROI, _Sou, _Ti, _T, _Ca, _Se, _AST, _AETc, _PST, _PET, _AI],
  [
    0,
    0,
    () => OpsItemOperationalData,
    () => OpsItemNotifications,
    1,
    () => RelatedOpsItems,
    0,
    0,
    () => TagList,
    0,
    0,
    4,
    4,
    4,
    4,
    0,
  ]
);
export var CreateOpsItemResponse = struct(n0, _COIRr, 0, [_OII, _OIA], [0, 0]);
export var DescribePatchGroupStateRequest = struct(n0, _DPGSR, 0, [_PG], [0]);
export var DescribePatchGroupStateResult = struct(
  n0,
  _DPGSRe,
  0,
  [_In, _IWIP, _IWIOP, _IWIPRP, _IWIRP, _IWMP, _IWFP, _IWNAP, _IWUNAP, _IWCNCP, _IWSNCP, _IWONCP, _IWASU],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
);
export var GetExecutionPreviewRequest = struct(n0, _GEPR, 0, [_EPI], [0]);
export var GetExecutionPreviewResponse = struct(
  n0,
  _GEPRe,
  0,
  [_EPI, _EAn, _St, _SM, _EPx],
  [0, 4, 0, 0, () => ExecutionPreview]
);
export var ListOpsItemEventsRequest = struct(n0, _LOIER, 0, [_Fi, _MR, _NT], [() => OpsItemEventFilters, 1, 0]);
export var ListOpsItemEventsResponse = struct(n0, _LOIERi, 0, [_NT, _Summ], [0, () => OpsItemEventSummaries]);
export var OpsItemAlreadyExistsException = error(
  n0,
  _OIAEE,
  {
    [_e]: _c,
    [_aQE]: [`OpsItemAlreadyExistsException`, 400],
  },
  [_M, _OII],
  [0, 0],

  __OpsItemAlreadyExistsException
);
export var OpsItemEventFilter = struct(n0, _OIEF, 0, [_K, _Va, _Ope], [0, 64 | 0, 0]);
export var OpsItemEventSummary = struct(
  n0,
  _OIES,
  0,
  [_OII, _EIv, _Sou, _DTe, _Det, _CBr, _CT],
  [0, 0, 0, 0, 0, () => OpsItemIdentity, 4]
);
export var OpsItemLimitExceededException = error(
  n0,
  _OILEE,
  {
    [_e]: _c,
    [_aQE]: [`OpsItemLimitExceededException`, 400],
  },
  [_RTes, _Li, _LTi, _M],
  [64 | 0, 1, 0, 0],

  __OpsItemLimitExceededException
);
export var OpsItemRelatedItemAlreadyExistsException = error(
  n0,
  _OIRIAEE,
  {
    [_e]: _c,
    [_aQE]: [`OpsItemRelatedItemAlreadyExistsException`, 400],
  },
  [_M, _RU, _OII],
  [0, 0, 0],

  __OpsItemRelatedItemAlreadyExistsException
);
export var PutResourcePolicyRequest = struct(n0, _PRPR, 0, [_RA, _Pol, _PI, _PH], [0, 0, 0, 0]);
export var PutResourcePolicyResponse = struct(n0, _PRPRu, 0, [_PI, _PH], [0, 0]);
export var ResourcePolicyLimitExceededException = error(
  n0,
  _RPLEE,
  {
    [_e]: _c,
    [_aQE]: [`ResourcePolicyLimitExceededException`, 400],
  },
  [_Li, _LTi, _M],
  [1, 0, 0],

  __ResourcePolicyLimitExceededException
);
export var TargetPreview = struct(n0, _TPar, 0, [_Cou, _TT], [1, 0]);
export var UpdateOpsItemRequest = struct(
  n0,
  _UOIR,
  0,
  [_D, _OD, _ODTD, _No, _Pr, _ROI, _St, _OII, _Ti, _Ca, _Se, _AST, _AETc, _PST, _PET, _OIA],
  [
    0,
    () => OpsItemOperationalData,
    64 | 0,
    () => OpsItemNotifications,
    1,
    () => RelatedOpsItems,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    4,
    4,
    0,
  ]
);
export var UpdateOpsItemResponse = struct(n0, _UOIRp, 0, [], []);
export var OpsItemEventFilters = list(n0, _OIEFp, 0, () => OpsItemEventFilter);
export var OpsItemEventFilterValues = 64 | 0;

export var OpsItemEventSummaries = list(n0, _OIESp, 0, () => OpsItemEventSummary);
export var OpsItemOpsDataKeysList = 64 | 0;

export var RegionList = 64 | 0;

export var TargetPreviewList = list(n0, _TPL, 0, () => TargetPreview);
export var StepPreviewMap = 128 | 1;

export var ExecutionPreview = uni(n0, _EPx, 0, [_Aut], [() => AutomationExecutionPreview]);
export var AssociateOpsItemRelatedItem = op(
  n0,
  _AOIRI,
  0,
  () => AssociateOpsItemRelatedItemRequest,
  () => AssociateOpsItemRelatedItemResponse
);
export var CreateOpsItem = op(
  n0,
  _COI,
  0,
  () => CreateOpsItemRequest,
  () => CreateOpsItemResponse
);
export var DescribePatchGroupState = op(
  n0,
  _DPGS,
  0,
  () => DescribePatchGroupStateRequest,
  () => DescribePatchGroupStateResult
);
export var GetExecutionPreview = op(
  n0,
  _GEP,
  0,
  () => GetExecutionPreviewRequest,
  () => GetExecutionPreviewResponse
);
export var ListOpsItemEvents = op(
  n0,
  _LOIE,
  0,
  () => ListOpsItemEventsRequest,
  () => ListOpsItemEventsResponse
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  0,
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResponse
);
export var UpdateOpsItem = op(
  n0,
  _UOI,
  0,
  () => UpdateOpsItemRequest,
  () => UpdateOpsItemResponse
);
