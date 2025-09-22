// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AASA,
  _aASA,
  _CTGMD,
  _CTGMDR,
  _CTGMDRO,
  _CTGMDRr,
  _CTre,
  _cTre,
  _DR,
  _DTGMD,
  _DTGMDe,
  _DTGMDR,
  _DTGMDRe,
  _DTGMDRes,
  _DTGMDResc,
  _eQN,
  _Fi,
  _Fil,
  _ISg,
  _iSg,
  _it,
  _MR,
  _NTe,
  _nTe,
  _OI,
  _oI,
  _op,
  _Opt,
  _SSS,
  _sSS,
  _St,
  _st,
  _T,
  _TGI,
  _tGI,
  _TGMD,
  _tGMD,
  _TGMDA,
  _tGMDA,
  _TGMDI,
  _tGMDI,
  _TGMDIr,
  _TGMDISL,
  _TGMDL,
  _TGMDO,
  _TGMDr,
  _tGMDr,
  _TS,
  _tS,
  _TSa,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTransitGatewayMulticastDomainRequest = struct(
  n0,
  _CTGMDR,
  0,
  [_TGI, _Opt, _TS, _DR],
  [
    0,
    () => CreateTransitGatewayMulticastDomainRequestOptions,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    2,
  ]
);
export var CreateTransitGatewayMulticastDomainRequestOptions = struct(n0, _CTGMDRO, 0, [_ISg, _SSS, _AASA], [0, 0, 0]);
export var CreateTransitGatewayMulticastDomainResult = struct(
  n0,
  _CTGMDRr,
  0,
  [_TGMD],
  [
    [
      () => TransitGatewayMulticastDomain,
      {
        [_eQN]: `TransitGatewayMulticastDomain`,
        [_xN]: _tGMD,
      },
    ],
  ]
);
export var DeleteTransitGatewayMulticastDomainRequest = struct(n0, _DTGMDR, 0, [_TGMDI, _DR], [0, 2]);
export var DeleteTransitGatewayMulticastDomainResult = struct(
  n0,
  _DTGMDRe,
  0,
  [_TGMD],
  [
    [
      () => TransitGatewayMulticastDomain,
      {
        [_eQN]: `TransitGatewayMulticastDomain`,
        [_xN]: _tGMD,
      },
    ],
  ]
);
export var DescribeTransitGatewayMulticastDomainsRequest = struct(
  n0,
  _DTGMDRes,
  0,
  [_TGMDIr, _Fi, _MR, _NTe, _DR],
  [
    [() => TransitGatewayMulticastDomainIdStringList, 0],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
    2,
  ]
);
export var DescribeTransitGatewayMulticastDomainsResult = struct(
  n0,
  _DTGMDResc,
  0,
  [_TGMDr, _NTe],
  [
    [
      () => TransitGatewayMulticastDomainList,
      {
        [_eQN]: `TransitGatewayMulticastDomains`,
        [_xN]: _tGMDr,
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
export var TransitGatewayMulticastDomain = struct(
  n0,
  _TGMD,
  0,
  [_TGMDI, _TGI, _TGMDA, _OI, _Opt, _St, _CTre, _T],
  [
    [
      0,
      {
        [_eQN]: `TransitGatewayMulticastDomainId`,
        [_xN]: _tGMDI,
      },
    ],
    [
      0,
      {
        [_eQN]: `TransitGatewayId`,
        [_xN]: _tGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `TransitGatewayMulticastDomainArn`,
        [_xN]: _tGMDA,
      },
    ],
    [
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
    [
      () => TransitGatewayMulticastDomainOptions,
      {
        [_eQN]: `Options`,
        [_xN]: _op,
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
      4,
      {
        [_eQN]: `CreationTime`,
        [_xN]: _cTre,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var TransitGatewayMulticastDomainOptions = struct(
  n0,
  _TGMDO,
  0,
  [_ISg, _SSS, _AASA],
  [
    [
      0,
      {
        [_eQN]: `Igmpv2Support`,
        [_xN]: _iSg,
      },
    ],
    [
      0,
      {
        [_eQN]: `StaticSourcesSupport`,
        [_xN]: _sSS,
      },
    ],
    [
      0,
      {
        [_eQN]: `AutoAcceptSharedAssociations`,
        [_xN]: _aASA,
      },
    ],
  ]
);
export var TransitGatewayMulticastDomainIdStringList = list(n0, _TGMDISL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var TransitGatewayMulticastDomainList = list(n0, _TGMDL, 0, [
  () => TransitGatewayMulticastDomain,
  {
    [_xN]: _it,
  },
]);
export var CreateTransitGatewayMulticastDomain = op(
  n0,
  _CTGMD,
  0,
  () => CreateTransitGatewayMulticastDomainRequest,
  () => CreateTransitGatewayMulticastDomainResult
);
export var DeleteTransitGatewayMulticastDomain = op(
  n0,
  _DTGMD,
  0,
  () => DeleteTransitGatewayMulticastDomainRequest,
  () => DeleteTransitGatewayMulticastDomainResult
);
export var DescribeTransitGatewayMulticastDomains = op(
  n0,
  _DTGMDe,
  0,
  () => DescribeTransitGatewayMulticastDomainsRequest,
  () => DescribeTransitGatewayMulticastDomainsResult
);
