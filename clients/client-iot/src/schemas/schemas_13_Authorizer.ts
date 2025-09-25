// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidResponseException as __InvalidResponseException } from "../models/index";
import {
  _aA,
  _aAO,
  _aC,
  _ACu,
  _AD,
  _aDut,
  _aFA,
  _aNu,
  _aO,
  _aP,
  _ASu,
  _aTu,
  _Au,
  _aut,
  _CA,
  _CAR,
  _CARr,
  _CCC,
  _cCC,
  _cCCA,
  _cD,
  _CDC,
  _CDCR,
  _CDCRr,
  _cIl,
  _cl,
  _DA,
  _DAe,
  _dAIS,
  _dAN,
  _DAR,
  _DARe,
  _DARes,
  _DAResc,
  _dCA,
  _dCN,
  _dCS,
  _DDA,
  _DDAR,
  _DDARe,
  _DDCe,
  _DDCRes,
  _DDCResc,
  _dNo,
  _dT,
  _eCFH,
  _eOCSPC,
  _er,
  _h,
  _HC,
  _hC,
  _hE,
  _he,
  _hQ,
  _iAO,
  _iAs,
  _IREn,
  _LAi,
  _LAR,
  _LARi,
  _lMD,
  _lSCD,
  _ma,
  _mC,
  _MCq,
  _me,
  _nM,
  _oARA,
  _oLA,
  _pas,
  _pDol,
  _pIri,
  _pS,
  _qS,
  _rAC,
  _rAIS,
  _sCA,
  _sCAe,
  _SCC,
  _sCC,
  _SCe,
  _sCe,
  _SCS,
  _sCS,
  _sCSD,
  _sD,
  _SDA,
  _SDAR,
  _SDARe,
  _sNer,
  _sP,
  _st,
  _sTe,
  _tag,
  _tC,
  _TCl,
  _tCl,
  _TCls,
  _TIA,
  _TIAR,
  _TIARe,
  _tKN,
  _tok,
  _tSo,
  _tSPK,
  _UA,
  _UAR,
  _UARp,
  _UDC,
  _UDCR,
  _UDCRp,
  _us,
  _vCA,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AuthorizerConfig = struct(n0, _ACu, 0, [_dAN, _aAO], [0, 2]);
export var AuthorizerDescription = struct(
  n0,
  _AD,
  0,
  [_aNu, _aA, _aFA, _tKN, _tSPK, _st, _cD, _lMD, _sD, _eCFH],
  [0, 0, 0, 0, 128 | 0, 0, 4, 4, 2, 2]
);
export var AuthorizerSummary = struct(n0, _ASu, 0, [_aNu, _aA], [0, 0]);
export var ClientCertificateConfig = struct(n0, _CCC, 0, [_cCCA], [0]);
export var CreateAuthorizerRequest = struct(
  n0,
  _CAR,
  0,
  [_aNu, _aFA, _tKN, _tSPK, _st, _tag, _sD, _eCFH],
  [[0, 1], 0, 0, 128 | 0, 0, () => TagList, 2, 2]
);
export var CreateAuthorizerResponse = struct(n0, _CARr, 0, [_aNu, _aA], [0, 0]);
export var CreateDomainConfigurationRequest = struct(
  n0,
  _CDCR,
  0,
  [_dCN, _dNo, _sCA, _vCA, _aC, _sTe, _tag, _tC, _sCC, _aTu, _aP, _cCC],
  [
    [0, 1],
    0,
    64 | 0,
    0,
    () => AuthorizerConfig,
    0,
    () => TagList,
    () => TlsConfig,
    () => ServerCertificateConfig,
    0,
    0,
    () => ClientCertificateConfig,
  ]
);
export var CreateDomainConfigurationResponse = struct(n0, _CDCRr, 0, [_dCN, _dCA], [0, 0]);
export var DeleteAuthorizerRequest = struct(n0, _DAR, 0, [_aNu], [[0, 1]]);
export var DeleteAuthorizerResponse = struct(n0, _DARe, 0, [], []);
export var DescribeAuthorizerRequest = struct(n0, _DARes, 0, [_aNu], [[0, 1]]);
export var DescribeAuthorizerResponse = struct(n0, _DAResc, 0, [_aDut], [() => AuthorizerDescription]);
export var DescribeDefaultAuthorizerRequest = struct(n0, _DDAR, 0, [], []);
export var DescribeDefaultAuthorizerResponse = struct(n0, _DDARe, 0, [_aDut], [() => AuthorizerDescription]);
export var DescribeDomainConfigurationRequest = struct(n0, _DDCRes, 0, [_dCN], [[0, 1]]);
export var DescribeDomainConfigurationResponse = struct(
  n0,
  _DDCResc,
  0,
  [_dCN, _dCA, _dNo, _sCe, _aC, _dCS, _sTe, _dT, _lSCD, _tC, _sCC, _aTu, _aP, _cCC],
  [
    0,
    0,
    0,
    () => ServerCertificates,
    () => AuthorizerConfig,
    0,
    0,
    0,
    4,
    () => TlsConfig,
    () => ServerCertificateConfig,
    0,
    0,
    () => ClientCertificateConfig,
  ]
);
export var HttpContext = struct(n0, _HC, 0, [_he, _qS], [128 | 0, 0]);
export var InvalidResponseException = error(
  n0,
  _IREn,
  {
    [_er]: _cl,
    [_hE]: 400,
  },
  [_me],
  [0],

  __InvalidResponseException
);
export var ListAuthorizersRequest = struct(
  n0,
  _LAR,
  0,
  [_pS, _ma, _aO, _st],
  [
    [
      1,
      {
        [_hQ]: _pS,
      },
    ],
    [
      0,
      {
        [_hQ]: _ma,
      },
    ],
    [
      2,
      {
        [_hQ]: _iAO,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
  ]
);
export var ListAuthorizersResponse = struct(n0, _LARi, 0, [_aut, _nM], [() => Authorizers, 0]);
export var MqttContext = struct(n0, _MCq, 0, [_us, _pas, _cIl], [0, 21, 0]);
export var ServerCertificateConfig = struct(n0, _SCC, 0, [_eOCSPC, _oLA, _oARA], [2, 0, 0]);
export var ServerCertificateSummary = struct(n0, _SCS, 0, [_sCAe, _sCS, _sCSD], [0, 0, 0]);
export var SetDefaultAuthorizerRequest = struct(n0, _SDAR, 0, [_aNu], [0]);
export var SetDefaultAuthorizerResponse = struct(n0, _SDARe, 0, [_aNu, _aA], [0, 0]);
export var TestInvokeAuthorizerRequest = struct(
  n0,
  _TIAR,
  0,
  [_aNu, _tok, _tSo, _hC, _mC, _tCl],
  [[0, 1], 0, 0, () => HttpContext, () => MqttContext, () => TlsContext]
);
export var TestInvokeAuthorizerResponse = struct(
  n0,
  _TIARe,
  0,
  [_iAs, _pIri, _pDol, _rAIS, _dAIS],
  [2, 0, 64 | 0, 1, 1]
);
export var TlsConfig = struct(n0, _TCl, 0, [_sP], [0]);
export var TlsContext = struct(n0, _TCls, 0, [_sNer], [0]);
export var UpdateAuthorizerRequest = struct(
  n0,
  _UAR,
  0,
  [_aNu, _aFA, _tKN, _tSPK, _st, _eCFH],
  [[0, 1], 0, 0, 128 | 0, 0, 2]
);
export var UpdateAuthorizerResponse = struct(n0, _UARp, 0, [_aNu, _aA], [0, 0]);
export var UpdateDomainConfigurationRequest = struct(
  n0,
  _UDCR,
  0,
  [_dCN, _aC, _dCS, _rAC, _tC, _sCC, _aTu, _aP, _cCC],
  [
    [0, 1],
    () => AuthorizerConfig,
    0,
    2,
    () => TlsConfig,
    () => ServerCertificateConfig,
    0,
    0,
    () => ClientCertificateConfig,
  ]
);
export var UpdateDomainConfigurationResponse = struct(n0, _UDCRp, 0, [_dCN, _dCA], [0, 0]);
export var Authorizers = list(n0, _Au, 0, () => AuthorizerSummary);
export var PolicyDocuments = 64 | 0;

export var ServerCertificateArns = 64 | 0;

export var ServerCertificates = list(n0, _SCe, 0, () => ServerCertificateSummary);
export var HttpHeaders = 128 | 0;

export var PublicKeyMap = 128 | 0;

export var CreateAuthorizer = op(
  n0,
  _CA,
  {
    [_h]: ["POST", "/authorizer/{authorizerName}", 200],
  },
  () => CreateAuthorizerRequest,
  () => CreateAuthorizerResponse
);
export var CreateDomainConfiguration = op(
  n0,
  _CDC,
  {
    [_h]: ["POST", "/domainConfigurations/{domainConfigurationName}", 200],
  },
  () => CreateDomainConfigurationRequest,
  () => CreateDomainConfigurationResponse
);
export var DeleteAuthorizer = op(
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/authorizer/{authorizerName}", 200],
  },
  () => DeleteAuthorizerRequest,
  () => DeleteAuthorizerResponse
);
export var DescribeAuthorizer = op(
  n0,
  _DAe,
  {
    [_h]: ["GET", "/authorizer/{authorizerName}", 200],
  },
  () => DescribeAuthorizerRequest,
  () => DescribeAuthorizerResponse
);
export var DescribeDefaultAuthorizer = op(
  n0,
  _DDA,
  {
    [_h]: ["GET", "/default-authorizer", 200],
  },
  () => DescribeDefaultAuthorizerRequest,
  () => DescribeDefaultAuthorizerResponse
);
export var DescribeDomainConfiguration = op(
  n0,
  _DDCe,
  {
    [_h]: ["GET", "/domainConfigurations/{domainConfigurationName}", 200],
  },
  () => DescribeDomainConfigurationRequest,
  () => DescribeDomainConfigurationResponse
);
export var ListAuthorizers = op(
  n0,
  _LAi,
  {
    [_h]: ["GET", "/authorizers", 200],
  },
  () => ListAuthorizersRequest,
  () => ListAuthorizersResponse
);
export var SetDefaultAuthorizer = op(
  n0,
  _SDA,
  {
    [_h]: ["POST", "/default-authorizer", 200],
  },
  () => SetDefaultAuthorizerRequest,
  () => SetDefaultAuthorizerResponse
);
export var TestInvokeAuthorizer = op(
  n0,
  _TIA,
  {
    [_h]: ["POST", "/authorizer/{authorizerName}/test", 200],
  },
  () => TestInvokeAuthorizerRequest,
  () => TestInvokeAuthorizerResponse
);
export var UpdateAuthorizer = op(
  n0,
  _UA,
  {
    [_h]: ["PUT", "/authorizer/{authorizerName}", 200],
  },
  () => UpdateAuthorizerRequest,
  () => UpdateAuthorizerResponse
);
export var UpdateDomainConfiguration = op(
  n0,
  _UDC,
  {
    [_h]: ["PUT", "/domainConfigurations/{domainConfigurationName}", 200],
  },
  () => UpdateDomainConfigurationRequest,
  () => UpdateDomainConfigurationResponse
);
