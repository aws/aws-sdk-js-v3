// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { KeyPairMismatchException as __KeyPairMismatchException } from "../models/index";
import {
  _A,
  _aQE,
  _c,
  _CB,
  _CC,
  _DSC,
  _DSCR,
  _e,
  _Ex,
  _GSC,
  _GSCR,
  _GSCRe,
  _hE,
  _IT,
  _KPME,
  _LSC,
  _LSCR,
  _LSCRi,
  _LSCT,
  _LSCTR,
  _LSCTRi,
  _m,
  _Ma,
  _MI,
  _NPe,
  _NSCN,
  _P,
  _PK,
  _PPa,
  _SC,
  _SCI,
  _SCM,
  _SCML,
  _sCMLT,
  _SCN,
  _T,
  _TSC,
  _TSCR,
  _UDp,
  _USCp,
  _USCpl,
  _USCRp,
  _USCRpl,
  _USCRplo,
  n0,
  tagListType,
  Unit,
} from "./schemas_0";
import { privateKeyType } from "./schemas_39_AML";

/* eslint no-var: 0 */

export var DeleteServerCertificateRequest = struct(n0, _DSCR, 0, [_SCN], [0]);
export var GetServerCertificateRequest = struct(n0, _GSCR, 0, [_SCN], [0]);
export var GetServerCertificateResponse = struct(n0, _GSCRe, 0, [_SC], [() => ServerCertificate]);
export var KeyPairMismatchException = error(
  n0,
  _KPME,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`KeyPairMismatch`, 400],
  },
  [_m],
  [0],

  __KeyPairMismatchException
);
export var ListServerCertificatesRequest = struct(n0, _LSCR, 0, [_PPa, _Ma, _MI], [0, 0, 1]);
export var ListServerCertificatesResponse = struct(
  n0,
  _LSCRi,
  0,
  [_SCML, _IT, _Ma],
  [() => serverCertificateMetadataListType, 2, 0]
);
export var ListServerCertificateTagsRequest = struct(n0, _LSCTR, 0, [_SCN, _Ma, _MI], [0, 0, 1]);
export var ListServerCertificateTagsResponse = struct(n0, _LSCTRi, 0, [_T, _IT, _Ma], [() => tagListType, 2, 0]);
export var ServerCertificate = struct(
  n0,
  _SC,
  0,
  [_SCM, _CB, _CC, _T],
  [() => ServerCertificateMetadata, 0, 0, () => tagListType]
);
export var ServerCertificateMetadata = struct(n0, _SCM, 0, [_P, _SCN, _SCI, _A, _UDp, _Ex], [0, 0, 0, 0, 4, 4]);
export var TagServerCertificateRequest = struct(n0, _TSCR, 0, [_SCN, _T], [0, () => tagListType]);
export var UpdateServerCertificateRequest = struct(n0, _USCRp, 0, [_SCN, _NPe, _NSCN], [0, 0, 0]);
export var UploadServerCertificateRequest = struct(
  n0,
  _USCRpl,
  0,
  [_P, _SCN, _CB, _PK, _CC, _T],
  [0, 0, 0, [() => privateKeyType, 0], 0, () => tagListType]
);
export var UploadServerCertificateResponse = struct(
  n0,
  _USCRplo,
  0,
  [_SCM, _T],
  [() => ServerCertificateMetadata, () => tagListType]
);
export var serverCertificateMetadataListType = list(n0, _sCMLT, 0, () => ServerCertificateMetadata);
export var DeleteServerCertificate = op(
  n0,
  _DSC,
  0,
  () => DeleteServerCertificateRequest,
  () => Unit
);
export var GetServerCertificate = op(
  n0,
  _GSC,
  0,
  () => GetServerCertificateRequest,
  () => GetServerCertificateResponse
);
export var ListServerCertificates = op(
  n0,
  _LSC,
  0,
  () => ListServerCertificatesRequest,
  () => ListServerCertificatesResponse
);
export var ListServerCertificateTags = op(
  n0,
  _LSCT,
  0,
  () => ListServerCertificateTagsRequest,
  () => ListServerCertificateTagsResponse
);
export var TagServerCertificate = op(
  n0,
  _TSC,
  0,
  () => TagServerCertificateRequest,
  () => Unit
);
export var UpdateServerCertificate = op(
  n0,
  _USCp,
  0,
  () => UpdateServerCertificateRequest,
  () => Unit
);
export var UploadServerCertificate = op(
  n0,
  _USCpl,
  0,
  () => UploadServerCertificateRequest,
  () => UploadServerCertificateResponse
);
