// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _bPJ,
  _cLU,
  _eC,
  _en,
  _fR,
  _GMLDPJ,
  _GMLDPJI,
  _GMLDPJO,
  _GMLE,
  _GMLEI,
  _GMLEO,
  _GMLMTJ,
  _GMLMTJe,
  _GMLMTJI,
  _GMLMTJIe,
  _GMLMTJO,
  _GMLMTJOe,
  _h,
  _hJ,
  _hQ,
  _i,
  _M,
  _MCD,
  _MM,
  _mM,
  _mo,
  _MRD,
  _mTJ,
  _n,
  _nIRA,
  _oL,
  _pJ,
  _rMTJ,
  _s,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetMLDataProcessingJobInput = struct(
  n0,
  _GMLDPJI,
  0,
  [_i, _nIRA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nIRA,
      },
    ],
  ]
);
export var GetMLDataProcessingJobOutput = struct(n0, _GMLDPJO, 0, [_s, _i, _pJ], [0, 0, () => MlResourceDefinition]);
export var GetMLEndpointInput = struct(
  n0,
  _GMLEI,
  0,
  [_i, _nIRA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nIRA,
      },
    ],
  ]
);
export var GetMLEndpointOutput = struct(
  n0,
  _GMLEO,
  0,
  [_s, _i, _en, _eC],
  [0, 0, () => MlResourceDefinition, () => MlConfigDefinition]
);
export var GetMLModelTrainingJobInput = struct(
  n0,
  _GMLMTJI,
  0,
  [_i, _nIRA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nIRA,
      },
    ],
  ]
);
export var GetMLModelTrainingJobOutput = struct(
  n0,
  _GMLMTJO,
  0,
  [_s, _i, _pJ, _hJ, _mTJ, _mM],
  [0, 0, () => MlResourceDefinition, () => MlResourceDefinition, () => MlResourceDefinition, () => MlModels]
);
export var GetMLModelTransformJobInput = struct(
  n0,
  _GMLMTJIe,
  0,
  [_i, _nIRA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nIRA,
      },
    ],
  ]
);
export var GetMLModelTransformJobOutput = struct(
  n0,
  _GMLMTJOe,
  0,
  [_s, _i, _bPJ, _rMTJ, _mo],
  [0, 0, () => MlResourceDefinition, () => MlResourceDefinition, () => Models]
);
export var MlConfigDefinition = struct(n0, _MCD, 0, [_n, _a], [0, 0]);
export var MlResourceDefinition = struct(n0, _MRD, 0, [_n, _a, _s, _oL, _fR, _cLU], [0, 0, 0, 0, 0, 0]);
export var MlModels = list(n0, _MM, 0, () => MlConfigDefinition);
export var Models = list(n0, _M, 0, () => MlConfigDefinition);
export var GetMLDataProcessingJob = op(
  n0,
  _GMLDPJ,
  {
    [_h]: ["GET", "/ml/dataprocessing/{id}", 200],
  },
  () => GetMLDataProcessingJobInput,
  () => GetMLDataProcessingJobOutput
);
export var GetMLEndpoint = op(
  n0,
  _GMLE,
  {
    [_h]: ["GET", "/ml/endpoints/{id}", 200],
  },
  () => GetMLEndpointInput,
  () => GetMLEndpointOutput
);
export var GetMLModelTrainingJob = op(
  n0,
  _GMLMTJ,
  {
    [_h]: ["GET", "/ml/modeltraining/{id}", 200],
  },
  () => GetMLModelTrainingJobInput,
  () => GetMLModelTrainingJobOutput
);
export var GetMLModelTransformJob = op(
  n0,
  _GMLMTJe,
  {
    [_h]: ["GET", "/ml/modeltransform/{id}", 200],
  },
  () => GetMLModelTransformJobInput,
  () => GetMLModelTransformJobOutput
);
