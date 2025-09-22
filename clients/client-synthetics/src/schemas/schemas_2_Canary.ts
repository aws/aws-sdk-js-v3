// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  RequestEntityTooLargeException as __RequestEntityTooLargeException,
} from "../models/index";
import {
  _AC,
  _ACI,
  _ACO,
  _ADE,
  _ASL,
  _AT,
  _BC,
  _BCr,
  _BCRI,
  _BS,
  _BSa,
  _BT,
  _C,
  _c,
  _Ca,
  _CC,
  _CCI,
  _CCO,
  _CCR,
  _CCRr,
  _CDRCO,
  _CLR,
  _CLRa,
  _CN,
  _Co,
  _Com,
  _CR,
  _Cr,
  _CRa,
  _CRCI,
  _CRCO,
  _CRS,
  _CRT,
  _CS,
  _CSI,
  _CSO,
  _CT,
  _D,
  _DC,
  _DCe,
  _DCLR,
  _DCLRR,
  _DCLRRe,
  _DCR,
  _DCRe,
  _DCRes,
  _DCResc,
  _De,
  _DIS,
  _DL,
  _dL,
  _DRC,
  _DRCO,
  _DRI,
  _dRI,
  _E,
  _e,
  _EA,
  _EC,
  _ECn,
  _EM,
  _ERA,
  _ES,
  _EV,
  _FRPID,
  _GC,
  _GCR,
  _GCRe,
  _GCRet,
  _GCRR,
  _GCRRe,
  _H,
  _h,
  _hE,
  _hQ,
  _I,
  _IAFDS,
  _IC,
  _KKA,
  _LDRES,
  _LM,
  _LR,
  _LS,
  _LSa,
  _M,
  _MIMB,
  _MR,
  _MRa,
  _MTFRAR,
  _N,
  _Na,
  _NT,
  _PRC,
  _R,
  _RAe,
  _RC,
  _RCe,
  _RCI,
  _RCO,
  _RETLE,
  _RT,
  _RTRT,
  _RV,
  _S,
  _SB,
  _SC,
  _SCDR,
  _SCDRR,
  _SCDRRt,
  _SCR,
  _SCRt,
  _SCRto,
  _SCRtop,
  _SCt,
  _SE,
  _SEC,
  _SGI,
  _SI,
  _SK,
  _SLA,
  _SN,
  _SR,
  _SRC,
  _SRI,
  _SRPID,
  _St,
  _Sta,
  _Star,
  _SV,
  _T,
  _Ta,
  _TIS,
  _TR,
  _Ty,
  _UC,
  _UCR,
  _UCRp,
  _VC,
  _VCI,
  _VCO,
  _VI,
  _VR,
  _VRI,
  _VRi,
  _VRO,
  _VROi,
  _ZF,
  n0,
} from "./schemas_0";

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
export var ArtifactConfigInput = struct(n0, _ACI, 0, [_SE], [() => S3EncryptionConfig]);
export var ArtifactConfigOutput = struct(n0, _ACO, 0, [_SE], [() => S3EncryptionConfig]);
export var BaseScreenshot = struct(n0, _BS, 0, [_SN, _IC], [0, 64 | 0]);
export var BrowserConfig = struct(n0, _BC, 0, [_BT], [0]);
export var Canary = struct(
  n0,
  _C,
  0,
  [
    _I,
    _N,
    _Co,
    _ERA,
    _S,
    _RC,
    _SRPID,
    _FRPID,
    _St,
    _T,
    _ASL,
    _EA,
    _RV,
    _VC,
    _VR,
    _PRC,
    _BCr,
    _EC,
    _VRi,
    _Ta,
    _AC,
    _DRC,
  ],
  [
    0,
    0,
    () => CanaryCodeOutput,
    0,
    () => CanaryScheduleOutput,
    () => CanaryRunConfigOutput,
    1,
    1,
    () => CanaryStatus,
    () => CanaryTimeline,
    0,
    0,
    0,
    () => VpcConfigOutput,
    () => VisualReferenceOutput,
    0,
    () => BrowserConfigs,
    () => EngineConfigs,
    () => VisualReferencesOutput,
    128 | 0,
    () => ArtifactConfigOutput,
    () => DryRunConfigOutput,
  ]
);
export var CanaryCodeInput = struct(n0, _CCI, 0, [_SB, _SK, _SV, _ZF, _H, _D], [0, 0, 0, 21, 0, () => Dependencies]);
export var CanaryCodeOutput = struct(n0, _CCO, 0, [_SLA, _H, _D], [0, 0, () => Dependencies]);
export var CanaryDryRunConfigOutput = struct(n0, _CDRCO, 0, [_DRI], [0]);
export var CanaryLastRun = struct(n0, _CLR, 0, [_CN, _LR], [0, () => CanaryRun]);
export var CanaryRun = struct(
  n0,
  _CR,
  0,
  [_I, _SRI, _RAe, _N, _St, _T, _ASL, _DRC, _BT],
  [0, 0, 1, 0, () => CanaryRunStatus, () => CanaryRunTimeline, 0, () => CanaryDryRunConfigOutput, 0]
);
export var CanaryRunConfigInput = struct(n0, _CRCI, 0, [_TIS, _MIMB, _AT, _EV, _ES], [1, 1, 2, 128 | 0, 1]);
export var CanaryRunConfigOutput = struct(n0, _CRCO, 0, [_TIS, _MIMB, _AT, _ES], [1, 1, 2, 1]);
export var CanaryRunStatus = struct(n0, _CRS, 0, [_Sta, _SR, _SRC, _TR], [0, 0, 0, 0]);
export var CanaryRunTimeline = struct(n0, _CRT, 0, [_Star, _Com, _MTFRAR], [4, 4, 4]);
export var CanaryScheduleInput = struct(n0, _CSI, 0, [_E, _DIS, _RCe], [0, 1, () => RetryConfigInput]);
export var CanaryScheduleOutput = struct(n0, _CSO, 0, [_E, _DIS, _RCe], [0, 1, () => RetryConfigOutput]);
export var CanaryStatus = struct(n0, _CS, 0, [_Sta, _SR, _SRC], [0, 0, 0]);
export var CanaryTimeline = struct(n0, _CT, 0, [_Cr, _LM, _LS, _LSa], [4, 4, 4, 4]);
export var CreateCanaryRequest = struct(
  n0,
  _CCR,
  0,
  [_N, _Co, _ASL, _ERA, _S, _RC, _SRPID, _FRPID, _RV, _VC, _RTRT, _PRC, _BCr, _Ta, _AC],
  [
    0,
    () => CanaryCodeInput,
    0,
    0,
    () => CanaryScheduleInput,
    () => CanaryRunConfigInput,
    1,
    1,
    0,
    () => VpcConfigInput,
    64 | 0,
    0,
    () => BrowserConfigs,
    128 | 0,
    () => ArtifactConfigInput,
  ]
);
export var CreateCanaryResponse = struct(n0, _CCRr, 0, [_C], [() => Canary]);
export var DeleteCanaryRequest = struct(
  n0,
  _DCR,
  0,
  [_N, _DL],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _dL,
      },
    ],
  ]
);
export var DeleteCanaryResponse = struct(n0, _DCRe, 0, [], []);
export var Dependency = struct(n0, _De, 0, [_Ty, _R], [0, 0]);
export var DescribeCanariesLastRunRequest = struct(n0, _DCLRR, 0, [_NT, _MR, _Na, _BT], [0, 1, 64 | 0, 0]);
export var DescribeCanariesLastRunResponse = struct(n0, _DCLRRe, 0, [_CLRa, _NT], [() => CanariesLastRun, 0]);
export var DescribeCanariesRequest = struct(n0, _DCRes, 0, [_NT, _MR, _Na], [0, 1, 64 | 0]);
export var DescribeCanariesResponse = struct(n0, _DCResc, 0, [_Ca, _NT], [() => Canaries, 0]);
export var DryRunConfigOutput = struct(n0, _DRCO, 0, [_DRI, _LDRES], [0, 0]);
export var EngineConfig = struct(n0, _ECn, 0, [_EA, _BT], [0, 0]);
export var GetCanaryRequest = struct(
  n0,
  _GCR,
  0,
  [_N, _DRI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dRI,
      },
    ],
  ]
);
export var GetCanaryResponse = struct(n0, _GCRe, 0, [_C], [() => Canary]);
export var GetCanaryRunsRequest = struct(n0, _GCRR, 0, [_N, _NT, _MR, _DRI, _RT], [[0, 1], 0, 1, 0, 0]);
export var GetCanaryRunsResponse = struct(n0, _GCRRe, 0, [_CRa, _NT], [() => CanaryRuns, 0]);
export var RequestEntityTooLargeException = error(
  n0,
  _RETLE,
  {
    [_e]: _c,
    [_hE]: 413,
  },
  [_M],
  [0],

  __RequestEntityTooLargeException
);
export var RetryConfigInput = struct(n0, _RCI, 0, [_MRa], [1]);
export var RetryConfigOutput = struct(n0, _RCO, 0, [_MRa], [1]);
export var S3EncryptionConfig = struct(n0, _SEC, 0, [_EM, _KKA], [0, 0]);
export var StartCanaryDryRunRequest = struct(
  n0,
  _SCDRR,
  0,
  [_N, _Co, _RV, _RC, _VC, _ERA, _SRPID, _FRPID, _VR, _ASL, _AC, _PRC, _BCr, _VRi],
  [
    [0, 1],
    () => CanaryCodeInput,
    0,
    () => CanaryRunConfigInput,
    () => VpcConfigInput,
    0,
    1,
    1,
    () => VisualReferenceInput,
    0,
    () => ArtifactConfigInput,
    0,
    () => BrowserConfigs,
    () => VisualReferences,
  ]
);
export var StartCanaryDryRunResponse = struct(n0, _SCDRRt, 0, [_DRC], [() => DryRunConfigOutput]);
export var StartCanaryRequest = struct(n0, _SCR, 0, [_N], [[0, 1]]);
export var StartCanaryResponse = struct(n0, _SCRt, 0, [], []);
export var StopCanaryRequest = struct(n0, _SCRto, 0, [_N], [[0, 1]]);
export var StopCanaryResponse = struct(n0, _SCRtop, 0, [], []);
export var UpdateCanaryRequest = struct(
  n0,
  _UCR,
  0,
  [_N, _Co, _ERA, _RV, _S, _RC, _SRPID, _FRPID, _VC, _VR, _ASL, _AC, _PRC, _DRI, _VRi, _BCr],
  [
    [0, 1],
    () => CanaryCodeInput,
    0,
    0,
    () => CanaryScheduleInput,
    () => CanaryRunConfigInput,
    1,
    1,
    () => VpcConfigInput,
    () => VisualReferenceInput,
    0,
    () => ArtifactConfigInput,
    0,
    0,
    () => VisualReferences,
    () => BrowserConfigs,
  ]
);
export var UpdateCanaryResponse = struct(n0, _UCRp, 0, [], []);
export var VisualReferenceInput = struct(n0, _VRI, 0, [_BSa, _BCRI, _BT], [() => BaseScreenshots, 0, 0]);
export var VisualReferenceOutput = struct(n0, _VRO, 0, [_BSa, _BCRI, _BT], [() => BaseScreenshots, 0, 0]);
export var VpcConfigInput = struct(n0, _VCI, 0, [_SI, _SGI, _IAFDS], [64 | 0, 64 | 0, 2]);
export var VpcConfigOutput = struct(n0, _VCO, 0, [_VI, _SI, _SGI, _IAFDS], [0, 64 | 0, 64 | 0, 2]);
export var Unit = "unit" as const;

export var BaseScreenshotIgnoreCoordinates = 64 | 0;

export var BaseScreenshots = list(n0, _BSa, 0, () => BaseScreenshot);
export var BrowserConfigs = list(n0, _BCr, 0, () => BrowserConfig);
export var Canaries = list(n0, _Ca, 0, () => Canary);
export var CanariesLastRun = list(n0, _CLRa, 0, () => CanaryLastRun);
export var CanaryRuns = list(n0, _CRa, 0, () => CanaryRun);
export var Dependencies = list(n0, _D, 0, () => Dependency);
export var DescribeCanariesLastRunNameFilter = 64 | 0;

export var DescribeCanariesNameFilter = 64 | 0;

export var EngineConfigs = list(n0, _EC, 0, () => EngineConfig);
export var ResourceList = 64 | 0;

export var SecurityGroupIds = 64 | 0;

export var SubnetIds = 64 | 0;

export var VisualReferences = list(n0, _VRi, 0, () => VisualReferenceInput);
export var VisualReferencesOutput = list(n0, _VROi, 0, () => VisualReferenceOutput);
export var EnvironmentVariablesMap = 128 | 0;

export var CreateCanary = op(
  n0,
  _CC,
  {
    [_h]: ["POST", "/canary", 200],
  },
  () => CreateCanaryRequest,
  () => CreateCanaryResponse
);
export var DeleteCanary = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/canary/{Name}", 200],
  },
  () => DeleteCanaryRequest,
  () => DeleteCanaryResponse
);
export var DescribeCanaries = op(
  n0,
  _DCe,
  {
    [_h]: ["POST", "/canaries", 200],
  },
  () => DescribeCanariesRequest,
  () => DescribeCanariesResponse
);
export var DescribeCanariesLastRun = op(
  n0,
  _DCLR,
  {
    [_h]: ["POST", "/canaries/last-run", 200],
  },
  () => DescribeCanariesLastRunRequest,
  () => DescribeCanariesLastRunResponse
);
export var GetCanary = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/canary/{Name}", 200],
  },
  () => GetCanaryRequest,
  () => GetCanaryResponse
);
export var GetCanaryRuns = op(
  n0,
  _GCRet,
  {
    [_h]: ["POST", "/canary/{Name}/runs", 200],
  },
  () => GetCanaryRunsRequest,
  () => GetCanaryRunsResponse
);
export var StartCanary = op(
  n0,
  _SC,
  {
    [_h]: ["POST", "/canary/{Name}/start", 200],
  },
  () => StartCanaryRequest,
  () => StartCanaryResponse
);
export var StartCanaryDryRun = op(
  n0,
  _SCDR,
  {
    [_h]: ["POST", "/canary/{Name}/dry-run/start", 200],
  },
  () => StartCanaryDryRunRequest,
  () => StartCanaryDryRunResponse
);
export var StopCanary = op(
  n0,
  _SCt,
  {
    [_h]: ["POST", "/canary/{Name}/stop", 200],
  },
  () => StopCanaryRequest,
  () => StopCanaryResponse
);
export var UpdateCanary = op(
  n0,
  _UC,
  {
    [_h]: ["PATCH", "/canary/{Name}", 200],
  },
  () => UpdateCanaryRequest,
  () => UpdateCanaryResponse
);
