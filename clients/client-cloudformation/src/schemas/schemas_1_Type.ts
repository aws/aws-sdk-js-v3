// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { TypeConfigurationNotFoundException as __TypeConfigurationNotFoundException } from "../models/index";
import {
  _A,
  _Al,
  _aQE,
  _AU,
  _BDTC,
  _BDTCE,
  _BDTCEa,
  _BDTCI,
  _BDTCO,
  _c,
  _CAon,
  _CAonf,
  _Cat,
  _Co,
  _CS,
  _D,
  _DSe,
  _DTes,
  _DTIes,
  _DTOes,
  _DTR,
  _DTRI,
  _DTRO,
  _DU,
  _DVI,
  _e,
  _EC,
  _EM,
  _Er,
  _ERA,
  _Fi,
  _hE,
  _IA,
  _IDC,
  _IDV,
  _LC,
  _LDB,
  _LPV,
  _LT,
  _LTI,
  _LTO,
  _LTR,
  _LTRI,
  _LTRO,
  _LTV,
  _LTVI,
  _LTVO,
  _LU,
  _M,
  _MR,
  _NT,
  _OTA,
  _OTN,
  _PI,
  _PIu,
  _PN,
  _PSr,
  _PT,
  _PTA,
  _PTI,
  _PTO,
  _PTu,
  _PVN,
  _RAT,
  _RATe,
  _RSF,
  _RTeg,
  _RTL,
  _Sc,
  _SMV,
  _STC,
  _STCI,
  _STCO,
  _SU,
  _T,
  _TA,
  _TC,
  _TCA,
  _TCAy,
  _TCD,
  _TCDL,
  _TCI,
  _TCi,
  _TCIy,
  _TCNFE,
  _TF,
  _TN,
  _TNA,
  _TNP,
  _TSy,
  _TSyp,
  _TTe,
  _TTI,
  _TTO,
  _TTS,
  _TTSD,
  _TVA,
  _TVS,
  _TVSy,
  _UTC,
  _VI,
  _Vi,
  n0,
} from "./schemas_0";
import { LoggingConfig } from "./schemas_24_Type";

/* eslint no-var: 0 */

export var BatchDescribeTypeConfigurationsError = struct(
  n0,
  _BDTCE,
  0,
  [_EC, _EM, _TCI],
  [0, 0, () => TypeConfigurationIdentifier]
);
export var BatchDescribeTypeConfigurationsInput = struct(n0, _BDTCI, 0, [_TCIy], [() => TypeConfigurationIdentifiers]);
export var BatchDescribeTypeConfigurationsOutput = struct(
  n0,
  _BDTCO,
  0,
  [_Er, _UTC, _TC],
  [() => BatchDescribeTypeConfigurationsErrors, () => UnprocessedTypeConfigurations, () => TypeConfigurationDetailsList]
);
export var DescribeTypeInput = struct(n0, _DTIes, 0, [_T, _TN, _A, _VI, _PI, _PVN], [0, 0, 0, 0, 0, 0]);
export var DescribeTypeOutput = struct(
  n0,
  _DTOes,
  0,
  [
    _A,
    _T,
    _TN,
    _DVI,
    _IDV,
    _TTS,
    _TTSD,
    _D,
    _Sc,
    _PT,
    _DSe,
    _LC,
    _RAT,
    _ERA,
    _Vi,
    _SU,
    _DU,
    _LU,
    _TCi,
    _CS,
    _PI,
    _OTN,
    _OTA,
    _PVN,
    _LPV,
    _IA,
    _AU,
  ],
  [
    0,
    0,
    0,
    0,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    () => LoggingConfig,
    () => RequiredActivatedTypes,
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
    0,
    2,
    2,
  ]
);
export var DescribeTypeRegistrationInput = struct(n0, _DTRI, 0, [_RTeg], [0]);
export var DescribeTypeRegistrationOutput = struct(n0, _DTRO, 0, [_PSr, _D, _TA, _TVA], [0, 0, 0, 0]);
export var ListTypeRegistrationsInput = struct(n0, _LTRI, 0, [_T, _TN, _TA, _RSF, _MR, _NT], [0, 0, 0, 0, 1, 0]);
export var ListTypeRegistrationsOutput = struct(n0, _LTRO, 0, [_RTL, _NT], [64 | 0, 0]);
export var ListTypesInput = struct(
  n0,
  _LTI,
  0,
  [_Vi, _PT, _DSe, _T, _Fi, _MR, _NT],
  [0, 0, 0, 0, () => TypeFilters, 1, 0]
);
export var ListTypesOutput = struct(n0, _LTO, 0, [_TSy, _NT], [() => TypeSummaries, 0]);
export var ListTypeVersionsInput = struct(n0, _LTVI, 0, [_T, _TN, _A, _MR, _NT, _DSe, _PI], [0, 0, 0, 1, 0, 0, 0]);
export var ListTypeVersionsOutput = struct(n0, _LTVO, 0, [_TVS, _NT], [() => TypeVersionSummaries, 0]);
export var PublishTypeInput = struct(n0, _PTI, 0, [_T, _A, _TN, _PVN], [0, 0, 0, 0]);
export var PublishTypeOutput = struct(n0, _PTO, 0, [_PTA], [0]);
export var RequiredActivatedType = struct(n0, _RATe, 0, [_TNA, _OTN, _PI, _SMV], [0, 0, 0, 64 | 1]);
export var SetTypeConfigurationInput = struct(n0, _STCI, 0, [_TA, _Co, _CAon, _TN, _T], [0, 0, 0, 0, 0]);
export var SetTypeConfigurationOutput = struct(n0, _STCO, 0, [_CAonf], [0]);
export var TestTypeInput = struct(n0, _TTI, 0, [_A, _T, _TN, _VI, _LDB], [0, 0, 0, 0, 0]);
export var TestTypeOutput = struct(n0, _TTO, 0, [_TVA], [0]);
export var TypeConfigurationDetails = struct(n0, _TCD, 0, [_A, _Al, _Co, _LU, _TA, _TN, _IDC], [0, 0, 0, 4, 0, 0, 2]);
export var TypeConfigurationIdentifier = struct(n0, _TCI, 0, [_TA, _TCA, _TCAy, _T, _TN], [0, 0, 0, 0, 0]);
export var TypeConfigurationNotFoundException = error(
  n0,
  _TCNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`TypeConfigurationNotFoundException`, 404],
  },
  [_M],
  [0],

  __TypeConfigurationNotFoundException
);
export var TypeFilters = struct(n0, _TF, 0, [_Cat, _PI, _TNP], [0, 0, 0]);
export var TypeSummary = struct(
  n0,
  _TSyp,
  0,
  [_T, _TN, _DVI, _TA, _LU, _D, _PI, _OTN, _PVN, _LPV, _PIu, _PN, _IA],
  [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 2]
);
export var TypeVersionSummary = struct(
  n0,
  _TVSy,
  0,
  [_T, _TN, _VI, _IDV, _A, _TCi, _D, _PVN],
  [0, 0, 0, 2, 0, 4, 0, 0]
);
export var BatchDescribeTypeConfigurationsErrors = list(n0, _BDTCEa, 0, () => BatchDescribeTypeConfigurationsError);
export var RegistrationTokenList = 64 | 0;

export var RequiredActivatedTypes = list(n0, _RAT, 0, () => RequiredActivatedType);
export var SupportedMajorVersions = 64 | 1;

export var TypeConfigurationDetailsList = list(n0, _TCDL, 0, () => TypeConfigurationDetails);
export var TypeConfigurationIdentifiers = list(n0, _TCIy, 0, () => TypeConfigurationIdentifier);
export var TypeSummaries = list(n0, _TSy, 0, () => TypeSummary);
export var TypeVersionSummaries = list(n0, _TVS, 0, () => TypeVersionSummary);
export var UnprocessedTypeConfigurations = list(n0, _UTC, 0, () => TypeConfigurationIdentifier);
export var BatchDescribeTypeConfigurations = op(
  n0,
  _BDTC,
  0,
  () => BatchDescribeTypeConfigurationsInput,
  () => BatchDescribeTypeConfigurationsOutput
);
export var DescribeType = op(
  n0,
  _DTes,
  2,
  () => DescribeTypeInput,
  () => DescribeTypeOutput
);
export var DescribeTypeRegistration = op(
  n0,
  _DTR,
  2,
  () => DescribeTypeRegistrationInput,
  () => DescribeTypeRegistrationOutput
);
export var ListTypeRegistrations = op(
  n0,
  _LTR,
  2,
  () => ListTypeRegistrationsInput,
  () => ListTypeRegistrationsOutput
);
export var ListTypes = op(
  n0,
  _LT,
  2,
  () => ListTypesInput,
  () => ListTypesOutput
);
export var ListTypeVersions = op(
  n0,
  _LTV,
  2,
  () => ListTypeVersionsInput,
  () => ListTypeVersionsOutput
);
export var PublishType = op(
  n0,
  _PTu,
  2,
  () => PublishTypeInput,
  () => PublishTypeOutput
);
export var SetTypeConfiguration = op(
  n0,
  _STC,
  0,
  () => SetTypeConfigurationInput,
  () => SetTypeConfigurationOutput
);
export var TestType = op(
  n0,
  _TTe,
  2,
  () => TestTypeInput,
  () => TestTypeOutput
);
