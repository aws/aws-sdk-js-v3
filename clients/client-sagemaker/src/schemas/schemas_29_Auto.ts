// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _AMLC,
  _AMLCD,
  _AMLCDu,
  _AMLCS,
  _AMLCut,
  _AMLICD,
  _AMLJN,
  _BR,
  _CAL,
  _Can,
  _CM,
  _CNa,
  _CNE,
  _CP,
  _CSA,
  _CSa,
  _CSan,
  _CSN,
  _CST,
  _CT,
  _E,
  _ETn,
  _Ex,
  _FAMLJOM,
  _FR,
  _I,
  _IC,
  _ICD,
  _LCFAMLJ,
  _LCFAMLJR,
  _LCFAMLJRi,
  _LMT,
  _MDetr,
  _MDL,
  _MDU,
  _MI,
  _MN,
  _MR,
  _NT,
  _OS,
  _SAMLJ,
  _SAMLJR,
  _SBo,
  _SE,
  _Set,
  _SMN,
  _SO,
  _Ty,
  _Va,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AutoMLCandidate = struct(
  n0,
  _AMLC,
  0,
  [_CNa, _FAMLJOM, _OS, _CSa, _CSan, _IC, _CT, _ETn, _LMT, _FR, _CP, _ICD],
  [
    0,
    () => FinalAutoMLJobObjectiveMetric,
    0,
    () => CandidateSteps,
    0,
    () => AutoMLContainerDefinitions,
    4,
    4,
    4,
    0,
    () => CandidateProperties,
    () => AutoMLInferenceContainerDefinitions,
  ]
);
export var AutoMLCandidateStep = struct(n0, _AMLCS, 0, [_CST, _CSA, _CSN], [0, 0, 0]);
export var AutoMLContainerDefinition = struct(n0, _AMLCD, 0, [_I, _MDU, _E], [0, 0, 128 | 0]);
export var CandidateArtifactLocations = struct(n0, _CAL, 0, [_Ex, _MI, _BR], [0, 0, 0]);
export var CandidateProperties = struct(
  n0,
  _CP,
  0,
  [_CAL, _CM],
  [() => CandidateArtifactLocations, () => MetricDataList]
);
export var FinalAutoMLJobObjectiveMetric = struct(n0, _FAMLJOM, 0, [_Ty, _MN, _Va, _SMN], [0, 0, 1, 0]);
export var ListCandidatesForAutoMLJobRequest = struct(
  n0,
  _LCFAMLJR,
  0,
  [_AMLJN, _SE, _CNE, _SO, _SBo, _MR, _NT],
  [0, 0, 0, 0, 0, 1, 0]
);
export var ListCandidatesForAutoMLJobResponse = struct(n0, _LCFAMLJRi, 0, [_Can, _NT], [() => AutoMLCandidates, 0]);
export var MetricDatum = struct(n0, _MDetr, 0, [_MN, _SMN, _Va, _Set], [0, 0, 1, 0]);
export var StopAutoMLJobRequest = struct(n0, _SAMLJR, 0, [_AMLJN], [0]);
export var AutoMLCandidates = list(n0, _AMLCut, 0, () => AutoMLCandidate);
export var AutoMLContainerDefinitions = list(n0, _AMLCDu, 0, () => AutoMLContainerDefinition);
export var CandidateSteps = list(n0, _CSa, 0, () => AutoMLCandidateStep);
export var MetricDataList = list(n0, _MDL, 0, () => MetricDatum);
export var AutoMLInferenceContainerDefinitions = map(n0, _AMLICD, 0, 0, () => AutoMLContainerDefinitions);
export var ListCandidatesForAutoMLJob = op(
  n0,
  _LCFAMLJ,
  0,
  () => ListCandidatesForAutoMLJobRequest,
  () => ListCandidatesForAutoMLJobResponse
);
export var StopAutoMLJob = op(
  n0,
  _SAMLJ,
  0,
  () => StopAutoMLJobRequest,
  () => Unit
);
