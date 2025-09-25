// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CidrBlockInUseException as __CidrBlockInUseException,
  CidrCollectionInUseException as __CidrCollectionInUseException,
  CidrCollectionVersionMismatchException as __CidrCollectionVersionMismatchException,
  NoSuchCidrCollectionException as __NoSuchCidrCollectionException,
  NoSuchCidrLocationException as __NoSuchCidrLocationException,
} from "../models/index";
import {
  _A,
  _Ar,
  _c,
  _CBi,
  _CBid,
  _CBIUE,
  _CBS,
  _CBSi,
  _CCC,
  _CCCh,
  _CCCi,
  _CCCR,
  _CCCRh,
  _CCi,
  _CCIUE,
  _CCVME,
  _Cha,
  _Ci,
  _CIo,
  _CL,
  _CLi,
  _CS,
  _CSo,
  _CV,
  _DCC,
  _DCCR,
  _DCCRe,
  _e,
  _hE,
  _hQ,
  _ht,
  _I,
  _l,
  _LCB,
  _LCBR,
  _LCBRi,
  _LCC,
  _LCCR,
  _LCCRi,
  _LCL,
  _LCLR,
  _LCLRi,
  _LN,
  _LSo,
  _LSoc,
  _M,
  _ma,
  _MR,
  _N,
  _n,
  _NSCCE,
  _NSCLE,
  _NT,
  _Ve,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChangeCidrCollectionRequest = struct(
  n0,
  _CCCR,
  0,
  [_I, _CV, _Cha],
  [[0, 1], 1, [() => CidrCollectionChanges, 0]]
);
export var ChangeCidrCollectionResponse = struct(n0, _CCCRh, 0, [_I], [0]);
export var CidrBlockInUseException = error(
  n0,
  _CBIUE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __CidrBlockInUseException
);
export var CidrBlockSummary = struct(n0, _CBS, 0, [_CBi, _LN], [0, 0]);
export var CidrCollectionChange = struct(n0, _CCC, 0, [_LN, _A, _CL], [0, 0, [() => CidrList, 0]]);
export var CidrCollectionInUseException = error(
  n0,
  _CCIUE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __CidrCollectionInUseException
);
export var CidrCollectionVersionMismatchException = error(
  n0,
  _CCVME,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __CidrCollectionVersionMismatchException
);
export var CollectionSummary = struct(n0, _CS, 0, [_Ar, _I, _N, _Ve], [0, 0, 0, 1]);
export var DeleteCidrCollectionRequest = struct(n0, _DCCR, 0, [_I], [[0, 1]]);
export var DeleteCidrCollectionResponse = struct(n0, _DCCRe, 0, [], []);
export var ListCidrBlocksRequest = struct(
  n0,
  _LCBR,
  0,
  [_CIo, _LN, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _l,
      },
    ],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      1,
      {
        [_hQ]: _ma,
      },
    ],
  ]
);
export var ListCidrBlocksResponse = struct(n0, _LCBRi, 0, [_NT, _CBid], [0, () => CidrBlockSummaries]);
export var ListCidrCollectionsRequest = struct(
  n0,
  _LCCR,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      1,
      {
        [_hQ]: _ma,
      },
    ],
  ]
);
export var ListCidrCollectionsResponse = struct(n0, _LCCRi, 0, [_NT, _CCi], [0, () => CollectionSummaries]);
export var ListCidrLocationsRequest = struct(
  n0,
  _LCLR,
  0,
  [_CIo, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      1,
      {
        [_hQ]: _ma,
      },
    ],
  ]
);
export var ListCidrLocationsResponse = struct(n0, _LCLRi, 0, [_NT, _CLi], [0, () => LocationSummaries]);
export var LocationSummary = struct(n0, _LSo, 0, [_LN], [0]);
export var NoSuchCidrCollectionException = error(
  n0,
  _NSCCE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NoSuchCidrCollectionException
);
export var NoSuchCidrLocationException = error(
  n0,
  _NSCLE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NoSuchCidrLocationException
);
export var CidrBlockSummaries = list(n0, _CBSi, 0, () => CidrBlockSummary);
export var CidrCollectionChanges = list(n0, _CCCi, 0, [() => CidrCollectionChange, 0]);
export var CidrList = list(n0, _CL, 0, [
  0,
  {
    [_xN]: _Ci,
  },
]);
export var CollectionSummaries = list(n0, _CSo, 0, () => CollectionSummary);
export var LocationSummaries = list(n0, _LSoc, 0, () => LocationSummary);
export var ChangeCidrCollection = op(
  n0,
  _CCCh,
  {
    [_ht]: ["POST", "/2013-04-01/cidrcollection/{Id}", 200],
  },
  () => ChangeCidrCollectionRequest,
  () => ChangeCidrCollectionResponse
);
export var DeleteCidrCollection = op(
  n0,
  _DCC,
  {
    [_ht]: ["DELETE", "/2013-04-01/cidrcollection/{Id}", 200],
  },
  () => DeleteCidrCollectionRequest,
  () => DeleteCidrCollectionResponse
);
export var ListCidrBlocks = op(
  n0,
  _LCB,
  {
    [_ht]: ["GET", "/2013-04-01/cidrcollection/{CollectionId}/cidrblocks", 200],
  },
  () => ListCidrBlocksRequest,
  () => ListCidrBlocksResponse
);
export var ListCidrCollections = op(
  n0,
  _LCC,
  {
    [_ht]: ["GET", "/2013-04-01/cidrcollection", 200],
  },
  () => ListCidrCollectionsRequest,
  () => ListCidrCollectionsResponse
);
export var ListCidrLocations = op(
  n0,
  _LCL,
  {
    [_ht]: ["GET", "/2013-04-01/cidrcollection/{CollectionId}", 200],
  },
  () => ListCidrLocationsRequest,
  () => ListCidrLocationsResponse
);
