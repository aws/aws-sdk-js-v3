// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CT,
  _Defi,
  _DIe,
  _h,
  _hQ,
  _I,
  _jN,
  _LCD,
  _LCDi,
  _LCDR,
  _LCDRi,
  _LCDRis,
  _LCDRist,
  _LDD,
  _LDDR,
  _LDDRi,
  _LFD,
  _LFDR,
  _LFDRi,
  _LLD,
  _LLDR,
  _LLDRi,
  _lODI,
  _LRD,
  _LRDR,
  _LRDRi,
  _LSD,
  _LSDR,
  _LSDRi,
  _LUT,
  _LV,
  _LVA,
  _MR,
  _N,
  _NT,
  _T,
  _t,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DefinitionInformation = struct(
  n0,
  _DIe,
  0,
  [_A, _CT, _I, _LUT, _LV, _LVA, _N, _T],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var ListConnectorDefinitionsRequest = struct(
  n0,
  _LCDR,
  0,
  [_MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListConnectorDefinitionsResponse = struct(
  n0,
  _LCDRi,
  0,
  [_Defi, _NT],
  [[() => __listOfDefinitionInformation, 0], 0]
);
export var ListCoreDefinitionsRequest = struct(
  n0,
  _LCDRis,
  0,
  [_MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListCoreDefinitionsResponse = struct(
  n0,
  _LCDRist,
  0,
  [_Defi, _NT],
  [[() => __listOfDefinitionInformation, 0], 0]
);
export var ListDeviceDefinitionsRequest = struct(
  n0,
  _LDDR,
  0,
  [_MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListDeviceDefinitionsResponse = struct(
  n0,
  _LDDRi,
  0,
  [_Defi, _NT],
  [[() => __listOfDefinitionInformation, 0], 0]
);
export var ListFunctionDefinitionsRequest = struct(
  n0,
  _LFDR,
  0,
  [_MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListFunctionDefinitionsResponse = struct(
  n0,
  _LFDRi,
  0,
  [_Defi, _NT],
  [[() => __listOfDefinitionInformation, 0], 0]
);
export var ListLoggerDefinitionsRequest = struct(
  n0,
  _LLDR,
  0,
  [_MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListLoggerDefinitionsResponse = struct(
  n0,
  _LLDRi,
  0,
  [_Defi, _NT],
  [[() => __listOfDefinitionInformation, 0], 0]
);
export var ListResourceDefinitionsRequest = struct(
  n0,
  _LRDR,
  0,
  [_MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListResourceDefinitionsResponse = struct(
  n0,
  _LRDRi,
  0,
  [_Defi, _NT],
  [[() => __listOfDefinitionInformation, 0], 0]
);
export var ListSubscriptionDefinitionsRequest = struct(
  n0,
  _LSDR,
  0,
  [_MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListSubscriptionDefinitionsResponse = struct(
  n0,
  _LSDRi,
  0,
  [_Defi, _NT],
  [[() => __listOfDefinitionInformation, 0], 0]
);
export var __listOfDefinitionInformation = list(n0, _lODI, 0, [() => DefinitionInformation, 0]);
export var ListConnectorDefinitions = op(
  n0,
  _LCD,
  {
    [_h]: ["GET", "/greengrass/definition/connectors", 200],
  },
  () => ListConnectorDefinitionsRequest,
  () => ListConnectorDefinitionsResponse
);
export var ListCoreDefinitions = op(
  n0,
  _LCDi,
  {
    [_h]: ["GET", "/greengrass/definition/cores", 200],
  },
  () => ListCoreDefinitionsRequest,
  () => ListCoreDefinitionsResponse
);
export var ListDeviceDefinitions = op(
  n0,
  _LDD,
  {
    [_h]: ["GET", "/greengrass/definition/devices", 200],
  },
  () => ListDeviceDefinitionsRequest,
  () => ListDeviceDefinitionsResponse
);
export var ListFunctionDefinitions = op(
  n0,
  _LFD,
  {
    [_h]: ["GET", "/greengrass/definition/functions", 200],
  },
  () => ListFunctionDefinitionsRequest,
  () => ListFunctionDefinitionsResponse
);
export var ListLoggerDefinitions = op(
  n0,
  _LLD,
  {
    [_h]: ["GET", "/greengrass/definition/loggers", 200],
  },
  () => ListLoggerDefinitionsRequest,
  () => ListLoggerDefinitionsResponse
);
export var ListResourceDefinitions = op(
  n0,
  _LRD,
  {
    [_h]: ["GET", "/greengrass/definition/resources", 200],
  },
  () => ListResourceDefinitionsRequest,
  () => ListResourceDefinitionsResponse
);
export var ListSubscriptionDefinitions = op(
  n0,
  _LSD,
  {
    [_h]: ["GET", "/greengrass/definition/subscriptions", 200],
  },
  () => ListSubscriptionDefinitionsRequest,
  () => ListSubscriptionDefinitionsResponse
);
