// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ALPNPolicyNotSupportedException as __ALPNPolicyNotSupportedException,
  CertificateNotFoundException as __CertificateNotFoundException,
  DuplicateListenerException as __DuplicateListenerException,
  TooManyCertificatesException as __TooManyCertificatesException,
  TooManyListenersException as __TooManyListenersException,
  TooManyRulesException as __TooManyRulesException,
  TrustStoreNotReadyException as __TrustStoreNotReadyException,
} from "../models/index";
import {
  _Ac,
  _ALC,
  _ALCI,
  _ALCO,
  _ALPNPNSE,
  _AP,
  _aQE,
  _At,
  _ATSCN,
  _C,
  _c,
  _CA,
  _Ce,
  _CL,
  _CLI,
  _CLO,
  _CLr,
  _CNFE,
  _Con,
  _CR,
  _CRI,
  _CRO,
  _DA,
  _DL,
  _DLA,
  _DLAI,
  _DLAO,
  _DLC,
  _DLCI,
  _DLCO,
  _DLE,
  _DLe,
  _DLI,
  _DLIe,
  _DLO,
  _DLOe,
  _DRe,
  _DRIe,
  _DROe,
  _e,
  _hE,
  _ICCE,
  _ID,
  _K,
  _L,
  _LA,
  _LAi,
  _LAis,
  _LAist,
  _LBAo,
  _Lis,
  _M,
  _MA,
  _MAA,
  _Mar,
  _ML,
  _MLA,
  _MLAI,
  _MLAO,
  _MLI,
  _MLO,
  _Mo,
  _NM,
  _P,
  _Po,
  _Pr,
  _PS,
  _RAul,
  _RLC,
  _RLCI,
  _RLCO,
  _Ru,
  _SP,
  _Ta,
  _TMCE,
  _TMLE,
  _TMRE,
  _TSA,
  _TSAS,
  _TSNRE,
  _Va,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_2_Create";
import { Actions, RuleConditionList, Rules } from "./schemas_5_Rule";

/* eslint no-var: 0 */

export var AddListenerCertificatesInput = struct(n0, _ALCI, 0, [_LA, _C], [0, () => CertificateList]);
export var AddListenerCertificatesOutput = struct(n0, _ALCO, 0, [_C], [() => CertificateList]);
export var ALPNPolicyNotSupportedException = error(
  n0,
  _ALPNPNSE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ALPNPolicyNotFound`, 400],
  },
  [_M],
  [0],

  __ALPNPolicyNotSupportedException
);
export var Certificate = struct(n0, _Ce, 0, [_CA, _ID], [0, 2]);
export var CertificateNotFoundException = error(
  n0,
  _CNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CertificateNotFound`, 400],
  },
  [_M],
  [0],

  __CertificateNotFoundException
);
export var CreateListenerInput = struct(
  n0,
  _CLI,
  0,
  [_LBAo, _Pr, _Po, _SP, _C, _DA, _AP, _Ta, _MA],
  [0, 0, 1, 0, () => CertificateList, () => Actions, 64 | 0, () => TagList, () => MutualAuthenticationAttributes]
);
export var CreateListenerOutput = struct(n0, _CLO, 0, [_L], [() => Listeners]);
export var CreateRuleInput = struct(
  n0,
  _CRI,
  0,
  [_LA, _Con, _P, _Ac, _Ta],
  [0, () => RuleConditionList, 1, () => Actions, () => TagList]
);
export var CreateRuleOutput = struct(n0, _CRO, 0, [_Ru], [() => Rules]);
export var DeleteListenerInput = struct(n0, _DLI, 0, [_LA], [0]);
export var DeleteListenerOutput = struct(n0, _DLO, 0, [], []);
export var DescribeListenerAttributesInput = struct(n0, _DLAI, 0, [_LA], [0]);
export var DescribeListenerAttributesOutput = struct(n0, _DLAO, 0, [_At], [() => ListenerAttributes]);
export var DescribeListenerCertificatesInput = struct(n0, _DLCI, 0, [_LA, _Mar, _PS], [0, 0, 1]);
export var DescribeListenerCertificatesOutput = struct(n0, _DLCO, 0, [_C, _NM], [() => CertificateList, 0]);
export var DescribeListenersInput = struct(n0, _DLIe, 0, [_LBAo, _LAi, _Mar, _PS], [0, 64 | 0, 0, 1]);
export var DescribeListenersOutput = struct(n0, _DLOe, 0, [_L, _NM], [() => Listeners, 0]);
export var DescribeRulesInput = struct(n0, _DRIe, 0, [_LA, _RAul, _Mar, _PS], [0, 64 | 0, 0, 1]);
export var DescribeRulesOutput = struct(n0, _DROe, 0, [_Ru, _NM], [() => Rules, 0]);
export var DuplicateListenerException = error(
  n0,
  _DLE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DuplicateListener`, 400],
  },
  [_M],
  [0],

  __DuplicateListenerException
);
export var Listener = struct(
  n0,
  _Lis,
  0,
  [_LA, _LBAo, _Po, _Pr, _C, _SP, _DA, _AP, _MA],
  [0, 0, 1, 0, () => CertificateList, 0, () => Actions, 64 | 0, () => MutualAuthenticationAttributes]
);
export var ListenerAttribute = struct(n0, _LAis, 0, [_K, _Va], [0, 0]);
export var ModifyListenerAttributesInput = struct(n0, _MLAI, 0, [_LA, _At], [0, () => ListenerAttributes]);
export var ModifyListenerAttributesOutput = struct(n0, _MLAO, 0, [_At], [() => ListenerAttributes]);
export var ModifyListenerInput = struct(
  n0,
  _MLI,
  0,
  [_LA, _Po, _Pr, _SP, _C, _DA, _AP, _MA],
  [0, 1, 0, 0, () => CertificateList, () => Actions, 64 | 0, () => MutualAuthenticationAttributes]
);
export var ModifyListenerOutput = struct(n0, _MLO, 0, [_L], [() => Listeners]);
export var MutualAuthenticationAttributes = struct(n0, _MAA, 0, [_Mo, _TSA, _ICCE, _TSAS, _ATSCN], [0, 0, 2, 0, 0]);
export var RemoveListenerCertificatesInput = struct(n0, _RLCI, 0, [_LA, _C], [0, () => CertificateList]);
export var RemoveListenerCertificatesOutput = struct(n0, _RLCO, 0, [], []);
export var TooManyCertificatesException = error(
  n0,
  _TMCE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyCertificates`, 400],
  },
  [_M],
  [0],

  __TooManyCertificatesException
);
export var TooManyListenersException = error(
  n0,
  _TMLE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyListeners`, 400],
  },
  [_M],
  [0],

  __TooManyListenersException
);
export var TooManyRulesException = error(
  n0,
  _TMRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyRules`, 400],
  },
  [_M],
  [0],

  __TooManyRulesException
);
export var TrustStoreNotReadyException = error(
  n0,
  _TSNRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TrustStoreNotReady`, 400],
  },
  [_M],
  [0],

  __TrustStoreNotReadyException
);
export var AlpnPolicyName = 64 | 0;

export var CertificateList = list(n0, _CL, 0, () => Certificate);
export var ListenerArns = 64 | 0;

export var ListenerAttributes = list(n0, _LAist, 0, () => ListenerAttribute);
export var Listeners = list(n0, _L, 0, () => Listener);
export var RuleArns = 64 | 0;

export var AddListenerCertificates = op(
  n0,
  _ALC,
  0,
  () => AddListenerCertificatesInput,
  () => AddListenerCertificatesOutput
);
export var CreateListener = op(
  n0,
  _CLr,
  0,
  () => CreateListenerInput,
  () => CreateListenerOutput
);
export var CreateRule = op(
  n0,
  _CR,
  0,
  () => CreateRuleInput,
  () => CreateRuleOutput
);
export var DeleteListener = op(
  n0,
  _DL,
  0,
  () => DeleteListenerInput,
  () => DeleteListenerOutput
);
export var DescribeListenerAttributes = op(
  n0,
  _DLA,
  0,
  () => DescribeListenerAttributesInput,
  () => DescribeListenerAttributesOutput
);
export var DescribeListenerCertificates = op(
  n0,
  _DLC,
  0,
  () => DescribeListenerCertificatesInput,
  () => DescribeListenerCertificatesOutput
);
export var DescribeListeners = op(
  n0,
  _DLe,
  0,
  () => DescribeListenersInput,
  () => DescribeListenersOutput
);
export var DescribeRules = op(
  n0,
  _DRe,
  0,
  () => DescribeRulesInput,
  () => DescribeRulesOutput
);
export var ModifyListener = op(
  n0,
  _ML,
  0,
  () => ModifyListenerInput,
  () => ModifyListenerOutput
);
export var ModifyListenerAttributes = op(
  n0,
  _MLA,
  0,
  () => ModifyListenerAttributesInput,
  () => ModifyListenerAttributesOutput
);
export var RemoveListenerCertificates = op(
  n0,
  _RLC,
  0,
  () => RemoveListenerCertificatesInput,
  () => RemoveListenerCertificatesOutput
);
