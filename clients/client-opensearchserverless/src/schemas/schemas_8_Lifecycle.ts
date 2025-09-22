// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BGELP,
  _BGELPR,
  _BGELPRa,
  _cT,
  _DLP,
  _DLPR,
  _DLPRe,
  _eC,
  _ELPD,
  _eLPD,
  _ELPDf,
  _ELPED,
  _eLPED,
  _ELPEDf,
  _eM,
  _LPRI,
  _LPRIi,
  _n,
  _nMRP,
  _pN,
  _r,
  _rI,
  _rP,
  _rT,
  _t,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetEffectiveLifecyclePolicyRequest = struct(
  n0,
  _BGELPR,
  0,
  [_rI],
  [() => LifecyclePolicyResourceIdentifiers]
);
export var BatchGetEffectiveLifecyclePolicyResponse = struct(
  n0,
  _BGELPRa,
  0,
  [_eLPD, _eLPED],
  [() => EffectiveLifecyclePolicyDetails, () => EffectiveLifecyclePolicyErrorDetails]
);
export var DeleteLifecyclePolicyRequest = struct(n0, _DLPR, 0, [_t, _n, _cT], [0, 0, [0, 4]]);
export var DeleteLifecyclePolicyResponse = struct(n0, _DLPRe, 0, [], []);
export var EffectiveLifecyclePolicyDetail = struct(n0, _ELPD, 0, [_t, _r, _pN, _rT, _rP, _nMRP], [0, 0, 0, 0, 0, 2]);
export var EffectiveLifecyclePolicyErrorDetail = struct(n0, _ELPED, 0, [_t, _r, _eM, _eC], [0, 0, 0, 0]);
export var LifecyclePolicyResourceIdentifier = struct(n0, _LPRI, 0, [_t, _r], [0, 0]);
export var EffectiveLifecyclePolicyDetails = list(n0, _ELPDf, 0, () => EffectiveLifecyclePolicyDetail);
export var EffectiveLifecyclePolicyErrorDetails = list(n0, _ELPEDf, 0, () => EffectiveLifecyclePolicyErrorDetail);
export var LifecyclePolicyResourceIdentifiers = list(n0, _LPRIi, 0, () => LifecyclePolicyResourceIdentifier);
export var BatchGetEffectiveLifecyclePolicy = op(
  n0,
  _BGELP,
  0,
  () => BatchGetEffectiveLifecyclePolicyRequest,
  () => BatchGetEffectiveLifecyclePolicyResponse
);
export var DeleteLifecyclePolicy = op(
  n0,
  _DLP,
  2,
  () => DeleteLifecyclePolicyRequest,
  () => DeleteLifecyclePolicyResponse
);
