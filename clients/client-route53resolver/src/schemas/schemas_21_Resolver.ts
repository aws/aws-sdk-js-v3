// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceExistsException as __ResourceExistsException } from "../models/index";
import {
  _ARQLC,
  _ARQLCR,
  _ARQLCRs,
  _ARR,
  _ARRR,
  _ARRRs,
  _c,
  _e,
  _M,
  _N,
  _REE,
  _RI,
  _RQLCA,
  _RQLCI,
  _RRA,
  _RRI,
  _RTe,
  _VPCI,
  n0,
} from "./schemas_0";
import { ResolverQueryLogConfigAssociation } from "./schemas_4_Query";
import { ResolverRuleAssociation } from "./schemas_8_ResolverRule";

/* eslint no-var: 0 */

export var AssociateResolverQueryLogConfigRequest = struct(n0, _ARQLCR, 0, [_RQLCI, _RI], [0, 0]);
export var AssociateResolverQueryLogConfigResponse = struct(
  n0,
  _ARQLCRs,
  0,
  [_RQLCA],
  [() => ResolverQueryLogConfigAssociation]
);
export var AssociateResolverRuleRequest = struct(n0, _ARRR, 0, [_RRI, _N, _VPCI], [0, 0, 0]);
export var AssociateResolverRuleResponse = struct(n0, _ARRRs, 0, [_RRA], [() => ResolverRuleAssociation]);
export var ResourceExistsException = error(
  n0,
  _REE,
  {
    [_e]: _c,
  },
  [_M, _RTe],
  [0, 0],

  __ResourceExistsException
);
export var AssociateResolverQueryLogConfig = op(
  n0,
  _ARQLC,
  0,
  () => AssociateResolverQueryLogConfigRequest,
  () => AssociateResolverQueryLogConfigResponse
);
export var AssociateResolverRule = op(
  n0,
  _ARR,
  0,
  () => AssociateResolverRuleRequest,
  () => AssociateResolverRuleResponse
);
