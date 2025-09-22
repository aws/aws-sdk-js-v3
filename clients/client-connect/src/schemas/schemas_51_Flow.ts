// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidContactFlowException as __InvalidContactFlowException } from "../models/index";
import { _c, _CFI, _Co, _e, _h, _hE, _ICFE, _II, _m, _p, _PDr, _Pro, _UCFC, _UCFCR, _UCFCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidContactFlowException = error(
  n0,
  _ICFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_p],
  [() => Problems],

  __InvalidContactFlowException
);
export var ProblemDetail = struct(n0, _PDr, 0, [_m], [0]);
export var UpdateContactFlowContentRequest = struct(n0, _UCFCR, 0, [_II, _CFI, _Co], [[0, 1], [0, 1], 0]);
export var UpdateContactFlowContentResponse = struct(n0, _UCFCRp, 0, [], []);
export var Problems = list(n0, _Pro, 0, () => ProblemDetail);
export var UpdateContactFlowContent = op(
  n0,
  _UCFC,
  {
    [_h]: ["POST", "/contact-flows/{InstanceId}/{ContactFlowId}/content", 200],
  },
  () => UpdateContactFlowContentRequest,
  () => UpdateContactFlowContentResponse
);
