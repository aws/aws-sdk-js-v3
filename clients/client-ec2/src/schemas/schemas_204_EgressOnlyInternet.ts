// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aSt,
  _Atta,
  _CEOIG,
  _CEOIGR,
  _CEOIGRr,
  _CT,
  _cT,
  _DEOIG,
  _DEOIGe,
  _DEOIGR,
  _DEOIGRe,
  _DEOIGRes,
  _DEOIGResc,
  _DR,
  _EOIG,
  _eOIG,
  _EOIGg,
  _EOIGI,
  _eOIGI,
  _EOIGIg,
  _EOIGIL,
  _EOIGL,
  _eOIGS,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _MR,
  _NTe,
  _nTe,
  _RC,
  _rC,
  _T,
  _TS,
  _tS,
  _TSa,
  _VI,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";
import { InternetGatewayAttachmentList } from "./schemas_234_Internet";

/* eslint no-var: 0 */

export var CreateEgressOnlyInternetGatewayRequest = struct(
  n0,
  _CEOIGR,
  0,
  [_CT, _DR, _VI, _TS],
  [
    0,
    2,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var CreateEgressOnlyInternetGatewayResult = struct(
  n0,
  _CEOIGRr,
  0,
  [_CT, _EOIG],
  [
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
    [
      () => EgressOnlyInternetGateway,
      {
        [_eQN]: `EgressOnlyInternetGateway`,
        [_xN]: _eOIG,
      },
    ],
  ]
);
export var DeleteEgressOnlyInternetGatewayRequest = struct(n0, _DEOIGR, 0, [_DR, _EOIGI], [2, 0]);
export var DeleteEgressOnlyInternetGatewayResult = struct(
  n0,
  _DEOIGRe,
  0,
  [_RC],
  [
    [
      2,
      {
        [_eQN]: `ReturnCode`,
        [_xN]: _rC,
      },
    ],
  ]
);
export var DescribeEgressOnlyInternetGatewaysRequest = struct(
  n0,
  _DEOIGRes,
  0,
  [_DR, _EOIGIg, _MR, _NTe, _Fi],
  [
    2,
    [
      () => EgressOnlyInternetGatewayIdList,
      {
        [_xN]: _EOIGI,
      },
    ],
    1,
    0,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var DescribeEgressOnlyInternetGatewaysResult = struct(
  n0,
  _DEOIGResc,
  0,
  [_EOIGg, _NTe],
  [
    [
      () => EgressOnlyInternetGatewayList,
      {
        [_eQN]: `EgressOnlyInternetGatewaySet`,
        [_xN]: _eOIGS,
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
export var EgressOnlyInternetGateway = struct(
  n0,
  _EOIG,
  0,
  [_Atta, _EOIGI, _T],
  [
    [
      () => InternetGatewayAttachmentList,
      {
        [_eQN]: `AttachmentSet`,
        [_xN]: _aSt,
      },
    ],
    [
      0,
      {
        [_eQN]: `EgressOnlyInternetGatewayId`,
        [_xN]: _eOIGI,
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
export var EgressOnlyInternetGatewayIdList = list(n0, _EOIGIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var EgressOnlyInternetGatewayList = list(n0, _EOIGL, 0, [
  () => EgressOnlyInternetGateway,
  {
    [_xN]: _it,
  },
]);
export var CreateEgressOnlyInternetGateway = op(
  n0,
  _CEOIG,
  0,
  () => CreateEgressOnlyInternetGatewayRequest,
  () => CreateEgressOnlyInternetGatewayResult
);
export var DeleteEgressOnlyInternetGateway = op(
  n0,
  _DEOIG,
  0,
  () => DeleteEgressOnlyInternetGatewayRequest,
  () => DeleteEgressOnlyInternetGatewayResult
);
export var DescribeEgressOnlyInternetGateways = op(
  n0,
  _DEOIGe,
  0,
  () => DescribeEgressOnlyInternetGatewaysRequest,
  () => DescribeEgressOnlyInternetGatewaysResult
);
