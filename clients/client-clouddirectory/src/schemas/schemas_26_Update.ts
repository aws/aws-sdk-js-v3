// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _OAA, _OAAT, _OAK, _OAU, _OAUL, _OAUV, n0, TypedAttributeValue } from "./schemas_0";
import { AttributeKey } from "./schemas_31_Attributes";

/* eslint no-var: 0 */

export var ObjectAttributeAction = struct(n0, _OAA, 0, [_OAAT, _OAUV], [0, () => TypedAttributeValue]);
export var ObjectAttributeUpdate = struct(n0, _OAU, 0, [_OAK, _OAA], [() => AttributeKey, () => ObjectAttributeAction]);
export var ObjectAttributeUpdateList = list(n0, _OAUL, 0, () => ObjectAttributeUpdate);
