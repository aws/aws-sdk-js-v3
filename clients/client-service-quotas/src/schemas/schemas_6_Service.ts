// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GAFSQT, _GAFSQTR, _GAFSQTRe, _SQTAS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetAssociationForServiceQuotaTemplateRequest = struct(n0, _GAFSQTR, 0, [], []);
export var GetAssociationForServiceQuotaTemplateResponse = struct(n0, _GAFSQTRe, 0, [_SQTAS], [0]);
export var Unit = "unit" as const;

export var GetAssociationForServiceQuotaTemplate = op(
  n0,
  _GAFSQT,
  0,
  () => GetAssociationForServiceQuotaTemplateRequest,
  () => GetAssociationForServiceQuotaTemplateResponse
);
