// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Ar,
  _CIa,
  _CIR,
  _CIRa,
  _CT,
  _DIe,
  _DIR,
  _DIRe,
  _DSI,
  _EI,
  _h,
  _hQ,
  _II,
  _Ing,
  _Inge,
  _ISIB,
  _ISn,
  _ITIS,
  _LIis,
  _LIR,
  _LIRi,
  _M,
  _MR,
  _mr,
  _NT,
  _nt,
  _QIu,
  _QIue,
  _RDo,
  _RI,
  _RIow,
  _RIows,
  _RSeq,
  _RT,
  _St,
  _T,
  _TRID,
  _WOI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelIngestionRequest = struct(
  n0,
  _CIR,
  0,
  [_AAI, _DSI, _II],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var CancelIngestionResponse = struct(n0, _CIRa, 0, [_Ar, _II, _RI, _St], [0, 0, 0, [1, 32]]);
export var DescribeIngestionRequest = struct(
  n0,
  _DIR,
  0,
  [_AAI, _DSI, _II],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeIngestionResponse = struct(n0, _DIRe, 0, [_Ing, _RI, _St], [() => Ingestion, 0, [1, 32]]);
export var ErrorInfo = struct(n0, _EI, 0, [_T, _M], [0, 0]);
export var Ingestion = struct(
  n0,
  _Ing,
  0,
  [_Ar, _II, _ISn, _EI, _RIow, _QIu, _CT, _ITIS, _ISIB, _RSeq, _RT],
  [0, 0, 0, () => ErrorInfo, () => RowInfo, () => QueueInfo, 4, 1, 1, 0, 0]
);
export var ListIngestionsRequest = struct(
  n0,
  _LIR,
  0,
  [_DSI, _NT, _AAI, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [0, 1],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListIngestionsResponse = struct(n0, _LIRi, 0, [_Inge, _NT, _RI, _St], [() => Ingestions, 0, 0, [1, 32]]);
export var QueueInfo = struct(n0, _QIu, 0, [_WOI, _QIue], [0, 0]);
export var RowInfo = struct(n0, _RIow, 0, [_RIows, _RDo, _TRID], [1, 1, 1]);
export var Ingestions = list(n0, _Inge, 0, () => Ingestion);
export var CancelIngestion = op(
  n0,
  _CIa,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}", 200],
  },
  () => CancelIngestionRequest,
  () => CancelIngestionResponse
);
export var DescribeIngestion = op(
  n0,
  _DIe,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}", 200],
  },
  () => DescribeIngestionRequest,
  () => DescribeIngestionResponse
);
export var ListIngestions = op(
  n0,
  _LIis,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions", 200],
  },
  () => ListIngestionsRequest,
  () => ListIngestionsResponse
);
