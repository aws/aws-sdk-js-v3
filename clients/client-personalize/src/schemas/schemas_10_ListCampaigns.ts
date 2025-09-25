// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _Ca, _cA, _ca, _cDT, _CS, _fR, _LC, _LCR, _LCRi, _lUDT, _mRa, _n, _nT, _s, _sAo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CampaignSummary = struct(n0, _CS, 0, [_n, _cA, _s, _cDT, _lUDT, _fR], [0, 0, 0, 4, 4, 0]);
export var ListCampaignsRequest = struct(n0, _LCR, 0, [_sAo, _nT, _mRa], [0, 0, 1]);
export var ListCampaignsResponse = struct(n0, _LCRi, 0, [_ca, _nT], [() => Campaigns, 0]);
export var Campaigns = list(n0, _Ca, 0, () => CampaignSummary);
export var ListCampaigns = op(
  n0,
  _LC,
  2,
  () => ListCampaignsRequest,
  () => ListCampaignsResponse
);
