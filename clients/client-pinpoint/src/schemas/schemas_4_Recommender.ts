// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _At,
  _CD,
  _CRC,
  _CRCR,
  _CRCRr,
  _CRCS,
  _D,
  _DRC,
  _DRCR,
  _DRCRe,
  _GRC,
  _GRCe,
  _GRCR,
  _GRCRe,
  _GRCRet,
  _GRCRete,
  _h,
  _hQ,
  _I,
  _Id,
  _LMD,
  _LORCR,
  _LRCR,
  _N,
  _NT,
  _PS,
  _ps,
  _RCR,
  _RDN,
  _RI,
  _RPIT,
  _RPM,
  _RPRA,
  _RPU,
  _RTU,
  _to,
  _Tok,
  _URC,
  _URCR,
  _URCRp,
  _URCS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRecommenderConfigurationRequest = struct(
  n0,
  _CRCR,
  0,
  [_CRC],
  [[() => CreateRecommenderConfigurationShape, 16]]
);
export var CreateRecommenderConfigurationResponse = struct(
  n0,
  _CRCRr,
  0,
  [_RCR],
  [[() => RecommenderConfigurationResponse, 16]]
);
export var CreateRecommenderConfigurationShape = struct(
  n0,
  _CRCS,
  0,
  [_At, _D, _N, _RPIT, _RPRA, _RPU, _RTU, _RDN, _RPM],
  [128 | 0, 0, 0, 0, 0, 0, 0, 0, 1]
);
export var DeleteRecommenderConfigurationRequest = struct(n0, _DRCR, 0, [_RI], [[0, 1]]);
export var DeleteRecommenderConfigurationResponse = struct(
  n0,
  _DRCRe,
  0,
  [_RCR],
  [[() => RecommenderConfigurationResponse, 16]]
);
export var GetRecommenderConfigurationRequest = struct(n0, _GRCR, 0, [_RI], [[0, 1]]);
export var GetRecommenderConfigurationResponse = struct(
  n0,
  _GRCRe,
  0,
  [_RCR],
  [[() => RecommenderConfigurationResponse, 16]]
);
export var GetRecommenderConfigurationsRequest = struct(
  n0,
  _GRCRet,
  0,
  [_PS, _Tok],
  [
    [
      0,
      {
        [_hQ]: _ps,
      },
    ],
    [
      0,
      {
        [_hQ]: _to,
      },
    ],
  ]
);
export var GetRecommenderConfigurationsResponse = struct(
  n0,
  _GRCRete,
  0,
  [_LRCR],
  [[() => ListRecommenderConfigurationsResponse, 16]]
);
export var ListRecommenderConfigurationsResponse = struct(
  n0,
  _LRCR,
  0,
  [_I, _NT],
  [() => ListOfRecommenderConfigurationResponse, 0]
);
export var RecommenderConfigurationResponse = struct(
  n0,
  _RCR,
  0,
  [_At, _CD, _D, _Id, _LMD, _N, _RPIT, _RPRA, _RPU, _RTU, _RDN, _RPM],
  [128 | 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
);
export var UpdateRecommenderConfigurationRequest = struct(
  n0,
  _URCR,
  0,
  [_RI, _URC],
  [
    [0, 1],
    [() => UpdateRecommenderConfigurationShape, 16],
  ]
);
export var UpdateRecommenderConfigurationResponse = struct(
  n0,
  _URCRp,
  0,
  [_RCR],
  [[() => RecommenderConfigurationResponse, 16]]
);
export var UpdateRecommenderConfigurationShape = struct(
  n0,
  _URCS,
  0,
  [_At, _D, _N, _RPIT, _RPRA, _RPU, _RTU, _RDN, _RPM],
  [128 | 0, 0, 0, 0, 0, 0, 0, 0, 1]
);
export var ListOfRecommenderConfigurationResponse = list(n0, _LORCR, 0, () => RecommenderConfigurationResponse);
export var CreateRecommenderConfiguration = op(
  n0,
  _CRC,
  {
    [_h]: ["POST", "/v1/recommenders", 201],
  },
  () => CreateRecommenderConfigurationRequest,
  () => CreateRecommenderConfigurationResponse
);
export var DeleteRecommenderConfiguration = op(
  n0,
  _DRC,
  {
    [_h]: ["DELETE", "/v1/recommenders/{RecommenderId}", 200],
  },
  () => DeleteRecommenderConfigurationRequest,
  () => DeleteRecommenderConfigurationResponse
);
export var GetRecommenderConfiguration = op(
  n0,
  _GRC,
  {
    [_h]: ["GET", "/v1/recommenders/{RecommenderId}", 200],
  },
  () => GetRecommenderConfigurationRequest,
  () => GetRecommenderConfigurationResponse
);
export var GetRecommenderConfigurations = op(
  n0,
  _GRCe,
  {
    [_h]: ["GET", "/v1/recommenders", 200],
  },
  () => GetRecommenderConfigurationsRequest,
  () => GetRecommenderConfigurationsResponse
);
export var UpdateRecommenderConfiguration = op(
  n0,
  _URC,
  {
    [_h]: ["PUT", "/v1/recommenders/{RecommenderId}", 200],
  },
  () => UpdateRecommenderConfigurationRequest,
  () => UpdateRecommenderConfigurationResponse
);
