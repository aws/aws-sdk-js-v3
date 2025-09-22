// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _bAI,
  _bI,
  _BIS,
  _bIS,
  _BLIS,
  _bLIS,
  _BM,
  _bM,
  _bMAI,
  _bMAN,
  _bMI,
  _bMN,
  _BMo,
  _bMV,
  _bN,
  _bS,
  _bT,
  _bTo,
  _bV,
  _CBR,
  _CBr,
  _CBRr,
  _cD,
  _cDT,
  _CLDS,
  _cLDS,
  _CLDSFB,
  _CVIS,
  _cVIS,
  _DBe,
  _DBRes,
  _DBResc,
  _DBVe,
  _DBVRes,
  _DBVResc,
  _de,
  _DIes,
  _DIRes,
  _DIResc,
  _DP,
  _dP,
  _DTSe,
  _DTSG,
  _DTSGR,
  _DTSGRe,
  _DTSRe,
  _DTSRes,
  _e,
  _ELS,
  _eLS,
  _eT,
  _f,
  _fP,
  _fR,
  _gDS,
  _h,
  _iIL,
  _iIm,
  _iM,
  _iRI,
  _iRN,
  _IRS,
  _iSm,
  _iSTTLIS,
  _kKA,
  _lI,
  _LTS,
  _LTSR,
  _LTSRi,
  _lUDT,
  _mo,
  _mRax,
  _mS,
  _nICT,
  _nTe,
  _nTu,
  _or,
  _pBN,
  _rA,
  _rS,
  _sBN,
  _sBo,
  _SI,
  _SIR,
  _SIRt,
  _sL,
  _sPa,
  _sta,
  _STSG,
  _STSGR,
  _STSGRt,
  _sTt,
  _tBAT,
  _tSe,
  _TSGDS,
  _tSGI,
  _tSGS,
  _tSI,
  _TSIIL,
  _TSIRS,
  _tSIRS,
  _tSN,
  _TSS,
  _TSSB,
  _TSSL,
  _TSSLe,
  _tST,
  _UB,
  _UBR,
  _UBRp,
  _UTSp,
  _UTSR,
  _UTSRp,
  _vS,
  n0,
} from "./schemas_0";
import { ParentBotNetworks } from "./schemas_22_Describe";
import { VoiceSettings } from "./schemas_27_Locale";
import { ImportExportFilePassword } from "./schemas_37_Export";

/* eslint no-var: 0 */

export var BotImportSpecification = struct(
  n0,
  _BIS,
  0,
  [_bN, _rA, _dP, _eLS, _iSTTLIS, _bT, _tBAT],
  [0, 0, () => DataPrivacy, () => ErrorLogSettings, 1, 128 | 0, 128 | 0]
);
export var BotLocaleImportSpecification = struct(
  n0,
  _BLIS,
  0,
  [_bI, _bV, _lI, _nICT, _vS],
  [0, 0, 0, 1, () => VoiceSettings]
);
export var BotMember = struct(n0, _BM, 0, [_bMI, _bMN, _bMAI, _bMAN, _bMV], [0, 0, 0, 0, 0]);
export var ConversationLogsDataSource = struct(
  n0,
  _CLDS,
  0,
  [_bI, _bAI, _lI, _f],
  [0, 0, 0, () => ConversationLogsDataSourceFilterBy]
);
export var ConversationLogsDataSourceFilterBy = struct(n0, _CLDSFB, 0, [_sTt, _eT, _iM], [4, 4, 0]);
export var CreateBotRequest = struct(
  n0,
  _CBR,
  0,
  [_bN, _de, _rA, _dP, _iSTTLIS, _bT, _tBAT, _bTo, _bM, _eLS],
  [0, 0, 0, () => DataPrivacy, 1, 128 | 0, 128 | 0, 0, () => BotMembers, () => ErrorLogSettings]
);
export var CreateBotResponse = struct(
  n0,
  _CBRr,
  0,
  [_bI, _bN, _de, _rA, _dP, _iSTTLIS, _bS, _cDT, _bT, _tBAT, _bTo, _bM, _eLS],
  [0, 0, 0, 0, () => DataPrivacy, 1, 0, 4, 128 | 0, 128 | 0, 0, () => BotMembers, () => ErrorLogSettings]
);
export var CustomVocabularyImportSpecification = struct(n0, _CVIS, 0, [_bI, _bV, _lI], [0, 0, 0]);
export var DataPrivacy = struct(n0, _DP, 0, [_cD], [2]);
export var DescribeBotRequest = struct(n0, _DBRes, 0, [_bI], [[0, 1]]);
export var DescribeBotResponse = struct(
  n0,
  _DBResc,
  0,
  [_bI, _bN, _de, _rA, _dP, _iSTTLIS, _bS, _cDT, _lUDT, _bTo, _bM, _fR, _eLS],
  [0, 0, 0, 0, () => DataPrivacy, 1, 0, 4, 4, 0, () => BotMembers, 64 | 0, () => ErrorLogSettings]
);
export var DescribeBotVersionRequest = struct(
  n0,
  _DBVRes,
  0,
  [_bI, _bV],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeBotVersionResponse = struct(
  n0,
  _DBVResc,
  0,
  [_bI, _bN, _bV, _de, _rA, _dP, _iSTTLIS, _bS, _fR, _cDT, _pBN, _bTo, _bM],
  [0, 0, 0, 0, 0, () => DataPrivacy, 1, 0, 64 | 0, 4, () => ParentBotNetworks, 0, () => BotMembers]
);
export var DescribeImportRequest = struct(n0, _DIRes, 0, [_iIm], [[0, 1]]);
export var DescribeImportResponse = struct(
  n0,
  _DIResc,
  0,
  [_iIm, _rS, _iRI, _iRN, _mS, _iSm, _fR, _cDT, _lUDT],
  [0, () => ImportResourceSpecification, 0, 0, 0, 0, 64 | 0, 4, 4]
);
export var DescribeTestSetGenerationRequest = struct(n0, _DTSGR, 0, [_tSGI], [[0, 1]]);
export var DescribeTestSetGenerationResponse = struct(
  n0,
  _DTSGRe,
  0,
  [_tSGI, _tSGS, _fR, _tSI, _tSN, _de, _sL, _gDS, _rA, _cDT, _lUDT],
  [0, 0, 64 | 0, 0, 0, 0, () => TestSetStorageLocation, () => TestSetGenerationDataSource, 0, 4, 4]
);
export var DescribeTestSetRequest = struct(n0, _DTSRe, 0, [_tSI], [[0, 1]]);
export var DescribeTestSetResponse = struct(
  n0,
  _DTSRes,
  0,
  [_tSI, _tSN, _de, _mo, _sta, _rA, _nTu, _sL, _cDT, _lUDT],
  [0, 0, 0, 0, 0, 0, 1, () => TestSetStorageLocation, 4, 4]
);
export var ErrorLogSettings = struct(n0, _ELS, 0, [_e], [2]);
export var ImportResourceSpecification = struct(
  n0,
  _IRS,
  0,
  [_bIS, _bLIS, _cVIS, _tSIRS],
  [
    () => BotImportSpecification,
    () => BotLocaleImportSpecification,
    () => CustomVocabularyImportSpecification,
    () => TestSetImportResourceSpecification,
  ]
);
export var ListTestSetsRequest = struct(n0, _LTSR, 0, [_sBo, _mRax, _nTe], [() => TestSetSortBy, 1, 0]);
export var ListTestSetsResponse = struct(n0, _LTSRi, 0, [_tSe, _nTe], [() => TestSetSummaryList, 0]);
export var StartImportRequest = struct(
  n0,
  _SIR,
  0,
  [_iIm, _rS, _mS, _fP],
  [0, () => ImportResourceSpecification, 0, [() => ImportExportFilePassword, 0]]
);
export var StartImportResponse = struct(
  n0,
  _SIRt,
  0,
  [_iIm, _rS, _mS, _iSm, _cDT],
  [0, () => ImportResourceSpecification, 0, 0, 4]
);
export var StartTestSetGenerationRequest = struct(
  n0,
  _STSGR,
  0,
  [_tSN, _de, _sL, _gDS, _rA, _tST],
  [0, 0, () => TestSetStorageLocation, () => TestSetGenerationDataSource, 0, 128 | 0]
);
export var StartTestSetGenerationResponse = struct(
  n0,
  _STSGRt,
  0,
  [_tSGI, _cDT, _tSGS, _tSN, _de, _sL, _gDS, _rA, _tST],
  [0, 4, 0, 0, 0, () => TestSetStorageLocation, () => TestSetGenerationDataSource, 0, 128 | 0]
);
export var TestSetGenerationDataSource = struct(n0, _TSGDS, 0, [_cLDS], [() => ConversationLogsDataSource]);
export var TestSetImportInputLocation = struct(n0, _TSIIL, 0, [_sBN, _sPa], [0, 0]);
export var TestSetImportResourceSpecification = struct(
  n0,
  _TSIRS,
  0,
  [_tSN, _de, _rA, _sL, _iIL, _mo, _tST],
  [0, 0, 0, () => TestSetStorageLocation, () => TestSetImportInputLocation, 0, 128 | 0]
);
export var TestSetSortBy = struct(n0, _TSSB, 0, [_a, _or], [0, 0]);
export var TestSetStorageLocation = struct(n0, _TSSL, 0, [_sBN, _sPa, _kKA], [0, 0, 0]);
export var TestSetSummary = struct(
  n0,
  _TSS,
  0,
  [_tSI, _tSN, _de, _mo, _sta, _rA, _nTu, _sL, _cDT, _lUDT],
  [0, 0, 0, 0, 0, 0, 1, () => TestSetStorageLocation, 4, 4]
);
export var UpdateBotRequest = struct(
  n0,
  _UBR,
  0,
  [_bI, _bN, _de, _rA, _dP, _iSTTLIS, _bTo, _bM, _eLS],
  [[0, 1], 0, 0, 0, () => DataPrivacy, 1, 0, () => BotMembers, () => ErrorLogSettings]
);
export var UpdateBotResponse = struct(
  n0,
  _UBRp,
  0,
  [_bI, _bN, _de, _rA, _dP, _iSTTLIS, _bS, _cDT, _lUDT, _bTo, _bM, _eLS],
  [0, 0, 0, 0, () => DataPrivacy, 1, 0, 4, 4, 0, () => BotMembers, () => ErrorLogSettings]
);
export var UpdateTestSetRequest = struct(n0, _UTSR, 0, [_tSI, _tSN, _de], [[0, 1], 0, 0]);
export var UpdateTestSetResponse = struct(
  n0,
  _UTSRp,
  0,
  [_tSI, _tSN, _de, _mo, _sta, _rA, _nTu, _sL, _cDT, _lUDT],
  [0, 0, 0, 0, 0, 0, 1, () => TestSetStorageLocation, 4, 4]
);
export var BotMembers = list(n0, _BMo, 0, () => BotMember);
export var TestSetSummaryList = list(n0, _TSSLe, 0, () => TestSetSummary);
export var CreateBot = op(
  n0,
  _CBr,
  {
    [_h]: ["PUT", "/bots", 202],
  },
  () => CreateBotRequest,
  () => CreateBotResponse
);
export var DescribeBot = op(
  n0,
  _DBe,
  {
    [_h]: ["GET", "/bots/{botId}", 200],
  },
  () => DescribeBotRequest,
  () => DescribeBotResponse
);
export var DescribeBotVersion = op(
  n0,
  _DBVe,
  {
    [_h]: ["GET", "/bots/{botId}/botversions/{botVersion}", 200],
  },
  () => DescribeBotVersionRequest,
  () => DescribeBotVersionResponse
);
export var DescribeImport = op(
  n0,
  _DIes,
  {
    [_h]: ["GET", "/imports/{importId}", 200],
  },
  () => DescribeImportRequest,
  () => DescribeImportResponse
);
export var DescribeTestSet = op(
  n0,
  _DTSe,
  {
    [_h]: ["GET", "/testsets/{testSetId}", 200],
  },
  () => DescribeTestSetRequest,
  () => DescribeTestSetResponse
);
export var DescribeTestSetGeneration = op(
  n0,
  _DTSG,
  {
    [_h]: ["GET", "/testsetgenerations/{testSetGenerationId}", 200],
  },
  () => DescribeTestSetGenerationRequest,
  () => DescribeTestSetGenerationResponse
);
export var ListTestSets = op(
  n0,
  _LTS,
  {
    [_h]: ["POST", "/testsets", 200],
  },
  () => ListTestSetsRequest,
  () => ListTestSetsResponse
);
export var StartImport = op(
  n0,
  _SI,
  {
    [_h]: ["PUT", "/imports", 202],
  },
  () => StartImportRequest,
  () => StartImportResponse
);
export var StartTestSetGeneration = op(
  n0,
  _STSG,
  {
    [_h]: ["PUT", "/testsetgenerations", 202],
  },
  () => StartTestSetGenerationRequest,
  () => StartTestSetGenerationResponse
);
export var UpdateBot = op(
  n0,
  _UB,
  {
    [_h]: ["PUT", "/bots/{botId}", 202],
  },
  () => UpdateBotRequest,
  () => UpdateBotResponse
);
export var UpdateTestSet = op(
  n0,
  _UTSp,
  {
    [_h]: ["PUT", "/testsets/{testSetId}", 200],
  },
  () => UpdateTestSetRequest,
  () => UpdateTestSetResponse
);
