// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AASAu,
  _aASAu,
  _ADRTI,
  _aDRTI,
  _AMS,
  _aMSp,
  _ASA,
  _aSA,
  _ASId,
  _ATGCB,
  _ATGVA,
  _ATGVAR,
  _ATGVARc,
  _CTG,
  _CTGR,
  _CTGRr,
  _CTGVA,
  _CTGVAR,
  _CTGVARO,
  _CTGVARr,
  _CTre,
  _cTre,
  _De,
  _de,
  _DR,
  _DRTA,
  _dRTA,
  _DRTP,
  _dRTP,
  _DSn,
  _dSn,
  _DTG,
  _DTGe,
  _DTGR,
  _DTGRe,
  _DTGRes,
  _DTGResc,
  _DTGVA,
  _DTGVAe,
  _DTGVAR,
  _DTGVARe,
  _DTGVARes,
  _DTGVAResc,
  _eQN,
  _Fi,
  _Fil,
  _ISpv,
  _iSpvu,
  _it,
  _MR,
  _MSu,
  _mSu,
  _MTG,
  _MTGO,
  _MTGR,
  _MTGRo,
  _MTGVA,
  _MTGVAR,
  _MTGVARO,
  _MTGVARo,
  _NTe,
  _nTe,
  _OI,
  _oI,
  _op,
  _Opt,
  _PDRTI,
  _pDRTI,
  _RSIe,
  _RTGCB,
  _RTGVA,
  _RTGVAR,
  _RTGVARe,
  _SGRS,
  _sGRSec,
  _SI,
  _sIub,
  _St,
  _st,
  _T,
  _TG,
  _tG,
  _TGAI,
  _tGAI,
  _TGAIr,
  _tGAra,
  _TGAran,
  _TGCB,
  _tGCB,
  _TGCBSL,
  _TGI,
  _tGI,
  _TGIr,
  _TGISL,
  _TGL,
  _TGO,
  _TGr,
  _TGRO,
  _tGS,
  _TGVA,
  _tGVA,
  _TGVAL,
  _TGVAO,
  _TGVAr,
  _tGVAr,
  _TS,
  _tS,
  _TSa,
  _VESp,
  _vESpn,
  _VI,
  _vI,
  _VOIp,
  _vOIp,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
  ValueStringList,
} from "./schemas_0";
import { TransitGatewaySubnetIdList } from "./schemas_319_Transit";

/* eslint no-var: 0 */

export var AcceptTransitGatewayVpcAttachmentRequest = struct(n0, _ATGVAR, 0, [_TGAI, _DR], [0, 2]);
export var AcceptTransitGatewayVpcAttachmentResult = struct(
  n0,
  _ATGVARc,
  0,
  [_TGVA],
  [
    [
      () => TransitGatewayVpcAttachment,
      {
        [_eQN]: `TransitGatewayVpcAttachment`,
        [_xN]: _tGVA,
      },
    ],
  ]
);
export var CreateTransitGatewayRequest = struct(
  n0,
  _CTGR,
  0,
  [_De, _Opt, _TS, _DR],
  [
    0,
    [() => TransitGatewayRequestOptions, 0],
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    2,
  ]
);
export var CreateTransitGatewayResult = struct(
  n0,
  _CTGRr,
  0,
  [_TG],
  [
    [
      () => TransitGateway,
      {
        [_eQN]: `TransitGateway`,
        [_xN]: _tG,
      },
    ],
  ]
);
export var CreateTransitGatewayVpcAttachmentRequest = struct(
  n0,
  _CTGVAR,
  0,
  [_TGI, _VI, _SI, _Opt, _TS, _DR],
  [
    0,
    0,
    [() => TransitGatewaySubnetIdList, 0],
    () => CreateTransitGatewayVpcAttachmentRequestOptions,
    [() => TagSpecificationList, 0],
    2,
  ]
);
export var CreateTransitGatewayVpcAttachmentRequestOptions = struct(
  n0,
  _CTGVARO,
  0,
  [_DSn, _SGRS, _ISpv, _AMS],
  [0, 0, 0, 0]
);
export var CreateTransitGatewayVpcAttachmentResult = struct(
  n0,
  _CTGVARr,
  0,
  [_TGVA],
  [
    [
      () => TransitGatewayVpcAttachment,
      {
        [_eQN]: `TransitGatewayVpcAttachment`,
        [_xN]: _tGVA,
      },
    ],
  ]
);
export var DeleteTransitGatewayRequest = struct(n0, _DTGR, 0, [_TGI, _DR], [0, 2]);
export var DeleteTransitGatewayResult = struct(
  n0,
  _DTGRe,
  0,
  [_TG],
  [
    [
      () => TransitGateway,
      {
        [_eQN]: `TransitGateway`,
        [_xN]: _tG,
      },
    ],
  ]
);
export var DeleteTransitGatewayVpcAttachmentRequest = struct(n0, _DTGVAR, 0, [_TGAI, _DR], [0, 2]);
export var DeleteTransitGatewayVpcAttachmentResult = struct(
  n0,
  _DTGVARe,
  0,
  [_TGVA],
  [
    [
      () => TransitGatewayVpcAttachment,
      {
        [_eQN]: `TransitGatewayVpcAttachment`,
        [_xN]: _tGVA,
      },
    ],
  ]
);
export var DescribeTransitGatewaysRequest = struct(
  n0,
  _DTGRes,
  0,
  [_TGIr, _Fi, _MR, _NTe, _DR],
  [
    [() => TransitGatewayIdStringList, 0],
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
export var DescribeTransitGatewaysResult = struct(
  n0,
  _DTGResc,
  0,
  [_TGr, _NTe],
  [
    [
      () => TransitGatewayList,
      {
        [_eQN]: `TransitGatewaySet`,
        [_xN]: _tGS,
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
export var DescribeTransitGatewayVpcAttachmentsRequest = struct(
  n0,
  _DTGVARes,
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
export var DescribeTransitGatewayVpcAttachmentsResult = struct(
  n0,
  _DTGVAResc,
  0,
  [_TGVAr, _NTe],
  [
    [
      () => TransitGatewayVpcAttachmentList,
      {
        [_eQN]: `TransitGatewayVpcAttachments`,
        [_xN]: _tGVAr,
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
export var ModifyTransitGatewayOptions = struct(
  n0,
  _MTGO,
  0,
  [_ATGCB, _RTGCB, _VESp, _DSn, _SGRS, _AASAu, _DRTA, _ADRTI, _DRTP, _PDRTI, _ASA],
  [
    [() => TransitGatewayCidrBlockStringList, 0],
    [() => TransitGatewayCidrBlockStringList, 0],
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
  ]
);
export var ModifyTransitGatewayRequest = struct(
  n0,
  _MTGR,
  0,
  [_TGI, _De, _Opt, _DR],
  [0, 0, [() => ModifyTransitGatewayOptions, 0], 2]
);
export var ModifyTransitGatewayResult = struct(
  n0,
  _MTGRo,
  0,
  [_TG],
  [
    [
      () => TransitGateway,
      {
        [_eQN]: `TransitGateway`,
        [_xN]: _tG,
      },
    ],
  ]
);
export var ModifyTransitGatewayVpcAttachmentRequest = struct(
  n0,
  _MTGVAR,
  0,
  [_TGAI, _ASId, _RSIe, _Opt, _DR],
  [
    0,
    [() => TransitGatewaySubnetIdList, 0],
    [() => TransitGatewaySubnetIdList, 0],
    () => ModifyTransitGatewayVpcAttachmentRequestOptions,
    2,
  ]
);
export var ModifyTransitGatewayVpcAttachmentRequestOptions = struct(
  n0,
  _MTGVARO,
  0,
  [_DSn, _SGRS, _ISpv, _AMS],
  [0, 0, 0, 0]
);
export var ModifyTransitGatewayVpcAttachmentResult = struct(
  n0,
  _MTGVARo,
  0,
  [_TGVA],
  [
    [
      () => TransitGatewayVpcAttachment,
      {
        [_eQN]: `TransitGatewayVpcAttachment`,
        [_xN]: _tGVA,
      },
    ],
  ]
);
export var RejectTransitGatewayVpcAttachmentRequest = struct(n0, _RTGVAR, 0, [_TGAI, _DR], [0, 2]);
export var RejectTransitGatewayVpcAttachmentResult = struct(
  n0,
  _RTGVARe,
  0,
  [_TGVA],
  [
    [
      () => TransitGatewayVpcAttachment,
      {
        [_eQN]: `TransitGatewayVpcAttachment`,
        [_xN]: _tGVA,
      },
    ],
  ]
);
export var TransitGateway = struct(
  n0,
  _TG,
  0,
  [_TGI, _TGAran, _St, _OI, _De, _CTre, _Opt, _T],
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
        [_eQN]: `TransitGatewayArn`,
        [_xN]: _tGAra,
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
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
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
      () => TransitGatewayOptions,
      {
        [_eQN]: `Options`,
        [_xN]: _op,
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
export var TransitGatewayOptions = struct(
  n0,
  _TGO,
  0,
  [_ASA, _TGCB, _AASAu, _DRTA, _ADRTI, _DRTP, _PDRTI, _VESp, _DSn, _SGRS, _MSu],
  [
    [
      1,
      {
        [_eQN]: `AmazonSideAsn`,
        [_xN]: _aSA,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `TransitGatewayCidrBlocks`,
        [_xN]: _tGCB,
      },
    ],
    [
      0,
      {
        [_eQN]: `AutoAcceptSharedAttachments`,
        [_xN]: _aASAu,
      },
    ],
    [
      0,
      {
        [_eQN]: `DefaultRouteTableAssociation`,
        [_xN]: _dRTA,
      },
    ],
    [
      0,
      {
        [_eQN]: `AssociationDefaultRouteTableId`,
        [_xN]: _aDRTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `DefaultRouteTablePropagation`,
        [_xN]: _dRTP,
      },
    ],
    [
      0,
      {
        [_eQN]: `PropagationDefaultRouteTableId`,
        [_xN]: _pDRTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpnEcmpSupport`,
        [_xN]: _vESpn,
      },
    ],
    [
      0,
      {
        [_eQN]: `DnsSupport`,
        [_xN]: _dSn,
      },
    ],
    [
      0,
      {
        [_eQN]: `SecurityGroupReferencingSupport`,
        [_xN]: _sGRSec,
      },
    ],
    [
      0,
      {
        [_eQN]: `MulticastSupport`,
        [_xN]: _mSu,
      },
    ],
  ]
);
export var TransitGatewayRequestOptions = struct(
  n0,
  _TGRO,
  0,
  [_ASA, _AASAu, _DRTA, _DRTP, _VESp, _DSn, _SGRS, _MSu, _TGCB],
  [1, 0, 0, 0, 0, 0, 0, 0, [() => TransitGatewayCidrBlockStringList, 0]]
);
export var TransitGatewayVpcAttachment = struct(
  n0,
  _TGVA,
  0,
  [_TGAI, _TGI, _VI, _VOIp, _St, _SI, _CTre, _Opt, _T],
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
        [_eQN]: `TransitGatewayId`,
        [_xN]: _tGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcOwnerId`,
        [_xN]: _vOIp,
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
      () => ValueStringList,
      {
        [_eQN]: `SubnetIds`,
        [_xN]: _sIub,
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
      () => TransitGatewayVpcAttachmentOptions,
      {
        [_eQN]: `Options`,
        [_xN]: _op,
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
export var TransitGatewayVpcAttachmentOptions = struct(
  n0,
  _TGVAO,
  0,
  [_DSn, _SGRS, _ISpv, _AMS],
  [
    [
      0,
      {
        [_eQN]: `DnsSupport`,
        [_xN]: _dSn,
      },
    ],
    [
      0,
      {
        [_eQN]: `SecurityGroupReferencingSupport`,
        [_xN]: _sGRSec,
      },
    ],
    [
      0,
      {
        [_eQN]: `Ipv6Support`,
        [_xN]: _iSpvu,
      },
    ],
    [
      0,
      {
        [_eQN]: `ApplianceModeSupport`,
        [_xN]: _aMSp,
      },
    ],
  ]
);
export var TransitGatewayCidrBlockStringList = list(n0, _TGCBSL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var TransitGatewayIdStringList = list(n0, _TGISL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var TransitGatewayList = list(n0, _TGL, 0, [
  () => TransitGateway,
  {
    [_xN]: _it,
  },
]);
export var TransitGatewayVpcAttachmentList = list(n0, _TGVAL, 0, [
  () => TransitGatewayVpcAttachment,
  {
    [_xN]: _it,
  },
]);
export var AcceptTransitGatewayVpcAttachment = op(
  n0,
  _ATGVA,
  0,
  () => AcceptTransitGatewayVpcAttachmentRequest,
  () => AcceptTransitGatewayVpcAttachmentResult
);
export var CreateTransitGateway = op(
  n0,
  _CTG,
  0,
  () => CreateTransitGatewayRequest,
  () => CreateTransitGatewayResult
);
export var CreateTransitGatewayVpcAttachment = op(
  n0,
  _CTGVA,
  0,
  () => CreateTransitGatewayVpcAttachmentRequest,
  () => CreateTransitGatewayVpcAttachmentResult
);
export var DeleteTransitGateway = op(
  n0,
  _DTG,
  0,
  () => DeleteTransitGatewayRequest,
  () => DeleteTransitGatewayResult
);
export var DeleteTransitGatewayVpcAttachment = op(
  n0,
  _DTGVA,
  0,
  () => DeleteTransitGatewayVpcAttachmentRequest,
  () => DeleteTransitGatewayVpcAttachmentResult
);
export var DescribeTransitGateways = op(
  n0,
  _DTGe,
  0,
  () => DescribeTransitGatewaysRequest,
  () => DescribeTransitGatewaysResult
);
export var DescribeTransitGatewayVpcAttachments = op(
  n0,
  _DTGVAe,
  0,
  () => DescribeTransitGatewayVpcAttachmentsRequest,
  () => DescribeTransitGatewayVpcAttachmentsResult
);
export var ModifyTransitGateway = op(
  n0,
  _MTG,
  0,
  () => ModifyTransitGatewayRequest,
  () => ModifyTransitGatewayResult
);
export var ModifyTransitGatewayVpcAttachment = op(
  n0,
  _MTGVA,
  0,
  () => ModifyTransitGatewayVpcAttachmentRequest,
  () => ModifyTransitGatewayVpcAttachmentResult
);
export var RejectTransitGatewayVpcAttachment = op(
  n0,
  _RTGVA,
  0,
  () => RejectTransitGatewayVpcAttachmentRequest,
  () => RejectTransitGatewayVpcAttachmentResult
);
