// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AEL,
  _AETE,
  _AETEFEL,
  _AETER,
  _AETERs,
  _APTE,
  _APTER,
  _APTERs,
  _CAre,
  _CER,
  _CEr,
  _CERr,
  _Con,
  _CSCo,
  _CTli,
  _DDi,
  _De,
  _DEe,
  _DEes,
  _DEFE,
  _DEFER,
  _DEFERi,
  _DEL,
  _DER,
  _DERe,
  _DERes,
  _DEResc,
  _DPC,
  _DPFE,
  _DPFER,
  _DPFERi,
  _DSIa,
  _ECn,
  _ECxp,
  _EDD,
  _EE,
  _EES,
  _EESL,
  _EEx,
  _EIn,
  _EInt,
  _EL,
  _EM,
  _En,
  _End,
  _EPC,
  _EPCL,
  _ESL,
  _ESx,
  _ETnd,
  _ETnt,
  _FE,
  _FEL,
  _FI,
  _FN,
  _GN,
  _I,
  _IAN,
  _II,
  _IUN,
  _LE,
  _LEE,
  _LEER,
  _LEERi,
  _LEP,
  _LEPR,
  _LEPRi,
  _LER,
  _LERi,
  _LN,
  _MR,
  _N,
  _NT,
  _NTe,
  _P,
  _Pe,
  _PS,
  _PSL,
  _RA,
  _SIum,
  _St,
  _UA,
  _UE,
  _UER,
  _UIC,
  _UN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var NameType = sim(n0, _NT, 0, 8);
export var AssociateEntitiesToExperienceRequest = struct(
  n0,
  _AETER,
  0,
  [_I, _II, _EL],
  [0, 0, () => AssociateEntityList]
);
export var AssociateEntitiesToExperienceResponse = struct(
  n0,
  _AETERs,
  0,
  [_FEL],
  [() => AssociateEntitiesToExperienceFailedEntityList]
);
export var AssociatePersonasToEntitiesRequest = struct(
  n0,
  _APTER,
  0,
  [_I, _II, _P],
  [0, 0, () => EntityPersonaConfigurationList]
);
export var AssociatePersonasToEntitiesResponse = struct(n0, _APTERs, 0, [_FEL], [() => FailedEntityList]);
export var ContentSourceConfiguration = struct(n0, _CSCo, 0, [_DSIa, _FI, _DPC], [64 | 0, 64 | 0, 2]);
export var CreateExperienceRequest = struct(
  n0,
  _CER,
  0,
  [_N, _II, _RA, _Con, _De, _CTli],
  [0, 0, 0, () => ExperienceConfiguration, 0, [0, 4]]
);
export var CreateExperienceResponse = struct(n0, _CERr, 0, [_I], [0]);
export var DeleteExperienceRequest = struct(n0, _DER, 0, [_I, _II], [0, 0]);
export var DeleteExperienceResponse = struct(n0, _DERe, 0, [], []);
export var DescribeExperienceRequest = struct(n0, _DERes, 0, [_I, _II], [0, 0]);
export var DescribeExperienceResponse = struct(
  n0,
  _DEResc,
  0,
  [_I, _II, _N, _En, _Con, _CAre, _UA, _De, _St, _RA, _EM],
  [0, 0, 0, () => ExperienceEndpoints, () => ExperienceConfiguration, 4, 4, 0, 0, 0, 0]
);
export var DisassociateEntitiesFromExperienceRequest = struct(
  n0,
  _DEFER,
  0,
  [_I, _II, _EL],
  [0, 0, () => DisassociateEntityList]
);
export var DisassociateEntitiesFromExperienceResponse = struct(n0, _DEFERi, 0, [_FEL], [() => FailedEntityList]);
export var DisassociatePersonasFromEntitiesRequest = struct(n0, _DPFER, 0, [_I, _II, _EIn], [0, 0, 64 | 0]);
export var DisassociatePersonasFromEntitiesResponse = struct(n0, _DPFERi, 0, [_FEL], [() => FailedEntityList]);
export var EntityConfiguration = struct(n0, _ECn, 0, [_EInt, _ETnt], [0, 0]);
export var EntityDisplayData = struct(
  n0,
  _EDD,
  0,
  [_UN, _GN, _IUN, _FN, _LN],
  [
    [() => NameType, 0],
    [() => NameType, 0],
    [() => NameType, 0],
    [() => NameType, 0],
    [() => NameType, 0],
  ]
);
export var EntityPersonaConfiguration = struct(n0, _EPC, 0, [_EInt, _Pe], [0, 0]);
export var ExperienceConfiguration = struct(
  n0,
  _ECxp,
  0,
  [_CSCo, _UIC],
  [() => ContentSourceConfiguration, () => UserIdentityConfiguration]
);
export var ExperienceEndpoint = struct(n0, _EE, 0, [_ETnd, _End], [0, 0]);
export var ExperienceEntitiesSummary = struct(n0, _EES, 0, [_EInt, _ETnt, _DDi], [0, 0, [() => EntityDisplayData, 0]]);
export var ExperiencesSummary = struct(n0, _ESx, 0, [_N, _I, _CAre, _St, _En], [0, 0, 4, 0, () => ExperienceEndpoints]);
export var FailedEntity = struct(n0, _FE, 0, [_EInt, _EM], [0, 0]);
export var ListEntityPersonasRequest = struct(n0, _LEPR, 0, [_I, _II, _NTe, _MR], [0, 0, 0, 1]);
export var ListEntityPersonasResponse = struct(n0, _LEPRi, 0, [_SIum, _NTe], [() => PersonasSummaryList, 0]);
export var ListExperienceEntitiesRequest = struct(n0, _LEER, 0, [_I, _II, _NTe], [0, 0, 0]);
export var ListExperienceEntitiesResponse = struct(
  n0,
  _LEERi,
  0,
  [_SIum, _NTe],
  [[() => ExperienceEntitiesSummaryList, 0], 0]
);
export var ListExperiencesRequest = struct(n0, _LER, 0, [_II, _NTe, _MR], [0, 0, 1]);
export var ListExperiencesResponse = struct(n0, _LERi, 0, [_SIum, _NTe], [() => ExperiencesSummaryList, 0]);
export var PersonasSummary = struct(n0, _PS, 0, [_EInt, _Pe, _CAre, _UA], [0, 0, 4, 4]);
export var UpdateExperienceRequest = struct(
  n0,
  _UER,
  0,
  [_I, _N, _II, _RA, _Con, _De],
  [0, 0, 0, 0, () => ExperienceConfiguration, 0]
);
export var UserIdentityConfiguration = struct(n0, _UIC, 0, [_IAN], [0]);
export var AssociateEntitiesToExperienceFailedEntityList = list(n0, _AETEFEL, 0, () => FailedEntity);
export var AssociateEntityList = list(n0, _AEL, 0, () => EntityConfiguration);
export var DataSourceIdList = 64 | 0;

export var DisassociateEntityList = list(n0, _DEL, 0, () => EntityConfiguration);
export var EntityIdsList = 64 | 0;

export var EntityPersonaConfigurationList = list(n0, _EPCL, 0, () => EntityPersonaConfiguration);
export var ExperienceEndpoints = list(n0, _EEx, 0, () => ExperienceEndpoint);
export var ExperienceEntitiesSummaryList = list(n0, _EESL, 0, [() => ExperienceEntitiesSummary, 0]);
export var ExperiencesSummaryList = list(n0, _ESL, 0, () => ExperiencesSummary);
export var FailedEntityList = list(n0, _FEL, 0, () => FailedEntity);
export var FaqIdsList = 64 | 0;

export var PersonasSummaryList = list(n0, _PSL, 0, () => PersonasSummary);
export var AssociateEntitiesToExperience = op(
  n0,
  _AETE,
  0,
  () => AssociateEntitiesToExperienceRequest,
  () => AssociateEntitiesToExperienceResponse
);
export var AssociatePersonasToEntities = op(
  n0,
  _APTE,
  0,
  () => AssociatePersonasToEntitiesRequest,
  () => AssociatePersonasToEntitiesResponse
);
export var CreateExperience = op(
  n0,
  _CEr,
  0,
  () => CreateExperienceRequest,
  () => CreateExperienceResponse
);
export var DeleteExperience = op(
  n0,
  _DEe,
  0,
  () => DeleteExperienceRequest,
  () => DeleteExperienceResponse
);
export var DescribeExperience = op(
  n0,
  _DEes,
  0,
  () => DescribeExperienceRequest,
  () => DescribeExperienceResponse
);
export var DisassociateEntitiesFromExperience = op(
  n0,
  _DEFE,
  0,
  () => DisassociateEntitiesFromExperienceRequest,
  () => DisassociateEntitiesFromExperienceResponse
);
export var DisassociatePersonasFromEntities = op(
  n0,
  _DPFE,
  0,
  () => DisassociatePersonasFromEntitiesRequest,
  () => DisassociatePersonasFromEntitiesResponse
);
export var ListEntityPersonas = op(
  n0,
  _LEP,
  0,
  () => ListEntityPersonasRequest,
  () => ListEntityPersonasResponse
);
export var ListExperienceEntities = op(
  n0,
  _LEE,
  0,
  () => ListExperienceEntitiesRequest,
  () => ListExperienceEntitiesResponse
);
export var ListExperiences = op(
  n0,
  _LE,
  0,
  () => ListExperiencesRequest,
  () => ListExperiencesResponse
);
export var UpdateExperience = op(
  n0,
  _UE,
  0,
  () => UpdateExperienceRequest,
  () => Unit
);
