// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aA, _aTB, _aV, _DAVT, _DAVTR, _DAVTRe, _h, _PDAVT, _PDAVTR, _PDAVTRu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeAppVersionTemplateRequest = struct(n0, _DAVTR, 0, [_aA, _aV], [0, 0]);
export var DescribeAppVersionTemplateResponse = struct(n0, _DAVTRe, 0, [_aA, _aV, _aTB], [0, 0, 0]);
export var PutDraftAppVersionTemplateRequest = struct(n0, _PDAVTR, 0, [_aA, _aTB], [0, 0]);
export var PutDraftAppVersionTemplateResponse = struct(n0, _PDAVTRu, 0, [_aA, _aV], [0, 0]);
export var DescribeAppVersionTemplate = op(
  n0,
  _DAVT,
  {
    [_h]: ["POST", "/describe-app-version-template", 200],
  },
  () => DescribeAppVersionTemplateRequest,
  () => DescribeAppVersionTemplateResponse
);
export var PutDraftAppVersionTemplate = op(
  n0,
  _PDAVT,
  {
    [_h]: ["POST", "/put-draft-app-version-template", 200],
  },
  () => PutDraftAppVersionTemplateRequest,
  () => PutDraftAppVersionTemplateResponse
);
