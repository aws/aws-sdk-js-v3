const _AC = "AssertedControls";
const _ADE = "AccessDeniedException";
const _AR = "AssertionRule";
const _ARU = "AssertionRuleUpdate";
const _ASSERTION = "ASSERTION";
const _C = "Cluster";
const _CA = "ClusterArn";
const _CC = "CreateCluster";
const _CCP = "CreateControlPanel";
const _CCPR = "CreateControlPanelRequest";
const _CCPRr = "CreateControlPanelResponse";
const _CCR = "CreateClusterRequest";
const _CCRr = "CreateClusterResponse";
const _CE = "ClusterEndpoints";
const _CEl = "ClusterEndpoint";
const _CEo = "ConflictException";
const _CN = "ClusterName";
const _CP = "ControlPanel";
const _CPA = "ControlPanelArn";
const _CPN = "ControlPanelName";
const _CPo = "ControlPanels";
const _CRC = "CreateRoutingControl";
const _CRCR = "CreateRoutingControlRequest";
const _CRCRr = "CreateRoutingControlResponse";
const _CSR = "CreateSafetyRule";
const _CSRR = "CreateSafetyRuleRequest";
const _CSRRr = "CreateSafetyRuleResponse";
const _CT = "ClientToken";
const _Cl = "Clusters";
const _DC = "DeleteCluster";
const _DCP = "DefaultControlPanel";
const _DCPR = "DeleteControlPanelRequest";
const _DCPRe = "DeleteControlPanelResponse";
const _DCPRes = "DescribeControlPanelRequest";
const _DCPResc = "DescribeControlPanelResponse";
const _DCPe = "DeleteControlPanel";
const _DCPes = "DescribeControlPanel";
const _DCR = "DeleteClusterRequest";
const _DCRe = "DeleteClusterResponse";
const _DCRes = "DescribeClusterRequest";
const _DCResc = "DescribeClusterResponse";
const _DCe = "DescribeCluster";
const _DRC = "DeleteRoutingControl";
const _DRCR = "DeleteRoutingControlRequest";
const _DRCRe = "DeleteRoutingControlResponse";
const _DRCRes = "DescribeRoutingControlRequest";
const _DRCResc = "DescribeRoutingControlResponse";
const _DRCe = "DescribeRoutingControl";
const _DSR = "DeleteSafetyRule";
const _DSRR = "DeleteSafetyRuleRequest";
const _DSRRe = "DeleteSafetyRuleResponse";
const _DSRRes = "DescribeSafetyRuleRequest";
const _DSRResc = "DescribeSafetyRuleResponse";
const _DSRe = "DescribeSafetyRule";
const _E = "Endpoint";
const _GATING = "GATING";
const _GC = "GatingControls";
const _GR = "GatingRule";
const _GRP = "GetResourcePolicy";
const _GRPR = "GetResourcePolicyRequest";
const _GRPRe = "GetResourcePolicyResponse";
const _GRU = "GatingRuleUpdate";
const _HCI = "HealthCheckIds";
const _I = "Inverted";
const _ISE = "InternalServerException";
const _LARHC = "ListAssociatedRoute53HealthChecks";
const _LARHCR = "ListAssociatedRoute53HealthChecksRequest";
const _LARHCRi = "ListAssociatedRoute53HealthChecksResponse";
const _LC = "ListClusters";
const _LCP = "ListControlPanels";
const _LCPR = "ListControlPanelsRequest";
const _LCPRi = "ListControlPanelsResponse";
const _LCR = "ListClustersRequest";
const _LCRi = "ListClustersResponse";
const _LRC = "ListRoutingControls";
const _LRCR = "ListRoutingControlsRequest";
const _LRCRi = "ListRoutingControlsResponse";
const _LSR = "ListSafetyRules";
const _LSRR = "ListSafetyRulesRequest";
const _LSRRi = "ListSafetyRulesResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _M = "Message";
const _MR = "MaxResults";
const _N = "Name";
const _NAR = "NewAssertionRule";
const _NGR = "NewGatingRule";
const _NT = "NetworkType";
const _NTe = "NextToken";
const _O = "Owner";
const _P = "Policy";
const _R = "Region";
const _RA = "ResourceArn";
const _RC = "RuleConfig";
const _RCA = "RoutingControlArn";
const _RCC = "RoutingControlCount";
const _RCN = "RoutingControlName";
const _RCo = "RoutingControl";
const _RCou = "RoutingControls";
const _RNFE = "ResourceNotFoundException";
const _Ru = "Rule";
const _S = "Status";
const _SQEE = "ServiceQuotaExceededException";
const _SR = "SafetyRules";
const _SRA = "SafetyRuleArn";
const _T = "Tags";
const _TC = "TargetControls";
const _TE = "ThrottlingException";
const _TK = "TagKeys";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _Th = "Threshold";
const _Ty = "Type";
const _UC = "UpdateCluster";
const _UCP = "UpdateControlPanel";
const _UCPR = "UpdateControlPanelRequest";
const _UCPRp = "UpdateControlPanelResponse";
const _UCR = "UpdateClusterRequest";
const _UCRp = "UpdateClusterResponse";
const _UR = "UntagResource";
const _URC = "UpdateRoutingControl";
const _URCR = "UpdateRoutingControlRequest";
const _URCRp = "UpdateRoutingControlResponse";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _USR = "UpdateSafetyRule";
const _USRR = "UpdateSafetyRuleRequest";
const _USRRp = "UpdateSafetyRuleResponse";
const _VE = "ValidationException";
const _WPM = "WaitPeriodMs";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _jN = "jsonName";
const _lOC = "__listOfCluster";
const _lOCE = "__listOfClusterEndpoint";
const _lOCP = "__listOfControlPanel";
const _lOR = "__listOfRule";
const _lORC = "__listOfRoutingControl";
const _m = "message";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.route53recoverycontrolconfig";
const n0 = "com.amazonaws.route53recoverycontrolconfig";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { Route53RecoveryControlConfigServiceException as __Route53RecoveryControlConfigServiceException } from "../models/Route53RecoveryControlConfigServiceException";

/* eslint no-var: 0 */
export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_M],
  [[0, { [_jN]: _m }]],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);
export var AssertionRule: StaticStructureSchema = [
  3,
  n0,
  _AR,
  0,
  [_AC, _CPA, _N, _RC, _SRA, _S, _WPM, _O],
  [64 | 0, 0, 0, () => RuleConfig, 0, 0, 1, 0],
];
export var AssertionRuleUpdate: StaticStructureSchema = [3, n0, _ARU, 0, [_N, _SRA, _WPM], [0, 0, 1]];
export var Cluster: StaticStructureSchema = [
  3,
  n0,
  _C,
  0,
  [_CA, _CE, _N, _S, _O, _NT],
  [0, () => __listOfClusterEndpoint, 0, 0, 0, 0],
];
export var ClusterEndpoint: StaticStructureSchema = [3, n0, _CEl, 0, [_E, _R], [0, 0]];
export var ConflictException: StaticErrorSchema = [-3, n0, _CEo, { [_e]: _c, [_hE]: 409 }, [_M], [[0, { [_jN]: _m }]]];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);
export var ControlPanel: StaticStructureSchema = [
  3,
  n0,
  _CP,
  0,
  [_CA, _CPA, _DCP, _N, _RCC, _S, _O],
  [0, 0, 2, 0, 1, 0, 0],
];
export var CreateClusterRequest: StaticStructureSchema = [3, n0, _CCR, 0, [_CT, _CN, _T, _NT], [[0, 4], 0, 128 | 0, 0]];
export var CreateClusterResponse: StaticStructureSchema = [3, n0, _CCRr, 0, [_C], [() => Cluster]];
export var CreateControlPanelRequest: StaticStructureSchema = [
  3,
  n0,
  _CCPR,
  0,
  [_CT, _CA, _CPN, _T],
  [[0, 4], 0, 0, 128 | 0],
];
export var CreateControlPanelResponse: StaticStructureSchema = [3, n0, _CCPRr, 0, [_CP], [() => ControlPanel]];
export var CreateRoutingControlRequest: StaticStructureSchema = [
  3,
  n0,
  _CRCR,
  0,
  [_CT, _CA, _CPA, _RCN],
  [[0, 4], 0, 0, 0],
];
export var CreateRoutingControlResponse: StaticStructureSchema = [3, n0, _CRCRr, 0, [_RCo], [() => RoutingControl]];
export var CreateSafetyRuleRequest: StaticStructureSchema = [
  3,
  n0,
  _CSRR,
  0,
  [_AR, _CT, _GR, _T],
  [() => NewAssertionRule, [0, 4], () => NewGatingRule, 128 | 0],
];
export var CreateSafetyRuleResponse: StaticStructureSchema = [
  3,
  n0,
  _CSRRr,
  0,
  [_AR, _GR],
  [() => AssertionRule, () => GatingRule],
];
export var DeleteClusterRequest: StaticStructureSchema = [3, n0, _DCR, 0, [_CA], [[0, 1]]];
export var DeleteClusterResponse: StaticStructureSchema = [3, n0, _DCRe, 0, [], []];
export var DeleteControlPanelRequest: StaticStructureSchema = [3, n0, _DCPR, 0, [_CPA], [[0, 1]]];
export var DeleteControlPanelResponse: StaticStructureSchema = [3, n0, _DCPRe, 0, [], []];
export var DeleteRoutingControlRequest: StaticStructureSchema = [3, n0, _DRCR, 0, [_RCA], [[0, 1]]];
export var DeleteRoutingControlResponse: StaticStructureSchema = [3, n0, _DRCRe, 0, [], []];
export var DeleteSafetyRuleRequest: StaticStructureSchema = [3, n0, _DSRR, 0, [_SRA], [[0, 1]]];
export var DeleteSafetyRuleResponse: StaticStructureSchema = [3, n0, _DSRRe, 0, [], []];
export var DescribeClusterRequest: StaticStructureSchema = [3, n0, _DCRes, 0, [_CA], [[0, 1]]];
export var DescribeClusterResponse: StaticStructureSchema = [3, n0, _DCResc, 0, [_C], [() => Cluster]];
export var DescribeControlPanelRequest: StaticStructureSchema = [3, n0, _DCPRes, 0, [_CPA], [[0, 1]]];
export var DescribeControlPanelResponse: StaticStructureSchema = [3, n0, _DCPResc, 0, [_CP], [() => ControlPanel]];
export var DescribeRoutingControlRequest: StaticStructureSchema = [3, n0, _DRCRes, 0, [_RCA], [[0, 1]]];
export var DescribeRoutingControlResponse: StaticStructureSchema = [3, n0, _DRCResc, 0, [_RCo], [() => RoutingControl]];
export var DescribeSafetyRuleRequest: StaticStructureSchema = [3, n0, _DSRRes, 0, [_SRA], [[0, 1]]];
export var DescribeSafetyRuleResponse: StaticStructureSchema = [
  3,
  n0,
  _DSRResc,
  0,
  [_AR, _GR],
  [() => AssertionRule, () => GatingRule],
];
export var GatingRule: StaticStructureSchema = [
  3,
  n0,
  _GR,
  0,
  [_CPA, _GC, _N, _RC, _SRA, _S, _TC, _WPM, _O],
  [0, 64 | 0, 0, () => RuleConfig, 0, 0, 64 | 0, 1, 0],
];
export var GatingRuleUpdate: StaticStructureSchema = [3, n0, _GRU, 0, [_N, _SRA, _WPM], [0, 0, 1]];
export var GetResourcePolicyRequest: StaticStructureSchema = [3, n0, _GRPR, 0, [_RA], [[0, 1]]];
export var GetResourcePolicyResponse: StaticStructureSchema = [3, n0, _GRPRe, 0, [_P], [0]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  { [_e]: _s, [_hE]: 500 },
  [_M],
  [[0, { [_jN]: _m }]],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);
export var ListAssociatedRoute53HealthChecksRequest: StaticStructureSchema = [
  3,
  n0,
  _LARHCR,
  0,
  [_MR, _NTe, _RCA],
  [
    [1, { [_hQ]: _MR }],
    [0, { [_hQ]: _NTe }],
    [0, 1],
  ],
];
export var ListAssociatedRoute53HealthChecksResponse: StaticStructureSchema = [
  3,
  n0,
  _LARHCRi,
  0,
  [_HCI, _NTe],
  [64 | 0, 0],
];
export var ListClustersRequest: StaticStructureSchema = [
  3,
  n0,
  _LCR,
  0,
  [_MR, _NTe],
  [
    [1, { [_hQ]: _MR }],
    [0, { [_hQ]: _NTe }],
  ],
];
export var ListClustersResponse: StaticStructureSchema = [3, n0, _LCRi, 0, [_Cl, _NTe], [() => __listOfCluster, 0]];
export var ListControlPanelsRequest: StaticStructureSchema = [
  3,
  n0,
  _LCPR,
  0,
  [_CA, _MR, _NTe],
  [
    [0, { [_hQ]: _CA }],
    [1, { [_hQ]: _MR }],
    [0, { [_hQ]: _NTe }],
  ],
];
export var ListControlPanelsResponse: StaticStructureSchema = [
  3,
  n0,
  _LCPRi,
  0,
  [_CPo, _NTe],
  [() => __listOfControlPanel, 0],
];
export var ListRoutingControlsRequest: StaticStructureSchema = [
  3,
  n0,
  _LRCR,
  0,
  [_CPA, _MR, _NTe],
  [
    [0, 1],
    [1, { [_hQ]: _MR }],
    [0, { [_hQ]: _NTe }],
  ],
];
export var ListRoutingControlsResponse: StaticStructureSchema = [
  3,
  n0,
  _LRCRi,
  0,
  [_NTe, _RCou],
  [0, () => __listOfRoutingControl],
];
export var ListSafetyRulesRequest: StaticStructureSchema = [
  3,
  n0,
  _LSRR,
  0,
  [_CPA, _MR, _NTe],
  [
    [0, 1],
    [1, { [_hQ]: _MR }],
    [0, { [_hQ]: _NTe }],
  ],
];
export var ListSafetyRulesResponse: StaticStructureSchema = [3, n0, _LSRRi, 0, [_NTe, _SR], [0, () => __listOfRule]];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_RA], [[0, 1]]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_T], [128 | 0]];
export var NewAssertionRule: StaticStructureSchema = [
  3,
  n0,
  _NAR,
  0,
  [_AC, _CPA, _N, _RC, _WPM],
  [64 | 0, 0, 0, () => RuleConfig, 1],
];
export var NewGatingRule: StaticStructureSchema = [
  3,
  n0,
  _NGR,
  0,
  [_CPA, _GC, _N, _RC, _TC, _WPM],
  [0, 64 | 0, 0, () => RuleConfig, 64 | 0, 1],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_M],
  [[0, { [_jN]: _m }]],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);
export var RoutingControl: StaticStructureSchema = [3, n0, _RCo, 0, [_CPA, _N, _RCA, _S, _O], [0, 0, 0, 0, 0]];
export var Rule: StaticStructureSchema = [
  3,
  n0,
  _Ru,
  0,
  [_ASSERTION, _GATING],
  [() => AssertionRule, () => GatingRule],
];
export var RuleConfig: StaticStructureSchema = [3, n0, _RC, 0, [_I, _Th, _Ty], [2, 1, 0]];
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_M],
  [[0, { [_jN]: _m }]],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_RA, _T], [[0, 1], 128 | 0]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException: StaticErrorSchema = [-3, n0, _TE, { [_e]: _c, [_hE]: 429 }, [_M], [[0, { [_jN]: _m }]]];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);
export var UntagResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _URR,
  0,
  [_RA, _TK],
  [
    [0, 1],
    [64 | 0, { [_hQ]: _TK }],
  ],
];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateClusterRequest: StaticStructureSchema = [3, n0, _UCR, 0, [_CA, _NT], [0, 0]];
export var UpdateClusterResponse: StaticStructureSchema = [3, n0, _UCRp, 0, [_C], [() => Cluster]];
export var UpdateControlPanelRequest: StaticStructureSchema = [3, n0, _UCPR, 0, [_CPA, _CPN], [0, 0]];
export var UpdateControlPanelResponse: StaticStructureSchema = [3, n0, _UCPRp, 0, [_CP], [() => ControlPanel]];
export var UpdateRoutingControlRequest: StaticStructureSchema = [3, n0, _URCR, 0, [_RCA, _RCN], [0, 0]];
export var UpdateRoutingControlResponse: StaticStructureSchema = [3, n0, _URCRp, 0, [_RCo], [() => RoutingControl]];
export var UpdateSafetyRuleRequest: StaticStructureSchema = [
  3,
  n0,
  _USRR,
  0,
  [_ARU, _GRU],
  [() => AssertionRuleUpdate, () => GatingRuleUpdate],
];
export var UpdateSafetyRuleResponse: StaticStructureSchema = [
  3,
  n0,
  _USRRp,
  0,
  [_AR, _GR],
  [() => AssertionRule, () => GatingRule],
];
export var ValidationException: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_M], [[0, { [_jN]: _m }]]];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);
export var __Unit = "unit" as const;
export var Route53RecoveryControlConfigServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "Route53RecoveryControlConfigServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(
  Route53RecoveryControlConfigServiceException,
  __Route53RecoveryControlConfigServiceException
);
export var __listOf__string = 64 | 0;
export var __listOf__stringMax36PatternS = 64 | 0;
export var __listOf__stringMin1Max256PatternAZaZ09 = 64 | 0;
export var __listOfCluster: StaticListSchema = [1, n0, _lOC, 0, () => Cluster];
export var __listOfClusterEndpoint: StaticListSchema = [1, n0, _lOCE, 0, () => ClusterEndpoint];
export var __listOfControlPanel: StaticListSchema = [1, n0, _lOCP, 0, () => ControlPanel];
export var __listOfRoutingControl: StaticListSchema = [1, n0, _lORC, 0, () => RoutingControl];
export var __listOfRule: StaticListSchema = [1, n0, _lOR, 0, () => Rule];
export var __mapOf__stringMin0Max256PatternS = 128 | 0;
export var CreateCluster: StaticOperationSchema = [
  9,
  n0,
  _CC,
  { [_h]: ["POST", "/cluster", 200] },
  () => CreateClusterRequest,
  () => CreateClusterResponse,
];
export var CreateControlPanel: StaticOperationSchema = [
  9,
  n0,
  _CCP,
  { [_h]: ["POST", "/controlpanel", 200] },
  () => CreateControlPanelRequest,
  () => CreateControlPanelResponse,
];
export var CreateRoutingControl: StaticOperationSchema = [
  9,
  n0,
  _CRC,
  { [_h]: ["POST", "/routingcontrol", 200] },
  () => CreateRoutingControlRequest,
  () => CreateRoutingControlResponse,
];
export var CreateSafetyRule: StaticOperationSchema = [
  9,
  n0,
  _CSR,
  { [_h]: ["POST", "/safetyrule", 200] },
  () => CreateSafetyRuleRequest,
  () => CreateSafetyRuleResponse,
];
export var DeleteCluster: StaticOperationSchema = [
  9,
  n0,
  _DC,
  { [_h]: ["DELETE", "/cluster/{ClusterArn}", 200] },
  () => DeleteClusterRequest,
  () => DeleteClusterResponse,
];
export var DeleteControlPanel: StaticOperationSchema = [
  9,
  n0,
  _DCPe,
  { [_h]: ["DELETE", "/controlpanel/{ControlPanelArn}", 200] },
  () => DeleteControlPanelRequest,
  () => DeleteControlPanelResponse,
];
export var DeleteRoutingControl: StaticOperationSchema = [
  9,
  n0,
  _DRC,
  { [_h]: ["DELETE", "/routingcontrol/{RoutingControlArn}", 200] },
  () => DeleteRoutingControlRequest,
  () => DeleteRoutingControlResponse,
];
export var DeleteSafetyRule: StaticOperationSchema = [
  9,
  n0,
  _DSR,
  { [_h]: ["DELETE", "/safetyrule/{SafetyRuleArn}", 200] },
  () => DeleteSafetyRuleRequest,
  () => DeleteSafetyRuleResponse,
];
export var DescribeCluster: StaticOperationSchema = [
  9,
  n0,
  _DCe,
  { [_h]: ["GET", "/cluster/{ClusterArn}", 200] },
  () => DescribeClusterRequest,
  () => DescribeClusterResponse,
];
export var DescribeControlPanel: StaticOperationSchema = [
  9,
  n0,
  _DCPes,
  { [_h]: ["GET", "/controlpanel/{ControlPanelArn}", 200] },
  () => DescribeControlPanelRequest,
  () => DescribeControlPanelResponse,
];
export var DescribeRoutingControl: StaticOperationSchema = [
  9,
  n0,
  _DRCe,
  { [_h]: ["GET", "/routingcontrol/{RoutingControlArn}", 200] },
  () => DescribeRoutingControlRequest,
  () => DescribeRoutingControlResponse,
];
export var DescribeSafetyRule: StaticOperationSchema = [
  9,
  n0,
  _DSRe,
  { [_h]: ["GET", "/safetyrule/{SafetyRuleArn}", 200] },
  () => DescribeSafetyRuleRequest,
  () => DescribeSafetyRuleResponse,
];
export var GetResourcePolicy: StaticOperationSchema = [
  9,
  n0,
  _GRP,
  { [_h]: ["GET", "/resourcePolicy/{ResourceArn}", 200] },
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse,
];
export var ListAssociatedRoute53HealthChecks: StaticOperationSchema = [
  9,
  n0,
  _LARHC,
  { [_h]: ["GET", "/routingcontrol/{RoutingControlArn}/associatedRoute53HealthChecks", 200] },
  () => ListAssociatedRoute53HealthChecksRequest,
  () => ListAssociatedRoute53HealthChecksResponse,
];
export var ListClusters: StaticOperationSchema = [
  9,
  n0,
  _LC,
  { [_h]: ["GET", "/cluster", 200] },
  () => ListClustersRequest,
  () => ListClustersResponse,
];
export var ListControlPanels: StaticOperationSchema = [
  9,
  n0,
  _LCP,
  { [_h]: ["GET", "/controlpanels", 200] },
  () => ListControlPanelsRequest,
  () => ListControlPanelsResponse,
];
export var ListRoutingControls: StaticOperationSchema = [
  9,
  n0,
  _LRC,
  { [_h]: ["GET", "/controlpanel/{ControlPanelArn}/routingcontrols", 200] },
  () => ListRoutingControlsRequest,
  () => ListRoutingControlsResponse,
];
export var ListSafetyRules: StaticOperationSchema = [
  9,
  n0,
  _LSR,
  { [_h]: ["GET", "/controlpanel/{ControlPanelArn}/safetyrules", 200] },
  () => ListSafetyRulesRequest,
  () => ListSafetyRulesResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_h]: ["GET", "/tags/{ResourceArn}", 200] },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_h]: ["POST", "/tags/{ResourceArn}", 200] },
  () => TagResourceRequest,
  () => TagResourceResponse,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_h]: ["DELETE", "/tags/{ResourceArn}", 200] },
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
export var UpdateCluster: StaticOperationSchema = [
  9,
  n0,
  _UC,
  { [_h]: ["PUT", "/cluster", 200] },
  () => UpdateClusterRequest,
  () => UpdateClusterResponse,
];
export var UpdateControlPanel: StaticOperationSchema = [
  9,
  n0,
  _UCP,
  { [_h]: ["PUT", "/controlpanel", 200] },
  () => UpdateControlPanelRequest,
  () => UpdateControlPanelResponse,
];
export var UpdateRoutingControl: StaticOperationSchema = [
  9,
  n0,
  _URC,
  { [_h]: ["PUT", "/routingcontrol", 200] },
  () => UpdateRoutingControlRequest,
  () => UpdateRoutingControlResponse,
];
export var UpdateSafetyRule: StaticOperationSchema = [
  9,
  n0,
  _USR,
  { [_h]: ["PUT", "/safetyrule", 200] },
  () => UpdateSafetyRuleRequest,
  () => UpdateSafetyRuleResponse,
];
