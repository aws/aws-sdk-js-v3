// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { ThrottlingException as __ThrottlingException } from "../models/index";
import {
  _BSVSR,
  _BSVSRE,
  _BSVSREa,
  _BSVSRR,
  _BSVSRRa,
  _BSVSRVS,
  _BSVSRVSL,
  _c,
  _cA,
  _cod,
  _e,
  _eM,
  _er,
  _hE,
  _ht,
  _m,
  _me,
  _PM,
  _PMR,
  _SM,
  _TE,
  _vI,
  _vS,
  _vSVLTOET,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_4_Channel";

/* eslint no-var: 0 */

export var StreamMetadata = sim(n0, _SM, 0, 8);
export var BatchStartViewerSessionRevocationError = struct(n0, _BSVSRE, 0, [_cA, _vI, _cod, _m], [0, 0, 0, 0]);
export var BatchStartViewerSessionRevocationRequest = struct(
  n0,
  _BSVSRR,
  0,
  [_vS],
  [() => BatchStartViewerSessionRevocationViewerSessionList]
);
export var BatchStartViewerSessionRevocationResponse = struct(
  n0,
  _BSVSRRa,
  0,
  [_er],
  [() => BatchStartViewerSessionRevocationErrors]
);
export var BatchStartViewerSessionRevocationViewerSession = struct(n0, _BSVSRVS, 0, [_cA, _vI, _vSVLTOET], [0, 0, 1]);
export var PutMetadataRequest = struct(n0, _PMR, 0, [_cA, _me], [0, [() => StreamMetadata, 0]]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_eM],
  [0],

  __ThrottlingException
);
export var BatchStartViewerSessionRevocationErrors = list(
  n0,
  _BSVSREa,
  0,
  () => BatchStartViewerSessionRevocationError
);
export var BatchStartViewerSessionRevocationViewerSessionList = list(
  n0,
  _BSVSRVSL,
  0,
  () => BatchStartViewerSessionRevocationViewerSession
);
export var BatchStartViewerSessionRevocation = op(
  n0,
  _BSVSR,
  {
    [_ht]: ["POST", "/BatchStartViewerSessionRevocation", 200],
  },
  () => BatchStartViewerSessionRevocationRequest,
  () => BatchStartViewerSessionRevocationResponse
);
export var PutMetadata = op(
  n0,
  _PM,
  {
    [_ht]: ["POST", "/PutMetadata", 204],
  },
  () => PutMetadataRequest,
  () => Unit
);
