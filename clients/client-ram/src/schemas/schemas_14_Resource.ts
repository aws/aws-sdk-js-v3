// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { MissingRequiredParameterException as __MissingRequiredParameterException } from "../models/index";
import { _aQE, _c, _e, _h, _hE, _LPIR, _LPIRR, _LPIRRi, _m, _mR, _MRPE, _nT, _res, _rRS, _rSIA, n0 } from "./schemas_0";
import { ResourceList } from "./schemas_7_List";

/* eslint no-var: 0 */

export var ListPendingInvitationResourcesRequest = struct(n0, _LPIRR, 0, [_rSIA, _nT, _mR, _rRS], [0, 0, 1, 0]);
export var ListPendingInvitationResourcesResponse = struct(n0, _LPIRRi, 0, [_res, _nT], [[() => ResourceList, 0], 0]);
export var MissingRequiredParameterException = error(
  n0,
  _MRPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`MissingRequiredParameter`, 400],
  },
  [_m],
  [0],

  __MissingRequiredParameterException
);
export var ListPendingInvitationResources = op(
  n0,
  _LPIR,
  {
    [_h]: ["POST", "/listpendinginvitationresources", 200],
  },
  () => ListPendingInvitationResourcesRequest,
  () => ListPendingInvitationResourcesResponse
);
