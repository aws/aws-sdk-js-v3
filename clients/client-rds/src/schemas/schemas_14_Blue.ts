// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _BGD,
  _BGDI,
  _BGDN,
  _BGDT,
  _BGDTL,
  _CT,
  _DT,
  _N,
  _S,
  _SD,
  _SDL,
  _SDt,
  _SDw,
  _SMo,
  _St,
  _Ta,
  _Tas,
  _TL,
  _TM,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BlueGreenDeployment = struct(
  n0,
  _BGD,
  0,
  [_BGDI, _BGDN, _S, _Ta, _SD, _Tas, _St, _SDt, _CT, _DT, _TL],
  [0, 0, 0, 0, () => SwitchoverDetailList, () => BlueGreenDeploymentTaskList, 0, 0, 4, 4, [() => TagList, 0]]
);
export var BlueGreenDeploymentTask = struct(n0, _BGDT, 0, [_N, _St], [0, 0]);
export var SwitchoverDetail = struct(n0, _SDw, 0, [_SMo, _TM, _St], [0, 0, 0]);
export var BlueGreenDeploymentTaskList = list(n0, _BGDTL, 0, () => BlueGreenDeploymentTask);
export var SwitchoverDetailList = list(n0, _SDL, 0, () => SwitchoverDetail);
