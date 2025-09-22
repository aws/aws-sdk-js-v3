// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CMP,
  _CMPM,
  _CMPR,
  _De,
  _DMP,
  _DMPe,
  _DMPM,
  _DMPMe,
  _DMPR,
  _DMPRe,
  _DPA,
  _DPD,
  _DPDD,
  _DPDDL,
  _DPDL,
  _DPI,
  _DPN,
  _F,
  _IPA,
  _IPI,
  _IPN,
  _Ma,
  _MMP,
  _MMPM,
  _MMPR,
  _MP,
  _MPA,
  _MPCT,
  _MPI,
  _MPi,
  _MPL,
  _MPN,
  _MR,
  _SBP,
  _SBRA,
  _SCAA,
  _SCAAp,
  _SDPD,
  _SMARA,
  _SMSI,
  _T,
  _TDPD,
  _TR,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateMigrationProjectMessage = struct(
  n0,
  _CMPM,
  0,
  [_MPN, _SDPD, _TDPD, _IPI, _TR, _De, _T, _SCAA],
  [
    0,
    () => DataProviderDescriptorDefinitionList,
    () => DataProviderDescriptorDefinitionList,
    0,
    0,
    0,
    [() => TagList, 0],
    () => SCApplicationAttributes,
  ]
);
export var CreateMigrationProjectResponse = struct(n0, _CMPR, 0, [_MP], [() => MigrationProject]);
export var DataProviderDescriptor = struct(n0, _DPD, 0, [_SMSI, _SMARA, _DPN, _DPA], [0, 0, 0, 0]);
export var DataProviderDescriptorDefinition = struct(n0, _DPDD, 0, [_DPI, _SMSI, _SMARA], [0, 0, 0]);
export var DeleteMigrationProjectMessage = struct(n0, _DMPM, 0, [_MPI], [0]);
export var DeleteMigrationProjectResponse = struct(n0, _DMPR, 0, [_MP], [() => MigrationProject]);
export var DescribeMigrationProjectsMessage = struct(n0, _DMPMe, 0, [_F, _MR, _Ma], [[() => FilterList, 0], 1, 0]);
export var DescribeMigrationProjectsResponse = struct(n0, _DMPRe, 0, [_Ma, _MPi], [0, [() => MigrationProjectList, 0]]);
export var MigrationProject = struct(
  n0,
  _MP,
  0,
  [_MPN, _MPA, _MPCT, _SDPD, _TDPD, _IPA, _IPN, _TR, _De, _SCAA],
  [
    0,
    0,
    5,
    () => DataProviderDescriptorList,
    () => DataProviderDescriptorList,
    0,
    0,
    0,
    0,
    () => SCApplicationAttributes,
  ]
);
export var ModifyMigrationProjectMessage = struct(
  n0,
  _MMPM,
  0,
  [_MPI, _MPN, _SDPD, _TDPD, _IPI, _TR, _De, _SCAA],
  [
    0,
    0,
    () => DataProviderDescriptorDefinitionList,
    () => DataProviderDescriptorDefinitionList,
    0,
    0,
    0,
    () => SCApplicationAttributes,
  ]
);
export var ModifyMigrationProjectResponse = struct(n0, _MMPR, 0, [_MP], [() => MigrationProject]);
export var SCApplicationAttributes = struct(n0, _SCAAp, 0, [_SBP, _SBRA], [0, 0]);
export var DataProviderDescriptorDefinitionList = list(n0, _DPDDL, 0, () => DataProviderDescriptorDefinition);
export var DataProviderDescriptorList = list(n0, _DPDL, 0, () => DataProviderDescriptor);
export var MigrationProjectList = list(n0, _MPL, 0, [
  () => MigrationProject,
  {
    [_xN]: _MP,
  },
]);
export var CreateMigrationProject = op(
  n0,
  _CMP,
  0,
  () => CreateMigrationProjectMessage,
  () => CreateMigrationProjectResponse
);
export var DeleteMigrationProject = op(
  n0,
  _DMP,
  0,
  () => DeleteMigrationProjectMessage,
  () => DeleteMigrationProjectResponse
);
export var DescribeMigrationProjects = op(
  n0,
  _DMPe,
  0,
  () => DescribeMigrationProjectsMessage,
  () => DescribeMigrationProjectsResponse
);
export var ModifyMigrationProject = op(
  n0,
  _MMP,
  0,
  () => ModifyMigrationProjectMessage,
  () => ModifyMigrationProjectResponse
);
