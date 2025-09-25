// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AF,
  _ASM,
  _ASss,
  _ATs,
  _CPAS,
  _CPASL,
  _CPASo,
  _CPI,
  _Filt,
  _h,
  _LCPA,
  _LCPAR,
  _LCPARi,
  _MRa,
  _NTe,
  _TIa,
  _TT,
  _UA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociationFilters = struct(n0, _AF, 0, [_CPI, _ATs, _ASss], [0, 0, 0]);
export var ConfigurationPolicyAssociationSummary = struct(
  n0,
  _CPAS,
  0,
  [_CPI, _TIa, _TT, _ATs, _UA, _ASss, _ASM],
  [0, 0, 0, 0, 5, 0, 0]
);
export var ListConfigurationPolicyAssociationsRequest = struct(
  n0,
  _LCPAR,
  0,
  [_NTe, _MRa, _Filt],
  [0, 1, () => AssociationFilters]
);
export var ListConfigurationPolicyAssociationsResponse = struct(
  n0,
  _LCPARi,
  0,
  [_CPASo, _NTe],
  [() => ConfigurationPolicyAssociationSummaryList, 0]
);
export var ConfigurationPolicyAssociationSummaryList = list(n0, _CPASL, 0, () => ConfigurationPolicyAssociationSummary);
export var ListConfigurationPolicyAssociations = op(
  n0,
  _LCPA,
  {
    [_h]: ["POST", "/configurationPolicyAssociation/list", 200],
  },
  () => ListConfigurationPolicyAssociationsRequest,
  () => ListConfigurationPolicyAssociationsResponse
);
