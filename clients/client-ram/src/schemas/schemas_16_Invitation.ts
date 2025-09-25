// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  ResourceShareInvitationAlreadyRejectedException as __ResourceShareInvitationAlreadyRejectedException,
  ResourceShareInvitationArnNotFoundException as __ResourceShareInvitationArnNotFoundException,
  ResourceShareInvitationExpiredException as __ResourceShareInvitationExpiredException,
} from "../models/index";
import { _aQE, _c, _e, _hE, _m, _RSIANFE, _RSIARE, _RSIEE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ResourceShareInvitationAlreadyRejectedException = error(
  n0,
  _RSIARE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidResourceShareInvitationArn.AlreadyRejected`, 400],
  },
  [_m],
  [0],

  __ResourceShareInvitationAlreadyRejectedException
);
export var ResourceShareInvitationArnNotFoundException = error(
  n0,
  _RSIANFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidResourceShareInvitationArn.NotFound`, 400],
  },
  [_m],
  [0],

  __ResourceShareInvitationArnNotFoundException
);
export var ResourceShareInvitationExpiredException = error(
  n0,
  _RSIEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidResourceShareInvitationArn.Expired`, 400],
  },
  [_m],
  [0],

  __ResourceShareInvitationExpiredException
);
