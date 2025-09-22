// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CI,
  _DIA,
  _DIAA,
  _DIAa,
  _DIAIa,
  _DIAL,
  _DIAS,
  _DII,
  _DURI,
  _EC,
  _EM,
  _ES,
  _ET,
  _h,
  _hQ,
  _LDIA,
  _LDIAR,
  _LDIARi,
  _LES,
  _MR,
  _mR,
  _NT,
  _nT,
  _ODC,
  _SCc,
  _SM,
  _ST,
  _UDIA,
  _UDIAR,
  _UDIARp,
  n0,
} from "./schemas_0";
import { ScheduleConfiguration } from "./schemas_10_Integration";

/* eslint no-var: 0 */

export var DataIntegrationAssociationSummary = struct(
  n0,
  _DIAS,
  0,
  [_DIAA, _DIA, _CI, _DURI, _LES, _EC],
  [0, 0, 0, 0, () => LastExecutionStatus, () => ExecutionConfiguration]
);
export var ExecutionConfiguration = struct(
  n0,
  _EC,
  0,
  [_EM, _ODC, _SCc],
  [0, () => OnDemandConfiguration, () => ScheduleConfiguration]
);
export var LastExecutionStatus = struct(n0, _LES, 0, [_ES, _SM], [0, 0]);
export var ListDataIntegrationAssociationsRequest = struct(
  n0,
  _LDIAR,
  0,
  [_DII, _NT, _MR],
  [
    [0, 1],
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
export var ListDataIntegrationAssociationsResponse = struct(
  n0,
  _LDIARi,
  0,
  [_DIAa, _NT],
  [() => DataIntegrationAssociationsList, 0]
);
export var OnDemandConfiguration = struct(n0, _ODC, 0, [_ST, _ET], [0, 0]);
export var UpdateDataIntegrationAssociationRequest = struct(
  n0,
  _UDIAR,
  0,
  [_DII, _DIAIa, _EC],
  [[0, 1], [0, 1], () => ExecutionConfiguration]
);
export var UpdateDataIntegrationAssociationResponse = struct(n0, _UDIARp, 0, [], []);
export var Unit = "unit" as const;

export var DataIntegrationAssociationsList = list(n0, _DIAL, 0, () => DataIntegrationAssociationSummary);
export var ListDataIntegrationAssociations = op(
  n0,
  _LDIA,
  {
    [_h]: ["GET", "/dataIntegrations/{DataIntegrationIdentifier}/associations", 200],
  },
  () => ListDataIntegrationAssociationsRequest,
  () => ListDataIntegrationAssociationsResponse
);
export var UpdateDataIntegrationAssociation = op(
  n0,
  _UDIA,
  {
    [_h]: [
      "PATCH",
      "/dataIntegrations/{DataIntegrationIdentifier}/associations/{DataIntegrationAssociationIdentifier}",
      200,
    ],
  },
  () => UpdateDataIntegrationAssociationRequest,
  () => UpdateDataIntegrationAssociationResponse
);
