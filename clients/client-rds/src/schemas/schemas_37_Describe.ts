// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BGDI,
  _BGDL,
  _BGDl,
  _DBGDe,
  _DBGDRes,
  _DBGDResc,
  _DBMEV,
  _DBMEVa,
  _DBMEVL,
  _DBSGh,
  _DBSGha,
  _DBSGI,
  _DBSGL,
  _DDBMEV,
  _DDBMEVR,
  _DDBMEVRe,
  _DDBSGesc,
  _DDBSGMesc,
  _DDBSGR,
  _DET,
  _DETM,
  _E,
  _ETI,
  _ETL,
  _ETM,
  _ETx,
  _ETxp,
  _Fi,
  _LSED,
  _LSN,
  _LSSD,
  _Ma,
  _MEV,
  _MR,
  _SA,
  _SEL,
  _SELL,
  _SELu,
  _STo,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";
import { ExportTask } from "./schemas_9_Export";
import { BlueGreenDeployment } from "./schemas_14_Blue";
import { DBShardGroup } from "./schemas_54_DBShard";

/* eslint no-var: 0 */

export var DBMajorEngineVersion = struct(
  n0,
  _DBMEV,
  0,
  [_E, _MEV, _SEL],
  [0, 0, [() => SupportedEngineLifecycleList, 0]]
);
export var DescribeBlueGreenDeploymentsRequest = struct(
  n0,
  _DBGDRes,
  0,
  [_BGDI, _Fi, _Ma, _MR],
  [0, [() => FilterList, 0], 0, 1]
);
export var DescribeBlueGreenDeploymentsResponse = struct(
  n0,
  _DBGDResc,
  0,
  [_BGDl, _Ma],
  [[() => BlueGreenDeploymentList, 0], 0]
);
export var DescribeDBMajorEngineVersionsRequest = struct(n0, _DDBMEVR, 0, [_E, _MEV, _Ma, _MR], [0, 0, 0, 1]);
export var DescribeDBMajorEngineVersionsResponse = struct(
  n0,
  _DDBMEVRe,
  0,
  [_DBMEVa, _Ma],
  [[() => DBMajorEngineVersionsList, 0], 0]
);
export var DescribeDBShardGroupsMessage = struct(
  n0,
  _DDBSGMesc,
  0,
  [_DBSGI, _Fi, _Ma, _MR],
  [0, [() => FilterList, 0], 0, 1]
);
export var DescribeDBShardGroupsResponse = struct(n0, _DDBSGR, 0, [_DBSGha, _Ma], [[() => DBShardGroupsList, 0], 0]);
export var DescribeExportTasksMessage = struct(
  n0,
  _DETM,
  0,
  [_ETI, _SA, _Fi, _Ma, _MR, _STo],
  [0, 0, [() => FilterList, 0], 0, 1, 0]
);
export var ExportTasksMessage = struct(n0, _ETM, 0, [_Ma, _ETxp], [0, [() => ExportTasksList, 0]]);
export var SupportedEngineLifecycle = struct(n0, _SELu, 0, [_LSN, _LSSD, _LSED], [0, 4, 4]);
export var BlueGreenDeploymentList = list(n0, _BGDL, 0, [() => BlueGreenDeployment, 0]);
export var DBMajorEngineVersionsList = list(n0, _DBMEVL, 0, [
  () => DBMajorEngineVersion,
  {
    [_xN]: _DBMEV,
  },
]);
export var DBShardGroupsList = list(n0, _DBSGL, 0, [
  () => DBShardGroup,
  {
    [_xN]: _DBSGh,
  },
]);
export var ExportTasksList = list(n0, _ETL, 0, [
  () => ExportTask,
  {
    [_xN]: _ETx,
  },
]);
export var SupportedEngineLifecycleList = list(n0, _SELL, 0, [
  () => SupportedEngineLifecycle,
  {
    [_xN]: _SELu,
  },
]);
export var DescribeBlueGreenDeployments = op(
  n0,
  _DBGDe,
  0,
  () => DescribeBlueGreenDeploymentsRequest,
  () => DescribeBlueGreenDeploymentsResponse
);
export var DescribeDBMajorEngineVersions = op(
  n0,
  _DDBMEV,
  0,
  () => DescribeDBMajorEngineVersionsRequest,
  () => DescribeDBMajorEngineVersionsResponse
);
export var DescribeDBShardGroups = op(
  n0,
  _DDBSGesc,
  0,
  () => DescribeDBShardGroupsMessage,
  () => DescribeDBShardGroupsResponse
);
export var DescribeExportTasks = op(
  n0,
  _DET,
  0,
  () => DescribeExportTasksMessage,
  () => ExportTasksMessage
);
