// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aA,
  _aAs,
  _aV,
  _dTi,
  _eSN,
  _h,
  _ide,
  _LAARD,
  _LAARDR,
  _LAARDRi,
  _LRI,
  _lRI,
  _lSN,
  _mR,
  _nT,
  _RD,
  _rDe,
  _RDL,
  _rGN,
  _RIe,
  _rIe,
  _rIesou,
  _rT,
  _tSN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListAppAssessmentResourceDriftsRequest = struct(n0, _LAARDR, 0, [_aAs, _nT, _mR], [0, 0, 1]);
export var ListAppAssessmentResourceDriftsResponse = struct(n0, _LAARDRi, 0, [_rDe, _nT], [() => ResourceDriftList, 0]);
export var LogicalResourceId = struct(n0, _LRI, 0, [_ide, _lSN, _rGN, _tSN, _eSN], [0, 0, 0, 0, 0]);
export var ResourceDrift = struct(n0, _RD, 0, [_aA, _aV, _rIe, _rIesou, _dTi], [0, 0, 0, () => ResourceIdentifier, 0]);
export var ResourceIdentifier = struct(n0, _RIe, 0, [_lRI, _rT], [() => LogicalResourceId, 0]);
export var ResourceDriftList = list(n0, _RDL, 0, () => ResourceDrift);
export var ListAppAssessmentResourceDrifts = op(
  n0,
  _LAARD,
  {
    [_h]: ["POST", "/list-app-assessment-resource-drifts", 200],
  },
  () => ListAppAssessmentResourceDriftsRequest,
  () => ListAppAssessmentResourceDriftsResponse
);
