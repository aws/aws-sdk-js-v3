// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CTr,
  _DRQLCi,
  _DRQLCRi,
  _DRQLCRis,
  _E,
  _EM,
  _GRQLCA,
  _GRQLCAR,
  _GRQLCARe,
  _I,
  _RI,
  _RQLCA,
  _RQLCAI,
  _RQLCI,
  _S,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateResolverQueryLogConfigRequest = struct(n0, _DRQLCRi, 0, [_RQLCI, _RI], [0, 0]);
export var DisassociateResolverQueryLogConfigResponse = struct(
  n0,
  _DRQLCRis,
  0,
  [_RQLCA],
  [() => ResolverQueryLogConfigAssociation]
);
export var GetResolverQueryLogConfigAssociationRequest = struct(n0, _GRQLCAR, 0, [_RQLCAI], [0]);
export var GetResolverQueryLogConfigAssociationResponse = struct(
  n0,
  _GRQLCARe,
  0,
  [_RQLCA],
  [() => ResolverQueryLogConfigAssociation]
);
export var ResolverQueryLogConfigAssociation = struct(
  n0,
  _RQLCA,
  0,
  [_I, _RQLCI, _RI, _S, _E, _EM, _CTr],
  [0, 0, 0, 0, 0, 0, 0]
);
export var DisassociateResolverQueryLogConfig = op(
  n0,
  _DRQLCi,
  0,
  () => DisassociateResolverQueryLogConfigRequest,
  () => DisassociateResolverQueryLogConfigResponse
);
export var GetResolverQueryLogConfigAssociation = op(
  n0,
  _GRQLCA,
  0,
  () => GetResolverQueryLogConfigAssociationRequest,
  () => GetResolverQueryLogConfigAssociationResponse
);
