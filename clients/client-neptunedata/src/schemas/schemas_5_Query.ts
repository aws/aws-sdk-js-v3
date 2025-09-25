// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  CancelledByUserException as __CancelledByUserException,
  ConcurrentModificationException as __ConcurrentModificationException,
  FailureByQueryException as __FailureByQueryException,
  InvalidNumericDataException as __InvalidNumericDataException,
  MalformedQueryException as __MalformedQueryException,
  ParsingException as __ParsingException,
  QueryLimitExceededException as __QueryLimitExceededException,
  QueryLimitException as __QueryLimitException,
  QueryTooLargeException as __QueryTooLargeException,
  TimeLimitExceededException as __TimeLimitExceededException,
} from "../models/index";
import {
  _acc,
  _aQC,
  _at,
  _c,
  _ca,
  _CBUE,
  _CGQ,
  _CGQI,
  _CGQO,
  _ch,
  _CME,
  _co,
  _COCQ,
  _COCQI,
  _COCQO,
  _dM,
  _e,
  _EGEQ,
  _EGEQI,
  _EGEQO,
  _EGPQ,
  _EGPQI,
  _EGPQO,
  _EGQ,
  _EGQI,
  _EGQO,
  _el,
  _eM,
  _EOCEQ,
  _EOCEQI,
  _EOCEQO,
  _EOCQ,
  _EOCQI,
  _EOCQO,
  _ex,
  _FBQE,
  _g,
  _GGQS,
  _GGQSI,
  _GGQSO,
  _GOCQS,
  _GOCQSI,
  _GOCQSO,
  _GQ,
  _gQ,
  _GQS,
  _GQSA,
  _h,
  _hE,
  _hH,
  _hQ,
  _INDE,
  _iO,
  _iW,
  _jN,
  _LGQ,
  _LGQI,
  _LGQO,
  _LOCQ,
  _LOCQI,
  _LOCQO,
  _m,
  _me,
  _MQE,
  _mT,
  _o,
  _OCQ,
  _oCQ,
  _p,
  _pa,
  _PE,
  _pO,
  _pr,
  _pro,
  _prof,
  _q,
  _QES,
  _qES,
  _qI,
  _QLE,
  _QLEE,
  _qS,
  _QTLE,
  _qu,
  _r,
  _RAT,
  _re,
  _rI,
  _rQC,
  _s,
  _se,
  _ser,
  _si,
  _su,
  _t,
  _TLEE,
  _w,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ReportAsText = sim(n0, _RAT, 21, {
  [_mT]: _t,
});
export var CancelGremlinQueryInput = struct(n0, _CGQI, 0, [_qI], [[0, 1]]);
export var CancelGremlinQueryOutput = struct(n0, _CGQO, 0, [_s], [0]);
export var CancelledByUserException = error(
  n0,
  _CBUE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __CancelledByUserException
);
export var CancelOpenCypherQueryInput = struct(
  n0,
  _COCQI,
  0,
  [_qI, _si],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _si,
      },
    ],
  ]
);
export var CancelOpenCypherQueryOutput = struct(n0, _COCQO, 0, [_s, _p], [0, 2]);
export var ConcurrentModificationException = error(
  n0,
  _CME,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __ConcurrentModificationException
);
export var ExecuteGremlinExplainQueryInput = struct(
  n0,
  _EGEQI,
  0,
  [_gQ],
  [
    [
      0,
      {
        [_jN]: _g,
      },
    ],
  ]
);
export var ExecuteGremlinExplainQueryOutput = struct(n0, _EGEQO, 0, [_o], [[() => ReportAsText, 16]]);
export var ExecuteGremlinProfileQueryInput = struct(
  n0,
  _EGPQI,
  0,
  [_gQ, _r, _ch, _ser, _iO],
  [
    [
      0,
      {
        [_jN]: _g,
      },
    ],
    [
      2,
      {
        [_jN]: _pr,
      },
    ],
    [
      1,
      {
        [_jN]: _pro,
      },
    ],
    [
      0,
      {
        [_jN]: _prof,
      },
    ],
    [
      2,
      {
        [_jN]: _pO,
      },
    ],
  ]
);
export var ExecuteGremlinProfileQueryOutput = struct(n0, _EGPQO, 0, [_o], [[() => ReportAsText, 16]]);
export var ExecuteGremlinQueryInput = struct(
  n0,
  _EGQI,
  0,
  [_gQ, _ser],
  [
    [
      0,
      {
        [_jN]: _g,
      },
    ],
    [
      0,
      {
        [_hH]: _acc,
      },
    ],
  ]
);
export var ExecuteGremlinQueryOutput = struct(
  n0,
  _EGQO,
  0,
  [_rI, _s, _re, _m],
  [0, () => GremlinQueryStatusAttributes, 15, 15]
);
export var ExecuteOpenCypherExplainQueryInput = struct(
  n0,
  _EOCEQI,
  0,
  [_oCQ, _pa, _eM],
  [
    [
      0,
      {
        [_jN]: _q,
      },
    ],
    0,
    [
      0,
      {
        [_jN]: _ex,
      },
    ],
  ]
);
export var ExecuteOpenCypherExplainQueryOutput = struct(n0, _EOCEQO, 0, [_r], [[21, 16]]);
export var ExecuteOpenCypherQueryInput = struct(
  n0,
  _EOCQI,
  0,
  [_oCQ, _pa],
  [
    [
      0,
      {
        [_jN]: _q,
      },
    ],
    0,
  ]
);
export var ExecuteOpenCypherQueryOutput = struct(n0, _EOCQO, 0, [_r], [15]);
export var FailureByQueryException = error(
  n0,
  _FBQE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __FailureByQueryException
);
export var GetGremlinQueryStatusInput = struct(n0, _GGQSI, 0, [_qI], [[0, 1]]);
export var GetGremlinQueryStatusOutput = struct(n0, _GGQSO, 0, [_qI, _qS, _qES], [0, 0, () => QueryEvalStats]);
export var GetOpenCypherQueryStatusInput = struct(n0, _GOCQSI, 0, [_qI], [[0, 1]]);
export var GetOpenCypherQueryStatusOutput = struct(n0, _GOCQSO, 0, [_qI, _qS, _qES], [0, 0, () => QueryEvalStats]);
export var GremlinQueryStatus = struct(n0, _GQS, 0, [_qI, _qS, _qES], [0, 0, () => QueryEvalStats]);
export var GremlinQueryStatusAttributes = struct(n0, _GQSA, 0, [_me, _co, _at], [0, 1, 15]);
export var InvalidNumericDataException = error(
  n0,
  _INDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __InvalidNumericDataException
);
export var ListGremlinQueriesInput = struct(
  n0,
  _LGQI,
  0,
  [_iW],
  [
    [
      2,
      {
        [_hQ]: _iW,
      },
    ],
  ]
);
export var ListGremlinQueriesOutput = struct(n0, _LGQO, 0, [_aQC, _rQC, _qu], [1, 1, () => GremlinQueries]);
export var ListOpenCypherQueriesInput = struct(
  n0,
  _LOCQI,
  0,
  [_iW],
  [
    [
      2,
      {
        [_hQ]: _iW,
      },
    ],
  ]
);
export var ListOpenCypherQueriesOutput = struct(n0, _LOCQO, 0, [_aQC, _rQC, _qu], [1, 1, () => OpenCypherQueries]);
export var MalformedQueryException = error(
  n0,
  _MQE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __MalformedQueryException
);
export var ParsingException = error(
  n0,
  _PE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __ParsingException
);
export var QueryEvalStats = struct(n0, _QES, 0, [_w, _el, _ca, _su], [1, 1, 2, 15]);
export var QueryLimitExceededException = error(
  n0,
  _QLEE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __QueryLimitExceededException
);
export var QueryLimitException = error(
  n0,
  _QLE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __QueryLimitException
);
export var QueryTooLargeException = error(
  n0,
  _QTLE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __QueryTooLargeException
);
export var TimeLimitExceededException = error(
  n0,
  _TLEE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __TimeLimitExceededException
);
export var GremlinQueries = list(n0, _GQ, 0, () => GremlinQueryStatus);
export var OpenCypherQueries = list(n0, _OCQ, 0, () => GremlinQueryStatus);
export var CancelGremlinQuery = op(
  n0,
  _CGQ,
  {
    [_h]: ["DELETE", "/gremlin/status/{queryId}", 200],
  },
  () => CancelGremlinQueryInput,
  () => CancelGremlinQueryOutput
);
export var CancelOpenCypherQuery = op(
  n0,
  _COCQ,
  {
    [_h]: ["DELETE", "/opencypher/status/{queryId}", 200],
  },
  () => CancelOpenCypherQueryInput,
  () => CancelOpenCypherQueryOutput
);
export var ExecuteGremlinExplainQuery = op(
  n0,
  _EGEQ,
  {
    [_h]: ["POST", "/gremlin/explain", 200],
  },
  () => ExecuteGremlinExplainQueryInput,
  () => ExecuteGremlinExplainQueryOutput
);
export var ExecuteGremlinProfileQuery = op(
  n0,
  _EGPQ,
  {
    [_h]: ["POST", "/gremlin/profile", 200],
  },
  () => ExecuteGremlinProfileQueryInput,
  () => ExecuteGremlinProfileQueryOutput
);
export var ExecuteGremlinQuery = op(
  n0,
  _EGQ,
  {
    [_h]: ["POST", "/gremlin", 200],
  },
  () => ExecuteGremlinQueryInput,
  () => ExecuteGremlinQueryOutput
);
export var ExecuteOpenCypherExplainQuery = op(
  n0,
  _EOCEQ,
  {
    [_h]: ["POST", "/opencypher/explain", 200],
  },
  () => ExecuteOpenCypherExplainQueryInput,
  () => ExecuteOpenCypherExplainQueryOutput
);
export var ExecuteOpenCypherQuery = op(
  n0,
  _EOCQ,
  {
    [_h]: ["POST", "/opencypher", 200],
  },
  () => ExecuteOpenCypherQueryInput,
  () => ExecuteOpenCypherQueryOutput
);
export var GetGremlinQueryStatus = op(
  n0,
  _GGQS,
  {
    [_h]: ["GET", "/gremlin/status/{queryId}", 200],
  },
  () => GetGremlinQueryStatusInput,
  () => GetGremlinQueryStatusOutput
);
export var GetOpenCypherQueryStatus = op(
  n0,
  _GOCQS,
  {
    [_h]: ["GET", "/opencypher/status/{queryId}", 200],
  },
  () => GetOpenCypherQueryStatusInput,
  () => GetOpenCypherQueryStatusOutput
);
export var ListGremlinQueries = op(
  n0,
  _LGQ,
  {
    [_h]: ["GET", "/gremlin/status", 200],
  },
  () => ListGremlinQueriesInput,
  () => ListGremlinQueriesOutput
);
export var ListOpenCypherQueries = op(
  n0,
  _LOCQ,
  {
    [_h]: ["GET", "/opencypher/status", 200],
  },
  () => ListOpenCypherQueriesInput,
  () => ListOpenCypherQueriesOutput
);
