// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aB,
  _at,
  _BCV,
  _BCVR,
  _BCVRa,
  _CC,
  _CCR,
  _CCRr,
  _CDM,
  _CDMR,
  _CDMRr,
  _CF,
  _CFR,
  _CFRr,
  _CMM,
  _CMMR,
  _CMMRr,
  _cod,
  _com,
  _cS,
  _CSC,
  _CSCR,
  _CSCRr,
  _CST,
  _CSTR,
  _CSTRr,
  _CV,
  _CVE,
  _cVE,
  _CVR,
  _cVR,
  _CVRI,
  _cVRI,
  _CVRIr,
  _CVRr,
  _d,
  _dDC,
  _dED,
  _dFUS,
  _dMA,
  _dMi,
  _dP,
  _er,
  _eT,
  _fI,
  _FV,
  _hQ,
  _ht,
  _i,
  _ISC,
  _ISCR,
  _ISCRm,
  _K,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _mED,
  _mMA,
  _n,
  _nIe,
  _no,
  _p,
  _pTCD,
  _rAe,
  _RARN,
  _sCA,
  _sD,
  _sMp,
  _sT,
  _sTC,
  _sTF,
  _sTP,
  _sTt,
  _T,
  _t,
  _Ta,
  _tA,
  _tAh,
  _TL,
  _TRa,
  _TRR,
  _TRRa,
  _V,
  _v,
  _vJ,
  _vN,
  _vs,
  n0,
} from "./schemas_0";
import { SignalDecoders } from "./schemas_1_Manifest";
import { StateTemplateAssociations } from "./schemas_2_Vehicle";
import { NetworkInterfaces } from "./schemas_3_DecoderManifest";
import {
  CollectionScheme,
  DataDestinationConfigs,
  DataExtraDimensionNodePathList,
  DataPartitions,
  Nodes,
  SignalFetchInformationList,
  SignalInformationList,
} from "./schemas_7_Update";

/* eslint no-var: 0 */

export var BatchCreateVehicleRequest = struct(n0, _BCVR, 0, [_v], [() => createVehicleRequestItems]);
export var BatchCreateVehicleResponse = struct(
  n0,
  _BCVRa,
  0,
  [_v, _er],
  [() => createVehicleResponses, () => createVehicleErrors]
);
export var CreateCampaignRequest = struct(
  n0,
  _CCR,
  0,
  [_n, _d, _sCA, _tA, _sT, _eT, _pTCD, _dMi, _sMp, _com, _p, _sTC, _cS, _dED, _t, _dDC, _dP, _sTF],
  [
    [0, 1],
    0,
    0,
    0,
    4,
    4,
    1,
    0,
    0,
    0,
    1,
    [() => SignalInformationList, 0],
    [() => CollectionScheme, 0],
    [() => DataExtraDimensionNodePathList, 0],
    () => TagList,
    () => DataDestinationConfigs,
    [() => DataPartitions, 0],
    [() => SignalFetchInformationList, 0],
  ]
);
export var CreateCampaignResponse = struct(n0, _CCRr, 0, [_n, _a], [0, 0]);
export var CreateDecoderManifestRequest = struct(
  n0,
  _CDMR,
  0,
  [_n, _d, _mMA, _sD, _nIe, _dFUS, _t],
  [[0, 1], 0, 0, () => SignalDecoders, () => NetworkInterfaces, 0, () => TagList]
);
export var CreateDecoderManifestResponse = struct(n0, _CDMRr, 0, [_n, _a], [0, 0]);
export var CreateFleetRequest = struct(n0, _CFR, 0, [_fI, _d, _sCA, _t], [[0, 1], 0, 0, () => TagList]);
export var CreateFleetResponse = struct(n0, _CFRr, 0, [_i, _a], [0, 0]);
export var CreateModelManifestRequest = struct(
  n0,
  _CMMR,
  0,
  [_n, _d, _no, _sCA, _t],
  [[0, 1], 0, 64 | 0, 0, () => TagList]
);
export var CreateModelManifestResponse = struct(n0, _CMMRr, 0, [_n, _a], [0, 0]);
export var CreateSignalCatalogRequest = struct(
  n0,
  _CSCR,
  0,
  [_n, _d, _no, _t],
  [[0, 1], 0, () => Nodes, () => TagList]
);
export var CreateSignalCatalogResponse = struct(n0, _CSCRr, 0, [_n, _a], [0, 0]);
export var CreateStateTemplateRequest = struct(
  n0,
  _CSTR,
  0,
  [_n, _d, _sCA, _sTP, _dED, _mED, _t],
  [[0, 1], 0, 0, 64 | 0, 64 | 0, 64 | 0, () => TagList]
);
export var CreateStateTemplateResponse = struct(n0, _CSTRr, 0, [_n, _a, _i], [0, 0, 0]);
export var CreateVehicleError = struct(n0, _CVE, 0, [_vN, _cod, _m], [0, 0, 0]);
export var CreateVehicleRequest = struct(
  n0,
  _CVR,
  0,
  [_vN, _mMA, _dMA, _at, _aB, _t, _sTt],
  [[0, 1], 0, 0, 128 | 0, 0, () => TagList, () => StateTemplateAssociations]
);
export var CreateVehicleRequestItem = struct(
  n0,
  _CVRI,
  0,
  [_vN, _mMA, _dMA, _at, _aB, _t, _sTt],
  [0, 0, 0, 128 | 0, 0, () => TagList, () => StateTemplateAssociations]
);
export var CreateVehicleResponse = struct(n0, _CVRr, 0, [_vN, _a, _tAh], [0, 0, 0]);
export var CreateVehicleResponseItem = struct(n0, _CVRIr, 0, [_vN, _a, _tAh], [0, 0, 0]);
export var ImportSignalCatalogRequest = struct(
  n0,
  _ISCR,
  0,
  [_n, _d, _vs, _t],
  [[0, 1], 0, () => FormattedVss, () => TagList]
);
export var ImportSignalCatalogResponse = struct(n0, _ISCRm, 0, [_n, _a], [0, 0]);
export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_RARN],
  [
    [
      0,
      {
        [_hQ]: _rAe,
      },
    ],
  ]
);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [() => TagList]);
export var Tag = struct(n0, _Ta, 0, [_K, _V], [0, 0]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_RARN, _T],
  [
    [
      0,
      {
        [_hQ]: _rAe,
      },
    ],
    () => TagList,
  ]
);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var createVehicleErrors = list(n0, _cVE, 0, () => CreateVehicleError);
export var createVehicleRequestItems = list(n0, _cVRI, 0, () => CreateVehicleRequestItem);
export var createVehicleResponses = list(n0, _cVR, 0, () => CreateVehicleResponseItem);
export var TagList = list(n0, _TL, 0, () => Tag);
export var FormattedVss = uni(n0, _FV, 0, [_vJ], [0]);
export var BatchCreateVehicle = op(
  n0,
  _BCV,
  {
    [_ht]: ["POST", "/vehicles", 200],
  },
  () => BatchCreateVehicleRequest,
  () => BatchCreateVehicleResponse
);
export var CreateCampaign = op(
  n0,
  _CC,
  {
    [_ht]: ["POST", "/campaigns/{name}", 200],
  },
  () => CreateCampaignRequest,
  () => CreateCampaignResponse
);
export var CreateDecoderManifest = op(
  n0,
  _CDM,
  {
    [_ht]: ["POST", "/decoder-manifests/{name}", 200],
  },
  () => CreateDecoderManifestRequest,
  () => CreateDecoderManifestResponse
);
export var CreateFleet = op(
  n0,
  _CF,
  {
    [_ht]: ["POST", "/fleets/{fleetId}", 201],
  },
  () => CreateFleetRequest,
  () => CreateFleetResponse
);
export var CreateModelManifest = op(
  n0,
  _CMM,
  {
    [_ht]: ["POST", "/model-manifests/{name}", 200],
  },
  () => CreateModelManifestRequest,
  () => CreateModelManifestResponse
);
export var CreateSignalCatalog = op(
  n0,
  _CSC,
  {
    [_ht]: ["POST", "/signal-catalogs/{name}", 200],
  },
  () => CreateSignalCatalogRequest,
  () => CreateSignalCatalogResponse
);
export var CreateStateTemplate = op(
  n0,
  _CST,
  {
    [_ht]: ["POST", "/state-templates/{name}", 200],
  },
  () => CreateStateTemplateRequest,
  () => CreateStateTemplateResponse
);
export var CreateVehicle = op(
  n0,
  _CV,
  {
    [_ht]: ["POST", "/vehicles/{vehicleName}", 201],
  },
  () => CreateVehicleRequest,
  () => CreateVehicleResponse
);
export var ImportSignalCatalog = op(
  n0,
  _ISC,
  {
    [_ht]: ["PUT", "/signal-catalogs/{name}/nodes", 200],
  },
  () => ImportSignalCatalogRequest,
  () => ImportSignalCatalogResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_ht]: ["GET", "/tags", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_ht]: ["POST", "/tags", 204],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
