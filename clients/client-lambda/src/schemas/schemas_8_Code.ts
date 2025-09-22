// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AP,
  _CCSC,
  _CCSCR,
  _CCSCRr,
  _CSC,
  _CSCA,
  _CSCI,
  _CSCL,
  _CSCo,
  _CSP,
  _D,
  _DCSC,
  _DCSCR,
  _DCSCRe,
  _FAu,
  _FN,
  _GCSC,
  _GCSCR,
  _GCSCRe,
  _GFCSC,
  _GFCSCR,
  _GFCSCRe,
  _h,
  _hQ,
  _LCSC,
  _LCSCR,
  _LCSCRi,
  _LFBCSC,
  _LFBCSCR,
  _LFBCSCRi,
  _LM,
  _Ma,
  _MI,
  _NM,
  _PFCSC,
  _PFCSCR,
  _PFCSCRu,
  _SPVA,
  _Ta,
  _UAOD,
  _UCSC,
  _UCSCR,
  _UCSCRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AllowedPublishers = struct(n0, _AP, 0, [_SPVA], [64 | 0]);
export var CodeSigningConfig = struct(
  n0,
  _CSC,
  0,
  [_CSCI, _CSCA, _D, _AP, _CSP, _LM],
  [0, 0, 0, () => AllowedPublishers, () => CodeSigningPolicies, 0]
);
export var CodeSigningPolicies = struct(n0, _CSP, 0, [_UAOD], [0]);
export var CreateCodeSigningConfigRequest = struct(
  n0,
  _CCSCR,
  0,
  [_D, _AP, _CSP, _Ta],
  [0, () => AllowedPublishers, () => CodeSigningPolicies, 128 | 0]
);
export var CreateCodeSigningConfigResponse = struct(n0, _CCSCRr, 0, [_CSC], [() => CodeSigningConfig]);
export var DeleteCodeSigningConfigRequest = struct(n0, _DCSCR, 0, [_CSCA], [[0, 1]]);
export var DeleteCodeSigningConfigResponse = struct(n0, _DCSCRe, 0, [], []);
export var GetCodeSigningConfigRequest = struct(n0, _GCSCR, 0, [_CSCA], [[0, 1]]);
export var GetCodeSigningConfigResponse = struct(n0, _GCSCRe, 0, [_CSC], [() => CodeSigningConfig]);
export var GetFunctionCodeSigningConfigRequest = struct(n0, _GFCSCR, 0, [_FN], [[0, 1]]);
export var GetFunctionCodeSigningConfigResponse = struct(n0, _GFCSCRe, 0, [_CSCA, _FN], [0, 0]);
export var ListCodeSigningConfigsRequest = struct(
  n0,
  _LCSCR,
  0,
  [_Ma, _MI],
  [
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListCodeSigningConfigsResponse = struct(n0, _LCSCRi, 0, [_NM, _CSCo], [0, () => CodeSigningConfigList]);
export var ListFunctionsByCodeSigningConfigRequest = struct(
  n0,
  _LFBCSCR,
  0,
  [_CSCA, _Ma, _MI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListFunctionsByCodeSigningConfigResponse = struct(n0, _LFBCSCRi, 0, [_NM, _FAu], [0, 64 | 0]);
export var PutFunctionCodeSigningConfigRequest = struct(n0, _PFCSCR, 0, [_CSCA, _FN], [0, [0, 1]]);
export var PutFunctionCodeSigningConfigResponse = struct(n0, _PFCSCRu, 0, [_CSCA, _FN], [0, 0]);
export var UpdateCodeSigningConfigRequest = struct(
  n0,
  _UCSCR,
  0,
  [_CSCA, _D, _AP, _CSP],
  [[0, 1], 0, () => AllowedPublishers, () => CodeSigningPolicies]
);
export var UpdateCodeSigningConfigResponse = struct(n0, _UCSCRp, 0, [_CSC], [() => CodeSigningConfig]);
export var CodeSigningConfigList = list(n0, _CSCL, 0, () => CodeSigningConfig);
export var FunctionArnList = 64 | 0;

export var SigningProfileVersionArns = 64 | 0;

export var CreateCodeSigningConfig = op(
  n0,
  _CCSC,
  {
    [_h]: ["POST", "/2020-04-22/code-signing-configs", 201],
  },
  () => CreateCodeSigningConfigRequest,
  () => CreateCodeSigningConfigResponse
);
export var DeleteCodeSigningConfig = op(
  n0,
  _DCSC,
  {
    [_h]: ["DELETE", "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}", 204],
  },
  () => DeleteCodeSigningConfigRequest,
  () => DeleteCodeSigningConfigResponse
);
export var GetCodeSigningConfig = op(
  n0,
  _GCSC,
  {
    [_h]: ["GET", "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}", 200],
  },
  () => GetCodeSigningConfigRequest,
  () => GetCodeSigningConfigResponse
);
export var GetFunctionCodeSigningConfig = op(
  n0,
  _GFCSC,
  {
    [_h]: ["GET", "/2020-06-30/functions/{FunctionName}/code-signing-config", 200],
  },
  () => GetFunctionCodeSigningConfigRequest,
  () => GetFunctionCodeSigningConfigResponse
);
export var ListCodeSigningConfigs = op(
  n0,
  _LCSC,
  {
    [_h]: ["GET", "/2020-04-22/code-signing-configs", 200],
  },
  () => ListCodeSigningConfigsRequest,
  () => ListCodeSigningConfigsResponse
);
export var ListFunctionsByCodeSigningConfig = op(
  n0,
  _LFBCSC,
  {
    [_h]: ["GET", "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}/functions", 200],
  },
  () => ListFunctionsByCodeSigningConfigRequest,
  () => ListFunctionsByCodeSigningConfigResponse
);
export var PutFunctionCodeSigningConfig = op(
  n0,
  _PFCSC,
  {
    [_h]: ["PUT", "/2020-06-30/functions/{FunctionName}/code-signing-config", 200],
  },
  () => PutFunctionCodeSigningConfigRequest,
  () => PutFunctionCodeSigningConfigResponse
);
export var UpdateCodeSigningConfig = op(
  n0,
  _UCSC,
  {
    [_h]: ["PUT", "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}", 200],
  },
  () => UpdateCodeSigningConfigRequest,
  () => UpdateCodeSigningConfigResponse
);
