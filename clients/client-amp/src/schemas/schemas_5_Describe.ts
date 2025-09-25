// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _a,
  _al,
  _aMD,
  _AMDD,
  _cA,
  _d,
  _DAMDe,
  _DAMDRe,
  _DAMDRes,
  _de,
  _des,
  _DLCe,
  _DLCRe,
  _DLCRes,
  _DQLCe,
  _DQLCRe,
  _DQLCRes,
  _DRGNe,
  _DRGNRe,
  _DRGNRes,
  _DSe,
  _DSLCe,
  _DSLCRe,
  _DSLCRes,
  _DSRes,
  _DSResc,
  _DWe,
  _DWRe,
  _DWRes,
  _f,
  _h,
  _hQ,
  _kKA,
  _lC,
  _LCM,
  _lD,
  _lGA,
  _lMA,
  _LRGN,
  _LRGNR,
  _LRGNRi,
  _LS,
  _LSR,
  _LSRi,
  _LW,
  _LWR,
  _LWRi,
  _mA,
  _mR,
  _n,
  _nT,
  _pE,
  _qLC,
  _QLCM,
  _rAo,
  _rC,
  _rGN,
  _RGND,
  _RGNSL,
  _RGNSu,
  _rGNu,
  _s,
  _sc,
  _sCc,
  _sCcr,
  _scr,
  _SD,
  _SF,
  _sI,
  _so,
  _sR,
  _SSc,
  _SSL,
  _t,
  _w,
  _WD,
  _wI,
  _wo,
  _WSL,
  _WSo,
  n0,
} from "./schemas_0";
import {
  Destination,
  RoleConfiguration,
  ScrapeConfiguration,
  ScraperComponents,
  ScraperLoggingConfigurationStatus,
  ScraperLoggingDestination,
  ScraperStatus,
  Source,
} from "./schemas_1_Scraper";
import { LoggingConfigurationStatus, LoggingDestinations, QueryLoggingConfigurationStatus } from "./schemas_2_Logging";
import { WorkspaceStatus } from "./schemas_13_Scraper";
import { AlertManagerDefinitionStatus } from "./schemas_15_AlertManager";
import { RuleGroupsNamespaceStatus } from "./schemas_17_RuleGroups";

/* eslint no-var: 0 */

export var AlertManagerDefinitionDescription = struct(
  n0,
  _AMDD,
  0,
  [_s, _d, _cA, _mA],
  [() => AlertManagerDefinitionStatus, 21, 4, 4]
);
export var DescribeAlertManagerDefinitionRequest = struct(n0, _DAMDRe, 0, [_wI], [[0, 1]]);
export var DescribeAlertManagerDefinitionResponse = struct(
  n0,
  _DAMDRes,
  0,
  [_aMD],
  [() => AlertManagerDefinitionDescription]
);
export var DescribeLoggingConfigurationRequest = struct(n0, _DLCRe, 0, [_wI], [[0, 1]]);
export var DescribeLoggingConfigurationResponse = struct(n0, _DLCRes, 0, [_lC], [() => LoggingConfigurationMetadata]);
export var DescribeQueryLoggingConfigurationRequest = struct(n0, _DQLCRe, 0, [_wI], [[0, 1]]);
export var DescribeQueryLoggingConfigurationResponse = struct(
  n0,
  _DQLCRes,
  0,
  [_qLC],
  [() => QueryLoggingConfigurationMetadata]
);
export var DescribeRuleGroupsNamespaceRequest = struct(
  n0,
  _DRGNRe,
  0,
  [_wI, _n],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeRuleGroupsNamespaceResponse = struct(
  n0,
  _DRGNRes,
  0,
  [_rGN],
  [() => RuleGroupsNamespaceDescription]
);
export var DescribeScraperLoggingConfigurationRequest = struct(n0, _DSLCRe, 0, [_sI], [[0, 1]]);
export var DescribeScraperLoggingConfigurationResponse = struct(
  n0,
  _DSLCRes,
  0,
  [_s, _sI, _lD, _sCcr, _mA],
  [() => ScraperLoggingConfigurationStatus, 0, () => ScraperLoggingDestination, () => ScraperComponents, 4]
);
export var DescribeScraperRequest = struct(n0, _DSRes, 0, [_sI], [[0, 1]]);
export var DescribeScraperResponse = struct(n0, _DSResc, 0, [_sc], [() => ScraperDescription]);
export var DescribeWorkspaceRequest = struct(n0, _DWRe, 0, [_wI], [[0, 1]]);
export var DescribeWorkspaceResponse = struct(n0, _DWRes, 0, [_w], [() => WorkspaceDescription]);
export var ListRuleGroupsNamespacesRequest = struct(
  n0,
  _LRGNR,
  0,
  [_wI, _n, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
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
  ]
);
export var ListRuleGroupsNamespacesResponse = struct(
  n0,
  _LRGNRi,
  0,
  [_rGNu, _nT],
  [() => RuleGroupsNamespaceSummaryList, 0]
);
export var ListScrapersRequest = struct(
  n0,
  _LSR,
  0,
  [_f, _nT, _mR],
  [
    [map(n0, _SF, 0, 0, 64 | 0), 64],
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
  ]
);
export var ListScrapersResponse = struct(n0, _LSRi, 0, [_scr, _nT], [() => ScraperSummaryList, 0]);
export var ListWorkspacesRequest = struct(
  n0,
  _LWR,
  0,
  [_nT, _al, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _al,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListWorkspacesResponse = struct(n0, _LWRi, 0, [_wo, _nT], [() => WorkspaceSummaryList, 0]);
export var LoggingConfigurationMetadata = struct(
  n0,
  _LCM,
  0,
  [_s, _w, _lGA, _cA, _mA],
  [() => LoggingConfigurationStatus, 0, 0, 4, 4]
);
export var QueryLoggingConfigurationMetadata = struct(
  n0,
  _QLCM,
  0,
  [_s, _w, _de, _cA, _mA],
  [() => QueryLoggingConfigurationStatus, 0, () => LoggingDestinations, 4, 4]
);
export var RuleGroupsNamespaceDescription = struct(
  n0,
  _RGND,
  0,
  [_a, _n, _s, _d, _cA, _mA, _t],
  [0, 0, () => RuleGroupsNamespaceStatus, 21, 4, 4, 128 | 0]
);
export var RuleGroupsNamespaceSummary = struct(
  n0,
  _RGNSu,
  0,
  [_a, _n, _s, _cA, _mA, _t],
  [0, 0, () => RuleGroupsNamespaceStatus, 4, 4, 128 | 0]
);
export var ScraperDescription = struct(
  n0,
  _SD,
  0,
  [_al, _sI, _a, _rAo, _s, _cA, _lMA, _t, _sR, _sCc, _so, _des, _rC],
  [
    0,
    0,
    0,
    0,
    () => ScraperStatus,
    4,
    4,
    128 | 0,
    0,
    () => ScrapeConfiguration,
    () => Source,
    () => Destination,
    () => RoleConfiguration,
  ]
);
export var ScraperSummary = struct(
  n0,
  _SSc,
  0,
  [_al, _sI, _a, _rAo, _s, _cA, _lMA, _t, _sR, _so, _des, _rC],
  [0, 0, 0, 0, () => ScraperStatus, 4, 4, 128 | 0, 0, () => Source, () => Destination, () => RoleConfiguration]
);
export var WorkspaceDescription = struct(
  n0,
  _WD,
  0,
  [_wI, _al, _a, _s, _pE, _cA, _t, _kKA],
  [0, 0, 0, () => WorkspaceStatus, 0, 4, 128 | 0, 0]
);
export var WorkspaceSummary = struct(
  n0,
  _WSo,
  0,
  [_wI, _al, _a, _s, _cA, _t, _kKA],
  [0, 0, 0, () => WorkspaceStatus, 4, 128 | 0, 0]
);
export var FilterValues = 64 | 0;

export var RuleGroupsNamespaceSummaryList = list(n0, _RGNSL, 0, () => RuleGroupsNamespaceSummary);
export var ScraperSummaryList = list(n0, _SSL, 0, () => ScraperSummary);
export var WorkspaceSummaryList = list(n0, _WSL, 0, () => WorkspaceSummary);
export var ScraperFilters = map(n0, _SF, 0, 0, 64 | 0);
export var DescribeAlertManagerDefinition = op(
  n0,
  _DAMDe,
  {
    [_h]: ["GET", "/workspaces/{workspaceId}/alertmanager/definition", 200],
  },
  () => DescribeAlertManagerDefinitionRequest,
  () => DescribeAlertManagerDefinitionResponse
);
export var DescribeLoggingConfiguration = op(
  n0,
  _DLCe,
  {
    [_h]: ["GET", "/workspaces/{workspaceId}/logging", 200],
  },
  () => DescribeLoggingConfigurationRequest,
  () => DescribeLoggingConfigurationResponse
);
export var DescribeQueryLoggingConfiguration = op(
  n0,
  _DQLCe,
  {
    [_h]: ["GET", "/workspaces/{workspaceId}/logging/query", 200],
  },
  () => DescribeQueryLoggingConfigurationRequest,
  () => DescribeQueryLoggingConfigurationResponse
);
export var DescribeRuleGroupsNamespace = op(
  n0,
  _DRGNe,
  {
    [_h]: ["GET", "/workspaces/{workspaceId}/rulegroupsnamespaces/{name}", 200],
  },
  () => DescribeRuleGroupsNamespaceRequest,
  () => DescribeRuleGroupsNamespaceResponse
);
export var DescribeScraper = op(
  n0,
  _DSe,
  {
    [_h]: ["GET", "/scrapers/{scraperId}", 200],
  },
  () => DescribeScraperRequest,
  () => DescribeScraperResponse
);
export var DescribeScraperLoggingConfiguration = op(
  n0,
  _DSLCe,
  {
    [_h]: ["GET", "/scrapers/{scraperId}/logging-configuration", 200],
  },
  () => DescribeScraperLoggingConfigurationRequest,
  () => DescribeScraperLoggingConfigurationResponse
);
export var DescribeWorkspace = op(
  n0,
  _DWe,
  {
    [_h]: ["GET", "/workspaces/{workspaceId}", 200],
  },
  () => DescribeWorkspaceRequest,
  () => DescribeWorkspaceResponse
);
export var ListRuleGroupsNamespaces = op(
  n0,
  _LRGN,
  {
    [_h]: ["GET", "/workspaces/{workspaceId}/rulegroupsnamespaces", 200],
  },
  () => ListRuleGroupsNamespacesRequest,
  () => ListRuleGroupsNamespacesResponse
);
export var ListScrapers = op(
  n0,
  _LS,
  {
    [_h]: ["GET", "/scrapers", 200],
  },
  () => ListScrapersRequest,
  () => ListScrapersResponse
);
export var ListWorkspaces = op(
  n0,
  _LW,
  {
    [_h]: ["GET", "/workspaces", 200],
  },
  () => ListWorkspacesRequest,
  () => ListWorkspacesResponse
);
