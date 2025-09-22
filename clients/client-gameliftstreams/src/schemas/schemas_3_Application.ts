// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _AA, _AAI, _AAO, _AAss, _AI, _DAi, _DAIi, _DAO, _h, _I, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateApplicationsInput = struct(n0, _AAI, 0, [_I, _AI], [[0, 1], 64 | 0]);
export var AssociateApplicationsOutput = struct(n0, _AAO, 0, [_A, _AA], [0, 64 | 0]);
export var DisassociateApplicationsInput = struct(n0, _DAIi, 0, [_I, _AI], [[0, 1], 64 | 0]);
export var DisassociateApplicationsOutput = struct(n0, _DAO, 0, [_A, _AA], [0, 64 | 0]);
export var ArnList = 64 | 0;

export var Identifiers = 64 | 0;

export var AssociateApplications = op(
  n0,
  _AAss,
  {
    [_h]: ["POST", "/streamgroups/{Identifier}/associations", 200],
  },
  () => AssociateApplicationsInput,
  () => AssociateApplicationsOutput
);
export var DisassociateApplications = op(
  n0,
  _DAi,
  {
    [_h]: ["POST", "/streamgroups/{Identifier}/disassociations", 200],
  },
  () => DisassociateApplicationsInput,
  () => DisassociateApplicationsOutput
);
