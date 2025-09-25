// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _Ac,
  _AERDE,
  _AERTSRD,
  _B,
  _CA,
  _DSI,
  _E,
  _EAE,
  _EAI,
  _EAv,
  _ERTS,
  _ESI,
  _eSI,
  _ESSE,
  _Ev,
  _h,
  _hQ,
  _I,
  _KKA,
  _KP,
  _LEA,
  _LEAR,
  _LEARi,
  _LOEAE,
  _MR,
  _mR,
  _NT,
  _nT,
  _RD,
  _RPe,
  _Ty,
  _UA,
  _UEA,
  _UEAR,
  _UEARp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Action = struct(n0, _Ac, 0, [_ERTS], [() => AutoExportRevisionToS3RequestDetails]);
export var AutoExportRevisionDestinationEntry = struct(n0, _AERDE, 0, [_B, _KP], [0, 0]);
export var AutoExportRevisionToS3RequestDetails = struct(
  n0,
  _AERTSRD,
  0,
  [_E, _RD],
  [() => ExportServerSideEncryption, () => AutoExportRevisionDestinationEntry]
);
export var Event = struct(n0, _Ev, 0, [_RPe], [() => RevisionPublished]);
export var EventActionEntry = struct(
  n0,
  _EAE,
  0,
  [_Ac, _A, _CA, _Ev, _I, _UA],
  [() => Action, 0, 5, () => Event, 0, 5]
);
export var ExportServerSideEncryption = struct(n0, _ESSE, 0, [_KKA, _Ty], [0, 0]);
export var ListEventActionsRequest = struct(
  n0,
  _LEAR,
  0,
  [_ESI, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _eSI,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListEventActionsResponse = struct(n0, _LEARi, 0, [_EAv, _NT], [() => ListOfEventActionEntry, 0]);
export var RevisionPublished = struct(n0, _RPe, 0, [_DSI], [0]);
export var UpdateEventActionRequest = struct(n0, _UEAR, 0, [_Ac, _EAI], [() => Action, [0, 1]]);
export var UpdateEventActionResponse = struct(
  n0,
  _UEARp,
  0,
  [_Ac, _A, _CA, _Ev, _I, _UA],
  [() => Action, 0, 5, () => Event, 0, 5]
);
export var ListOfEventActionEntry = list(n0, _LOEAE, 0, () => EventActionEntry);
export var ListEventActions = op(
  n0,
  _LEA,
  {
    [_h]: ["GET", "/v1/event-actions", 200],
  },
  () => ListEventActionsRequest,
  () => ListEventActionsResponse
);
export var UpdateEventAction = op(
  n0,
  _UEA,
  {
    [_h]: ["PATCH", "/v1/event-actions/{EventActionId}", 200],
  },
  () => UpdateEventActionRequest,
  () => UpdateEventActionResponse
);
