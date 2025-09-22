// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceInUseException as __ResourceInUseException } from "../models/index";
import {
  _AL,
  _c,
  _DP,
  _DPA,
  _DPAI,
  _DPAO,
  _DPe,
  _DPFPi,
  _DPFPIi,
  _DPFPOi,
  _DPI,
  _DPIe,
  _DPO,
  _DPOe,
  _DSA,
  _DSAI,
  _DSAO,
  _e,
  _Id,
  _IT,
  _M,
  _PAI,
  _PI,
  _PIr,
  _RIUE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePortfolioInput = struct(n0, _DPI, 0, [_AL, _Id], [0, 0]);
export var DeletePortfolioOutput = struct(n0, _DPO, 0, [], []);
export var DeleteProductInput = struct(n0, _DPIe, 0, [_AL, _Id], [0, 0]);
export var DeleteProductOutput = struct(n0, _DPOe, 0, [], []);
export var DeleteProvisioningArtifactInput = struct(n0, _DPAI, 0, [_AL, _PIr, _PAI], [0, 0, 0]);
export var DeleteProvisioningArtifactOutput = struct(n0, _DPAO, 0, [], []);
export var DeleteServiceActionInput = struct(n0, _DSAI, 0, [_Id, _AL, _IT], [0, 0, [0, 4]]);
export var DeleteServiceActionOutput = struct(n0, _DSAO, 0, [], []);
export var DisassociateProductFromPortfolioInput = struct(n0, _DPFPIi, 0, [_AL, _PIr, _PI], [0, 0, 0]);
export var DisassociateProductFromPortfolioOutput = struct(n0, _DPFPOi, 0, [], []);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ResourceInUseException
);
export var DeletePortfolio = op(
  n0,
  _DP,
  0,
  () => DeletePortfolioInput,
  () => DeletePortfolioOutput
);
export var DeleteProduct = op(
  n0,
  _DPe,
  0,
  () => DeleteProductInput,
  () => DeleteProductOutput
);
export var DeleteProvisioningArtifact = op(
  n0,
  _DPA,
  0,
  () => DeleteProvisioningArtifactInput,
  () => DeleteProvisioningArtifactOutput
);
export var DeleteServiceAction = op(
  n0,
  _DSA,
  0,
  () => DeleteServiceActionInput,
  () => DeleteServiceActionOutput
);
export var DisassociateProductFromPortfolio = op(
  n0,
  _DPFPi,
  0,
  () => DisassociateProductFromPortfolioInput,
  () => DisassociateProductFromPortfolioOutput
);
