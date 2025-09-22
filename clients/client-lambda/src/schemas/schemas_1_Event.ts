// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import { ResourceInUseException as __ResourceInUseException } from "../models/index";
import {
  _ACc,
  _AMKESC,
  _At,
  _BBOFE,
  _BSa,
  _c,
  _CESM,
  _CESMR,
  _CGI,
  _CN,
  _DC,
  _DDBESC,
  _De,
  _DESM,
  _DESMR,
  _DN,
  _E,
  _e,
  _EC,
  _End,
  _ERF,
  _ESA,
  _ESM,
  _ESMA,
  _ESMC,
  _ESML,
  _ESMMC,
  _F,
  _FA,
  _FCE,
  _FCi,
  _FD,
  _FEIC,
  _FEICL,
  _FEICu,
  _Fi,
  _FL,
  _FN,
  _FRT,
  _GESM,
  _GESMR,
  _GFEIC,
  _GFEICR,
  _h,
  _hE,
  _hQ,
  _KMSKA,
  _KSRAC,
  _KSRACL,
  _KSRC,
  _KSVC,
  _KSVCL,
  _LESM,
  _LESMR,
  _LESMRi,
  _LFEIC,
  _LFEICR,
  _LFEICRi,
  _LM,
  _LPR,
  _M,
  _Ma,
  _MBWIS,
  _MC,
  _MCa,
  _Me,
  _MEAIS,
  _MI,
  _MP,
  _MPa,
  _MRA,
  _MRAIS,
  _NM,
  _OF,
  _OS,
  _Pa,
  _PF,
  _PFEIC,
  _PFEICR,
  _PPC,
  _Q,
  _Qu,
  _RIUE,
  _SAC,
  _SACo,
  _SC,
  _SMES,
  _SMKESC,
  _SP,
  _SPT,
  _SRC,
  _SRURI,
  _St,
  _STR,
  _SVC,
  _T,
  _Ta,
  _To,
  _TWIS,
  _UESM,
  _UESMR,
  _UFEIC,
  _UFEICR,
  _URI,
  _UUID,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AmazonManagedKafkaEventSourceConfig = struct(
  n0,
  _AMKESC,
  0,
  [_CGI, _SRC],
  [0, () => KafkaSchemaRegistryConfig]
);
export var CreateEventSourceMappingRequest = struct(
  n0,
  _CESMR,
  0,
  [
    _ESA,
    _FN,
    _E,
    _BSa,
    _FCi,
    _MBWIS,
    _PF,
    _SP,
    _SPT,
    _DC,
    _MRAIS,
    _BBOFE,
    _MRA,
    _Ta,
    _TWIS,
    _To,
    _Qu,
    _SAC,
    _SMES,
    _FRT,
    _AMKESC,
    _SMKESC,
    _SC,
    _DDBESC,
    _KMSKA,
    _MC,
    _PPC,
  ],
  [
    0,
    0,
    2,
    1,
    () => FilterCriteria,
    1,
    1,
    0,
    4,
    () => DestinationConfig,
    1,
    2,
    1,
    128 | 0,
    1,
    64 | 0,
    64 | 0,
    () => SourceAccessConfigurations,
    () => SelfManagedEventSource,
    64 | 0,
    () => AmazonManagedKafkaEventSourceConfig,
    () => SelfManagedKafkaEventSourceConfig,
    () => ScalingConfig,
    () => DocumentDBEventSourceConfig,
    0,
    () => EventSourceMappingMetricsConfig,
    () => ProvisionedPollerConfig,
  ]
);
export var DeleteEventSourceMappingRequest = struct(n0, _DESMR, 0, [_UUID], [[0, 1]]);
export var DestinationConfig = struct(n0, _DC, 0, [_OS, _OF], [() => OnSuccess, () => OnFailure]);
export var DocumentDBEventSourceConfig = struct(n0, _DDBESC, 0, [_DN, _CN, _FD], [0, 0, 0]);
export var EventSourceMappingConfiguration = struct(
  n0,
  _ESMC,
  0,
  [
    _UUID,
    _SP,
    _SPT,
    _BSa,
    _MBWIS,
    _PF,
    _ESA,
    _FCi,
    _FA,
    _LM,
    _LPR,
    _St,
    _STR,
    _DC,
    _To,
    _Qu,
    _SAC,
    _SMES,
    _MRAIS,
    _BBOFE,
    _MRA,
    _TWIS,
    _FRT,
    _AMKESC,
    _SMKESC,
    _SC,
    _DDBESC,
    _KMSKA,
    _FCE,
    _ESMA,
    _MC,
    _PPC,
  ],
  [
    0,
    0,
    4,
    1,
    1,
    1,
    0,
    () => FilterCriteria,
    0,
    4,
    0,
    0,
    0,
    () => DestinationConfig,
    64 | 0,
    64 | 0,
    () => SourceAccessConfigurations,
    () => SelfManagedEventSource,
    1,
    2,
    1,
    1,
    64 | 0,
    () => AmazonManagedKafkaEventSourceConfig,
    () => SelfManagedKafkaEventSourceConfig,
    () => ScalingConfig,
    () => DocumentDBEventSourceConfig,
    0,
    () => FilterCriteriaError,
    0,
    () => EventSourceMappingMetricsConfig,
    () => ProvisionedPollerConfig,
  ]
);
export var EventSourceMappingMetricsConfig = struct(n0, _ESMMC, 0, [_Me], [64 | 0]);
export var Filter = struct(n0, _F, 0, [_Pa], [0]);
export var FilterCriteria = struct(n0, _FCi, 0, [_Fi], [() => FilterList]);
export var FilterCriteriaError = struct(n0, _FCE, 0, [_EC, _M], [0, 0]);
export var FunctionEventInvokeConfig = struct(
  n0,
  _FEIC,
  0,
  [_LM, _FA, _MRA, _MEAIS, _DC],
  [4, 0, 1, 1, () => DestinationConfig]
);
export var GetEventSourceMappingRequest = struct(n0, _GESMR, 0, [_UUID], [[0, 1]]);
export var GetFunctionEventInvokeConfigRequest = struct(
  n0,
  _GFEICR,
  0,
  [_FN, _Q],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Q,
      },
    ],
  ]
);
export var KafkaSchemaRegistryAccessConfig = struct(n0, _KSRAC, 0, [_T, _URI], [0, 0]);
export var KafkaSchemaRegistryConfig = struct(
  n0,
  _KSRC,
  0,
  [_SRURI, _ERF, _ACc, _SVC],
  [0, 0, () => KafkaSchemaRegistryAccessConfigList, () => KafkaSchemaValidationConfigList]
);
export var KafkaSchemaValidationConfig = struct(n0, _KSVC, 0, [_At], [0]);
export var ListEventSourceMappingsRequest = struct(
  n0,
  _LESMR,
  0,
  [_ESA, _FN, _Ma, _MI],
  [
    [
      0,
      {
        [_hQ]: _ESA,
      },
    ],
    [
      0,
      {
        [_hQ]: _FN,
      },
    ],
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListEventSourceMappingsResponse = struct(n0, _LESMRi, 0, [_NM, _ESM], [0, () => EventSourceMappingsList]);
export var ListFunctionEventInvokeConfigsRequest = struct(
  n0,
  _LFEICR,
  0,
  [_FN, _Ma, _MI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListFunctionEventInvokeConfigsResponse = struct(
  n0,
  _LFEICRi,
  0,
  [_FEICu, _NM],
  [() => FunctionEventInvokeConfigList, 0]
);
export var OnFailure = struct(n0, _OF, 0, [_De], [0]);
export var OnSuccess = struct(n0, _OS, 0, [_De], [0]);
export var ProvisionedPollerConfig = struct(n0, _PPC, 0, [_MP, _MPa], [1, 1]);
export var PutFunctionEventInvokeConfigRequest = struct(
  n0,
  _PFEICR,
  0,
  [_FN, _Q, _MRA, _MEAIS, _DC],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Q,
      },
    ],
    1,
    1,
    () => DestinationConfig,
  ]
);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_T, _M],
  [0, 0],

  __ResourceInUseException
);
export var ScalingConfig = struct(n0, _SC, 0, [_MCa], [1]);
export var SelfManagedEventSource = struct(n0, _SMES, 0, [_End], [map(n0, _End, 0, 0, 64 | 0)]);
export var SelfManagedKafkaEventSourceConfig = struct(
  n0,
  _SMKESC,
  0,
  [_CGI, _SRC],
  [0, () => KafkaSchemaRegistryConfig]
);
export var SourceAccessConfiguration = struct(n0, _SACo, 0, [_T, _URI], [0, 0]);
export var UpdateEventSourceMappingRequest = struct(
  n0,
  _UESMR,
  0,
  [
    _UUID,
    _FN,
    _E,
    _BSa,
    _FCi,
    _MBWIS,
    _DC,
    _MRAIS,
    _BBOFE,
    _MRA,
    _PF,
    _SAC,
    _TWIS,
    _FRT,
    _SC,
    _AMKESC,
    _SMKESC,
    _DDBESC,
    _KMSKA,
    _MC,
    _PPC,
  ],
  [
    [0, 1],
    0,
    2,
    1,
    () => FilterCriteria,
    1,
    () => DestinationConfig,
    1,
    2,
    1,
    1,
    () => SourceAccessConfigurations,
    1,
    64 | 0,
    () => ScalingConfig,
    () => AmazonManagedKafkaEventSourceConfig,
    () => SelfManagedKafkaEventSourceConfig,
    () => DocumentDBEventSourceConfig,
    0,
    () => EventSourceMappingMetricsConfig,
    () => ProvisionedPollerConfig,
  ]
);
export var UpdateFunctionEventInvokeConfigRequest = struct(
  n0,
  _UFEICR,
  0,
  [_FN, _Q, _MRA, _MEAIS, _DC],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Q,
      },
    ],
    1,
    1,
    () => DestinationConfig,
  ]
);
export var EndpointLists = 64 | 0;

export var EventSourceMappingMetricList = 64 | 0;

export var EventSourceMappingsList = list(n0, _ESML, 0, () => EventSourceMappingConfiguration);
export var FilterList = list(n0, _FL, 0, () => Filter);
export var FunctionEventInvokeConfigList = list(n0, _FEICL, 0, () => FunctionEventInvokeConfig);
export var FunctionResponseTypeList = 64 | 0;

export var KafkaSchemaRegistryAccessConfigList = list(n0, _KSRACL, 0, () => KafkaSchemaRegistryAccessConfig);
export var KafkaSchemaValidationConfigList = list(n0, _KSVCL, 0, () => KafkaSchemaValidationConfig);
export var Queues = 64 | 0;

export var SourceAccessConfigurations = list(n0, _SAC, 0, () => SourceAccessConfiguration);
export var Topics = 64 | 0;

export var Endpoints = map(n0, _End, 0, 0, 64 | 0);
export var CreateEventSourceMapping = op(
  n0,
  _CESM,
  {
    [_h]: ["POST", "/2015-03-31/event-source-mappings", 202],
  },
  () => CreateEventSourceMappingRequest,
  () => EventSourceMappingConfiguration
);
export var DeleteEventSourceMapping = op(
  n0,
  _DESM,
  {
    [_h]: ["DELETE", "/2015-03-31/event-source-mappings/{UUID}", 202],
  },
  () => DeleteEventSourceMappingRequest,
  () => EventSourceMappingConfiguration
);
export var GetEventSourceMapping = op(
  n0,
  _GESM,
  {
    [_h]: ["GET", "/2015-03-31/event-source-mappings/{UUID}", 200],
  },
  () => GetEventSourceMappingRequest,
  () => EventSourceMappingConfiguration
);
export var GetFunctionEventInvokeConfig = op(
  n0,
  _GFEIC,
  {
    [_h]: ["GET", "/2019-09-25/functions/{FunctionName}/event-invoke-config", 200],
  },
  () => GetFunctionEventInvokeConfigRequest,
  () => FunctionEventInvokeConfig
);
export var ListEventSourceMappings = op(
  n0,
  _LESM,
  {
    [_h]: ["GET", "/2015-03-31/event-source-mappings", 200],
  },
  () => ListEventSourceMappingsRequest,
  () => ListEventSourceMappingsResponse
);
export var ListFunctionEventInvokeConfigs = op(
  n0,
  _LFEIC,
  {
    [_h]: ["GET", "/2019-09-25/functions/{FunctionName}/event-invoke-config/list", 200],
  },
  () => ListFunctionEventInvokeConfigsRequest,
  () => ListFunctionEventInvokeConfigsResponse
);
export var PutFunctionEventInvokeConfig = op(
  n0,
  _PFEIC,
  {
    [_h]: ["PUT", "/2019-09-25/functions/{FunctionName}/event-invoke-config", 200],
  },
  () => PutFunctionEventInvokeConfigRequest,
  () => FunctionEventInvokeConfig
);
export var UpdateEventSourceMapping = op(
  n0,
  _UESM,
  {
    [_h]: ["PUT", "/2015-03-31/event-source-mappings/{UUID}", 202],
  },
  () => UpdateEventSourceMappingRequest,
  () => EventSourceMappingConfiguration
);
export var UpdateFunctionEventInvokeConfig = op(
  n0,
  _UFEIC,
  {
    [_h]: ["POST", "/2019-09-25/functions/{FunctionName}/event-invoke-config", 200],
  },
  () => UpdateFunctionEventInvokeConfigRequest,
  () => FunctionEventInvokeConfig
);
