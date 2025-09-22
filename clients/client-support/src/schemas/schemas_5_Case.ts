// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { CaseIdNotFound as __CaseIdNotFound } from "../models/index";
import {
  _ACTC,
  _ACTCR,
  _ACTCRd,
  _AD,
  _aI,
  _AS,
  _aS,
  _aSI,
  _aT,
  _b,
  _bT,
  _c,
  _cB,
  _cEA,
  _cI,
  _CINF,
  _CLo,
  _Co,
  _com,
  _DCe,
  _DCRes,
  _DCResc,
  _e,
  _fCS,
  _fN,
  _iCS,
  _m,
  _mR,
  _nT,
  _r,
  _RC,
  _RCR,
  _RCRe,
  _sB,
  _tC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddCommunicationToCaseRequest = struct(n0, _ACTCR, 0, [_cI, _cB, _cEA, _aSI], [0, 0, 64 | 0, 0]);
export var AddCommunicationToCaseResponse = struct(n0, _ACTCRd, 0, [_r], [2]);
export var AttachmentDetails = struct(n0, _AD, 0, [_aI, _fN], [0, 0]);
export var CaseIdNotFound = error(
  n0,
  _CINF,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __CaseIdNotFound
);
export var Communication = struct(n0, _Co, 0, [_cI, _b, _sB, _tC, _aS], [0, 0, 0, 0, () => AttachmentSet]);
export var DescribeCommunicationsRequest = struct(n0, _DCRes, 0, [_cI, _bT, _aT, _nT, _mR], [0, 0, 0, 0, 1]);
export var DescribeCommunicationsResponse = struct(n0, _DCResc, 0, [_com, _nT], [() => CommunicationList, 0]);
export var ResolveCaseRequest = struct(n0, _RCR, 0, [_cI], [0]);
export var ResolveCaseResponse = struct(n0, _RCRe, 0, [_iCS, _fCS], [0, 0]);
export var AttachmentSet = list(n0, _AS, 0, () => AttachmentDetails);
export var CcEmailAddressList = 64 | 0;

export var CommunicationList = list(n0, _CLo, 0, () => Communication);
export var AddCommunicationToCase = op(
  n0,
  _ACTC,
  0,
  () => AddCommunicationToCaseRequest,
  () => AddCommunicationToCaseResponse
);
export var DescribeCommunications = op(
  n0,
  _DCe,
  0,
  () => DescribeCommunicationsRequest,
  () => DescribeCommunicationsResponse
);
export var ResolveCase = op(
  n0,
  _RC,
  0,
  () => ResolveCaseRequest,
  () => ResolveCaseResponse
);
