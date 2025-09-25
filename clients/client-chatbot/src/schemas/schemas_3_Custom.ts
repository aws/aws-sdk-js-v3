// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InternalServiceError as __InternalServiceError,
  ServiceUnavailableException as __ServiceUnavailableException,
  TooManyTagsException as __TooManyTagsException,
  UnauthorizedException as __UnauthorizedException,
} from "../models/index";
import {
  _A,
  _AN,
  _ANc,
  _ATC,
  _ATCR,
  _ATCRs,
  _BT,
  _C,
  _c,
  _CA,
  _CAA,
  _CAAC,
  _CAACL,
  _CAAL,
  _CAAu,
  _CAD,
  _CAu,
  _CC,
  _CCAR,
  _CCAr,
  _CCARr,
  _CTl,
  _CTo,
  _D,
  _DCA,
  _DCAR,
  _DCARe,
  _DFC,
  _DFCR,
  _DFCRi,
  _e,
  _GCA,
  _GCAR,
  _GCARe,
  _h,
  _hE,
  _ISE,
  _LCA,
  _LCAR,
  _LCARi,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _m,
  _MR,
  _NT,
  _NTe,
  _O,
  _R,
  _RARN,
  _s,
  _SUE,
  _T,
  _TKa,
  _TL,
  _TMTE,
  _TR,
  _TRR,
  _TRRa,
  _UCA,
  _UCAR,
  _UCARp,
  _UE,
  _UR,
  _URR,
  _URRn,
  _V,
  _Va,
  _VN,
  n0,
  Tag,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateToConfigurationRequest = struct(n0, _ATCR, 0, [_R, _CC], [0, 0]);
export var AssociateToConfigurationResult = struct(n0, _ATCRs, 0, [], []);
export var CreateCustomActionRequest = struct(
  n0,
  _CCAR,
  0,
  [_D, _AN, _A, _T, _CTl, _ANc],
  [() => CustomActionDefinition, 0, () => CustomActionAttachmentList, () => TagList, [0, 4], 0]
);
export var CreateCustomActionResult = struct(n0, _CCARr, 0, [_CAA], [0]);
export var CustomAction = struct(
  n0,
  _CA,
  0,
  [_CAA, _D, _AN, _A, _ANc],
  [0, () => CustomActionDefinition, 0, () => CustomActionAttachmentList, 0]
);
export var CustomActionAttachment = struct(
  n0,
  _CAAu,
  0,
  [_NT, _BT, _C, _V],
  [0, 0, () => CustomActionAttachmentCriteriaList, 128 | 0]
);
export var CustomActionAttachmentCriteria = struct(n0, _CAAC, 0, [_O, _VN, _Va], [0, 0, 0]);
export var CustomActionDefinition = struct(n0, _CAD, 0, [_CTo], [0]);
export var DeleteCustomActionRequest = struct(n0, _DCAR, 0, [_CAA], [0]);
export var DeleteCustomActionResult = struct(n0, _DCARe, 0, [], []);
export var DisassociateFromConfigurationRequest = struct(n0, _DFCR, 0, [_R, _CC], [0, 0]);
export var DisassociateFromConfigurationResult = struct(n0, _DFCRi, 0, [], []);
export var GetCustomActionRequest = struct(n0, _GCAR, 0, [_CAA], [0]);
export var GetCustomActionResult = struct(n0, _GCARe, 0, [_CA], [() => CustomAction]);
export var InternalServiceError = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalServiceError
);
export var ListCustomActionsRequest = struct(n0, _LCAR, 0, [_MR, _NTe], [1, 0]);
export var ListCustomActionsResult = struct(n0, _LCARi, 0, [_CAu, _NTe], [64 | 0, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RARN], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [() => TagList]);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __ServiceUnavailableException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _T], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __TooManyTagsException
);
export var UnauthorizedException = error(
  n0,
  _UE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __UnauthorizedException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TKa], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdateCustomActionRequest = struct(
  n0,
  _UCAR,
  0,
  [_CAA, _D, _AN, _A],
  [0, () => CustomActionDefinition, 0, () => CustomActionAttachmentList]
);
export var UpdateCustomActionResult = struct(n0, _UCARp, 0, [_CAA], [0]);
export var Unit = "unit" as const;

export var CustomActionArnList = 64 | 0;

export var CustomActionAttachmentCriteriaList = list(n0, _CAACL, 0, () => CustomActionAttachmentCriteria);
export var CustomActionAttachmentList = list(n0, _CAAL, 0, () => CustomActionAttachment);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var CustomActionAttachmentVariables = 128 | 0;

export var AssociateToConfiguration = op(
  n0,
  _ATC,
  {
    [_h]: ["POST", "/associate-to-configuration", 201],
  },
  () => AssociateToConfigurationRequest,
  () => AssociateToConfigurationResult
);
export var CreateCustomAction = op(
  n0,
  _CCAr,
  {
    [_h]: ["POST", "/create-custom-action", 201],
  },
  () => CreateCustomActionRequest,
  () => CreateCustomActionResult
);
export var DeleteCustomAction = op(
  n0,
  _DCA,
  {
    [_h]: ["POST", "/delete-custom-action", 204],
  },
  () => DeleteCustomActionRequest,
  () => DeleteCustomActionResult
);
export var DisassociateFromConfiguration = op(
  n0,
  _DFC,
  {
    [_h]: ["POST", "/disassociate-from-configuration", 204],
  },
  () => DisassociateFromConfigurationRequest,
  () => DisassociateFromConfigurationResult
);
export var GetCustomAction = op(
  n0,
  _GCA,
  {
    [_h]: ["POST", "/get-custom-action", 200],
  },
  () => GetCustomActionRequest,
  () => GetCustomActionResult
);
export var ListCustomActions = op(
  n0,
  _LCA,
  {
    [_h]: ["POST", "/list-custom-actions", 200],
  },
  () => ListCustomActionsRequest,
  () => ListCustomActionsResult
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["POST", "/list-tags-for-resource", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tag-resource", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/untag-resource", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateCustomAction = op(
  n0,
  _UCA,
  {
    [_h]: ["POST", "/update-custom-action", 200],
  },
  () => UpdateCustomActionRequest,
  () => UpdateCustomActionResult
);
