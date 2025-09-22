// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidPaginationTokenException as __InvalidPaginationTokenException } from "../models/index";
import {
  _Bl,
  _BN,
  _c,
  _DD,
  _DN,
  _e,
  _h,
  _hE,
  _IPTE,
  _LPB,
  _LPBR,
  _LPBRi,
  _m,
  _PBS,
  _PBSL,
  _Se,
  _UC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidPaginationTokenException = error(
  n0,
  _IPTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidPaginationTokenException
);
export var ListPipelineBlueprintsRequest = struct(n0, _LPBR, 0, [], []);
export var ListPipelineBlueprintsResponse = struct(n0, _LPBRi, 0, [_Bl], [() => PipelineBlueprintsSummaryList]);
export var PipelineBlueprintSummary = struct(n0, _PBS, 0, [_BN, _DN, _DD, _Se, _UC], [0, 0, 0, 0, 0]);
export var PipelineBlueprintsSummaryList = list(n0, _PBSL, 0, () => PipelineBlueprintSummary);
export var ListPipelineBlueprints = op(
  n0,
  _LPB,
  {
    [_h]: ["POST", "/2022-01-01/osis/listPipelineBlueprints", 200],
  },
  () => ListPipelineBlueprintsRequest,
  () => ListPipelineBlueprintsResponse
);
