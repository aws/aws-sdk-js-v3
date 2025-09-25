// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  GenerationExistsException as __GenerationExistsException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import { _c, _e, _ECT, _GEE, _GST, _hE, _M, _RIe, _SQEE, _SSPPRG, _SSPPRGR, _SSPPRGRt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GenerationExistsException = error(
  n0,
  _GEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __GenerationExistsException
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M],
  [0],

  __ServiceQuotaExceededException
);
export var StartSavingsPlansPurchaseRecommendationGenerationRequest = struct(n0, _SSPPRGR, 0, [], []);
export var StartSavingsPlansPurchaseRecommendationGenerationResponse = struct(
  n0,
  _SSPPRGRt,
  0,
  [_RIe, _GST, _ECT],
  [0, 0, 0]
);
export var StartSavingsPlansPurchaseRecommendationGeneration = op(
  n0,
  _SSPPRG,
  0,
  () => StartSavingsPlansPurchaseRecommendationGenerationRequest,
  () => StartSavingsPlansPurchaseRecommendationGenerationResponse
);
