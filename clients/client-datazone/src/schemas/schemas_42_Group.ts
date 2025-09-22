// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _dI,
  _dIo,
  _gN,
  _GPN,
  _GPS,
  _GPSr,
  _GST,
  _gTr,
  _ht,
  _id,
  _it,
  _mRa,
  _nT,
  _s,
  _SGP,
  _SGPI,
  _SGPO,
  _sTe,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GroupProfileName = sim(n0, _GPN, 0, 8);
export var GroupSearchText = sim(n0, _GST, 0, 8);
export var GroupProfileSummary = struct(n0, _GPS, 0, [_dIo, _id, _s, _gN], [0, 0, 0, [() => GroupProfileName, 0]]);
export var SearchGroupProfilesInput = struct(
  n0,
  _SGPI,
  0,
  [_dI, _gTr, _sTe, _mRa, _nT],
  [[0, 1], 0, [() => GroupSearchText, 0], 1, 0]
);
export var SearchGroupProfilesOutput = struct(n0, _SGPO, 0, [_it, _nT], [[() => GroupProfileSummaries, 0], 0]);
export var GroupProfileSummaries = list(n0, _GPSr, 0, [() => GroupProfileSummary, 0]);
export var SearchGroupProfiles = op(
  n0,
  _SGP,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/search-group-profiles", 200],
  },
  () => SearchGroupProfilesInput,
  () => SearchGroupProfilesOutput
);
