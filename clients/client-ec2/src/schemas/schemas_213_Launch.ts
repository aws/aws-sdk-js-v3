// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CBr,
  _cBr,
  _CT,
  _CTr,
  _cTr,
  _DLT,
  _DLTe,
  _DLTR,
  _DLTRe,
  _DLTRes,
  _DLTResc,
  _DR,
  _DVe,
  _DVN,
  _dVN,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _LT,
  _lT,
  _LTa,
  _lTa,
  _LTI,
  _lTI,
  _LTIa,
  _LTISL,
  _LTN,
  _lTN,
  _LTNa,
  _LTNSL,
  _LTSa,
  _LVN,
  _lVN,
  _MLT,
  _MLTR,
  _MLTRo,
  _MR,
  _NTe,
  _nTe,
  _Op,
  _ope,
  _SDV,
  _T,
  _tS,
  _xN,
  FilterList,
  n0,
  OperatorResponse,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLaunchTemplateRequest = struct(n0, _DLTR, 0, [_DR, _LTI, _LTN], [2, 0, 0]);
export var DeleteLaunchTemplateResult = struct(
  n0,
  _DLTRe,
  0,
  [_LT],
  [
    [
      () => LaunchTemplate,
      {
        [_eQN]: `LaunchTemplate`,
        [_xN]: _lT,
      },
    ],
  ]
);
export var DescribeLaunchTemplatesRequest = struct(
  n0,
  _DLTRes,
  0,
  [_DR, _LTIa, _LTNa, _Fi, _NTe, _MR],
  [
    2,
    [
      () => LaunchTemplateIdStringList,
      {
        [_xN]: _LTI,
      },
    ],
    [
      () => LaunchTemplateNameStringList,
      {
        [_xN]: _LTN,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    0,
    1,
  ]
);
export var DescribeLaunchTemplatesResult = struct(
  n0,
  _DLTResc,
  0,
  [_LTa, _NTe],
  [
    [
      () => LaunchTemplateSet,
      {
        [_eQN]: `LaunchTemplates`,
        [_xN]: _lTa,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var LaunchTemplate = struct(
  n0,
  _LT,
  0,
  [_LTI, _LTN, _CTr, _CBr, _DVN, _LVN, _T, _Op],
  [
    [
      0,
      {
        [_eQN]: `LaunchTemplateId`,
        [_xN]: _lTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `LaunchTemplateName`,
        [_xN]: _lTN,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreateTime`,
        [_xN]: _cTr,
      },
    ],
    [
      0,
      {
        [_eQN]: `CreatedBy`,
        [_xN]: _cBr,
      },
    ],
    [
      1,
      {
        [_eQN]: `DefaultVersionNumber`,
        [_xN]: _dVN,
      },
    ],
    [
      1,
      {
        [_eQN]: `LatestVersionNumber`,
        [_xN]: _lVN,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
    [
      () => OperatorResponse,
      {
        [_eQN]: `Operator`,
        [_xN]: _ope,
      },
    ],
  ]
);
export var ModifyLaunchTemplateRequest = struct(
  n0,
  _MLTR,
  0,
  [_DR, _CT, _LTI, _LTN, _DVe],
  [
    2,
    [0, 4],
    0,
    0,
    [
      0,
      {
        [_xN]: _SDV,
      },
    ],
  ]
);
export var ModifyLaunchTemplateResult = struct(
  n0,
  _MLTRo,
  0,
  [_LT],
  [
    [
      () => LaunchTemplate,
      {
        [_eQN]: `LaunchTemplate`,
        [_xN]: _lT,
      },
    ],
  ]
);
export var LaunchTemplateIdStringList = list(n0, _LTISL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var LaunchTemplateNameStringList = list(n0, _LTNSL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var LaunchTemplateSet = list(n0, _LTSa, 0, [
  () => LaunchTemplate,
  {
    [_xN]: _it,
  },
]);
export var DeleteLaunchTemplate = op(
  n0,
  _DLT,
  0,
  () => DeleteLaunchTemplateRequest,
  () => DeleteLaunchTemplateResult
);
export var DescribeLaunchTemplates = op(
  n0,
  _DLTe,
  0,
  () => DescribeLaunchTemplatesRequest,
  () => DescribeLaunchTemplatesResult
);
export var ModifyLaunchTemplate = op(
  n0,
  _MLT,
  0,
  () => ModifyLaunchTemplateRequest,
  () => ModifyLaunchTemplateResult
);
