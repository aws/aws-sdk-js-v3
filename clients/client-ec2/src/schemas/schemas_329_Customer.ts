// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import {
  _BA,
  _bA,
  _BAE,
  _bAE,
  _CAe,
  _cAe,
  _CGIu,
  _cGIu,
  _CGu,
  _DN,
  _dN,
  _eQN,
  _IAp,
  _iAp,
  _St,
  _st,
  _T,
  _tS,
  _Ty,
  _ty,
  _xN,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CustomerGateway = struct(
  n0,
  _CGu,
  0,
  [_CAe, _DN, _T, _BAE, _CGIu, _St, _Ty, _IAp, _BA],
  [
    [
      0,
      {
        [_eQN]: `CertificateArn`,
        [_xN]: _cAe,
      },
    ],
    [
      0,
      {
        [_eQN]: `DeviceName`,
        [_xN]: _dN,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
    [
      0,
      {
        [_eQN]: `BgpAsnExtended`,
        [_xN]: _bAE,
      },
    ],
    [
      0,
      {
        [_eQN]: `CustomerGatewayId`,
        [_xN]: _cGIu,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      0,
      {
        [_eQN]: `Type`,
        [_xN]: _ty,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpAddress`,
        [_xN]: _iAp,
      },
    ],
    [
      0,
      {
        [_eQN]: `BgpAsn`,
        [_xN]: _bA,
      },
    ],
  ]
);
