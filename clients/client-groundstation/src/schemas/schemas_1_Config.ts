// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _ADDD,
  _aDDD,
  _AGSAE,
  _aGSAE,
  _aR,
  _aS,
  _bA,
  _CD,
  _CDEG,
  _CDEGR,
  _cDo,
  _CDon,
  _cI,
  _cIo,
  _CMP,
  _CMPR,
  _cPPDS,
  _cPPDSo,
  _cS,
  _cTo,
  _D,
  _d,
  _DCes,
  _DCRe,
  _DCRes,
  _DD,
  _dDR,
  _DE,
  _dE,
  _dEGA,
  _dEGI,
  _DEL,
  _DL,
  _dL,
  _dSR,
  _eA,
  _ED,
  _eD,
  _EDL,
  _eDn,
  _eM,
  _en,
  _eT,
  _GDEG,
  _GDEGR,
  _GDEGRe,
  _GMP,
  _GMPR,
  _GMPRe,
  _gS,
  _h,
  _hR,
  _hS,
  _iA,
  _IR,
  _kAA,
  _kAN,
  _KK,
  _kKA,
  _kT,
  _m,
  _ma,
  _mE,
  _mi,
  _mPA,
  _mPI,
  _mVCDS,
  _n,
  _oN,
  _po,
  _pPET,
  _pPST,
  _pR,
  _r,
  _rAo,
  _RCD,
  _RSA,
  _S,
  _s,
  _SA,
  _sA,
  _sAa,
  _SD,
  _sDe,
  _sGI,
  _sIu,
  _sKK,
  _sKR,
  _so,
  _SRD,
  _sRD,
  _sT,
  _t,
  _tCA,
  _UMP,
  _UMPR,
  _vET,
  _vST,
  n0,
} from "./schemas_0";
import { Elevation } from "./schemas_3_List";
import { DataflowEndpointGroupIdResponse } from "./schemas_8_Group";
import { MissionProfileIdResponse } from "./schemas_15_Mission";

/* eslint no-var: 0 */

export var AntennaDemodDecodeDetails = struct(n0, _ADDD, 0, [_oN], [0]);
export var AwsGroundStationAgentEndpoint = struct(
  n0,
  _AGSAE,
  0,
  [_n, _eA, _iA, _aS, _aR],
  [0, () => ConnectionDetails, () => RangedConnectionDetails, 0, 0]
);
export var ConnectionDetails = struct(n0, _CD, 0, [_sA, _m], [() => SocketAddress, 1]);
export var CreateDataflowEndpointGroupRequest = struct(
  n0,
  _CDEGR,
  0,
  [_eD, _t, _cPPDS, _cPPDSo],
  [() => EndpointDetailsList, 128 | 0, 1, 1]
);
export var CreateMissionProfileRequest = struct(
  n0,
  _CMPR,
  0,
  [_n, _cPPDS, _cPPDSo, _mVCDS, _dE, _tCA, _t, _sKK, _sKR],
  [0, 1, 1, 1, list(n0, _DEL, 0, 64 | 0), 0, 128 | 0, () => KmsKey, 0]
);
export var DataflowDetail = struct(n0, _DD, 0, [_so, _d, _eM], [() => Source, () => Destination, 0]);
export var DataflowEndpoint = struct(n0, _DE, 0, [_n, _a, _s, _m], [0, () => SocketAddress, 0, 1]);
export var DescribeContactRequest = struct(n0, _DCRe, 0, [_cI], [[0, 1]]);
export var DescribeContactResponse = struct(
  n0,
  _DCRes,
  0,
  [_cI, _mPA, _sAa, _sT, _eT, _pPST, _pPET, _gS, _cS, _eM, _mE, _t, _r, _dL, _vST, _vET],
  [0, 0, 0, 4, 4, 4, 4, 0, 0, 0, () => Elevation, 128 | 0, 0, () => DataflowList, 4, 4]
);
export var Destination = struct(n0, _D, 0, [_cTo, _cIo, _cDo, _dDR], [0, 0, () => ConfigDetails, 0]);
export var EndpointDetails = struct(
  n0,
  _ED,
  0,
  [_sDe, _en, _aGSAE, _hS, _hR],
  [() => SecurityDetails, () => DataflowEndpoint, () => AwsGroundStationAgentEndpoint, 0, 64 | 0]
);
export var GetDataflowEndpointGroupRequest = struct(n0, _GDEGR, 0, [_dEGI], [[0, 1]]);
export var GetDataflowEndpointGroupResponse = struct(
  n0,
  _GDEGRe,
  0,
  [_dEGI, _dEGA, _eDn, _t, _cPPDS, _cPPDSo],
  [0, 0, () => EndpointDetailsList, 128 | 0, 1, 1]
);
export var GetMissionProfileRequest = struct(n0, _GMPR, 0, [_mPI], [[0, 1]]);
export var GetMissionProfileResponse = struct(
  n0,
  _GMPRe,
  0,
  [_mPI, _mPA, _n, _r, _cPPDS, _cPPDSo, _mVCDS, _dE, _tCA, _t, _sKK, _sKR],
  [0, 0, 0, 0, 1, 1, 1, list(n0, _DEL, 0, 64 | 0), 0, 128 | 0, () => KmsKey, 0]
);
export var IntegerRange = struct(n0, _IR, 0, [_mi, _ma], [1, 1]);
export var RangedConnectionDetails = struct(n0, _RCD, 0, [_sA, _m], [() => RangedSocketAddress, 1]);
export var RangedSocketAddress = struct(n0, _RSA, 0, [_n, _pR], [0, () => IntegerRange]);
export var S3RecordingDetails = struct(n0, _SRD, 0, [_bA, _kT], [0, 0]);
export var SecurityDetails = struct(n0, _SD, 0, [_sIu, _sGI, _rAo], [64 | 0, 64 | 0, 0]);
export var SocketAddress = struct(n0, _SA, 0, [_n, _po], [0, 1]);
export var Source = struct(n0, _S, 0, [_cTo, _cIo, _cDo, _dSR], [0, 0, () => ConfigDetails, 0]);
export var UpdateMissionProfileRequest = struct(
  n0,
  _UMPR,
  0,
  [_mPI, _n, _cPPDS, _cPPDSo, _mVCDS, _dE, _tCA, _sKK, _sKR],
  [[0, 1], 0, 1, 1, 1, list(n0, _DEL, 0, 64 | 0), 0, () => KmsKey, 0]
);
export var CapabilityHealthReasonList = 64 | 0;

export var DataflowEdge = 64 | 0;

export var DataflowEdgeList = list(n0, _DEL, 0, 64 | 0);
export var DataflowList = list(n0, _DL, 0, () => DataflowDetail);
export var EndpointDetailsList = list(n0, _EDL, 0, () => EndpointDetails);
export var SecurityGroupIdList = 64 | 0;

export var SubnetList = 64 | 0;

export var ConfigDetails = uni(
  n0,
  _CDon,
  0,
  [_eD, _aDDD, _sRD],
  [() => EndpointDetails, () => AntennaDemodDecodeDetails, () => S3RecordingDetails]
);
export var KmsKey = uni(n0, _KK, 0, [_kKA, _kAA, _kAN], [0, 0, 0]);
export var CreateDataflowEndpointGroup = op(
  n0,
  _CDEG,
  {
    [_h]: ["POST", "/dataflowEndpointGroup", 200],
  },
  () => CreateDataflowEndpointGroupRequest,
  () => DataflowEndpointGroupIdResponse
);
export var CreateMissionProfile = op(
  n0,
  _CMP,
  {
    [_h]: ["POST", "/missionprofile", 200],
  },
  () => CreateMissionProfileRequest,
  () => MissionProfileIdResponse
);
export var DescribeContact = op(
  n0,
  _DCes,
  {
    [_h]: ["GET", "/contact/{contactId}", 200],
  },
  () => DescribeContactRequest,
  () => DescribeContactResponse
);
export var GetDataflowEndpointGroup = op(
  n0,
  _GDEG,
  {
    [_h]: ["GET", "/dataflowEndpointGroup/{dataflowEndpointGroupId}", 200],
  },
  () => GetDataflowEndpointGroupRequest,
  () => GetDataflowEndpointGroupResponse
);
export var GetMissionProfile = op(
  n0,
  _GMP,
  {
    [_h]: ["GET", "/missionprofile/{missionProfileId}", 200],
  },
  () => GetMissionProfileRequest,
  () => GetMissionProfileResponse
);
export var UpdateMissionProfile = op(
  n0,
  _UMP,
  {
    [_h]: ["PUT", "/missionprofile/{missionProfileId}", 200],
  },
  () => UpdateMissionProfileRequest,
  () => MissionProfileIdResponse
);
