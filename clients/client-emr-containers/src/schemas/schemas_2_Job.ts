// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _aC,
  _c,
  _cAr,
  _cAre,
  _cB,
  _cBr,
  _CJT,
  _CJTR,
  _CJTRr,
  _CL,
  _Co,
  _cO,
  _co,
  _cT,
  _cWMC,
  _dE,
  _DJTe,
  _DJTRes,
  _DJTResc,
  _dV,
  _eP,
  _EPA,
  _ePA,
  _EPAn,
  _EPP,
  _eRA,
  _h,
  _hQ,
  _i,
  _JD,
  _jD,
  _JT,
  _jT,
  _JTD,
  _jTD,
  _JTo,
  _jTo,
  _kKA,
  _lGN,
  _LJT,
  _LJTR,
  _LJTRi,
  _lSNP,
  _lU,
  _mC,
  _mR,
  _n,
  _nT,
  _p,
  _pAUI,
  _pC,
  _PCO,
  _PCWMC,
  _PMC,
  _PSMC,
  _rL,
  _sMC,
  _SPM,
  _SSJD,
  _sSJD,
  _SSJDp,
  _sSJDp,
  _SSP,
  _sSP,
  _SSPp,
  _sSPp,
  _t,
  _ta,
  _te,
  _TPC,
  _TPCM,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EntryPointArgument = sim(n0, _EPA, 0, 8);
export var EntryPointPath = sim(n0, _EPP, 0, 8);
export var SparkSqlParameters = sim(n0, _SSP, 0, 8);
export var SparkSubmitParameters = sim(n0, _SSPp, 0, 8);
export var Configuration = struct(
  n0,
  _Co,
  0,
  [_c, _p, _co],
  [0, [() => SensitivePropertiesMap, 0], [() => ConfigurationList, 0]]
);
export var CreateJobTemplateRequest = struct(
  n0,
  _CJTR,
  0,
  [_n, _cT, _jTD, _ta, _kKA],
  [0, [0, 4], [() => JobTemplateData, 0], 128 | 0, 0]
);
export var CreateJobTemplateResponse = struct(n0, _CJTRr, 0, [_i, _n, _a, _cAr], [0, 0, 0, 5]);
export var DescribeJobTemplateRequest = struct(n0, _DJTRes, 0, [_i], [[0, 1]]);
export var DescribeJobTemplateResponse = struct(n0, _DJTResc, 0, [_jT], [[() => JobTemplate, 0]]);
export var JobDriver = struct(
  n0,
  _JD,
  0,
  [_sSJD, _sSJDp],
  [
    [() => SparkSubmitJobDriver, 0],
    [() => SparkSqlJobDriver, 0],
  ]
);
export var JobTemplate = struct(
  n0,
  _JT,
  0,
  [_n, _i, _a, _cAr, _cB, _ta, _jTD, _kKA, _dE],
  [0, 0, 0, 5, 0, 128 | 0, [() => JobTemplateData, 0], 0, 0]
);
export var JobTemplateData = struct(
  n0,
  _JTD,
  0,
  [_eRA, _rL, _cO, _jD, _pC, _jTo],
  [
    0,
    0,
    [() => ParametricConfigurationOverrides, 0],
    [() => JobDriver, 0],
    () => TemplateParameterConfigurationMap,
    128 | 0,
  ]
);
export var ListJobTemplatesRequest = struct(
  n0,
  _LJTR,
  0,
  [_cAre, _cBr, _mR, _nT],
  [
    [
      5,
      {
        [_hQ]: _cAre,
      },
    ],
    [
      5,
      {
        [_hQ]: _cBr,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListJobTemplatesResponse = struct(n0, _LJTRi, 0, [_te, _nT], [[() => JobTemplates, 0], 0]);
export var ParametricCloudWatchMonitoringConfiguration = struct(n0, _PCWMC, 0, [_lGN, _lSNP], [0, 0]);
export var ParametricConfigurationOverrides = struct(
  n0,
  _PCO,
  0,
  [_aC, _mC],
  [[() => ConfigurationList, 0], () => ParametricMonitoringConfiguration]
);
export var ParametricMonitoringConfiguration = struct(
  n0,
  _PMC,
  0,
  [_pAUI, _cWMC, _sMC],
  [0, () => ParametricCloudWatchMonitoringConfiguration, () => ParametricS3MonitoringConfiguration]
);
export var ParametricS3MonitoringConfiguration = struct(n0, _PSMC, 0, [_lU], [0]);
export var SparkSqlJobDriver = struct(
  n0,
  _SSJD,
  0,
  [_eP, _sSP],
  [
    [() => EntryPointPath, 0],
    [() => SparkSqlParameters, 0],
  ]
);
export var SparkSubmitJobDriver = struct(
  n0,
  _SSJDp,
  0,
  [_eP, _ePA, _sSPp],
  [
    [() => EntryPointPath, 0],
    [() => EntryPointArguments, 0],
    [() => SparkSubmitParameters, 0],
  ]
);
export var TemplateParameterConfiguration = struct(n0, _TPC, 0, [_t, _dV], [0, 0]);
export var ConfigurationList = list(n0, _CL, 0, [() => Configuration, 0]);
export var EntryPointArguments = list(n0, _EPAn, 0, [() => EntryPointArgument, 0]);
export var JobTemplates = list(n0, _JTo, 0, [() => JobTemplate, 0]);
export var SensitivePropertiesMap = map(n0, _SPM, 8, 0, 0);
export var TemplateParameterConfigurationMap = map(n0, _TPCM, 0, 0, () => TemplateParameterConfiguration);
export var CreateJobTemplate = op(
  n0,
  _CJT,
  {
    [_h]: ["POST", "/jobtemplates", 200],
  },
  () => CreateJobTemplateRequest,
  () => CreateJobTemplateResponse
);
export var DescribeJobTemplate = op(
  n0,
  _DJTe,
  {
    [_h]: ["GET", "/jobtemplates/{id}", 200],
  },
  () => DescribeJobTemplateRequest,
  () => DescribeJobTemplateResponse
);
export var ListJobTemplates = op(
  n0,
  _LJT,
  {
    [_h]: ["GET", "/jobtemplates", 200],
  },
  () => ListJobTemplatesRequest,
  () => ListJobTemplatesResponse
);
