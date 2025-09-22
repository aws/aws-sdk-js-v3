// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _AHA,
  _BA,
  _BN,
  _CA,
  _DARRS,
  _DARRSR,
  _DARRSRe,
  _En,
  _Enc,
  _FA,
  _HN,
  _HV,
  _IAMRARN,
  _IARN,
  _IRA,
  _IT,
  _KKA,
  _LA,
  _M,
  _Me,
  _N,
  _OA,
  _OKP,
  _RAe,
  _RAL,
  _Re,
  _RR,
  _RRL,
  _Rul,
  _S,
  _SA,
  _SAt,
  _SC,
  _Sc,
  _SE,
  _SNSA,
  _SRC,
  _TA,
  _TP,
  _WA,
  n0,
} from "./schemas_0";
import { ReceiptRuleSetMetadata } from "./schemas_26_Receipt";

/* eslint no-var: 0 */

export var AddHeaderAction = struct(n0, _AHA, 0, [_HN, _HV], [0, 0]);
export var BounceAction = struct(n0, _BA, 0, [_TA, _SRC, _SC, _M, _S], [0, 0, 0, 0, 0]);
export var ConnectAction = struct(n0, _CA, 0, [_IARN, _IAMRARN], [0, 0]);
export var DescribeActiveReceiptRuleSetRequest = struct(n0, _DARRSR, 0, [], []);
export var DescribeActiveReceiptRuleSetResponse = struct(
  n0,
  _DARRSRe,
  0,
  [_Me, _Rul],
  [() => ReceiptRuleSetMetadata, () => ReceiptRulesList]
);
export var LambdaAction = struct(n0, _LA, 0, [_TA, _FA, _IT], [0, 0, 0]);
export var ReceiptAction = struct(
  n0,
  _RAe,
  0,
  [_SA, _BA, _WA, _LA, _SAt, _AHA, _SNSA, _CA],
  [
    () => S3Action,
    () => BounceAction,
    () => WorkmailAction,
    () => LambdaAction,
    () => StopAction,
    () => AddHeaderAction,
    () => SNSAction,
    () => ConnectAction,
  ]
);
export var ReceiptRule = struct(
  n0,
  _RR,
  0,
  [_N, _En, _TP, _Re, _Ac, _SE],
  [0, 2, 0, 64 | 0, () => ReceiptActionsList, 2]
);
export var S3Action = struct(n0, _SA, 0, [_TA, _BN, _OKP, _KKA, _IRA], [0, 0, 0, 0, 0]);
export var SNSAction = struct(n0, _SNSA, 0, [_TA, _Enc], [0, 0]);
export var StopAction = struct(n0, _SAt, 0, [_Sc, _TA], [0, 0]);
export var WorkmailAction = struct(n0, _WA, 0, [_TA, _OA], [0, 0]);
export var ReceiptActionsList = list(n0, _RAL, 0, () => ReceiptAction);
export var ReceiptRulesList = list(n0, _RRL, 0, () => ReceiptRule);
export var RecipientsList = 64 | 0;

export var DescribeActiveReceiptRuleSet = op(
  n0,
  _DARRS,
  0,
  () => DescribeActiveReceiptRuleSetRequest,
  () => DescribeActiveReceiptRuleSetResponse
);
