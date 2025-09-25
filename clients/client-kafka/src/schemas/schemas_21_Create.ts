// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _BBS,
  _bBS,
  _BBSPSI,
  _bBSPSI,
  _BBSPSS,
  _bBSPSS,
  _BBSPT,
  _bBSPT,
  _BBSSI,
  _bBSSI,
  _BBSSS,
  _bBSSS,
  _BBST,
  _bBST,
  _BBSVCSI,
  _bBSVCSI,
  _BBSVCSS,
  _bBSVCSS,
  _BBSVCT,
  _bBSVCT,
  _c,
  _CA,
  _CE,
  _e,
  _GBB,
  _GBBR,
  _GBBRe,
  _h,
  _hE,
  _IP,
  _iP,
  _jN,
  _M,
  _m,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_IP, _M],
  [
    [
      0,
      {
        [_jN]: _iP,
      },
    ],
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __ConflictException
);
export var GetBootstrapBrokersRequest = struct(n0, _GBBR, 0, [_CA], [[0, 1]]);
export var GetBootstrapBrokersResponse = struct(
  n0,
  _GBBRe,
  0,
  [_BBS, _BBST, _BBSSS, _BBSSI, _BBSPT, _BBSPSS, _BBSPSI, _BBSVCT, _BBSVCSS, _BBSVCSI],
  [
    [
      0,
      {
        [_jN]: _bBS,
      },
    ],
    [
      0,
      {
        [_jN]: _bBST,
      },
    ],
    [
      0,
      {
        [_jN]: _bBSSS,
      },
    ],
    [
      0,
      {
        [_jN]: _bBSSI,
      },
    ],
    [
      0,
      {
        [_jN]: _bBSPT,
      },
    ],
    [
      0,
      {
        [_jN]: _bBSPSS,
      },
    ],
    [
      0,
      {
        [_jN]: _bBSPSI,
      },
    ],
    [
      0,
      {
        [_jN]: _bBSVCT,
      },
    ],
    [
      0,
      {
        [_jN]: _bBSVCSS,
      },
    ],
    [
      0,
      {
        [_jN]: _bBSVCSI,
      },
    ],
  ]
);
export var GetBootstrapBrokers = op(
  n0,
  _GBB,
  {
    [_h]: ["GET", "/v1/clusters/{ClusterArn}/bootstrap-brokers", 200],
  },
  () => GetBootstrapBrokersRequest,
  () => GetBootstrapBrokersResponse
);
