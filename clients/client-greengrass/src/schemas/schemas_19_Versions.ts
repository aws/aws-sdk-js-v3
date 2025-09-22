// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CDI,
  _CDIo,
  _CT,
  _DDI,
  _FDI,
  _GI,
  _h,
  _hQ,
  _I,
  _LCDV,
  _LCDVi,
  _LCDVR,
  _LCDVRi,
  _LCDVRis,
  _LCDVRist,
  _LDDV,
  _LDDVR,
  _LDDVRi,
  _LDI,
  _LFDV,
  _LFDVR,
  _LFDVRi,
  _LGV,
  _LGVR,
  _LGVRi,
  _LLDV,
  _LLDVR,
  _LLDVRi,
  _lOVI,
  _LRDV,
  _LRDVR,
  _LRDVRi,
  _LSDV,
  _LSDVR,
  _LSDVRi,
  _MR,
  _NT,
  _RDI,
  _SDI,
  _V,
  _Ve,
  _VI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListConnectorDefinitionVersionsRequest = struct(
  n0,
  _LCDVR,
  0,
  [_CDI, _MR, _NT],
  [
    [0, 1],
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
export var ListConnectorDefinitionVersionsResponse = struct(
  n0,
  _LCDVRi,
  0,
  [_NT, _Ve],
  [0, () => __listOfVersionInformation]
);
export var ListCoreDefinitionVersionsRequest = struct(
  n0,
  _LCDVRis,
  0,
  [_CDIo, _MR, _NT],
  [
    [0, 1],
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
export var ListCoreDefinitionVersionsResponse = struct(
  n0,
  _LCDVRist,
  0,
  [_NT, _Ve],
  [0, () => __listOfVersionInformation]
);
export var ListDeviceDefinitionVersionsRequest = struct(
  n0,
  _LDDVR,
  0,
  [_DDI, _MR, _NT],
  [
    [0, 1],
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
export var ListDeviceDefinitionVersionsResponse = struct(
  n0,
  _LDDVRi,
  0,
  [_NT, _Ve],
  [0, () => __listOfVersionInformation]
);
export var ListFunctionDefinitionVersionsRequest = struct(
  n0,
  _LFDVR,
  0,
  [_FDI, _MR, _NT],
  [
    [0, 1],
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
export var ListFunctionDefinitionVersionsResponse = struct(
  n0,
  _LFDVRi,
  0,
  [_NT, _Ve],
  [0, () => __listOfVersionInformation]
);
export var ListGroupVersionsRequest = struct(
  n0,
  _LGVR,
  0,
  [_GI, _MR, _NT],
  [
    [0, 1],
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
export var ListGroupVersionsResponse = struct(n0, _LGVRi, 0, [_NT, _Ve], [0, () => __listOfVersionInformation]);
export var ListLoggerDefinitionVersionsRequest = struct(
  n0,
  _LLDVR,
  0,
  [_LDI, _MR, _NT],
  [
    [0, 1],
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
export var ListLoggerDefinitionVersionsResponse = struct(
  n0,
  _LLDVRi,
  0,
  [_NT, _Ve],
  [0, () => __listOfVersionInformation]
);
export var ListResourceDefinitionVersionsRequest = struct(
  n0,
  _LRDVR,
  0,
  [_MR, _NT, _RDI],
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
    [0, 1],
  ]
);
export var ListResourceDefinitionVersionsResponse = struct(
  n0,
  _LRDVRi,
  0,
  [_NT, _Ve],
  [0, () => __listOfVersionInformation]
);
export var ListSubscriptionDefinitionVersionsRequest = struct(
  n0,
  _LSDVR,
  0,
  [_MR, _NT, _SDI],
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
    [0, 1],
  ]
);
export var ListSubscriptionDefinitionVersionsResponse = struct(
  n0,
  _LSDVRi,
  0,
  [_NT, _Ve],
  [0, () => __listOfVersionInformation]
);
export var VersionInformation = struct(n0, _VI, 0, [_A, _CT, _I, _V], [0, 0, 0, 0]);
export var __listOfVersionInformation = list(n0, _lOVI, 0, () => VersionInformation);
export var ListConnectorDefinitionVersions = op(
  n0,
  _LCDV,
  {
    [_h]: ["GET", "/greengrass/definition/connectors/{ConnectorDefinitionId}/versions", 200],
  },
  () => ListConnectorDefinitionVersionsRequest,
  () => ListConnectorDefinitionVersionsResponse
);
export var ListCoreDefinitionVersions = op(
  n0,
  _LCDVi,
  {
    [_h]: ["GET", "/greengrass/definition/cores/{CoreDefinitionId}/versions", 200],
  },
  () => ListCoreDefinitionVersionsRequest,
  () => ListCoreDefinitionVersionsResponse
);
export var ListDeviceDefinitionVersions = op(
  n0,
  _LDDV,
  {
    [_h]: ["GET", "/greengrass/definition/devices/{DeviceDefinitionId}/versions", 200],
  },
  () => ListDeviceDefinitionVersionsRequest,
  () => ListDeviceDefinitionVersionsResponse
);
export var ListFunctionDefinitionVersions = op(
  n0,
  _LFDV,
  {
    [_h]: ["GET", "/greengrass/definition/functions/{FunctionDefinitionId}/versions", 200],
  },
  () => ListFunctionDefinitionVersionsRequest,
  () => ListFunctionDefinitionVersionsResponse
);
export var ListGroupVersions = op(
  n0,
  _LGV,
  {
    [_h]: ["GET", "/greengrass/groups/{GroupId}/versions", 200],
  },
  () => ListGroupVersionsRequest,
  () => ListGroupVersionsResponse
);
export var ListLoggerDefinitionVersions = op(
  n0,
  _LLDV,
  {
    [_h]: ["GET", "/greengrass/definition/loggers/{LoggerDefinitionId}/versions", 200],
  },
  () => ListLoggerDefinitionVersionsRequest,
  () => ListLoggerDefinitionVersionsResponse
);
export var ListResourceDefinitionVersions = op(
  n0,
  _LRDV,
  {
    [_h]: ["GET", "/greengrass/definition/resources/{ResourceDefinitionId}/versions", 200],
  },
  () => ListResourceDefinitionVersionsRequest,
  () => ListResourceDefinitionVersionsResponse
);
export var ListSubscriptionDefinitionVersions = op(
  n0,
  _LSDV,
  {
    [_h]: ["GET", "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions", 200],
  },
  () => ListSubscriptionDefinitionVersionsRequest,
  () => ListSubscriptionDefinitionVersionsResponse
);
