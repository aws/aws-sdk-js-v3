// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CAAFHIT, _CAAFHITR, _CAAFHITRr, _HITI, _NOAA, _URT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateAdditionalAssignmentsForHITRequest = struct(n0, _CAAFHITR, 0, [_HITI, _NOAA, _URT], [0, 1, 0]);
export var CreateAdditionalAssignmentsForHITResponse = struct(n0, _CAAFHITRr, 0, [], []);
export var CreateAdditionalAssignmentsForHIT = op(
  n0,
  _CAAFHIT,
  0,
  () => CreateAdditionalAssignmentsForHITRequest,
  () => CreateAdditionalAssignmentsForHITResponse
);
