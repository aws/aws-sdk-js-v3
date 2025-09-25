// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _ASuth,
  _AUut,
  _CA,
  _CAon,
  _CI,
  _CIlo,
  _CIo,
  _Conn,
  _CSL,
  _CSon,
  _CSonn,
  _D,
  _Do,
  _GCV,
  _GCVR,
  _GCVRe,
  _h,
  _HC,
  _He,
  _hQ,
  _INn,
  _JC,
  _JCD,
  _KKA,
  _LCAa,
  _LCV,
  _LCVR,
  _LCVRi,
  _LUA,
  _M,
  _MRa,
  _N,
  _NTe,
  _PD,
  _PK,
  _PNrov,
  _PSr,
  _SND,
  _SNer,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectorSummary = struct(
  n0,
  _CSon,
  0,
  [_CAon, _CIo, _N, _D, _PSr, _CA],
  [0, 0, 0, 0, () => ProviderSummary, 5]
);
export var GetConnectorV2Request = struct(n0, _GCVR, 0, [_CIo], [[0, 1]]);
export var GetConnectorV2Response = struct(
  n0,
  _GCVRe,
  0,
  [_CAon, _CIo, _N, _D, _KKA, _CA, _LUA, _He, _PD],
  [0, 0, 0, 0, 0, 5, 5, () => HealthCheck, () => ProviderDetail]
);
export var HealthCheck = struct(n0, _HC, 0, [_CSonn, _M, _LCAa], [0, 0, 5]);
export var JiraCloudDetail = struct(n0, _JCD, 0, [_CIlo, _PK, _Do, _AUut, _ASuth], [0, 0, 0, 0, 0]);
export var ListConnectorsV2Request = struct(
  n0,
  _LCVR,
  0,
  [_NTe, _MRa, _PNrov, _CSonn],
  [
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _MRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _PNrov,
      },
    ],
    [
      0,
      {
        [_hQ]: _CSonn,
      },
    ],
  ]
);
export var ListConnectorsV2Response = struct(n0, _LCVRi, 0, [_NTe, _Conn], [0, () => ConnectorSummaryList]);
export var ProviderSummary = struct(n0, _PSr, 0, [_PNrov, _CSonn], [0, 0]);
export var ServiceNowDetail = struct(n0, _SND, 0, [_INn, _CI, _ASuth], [0, 0, 0]);
export var ConnectorSummaryList = list(n0, _CSL, 0, () => ConnectorSummary);
export var ProviderDetail = uni(n0, _PD, 0, [_JC, _SNer], [() => JiraCloudDetail, () => ServiceNowDetail]);
export var GetConnectorV2 = op(
  n0,
  _GCV,
  {
    [_h]: ["GET", "/connectorsv2/{ConnectorId+}", 200],
  },
  () => GetConnectorV2Request,
  () => GetConnectorV2Response
);
export var ListConnectorsV2 = op(
  n0,
  _LCV,
  {
    [_h]: ["GET", "/connectorsv2", 200],
  },
  () => ListConnectorsV2Request,
  () => ListConnectorsV2Response
);
