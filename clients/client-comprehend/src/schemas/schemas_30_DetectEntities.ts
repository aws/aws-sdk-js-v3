// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _BI, _BO, _BR, _BRl, _CB, _CBh, _CBI, _En, _EO, _LOBR, _LOCB, _LOE, _Sc, _T, _Ty, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BlockReference = struct(n0, _BR, 0, [_BI, _BO, _EO, _CB], [0, 1, 1, () => ListOfChildBlocks]);
export var ChildBlock = struct(n0, _CBh, 0, [_CBI, _BO, _EO], [0, 1, 1]);
export var Entity = struct(n0, _En, 0, [_Sc, _Ty, _T, _BO, _EO, _BRl], [1, 0, 0, 1, 1, () => ListOfBlockReferences]);
export var ListOfBlockReferences = list(n0, _LOBR, 0, () => BlockReference);
export var ListOfChildBlocks = list(n0, _LOCB, 0, () => ChildBlock);
export var ListOfEntities = list(n0, _LOE, 0, () => Entity);
