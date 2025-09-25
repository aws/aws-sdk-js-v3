// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aEJ,
  _AEJL,
  _AEJS,
  _aGJA,
  _aS,
  _cT,
  _d,
  _De,
  _de,
  _dOL,
  _GMLC,
  _GMLCR,
  _GMLCRe,
  _hQ,
  _ht,
  _LAEJ,
  _LAEJR,
  _LAEJRi,
  _mI,
  _MLOC,
  _mR,
  _n,
  _nT,
  _oL,
  _PMLC,
  _PMLCR,
  _rA,
  _s,
  _SCM,
  _sD,
  _sDt,
  _sU,
  _uT,
  n0,
  Unit,
} from "./schemas_0";
import { AudienceSize } from "./schemas_7_Audience";
import { StatusDetails } from "./schemas_20_Get";

/* eslint no-var: 0 */

export var AudienceExportJobSummary = struct(
  n0,
  _AEJS,
  0,
  [_cT, _uT, _n, _aGJA, _aS, _d, _s, _sDt, _oL],
  [5, 5, 0, 0, () => AudienceSize, 0, 0, () => StatusDetails, 0]
);
export var Destination = struct(n0, _De, 0, [_sD], [() => S3ConfigMap]);
export var GetMLConfigurationRequest = struct(n0, _GMLCR, 0, [_mI], [[0, 1]]);
export var GetMLConfigurationResponse = struct(
  n0,
  _GMLCRe,
  0,
  [_mI, _dOL, _cT, _uT],
  [0, () => MLOutputConfiguration, 5, 5]
);
export var ListAudienceExportJobsRequest = struct(
  n0,
  _LAEJR,
  0,
  [_nT, _mR, _aGJA],
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
        [_hQ]: _aGJA,
      },
    ],
  ]
);
export var ListAudienceExportJobsResponse = struct(n0, _LAEJRi, 0, [_nT, _aEJ], [0, () => AudienceExportJobList]);
export var MLOutputConfiguration = struct(n0, _MLOC, 0, [_de, _rA], [() => Destination, 0]);
export var PutMLConfigurationRequest = struct(n0, _PMLCR, 0, [_mI, _dOL], [[0, 1], () => MLOutputConfiguration]);
export var S3ConfigMap = struct(n0, _SCM, 0, [_sU], [0]);
export var AudienceExportJobList = list(n0, _AEJL, 0, () => AudienceExportJobSummary);
export var GetMLConfiguration = op(
  n0,
  _GMLC,
  {
    [_ht]: ["GET", "/memberships/{membershipIdentifier}/ml-configurations", 200],
  },
  () => GetMLConfigurationRequest,
  () => GetMLConfigurationResponse
);
export var ListAudienceExportJobs = op(
  n0,
  _LAEJ,
  {
    [_ht]: ["GET", "/audience-export-job", 200],
  },
  () => ListAudienceExportJobsRequest,
  () => ListAudienceExportJobsResponse
);
export var PutMLConfiguration = op(
  n0,
  _PMLC,
  {
    [_ht]: ["PUT", "/memberships/{membershipIdentifier}/ml-configurations", 200],
  },
  () => PutMLConfigurationRequest,
  () => Unit
);
