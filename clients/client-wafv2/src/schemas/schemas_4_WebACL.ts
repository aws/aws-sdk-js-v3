// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  WAFLogDestinationPermissionIssueException as __WAFLogDestinationPermissionIssueException,
  WAFServiceLinkedRoleErrorException as __WAFServiceLinkedRoleErrorException,
} from "../models/index";
import {
  _A,
  _AC,
  _Al,
  _AQA,
  _B,
  _Be,
  _c,
  _CMP,
  _Co,
  _Cond,
  _Coo,
  _DB,
  _e,
  _EC,
  _EH,
  _FB,
  _Fi,
  _Fil,
  _FTM,
  _GLC,
  _GLCR,
  _GLCRe,
  _H,
  _HMP,
  _HO,
  _IC,
  _IFB,
  _IHn,
  _IP,
  _JAF,
  _JAFi,
  _JB,
  _JMP,
  _LC,
  _LCo,
  _LDC,
  _LF,
  _Li,
  _LLC,
  _LLCR,
  _LLCRi,
  _LNa,
  _LNC,
  _LS,
  _LTo,
  _M,
  _m,
  _MBFM,
  _Me,
  _MP,
  _MS,
  _N,
  _NM,
  _OH,
  _PLC,
  _PLCR,
  _PLCRu,
  _QS,
  _RA,
  _Re,
  _RF,
  _Sc,
  _SH,
  _SQA,
  _UF,
  _UP,
  _WAFLDPIE,
  _WAFSLREE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActionCondition = struct(n0, _AC, 0, [_A], [0]);
export var All = struct(n0, _Al, 0, [], []);
export var AllQueryArguments = struct(n0, _AQA, 0, [], []);
export var Body = struct(n0, _B, 0, [_OH], [0]);
export var Condition = struct(n0, _Co, 0, [_AC, _LNC], [() => ActionCondition, () => LabelNameCondition]);
export var CookieMatchPattern = struct(n0, _CMP, 0, [_Al, _IC, _EC], [() => All, 64 | 0, 64 | 0]);
export var Cookies = struct(n0, _Coo, 0, [_MP, _MS, _OH], [() => CookieMatchPattern, 0, 0]);
export var FieldToMatch = struct(
  n0,
  _FTM,
  0,
  [_SH, _SQA, _AQA, _UP, _QS, _B, _M, _JB, _H, _Coo, _HO, _JAF, _JAFi, _UF],
  [
    () => SingleHeader,
    () => SingleQueryArgument,
    () => AllQueryArguments,
    () => UriPath,
    () => QueryString,
    () => Body,
    () => Method,
    () => JsonBody,
    () => Headers,
    () => Cookies,
    () => HeaderOrder,
    () => JA3Fingerprint,
    () => JA4Fingerprint,
    () => UriFragment,
  ]
);
export var Filter = struct(n0, _Fi, 0, [_Be, _Re, _Cond], [0, 0, () => Conditions]);
export var GetLoggingConfigurationRequest = struct(n0, _GLCR, 0, [_RA, _LTo, _LS], [0, 0, 0]);
export var GetLoggingConfigurationResponse = struct(n0, _GLCRe, 0, [_LC], [() => LoggingConfiguration]);
export var HeaderMatchPattern = struct(n0, _HMP, 0, [_Al, _IHn, _EH], [() => All, 64 | 0, 64 | 0]);
export var HeaderOrder = struct(n0, _HO, 0, [_OH], [0]);
export var Headers = struct(n0, _H, 0, [_MP, _MS, _OH], [() => HeaderMatchPattern, 0, 0]);
export var JA3Fingerprint = struct(n0, _JAF, 0, [_FB], [0]);
export var JA4Fingerprint = struct(n0, _JAFi, 0, [_FB], [0]);
export var JsonBody = struct(n0, _JB, 0, [_MP, _MS, _IFB, _OH], [() => JsonMatchPattern, 0, 0, 0]);
export var JsonMatchPattern = struct(n0, _JMP, 0, [_Al, _IP], [() => All, 64 | 0]);
export var LabelNameCondition = struct(n0, _LNC, 0, [_LNa], [0]);
export var ListLoggingConfigurationsRequest = struct(n0, _LLCR, 0, [_Sc, _NM, _Li, _LS], [0, 0, 1, 0]);
export var ListLoggingConfigurationsResponse = struct(n0, _LLCRi, 0, [_LCo, _NM], [() => LoggingConfigurations, 0]);
export var LoggingConfiguration = struct(
  n0,
  _LC,
  0,
  [_RA, _LDC, _RF, _MBFM, _LF, _LTo, _LS],
  [0, 64 | 0, () => RedactedFields, 2, () => LoggingFilter, 0, 0]
);
export var LoggingFilter = struct(n0, _LF, 0, [_Fil, _DB], [() => Filters, 0]);
export var Method = struct(n0, _M, 0, [], []);
export var PutLoggingConfigurationRequest = struct(n0, _PLCR, 0, [_LC], [() => LoggingConfiguration]);
export var PutLoggingConfigurationResponse = struct(n0, _PLCRu, 0, [_LC], [() => LoggingConfiguration]);
export var QueryString = struct(n0, _QS, 0, [], []);
export var SingleHeader = struct(n0, _SH, 0, [_N], [0]);
export var SingleQueryArgument = struct(n0, _SQA, 0, [_N], [0]);
export var UriFragment = struct(n0, _UF, 0, [_FB], [0]);
export var UriPath = struct(n0, _UP, 0, [], []);
export var WAFLogDestinationPermissionIssueException = error(
  n0,
  _WAFLDPIE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],

  __WAFLogDestinationPermissionIssueException
);
export var WAFServiceLinkedRoleErrorException = error(
  n0,
  _WAFSLREE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __WAFServiceLinkedRoleErrorException
);
export var Conditions = list(n0, _Cond, 0, () => Condition);
export var CookieNames = 64 | 0;

export var Filters = list(n0, _Fil, 0, () => Filter);
export var HeaderNames = 64 | 0;

export var JsonPointerPaths = 64 | 0;

export var LogDestinationConfigs = 64 | 0;

export var LoggingConfigurations = list(n0, _LCo, 0, () => LoggingConfiguration);
export var RedactedFields = list(n0, _RF, 0, () => FieldToMatch);
export var GetLoggingConfiguration = op(
  n0,
  _GLC,
  0,
  () => GetLoggingConfigurationRequest,
  () => GetLoggingConfigurationResponse
);
export var ListLoggingConfigurations = op(
  n0,
  _LLC,
  0,
  () => ListLoggingConfigurationsRequest,
  () => ListLoggingConfigurationsResponse
);
export var PutLoggingConfiguration = op(
  n0,
  _PLC,
  0,
  () => PutLoggingConfigurationRequest,
  () => PutLoggingConfigurationResponse
);
