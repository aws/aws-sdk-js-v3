// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIu,
  _AM,
  _Arn,
  _ATdd,
  _ATI,
  _ATO,
  _B,
  _CPAUI,
  _CPAUII,
  _CPAUIO,
  _CSIr,
  _CSOr,
  _CSr,
  _CTr,
  _De,
  _DNE,
  _DNEI,
  _DNEO,
  _DPAUI,
  _DPAUII,
  _DPAUIO,
  _DSes,
  _DSIes,
  _DSL,
  _DSOe,
  _EE,
  _EEC,
  _EI,
  _EKA,
  _EMRCC,
  _ERA,
  _ESGI,
  _ET,
  _EVn,
  _I,
  _IAU,
  _IIA,
  _IRSPN,
  _IUA,
  _JRI,
  _K,
  _LMT,
  _LSCR,
  _MISGI,
  _N,
  _NE,
  _NEI,
  _NEN,
  _NISGI,
  _NP,
  _NSL,
  _NSLFI,
  _ONF,
  _ONSL,
  _ONSLFI,
  _ONSLFO,
  _ONURI,
  _PAUI,
  _PAUII,
  _PAUIS,
  _PAUITL,
  _PT,
  _RI,
  _RP,
  _RREC,
  _SAt,
  _SItu,
  _SIu,
  _SNE,
  _SNEI,
  _SNEO,
  _SR,
  _ST,
  _St,
  _Stu,
  _T,
  _Ta,
  _TIPE,
  _TL,
  _TRA,
  _Ty,
  _UR,
  _Ur,
  _Va,
  _VI,
  _WSGI,
  _XR,
  n0,
} from "./schemas_0";
import { NotebookS3LocationForOutput } from "./schemas_33_Notebook";

/* eslint no-var: 0 */

export var AddTagsInput = struct(n0, _ATI, 0, [_RI, _T], [0, () => TagList]);
export var AddTagsOutput = struct(n0, _ATO, 0, [], []);
export var CreatePersistentAppUIInput = struct(
  n0,
  _CPAUII,
  0,
  [_TRA, _EMRCC, _T, _XR, _PT],
  [0, () => EMRContainersConfig, () => TagList, 0, 0]
);
export var CreatePersistentAppUIOutput = struct(n0, _CPAUIO, 0, [_PAUII, _RREC], [0, 2]);
export var CreateStudioInput = struct(
  n0,
  _CSIr,
  0,
  [_N, _De, _AM, _VI, _SIu, _SR, _UR, _WSGI, _ESGI, _DSL, _IAU, _IRSPN, _T, _TIPE, _IUA, _IIA, _EKA],
  [0, 0, 0, 0, 64 | 0, 0, 0, 0, 0, 0, 0, 0, () => TagList, 2, 0, 0, 0]
);
export var CreateStudioOutput = struct(n0, _CSOr, 0, [_SItu, _Ur], [0, 0]);
export var DescribeNotebookExecutionInput = struct(n0, _DNEI, 0, [_NEI], [0]);
export var DescribeNotebookExecutionOutput = struct(n0, _DNEO, 0, [_NE], [() => NotebookExecution]);
export var DescribePersistentAppUIInput = struct(n0, _DPAUII, 0, [_PAUII], [0]);
export var DescribePersistentAppUIOutput = struct(n0, _DPAUIO, 0, [_PAUI], [() => PersistentAppUI]);
export var DescribeStudioInput = struct(n0, _DSIes, 0, [_SItu], [0]);
export var DescribeStudioOutput = struct(n0, _DSOe, 0, [_Stu], [() => Studio]);
export var EMRContainersConfig = struct(n0, _EMRCC, 0, [_JRI], [0]);
export var ExecutionEngineConfig = struct(n0, _EEC, 0, [_I, _Ty, _MISGI, _ERA], [0, 0, 0, 0]);
export var NotebookExecution = struct(
  n0,
  _NE,
  0,
  [_NEI, _EI, _EE, _NEN, _NP, _St, _ST, _ET, _Arn, _ONURI, _LSCR, _NISGI, _T, _NSL, _ONSL, _ONF, _EVn],
  [
    0,
    0,
    () => ExecutionEngineConfig,
    0,
    0,
    0,
    4,
    4,
    0,
    0,
    0,
    0,
    () => TagList,
    () => NotebookS3LocationForOutput,
    () => OutputNotebookS3LocationForOutput,
    0,
    128 | 0,
  ]
);
export var NotebookS3LocationFromInput = struct(n0, _NSLFI, 0, [_B, _K], [0, 0]);
export var OutputNotebookS3LocationForOutput = struct(n0, _ONSLFO, 0, [_B, _K], [0, 0]);
export var OutputNotebookS3LocationFromInput = struct(n0, _ONSLFI, 0, [_B, _K], [0, 0]);
export var PersistentAppUI = struct(
  n0,
  _PAUI,
  0,
  [_PAUII, _PAUITL, _PAUIS, _AIu, _CTr, _LMT, _LSCR, _T],
  [0, 64 | 0, 0, 0, 4, 4, 0, () => TagList]
);
export var StartNotebookExecutionInput = struct(
  n0,
  _SNEI,
  0,
  [_EI, _RP, _NEN, _NP, _EE, _SR, _NISGI, _T, _NSL, _ONSL, _ONF, _EVn],
  [
    0,
    0,
    0,
    0,
    () => ExecutionEngineConfig,
    0,
    0,
    () => TagList,
    () => NotebookS3LocationFromInput,
    () => OutputNotebookS3LocationFromInput,
    0,
    128 | 0,
  ]
);
export var StartNotebookExecutionOutput = struct(n0, _SNEO, 0, [_NEI], [0]);
export var Studio = struct(
  n0,
  _Stu,
  0,
  [
    _SItu,
    _SAt,
    _N,
    _De,
    _AM,
    _VI,
    _SIu,
    _SR,
    _UR,
    _WSGI,
    _ESGI,
    _Ur,
    _CTr,
    _DSL,
    _IAU,
    _IRSPN,
    _T,
    _IIA,
    _TIPE,
    _IUA,
    _EKA,
  ],
  [0, 0, 0, 0, 0, 0, 64 | 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, () => TagList, 0, 2, 0, 0]
);
export var Tag = struct(n0, _Ta, 0, [_K, _Va], [0, 0]);
export var PersistentAppUITypeList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var EnvironmentVariablesMap = 128 | 0;

export var AddTags = op(
  n0,
  _ATdd,
  0,
  () => AddTagsInput,
  () => AddTagsOutput
);
export var CreatePersistentAppUI = op(
  n0,
  _CPAUI,
  0,
  () => CreatePersistentAppUIInput,
  () => CreatePersistentAppUIOutput
);
export var CreateStudio = op(
  n0,
  _CSr,
  0,
  () => CreateStudioInput,
  () => CreateStudioOutput
);
export var DescribeNotebookExecution = op(
  n0,
  _DNE,
  0,
  () => DescribeNotebookExecutionInput,
  () => DescribeNotebookExecutionOutput
);
export var DescribePersistentAppUI = op(
  n0,
  _DPAUI,
  0,
  () => DescribePersistentAppUIInput,
  () => DescribePersistentAppUIOutput
);
export var DescribeStudio = op(
  n0,
  _DSes,
  0,
  () => DescribeStudioInput,
  () => DescribeStudioOutput
);
export var StartNotebookExecution = op(
  n0,
  _SNE,
  0,
  () => StartNotebookExecutionInput,
  () => StartNotebookExecutionOutput
);
