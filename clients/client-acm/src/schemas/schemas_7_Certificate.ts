// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  ResourceInUseException as __ResourceInUseException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _ADE,
  _aQE,
  _ATTC,
  _ATTCR,
  _c,
  _CA,
  _CE,
  _DBE,
  _DC,
  _DCR,
  _e,
  _EE,
  _EEC,
  _GAC,
  _GACR,
  _hE,
  _IT,
  _M,
  _m,
  _PAC,
  _PACR,
  _RCev,
  _RCRev,
  _RCRevo,
  _RIUE,
  _RR,
  _RTFC,
  _RTFCR,
  _T,
  _TE,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_2_Certificate";
import { Unit } from "./schemas_3_Certificate";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`AccessDenied`, 403],
  },
  [_M],
  [0],

  __AccessDeniedException
);
export var AddTagsToCertificateRequest = struct(n0, _ATTCR, 0, [_CA, _T], [0, () => TagList]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ConflictException
);
export var DeleteCertificateRequest = struct(n0, _DCR, 0, [_CA], [0]);
export var ExpiryEventsConfiguration = struct(n0, _EEC, 0, [_DBE], [1]);
export var GetAccountConfigurationResponse = struct(n0, _GACR, 0, [_EE], [() => ExpiryEventsConfiguration]);
export var PutAccountConfigurationRequest = struct(n0, _PACR, 0, [_EE, _IT], [() => ExpiryEventsConfiguration, 0]);
export var RemoveTagsFromCertificateRequest = struct(n0, _RTFCR, 0, [_CA, _T], [0, () => TagList]);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ResourceInUseException
);
export var RevokeCertificateRequest = struct(n0, _RCRev, 0, [_CA, _RR], [0, 0]);
export var RevokeCertificateResponse = struct(n0, _RCRevo, 0, [_CA], [0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`Throttling`, 400],
  },
  [_m],
  [0],

  __ThrottlingException
);
export var AddTagsToCertificate = op(
  n0,
  _ATTC,
  0,
  () => AddTagsToCertificateRequest,
  () => Unit
);
export var DeleteCertificate = op(
  n0,
  _DC,
  0,
  () => DeleteCertificateRequest,
  () => Unit
);
export var GetAccountConfiguration = op(
  n0,
  _GAC,
  0,
  () => Unit,
  () => GetAccountConfigurationResponse
);
export var PutAccountConfiguration = op(
  n0,
  _PAC,
  0,
  () => PutAccountConfigurationRequest,
  () => Unit
);
export var RemoveTagsFromCertificate = op(
  n0,
  _RTFC,
  0,
  () => RemoveTagsFromCertificateRequest,
  () => Unit
);
export var RevokeCertificate = op(
  n0,
  _RCev,
  0,
  () => RevokeCertificateRequest,
  () => RevokeCertificateResponse
);
