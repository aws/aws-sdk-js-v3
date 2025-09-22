// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AI,
  _AII,
  _AIp,
  _AMVU,
  _AS,
  _ASM,
  _B,
  _Ce,
  _CJFD,
  _CJFDR,
  _CJFDRr,
  _CNS,
  _CS,
  _CSo,
  _CT,
  _CTo,
  _D,
  _DA,
  _DAS,
  _DASF,
  _DCS,
  _DD,
  _DDe,
  _DDJ,
  _DDJR,
  _DDJRe,
  _DDR,
  _DDRe,
  _DDRes,
  _DDResc,
  _De,
  _Dev,
  _DG,
  _DI,
  _dI,
  _DIe,
  _DJ,
  _DJC,
  _DJe,
  _DJL,
  _DL,
  _DN,
  _Dn,
  _DRCD,
  _DRCDN,
  _DT,
  _E,
  _EP,
  _ES,
  _ESt,
  _ESth,
  _Et,
  _h,
  _HA,
  _hQ,
  _HS,
  _IA,
  _ITN,
  _IV,
  _J,
  _JI,
  _JL,
  _Jo,
  _JT,
  _LAI,
  _LAIR,
  _LAIRi,
  _LAS,
  _LD,
  _LDJ,
  _LDJi,
  _LDJR,
  _LDJRi,
  _LDR,
  _LDRi,
  _LET,
  _LS,
  _LUT,
  _Ma,
  _MR,
  _mR,
  _N,
  _NC,
  _NF,
  _NP,
  _NPt,
  _NS,
  _NSN,
  _NSt,
  _NStp,
  _NT,
  _Nt,
  _nT,
  _OTAJC,
  _PDR,
  _PDr,
  _PDRr,
  _PS,
  _RCS,
  _S,
  _SB,
  _SD,
  _SF,
  _sF,
  _SICI,
  _SN,
  _SO,
  _T,
  _Ty,
  _UDM,
  _UDMR,
  _UDMRp,
  _V,
  n0,
} from "./schemas_0";
import { ReportedRuntimeContextStates } from "./schemas_1_Describe";

/* eslint no-var: 0 */

export var AlternateSoftwareMetadata = struct(n0, _ASM, 0, [_V], [0]);
export var ApplicationInstance = struct(
  n0,
  _AI,
  0,
  [_N, _AII, _DRCD, _DRCDN, _D, _S, _HS, _SD, _CT, _A, _T, _RCS],
  [0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 128 | 0, () => ReportedRuntimeContextStates]
);
export var CreateJobForDevicesRequest = struct(n0, _CJFDR, 0, [_DI, _DJC, _JT], [64 | 0, () => DeviceJobConfig, 0]);
export var CreateJobForDevicesResponse = struct(n0, _CJFDRr, 0, [_J], [() => JobList]);
export var DeleteDeviceRequest = struct(n0, _DDR, 0, [_DIe], [[0, 1]]);
export var DeleteDeviceResponse = struct(n0, _DDRe, 0, [_DIe], [0]);
export var DescribeDeviceJobRequest = struct(n0, _DDJR, 0, [_JI], [[0, 1]]);
export var DescribeDeviceJobResponse = struct(
  n0,
  _DDJRe,
  0,
  [_JI, _DIe, _DA, _DN, _DT, _IV, _S, _CT, _JT],
  [0, 0, 0, 0, 0, 0, 0, 4, 0]
);
export var DescribeDeviceRequest = struct(n0, _DDRes, 0, [_DIe], [[0, 1]]);
export var DescribeDeviceResponse = struct(
  n0,
  _DDResc,
  0,
  [_DIe, _N, _A, _D, _Ty, _DCS, _CT, _PS, _LS, _CS, _SN, _T, _NC, _CNS, _LET, _AS, _LAS, _B, _LDJ, _DAS],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    0,
    0,
    0,
    0,
    128 | 0,
    () => NetworkPayload,
    () => NetworkStatus,
    4,
    () => AlternateSoftwares,
    0,
    0,
    () => LatestDeviceJob,
    0,
  ]
);
export var Device = struct(
  n0,
  _De,
  0,
  [_DIe, _N, _CT, _PS, _LUT, _LET, _B, _CS, _D, _T, _Ty, _LDJ, _DAS],
  [0, 0, 4, 0, 4, 4, 0, 0, 0, 128 | 0, 0, () => LatestDeviceJob, 0]
);
export var DeviceJob = struct(n0, _DJ, 0, [_DN, _DIe, _JI, _CT, _JT], [0, 0, 0, 4, 0]);
export var DeviceJobConfig = struct(n0, _DJC, 0, [_OTAJC], [() => OTAJobConfig]);
export var EthernetPayload = struct(n0, _EP, 0, [_CTo, _SICI], [0, () => StaticIpConnectionInfo]);
export var EthernetStatus = struct(n0, _ES, 0, [_IA, _CSo, _HA], [0, 0, 0]);
export var Job = struct(n0, _Jo, 0, [_JI, _DIe], [0, 0]);
export var LatestDeviceJob = struct(n0, _LDJ, 0, [_IV, _S, _JT], [0, 0, 0]);
export var ListApplicationInstancesRequest = struct(
  n0,
  _LAIR,
  0,
  [_DIe, _SF, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _dI,
      },
    ],
    [
      0,
      {
        [_hQ]: _sF,
      },
    ],
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
export var ListApplicationInstancesResponse = struct(n0, _LAIRi, 0, [_AIp, _NT], [() => ApplicationInstances, 0]);
export var ListDevicesJobsRequest = struct(
  n0,
  _LDJR,
  0,
  [_DIe, _NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _DIe,
      },
    ],
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
export var ListDevicesJobsResponse = struct(n0, _LDJRi, 0, [_DJe, _NT], [() => DeviceJobList, 0]);
export var ListDevicesRequest = struct(
  n0,
  _LDR,
  0,
  [_NT, _MR, _SB, _SO, _NF, _DASF],
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
    [
      0,
      {
        [_hQ]: _SB,
      },
    ],
    [
      0,
      {
        [_hQ]: _SO,
      },
    ],
    [
      0,
      {
        [_hQ]: _NF,
      },
    ],
    [
      0,
      {
        [_hQ]: _DASF,
      },
    ],
  ]
);
export var ListDevicesResponse = struct(n0, _LDRi, 0, [_Dev, _NT], [() => DeviceList, 0]);
export var NetworkPayload = struct(
  n0,
  _NP,
  0,
  [_E, _Et, _Nt],
  [() => EthernetPayload, () => EthernetPayload, () => NtpPayload]
);
export var NetworkStatus = struct(
  n0,
  _NS,
  0,
  [_ESt, _ESth, _NSt, _LUT],
  [() => EthernetStatus, () => EthernetStatus, () => NtpStatus, 4]
);
export var NtpPayload = struct(n0, _NPt, 0, [_NStp], [64 | 0]);
export var NtpStatus = struct(n0, _NSt, 0, [_CSo, _IA, _NSN], [0, 0, 0]);
export var OTAJobConfig = struct(n0, _OTAJC, 0, [_IV, _AMVU], [0, 2]);
export var ProvisionDeviceRequest = struct(n0, _PDR, 0, [_N, _D, _T, _NC], [0, 0, 128 | 0, () => NetworkPayload]);
export var ProvisionDeviceResponse = struct(n0, _PDRr, 0, [_DIe, _A, _S, _Ce, _ITN], [0, 0, 0, 21, 0]);
export var StaticIpConnectionInfo = struct(n0, _SICI, 0, [_IA, _Ma, _Dn, _DG], [0, 0, 64 | 0, 0]);
export var UpdateDeviceMetadataRequest = struct(n0, _UDMR, 0, [_DIe, _D], [[0, 1], 0]);
export var UpdateDeviceMetadataResponse = struct(n0, _UDMRp, 0, [_DIe], [0]);
export var AlternateSoftwares = list(n0, _AS, 0, () => AlternateSoftwareMetadata);
export var ApplicationInstances = list(n0, _AIp, 0, () => ApplicationInstance);
export var DeviceIdList = 64 | 0;

export var DeviceJobList = list(n0, _DJL, 0, () => DeviceJob);
export var DeviceList = list(n0, _DL, 0, () => Device);
export var DnsList = 64 | 0;

export var JobList = list(n0, _JL, 0, () => Job);
export var NtpServerList = 64 | 0;

export var CreateJobForDevices = op(
  n0,
  _CJFD,
  {
    [_h]: ["POST", "/jobs", 200],
  },
  () => CreateJobForDevicesRequest,
  () => CreateJobForDevicesResponse
);
export var DeleteDevice = op(
  n0,
  _DD,
  {
    [_h]: ["DELETE", "/devices/{DeviceId}", 200],
  },
  () => DeleteDeviceRequest,
  () => DeleteDeviceResponse
);
export var DescribeDevice = op(
  n0,
  _DDe,
  {
    [_h]: ["GET", "/devices/{DeviceId}", 200],
  },
  () => DescribeDeviceRequest,
  () => DescribeDeviceResponse
);
export var DescribeDeviceJob = op(
  n0,
  _DDJ,
  {
    [_h]: ["GET", "/jobs/{JobId}", 200],
  },
  () => DescribeDeviceJobRequest,
  () => DescribeDeviceJobResponse
);
export var ListApplicationInstances = op(
  n0,
  _LAI,
  {
    [_h]: ["GET", "/application-instances", 200],
  },
  () => ListApplicationInstancesRequest,
  () => ListApplicationInstancesResponse
);
export var ListDevices = op(
  n0,
  _LD,
  {
    [_h]: ["GET", "/devices", 200],
  },
  () => ListDevicesRequest,
  () => ListDevicesResponse
);
export var ListDevicesJobs = op(
  n0,
  _LDJi,
  {
    [_h]: ["GET", "/jobs", 200],
  },
  () => ListDevicesJobsRequest,
  () => ListDevicesJobsResponse
);
export var ProvisionDevice = op(
  n0,
  _PDr,
  {
    [_h]: ["POST", "/devices", 200],
  },
  () => ProvisionDeviceRequest,
  () => ProvisionDeviceResponse
);
export var UpdateDeviceMetadata = op(
  n0,
  _UDM,
  {
    [_h]: ["PUT", "/devices/{DeviceId}", 200],
  },
  () => UpdateDeviceMetadataRequest,
  () => UpdateDeviceMetadataResponse
);
