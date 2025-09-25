// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  BadRequestException as __BadRequestException,
  InternalServerException as __InternalServerException,
  UnauthorizedException as __UnauthorizedException,
} from "../models/index";
import { _ADE, _BRE, _c, _dI, _e, _eD, _eU, _GBD, _GBDI, _GBDO, _h, _hE, _ISE, _m, _s, _UE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var BadRequestException = error(
  n0,
  _BRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __BadRequestException
);
export var GetBuyerDashboardInput = struct(n0, _GBDI, 0, [_dI, _eD], [0, 64 | 0]);
export var GetBuyerDashboardOutput = struct(n0, _GBDO, 0, [_eU, _dI, _eD], [0, 0, 64 | 0]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var UnauthorizedException = error(
  n0,
  _UE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_m],
  [0],

  __UnauthorizedException
);
export var EmbeddingDomains = 64 | 0;

export var GetBuyerDashboard = op(
  n0,
  _GBD,
  {
    [_h]: ["POST", "/getBuyerDashboard", 200],
  },
  () => GetBuyerDashboardInput,
  () => GetBuyerDashboardOutput
);
