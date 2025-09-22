// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  TooManyConfigurationTemplatesException as __TooManyConfigurationTemplatesException,
  TooManyEnvironmentsException as __TooManyEnvironmentsException,
} from "../models/index";
import {
  _AN,
  _AOIP,
  _aQE,
  _ASSDL,
  _c,
  _CA,
  _CAL,
  _CCT,
  _CCTM,
  _CE,
  _CEM,
  _CEMr,
  _CEr,
  _CNAME,
  _CNAMEP,
  _COD,
  _CODL,
  _CODo,
  _CS,
  _CSD,
  _CSDL,
  _CSDo,
  _CSo,
  _D,
  _DC,
  _DCO,
  _DCOM,
  _DCS,
  _DCSM,
  _DE,
  _DEM,
  _Do,
  _DPVe,
  _DPVRes,
  _DPVResc,
  _DS,
  _DU,
  _DV,
  _E,
  _e,
  _EA,
  _ED,
  _EDL,
  _EDM,
  _EI,
  _EIn,
  _EL,
  _ELn,
  _EN,
  _ENn,
  _ERDn,
  _ETn,
  _EURL,
  _Fr,
  _FTo,
  _GN,
  _H,
  _hE,
  _HS,
  _ID,
  _IDBT,
  _II,
  _La,
  _LASS,
  _LASSRM,
  _LBD,
  _LBLD,
  _LBN,
  _LBo,
  _Li,
  _Lis,
  _LN,
  _m,
  _Ma,
  _ML,
  _MR,
  _MV,
  _MVa,
  _N,
  _Na,
  _NT,
  _O,
  _ON,
  _OR,
  _ORR,
  _OS,
  _OSL,
  _OSN,
  _OSp,
  _OSV,
  _OTR,
  _PA,
  _Pa,
  _PBLS,
  _PBN,
  _PC,
  _PD,
  _PFl,
  _PFlat,
  _PFT,
  _PL,
  _PLS,
  _PN,
  _PO,
  _Po,
  _PPL,
  _PPLl,
  _Pro,
  _PSl,
  _PV,
  _R,
  _Re,
  _RN,
  _S,
  _SAL,
  _SCo,
  _SS,
  _SSD,
  _SSDo,
  _SSN,
  _STL,
  _T,
  _TE,
  _TEM,
  _Ti,
  _TMCTE,
  _TMEE,
  _TN,
  _TR,
  _Ty,
  _UCT,
  _UCTM,
  _UD,
  _UE,
  _UEM,
  _Ve,
  _VL,
  _VLe,
  _VO,
  _VT,
  _VTi,
  n0,
  Unit,
} from "./schemas_0";
import { ConfigurationOptionSettingsList } from "./schemas_10_Configuration";
import { Tags } from "./schemas_15_Create";

/* eslint no-var: 0 */

export var ComposeEnvironmentsMessage = struct(n0, _CEM, 0, [_AN, _GN, _VLe], [0, 0, 64 | 0]);
export var ConfigurationOptionDescription = struct(
  n0,
  _COD,
  0,
  [_Na, _N, _DV, _CS, _UD, _VT, _VO, _MV, _MVa, _ML, _R],
  [0, 0, 0, 0, 2, 0, 64 | 0, 1, 1, 1, () => OptionRestrictionRegex]
);
export var ConfigurationOptionsDescription = struct(
  n0,
  _CODo,
  0,
  [_SSN, _PA, _O],
  [0, 0, () => ConfigurationOptionDescriptionsList]
);
export var ConfigurationSettingsDescription = struct(
  n0,
  _CSD,
  0,
  [_SSN, _PA, _AN, _TN, _D, _EN, _DS, _DC, _DU, _OS],
  [0, 0, 0, 0, 0, 0, 0, 4, 4, () => ConfigurationOptionSettingsList]
);
export var ConfigurationSettingsDescriptions = struct(
  n0,
  _CSDo,
  0,
  [_CSo],
  [() => ConfigurationSettingsDescriptionList]
);
export var CreateConfigurationTemplateMessage = struct(
  n0,
  _CCTM,
  0,
  [_AN, _TN, _SSN, _PA, _SCo, _EI, _D, _OS, _T],
  [0, 0, 0, 0, () => SourceConfiguration, 0, 0, () => ConfigurationOptionSettingsList, () => Tags]
);
export var CreateEnvironmentMessage = struct(
  n0,
  _CEMr,
  0,
  [_AN, _EN, _GN, _D, _CNAMEP, _Ti, _T, _VL, _TN, _SSN, _PA, _OS, _OTR, _OR],
  [
    0,
    0,
    0,
    0,
    0,
    () => EnvironmentTier,
    () => Tags,
    0,
    0,
    0,
    0,
    () => ConfigurationOptionSettingsList,
    () => OptionsSpecifierList,
    0,
  ]
);
export var CustomAmi = struct(n0, _CA, 0, [_VTi, _II], [0, 0]);
export var DescribeConfigurationOptionsMessage = struct(
  n0,
  _DCOM,
  0,
  [_AN, _TN, _EN, _SSN, _PA, _O],
  [0, 0, 0, 0, 0, () => OptionsSpecifierList]
);
export var DescribeConfigurationSettingsMessage = struct(n0, _DCSM, 0, [_AN, _TN, _EN], [0, 0, 0]);
export var DescribeEnvironmentsMessage = struct(
  n0,
  _DEM,
  0,
  [_AN, _VL, _EIn, _ENn, _ID, _IDBT, _MR, _NT],
  [0, 0, 64 | 0, 64 | 0, 2, 4, 1, 0]
);
export var DescribePlatformVersionRequest = struct(n0, _DPVRes, 0, [_PA], [0]);
export var DescribePlatformVersionResult = struct(n0, _DPVResc, 0, [_PD], [() => PlatformDescription]);
export var EnvironmentDescription = struct(
  n0,
  _ED,
  0,
  [_EN, _EI, _AN, _VL, _SSN, _PA, _TN, _D, _EURL, _CNAME, _DC, _DU, _S, _AOIP, _H, _HS, _Re, _Ti, _EL, _EA, _OR],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    0,
    2,
    0,
    0,
    () => EnvironmentResourcesDescription,
    () => EnvironmentTier,
    () => EnvironmentLinks,
    0,
    0,
  ]
);
export var EnvironmentDescriptionsMessage = struct(n0, _EDM, 0, [_E, _NT], [() => EnvironmentDescriptionsList, 0]);
export var EnvironmentLink = struct(n0, _ELn, 0, [_LN, _EN], [0, 0]);
export var EnvironmentResourcesDescription = struct(n0, _ERDn, 0, [_LBo], [() => LoadBalancerDescription]);
export var EnvironmentTier = struct(n0, _ETn, 0, [_N, _Ty, _Ve], [0, 0, 0]);
export var ListAvailableSolutionStacksResultMessage = struct(
  n0,
  _LASSRM,
  0,
  [_SS, _SSD],
  [64 | 0, () => AvailableSolutionStackDetailsList]
);
export var Listener = struct(n0, _Li, 0, [_Pro, _Po], [0, 1]);
export var LoadBalancerDescription = struct(
  n0,
  _LBD,
  0,
  [_LBN, _Do, _Lis],
  [0, 0, () => LoadBalancerListenersDescription]
);
export var OptionRestrictionRegex = struct(n0, _ORR, 0, [_Pa, _La], [0, 0]);
export var OptionSpecification = struct(n0, _OSp, 0, [_RN, _Na, _ON], [0, 0, 0]);
export var PlatformDescription = struct(
  n0,
  _PD,
  0,
  [_PA, _PO, _PN, _PV, _SSN, _PSl, _DC, _DU, _PC, _D, _Ma, _OSN, _OSV, _PL, _Fr, _CAL, _STL, _SAL, _PLS, _PBN, _PBLS],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    0,
    0,
    0,
    0,
    0,
    () => PlatformProgrammingLanguages,
    () => PlatformFrameworks,
    () => CustomAmiList,
    64 | 0,
    64 | 0,
    0,
    0,
    0,
  ]
);
export var PlatformFramework = struct(n0, _PFl, 0, [_N, _Ve], [0, 0]);
export var PlatformProgrammingLanguage = struct(n0, _PPL, 0, [_N, _Ve], [0, 0]);
export var SolutionStackDescription = struct(n0, _SSDo, 0, [_SSN, _PFT], [0, 64 | 0]);
export var SourceConfiguration = struct(n0, _SCo, 0, [_AN, _TN], [0, 0]);
export var TerminateEnvironmentMessage = struct(n0, _TEM, 0, [_EI, _EN, _TR, _FTo], [0, 0, 2, 2]);
export var TooManyConfigurationTemplatesException = error(
  n0,
  _TMCTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyConfigurationTemplatesException`, 400],
  },
  [_m],
  [0],

  __TooManyConfigurationTemplatesException
);
export var TooManyEnvironmentsException = error(
  n0,
  _TMEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyEnvironmentsException`, 400],
  },
  [_m],
  [0],

  __TooManyEnvironmentsException
);
export var UpdateConfigurationTemplateMessage = struct(
  n0,
  _UCTM,
  0,
  [_AN, _TN, _D, _OS, _OTR],
  [0, 0, 0, () => ConfigurationOptionSettingsList, () => OptionsSpecifierList]
);
export var UpdateEnvironmentMessage = struct(
  n0,
  _UEM,
  0,
  [_AN, _EI, _EN, _GN, _D, _Ti, _VL, _TN, _SSN, _PA, _OS, _OTR],
  [0, 0, 0, 0, 0, () => EnvironmentTier, 0, 0, 0, 0, () => ConfigurationOptionSettingsList, () => OptionsSpecifierList]
);
export var AvailableSolutionStackDetailsList = list(n0, _ASSDL, 0, () => SolutionStackDescription);
export var AvailableSolutionStackNamesList = 64 | 0;

export var ConfigurationOptionDescriptionsList = list(n0, _CODL, 0, () => ConfigurationOptionDescription);
export var ConfigurationOptionPossibleValues = 64 | 0;

export var ConfigurationSettingsDescriptionList = list(n0, _CSDL, 0, () => ConfigurationSettingsDescription);
export var CustomAmiList = list(n0, _CAL, 0, () => CustomAmi);
export var EnvironmentDescriptionsList = list(n0, _EDL, 0, () => EnvironmentDescription);
export var EnvironmentIdList = 64 | 0;

export var EnvironmentLinks = list(n0, _EL, 0, () => EnvironmentLink);
export var EnvironmentNamesList = 64 | 0;

export var LoadBalancerListenersDescription = list(n0, _LBLD, 0, () => Listener);
export var OptionsSpecifierList = list(n0, _OSL, 0, () => OptionSpecification);
export var PlatformFrameworks = list(n0, _PFlat, 0, () => PlatformFramework);
export var PlatformProgrammingLanguages = list(n0, _PPLl, 0, () => PlatformProgrammingLanguage);
export var SolutionStackFileTypeList = 64 | 0;

export var VersionLabels = 64 | 0;

export var ComposeEnvironments = op(
  n0,
  _CE,
  0,
  () => ComposeEnvironmentsMessage,
  () => EnvironmentDescriptionsMessage
);
export var CreateConfigurationTemplate = op(
  n0,
  _CCT,
  0,
  () => CreateConfigurationTemplateMessage,
  () => ConfigurationSettingsDescription
);
export var CreateEnvironment = op(
  n0,
  _CEr,
  0,
  () => CreateEnvironmentMessage,
  () => EnvironmentDescription
);
export var DescribeConfigurationOptions = op(
  n0,
  _DCO,
  0,
  () => DescribeConfigurationOptionsMessage,
  () => ConfigurationOptionsDescription
);
export var DescribeConfigurationSettings = op(
  n0,
  _DCS,
  0,
  () => DescribeConfigurationSettingsMessage,
  () => ConfigurationSettingsDescriptions
);
export var DescribeEnvironments = op(
  n0,
  _DE,
  0,
  () => DescribeEnvironmentsMessage,
  () => EnvironmentDescriptionsMessage
);
export var DescribePlatformVersion = op(
  n0,
  _DPVe,
  0,
  () => DescribePlatformVersionRequest,
  () => DescribePlatformVersionResult
);
export var ListAvailableSolutionStacks = op(
  n0,
  _LASS,
  0,
  () => Unit,
  () => ListAvailableSolutionStacksResultMessage
);
export var TerminateEnvironment = op(
  n0,
  _TE,
  0,
  () => TerminateEnvironmentMessage,
  () => EnvironmentDescription
);
export var UpdateConfigurationTemplate = op(
  n0,
  _UCT,
  0,
  () => UpdateConfigurationTemplateMessage,
  () => ConfigurationSettingsDescription
);
export var UpdateEnvironment = op(
  n0,
  _UE,
  0,
  () => UpdateEnvironmentMessage,
  () => EnvironmentDescription
);
