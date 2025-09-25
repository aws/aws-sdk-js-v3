// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aI, _BPH, _DRP, _DRR, _DRRL, _GDRP, _GDRPI, _GDRPO, _h, _P, _R, _SDRP, _SDRPI, _St, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Job";

/* eslint no-var: 0 */

export var DataRetrievalPolicy = struct(n0, _DRP, 0, [_R], [() => DataRetrievalRulesList]);
export var DataRetrievalRule = struct(n0, _DRR, 0, [_St, _BPH], [0, 1]);
export var GetDataRetrievalPolicyInput = struct(n0, _GDRPI, 0, [_aI], [[0, 1]]);
export var GetDataRetrievalPolicyOutput = struct(n0, _GDRPO, 0, [_P], [() => DataRetrievalPolicy]);
export var SetDataRetrievalPolicyInput = struct(n0, _SDRPI, 0, [_aI, _P], [[0, 1], () => DataRetrievalPolicy]);
export var DataRetrievalRulesList = list(n0, _DRRL, 0, () => DataRetrievalRule);
export var GetDataRetrievalPolicy = op(
  n0,
  _GDRP,
  {
    [_h]: ["GET", "/{accountId}/policies/data-retrieval", 200],
  },
  () => GetDataRetrievalPolicyInput,
  () => GetDataRetrievalPolicyOutput
);
export var SetDataRetrievalPolicy = op(
  n0,
  _SDRP,
  {
    [_h]: ["PUT", "/{accountId}/policies/data-retrieval", 204],
  },
  () => SetDataRetrievalPolicyInput,
  () => Unit
);
