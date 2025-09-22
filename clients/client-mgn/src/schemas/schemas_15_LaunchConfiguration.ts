// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _C,
  _CC,
  _CCR,
  _cID,
  _cIDo,
  _CL,
  _CSCC,
  _cWLGN,
  _cWOE,
  _f,
  _ht,
  _i,
  _LCis,
  _LCR,
  _LCRF,
  _LCRi,
  _mR,
  _n,
  _nT,
  _oSBN,
  _sCC,
  _sIID,
  _sOE,
  _t,
  _UC,
  _UCR,
  n0,
  TagsMap,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Connector = struct(
  n0,
  _C,
  0,
  [_cID, _n, _sIID, _a, _t, _sCC],
  [0, 0, 0, 0, [() => TagsMap, 0], () => ConnectorSsmCommandConfig]
);
export var ConnectorSsmCommandConfig = struct(n0, _CSCC, 0, [_sOE, _oSBN, _cWOE, _cWLGN], [2, 0, 2, 0]);
export var CreateConnectorRequest = struct(
  n0,
  _CCR,
  0,
  [_n, _sIID, _t, _sCC],
  [0, 0, [() => TagsMap, 0], () => ConnectorSsmCommandConfig]
);
export var ListConnectorsRequest = struct(n0, _LCR, 0, [_f, _mR, _nT], [() => ListConnectorsRequestFilters, 1, 0]);
export var ListConnectorsRequestFilters = struct(n0, _LCRF, 0, [_cIDo], [64 | 0]);
export var ListConnectorsResponse = struct(n0, _LCRi, 0, [_i, _nT], [[() => ConnectorsList, 0], 0]);
export var UpdateConnectorRequest = struct(n0, _UCR, 0, [_cID, _n, _sCC], [0, 0, () => ConnectorSsmCommandConfig]);
export var ConnectorIDsFilter = 64 | 0;

export var ConnectorsList = list(n0, _CL, 0, [() => Connector, 0]);
export var CreateConnector = op(
  n0,
  _CC,
  {
    [_ht]: ["POST", "/CreateConnector", 201],
  },
  () => CreateConnectorRequest,
  () => Connector
);
export var ListConnectors = op(
  n0,
  _LCis,
  {
    [_ht]: ["POST", "/ListConnectors", 200],
  },
  () => ListConnectorsRequest,
  () => ListConnectorsResponse
);
export var UpdateConnector = op(
  n0,
  _UC,
  {
    [_ht]: ["POST", "/UpdateConnector", 200],
  },
  () => UpdateConnectorRequest,
  () => Connector
);
