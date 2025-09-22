// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import {
  _Act,
  _Ar,
  _ARg,
  _AUut,
  _AVA,
  _CA,
  _CAon,
  _CAR,
  _CARR,
  _CARRr,
  _CAV,
  _CAVR,
  _CAVRr,
  _CCP,
  _CCPR,
  _CCPRr,
  _CCV,
  _CCVR,
  _CCVRr,
  _CFG,
  _CI,
  _CIo,
  _CPonf,
  _Cr,
  _CSli,
  _CTl,
  _D,
  _EDS,
  _ESH,
  _ESHR,
  _ESHRn,
  _ESHV,
  _ESHVR,
  _ESHVRn,
  _h,
  _hQ,
  _HVA,
  _I,
  _INn,
  _IT,
  _JC,
  _JCPC,
  _KKA,
  _LR,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _N,
  _PCro,
  _PK,
  _Prov,
  _RA,
  _RAe,
  _RLM,
  _RN,
  _RO,
  _RS,
  _SNer,
  _SNPC,
  _Tags,
  _TK,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _UA,
  _URn,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";
import { Policy } from "./schemas_2_Security";
import { ActionList, AutomationRulesFindingFilters } from "./schemas_5_Automation";
import { SensitiveNonEmptyString } from "./schemas_47_Connector";

/* eslint no-var: 0 */

export var CreateAggregatorV2Request = struct(n0, _CAVR, 0, [_RLM, _LR, _Tags, _CTl], [0, 64 | 0, 128 | 0, [0, 4]]);
export var CreateAggregatorV2Response = struct(n0, _CAVRr, 0, [_AVA, _ARg, _RLM, _LR], [0, 0, 0, 64 | 0]);
export var CreateAutomationRuleRequest = struct(
  n0,
  _CARR,
  0,
  [_Tags, _RS, _RO, _RN, _D, _IT, _Cr, _Act],
  [128 | 0, 0, 1, 0, 0, 2, () => AutomationRulesFindingFilters, () => ActionList]
);
export var CreateAutomationRuleResponse = struct(n0, _CARRr, 0, [_RA], [0]);
export var CreateConfigurationPolicyRequest = struct(
  n0,
  _CCPR,
  0,
  [_N, _D, _CPonf, _Tags],
  [0, 0, () => Policy, 128 | 0]
);
export var CreateConfigurationPolicyResponse = struct(
  n0,
  _CCPRr,
  0,
  [_Ar, _I, _N, _D, _UA, _CA, _CPonf],
  [0, 0, 0, 0, 5, 5, () => Policy]
);
export var CreateConnectorV2Request = struct(
  n0,
  _CCVR,
  0,
  [_N, _D, _Prov, _KKA, _Tags, _CTl],
  [0, 0, [() => ProviderConfiguration, 0], 0, 128 | 0, [0, 4]]
);
export var CreateConnectorV2Response = struct(n0, _CCVRr, 0, [_CAon, _CIo, _AUut], [0, 0, 0]);
export var EnableSecurityHubRequest = struct(n0, _ESHR, 0, [_Tags, _EDS, _CFG], [128 | 0, 2, 0]);
export var EnableSecurityHubResponse = struct(n0, _ESHRn, 0, [], []);
export var EnableSecurityHubV2Request = struct(n0, _ESHVR, 0, [_Tags], [128 | 0]);
export var EnableSecurityHubV2Response = struct(n0, _ESHVRn, 0, [_HVA], [0]);
export var JiraCloudProviderConfiguration = struct(n0, _JCPC, 0, [_PK], [0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RAe], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Tags], [128 | 0]);
export var ServiceNowProviderConfiguration = struct(
  n0,
  _SNPC,
  0,
  [_INn, _CI, _CSli],
  [0, 0, [() => SensitiveNonEmptyString, 0]]
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RAe, _Tags], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RAe, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagMap = 128 | 0;

export var ProviderConfiguration = uni(
  n0,
  _PCro,
  0,
  [_JC, _SNer],
  [() => JiraCloudProviderConfiguration, [() => ServiceNowProviderConfiguration, 0]]
);
export var CreateAggregatorV2 = op(
  n0,
  _CAV,
  {
    [_h]: ["POST", "/aggregatorv2/create", 200],
  },
  () => CreateAggregatorV2Request,
  () => CreateAggregatorV2Response
);
export var CreateAutomationRule = op(
  n0,
  _CAR,
  {
    [_h]: ["POST", "/automationrules/create", 200],
  },
  () => CreateAutomationRuleRequest,
  () => CreateAutomationRuleResponse
);
export var CreateConfigurationPolicy = op(
  n0,
  _CCP,
  {
    [_h]: ["POST", "/configurationPolicy/create", 200],
  },
  () => CreateConfigurationPolicyRequest,
  () => CreateConfigurationPolicyResponse
);
export var CreateConnectorV2 = op(
  n0,
  _CCV,
  {
    [_h]: ["POST", "/connectorsv2", 200],
  },
  () => CreateConnectorV2Request,
  () => CreateConnectorV2Response
);
export var EnableSecurityHub = op(
  n0,
  _ESH,
  {
    [_h]: ["POST", "/accounts", 200],
  },
  () => EnableSecurityHubRequest,
  () => EnableSecurityHubResponse
);
export var EnableSecurityHubV2 = op(
  n0,
  _ESHV,
  {
    [_h]: ["POST", "/hubv2", 200],
  },
  () => EnableSecurityHubV2Request,
  () => EnableSecurityHubV2Response
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _URn,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
