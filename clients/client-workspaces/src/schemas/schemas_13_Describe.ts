// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ApplicationNotSupportedException as __ApplicationNotSupportedException,
  ComputeNotCompatibleException as __ComputeNotCompatibleException,
  IncompatibleApplicationsException as __IncompatibleApplicationsException,
  OperatingSystemNotCompatibleException as __OperatingSystemNotCompatibleException,
  ResourceInUseException as __ResourceInUseException,
} from "../models/index";
import {
  _A,
  _AI,
  _AIp,
  _ANSE,
  _Ap,
  _ARA,
  _ARAL,
  _ARI,
  _ART,
  _ARTs,
  _As,
  _ASRs,
  _AWA,
  _AWAR,
  _AWARs,
  _C,
  _c,
  _CNCE,
  _CTN,
  _D,
  _DAA,
  _DAAR,
  _DAARe,
  _DAe,
  _DARes,
  _DAResc,
  _DIAe,
  _DIAR,
  _DIARe,
  _DWAe,
  _DWAi,
  _DWARes,
  _DWAResc,
  _DWARi,
  _DWARis,
  _e,
  _EC,
  _EM,
  _IAE,
  _II,
  _IRA,
  _IRAL,
  _LT,
  _LUT,
  _m,
  _MR,
  _N,
  _NT,
  _O,
  _OSN,
  _OSNCE,
  _RI,
  _RIUE,
  _S,
  _SCTN,
  _SOSN,
  _SR,
  _WI,
  _WRA,
  _WRAL,
  _WSA,
  _WSAL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationNotSupportedException = error(
  n0,
  _ANSE,
  {
    [_e]: _c,
  },
  [],
  [],

  __ApplicationNotSupportedException
);
export var ApplicationResourceAssociation = struct(
  n0,
  _ARA,
  0,
  [_AI, _ARI, _ART, _C, _LUT, _S, _SR],
  [0, 0, 0, 4, 4, 0, () => AssociationStateReason]
);
export var AssociateWorkspaceApplicationRequest = struct(n0, _AWAR, 0, [_WI, _AI], [0, 0]);
export var AssociateWorkspaceApplicationResult = struct(n0, _AWARs, 0, [_A], [() => WorkspaceResourceAssociation]);
export var AssociationStateReason = struct(n0, _ASRs, 0, [_EC, _EM], [0, 0]);
export var ComputeNotCompatibleException = error(
  n0,
  _CNCE,
  {
    [_e]: _c,
  },
  [],
  [],

  __ComputeNotCompatibleException
);
export var DescribeApplicationAssociationsRequest = struct(n0, _DAAR, 0, [_MR, _NT, _AI, _ARTs], [1, 0, 0, 64 | 0]);
export var DescribeApplicationAssociationsResult = struct(
  n0,
  _DAARe,
  0,
  [_As, _NT],
  [() => ApplicationResourceAssociationList, 0]
);
export var DescribeApplicationsRequest = struct(
  n0,
  _DARes,
  0,
  [_AIp, _CTN, _LT, _OSN, _O, _MR, _NT],
  [64 | 0, 64 | 0, 0, 64 | 0, 0, 1, 0]
);
export var DescribeApplicationsResult = struct(n0, _DAResc, 0, [_Ap, _NT], [() => WorkSpaceApplicationList, 0]);
export var DescribeImageAssociationsRequest = struct(n0, _DIAR, 0, [_II, _ARTs], [0, 64 | 0]);
export var DescribeImageAssociationsResult = struct(n0, _DIARe, 0, [_As], [() => ImageResourceAssociationList]);
export var DescribeWorkspaceAssociationsRequest = struct(n0, _DWARes, 0, [_WI, _ARTs], [0, 64 | 0]);
export var DescribeWorkspaceAssociationsResult = struct(
  n0,
  _DWAResc,
  0,
  [_As],
  [() => WorkspaceResourceAssociationList]
);
export var DisassociateWorkspaceApplicationRequest = struct(n0, _DWARi, 0, [_WI, _AI], [0, 0]);
export var DisassociateWorkspaceApplicationResult = struct(n0, _DWARis, 0, [_A], [() => WorkspaceResourceAssociation]);
export var ImageResourceAssociation = struct(
  n0,
  _IRA,
  0,
  [_ARI, _ART, _C, _LUT, _II, _S, _SR],
  [0, 0, 4, 4, 0, 0, () => AssociationStateReason]
);
export var IncompatibleApplicationsException = error(
  n0,
  _IAE,
  {
    [_e]: _c,
  },
  [],
  [],

  __IncompatibleApplicationsException
);
export var OperatingSystemNotCompatibleException = error(
  n0,
  _OSNCE,
  {
    [_e]: _c,
  },
  [],
  [],

  __OperatingSystemNotCompatibleException
);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
  },
  [_m, _RI],
  [0, 0],

  __ResourceInUseException
);
export var WorkSpaceApplication = struct(
  n0,
  _WSA,
  0,
  [_AI, _C, _D, _LT, _N, _O, _S, _SCTN, _SOSN],
  [0, 4, 0, 0, 0, 0, 0, 64 | 0, 64 | 0]
);
export var WorkspaceResourceAssociation = struct(
  n0,
  _WRA,
  0,
  [_ARI, _ART, _C, _LUT, _S, _SR, _WI],
  [0, 0, 4, 4, 0, () => AssociationStateReason, 0]
);
export var ApplicationAssociatedResourceTypeList = 64 | 0;

export var ApplicationResourceAssociationList = list(n0, _ARAL, 0, () => ApplicationResourceAssociation);
export var ComputeList = 64 | 0;

export var ImageAssociatedResourceTypeList = 64 | 0;

export var ImageResourceAssociationList = list(n0, _IRAL, 0, () => ImageResourceAssociation);
export var OperatingSystemNameList = 64 | 0;

export var WorkSpaceApplicationIdList = 64 | 0;

export var WorkSpaceApplicationList = list(n0, _WSAL, 0, () => WorkSpaceApplication);
export var WorkSpaceAssociatedResourceTypeList = 64 | 0;

export var WorkspaceResourceAssociationList = list(n0, _WRAL, 0, () => WorkspaceResourceAssociation);
export var AssociateWorkspaceApplication = op(
  n0,
  _AWA,
  0,
  () => AssociateWorkspaceApplicationRequest,
  () => AssociateWorkspaceApplicationResult
);
export var DescribeApplicationAssociations = op(
  n0,
  _DAA,
  0,
  () => DescribeApplicationAssociationsRequest,
  () => DescribeApplicationAssociationsResult
);
export var DescribeApplications = op(
  n0,
  _DAe,
  0,
  () => DescribeApplicationsRequest,
  () => DescribeApplicationsResult
);
export var DescribeImageAssociations = op(
  n0,
  _DIAe,
  0,
  () => DescribeImageAssociationsRequest,
  () => DescribeImageAssociationsResult
);
export var DescribeWorkspaceAssociations = op(
  n0,
  _DWAe,
  0,
  () => DescribeWorkspaceAssociationsRequest,
  () => DescribeWorkspaceAssociationsResult
);
export var DisassociateWorkspaceApplication = op(
  n0,
  _DWAi,
  0,
  () => DisassociateWorkspaceApplicationRequest,
  () => DisassociateWorkspaceApplicationResult
);
