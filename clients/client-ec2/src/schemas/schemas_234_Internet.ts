// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aSt,
  _Atta,
  _CIG,
  _CIGR,
  _CIGRr,
  _DR,
  _dR,
  _eQN,
  _IG,
  _iG,
  _IGA,
  _IGAL,
  _IGI,
  _iGI,
  _it,
  _OI,
  _oI,
  _St,
  _st,
  _T,
  _TS,
  _tS,
  _TSa,
  _VI,
  _vI,
  _xN,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateInternetGatewayRequest = struct(
  n0,
  _CIGR,
  0,
  [_TS, _DR],
  [
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var CreateInternetGatewayResult = struct(
  n0,
  _CIGRr,
  0,
  [_IG],
  [
    [
      () => InternetGateway,
      {
        [_eQN]: `InternetGateway`,
        [_xN]: _iG,
      },
    ],
  ]
);
export var InternetGateway = struct(
  n0,
  _IG,
  0,
  [_Atta, _IGI, _OI, _T],
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
        [_eQN]: `InternetGatewayId`,
        [_xN]: _iGI,
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
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var InternetGatewayAttachment = struct(
  n0,
  _IGA,
  0,
  [_St, _VI],
  [
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
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
  ]
);
export var InternetGatewayAttachmentList = list(n0, _IGAL, 0, [
  () => InternetGatewayAttachment,
  {
    [_xN]: _it,
  },
]);
export var CreateInternetGateway = op(
  n0,
  _CIG,
  0,
  () => CreateInternetGatewayRequest,
  () => CreateInternetGatewayResult
);
