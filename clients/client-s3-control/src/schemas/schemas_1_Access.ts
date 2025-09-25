// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { NoSuchPublicAccessBlockConfiguration as __NoSuchPublicAccessBlockConfiguration } from "../models/index";
import {
  _A,
  _AED,
  _AI,
  _AO,
  _AP,
  _APA,
  _ARD,
  _ARP,
  _B,
  _BAI,
  _BPA,
  _BPP,
  _C,
  _c,
  _CA,
  _CAP,
  _CAPR,
  _CAPRr,
  _CD,
  _CMRAP,
  _CMRAPI,
  _CMRAPR,
  _CMRAPRr,
  _CT,
  _CTl,
  _De,
  _DMRAPO,
  _DMRAPOR,
  _DMRAPORe,
  _DMRAPR,
  _DSI,
  _DST,
  _e,
  _ED,
  _En,
  _GAP,
  _GAPR,
  _GAPRe,
  _GMRAP,
  _GMRAPR,
  _GMRAPRe,
  _GPAB,
  _GPABO,
  _GPABR,
  _h,
  _hCR,
  _hE,
  _hH,
  _hL,
  _hP,
  _IPA,
  _M,
  _MRAPAR,
  _MRAPD,
  _MRAPR,
  _MRAPRR,
  _MRAPRRL,
  _N,
  _NO,
  _NSPABC,
  _Op,
  _PAB,
  _PABC,
  _PMRAPPR,
  _PPAB,
  _PPABR,
  _R,
  _RCL,
  _RD,
  _Reg,
  _Regi,
  _RI,
  _RP,
  _RPB,
  _RR,
  _RRL,
  _RS,
  _RTARN,
  _S,
  _St,
  _T,
  _VC,
  _xaai,
  _xN,
  n0,
  Unit,
} from "./schemas_0";
import { TagList } from "./schemas_9_Create";
import { DeleteMultiRegionAccessPointInput, PutMultiRegionAccessPointPolicyInput } from "./schemas_14_RegionAccess";
import { Scope } from "./schemas_17_AccessPoint";
import { VpcConfiguration } from "./schemas_18_Access";

/* eslint no-var: 0 */

export var AsyncErrorDetails = struct(n0, _AED, 0, [_C, _M, _R, _RI], [0, 0, 0, 0]);
export var AsyncOperation = struct(
  n0,
  _AO,
  0,
  [_CT, _Op, _RTARN, _RP, _RS, _RD],
  [4, 0, 0, [() => AsyncRequestParameters, 0], 0, [() => AsyncResponseDetails, 0]]
);
export var AsyncRequestParameters = struct(
  n0,
  _ARP,
  0,
  [_CMRAPR, _DMRAPR, _PMRAPPR],
  [
    [() => CreateMultiRegionAccessPointInput, 0],
    () => DeleteMultiRegionAccessPointInput,
    () => PutMultiRegionAccessPointPolicyInput,
  ]
);
export var AsyncResponseDetails = struct(
  n0,
  _ARD,
  0,
  [_MRAPD, _ED],
  [[() => MultiRegionAccessPointsAsyncResponse, 0], () => AsyncErrorDetails]
);
export var CreateAccessPointRequest = struct(
  n0,
  _CAPR,
  0,
  [_AI, _N, _B, _VC, _PABC, _BAI, _S, _T],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
    0,
    () => VpcConfiguration,
    [() => PublicAccessBlockConfiguration, 0],
    0,
    [() => Scope, 0],
    [() => TagList, 0],
  ]
);
export var CreateAccessPointResult = struct(n0, _CAPRr, 0, [_APA, _A], [0, 0]);
export var CreateMultiRegionAccessPointInput = struct(
  n0,
  _CMRAPI,
  0,
  [_N, _PAB, _Reg],
  [0, [() => PublicAccessBlockConfiguration, 0], [() => RegionCreationList, 0]]
);
export var CreateMultiRegionAccessPointRequest = struct(
  n0,
  _CMRAPR,
  0,
  [_AI, _CTl, _De],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 4],
    [() => CreateMultiRegionAccessPointInput, 0],
  ]
);
export var CreateMultiRegionAccessPointResult = struct(n0, _CMRAPRr, 0, [_RTARN], [0]);
export var DescribeMultiRegionAccessPointOperationRequest = struct(
  n0,
  _DMRAPOR,
  0,
  [_AI, _RTARN],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var DescribeMultiRegionAccessPointOperationResult = struct(n0, _DMRAPORe, 0, [_AO], [[() => AsyncOperation, 0]]);
export var GetAccessPointRequest = struct(
  n0,
  _GAPR,
  0,
  [_AI, _N],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var GetAccessPointResult = struct(
  n0,
  _GAPRe,
  0,
  [_N, _B, _NO, _VC, _PABC, _CD, _A, _APA, _En, _BAI, _DSI, _DST],
  [0, 0, 0, () => VpcConfiguration, [() => PublicAccessBlockConfiguration, 0], 4, 0, 0, 128 | 0, 0, 0, 0]
);
export var GetMultiRegionAccessPointRequest = struct(
  n0,
  _GMRAPR,
  0,
  [_AI, _N],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var GetMultiRegionAccessPointResult = struct(n0, _GMRAPRe, 0, [_AP], [[() => MultiRegionAccessPointReport, 0]]);
export var GetPublicAccessBlockOutput = struct(n0, _GPABO, 0, [_PABC], [[() => PublicAccessBlockConfiguration, 16]]);
export var GetPublicAccessBlockRequest = struct(
  n0,
  _GPABR,
  0,
  [_AI],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
  ]
);
export var MultiRegionAccessPointRegionalResponse = struct(n0, _MRAPRR, 0, [_N, _RS], [0, 0]);
export var MultiRegionAccessPointReport = struct(
  n0,
  _MRAPR,
  0,
  [_N, _A, _CA, _PAB, _St, _Reg],
  [0, 0, 4, [() => PublicAccessBlockConfiguration, 0], 0, [() => RegionReportList, 0]]
);
export var MultiRegionAccessPointsAsyncResponse = struct(
  n0,
  _MRAPAR,
  0,
  [_Reg],
  [[() => MultiRegionAccessPointRegionalResponseList, 0]]
);
export var NoSuchPublicAccessBlockConfiguration = error(
  n0,
  _NSPABC,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NoSuchPublicAccessBlockConfiguration
);
export var PublicAccessBlockConfiguration = struct(
  n0,
  _PABC,
  0,
  [_BPA, _IPA, _BPP, _RPB],
  [
    [
      2,
      {
        [_xN]: _BPA,
      },
    ],
    [
      2,
      {
        [_xN]: _IPA,
      },
    ],
    [
      2,
      {
        [_xN]: _BPP,
      },
    ],
    [
      2,
      {
        [_xN]: _RPB,
      },
    ],
  ]
);
export var PutPublicAccessBlockRequest = struct(
  n0,
  _PPABR,
  0,
  [_PABC, _AI],
  [
    [
      () => PublicAccessBlockConfiguration,
      {
        [_xN]: _PABC,
        [_hP]: 1,
      },
    ],
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
  ]
);
export var Region = struct(n0, _Regi, 0, [_B, _BAI], [0, 0]);
export var RegionReport = struct(n0, _RR, 0, [_B, _Regi, _BAI], [0, 0, 0]);
export var MultiRegionAccessPointRegionalResponseList = list(n0, _MRAPRRL, 0, [
  () => MultiRegionAccessPointRegionalResponse,
  {
    [_xN]: _Regi,
  },
]);
export var RegionCreationList = list(n0, _RCL, 0, [
  () => Region,
  {
    [_xN]: _Regi,
  },
]);
export var RegionReportList = list(n0, _RRL, 0, [
  () => RegionReport,
  {
    [_xN]: _Regi,
  },
]);
export var Endpoints = 128 | 0;

export var CreateAccessPoint = op(
  n0,
  _CAP,
  {
    [_h]: ["PUT", "/v20180820/accesspoint/{Name}", 200],
  },
  () => CreateAccessPointRequest,
  () => CreateAccessPointResult
);
export var CreateMultiRegionAccessPoint = op(
  n0,
  _CMRAP,
  {
    [_h]: ["POST", "/v20180820/async-requests/mrap/create", 200],
    [_hCR]: 1,
  },
  () => CreateMultiRegionAccessPointRequest,
  () => CreateMultiRegionAccessPointResult
);
export var DescribeMultiRegionAccessPointOperation = op(
  n0,
  _DMRAPO,
  {
    [_h]: ["GET", "/v20180820/async-requests/mrap/{RequestTokenARN+}", 200],
    [_hCR]: 1,
  },
  () => DescribeMultiRegionAccessPointOperationRequest,
  () => DescribeMultiRegionAccessPointOperationResult
);
export var GetAccessPoint = op(
  n0,
  _GAP,
  {
    [_h]: ["GET", "/v20180820/accesspoint/{Name}", 200],
  },
  () => GetAccessPointRequest,
  () => GetAccessPointResult
);
export var GetMultiRegionAccessPoint = op(
  n0,
  _GMRAP,
  {
    [_h]: ["GET", "/v20180820/mrap/instances/{Name+}", 200],
    [_hCR]: 1,
  },
  () => GetMultiRegionAccessPointRequest,
  () => GetMultiRegionAccessPointResult
);
export var GetPublicAccessBlock = op(
  n0,
  _GPAB,
  {
    [_h]: ["GET", "/v20180820/configuration/publicAccessBlock", 200],
  },
  () => GetPublicAccessBlockRequest,
  () => GetPublicAccessBlockOutput
);
export var PutPublicAccessBlock = op(
  n0,
  _PPAB,
  {
    [_h]: ["PUT", "/v20180820/configuration/publicAccessBlock", 200],
  },
  () => PutPublicAccessBlockRequest,
  () => Unit
);
