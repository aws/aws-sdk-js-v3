// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AL,
  _Ap,
  _AS,
  _CAM,
  _CDIA,
  _CDIAR,
  _CDIARr,
  _CI,
  _CT,
  _CTl,
  _DIA,
  _DIAI,
  _DII,
  _DURI,
  _EC,
  _FM,
  _h,
  _hQ,
  _I,
  _IS,
  _LA,
  _LAR,
  _LARi,
  _LMT,
  _MR,
  _mR,
  _N,
  _Na,
  _NT,
  _nT,
  _OC,
  n0,
} from "./schemas_0";
import { ExecutionConfiguration } from "./schemas_2_Integration";

/* eslint no-var: 0 */

export var ApplicationSummary = struct(n0, _AS, 0, [_A, _I, _N, _Na, _CT, _LMT, _IS], [0, 0, 0, 0, 4, 4, 2]);
export var CreateDataIntegrationAssociationRequest = struct(
  n0,
  _CDIAR,
  0,
  [_DII, _CI, _OC, _DURI, _CAM, _CTl, _EC],
  [[0, 1], 0, map(n0, _OC, 0, 0, map(n0, _FM, 0, 0, 64 | 0)), 0, 128 | 0, [0, 4], () => ExecutionConfiguration]
);
export var CreateDataIntegrationAssociationResponse = struct(n0, _CDIARr, 0, [_DIAI, _DIA], [0, 0]);
export var ListApplicationsRequest = struct(
  n0,
  _LAR,
  0,
  [_NT, _MR],
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
  ]
);
export var ListApplicationsResponse = struct(n0, _LARi, 0, [_Ap, _NT], [() => ApplicationsList, 0]);
export var ApplicationsList = list(n0, _AL, 0, () => ApplicationSummary);
export var FieldsList = 64 | 0;

export var ClientAssociationMetadata = 128 | 0;

export var FieldsMap = map(n0, _FM, 0, 0, 64 | 0);
export var ObjectConfiguration = map(n0, _OC, 0, 0, map(n0, _FM, 0, 0, 64 | 0));
export var CreateDataIntegrationAssociation = op(
  n0,
  _CDIA,
  {
    [_h]: ["POST", "/dataIntegrations/{DataIntegrationIdentifier}/associations", 200],
  },
  () => CreateDataIntegrationAssociationRequest,
  () => CreateDataIntegrationAssociationResponse
);
export var ListApplications = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/applications", 200],
  },
  () => ListApplicationsRequest,
  () => ListApplicationsResponse
);
