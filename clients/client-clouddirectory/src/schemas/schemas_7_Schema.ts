// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DA,
  _h,
  _LASA,
  _LASAR,
  _LASARi,
  _LDSA,
  _LDSAR,
  _LDSARi,
  _LMSA,
  _LMSAR,
  _LMSARi,
  _LPSA,
  _LPSAR,
  _LPSARi,
  _MR,
  _NT,
  _SA,
  _SAc,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListAppliedSchemaArnsRequest = struct(n0, _LASAR, 0, [_DA, _SA, _NT, _MR], [0, 0, 0, 1]);
export var ListAppliedSchemaArnsResponse = struct(n0, _LASARi, 0, [_SAc, _NT], [64 | 0, 0]);
export var ListDevelopmentSchemaArnsRequest = struct(n0, _LDSAR, 0, [_NT, _MR], [0, 1]);
export var ListDevelopmentSchemaArnsResponse = struct(n0, _LDSARi, 0, [_SAc, _NT], [64 | 0, 0]);
export var ListManagedSchemaArnsRequest = struct(n0, _LMSAR, 0, [_SA, _NT, _MR], [0, 0, 1]);
export var ListManagedSchemaArnsResponse = struct(n0, _LMSARi, 0, [_SAc, _NT], [64 | 0, 0]);
export var ListPublishedSchemaArnsRequest = struct(n0, _LPSAR, 0, [_SA, _NT, _MR], [0, 0, 1]);
export var ListPublishedSchemaArnsResponse = struct(n0, _LPSARi, 0, [_SAc, _NT], [64 | 0, 0]);
export var Arns = 64 | 0;

export var ListAppliedSchemaArns = op(
  n0,
  _LASA,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/schema/applied", 200],
  },
  () => ListAppliedSchemaArnsRequest,
  () => ListAppliedSchemaArnsResponse
);
export var ListDevelopmentSchemaArns = op(
  n0,
  _LDSA,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/schema/development", 200],
  },
  () => ListDevelopmentSchemaArnsRequest,
  () => ListDevelopmentSchemaArnsResponse
);
export var ListManagedSchemaArns = op(
  n0,
  _LMSA,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/schema/managed", 200],
  },
  () => ListManagedSchemaArnsRequest,
  () => ListManagedSchemaArnsResponse
);
export var ListPublishedSchemaArns = op(
  n0,
  _LPSA,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/schema/published", 200],
  },
  () => ListPublishedSchemaArnsRequest,
  () => ListPublishedSchemaArnsResponse
);
