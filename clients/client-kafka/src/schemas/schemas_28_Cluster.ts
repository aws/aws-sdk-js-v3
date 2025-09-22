// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ar,
  _CA,
  _cA,
  _CIo,
  _cIo,
  _COA,
  _cOA,
  _CV,
  _cV,
  _h,
  _jN,
  _R,
  _r,
  _TKV,
  _tKV,
  _UCC,
  _UCCR,
  _UCCRp,
  _UCKV,
  _UCKVR,
  _UCKVRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConfigurationInfo = struct(
  n0,
  _CIo,
  0,
  [_Ar, _R],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      1,
      {
        [_jN]: _r,
      },
    ],
  ]
);
export var UpdateClusterConfigurationRequest = struct(
  n0,
  _UCCR,
  0,
  [_CA, _CIo, _CV],
  [
    [0, 1],
    [
      () => ConfigurationInfo,
      {
        [_jN]: _cIo,
      },
    ],
    [
      0,
      {
        [_jN]: _cV,
      },
    ],
  ]
);
export var UpdateClusterConfigurationResponse = struct(
  n0,
  _UCCRp,
  0,
  [_CA, _COA],
  [
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _cOA,
      },
    ],
  ]
);
export var UpdateClusterKafkaVersionRequest = struct(
  n0,
  _UCKVR,
  0,
  [_CA, _CIo, _CV, _TKV],
  [
    [0, 1],
    [
      () => ConfigurationInfo,
      {
        [_jN]: _cIo,
      },
    ],
    [
      0,
      {
        [_jN]: _cV,
      },
    ],
    [
      0,
      {
        [_jN]: _tKV,
      },
    ],
  ]
);
export var UpdateClusterKafkaVersionResponse = struct(
  n0,
  _UCKVRp,
  0,
  [_CA, _COA],
  [
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _cOA,
      },
    ],
  ]
);
export var UpdateClusterConfiguration = op(
  n0,
  _UCC,
  {
    [_h]: ["PUT", "/v1/clusters/{ClusterArn}/configuration", 200],
  },
  () => UpdateClusterConfigurationRequest,
  () => UpdateClusterConfigurationResponse
);
export var UpdateClusterKafkaVersion = op(
  n0,
  _UCKV,
  {
    [_h]: ["PUT", "/v1/clusters/{ClusterArn}/version", 200],
  },
  () => UpdateClusterKafkaVersionRequest,
  () => UpdateClusterKafkaVersionResponse
);
