// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AU,
  _CPNIU,
  _CPNIUI,
  _CPNIUO,
  _DNI,
  _DNII,
  _NIN,
  _SEDIS,
  _SNI,
  _SNII,
  _SNIIt,
  _SNIt,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreatePresignedNotebookInstanceUrlInput = struct(n0, _CPNIUI, 0, [_NIN, _SEDIS], [0, 1]);
export var CreatePresignedNotebookInstanceUrlOutput = struct(n0, _CPNIUO, 0, [_AU], [0]);
export var DeleteNotebookInstanceInput = struct(n0, _DNII, 0, [_NIN], [0]);
export var StartNotebookInstanceInput = struct(n0, _SNII, 0, [_NIN], [0]);
export var StopNotebookInstanceInput = struct(n0, _SNIIt, 0, [_NIN], [0]);
export var CreatePresignedNotebookInstanceUrl = op(
  n0,
  _CPNIU,
  0,
  () => CreatePresignedNotebookInstanceUrlInput,
  () => CreatePresignedNotebookInstanceUrlOutput
);
export var DeleteNotebookInstance = op(
  n0,
  _DNI,
  0,
  () => DeleteNotebookInstanceInput,
  () => Unit
);
export var StartNotebookInstance = op(
  n0,
  _SNI,
  0,
  () => StartNotebookInstanceInput,
  () => Unit
);
export var StopNotebookInstance = op(
  n0,
  _SNIt,
  0,
  () => StopNotebookInstanceInput,
  () => Unit
);
