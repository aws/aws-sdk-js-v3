// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import { ResourceLimitExceededException as __ResourceLimitExceededException } from "../models/index";
import {
  _ADC,
  _aDC,
  _ADDDC,
  _aDDDC,
  _aI,
  _AS,
  _aSg,
  _au,
  _AUC,
  _aUC,
  _aUCA,
  _b,
  _bA,
  _ba,
  _bR,
  _bS,
  _c,
  _cA,
  _cAo,
  _CCr,
  _CCRr,
  _cD,
  _CE,
  _CER,
  _cF,
  _cIo,
  _CSD,
  _CSL,
  _cSo,
  _cT,
  _CTD,
  _cTo,
  _cTr,
  _DC,
  _dC,
  _DCe,
  _dCe,
  _DEC,
  _dEC,
  _DEes,
  _dEN,
  _dER,
  _DERe,
  _DERes,
  _dI,
  _E,
  _e,
  _EDp,
  _eDp,
  _EDph,
  _EI,
  _eI,
  _EL,
  _eMR,
  _ep,
  _eph,
  _er,
  _eT,
  _ETD,
  _eTx,
  _F,
  _FB,
  _GC,
  _GCR,
  _GCRe,
  _GMU,
  _GMUR,
  _GMURe,
  _h,
  _hE,
  _hQ,
  _iR,
  _iRMC,
  _k,
  _kKA,
  _LE,
  _LER,
  _LERi,
  _me,
  _mo,
  _mR,
  _n,
  _nT,
  _o,
  _oD,
  _OEME,
  _p,
  _pD,
  _pN,
  _pol,
  _pr,
  _rAo,
  _RLEE,
  _s,
  _SC,
  _sC,
  _sD,
  _sI,
  _sL,
  _sM,
  _SO,
  _sO,
  _SRC,
  _sRC,
  _sSO,
  _sT,
  _t,
  _TC,
  _tC,
  _tD,
  _tDl,
  _tE,
  _tI,
  _tL,
  _tl,
  _TLED,
  _TLEDL,
  _TLEE,
  _tLl,
  _TR,
  _tRMA,
  _tSM,
  _u,
  _UAS,
  _UASR,
  _UASRp,
  _UC,
  _UCR,
  _UE,
  _UEC,
  _uEC,
  _UER,
  _uJSON,
  _uMS,
  _USC,
  _va,
  _ve,
  _vTR,
  _y,
  n0,
} from "./schemas_0";
import { ConfigIdResponse } from "./schemas_13_Config";
import { EphemerisIdResponse } from "./schemas_14_Ephemeris";

/* eslint no-var: 0 */

export var AggregateStatus = struct(n0, _AS, 0, [_s, _sM], [0, 128 | 2]);
export var AntennaDownlinkConfig = struct(n0, _ADC, 0, [_sC], [() => SpectrumConfig]);
export var AntennaDownlinkDemodDecodeConfig = struct(
  n0,
  _ADDDC,
  0,
  [_sC, _dC, _dCe],
  [() => SpectrumConfig, () => DemodulationConfig, () => DecodeConfig]
);
export var AntennaUplinkConfig = struct(n0, _AUC, 0, [_tD, _sC, _tE], [2, () => UplinkSpectrumConfig, () => Eirp]);
export var ComponentStatusData = struct(n0, _CSD, 0, [_cT, _cA, _s, _bS, _bR, _pD, _dI], [0, 0, 0, 1, 1, 1, 0]);
export var CreateConfigRequest = struct(n0, _CCRr, 0, [_n, _cD, _t], [0, () => ConfigTypeData, 128 | 0]);
export var CreateEphemerisRequest = struct(
  n0,
  _CER,
  0,
  [_sI, _e, _p, _eTx, _n, _kKA, _ep, _t],
  [0, 2, 1, 4, 0, 0, () => EphemerisData, 128 | 0]
);
export var DataflowEndpointConfig = struct(n0, _DEC, 0, [_dEN, _dER], [0, 0]);
export var DecodeConfig = struct(n0, _DC, 0, [_uJSON], [0]);
export var DemodulationConfig = struct(n0, _DCe, 0, [_uJSON], [0]);
export var DescribeEphemerisRequest = struct(n0, _DERe, 0, [_eI], [[0, 1]]);
export var DescribeEphemerisResponse = struct(
  n0,
  _DERes,
  0,
  [_eI, _sI, _s, _p, _cTr, _e, _n, _t, _sD, _iR],
  [0, 0, 0, 1, 4, 2, 0, 128 | 0, () => EphemerisTypeDescription, 0]
);
export var Eirp = struct(n0, _E, 0, [_va, _u], [1, 0]);
export var EphemerisDescription = struct(n0, _EDp, 0, [_sSO, _eDp], [() => S3Object, 0]);
export var EphemerisItem = struct(n0, _EI, 0, [_eI, _s, _p, _e, _cTr, _n, _sSO], [0, 0, 1, 2, 4, 0, () => S3Object]);
export var Frequency = struct(n0, _F, 0, [_va, _u], [1, 0]);
export var FrequencyBandwidth = struct(n0, _FB, 0, [_va, _u], [1, 0]);
export var GetConfigRequest = struct(
  n0,
  _GCR,
  0,
  [_cIo, _cTo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetConfigResponse = struct(
  n0,
  _GCRe,
  0,
  [_cIo, _cAo, _n, _cTo, _cD, _t],
  [0, 0, 0, 0, () => ConfigTypeData, 128 | 0]
);
export var GetMinuteUsageRequest = struct(n0, _GMUR, 0, [_mo, _y], [1, 1]);
export var GetMinuteUsageResponse = struct(n0, _GMURe, 0, [_iRMC, _tRMA, _uMS, _tSM, _eMR], [2, 1, 1, 1, 1]);
export var ListEphemeridesRequest = struct(
  n0,
  _LER,
  0,
  [_sI, _sT, _eT, _sL, _mR, _nT],
  [
    0,
    4,
    4,
    64 | 0,
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListEphemeridesResponse = struct(n0, _LERi, 0, [_nT, _eph], [0, () => EphemeridesList]);
export var OEMEphemeris = struct(n0, _OEME, 0, [_sO, _oD], [() => S3Object, 0]);
export var ResourceLimitExceededException = error(
  n0,
  _RLEE,
  {
    [_er]: _c,
    [_hE]: 429,
  },
  [_me, _pN],
  [0, 0],

  __ResourceLimitExceededException
);
export var S3Object = struct(n0, _SO, 0, [_b, _k, _ve], [0, 0, 0]);
export var S3RecordingConfig = struct(n0, _SRC, 0, [_bA, _rAo, _pr], [0, 0, 0]);
export var SpectrumConfig = struct(n0, _SC, 0, [_cF, _ba, _pol], [() => Frequency, () => FrequencyBandwidth, 0]);
export var TimeRange = struct(n0, _TR, 0, [_sT, _eT], [4, 4]);
export var TLEData = struct(n0, _TLED, 0, [_tL, _tLl, _vTR], [0, 0, () => TimeRange]);
export var TLEEphemeris = struct(n0, _TLEE, 0, [_sO, _tDl], [() => S3Object, () => TLEDataList]);
export var TrackingConfig = struct(n0, _TC, 0, [_au], [0]);
export var UpdateAgentStatusRequest = struct(
  n0,
  _UASR,
  0,
  [_aI, _tI, _aSg, _cSo],
  [[0, 1], 0, () => AggregateStatus, () => ComponentStatusList]
);
export var UpdateAgentStatusResponse = struct(n0, _UASRp, 0, [_aI], [0]);
export var UpdateConfigRequest = struct(n0, _UCR, 0, [_cIo, _n, _cTo, _cD], [[0, 1], 0, [0, 1], () => ConfigTypeData]);
export var UpdateEphemerisRequest = struct(n0, _UER, 0, [_eI, _e, _n, _p], [[0, 1], 2, 0, 1]);
export var UplinkEchoConfig = struct(n0, _UEC, 0, [_e, _aUCA], [2, 0]);
export var UplinkSpectrumConfig = struct(n0, _USC, 0, [_cF, _pol], [() => Frequency, 0]);
export var ComponentStatusList = list(n0, _CSL, 0, () => ComponentStatusData);
export var EphemeridesList = list(n0, _EL, 0, () => EphemerisItem);
export var EphemerisStatusList = 64 | 0;

export var TLEDataList = list(n0, _TLEDL, 0, () => TLEData);
export var SignatureMap = 128 | 2;

export var ConfigTypeData = uni(
  n0,
  _CTD,
  0,
  [_aDC, _tC, _dEC, _aDDDC, _aUC, _uEC, _sRC],
  [
    () => AntennaDownlinkConfig,
    () => TrackingConfig,
    () => DataflowEndpointConfig,
    () => AntennaDownlinkDemodDecodeConfig,
    () => AntennaUplinkConfig,
    () => UplinkEchoConfig,
    () => S3RecordingConfig,
  ]
);
export var EphemerisData = uni(n0, _EDph, 0, [_tl, _o], [() => TLEEphemeris, () => OEMEphemeris]);
export var EphemerisTypeDescription = uni(
  n0,
  _ETD,
  0,
  [_tl, _o],
  [() => EphemerisDescription, () => EphemerisDescription]
);
export var CreateConfig = op(
  n0,
  _CCr,
  {
    [_h]: ["POST", "/config", 200],
  },
  () => CreateConfigRequest,
  () => ConfigIdResponse
);
export var CreateEphemeris = op(
  n0,
  _CE,
  {
    [_h]: ["POST", "/ephemeris", 200],
  },
  () => CreateEphemerisRequest,
  () => EphemerisIdResponse
);
export var DescribeEphemeris = op(
  n0,
  _DEes,
  {
    [_h]: ["GET", "/ephemeris/{ephemerisId}", 200],
  },
  () => DescribeEphemerisRequest,
  () => DescribeEphemerisResponse
);
export var GetConfig = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/config/{configType}/{configId}", 200],
  },
  () => GetConfigRequest,
  () => GetConfigResponse
);
export var GetMinuteUsage = op(
  n0,
  _GMU,
  {
    [_h]: ["POST", "/minute-usage", 200],
  },
  () => GetMinuteUsageRequest,
  () => GetMinuteUsageResponse
);
export var ListEphemerides = op(
  n0,
  _LE,
  {
    [_h]: ["POST", "/ephemerides", 200],
  },
  () => ListEphemeridesRequest,
  () => ListEphemeridesResponse
);
export var UpdateAgentStatus = op(
  n0,
  _UAS,
  {
    [_h]: ["PUT", "/agent/{agentId}", 200],
  },
  () => UpdateAgentStatusRequest,
  () => UpdateAgentStatusResponse
);
export var UpdateConfig = op(
  n0,
  _UC,
  {
    [_h]: ["PUT", "/config/{configType}/{configId}", 200],
  },
  () => UpdateConfigRequest,
  () => ConfigIdResponse
);
export var UpdateEphemeris = op(
  n0,
  _UE,
  {
    [_h]: ["PUT", "/ephemeris/{ephemerisId}", 200],
  },
  () => UpdateEphemerisRequest,
  () => EphemerisIdResponse
);
