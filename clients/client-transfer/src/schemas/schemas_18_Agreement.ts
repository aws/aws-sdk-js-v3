// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Agr,
  _AI,
  _Ar,
  _D,
  _LAi,
  _LAist,
  _LAistg,
  _LARis,
  _LARist,
  _LPI,
  _MRa,
  _NT,
  _PPI,
  _S,
  _SI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListAgreementsRequest = struct(n0, _LARis, 0, [_MRa, _NT, _SI], [1, 0, 0]);
export var ListAgreementsResponse = struct(n0, _LARist, 0, [_NT, _Agr], [0, () => ListedAgreements]);
export var ListedAgreement = struct(n0, _LAi, 0, [_Ar, _AI, _D, _S, _SI, _LPI, _PPI], [0, 0, 0, 0, 0, 0, 0]);
export var ListedAgreements = list(n0, _LAist, 0, () => ListedAgreement);
export var ListAgreements = op(
  n0,
  _LAistg,
  0,
  () => ListAgreementsRequest,
  () => ListAgreementsResponse
);
