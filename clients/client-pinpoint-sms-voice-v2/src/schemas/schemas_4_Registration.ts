// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ABs,
  _CRA,
  _CRAR,
  _CRARr,
  _D,
  _DB,
  _DH,
  _DL,
  _DRFD,
  _DRFDR,
  _DRFDRe,
  _DRSD,
  _DRSDR,
  _DRSDRe,
  _DRTD,
  _DRTDR,
  _DRTDRe,
  _DT,
  _ETV,
  _F,
  _FP,
  _FPi,
  _FR,
  _FT,
  _ICC,
  _LD,
  _LRA,
  _LRAR,
  _LRARi,
  _MC,
  _MCa,
  _MLax,
  _MLi,
  _MR,
  _N,
  _NT,
  _Op,
  _Opt,
  _Pa,
  _PN,
  _RA,
  _RAe,
  _RAegi,
  _RAF,
  _RAFL,
  _RAM,
  _RAML,
  _RFD,
  _RFDe,
  _RFDH,
  _RFDL,
  _RI,
  _RIe,
  _RSD,
  _RSDe,
  _RSDH,
  _RSDL,
  _RT,
  _RTD,
  _RTDe,
  _RTDH,
  _RTDL,
  _RTe,
  _RTeg,
  _RTF,
  _RTFL,
  _SA,
  _SAL,
  _SAu,
  _SDh,
  _SOD,
  _SODe,
  _SODL,
  _SP,
  _SPe,
  _SV,
  _Ti,
  _TVD,
  _TVe,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRegistrationAssociationRequest = struct(n0, _CRAR, 0, [_RIe, _RI], [0, 0]);
export var CreateRegistrationAssociationResult = struct(
  n0,
  _CRARr,
  0,
  [_RA, _RIe, _RTe, _RAe, _RI, _RT, _ICC, _PN],
  [0, 0, 0, 0, 0, 0, 0, 0]
);
export var DescribeRegistrationFieldDefinitionsRequest = struct(
  n0,
  _DRFDR,
  0,
  [_RTe, _SP, _FPi, _NT, _MR],
  [0, 0, 64 | 0, 0, 1]
);
export var DescribeRegistrationFieldDefinitionsResult = struct(
  n0,
  _DRFDRe,
  0,
  [_RTe, _RFD, _NT],
  [0, () => RegistrationFieldDefinitionList, 0]
);
export var DescribeRegistrationSectionDefinitionsRequest = struct(
  n0,
  _DRSDR,
  0,
  [_RTe, _SPe, _NT, _MR],
  [0, 64 | 0, 0, 1]
);
export var DescribeRegistrationSectionDefinitionsResult = struct(
  n0,
  _DRSDRe,
  0,
  [_RTe, _RSD, _NT],
  [0, () => RegistrationSectionDefinitionList, 0]
);
export var DescribeRegistrationTypeDefinitionsRequest = struct(
  n0,
  _DRTDR,
  0,
  [_RTeg, _F, _NT, _MR],
  [64 | 0, () => RegistrationTypeFilterList, 0, 1]
);
export var DescribeRegistrationTypeDefinitionsResult = struct(
  n0,
  _DRTDRe,
  0,
  [_RTD, _NT],
  [() => RegistrationTypeDefinitionList, 0]
);
export var ListRegistrationAssociationsRequest = struct(
  n0,
  _LRAR,
  0,
  [_RIe, _F, _NT, _MR],
  [0, () => RegistrationAssociationFilterList, 0, 1]
);
export var ListRegistrationAssociationsResult = struct(
  n0,
  _LRARi,
  0,
  [_RA, _RIe, _RTe, _RAegi, _NT],
  [0, 0, 0, () => RegistrationAssociationMetadataList, 0]
);
export var RegistrationAssociationFilter = struct(n0, _RAF, 0, [_N, _Va], [0, 64 | 0]);
export var RegistrationAssociationMetadata = struct(n0, _RAM, 0, [_RAe, _RI, _RT, _ICC, _PN], [0, 0, 0, 0, 0]);
export var RegistrationFieldDefinition = struct(
  n0,
  _RFDe,
  0,
  [_SP, _FP, _FT, _FR, _SV, _TVe, _DH],
  [0, 0, 0, 0, () => SelectValidation, () => TextValidation, () => RegistrationFieldDisplayHints]
);
export var RegistrationFieldDisplayHints = struct(
  n0,
  _RFDH,
  0,
  [_Ti, _SDh, _LD, _DT, _DL, _SOD, _TVD, _ETV],
  [0, 0, 0, 0, 0, () => SelectOptionDescriptionsList, 0, 0]
);
export var RegistrationSectionDefinition = struct(n0, _RSDe, 0, [_SP, _DH], [0, () => RegistrationSectionDisplayHints]);
export var RegistrationSectionDisplayHints = struct(n0, _RSDH, 0, [_Ti, _SDh, _LD, _DT, _DL], [0, 0, 0, 0, 0]);
export var RegistrationTypeDefinition = struct(
  n0,
  _RTDe,
  0,
  [_RTe, _SA, _DH],
  [0, () => SupportedAssociationList, () => RegistrationTypeDisplayHints]
);
export var RegistrationTypeDisplayHints = struct(n0, _RTDH, 0, [_Ti, _SDh, _LD, _DT, _DL], [0, 0, 0, 0, 0]);
export var RegistrationTypeFilter = struct(n0, _RTF, 0, [_N, _Va], [0, 64 | 0]);
export var SelectOptionDescription = struct(n0, _SODe, 0, [_Op, _Ti, _D], [0, 0, 0]);
export var SelectValidation = struct(n0, _SV, 0, [_MC, _MCa, _Opt], [1, 1, 64 | 0]);
export var SupportedAssociation = struct(n0, _SAu, 0, [_RT, _ICC, _ABs, _DB], [0, 0, 0, 0]);
export var TextValidation = struct(n0, _TVe, 0, [_MLi, _MLax, _Pa], [1, 1, 0]);
export var RegistrationAssociationFilterList = list(n0, _RAFL, 0, () => RegistrationAssociationFilter);
export var RegistrationAssociationMetadataList = list(n0, _RAML, 0, () => RegistrationAssociationMetadata);
export var RegistrationFieldDefinitionList = list(n0, _RFDL, 0, () => RegistrationFieldDefinition);
export var RegistrationSectionDefinitionList = list(n0, _RSDL, 0, () => RegistrationSectionDefinition);
export var RegistrationTypeDefinitionList = list(n0, _RTDL, 0, () => RegistrationTypeDefinition);
export var RegistrationTypeFilterList = list(n0, _RTFL, 0, () => RegistrationTypeFilter);
export var RegistrationTypeList = 64 | 0;

export var SectionPathList = 64 | 0;

export var SelectOptionDescriptionsList = list(n0, _SODL, 0, () => SelectOptionDescription);
export var StringList = 64 | 0;

export var SupportedAssociationList = list(n0, _SAL, 0, () => SupportedAssociation);
export var CreateRegistrationAssociation = op(
  n0,
  _CRA,
  0,
  () => CreateRegistrationAssociationRequest,
  () => CreateRegistrationAssociationResult
);
export var DescribeRegistrationFieldDefinitions = op(
  n0,
  _DRFD,
  0,
  () => DescribeRegistrationFieldDefinitionsRequest,
  () => DescribeRegistrationFieldDefinitionsResult
);
export var DescribeRegistrationSectionDefinitions = op(
  n0,
  _DRSD,
  0,
  () => DescribeRegistrationSectionDefinitionsRequest,
  () => DescribeRegistrationSectionDefinitionsResult
);
export var DescribeRegistrationTypeDefinitions = op(
  n0,
  _DRTD,
  0,
  () => DescribeRegistrationTypeDefinitionsRequest,
  () => DescribeRegistrationTypeDefinitionsResult
);
export var ListRegistrationAssociations = op(
  n0,
  _LRA,
  0,
  () => ListRegistrationAssociationsRequest,
  () => ListRegistrationAssociationsResult
);
