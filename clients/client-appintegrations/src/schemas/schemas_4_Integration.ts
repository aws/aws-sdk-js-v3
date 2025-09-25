// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CAM,
  _CI,
  _D,
  _DEI,
  _DEIR,
  _DEIRe,
  _DI,
  _DIL,
  _DIS,
  _EBRN,
  _EIAA,
  _EIAI,
  _EIAL,
  _EIAv,
  _EIAve,
  _EIN,
  _h,
  _hQ,
  _Id,
  _LDI,
  _LDIR,
  _LDIRi,
  _LEIA,
  _LEIAR,
  _LEIARi,
  _MR,
  _mR,
  _N,
  _NT,
  _nT,
  _SURI,
  _UDI,
  _UDIR,
  _UDIRp,
  _UEI,
  _UEIR,
  _UEIRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataIntegrationSummary = struct(n0, _DIS, 0, [_A, _N, _SURI], [0, 0, 0]);
export var DeleteEventIntegrationRequest = struct(n0, _DEIR, 0, [_N], [[0, 1]]);
export var DeleteEventIntegrationResponse = struct(n0, _DEIRe, 0, [], []);
export var EventIntegrationAssociation = struct(
  n0,
  _EIAv,
  0,
  [_EIAA, _EIAI, _EIN, _CI, _EBRN, _CAM],
  [0, 0, 0, 0, 0, 128 | 0]
);
export var ListDataIntegrationsRequest = struct(
  n0,
  _LDIR,
  0,
  [_NT, _MR],
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
  ]
);
export var ListDataIntegrationsResponse = struct(n0, _LDIRi, 0, [_DI, _NT], [() => DataIntegrationsList, 0]);
export var ListEventIntegrationAssociationsRequest = struct(
  n0,
  _LEIAR,
  0,
  [_EIN, _NT, _MR],
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
export var ListEventIntegrationAssociationsResponse = struct(
  n0,
  _LEIARi,
  0,
  [_EIAve, _NT],
  [() => EventIntegrationAssociationsList, 0]
);
export var UpdateDataIntegrationRequest = struct(n0, _UDIR, 0, [_Id, _N, _D], [[0, 1], 0, 0]);
export var UpdateDataIntegrationResponse = struct(n0, _UDIRp, 0, [], []);
export var UpdateEventIntegrationRequest = struct(n0, _UEIR, 0, [_N, _D], [[0, 1], 0]);
export var UpdateEventIntegrationResponse = struct(n0, _UEIRp, 0, [], []);
export var DataIntegrationsList = list(n0, _DIL, 0, () => DataIntegrationSummary);
export var EventIntegrationAssociationsList = list(n0, _EIAL, 0, () => EventIntegrationAssociation);
export var DeleteEventIntegration = op(
  n0,
  _DEI,
  {
    [_h]: ["DELETE", "/eventIntegrations/{Name}", 200],
  },
  () => DeleteEventIntegrationRequest,
  () => DeleteEventIntegrationResponse
);
export var ListDataIntegrations = op(
  n0,
  _LDI,
  {
    [_h]: ["GET", "/dataIntegrations", 200],
  },
  () => ListDataIntegrationsRequest,
  () => ListDataIntegrationsResponse
);
export var ListEventIntegrationAssociations = op(
  n0,
  _LEIA,
  {
    [_h]: ["GET", "/eventIntegrations/{EventIntegrationName}/associations", 200],
  },
  () => ListEventIntegrationAssociationsRequest,
  () => ListEventIntegrationAssociationsResponse
);
export var UpdateDataIntegration = op(
  n0,
  _UDI,
  {
    [_h]: ["PATCH", "/dataIntegrations/{Identifier}", 200],
  },
  () => UpdateDataIntegrationRequest,
  () => UpdateDataIntegrationResponse
);
export var UpdateEventIntegration = op(
  n0,
  _UEI,
  {
    [_h]: ["PATCH", "/eventIntegrations/{Name}", 200],
  },
  () => UpdateEventIntegrationRequest,
  () => UpdateEventIntegrationResponse
);
