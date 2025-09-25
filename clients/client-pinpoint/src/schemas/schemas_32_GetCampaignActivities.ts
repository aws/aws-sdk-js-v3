// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _AR,
  _ARc,
  _CI,
  _E,
  _EM,
  _GCA,
  _GCAR,
  _GCARe,
  _h,
  _hQ,
  _I,
  _Id,
  _LOAR,
  _NT,
  _PS,
  _ps,
  _R,
  _S,
  _SEC,
  _SS,
  _St,
  _TCC,
  _TEC,
  _TI,
  _to,
  _Tok,
  _TTC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActivitiesResponse = struct(n0, _AR, 0, [_I, _NT], [() => ListOfActivityResponse, 0]);
export var ActivityResponse = struct(
  n0,
  _ARc,
  0,
  [_AI, _CI, _E, _Id, _R, _SS, _S, _St, _SEC, _TCC, _TTC, _TEC, _TI, _EM],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 128 | 0]
);
export var GetCampaignActivitiesRequest = struct(
  n0,
  _GCAR,
  0,
  [_AI, _CI, _PS, _Tok],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _ps,
      },
    ],
    [
      0,
      {
        [_hQ]: _to,
      },
    ],
  ]
);
export var GetCampaignActivitiesResponse = struct(n0, _GCARe, 0, [_AR], [[() => ActivitiesResponse, 16]]);
export var ListOfActivityResponse = list(n0, _LOAR, 0, () => ActivityResponse);
export var GetCampaignActivities = op(
  n0,
  _GCA,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/activities", 200],
  },
  () => GetCampaignActivitiesRequest,
  () => GetCampaignActivitiesResponse
);
