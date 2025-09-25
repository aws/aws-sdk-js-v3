// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import {
  _BOMXF,
  _BTo,
  _CT,
  _DA,
  _DE,
  _DT,
  _DTe,
  _DVSk,
  _FE,
  _GIDA,
  _GIDAR,
  _GIDARe,
  _GIMFDA,
  _GIMFDAR,
  _GIMFDARe,
  _GINA,
  _GINAR,
  _GINARe,
  _GIVA,
  _GIVAR,
  _GIVARe,
  _HIBNE,
  _HICNE,
  _HIDNE,
  _Id,
  _IDA,
  _IMFDA,
  _INA,
  _IVA,
  _MFD,
  _MFDA,
  _MFDS,
  _NA,
  _VA,
  _VS,
  _VT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetIdentityDkimAttributesRequest = struct(n0, _GIDAR, 0, [_Id], [64 | 0]);
export var GetIdentityDkimAttributesResponse = struct(n0, _GIDARe, 0, [_DA], [() => DkimAttributes]);
export var GetIdentityMailFromDomainAttributesRequest = struct(n0, _GIMFDAR, 0, [_Id], [64 | 0]);
export var GetIdentityMailFromDomainAttributesResponse = struct(
  n0,
  _GIMFDARe,
  0,
  [_MFDA],
  [() => MailFromDomainAttributes]
);
export var GetIdentityNotificationAttributesRequest = struct(n0, _GINAR, 0, [_Id], [64 | 0]);
export var GetIdentityNotificationAttributesResponse = struct(n0, _GINARe, 0, [_NA], [() => NotificationAttributes]);
export var GetIdentityVerificationAttributesRequest = struct(n0, _GIVAR, 0, [_Id], [64 | 0]);
export var GetIdentityVerificationAttributesResponse = struct(n0, _GIVARe, 0, [_VA], [() => VerificationAttributes]);
export var IdentityDkimAttributes = struct(n0, _IDA, 0, [_DE, _DVSk, _DT], [2, 0, 64 | 0]);
export var IdentityMailFromDomainAttributes = struct(n0, _IMFDA, 0, [_MFD, _MFDS, _BOMXF], [0, 0, 0]);
export var IdentityNotificationAttributes = struct(
  n0,
  _INA,
  0,
  [_BTo, _CT, _DTe, _FE, _HIBNE, _HICNE, _HIDNE],
  [0, 0, 0, 2, 2, 2, 2]
);
export var IdentityVerificationAttributes = struct(n0, _IVA, 0, [_VS, _VT], [0, 0]);
export var IdentityList = 64 | 0;

export var DkimAttributes = map(n0, _DA, 0, 0, () => IdentityDkimAttributes);
export var MailFromDomainAttributes = map(n0, _MFDA, 0, 0, () => IdentityMailFromDomainAttributes);
export var NotificationAttributes = map(n0, _NA, 0, 0, () => IdentityNotificationAttributes);
export var VerificationAttributes = map(n0, _VA, 0, 0, () => IdentityVerificationAttributes);
export var GetIdentityDkimAttributes = op(
  n0,
  _GIDA,
  0,
  () => GetIdentityDkimAttributesRequest,
  () => GetIdentityDkimAttributesResponse
);
export var GetIdentityMailFromDomainAttributes = op(
  n0,
  _GIMFDA,
  0,
  () => GetIdentityMailFromDomainAttributesRequest,
  () => GetIdentityMailFromDomainAttributesResponse
);
export var GetIdentityNotificationAttributes = op(
  n0,
  _GINA,
  0,
  () => GetIdentityNotificationAttributesRequest,
  () => GetIdentityNotificationAttributesResponse
);
export var GetIdentityVerificationAttributes = op(
  n0,
  _GIVA,
  0,
  () => GetIdentityVerificationAttributesRequest,
  () => GetIdentityVerificationAttributesResponse
);
