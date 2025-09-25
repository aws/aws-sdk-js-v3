// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAu,
  _ATc,
  _ATu,
  _CAr,
  _CI,
  _CIr,
  _CNl,
  _Cre,
  _FCN,
  _LUPC,
  _LUPCR,
  _LUPCRi,
  _LWAC,
  _LWACR,
  _LWACRi,
  _MR,
  _NT,
  _RPI,
  _UPCD,
  _UPCLT,
  _UPCs,
  _UPI,
  _WACD,
  _WACDLT,
  ClientIdType,
  n0,
  TokenModelType,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListUserPoolClientsRequest = struct(n0, _LUPCR, 0, [_UPI, _MR, _NT], [0, 1, 0]);
export var ListUserPoolClientsResponse = struct(n0, _LUPCRi, 0, [_UPCs, _NT], [[() => UserPoolClientListType, 0], 0]);
export var ListWebAuthnCredentialsRequest = struct(n0, _LWACR, 0, [_ATc, _NT, _MR], [[() => TokenModelType, 0], 0, 1]);
export var ListWebAuthnCredentialsResponse = struct(
  n0,
  _LWACRi,
  0,
  [_Cre, _NT],
  [() => WebAuthnCredentialDescriptionListType, 0]
);
export var UserPoolClientDescription = struct(n0, _UPCD, 0, [_CI, _UPI, _CNl], [[() => ClientIdType, 0], 0, 0]);
export var WebAuthnCredentialDescription = struct(
  n0,
  _WACD,
  0,
  [_CIr, _FCN, _RPI, _AAu, _ATu, _CAr],
  [0, 0, 0, 0, 64 | 0, 4]
);
export var UserPoolClientListType = list(n0, _UPCLT, 0, [() => UserPoolClientDescription, 0]);
export var WebAuthnAuthenticatorTransportsList = 64 | 0;

export var WebAuthnCredentialDescriptionListType = list(n0, _WACDLT, 0, () => WebAuthnCredentialDescription);
export var ListUserPoolClients = op(
  n0,
  _LUPC,
  0,
  () => ListUserPoolClientsRequest,
  () => ListUserPoolClientsResponse
);
export var ListWebAuthnCredentials = op(
  n0,
  _LWAC,
  0,
  () => ListWebAuthnCredentialsRequest,
  () => ListWebAuthnCredentialsResponse
);
