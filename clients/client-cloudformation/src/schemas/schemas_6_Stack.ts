// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CreatedButModifiedException as __CreatedButModifiedException,
  NameAlreadyExistsException as __NameAlreadyExistsException,
} from "../models/index";
import {
  _Ac,
  _Acti,
  _AD,
  _aQE,
  _ARARN,
  _c,
  _CA,
  _Ca,
  _CBME,
  _CCS,
  _CCSI,
  _CCSO,
  _CRT,
  _CSI,
  _CSIr,
  _CSN,
  _CSO,
  _CSr,
  _CSSI,
  _CSSO,
  _CSSr,
  _CST,
  _CT,
  _CTl,
  _CTr,
  _CUR,
  _CURI,
  _CURO,
  _D,
  _DDS,
  _DI,
  _DM,
  _DR,
  _DSel,
  _DSes,
  _DSet,
  _DSI,
  _DSIC,
  _DSIe,
  _DSO,
  _DSr,
  _DSSe,
  _DSSIe,
  _DSSOe,
  _DSSOes,
  _DSSOI,
  _DSSOO,
  _DT,
  _DTel,
  _e,
  _EN,
  _ERN,
  _ETn,
  _ETP,
  _FSIC,
  _hE,
  _I,
  _IER,
  _INS,
  _IPSIC,
  _ISSIC,
  _LCT,
  _LDCT,
  _LRI,
  _LUT,
  _M,
  _ME,
  _NAEE,
  _NARN,
  _NT,
  _O,
  _OF,
  _OI,
  _OK,
  _OP,
  _OSF,
  _Ou,
  _OUI,
  _OV,
  _P,
  _PIa,
  _PM,
  _RARN,
  _RCo,
  _Re,
  _REOC,
  _RI,
  _RIo,
  _RR,
  _RS,
  _RSIo,
  _RSO,
  _RSo,
  _RT,
  _RTe,
  _RTI,
  _RTIes,
  _RTS,
  _S,
  _SDI,
  _SDS,
  _SDta,
  _SI,
  _SN,
  _SPB,
  _SPDUB,
  _SPDUURL,
  _SPURL,
  _SR,
  _SS,
  _SSARN,
  _SSDDD,
  _SSI,
  _SSN,
  _SSO,
  _SSR,
  _SSta,
  _St,
  _Sta,
  _Ta,
  _TB,
  _TIM,
  _TSIC,
  _TURL,
  _UPT,
  _US,
  _USI,
  _USO,
  _USS,
  _USSI,
  _USSO,
  n0,
  Unit,
} from "./schemas_0";
import { RollbackConfiguration, Tags } from "./schemas_5_Stack";
import { StackSetOperationPreferences, StackSetOperationStatusDetails } from "./schemas_10_Stack";
import { AutoDeployment, ManagedExecution } from "./schemas_11_Stack";
import { DeploymentTargets } from "./schemas_12_Stack";
import { _Parameters } from "./schemas_16_Stack";

/* eslint no-var: 0 */

export var ContinueUpdateRollbackInput = struct(n0, _CURI, 0, [_SN, _RARN, _RTS, _CRT], [0, 0, 64 | 0, 0]);
export var ContinueUpdateRollbackOutput = struct(n0, _CURO, 0, [], []);
export var CreateChangeSetInput = struct(
  n0,
  _CCSI,
  0,
  [_SN, _TB, _TURL, _UPT, _P, _Ca, _RTe, _RARN, _RCo, _NARN, _Ta, _CSN, _CTl, _D, _CST, _RTI, _INS, _OSF, _IER],
  [
    0,
    0,
    0,
    2,
    () => _Parameters,
    64 | 0,
    64 | 0,
    0,
    () => RollbackConfiguration,
    64 | 0,
    () => Tags,
    0,
    0,
    0,
    0,
    () => ResourcesToImport,
    2,
    0,
    2,
  ]
);
export var CreateChangeSetOutput = struct(n0, _CCSO, 0, [_I, _SI], [0, 0]);
export var CreatedButModifiedException = error(
  n0,
  _CBME,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`CreatedButModifiedException`, 409],
  },
  [_M],
  [0],

  __CreatedButModifiedException
);
export var CreateStackInput = struct(
  n0,
  _CSIr,
  0,
  [_SN, _TB, _TURL, _P, _DR, _RCo, _TIM, _NARN, _Ca, _RTe, _RARN, _OF, _SPB, _SPURL, _Ta, _CRT, _ETP, _REOC],
  [
    0,
    0,
    0,
    () => _Parameters,
    2,
    () => RollbackConfiguration,
    1,
    64 | 0,
    64 | 0,
    64 | 0,
    0,
    0,
    0,
    0,
    () => Tags,
    0,
    2,
    2,
  ]
);
export var CreateStackOutput = struct(n0, _CSO, 0, [_SI], [0]);
export var CreateStackSetInput = struct(
  n0,
  _CSSI,
  0,
  [_SSN, _D, _TB, _TURL, _SI, _P, _Ca, _Ta, _ARARN, _ERN, _PM, _AD, _CA, _CRT, _ME],
  [
    0,
    0,
    0,
    0,
    0,
    () => _Parameters,
    64 | 0,
    () => Tags,
    0,
    0,
    0,
    () => AutoDeployment,
    0,
    [0, 4],
    () => ManagedExecution,
  ]
);
export var CreateStackSetOutput = struct(n0, _CSSO, 0, [_SSI], [0]);
export var DeleteStackInput = struct(n0, _DSI, 0, [_SN, _RR, _RARN, _CRT, _DM], [0, 64 | 0, 0, 0, 0]);
export var DescribeStackSetInput = struct(n0, _DSSIe, 0, [_SSN, _CA], [0, 0]);
export var DescribeStackSetOperationInput = struct(n0, _DSSOI, 0, [_SSN, _OI, _CA], [0, 0, 0]);
export var DescribeStackSetOperationOutput = struct(n0, _DSSOO, 0, [_SSO], [() => StackSetOperation]);
export var DescribeStackSetOutput = struct(n0, _DSSOe, 0, [_SS], [() => StackSet]);
export var DescribeStacksInput = struct(n0, _DSIe, 0, [_SN, _NT], [0, 0]);
export var DescribeStacksOutput = struct(n0, _DSO, 0, [_St, _NT], [() => Stacks, 0]);
export var NameAlreadyExistsException = error(
  n0,
  _NAEE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`NameAlreadyExistsException`, 409],
  },
  [_M],
  [0],

  __NameAlreadyExistsException
);
export var Output = struct(n0, _O, 0, [_OK, _OV, _D, _EN], [0, 0, 0, 0]);
export var ResourceToImport = struct(n0, _RTIes, 0, [_RT, _LRI, _RI], [0, 0, 128 | 0]);
export var RollbackStackInput = struct(n0, _RSIo, 0, [_SN, _RARN, _CRT, _REOC], [0, 0, 0, 2]);
export var RollbackStackOutput = struct(n0, _RSO, 0, [_SI], [0]);
export var Stack = struct(
  n0,
  _Sta,
  0,
  [
    _SI,
    _SN,
    _CSI,
    _D,
    _P,
    _CT,
    _DTel,
    _LUT,
    _RCo,
    _SSta,
    _SSR,
    _DR,
    _NARN,
    _TIM,
    _Ca,
    _Ou,
    _RARN,
    _Ta,
    _ETP,
    _PIa,
    _RIo,
    _DI,
    _REOC,
    _DM,
    _DSet,
  ],
  [
    0,
    0,
    0,
    0,
    () => _Parameters,
    4,
    4,
    4,
    () => RollbackConfiguration,
    0,
    0,
    2,
    64 | 0,
    1,
    64 | 0,
    () => Outputs,
    0,
    () => Tags,
    2,
    0,
    0,
    () => StackDriftInformation,
    2,
    0,
    0,
  ]
);
export var StackDriftInformation = struct(n0, _SDI, 0, [_SDS, _LCT], [0, 4]);
export var StackSet = struct(
  n0,
  _SS,
  0,
  [_SSN, _SSI, _D, _S, _TB, _P, _Ca, _Ta, _SSARN, _ARARN, _ERN, _SSDDD, _AD, _PM, _OUI, _ME, _Re],
  [
    0,
    0,
    0,
    0,
    0,
    () => _Parameters,
    64 | 0,
    () => Tags,
    0,
    0,
    0,
    () => StackSetDriftDetectionDetails,
    () => AutoDeployment,
    0,
    64 | 0,
    () => ManagedExecution,
    64 | 0,
  ]
);
export var StackSetDriftDetectionDetails = struct(
  n0,
  _SSDDD,
  0,
  [_DSr, _DDS, _LDCT, _TSIC, _DSIC, _ISSIC, _IPSIC, _FSIC],
  [0, 0, 4, 1, 1, 1, 1, 1]
);
export var StackSetOperation = struct(
  n0,
  _SSO,
  0,
  [_OI, _SSI, _Acti, _S, _OP, _RS, _ARARN, _ERN, _CTr, _ETn, _DT, _SSDDD, _SR, _SDta],
  [
    0,
    0,
    0,
    0,
    () => StackSetOperationPreferences,
    2,
    0,
    0,
    4,
    4,
    () => DeploymentTargets,
    () => StackSetDriftDetectionDetails,
    0,
    () => StackSetOperationStatusDetails,
  ]
);
export var UpdateStackInput = struct(
  n0,
  _USI,
  0,
  [_SN, _TB, _TURL, _UPT, _SPDUB, _SPDUURL, _P, _Ca, _RTe, _RARN, _RCo, _SPB, _SPURL, _NARN, _Ta, _DR, _CRT, _REOC],
  [
    0,
    0,
    0,
    2,
    0,
    0,
    () => _Parameters,
    64 | 0,
    64 | 0,
    0,
    () => RollbackConfiguration,
    0,
    0,
    64 | 0,
    () => Tags,
    2,
    0,
    2,
  ]
);
export var UpdateStackOutput = struct(n0, _USO, 0, [_SI], [0]);
export var UpdateStackSetInput = struct(
  n0,
  _USSI,
  0,
  [_SSN, _D, _TB, _TURL, _UPT, _P, _Ca, _Ta, _OP, _ARARN, _ERN, _DT, _PM, _AD, _OI, _Ac, _Re, _CA, _ME],
  [
    0,
    0,
    0,
    0,
    2,
    () => _Parameters,
    64 | 0,
    () => Tags,
    () => StackSetOperationPreferences,
    0,
    0,
    () => DeploymentTargets,
    0,
    () => AutoDeployment,
    [0, 4],
    64 | 0,
    64 | 0,
    0,
    () => ManagedExecution,
  ]
);
export var UpdateStackSetOutput = struct(n0, _USSO, 0, [_OI], [0]);
export var Outputs = list(n0, _Ou, 0, () => Output);
export var ResourcesToImport = list(n0, _RTI, 0, () => ResourceToImport);
export var ResourcesToSkip = 64 | 0;

export var RetainResources = 64 | 0;

export var Stacks = list(n0, _St, 0, () => Stack);
export var ContinueUpdateRollback = op(
  n0,
  _CUR,
  0,
  () => ContinueUpdateRollbackInput,
  () => ContinueUpdateRollbackOutput
);
export var CreateChangeSet = op(
  n0,
  _CCS,
  0,
  () => CreateChangeSetInput,
  () => CreateChangeSetOutput
);
export var CreateStack = op(
  n0,
  _CSr,
  0,
  () => CreateStackInput,
  () => CreateStackOutput
);
export var CreateStackSet = op(
  n0,
  _CSSr,
  0,
  () => CreateStackSetInput,
  () => CreateStackSetOutput
);
export var DeleteStack = op(
  n0,
  _DSel,
  0,
  () => DeleteStackInput,
  () => Unit
);
export var DescribeStacks = op(
  n0,
  _DSes,
  0,
  () => DescribeStacksInput,
  () => DescribeStacksOutput
);
export var DescribeStackSet = op(
  n0,
  _DSSe,
  0,
  () => DescribeStackSetInput,
  () => DescribeStackSetOutput
);
export var DescribeStackSetOperation = op(
  n0,
  _DSSOes,
  0,
  () => DescribeStackSetOperationInput,
  () => DescribeStackSetOperationOutput
);
export var RollbackStack = op(
  n0,
  _RSo,
  0,
  () => RollbackStackInput,
  () => RollbackStackOutput
);
export var UpdateStack = op(
  n0,
  _US,
  0,
  () => UpdateStackInput,
  () => UpdateStackOutput
);
export var UpdateStackSet = op(
  n0,
  _USS,
  0,
  () => UpdateStackSetInput,
  () => UpdateStackSetOutput
);
