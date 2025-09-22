// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _aEC,
  _al,
  _aPA,
  _BIPI,
  _bIPI,
  _bO,
  _bu,
  _cD,
  _CDPS,
  _CDPSR,
  _CDPSRr,
  _cLo,
  _cMK,
  _cP,
  _CPu,
  _CSLR,
  _CSLr,
  _CSLRr,
  _cT,
  _de,
  _dN,
  _DNS,
  _DPS,
  _dPS,
  _dPSA,
  _DPSL,
  _DPSS,
  _DS,
  _EF,
  _eF,
  _eU,
  _eUx,
  _fS,
  _gCL,
  _GDPS,
  _GDPSR,
  _GDPSRe,
  _gEU,
  _gEUl,
  _GIRU,
  _GSL,
  _GSLR,
  _GSLRe,
  _h,
  _hQ,
  _in,
  _IRC,
  _iRC,
  _IRP,
  _iRP,
  _IRPn,
  _IRU,
  _IRUn,
  _kP,
  _kR,
  _LC,
  _lC,
  _LDPS,
  _LDPSR,
  _LDPSRi,
  _lFF,
  _LSL,
  _LSLR,
  _LSLRi,
  _mR,
  _nT,
  _pD,
  _PN,
  _pN,
  _pR,
  _R,
  _RPH,
  _rPH,
  _RPHT,
  _rPHT,
  _rPHTe,
  _s_,
  _SB,
  _SKP,
  _SL,
  _sL,
  _sLA,
  _SLC,
  _sLe,
  _SLL,
  _SLS,
  _ta,
  _UDPS,
  _UDPSR,
  _UDPSRp,
  _USLp,
  _USLR,
  _USLRp,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_4_Session";
import { TagList } from "./schemas_8_Create";

/* eslint no-var: 0 */

export var BuiltInPatternId = sim(n0, _BIPI, 0, 8);
export var DescriptionSafe = sim(n0, _DS, 0, 8);
export var DisplayNameSafe = sim(n0, _DNS, 0, 8);
export var InlineRedactionUrl = sim(n0, _IRU, 0, 8);
export var PatternName = sim(n0, _PN, 0, 8);
export var RedactionPlaceHolderText = sim(n0, _RPHT, 0, 8);
export var Regex = sim(n0, _R, 0, 8);
export var S3Bucket = sim(n0, _SB, 0, 8);
export var S3KeyPrefix = sim(n0, _SKP, 0, 8);
export var CreateDataProtectionSettingsRequest = struct(
  n0,
  _CDPSR,
  0,
  [_dN, _de, _ta, _cMK, _aEC, _iRC, _cT],
  [
    [() => DisplayNameSafe, 0],
    [() => DescriptionSafe, 0],
    [() => TagList, 0],
    0,
    128 | 0,
    [() => InlineRedactionConfiguration, 0],
    [0, 4],
  ]
);
export var CreateDataProtectionSettingsResponse = struct(n0, _CDPSRr, 0, [_dPSA], [0]);
export var CreateSessionLoggerRequest = struct(
  n0,
  _CSLR,
  0,
  [_eF, _lC, _dN, _cMK, _aEC, _ta, _cT],
  [() => EventFilter, [() => LogConfiguration, 0], [() => DisplayNameSafe, 0], 0, 128 | 0, [() => TagList, 0], [0, 4]]
);
export var CreateSessionLoggerResponse = struct(n0, _CSLRr, 0, [_sLA], [0]);
export var CustomPattern = struct(
  n0,
  _CPu,
  0,
  [_pN, _pR, _pD, _kR],
  [
    [() => PatternName, 0],
    [() => Regex, 0],
    [() => DescriptionSafe, 0],
    [() => Regex, 0],
  ]
);
export var DataProtectionSettings = struct(
  n0,
  _DPS,
  0,
  [_dPSA, _iRC, _aPA, _dN, _de, _cD, _cMK, _aEC],
  [
    0,
    [() => InlineRedactionConfiguration, 0],
    64 | 0,
    [() => DisplayNameSafe, 0],
    [() => DescriptionSafe, 0],
    4,
    0,
    128 | 0,
  ]
);
export var DataProtectionSettingsSummary = struct(
  n0,
  _DPSS,
  0,
  [_dPSA, _dN, _de, _cD],
  [0, [() => DisplayNameSafe, 0], [() => DescriptionSafe, 0], 4]
);
export var GetDataProtectionSettingsRequest = struct(n0, _GDPSR, 0, [_dPSA], [[0, 1]]);
export var GetDataProtectionSettingsResponse = struct(n0, _GDPSRe, 0, [_dPS], [[() => DataProtectionSettings, 0]]);
export var GetSessionLoggerRequest = struct(n0, _GSLR, 0, [_sLA], [[0, 1]]);
export var GetSessionLoggerResponse = struct(n0, _GSLRe, 0, [_sL], [[() => SessionLogger, 0]]);
export var InlineRedactionConfiguration = struct(
  n0,
  _IRC,
  0,
  [_iRP, _gEU, _gEUl, _gCL],
  [[() => InlineRedactionPatterns, 0], [() => GlobalInlineRedactionUrls, 0], [() => GlobalInlineRedactionUrls, 0], 1]
);
export var InlineRedactionPattern = struct(
  n0,
  _IRP,
  0,
  [_bIPI, _cP, _rPH, _eU, _eUx, _cLo],
  [
    [() => BuiltInPatternId, 0],
    [() => CustomPattern, 0],
    [() => RedactionPlaceHolder, 0],
    [() => InlineRedactionUrls, 0],
    [() => InlineRedactionUrls, 0],
    1,
  ]
);
export var ListDataProtectionSettingsRequest = struct(
  n0,
  _LDPSR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListDataProtectionSettingsResponse = struct(
  n0,
  _LDPSRi,
  0,
  [_dPS, _nT],
  [[() => DataProtectionSettingsList, 0], 0]
);
export var ListSessionLoggersRequest = struct(
  n0,
  _LSLR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListSessionLoggersResponse = struct(n0, _LSLRi, 0, [_sLe, _nT], [[() => SessionLoggerList, 0], 0]);
export var LogConfiguration = struct(n0, _LC, 0, [_s_], [[() => S3LogConfiguration, 0]]);
export var RedactionPlaceHolder = struct(n0, _RPH, 0, [_rPHT, _rPHTe], [0, [() => RedactionPlaceHolderText, 0]]);
export var S3LogConfiguration = struct(
  n0,
  _SLC,
  0,
  [_bu, _kP, _bO, _lFF, _fS],
  [[() => S3Bucket, 0], [() => S3KeyPrefix, 0], 0, 0, 0]
);
export var SessionLogger = struct(
  n0,
  _SL,
  0,
  [_sLA, _eF, _lC, _cMK, _aEC, _aPA, _dN, _cD],
  [0, () => EventFilter, [() => LogConfiguration, 0], 0, 128 | 0, 64 | 0, [() => DisplayNameSafe, 0], 4]
);
export var SessionLoggerSummary = struct(
  n0,
  _SLS,
  0,
  [_sLA, _lC, _dN, _cD],
  [0, [() => LogConfiguration, 0], [() => DisplayNameSafe, 0], 4]
);
export var UpdateDataProtectionSettingsRequest = struct(
  n0,
  _UDPSR,
  0,
  [_dPSA, _iRC, _dN, _de, _cT],
  [
    [0, 1],
    [() => InlineRedactionConfiguration, 0],
    [() => DisplayNameSafe, 0],
    [() => DescriptionSafe, 0],
    [0, 4],
  ]
);
export var UpdateDataProtectionSettingsResponse = struct(n0, _UDPSRp, 0, [_dPS], [[() => DataProtectionSettings, 0]]);
export var UpdateSessionLoggerRequest = struct(
  n0,
  _USLR,
  0,
  [_sLA, _eF, _lC, _dN],
  [[0, 1], () => EventFilter, [() => LogConfiguration, 0], [() => DisplayNameSafe, 0]]
);
export var UpdateSessionLoggerResponse = struct(n0, _USLRp, 0, [_sL], [[() => SessionLogger, 0]]);
export var DataProtectionSettingsList = list(n0, _DPSL, 0, [() => DataProtectionSettingsSummary, 0]);
export var Events = 64 | 0;

export var GlobalInlineRedactionUrls = list(n0, _GIRU, 0, [() => InlineRedactionUrl, 0]);
export var InlineRedactionPatterns = list(n0, _IRPn, 0, [() => InlineRedactionPattern, 0]);
export var InlineRedactionUrls = list(n0, _IRUn, 0, [() => InlineRedactionUrl, 0]);
export var SessionLoggerList = list(n0, _SLL, 0, [() => SessionLoggerSummary, 0]);
export var EventFilter = uni(n0, _EF, 0, [_al, _in], [() => Unit, 64 | 0]);
export var CreateDataProtectionSettings = op(
  n0,
  _CDPS,
  {
    [_h]: ["POST", "/dataProtectionSettings", 200],
  },
  () => CreateDataProtectionSettingsRequest,
  () => CreateDataProtectionSettingsResponse
);
export var CreateSessionLogger = op(
  n0,
  _CSLr,
  {
    [_h]: ["POST", "/sessionLoggers", 200],
  },
  () => CreateSessionLoggerRequest,
  () => CreateSessionLoggerResponse
);
export var GetDataProtectionSettings = op(
  n0,
  _GDPS,
  {
    [_h]: ["GET", "/dataProtectionSettings/{dataProtectionSettingsArn+}", 200],
  },
  () => GetDataProtectionSettingsRequest,
  () => GetDataProtectionSettingsResponse
);
export var GetSessionLogger = op(
  n0,
  _GSL,
  {
    [_h]: ["GET", "/sessionLoggers/{sessionLoggerArn+}", 200],
  },
  () => GetSessionLoggerRequest,
  () => GetSessionLoggerResponse
);
export var ListDataProtectionSettings = op(
  n0,
  _LDPS,
  {
    [_h]: ["GET", "/dataProtectionSettings", 200],
  },
  () => ListDataProtectionSettingsRequest,
  () => ListDataProtectionSettingsResponse
);
export var ListSessionLoggers = op(
  n0,
  _LSL,
  {
    [_h]: ["GET", "/sessionLoggers", 200],
  },
  () => ListSessionLoggersRequest,
  () => ListSessionLoggersResponse
);
export var UpdateDataProtectionSettings = op(
  n0,
  _UDPS,
  {
    [_h]: ["PATCH", "/dataProtectionSettings/{dataProtectionSettingsArn+}", 200],
  },
  () => UpdateDataProtectionSettingsRequest,
  () => UpdateDataProtectionSettingsResponse
);
export var UpdateSessionLogger = op(
  n0,
  _USLp,
  {
    [_h]: ["POST", "/sessionLoggers/{sessionLoggerArn+}", 200],
  },
  () => UpdateSessionLoggerRequest,
  () => UpdateSessionLoggerResponse
);
