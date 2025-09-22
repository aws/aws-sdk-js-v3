// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _AAp,
  _ACMPRTPS,
  _ACMPRTPSR,
  _ACMPRTPSRt,
  _AMPTPS,
  _AMPTPSR,
  _AMPTPSRt,
  _APA,
  _c,
  _CA,
  _CAR,
  _CARr,
  _CI,
  _CIR,
  _CIRr,
  _CMPR,
  _CPS,
  _CPSR,
  _CPSRr,
  _CT,
  _CTTI,
  _CTTIR,
  _CTTIRr,
  _D,
  _e,
  _hE,
  _IA,
  _IP,
  _M,
  _MPA,
  _N,
  _PIPTPS,
  _PIPTPSR,
  _PIPTPSRu,
  _PO,
  _PS,
  _PSA,
  _RA,
  _RS,
  _SD,
  _SQEE,
  _St,
  _T,
  _TR,
  _TRR,
  _TRRa,
  _TTIA,
  _TTIC,
  _TTIT,
  n0,
} from "./schemas_0";
import { PermissionSet } from "./schemas_3_Set";
import { TrustedTokenIssuerConfiguration } from "./schemas_6_TrustedToken";
import { TagList } from "./schemas_11_Create";
import { CustomerManagedPolicyReference } from "./schemas_13_Set";
import { PortalOptions } from "./schemas_16_Application";

/* eslint no-var: 0 */

export var AttachCustomerManagedPolicyReferenceToPermissionSetRequest = struct(
  n0,
  _ACMPRTPSR,
  0,
  [_IA, _PSA, _CMPR],
  [0, 0, () => CustomerManagedPolicyReference]
);
export var AttachCustomerManagedPolicyReferenceToPermissionSetResponse = struct(n0, _ACMPRTPSRt, 0, [], []);
export var AttachManagedPolicyToPermissionSetRequest = struct(n0, _AMPTPSR, 0, [_IA, _PSA, _MPA], [0, 0, 0]);
export var AttachManagedPolicyToPermissionSetResponse = struct(n0, _AMPTPSRt, 0, [], []);
export var CreateApplicationRequest = struct(
  n0,
  _CAR,
  0,
  [_IA, _APA, _N, _D, _PO, _T, _St, _CT],
  [0, 0, 0, 0, () => PortalOptions, () => TagList, 0, [0, 4]]
);
export var CreateApplicationResponse = struct(n0, _CARr, 0, [_AAp], [0]);
export var CreateInstanceRequest = struct(n0, _CIR, 0, [_N, _CT, _T], [0, [0, 4], () => TagList]);
export var CreateInstanceResponse = struct(n0, _CIRr, 0, [_IA], [0]);
export var CreatePermissionSetRequest = struct(
  n0,
  _CPSR,
  0,
  [_N, _D, _IA, _SD, _RS, _T],
  [0, 0, 0, 0, 0, () => TagList]
);
export var CreatePermissionSetResponse = struct(n0, _CPSRr, 0, [_PS], [() => PermissionSet]);
export var CreateTrustedTokenIssuerRequest = struct(
  n0,
  _CTTIR,
  0,
  [_IA, _N, _TTIT, _TTIC, _CT, _T],
  [0, 0, 0, () => TrustedTokenIssuerConfiguration, [0, 4], () => TagList]
);
export var CreateTrustedTokenIssuerResponse = struct(n0, _CTTIRr, 0, [_TTIA], [0]);
export var PutInlinePolicyToPermissionSetRequest = struct(n0, _PIPTPSR, 0, [_IA, _PSA, _IP], [0, 0, 0]);
export var PutInlinePolicyToPermissionSetResponse = struct(n0, _PIPTPSRu, 0, [], []);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M],
  [0],

  __ServiceQuotaExceededException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_IA, _RA, _T], [0, 0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var AttachCustomerManagedPolicyReferenceToPermissionSet = op(
  n0,
  _ACMPRTPS,
  0,
  () => AttachCustomerManagedPolicyReferenceToPermissionSetRequest,
  () => AttachCustomerManagedPolicyReferenceToPermissionSetResponse
);
export var AttachManagedPolicyToPermissionSet = op(
  n0,
  _AMPTPS,
  0,
  () => AttachManagedPolicyToPermissionSetRequest,
  () => AttachManagedPolicyToPermissionSetResponse
);
export var CreateApplication = op(
  n0,
  _CA,
  0,
  () => CreateApplicationRequest,
  () => CreateApplicationResponse
);
export var CreateInstance = op(
  n0,
  _CI,
  0,
  () => CreateInstanceRequest,
  () => CreateInstanceResponse
);
export var CreatePermissionSet = op(
  n0,
  _CPS,
  0,
  () => CreatePermissionSetRequest,
  () => CreatePermissionSetResponse
);
export var CreateTrustedTokenIssuer = op(
  n0,
  _CTTI,
  0,
  () => CreateTrustedTokenIssuerRequest,
  () => CreateTrustedTokenIssuerResponse
);
export var PutInlinePolicyToPermissionSet = op(
  n0,
  _PIPTPS,
  0,
  () => PutInlinePolicyToPermissionSetRequest,
  () => PutInlinePolicyToPermissionSetResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
