// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import { _ACEAd, _c, _CE, _CL, _e, _h, _hE, _m, _MT, _PAD, _PADR, _PADRu, _PAE, _UCD, _WURL, n0 } from "./schemas_0";
import { AdditionalContactEmailAddresses, UseCaseDescription, WebsiteURL } from "./schemas_51_Account";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var PutAccountDetailsRequest = struct(
  n0,
  _PADR,
  0,
  [_MT, _WURL, _CL, _UCD, _ACEAd, _PAE],
  [0, [() => WebsiteURL, 0], 0, [() => UseCaseDescription, 0], [() => AdditionalContactEmailAddresses, 0], 2]
);
export var PutAccountDetailsResponse = struct(n0, _PADRu, 0, [], []);
export var PutAccountDetails = op(
  n0,
  _PAD,
  {
    [_h]: ["POST", "/v2/email/account/details", 200],
  },
  () => PutAccountDetailsRequest,
  () => PutAccountDetailsResponse
);
