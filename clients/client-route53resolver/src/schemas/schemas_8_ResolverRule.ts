// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DRRi,
  _DRRRi,
  _DRRRis,
  _GRRA,
  _GRRAR,
  _GRRARe,
  _I,
  _N,
  _RRA,
  _RRAI,
  _RRI,
  _S,
  _SM,
  _VPCI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateResolverRuleRequest = struct(n0, _DRRRi, 0, [_VPCI, _RRI], [0, 0]);
export var DisassociateResolverRuleResponse = struct(n0, _DRRRis, 0, [_RRA], [() => ResolverRuleAssociation]);
export var GetResolverRuleAssociationRequest = struct(n0, _GRRAR, 0, [_RRAI], [0]);
export var GetResolverRuleAssociationResponse = struct(n0, _GRRARe, 0, [_RRA], [() => ResolverRuleAssociation]);
export var ResolverRuleAssociation = struct(n0, _RRA, 0, [_I, _RRI, _N, _VPCI, _S, _SM], [0, 0, 0, 0, 0, 0]);
export var DisassociateResolverRule = op(
  n0,
  _DRRi,
  0,
  () => DisassociateResolverRuleRequest,
  () => DisassociateResolverRuleResponse
);
export var GetResolverRuleAssociation = op(
  n0,
  _GRRA,
  0,
  () => GetResolverRuleAssociationRequest,
  () => GetResolverRuleAssociationResponse
);
