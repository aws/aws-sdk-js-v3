// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aPFN,
  _cA,
  _ca,
  _cl,
  _CSNI,
  _CSNII,
  _CSNIO,
  _d,
  _de,
  _dR,
  _dr,
  _DSNI,
  _DSNII,
  _e,
  _EI,
  _fI,
  _GSFI,
  _GSFII,
  _GSFIM,
  _GSFIO,
  _GSIVI,
  _GSNI,
  _GSNII,
  _GSNIM,
  _GSNIO,
  _GSNO,
  _GSNOI,
  _GSNOM,
  _GSNOO,
  _GSNOTD,
  _GSNOTL,
  _GSVI,
  _GSVRI,
  _GSVRIL,
  _GSVRIM,
  _h,
  _hC,
  _hQ,
  _i,
  _IM,
  _iM,
  _iS,
  _ISNI,
  _ISNII,
  _ISNIO,
  _iVI,
  _lM,
  _LOI,
  _lOI,
  _lOT,
  _LSFI,
  _LSFII,
  _LSFIIi,
  _LSFIM,
  _LSFIO,
  _LSFIR,
  _LSNI,
  _LSNII,
  _LSNIIi,
  _LSNIM,
  _LSNIO,
  _LSNIR,
  _LSNO,
  _LSNOI,
  _LSNOIi,
  _LSNOM,
  _LSNOO,
  _LSNOR,
  _me,
  _mR,
  _mr,
  _mVID,
  _MVIM,
  _mVIM,
  _nD,
  _nG,
  _nI,
  _nID,
  _nIe,
  _nII,
  _nIIs,
  _nIN,
  _nLOOI,
  _nN,
  _nO,
  _nom,
  _nS,
  _nT,
  _oSpe,
  _PD,
  _t,
  _ta,
  _tC,
  _tED,
  _tET,
  _ti,
  _tN,
  _tS,
  _TSNI,
  _TSNII,
  _TSNIO,
  _tST,
  _uN,
  _UNM,
  _uNM,
  _USNI,
  _USNII,
  _USNIO,
  _USNM,
  _USNSD,
  _uT,
  _vCP,
  _vI,
  _vII,
  _vP,
  _vPI,
  _vPN,
  _vPNn,
  _vRI,
  _vS,
  _vV,
  n0,
  TagMap,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSolNetworkInstanceInput = struct(n0, _CSNII, 0, [_nII, _nN, _nD, _t], [0, 0, 0, [() => TagMap, 0]]);
export var CreateSolNetworkInstanceOutput = struct(
  n0,
  _CSNIO,
  0,
  [_i, _a, _nII, _nIN, _t],
  [0, 0, 0, 0, [() => TagMap, 0]]
);
export var DeleteSolNetworkInstanceInput = struct(n0, _DSNII, 0, [_nIIs], [[0, 1]]);
export var ErrorInfo = struct(n0, _EI, 0, [_ca, _d], [0, 0]);
export var GetSolFunctionInstanceInput = struct(n0, _GSFII, 0, [_vII], [[0, 1]]);
export var GetSolFunctionInstanceMetadata = struct(n0, _GSFIM, 0, [_cA, _lM], [5, 5]);
export var GetSolFunctionInstanceOutput = struct(
  n0,
  _GSFIO,
  0,
  [_i, _a, _nIIs, _vPI, _vI, _vP, _vPN, _vV, _iS, _iVI, _me, _t],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, () => GetSolVnfInfo, () => GetSolFunctionInstanceMetadata, [() => TagMap, 0]]
);
export var GetSolInstantiatedVnfInfo = struct(n0, _GSIVI, 0, [_vS], [0]);
export var GetSolNetworkInstanceInput = struct(n0, _GSNII, 0, [_nIIs], [[0, 1]]);
export var GetSolNetworkInstanceMetadata = struct(n0, _GSNIM, 0, [_cA, _lM], [5, 5]);
export var GetSolNetworkInstanceOutput = struct(
  n0,
  _GSNIO,
  0,
  [_i, _a, _nIN, _nID, _nI, _nII, _nS, _lOI, _me, _t],
  [0, 0, 0, 0, 0, 0, 0, () => LcmOperationInfo, () => GetSolNetworkInstanceMetadata, [() => TagMap, 0]]
);
export var GetSolNetworkOperationInput = struct(n0, _GSNOI, 0, [_nLOOI], [[0, 1]]);
export var GetSolNetworkOperationMetadata = struct(
  n0,
  _GSNOM,
  0,
  [_uNM, _mVIM, _iM, _cA, _lM],
  [() => UpdateNsMetadata, () => ModifyVnfInfoMetadata, () => InstantiateMetadata, 5, 5]
);
export var GetSolNetworkOperationOutput = struct(
  n0,
  _GSNOO,
  0,
  [_i, _a, _oSpe, _nIIs, _lOT, _uT, _e, _me, _ta, _t],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => ProblemDetails,
    () => GetSolNetworkOperationMetadata,
    () => GetSolNetworkOperationTasksList,
    [() => TagMap, 0],
  ]
);
export var GetSolNetworkOperationTaskDetails = struct(
  n0,
  _GSNOTD,
  0,
  [_tN, _tC, _tED, _tS, _tST, _tET],
  [0, 128 | 0, () => ErrorInfo, 0, 5, 5]
);
export var GetSolVnfcResourceInfo = struct(n0, _GSVRI, 0, [_me], [() => GetSolVnfcResourceInfoMetadata]);
export var GetSolVnfcResourceInfoMetadata = struct(n0, _GSVRIM, 0, [_nG, _cl, _hC], [0, 0, 0]);
export var GetSolVnfInfo = struct(n0, _GSVI, 0, [_vS, _vRI], [0, () => GetSolVnfcResourceInfoList]);
export var InstantiateMetadata = struct(n0, _IM, 0, [_nII, _aPFN], [0, 15]);
export var InstantiateSolNetworkInstanceInput = struct(
  n0,
  _ISNII,
  0,
  [_nIIs, _dR, _aPFN, _t],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _dr,
      },
    ],
    15,
    [() => TagMap, 0],
  ]
);
export var InstantiateSolNetworkInstanceOutput = struct(n0, _ISNIO, 0, [_nLOOI, _t], [0, [() => TagMap, 0]]);
export var LcmOperationInfo = struct(n0, _LOI, 0, [_nLOOI], [0]);
export var ListSolFunctionInstanceInfo = struct(
  n0,
  _LSFII,
  0,
  [_i, _a, _nIIs, _vPI, _vPNn, _iS, _iVI, _me],
  [0, 0, 0, 0, 0, 0, () => GetSolInstantiatedVnfInfo, () => ListSolFunctionInstanceMetadata]
);
export var ListSolFunctionInstanceMetadata = struct(n0, _LSFIM, 0, [_cA, _lM], [5, 5]);
export var ListSolFunctionInstancesInput = struct(
  n0,
  _LSFIIi,
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
        [_hQ]: _nom,
      },
    ],
  ]
);
export var ListSolFunctionInstancesOutput = struct(
  n0,
  _LSFIO,
  0,
  [_nT, _fI],
  [0, () => ListSolFunctionInstanceResources]
);
export var ListSolNetworkInstanceInfo = struct(
  n0,
  _LSNII,
  0,
  [_i, _a, _nIN, _nID, _nI, _nII, _nS, _me],
  [0, 0, 0, 0, 0, 0, 0, () => ListSolNetworkInstanceMetadata]
);
export var ListSolNetworkInstanceMetadata = struct(n0, _LSNIM, 0, [_cA, _lM], [5, 5]);
export var ListSolNetworkInstancesInput = struct(
  n0,
  _LSNIIi,
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
        [_hQ]: _nom,
      },
    ],
  ]
);
export var ListSolNetworkInstancesOutput = struct(
  n0,
  _LSNIO,
  0,
  [_nT, _nIe],
  [0, () => ListSolNetworkInstanceResources]
);
export var ListSolNetworkOperationsInfo = struct(
  n0,
  _LSNOI,
  0,
  [_i, _a, _oSpe, _nIIs, _lOT, _uT, _e, _me],
  [0, 0, 0, 0, 0, 0, () => ProblemDetails, () => ListSolNetworkOperationsMetadata]
);
export var ListSolNetworkOperationsInput = struct(
  n0,
  _LSNOIi,
  0,
  [_nIIs, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _nIIs,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nom,
      },
    ],
  ]
);
export var ListSolNetworkOperationsMetadata = struct(n0, _LSNOM, 0, [_nII, _vII, _cA, _lM], [0, 0, 5, 5]);
export var ListSolNetworkOperationsOutput = struct(
  n0,
  _LSNOO,
  0,
  [_nT, _nO],
  [0, () => ListSolNetworkOperationsResources]
);
export var ModifyVnfInfoMetadata = struct(n0, _MVIM, 0, [_vII, _vCP], [0, 15]);
export var ProblemDetails = struct(n0, _PD, 0, [_de, _ti], [0, 0]);
export var TerminateSolNetworkInstanceInput = struct(
  n0,
  _TSNII,
  0,
  [_nIIs, _t],
  [
    [0, 1],
    [() => TagMap, 0],
  ]
);
export var TerminateSolNetworkInstanceOutput = struct(n0, _TSNIO, 0, [_nLOOI, _t], [0, [() => TagMap, 0]]);
export var UpdateNsMetadata = struct(n0, _UNM, 0, [_nII, _aPFN], [0, 15]);
export var UpdateSolNetworkInstanceInput = struct(
  n0,
  _USNII,
  0,
  [_nIIs, _uT, _mVID, _uN, _t],
  [[0, 1], 0, () => UpdateSolNetworkModify, () => UpdateSolNetworkServiceData, [() => TagMap, 0]]
);
export var UpdateSolNetworkInstanceOutput = struct(n0, _USNIO, 0, [_nLOOI, _t], [0, [() => TagMap, 0]]);
export var UpdateSolNetworkModify = struct(n0, _USNM, 0, [_vII, _vCP], [0, 15]);
export var UpdateSolNetworkServiceData = struct(n0, _USNSD, 0, [_nII, _aPFN], [0, 15]);
export var GetSolNetworkOperationTasksList = list(n0, _GSNOTL, 0, () => GetSolNetworkOperationTaskDetails);
export var GetSolVnfcResourceInfoList = list(n0, _GSVRIL, 0, () => GetSolVnfcResourceInfo);
export var ListSolFunctionInstanceResources = list(n0, _LSFIR, 0, () => ListSolFunctionInstanceInfo);
export var ListSolNetworkInstanceResources = list(n0, _LSNIR, 0, () => ListSolNetworkInstanceInfo);
export var ListSolNetworkOperationsResources = list(n0, _LSNOR, 0, () => ListSolNetworkOperationsInfo);
export var StringMap = 128 | 0;

export var CreateSolNetworkInstance = op(
  n0,
  _CSNI,
  {
    [_h]: ["POST", "/sol/nslcm/v1/ns_instances", 201],
  },
  () => CreateSolNetworkInstanceInput,
  () => CreateSolNetworkInstanceOutput
);
export var DeleteSolNetworkInstance = op(
  n0,
  _DSNI,
  {
    [_h]: ["DELETE", "/sol/nslcm/v1/ns_instances/{nsInstanceId}", 204],
  },
  () => DeleteSolNetworkInstanceInput,
  () => Unit
);
export var GetSolFunctionInstance = op(
  n0,
  _GSFI,
  {
    [_h]: ["GET", "/sol/vnflcm/v1/vnf_instances/{vnfInstanceId}", 200],
  },
  () => GetSolFunctionInstanceInput,
  () => GetSolFunctionInstanceOutput
);
export var GetSolNetworkInstance = op(
  n0,
  _GSNI,
  {
    [_h]: ["GET", "/sol/nslcm/v1/ns_instances/{nsInstanceId}", 200],
  },
  () => GetSolNetworkInstanceInput,
  () => GetSolNetworkInstanceOutput
);
export var GetSolNetworkOperation = op(
  n0,
  _GSNO,
  {
    [_h]: ["GET", "/sol/nslcm/v1/ns_lcm_op_occs/{nsLcmOpOccId}", 200],
  },
  () => GetSolNetworkOperationInput,
  () => GetSolNetworkOperationOutput
);
export var InstantiateSolNetworkInstance = op(
  n0,
  _ISNI,
  {
    [_h]: ["POST", "/sol/nslcm/v1/ns_instances/{nsInstanceId}/instantiate", 201],
  },
  () => InstantiateSolNetworkInstanceInput,
  () => InstantiateSolNetworkInstanceOutput
);
export var ListSolFunctionInstances = op(
  n0,
  _LSFI,
  {
    [_h]: ["GET", "/sol/vnflcm/v1/vnf_instances", 200],
  },
  () => ListSolFunctionInstancesInput,
  () => ListSolFunctionInstancesOutput
);
export var ListSolNetworkInstances = op(
  n0,
  _LSNI,
  {
    [_h]: ["GET", "/sol/nslcm/v1/ns_instances", 200],
  },
  () => ListSolNetworkInstancesInput,
  () => ListSolNetworkInstancesOutput
);
export var ListSolNetworkOperations = op(
  n0,
  _LSNO,
  {
    [_h]: ["GET", "/sol/nslcm/v1/ns_lcm_op_occs", 200],
  },
  () => ListSolNetworkOperationsInput,
  () => ListSolNetworkOperationsOutput
);
export var TerminateSolNetworkInstance = op(
  n0,
  _TSNI,
  {
    [_h]: ["POST", "/sol/nslcm/v1/ns_instances/{nsInstanceId}/terminate", 201],
  },
  () => TerminateSolNetworkInstanceInput,
  () => TerminateSolNetworkInstanceOutput
);
export var UpdateSolNetworkInstance = op(
  n0,
  _USNI,
  {
    [_h]: ["POST", "/sol/nslcm/v1/ns_instances/{nsInstanceId}/update", 201],
  },
  () => UpdateSolNetworkInstanceInput,
  () => UpdateSolNetworkInstanceOutput
);
