// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _CColle,
  _CTol,
  _D,
  _Dim,
  _FAe,
  _FDe,
  _FGA,
  _FGN,
  _FN,
  _FP,
  _FPA,
  _FTe,
  _K,
  _OSC,
  _OSCU,
  _PAa,
  _PRara,
  _PRCU,
  _PWCU,
  _TCh,
  _TCU,
  _TDt,
  _TM,
  _UFG,
  _UFGR,
  _UFGRp,
  _UFM,
  _UFMR,
  _Uni,
  _Va,
  _VCe,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FeatureDefinition = struct(n0, _FDe, 0, [_FN, _FTe, _CTol, _CColle], [0, 0, 0, () => CollectionConfig]);
export var FeatureParameter = struct(n0, _FP, 0, [_K, _Va], [0, 0]);
export var OnlineStoreConfigUpdate = struct(n0, _OSCU, 0, [_TDt], [() => TtlDuration]);
export var ThroughputConfigUpdate = struct(n0, _TCU, 0, [_TM, _PRCU, _PWCU], [0, 1, 1]);
export var TtlDuration = struct(n0, _TDt, 0, [_Uni, _Va], [0, 1]);
export var UpdateFeatureGroupRequest = struct(
  n0,
  _UFGR,
  0,
  [_FGN, _FAe, _OSC, _TCh],
  [0, () => FeatureAdditions, () => OnlineStoreConfigUpdate, () => ThroughputConfigUpdate]
);
export var UpdateFeatureGroupResponse = struct(n0, _UFGRp, 0, [_FGA], [0]);
export var UpdateFeatureMetadataRequest = struct(
  n0,
  _UFMR,
  0,
  [_FGN, _FN, _D, _PAa, _PRara],
  [0, 0, 0, () => FeatureParameterAdditions, 64 | 0]
);
export var VectorConfig = struct(n0, _VCe, 0, [_Dim], [1]);
export var FeatureAdditions = list(n0, _FAe, 0, () => FeatureDefinition);
export var FeatureParameterAdditions = list(n0, _FPA, 0, () => FeatureParameter);
export var FeatureParameterRemovals = 64 | 0;

export var CollectionConfig = uni(n0, _CColle, 0, [_VCe], [() => VectorConfig]);
export var UpdateFeatureGroup = op(
  n0,
  _UFG,
  0,
  () => UpdateFeatureGroupRequest,
  () => UpdateFeatureGroupResponse
);
export var UpdateFeatureMetadata = op(
  n0,
  _UFM,
  0,
  () => UpdateFeatureMetadataRequest,
  () => Unit
);
