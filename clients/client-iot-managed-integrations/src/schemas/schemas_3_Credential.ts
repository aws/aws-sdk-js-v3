// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AM,
  _AMT,
  _Ar,
  _B,
  _C,
  _Ca,
  _CAr,
  _CCL,
  _CCLR,
  _CCLRr,
  _CLI,
  _CLLD,
  _CLN,
  _CLS,
  _CMT,
  _CMTR,
  _CMTRr,
  _CR,
  _CSa,
  _CT,
  _DCL,
  _DCLR,
  _GCL,
  _GCLR,
  _GCLRe,
  _h,
  _HNM,
  _hQ,
  _I,
  _Id,
  _It,
  _LCL,
  _LCLR,
  _LCLRi,
  _M,
  _MD,
  _MR,
  _N,
  _NT,
  _O,
  _R,
  _SN,
  _Ta,
  _UMT,
  _UMTR,
  n0,
  TagsMap,
  Unit,
} from "./schemas_0";
import { CapabilityReport, CapabilitySchemas } from "./schemas_6_ManagedThing";
import { AuthMaterialString, Brand, Model } from "./schemas_19_Managed";

/* eslint no-var: 0 */

export var Classification = sim(n0, _C, 0, 8);
export var CredentialLockerName = sim(n0, _CLN, 0, 8);
export var Owner = sim(n0, _O, 0, 8);
export var SerialNumber = sim(n0, _SN, 0, 8);
export var CreateCredentialLockerRequest = struct(
  n0,
  _CCLR,
  0,
  [_N, _CT, _Ta],
  [
    [() => CredentialLockerName, 0],
    [0, 4],
    [() => TagsMap, 0],
  ]
);
export var CreateCredentialLockerResponse = struct(n0, _CCLRr, 0, [_I, _Ar, _CAr], [0, 0, 4]);
export var CreateManagedThingRequest = struct(
  n0,
  _CMTR,
  0,
  [_R, _O, _CLI, _AM, _AMT, _SN, _B, _M, _N, _CR, _CSa, _Ca, _CT, _C, _Ta, _MD],
  [
    0,
    [() => Owner, 0],
    0,
    [() => AuthMaterialString, 0],
    0,
    [() => SerialNumber, 0],
    [() => Brand, 0],
    [() => Model, 0],
    0,
    () => CapabilityReport,
    () => CapabilitySchemas,
    0,
    [0, 4],
    [() => Classification, 0],
    [() => TagsMap, 0],
    128 | 0,
  ]
);
export var CreateManagedThingResponse = struct(n0, _CMTRr, 0, [_I, _Ar, _CAr], [0, 0, 4]);
export var CredentialLockerSummary = struct(
  n0,
  _CLS,
  0,
  [_I, _Ar, _N, _CAr],
  [0, 0, [() => CredentialLockerName, 0], 4]
);
export var DeleteCredentialLockerRequest = struct(n0, _DCLR, 0, [_Id], [[0, 1]]);
export var GetCredentialLockerRequest = struct(n0, _GCLR, 0, [_Id], [[0, 1]]);
export var GetCredentialLockerResponse = struct(
  n0,
  _GCLRe,
  0,
  [_I, _Ar, _N, _CAr, _Ta],
  [0, 0, [() => CredentialLockerName, 0], 4, [() => TagsMap, 0]]
);
export var ListCredentialLockersRequest = struct(
  n0,
  _LCLR,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListCredentialLockersResponse = struct(
  n0,
  _LCLRi,
  0,
  [_It, _NT],
  [[() => CredentialLockerListDefinition, 0], 0]
);
export var UpdateManagedThingRequest = struct(
  n0,
  _UMTR,
  0,
  [_Id, _O, _CLI, _SN, _B, _M, _N, _CR, _CSa, _Ca, _C, _HNM, _MD],
  [
    [0, 1],
    [() => Owner, 0],
    0,
    [() => SerialNumber, 0],
    [() => Brand, 0],
    [() => Model, 0],
    0,
    () => CapabilityReport,
    () => CapabilitySchemas,
    0,
    [() => Classification, 0],
    0,
    128 | 0,
  ]
);
export var CredentialLockerListDefinition = list(n0, _CLLD, 0, [() => CredentialLockerSummary, 0]);
export var CreateCredentialLocker = op(
  n0,
  _CCL,
  {
    [_h]: ["POST", "/credential-lockers", 201],
  },
  () => CreateCredentialLockerRequest,
  () => CreateCredentialLockerResponse
);
export var CreateManagedThing = op(
  n0,
  _CMT,
  {
    [_h]: ["POST", "/managed-things", 201],
  },
  () => CreateManagedThingRequest,
  () => CreateManagedThingResponse
);
export var DeleteCredentialLocker = op(
  n0,
  _DCL,
  {
    [_h]: ["DELETE", "/credential-lockers/{Identifier}", 200],
  },
  () => DeleteCredentialLockerRequest,
  () => Unit
);
export var GetCredentialLocker = op(
  n0,
  _GCL,
  {
    [_h]: ["GET", "/credential-lockers/{Identifier}", 200],
  },
  () => GetCredentialLockerRequest,
  () => GetCredentialLockerResponse
);
export var ListCredentialLockers = op(
  n0,
  _LCL,
  {
    [_h]: ["GET", "/credential-lockers", 200],
  },
  () => ListCredentialLockersRequest,
  () => ListCredentialLockersResponse
);
export var UpdateManagedThing = op(
  n0,
  _UMT,
  {
    [_h]: ["PUT", "/managed-things/{Identifier}", 204],
  },
  () => UpdateManagedThingRequest,
  () => Unit
);
