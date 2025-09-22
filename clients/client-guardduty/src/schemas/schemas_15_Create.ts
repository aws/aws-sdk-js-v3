// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _act,
  _Acti,
  _acti,
  _Actio,
  _CDR,
  _CDr,
  _CDRr,
  _CIPS,
  _CIPSR,
  _CIPSRr,
  _CMPP,
  _CMPPR,
  _CMPPRr,
  _CPD,
  _CPDR,
  _CPDRr,
  _CTES,
  _CTESR,
  _CTESr,
  _CTESRr,
  _CTESRre,
  _CTESRrea,
  _CTIS,
  _CTISR,
  _CTISRr,
  _CTl,
  _cTl,
  _DI,
  _dI,
  _DIe,
  _dIe,
  _DP,
  _dP,
  _DS,
  _dS,
  _DT,
  _dT,
  _EBO,
  _eBO,
  _En,
  _en,
  _F,
  _f,
  _Fo,
  _fo,
  _FPF,
  _fPF,
  _hL,
  _ht,
  _ISI,
  _iSI,
  _iTd,
  _jN,
  _Lo,
  _lo,
  _MP,
  _mP,
  _MPPI,
  _mPPI,
  _N,
  _n,
  _PR,
  _pR,
  _Ro,
  _ro,
  _Ta,
  _ta,
  _TESI,
  _tESI,
  _TESIr,
  _tESIr,
  _TISI,
  _tISI,
  _UDS,
  _uDS,
  _UDSR,
  n0,
} from "./schemas_0";
import {
  DataSourceConfigurations,
  DetectorFeatureConfigurations,
  MalwareProtectionConfigurationResult,
} from "./schemas_1_Detector";
import { CreateProtectedResource, MalwareProtectionPlanActions } from "./schemas_10_ProtectionPlan";
import { DestinationProperties } from "./schemas_31_Destination";

/* eslint no-var: 0 */

export var CreateDetectorRequest = struct(
  n0,
  _CDR,
  0,
  [_En, _CTl, _FPF, _DS, _Ta, _F],
  [
    [
      2,
      {
        [_jN]: _en,
      },
    ],
    [
      0,
      {
        [_jN]: _cTl,
        [_iTd]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _fPF,
      },
    ],
    [
      () => DataSourceConfigurations,
      {
        [_jN]: _dS,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      () => DetectorFeatureConfigurations,
      {
        [_jN]: _f,
      },
    ],
  ]
);
export var CreateDetectorResponse = struct(
  n0,
  _CDRr,
  0,
  [_DI, _UDS],
  [
    [
      0,
      {
        [_jN]: _dI,
      },
    ],
    [
      () => UnprocessedDataSourcesResult,
      {
        [_jN]: _uDS,
      },
    ],
  ]
);
export var CreateIPSetRequest = struct(
  n0,
  _CIPSR,
  0,
  [_DI, _N, _Fo, _Lo, _Acti, _CTl, _Ta, _EBO],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _fo,
      },
    ],
    [
      0,
      {
        [_jN]: _lo,
      },
    ],
    [
      2,
      {
        [_jN]: _act,
      },
    ],
    [
      0,
      {
        [_jN]: _cTl,
        [_iTd]: 1,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      0,
      {
        [_jN]: _eBO,
      },
    ],
  ]
);
export var CreateIPSetResponse = struct(
  n0,
  _CIPSRr,
  0,
  [_ISI],
  [
    [
      0,
      {
        [_jN]: _iSI,
      },
    ],
  ]
);
export var CreateMalwareProtectionPlanRequest = struct(
  n0,
  _CMPPR,
  0,
  [_CTl, _Ro, _PR, _Actio, _Ta],
  [
    [
      0,
      {
        [_jN]: _cTl,
        [_iTd]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _ro,
      },
    ],
    [
      () => CreateProtectedResource,
      {
        [_jN]: _pR,
      },
    ],
    [
      () => MalwareProtectionPlanActions,
      {
        [_jN]: _acti,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var CreateMalwareProtectionPlanResponse = struct(
  n0,
  _CMPPRr,
  0,
  [_MPPI],
  [
    [
      0,
      {
        [_jN]: _mPPI,
      },
    ],
  ]
);
export var CreatePublishingDestinationRequest = struct(
  n0,
  _CPDR,
  0,
  [_DI, _DT, _DP, _CTl],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _dT,
      },
    ],
    [
      () => DestinationProperties,
      {
        [_jN]: _dP,
      },
    ],
    [
      0,
      {
        [_jN]: _cTl,
        [_iTd]: 1,
      },
    ],
  ]
);
export var CreatePublishingDestinationResponse = struct(
  n0,
  _CPDRr,
  0,
  [_DIe],
  [
    [
      0,
      {
        [_jN]: _dIe,
      },
    ],
  ]
);
export var CreateThreatEntitySetRequest = struct(
  n0,
  _CTESR,
  0,
  [_DI, _N, _Fo, _Lo, _EBO, _Acti, _CTl, _Ta],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _fo,
      },
    ],
    [
      0,
      {
        [_jN]: _lo,
      },
    ],
    [
      0,
      {
        [_jN]: _eBO,
      },
    ],
    [
      2,
      {
        [_jN]: _act,
      },
    ],
    [
      0,
      {
        [_jN]: _cTl,
        [_iTd]: 1,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var CreateThreatEntitySetResponse = struct(
  n0,
  _CTESRr,
  0,
  [_TESI],
  [
    [
      0,
      {
        [_jN]: _tESI,
      },
    ],
  ]
);
export var CreateThreatIntelSetRequest = struct(
  n0,
  _CTISR,
  0,
  [_DI, _N, _Fo, _Lo, _Acti, _CTl, _Ta, _EBO],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _fo,
      },
    ],
    [
      0,
      {
        [_jN]: _lo,
      },
    ],
    [
      2,
      {
        [_jN]: _act,
      },
    ],
    [
      0,
      {
        [_jN]: _cTl,
        [_iTd]: 1,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      0,
      {
        [_jN]: _eBO,
      },
    ],
  ]
);
export var CreateThreatIntelSetResponse = struct(
  n0,
  _CTISRr,
  0,
  [_TISI],
  [
    [
      0,
      {
        [_jN]: _tISI,
      },
    ],
  ]
);
export var CreateTrustedEntitySetRequest = struct(
  n0,
  _CTESRre,
  0,
  [_DI, _N, _Fo, _Lo, _EBO, _Acti, _CTl, _Ta],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _fo,
      },
    ],
    [
      0,
      {
        [_jN]: _lo,
      },
    ],
    [
      0,
      {
        [_jN]: _eBO,
      },
    ],
    [
      2,
      {
        [_jN]: _act,
      },
    ],
    [
      0,
      {
        [_jN]: _cTl,
        [_iTd]: 1,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var CreateTrustedEntitySetResponse = struct(
  n0,
  _CTESRrea,
  0,
  [_TESIr],
  [
    [
      0,
      {
        [_jN]: _tESIr,
      },
    ],
  ]
);
export var UnprocessedDataSourcesResult = struct(
  n0,
  _UDSR,
  0,
  [_MP],
  [
    [
      () => MalwareProtectionConfigurationResult,
      {
        [_jN]: _mP,
      },
    ],
  ]
);
export var CreateDetector = op(
  n0,
  _CDr,
  {
    [_ht]: ["POST", "/detector", 200],
  },
  () => CreateDetectorRequest,
  () => CreateDetectorResponse
);
export var CreateIPSet = op(
  n0,
  _CIPS,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/ipset", 200],
  },
  () => CreateIPSetRequest,
  () => CreateIPSetResponse
);
export var CreateMalwareProtectionPlan = op(
  n0,
  _CMPP,
  {
    [_ht]: ["POST", "/malware-protection-plan", 200],
  },
  () => CreateMalwareProtectionPlanRequest,
  () => CreateMalwareProtectionPlanResponse
);
export var CreatePublishingDestination = op(
  n0,
  _CPD,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/publishingDestination", 200],
  },
  () => CreatePublishingDestinationRequest,
  () => CreatePublishingDestinationResponse
);
export var CreateThreatEntitySet = op(
  n0,
  _CTES,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/threatentityset", 200],
  },
  () => CreateThreatEntitySetRequest,
  () => CreateThreatEntitySetResponse
);
export var CreateThreatIntelSet = op(
  n0,
  _CTIS,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/threatintelset", 200],
  },
  () => CreateThreatIntelSetRequest,
  () => CreateThreatIntelSetResponse
);
export var CreateTrustedEntitySet = op(
  n0,
  _CTESr,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/trustedentityset", 200],
  },
  () => CreateTrustedEntitySetRequest,
  () => CreateTrustedEntitySetResponse
);
