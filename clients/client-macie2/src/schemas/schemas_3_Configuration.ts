// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _con,
  _eI,
  _GRC,
  _GRCR,
  _GRCRe,
  _h,
  _jN,
  _kKI,
  _RC,
  _rC,
  _RCe,
  _rM,
  _rN,
  _s,
  _URC,
  _URCp,
  _URCR,
  _URCRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetRevealConfigurationRequest = struct(n0, _GRCR, 0, [], []);
export var GetRevealConfigurationResponse = struct(
  n0,
  _GRCRe,
  0,
  [_con, _rC],
  [
    [
      () => RevealConfiguration,
      {
        [_jN]: _con,
      },
    ],
    [
      () => RetrievalConfiguration,
      {
        [_jN]: _rC,
      },
    ],
  ]
);
export var RetrievalConfiguration = struct(
  n0,
  _RC,
  0,
  [_eI, _rM, _rN],
  [
    [
      0,
      {
        [_jN]: _eI,
      },
    ],
    [
      0,
      {
        [_jN]: _rM,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
  ]
);
export var RevealConfiguration = struct(
  n0,
  _RCe,
  0,
  [_kKI, _s],
  [
    [
      0,
      {
        [_jN]: _kKI,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var UpdateRetrievalConfiguration = struct(
  n0,
  _URC,
  0,
  [_rM, _rN],
  [
    [
      0,
      {
        [_jN]: _rM,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
  ]
);
export var UpdateRevealConfigurationRequest = struct(
  n0,
  _URCR,
  0,
  [_con, _rC],
  [
    [
      () => RevealConfiguration,
      {
        [_jN]: _con,
      },
    ],
    [
      () => UpdateRetrievalConfiguration,
      {
        [_jN]: _rC,
      },
    ],
  ]
);
export var UpdateRevealConfigurationResponse = struct(
  n0,
  _URCRp,
  0,
  [_con, _rC],
  [
    [
      () => RevealConfiguration,
      {
        [_jN]: _con,
      },
    ],
    [
      () => RetrievalConfiguration,
      {
        [_jN]: _rC,
      },
    ],
  ]
);
export var GetRevealConfiguration = op(
  n0,
  _GRC,
  {
    [_h]: ["GET", "/reveal-configuration", 200],
  },
  () => GetRevealConfigurationRequest,
  () => GetRevealConfigurationResponse
);
export var UpdateRevealConfiguration = op(
  n0,
  _URCp,
  {
    [_h]: ["PUT", "/reveal-configuration", 200],
  },
  () => UpdateRevealConfigurationRequest,
  () => UpdateRevealConfigurationResponse
);
