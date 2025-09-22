// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cF,
  _dDIM,
  _F,
  _Fi,
  _fil,
  _GIC,
  _GICR,
  _GICRe,
  _gL,
  _GLF,
  _GLT,
  _h,
  _IF,
  _mFa,
  _n,
  _nSIM,
  _nSN,
  _or,
  _tCIM,
  _TGIC,
  _tGIC,
  _tGIM,
  _TIC,
  _tIC,
  _tIM,
  _ty,
  _UIC,
  _UICR,
  _UICRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Field = struct(n0, _F, 0, [_n, _ty], [0, 0]);
export var GeoLocationTarget = struct(n0, _GLT, 0, [_n, _or], [0, 0]);
export var GetIndexingConfigurationRequest = struct(n0, _GICR, 0, [], []);
export var GetIndexingConfigurationResponse = struct(
  n0,
  _GICRe,
  0,
  [_tIC, _tGIC],
  [() => ThingIndexingConfiguration, () => ThingGroupIndexingConfiguration]
);
export var IndexingFilter = struct(n0, _IF, 0, [_nSN, _gL], [64 | 0, () => GeoLocationsFilter]);
export var ThingGroupIndexingConfiguration = struct(n0, _TGIC, 0, [_tGIM, _mFa, _cF], [0, () => Fields, () => Fields]);
export var ThingIndexingConfiguration = struct(
  n0,
  _TIC,
  0,
  [_tIM, _tCIM, _dDIM, _nSIM, _mFa, _cF, _fil],
  [0, 0, 0, 0, () => Fields, () => Fields, () => IndexingFilter]
);
export var UpdateIndexingConfigurationRequest = struct(
  n0,
  _UICR,
  0,
  [_tIC, _tGIC],
  [() => ThingIndexingConfiguration, () => ThingGroupIndexingConfiguration]
);
export var UpdateIndexingConfigurationResponse = struct(n0, _UICRp, 0, [], []);
export var Fields = list(n0, _Fi, 0, () => Field);
export var GeoLocationsFilter = list(n0, _GLF, 0, () => GeoLocationTarget);
export var NamedShadowNamesFilter = 64 | 0;

export var GetIndexingConfiguration = op(
  n0,
  _GIC,
  {
    [_h]: ["GET", "/indexing/config", 200],
  },
  () => GetIndexingConfigurationRequest,
  () => GetIndexingConfigurationResponse
);
export var UpdateIndexingConfiguration = op(
  n0,
  _UIC,
  {
    [_h]: ["POST", "/indexing/config", 200],
  },
  () => UpdateIndexingConfigurationRequest,
  () => UpdateIndexingConfigurationResponse
);
