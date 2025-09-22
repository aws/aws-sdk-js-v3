// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _As,
  _Ass,
  _ass,
  _ATGPT,
  _ATGPTR,
  _ATGPTRs,
  _CTGPT,
  _CTGPTR,
  _CTGPTRr,
  _CTre,
  _cTre,
  _DCB,
  _dCB,
  _dPR,
  _DPRe,
  _DR,
  _DTGPT,
  _DTGPTe,
  _DTGPTi,
  _DTGPTR,
  _DTGPTRe,
  _DTGPTRes,
  _DTGPTResc,
  _DTGPTRi,
  _DTGPTRis,
  _eQN,
  _Fi,
  _Fil,
  _GTGPTA,
  _GTGPTAR,
  _GTGPTARe,
  _GTGPTE,
  _GTGPTER,
  _GTGPTERe,
  _it,
  _MDe,
  _mDe,
  _MDK,
  _mDK,
  _MDV,
  _mDV,
  _MR,
  _NTe,
  _nTe,
  _Pr,
  _pr,
  _pRN,
  _PRNo,
  _PRol,
  _pRol,
  _rIe,
  _RIes,
  _RTe,
  _rTe,
  _SCB,
  _sCB,
  _sPR,
  _SPRo,
  _St,
  _st,
  _T,
  _TGAI,
  _tGAI,
  _TGI,
  _tGI,
  _TGPR,
  _TGPRMD,
  _TGPT,
  _tGPT,
  _TGPTA,
  _TGPTAL,
  _TGPTE,
  _tGPTE,
  _TGPTEL,
  _TGPTEr,
  _TGPTI,
  _tGPTI,
  _TGPTIr,
  _TGPTISL,
  _TGPTL,
  _TGPTr,
  _tGPTr,
  _TRTI,
  _tRTI,
  _TS,
  _tS,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateTransitGatewayPolicyTableRequest = struct(n0, _ATGPTR, 0, [_TGPTI, _TGAI, _DR], [0, 0, 2]);
export var AssociateTransitGatewayPolicyTableResult = struct(
  n0,
  _ATGPTRs,
  0,
  [_Ass],
  [
    [
      () => TransitGatewayPolicyTableAssociation,
      {
        [_eQN]: `Association`,
        [_xN]: _ass,
      },
    ],
  ]
);
export var CreateTransitGatewayPolicyTableRequest = struct(
  n0,
  _CTGPTR,
  0,
  [_TGI, _TS, _DR],
  [0, [() => TagSpecificationList, 0], 2]
);
export var CreateTransitGatewayPolicyTableResult = struct(
  n0,
  _CTGPTRr,
  0,
  [_TGPT],
  [
    [
      () => TransitGatewayPolicyTable,
      {
        [_eQN]: `TransitGatewayPolicyTable`,
        [_xN]: _tGPT,
      },
    ],
  ]
);
export var DeleteTransitGatewayPolicyTableRequest = struct(n0, _DTGPTR, 0, [_TGPTI, _DR], [0, 2]);
export var DeleteTransitGatewayPolicyTableResult = struct(
  n0,
  _DTGPTRe,
  0,
  [_TGPT],
  [
    [
      () => TransitGatewayPolicyTable,
      {
        [_eQN]: `TransitGatewayPolicyTable`,
        [_xN]: _tGPT,
      },
    ],
  ]
);
export var DescribeTransitGatewayPolicyTablesRequest = struct(
  n0,
  _DTGPTRes,
  0,
  [_TGPTIr, _Fi, _MR, _NTe, _DR],
  [
    [() => TransitGatewayPolicyTableIdStringList, 0],
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
export var DescribeTransitGatewayPolicyTablesResult = struct(
  n0,
  _DTGPTResc,
  0,
  [_TGPTr, _NTe],
  [
    [
      () => TransitGatewayPolicyTableList,
      {
        [_eQN]: `TransitGatewayPolicyTables`,
        [_xN]: _tGPTr,
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
export var DisassociateTransitGatewayPolicyTableRequest = struct(n0, _DTGPTRi, 0, [_TGPTI, _TGAI, _DR], [0, 0, 2]);
export var DisassociateTransitGatewayPolicyTableResult = struct(
  n0,
  _DTGPTRis,
  0,
  [_Ass],
  [
    [
      () => TransitGatewayPolicyTableAssociation,
      {
        [_eQN]: `Association`,
        [_xN]: _ass,
      },
    ],
  ]
);
export var GetTransitGatewayPolicyTableAssociationsRequest = struct(
  n0,
  _GTGPTAR,
  0,
  [_TGPTI, _Fi, _MR, _NTe, _DR],
  [
    0,
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
export var GetTransitGatewayPolicyTableAssociationsResult = struct(
  n0,
  _GTGPTARe,
  0,
  [_As, _NTe],
  [
    [
      () => TransitGatewayPolicyTableAssociationList,
      {
        [_eQN]: `Associations`,
        [_xN]: _a,
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
export var GetTransitGatewayPolicyTableEntriesRequest = struct(
  n0,
  _GTGPTER,
  0,
  [_TGPTI, _Fi, _MR, _NTe, _DR],
  [
    0,
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
export var GetTransitGatewayPolicyTableEntriesResult = struct(
  n0,
  _GTGPTERe,
  0,
  [_TGPTE],
  [
    [
      () => TransitGatewayPolicyTableEntryList,
      {
        [_eQN]: `TransitGatewayPolicyTableEntries`,
        [_xN]: _tGPTE,
      },
    ],
  ]
);
export var TransitGatewayPolicyRule = struct(
  n0,
  _TGPR,
  0,
  [_SCB, _SPRo, _DCB, _DPRe, _Pr, _MDe],
  [
    [
      0,
      {
        [_eQN]: `SourceCidrBlock`,
        [_xN]: _sCB,
      },
    ],
    [
      0,
      {
        [_eQN]: `SourcePortRange`,
        [_xN]: _sPR,
      },
    ],
    [
      0,
      {
        [_eQN]: `DestinationCidrBlock`,
        [_xN]: _dCB,
      },
    ],
    [
      0,
      {
        [_eQN]: `DestinationPortRange`,
        [_xN]: _dPR,
      },
    ],
    [
      0,
      {
        [_eQN]: `Protocol`,
        [_xN]: _pr,
      },
    ],
    [
      () => TransitGatewayPolicyRuleMetaData,
      {
        [_eQN]: `MetaData`,
        [_xN]: _mDe,
      },
    ],
  ]
);
export var TransitGatewayPolicyRuleMetaData = struct(
  n0,
  _TGPRMD,
  0,
  [_MDK, _MDV],
  [
    [
      0,
      {
        [_eQN]: `MetaDataKey`,
        [_xN]: _mDK,
      },
    ],
    [
      0,
      {
        [_eQN]: `MetaDataValue`,
        [_xN]: _mDV,
      },
    ],
  ]
);
export var TransitGatewayPolicyTable = struct(
  n0,
  _TGPT,
  0,
  [_TGPTI, _TGI, _St, _CTre, _T],
  [
    [
      0,
      {
        [_eQN]: `TransitGatewayPolicyTableId`,
        [_xN]: _tGPTI,
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
export var TransitGatewayPolicyTableAssociation = struct(
  n0,
  _TGPTA,
  0,
  [_TGPTI, _TGAI, _RIes, _RTe, _St],
  [
    [
      0,
      {
        [_eQN]: `TransitGatewayPolicyTableId`,
        [_xN]: _tGPTI,
      },
    ],
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
        [_eQN]: `ResourceId`,
        [_xN]: _rIe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceType`,
        [_xN]: _rTe,
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
export var TransitGatewayPolicyTableEntry = struct(
  n0,
  _TGPTEr,
  0,
  [_PRNo, _PRol, _TRTI],
  [
    [
      0,
      {
        [_eQN]: `PolicyRuleNumber`,
        [_xN]: _pRN,
      },
    ],
    [
      () => TransitGatewayPolicyRule,
      {
        [_eQN]: `PolicyRule`,
        [_xN]: _pRol,
      },
    ],
    [
      0,
      {
        [_eQN]: `TargetRouteTableId`,
        [_xN]: _tRTI,
      },
    ],
  ]
);
export var TransitGatewayPolicyTableAssociationList = list(n0, _TGPTAL, 0, [
  () => TransitGatewayPolicyTableAssociation,
  {
    [_xN]: _it,
  },
]);
export var TransitGatewayPolicyTableEntryList = list(n0, _TGPTEL, 0, [
  () => TransitGatewayPolicyTableEntry,
  {
    [_xN]: _it,
  },
]);
export var TransitGatewayPolicyTableIdStringList = list(n0, _TGPTISL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var TransitGatewayPolicyTableList = list(n0, _TGPTL, 0, [
  () => TransitGatewayPolicyTable,
  {
    [_xN]: _it,
  },
]);
export var AssociateTransitGatewayPolicyTable = op(
  n0,
  _ATGPT,
  0,
  () => AssociateTransitGatewayPolicyTableRequest,
  () => AssociateTransitGatewayPolicyTableResult
);
export var CreateTransitGatewayPolicyTable = op(
  n0,
  _CTGPT,
  0,
  () => CreateTransitGatewayPolicyTableRequest,
  () => CreateTransitGatewayPolicyTableResult
);
export var DeleteTransitGatewayPolicyTable = op(
  n0,
  _DTGPT,
  0,
  () => DeleteTransitGatewayPolicyTableRequest,
  () => DeleteTransitGatewayPolicyTableResult
);
export var DescribeTransitGatewayPolicyTables = op(
  n0,
  _DTGPTe,
  0,
  () => DescribeTransitGatewayPolicyTablesRequest,
  () => DescribeTransitGatewayPolicyTablesResult
);
export var DisassociateTransitGatewayPolicyTable = op(
  n0,
  _DTGPTi,
  0,
  () => DisassociateTransitGatewayPolicyTableRequest,
  () => DisassociateTransitGatewayPolicyTableResult
);
export var GetTransitGatewayPolicyTableAssociations = op(
  n0,
  _GTGPTA,
  0,
  () => GetTransitGatewayPolicyTableAssociationsRequest,
  () => GetTransitGatewayPolicyTableAssociationsResult
);
export var GetTransitGatewayPolicyTableEntries = op(
  n0,
  _GTGPTE,
  0,
  () => GetTransitGatewayPolicyTableEntriesRequest,
  () => GetTransitGatewayPolicyTableEntriesResult
);
