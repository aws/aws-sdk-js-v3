// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cIT,
  _cITVM,
  _cT,
  _EM,
  _EML,
  _eMx,
  _eTN,
  _fo,
  _GEM,
  _GEMR,
  _GEMRe,
  _iC,
  _iMERA,
  _jIT,
  _jKTVM,
  _lUT,
  _mE,
  _mES,
  _MIC,
  _MOC,
  _mR,
  _mS,
  _nT,
  _oC,
  _PEM,
  _PEMR,
  _PEMRu,
  _ta,
  _uEV,
  n0,
  tagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ExternalModel = struct(
  n0,
  _EM,
  0,
  [_mE, _mS, _iMERA, _iC, _oC, _mES, _lUT, _cT, _a],
  [0, 0, 0, () => ModelInputConfiguration, () => ModelOutputConfiguration, 0, 0, 0, 0]
);
export var GetExternalModelsRequest = struct(n0, _GEMR, 0, [_mE, _nT, _mR], [0, 0, 1]);
export var GetExternalModelsResult = struct(n0, _GEMRe, 0, [_eMx, _nT], [() => ExternalModelList, 0]);
export var ModelInputConfiguration = struct(n0, _MIC, 0, [_eTN, _fo, _uEV, _jIT, _cIT], [0, 0, 2, 0, 0]);
export var ModelOutputConfiguration = struct(n0, _MOC, 0, [_fo, _jKTVM, _cITVM], [0, 128 | 0, 128 | 0]);
export var PutExternalModelRequest = struct(
  n0,
  _PEMR,
  0,
  [_mE, _mS, _iMERA, _iC, _oC, _mES, _ta],
  [0, 0, 0, () => ModelInputConfiguration, () => ModelOutputConfiguration, 0, () => tagList]
);
export var PutExternalModelResult = struct(n0, _PEMRu, 0, [], []);
export var ExternalModelList = list(n0, _EML, 0, () => ExternalModel);
export var CsvIndexToVariableMap = 128 | 0;

export var JsonKeyToVariableMap = 128 | 0;

export var GetExternalModels = op(
  n0,
  _GEM,
  0,
  () => GetExternalModelsRequest,
  () => GetExternalModelsResult
);
export var PutExternalModel = op(
  n0,
  _PEM,
  0,
  () => PutExternalModelRequest,
  () => PutExternalModelResult
);
