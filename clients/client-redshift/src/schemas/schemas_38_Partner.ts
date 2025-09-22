// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  PartnerNotFoundFault as __PartnerNotFoundFault,
  UnauthorizedPartnerIntegrationFault as __UnauthorizedPartnerIntegrationFault,
} from "../models/index";
import {
  _AI,
  _APd,
  _aQE,
  _c,
  _CAr,
  _CIl,
  _DN,
  _DPe,
  _DPes,
  _DPIM,
  _DPOM,
  _e,
  _hE,
  _m,
  _PII,
  _PIIL,
  _PIIM,
  _PIOM,
  _PNa,
  _PNFF,
  _SM,
  _St,
  _UA,
  _UPIF,
  _UPS,
  _UPSIM,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribePartnersInputMessage = struct(n0, _DPIM, 0, [_AI, _CIl, _DN, _PNa], [0, 0, 0, 0]);
export var DescribePartnersOutputMessage = struct(n0, _DPOM, 0, [_PIIL], [[() => PartnerIntegrationInfoList, 0]]);
export var PartnerIntegrationInfo = struct(n0, _PII, 0, [_DN, _PNa, _St, _SM, _CAr, _UA], [0, 0, 0, 0, 4, 4]);
export var PartnerIntegrationInputMessage = struct(n0, _PIIM, 0, [_AI, _CIl, _DN, _PNa], [0, 0, 0, 0]);
export var PartnerIntegrationOutputMessage = struct(n0, _PIOM, 0, [_DN, _PNa], [0, 0]);
export var PartnerNotFoundFault = error(
  n0,
  _PNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`PartnerNotFound`, 404],
  },
  [_m],
  [0],

  __PartnerNotFoundFault
);
export var UnauthorizedPartnerIntegrationFault = error(
  n0,
  _UPIF,
  {
    [_e]: _c,
    [_hE]: 401,
    [_aQE]: [`UnauthorizedPartnerIntegration`, 401],
  },
  [_m],
  [0],

  __UnauthorizedPartnerIntegrationFault
);
export var UpdatePartnerStatusInputMessage = struct(
  n0,
  _UPSIM,
  0,
  [_AI, _CIl, _DN, _PNa, _St, _SM],
  [0, 0, 0, 0, 0, 0]
);
export var PartnerIntegrationInfoList = list(n0, _PIIL, 0, [
  () => PartnerIntegrationInfo,
  {
    [_xN]: _PII,
  },
]);
export var AddPartner = op(
  n0,
  _APd,
  0,
  () => PartnerIntegrationInputMessage,
  () => PartnerIntegrationOutputMessage
);
export var DeletePartner = op(
  n0,
  _DPe,
  0,
  () => PartnerIntegrationInputMessage,
  () => PartnerIntegrationOutputMessage
);
export var DescribePartners = op(
  n0,
  _DPes,
  0,
  () => DescribePartnersInputMessage,
  () => DescribePartnersOutputMessage
);
export var UpdatePartnerStatus = op(
  n0,
  _UPS,
  0,
  () => UpdatePartnerStatusInputMessage,
  () => PartnerIntegrationOutputMessage
);
