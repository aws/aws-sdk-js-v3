// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aI,
  _aIc,
  _aIF,
  _cAh,
  _CCA,
  _CCAL,
  _CCSC,
  _CCSCR,
  _CCSCRr,
  _CCT,
  _cD,
  _CDF,
  _CFAFL,
  _CFSF,
  _CFSFL,
  _cI,
  _cIF,
  _co,
  _CS,
  _CSAFL,
  _CSBFL,
  _CSC,
  _CSCAFL,
  _CSCL,
  _CSDFL,
  _CSL,
  _CSLF,
  _CSLFL,
  _CSNFL,
  _CSRABCFC,
  _CSRD,
  _CSRDFC,
  _CSRDL,
  _CSSF,
  _CSSFL,
  _CT,
  _da,
  _dai,
  _day,
  _dL,
  _DS,
  _eSST,
  _fAF,
  _fAin,
  _fC,
  _fCF,
  _fCi,
  _fRF,
  _fSF,
  _GCSRD,
  _GCSRDR,
  _GCSRDRe,
  _ht,
  _LCS,
  _LCSC,
  _LCSCFC,
  _LCSCR,
  _LCSCRi,
  _LCSFC,
  _LCSR,
  _LCSRABC,
  _LCSRABCR,
  _LCSRABCRi,
  _LCSRi,
  _le,
  _lSST,
  _mo,
  _mR,
  _MS,
  _nT,
  _OAIFL,
  _oI,
  _oT,
  _OTS,
  _p,
  _pF,
  _rem,
  _s,
  _sAc,
  _sAF,
  _sAFc,
  _sB,
  _sBc,
  _sBF,
  _Sc,
  _sc,
  _sCA,
  _sca,
  _sCAF,
  _sCca,
  _sCt,
  _sD,
  _sL,
  _sLF,
  _sN,
  _sNF,
  _sO,
  _sR,
  _sRD,
  _sSF,
  _sTt,
  _T,
  _t,
  _ta,
  _tAIF,
  _tC,
  _tF,
  _TFL,
  _ti,
  _tim,
  _tOD,
  _tRI,
  _tRIF,
  _TRT,
  _tRT,
  _tRTF,
  _UCSC,
  _UCSCR,
  _UCSCRp,
  _UCT,
  _va,
  _w,
  _WS,
  n0,
} from "./schemas_0";
import { AccountIdFilterList, ResourceIdFilterList, ResourceTagFilterList } from "./schemas_13_Cis";
import { CheckIdFilterList, CisNumberFilterList, PlatformFilterList, StatusCounts } from "./schemas_18_Cis";
import { CisStringFilter } from "./schemas_35_Cis";

/* eslint no-var: 0 */

export var CisCheckAggregation = struct(
  n0,
  _CCA,
  0,
  [_sAc, _cI, _ti, _cD, _le, _aI, _sCt, _p],
  [0, 0, 0, 0, 0, 0, () => StatusCounts, 0]
);
export var CisDateFilter = struct(n0, _CDF, 0, [_eSST, _lSST], [4, 4]);
export var CisFindingStatusFilter = struct(n0, _CFSF, 0, [_co, _va], [0, 0]);
export var CisScan = struct(
  n0,
  _CS,
  0,
  [_sAc, _sCA, _s, _sN, _sD, _fC, _tC, _t, _sBc, _sL],
  [0, 0, 0, 0, 4, 1, 1, () => CisTargets, 0, 0]
);
export var CisScanConfiguration = struct(
  n0,
  _CSC,
  0,
  [_sCA, _oI, _sN, _sL, _sc, _t, _ta],
  [0, 0, 0, 0, () => Schedule, () => CisTargets, 128 | 0]
);
export var CisScanResultDetails = struct(
  n0,
  _CSRD,
  0,
  [_sAc, _aI, _tRI, _p, _s, _sR, _cI, _ti, _cD, _rem, _le, _fAin],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var CisScanResultDetailsFilterCriteria = struct(
  n0,
  _CSRDFC,
  0,
  [_fSF, _cIF, _tF, _sLF, _fAF],
  [
    () => CisFindingStatusFilterList,
    () => CheckIdFilterList,
    () => TitleFilterList,
    () => CisSecurityLevelFilterList,
    () => CisFindingArnFilterList,
  ]
);
export var CisScanResultsAggregatedByChecksFilterCriteria = struct(
  n0,
  _CSRABCFC,
  0,
  [_aIF, _cIF, _tF, _pF, _fRF, _sLF],
  [
    () => OneAccountIdFilterList,
    () => CheckIdFilterList,
    () => TitleFilterList,
    () => PlatformFilterList,
    () => CisNumberFilterList,
    () => CisSecurityLevelFilterList,
  ]
);
export var CisScanStatusFilter = struct(n0, _CSSF, 0, [_co, _va], [0, 0]);
export var CisSecurityLevelFilter = struct(n0, _CSLF, 0, [_co, _va], [0, 0]);
export var CisTargets = struct(n0, _CT, 0, [_aIc, _tRT], [64 | 0, map(n0, _TRT, 0, 0, 64 | 0)]);
export var CreateCisScanConfigurationRequest = struct(
  n0,
  _CCSCR,
  0,
  [_sN, _sL, _sc, _t, _ta],
  [0, 0, () => Schedule, () => CreateCisTargets, 128 | 0]
);
export var CreateCisScanConfigurationResponse = struct(n0, _CCSCRr, 0, [_sCA], [0]);
export var CreateCisTargets = struct(n0, _CCT, 0, [_aIc, _tRT], [64 | 0, map(n0, _TRT, 0, 0, 64 | 0)]);
export var DailySchedule = struct(n0, _DS, 0, [_sTt], [() => Time]);
export var GetCisScanResultDetailsRequest = struct(
  n0,
  _GCSRDR,
  0,
  [_sAc, _tRI, _aI, _fCi, _sB, _sO, _nT, _mR],
  [0, 0, 0, () => CisScanResultDetailsFilterCriteria, 0, 0, 0, 1]
);
export var GetCisScanResultDetailsResponse = struct(n0, _GCSRDRe, 0, [_sRD, _nT], [() => CisScanResultDetailsList, 0]);
export var ListCisScanConfigurationsFilterCriteria = struct(
  n0,
  _LCSCFC,
  0,
  [_sNF, _tRTF, _sCAF],
  [() => CisScanNameFilterList, () => ResourceTagFilterList, () => CisScanConfigurationArnFilterList]
);
export var ListCisScanConfigurationsRequest = struct(
  n0,
  _LCSCR,
  0,
  [_fCi, _sB, _sO, _nT, _mR],
  [() => ListCisScanConfigurationsFilterCriteria, 0, 0, 0, 1]
);
export var ListCisScanConfigurationsResponse = struct(
  n0,
  _LCSCRi,
  0,
  [_sCca, _nT],
  [() => CisScanConfigurationList, 0]
);
export var ListCisScanResultsAggregatedByChecksRequest = struct(
  n0,
  _LCSRABCR,
  0,
  [_sAc, _fCi, _sB, _sO, _nT, _mR],
  [0, () => CisScanResultsAggregatedByChecksFilterCriteria, 0, 0, 0, 1]
);
export var ListCisScanResultsAggregatedByChecksResponse = struct(
  n0,
  _LCSRABCRi,
  0,
  [_cAh, _nT],
  [() => CisCheckAggregationList, 0]
);
export var ListCisScansFilterCriteria = struct(
  n0,
  _LCSFC,
  0,
  [_sNF, _tRTF, _tRIF, _sSF, _sAF, _sCAF, _sAFc, _sBF, _fCF, _tAIF],
  [
    () => CisScanNameFilterList,
    () => ResourceTagFilterList,
    () => ResourceIdFilterList,
    () => CisScanStatusFilterList,
    () => CisScanDateFilterList,
    () => CisScanConfigurationArnFilterList,
    () => CisScanArnFilterList,
    () => CisScheduledByFilterList,
    () => CisNumberFilterList,
    () => AccountIdFilterList,
  ]
);
export var ListCisScansRequest = struct(
  n0,
  _LCSR,
  0,
  [_fCi, _dL, _sB, _sO, _nT, _mR],
  [() => ListCisScansFilterCriteria, 0, 0, 0, 0, 1]
);
export var ListCisScansResponse = struct(n0, _LCSRi, 0, [_sca, _nT], [() => CisScanList, 0]);
export var MonthlySchedule = struct(n0, _MS, 0, [_sTt, _da], [() => Time, 0]);
export var OneTimeSchedule = struct(n0, _OTS, 0, [], []);
export var Time = struct(n0, _T, 0, [_tOD, _tim], [0, 0]);
export var UpdateCisScanConfigurationRequest = struct(
  n0,
  _UCSCR,
  0,
  [_sCA, _sN, _sL, _sc, _t],
  [0, 0, 0, () => Schedule, () => UpdateCisTargets]
);
export var UpdateCisScanConfigurationResponse = struct(n0, _UCSCRp, 0, [_sCA], [0]);
export var UpdateCisTargets = struct(n0, _UCT, 0, [_aIc, _tRT], [64 | 0, map(n0, _TRT, 0, 0, 64 | 0)]);
export var WeeklySchedule = struct(n0, _WS, 0, [_sTt, _day], [() => Time, 64 | 0]);
export var CisAccountIdList = 64 | 0;

export var CisCheckAggregationList = list(n0, _CCAL, 0, () => CisCheckAggregation);
export var CisFindingArnFilterList = list(n0, _CFAFL, 0, () => CisStringFilter);
export var CisFindingStatusFilterList = list(n0, _CFSFL, 0, () => CisFindingStatusFilter);
export var CisScanArnFilterList = list(n0, _CSAFL, 0, () => CisStringFilter);
export var CisScanConfigurationArnFilterList = list(n0, _CSCAFL, 0, () => CisStringFilter);
export var CisScanConfigurationList = list(n0, _CSCL, 0, () => CisScanConfiguration);
export var CisScanDateFilterList = list(n0, _CSDFL, 0, () => CisDateFilter);
export var CisScanList = list(n0, _CSL, 0, () => CisScan);
export var CisScanNameFilterList = list(n0, _CSNFL, 0, () => CisStringFilter);
export var CisScanResultDetailsList = list(n0, _CSRDL, 0, () => CisScanResultDetails);
export var CisScanStatusFilterList = list(n0, _CSSFL, 0, () => CisScanStatusFilter);
export var CisScheduledByFilterList = list(n0, _CSBFL, 0, () => CisStringFilter);
export var CisSecurityLevelFilterList = list(n0, _CSLFL, 0, () => CisSecurityLevelFilter);
export var DaysList = 64 | 0;

export var OneAccountIdFilterList = list(n0, _OAIFL, 0, () => CisStringFilter);
export var TargetAccountList = 64 | 0;

export var TitleFilterList = list(n0, _TFL, 0, () => CisStringFilter);
export var CisTagMap = 128 | 0;

export var Schedule = uni(
  n0,
  _Sc,
  0,
  [_oT, _dai, _w, _mo],
  [() => OneTimeSchedule, () => DailySchedule, () => WeeklySchedule, () => MonthlySchedule]
);
export var CreateCisScanConfiguration = op(
  n0,
  _CCSC,
  {
    [_ht]: ["POST", "/cis/scan-configuration/create", 200],
  },
  () => CreateCisScanConfigurationRequest,
  () => CreateCisScanConfigurationResponse
);
export var GetCisScanResultDetails = op(
  n0,
  _GCSRD,
  {
    [_ht]: ["POST", "/cis/scan-result/details/get", 200],
  },
  () => GetCisScanResultDetailsRequest,
  () => GetCisScanResultDetailsResponse
);
export var ListCisScanConfigurations = op(
  n0,
  _LCSC,
  {
    [_ht]: ["POST", "/cis/scan-configuration/list", 200],
  },
  () => ListCisScanConfigurationsRequest,
  () => ListCisScanConfigurationsResponse
);
export var ListCisScanResultsAggregatedByChecks = op(
  n0,
  _LCSRABC,
  {
    [_ht]: ["POST", "/cis/scan-result/check/list", 200],
  },
  () => ListCisScanResultsAggregatedByChecksRequest,
  () => ListCisScanResultsAggregatedByChecksResponse
);
export var ListCisScans = op(
  n0,
  _LCS,
  {
    [_ht]: ["POST", "/cis/scan/list", 200],
  },
  () => ListCisScansRequest,
  () => ListCisScansResponse
);
export var UpdateCisScanConfiguration = op(
  n0,
  _UCSC,
  {
    [_ht]: ["POST", "/cis/scan-configuration/update", 200],
  },
  () => UpdateCisScanConfigurationRequest,
  () => UpdateCisScanConfigurationResponse
);
