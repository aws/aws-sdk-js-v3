// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _ANl, _Ar, _DTA, _DTAR, _DTARe, _h, _RI, _St, _TIe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTemplateAliasRequest = struct(
  n0,
  _DTAR,
  0,
  [_AAI, _TIe, _ANl],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteTemplateAliasResponse = struct(n0, _DTARe, 0, [_St, _TIe, _ANl, _Ar, _RI], [[1, 32], 0, 0, 0, 0]);
export var DeleteTemplateAlias = op(
  n0,
  _DTA,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}", 200],
  },
  () => DeleteTemplateAliasRequest,
  () => DeleteTemplateAliasResponse
);
