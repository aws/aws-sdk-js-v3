// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _AA,
  _aA,
  _aAI,
  _act,
  _ADA,
  _aI,
  _aIc,
  _aL,
  _ALSl,
  _cA,
  _cou,
  _D,
  _d,
  _det,
  _em,
  _FFLI,
  _fFLI,
  _h,
  _hQ,
  _i,
  _iA,
  _inv,
  _it,
  _jN,
  _LADA,
  _LADAR,
  _LADARi,
  _LAL,
  _LALR,
  _LALRi,
  _LFF,
  _LFFR,
  _LFFRi,
  _LI,
  _LIR,
  _LIRi,
  _LM,
  _LMR,
  _LMRi,
  _LOAA,
  _lOAA,
  _LOAAR,
  _LOAARi,
  _lOADA,
  _lOALS,
  _lOD,
  _lOFFLI,
  _lOI,
  _lOM,
  _lOSITE,
  _LRPD,
  _LRPDR,
  _LRPDRi,
  _LSIT,
  _LSITR,
  _LSITRi,
  _M,
  _mAI,
  _me,
  _mR,
  _n,
  _nT,
  _oA,
  _rAe,
  _rS,
  _s,
  _sIT,
  _SITEe,
  _su,
  _t,
  _ty,
  _uA,
  n0,
} from "./schemas_0";
import { Invitation } from "./schemas_25_Get";

/* eslint no-var: 0 */

export var AdminAccount = struct(
  n0,
  _AA,
  0,
  [_aI, _s],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var AllowListSummary = struct(
  n0,
  _ALSl,
  0,
  [_a, _cA, _d, _i, _n, _uA],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      5,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      5,
      {
        [_jN]: _uA,
      },
    ],
  ]
);
export var AutomatedDiscoveryAccount = struct(
  n0,
  _ADA,
  0,
  [_aI, _s],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var Detection = struct(
  n0,
  _D,
  0,
  [_a, _cou, _i, _n, _su, _ty],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      1,
      {
        [_jN]: _cou,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      2,
      {
        [_jN]: _su,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var FindingsFilterListItem = struct(
  n0,
  _FFLI,
  0,
  [_act, _a, _i, _n, _t],
  [
    [
      0,
      {
        [_jN]: _act,
      },
    ],
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var ListAllowListsRequest = struct(
  n0,
  _LALR,
  0,
  [_mR, _nT],
  [
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
export var ListAllowListsResponse = struct(
  n0,
  _LALRi,
  0,
  [_aL, _nT],
  [
    [
      () => __listOfAllowListSummary,
      {
        [_jN]: _aL,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListAutomatedDiscoveryAccountsRequest = struct(
  n0,
  _LADAR,
  0,
  [_aIc, _mR, _nT],
  [
    [
      64 | 0,
      {
        [_hQ]: _aIc,
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
export var ListAutomatedDiscoveryAccountsResponse = struct(
  n0,
  _LADARi,
  0,
  [_it, _nT],
  [
    [
      () => __listOfAutomatedDiscoveryAccount,
      {
        [_jN]: _it,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListFindingsFiltersRequest = struct(
  n0,
  _LFFR,
  0,
  [_mR, _nT],
  [
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
export var ListFindingsFiltersResponse = struct(
  n0,
  _LFFRi,
  0,
  [_fFLI, _nT],
  [
    [
      () => __listOfFindingsFilterListItem,
      {
        [_jN]: _fFLI,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListInvitationsRequest = struct(
  n0,
  _LIR,
  0,
  [_mR, _nT],
  [
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
export var ListInvitationsResponse = struct(
  n0,
  _LIRi,
  0,
  [_inv, _nT],
  [
    [
      () => __listOfInvitation,
      {
        [_jN]: _inv,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListMembersRequest = struct(
  n0,
  _LMR,
  0,
  [_mR, _nT, _oA],
  [
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
    [
      0,
      {
        [_hQ]: _oA,
      },
    ],
  ]
);
export var ListMembersResponse = struct(
  n0,
  _LMRi,
  0,
  [_me, _nT],
  [
    [
      () => __listOfMember,
      {
        [_jN]: _me,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListOrganizationAdminAccountsRequest = struct(
  n0,
  _LOAAR,
  0,
  [_mR, _nT],
  [
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
export var ListOrganizationAdminAccountsResponse = struct(
  n0,
  _LOAARi,
  0,
  [_aA, _nT],
  [
    [
      () => __listOfAdminAccount,
      {
        [_jN]: _aA,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListResourceProfileDetectionsRequest = struct(
  n0,
  _LRPDR,
  0,
  [_mR, _nT, _rAe],
  [
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
    [
      0,
      {
        [_hQ]: _rAe,
      },
    ],
  ]
);
export var ListResourceProfileDetectionsResponse = struct(
  n0,
  _LRPDRi,
  0,
  [_det, _nT],
  [
    [
      () => __listOfDetection,
      {
        [_jN]: _det,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListSensitivityInspectionTemplatesRequest = struct(
  n0,
  _LSITR,
  0,
  [_mR, _nT],
  [
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
export var ListSensitivityInspectionTemplatesResponse = struct(
  n0,
  _LSITRi,
  0,
  [_nT, _sIT],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfSensitivityInspectionTemplatesEntry,
      {
        [_jN]: _sIT,
      },
    ],
  ]
);
export var Member = struct(
  n0,
  _M,
  0,
  [_aI, _aAI, _a, _em, _iA, _mAI, _rS, _t, _uA],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _aAI,
      },
    ],
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _em,
      },
    ],
    [
      5,
      {
        [_jN]: _iA,
      },
    ],
    [
      0,
      {
        [_jN]: _mAI,
      },
    ],
    [
      0,
      {
        [_jN]: _rS,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      5,
      {
        [_jN]: _uA,
      },
    ],
  ]
);
export var SensitivityInspectionTemplatesEntry = struct(
  n0,
  _SITEe,
  0,
  [_i, _n],
  [
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var __listOfAdminAccount = list(n0, _lOAA, 0, [() => AdminAccount, 0]);
export var __listOfAllowListSummary = list(n0, _lOALS, 0, [() => AllowListSummary, 0]);
export var __listOfAutomatedDiscoveryAccount = list(n0, _lOADA, 0, [() => AutomatedDiscoveryAccount, 0]);
export var __listOfDetection = list(n0, _lOD, 0, [() => Detection, 0]);
export var __listOfFindingsFilterListItem = list(n0, _lOFFLI, 0, [() => FindingsFilterListItem, 0]);
export var __listOfInvitation = list(n0, _lOI, 0, [() => Invitation, 0]);
export var __listOfMember = list(n0, _lOM, 0, [() => Member, 0]);
export var __listOfSensitivityInspectionTemplatesEntry = list(n0, _lOSITE, 0, [
  () => SensitivityInspectionTemplatesEntry,
  0,
]);
export var ListAllowLists = op(
  n0,
  _LAL,
  {
    [_h]: ["GET", "/allow-lists", 200],
  },
  () => ListAllowListsRequest,
  () => ListAllowListsResponse
);
export var ListAutomatedDiscoveryAccounts = op(
  n0,
  _LADA,
  {
    [_h]: ["GET", "/automated-discovery/accounts", 200],
  },
  () => ListAutomatedDiscoveryAccountsRequest,
  () => ListAutomatedDiscoveryAccountsResponse
);
export var ListFindingsFilters = op(
  n0,
  _LFF,
  {
    [_h]: ["GET", "/findingsfilters", 200],
  },
  () => ListFindingsFiltersRequest,
  () => ListFindingsFiltersResponse
);
export var ListInvitations = op(
  n0,
  _LI,
  {
    [_h]: ["GET", "/invitations", 200],
  },
  () => ListInvitationsRequest,
  () => ListInvitationsResponse
);
export var ListMembers = op(
  n0,
  _LM,
  {
    [_h]: ["GET", "/members", 200],
  },
  () => ListMembersRequest,
  () => ListMembersResponse
);
export var ListOrganizationAdminAccounts = op(
  n0,
  _LOAA,
  {
    [_h]: ["GET", "/admin", 200],
  },
  () => ListOrganizationAdminAccountsRequest,
  () => ListOrganizationAdminAccountsResponse
);
export var ListResourceProfileDetections = op(
  n0,
  _LRPD,
  {
    [_h]: ["GET", "/resource-profiles/detections", 200],
  },
  () => ListResourceProfileDetectionsRequest,
  () => ListResourceProfileDetectionsResponse
);
export var ListSensitivityInspectionTemplates = op(
  n0,
  _LSIT,
  {
    [_h]: ["GET", "/templates/sensitivity-inspections", 200],
  },
  () => ListSensitivityInspectionTemplatesRequest,
  () => ListSensitivityInspectionTemplatesResponse
);
