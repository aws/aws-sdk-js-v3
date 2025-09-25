// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAC,
  _as,
  _Asn,
  _B,
  _bS,
  _BSy,
  _By,
  _by,
  _DIB,
  _DIBe,
  _DIBR,
  _DIBRe,
  _DIBRes,
  _DIBResc,
  _DR,
  _eQN,
  _IIp,
  _iIp,
  _it,
  _Me,
  _MR,
  _NTe,
  _nTe,
  _PIB,
  _PIBR,
  _PIBRr,
  _Si,
  _SMt,
  _sMt,
  _St,
  _st,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AsnAuthorizationContext = struct(n0, _AAC, 0, [_Me, _Si], [0, 0]);
export var Byoasn = struct(
  n0,
  _B,
  0,
  [_Asn, _IIp, _SMt, _St],
  [
    [
      0,
      {
        [_eQN]: `Asn`,
        [_xN]: _as,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpamId`,
        [_xN]: _iIp,
      },
    ],
    [
      0,
      {
        [_eQN]: `StatusMessage`,
        [_xN]: _sMt,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
  ]
);
export var DeprovisionIpamByoasnRequest = struct(n0, _DIBR, 0, [_DR, _IIp, _Asn], [2, 0, 0]);
export var DeprovisionIpamByoasnResult = struct(
  n0,
  _DIBRe,
  0,
  [_B],
  [
    [
      () => Byoasn,
      {
        [_eQN]: `Byoasn`,
        [_xN]: _by,
      },
    ],
  ]
);
export var DescribeIpamByoasnRequest = struct(n0, _DIBRes, 0, [_DR, _MR, _NTe], [2, 1, 0]);
export var DescribeIpamByoasnResult = struct(
  n0,
  _DIBResc,
  0,
  [_By, _NTe],
  [
    [
      () => ByoasnSet,
      {
        [_eQN]: `ByoasnSet`,
        [_xN]: _bS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var ProvisionIpamByoasnRequest = struct(
  n0,
  _PIBR,
  0,
  [_DR, _IIp, _Asn, _AAC],
  [2, 0, 0, () => AsnAuthorizationContext]
);
export var ProvisionIpamByoasnResult = struct(
  n0,
  _PIBRr,
  0,
  [_B],
  [
    [
      () => Byoasn,
      {
        [_eQN]: `Byoasn`,
        [_xN]: _by,
      },
    ],
  ]
);
export var ByoasnSet = list(n0, _BSy, 0, [
  () => Byoasn,
  {
    [_xN]: _it,
  },
]);
export var DeprovisionIpamByoasn = op(
  n0,
  _DIB,
  0,
  () => DeprovisionIpamByoasnRequest,
  () => DeprovisionIpamByoasnResult
);
export var DescribeIpamByoasn = op(
  n0,
  _DIBe,
  0,
  () => DescribeIpamByoasnRequest,
  () => DescribeIpamByoasnResult
);
export var ProvisionIpamByoasn = op(
  n0,
  _PIB,
  0,
  () => ProvisionIpamByoasnRequest,
  () => ProvisionIpamByoasnResult
);
