// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DeleteMicrosoftTeamsUserIdentityException as __DeleteMicrosoftTeamsUserIdentityException,
  DeleteTeamsConfiguredTeamException as __DeleteTeamsConfiguredTeamException,
  ListMicrosoftTeamsConfiguredTeamsException as __ListMicrosoftTeamsConfiguredTeamsException,
  ListMicrosoftTeamsUserIdentitiesException as __ListMicrosoftTeamsUserIdentitiesException,
} from "../models/index";
import {
  _AUI,
  _CCA,
  _CT,
  _CTL,
  _CTon,
  _DMTCT,
  _DMTUI,
  _DMTUIE,
  _DMTUIR,
  _DMTUIRe,
  _DTCTE,
  _DTCTR,
  _DTCTRe,
  _e,
  _h,
  _hE,
  _IRA,
  _LMTCT,
  _LMTCTE,
  _LMTCTR,
  _LMTCTRi,
  _LMTUI,
  _LMTUIE,
  _LMTUIR,
  _LMTUIRi,
  _M,
  _MR,
  _NTe,
  _S,
  _s,
  _SR,
  _TCI,
  _TI,
  _TIe,
  _TN,
  _TTI,
  _TUI,
  _TUIe,
  _TUIL,
  _UI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConfiguredTeam = struct(n0, _CT, 0, [_TI, _TIe, _TN, _S, _SR], [0, 0, 0, 0, 0]);
export var DeleteMicrosoftTeamsUserIdentityException = error(
  n0,
  _DMTUIE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __DeleteMicrosoftTeamsUserIdentityException
);
export var DeleteMicrosoftTeamsUserIdentityRequest = struct(n0, _DMTUIR, 0, [_CCA, _UI], [0, 0]);
export var DeleteMicrosoftTeamsUserIdentityResult = struct(n0, _DMTUIRe, 0, [], []);
export var DeleteTeamsConfiguredTeamException = error(
  n0,
  _DTCTE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __DeleteTeamsConfiguredTeamException
);
export var DeleteTeamsConfiguredTeamRequest = struct(n0, _DTCTR, 0, [_TIe], [0]);
export var DeleteTeamsConfiguredTeamResult = struct(n0, _DTCTRe, 0, [], []);
export var ListMicrosoftTeamsConfiguredTeamsException = error(
  n0,
  _LMTCTE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __ListMicrosoftTeamsConfiguredTeamsException
);
export var ListMicrosoftTeamsConfiguredTeamsRequest = struct(n0, _LMTCTR, 0, [_MR, _NTe], [1, 0]);
export var ListMicrosoftTeamsConfiguredTeamsResult = struct(
  n0,
  _LMTCTRi,
  0,
  [_CTon, _NTe],
  [() => ConfiguredTeamsList, 0]
);
export var ListMicrosoftTeamsUserIdentitiesException = error(
  n0,
  _LMTUIE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __ListMicrosoftTeamsUserIdentitiesException
);
export var ListMicrosoftTeamsUserIdentitiesRequest = struct(n0, _LMTUIR, 0, [_CCA, _NTe, _MR], [0, 0, 1]);
export var ListMicrosoftTeamsUserIdentitiesResult = struct(
  n0,
  _LMTUIRi,
  0,
  [_TUI, _NTe],
  [() => TeamsUserIdentitiesList, 0]
);
export var TeamsUserIdentity = struct(n0, _TUIe, 0, [_IRA, _CCA, _TIe, _UI, _AUI, _TCI, _TTI], [0, 0, 0, 0, 0, 0, 0]);
export var ConfiguredTeamsList = list(n0, _CTL, 0, () => ConfiguredTeam);
export var TeamsUserIdentitiesList = list(n0, _TUIL, 0, () => TeamsUserIdentity);
export var DeleteMicrosoftTeamsConfiguredTeam = op(
  n0,
  _DMTCT,
  {
    [_h]: ["POST", "/delete-ms-teams-configured-teams", 204],
  },
  () => DeleteTeamsConfiguredTeamRequest,
  () => DeleteTeamsConfiguredTeamResult
);
export var DeleteMicrosoftTeamsUserIdentity = op(
  n0,
  _DMTUI,
  {
    [_h]: ["POST", "/delete-ms-teams-user-identity", 204],
  },
  () => DeleteMicrosoftTeamsUserIdentityRequest,
  () => DeleteMicrosoftTeamsUserIdentityResult
);
export var ListMicrosoftTeamsConfiguredTeams = op(
  n0,
  _LMTCT,
  {
    [_h]: ["POST", "/list-ms-teams-configured-teams", 200],
  },
  () => ListMicrosoftTeamsConfiguredTeamsRequest,
  () => ListMicrosoftTeamsConfiguredTeamsResult
);
export var ListMicrosoftTeamsUserIdentities = op(
  n0,
  _LMTUI,
  {
    [_h]: ["POST", "/list-ms-teams-user-identities", 200],
  },
  () => ListMicrosoftTeamsUserIdentitiesRequest,
  () => ListMicrosoftTeamsUserIdentitiesResult
);
