// smithy-typescript generated code
import { list } from "@smithy/core/schema";

import { _AT, n0 } from "./schemas_0";
import { Tag } from "./schemas_25_Product";

/* eslint no-var: 0 */

export var AddTags = list(n0, _AT, 0, () => Tag);
export var TagKeys = 64 | 0;
