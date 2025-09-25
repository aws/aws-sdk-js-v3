// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ACA, _ACAR, _ACARs, _CA, _CAN, _D, _DCA, _DCAR, _DCARi, _DR, _MTN, _N, _PUS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateCreatedArtifactRequest = struct(
  n0,
  _ACAR,
  0,
  [_PUS, _MTN, _CA, _DR],
  [0, 0, () => CreatedArtifact, 2]
);
export var AssociateCreatedArtifactResult = struct(n0, _ACARs, 0, [], []);
export var CreatedArtifact = struct(n0, _CA, 0, [_N, _D], [0, 0]);
export var DisassociateCreatedArtifactRequest = struct(n0, _DCAR, 0, [_PUS, _MTN, _CAN, _DR], [0, 0, 0, 2]);
export var DisassociateCreatedArtifactResult = struct(n0, _DCARi, 0, [], []);
export var AssociateCreatedArtifact = op(
  n0,
  _ACA,
  0,
  () => AssociateCreatedArtifactRequest,
  () => AssociateCreatedArtifactResult
);
export var DisassociateCreatedArtifact = op(
  n0,
  _DCA,
  0,
  () => DisassociateCreatedArtifactRequest,
  () => DisassociateCreatedArtifactResult
);
