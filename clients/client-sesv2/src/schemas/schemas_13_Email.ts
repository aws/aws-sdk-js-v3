// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _CEI,
  _CEIR,
  _CEIRr,
  _CSKL,
  _CSN,
  _DA,
  _DS,
  _DSA,
  _DSAO,
  _DSPK,
  _DSS,
  _DT,
  _EI,
  _h,
  _IT,
  _LKGT,
  _NSKL,
  _PEIDSA,
  _PEIDSAR,
  _PEIDSARu,
  _PK,
  _S,
  _SAi,
  _SAO,
  _SE,
  _Ta,
  _Tok,
  _VFSS,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var PrivateKey = sim(n0, _PK, 0, 8);
export var CreateEmailIdentityRequest = struct(
  n0,
  _CEIR,
  0,
  [_EI, _Ta, _DSA, _CSN],
  [0, () => TagList, [() => DkimSigningAttributes, 0], 0]
);
export var CreateEmailIdentityResponse = struct(n0, _CEIRr, 0, [_IT, _VFSS, _DA], [0, 2, () => DkimAttributes]);
export var DkimAttributes = struct(n0, _DA, 0, [_SE, _S, _Tok, _SAO, _NSKL, _CSKL, _LKGT], [2, 0, 64 | 0, 0, 0, 0, 4]);
export var DkimSigningAttributes = struct(n0, _DSA, 0, [_DSS, _DSPK, _NSKL, _DSAO], [0, [() => PrivateKey, 0], 0, 0]);
export var PutEmailIdentityDkimSigningAttributesRequest = struct(
  n0,
  _PEIDSAR,
  0,
  [_EI, _SAO, _SAi],
  [[0, 1], 0, [() => DkimSigningAttributes, 0]]
);
export var PutEmailIdentityDkimSigningAttributesResponse = struct(n0, _PEIDSARu, 0, [_DS, _DT], [0, 64 | 0]);
export var DnsTokenList = 64 | 0;

export var CreateEmailIdentity = op(
  n0,
  _CEI,
  {
    [_h]: ["POST", "/v2/email/identities", 200],
  },
  () => CreateEmailIdentityRequest,
  () => CreateEmailIdentityResponse
);
export var PutEmailIdentityDkimSigningAttributes = op(
  n0,
  _PEIDSA,
  {
    [_h]: ["PUT", "/v1/email/identities/{EmailIdentity}/dkim/signing", 200],
  },
  () => PutEmailIdentityDkimSigningAttributesRequest,
  () => PutEmailIdentityDkimSigningAttributesResponse
);
