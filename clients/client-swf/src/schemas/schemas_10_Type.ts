// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _co,
  _DC,
  _dCP,
  _DD,
  _DDes,
  _DDIe,
  _de,
  _dESTCT,
  _DI,
  _dI,
  _DIL,
  _DIo,
  _dIo,
  _dLR,
  _do,
  _dTHT,
  _dTL,
  _dTP,
  _dTSTCT,
  _dTSTCTe,
  _dTSTST,
  _LD,
  _LDI,
  _mPS,
  _n,
  _nPT,
  _RAT,
  _RATI,
  _RD,
  _RDI,
  _rO,
  _rS,
  _RWT,
  _RWTI,
  _s,
  _t,
  _v,
  _wERPID,
  n0,
  Unit,
} from "./schemas_0";
import { ResourceTagList } from "./schemas_1_Register";
import { TaskList } from "./schemas_20_Workflow";

/* eslint no-var: 0 */

export var DescribeDomainInput = struct(n0, _DDIe, 0, [_n], [0]);
export var DomainConfiguration = struct(n0, _DC, 0, [_wERPID], [0]);
export var DomainDetail = struct(n0, _DD, 0, [_dI, _co], [() => DomainInfo, () => DomainConfiguration]);
export var DomainInfo = struct(n0, _DI, 0, [_n, _s, _de, _a], [0, 0, 0, 0]);
export var DomainInfos = struct(n0, _DIo, 0, [_dIo, _nPT], [() => DomainInfoList, 0]);
export var ListDomainsInput = struct(n0, _LDI, 0, [_nPT, _rS, _mPS, _rO], [0, 0, 1, 2]);
export var RegisterActivityTypeInput = struct(
  n0,
  _RATI,
  0,
  [_do, _n, _v, _de, _dTSTCT, _dTHT, _dTL, _dTP, _dTSTST, _dTSTCTe],
  [0, 0, 0, 0, 0, 0, () => TaskList, 0, 0, 0]
);
export var RegisterDomainInput = struct(n0, _RDI, 0, [_n, _de, _wERPID, _t], [0, 0, 0, () => ResourceTagList]);
export var RegisterWorkflowTypeInput = struct(
  n0,
  _RWTI,
  0,
  [_do, _n, _v, _de, _dTSTCT, _dESTCT, _dTL, _dTP, _dCP, _dLR],
  [0, 0, 0, 0, 0, 0, () => TaskList, 0, 0, 0]
);
export var DomainInfoList = list(n0, _DIL, 0, () => DomainInfo);
export var DescribeDomain = op(
  n0,
  _DDes,
  0,
  () => DescribeDomainInput,
  () => DomainDetail
);
export var ListDomains = op(
  n0,
  _LD,
  0,
  () => ListDomainsInput,
  () => DomainInfos
);
export var RegisterActivityType = op(
  n0,
  _RAT,
  0,
  () => RegisterActivityTypeInput,
  () => Unit
);
export var RegisterDomain = op(
  n0,
  _RD,
  0,
  () => RegisterDomainInput,
  () => Unit
);
export var RegisterWorkflowType = op(
  n0,
  _RWT,
  0,
  () => RegisterWorkflowTypeInput,
  () => Unit
);
