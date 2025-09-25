// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AN,
  _Arc,
  _ARL,
  _CT,
  _DA,
  _DAR,
  _DARe,
  _EC,
  _ESA,
  _L,
  _LA,
  _LAR,
  _LARi,
  _NP,
  _NT,
  _RD,
  _SB,
  _SR,
  _St,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Archive = struct(n0, _A, 0, [_AN, _ESA, _St, _SR, _RD, _SB, _EC, _CT], [0, 0, 0, 0, 1, 1, 1, 4]);
export var DeleteArchiveRequest = struct(n0, _DAR, 0, [_AN], [0]);
export var DeleteArchiveResponse = struct(n0, _DARe, 0, [], []);
export var ListArchivesRequest = struct(n0, _LAR, 0, [_NP, _ESA, _St, _NT, _L], [0, 0, 0, 0, 1]);
export var ListArchivesResponse = struct(n0, _LARi, 0, [_Arc, _NT], [() => ArchiveResponseList, 0]);
export var ArchiveResponseList = list(n0, _ARL, 0, () => Archive);
export var DeleteArchive = op(
  n0,
  _DA,
  0,
  () => DeleteArchiveRequest,
  () => DeleteArchiveResponse
);
export var ListArchives = op(
  n0,
  _LA,
  0,
  () => ListArchivesRequest,
  () => ListArchivesResponse
);
