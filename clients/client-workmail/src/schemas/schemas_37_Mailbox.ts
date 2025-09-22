// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GMD, _GMDR, _GMDRe, _MQ, _MS, _OI, _UIs, _UMQ, _UMQR, _UMQRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetMailboxDetailsRequest = struct(n0, _GMDR, 0, [_OI, _UIs], [0, 0]);
export var GetMailboxDetailsResponse = struct(n0, _GMDRe, 0, [_MQ, _MS], [1, 1]);
export var UpdateMailboxQuotaRequest = struct(n0, _UMQR, 0, [_OI, _UIs, _MQ], [0, 0, 1]);
export var UpdateMailboxQuotaResponse = struct(n0, _UMQRp, 0, [], []);
export var GetMailboxDetails = op(
  n0,
  _GMD,
  2,
  () => GetMailboxDetailsRequest,
  () => GetMailboxDetailsResponse
);
export var UpdateMailboxQuota = op(
  n0,
  _UMQ,
  2,
  () => UpdateMailboxQuotaRequest,
  () => UpdateMailboxQuotaResponse
);
