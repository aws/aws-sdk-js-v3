// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ESSF, _ESSFI, _ESSFO, _h, _I, _OU, _SSI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ExportStreamSessionFilesInput = struct(n0, _ESSFI, 0, [_I, _SSI, _OU], [[0, 1], [0, 1], 0]);
export var ExportStreamSessionFilesOutput = struct(n0, _ESSFO, 0, [], []);
export var ExportStreamSessionFiles = op(
  n0,
  _ESSF,
  {
    [_h]: ["PUT", "/streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}/exportfiles", 200],
  },
  () => ExportStreamSessionFilesInput,
  () => ExportStreamSessionFilesOutput
);
