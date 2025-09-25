// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConditionalCheckFailedException as __ConditionalCheckFailedException,
  ResourceAlreadyExistsException as __ResourceAlreadyExistsException,
  SyncConfigurationStillExistsException as __SyncConfigurationStillExistsException,
  UnsupportedProviderTypeException as __UnsupportedProviderTypeException,
  UpdateOutOfSyncException as __UpdateOutOfSyncException,
} from "../models/index";
import {
  _B,
  _c,
  _CA,
  _CCFE,
  _CF,
  _CRL,
  _CRLI,
  _CRLO,
  _CSC,
  _CSCI,
  _CSCO,
  _D,
  _DRL,
  _DRLI,
  _DRLO,
  _E,
  _e,
  _EI,
  _EKA,
  _Ev,
  _GRL,
  _GRLI,
  _GRLO,
  _GRSS,
  _GRSSI,
  _GRSSO,
  _GSC,
  _GSCI,
  _GSCO,
  _hE,
  _LRL,
  _LRLI,
  _LRLO,
  _LRSD,
  _LRSDI,
  _LRSDO,
  _LS,
  _LSC,
  _LSCI,
  _LSCO,
  _M,
  _MR,
  _NT,
  _OI,
  _P,
  _PDS,
  _PT,
  _RA,
  _RAEE,
  _RL,
  _RLA,
  _RLI,
  _RLIe,
  _RLL,
  _RN,
  _RNe,
  _RSA,
  _RSD,
  _RSDe,
  _RSDL,
  _RSE,
  _RSEL,
  _S,
  _SA,
  _SC,
  _SCL,
  _SCSEE,
  _SCy,
  _ST,
  _T,
  _Ta,
  _Ti,
  _TRUO,
  _Ty,
  _UOOSE,
  _UPTE,
  _URL,
  _URLI,
  _URLO,
  _USC,
  _USCI,
  _USCO,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_3_Create";

/* eslint no-var: 0 */

export var ConditionalCheckFailedException = error(
  n0,
  _CCFE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConditionalCheckFailedException
);
export var CreateRepositoryLinkInput = struct(n0, _CRLI, 0, [_CA, _OI, _RN, _EKA, _T], [0, 0, 0, 0, () => TagList]);
export var CreateRepositoryLinkOutput = struct(n0, _CRLO, 0, [_RLI], [() => RepositoryLinkInfo]);
export var CreateSyncConfigurationInput = struct(
  n0,
  _CSCI,
  0,
  [_B, _CF, _RLIe, _RNe, _RA, _ST, _PDS, _TRUO],
  [0, 0, 0, 0, 0, 0, 0, 0]
);
export var CreateSyncConfigurationOutput = struct(n0, _CSCO, 0, [_SC], [() => SyncConfiguration]);
export var DeleteRepositoryLinkInput = struct(n0, _DRLI, 0, [_RLIe], [0]);
export var DeleteRepositoryLinkOutput = struct(n0, _DRLO, 0, [], []);
export var GetRepositoryLinkInput = struct(n0, _GRLI, 0, [_RLIe], [0]);
export var GetRepositoryLinkOutput = struct(n0, _GRLO, 0, [_RLI], [() => RepositoryLinkInfo]);
export var GetRepositorySyncStatusInput = struct(n0, _GRSSI, 0, [_B, _RLIe, _ST], [0, 0, 0]);
export var GetRepositorySyncStatusOutput = struct(n0, _GRSSO, 0, [_LS], [() => RepositorySyncAttempt]);
export var GetSyncConfigurationInput = struct(n0, _GSCI, 0, [_ST, _RNe], [0, 0]);
export var GetSyncConfigurationOutput = struct(n0, _GSCO, 0, [_SC], [() => SyncConfiguration]);
export var ListRepositoryLinksInput = struct(n0, _LRLI, 0, [_MR, _NT], [1, 0]);
export var ListRepositoryLinksOutput = struct(n0, _LRLO, 0, [_RL, _NT], [() => RepositoryLinkList, 0]);
export var ListRepositorySyncDefinitionsInput = struct(n0, _LRSDI, 0, [_RLIe, _ST], [0, 0]);
export var ListRepositorySyncDefinitionsOutput = struct(
  n0,
  _LRSDO,
  0,
  [_RSD, _NT],
  [() => RepositorySyncDefinitionList, 0]
);
export var ListSyncConfigurationsInput = struct(n0, _LSCI, 0, [_MR, _NT, _RLIe, _ST], [1, 0, 0, 0]);
export var ListSyncConfigurationsOutput = struct(n0, _LSCO, 0, [_SCy, _NT], [() => SyncConfigurationList, 0]);
export var RepositoryLinkInfo = struct(n0, _RLI, 0, [_CA, _EKA, _OI, _PT, _RLA, _RLIe, _RN], [0, 0, 0, 0, 0, 0, 0]);
export var RepositorySyncAttempt = struct(n0, _RSA, 0, [_SA, _S, _E], [4, 0, () => RepositorySyncEventList]);
export var RepositorySyncDefinition = struct(n0, _RSDe, 0, [_B, _D, _P, _Ta], [0, 0, 0, 0]);
export var RepositorySyncEvent = struct(n0, _RSE, 0, [_Ev, _EI, _Ti, _Ty], [0, 0, 4, 0]);
export var ResourceAlreadyExistsException = error(
  n0,
  _RAEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ResourceAlreadyExistsException
);
export var SyncConfiguration = struct(
  n0,
  _SC,
  0,
  [_B, _CF, _OI, _PT, _RLIe, _RN, _RNe, _RA, _ST, _PDS, _TRUO],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var SyncConfigurationStillExistsException = error(
  n0,
  _SCSEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __SyncConfigurationStillExistsException
);
export var UnsupportedProviderTypeException = error(
  n0,
  _UPTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __UnsupportedProviderTypeException
);
export var UpdateOutOfSyncException = error(
  n0,
  _UOOSE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __UpdateOutOfSyncException
);
export var UpdateRepositoryLinkInput = struct(n0, _URLI, 0, [_CA, _EKA, _RLIe], [0, 0, 0]);
export var UpdateRepositoryLinkOutput = struct(n0, _URLO, 0, [_RLI], [() => RepositoryLinkInfo]);
export var UpdateSyncConfigurationInput = struct(
  n0,
  _USCI,
  0,
  [_B, _CF, _RLIe, _RNe, _RA, _ST, _PDS, _TRUO],
  [0, 0, 0, 0, 0, 0, 0, 0]
);
export var UpdateSyncConfigurationOutput = struct(n0, _USCO, 0, [_SC], [() => SyncConfiguration]);
export var RepositoryLinkList = list(n0, _RLL, 0, () => RepositoryLinkInfo);
export var RepositorySyncDefinitionList = list(n0, _RSDL, 0, () => RepositorySyncDefinition);
export var RepositorySyncEventList = list(n0, _RSEL, 0, () => RepositorySyncEvent);
export var SyncConfigurationList = list(n0, _SCL, 0, () => SyncConfiguration);
export var CreateRepositoryLink = op(
  n0,
  _CRL,
  0,
  () => CreateRepositoryLinkInput,
  () => CreateRepositoryLinkOutput
);
export var CreateSyncConfiguration = op(
  n0,
  _CSC,
  0,
  () => CreateSyncConfigurationInput,
  () => CreateSyncConfigurationOutput
);
export var DeleteRepositoryLink = op(
  n0,
  _DRL,
  0,
  () => DeleteRepositoryLinkInput,
  () => DeleteRepositoryLinkOutput
);
export var GetRepositoryLink = op(
  n0,
  _GRL,
  0,
  () => GetRepositoryLinkInput,
  () => GetRepositoryLinkOutput
);
export var GetRepositorySyncStatus = op(
  n0,
  _GRSS,
  0,
  () => GetRepositorySyncStatusInput,
  () => GetRepositorySyncStatusOutput
);
export var GetSyncConfiguration = op(
  n0,
  _GSC,
  0,
  () => GetSyncConfigurationInput,
  () => GetSyncConfigurationOutput
);
export var ListRepositoryLinks = op(
  n0,
  _LRL,
  0,
  () => ListRepositoryLinksInput,
  () => ListRepositoryLinksOutput
);
export var ListRepositorySyncDefinitions = op(
  n0,
  _LRSD,
  0,
  () => ListRepositorySyncDefinitionsInput,
  () => ListRepositorySyncDefinitionsOutput
);
export var ListSyncConfigurations = op(
  n0,
  _LSC,
  0,
  () => ListSyncConfigurationsInput,
  () => ListSyncConfigurationsOutput
);
export var UpdateRepositoryLink = op(
  n0,
  _URL,
  0,
  () => UpdateRepositoryLinkInput,
  () => UpdateRepositoryLinkOutput
);
export var UpdateSyncConfiguration = op(
  n0,
  _USC,
  0,
  () => UpdateSyncConfigurationInput,
  () => UpdateSyncConfigurationOutput
);
