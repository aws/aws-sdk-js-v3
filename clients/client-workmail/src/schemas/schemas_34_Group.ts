// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _EI,
  _F,
  _GI,
  _GIro,
  _GIrou,
  _GN,
  _GNP,
  _Gr,
  _LGFE,
  _LGFEF,
  _LGFER,
  _LGFERi,
  _MRa,
  _NT,
  _OI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GroupIdentifier = struct(n0, _GIro, 0, [_GI, _GN], [0, 0]);
export var ListGroupsForEntityFilters = struct(n0, _LGFEF, 0, [_GNP], [0]);
export var ListGroupsForEntityRequest = struct(
  n0,
  _LGFER,
  0,
  [_OI, _EI, _F, _NT, _MRa],
  [0, 0, () => ListGroupsForEntityFilters, 0, 1]
);
export var ListGroupsForEntityResponse = struct(n0, _LGFERi, 0, [_Gr, _NT], [() => GroupIdentifiers, 0]);
export var GroupIdentifiers = list(n0, _GIrou, 0, () => GroupIdentifier);
export var ListGroupsForEntity = op(
  n0,
  _LGFE,
  2,
  () => ListGroupsForEntityRequest,
  () => ListGroupsForEntityResponse
);
