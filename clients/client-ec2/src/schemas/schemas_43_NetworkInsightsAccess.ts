// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AEC,
  _aEC,
  _AFn,
  _aFS,
  _ASAF,
  _ASAFL,
  _ASn,
  _aSn,
  _ASP,
  _ASPL,
  _ASPLR,
  _ASPR,
  _ASTB,
  _ASTE,
  _CDre,
  _cDre,
  _CNIAS,
  _CNIASR,
  _CNIASRr,
  _CT,
  _D,
  _d,
  _DA,
  _DAest,
  _dAS,
  _DNIAS,
  _DNIASAe,
  _DNIASARes,
  _DNIASAResc,
  _DNIASe,
  _DNIASR,
  _DNIASRe,
  _DNIASRes,
  _DNIASResc,
  _DPe,
  _DPes,
  _DPL,
  _DPLe,
  _dPLS,
  _dPS,
  _DR,
  _ED,
  _eD,
  _ePS,
  _EPx,
  _EPxc,
  _eQN,
  _FC,
  _fCS,
  _FFi,
  _fFi,
  _FI,
  _Fi,
  _fI,
  _Fil,
  _GNIASAF,
  _GNIASAFR,
  _GNIASAFRe,
  _GNIASC,
  _GNIASCR,
  _GNIASCRe,
  _it,
  _MP,
  _MPa,
  _mPSa,
  _MR,
  _NIAS,
  _nIAS,
  _NIASA,
  _nIASA,
  _NIASAA,
  _nIASAA,
  _NIASAe,
  _nIASAe,
  _NIASAet,
  _NIASAI,
  _nIASAI,
  _NIASAIe,
  _NIASAIL,
  _NIASAL,
  _nIASAS,
  _NIASC,
  _nIASC,
  _NIASe,
  _NIASI,
  _nIASI,
  _NIASIe,
  _NIASIL,
  _NIASL,
  _nIASS,
  _NTe,
  _nTe,
  _PHS,
  _pHS,
  _PHSR,
  _PLro,
  _Pr,
  _Prot,
  _PSa,
  _PSRa,
  _pSro,
  _Res,
  _Reso,
  _RSes,
  _rSeso,
  _rSesou,
  _RSRes,
  _RTe,
  _RTes,
  _rTSe,
  _S,
  _s,
  _SA,
  _SAou,
  _sAS,
  _SD,
  _sD,
  _SMt,
  _sMt,
  _SNIASA,
  _SNIASAR,
  _SNIASARt,
  _SPL,
  _SPLo,
  _sPLS,
  _SPo,
  _SPou,
  _sPS,
  _Sta,
  _sta,
  _T,
  _TR,
  _TRh,
  _TRS,
  _tRS,
  _TRSL,
  _TRSR,
  _TRSRL,
  _TS,
  _tS,
  _TSa,
  _UDp,
  _uDp,
  _WM,
  _wM,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
  ValueStringList,
} from "./schemas_0";
import { PathComponentList } from "./schemas_97_Network";

/* eslint no-var: 0 */

export var AccessScopeAnalysisFinding = struct(
  n0,
  _ASAF,
  0,
  [_NIASAI, _NIASI, _FI, _FC],
  [
    [
      0,
      {
        [_eQN]: `NetworkInsightsAccessScopeAnalysisId`,
        [_xN]: _nIASAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInsightsAccessScopeId`,
        [_xN]: _nIASI,
      },
    ],
    [
      0,
      {
        [_eQN]: `FindingId`,
        [_xN]: _fI,
      },
    ],
    [
      () => PathComponentList,
      {
        [_eQN]: `FindingComponentSet`,
        [_xN]: _fCS,
      },
    ],
  ]
);
export var AccessScopePath = struct(
  n0,
  _ASP,
  0,
  [_S, _D, _TR],
  [
    [
      () => PathStatement,
      {
        [_eQN]: `Source`,
        [_xN]: _s,
      },
    ],
    [
      () => PathStatement,
      {
        [_eQN]: `Destination`,
        [_xN]: _d,
      },
    ],
    [
      () => ThroughResourcesStatementList,
      {
        [_eQN]: `ThroughResourceSet`,
        [_xN]: _tRS,
      },
    ],
  ]
);
export var AccessScopePathRequest = struct(
  n0,
  _ASPR,
  0,
  [_S, _D, _TR],
  [
    [() => PathStatementRequest, 0],
    [() => PathStatementRequest, 0],
    [
      () => ThroughResourcesStatementRequestList,
      {
        [_xN]: _TRh,
      },
    ],
  ]
);
export var CreateNetworkInsightsAccessScopeRequest = struct(
  n0,
  _CNIASR,
  0,
  [_MP, _EPx, _CT, _TS, _DR],
  [
    [
      () => AccessScopePathListRequest,
      {
        [_xN]: _MPa,
      },
    ],
    [
      () => AccessScopePathListRequest,
      {
        [_xN]: _EPxc,
      },
    ],
    [0, 4],
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    2,
  ]
);
export var CreateNetworkInsightsAccessScopeResult = struct(
  n0,
  _CNIASRr,
  0,
  [_NIAS, _NIASC],
  [
    [
      () => NetworkInsightsAccessScope,
      {
        [_eQN]: `NetworkInsightsAccessScope`,
        [_xN]: _nIAS,
      },
    ],
    [
      () => NetworkInsightsAccessScopeContent,
      {
        [_eQN]: `NetworkInsightsAccessScopeContent`,
        [_xN]: _nIASC,
      },
    ],
  ]
);
export var DeleteNetworkInsightsAccessScopeRequest = struct(n0, _DNIASR, 0, [_DR, _NIASI], [2, 0]);
export var DeleteNetworkInsightsAccessScopeResult = struct(
  n0,
  _DNIASRe,
  0,
  [_NIASI],
  [
    [
      0,
      {
        [_eQN]: `NetworkInsightsAccessScopeId`,
        [_xN]: _nIASI,
      },
    ],
  ]
);
export var DescribeNetworkInsightsAccessScopeAnalysesRequest = struct(
  n0,
  _DNIASARes,
  0,
  [_NIASAIe, _NIASI, _ASTB, _ASTE, _Fi, _MR, _DR, _NTe],
  [
    [
      () => NetworkInsightsAccessScopeAnalysisIdList,
      {
        [_xN]: _NIASAI,
      },
    ],
    0,
    4,
    4,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    2,
    0,
  ]
);
export var DescribeNetworkInsightsAccessScopeAnalysesResult = struct(
  n0,
  _DNIASAResc,
  0,
  [_NIASA, _NTe],
  [
    [
      () => NetworkInsightsAccessScopeAnalysisList,
      {
        [_eQN]: `NetworkInsightsAccessScopeAnalysisSet`,
        [_xN]: _nIASAS,
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
export var DescribeNetworkInsightsAccessScopesRequest = struct(
  n0,
  _DNIASRes,
  0,
  [_NIASIe, _Fi, _MR, _DR, _NTe],
  [
    [
      () => NetworkInsightsAccessScopeIdList,
      {
        [_xN]: _NIASI,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    2,
    0,
  ]
);
export var DescribeNetworkInsightsAccessScopesResult = struct(
  n0,
  _DNIASResc,
  0,
  [_NIASe, _NTe],
  [
    [
      () => NetworkInsightsAccessScopeList,
      {
        [_eQN]: `NetworkInsightsAccessScopeSet`,
        [_xN]: _nIASS,
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
export var GetNetworkInsightsAccessScopeAnalysisFindingsRequest = struct(
  n0,
  _GNIASAFR,
  0,
  [_NIASAI, _MR, _NTe, _DR],
  [0, 1, 0, 2]
);
export var GetNetworkInsightsAccessScopeAnalysisFindingsResult = struct(
  n0,
  _GNIASAFRe,
  0,
  [_NIASAI, _ASn, _AFn, _NTe],
  [
    [
      0,
      {
        [_eQN]: `NetworkInsightsAccessScopeAnalysisId`,
        [_xN]: _nIASAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `AnalysisStatus`,
        [_xN]: _aSn,
      },
    ],
    [
      () => AccessScopeAnalysisFindingList,
      {
        [_eQN]: `AnalysisFindingSet`,
        [_xN]: _aFS,
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
export var GetNetworkInsightsAccessScopeContentRequest = struct(n0, _GNIASCR, 0, [_NIASI, _DR], [0, 2]);
export var GetNetworkInsightsAccessScopeContentResult = struct(
  n0,
  _GNIASCRe,
  0,
  [_NIASC],
  [
    [
      () => NetworkInsightsAccessScopeContent,
      {
        [_eQN]: `NetworkInsightsAccessScopeContent`,
        [_xN]: _nIASC,
      },
    ],
  ]
);
export var NetworkInsightsAccessScope = struct(
  n0,
  _NIAS,
  0,
  [_NIASI, _NIASAe, _CDre, _UDp, _T],
  [
    [
      0,
      {
        [_eQN]: `NetworkInsightsAccessScopeId`,
        [_xN]: _nIASI,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInsightsAccessScopeArn`,
        [_xN]: _nIASA,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreatedDate`,
        [_xN]: _cDre,
      },
    ],
    [
      4,
      {
        [_eQN]: `UpdatedDate`,
        [_xN]: _uDp,
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
export var NetworkInsightsAccessScopeAnalysis = struct(
  n0,
  _NIASAet,
  0,
  [_NIASAI, _NIASAA, _NIASI, _Sta, _SMt, _WM, _SD, _ED, _FFi, _AEC, _T],
  [
    [
      0,
      {
        [_eQN]: `NetworkInsightsAccessScopeAnalysisId`,
        [_xN]: _nIASAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInsightsAccessScopeAnalysisArn`,
        [_xN]: _nIASAA,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInsightsAccessScopeId`,
        [_xN]: _nIASI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
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
        [_eQN]: `WarningMessage`,
        [_xN]: _wM,
      },
    ],
    [
      4,
      {
        [_eQN]: `StartDate`,
        [_xN]: _sD,
      },
    ],
    [
      4,
      {
        [_eQN]: `EndDate`,
        [_xN]: _eD,
      },
    ],
    [
      0,
      {
        [_eQN]: `FindingsFound`,
        [_xN]: _fFi,
      },
    ],
    [
      1,
      {
        [_eQN]: `AnalyzedEniCount`,
        [_xN]: _aEC,
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
export var NetworkInsightsAccessScopeContent = struct(
  n0,
  _NIASC,
  0,
  [_NIASI, _MP, _EPx],
  [
    [
      0,
      {
        [_eQN]: `NetworkInsightsAccessScopeId`,
        [_xN]: _nIASI,
      },
    ],
    [
      () => AccessScopePathList,
      {
        [_eQN]: `MatchPathSet`,
        [_xN]: _mPSa,
      },
    ],
    [
      () => AccessScopePathList,
      {
        [_eQN]: `ExcludePathSet`,
        [_xN]: _ePS,
      },
    ],
  ]
);
export var PacketHeaderStatement = struct(
  n0,
  _PHS,
  0,
  [_SA, _DA, _SPo, _DPes, _SPL, _DPL, _Prot],
  [
    [
      () => ValueStringList,
      {
        [_eQN]: `SourceAddressSet`,
        [_xN]: _sAS,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `DestinationAddressSet`,
        [_xN]: _dAS,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `SourcePortSet`,
        [_xN]: _sPS,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `DestinationPortSet`,
        [_xN]: _dPS,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `SourcePrefixListSet`,
        [_xN]: _sPLS,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `DestinationPrefixListSet`,
        [_xN]: _dPLS,
      },
    ],
    [
      () => ProtocolList,
      {
        [_eQN]: `ProtocolSet`,
        [_xN]: _pSro,
      },
    ],
  ]
);
export var PacketHeaderStatementRequest = struct(
  n0,
  _PHSR,
  0,
  [_SA, _DA, _SPo, _DPes, _SPL, _DPL, _Prot],
  [
    [
      () => ValueStringList,
      {
        [_xN]: _SAou,
      },
    ],
    [
      () => ValueStringList,
      {
        [_xN]: _DAest,
      },
    ],
    [
      () => ValueStringList,
      {
        [_xN]: _SPou,
      },
    ],
    [
      () => ValueStringList,
      {
        [_xN]: _DPe,
      },
    ],
    [
      () => ValueStringList,
      {
        [_xN]: _SPLo,
      },
    ],
    [
      () => ValueStringList,
      {
        [_xN]: _DPLe,
      },
    ],
    [
      () => ProtocolList,
      {
        [_xN]: _Pr,
      },
    ],
  ]
);
export var PathStatement = struct(
  n0,
  _PSa,
  0,
  [_PHS, _RSes],
  [
    [
      () => PacketHeaderStatement,
      {
        [_eQN]: `PacketHeaderStatement`,
        [_xN]: _pHS,
      },
    ],
    [
      () => ResourceStatement,
      {
        [_eQN]: `ResourceStatement`,
        [_xN]: _rSeso,
      },
    ],
  ]
);
export var PathStatementRequest = struct(
  n0,
  _PSRa,
  0,
  [_PHS, _RSes],
  [
    [() => PacketHeaderStatementRequest, 0],
    [() => ResourceStatementRequest, 0],
  ]
);
export var ResourceStatement = struct(
  n0,
  _RSes,
  0,
  [_Res, _RTes],
  [
    [
      () => ValueStringList,
      {
        [_eQN]: `ResourceSet`,
        [_xN]: _rSesou,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `ResourceTypeSet`,
        [_xN]: _rTSe,
      },
    ],
  ]
);
export var ResourceStatementRequest = struct(
  n0,
  _RSRes,
  0,
  [_Res, _RTes],
  [
    [
      () => ValueStringList,
      {
        [_xN]: _Reso,
      },
    ],
    [
      () => ValueStringList,
      {
        [_xN]: _RTe,
      },
    ],
  ]
);
export var StartNetworkInsightsAccessScopeAnalysisRequest = struct(
  n0,
  _SNIASAR,
  0,
  [_NIASI, _DR, _TS, _CT],
  [
    0,
    2,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [0, 4],
  ]
);
export var StartNetworkInsightsAccessScopeAnalysisResult = struct(
  n0,
  _SNIASARt,
  0,
  [_NIASAet],
  [
    [
      () => NetworkInsightsAccessScopeAnalysis,
      {
        [_eQN]: `NetworkInsightsAccessScopeAnalysis`,
        [_xN]: _nIASAe,
      },
    ],
  ]
);
export var ThroughResourcesStatement = struct(
  n0,
  _TRS,
  0,
  [_RSes],
  [
    [
      () => ResourceStatement,
      {
        [_eQN]: `ResourceStatement`,
        [_xN]: _rSeso,
      },
    ],
  ]
);
export var ThroughResourcesStatementRequest = struct(n0, _TRSR, 0, [_RSes], [[() => ResourceStatementRequest, 0]]);
export var AccessScopeAnalysisFindingList = list(n0, _ASAFL, 0, [
  () => AccessScopeAnalysisFinding,
  {
    [_xN]: _it,
  },
]);
export var AccessScopePathList = list(n0, _ASPL, 0, [
  () => AccessScopePath,
  {
    [_xN]: _it,
  },
]);
export var AccessScopePathListRequest = list(n0, _ASPLR, 0, [
  () => AccessScopePathRequest,
  {
    [_xN]: _it,
  },
]);
export var NetworkInsightsAccessScopeAnalysisIdList = list(n0, _NIASAIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var NetworkInsightsAccessScopeAnalysisList = list(n0, _NIASAL, 0, [
  () => NetworkInsightsAccessScopeAnalysis,
  {
    [_xN]: _it,
  },
]);
export var NetworkInsightsAccessScopeIdList = list(n0, _NIASIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var NetworkInsightsAccessScopeList = list(n0, _NIASL, 0, [
  () => NetworkInsightsAccessScope,
  {
    [_xN]: _it,
  },
]);
export var ProtocolList = list(n0, _PLro, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var ThroughResourcesStatementList = list(n0, _TRSL, 0, [
  () => ThroughResourcesStatement,
  {
    [_xN]: _it,
  },
]);
export var ThroughResourcesStatementRequestList = list(n0, _TRSRL, 0, [
  () => ThroughResourcesStatementRequest,
  {
    [_xN]: _it,
  },
]);
export var CreateNetworkInsightsAccessScope = op(
  n0,
  _CNIAS,
  0,
  () => CreateNetworkInsightsAccessScopeRequest,
  () => CreateNetworkInsightsAccessScopeResult
);
export var DeleteNetworkInsightsAccessScope = op(
  n0,
  _DNIAS,
  0,
  () => DeleteNetworkInsightsAccessScopeRequest,
  () => DeleteNetworkInsightsAccessScopeResult
);
export var DescribeNetworkInsightsAccessScopeAnalyses = op(
  n0,
  _DNIASAe,
  0,
  () => DescribeNetworkInsightsAccessScopeAnalysesRequest,
  () => DescribeNetworkInsightsAccessScopeAnalysesResult
);
export var DescribeNetworkInsightsAccessScopes = op(
  n0,
  _DNIASe,
  0,
  () => DescribeNetworkInsightsAccessScopesRequest,
  () => DescribeNetworkInsightsAccessScopesResult
);
export var GetNetworkInsightsAccessScopeAnalysisFindings = op(
  n0,
  _GNIASAF,
  0,
  () => GetNetworkInsightsAccessScopeAnalysisFindingsRequest,
  () => GetNetworkInsightsAccessScopeAnalysisFindingsResult
);
export var GetNetworkInsightsAccessScopeContent = op(
  n0,
  _GNIASC,
  0,
  () => GetNetworkInsightsAccessScopeContentRequest,
  () => GetNetworkInsightsAccessScopeContentResult
);
export var StartNetworkInsightsAccessScopeAnalysis = op(
  n0,
  _SNIASA,
  0,
  () => StartNetworkInsightsAccessScopeAnalysisRequest,
  () => StartNetworkInsightsAccessScopeAnalysisResult
);
