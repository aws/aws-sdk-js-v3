// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ManagedLoginBrandingExistsException as __ManagedLoginBrandingExistsException,
  WebAuthnChallengeNotFoundException as __WebAuthnChallengeNotFoundException,
  WebAuthnClientMismatchException as __WebAuthnClientMismatchException,
  WebAuthnConfigurationMissingException as __WebAuthnConfigurationMissingException,
  WebAuthnCredentialNotSupportedException as __WebAuthnCredentialNotSupportedException,
  WebAuthnNotEnabledException as __WebAuthnNotEnabledException,
  WebAuthnOriginNotAllowedException as __WebAuthnOriginNotAllowedException,
  WebAuthnRelyingPartyMismatchException as __WebAuthnRelyingPartyMismatchException,
} from "../models/index";
import {
  _ALT,
  _As,
  _AT,
  _ATc,
  _B,
  _C,
  _c,
  _CCO,
  _CDr,
  _CI,
  _CMLB,
  _CMLBR,
  _CMLBRr,
  _CMo,
  _Cr,
  _CWAR,
  _CWARR,
  _CWARRo,
  _DMLBBC,
  _DMLBBCR,
  _DMLBBCRe,
  _DMLBe,
  _DMLBRe,
  _DMLBRes,
  _e,
  _Ex,
  _hE,
  _LMD,
  _m,
  _MLB,
  _MLBEE,
  _MLBI,
  _MLBT,
  _RI,
  _RMR,
  _Se,
  _SWAR,
  _SWARR,
  _SWARRt,
  _UCPV,
  _UMLB,
  _UMLBR,
  _UMLBRp,
  _UPI,
  _WACME,
  _WACMEe,
  _WACNFE,
  _WACNSE,
  _WANEE,
  _WAONAE,
  _WARPME,
  ClientIdType,
  n0,
  TokenModelType,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssetType = struct(n0, _AT, 0, [_C, _CMo, _Ex, _B, _RI], [0, 0, 0, 21, 0]);
export var CompleteWebAuthnRegistrationRequest = struct(n0, _CWARR, 0, [_ATc, _Cr], [[() => TokenModelType, 0], 15]);
export var CompleteWebAuthnRegistrationResponse = struct(n0, _CWARRo, 0, [], []);
export var CreateManagedLoginBrandingRequest = struct(
  n0,
  _CMLBR,
  0,
  [_UPI, _CI, _UCPV, _Se, _As],
  [0, [() => ClientIdType, 0], 2, 15, () => AssetListType]
);
export var CreateManagedLoginBrandingResponse = struct(n0, _CMLBRr, 0, [_MLB], [() => ManagedLoginBrandingType]);
export var DescribeManagedLoginBrandingByClientRequest = struct(
  n0,
  _DMLBBCR,
  0,
  [_UPI, _CI, _RMR],
  [0, [() => ClientIdType, 0], 2]
);
export var DescribeManagedLoginBrandingByClientResponse = struct(
  n0,
  _DMLBBCRe,
  0,
  [_MLB],
  [() => ManagedLoginBrandingType]
);
export var DescribeManagedLoginBrandingRequest = struct(n0, _DMLBRe, 0, [_UPI, _MLBI, _RMR], [0, 0, 2]);
export var DescribeManagedLoginBrandingResponse = struct(n0, _DMLBRes, 0, [_MLB], [() => ManagedLoginBrandingType]);
export var ManagedLoginBrandingExistsException = error(
  n0,
  _MLBEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ManagedLoginBrandingExistsException
);
export var ManagedLoginBrandingType = struct(
  n0,
  _MLBT,
  0,
  [_MLBI, _UPI, _UCPV, _Se, _As, _CDr, _LMD],
  [0, 0, 2, 15, () => AssetListType, 4, 4]
);
export var StartWebAuthnRegistrationRequest = struct(n0, _SWARR, 0, [_ATc], [[() => TokenModelType, 0]]);
export var StartWebAuthnRegistrationResponse = struct(n0, _SWARRt, 0, [_CCO], [15]);
export var UpdateManagedLoginBrandingRequest = struct(
  n0,
  _UMLBR,
  0,
  [_UPI, _MLBI, _UCPV, _Se, _As],
  [0, 0, 2, 15, () => AssetListType]
);
export var UpdateManagedLoginBrandingResponse = struct(n0, _UMLBRp, 0, [_MLB], [() => ManagedLoginBrandingType]);
export var WebAuthnChallengeNotFoundException = error(
  n0,
  _WACNFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __WebAuthnChallengeNotFoundException
);
export var WebAuthnClientMismatchException = error(
  n0,
  _WACME,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __WebAuthnClientMismatchException
);
export var WebAuthnConfigurationMissingException = error(
  n0,
  _WACMEe,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __WebAuthnConfigurationMissingException
);
export var WebAuthnCredentialNotSupportedException = error(
  n0,
  _WACNSE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __WebAuthnCredentialNotSupportedException
);
export var WebAuthnNotEnabledException = error(
  n0,
  _WANEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __WebAuthnNotEnabledException
);
export var WebAuthnOriginNotAllowedException = error(
  n0,
  _WAONAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __WebAuthnOriginNotAllowedException
);
export var WebAuthnRelyingPartyMismatchException = error(
  n0,
  _WARPME,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __WebAuthnRelyingPartyMismatchException
);
export var AssetListType = list(n0, _ALT, 0, () => AssetType);
export var CompleteWebAuthnRegistration = op(
  n0,
  _CWAR,
  0,
  () => CompleteWebAuthnRegistrationRequest,
  () => CompleteWebAuthnRegistrationResponse
);
export var CreateManagedLoginBranding = op(
  n0,
  _CMLB,
  0,
  () => CreateManagedLoginBrandingRequest,
  () => CreateManagedLoginBrandingResponse
);
export var DescribeManagedLoginBranding = op(
  n0,
  _DMLBe,
  0,
  () => DescribeManagedLoginBrandingRequest,
  () => DescribeManagedLoginBrandingResponse
);
export var DescribeManagedLoginBrandingByClient = op(
  n0,
  _DMLBBC,
  0,
  () => DescribeManagedLoginBrandingByClientRequest,
  () => DescribeManagedLoginBrandingByClientResponse
);
export var StartWebAuthnRegistration = op(
  n0,
  _SWAR,
  0,
  () => StartWebAuthnRegistrationRequest,
  () => StartWebAuthnRegistrationResponse
);
export var UpdateManagedLoginBranding = op(
  n0,
  _UMLB,
  0,
  () => UpdateManagedLoginBrandingRequest,
  () => UpdateManagedLoginBrandingResponse
);
