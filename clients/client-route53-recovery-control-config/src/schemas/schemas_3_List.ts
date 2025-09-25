// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Cl,
  _CPA,
  _h,
  _HCI,
  _hQ,
  _LARHC,
  _LARHCR,
  _LARHCRi,
  _LC,
  _LCR,
  _LCRi,
  _lOC,
  _lORC,
  _LRC,
  _LRCR,
  _LRCRi,
  _MR,
  _NTe,
  _RCA,
  _RCou,
  n0,
} from "./schemas_0";
import { Cluster } from "./schemas_1_Cluster";
import { RoutingControl } from "./schemas_9_Routing";

/* eslint no-var: 0 */

export var ListAssociatedRoute53HealthChecksRequest = struct(
  n0,
  _LARHCR,
  0,
  [_MR, _NTe, _RCA],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [0, 1],
  ]
);
export var ListAssociatedRoute53HealthChecksResponse = struct(n0, _LARHCRi, 0, [_HCI, _NTe], [64 | 0, 0]);
export var ListClustersRequest = struct(
  n0,
  _LCR,
  0,
  [_MR, _NTe],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
  ]
);
export var ListClustersResponse = struct(n0, _LCRi, 0, [_Cl, _NTe], [() => __listOfCluster, 0]);
export var ListRoutingControlsRequest = struct(
  n0,
  _LRCR,
  0,
  [_CPA, _MR, _NTe],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
  ]
);
export var ListRoutingControlsResponse = struct(n0, _LRCRi, 0, [_NTe, _RCou], [0, () => __listOfRoutingControl]);
export var __listOf__stringMax36PatternS = 64 | 0;

export var __listOfCluster = list(n0, _lOC, 0, () => Cluster);
export var __listOfRoutingControl = list(n0, _lORC, 0, () => RoutingControl);
export var ListAssociatedRoute53HealthChecks = op(
  n0,
  _LARHC,
  {
    [_h]: ["GET", "/routingcontrol/{RoutingControlArn}/associatedRoute53HealthChecks", 200],
  },
  () => ListAssociatedRoute53HealthChecksRequest,
  () => ListAssociatedRoute53HealthChecksResponse
);
export var ListClusters = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/cluster", 200],
  },
  () => ListClustersRequest,
  () => ListClustersResponse
);
export var ListRoutingControls = op(
  n0,
  _LRC,
  {
    [_h]: ["GET", "/controlpanel/{ControlPanelArn}/routingcontrols", 200],
  },
  () => ListRoutingControlsRequest,
  () => ListRoutingControlsResponse
);
