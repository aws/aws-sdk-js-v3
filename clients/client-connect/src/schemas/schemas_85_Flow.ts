// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AFR, _AFRs, _AFs, _DF, _DFR, _DFRi, _FI, _GFA, _GFAR, _GFARe, _h, _II, _RI, _RT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateFlowRequest = struct(n0, _AFR, 0, [_II, _RI, _FI, _RT], [[0, 1], 0, 0, 0]);
export var AssociateFlowResponse = struct(n0, _AFRs, 0, [], []);
export var DisassociateFlowRequest = struct(
  n0,
  _DFR,
  0,
  [_II, _RI, _RT],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateFlowResponse = struct(n0, _DFRi, 0, [], []);
export var GetFlowAssociationRequest = struct(
  n0,
  _GFAR,
  0,
  [_II, _RI, _RT],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetFlowAssociationResponse = struct(n0, _GFARe, 0, [_RI, _FI, _RT], [0, 0, 0]);
export var AssociateFlow = op(
  n0,
  _AFs,
  {
    [_h]: ["PUT", "/flow-associations/{InstanceId}", 200],
  },
  () => AssociateFlowRequest,
  () => AssociateFlowResponse
);
export var DisassociateFlow = op(
  n0,
  _DF,
  {
    [_h]: ["DELETE", "/flow-associations/{InstanceId}/{ResourceId}/{ResourceType}", 200],
  },
  () => DisassociateFlowRequest,
  () => DisassociateFlowResponse
);
export var GetFlowAssociation = op(
  n0,
  _GFA,
  {
    [_h]: ["GET", "/flow-associations/{InstanceId}/{ResourceId}/{ResourceType}", 200],
  },
  () => GetFlowAssociationRequest,
  () => GetFlowAssociationResponse
);
