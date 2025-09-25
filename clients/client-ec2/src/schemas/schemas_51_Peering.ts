// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ATGAI,
  _aTGAI,
  _ATGPA,
  _ATGPAR,
  _ATGPARc,
  _ATI,
  _aTI,
  _cNIo,
  _CNIor,
  _Co,
  _co,
  _CTGPA,
  _CTGPAR,
  _CTGPARO,
  _CTGPARr,
  _CTre,
  _cTre,
  _DR,
  _DRy,
  _dRy,
  _DTGPA,
  _DTGPAe,
  _DTGPAR,
  _DTGPARe,
  _DTGPARes,
  _DTGPAResc,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _Me,
  _me,
  _MR,
  _NTe,
  _nTe,
  _OI,
  _oI,
  _op,
  _Opt,
  _PAI,
  _PAS,
  _PRee,
  _PTGI,
  _PTI,
  _reg,
  _Regi,
  _RTGPA,
  _RTGPAR,
  _RTGPARe,
  _RTIe,
  _rTIe,
  _St,
  _st,
  _Sta,
  _sta,
  _T,
  _TGAI,
  _tGAI,
  _TGAIr,
  _TGI,
  _tGI,
  _TGPA,
  _tGPA,
  _TGPAL,
  _TGPAO,
  _TGPAr,
  _tGPAr,
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

export var AcceptTransitGatewayPeeringAttachmentRequest = struct(n0, _ATGPAR, 0, [_TGAI, _DR], [0, 2]);
export var AcceptTransitGatewayPeeringAttachmentResult = struct(
  n0,
  _ATGPARc,
  0,
  [_TGPA],
  [
    [
      () => TransitGatewayPeeringAttachment,
      {
        [_eQN]: `TransitGatewayPeeringAttachment`,
        [_xN]: _tGPA,
      },
    ],
  ]
);
export var CreateTransitGatewayPeeringAttachmentRequest = struct(
  n0,
  _CTGPAR,
  0,
  [_TGI, _PTGI, _PAI, _PRee, _Opt, _TS, _DR],
  [
    0,
    0,
    0,
    0,
    () => CreateTransitGatewayPeeringAttachmentRequestOptions,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    2,
  ]
);
export var CreateTransitGatewayPeeringAttachmentRequestOptions = struct(n0, _CTGPARO, 0, [_DRy], [0]);
export var CreateTransitGatewayPeeringAttachmentResult = struct(
  n0,
  _CTGPARr,
  0,
  [_TGPA],
  [
    [
      () => TransitGatewayPeeringAttachment,
      {
        [_eQN]: `TransitGatewayPeeringAttachment`,
        [_xN]: _tGPA,
      },
    ],
  ]
);
export var DeleteTransitGatewayPeeringAttachmentRequest = struct(n0, _DTGPAR, 0, [_TGAI, _DR], [0, 2]);
export var DeleteTransitGatewayPeeringAttachmentResult = struct(
  n0,
  _DTGPARe,
  0,
  [_TGPA],
  [
    [
      () => TransitGatewayPeeringAttachment,
      {
        [_eQN]: `TransitGatewayPeeringAttachment`,
        [_xN]: _tGPA,
      },
    ],
  ]
);
export var DescribeTransitGatewayPeeringAttachmentsRequest = struct(
  n0,
  _DTGPARes,
  0,
  [_TGAIr, _Fi, _MR, _NTe, _DR],
  [
    64 | 0,
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
export var DescribeTransitGatewayPeeringAttachmentsResult = struct(
  n0,
  _DTGPAResc,
  0,
  [_TGPAr, _NTe],
  [
    [
      () => TransitGatewayPeeringAttachmentList,
      {
        [_eQN]: `TransitGatewayPeeringAttachments`,
        [_xN]: _tGPAr,
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
export var PeeringAttachmentStatus = struct(
  n0,
  _PAS,
  0,
  [_Co, _Me],
  [
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
  ]
);
export var PeeringTgwInfo = struct(
  n0,
  _PTI,
  0,
  [_TGI, _CNIor, _OI, _Regi],
  [
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
        [_eQN]: `CoreNetworkId`,
        [_xN]: _cNIo,
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
      0,
      {
        [_eQN]: `Region`,
        [_xN]: _reg,
      },
    ],
  ]
);
export var RejectTransitGatewayPeeringAttachmentRequest = struct(n0, _RTGPAR, 0, [_TGAI, _DR], [0, 2]);
export var RejectTransitGatewayPeeringAttachmentResult = struct(
  n0,
  _RTGPARe,
  0,
  [_TGPA],
  [
    [
      () => TransitGatewayPeeringAttachment,
      {
        [_eQN]: `TransitGatewayPeeringAttachment`,
        [_xN]: _tGPA,
      },
    ],
  ]
);
export var TransitGatewayPeeringAttachment = struct(
  n0,
  _TGPA,
  0,
  [_TGAI, _ATGAI, _RTIe, _ATI, _Opt, _Sta, _St, _CTre, _T],
  [
    [
      0,
      {
        [_eQN]: `TransitGatewayAttachmentId`,
        [_xN]: _tGAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `AccepterTransitGatewayAttachmentId`,
        [_xN]: _aTGAI,
      },
    ],
    [
      () => PeeringTgwInfo,
      {
        [_eQN]: `RequesterTgwInfo`,
        [_xN]: _rTIe,
      },
    ],
    [
      () => PeeringTgwInfo,
      {
        [_eQN]: `AccepterTgwInfo`,
        [_xN]: _aTI,
      },
    ],
    [
      () => TransitGatewayPeeringAttachmentOptions,
      {
        [_eQN]: `Options`,
        [_xN]: _op,
      },
    ],
    [
      () => PeeringAttachmentStatus,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
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
export var TransitGatewayPeeringAttachmentOptions = struct(
  n0,
  _TGPAO,
  0,
  [_DRy],
  [
    [
      0,
      {
        [_eQN]: `DynamicRouting`,
        [_xN]: _dRy,
      },
    ],
  ]
);
export var TransitGatewayPeeringAttachmentList = list(n0, _TGPAL, 0, [
  () => TransitGatewayPeeringAttachment,
  {
    [_xN]: _it,
  },
]);
export var AcceptTransitGatewayPeeringAttachment = op(
  n0,
  _ATGPA,
  0,
  () => AcceptTransitGatewayPeeringAttachmentRequest,
  () => AcceptTransitGatewayPeeringAttachmentResult
);
export var CreateTransitGatewayPeeringAttachment = op(
  n0,
  _CTGPA,
  0,
  () => CreateTransitGatewayPeeringAttachmentRequest,
  () => CreateTransitGatewayPeeringAttachmentResult
);
export var DeleteTransitGatewayPeeringAttachment = op(
  n0,
  _DTGPA,
  0,
  () => DeleteTransitGatewayPeeringAttachmentRequest,
  () => DeleteTransitGatewayPeeringAttachmentResult
);
export var DescribeTransitGatewayPeeringAttachments = op(
  n0,
  _DTGPAe,
  0,
  () => DescribeTransitGatewayPeeringAttachmentsRequest,
  () => DescribeTransitGatewayPeeringAttachmentsResult
);
export var RejectTransitGatewayPeeringAttachment = op(
  n0,
  _RTGPA,
  0,
  () => RejectTransitGatewayPeeringAttachmentRequest,
  () => RejectTransitGatewayPeeringAttachmentResult
);
