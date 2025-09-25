// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _bI, _bV, _PBN, _PBNa, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ParentBotNetwork = struct(n0, _PBN, 0, [_bI, _bV], [0, 0]);
export var ParentBotNetworks = list(n0, _PBNa, 0, () => ParentBotNetwork);
