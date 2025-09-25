// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _a,
  _al,
  _c,
  _CAMD,
  _CAMDR,
  _CAMDRr,
  _CRGN,
  _CRGNR,
  _CRGNRr,
  _CS,
  _CSR,
  _CSRr,
  _cT,
  _CW,
  _CWR,
  _CWRr,
  _d,
  _des,
  _e,
  _h,
  _hE,
  _kKA,
  _lPLS,
  _m,
  _n,
  _PAMD,
  _PAMDR,
  _PAMDRu,
  _PRGN,
  _PRGNR,
  _PRGNRu,
  _qC,
  _rC,
  _rI,
  _rPID,
  _rT,
  _s,
  _sCc,
  _sCe,
  _sI,
  _so,
  _SQEE,
  _t,
  _US,
  _USR,
  _USRp,
  _UWA,
  _UWAR,
  _UWC,
  _UWCR,
  _UWCRp,
  _wI,
  n0,
  Unit,
} from "./schemas_0";
import { Destination, RoleConfiguration, ScrapeConfiguration, ScraperStatus, Source } from "./schemas_1_Scraper";
import { LimitsPerLabelSetList, WorkspaceConfigurationStatus } from "./schemas_6_Configuration";
import { WorkspaceStatus } from "./schemas_13_Scraper";
import { AlertManagerDefinitionStatus } from "./schemas_15_AlertManager";
import { RuleGroupsNamespaceStatus } from "./schemas_17_RuleGroups";

/* eslint no-var: 0 */

export var CreateAlertManagerDefinitionRequest = struct(n0, _CAMDR, 0, [_wI, _d, _cT], [[0, 1], 21, [0, 4]]);
export var CreateAlertManagerDefinitionResponse = struct(n0, _CAMDRr, 0, [_s], [() => AlertManagerDefinitionStatus]);
export var CreateRuleGroupsNamespaceRequest = struct(
  n0,
  _CRGNR,
  0,
  [_wI, _n, _d, _cT, _t],
  [[0, 1], 0, 21, [0, 4], 128 | 0]
);
export var CreateRuleGroupsNamespaceResponse = struct(
  n0,
  _CRGNRr,
  0,
  [_n, _a, _s, _t],
  [0, 0, () => RuleGroupsNamespaceStatus, 128 | 0]
);
export var CreateScraperRequest = struct(
  n0,
  _CSR,
  0,
  [_al, _sCc, _so, _des, _rC, _cT, _t],
  [0, () => ScrapeConfiguration, () => Source, () => Destination, () => RoleConfiguration, [0, 4], 128 | 0]
);
export var CreateScraperResponse = struct(n0, _CSRr, 0, [_sI, _a, _s, _t], [0, 0, () => ScraperStatus, 128 | 0]);
export var CreateWorkspaceRequest = struct(n0, _CWR, 0, [_al, _cT, _t, _kKA], [0, [0, 4], 128 | 0, 0]);
export var CreateWorkspaceResponse = struct(
  n0,
  _CWRr,
  0,
  [_wI, _a, _s, _t, _kKA],
  [0, 0, () => WorkspaceStatus, 128 | 0, 0]
);
export var PutAlertManagerDefinitionRequest = struct(n0, _PAMDR, 0, [_wI, _d, _cT], [[0, 1], 21, [0, 4]]);
export var PutAlertManagerDefinitionResponse = struct(n0, _PAMDRu, 0, [_s], [() => AlertManagerDefinitionStatus]);
export var PutRuleGroupsNamespaceRequest = struct(n0, _PRGNR, 0, [_wI, _n, _d, _cT], [[0, 1], [0, 1], 21, [0, 4]]);
export var PutRuleGroupsNamespaceResponse = struct(
  n0,
  _PRGNRu,
  0,
  [_n, _a, _s, _t],
  [0, 0, () => RuleGroupsNamespaceStatus, 128 | 0]
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _sCe, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var UpdateScraperRequest = struct(
  n0,
  _USR,
  0,
  [_sI, _al, _sCc, _des, _rC, _cT],
  [[0, 1], 0, () => ScrapeConfiguration, () => Destination, () => RoleConfiguration, [0, 4]]
);
export var UpdateScraperResponse = struct(n0, _USRp, 0, [_sI, _a, _s, _t], [0, 0, () => ScraperStatus, 128 | 0]);
export var UpdateWorkspaceAliasRequest = struct(n0, _UWAR, 0, [_wI, _al, _cT], [[0, 1], 0, [0, 4]]);
export var UpdateWorkspaceConfigurationRequest = struct(
  n0,
  _UWCR,
  0,
  [_wI, _cT, _lPLS, _rPID],
  [[0, 1], [0, 4], () => LimitsPerLabelSetList, 1]
);
export var UpdateWorkspaceConfigurationResponse = struct(n0, _UWCRp, 0, [_s], [() => WorkspaceConfigurationStatus]);
export var CreateAlertManagerDefinition = op(
  n0,
  _CAMD,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/alertmanager/definition", 202],
  },
  () => CreateAlertManagerDefinitionRequest,
  () => CreateAlertManagerDefinitionResponse
);
export var CreateRuleGroupsNamespace = op(
  n0,
  _CRGN,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/rulegroupsnamespaces", 202],
  },
  () => CreateRuleGroupsNamespaceRequest,
  () => CreateRuleGroupsNamespaceResponse
);
export var CreateScraper = op(
  n0,
  _CS,
  {
    [_h]: ["POST", "/scrapers", 202],
  },
  () => CreateScraperRequest,
  () => CreateScraperResponse
);
export var CreateWorkspace = op(
  n0,
  _CW,
  {
    [_h]: ["POST", "/workspaces", 202],
  },
  () => CreateWorkspaceRequest,
  () => CreateWorkspaceResponse
);
export var PutAlertManagerDefinition = op(
  n0,
  _PAMD,
  {
    [_h]: ["PUT", "/workspaces/{workspaceId}/alertmanager/definition", 202],
  },
  () => PutAlertManagerDefinitionRequest,
  () => PutAlertManagerDefinitionResponse
);
export var PutRuleGroupsNamespace = op(
  n0,
  _PRGN,
  {
    [_h]: ["PUT", "/workspaces/{workspaceId}/rulegroupsnamespaces/{name}", 202],
  },
  () => PutRuleGroupsNamespaceRequest,
  () => PutRuleGroupsNamespaceResponse
);
export var UpdateScraper = op(
  n0,
  _US,
  {
    [_h]: ["PUT", "/scrapers/{scraperId}", 202],
  },
  () => UpdateScraperRequest,
  () => UpdateScraperResponse
);
export var UpdateWorkspaceAlias = op(
  n0,
  _UWA,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/alias", 204],
  },
  () => UpdateWorkspaceAliasRequest,
  () => Unit
);
export var UpdateWorkspaceConfiguration = op(
  n0,
  _UWC,
  {
    [_h]: ["PATCH", "/workspaces/{workspaceId}/configuration", 202],
  },
  () => UpdateWorkspaceConfigurationRequest,
  () => UpdateWorkspaceConfigurationResponse
);
