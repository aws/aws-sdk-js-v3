// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _AII,
  _AN,
  _BN,
  _C,
  _ca,
  _CNFTJ,
  _CNFTJR,
  _CNFTJRr,
  _CPIJ,
  _CPIJR,
  _CPIJRr,
  _CSu,
  _CT,
  _CTl,
  _D,
  _DNe,
  _DNFTJ,
  _DNFTJR,
  _DNFTJRe,
  _DNR,
  _DNRe,
  _DPIJ,
  _DPIJR,
  _DPIJRe,
  _DPV,
  _DPVe,
  _DPVR,
  _DPVRe,
  _DPVRes,
  _DPVResc,
  _DV,
  _h,
  _hQ,
  _I,
  _IC,
  _ILP,
  _IPL,
  _JI,
  _JRT,
  _JT,
  _JTL,
  _JTo,
  _LAID,
  _LAIDR,
  _LAIDRi,
  _LAINI,
  _LAINIR,
  _LAINIRi,
  _LN,
  _LNR,
  _LNRi,
  _LUT,
  _MC,
  _ML,
  _MR,
  _mR,
  _N,
  _ND,
  _NI,
  _NII,
  _NIo,
  _NIod,
  _NIode,
  _NIP,
  _NL,
  _NN,
  _No,
  _Nod,
  _NOP,
  _NT,
  _nT,
  _O,
  _OA,
  _oA,
  _OC,
  _OK,
  _OPL,
  _OPN,
  _OPSL,
  _OPV,
  _OSL,
  _Ou,
  _PA,
  _PI,
  _PIJIC,
  _PIJO,
  _PIJOC,
  _PN,
  _pN,
  _PO,
  _POa,
  _PPV,
  _PV,
  _pV,
  _PVa,
  _pVa,
  _PVIC,
  _PVOC,
  _R,
  _RPV,
  _RPVR,
  _RPVRe,
  _RT,
  _RTe,
  _S,
  _SD,
  _SLo,
  _SM,
  _T,
  _TP,
  _TPM,
  _TT,
  _TV,
  _Ty,
  _ULPV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var TemplateValue = sim(n0, _TV, 0, 8);
export var CreateNodeFromTemplateJobRequest = struct(
  n0,
  _CNFTJR,
  0,
  [_TT, _OPN, _OPV, _NN, _ND, _TP, _JTo],
  [0, 0, 0, 0, 0, [() => TemplateParametersMap, 0], () => JobTagsList]
);
export var CreateNodeFromTemplateJobResponse = struct(n0, _CNFTJRr, 0, [_JI], [0]);
export var CreatePackageImportJobRequest = struct(
  n0,
  _CPIJR,
  0,
  [_JT, _IC, _OC, _CTl, _JTo],
  [0, () => PackageImportJobInputConfig, () => PackageImportJobOutputConfig, 0, () => JobTagsList]
);
export var CreatePackageImportJobResponse = struct(n0, _CPIJRr, 0, [_JI], [0]);
export var DeregisterPackageVersionRequest = struct(
  n0,
  _DPVR,
  0,
  [_OA, _PI, _PV, _PVa, _ULPV],
  [
    [
      0,
      {
        [_hQ]: _OA,
      },
    ],
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _ULPV,
      },
    ],
  ]
);
export var DeregisterPackageVersionResponse = struct(n0, _DPVRe, 0, [], []);
export var DescribeNodeFromTemplateJobRequest = struct(n0, _DNFTJR, 0, [_JI], [[0, 1]]);
export var DescribeNodeFromTemplateJobResponse = struct(
  n0,
  _DNFTJRe,
  0,
  [_JI, _S, _SM, _CT, _LUT, _OPN, _OPV, _NN, _ND, _TT, _TP, _JTo],
  [0, 0, 0, 4, 4, 0, 0, 0, 0, 0, [() => TemplateParametersMap, 0], () => JobTagsList]
);
export var DescribeNodeRequest = struct(
  n0,
  _DNR,
  0,
  [_NI, _OA],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _OA,
      },
    ],
  ]
);
export var DescribeNodeResponse = struct(
  n0,
  _DNRe,
  0,
  [_NI, _N, _C, _OA, _PN, _PI, _PA, _PV, _PVa, _NIo, _AN, _D, _CT, _LUT],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, () => NodeInterface, 0, 0, 4, 4]
);
export var DescribePackageImportJobRequest = struct(n0, _DPIJR, 0, [_JI], [[0, 1]]);
export var DescribePackageImportJobResponse = struct(
  n0,
  _DPIJRe,
  0,
  [_JI, _CTl, _JT, _IC, _OC, _O, _CT, _LUT, _S, _SM, _JTo],
  [
    0,
    0,
    0,
    () => PackageImportJobInputConfig,
    () => PackageImportJobOutputConfig,
    () => PackageImportJobOutput,
    4,
    4,
    0,
    0,
    () => JobTagsList,
  ]
);
export var DescribePackageVersionRequest = struct(
  n0,
  _DPVRes,
  0,
  [_OA, _PI, _PV, _PVa],
  [
    [
      0,
      {
        [_hQ]: _OA,
      },
    ],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _PVa,
      },
    ],
  ]
);
export var DescribePackageVersionResponse = struct(
  n0,
  _DPVResc,
  0,
  [_OA, _PI, _PA, _PN, _PV, _PVa, _ILP, _S, _SD, _RTe],
  [0, 0, 0, 0, 0, 0, 2, 0, 0, 4]
);
export var JobResourceTags = struct(n0, _JRT, 0, [_RT, _T], [0, 128 | 0]);
export var ListApplicationInstanceDependenciesRequest = struct(
  n0,
  _LAIDR,
  0,
  [_AII, _MR, _NT],
  [
    [0, 1],
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
export var ListApplicationInstanceDependenciesResponse = struct(n0, _LAIDRi, 0, [_PO, _NT], [() => PackageObjects, 0]);
export var ListApplicationInstanceNodeInstancesRequest = struct(
  n0,
  _LAINIR,
  0,
  [_AII, _MR, _NT],
  [
    [0, 1],
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
export var ListApplicationInstanceNodeInstancesResponse = struct(
  n0,
  _LAINIRi,
  0,
  [_NIod, _NT],
  [() => NodeInstances, 0]
);
export var ListNodesRequest = struct(
  n0,
  _LNR,
  0,
  [_C, _OA, _PN, _PV, _PVa, _NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _ca,
      },
    ],
    [
      0,
      {
        [_hQ]: _oA,
      },
    ],
    [
      0,
      {
        [_hQ]: _pN,
      },
    ],
    [
      0,
      {
        [_hQ]: _pV,
      },
    ],
    [
      0,
      {
        [_hQ]: _pVa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListNodesResponse = struct(n0, _LNRi, 0, [_No, _NT], [() => NodesList, 0]);
export var Node = struct(
  n0,
  _Nod,
  0,
  [_NI, _N, _C, _OA, _PN, _PI, _PA, _PV, _PVa, _D, _CT],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4]
);
export var NodeInputPort = struct(n0, _NIP, 0, [_N, _D, _Ty, _DV, _MC], [0, 0, 0, 0, 1]);
export var NodeInstance = struct(n0, _NIode, 0, [_NII, _NI, _PN, _PV, _PPV, _NN, _CSu], [0, 0, 0, 0, 0, 0, 0]);
export var NodeInterface = struct(n0, _NIo, 0, [_I, _Ou], [() => InputPortList, () => OutputPortList]);
export var NodeOutputPort = struct(n0, _NOP, 0, [_N, _D, _Ty], [0, 0, 0]);
export var OutPutS3Location = struct(n0, _OPSL, 0, [_BN, _OK], [0, 0]);
export var PackageImportJobInputConfig = struct(n0, _PIJIC, 0, [_PVIC], [() => PackageVersionInputConfig]);
export var PackageImportJobOutput = struct(n0, _PIJO, 0, [_PI, _PV, _PVa, _OSL], [0, 0, 0, () => OutPutS3Location]);
export var PackageImportJobOutputConfig = struct(n0, _PIJOC, 0, [_PVOC], [() => PackageVersionOutputConfig]);
export var PackageObject = struct(n0, _POa, 0, [_N, _PV, _PVa], [0, 0, 0]);
export var PackageVersionInputConfig = struct(n0, _PVIC, 0, [_SLo], [() => S3Location]);
export var PackageVersionOutputConfig = struct(n0, _PVOC, 0, [_PN, _PV, _ML], [0, 0, 2]);
export var RegisterPackageVersionRequest = struct(
  n0,
  _RPVR,
  0,
  [_OA, _PI, _PV, _PVa, _ML],
  [0, [0, 1], [0, 1], [0, 1], 2]
);
export var RegisterPackageVersionResponse = struct(n0, _RPVRe, 0, [], []);
export var S3Location = struct(n0, _SLo, 0, [_R, _BN, _OK], [0, 0, 0]);
export var InputPortList = list(n0, _IPL, 0, () => NodeInputPort);
export var JobTagsList = list(n0, _JTL, 0, () => JobResourceTags);
export var NodeInstances = list(n0, _NIod, 0, () => NodeInstance);
export var NodesList = list(n0, _NL, 0, () => Node);
export var OutputPortList = list(n0, _OPL, 0, () => NodeOutputPort);
export var PackageObjects = list(n0, _PO, 0, () => PackageObject);
export var TemplateParametersMap = map(n0, _TPM, 0, [0, 0], [() => TemplateValue, 0]);
export var CreateNodeFromTemplateJob = op(
  n0,
  _CNFTJ,
  {
    [_h]: ["POST", "/packages/template-job", 200],
  },
  () => CreateNodeFromTemplateJobRequest,
  () => CreateNodeFromTemplateJobResponse
);
export var CreatePackageImportJob = op(
  n0,
  _CPIJ,
  {
    [_h]: ["POST", "/packages/import-jobs", 200],
  },
  () => CreatePackageImportJobRequest,
  () => CreatePackageImportJobResponse
);
export var DeregisterPackageVersion = op(
  n0,
  _DPV,
  {
    [_h]: ["DELETE", "/packages/{PackageId}/versions/{PackageVersion}/patch/{PatchVersion}", 200],
  },
  () => DeregisterPackageVersionRequest,
  () => DeregisterPackageVersionResponse
);
export var DescribeNode = op(
  n0,
  _DNe,
  {
    [_h]: ["GET", "/nodes/{NodeId}", 200],
  },
  () => DescribeNodeRequest,
  () => DescribeNodeResponse
);
export var DescribeNodeFromTemplateJob = op(
  n0,
  _DNFTJ,
  {
    [_h]: ["GET", "/packages/template-job/{JobId}", 200],
  },
  () => DescribeNodeFromTemplateJobRequest,
  () => DescribeNodeFromTemplateJobResponse
);
export var DescribePackageImportJob = op(
  n0,
  _DPIJ,
  {
    [_h]: ["GET", "/packages/import-jobs/{JobId}", 200],
  },
  () => DescribePackageImportJobRequest,
  () => DescribePackageImportJobResponse
);
export var DescribePackageVersion = op(
  n0,
  _DPVe,
  {
    [_h]: ["GET", "/packages/metadata/{PackageId}/versions/{PackageVersion}", 200],
  },
  () => DescribePackageVersionRequest,
  () => DescribePackageVersionResponse
);
export var ListApplicationInstanceDependencies = op(
  n0,
  _LAID,
  {
    [_h]: ["GET", "/application-instances/{ApplicationInstanceId}/package-dependencies", 200],
  },
  () => ListApplicationInstanceDependenciesRequest,
  () => ListApplicationInstanceDependenciesResponse
);
export var ListApplicationInstanceNodeInstances = op(
  n0,
  _LAINI,
  {
    [_h]: ["GET", "/application-instances/{ApplicationInstanceId}/node-instances", 200],
  },
  () => ListApplicationInstanceNodeInstancesRequest,
  () => ListApplicationInstanceNodeInstancesResponse
);
export var ListNodes = op(
  n0,
  _LN,
  {
    [_h]: ["GET", "/nodes", 200],
  },
  () => ListNodesRequest,
  () => ListNodesResponse
);
export var RegisterPackageVersion = op(
  n0,
  _RPV,
  {
    [_h]: ["PUT", "/packages/{PackageId}/versions/{PackageVersion}/patch/{PatchVersion}", 200],
  },
  () => RegisterPackageVersionRequest,
  () => RegisterPackageVersionResponse
);
