const _B = "Blob";
const _BI = "BucketInfo";
const _BL = "BucketList";
const _Bu = "Bucket";
const _CT = "Content-Type";
const _DSE = "DocumentServiceException";
const _DSW = "DocumentServiceWarning";
const _DSWo = "DocumentServiceWarnings";
const _F = "Fields";
const _FS = "FieldStats";
const _Fa = "Facets";
const _H = "Hit";
const _HL = "HitList";
const _Hi = "Hits";
const _S = "Suggestions";
const _SE = "SearchException";
const _SM = "SuggestionMatch";
const _SMu = "SuggestModel";
const _SR = "SearchRequest";
const _SRe = "SearchResponse";
const _SRu = "SuggestRequest";
const _SRug = "SuggestResponse";
const _SS = "SearchStatus";
const _SSu = "SuggestStatus";
const _Se = "Search";
const _St = "Stats";
const _Su = "Suggest";
const _UD = "UploadDocuments";
const _UDR = "UploadDocumentsRequest";
const _UDRp = "UploadDocumentsResponse";
const _a = "adds";
const _b = "buckets";
const _c = "count";
const _cT = "contentType";
const _cl = "client";
const _cu = "cursor";
const _d = "documents";
const _de = "deletes";
const _e = "error";
const _ex = "exprs";
const _exp = "expr";
const _f = "fields";
const _fQ = "filterQuery";
const _fa = "facet";
const _fac = "facets";
const _fo = "found";
const _fq = "fq";
const _h = "highlights";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _hi = "hit";
const _hig = "highlight";
const _hit = "hits";
const _ht = "http";
const _i = "id";
const _m = "message";
const _ma = "max";
const _me = "mean";
const _mi = "min";
const _mis = "missing";
const _p = "partial";
const _q = "query";
const _qO = "queryOptions";
const _qP = "queryParser";
const _q_ = "q";
const _qo = "q.options";
const _qp = "q.parser";
const _r = "return";
const _ri = "rid";
const _s = "streaming";
const _sOS = "sumOfSquares";
const _sc = "score";
const _si = "size";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.cloudsearchdomain";
const _so = "sort";
const _st = "status";
const _sta = "start";
const _stat = "stats";
const _std = "stddev";
const _su = "sum";
const _sug = "suggestion";
const _sugg = "suggestions";
const _sugge = "suggester";
const _sugges = "suggest";
const _t = "timems";
const _v = "value";
const _w = "warnings";
const n0 = "com.amazonaws.cloudsearchdomain";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { CloudSearchDomainServiceException as __CloudSearchDomainServiceException } from "../models/CloudSearchDomainServiceException";
import {
  DocumentServiceException as __DocumentServiceException,
  SearchException as __SearchException,
} from "../models/index";

/* eslint no-var: 0 */

export var _Blob: StaticSimpleSchema = [
  0,
  n0,
  _B,
  {
    [_s]: 1,
  },
  42,
];
export var Bucket: StaticStructureSchema = [3, n0, _Bu, 0, [_v, _c], [0, 1]];
export var BucketInfo: StaticStructureSchema = [3, n0, _BI, 0, [_b], [() => BucketList]];
export var DocumentServiceException: StaticErrorSchema = [
  -3,
  n0,
  _DSE,
  {
    [_e]: _cl,
  },
  [_st, _m],
  [0, 0],
];
TypeRegistry.for(n0).registerError(DocumentServiceException, __DocumentServiceException);

export var DocumentServiceWarning: StaticStructureSchema = [3, n0, _DSW, 0, [_m], [0]];
export var FieldStats: StaticStructureSchema = [
  3,
  n0,
  _FS,
  0,
  [_mi, _ma, _c, _mis, _su, _sOS, _me, _std],
  [0, 0, 1, 1, 1, 1, 0, 1],
];
export var Hit: StaticStructureSchema = [
  3,
  n0,
  _H,
  0,
  [_i, _f, _ex, _h],
  [0, [2, n0, _F, 0, 0, 64 | 0], 128 | 0, 128 | 0],
];
export var Hits: StaticStructureSchema = [3, n0, _Hi, 0, [_fo, _sta, _cu, _hi], [1, 1, 0, () => HitList]];
export var SearchException: StaticErrorSchema = [
  -3,
  n0,
  _SE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(SearchException, __SearchException);

export var SearchRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var SearchResponse: StaticStructureSchema = [
  3,
  n0,
  _SRe,
  0,
  [_st, _hit, _fac, _stat],
  [() => SearchStatus, () => Hits, () => Facets, () => Stats],
];
export var SearchStatus: StaticStructureSchema = [3, n0, _SS, 0, [_t, _ri], [1, 0]];
export var SuggestionMatch: StaticStructureSchema = [3, n0, _SM, 0, [_sug, _sc, _i], [0, 1, 0]];
export var SuggestModel: StaticStructureSchema = [3, n0, _SMu, 0, [_q, _fo, _sugg], [0, 1, () => Suggestions]];
export var SuggestRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var SuggestResponse: StaticStructureSchema = [
  3,
  n0,
  _SRug,
  0,
  [_st, _sugges],
  [() => SuggestStatus, () => SuggestModel],
];
export var SuggestStatus: StaticStructureSchema = [3, n0, _SSu, 0, [_t, _ri], [1, 0]];
export var UploadDocumentsRequest: StaticStructureSchema = [
  3,
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
  ],
];
export var UploadDocumentsResponse: StaticStructureSchema = [
  3,
  n0,
  _UDRp,
  0,
  [_st, _a, _de, _w],
  [0, 1, 1, () => DocumentServiceWarnings],
];
export var __Unit = "unit" as const;

export var CloudSearchDomainServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "CloudSearchDomainServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(CloudSearchDomainServiceException, __CloudSearchDomainServiceException);

export var BucketList: StaticListSchema = [1, n0, _BL, 0, () => Bucket];
export var DocumentServiceWarnings: StaticListSchema = [1, n0, _DSWo, 0, () => DocumentServiceWarning];
export var FieldValue = 64 | 0;

export var HitList: StaticListSchema = [1, n0, _HL, 0, () => Hit];
export var Suggestions: StaticListSchema = [1, n0, _S, 0, () => SuggestionMatch];
export var Exprs = 128 | 0;

export var Facets: StaticMapSchema = [2, n0, _Fa, 0, 0, () => BucketInfo];
export var Fields: StaticMapSchema = [2, n0, _F, 0, 0, 64 | 0];
export var Highlights = 128 | 0;

export var Stats: StaticMapSchema = [2, n0, _St, 0, 0, () => FieldStats];
export var Search: StaticOperationSchema = [
  9,
  n0,
  _Se,
  {
    [_ht]: ["GET", "/2013-01-01/search?format=sdk&pretty=true", 200],
  },
  () => SearchRequest,
  () => SearchResponse,
];
export var Suggest: StaticOperationSchema = [
  9,
  n0,
  _Su,
  {
    [_ht]: ["GET", "/2013-01-01/suggest?format=sdk&pretty=true", 200],
  },
  () => SuggestRequest,
  () => SuggestResponse,
];
export var UploadDocuments: StaticOperationSchema = [
  9,
  n0,
  _UD,
  {
    [_ht]: ["POST", "/2013-01-01/documents/batch?format=sdk", 200],
  },
  () => UploadDocumentsRequest,
  () => UploadDocumentsResponse,
];
