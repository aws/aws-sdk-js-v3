// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AIc,
  _ASM,
  _ASss,
  _ATs,
  _BGCPA,
  _BGCPAR,
  _BGCPARa,
  _CPA,
  _CPAI,
  _CPAL,
  _CPALo,
  _CPAo,
  _CPI,
  _CPIo,
  _ECr,
  _ERr,
  _GCPA,
  _GCPAR,
  _GCPARe,
  _h,
  _OUI,
  _RIoo,
  _SCPA,
  _SCPAR,
  _SCPARt,
  _SCPD,
  _SCPDR,
  _SCPDRt,
  _Ta,
  _TIa,
  _TT,
  _UA,
  _UCPA,
  _UCPAL,
  _UCPAn,
  n0,
} from "./schemas_0";
import { ConfigurationPolicyAssociationSummary } from "./schemas_41_Policy";

/* eslint no-var: 0 */

export var BatchGetConfigurationPolicyAssociationsRequest = struct(
  n0,
  _BGCPAR,
  0,
  [_CPAI],
  [() => ConfigurationPolicyAssociationsList]
);
export var BatchGetConfigurationPolicyAssociationsResponse = struct(
  n0,
  _BGCPARa,
  0,
  [_CPA, _UCPA],
  [() => ConfigurationPolicyAssociationList, () => UnprocessedConfigurationPolicyAssociationList]
);
export var ConfigurationPolicyAssociation = struct(n0, _CPAo, 0, [_Ta], [() => Target]);
export var GetConfigurationPolicyAssociationRequest = struct(n0, _GCPAR, 0, [_Ta], [() => Target]);
export var GetConfigurationPolicyAssociationResponse = struct(
  n0,
  _GCPARe,
  0,
  [_CPI, _TIa, _TT, _ATs, _UA, _ASss, _ASM],
  [0, 0, 0, 0, 5, 0, 0]
);
export var StartConfigurationPolicyAssociationRequest = struct(n0, _SCPAR, 0, [_CPIo, _Ta], [0, () => Target]);
export var StartConfigurationPolicyAssociationResponse = struct(
  n0,
  _SCPARt,
  0,
  [_CPI, _TIa, _TT, _ATs, _UA, _ASss, _ASM],
  [0, 0, 0, 0, 5, 0, 0]
);
export var StartConfigurationPolicyDisassociationRequest = struct(n0, _SCPDR, 0, [_Ta, _CPIo], [() => Target, 0]);
export var StartConfigurationPolicyDisassociationResponse = struct(n0, _SCPDRt, 0, [], []);
export var UnprocessedConfigurationPolicyAssociation = struct(
  n0,
  _UCPAn,
  0,
  [_CPAI, _ECr, _ERr],
  [() => ConfigurationPolicyAssociation, 0, 0]
);
export var ConfigurationPolicyAssociationList = list(n0, _CPAL, 0, () => ConfigurationPolicyAssociationSummary);
export var ConfigurationPolicyAssociationsList = list(n0, _CPALo, 0, () => ConfigurationPolicyAssociation);
export var UnprocessedConfigurationPolicyAssociationList = list(
  n0,
  _UCPAL,
  0,
  () => UnprocessedConfigurationPolicyAssociation
);
export var Target = uni(n0, _Ta, 0, [_AIc, _OUI, _RIoo], [0, 0, 0]);
export var BatchGetConfigurationPolicyAssociations = op(
  n0,
  _BGCPA,
  {
    [_h]: ["POST", "/configurationPolicyAssociation/batchget", 200],
  },
  () => BatchGetConfigurationPolicyAssociationsRequest,
  () => BatchGetConfigurationPolicyAssociationsResponse
);
export var GetConfigurationPolicyAssociation = op(
  n0,
  _GCPA,
  {
    [_h]: ["POST", "/configurationPolicyAssociation/get", 200],
  },
  () => GetConfigurationPolicyAssociationRequest,
  () => GetConfigurationPolicyAssociationResponse
);
export var StartConfigurationPolicyAssociation = op(
  n0,
  _SCPA,
  {
    [_h]: ["POST", "/configurationPolicyAssociation/associate", 200],
  },
  () => StartConfigurationPolicyAssociationRequest,
  () => StartConfigurationPolicyAssociationResponse
);
export var StartConfigurationPolicyDisassociation = op(
  n0,
  _SCPD,
  {
    [_h]: ["POST", "/configurationPolicyAssociation/disassociate", 200],
  },
  () => StartConfigurationPolicyDisassociationRequest,
  () => StartConfigurationPolicyDisassociationResponse
);
