// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _CCS,
  _CCSD,
  _CCSDR,
  _CCSDRr,
  _CCSR,
  _CCSRr,
  _cDu,
  _CI,
  _cI,
  _CIL,
  _cIo,
  _CMo,
  _cNo,
  _Co,
  _co,
  _com,
  _con,
  _cPo,
  _cS,
  _CSD,
  _CSDL,
  _CSDR,
  _CSE,
  _CSECRIPR,
  _CSECRIPRR,
  _CSHCC,
  _CSLE,
  _CSLEL,
  _CSLo,
  _CSLR,
  _cSN,
  _CSo,
  _cSo,
  _CSPD,
  _CSSD,
  _DCI,
  _DCIR,
  _DCIRe,
  _DCS,
  _DCSR,
  _DCSRe,
  _dep,
  _depl,
  _di,
  _eIPR,
  _env,
  _ER,
  _eT,
  _fP,
  _GCI,
  _GCIR,
  _GCIRe,
  _GCL,
  _GCLR,
  _GCLRe,
  _GCS,
  _GCSD,
  _GCSDR,
  _GCSDRe,
  _GCSMD,
  _GCSMDR,
  _GCSMDRe,
  _GCSR,
  _hC,
  _hQ,
  _hT,
  _ht,
  _i,
  _iA,
  _iD,
  _iS,
  _l,
  _la,
  _lE,
  _m,
  _mD,
  _mN,
  _nD,
  _nPT,
  _p,
  _pA,
  _pa,
  _pDN,
  _pDNu,
  _pE,
  _pIo,
  _po,
  _por,
  _PRA,
  _pRA,
  _PRAR,
  _pT,
  _RCI,
  _RCIR,
  _RCIRe,
  _rT,
  _sc,
  _sCu,
  _sD,
  _sN,
  _sT,
  _sta,
  _stat,
  _ta,
  _tS,
  _UCS,
  _UCSR,
  _UCSRp,
  _ur,
  _uT,
  _v,
  n0,
  ResourceLocation,
  TagList,
} from "./schemas_0";
import { MetricDatapointList } from "./schemas_5_Get";

/* eslint no-var: 0 */

export var Container = struct(n0, _Co, 0, [_i, _com, _env, _por], [0, 64 | 0, 128 | 0, 128 | 0]);
export var ContainerImage = struct(n0, _CI, 0, [_i, _di, _cA], [0, 0, 4]);
export var ContainerService = struct(
  n0,
  _CSo,
  0,
  [_cSN, _a, _cA, _l, _rT, _ta, _po, _pIo, _sta, _sD, _sc, _cDu, _nD, _iD, _pA, _pDN, _pDNu, _ur, _pRA],
  [
    0,
    0,
    4,
    () => ResourceLocation,
    0,
    () => TagList,
    0,
    0,
    0,
    () => ContainerServiceStateDetail,
    1,
    () => ContainerServiceDeployment,
    () => ContainerServiceDeployment,
    2,
    0,
    0,
    map(n0, _CSPD, 0, 0, 64 | 0),
    0,
    () => PrivateRegistryAccess,
  ]
);
export var ContainerServiceDeployment = struct(
  n0,
  _CSD,
  0,
  [_v, _sta, _con, _pE, _cA],
  [1, 0, () => ContainerMap, () => ContainerServiceEndpoint, 4]
);
export var ContainerServiceDeploymentRequest = struct(
  n0,
  _CSDR,
  0,
  [_con, _pE],
  [() => ContainerMap, () => EndpointRequest]
);
export var ContainerServiceECRImagePullerRole = struct(n0, _CSECRIPR, 0, [_iA, _pA], [2, 0]);
export var ContainerServiceECRImagePullerRoleRequest = struct(n0, _CSECRIPRR, 0, [_iA], [2]);
export var ContainerServiceEndpoint = struct(
  n0,
  _CSE,
  0,
  [_cNo, _cPo, _hC],
  [0, 1, () => ContainerServiceHealthCheckConfig]
);
export var ContainerServiceHealthCheckConfig = struct(
  n0,
  _CSHCC,
  0,
  [_hT, _uT, _tS, _iS, _pa, _sCu],
  [1, 1, 1, 1, 0, 0]
);
export var ContainerServiceLogEvent = struct(n0, _CSLE, 0, [_cA, _m], [4, 0]);
export var ContainerServicesListResult = struct(n0, _CSLR, 0, [_cS], [() => ContainerServiceList]);
export var ContainerServiceStateDetail = struct(n0, _CSSD, 0, [_co, _m], [0, 0]);
export var CreateContainerServiceDeploymentRequest = struct(
  n0,
  _CCSDR,
  0,
  [_sN, _con, _pE],
  [[0, 1], () => ContainerMap, () => EndpointRequest]
);
export var CreateContainerServiceDeploymentResult = struct(n0, _CCSDRr, 0, [_cSo], [() => ContainerService]);
export var CreateContainerServiceRequest = struct(
  n0,
  _CCSR,
  0,
  [_sN, _po, _sc, _ta, _pDNu, _dep, _pRA],
  [
    0,
    0,
    1,
    () => TagList,
    map(n0, _CSPD, 0, 0, 64 | 0),
    () => ContainerServiceDeploymentRequest,
    () => PrivateRegistryAccessRequest,
  ]
);
export var CreateContainerServiceResult = struct(n0, _CCSRr, 0, [_cSo], [() => ContainerService]);
export var DeleteContainerImageRequest = struct(
  n0,
  _DCIR,
  0,
  [_sN, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteContainerImageResult = struct(n0, _DCIRe, 0, [], []);
export var DeleteContainerServiceRequest = struct(n0, _DCSR, 0, [_sN], [[0, 1]]);
export var DeleteContainerServiceResult = struct(n0, _DCSRe, 0, [], []);
export var EndpointRequest = struct(n0, _ER, 0, [_cNo, _cPo, _hC], [0, 1, () => ContainerServiceHealthCheckConfig]);
export var GetContainerImagesRequest = struct(n0, _GCIR, 0, [_sN], [[0, 1]]);
export var GetContainerImagesResult = struct(n0, _GCIRe, 0, [_cI], [() => ContainerImageList]);
export var GetContainerLogRequest = struct(
  n0,
  _GCLR,
  0,
  [_sN, _cNo, _sT, _eT, _fP, _pT],
  [
    [0, 1],
    [0, 1],
    [
      4,
      {
        [_hQ]: _sT,
      },
    ],
    [
      4,
      {
        [_hQ]: _eT,
      },
    ],
    [
      0,
      {
        [_hQ]: _fP,
      },
    ],
    [
      0,
      {
        [_hQ]: _pT,
      },
    ],
  ]
);
export var GetContainerLogResult = struct(n0, _GCLRe, 0, [_lE, _nPT], [() => ContainerServiceLogEventList, 0]);
export var GetContainerServiceDeploymentsRequest = struct(n0, _GCSDR, 0, [_sN], [[0, 1]]);
export var GetContainerServiceDeploymentsResult = struct(
  n0,
  _GCSDRe,
  0,
  [_depl],
  [() => ContainerServiceDeploymentList]
);
export var GetContainerServiceMetricDataRequest = struct(
  n0,
  _GCSMDR,
  0,
  [_sN, _mN, _sT, _eT, _p, _stat],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _mN,
      },
    ],
    [
      4,
      {
        [_hQ]: _sT,
      },
    ],
    [
      4,
      {
        [_hQ]: _eT,
      },
    ],
    [
      1,
      {
        [_hQ]: _p,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _stat,
      },
    ],
  ]
);
export var GetContainerServiceMetricDataResult = struct(n0, _GCSMDRe, 0, [_mN, _mD], [0, () => MetricDatapointList]);
export var GetContainerServicesRequest = struct(
  n0,
  _GCSR,
  0,
  [_sN],
  [
    [
      0,
      {
        [_hQ]: _sN,
      },
    ],
  ]
);
export var PrivateRegistryAccess = struct(n0, _PRA, 0, [_eIPR], [() => ContainerServiceECRImagePullerRole]);
export var PrivateRegistryAccessRequest = struct(
  n0,
  _PRAR,
  0,
  [_eIPR],
  [() => ContainerServiceECRImagePullerRoleRequest]
);
export var RegisterContainerImageRequest = struct(n0, _RCIR, 0, [_sN, _la, _di], [[0, 1], 0, 0]);
export var RegisterContainerImageResult = struct(n0, _RCIRe, 0, [_cIo], [() => ContainerImage]);
export var UpdateContainerServiceRequest = struct(
  n0,
  _UCSR,
  0,
  [_sN, _po, _sc, _iD, _pDNu, _pRA],
  [[0, 1], 0, 1, 2, map(n0, _CSPD, 0, 0, 64 | 0), () => PrivateRegistryAccessRequest]
);
export var UpdateContainerServiceResult = struct(n0, _UCSRp, 0, [_cSo], [() => ContainerService]);
export var ContainerImageList = list(n0, _CIL, 0, () => ContainerImage);
export var ContainerServiceDeploymentList = list(n0, _CSDL, 0, () => ContainerServiceDeployment);
export var ContainerServiceList = list(n0, _CSLo, 0, () => ContainerService);
export var ContainerServiceLogEventList = list(n0, _CSLEL, 0, () => ContainerServiceLogEvent);
export var ContainerServicePublicDomainsList = 64 | 0;

export var ContainerMap = map(n0, _CMo, 0, 0, () => Container);
export var ContainerServicePublicDomains = map(n0, _CSPD, 0, 0, 64 | 0);
export var Environment = 128 | 0;

export var PortMap = 128 | 0;

export var CreateContainerService = op(
  n0,
  _CCS,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/container-services", 201],
  },
  () => CreateContainerServiceRequest,
  () => CreateContainerServiceResult
);
export var CreateContainerServiceDeployment = op(
  n0,
  _CCSD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/container-services/{serviceName}/deployments", 201],
  },
  () => CreateContainerServiceDeploymentRequest,
  () => CreateContainerServiceDeploymentResult
);
export var DeleteContainerImage = op(
  n0,
  _DCI,
  {
    [_ht]: ["DELETE", "/ls/api/2016-11-28/container-services/{serviceName}/images/{image}", 204],
  },
  () => DeleteContainerImageRequest,
  () => DeleteContainerImageResult
);
export var DeleteContainerService = op(
  n0,
  _DCS,
  {
    [_ht]: ["DELETE", "/ls/api/2016-11-28/container-services/{serviceName}", 204],
  },
  () => DeleteContainerServiceRequest,
  () => DeleteContainerServiceResult
);
export var GetContainerImages = op(
  n0,
  _GCI,
  {
    [_ht]: ["GET", "/ls/api/2016-11-28/container-services/{serviceName}/images", 200],
  },
  () => GetContainerImagesRequest,
  () => GetContainerImagesResult
);
export var GetContainerLog = op(
  n0,
  _GCL,
  {
    [_ht]: ["GET", "/ls/api/2016-11-28/container-services/{serviceName}/containers/{containerName}/log", 200],
  },
  () => GetContainerLogRequest,
  () => GetContainerLogResult
);
export var GetContainerServiceDeployments = op(
  n0,
  _GCSD,
  {
    [_ht]: ["GET", "/ls/api/2016-11-28/container-services/{serviceName}/deployments", 200],
  },
  () => GetContainerServiceDeploymentsRequest,
  () => GetContainerServiceDeploymentsResult
);
export var GetContainerServiceMetricData = op(
  n0,
  _GCSMD,
  {
    [_ht]: ["GET", "/ls/api/2016-11-28/container-services/{serviceName}/metrics", 200],
  },
  () => GetContainerServiceMetricDataRequest,
  () => GetContainerServiceMetricDataResult
);
export var GetContainerServices = op(
  n0,
  _GCS,
  {
    [_ht]: ["GET", "/ls/api/2016-11-28/container-services", 200],
  },
  () => GetContainerServicesRequest,
  () => ContainerServicesListResult
);
export var RegisterContainerImage = op(
  n0,
  _RCI,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/container-services/{serviceName}/images", 200],
  },
  () => RegisterContainerImageRequest,
  () => RegisterContainerImageResult
);
export var UpdateContainerService = op(
  n0,
  _UCS,
  {
    [_ht]: ["PATCH", "/ls/api/2016-11-28/container-services/{serviceName}", 200],
  },
  () => UpdateContainerServiceRequest,
  () => UpdateContainerServiceResult
);
