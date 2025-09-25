// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _AC,
  _ADE,
  _ARA,
  _ASC,
  _ASCA,
  _ASCN,
  _ASCR,
  _ASCS,
  _ASCSL,
  _BC,
  _CA,
  _CAr,
  _CASC,
  _CASCR,
  _CASCRr,
  _CC,
  _CCV,
  _Cp,
  _CR,
  _CS,
  _CSR,
  _CSr,
  _CSRr,
  _DA,
  _DAR,
  _DASC,
  _DASCe,
  _DASCR,
  _DASCRe,
  _DASCRes,
  _DASCResc,
  _DS,
  _DSe,
  _DSR,
  _DSRe,
  _DSRes,
  _DSResc,
  _EC,
  _ECg,
  _ET,
  _HAS,
  _HCC,
  _HT,
  _I,
  _IAT,
  _IC,
  _ICm,
  _ICn,
  _ID,
  _II,
  _IPA,
  _IR,
  _IRA,
  _IRT,
  _KK,
  _L,
  _LASC,
  _LASCR,
  _LASCRi,
  _LO,
  _M,
  _MC,
  _MR,
  _MS,
  _MSa,
  _NC,
  _NT,
  _OC,
  _OCA,
  _OE,
  _OI,
  _P,
  _Pa,
  _Pr,
  _PS,
  _PSR,
  _PSRa,
  _R,
  _RES,
  _RESN,
  _RESV,
  _REV,
  _REVK,
  _REVV,
  _RS,
  _RSR,
  _RSRe,
  _RU,
  _S,
  _SA,
  _SC,
  _SCo,
  _SCV,
  _SD,
  _Se,
  _SI,
  _SN,
  _SOC,
  _SU,
  _T,
  _Ta,
  _Ti,
  _UA,
  _UDASC,
  _UDASCR,
  _UDASCRp,
  _US,
  _USR,
  _USRp,
  _UT,
  _V,
  _VCA,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_3_Create";

/* eslint no-var: 0 */

export var BuildCommand = sim(n0, _BC, 0, 8);
export var RuntimeEnvironmentSecretsName = sim(n0, _RESN, 0, 8);
export var RuntimeEnvironmentSecretsValue = sim(n0, _RESV, 0, 8);
export var RuntimeEnvironmentVariablesKey = sim(n0, _REVK, 0, 8);
export var RuntimeEnvironmentVariablesValue = sim(n0, _REVV, 0, 8);
export var StartCommand = sim(n0, _SC, 0, 8);
export var AuthenticationConfiguration = struct(n0, _AC, 0, [_CA, _ARA], [0, 0]);
export var AutoScalingConfiguration = struct(
  n0,
  _ASC,
  0,
  [_ASCA, _ASCN, _ASCR, _L, _S, _MC, _MS, _MSa, _CAr, _DA, _HAS, _ID],
  [0, 0, 1, 2, 0, 1, 1, 1, 4, 4, 2, 2]
);
export var AutoScalingConfigurationSummary = struct(
  n0,
  _ASCS,
  0,
  [_ASCA, _ASCN, _ASCR, _S, _CAr, _HAS, _ID],
  [0, 0, 1, 0, 4, 2, 2]
);
export var CodeConfiguration = struct(n0, _CC, 0, [_CS, _CCV], [0, [() => CodeConfigurationValues, 0]]);
export var CodeConfigurationValues = struct(
  n0,
  _CCV,
  0,
  [_R, _BC, _SC, _P, _REV, _RES],
  [
    0,
    [() => BuildCommand, 0],
    [() => StartCommand, 0],
    0,
    [() => RuntimeEnvironmentVariables, 0],
    [() => RuntimeEnvironmentSecrets, 0],
  ]
);
export var CodeRepository = struct(
  n0,
  _CR,
  0,
  [_RU, _SCV, _CC, _SD],
  [0, () => SourceCodeVersion, [() => CodeConfiguration, 0], 0]
);
export var CreateAutoScalingConfigurationRequest = struct(
  n0,
  _CASCR,
  0,
  [_ASCN, _MC, _MS, _MSa, _Ta],
  [0, 1, 1, 1, () => TagList]
);
export var CreateAutoScalingConfigurationResponse = struct(n0, _CASCRr, 0, [_ASC], [() => AutoScalingConfiguration]);
export var CreateServiceRequest = struct(
  n0,
  _CSR,
  0,
  [_SN, _SCo, _IC, _Ta, _EC, _HCC, _ASCA, _NC, _OC],
  [
    0,
    [() => SourceConfiguration, 0],
    () => InstanceConfiguration,
    () => TagList,
    () => EncryptionConfiguration,
    () => HealthCheckConfiguration,
    0,
    () => NetworkConfiguration,
    () => ServiceObservabilityConfiguration,
  ]
);
export var CreateServiceResponse = struct(n0, _CSRr, 0, [_Se, _OI], [[() => Service, 0], 0]);
export var DeleteAutoScalingConfigurationRequest = struct(n0, _DASCR, 0, [_ASCA, _DAR], [0, 2]);
export var DeleteAutoScalingConfigurationResponse = struct(n0, _DASCRe, 0, [_ASC], [() => AutoScalingConfiguration]);
export var DeleteServiceRequest = struct(n0, _DSR, 0, [_SA], [0]);
export var DeleteServiceResponse = struct(n0, _DSRe, 0, [_Se, _OI], [[() => Service, 0], 0]);
export var DescribeAutoScalingConfigurationRequest = struct(n0, _DASCRes, 0, [_ASCA], [0]);
export var DescribeAutoScalingConfigurationResponse = struct(
  n0,
  _DASCResc,
  0,
  [_ASC],
  [() => AutoScalingConfiguration]
);
export var DescribeServiceRequest = struct(n0, _DSRes, 0, [_SA], [0]);
export var DescribeServiceResponse = struct(n0, _DSResc, 0, [_Se], [[() => Service, 0]]);
export var EgressConfiguration = struct(n0, _ECg, 0, [_ET, _VCA], [0, 0]);
export var EncryptionConfiguration = struct(n0, _EC, 0, [_KK], [0]);
export var HealthCheckConfiguration = struct(n0, _HCC, 0, [_Pr, _Pa, _I, _Ti, _HT, _UT], [0, 0, 1, 1, 1, 1]);
export var ImageConfiguration = struct(
  n0,
  _ICm,
  0,
  [_REV, _SC, _P, _RES],
  [[() => RuntimeEnvironmentVariables, 0], [() => StartCommand, 0], 0, [() => RuntimeEnvironmentSecrets, 0]]
);
export var ImageRepository = struct(n0, _IR, 0, [_II, _ICm, _IRT], [0, [() => ImageConfiguration, 0], 0]);
export var IngressConfiguration = struct(n0, _ICn, 0, [_IPA], [2]);
export var InstanceConfiguration = struct(n0, _IC, 0, [_Cp, _M, _IRA], [0, 0, 0]);
export var ListAutoScalingConfigurationsRequest = struct(n0, _LASCR, 0, [_ASCN, _LO, _MR, _NT], [0, 2, 1, 0]);
export var ListAutoScalingConfigurationsResponse = struct(
  n0,
  _LASCRi,
  0,
  [_ASCSL, _NT],
  [() => AutoScalingConfigurationSummaryList, 0]
);
export var NetworkConfiguration = struct(
  n0,
  _NC,
  0,
  [_ECg, _ICn, _IAT],
  [() => EgressConfiguration, () => IngressConfiguration, 0]
);
export var PauseServiceRequest = struct(n0, _PSR, 0, [_SA], [0]);
export var PauseServiceResponse = struct(n0, _PSRa, 0, [_Se, _OI], [[() => Service, 0], 0]);
export var ResumeServiceRequest = struct(n0, _RSR, 0, [_SA], [0]);
export var ResumeServiceResponse = struct(n0, _RSRe, 0, [_Se, _OI], [[() => Service, 0], 0]);
export var Service = struct(
  n0,
  _Se,
  0,
  [_SN, _SI, _SA, _SU, _CAr, _UA, _DA, _S, _SCo, _IC, _EC, _HCC, _ASCS, _NC, _OC],
  [
    0,
    0,
    0,
    0,
    4,
    4,
    4,
    0,
    [() => SourceConfiguration, 0],
    () => InstanceConfiguration,
    () => EncryptionConfiguration,
    () => HealthCheckConfiguration,
    () => AutoScalingConfigurationSummary,
    () => NetworkConfiguration,
    () => ServiceObservabilityConfiguration,
  ]
);
export var ServiceObservabilityConfiguration = struct(n0, _SOC, 0, [_OE, _OCA], [2, 0]);
export var SourceCodeVersion = struct(n0, _SCV, 0, [_T, _V], [0, 0]);
export var SourceConfiguration = struct(
  n0,
  _SCo,
  0,
  [_CR, _IR, _ADE, _AC],
  [[() => CodeRepository, 0], [() => ImageRepository, 0], 2, () => AuthenticationConfiguration]
);
export var UpdateDefaultAutoScalingConfigurationRequest = struct(n0, _UDASCR, 0, [_ASCA], [0]);
export var UpdateDefaultAutoScalingConfigurationResponse = struct(
  n0,
  _UDASCRp,
  0,
  [_ASC],
  [() => AutoScalingConfiguration]
);
export var UpdateServiceRequest = struct(
  n0,
  _USR,
  0,
  [_SA, _SCo, _IC, _ASCA, _HCC, _NC, _OC],
  [
    0,
    [() => SourceConfiguration, 0],
    () => InstanceConfiguration,
    0,
    () => HealthCheckConfiguration,
    () => NetworkConfiguration,
    () => ServiceObservabilityConfiguration,
  ]
);
export var UpdateServiceResponse = struct(n0, _USRp, 0, [_Se, _OI], [[() => Service, 0], 0]);
export var AutoScalingConfigurationSummaryList = list(n0, _ASCSL, 0, () => AutoScalingConfigurationSummary);
export var RuntimeEnvironmentSecrets = map(
  n0,
  _RES,
  0,
  [() => RuntimeEnvironmentSecretsName, 0],
  [() => RuntimeEnvironmentSecretsValue, 0]
);
export var RuntimeEnvironmentVariables = map(
  n0,
  _REV,
  0,
  [() => RuntimeEnvironmentVariablesKey, 0],
  [() => RuntimeEnvironmentVariablesValue, 0]
);
export var CreateAutoScalingConfiguration = op(
  n0,
  _CASC,
  0,
  () => CreateAutoScalingConfigurationRequest,
  () => CreateAutoScalingConfigurationResponse
);
export var CreateService = op(
  n0,
  _CSr,
  0,
  () => CreateServiceRequest,
  () => CreateServiceResponse
);
export var DeleteAutoScalingConfiguration = op(
  n0,
  _DASC,
  0,
  () => DeleteAutoScalingConfigurationRequest,
  () => DeleteAutoScalingConfigurationResponse
);
export var DeleteService = op(
  n0,
  _DS,
  0,
  () => DeleteServiceRequest,
  () => DeleteServiceResponse
);
export var DescribeAutoScalingConfiguration = op(
  n0,
  _DASCe,
  0,
  () => DescribeAutoScalingConfigurationRequest,
  () => DescribeAutoScalingConfigurationResponse
);
export var DescribeService = op(
  n0,
  _DSe,
  0,
  () => DescribeServiceRequest,
  () => DescribeServiceResponse
);
export var ListAutoScalingConfigurations = op(
  n0,
  _LASC,
  0,
  () => ListAutoScalingConfigurationsRequest,
  () => ListAutoScalingConfigurationsResponse
);
export var PauseService = op(
  n0,
  _PS,
  0,
  () => PauseServiceRequest,
  () => PauseServiceResponse
);
export var ResumeService = op(
  n0,
  _RS,
  0,
  () => ResumeServiceRequest,
  () => ResumeServiceResponse
);
export var UpdateDefaultAutoScalingConfiguration = op(
  n0,
  _UDASC,
  0,
  () => UpdateDefaultAutoScalingConfigurationRequest,
  () => UpdateDefaultAutoScalingConfigurationResponse
);
export var UpdateService = op(
  n0,
  _US,
  0,
  () => UpdateServiceRequest,
  () => UpdateServiceResponse
);
