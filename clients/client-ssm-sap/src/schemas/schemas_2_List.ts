// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _AA,
  _AAA,
  _AC,
  _ACL,
  _AH,
  _AI,
  _Ap,
  _Ar,
  _ARA,
  _AS,
  _ASL,
  _ATl,
  _ATp,
  _B,
  _BC,
  _BM,
  _C,
  _CC,
  _CCA,
  _CI,
  _CIL,
  _CIo,
  _CIom,
  _CIon,
  _Co,
  _Cr,
  _CS,
  _CSL,
  _CSl,
  _CT,
  _CTAOU,
  _CTo,
  _CTR,
  _D,
  _DA,
  _Da,
  _DC,
  _DCM,
  _DI,
  _DN,
  _DS,
  _DSa,
  _DSL,
  _DT,
  _ECII,
  _EII,
  _ENBIP,
  _ER,
  _Fi,
  _GA,
  _GAI,
  _GAO,
  _GC,
  _GCI,
  _GCO,
  _GD,
  _GDI,
  _GDO,
  _H,
  _h,
  _HI,
  _HL,
  _HN,
  _Ho,
  _HOM,
  _Hos,
  _hQ,
  _HR,
  _HRM,
  _HT,
  _HV,
  _I,
  _IA,
  _IAL,
  _IAM,
  _IAp,
  _II,
  _In,
  _LA,
  _LAI,
  _LAO,
  _LC,
  _LCI,
  _LCO,
  _LD,
  _LDI,
  _LDO,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _LU,
  _M,
  _MR,
  _NT,
  _OI,
  _OIp,
  _OV,
  _PC,
  _PH,
  _Pr,
  _R,
  _rA,
  _RAe,
  _RAI,
  _RAO,
  _S,
  _SF,
  _SH,
  _SI,
  _Si,
  _SIN,
  _SKV,
  _SM,
  _SN,
  _SQLP,
  _T,
  _t,
  _Ta,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _UAS,
  _UASI,
  _UASO,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";
import { FilterList } from "./schemas_3_List";

/* eslint no-var: 0 */

export var SecretId = sim(n0, _SI, 0, 8);
export var Application = struct(
  n0,
  _A,
  0,
  [_I, _T, _Ar, _ARA, _S, _DS, _C, _LU, _SM, _AAA],
  [0, 0, 0, 0, 0, 0, 64 | 0, 4, 0, 64 | 0]
);
export var ApplicationCredential = struct(n0, _AC, 0, [_DN, _CT, _SI], [0, 0, [() => SecretId, 0]]);
export var ApplicationSummary = struct(n0, _AS, 0, [_I, _DS, _T, _Ar, _Ta], [0, 0, 0, 0, 128 | 0]);
export var AssociatedHost = struct(n0, _AH, 0, [_H, _EII, _IA, _OV], [0, 0, () => IpAddressList, 0]);
export var BackintConfig = struct(n0, _BC, 0, [_BM, _ENBIP], [0, 2]);
export var Component = struct(
  n0,
  _Co,
  0,
  [_CI, _Si, _SN, _PC, _CC, _AI, _CTo, _S, _SH, _SF, _SKV, _HV, _R, _AH, _D, _Ho, _PH, _DC, _LU, _Ar],
  [
    0,
    0,
    0,
    0,
    64 | 0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => Resilience,
    () => AssociatedHost,
    64 | 0,
    () => HostList,
    0,
    () => DatabaseConnection,
    4,
    0,
  ]
);
export var ComponentInfo = struct(n0, _CIo, 0, [_CTo, _Si, _EII], [0, 0, 0]);
export var ComponentSummary = struct(n0, _CS, 0, [_AI, _CI, _CTo, _Ta, _Ar], [0, 0, 0, 128 | 0, 0]);
export var Database = struct(
  n0,
  _Da,
  0,
  [_AI, _CI, _Cr, _DI, _DN, _DT, _Ar, _S, _PH, _SQLP, _LU, _CCA],
  [0, 0, [() => ApplicationCredentialList, 0], 0, 0, 0, 0, 0, 0, 1, 4, 64 | 0]
);
export var DatabaseConnection = struct(n0, _DC, 0, [_DCM, _DA, _CIon], [0, 0, 0]);
export var DatabaseSummary = struct(n0, _DSa, 0, [_AI, _CI, _DI, _DT, _Ar, _Ta], [0, 0, 0, 0, 0, 128 | 0]);
export var GetApplicationInput = struct(n0, _GAI, 0, [_AI, _AA, _ARA], [0, 0, 0]);
export var GetApplicationOutput = struct(n0, _GAO, 0, [_A, _Ta], [() => Application, 128 | 0]);
export var GetComponentInput = struct(n0, _GCI, 0, [_AI, _CI], [0, 0]);
export var GetComponentOutput = struct(n0, _GCO, 0, [_Co, _Ta], [() => Component, 128 | 0]);
export var GetDatabaseInput = struct(n0, _GDI, 0, [_AI, _CI, _DI, _DA], [0, 0, 0, 0]);
export var GetDatabaseOutput = struct(n0, _GDO, 0, [_Da, _Ta], [[() => Database, 0], 128 | 0]);
export var Host = struct(n0, _Hos, 0, [_HN, _HI, _ECII, _II, _HR, _OV], [0, 0, 0, 0, 0, 0]);
export var IpAddressMember = struct(n0, _IAM, 0, [_IAp, _Pr, _ATl], [0, 2, 0]);
export var ListApplicationsInput = struct(n0, _LAI, 0, [_NT, _MR, _Fi], [0, 1, () => FilterList]);
export var ListApplicationsOutput = struct(n0, _LAO, 0, [_Ap, _NT], [() => ApplicationSummaryList, 0]);
export var ListComponentsInput = struct(n0, _LCI, 0, [_AI, _NT, _MR], [0, 0, 1]);
export var ListComponentsOutput = struct(n0, _LCO, 0, [_C, _NT], [() => ComponentSummaryList, 0]);
export var ListDatabasesInput = struct(n0, _LDI, 0, [_AI, _CI, _NT, _MR], [0, 0, 0, 1]);
export var ListDatabasesOutput = struct(n0, _LDO, 0, [_D, _NT], [() => DatabaseSummaryList, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [128 | 0]);
export var RegisterApplicationInput = struct(
  n0,
  _RAI,
  0,
  [_AI, _ATp, _In, _SIN, _Si, _Ta, _Cr, _DA, _CIom],
  [0, 0, 64 | 0, 0, 0, 128 | 0, [() => ApplicationCredentialList, 0], 0, () => ComponentInfoList]
);
export var RegisterApplicationOutput = struct(n0, _RAO, 0, [_A, _OI], [() => Application, 0]);
export var Resilience = struct(n0, _R, 0, [_HT, _HRM, _HOM, _CSl, _ER], [0, 0, 0, 0, 2]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _t], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rA, _tK],
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
export var UpdateApplicationSettingsInput = struct(
  n0,
  _UASI,
  0,
  [_AI, _CTAOU, _CTR, _B, _DA],
  [0, [() => ApplicationCredentialList, 0], [() => ApplicationCredentialList, 0], () => BackintConfig, 0]
);
export var UpdateApplicationSettingsOutput = struct(n0, _UASO, 0, [_M, _OIp], [0, 64 | 0]);
export var ApplicationArnList = 64 | 0;

export var ApplicationCredentialList = list(n0, _ACL, 0, [() => ApplicationCredential, 0]);
export var ApplicationSummaryList = list(n0, _ASL, 0, () => ApplicationSummary);
export var ComponentArnList = 64 | 0;

export var ComponentIdList = 64 | 0;

export var ComponentInfoList = list(n0, _CIL, 0, () => ComponentInfo);
export var ComponentSummaryList = list(n0, _CSL, 0, () => ComponentSummary);
export var DatabaseIdList = 64 | 0;

export var DatabaseSummaryList = list(n0, _DSL, 0, () => DatabaseSummary);
export var HostList = list(n0, _HL, 0, () => Host);
export var InstanceList = 64 | 0;

export var IpAddressList = list(n0, _IAL, 0, () => IpAddressMember);
export var OperationIdList = 64 | 0;

export var TagKeyList = 64 | 0;

export var TagMap = 128 | 0;

export var GetApplication = op(
  n0,
  _GA,
  {
    [_h]: ["POST", "/get-application", 200],
  },
  () => GetApplicationInput,
  () => GetApplicationOutput
);
export var GetComponent = op(
  n0,
  _GC,
  {
    [_h]: ["POST", "/get-component", 200],
  },
  () => GetComponentInput,
  () => GetComponentOutput
);
export var GetDatabase = op(
  n0,
  _GD,
  {
    [_h]: ["POST", "/get-database", 200],
  },
  () => GetDatabaseInput,
  () => GetDatabaseOutput
);
export var ListApplications = op(
  n0,
  _LA,
  {
    [_h]: ["POST", "/list-applications", 200],
  },
  () => ListApplicationsInput,
  () => ListApplicationsOutput
);
export var ListComponents = op(
  n0,
  _LC,
  {
    [_h]: ["POST", "/list-components", 200],
  },
  () => ListComponentsInput,
  () => ListComponentsOutput
);
export var ListDatabases = op(
  n0,
  _LD,
  {
    [_h]: ["POST", "/list-databases", 200],
  },
  () => ListDatabasesInput,
  () => ListDatabasesOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var RegisterApplication = op(
  n0,
  _RAe,
  {
    [_h]: ["POST", "/register-application", 200],
  },
  () => RegisterApplicationInput,
  () => RegisterApplicationOutput
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateApplicationSettings = op(
  n0,
  _UAS,
  {
    [_h]: ["POST", "/update-application-settings", 200],
  },
  () => UpdateApplicationSettingsInput,
  () => UpdateApplicationSettingsOutput
);
