// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  QuickSightUserNotFoundException as __QuickSightUserNotFoundException,
  SessionLifetimeInMinutesInvalidException as __SessionLifetimeInMinutesInvalidException,
} from "../models/index";
import {
  _AAI,
  _c,
  _e,
  _ep,
  _EPn,
  _EU,
  _EUm,
  _GSEU,
  _GSEUR,
  _GSEURe,
  _h,
  _hE,
  _hQ,
  _M,
  _QSUNFE,
  _RI,
  _sl,
  _SLIM,
  _SLIMIE,
  _St,
  _ua,
  _UAs,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EmbeddingUrl = sim(n0, _EU, 0, 8);
export var GetSessionEmbedUrlRequest = struct(
  n0,
  _GSEUR,
  0,
  [_AAI, _EPn, _SLIM, _UAs],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ep,
      },
    ],
    [
      1,
      {
        [_hQ]: _sl,
      },
    ],
    [
      0,
      {
        [_hQ]: _ua,
      },
    ],
  ]
);
export var GetSessionEmbedUrlResponse = struct(n0, _GSEURe, 0, [_EUm, _St, _RI], [[() => EmbeddingUrl, 0], [1, 32], 0]);
export var QuickSightUserNotFoundException = error(
  n0,
  _QSUNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M, _RI],
  [0, 0],

  __QuickSightUserNotFoundException
);
export var SessionLifetimeInMinutesInvalidException = error(
  n0,
  _SLIMIE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _RI],
  [0, 0],

  __SessionLifetimeInMinutesInvalidException
);
export var GetSessionEmbedUrl = op(
  n0,
  _GSEU,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/session-embed-url", 200],
  },
  () => GetSessionEmbedUrlRequest,
  () => GetSessionEmbedUrlResponse
);
