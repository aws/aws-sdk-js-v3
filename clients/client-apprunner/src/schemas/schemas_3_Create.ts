// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _aQE,
  _C,
  _c,
  _CCR,
  _CCr,
  _CCRr,
  _CN,
  _COC,
  _COCR,
  _COCRr,
  _CVC,
  _CVCR,
  _CVCRr,
  _CVIC,
  _CVICR,
  _CVICRr,
  _e,
  _hE,
  _IVC,
  _K,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _Me,
  _OC,
  _OCN,
  _PT,
  _RA,
  _SA,
  _SG,
  _SQEE,
  _Su,
  _Ta,
  _Tag,
  _TC,
  _TK,
  _TL,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _V,
  _VC,
  _VCN,
  _VIC,
  _VICN,
  n0,
} from "./schemas_0";
import { ObservabilityConfiguration, TraceConfiguration } from "./schemas_4_Observability";
import { Connection } from "./schemas_6_Connection";
import { VpcConnector } from "./schemas_7_Vpc";
import { IngressVpcConfiguration, VpcIngressConnection } from "./schemas_9_VpcIngress";

/* eslint no-var: 0 */

export var CreateConnectionRequest = struct(n0, _CCR, 0, [_CN, _PT, _Ta], [0, 0, () => TagList]);
export var CreateConnectionResponse = struct(n0, _CCRr, 0, [_C], [() => Connection]);
export var CreateObservabilityConfigurationRequest = struct(
  n0,
  _COCR,
  0,
  [_OCN, _TC, _Ta],
  [0, () => TraceConfiguration, () => TagList]
);
export var CreateObservabilityConfigurationResponse = struct(n0, _COCRr, 0, [_OC], [() => ObservabilityConfiguration]);
export var CreateVpcConnectorRequest = struct(n0, _CVCR, 0, [_VCN, _Su, _SG, _Ta], [0, 64 | 0, 64 | 0, () => TagList]);
export var CreateVpcConnectorResponse = struct(n0, _CVCRr, 0, [_VC], [() => VpcConnector]);
export var CreateVpcIngressConnectionRequest = struct(
  n0,
  _CVICR,
  0,
  [_SA, _VICN, _IVC, _Ta],
  [0, 0, () => IngressVpcConfiguration, () => TagList]
);
export var CreateVpcIngressConnectionResponse = struct(n0, _CVICRr, 0, [_VIC], [() => VpcIngressConnection]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [() => TagList]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
    [_aQE]: [`ServiceQuotaExceeded`, 402],
  },
  [_Me],
  [0],

  __ServiceQuotaExceededException
);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _Ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RA, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var CreateConnection = op(
  n0,
  _CCr,
  0,
  () => CreateConnectionRequest,
  () => CreateConnectionResponse
);
export var CreateObservabilityConfiguration = op(
  n0,
  _COC,
  0,
  () => CreateObservabilityConfigurationRequest,
  () => CreateObservabilityConfigurationResponse
);
export var CreateVpcConnector = op(
  n0,
  _CVC,
  0,
  () => CreateVpcConnectorRequest,
  () => CreateVpcConnectorResponse
);
export var CreateVpcIngressConnection = op(
  n0,
  _CVIC,
  0,
  () => CreateVpcIngressConnectionRequest,
  () => CreateVpcIngressConnectionResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
