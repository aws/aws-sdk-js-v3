// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CTr,
  _DOOL,
  _DOOLe,
  _DOOLR,
  _DOOLRe,
  _DOOLRes,
  _DOOLResc,
  _DOON,
  _DOONe,
  _DOONR,
  _DOONRe,
  _DOONRes,
  _DOONResc,
  _EUOO,
  _F,
  _MR,
  _N,
  _NT,
  _O,
  _OOF,
  _OOFL,
  _OOL,
  _OOLA,
  _OOLI,
  _OOLIL,
  _OOLN,
  _OOLNp,
  _OON,
  _OONI,
  _OONIL,
  _OONp,
  _OOT,
  _POON,
  _POONR,
  _POONRu,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteOptedOutNumberRequest = struct(n0, _DOONR, 0, [_OOLN, _OON], [0, 0]);
export var DeleteOptedOutNumberResult = struct(n0, _DOONRe, 0, [_OOLA, _OOLN, _OON, _OOT, _EUOO], [0, 0, 0, 4, 2]);
export var DeleteOptOutListRequest = struct(n0, _DOOLR, 0, [_OOLN], [0]);
export var DeleteOptOutListResult = struct(n0, _DOOLRe, 0, [_OOLA, _OOLN, _CTr], [0, 0, 4]);
export var DescribeOptedOutNumbersRequest = struct(
  n0,
  _DOONRes,
  0,
  [_OOLN, _OONp, _F, _NT, _MR],
  [0, 64 | 0, () => OptedOutFilterList, 0, 1]
);
export var DescribeOptedOutNumbersResult = struct(
  n0,
  _DOONResc,
  0,
  [_OOLA, _OOLN, _OONp, _NT],
  [0, 0, () => OptedOutNumberInformationList, 0]
);
export var DescribeOptOutListsRequest = struct(n0, _DOOLRes, 0, [_OOLNp, _NT, _MR, _O], [64 | 0, 0, 1, 0]);
export var DescribeOptOutListsResult = struct(n0, _DOOLResc, 0, [_OOL, _NT], [() => OptOutListInformationList, 0]);
export var OptedOutFilter = struct(n0, _OOF, 0, [_N, _Va], [0, 64 | 0]);
export var OptedOutNumberInformation = struct(n0, _OONI, 0, [_OON, _OOT, _EUOO], [0, 4, 2]);
export var OptOutListInformation = struct(n0, _OOLI, 0, [_OOLA, _OOLN, _CTr], [0, 0, 4]);
export var PutOptedOutNumberRequest = struct(n0, _POONR, 0, [_OOLN, _OON], [0, 0]);
export var PutOptedOutNumberResult = struct(n0, _POONRu, 0, [_OOLA, _OOLN, _OON, _OOT, _EUOO], [0, 0, 0, 4, 2]);
export var OptedOutFilterList = list(n0, _OOFL, 0, () => OptedOutFilter);
export var OptedOutNumberInformationList = list(n0, _OONIL, 0, () => OptedOutNumberInformation);
export var OptedOutNumberList = 64 | 0;

export var OptOutListInformationList = list(n0, _OOLIL, 0, () => OptOutListInformation);
export var OptOutListNameList = 64 | 0;

export var DeleteOptedOutNumber = op(
  n0,
  _DOON,
  0,
  () => DeleteOptedOutNumberRequest,
  () => DeleteOptedOutNumberResult
);
export var DeleteOptOutList = op(
  n0,
  _DOOL,
  0,
  () => DeleteOptOutListRequest,
  () => DeleteOptOutListResult
);
export var DescribeOptedOutNumbers = op(
  n0,
  _DOONe,
  0,
  () => DescribeOptedOutNumbersRequest,
  () => DescribeOptedOutNumbersResult
);
export var DescribeOptOutLists = op(
  n0,
  _DOOLe,
  0,
  () => DescribeOptOutListsRequest,
  () => DescribeOptOutListsResult
);
export var PutOptedOutNumber = op(
  n0,
  _POON,
  0,
  () => PutOptedOutNumberRequest,
  () => PutOptedOutNumberResult
);
