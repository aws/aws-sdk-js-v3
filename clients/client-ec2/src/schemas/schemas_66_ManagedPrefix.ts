// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ci,
  _ci,
  _De,
  _de,
  _DR,
  _Ent,
  _eQN,
  _eSnt,
  _GMPLE,
  _GMPLER,
  _GMPLERe,
  _it,
  _MR,
  _NTe,
  _nTe,
  _PLE,
  _PLES,
  _PLI,
  _TV,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetManagedPrefixListEntriesRequest = struct(n0, _GMPLER, 0, [_DR, _PLI, _TV, _MR, _NTe], [2, 0, 1, 1, 0]);
export var GetManagedPrefixListEntriesResult = struct(
  n0,
  _GMPLERe,
  0,
  [_Ent, _NTe],
  [
    [
      () => PrefixListEntrySet,
      {
        [_eQN]: `EntrySet`,
        [_xN]: _eSnt,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var PrefixListEntry = struct(
  n0,
  _PLE,
  0,
  [_Ci, _De],
  [
    [
      0,
      {
        [_eQN]: `Cidr`,
        [_xN]: _ci,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
  ]
);
export var PrefixListEntrySet = list(n0, _PLES, 0, [
  () => PrefixListEntry,
  {
    [_xN]: _it,
  },
]);
export var GetManagedPrefixListEntries = op(
  n0,
  _GMPLE,
  0,
  () => GetManagedPrefixListEntriesRequest,
  () => GetManagedPrefixListEntriesResult
);
