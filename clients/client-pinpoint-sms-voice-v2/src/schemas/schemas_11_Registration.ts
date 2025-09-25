// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAd,
  _AT,
  _ATr,
  _AVN,
  _CRV,
  _CRVR,
  _CRVRr,
  _CTr,
  _CVN,
  _DL,
  _DR,
  _DRe,
  _DRel,
  _DRes,
  _DRFV,
  _DRFVe,
  _DRFVR,
  _DRFVRe,
  _DRFVRes,
  _DRFVResc,
  _DRR,
  _DRRe,
  _DRRes,
  _DRResc,
  _DRV,
  _DRVi,
  _DRVR,
  _DRVRe,
  _DRVRi,
  _DRVRis,
  _DT,
  _DTe,
  _DTi,
  _DTr,
  _F,
  _FP,
  _FPi,
  _LD,
  _LDVN,
  _MR,
  _N,
  _NT,
  _PRFV,
  _PRFVR,
  _PRFVRu,
  _R,
  _RA,
  _RAI,
  _RAT,
  _RDRI,
  _RDRIL,
  _Re,
  _RF,
  _RFL,
  _RFV,
  _RFVI,
  _RFVIL,
  _RIe,
  _RIeg,
  _RIegi,
  _RIL,
  _RS,
  _RTe,
  _RTev,
  _RTevo,
  _RV,
  _RVF,
  _RVFL,
  _RVI,
  _RVIL,
  _RVS,
  _RVSH,
  _SC,
  _SDh,
  _SP,
  _SRV,
  _SRVR,
  _SRVRu,
  _ST,
  _TV,
  _Va,
  _VN,
  _VNe,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRegistrationVersionRequest = struct(n0, _CRVR, 0, [_RIe], [0]);
export var CreateRegistrationVersionResult = struct(
  n0,
  _CRVRr,
  0,
  [_RA, _RIe, _VN, _RVS, _RVSH],
  [0, 0, 1, 0, () => RegistrationVersionStatusHistory]
);
export var DeleteRegistrationFieldValueRequest = struct(n0, _DRFVR, 0, [_RIe, _FP], [0, 0]);
export var DeleteRegistrationFieldValueResult = struct(
  n0,
  _DRFVRe,
  0,
  [_RA, _RIe, _VN, _FP, _SC, _TV, _RAI],
  [0, 0, 1, 0, 64 | 0, 0, 0]
);
export var DeleteRegistrationRequest = struct(n0, _DRR, 0, [_RIe], [0]);
export var DeleteRegistrationResult = struct(
  n0,
  _DRRe,
  0,
  [_RA, _RIe, _RTe, _RS, _CVN, _AVN, _LDVN, _AAd, _CTr],
  [0, 0, 0, 0, 1, 1, 1, 128 | 0, 4]
);
export var DescribeRegistrationFieldValuesRequest = struct(
  n0,
  _DRFVRes,
  0,
  [_RIe, _VN, _SP, _FPi, _NT, _MR],
  [0, 1, 0, 64 | 0, 0, 1]
);
export var DescribeRegistrationFieldValuesResult = struct(
  n0,
  _DRFVResc,
  0,
  [_RA, _RIe, _VN, _RFV, _NT],
  [0, 0, 1, () => RegistrationFieldValueInformationList, 0]
);
export var DescribeRegistrationsRequest = struct(
  n0,
  _DRRes,
  0,
  [_RIeg, _F, _NT, _MR],
  [64 | 0, () => RegistrationFilterList, 0, 1]
);
export var DescribeRegistrationsResult = struct(n0, _DRResc, 0, [_Re, _NT], [() => RegistrationInformationList, 0]);
export var DescribeRegistrationVersionsRequest = struct(
  n0,
  _DRVR,
  0,
  [_RIe, _VNe, _F, _NT, _MR],
  [0, 64 | 1, () => RegistrationVersionFilterList, 0, 1]
);
export var DescribeRegistrationVersionsResult = struct(
  n0,
  _DRVRe,
  0,
  [_RA, _RIe, _RV, _NT],
  [0, 0, () => RegistrationVersionInformationList, 0]
);
export var DiscardRegistrationVersionRequest = struct(n0, _DRVRi, 0, [_RIe], [0]);
export var DiscardRegistrationVersionResult = struct(
  n0,
  _DRVRis,
  0,
  [_RA, _RIe, _VN, _RVS, _RVSH],
  [0, 0, 1, 0, () => RegistrationVersionStatusHistory]
);
export var PutRegistrationFieldValueRequest = struct(n0, _PRFVR, 0, [_RIe, _FP, _SC, _TV, _RAI], [0, 0, 64 | 0, 0, 0]);
export var PutRegistrationFieldValueResult = struct(
  n0,
  _PRFVRu,
  0,
  [_RA, _RIe, _VN, _FP, _SC, _TV, _RAI],
  [0, 0, 1, 0, 64 | 0, 0, 0]
);
export var RegistrationDeniedReasonInformation = struct(n0, _RDRI, 0, [_R, _SDh, _LD, _DT, _DL], [0, 0, 0, 0, 0]);
export var RegistrationFieldValueInformation = struct(n0, _RFVI, 0, [_FP, _SC, _TV, _RAI, _DR], [0, 64 | 0, 0, 0, 0]);
export var RegistrationFilter = struct(n0, _RF, 0, [_N, _Va], [0, 64 | 0]);
export var RegistrationInformation = struct(
  n0,
  _RIegi,
  0,
  [_RA, _RIe, _RTe, _RS, _CVN, _AVN, _LDVN, _AAd, _CTr],
  [0, 0, 0, 0, 1, 1, 1, 128 | 0, 4]
);
export var RegistrationVersionFilter = struct(n0, _RVF, 0, [_N, _Va], [0, 64 | 0]);
export var RegistrationVersionInformation = struct(
  n0,
  _RVI,
  0,
  [_VN, _RVS, _RVSH, _DRe],
  [1, 0, () => RegistrationVersionStatusHistory, () => RegistrationDeniedReasonInformationList]
);
export var RegistrationVersionStatusHistory = struct(
  n0,
  _RVSH,
  0,
  [_DTr, _ST, _RTev, _RAT, _AT, _DTi, _DTe, _RTevo, _ATr],
  [4, 4, 4, 4, 4, 4, 4, 4, 4]
);
export var SubmitRegistrationVersionRequest = struct(n0, _SRVR, 0, [_RIe], [0]);
export var SubmitRegistrationVersionResult = struct(
  n0,
  _SRVRu,
  0,
  [_RA, _RIe, _VN, _RVS, _RVSH],
  [0, 0, 1, 0, () => RegistrationVersionStatusHistory]
);
export var RegistrationDeniedReasonInformationList = list(n0, _RDRIL, 0, () => RegistrationDeniedReasonInformation);
export var RegistrationFieldValueInformationList = list(n0, _RFVIL, 0, () => RegistrationFieldValueInformation);
export var RegistrationFilterList = list(n0, _RFL, 0, () => RegistrationFilter);
export var RegistrationIdList = 64 | 0;

export var RegistrationInformationList = list(n0, _RIL, 0, () => RegistrationInformation);
export var RegistrationVersionFilterList = list(n0, _RVFL, 0, () => RegistrationVersionFilter);
export var RegistrationVersionInformationList = list(n0, _RVIL, 0, () => RegistrationVersionInformation);
export var RegistrationVersionNumberList = 64 | 1;

export var SelectChoiceList = 64 | 0;

export var StringMap = 128 | 0;

export var CreateRegistrationVersion = op(
  n0,
  _CRV,
  0,
  () => CreateRegistrationVersionRequest,
  () => CreateRegistrationVersionResult
);
export var DeleteRegistration = op(
  n0,
  _DRel,
  0,
  () => DeleteRegistrationRequest,
  () => DeleteRegistrationResult
);
export var DeleteRegistrationFieldValue = op(
  n0,
  _DRFV,
  0,
  () => DeleteRegistrationFieldValueRequest,
  () => DeleteRegistrationFieldValueResult
);
export var DescribeRegistrationFieldValues = op(
  n0,
  _DRFVe,
  0,
  () => DescribeRegistrationFieldValuesRequest,
  () => DescribeRegistrationFieldValuesResult
);
export var DescribeRegistrations = op(
  n0,
  _DRes,
  0,
  () => DescribeRegistrationsRequest,
  () => DescribeRegistrationsResult
);
export var DescribeRegistrationVersions = op(
  n0,
  _DRV,
  0,
  () => DescribeRegistrationVersionsRequest,
  () => DescribeRegistrationVersionsResult
);
export var DiscardRegistrationVersion = op(
  n0,
  _DRVi,
  0,
  () => DiscardRegistrationVersionRequest,
  () => DiscardRegistrationVersionResult
);
export var PutRegistrationFieldValue = op(
  n0,
  _PRFV,
  0,
  () => PutRegistrationFieldValueRequest,
  () => PutRegistrationFieldValueResult
);
export var SubmitRegistrationVersion = op(
  n0,
  _SRV,
  0,
  () => SubmitRegistrationVersionRequest,
  () => SubmitRegistrationVersionResult
);
