// smithy-typescript generated code
import { error, list, map, op, sim, struct } from "@smithy/core/schema";

import {
  DocumentServiceException as __DocumentServiceException,
  SearchException as __SearchException,
} from "../models/index";
import {
  _a,
  _B,
  _b,
  _BI,
  _BL,
  _Bu,
  _c,
  _cl,
  _CT,
  _cT,
  _cu,
  _d,
  _de,
  _DSE,
  _DSW,
  _DSWo,
  _e,
  _ex,
  _exp,
  _F,
  _f,
  _Fa,
  _fa,
  _fac,
  _fo,
  _fQ,
  _fq,
  _FS,
  _H,
  _h,
  _hH,
  _Hi,
  _hi,
  _hig,
  _hit,
  _HL,
  _hQ,
  _ht,
  _i,
  _m,
  _ma,
  _me,
  _mi,
  _mis,
  _p,
  _q,
  _q_,
  _qO,
  _qo,
  _qP,
  _qp,
  _r,
  _ri,
  _S,
  _s,
  _sc,
  _SE,
  _Se,
  _si,
  _SM,
  _SMu,
  _so,
  _sOS,
  _SR,
  _SRe,
  _SRu,
  _SRug,
  _SS,
  _SSu,
  _St,
  _st,
  _sta,
  _stat,
  _std,
  _Su,
  _su,
  _sug,
  _sugg,
  _sugge,
  _sugges,
  _t,
  _UD,
  _UDR,
  _UDRp,
  _v,
  _w,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var _Blob = sim(n0, _B, 42, {
  [_s]: 1,
});
export var Bucket = struct(n0, _Bu, 0, [_v, _c], [0, 1]);
export var BucketInfo = struct(n0, _BI, 0, [_b], [() => BucketList]);
export var DocumentServiceException = error(
  n0,
  _DSE,
  {
    [_e]: _cl,
  },
  [_st, _m],
  [0, 0],

  __DocumentServiceException
);
export var DocumentServiceWarning = struct(n0, _DSW, 0, [_m], [0]);
export var FieldStats = struct(n0, _FS, 0, [_mi, _ma, _c, _mis, _su, _sOS, _me, _std], [0, 0, 1, 1, 1, 1, 0, 1]);
export var Hit = struct(n0, _H, 0, [_i, _f, _ex, _h], [0, map(n0, _F, 0, 0, 64 | 0), 128 | 0, 128 | 0]);
export var Hits = struct(n0, _Hi, 0, [_fo, _sta, _cu, _hi], [1, 1, 0, () => HitList]);
export var SearchException = error(
  n0,
  _SE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __SearchException
);
export var SearchRequest = struct(
  n0,
  _SR,
  0,
  [_cu, _exp, _fa, _fQ, _hig, _p, _q, _qO, _qP, _r, _si, _so, _sta, _stat],
  [
    [
      0,
      {
        [_hQ]: _cu,
      },
    ],
    [
      0,
      {
        [_hQ]: _exp,
      },
    ],
    [
      0,
      {
        [_hQ]: _fa,
      },
    ],
    [
      0,
      {
        [_hQ]: _fq,
      },
    ],
    [
      0,
      {
        [_hQ]: _hig,
      },
    ],
    [
      2,
      {
        [_hQ]: _p,
      },
    ],
    [
      0,
      {
        [_hQ]: _q_,
      },
    ],
    [
      0,
      {
        [_hQ]: _qo,
      },
    ],
    [
      0,
      {
        [_hQ]: _qp,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    [
      1,
      {
        [_hQ]: _si,
      },
    ],
    [
      0,
      {
        [_hQ]: _so,
      },
    ],
    [
      1,
      {
        [_hQ]: _sta,
      },
    ],
    [
      0,
      {
        [_hQ]: _stat,
      },
    ],
  ]
);
export var SearchResponse = struct(
  n0,
  _SRe,
  0,
  [_st, _hit, _fac, _stat],
  [() => SearchStatus, () => Hits, () => Facets, () => Stats]
);
export var SearchStatus = struct(n0, _SS, 0, [_t, _ri], [1, 0]);
export var SuggestionMatch = struct(n0, _SM, 0, [_sug, _sc, _i], [0, 1, 0]);
export var SuggestModel = struct(n0, _SMu, 0, [_q, _fo, _sugg], [0, 1, () => Suggestions]);
export var SuggestRequest = struct(
  n0,
  _SRu,
  0,
  [_q, _sugge, _si],
  [
    [
      0,
      {
        [_hQ]: _q_,
      },
    ],
    [
      0,
      {
        [_hQ]: _sugge,
      },
    ],
    [
      1,
      {
        [_hQ]: _si,
      },
    ],
  ]
);
export var SuggestResponse = struct(n0, _SRug, 0, [_st, _sugges], [() => SuggestStatus, () => SuggestModel]);
export var SuggestStatus = struct(n0, _SSu, 0, [_t, _ri], [1, 0]);
export var UploadDocumentsRequest = struct(
  n0,
  _UDR,
  0,
  [_d, _cT],
  [
    [() => _Blob, 16],
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
  ]
);
export var UploadDocumentsResponse = struct(n0, _UDRp, 0, [_st, _a, _de, _w], [0, 1, 1, () => DocumentServiceWarnings]);
export var Unit = "unit" as const;

export var BucketList = list(n0, _BL, 0, () => Bucket);
export var DocumentServiceWarnings = list(n0, _DSWo, 0, () => DocumentServiceWarning);
export var FieldValue = 64 | 0;

export var HitList = list(n0, _HL, 0, () => Hit);
export var Suggestions = list(n0, _S, 0, () => SuggestionMatch);
export var Exprs = 128 | 0;

export var Facets = map(n0, _Fa, 0, 0, () => BucketInfo);
export var Fields = map(n0, _F, 0, 0, 64 | 0);
export var Highlights = 128 | 0;

export var Stats = map(n0, _St, 0, 0, () => FieldStats);
export var Search = op(
  n0,
  _Se,
  {
    [_ht]: ["GET", "/2013-01-01/search?format=sdk&pretty=true", 200],
  },
  () => SearchRequest,
  () => SearchResponse
);
export var Suggest = op(
  n0,
  _Su,
  {
    [_ht]: ["GET", "/2013-01-01/suggest?format=sdk&pretty=true", 200],
  },
  () => SuggestRequest,
  () => SuggestResponse
);
export var UploadDocuments = op(
  n0,
  _UD,
  {
    [_ht]: ["POST", "/2013-01-01/documents/batch?format=sdk", 200],
  },
  () => UploadDocumentsRequest,
  () => UploadDocumentsResponse
);
