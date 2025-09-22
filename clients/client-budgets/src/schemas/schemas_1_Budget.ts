// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AI,
  _AIc,
  _AM,
  _AST,
  _AT,
  _ATc,
  _ATT,
  _ATV,
  _BN,
  _CBA,
  _CBAR,
  _CBARr,
  _D,
  _DBA,
  _DBAe,
  _DBAR,
  _DBARe,
  _DBARes,
  _DBAResc,
  _ERA,
  _G,
  _IAD,
  _II,
  _NA,
  _NT,
  _OA,
  _PA,
  _PI,
  _R,
  _Re,
  _RT,
  _S,
  _SAD,
  _SADs,
  _Su,
  _TI,
  _U,
  _UBA,
  _UBAR,
  _UBARp,
  n0,
  Subscriber,
} from "./schemas_0";
import { ResourceTagList } from "./schemas_4_Resource";

/* eslint no-var: 0 */

export var Action = struct(
  n0,
  _A,
  0,
  [_AI, _BN, _NT, _AT, _ATc, _D, _ERA, _AM, _S, _Su],
  [0, 0, 0, 0, () => ActionThreshold, () => Definition, 0, 0, 0, [() => Subscribers, 0]]
);
export var ActionThreshold = struct(n0, _ATc, 0, [_ATV, _ATT], [1, 0]);
export var CreateBudgetActionRequest = struct(
  n0,
  _CBAR,
  0,
  [_AIc, _BN, _NT, _AT, _ATc, _D, _ERA, _AM, _Su, _RT],
  [0, 0, 0, 0, () => ActionThreshold, () => Definition, 0, 0, [() => Subscribers, 0], () => ResourceTagList]
);
export var CreateBudgetActionResponse = struct(n0, _CBARr, 0, [_AIc, _BN, _AI], [0, 0, 0]);
export var Definition = struct(
  n0,
  _D,
  0,
  [_IAD, _SAD, _SADs],
  [() => IamActionDefinition, () => ScpActionDefinition, () => SsmActionDefinition]
);
export var DeleteBudgetActionRequest = struct(n0, _DBAR, 0, [_AIc, _BN, _AI], [0, 0, 0]);
export var DeleteBudgetActionResponse = struct(n0, _DBARe, 0, [_AIc, _BN, _A], [0, 0, [() => Action, 0]]);
export var DescribeBudgetActionRequest = struct(n0, _DBARes, 0, [_AIc, _BN, _AI], [0, 0, 0]);
export var DescribeBudgetActionResponse = struct(n0, _DBAResc, 0, [_AIc, _BN, _A], [0, 0, [() => Action, 0]]);
export var IamActionDefinition = struct(n0, _IAD, 0, [_PA, _R, _G, _U], [0, 64 | 0, 64 | 0, 64 | 0]);
export var ScpActionDefinition = struct(n0, _SAD, 0, [_PI, _TI], [0, 64 | 0]);
export var SsmActionDefinition = struct(n0, _SADs, 0, [_AST, _Re, _II], [0, 0, 64 | 0]);
export var UpdateBudgetActionRequest = struct(
  n0,
  _UBAR,
  0,
  [_AIc, _BN, _AI, _NT, _ATc, _D, _ERA, _AM, _Su],
  [0, 0, 0, 0, () => ActionThreshold, () => Definition, 0, 0, [() => Subscribers, 0]]
);
export var UpdateBudgetActionResponse = struct(
  n0,
  _UBARp,
  0,
  [_AIc, _BN, _OA, _NA],
  [0, 0, [() => Action, 0], [() => Action, 0]]
);
export var Groups = 64 | 0;

export var InstanceIds = 64 | 0;

export var Roles = 64 | 0;

export var Subscribers = list(n0, _Su, 0, [() => Subscriber, 0]);
export var TargetIds = 64 | 0;

export var Users = 64 | 0;

export var CreateBudgetAction = op(
  n0,
  _CBA,
  0,
  () => CreateBudgetActionRequest,
  () => CreateBudgetActionResponse
);
export var DeleteBudgetAction = op(
  n0,
  _DBA,
  0,
  () => DeleteBudgetActionRequest,
  () => DeleteBudgetActionResponse
);
export var DescribeBudgetAction = op(
  n0,
  _DBAe,
  0,
  () => DescribeBudgetActionRequest,
  () => DescribeBudgetActionResponse
);
export var UpdateBudgetAction = op(
  n0,
  _UBA,
  0,
  () => UpdateBudgetActionRequest,
  () => UpdateBudgetActionResponse
);
