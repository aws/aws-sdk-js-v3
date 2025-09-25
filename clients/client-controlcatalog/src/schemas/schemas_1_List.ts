// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _A,
  _ADE,
  _ADS,
  _Al,
  _AOS,
  _B,
  _C,
  _c,
  _CA,
  _CAo,
  _CC,
  _CCA,
  _CCAo,
  _CCF,
  _CCMD,
  _CCo,
  _CCS,
  _CCSL,
  _CF,
  _CM,
  _CMF,
  _CMo,
  _CP,
  _CPo,
  _CS,
  _CT,
  _D,
  _Do,
  _Dom,
  _DR,
  _DRF,
  _DRFL,
  _DS,
  _DSL,
  _e,
  _F,
  _FMD,
  _Fr,
  _GC,
  _GCR,
  _GCRe,
  _GR,
  _h,
  _hE,
  _hQ,
  _I,
  _ID,
  _Id,
  _Ide,
  _IF,
  _Im,
  _IS,
  _ISE,
  _It,
  _LC,
  _LCC,
  _LCCR,
  _LCCRi,
  _LCM,
  _LCMR,
  _LCMRi,
  _LCR,
  _LCRi,
  _LD,
  _LDR,
  _LDRi,
  _LO,
  _LOR,
  _LORi,
  _LUT,
  _M,
  _Ma,
  _MR,
  _mR,
  _MT,
  _MTa,
  _N,
  _NT,
  _nT,
  _O,
  _Ob,
  _OF,
  _ORF,
  _ORFL,
  _OS,
  _OSL,
  _P,
  _RC,
  _RNFE,
  _S,
  _s,
  _Sc,
  _T,
  _TE,
  _Ty,
  _VE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [0],

  __AccessDeniedException
);
export var AssociatedDomainSummary = struct(n0, _ADS, 0, [_A, _N], [0, 0]);
export var AssociatedObjectiveSummary = struct(n0, _AOS, 0, [_A, _N], [0, 0]);
export var CommonControlFilter = struct(n0, _CCF, 0, [_O], [() => ObjectiveResourceFilterList]);
export var CommonControlMappingDetails = struct(n0, _CCMD, 0, [_CCA], [0]);
export var CommonControlSummary = struct(
  n0,
  _CCS,
  0,
  [_A, _N, _D, _Do, _Ob, _CT, _LUT],
  [0, 0, 0, () => AssociatedDomainSummary, () => AssociatedObjectiveSummary, 4, 4]
);
export var ControlFilter = struct(n0, _CF, 0, [_I], [() => ImplementationFilter]);
export var ControlMapping = struct(n0, _CM, 0, [_CA, _MT, _Ma], [0, 0, () => Mapping]);
export var ControlMappingFilter = struct(n0, _CMF, 0, [_CAo, _CCAo, _MTa], [64 | 0, 64 | 0, 64 | 0]);
export var ControlParameter = struct(n0, _CP, 0, [_N], [0]);
export var ControlSummary = struct(
  n0,
  _CS,
  0,
  [_A, _Al, _N, _D, _B, _S, _Im, _CT, _GR],
  [0, 64 | 0, 0, 0, 0, 0, () => ImplementationSummary, 4, 64 | 0]
);
export var DomainResourceFilter = struct(n0, _DRF, 0, [_A], [0]);
export var DomainSummary = struct(n0, _DS, 0, [_A, _N, _D, _CT, _LUT], [0, 0, 0, 4, 4]);
export var FrameworkMappingDetails = struct(n0, _FMD, 0, [_N, _It], [0, 0]);
export var GetControlRequest = struct(n0, _GCR, 0, [_CA], [0]);
export var GetControlResponse = struct(
  n0,
  _GCRe,
  0,
  [_A, _Al, _N, _D, _B, _S, _RC, _Im, _P, _CT, _GR],
  [0, 64 | 0, 0, 0, 0, 0, () => RegionConfiguration, () => ImplementationDetails, () => ControlParameters, 4, 64 | 0]
);
export var ImplementationDetails = struct(n0, _ID, 0, [_T, _Id], [0, 0]);
export var ImplementationFilter = struct(n0, _IF, 0, [_Ty, _Ide], [64 | 0, 64 | 0]);
export var ImplementationSummary = struct(n0, _IS, 0, [_T, _Id], [0, 0]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalServerException
);
export var ListCommonControlsRequest = struct(
  n0,
  _LCCR,
  0,
  [_MR, _NT, _CCF],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    () => CommonControlFilter,
  ]
);
export var ListCommonControlsResponse = struct(n0, _LCCRi, 0, [_CC, _NT], [() => CommonControlSummaryList, 0]);
export var ListControlMappingsRequest = struct(
  n0,
  _LCMR,
  0,
  [_NT, _MR, _F],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    () => ControlMappingFilter,
  ]
);
export var ListControlMappingsResponse = struct(n0, _LCMRi, 0, [_CMo, _NT], [() => ControlMappings, 0]);
export var ListControlsRequest = struct(
  n0,
  _LCR,
  0,
  [_NT, _MR, _F],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    () => ControlFilter,
  ]
);
export var ListControlsResponse = struct(n0, _LCRi, 0, [_C, _NT], [() => Controls, 0]);
export var ListDomainsRequest = struct(
  n0,
  _LDR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListDomainsResponse = struct(n0, _LDRi, 0, [_Dom, _NT], [() => DomainSummaryList, 0]);
export var ListObjectivesRequest = struct(
  n0,
  _LOR,
  0,
  [_MR, _NT, _OF],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    () => ObjectiveFilter,
  ]
);
export var ListObjectivesResponse = struct(n0, _LORi, 0, [_O, _NT], [() => ObjectiveSummaryList, 0]);
export var ObjectiveFilter = struct(n0, _OF, 0, [_Dom], [() => DomainResourceFilterList]);
export var ObjectiveResourceFilter = struct(n0, _ORF, 0, [_A], [0]);
export var ObjectiveSummary = struct(
  n0,
  _OS,
  0,
  [_A, _N, _D, _Do, _CT, _LUT],
  [0, 0, 0, () => AssociatedDomainSummary, 4, 4]
);
export var RegionConfiguration = struct(n0, _RC, 0, [_Sc, _DR], [0, 64 | 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ValidationException
);
export var Unit = "unit" as const;

export var CommonControlArnFilterList = 64 | 0;

export var CommonControlSummaryList = list(n0, _CCSL, 0, () => CommonControlSummary);
export var ControlAliases = 64 | 0;

export var ControlArnFilterList = 64 | 0;

export var ControlMappings = list(n0, _CMo, 0, () => ControlMapping);
export var ControlParameters = list(n0, _CPo, 0, () => ControlParameter);
export var Controls = list(n0, _C, 0, () => ControlSummary);
export var DeployableRegions = 64 | 0;

export var DomainResourceFilterList = list(n0, _DRFL, 0, () => DomainResourceFilter);
export var DomainSummaryList = list(n0, _DSL, 0, () => DomainSummary);
export var GovernedResources = 64 | 0;

export var ImplementationIdentifierFilterList = 64 | 0;

export var ImplementationTypeFilterList = 64 | 0;

export var MappingTypeFilterList = 64 | 0;

export var ObjectiveResourceFilterList = list(n0, _ORFL, 0, () => ObjectiveResourceFilter);
export var ObjectiveSummaryList = list(n0, _OSL, 0, () => ObjectiveSummary);
export var Mapping = uni(n0, _Ma, 0, [_Fr, _CCo], [() => FrameworkMappingDetails, () => CommonControlMappingDetails]);
export var GetControl = op(
  n0,
  _GC,
  {
    [_h]: ["POST", "/get-control", 200],
  },
  () => GetControlRequest,
  () => GetControlResponse
);
export var ListCommonControls = op(
  n0,
  _LCC,
  {
    [_h]: ["POST", "/common-controls", 200],
  },
  () => ListCommonControlsRequest,
  () => ListCommonControlsResponse
);
export var ListControlMappings = op(
  n0,
  _LCM,
  {
    [_h]: ["POST", "/list-control-mappings", 200],
  },
  () => ListControlMappingsRequest,
  () => ListControlMappingsResponse
);
export var ListControls = op(
  n0,
  _LC,
  {
    [_h]: ["POST", "/list-controls", 200],
  },
  () => ListControlsRequest,
  () => ListControlsResponse
);
export var ListDomains = op(
  n0,
  _LD,
  {
    [_h]: ["POST", "/domains", 200],
  },
  () => ListDomainsRequest,
  () => ListDomainsResponse
);
export var ListObjectives = op(
  n0,
  _LO,
  {
    [_h]: ["POST", "/objectives", 200],
  },
  () => ListObjectivesRequest,
  () => ListObjectivesResponse
);
