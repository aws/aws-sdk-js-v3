// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _aATSSN,
  _ac,
  _aT,
  _cA,
  _cAe,
  _CALS,
  _CALSR,
  _CALSRr,
  _cB,
  _cDN,
  _CR,
  _CRC,
  _CRCR,
  _CRCRr,
  _CRG,
  _CRGR,
  _CRGRr,
  _CRR,
  _CRRr,
  _CS,
  _CSN,
  _CSNR,
  _CSNRA,
  _CSNRAR,
  _CSNRARr,
  _CSNRr,
  _CSNSA,
  _CSNSAR,
  _CSNSARr,
  _CSNVA,
  _CSNVAR,
  _CSNVARr,
  _CSR,
  _CSRr,
  _cT,
  _dA,
  _dE,
  _fR,
  _h,
  _i,
  _iAT,
  _lI,
  _ma,
  _n,
  _p,
  _pR,
  _pr,
  _rA,
  _rCD,
  _rCGI,
  _rCGIe,
  _rCI,
  _rGI,
  _rGIe,
  _rI,
  _rIe,
  _sC,
  _sGI,
  _sI,
  _sIu,
  _sNI,
  _sNLT,
  _st,
  _t,
  _ty,
  _vI,
  n0,
} from "./schemas_0";
import { RuleMatch } from "./schemas_1_Rule";
import { ResourceConfigurationDefinition } from "./schemas_3_Resource";
import { SharingConfig } from "./schemas_7_Service";
import { RuleAction } from "./schemas_13_Rule";
import { DnsEntry } from "./schemas_23_Service";

/* eslint no-var: 0 */

export var CreateAccessLogSubscriptionRequest = struct(
  n0,
  _CALSR,
  0,
  [_cT, _rIe, _dA, _sNLT, _t],
  [[0, 4], 0, 0, 0, 128 | 0]
);
export var CreateAccessLogSubscriptionResponse = struct(
  n0,
  _CALSRr,
  0,
  [_i, _a, _rI, _rA, _sNLT, _dA],
  [0, 0, 0, 0, 0, 0]
);
export var CreateResourceConfigurationRequest = struct(
  n0,
  _CRCR,
  0,
  [_n, _ty, _pR, _p, _rGI, _rCGI, _rCD, _aATSSN, _cT, _t],
  [0, 0, 64 | 0, 0, 0, 0, () => ResourceConfigurationDefinition, 2, [0, 4], 128 | 0]
);
export var CreateResourceConfigurationResponse = struct(
  n0,
  _CRCRr,
  0,
  [_i, _n, _a, _rGIe, _rCGIe, _ty, _pR, _p, _st, _rCD, _aATSSN, _cA, _fR],
  [0, 0, 0, 0, 0, 0, 64 | 0, 0, 0, () => ResourceConfigurationDefinition, 2, 5, 0]
);
export var CreateResourceGatewayRequest = struct(
  n0,
  _CRGR,
  0,
  [_cT, _n, _vI, _sIu, _sGI, _iAT, _t],
  [[0, 4], 0, 0, 64 | 0, 64 | 0, 0, 128 | 0]
);
export var CreateResourceGatewayResponse = struct(
  n0,
  _CRGRr,
  0,
  [_n, _i, _a, _st, _vI, _sIu, _sGI, _iAT],
  [0, 0, 0, 0, 0, 64 | 0, 64 | 0, 0]
);
export var CreateRuleRequest = struct(
  n0,
  _CRR,
  0,
  [_sI, _lI, _n, _ma, _pr, _ac, _cT, _t],
  [[0, 1], [0, 1], 0, () => RuleMatch, 1, () => RuleAction, [0, 4], 128 | 0]
);
export var CreateRuleResponse = struct(
  n0,
  _CRRr,
  0,
  [_a, _i, _n, _ma, _pr, _ac],
  [0, 0, 0, () => RuleMatch, 1, () => RuleAction]
);
export var CreateServiceNetworkRequest = struct(
  n0,
  _CSNR,
  0,
  [_cT, _n, _aT, _t, _sC],
  [[0, 4], 0, 0, 128 | 0, () => SharingConfig]
);
export var CreateServiceNetworkResourceAssociationRequest = struct(
  n0,
  _CSNRAR,
  0,
  [_cT, _rCI, _sNI, _t],
  [[0, 4], 0, 0, 128 | 0]
);
export var CreateServiceNetworkResourceAssociationResponse = struct(n0, _CSNRARr, 0, [_i, _a, _st, _cB], [0, 0, 0, 0]);
export var CreateServiceNetworkResponse = struct(
  n0,
  _CSNRr,
  0,
  [_i, _n, _a, _sC, _aT],
  [0, 0, 0, () => SharingConfig, 0]
);
export var CreateServiceNetworkServiceAssociationRequest = struct(
  n0,
  _CSNSAR,
  0,
  [_cT, _sI, _sNI, _t],
  [[0, 4], 0, 0, 128 | 0]
);
export var CreateServiceNetworkServiceAssociationResponse = struct(
  n0,
  _CSNSARr,
  0,
  [_i, _st, _a, _cB, _cDN, _dE],
  [0, 0, 0, 0, 0, () => DnsEntry]
);
export var CreateServiceNetworkVpcAssociationRequest = struct(
  n0,
  _CSNVAR,
  0,
  [_cT, _sNI, _vI, _sGI, _t],
  [[0, 4], 0, 0, 64 | 0, 128 | 0]
);
export var CreateServiceNetworkVpcAssociationResponse = struct(
  n0,
  _CSNVARr,
  0,
  [_i, _st, _a, _cB, _sGI],
  [0, 0, 0, 0, 64 | 0]
);
export var CreateServiceRequest = struct(n0, _CSR, 0, [_cT, _n, _t, _cDN, _cAe, _aT], [[0, 4], 0, 128 | 0, 0, 0, 0]);
export var CreateServiceResponse = struct(
  n0,
  _CSRr,
  0,
  [_i, _a, _n, _cDN, _cAe, _st, _aT, _dE],
  [0, 0, 0, 0, 0, 0, 0, () => DnsEntry]
);
export var CreateAccessLogSubscription = op(
  n0,
  _CALS,
  {
    [_h]: ["POST", "/accesslogsubscriptions", 201],
  },
  () => CreateAccessLogSubscriptionRequest,
  () => CreateAccessLogSubscriptionResponse
);
export var CreateResourceConfiguration = op(
  n0,
  _CRC,
  {
    [_h]: ["POST", "/resourceconfigurations", 201],
  },
  () => CreateResourceConfigurationRequest,
  () => CreateResourceConfigurationResponse
);
export var CreateResourceGateway = op(
  n0,
  _CRG,
  {
    [_h]: ["POST", "/resourcegateways", 201],
  },
  () => CreateResourceGatewayRequest,
  () => CreateResourceGatewayResponse
);
export var CreateRule = op(
  n0,
  _CR,
  {
    [_h]: ["POST", "/services/{serviceIdentifier}/listeners/{listenerIdentifier}/rules", 201],
  },
  () => CreateRuleRequest,
  () => CreateRuleResponse
);
export var CreateService = op(
  n0,
  _CS,
  {
    [_h]: ["POST", "/services", 201],
  },
  () => CreateServiceRequest,
  () => CreateServiceResponse
);
export var CreateServiceNetwork = op(
  n0,
  _CSN,
  {
    [_h]: ["POST", "/servicenetworks", 201],
  },
  () => CreateServiceNetworkRequest,
  () => CreateServiceNetworkResponse
);
export var CreateServiceNetworkResourceAssociation = op(
  n0,
  _CSNRA,
  {
    [_h]: ["POST", "/servicenetworkresourceassociations", 201],
  },
  () => CreateServiceNetworkResourceAssociationRequest,
  () => CreateServiceNetworkResourceAssociationResponse
);
export var CreateServiceNetworkServiceAssociation = op(
  n0,
  _CSNSA,
  {
    [_h]: ["POST", "/servicenetworkserviceassociations", 200],
  },
  () => CreateServiceNetworkServiceAssociationRequest,
  () => CreateServiceNetworkServiceAssociationResponse
);
export var CreateServiceNetworkVpcAssociation = op(
  n0,
  _CSNVA,
  {
    [_h]: ["POST", "/servicenetworkvpcassociations", 200],
  },
  () => CreateServiceNetworkVpcAssociationRequest,
  () => CreateServiceNetworkVpcAssociationResponse
);
