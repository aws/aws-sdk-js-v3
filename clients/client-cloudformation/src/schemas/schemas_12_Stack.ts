// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  OperationIdAlreadyExistsException as __OperationIdAlreadyExistsException,
  StackNotFoundException as __StackNotFoundException,
  StaleRequestException as __StaleRequestException,
} from "../models/index";
import {
  _Ac,
  _Acc,
  _AFT,
  _AGR,
  _aQE,
  _AUc,
  _c,
  _CA,
  _CSII,
  _CSIO,
  _CSIre,
  _DSet,
  _DSIel,
  _DSIes,
  _DSII,
  _DSIIe,
  _DSIO,
  _DSIOe,
  _DSr,
  _DT,
  _e,
  _Fi,
  _hE,
  _ISTSS,
  _ISTSSI,
  _ISTSSO,
  _LDCT,
  _LOI,
  _LSII,
  _LSIi,
  _LSIO,
  _LSSADT,
  _LSSADTI,
  _LSSADTO,
  _LSSOR,
  _LSSORI,
  _LSSORO,
  _M,
  _MR,
  _N,
  _NT,
  _OI,
  _OIAEE,
  _OP,
  _ORF,
  _ORFp,
  _OUI,
  _OUIr,
  _PO,
  _Re,
  _Reg,
  _RS,
  _S,
  _SI,
  _SIA,
  _SICS,
  _SIF,
  _SIFt,
  _SIR,
  _SIS,
  _SISt,
  _SISta,
  _SIt,
  _SIta,
  _SIU,
  _SNFE,
  _SR,
  _SRE,
  _SSADTS,
  _SSADTSt,
  _SSI,
  _SSN,
  _SSORS,
  _SSORSt,
  _Su,
  _USII,
  _USIO,
  _USIp,
  _Va,
  n0,
} from "./schemas_0";
import { StackSetOperationPreferences } from "./schemas_10_Stack";
import { _Parameters } from "./schemas_16_Stack";

/* eslint no-var: 0 */

export var AccountGateResult = struct(n0, _AGR, 0, [_S, _SR], [0, 0]);
export var CreateStackInstancesInput = struct(
  n0,
  _CSII,
  0,
  [_SSN, _Ac, _DT, _Re, _PO, _OP, _OI, _CA],
  [0, 64 | 0, () => DeploymentTargets, 64 | 0, () => _Parameters, () => StackSetOperationPreferences, [0, 4], 0]
);
export var CreateStackInstancesOutput = struct(n0, _CSIO, 0, [_OI], [0]);
export var DeleteStackInstancesInput = struct(
  n0,
  _DSII,
  0,
  [_SSN, _Ac, _DT, _Re, _OP, _RS, _OI, _CA],
  [0, 64 | 0, () => DeploymentTargets, 64 | 0, () => StackSetOperationPreferences, 2, [0, 4], 0]
);
export var DeleteStackInstancesOutput = struct(n0, _DSIO, 0, [_OI], [0]);
export var DeploymentTargets = struct(n0, _DT, 0, [_Ac, _AUc, _OUI, _AFT], [64 | 0, 0, 64 | 0, 0]);
export var DescribeStackInstanceInput = struct(n0, _DSIIe, 0, [_SSN, _SIA, _SIR, _CA], [0, 0, 0, 0]);
export var DescribeStackInstanceOutput = struct(n0, _DSIOe, 0, [_SIt], [() => StackInstance]);
export var ImportStacksToStackSetInput = struct(
  n0,
  _ISTSSI,
  0,
  [_SSN, _SIta, _SIU, _OUI, _OP, _OI, _CA],
  [0, 64 | 0, 0, 64 | 0, () => StackSetOperationPreferences, [0, 4], 0]
);
export var ImportStacksToStackSetOutput = struct(n0, _ISTSSO, 0, [_OI], [0]);
export var ListStackInstancesInput = struct(
  n0,
  _LSII,
  0,
  [_SSN, _NT, _MR, _Fi, _SIA, _SIR, _CA],
  [0, 0, 1, () => StackInstanceFilters, 0, 0, 0]
);
export var ListStackInstancesOutput = struct(n0, _LSIO, 0, [_Su, _NT], [() => StackInstanceSummaries, 0]);
export var ListStackSetAutoDeploymentTargetsInput = struct(n0, _LSSADTI, 0, [_SSN, _NT, _MR, _CA], [0, 0, 1, 0]);
export var ListStackSetAutoDeploymentTargetsOutput = struct(
  n0,
  _LSSADTO,
  0,
  [_Su, _NT],
  [() => StackSetAutoDeploymentTargetSummaries, 0]
);
export var ListStackSetOperationResultsInput = struct(
  n0,
  _LSSORI,
  0,
  [_SSN, _OI, _NT, _MR, _CA, _Fi],
  [0, 0, 0, 1, 0, () => OperationResultFilters]
);
export var ListStackSetOperationResultsOutput = struct(
  n0,
  _LSSORO,
  0,
  [_Su, _NT],
  [() => StackSetOperationResultSummaries, 0]
);
export var OperationIdAlreadyExistsException = error(
  n0,
  _OIAEE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`OperationIdAlreadyExistsException`, 409],
  },
  [_M],
  [0],

  __OperationIdAlreadyExistsException
);
export var OperationResultFilter = struct(n0, _ORF, 0, [_N, _Va], [0, 0]);
export var StackInstance = struct(
  n0,
  _SIt,
  0,
  [_SSI, _Reg, _Acc, _SI, _PO, _S, _SIS, _SR, _OUIr, _DSr, _LDCT, _LOI],
  [0, 0, 0, 0, () => _Parameters, 0, () => StackInstanceComprehensiveStatus, 0, 0, 0, 4, 0]
);
export var StackInstanceComprehensiveStatus = struct(n0, _SICS, 0, [_DSet], [0]);
export var StackInstanceFilter = struct(n0, _SIF, 0, [_N, _Va], [0, 0]);
export var StackInstanceSummary = struct(
  n0,
  _SISt,
  0,
  [_SSI, _Reg, _Acc, _SI, _S, _SR, _SIS, _OUIr, _DSr, _LDCT, _LOI],
  [0, 0, 0, 0, 0, 0, () => StackInstanceComprehensiveStatus, 0, 0, 4, 0]
);
export var StackNotFoundException = error(
  n0,
  _SNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`StackNotFoundException`, 404],
  },
  [_M],
  [0],

  __StackNotFoundException
);
export var StackSetAutoDeploymentTargetSummary = struct(n0, _SSADTS, 0, [_OUIr, _Re], [0, 64 | 0]);
export var StackSetOperationResultSummary = struct(
  n0,
  _SSORS,
  0,
  [_Acc, _Reg, _S, _SR, _AGR, _OUIr],
  [0, 0, 0, 0, () => AccountGateResult, 0]
);
export var StaleRequestException = error(
  n0,
  _SRE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`StaleRequestException`, 409],
  },
  [_M],
  [0],

  __StaleRequestException
);
export var UpdateStackInstancesInput = struct(
  n0,
  _USII,
  0,
  [_SSN, _Ac, _DT, _Re, _PO, _OP, _OI, _CA],
  [0, 64 | 0, () => DeploymentTargets, 64 | 0, () => _Parameters, () => StackSetOperationPreferences, [0, 4], 0]
);
export var UpdateStackInstancesOutput = struct(n0, _USIO, 0, [_OI], [0]);
export var AccountList = 64 | 0;

export var OperationResultFilters = list(n0, _ORFp, 0, () => OperationResultFilter);
export var OrganizationalUnitIdList = 64 | 0;

export var StackIdList = 64 | 0;

export var StackInstanceFilters = list(n0, _SIFt, 0, () => StackInstanceFilter);
export var StackInstanceSummaries = list(n0, _SISta, 0, () => StackInstanceSummary);
export var StackSetAutoDeploymentTargetSummaries = list(n0, _SSADTSt, 0, () => StackSetAutoDeploymentTargetSummary);
export var StackSetOperationResultSummaries = list(n0, _SSORSt, 0, () => StackSetOperationResultSummary);
export var CreateStackInstances = op(
  n0,
  _CSIre,
  0,
  () => CreateStackInstancesInput,
  () => CreateStackInstancesOutput
);
export var DeleteStackInstances = op(
  n0,
  _DSIel,
  0,
  () => DeleteStackInstancesInput,
  () => DeleteStackInstancesOutput
);
export var DescribeStackInstance = op(
  n0,
  _DSIes,
  0,
  () => DescribeStackInstanceInput,
  () => DescribeStackInstanceOutput
);
export var ImportStacksToStackSet = op(
  n0,
  _ISTSS,
  0,
  () => ImportStacksToStackSetInput,
  () => ImportStacksToStackSetOutput
);
export var ListStackInstances = op(
  n0,
  _LSIi,
  0,
  () => ListStackInstancesInput,
  () => ListStackInstancesOutput
);
export var ListStackSetAutoDeploymentTargets = op(
  n0,
  _LSSADT,
  0,
  () => ListStackSetAutoDeploymentTargetsInput,
  () => ListStackSetAutoDeploymentTargetsOutput
);
export var ListStackSetOperationResults = op(
  n0,
  _LSSOR,
  0,
  () => ListStackSetOperationResultsInput,
  () => ListStackSetOperationResultsOutput
);
export var UpdateStackInstances = op(
  n0,
  _USIp,
  0,
  () => UpdateStackInstancesInput,
  () => UpdateStackInstancesOutput
);
