// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASCA,
  _CA,
  _CAr,
  _CN,
  _CSL,
  _CSo,
  _F,
  _LC,
  _LCR,
  _LCRi,
  _LO,
  _LOC,
  _LOCR,
  _LOCRi,
  _LSFASC,
  _LSFASCR,
  _LSFASCRi,
  _LVC,
  _LVCR,
  _LVCRi,
  _LVIC,
  _LVICF,
  _LVICR,
  _LVICRi,
  _MR,
  _NT,
  _OCA,
  _OCN,
  _OCR,
  _OCS,
  _OCSL,
  _PT,
  _S,
  _SA,
  _SAL,
  _VCp,
  _VEI,
  _VICA,
  _VICS,
  _VICSL,
  n0,
} from "./schemas_0";
import { VpcConnector } from "./schemas_7_Vpc";

/* eslint no-var: 0 */

export var ConnectionSummary = struct(n0, _CSo, 0, [_CN, _CA, _PT, _S, _CAr], [0, 0, 0, 0, 4]);
export var ListConnectionsRequest = struct(n0, _LCR, 0, [_CN, _MR, _NT], [0, 1, 0]);
export var ListConnectionsResponse = struct(n0, _LCRi, 0, [_CSL, _NT], [() => ConnectionSummaryList, 0]);
export var ListObservabilityConfigurationsRequest = struct(n0, _LOCR, 0, [_OCN, _LO, _MR, _NT], [0, 2, 1, 0]);
export var ListObservabilityConfigurationsResponse = struct(
  n0,
  _LOCRi,
  0,
  [_OCSL, _NT],
  [() => ObservabilityConfigurationSummaryList, 0]
);
export var ListServicesForAutoScalingConfigurationRequest = struct(n0, _LSFASCR, 0, [_ASCA, _MR, _NT], [0, 1, 0]);
export var ListServicesForAutoScalingConfigurationResponse = struct(n0, _LSFASCRi, 0, [_SAL, _NT], [64 | 0, 0]);
export var ListVpcConnectorsRequest = struct(n0, _LVCR, 0, [_MR, _NT], [1, 0]);
export var ListVpcConnectorsResponse = struct(n0, _LVCRi, 0, [_VCp, _NT], [() => VpcConnectors, 0]);
export var ListVpcIngressConnectionsFilter = struct(n0, _LVICF, 0, [_SA, _VEI], [0, 0]);
export var ListVpcIngressConnectionsRequest = struct(
  n0,
  _LVICR,
  0,
  [_F, _MR, _NT],
  [() => ListVpcIngressConnectionsFilter, 1, 0]
);
export var ListVpcIngressConnectionsResponse = struct(
  n0,
  _LVICRi,
  0,
  [_VICSL, _NT],
  [() => VpcIngressConnectionSummaryList, 0]
);
export var ObservabilityConfigurationSummary = struct(n0, _OCS, 0, [_OCA, _OCN, _OCR], [0, 0, 1]);
export var VpcIngressConnectionSummary = struct(n0, _VICS, 0, [_VICA, _SA], [0, 0]);
export var ConnectionSummaryList = list(n0, _CSL, 0, () => ConnectionSummary);
export var ObservabilityConfigurationSummaryList = list(n0, _OCSL, 0, () => ObservabilityConfigurationSummary);
export var ServiceArnList = 64 | 0;

export var VpcConnectors = list(n0, _VCp, 0, () => VpcConnector);
export var VpcIngressConnectionSummaryList = list(n0, _VICSL, 0, () => VpcIngressConnectionSummary);
export var ListConnections = op(
  n0,
  _LC,
  0,
  () => ListConnectionsRequest,
  () => ListConnectionsResponse
);
export var ListObservabilityConfigurations = op(
  n0,
  _LOC,
  0,
  () => ListObservabilityConfigurationsRequest,
  () => ListObservabilityConfigurationsResponse
);
export var ListServicesForAutoScalingConfiguration = op(
  n0,
  _LSFASC,
  0,
  () => ListServicesForAutoScalingConfigurationRequest,
  () => ListServicesForAutoScalingConfigurationResponse
);
export var ListVpcConnectors = op(
  n0,
  _LVC,
  0,
  () => ListVpcConnectorsRequest,
  () => ListVpcConnectorsResponse
);
export var ListVpcIngressConnections = op(
  n0,
  _LVIC,
  0,
  () => ListVpcIngressConnectionsRequest,
  () => ListVpcIngressConnectionsResponse
);
