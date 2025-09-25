// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _c,
  _CE,
  _DGFS,
  _DGFSI,
  _DGFSO,
  _DOM,
  _DOWa,
  _e,
  _EC,
  _GA,
  _hE,
  _Ho,
  _HOD,
  _M,
  _MOH,
  _P,
  _PMST,
  _PMSTI,
  _PMSTO,
  _THC,
  _THCI,
  _THCO,
  _U,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Password = sim(n0, _P, 0, 8);
export var Username = sim(n0, _U, 0, 8);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_EC, _M],
  [0, 0],

  __ConflictException
);
export var DisassociateGatewayFromServerInput = struct(n0, _DGFSI, 0, [_GA], [0]);
export var DisassociateGatewayFromServerOutput = struct(n0, _DGFSO, 0, [_GA], [0]);
export var PutMaintenanceStartTimeInput = struct(n0, _PMSTI, 0, [_GA, _HOD, _MOH, _DOWa, _DOM], [0, 1, 1, 1, 1]);
export var PutMaintenanceStartTimeOutput = struct(n0, _PMSTO, 0, [_GA], [0]);
export var TestHypervisorConfigurationInput = struct(
  n0,
  _THCI,
  0,
  [_GA, _Ho, _U, _P],
  [0, 0, [() => Username, 0], [() => Password, 0]]
);
export var TestHypervisorConfigurationOutput = struct(n0, _THCO, 0, [], []);
export var DisassociateGatewayFromServer = op(
  n0,
  _DGFS,
  0,
  () => DisassociateGatewayFromServerInput,
  () => DisassociateGatewayFromServerOutput
);
export var PutMaintenanceStartTime = op(
  n0,
  _PMST,
  0,
  () => PutMaintenanceStartTimeInput,
  () => PutMaintenanceStartTimeOutput
);
export var TestHypervisorConfiguration = op(
  n0,
  _THC,
  0,
  () => TestHypervisorConfigurationInput,
  () => TestHypervisorConfigurationOutput
);
