// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _de,
  _DRe,
  _DRRes,
  _DRResc,
  _fi,
  _fT,
  _PRC,
  _PRCR,
  _PRCRu,
  _RC,
  _rC,
  _RD,
  _RDL,
  _reg,
  _RF,
  _rF,
  _RFL,
  _rI,
  _RR,
  _RRL,
  _ru,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeRegistryRequest = struct(n0, _DRRes, 0, [], []);
export var DescribeRegistryResponse = struct(n0, _DRResc, 0, [_rI, _rC], [0, () => ReplicationConfiguration]);
export var PutReplicationConfigurationRequest = struct(n0, _PRCR, 0, [_rC], [() => ReplicationConfiguration]);
export var PutReplicationConfigurationResponse = struct(n0, _PRCRu, 0, [_rC], [() => ReplicationConfiguration]);
export var ReplicationConfiguration = struct(n0, _RC, 0, [_ru], [() => ReplicationRuleList]);
export var ReplicationDestination = struct(n0, _RD, 0, [_reg, _rI], [0, 0]);
export var ReplicationRule = struct(
  n0,
  _RR,
  0,
  [_de, _rF],
  [() => ReplicationDestinationList, () => RepositoryFilterList]
);
export var RepositoryFilter = struct(n0, _RF, 0, [_fi, _fT], [0, 0]);
export var ReplicationDestinationList = list(n0, _RDL, 0, () => ReplicationDestination);
export var ReplicationRuleList = list(n0, _RRL, 0, () => ReplicationRule);
export var RepositoryFilterList = list(n0, _RFL, 0, () => RepositoryFilter);
export var DescribeRegistry = op(
  n0,
  _DRe,
  0,
  () => DescribeRegistryRequest,
  () => DescribeRegistryResponse
);
export var PutReplicationConfiguration = op(
  n0,
  _PRC,
  0,
  () => PutReplicationConfigurationRequest,
  () => PutReplicationConfigurationResponse
);
