// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _AKC,
  _aKC,
  _AS,
  _aS,
  _aT,
  _b,
  _bS,
  _C,
  _c,
  _cA,
  _ca,
  _cC,
  _CCR,
  _CCr,
  _CCRr,
  _cD,
  _CE,
  _cN,
  _CP,
  _cPA,
  _cPu,
  _cS,
  _cUP,
  _cWL,
  _CWLLD,
  _dS,
  _e,
  _en,
  _eTn,
  _f,
  _FLD,
  _h,
  _hE,
  _hQ,
  _KC,
  _kC,
  _KCCA,
  _kCCA,
  _KCEIT,
  _kCEIT,
  _kCV,
  _LD,
  _lD,
  _lG,
  _lOP,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _mC,
  _mWC,
  _mWCi,
  _P,
  _p,
  _PC,
  _pC,
  _pr,
  _r,
  _rA,
  _s_,
  _sERA,
  _sG,
  _SIP,
  _sIP,
  _SLDo,
  _SOP,
  _sOP,
  _su,
  _t,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _V,
  _v,
  _WC,
  _wC,
  _wCA,
  _wCor,
  _WLD,
  _wLD,
  n0,
} from "./schemas_0";
import { ConnectorConfiguration } from "./schemas_1_Connector";

/* eslint no-var: 0 */

export var ApacheKafkaCluster = struct(n0, _AKC, 0, [_bS, _v], [0, () => Vpc]);
export var AutoScaling = struct(
  n0,
  _AS,
  0,
  [_mWC, _mC, _mWCi, _sIP, _sOP],
  [1, 1, 1, () => ScaleInPolicy, () => ScaleOutPolicy]
);
export var Capacity = struct(n0, _C, 0, [_aS, _pC], [() => AutoScaling, () => ProvisionedCapacity]);
export var CloudWatchLogsLogDelivery = struct(n0, _CWLLD, 0, [_en, _lG], [2, 0]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var CreateConnectorRequest = struct(
  n0,
  _CCR,
  0,
  [_ca, _cC, _cD, _cN, _kC, _kCCA, _kCEIT, _kCV, _lD, _p, _sERA, _wC, _t],
  [
    () => Capacity,
    [() => ConnectorConfiguration, 0],
    0,
    0,
    () => KafkaCluster,
    () => KafkaClusterClientAuthentication,
    () => KafkaClusterEncryptionInTransit,
    0,
    () => LogDelivery,
    () => __listOfPlugin,
    0,
    () => WorkerConfiguration,
    128 | 0,
  ]
);
export var CreateConnectorResponse = struct(n0, _CCRr, 0, [_cA, _cN, _cS], [0, 0, 0]);
export var CustomPlugin = struct(n0, _CP, 0, [_cPA, _r], [0, 1]);
export var FirehoseLogDelivery = struct(n0, _FLD, 0, [_dS, _en], [0, 2]);
export var KafkaCluster = struct(n0, _KC, 0, [_aKC], [() => ApacheKafkaCluster]);
export var KafkaClusterClientAuthentication = struct(n0, _KCCA, 0, [_aT], [0]);
export var KafkaClusterEncryptionInTransit = struct(n0, _KCEIT, 0, [_eTn], [0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [128 | 0]);
export var LogDelivery = struct(n0, _LD, 0, [_wLD], [() => WorkerLogDelivery]);
export var Plugin = struct(n0, _P, 0, [_cPu], [() => CustomPlugin]);
export var ProvisionedCapacity = struct(n0, _PC, 0, [_mC, _wCor], [1, 1]);
export var S3LogDelivery = struct(n0, _SLDo, 0, [_b, _en, _pr], [0, 2, 0]);
export var ScaleInPolicy = struct(n0, _SIP, 0, [_cUP], [1]);
export var ScaleOutPolicy = struct(n0, _SOP, 0, [_cUP], [1]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _t], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
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
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var Vpc = struct(n0, _V, 0, [_sG, _su], [64 | 0, 64 | 0]);
export var WorkerConfiguration = struct(n0, _WC, 0, [_r, _wCA], [1, 0]);
export var WorkerLogDelivery = struct(
  n0,
  _WLD,
  0,
  [_cWL, _f, _s_],
  [() => CloudWatchLogsLogDelivery, () => FirehoseLogDelivery, () => S3LogDelivery]
);
export var __listOfPlugin = list(n0, _lOP, 0, () => Plugin);
export var TagKeyList = 64 | 0;

export var Tags = 128 | 0;

export var CreateConnector = op(
  n0,
  _CCr,
  {
    [_h]: ["POST", "/v1/connectors", 200],
  },
  () => CreateConnectorRequest,
  () => CreateConnectorResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/v1/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/v1/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/v1/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
