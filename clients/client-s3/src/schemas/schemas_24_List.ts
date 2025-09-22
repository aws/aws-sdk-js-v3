// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACLn,
  _ACn,
  _B,
  _ct,
  _CTon,
  _EBO,
  _h,
  _hH,
  _hQ,
  _IC,
  _ICL,
  _IT,
  _ITC,
  _ITCL,
  _LBAC,
  _LBACO,
  _LBACR,
  _LBACRi,
  _LBIC,
  _LBICO,
  _LBICR,
  _LBITC,
  _LBITCO,
  _LBITCR,
  _LBMC,
  _LBMCO,
  _LBMCR,
  _LICR,
  _LMCR,
  _MCe,
  _MCL,
  _NCT,
  _xaebo,
  _xF,
  _xN,
  n0,
} from "./schemas_0";
import { AnalyticsConfiguration } from "./schemas_12_Bucket";
import { IntelligentTieringConfiguration } from "./schemas_26_Intelligent";
import { InventoryConfiguration } from "./schemas_39_Bucket";
import { MetricsConfiguration } from "./schemas_40_Metrics";

/* eslint no-var: 0 */

export var ListBucketAnalyticsConfigurationsOutput = struct(
  n0,
  _LBACO,
  {
    [_xN]: _LBACR,
  },
  [_IT, _CTon, _NCT, _ACLn],
  [
    2,
    0,
    0,
    [
      () => AnalyticsConfigurationList,
      {
        [_xN]: _ACn,
        [_xF]: 1,
      },
    ],
  ]
);
export var ListBucketAnalyticsConfigurationsRequest = struct(
  n0,
  _LBACRi,
  0,
  [_B, _CTon, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ct,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var ListBucketIntelligentTieringConfigurationsOutput = struct(
  n0,
  _LBITCO,
  0,
  [_IT, _CTon, _NCT, _ITCL],
  [
    2,
    0,
    0,
    [
      () => IntelligentTieringConfigurationList,
      {
        [_xN]: _ITC,
        [_xF]: 1,
      },
    ],
  ]
);
export var ListBucketIntelligentTieringConfigurationsRequest = struct(
  n0,
  _LBITCR,
  0,
  [_B, _CTon, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ct,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var ListBucketInventoryConfigurationsOutput = struct(
  n0,
  _LBICO,
  {
    [_xN]: _LICR,
  },
  [_CTon, _ICL, _IT, _NCT],
  [
    0,
    [
      () => InventoryConfigurationList,
      {
        [_xN]: _IC,
        [_xF]: 1,
      },
    ],
    2,
    0,
  ]
);
export var ListBucketInventoryConfigurationsRequest = struct(
  n0,
  _LBICR,
  0,
  [_B, _CTon, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ct,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var ListBucketMetricsConfigurationsOutput = struct(
  n0,
  _LBMCO,
  {
    [_xN]: _LMCR,
  },
  [_IT, _CTon, _NCT, _MCL],
  [
    2,
    0,
    0,
    [
      () => MetricsConfigurationList,
      {
        [_xN]: _MCe,
        [_xF]: 1,
      },
    ],
  ]
);
export var ListBucketMetricsConfigurationsRequest = struct(
  n0,
  _LBMCR,
  0,
  [_B, _CTon, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ct,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var AnalyticsConfigurationList = list(n0, _ACLn, 0, [() => AnalyticsConfiguration, 0]);
export var IntelligentTieringConfigurationList = list(n0, _ITCL, 0, [() => IntelligentTieringConfiguration, 0]);
export var InventoryConfigurationList = list(n0, _ICL, 0, [() => InventoryConfiguration, 0]);
export var MetricsConfigurationList = list(n0, _MCL, 0, [() => MetricsConfiguration, 0]);
export var ListBucketAnalyticsConfigurations = op(
  n0,
  _LBAC,
  {
    [_h]: ["GET", "/?analytics&x-id=ListBucketAnalyticsConfigurations", 200],
  },
  () => ListBucketAnalyticsConfigurationsRequest,
  () => ListBucketAnalyticsConfigurationsOutput
);
export var ListBucketIntelligentTieringConfigurations = op(
  n0,
  _LBITC,
  {
    [_h]: ["GET", "/?intelligent-tiering&x-id=ListBucketIntelligentTieringConfigurations", 200],
  },
  () => ListBucketIntelligentTieringConfigurationsRequest,
  () => ListBucketIntelligentTieringConfigurationsOutput
);
export var ListBucketInventoryConfigurations = op(
  n0,
  _LBIC,
  {
    [_h]: ["GET", "/?inventory&x-id=ListBucketInventoryConfigurations", 200],
  },
  () => ListBucketInventoryConfigurationsRequest,
  () => ListBucketInventoryConfigurationsOutput
);
export var ListBucketMetricsConfigurations = op(
  n0,
  _LBMC,
  {
    [_h]: ["GET", "/?metrics&x-id=ListBucketMetricsConfigurations", 200],
  },
  () => ListBucketMetricsConfigurationsRequest,
  () => ListBucketMetricsConfigurationsOutput
);
