// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AC,
  _aC,
  _cAl,
  _cB,
  _CC,
  _con,
  _cT,
  _cWL,
  _D,
  _DS,
  _DSLC,
  _DSLCR,
  _DSR,
  _DSRe,
  _EC,
  _eC,
  _h,
  _hQ,
  _iT,
  _lD,
  _o,
  _RC,
  _S,
  _s,
  _SC,
  _sC,
  _SCc,
  _SCcr,
  _sCcr,
  _sGI,
  _sI,
  _sIu,
  _SLCS,
  _SLD,
  _sR,
  _sRA,
  _SS,
  _tRA,
  _ty,
  _USLC,
  _USLCR,
  _USLCRp,
  _wA,
  n0,
  Unit,
} from "./schemas_0";
import { CloudWatchLogDestination } from "./schemas_2_Logging";

/* eslint no-var: 0 */

export var AmpConfiguration = struct(n0, _AC, 0, [_wA], [0]);
export var ComponentConfig = struct(n0, _CC, 0, [_o], [128 | 0]);
export var DeleteScraperLoggingConfigurationRequest = struct(
  n0,
  _DSLCR,
  0,
  [_sI, _cT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeleteScraperRequest = struct(
  n0,
  _DSR,
  0,
  [_sI, _cT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeleteScraperResponse = struct(n0, _DSRe, 0, [_sI, _s], [0, () => ScraperStatus]);
export var EksConfiguration = struct(n0, _EC, 0, [_cAl, _sGI, _sIu], [0, 64 | 0, 64 | 0]);
export var RoleConfiguration = struct(n0, _RC, 0, [_sRA, _tRA], [0, 0]);
export var ScraperComponent = struct(n0, _SC, 0, [_ty, _con], [0, () => ComponentConfig]);
export var ScraperLoggingConfigurationStatus = struct(n0, _SLCS, 0, [_sC, _sR], [0, 0]);
export var ScraperStatus = struct(n0, _SS, 0, [_sC], [0]);
export var UpdateScraperLoggingConfigurationRequest = struct(
  n0,
  _USLCR,
  0,
  [_sI, _lD, _sCcr],
  [[0, 1], () => ScraperLoggingDestination, () => ScraperComponents]
);
export var UpdateScraperLoggingConfigurationResponse = struct(
  n0,
  _USLCRp,
  0,
  [_s],
  [() => ScraperLoggingConfigurationStatus]
);
export var ScraperComponents = list(n0, _SCc, 0, () => ScraperComponent);
export var SecurityGroupIds = 64 | 0;

export var SubnetIds = 64 | 0;

export var StringMap = 128 | 0;

export var Destination = uni(n0, _D, 0, [_aC], [() => AmpConfiguration]);
export var ScrapeConfiguration = uni(n0, _SCcr, 0, [_cB], [21]);
export var ScraperLoggingDestination = uni(n0, _SLD, 0, [_cWL], [() => CloudWatchLogDestination]);
export var Source = uni(n0, _S, 0, [_eC], [() => EksConfiguration]);
export var DeleteScraper = op(
  n0,
  _DS,
  {
    [_h]: ["DELETE", "/scrapers/{scraperId}", 202],
  },
  () => DeleteScraperRequest,
  () => DeleteScraperResponse
);
export var DeleteScraperLoggingConfiguration = op(
  n0,
  _DSLC,
  {
    [_h]: ["DELETE", "/scrapers/{scraperId}/logging-configuration", 202],
  },
  () => DeleteScraperLoggingConfigurationRequest,
  () => Unit
);
export var UpdateScraperLoggingConfiguration = op(
  n0,
  _USLC,
  {
    [_h]: ["PUT", "/scrapers/{scraperId}/logging-configuration", 202],
  },
  () => UpdateScraperLoggingConfigurationRequest,
  () => UpdateScraperLoggingConfigurationResponse
);
