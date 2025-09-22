// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _ACL,
  _ACv,
  _Al,
  _DAC,
  _DACR,
  _DACRe,
  _DC,
  _DDe,
  _DM,
  _DMD,
  _DN,
  _EAP,
  _EE,
  _EM,
  _EP,
  _EPw,
  _EU,
  _FR,
  _LA,
  _LAC,
  _LACR,
  _LACRi,
  _LAP,
  _LMD,
  _LMDR,
  _LMDRi,
  _LO,
  _LOR,
  _LORi,
  _LP,
  _MD,
  _MDS,
  _MRa,
  _NT,
  _OI,
  _OS,
  _OSr,
  _PT,
  _REAP,
  _S,
  _TAC,
  _TACR,
  _TACRe,
  _TP,
  _UAC,
  _UACR,
  _UACRp,
  n0,
} from "./schemas_0";
import { Password } from "./schemas_29_Availability";

/* eslint no-var: 0 */

export var AvailabilityConfiguration = struct(
  n0,
  _AC,
  0,
  [_DN, _PT, _EP, _LP, _DC, _DM],
  [0, 0, () => RedactedEwsAvailabilityProvider, () => LambdaAvailabilityProvider, 4, 4]
);
export var DeleteAvailabilityConfigurationRequest = struct(n0, _DACR, 0, [_OI, _DN], [0, 0]);
export var DeleteAvailabilityConfigurationResponse = struct(n0, _DACRe, 0, [], []);
export var EwsAvailabilityProvider = struct(n0, _EAP, 0, [_EE, _EU, _EPw], [0, 0, [() => Password, 0]]);
export var LambdaAvailabilityProvider = struct(n0, _LAP, 0, [_LA], [0]);
export var ListAvailabilityConfigurationsRequest = struct(n0, _LACR, 0, [_OI, _MRa, _NT], [0, 1, 0]);
export var ListAvailabilityConfigurationsResponse = struct(
  n0,
  _LACRi,
  0,
  [_ACv, _NT],
  [() => AvailabilityConfigurationList, 0]
);
export var ListMailDomainsRequest = struct(n0, _LMDR, 0, [_OI, _MRa, _NT], [0, 1, 0]);
export var ListMailDomainsResponse = struct(n0, _LMDRi, 0, [_MD, _NT], [() => MailDomains, 0]);
export var ListOrganizationsRequest = struct(n0, _LOR, 0, [_NT, _MRa], [0, 1]);
export var ListOrganizationsResponse = struct(n0, _LORi, 0, [_OS, _NT], [() => OrganizationSummaries, 0]);
export var MailDomainSummary = struct(n0, _MDS, 0, [_DN, _DDe], [0, 2]);
export var OrganizationSummary = struct(n0, _OSr, 0, [_OI, _Al, _DMD, _EM, _S], [0, 0, 0, 0, 0]);
export var RedactedEwsAvailabilityProvider = struct(n0, _REAP, 0, [_EE, _EU], [0, 0]);
export var TestAvailabilityConfigurationRequest = struct(
  n0,
  _TACR,
  0,
  [_OI, _DN, _EP, _LP],
  [0, 0, [() => EwsAvailabilityProvider, 0], () => LambdaAvailabilityProvider]
);
export var TestAvailabilityConfigurationResponse = struct(n0, _TACRe, 0, [_TP, _FR], [2, 0]);
export var UpdateAvailabilityConfigurationRequest = struct(
  n0,
  _UACR,
  0,
  [_OI, _DN, _EP, _LP],
  [0, 0, [() => EwsAvailabilityProvider, 0], () => LambdaAvailabilityProvider]
);
export var UpdateAvailabilityConfigurationResponse = struct(n0, _UACRp, 0, [], []);
export var AvailabilityConfigurationList = list(n0, _ACL, 0, () => AvailabilityConfiguration);
export var MailDomains = list(n0, _MD, 0, () => MailDomainSummary);
export var OrganizationSummaries = list(n0, _OS, 0, () => OrganizationSummary);
export var DeleteAvailabilityConfiguration = op(
  n0,
  _DAC,
  2,
  () => DeleteAvailabilityConfigurationRequest,
  () => DeleteAvailabilityConfigurationResponse
);
export var ListAvailabilityConfigurations = op(
  n0,
  _LAC,
  0,
  () => ListAvailabilityConfigurationsRequest,
  () => ListAvailabilityConfigurationsResponse
);
export var ListMailDomains = op(
  n0,
  _LMD,
  2,
  () => ListMailDomainsRequest,
  () => ListMailDomainsResponse
);
export var ListOrganizations = op(
  n0,
  _LO,
  2,
  () => ListOrganizationsRequest,
  () => ListOrganizationsResponse
);
export var TestAvailabilityConfiguration = op(
  n0,
  _TAC,
  0,
  () => TestAvailabilityConfigurationRequest,
  () => TestAvailabilityConfigurationResponse
);
export var UpdateAvailabilityConfiguration = op(
  n0,
  _UAC,
  2,
  () => UpdateAvailabilityConfigurationRequest,
  () => UpdateAvailabilityConfigurationResponse
);
