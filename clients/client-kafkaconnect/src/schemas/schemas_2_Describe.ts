// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _aKC,
  _AKCD,
  _aS,
  _ASD,
  _aT,
  _b,
  _bA,
  _bS,
  _cA,
  _ca,
  _cC,
  _CD,
  _cD,
  _cN,
  _cNP,
  _cO,
  _co,
  _cOA,
  _cod,
  _COS,
  _cOS,
  _COSo,
  _cOT,
  _cP,
  _cPA,
  _CPD,
  _CPFD,
  _CPLD,
  _CPRS,
  _CPS,
  _cPS,
  _cPu,
  _CS,
  _cS,
  _cT,
  _cTo,
  _cUP,
  _cV,
  _CWC,
  _CWCR,
  _CWCRr,
  _cWL,
  _CWLLDD,
  _d,
  _DCe,
  _DCO,
  _DCOR,
  _DCORe,
  _DCPe,
  _DCPRes,
  _DCPResc,
  _DCRes,
  _DCResc,
  _dS,
  _DWCe,
  _DWCRes,
  _DWCResc,
  _eI,
  _en,
  _eT,
  _eTn,
  _f,
  _fD,
  _fK,
  _FLDD,
  _fM,
  _fS,
  _h,
  _hQ,
  _kC,
  _kCCA,
  _KCCAD,
  _KCD,
  _kCEIT,
  _KCEITD,
  _kCV,
  _l,
  _LC,
  _LCO,
  _LCOR,
  _LCORi,
  _LCP,
  _LCPR,
  _LCPRi,
  _LCR,
  _LCRi,
  _lD,
  _LDD,
  _lG,
  _lOCOS,
  _lOCOSi,
  _lOCPS,
  _lOCS,
  _lOPD,
  _lOWCS,
  _lR,
  _LWC,
  _LWCR,
  _LWCRi,
  _m,
  _mC,
  _mR,
  _mWC,
  _mWCi,
  _n,
  _nP,
  _nT,
  _oCC,
  _oS,
  _oV,
  _oWS,
  _p,
  _pC,
  _PCD,
  _PD,
  _pFC,
  _pr,
  _r,
  _s_,
  _SD,
  _sD,
  _sERA,
  _sG,
  _sIP,
  _SIPD,
  _sL,
  _SLD,
  _SLDD,
  _sOP,
  _SOPD,
  _sS,
  _sSt,
  _sT,
  _su,
  _t,
  _tCC,
  _tWS,
  _v,
  _VD,
  _wC,
  _wCA,
  _WCD,
  _wCo,
  _wCor,
  _WCRD,
  _WCRS,
  _WCS,
  _wCS,
  _wLD,
  _WLDD,
  _WS,
  n0,
} from "./schemas_0";
import { ConnectorConfiguration } from "./schemas_1_Connector";

/* eslint no-var: 0 */

export var __sensitiveString = sim(n0, _sS, 0, 8);
export var ApacheKafkaClusterDescription = struct(n0, _AKCD, 0, [_bS, _v], [0, () => VpcDescription]);
export var AutoScalingDescription = struct(
  n0,
  _ASD,
  0,
  [_mWC, _mC, _mWCi, _sIP, _sOP],
  [1, 1, 1, () => ScaleInPolicyDescription, () => ScaleOutPolicyDescription]
);
export var CapacityDescription = struct(
  n0,
  _CD,
  0,
  [_aS, _pC],
  [() => AutoScalingDescription, () => ProvisionedCapacityDescription]
);
export var CloudWatchLogsLogDeliveryDescription = struct(n0, _CWLLDD, 0, [_en, _lG], [2, 0]);
export var ConnectorOperationStep = struct(n0, _COS, 0, [_sT, _sSt], [0, 0]);
export var ConnectorOperationSummary = struct(n0, _COSo, 0, [_cOA, _cOT, _cOS, _cT, _eT], [0, 0, 0, 5, 5]);
export var ConnectorSummary = struct(
  n0,
  _CS,
  0,
  [_ca, _cA, _cD, _cN, _cS, _cT, _cV, _kC, _kCCA, _kCEIT, _kCV, _lD, _p, _sERA, _wC],
  [
    () => CapacityDescription,
    0,
    0,
    0,
    0,
    5,
    0,
    () => KafkaClusterDescription,
    () => KafkaClusterClientAuthenticationDescription,
    () => KafkaClusterEncryptionInTransitDescription,
    0,
    () => LogDeliveryDescription,
    () => __listOfPluginDescription,
    0,
    () => WorkerConfigurationDescription,
  ]
);
export var CreateWorkerConfigurationRequest = struct(
  n0,
  _CWCR,
  0,
  [_d, _n, _pFC, _t],
  [0, 0, [() => __sensitiveString, 0], 128 | 0]
);
export var CreateWorkerConfigurationResponse = struct(
  n0,
  _CWCRr,
  0,
  [_cT, _lR, _n, _wCA, _wCS],
  [5, () => WorkerConfigurationRevisionSummary, 0, 0, 0]
);
export var CustomPluginDescription = struct(n0, _CPD, 0, [_cPA, _r], [0, 1]);
export var CustomPluginFileDescription = struct(n0, _CPFD, 0, [_fM, _fS], [0, 1]);
export var CustomPluginLocationDescription = struct(n0, _CPLD, 0, [_sL], [() => S3LocationDescription]);
export var CustomPluginRevisionSummary = struct(
  n0,
  _CPRS,
  0,
  [_cTo, _cT, _d, _fD, _l, _r],
  [0, 5, 0, () => CustomPluginFileDescription, () => CustomPluginLocationDescription, 1]
);
export var CustomPluginSummary = struct(
  n0,
  _CPS,
  0,
  [_cT, _cPA, _cPS, _d, _lR, _n],
  [5, 0, 0, 0, () => CustomPluginRevisionSummary, 0]
);
export var DescribeConnectorOperationRequest = struct(n0, _DCOR, 0, [_cOA], [[0, 1]]);
export var DescribeConnectorOperationResponse = struct(
  n0,
  _DCORe,
  0,
  [_cA, _cOA, _cOS, _cOT, _oS, _oWS, _oCC, _tWS, _tCC, _eI, _cT, _eT],
  [
    0,
    0,
    0,
    0,
    () => __listOfConnectorOperationStep,
    () => WorkerSetting,
    [() => ConnectorConfiguration, 0],
    () => WorkerSetting,
    [() => ConnectorConfiguration, 0],
    () => StateDescription,
    5,
    5,
  ]
);
export var DescribeConnectorRequest = struct(n0, _DCRes, 0, [_cA], [[0, 1]]);
export var DescribeConnectorResponse = struct(
  n0,
  _DCResc,
  0,
  [_ca, _cA, _cC, _cD, _cN, _cS, _cT, _cV, _kC, _kCCA, _kCEIT, _kCV, _lD, _p, _sERA, _wC, _sD],
  [
    () => CapacityDescription,
    0,
    [() => ConnectorConfiguration, 0],
    0,
    0,
    0,
    5,
    0,
    () => KafkaClusterDescription,
    () => KafkaClusterClientAuthenticationDescription,
    () => KafkaClusterEncryptionInTransitDescription,
    0,
    () => LogDeliveryDescription,
    () => __listOfPluginDescription,
    0,
    () => WorkerConfigurationDescription,
    () => StateDescription,
  ]
);
export var DescribeCustomPluginRequest = struct(n0, _DCPRes, 0, [_cPA], [[0, 1]]);
export var DescribeCustomPluginResponse = struct(
  n0,
  _DCPResc,
  0,
  [_cT, _cPA, _cPS, _d, _lR, _n, _sD],
  [5, 0, 0, 0, () => CustomPluginRevisionSummary, 0, () => StateDescription]
);
export var DescribeWorkerConfigurationRequest = struct(n0, _DWCRes, 0, [_wCA], [[0, 1]]);
export var DescribeWorkerConfigurationResponse = struct(
  n0,
  _DWCResc,
  0,
  [_cT, _d, _lR, _n, _wCA, _wCS],
  [5, 0, [() => WorkerConfigurationRevisionDescription, 0], 0, 0, 0]
);
export var FirehoseLogDeliveryDescription = struct(n0, _FLDD, 0, [_dS, _en], [0, 2]);
export var KafkaClusterClientAuthenticationDescription = struct(n0, _KCCAD, 0, [_aT], [0]);
export var KafkaClusterDescription = struct(n0, _KCD, 0, [_aKC], [() => ApacheKafkaClusterDescription]);
export var KafkaClusterEncryptionInTransitDescription = struct(n0, _KCEITD, 0, [_eTn], [0]);
export var ListConnectorOperationsRequest = struct(
  n0,
  _LCOR,
  0,
  [_cA, _mR, _nT],
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
export var ListConnectorOperationsResponse = struct(
  n0,
  _LCORi,
  0,
  [_cO, _nT],
  [() => __listOfConnectorOperationSummary, 0]
);
export var ListConnectorsRequest = struct(
  n0,
  _LCR,
  0,
  [_cNP, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _cNP,
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
export var ListConnectorsResponse = struct(n0, _LCRi, 0, [_co, _nT], [() => __listOfConnectorSummary, 0]);
export var ListCustomPluginsRequest = struct(
  n0,
  _LCPR,
  0,
  [_mR, _nT, _nP],
  [
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
    [
      0,
      {
        [_hQ]: _nP,
      },
    ],
  ]
);
export var ListCustomPluginsResponse = struct(n0, _LCPRi, 0, [_cP, _nT], [() => __listOfCustomPluginSummary, 0]);
export var ListWorkerConfigurationsRequest = struct(
  n0,
  _LWCR,
  0,
  [_mR, _nT, _nP],
  [
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
    [
      0,
      {
        [_hQ]: _nP,
      },
    ],
  ]
);
export var ListWorkerConfigurationsResponse = struct(
  n0,
  _LWCRi,
  0,
  [_nT, _wCo],
  [0, () => __listOfWorkerConfigurationSummary]
);
export var LogDeliveryDescription = struct(n0, _LDD, 0, [_wLD], [() => WorkerLogDeliveryDescription]);
export var PluginDescription = struct(n0, _PD, 0, [_cPu], [() => CustomPluginDescription]);
export var ProvisionedCapacityDescription = struct(n0, _PCD, 0, [_mC, _wCor], [1, 1]);
export var S3LocationDescription = struct(n0, _SLD, 0, [_bA, _fK, _oV], [0, 0, 0]);
export var S3LogDeliveryDescription = struct(n0, _SLDD, 0, [_b, _en, _pr], [0, 2, 0]);
export var ScaleInPolicyDescription = struct(n0, _SIPD, 0, [_cUP], [1]);
export var ScaleOutPolicyDescription = struct(n0, _SOPD, 0, [_cUP], [1]);
export var StateDescription = struct(n0, _SD, 0, [_cod, _m], [0, 0]);
export var VpcDescription = struct(n0, _VD, 0, [_sG, _su], [64 | 0, 64 | 0]);
export var WorkerConfigurationDescription = struct(n0, _WCD, 0, [_r, _wCA], [1, 0]);
export var WorkerConfigurationRevisionDescription = struct(
  n0,
  _WCRD,
  0,
  [_cT, _d, _pFC, _r],
  [5, 0, [() => __sensitiveString, 0], 1]
);
export var WorkerConfigurationRevisionSummary = struct(n0, _WCRS, 0, [_cT, _d, _r], [5, 0, 1]);
export var WorkerConfigurationSummary = struct(
  n0,
  _WCS,
  0,
  [_cT, _d, _lR, _n, _wCA, _wCS],
  [5, 0, () => WorkerConfigurationRevisionSummary, 0, 0, 0]
);
export var WorkerLogDeliveryDescription = struct(
  n0,
  _WLDD,
  0,
  [_cWL, _f, _s_],
  [() => CloudWatchLogsLogDeliveryDescription, () => FirehoseLogDeliveryDescription, () => S3LogDeliveryDescription]
);
export var WorkerSetting = struct(n0, _WS, 0, [_ca], [() => CapacityDescription]);
export var __listOfConnectorOperationStep = list(n0, _lOCOS, 0, () => ConnectorOperationStep);
export var __listOfConnectorOperationSummary = list(n0, _lOCOSi, 0, () => ConnectorOperationSummary);
export var __listOfConnectorSummary = list(n0, _lOCS, 0, () => ConnectorSummary);
export var __listOfCustomPluginSummary = list(n0, _lOCPS, 0, () => CustomPluginSummary);
export var __listOfPluginDescription = list(n0, _lOPD, 0, () => PluginDescription);
export var __listOfWorkerConfigurationSummary = list(n0, _lOWCS, 0, () => WorkerConfigurationSummary);
export var CreateWorkerConfiguration = op(
  n0,
  _CWC,
  {
    [_h]: ["POST", "/v1/worker-configurations", 200],
  },
  () => CreateWorkerConfigurationRequest,
  () => CreateWorkerConfigurationResponse
);
export var DescribeConnector = op(
  n0,
  _DCe,
  {
    [_h]: ["GET", "/v1/connectors/{connectorArn}", 200],
  },
  () => DescribeConnectorRequest,
  () => DescribeConnectorResponse
);
export var DescribeConnectorOperation = op(
  n0,
  _DCO,
  {
    [_h]: ["GET", "/v1/connectorOperations/{connectorOperationArn}", 200],
  },
  () => DescribeConnectorOperationRequest,
  () => DescribeConnectorOperationResponse
);
export var DescribeCustomPlugin = op(
  n0,
  _DCPe,
  {
    [_h]: ["GET", "/v1/custom-plugins/{customPluginArn}", 200],
  },
  () => DescribeCustomPluginRequest,
  () => DescribeCustomPluginResponse
);
export var DescribeWorkerConfiguration = op(
  n0,
  _DWCe,
  {
    [_h]: ["GET", "/v1/worker-configurations/{workerConfigurationArn}", 200],
  },
  () => DescribeWorkerConfigurationRequest,
  () => DescribeWorkerConfigurationResponse
);
export var ListConnectorOperations = op(
  n0,
  _LCO,
  {
    [_h]: ["GET", "/v1/connectors/{connectorArn}/operations", 200],
  },
  () => ListConnectorOperationsRequest,
  () => ListConnectorOperationsResponse
);
export var ListConnectors = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/v1/connectors", 200],
  },
  () => ListConnectorsRequest,
  () => ListConnectorsResponse
);
export var ListCustomPlugins = op(
  n0,
  _LCP,
  {
    [_h]: ["GET", "/v1/custom-plugins", 200],
  },
  () => ListCustomPluginsRequest,
  () => ListCustomPluginsResponse
);
export var ListWorkerConfigurations = op(
  n0,
  _LWC,
  {
    [_h]: ["GET", "/v1/worker-configurations", 200],
  },
  () => ListWorkerConfigurationsRequest,
  () => ListWorkerConfigurationsResponse
);
