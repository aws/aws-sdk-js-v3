// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _AM,
  _D,
  _DEele,
  _DERe,
  _EAS,
  _EASx,
  _EAx,
  _EAxt,
  _EI,
  _ei,
  _EVN,
  _evn,
  _GEe,
  _GERe,
  _h,
  _hQ,
  _I,
  _It,
  _LEA,
  _LEAR,
  _MR,
  _mr,
  _NT,
  _nt,
  _P,
  _RAe,
  _RI,
  _ri,
  _UEp,
  _UERp,
  _v,
  _VN,
  _vn,
  n0,
  Unit,
} from "./schemas_0";
import { ActionsMap, Extension, ParameterMap } from "./schemas_5_Configuration";

/* eslint no-var: 0 */

export var DeleteExtensionRequest = struct(
  n0,
  _DERe,
  0,
  [_EI, _VN],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _v,
      },
    ],
  ]
);
export var ExtensionAssociations = struct(n0, _EAxt, 0, [_It, _NT], [() => ExtensionAssociationSummaries, 0]);
export var ExtensionAssociationSummary = struct(n0, _EAS, 0, [_I, _EAx, _RAe], [0, 0, 0]);
export var GetExtensionRequest = struct(
  n0,
  _GERe,
  0,
  [_EI, _VN],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _vn,
      },
    ],
  ]
);
export var ListExtensionAssociationsRequest = struct(
  n0,
  _LEAR,
  0,
  [_RI, _EI, _EVN, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _ri,
      },
    ],
    [
      0,
      {
        [_hQ]: _ei,
      },
    ],
    [
      1,
      {
        [_hQ]: _evn,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var UpdateExtensionRequest = struct(
  n0,
  _UERp,
  0,
  [_EI, _D, _Ac, _P, _VN],
  [[0, 1], 0, () => ActionsMap, () => ParameterMap, 1]
);
export var ExtensionAssociationSummaries = list(n0, _EASx, 0, () => ExtensionAssociationSummary);
export var DeleteExtension = op(
  n0,
  _DEele,
  {
    [_h]: ["DELETE", "/extensions/{ExtensionIdentifier}", 204],
  },
  () => DeleteExtensionRequest,
  () => Unit
);
export var GetExtension = op(
  n0,
  _GEe,
  {
    [_h]: ["GET", "/extensions/{ExtensionIdentifier}", 200],
  },
  () => GetExtensionRequest,
  () => Extension
);
export var ListExtensionAssociations = op(
  n0,
  _LEA,
  {
    [_h]: ["GET", "/extensionassociations", 200],
  },
  () => ListExtensionAssociationsRequest,
  () => ExtensionAssociations
);
export var UpdateExtension = op(
  n0,
  _UEp,
  {
    [_h]: ["PATCH", "/extensions/{ExtensionIdentifier}", 200],
  },
  () => UpdateExtensionRequest,
  () => Extension
);
