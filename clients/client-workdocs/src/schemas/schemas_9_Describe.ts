// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _GM, _GML, _Id, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GroupMetadata = struct(n0, _GM, 0, [_Id, _N], [0, 0]);
export var GroupMetadataList = list(n0, _GML, 0, () => GroupMetadata);
