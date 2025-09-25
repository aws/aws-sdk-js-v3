// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAr, _ANr, _Pr, _PTRr, _UAp, _UARpd, _UARpda, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateArtifactRequest = struct(n0, _UARpd, 0, [_AAr, _ANr, _Pr, _PTRr], [0, 0, 128 | 0, 64 | 0]);
export var UpdateArtifactResponse = struct(n0, _UARpda, 0, [_AAr], [0]);
export var ArtifactProperties = 128 | 0;

export var UpdateArtifact = op(
  n0,
  _UAp,
  0,
  () => UpdateArtifactRequest,
  () => UpdateArtifactResponse
);
