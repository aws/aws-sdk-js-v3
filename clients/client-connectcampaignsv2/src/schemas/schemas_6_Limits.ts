// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aCS,
  _cII,
  _CL,
  _CLC,
  _cLC,
  _CLL,
  _cLL,
  _CLo,
  _cLO,
  _f,
  _GICL,
  _GICLR,
  _GICLRe,
  _h,
  _i,
  _ICLC,
  _iLH,
  _mCPR,
  _PICL,
  _PICLR,
  _u,
  _UCCL,
  _UCCLR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CommunicationLimit = struct(n0, _CL, 0, [_mCPR, _f, _u], [1, 1, 0]);
export var CommunicationLimitsConfig = struct(n0, _CLC, 0, [_aCS, _iLH], [() => CommunicationLimits, 0]);
export var GetInstanceCommunicationLimitsRequest = struct(n0, _GICLR, 0, [_cII], [[0, 1]]);
export var GetInstanceCommunicationLimitsResponse = struct(
  n0,
  _GICLRe,
  0,
  [_cLC],
  [() => InstanceCommunicationLimitsConfig]
);
export var InstanceCommunicationLimitsConfig = struct(n0, _ICLC, 0, [_aCS], [() => CommunicationLimits]);
export var PutInstanceCommunicationLimitsRequest = struct(
  n0,
  _PICLR,
  0,
  [_cII, _cLC],
  [[0, 1], () => InstanceCommunicationLimitsConfig]
);
export var UpdateCampaignCommunicationLimitsRequest = struct(
  n0,
  _UCCLR,
  0,
  [_i, _cLO],
  [[0, 1], () => CommunicationLimitsConfig]
);
export var CommunicationLimitList = list(n0, _CLL, 0, () => CommunicationLimit);
export var CommunicationLimits = uni(n0, _CLo, 0, [_cLL], [() => CommunicationLimitList]);
export var GetInstanceCommunicationLimits = op(
  n0,
  _GICL,
  {
    [_h]: ["GET", "/v2/connect-instance/{connectInstanceId}/communication-limits", 200],
  },
  () => GetInstanceCommunicationLimitsRequest,
  () => GetInstanceCommunicationLimitsResponse
);
export var PutInstanceCommunicationLimits = op(
  n0,
  _PICL,
  {
    [_h]: ["PUT", "/v2/connect-instance/{connectInstanceId}/communication-limits", 200],
  },
  () => PutInstanceCommunicationLimitsRequest,
  () => Unit
);
export var UpdateCampaignCommunicationLimits = op(
  n0,
  _UCCL,
  {
    [_h]: ["POST", "/v2/campaigns/{id}/communication-limits", 200],
  },
  () => UpdateCampaignCommunicationLimitsRequest,
  () => Unit
);
