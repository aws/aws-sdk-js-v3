// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _ADE,
  _AS,
  _c,
  _CA,
  _CAr,
  _CB,
  _CFHIRD,
  _CFHIRDR,
  _CFHIRDRr,
  _CT,
  _CTm,
  _DA,
  _DE,
  _DF,
  _DI,
  _DN,
  _DP,
  _DPL,
  _DS,
  _DTV,
  _e,
  _EC,
  _ECr,
  _EM,
  _F,
  _FGAE,
  _hE,
  _ILA,
  _IPC,
  _ISE,
  _KEC,
  _KKI,
  _LFHIRD,
  _LFHIRDR,
  _LFHIRDRi,
  _M,
  _Me,
  _MR,
  _NT,
  _PDC,
  _PDT,
  _s,
  _SC,
  _T,
  _TE,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_3_Resource";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [0],

  __AccessDeniedException
);
export var CreateFHIRDatastoreRequest = struct(
  n0,
  _CFHIRDR,
  0,
  [_DN, _DTV, _SC, _PDC, _CT, _T, _IPC],
  [0, 0, () => SseConfiguration, () => PreloadDataConfig, [0, 4], () => TagList, () => IdentityProviderConfiguration]
);
export var CreateFHIRDatastoreResponse = struct(n0, _CFHIRDRr, 0, [_DI, _DA, _DS, _DE], [0, 0, 0, 0]);
export var DatastoreFilter = struct(n0, _DF, 0, [_DN, _DS, _CB, _CA], [0, 0, 4, 4]);
export var DatastoreProperties = struct(
  n0,
  _DP,
  0,
  [_DI, _DA, _DN, _DS, _CAr, _DTV, _DE, _SC, _PDC, _IPC, _EC],
  [
    0,
    0,
    0,
    0,
    4,
    0,
    0,
    () => SseConfiguration,
    () => PreloadDataConfig,
    () => IdentityProviderConfiguration,
    () => ErrorCause,
  ]
);
export var ErrorCause = struct(n0, _EC, 0, [_EM, _ECr], [0, 0]);
export var IdentityProviderConfiguration = struct(n0, _IPC, 0, [_AS, _FGAE, _Me, _ILA], [0, 2, 0, 0]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalServerException
);
export var KmsEncryptionConfig = struct(n0, _KEC, 0, [_CTm, _KKI], [0, 0]);
export var ListFHIRDatastoresRequest = struct(n0, _LFHIRDR, 0, [_F, _NT, _MR], [() => DatastoreFilter, 0, 1]);
export var ListFHIRDatastoresResponse = struct(n0, _LFHIRDRi, 0, [_DPL, _NT], [() => DatastorePropertiesList, 0]);
export var PreloadDataConfig = struct(n0, _PDC, 0, [_PDT], [0]);
export var SseConfiguration = struct(n0, _SC, 0, [_KEC], [() => KmsEncryptionConfig]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __ThrottlingException
);
export var Unit = "unit" as const;

export var DatastorePropertiesList = list(n0, _DPL, 0, () => DatastoreProperties);
export var CreateFHIRDatastore = op(
  n0,
  _CFHIRD,
  0,
  () => CreateFHIRDatastoreRequest,
  () => CreateFHIRDatastoreResponse
);
export var ListFHIRDatastores = op(
  n0,
  _LFHIRD,
  0,
  () => ListFHIRDatastoresRequest,
  () => ListFHIRDatastoresResponse
);
