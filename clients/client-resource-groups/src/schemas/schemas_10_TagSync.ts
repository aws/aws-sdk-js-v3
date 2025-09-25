// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _MR, _NT, _Q, _QE, _RI, _RQ, _SR, _SRI, _SRO, _Ty, n0 } from "./schemas_0";
import { QueryErrorList, ResourceIdentifierList } from "./schemas_2_TagSync";

/* eslint no-var: 0 */

export var ResourceQuery = struct(n0, _RQ, 0, [_Ty, _Q], [0, 0]);
export var SearchResourcesInput = struct(n0, _SRI, 0, [_RQ, _MR, _NT], [() => ResourceQuery, 1, 0]);
export var SearchResourcesOutput = struct(
  n0,
  _SRO,
  0,
  [_RI, _NT, _QE],
  [() => ResourceIdentifierList, 0, () => QueryErrorList]
);
export var SearchResources = op(
  n0,
  _SR,
  {
    [_h]: ["POST", "/resources/search", 200],
  },
  () => SearchResourcesInput,
  () => SearchResourcesOutput
);
