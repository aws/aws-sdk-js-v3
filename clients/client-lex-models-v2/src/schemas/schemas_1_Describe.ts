// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aTU,
  _bI,
  _bLEU,
  _bRI,
  _BRR,
  _bRR,
  _BRRS,
  _bRS,
  _bV,
  _cDT,
  _CUU,
  _CUUR,
  _CUURr,
  _dAU,
  _DBRescr,
  _DBRRes,
  _DBRResc,
  _DEe,
  _DERes,
  _DEResc,
  _dIC,
  _dSTC,
  _dU,
  _eI,
  _eSn,
  _eSx,
  _fF,
  _fR,
  _GTEAU,
  _GTEAUR,
  _GTEAURe,
  _h,
  _iIm,
  _in,
  _ISn,
  _lI,
  _lUDT,
  _rS,
  _sT,
  _st,
  _STS,
  _tEI,
  _tSS,
  _uU,
  n0,
} from "./schemas_0";
import { ExportResourceSpecification } from "./schemas_7_Export";
import { EncryptionSetting, TranscriptSourceSetting } from "./schemas_15_Bot";

/* eslint no-var: 0 */

export var BotRecommendationResults = struct(
  n0,
  _BRR,
  0,
  [_bLEU, _aTU, _st],
  [0, 0, () => BotRecommendationResultStatistics]
);
export var BotRecommendationResultStatistics = struct(
  n0,
  _BRRS,
  0,
  [_in, _sT],
  [() => IntentStatistics, () => SlotTypeStatistics]
);
export var CreateUploadUrlRequest = struct(n0, _CUUR, 0, [], []);
export var CreateUploadUrlResponse = struct(n0, _CUURr, 0, [_iIm, _uU], [0, 0]);
export var DescribeBotRecommendationRequest = struct(
  n0,
  _DBRRes,
  0,
  [_bI, _bV, _lI, _bRI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeBotRecommendationResponse = struct(
  n0,
  _DBRResc,
  0,
  [_bI, _bV, _lI, _bRS, _bRI, _fR, _cDT, _lUDT, _tSS, _eSn, _bRR],
  [
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    4,
    4,
    () => TranscriptSourceSetting,
    [() => EncryptionSetting, 0],
    () => BotRecommendationResults,
  ]
);
export var DescribeExportRequest = struct(n0, _DERes, 0, [_eI], [[0, 1]]);
export var DescribeExportResponse = struct(
  n0,
  _DEResc,
  0,
  [_eI, _rS, _fF, _eSx, _fR, _dU, _cDT, _lUDT],
  [0, () => ExportResourceSpecification, 0, 0, 64 | 0, 0, 4, 4]
);
export var GetTestExecutionArtifactsUrlRequest = struct(n0, _GTEAUR, 0, [_tEI], [[0, 1]]);
export var GetTestExecutionArtifactsUrlResponse = struct(n0, _GTEAURe, 0, [_tEI, _dAU], [0, 0]);
export var IntentStatistics = struct(n0, _ISn, 0, [_dIC], [1]);
export var SlotTypeStatistics = struct(n0, _STS, 0, [_dSTC], [1]);
export var CreateUploadUrl = op(
  n0,
  _CUU,
  {
    [_h]: ["POST", "/createuploadurl", 200],
  },
  () => CreateUploadUrlRequest,
  () => CreateUploadUrlResponse
);
export var DescribeBotRecommendation = op(
  n0,
  _DBRescr,
  {
    [_h]: [
      "GET",
      "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}",
      200,
    ],
  },
  () => DescribeBotRecommendationRequest,
  () => DescribeBotRecommendationResponse
);
export var DescribeExport = op(
  n0,
  _DEe,
  {
    [_h]: ["GET", "/exports/{exportId}", 200],
  },
  () => DescribeExportRequest,
  () => DescribeExportResponse
);
export var GetTestExecutionArtifactsUrl = op(
  n0,
  _GTEAU,
  {
    [_h]: ["GET", "/testexecutions/{testExecutionId}/artifacturl", 200],
  },
  () => GetTestExecutionArtifactsUrlRequest,
  () => GetTestExecutionArtifactsUrlResponse
);
