// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _CCDo,
  _CCI,
  _CCIo,
  _CCN,
  _CCO,
  _CCOL,
  _CCOo,
  _De,
  _ET,
  _Fa,
  _Fi,
  _GCCO,
  _GCCOI,
  _GCCOO,
  _GO,
  _GOI,
  _GOO,
  _h,
  _I,
  _Inf,
  _LCCO,
  _LCCOI,
  _LCCOO,
  _LM,
  _LO,
  _LOE,
  _LOEI,
  _LOEO,
  _LOI,
  _LOO,
  _LUT,
  _MR,
  _NT,
  _OE,
  _OEL,
  _OEp,
  _OI,
  _OL,
  _OP,
  _Op,
  _Ope,
  _Pa,
  _Pro,
  _RA,
  _Re,
  _RI,
  _RSC,
  _RT,
  _S,
  _SCC,
  _SCCI,
  _SCCO,
  _SM,
  _sp,
  _ST,
  _T,
  _Ti,
  _U,
  _W,
  n0,
} from "./schemas_0";
import { FilterList } from "./schemas_3_List";

/* eslint no-var: 0 */

export var ConfigurationCheckOperation = struct(
  n0,
  _CCO,
  0,
  [_I, _AI, _S, _SM, _CCI, _CCN, _CCDo, _ST, _ET, _RSC],
  [0, 0, 0, 0, 0, 0, 0, 4, 4, () => RuleStatusCounts]
);
export var GetConfigurationCheckOperationInput = struct(n0, _GCCOI, 0, [_OI], [0]);
export var GetConfigurationCheckOperationOutput = struct(n0, _GCCOO, 0, [_CCO], [() => ConfigurationCheckOperation]);
export var GetOperationInput = struct(n0, _GOI, 0, [_OI], [0]);
export var GetOperationOutput = struct(n0, _GOO, 0, [_Op], [[() => Operation, 0]]);
export var ListConfigurationCheckOperationsInput = struct(
  n0,
  _LCCOI,
  0,
  [_AI, _LM, _MR, _NT, _Fi],
  [0, 0, 1, 0, () => FilterList]
);
export var ListConfigurationCheckOperationsOutput = struct(
  n0,
  _LCCOO,
  0,
  [_CCOo, _NT],
  [() => ConfigurationCheckOperationList, 0]
);
export var ListOperationEventsInput = struct(n0, _LOEI, 0, [_OI, _MR, _NT, _Fi], [0, 1, 0, () => FilterList]);
export var ListOperationEventsOutput = struct(n0, _LOEO, 0, [_OE, _NT], [() => OperationEventList, 0]);
export var ListOperationsInput = struct(n0, _LOI, 0, [_AI, _MR, _NT, _Fi], [0, 1, 0, () => FilterList]);
export var ListOperationsOutput = struct(n0, _LOO, 0, [_Ope, _NT], [[() => OperationList, 0], 0]);
export var Operation = struct(
  n0,
  _Op,
  0,
  [_I, _T, _S, _SM, _Pro, _RT, _RI, _RA, _ST, _ET, _LUT],
  [0, 0, 0, 0, [() => OperationProperties, 0], 0, 0, 0, 4, 4, 4]
);
export var OperationEvent = struct(n0, _OEp, 0, [_De, _Re, _S, _SM, _Ti], [0, () => Resource, 0, 0, 4]);
export var Resource = struct(n0, _Re, 0, [_RA, _RT], [0, 0]);
export var RuleStatusCounts = struct(n0, _RSC, 0, [_Fa, _W, _Inf, _Pa, _U], [1, 1, 1, 1, 1]);
export var StartConfigurationChecksInput = struct(n0, _SCCI, 0, [_AI, _CCIo], [0, 64 | 0]);
export var StartConfigurationChecksOutput = struct(n0, _SCCO, 0, [_CCOo], [() => ConfigurationCheckOperationList]);
export var ConfigurationCheckOperationList = list(n0, _CCOL, 0, () => ConfigurationCheckOperation);
export var ConfigurationCheckTypeList = 64 | 0;

export var OperationEventList = list(n0, _OEL, 0, () => OperationEvent);
export var OperationList = list(n0, _OL, 0, [() => Operation, 0]);
export var OperationProperties = map(
  n0,
  _OP,
  {
    [_sp]: 1,
  },
  0,
  0
);
export var GetConfigurationCheckOperation = op(
  n0,
  _GCCO,
  {
    [_h]: ["POST", "/get-configuration-check-operation", 200],
  },
  () => GetConfigurationCheckOperationInput,
  () => GetConfigurationCheckOperationOutput
);
export var GetOperation = op(
  n0,
  _GO,
  {
    [_h]: ["POST", "/get-operation", 200],
  },
  () => GetOperationInput,
  () => GetOperationOutput
);
export var ListConfigurationCheckOperations = op(
  n0,
  _LCCO,
  {
    [_h]: ["POST", "/list-configuration-check-operations", 200],
  },
  () => ListConfigurationCheckOperationsInput,
  () => ListConfigurationCheckOperationsOutput
);
export var ListOperationEvents = op(
  n0,
  _LOE,
  {
    [_h]: ["POST", "/list-operation-events", 200],
  },
  () => ListOperationEventsInput,
  () => ListOperationEventsOutput
);
export var ListOperations = op(
  n0,
  _LO,
  {
    [_h]: ["POST", "/list-operations", 200],
  },
  () => ListOperationsInput,
  () => ListOperationsOutput
);
export var StartConfigurationChecks = op(
  n0,
  _SCC,
  {
    [_h]: ["POST", "/start-configuration-checks", 200],
  },
  () => StartConfigurationChecksInput,
  () => StartConfigurationChecksOutput
);
