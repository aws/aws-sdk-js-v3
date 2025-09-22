// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ACT,
  _C,
  _CAo,
  _CCD,
  _CCDR,
  _CCDRr,
  _CCDV,
  _CCDVR,
  _CCDVRr,
  _CDI,
  _CDV,
  _CDVI,
  _Co,
  _CT,
  _Def,
  _GCDV,
  _GCDVR,
  _GCDVRe,
  _h,
  _hH,
  _hQ,
  _I,
  _IV,
  _lOC,
  _LUT,
  _LV,
  _LVA,
  _N,
  _NT,
  _P,
  _t,
  _V,
  _XACT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Connector = struct(n0, _C, 0, [_CAo, _I, _P], [0, 0, 128 | 0]);
export var ConnectorDefinitionVersion = struct(n0, _CDV, 0, [_Co], [() => __listOfConnector]);
export var CreateConnectorDefinitionRequest = struct(
  n0,
  _CCDR,
  0,
  [_ACT, _IV, _N, _t],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    () => ConnectorDefinitionVersion,
    0,
    128 | 0,
  ]
);
export var CreateConnectorDefinitionResponse = struct(
  n0,
  _CCDRr,
  0,
  [_A, _CT, _I, _LUT, _LV, _LVA, _N],
  [0, 0, 0, 0, 0, 0, 0]
);
export var CreateConnectorDefinitionVersionRequest = struct(
  n0,
  _CCDVR,
  0,
  [_ACT, _CDI, _Co],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    [0, 1],
    () => __listOfConnector,
  ]
);
export var CreateConnectorDefinitionVersionResponse = struct(n0, _CCDVRr, 0, [_A, _CT, _I, _V], [0, 0, 0, 0]);
export var GetConnectorDefinitionVersionRequest = struct(
  n0,
  _GCDVR,
  0,
  [_CDI, _CDVI, _NT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var GetConnectorDefinitionVersionResponse = struct(
  n0,
  _GCDVRe,
  0,
  [_A, _CT, _Def, _I, _NT, _V],
  [0, 0, () => ConnectorDefinitionVersion, 0, 0, 0]
);
export var __listOfConnector = list(n0, _lOC, 0, () => Connector);
export var __mapOf__string = 128 | 0;

export var CreateConnectorDefinition = op(
  n0,
  _CCD,
  {
    [_h]: ["POST", "/greengrass/definition/connectors", 200],
  },
  () => CreateConnectorDefinitionRequest,
  () => CreateConnectorDefinitionResponse
);
export var CreateConnectorDefinitionVersion = op(
  n0,
  _CCDV,
  {
    [_h]: ["POST", "/greengrass/definition/connectors/{ConnectorDefinitionId}/versions", 200],
  },
  () => CreateConnectorDefinitionVersionRequest,
  () => CreateConnectorDefinitionVersionResponse
);
export var GetConnectorDefinitionVersion = op(
  n0,
  _GCDV,
  {
    [_h]: [
      "GET",
      "/greengrass/definition/connectors/{ConnectorDefinitionId}/versions/{ConnectorDefinitionVersionId}",
      200,
    ],
  },
  () => GetConnectorDefinitionVersionRequest,
  () => GetConnectorDefinitionVersionResponse
);
