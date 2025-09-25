// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _a,
  _ADE,
  _c,
  _CC,
  _CCI,
  _CCO,
  _CE,
  _CL,
  _cl,
  _CS,
  _cT,
  _ct,
  _cTr,
  _DC,
  _DCI,
  _DCO,
  _dPE,
  _e,
  _ED,
  _eD,
  _eS,
  _eT,
  _fL,
  _GC,
  _GCI,
  _GCO,
  _GVESN,
  _GVESNI,
  _GVESNO,
  _h,
  _hE,
  _hH,
  _hQ,
  _i,
  _ISE,
  _iT,
  _kEK,
  _kKA,
  _LC,
  _LCI,
  _LCO,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _m,
  _mR,
  _mr,
  _MRP,
  _mRP,
  _n,
  _nT,
  _nt,
  _qC,
  _r,
  _RA,
  _rA,
  _rAS,
  _rI,
  _RNFE,
  _rT,
  _s,
  _sC,
  _se,
  _sN,
  _SQEE,
  _t,
  _TE,
  _tK,
  _TR,
  _TRI,
  _UC,
  _UCI,
  _UCO,
  _UR,
  _URI,
  _VE,
  _VEF,
  _VEFL,
  _wR,
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
  [_m],
  [0],

  __AccessDeniedException
);
export var ClusterSummary = struct(n0, _CS, 0, [_i, _a], [0, 0]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ConflictException
);
export var CreateClusterInput = struct(
  n0,
  _CCI,
  0,
  [_dPE, _kEK, _t, _cT, _mRP],
  [2, 0, 128 | 0, [0, 4], () => MultiRegionProperties]
);
export var CreateClusterOutput = struct(
  n0,
  _CCO,
  0,
  [_i, _a, _s, _cTr, _mRP, _eD, _dPE],
  [0, 0, 0, 4, () => MultiRegionProperties, () => EncryptionDetails, 2]
);
export var DeleteClusterInput = struct(
  n0,
  _DCI,
  0,
  [_i, _cT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _ct,
      },
    ],
  ]
);
export var DeleteClusterOutput = struct(n0, _DCO, 0, [_i, _a, _s, _cTr], [0, 0, 0, 4]);
export var EncryptionDetails = struct(n0, _ED, 0, [_eT, _kKA, _eS], [0, 0, 0]);
export var GetClusterInput = struct(n0, _GCI, 0, [_i], [[0, 1]]);
export var GetClusterOutput = struct(
  n0,
  _GCO,
  0,
  [_i, _a, _s, _cTr, _dPE, _mRP, _t, _eD],
  [0, 0, 0, 4, 2, () => MultiRegionProperties, 128 | 0, () => EncryptionDetails]
);
export var GetVpcEndpointServiceNameInput = struct(n0, _GVESNI, 0, [_i], [[0, 1]]);
export var GetVpcEndpointServiceNameOutput = struct(n0, _GVESNO, 0, [_sN], [0]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m, _rAS],
  [
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],

  __InternalServerException
);
export var ListClustersInput = struct(
  n0,
  _LCI,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListClustersOutput = struct(n0, _LCO, 0, [_nT, _cl], [0, () => ClusterList]);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_t], [128 | 0]);
export var MultiRegionProperties = struct(n0, _MRP, 0, [_wR, _cl], [0, 64 | 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ResourceNotFoundException
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var TagResourceInput = struct(n0, _TRI, 0, [_rA, _t], [[0, 1], 128 | 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m, _sC, _qC, _rAS],
  [
    0,
    0,
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],

  __ThrottlingException
);
export var UntagResourceInput = struct(
  n0,
  _URI,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UpdateClusterInput = struct(
  n0,
  _UCI,
  0,
  [_i, _dPE, _kEK, _cT, _mRP],
  [[0, 1], 2, 0, [0, 4], () => MultiRegionProperties]
);
export var UpdateClusterOutput = struct(n0, _UCO, 0, [_i, _a, _s, _cTr], [0, 0, 0, 4]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_n, _m], [0, 0]);
export var Unit = "unit" as const;

export var ClusterArnList = 64 | 0;

export var ClusterList = list(n0, _CL, 0, () => ClusterSummary);
export var TagKeyList = 64 | 0;

export var ValidationExceptionFieldList = list(n0, _VEFL, 0, () => ValidationExceptionField);
export var TagMap = 128 | 0;

export var CreateCluster = op(
  n0,
  _CC,
  {
    [_h]: ["POST", "/cluster", 200],
  },
  () => CreateClusterInput,
  () => CreateClusterOutput
);
export var DeleteCluster = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/cluster/{identifier}", 200],
  },
  () => DeleteClusterInput,
  () => DeleteClusterOutput
);
export var GetCluster = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/cluster/{identifier}", 200],
  },
  () => GetClusterInput,
  () => GetClusterOutput
);
export var GetVpcEndpointServiceName = op(
  n0,
  _GVESN,
  {
    [_h]: ["GET", "/clusters/{identifier}/vpc-endpoint-service-name", 200],
  },
  () => GetVpcEndpointServiceNameInput,
  () => GetVpcEndpointServiceNameOutput
);
export var ListClusters = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/cluster", 200],
  },
  () => ListClustersInput,
  () => ListClustersOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceInput,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceInput,
  () => Unit
);
export var UpdateCluster = op(
  n0,
  _UC,
  {
    [_h]: ["POST", "/cluster/{identifier}", 200],
  },
  () => UpdateClusterInput,
  () => UpdateClusterOutput
);
