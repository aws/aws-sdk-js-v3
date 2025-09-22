// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ResponseHeadersPolicyAlreadyExists as __ResponseHeadersPolicyAlreadyExists,
  TooLongCSPInResponseHeadersPolicy as __TooLongCSPInResponseHeadersPolicy,
  TooManyCustomHeadersInResponseHeadersPolicy as __TooManyCustomHeadersInResponseHeadersPolicy,
  TooManyRemoveHeadersInResponseHeadersPolicy as __TooManyRemoveHeadersInResponseHeadersPolicy,
  TooManyResponseHeadersPolicies as __TooManyResponseHeadersPolicies,
} from "../models/index";
import {
  _ACAC,
  _ACAH,
  _ACAHL,
  _ACAM,
  _ACAML,
  _ACAO,
  _ACAOL,
  _ACEH,
  _ACEHL,
  _ACMAS,
  _c,
  _CCo,
  _CHC,
  _Co,
  _CRHP,
  _CRHPR,
  _CRHPRr,
  _CSP,
  _CTO,
  _E,
  _e,
  _ET,
  _FO,
  _FOr,
  _h,
  _He,
  _hE,
  _hH,
  _hP,
  _I,
  _Id,
  _ISnc,
  _L,
  _LMT,
  _M,
  _MBo,
  _Met,
  _N,
  _OO,
  _Or,
  _Ov,
  _Pre,
  _Pro,
  _Q,
  _RHC,
  _RHP,
  _RHPACAH,
  _RHPACAM,
  _RHPACAO,
  _RHPACEH,
  _RHPAE,
  _RHPC,
  _RHPCC,
  _RHPCH,
  _RHPCHC,
  _RHPCHL,
  _RHPCSP,
  _RHPCTO,
  _RHPFO,
  _RHPRH,
  _RHPRHC,
  _RHPRHL,
  _RHPRP,
  _RHPSHC,
  _RHPSTHC,
  _RHPSTS,
  _RHPXSSP,
  _RP,
  _RU,
  _SHC,
  _SR,
  _STHC,
  _STS,
  _TLCSPIRHP,
  _TMCHIRHP,
  _TMRHIRHP,
  _TMRHP,
  _V,
  _xN,
  _XSSP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateResponseHeadersPolicyRequest = struct(
  n0,
  _CRHPR,
  0,
  [_RHPC],
  [
    [
      () => ResponseHeadersPolicyConfig,
      {
        [_xN]: _RHPC,
        [_hP]: 1,
      },
    ],
  ]
);
export var CreateResponseHeadersPolicyResult = struct(
  n0,
  _CRHPRr,
  0,
  [_RHP, _L, _ET],
  [
    [() => ResponseHeadersPolicy, 16],
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var ResponseHeadersPolicy = struct(
  n0,
  _RHP,
  0,
  [_Id, _LMT, _RHPC],
  [0, 4, [() => ResponseHeadersPolicyConfig, 0]]
);
export var ResponseHeadersPolicyAccessControlAllowHeaders = struct(
  n0,
  _RHPACAH,
  0,
  [_Q, _I],
  [1, [() => AccessControlAllowHeadersList, 0]]
);
export var ResponseHeadersPolicyAccessControlAllowMethods = struct(
  n0,
  _RHPACAM,
  0,
  [_Q, _I],
  [1, [() => AccessControlAllowMethodsList, 0]]
);
export var ResponseHeadersPolicyAccessControlAllowOrigins = struct(
  n0,
  _RHPACAO,
  0,
  [_Q, _I],
  [1, [() => AccessControlAllowOriginsList, 0]]
);
export var ResponseHeadersPolicyAccessControlExposeHeaders = struct(
  n0,
  _RHPACEH,
  0,
  [_Q, _I],
  [1, [() => AccessControlExposeHeadersList, 0]]
);
export var ResponseHeadersPolicyAlreadyExists = error(
  n0,
  _RHPAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ResponseHeadersPolicyAlreadyExists
);
export var ResponseHeadersPolicyConfig = struct(
  n0,
  _RHPC,
  0,
  [_Co, _N, _CCo, _SHC, _STHC, _CHC, _RHC],
  [
    0,
    0,
    [() => ResponseHeadersPolicyCorsConfig, 0],
    () => ResponseHeadersPolicySecurityHeadersConfig,
    () => ResponseHeadersPolicyServerTimingHeadersConfig,
    [() => ResponseHeadersPolicyCustomHeadersConfig, 0],
    [() => ResponseHeadersPolicyRemoveHeadersConfig, 0],
  ]
);
export var ResponseHeadersPolicyContentSecurityPolicy = struct(n0, _RHPCSP, 0, [_Ov, _CSP], [2, 0]);
export var ResponseHeadersPolicyContentTypeOptions = struct(n0, _RHPCTO, 0, [_Ov], [2]);
export var ResponseHeadersPolicyCorsConfig = struct(
  n0,
  _RHPCC,
  0,
  [_ACAO, _ACAH, _ACAM, _ACAC, _ACEH, _ACMAS, _OO],
  [
    [() => ResponseHeadersPolicyAccessControlAllowOrigins, 0],
    [() => ResponseHeadersPolicyAccessControlAllowHeaders, 0],
    [() => ResponseHeadersPolicyAccessControlAllowMethods, 0],
    2,
    [() => ResponseHeadersPolicyAccessControlExposeHeaders, 0],
    1,
    2,
  ]
);
export var ResponseHeadersPolicyCustomHeader = struct(n0, _RHPCH, 0, [_He, _V, _Ov], [0, 0, 2]);
export var ResponseHeadersPolicyCustomHeadersConfig = struct(
  n0,
  _RHPCHC,
  0,
  [_Q, _I],
  [1, [() => ResponseHeadersPolicyCustomHeaderList, 0]]
);
export var ResponseHeadersPolicyFrameOptions = struct(n0, _RHPFO, 0, [_Ov, _FO], [2, 0]);
export var ResponseHeadersPolicyReferrerPolicy = struct(n0, _RHPRP, 0, [_Ov, _RP], [2, 0]);
export var ResponseHeadersPolicyRemoveHeader = struct(n0, _RHPRH, 0, [_He], [0]);
export var ResponseHeadersPolicyRemoveHeadersConfig = struct(
  n0,
  _RHPRHC,
  0,
  [_Q, _I],
  [1, [() => ResponseHeadersPolicyRemoveHeaderList, 0]]
);
export var ResponseHeadersPolicySecurityHeadersConfig = struct(
  n0,
  _RHPSHC,
  0,
  [_XSSP, _FOr, _RP, _CSP, _CTO, _STS],
  [
    () => ResponseHeadersPolicyXSSProtection,
    () => ResponseHeadersPolicyFrameOptions,
    () => ResponseHeadersPolicyReferrerPolicy,
    () => ResponseHeadersPolicyContentSecurityPolicy,
    () => ResponseHeadersPolicyContentTypeOptions,
    () => ResponseHeadersPolicyStrictTransportSecurity,
  ]
);
export var ResponseHeadersPolicyServerTimingHeadersConfig = struct(n0, _RHPSTHC, 0, [_E, _SR], [2, 1]);
export var ResponseHeadersPolicyStrictTransportSecurity = struct(
  n0,
  _RHPSTS,
  0,
  [_Ov, _ISnc, _Pre, _ACMAS],
  [2, 2, 2, 1]
);
export var ResponseHeadersPolicyXSSProtection = struct(n0, _RHPXSSP, 0, [_Ov, _Pro, _MBo, _RU], [2, 2, 2, 0]);
export var TooLongCSPInResponseHeadersPolicy = error(
  n0,
  _TLCSPIRHP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooLongCSPInResponseHeadersPolicy
);
export var TooManyCustomHeadersInResponseHeadersPolicy = error(
  n0,
  _TMCHIRHP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyCustomHeadersInResponseHeadersPolicy
);
export var TooManyRemoveHeadersInResponseHeadersPolicy = error(
  n0,
  _TMRHIRHP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyRemoveHeadersInResponseHeadersPolicy
);
export var TooManyResponseHeadersPolicies = error(
  n0,
  _TMRHP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyResponseHeadersPolicies
);
export var AccessControlAllowHeadersList = list(n0, _ACAHL, 0, [
  0,
  {
    [_xN]: _He,
  },
]);
export var AccessControlAllowMethodsList = list(n0, _ACAML, 0, [
  0,
  {
    [_xN]: _Met,
  },
]);
export var AccessControlAllowOriginsList = list(n0, _ACAOL, 0, [
  0,
  {
    [_xN]: _Or,
  },
]);
export var AccessControlExposeHeadersList = list(n0, _ACEHL, 0, [
  0,
  {
    [_xN]: _He,
  },
]);
export var ResponseHeadersPolicyCustomHeaderList = list(n0, _RHPCHL, 0, [
  () => ResponseHeadersPolicyCustomHeader,
  {
    [_xN]: _RHPCH,
  },
]);
export var ResponseHeadersPolicyRemoveHeaderList = list(n0, _RHPRHL, 0, [
  () => ResponseHeadersPolicyRemoveHeader,
  {
    [_xN]: _RHPRH,
  },
]);
export var CreateResponseHeadersPolicy = op(
  n0,
  _CRHP,
  {
    [_h]: ["POST", "/2020-05-31/response-headers-policy", 201],
  },
  () => CreateResponseHeadersPolicyRequest,
  () => CreateResponseHeadersPolicyResult
);
