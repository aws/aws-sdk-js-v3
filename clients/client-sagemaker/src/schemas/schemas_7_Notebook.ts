// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACR,
  _ACRE,
  _ATc,
  _CNI,
  _CNII,
  _CNILC,
  _CNILCI,
  _CNILCO,
  _CNIO,
  _Con,
  _CT,
  _CTA,
  _CTB,
  _DACR,
  _DAT,
  _DCR,
  _DCRC,
  _DDCR,
  _DIA,
  _DLC,
  _DNIe,
  _DNIIe,
  _DNILC,
  _DNILCe,
  _DNILCI,
  _DNILCIe,
  _DNILCO,
  _DNIO,
  _FR,
  _IAT,
  _IMSC,
  _IT,
  _KKI,
  _LCN,
  _LMT,
  _LMTA,
  _LMTB,
  _LNI,
  _LNII,
  _LNILC,
  _LNILCI,
  _LNILCO,
  _LNIO,
  _MIMSV,
  _MR,
  _NCa,
  _NIA,
  _NII,
  _NILC,
  _NILCA,
  _NILCL,
  _NILCN,
  _NILCNC,
  _NILCS,
  _NILCSL,
  _NILH,
  _NIN,
  _NIot,
  _NIS,
  _NISL,
  _NISo,
  _NT,
  _OCn,
  _OSn,
  _PIl,
  _RAo,
  _RAoo,
  _SBo,
  _SE,
  _SG,
  _SGI,
  _SIub,
  _SO,
  _T,
  _U,
  _UNI,
  _UNII,
  _UNILC,
  _UNILCI,
  _UNILCO,
  _UNIO,
  _VSIGB,
  n0,
  TagList,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateNotebookInstanceInput = struct(
  n0,
  _CNII,
  0,
  [_NIN, _IT, _SIub, _SGI, _IAT, _RAo, _KKI, _T, _LCN, _DIA, _VSIGB, _ATc, _DCR, _ACR, _RAoo, _PIl, _IMSC],
  [
    0,
    0,
    0,
    64 | 0,
    0,
    0,
    0,
    () => TagList,
    0,
    0,
    1,
    64 | 0,
    0,
    64 | 0,
    0,
    0,
    () => InstanceMetadataServiceConfiguration,
  ]
);
export var CreateNotebookInstanceLifecycleConfigInput = struct(
  n0,
  _CNILCI,
  0,
  [_NILCN, _OCn, _OSn, _T],
  [0, () => NotebookInstanceLifecycleConfigList, () => NotebookInstanceLifecycleConfigList, () => TagList]
);
export var CreateNotebookInstanceLifecycleConfigOutput = struct(n0, _CNILCO, 0, [_NILCA], [0]);
export var CreateNotebookInstanceOutput = struct(n0, _CNIO, 0, [_NIA], [0]);
export var DeleteNotebookInstanceLifecycleConfigInput = struct(n0, _DNILCI, 0, [_NILCN], [0]);
export var DescribeNotebookInstanceInput = struct(n0, _DNIIe, 0, [_NIN], [0]);
export var DescribeNotebookInstanceLifecycleConfigInput = struct(n0, _DNILCIe, 0, [_NILCN], [0]);
export var DescribeNotebookInstanceLifecycleConfigOutput = struct(
  n0,
  _DNILCO,
  0,
  [_NILCA, _NILCN, _OCn, _OSn, _LMT, _CT],
  [0, 0, () => NotebookInstanceLifecycleConfigList, () => NotebookInstanceLifecycleConfigList, 4, 4]
);
export var DescribeNotebookInstanceOutput = struct(
  n0,
  _DNIO,
  0,
  [
    _NIA,
    _NIN,
    _NIS,
    _FR,
    _U,
    _IT,
    _IAT,
    _SIub,
    _SG,
    _RAo,
    _KKI,
    _NII,
    _LMT,
    _CT,
    _NILCN,
    _DIA,
    _VSIGB,
    _ATc,
    _DCR,
    _ACR,
    _RAoo,
    _PIl,
    _IMSC,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    0,
    0,
    0,
    4,
    4,
    0,
    0,
    1,
    64 | 0,
    0,
    64 | 0,
    0,
    0,
    () => InstanceMetadataServiceConfiguration,
  ]
);
export var InstanceMetadataServiceConfiguration = struct(n0, _IMSC, 0, [_MIMSV], [0]);
export var ListNotebookInstanceLifecycleConfigsInput = struct(
  n0,
  _LNILCI,
  0,
  [_NT, _MR, _SBo, _SO, _NCa, _CTB, _CTA, _LMTB, _LMTA],
  [0, 1, 0, 0, 0, 4, 4, 4, 4]
);
export var ListNotebookInstanceLifecycleConfigsOutput = struct(
  n0,
  _LNILCO,
  0,
  [_NT, _NILC],
  [0, () => NotebookInstanceLifecycleConfigSummaryList]
);
export var ListNotebookInstancesInput = struct(
  n0,
  _LNII,
  0,
  [_NT, _MR, _SBo, _SO, _NCa, _CTB, _CTA, _LMTB, _LMTA, _SE, _NILCNC, _DCRC, _ACRE],
  [0, 1, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0]
);
export var ListNotebookInstancesOutput = struct(n0, _LNIO, 0, [_NT, _NIot], [0, () => NotebookInstanceSummaryList]);
export var NotebookInstanceLifecycleConfigSummary = struct(n0, _NILCS, 0, [_NILCN, _NILCA, _CT, _LMT], [0, 0, 4, 4]);
export var NotebookInstanceLifecycleHook = struct(n0, _NILH, 0, [_Con], [0]);
export var NotebookInstanceSummary = struct(
  n0,
  _NISo,
  0,
  [_NIN, _NIA, _NIS, _U, _IT, _CT, _LMT, _NILCN, _DCR, _ACR],
  [0, 0, 0, 0, 0, 4, 4, 0, 0, 64 | 0]
);
export var UpdateNotebookInstanceInput = struct(
  n0,
  _UNII,
  0,
  [_NIN, _IT, _IAT, _RAo, _LCN, _DLC, _VSIGB, _DCR, _ACR, _ATc, _DAT, _DDCR, _DACR, _RAoo, _IMSC],
  [0, 0, 0, 0, 0, 2, 1, 0, 64 | 0, 64 | 0, 2, 2, 2, 0, () => InstanceMetadataServiceConfiguration]
);
export var UpdateNotebookInstanceLifecycleConfigInput = struct(
  n0,
  _UNILCI,
  0,
  [_NILCN, _OCn, _OSn],
  [0, () => NotebookInstanceLifecycleConfigList, () => NotebookInstanceLifecycleConfigList]
);
export var UpdateNotebookInstanceLifecycleConfigOutput = struct(n0, _UNILCO, 0, [], []);
export var UpdateNotebookInstanceOutput = struct(n0, _UNIO, 0, [], []);
export var AdditionalCodeRepositoryNamesOrUrls = 64 | 0;

export var NotebookInstanceAcceleratorTypes = 64 | 0;

export var NotebookInstanceLifecycleConfigList = list(n0, _NILCL, 0, () => NotebookInstanceLifecycleHook);
export var NotebookInstanceLifecycleConfigSummaryList = list(
  n0,
  _NILCSL,
  0,
  () => NotebookInstanceLifecycleConfigSummary
);
export var NotebookInstanceSummaryList = list(n0, _NISL, 0, () => NotebookInstanceSummary);
export var CreateNotebookInstance = op(
  n0,
  _CNI,
  0,
  () => CreateNotebookInstanceInput,
  () => CreateNotebookInstanceOutput
);
export var CreateNotebookInstanceLifecycleConfig = op(
  n0,
  _CNILC,
  0,
  () => CreateNotebookInstanceLifecycleConfigInput,
  () => CreateNotebookInstanceLifecycleConfigOutput
);
export var DeleteNotebookInstanceLifecycleConfig = op(
  n0,
  _DNILC,
  0,
  () => DeleteNotebookInstanceLifecycleConfigInput,
  () => Unit
);
export var DescribeNotebookInstance = op(
  n0,
  _DNIe,
  0,
  () => DescribeNotebookInstanceInput,
  () => DescribeNotebookInstanceOutput
);
export var DescribeNotebookInstanceLifecycleConfig = op(
  n0,
  _DNILCe,
  0,
  () => DescribeNotebookInstanceLifecycleConfigInput,
  () => DescribeNotebookInstanceLifecycleConfigOutput
);
export var ListNotebookInstanceLifecycleConfigs = op(
  n0,
  _LNILC,
  0,
  () => ListNotebookInstanceLifecycleConfigsInput,
  () => ListNotebookInstanceLifecycleConfigsOutput
);
export var ListNotebookInstances = op(
  n0,
  _LNI,
  0,
  () => ListNotebookInstancesInput,
  () => ListNotebookInstancesOutput
);
export var UpdateNotebookInstance = op(
  n0,
  _UNI,
  0,
  () => UpdateNotebookInstanceInput,
  () => UpdateNotebookInstanceOutput
);
export var UpdateNotebookInstanceLifecycleConfig = op(
  n0,
  _UNILC,
  0,
  () => UpdateNotebookInstanceLifecycleConfigInput,
  () => UpdateNotebookInstanceLifecycleConfigOutput
);
