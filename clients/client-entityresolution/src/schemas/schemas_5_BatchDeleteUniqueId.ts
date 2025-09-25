// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BDUI,
  _BDUII,
  _BDUIO,
  _d,
  _DUI,
  _dUI,
  _DUIE,
  _DUIEL,
  _DUIL,
  _er,
  _eT,
  _hH,
  _ht,
  _iS,
  _s,
  _uI,
  _uIn,
  _wN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchDeleteUniqueIdInput = struct(
  n0,
  _BDUII,
  0,
  [_wN, _iS, _uI],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _iS,
      },
    ],
    [
      64 | 0,
      {
        [_hH]: _uI,
      },
    ],
  ]
);
export var BatchDeleteUniqueIdOutput = struct(
  n0,
  _BDUIO,
  0,
  [_s, _er, _d, _dUI],
  [0, () => DeleteUniqueIdErrorsList, () => DeletedUniqueIdList, 64 | 0]
);
export var DeletedUniqueId = struct(n0, _DUI, 0, [_uIn], [0]);
export var DeleteUniqueIdError = struct(n0, _DUIE, 0, [_uIn, _eT], [0, 0]);
export var DeletedUniqueIdList = list(n0, _DUIL, 0, () => DeletedUniqueId);
export var DeleteUniqueIdErrorsList = list(n0, _DUIEL, 0, () => DeleteUniqueIdError);
export var DisconnectedUniqueIdsList = 64 | 0;

export var UniqueIdList = 64 | 0;

export var BatchDeleteUniqueId = op(
  n0,
  _BDUI,
  {
    [_ht]: ["DELETE", "/matchingworkflows/{workflowName}/uniqueids", 200],
  },
  () => BatchDeleteUniqueIdInput,
  () => BatchDeleteUniqueIdOutput
);
