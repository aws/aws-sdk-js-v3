const _AP = "AssociatedPermission";
const _APL = "AssociatedPermissionList";
const _ARS = "AssociateResourceShare";
const _ARSI = "AcceptResourceShareInvitation";
const _ARSIR = "AcceptResourceShareInvitationRequest";
const _ARSIRc = "AcceptResourceShareInvitationResponse";
const _ARSP = "AssociateResourceSharePermission";
const _ARSPR = "AssociateResourceSharePermissionRequest";
const _ARSPRs = "AssociateResourceSharePermissionResponse";
const _ARSR = "AssociateResourceShareRequest";
const _ARSRs = "AssociateResourceShareResponse";
const _CP = "CreatePermission";
const _CPR = "CreatePermissionRequest";
const _CPRr = "CreatePermissionResponse";
const _CPV = "CreatePermissionVersion";
const _CPVR = "CreatePermissionVersionRequest";
const _CPVRr = "CreatePermissionVersionResponse";
const _CRS = "CreateResourceShare";
const _CRSR = "CreateResourceShareRequest";
const _CRSRr = "CreateResourceShareResponse";
const _DP = "DeletePermission";
const _DPR = "DeletePermissionRequest";
const _DPRe = "DeletePermissionResponse";
const _DPV = "DeletePermissionVersion";
const _DPVR = "DeletePermissionVersionRequest";
const _DPVRe = "DeletePermissionVersionResponse";
const _DRS = "DeleteResourceShare";
const _DRSP = "DisassociateResourceSharePermission";
const _DRSPR = "DisassociateResourceSharePermissionRequest";
const _DRSPRi = "DisassociateResourceSharePermissionResponse";
const _DRSR = "DeleteResourceShareRequest";
const _DRSRe = "DeleteResourceShareResponse";
const _DRSRi = "DisassociateResourceShareRequest";
const _DRSRis = "DisassociateResourceShareResponse";
const _DRSi = "DisassociateResourceShare";
const _ESWAO = "EnableSharingWithAwsOrganization";
const _ESWAOR = "EnableSharingWithAwsOrganizationRequest";
const _ESWAORn = "EnableSharingWithAwsOrganizationResponse";
const _GP = "GetPermission";
const _GPR = "GetPermissionRequest";
const _GPRe = "GetPermissionResponse";
const _GRP = "GetResourcePolicies";
const _GRPR = "GetResourcePoliciesRequest";
const _GRPRe = "GetResourcePoliciesResponse";
const _GRS = "GetResourceShares";
const _GRSA = "GetResourceShareAssociations";
const _GRSAR = "GetResourceShareAssociationsRequest";
const _GRSARe = "GetResourceShareAssociationsResponse";
const _GRSI = "GetResourceShareInvitations";
const _GRSIR = "GetResourceShareInvitationsRequest";
const _GRSIRe = "GetResourceShareInvitationsResponse";
const _GRSR = "GetResourceSharesRequest";
const _GRSRe = "GetResourceSharesResponse";
const _ICTE = "InvalidClientTokenException";
const _IMRE = "InvalidMaxResultsException";
const _INTE = "InvalidNextTokenException";
const _IPE = "InvalidParameterException";
const _IPEn = "InvalidPolicyException";
const _IPME = "IdempotentParameterMismatchException";
const _IRTE = "InvalidResourceTypeException";
const _ISTE = "InvalidStateTransitionException";
const _LP = "ListPermissions";
const _LPA = "ListPermissionAssociations";
const _LPAR = "ListPermissionAssociationsRequest";
const _LPARi = "ListPermissionAssociationsResponse";
const _LPIR = "ListPendingInvitationResources";
const _LPIRR = "ListPendingInvitationResourcesRequest";
const _LPIRRi = "ListPendingInvitationResourcesResponse";
const _LPR = "ListPermissionsRequest";
const _LPRi = "ListPermissionsResponse";
const _LPRis = "ListPrincipalsRequest";
const _LPRist = "ListPrincipalsResponse";
const _LPV = "ListPermissionVersions";
const _LPVR = "ListPermissionVersionsRequest";
const _LPVRi = "ListPermissionVersionsResponse";
const _LPi = "ListPrincipals";
const _LR = "ListResources";
const _LRPAW = "ListReplacePermissionAssociationsWork";
const _LRPAWR = "ListReplacePermissionAssociationsWorkRequest";
const _LRPAWRi = "ListReplacePermissionAssociationsWorkResponse";
const _LRR = "ListResourcesRequest";
const _LRRi = "ListResourcesResponse";
const _LRSP = "ListResourceSharePermissions";
const _LRSPR = "ListResourceSharePermissionsRequest";
const _LRSPRi = "ListResourceSharePermissionsResponse";
const _LRT = "ListResourceTypes";
const _LRTR = "ListResourceTypesRequest";
const _LRTRi = "ListResourceTypesResponse";
const _MAE = "MalformedArnException";
const _MPTE = "MalformedPolicyTemplateException";
const _MRPE = "MissingRequiredParameterException";
const _ONPE = "OperationNotPermittedException";
const _P = "Principal";
const _PAEE = "PermissionAlreadyExistsException";
const _PAL = "PermissionArnList";
const _PAOIL = "PrincipalArnOrIdList";
const _PL = "PolicyList";
const _PLEE = "PermissionLimitExceededException";
const _PLr = "PrincipalList";
const _PPCFP = "PromotePermissionCreatedFromPolicy";
const _PPCFPR = "PromotePermissionCreatedFromPolicyRequest";
const _PPCFPRr = "PromotePermissionCreatedFromPolicyResponse";
const _PRSCFP = "PromoteResourceShareCreatedFromPolicy";
const _PRSCFPR = "PromoteResourceShareCreatedFromPolicyRequest";
const _PRSCFPRr = "PromoteResourceShareCreatedFromPolicyResponse";
const _PVLEE = "PermissionVersionsLimitExceededException";
const _R = "Resource";
const _RAL = "ResourceArnList";
const _RANFE = "ResourceArnNotFoundException";
const _RL = "ResourceList";
const _RPA = "ReplacePermissionAssociations";
const _RPAR = "ReplacePermissionAssociationsRequest";
const _RPARe = "ReplacePermissionAssociationsResponse";
const _RPAW = "ReplacePermissionAssociationsWork";
const _RPAWIL = "ReplacePermissionAssociationsWorkIdList";
const _RPAWL = "ReplacePermissionAssociationsWorkList";
const _RRSI = "RejectResourceShareInvitation";
const _RRSIR = "RejectResourceShareInvitationRequest";
const _RRSIRe = "RejectResourceShareInvitationResponse";
const _RS = "ResourceShare";
const _RSA = "ResourceShareAssociation";
const _RSAL = "ResourceShareArnList";
const _RSALe = "ResourceShareAssociationList";
const _RSI = "ResourceShareInvitation";
const _RSIAAE = "ResourceShareInvitationAlreadyAcceptedException";
const _RSIAL = "ResourceShareInvitationArnList";
const _RSIANFE = "ResourceShareInvitationArnNotFoundException";
const _RSIARE = "ResourceShareInvitationAlreadyRejectedException";
const _RSIEE = "ResourceShareInvitationExpiredException";
const _RSIL = "ResourceShareInvitationList";
const _RSL = "ResourceShareList";
const _RSLEE = "ResourceShareLimitExceededException";
const _RSPD = "ResourceSharePermissionDetail";
const _RSPL = "ResourceSharePermissionList";
const _RSPS = "ResourceSharePermissionSummary";
const _SAOAL = "SourceArnOrAccountList";
const _SDPV = "SetDefaultPermissionVersion";
const _SDPVR = "SetDefaultPermissionVersionRequest";
const _SDPVRe = "SetDefaultPermissionVersionResponse";
const _SIE = "ServerInternalException";
const _SNART = "ServiceNameAndResourceType";
const _SNARTL = "ServiceNameAndResourceTypeList";
const _SUE = "ServiceUnavailableException";
const _T = "Tag";
const _TE = "ThrottlingException";
const _TF = "TagFilter";
const _TFa = "TagFilters";
const _TL = "TagList";
const _TLEE = "TagLimitExceededException";
const _TPVE = "TagPolicyViolationException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _UPPE = "UnmatchedPolicyPermissionException";
const _UR = "UntagResource";
const _URE = "UnknownResourceException";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _URS = "UpdateResourceShare";
const _URSR = "UpdateResourceShareRequest";
const _URSRp = "UpdateResourceShareResponse";
const _a = "arn";
const _aE = "associatedEntity";
const _aEP = "allowExternalPrincipals";
const _aQE = "awsQueryError";
const _aS = "associationStatus";
const _aT = "associationType";
const _c = "client";
const _cT = "clientToken";
const _cTr = "creationTime";
const _dV = "defaultVersion";
const _e = "error";
const _ex = "external";
const _fPA = "fromPermissionArn";
const _fPV = "fromPermissionVersion";
const _fS = "featureSet";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _i = "id";
const _iRTD = "isResourceTypeDefault";
const _iT = "invitationTimestamp";
const _it = "item";
const _k = "key";
const _lUT = "lastUpdatedTime";
const _m = "message";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _oAI = "owningAccountId";
const _p = "principals";
const _pA = "permissionArn";
const _pAe = "permissionArns";
const _pS = "permissionStatus";
const _pT = "policyTemplate";
const _pTe = "permissionType";
const _pV = "permissionVersion";
const _pe = "permission";
const _per = "permissions";
const _po = "policies";
const _pr = "principal";
const _r = "replace";
const _rA = "resourceArns";
const _rAI = "receiverAccountId";
const _rAe = "resourceArn";
const _rAec = "receiverArn";
const _rGA = "resourceGroupArn";
const _rO = "resourceOwner";
const _rPAW = "replacePermissionAssociationsWorks";
const _rPAWe = "replacePermissionAssociationsWork";
const _rRS = "resourceRegionScope";
const _rS = "resourceShare";
const _rSA = "resourceShareArn";
const _rSAe = "resourceShareAssociations";
const _rSAes = "resourceShareArns";
const _rSI = "resourceShareInvitation";
const _rSIA = "resourceShareInvitationArn";
const _rSIAe = "resourceShareInvitationArns";
const _rSIe = "resourceShareInvitations";
const _rSN = "resourceShareName";
const _rSS = "resourceShareStatus";
const _rSe = "resourceShares";
const _rT = "resourceType";
const _rTe = "resourceTypes";
const _rV = "returnValue";
const _re = "return";
const _res = "resources";
const _s = "status";
const _sAI = "senderAccountId";
const _sM = "statusMessage";
const _sN = "serviceName";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.ram";
const _so = "sources";
const _t = "tags";
const _tF = "tagFilters";
const _tK = "tagKey";
const _tKa = "tagKeys";
const _tPA = "toPermissionArn";
const _tPV = "toPermissionVersion";
const _tV = "tagValues";
const _ty = "type";
const _v = "version";
const _va = "value";
const _wI = "workIds";
const _xN = "xmlName";
const n0 = "com.amazonaws.ram";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  IdempotentParameterMismatchException as __IdempotentParameterMismatchException,
  InvalidClientTokenException as __InvalidClientTokenException,
  InvalidMaxResultsException as __InvalidMaxResultsException,
  InvalidNextTokenException as __InvalidNextTokenException,
  InvalidParameterException as __InvalidParameterException,
  InvalidPolicyException as __InvalidPolicyException,
  InvalidResourceTypeException as __InvalidResourceTypeException,
  InvalidStateTransitionException as __InvalidStateTransitionException,
  MalformedArnException as __MalformedArnException,
  MalformedPolicyTemplateException as __MalformedPolicyTemplateException,
  MissingRequiredParameterException as __MissingRequiredParameterException,
  OperationNotPermittedException as __OperationNotPermittedException,
  PermissionAlreadyExistsException as __PermissionAlreadyExistsException,
  PermissionLimitExceededException as __PermissionLimitExceededException,
  PermissionVersionsLimitExceededException as __PermissionVersionsLimitExceededException,
  ResourceArnNotFoundException as __ResourceArnNotFoundException,
  ResourceShareInvitationAlreadyAcceptedException as __ResourceShareInvitationAlreadyAcceptedException,
  ResourceShareInvitationAlreadyRejectedException as __ResourceShareInvitationAlreadyRejectedException,
  ResourceShareInvitationArnNotFoundException as __ResourceShareInvitationArnNotFoundException,
  ResourceShareInvitationExpiredException as __ResourceShareInvitationExpiredException,
  ResourceShareLimitExceededException as __ResourceShareLimitExceededException,
  ServerInternalException as __ServerInternalException,
  ServiceUnavailableException as __ServiceUnavailableException,
  TagLimitExceededException as __TagLimitExceededException,
  TagPolicyViolationException as __TagPolicyViolationException,
  ThrottlingException as __ThrottlingException,
  UnknownResourceException as __UnknownResourceException,
  UnmatchedPolicyPermissionException as __UnmatchedPolicyPermissionException,
} from "../models/index";
import { RAMServiceException as __RAMServiceException } from "../models/RAMServiceException";

/* eslint no-var: 0 */

export var AcceptResourceShareInvitationRequest: StaticStructureSchema = [3, n0, _ARSIR, 0, [_rSIA, _cT], [0, 0]];
export var AcceptResourceShareInvitationResponse: StaticStructureSchema = [
  3,
  n0,
  _ARSIRc,
  0,
  [_rSI, _cT],
  [[() => ResourceShareInvitation, 0], 0],
];
export var AssociatedPermission: StaticStructureSchema = [
  3,
  n0,
  _AP,
  0,
  [_a, _pV, _dV, _rT, _s, _fS, _lUT, _rSA],
  [0, 0, 2, 0, 0, 0, 4, 0],
];
export var AssociateResourceSharePermissionRequest: StaticStructureSchema = [
  3,
  n0,
  _ARSPR,
  0,
  [_rSA, _pA, _r, _cT, _pV],
  [0, 0, 2, 0, 1],
];
export var AssociateResourceSharePermissionResponse: StaticStructureSchema = [3, n0, _ARSPRs, 0, [_rV, _cT], [2, 0]];
export var AssociateResourceShareRequest: StaticStructureSchema = [
  3,
  n0,
  _ARSR,
  0,
  [_rSA, _rA, _p, _cT, _so],
  [0, [() => ResourceArnList, 0], [() => PrincipalArnOrIdList, 0], 0, [() => SourceArnOrAccountList, 0]],
];
export var AssociateResourceShareResponse: StaticStructureSchema = [
  3,
  n0,
  _ARSRs,
  0,
  [_rSAe, _cT],
  [[() => ResourceShareAssociationList, 0], 0],
];
export var CreatePermissionRequest: StaticStructureSchema = [
  3,
  n0,
  _CPR,
  0,
  [_n, _rT, _pT, _cT, _t],
  [0, 0, 0, 0, () => TagList],
];
export var CreatePermissionResponse: StaticStructureSchema = [
  3,
  n0,
  _CPRr,
  0,
  [_pe, _cT],
  [() => ResourceSharePermissionSummary, 0],
];
export var CreatePermissionVersionRequest: StaticStructureSchema = [3, n0, _CPVR, 0, [_pA, _pT, _cT], [0, 0, 0]];
export var CreatePermissionVersionResponse: StaticStructureSchema = [
  3,
  n0,
  _CPVRr,
  0,
  [_pe, _cT],
  [() => ResourceSharePermissionDetail, 0],
];
export var CreateResourceShareRequest: StaticStructureSchema = [
  3,
  n0,
  _CRSR,
  0,
  [_n, _rA, _p, _t, _aEP, _cT, _pAe, _so],
  [
    0,
    [() => ResourceArnList, 0],
    [() => PrincipalArnOrIdList, 0],
    () => TagList,
    2,
    0,
    [() => PermissionArnList, 0],
    [() => SourceArnOrAccountList, 0],
  ],
];
export var CreateResourceShareResponse: StaticStructureSchema = [
  3,
  n0,
  _CRSRr,
  0,
  [_rS, _cT],
  [() => ResourceShare, 0],
];
export var DeletePermissionRequest: StaticStructureSchema = [
  3,
  n0,
  _DPR,
  0,
  [_pA, _cT],
  [
    [
      0,
      {
        [_hQ]: _pA,
      },
    ],
    [
      0,
      {
        [_hQ]: _cT,
      },
    ],
  ],
];
export var DeletePermissionResponse: StaticStructureSchema = [
  3,
  n0,
  _DPRe,
  0,
  [_rV, _cT, _pS],
  [
    [
      2,
      {
        [_xN]: _re,
      },
    ],
    0,
    0,
  ],
];
export var DeletePermissionVersionRequest: StaticStructureSchema = [
  3,
  n0,
  _DPVR,
  0,
  [_pA, _pV, _cT],
  [
    [
      0,
      {
        [_hQ]: _pA,
      },
    ],
    [
      1,
      {
        [_hQ]: _pV,
      },
    ],
    [
      0,
      {
        [_hQ]: _cT,
      },
    ],
  ],
];
export var DeletePermissionVersionResponse: StaticStructureSchema = [
  3,
  n0,
  _DPVRe,
  0,
  [_rV, _cT, _pS],
  [
    [
      2,
      {
        [_xN]: _re,
      },
    ],
    0,
    0,
  ],
];
export var DeleteResourceShareRequest: StaticStructureSchema = [
  3,
  n0,
  _DRSR,
  0,
  [_rSA, _cT],
  [
    [
      0,
      {
        [_hQ]: _rSA,
      },
    ],
    [
      0,
      {
        [_hQ]: _cT,
      },
    ],
  ],
];
export var DeleteResourceShareResponse: StaticStructureSchema = [
  3,
  n0,
  _DRSRe,
  0,
  [_rV, _cT],
  [
    [
      2,
      {
        [_xN]: _re,
      },
    ],
    0,
  ],
];
export var DisassociateResourceSharePermissionRequest: StaticStructureSchema = [
  3,
  n0,
  _DRSPR,
  0,
  [_rSA, _pA, _cT],
  [0, 0, 0],
];
export var DisassociateResourceSharePermissionResponse: StaticStructureSchema = [3, n0, _DRSPRi, 0, [_rV, _cT], [2, 0]];
export var DisassociateResourceShareRequest: StaticStructureSchema = [
  3,
  n0,
  _DRSRi,
  0,
  [_rSA, _rA, _p, _cT, _so],
  [0, [() => ResourceArnList, 0], [() => PrincipalArnOrIdList, 0], 0, [() => SourceArnOrAccountList, 0]],
];
export var DisassociateResourceShareResponse: StaticStructureSchema = [
  3,
  n0,
  _DRSRis,
  0,
  [_rSAe, _cT],
  [[() => ResourceShareAssociationList, 0], 0],
];
export var EnableSharingWithAwsOrganizationRequest: StaticStructureSchema = [3, n0, _ESWAOR, 0, [], []];
export var EnableSharingWithAwsOrganizationResponse: StaticStructureSchema = [
  3,
  n0,
  _ESWAORn,
  0,
  [_rV],
  [
    [
      2,
      {
        [_xN]: _re,
      },
    ],
  ],
];
export var GetPermissionRequest: StaticStructureSchema = [3, n0, _GPR, 0, [_pA, _pV], [0, 1]];
export var GetPermissionResponse: StaticStructureSchema = [
  3,
  n0,
  _GPRe,
  0,
  [_pe],
  [() => ResourceSharePermissionDetail],
];
export var GetResourcePoliciesRequest: StaticStructureSchema = [
  3,
  n0,
  _GRPR,
  0,
  [_rA, _pr, _nT, _mR],
  [[() => ResourceArnList, 0], 0, 0, 1],
];
export var GetResourcePoliciesResponse: StaticStructureSchema = [
  3,
  n0,
  _GRPRe,
  0,
  [_po, _nT],
  [[() => PolicyList, 0], 0],
];
export var GetResourceShareAssociationsRequest: StaticStructureSchema = [
  3,
  n0,
  _GRSAR,
  0,
  [_aT, _rSAes, _rAe, _pr, _aS, _nT, _mR],
  [0, [() => ResourceShareArnList, 0], 0, 0, 0, 0, 1],
];
export var GetResourceShareAssociationsResponse: StaticStructureSchema = [
  3,
  n0,
  _GRSARe,
  0,
  [_rSAe, _nT],
  [[() => ResourceShareAssociationList, 0], 0],
];
export var GetResourceShareInvitationsRequest: StaticStructureSchema = [
  3,
  n0,
  _GRSIR,
  0,
  [_rSIAe, _rSAes, _nT, _mR],
  [[() => ResourceShareInvitationArnList, 0], [() => ResourceShareArnList, 0], 0, 1],
];
export var GetResourceShareInvitationsResponse: StaticStructureSchema = [
  3,
  n0,
  _GRSIRe,
  0,
  [_rSIe, _nT],
  [[() => ResourceShareInvitationList, 0], 0],
];
export var GetResourceSharesRequest: StaticStructureSchema = [
  3,
  n0,
  _GRSR,
  0,
  [_rSAes, _rSS, _rO, _n, _tF, _nT, _mR, _pA, _pV],
  [[() => ResourceShareArnList, 0], 0, 0, 0, () => TagFilters, 0, 1, 0, 1],
];
export var GetResourceSharesResponse: StaticStructureSchema = [
  3,
  n0,
  _GRSRe,
  0,
  [_rSe, _nT],
  [[() => ResourceShareList, 0], 0],
];
export var IdempotentParameterMismatchException: StaticErrorSchema = [
  -3,
  n0,
  _IPME,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`IdempotentParameterMismatch`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(IdempotentParameterMismatchException, __IdempotentParameterMismatchException);

export var InvalidClientTokenException: StaticErrorSchema = [
  -3,
  n0,
  _ICTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidClientToken`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidClientTokenException, __InvalidClientTokenException);

export var InvalidMaxResultsException: StaticErrorSchema = [
  -3,
  n0,
  _IMRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidMaxResults`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidMaxResultsException, __InvalidMaxResultsException);

export var InvalidNextTokenException: StaticErrorSchema = [
  -3,
  n0,
  _INTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidNextToken`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidNextTokenException, __InvalidNextTokenException);

export var InvalidParameterException: StaticErrorSchema = [
  -3,
  n0,
  _IPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidParameter`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidParameterException, __InvalidParameterException);

export var InvalidPolicyException: StaticErrorSchema = [
  -3,
  n0,
  _IPEn,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidPolicy`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidPolicyException, __InvalidPolicyException);

export var InvalidResourceTypeException: StaticErrorSchema = [
  -3,
  n0,
  _IRTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidResourceType.Unknown`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidResourceTypeException, __InvalidResourceTypeException);

export var InvalidStateTransitionException: StaticErrorSchema = [
  -3,
  n0,
  _ISTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidStateTransitionException.Unknown`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidStateTransitionException, __InvalidStateTransitionException);

export var ListPendingInvitationResourcesRequest: StaticStructureSchema = [
  3,
  n0,
  _LPIRR,
  0,
  [_rSIA, _nT, _mR, _rRS],
  [0, 0, 1, 0],
];
export var ListPendingInvitationResourcesResponse: StaticStructureSchema = [
  3,
  n0,
  _LPIRRi,
  0,
  [_res, _nT],
  [[() => ResourceList, 0], 0],
];
export var ListPermissionAssociationsRequest: StaticStructureSchema = [
  3,
  n0,
  _LPAR,
  0,
  [_pA, _pV, _aS, _rT, _fS, _dV, _nT, _mR],
  [0, 1, 0, 0, 0, 2, 0, 1],
];
export var ListPermissionAssociationsResponse: StaticStructureSchema = [
  3,
  n0,
  _LPARi,
  0,
  [_per, _nT],
  [[() => AssociatedPermissionList, 0], 0],
];
export var ListPermissionsRequest: StaticStructureSchema = [3, n0, _LPR, 0, [_rT, _nT, _mR, _pTe], [0, 0, 1, 0]];
export var ListPermissionsResponse: StaticStructureSchema = [
  3,
  n0,
  _LPRi,
  0,
  [_per, _nT],
  [[() => ResourceSharePermissionList, 0], 0],
];
export var ListPermissionVersionsRequest: StaticStructureSchema = [3, n0, _LPVR, 0, [_pA, _nT, _mR], [0, 0, 1]];
export var ListPermissionVersionsResponse: StaticStructureSchema = [
  3,
  n0,
  _LPVRi,
  0,
  [_per, _nT],
  [[() => ResourceSharePermissionList, 0], 0],
];
export var ListPrincipalsRequest: StaticStructureSchema = [
  3,
  n0,
  _LPRis,
  0,
  [_rO, _rAe, _p, _rT, _rSAes, _nT, _mR],
  [0, 0, [() => PrincipalArnOrIdList, 0], 0, [() => ResourceShareArnList, 0], 0, 1],
];
export var ListPrincipalsResponse: StaticStructureSchema = [
  3,
  n0,
  _LPRist,
  0,
  [_p, _nT],
  [[() => PrincipalList, 0], 0],
];
export var ListReplacePermissionAssociationsWorkRequest: StaticStructureSchema = [
  3,
  n0,
  _LRPAWR,
  0,
  [_wI, _s, _nT, _mR],
  [[() => ReplacePermissionAssociationsWorkIdList, 0], 0, 0, 1],
];
export var ListReplacePermissionAssociationsWorkResponse: StaticStructureSchema = [
  3,
  n0,
  _LRPAWRi,
  0,
  [_rPAW, _nT],
  [[() => ReplacePermissionAssociationsWorkList, 0], 0],
];
export var ListResourceSharePermissionsRequest: StaticStructureSchema = [3, n0, _LRSPR, 0, [_rSA, _nT, _mR], [0, 0, 1]];
export var ListResourceSharePermissionsResponse: StaticStructureSchema = [
  3,
  n0,
  _LRSPRi,
  0,
  [_per, _nT],
  [[() => ResourceSharePermissionList, 0], 0],
];
export var ListResourcesRequest: StaticStructureSchema = [
  3,
  n0,
  _LRR,
  0,
  [_rO, _pr, _rT, _rA, _rSAes, _nT, _mR, _rRS],
  [0, 0, 0, [() => ResourceArnList, 0], [() => ResourceShareArnList, 0], 0, 1, 0],
];
export var ListResourcesResponse: StaticStructureSchema = [3, n0, _LRRi, 0, [_res, _nT], [[() => ResourceList, 0], 0]];
export var ListResourceTypesRequest: StaticStructureSchema = [3, n0, _LRTR, 0, [_nT, _mR, _rRS], [0, 1, 0]];
export var ListResourceTypesResponse: StaticStructureSchema = [
  3,
  n0,
  _LRTRi,
  0,
  [_rTe, _nT],
  [[() => ServiceNameAndResourceTypeList, 0], 0],
];
export var MalformedArnException: StaticErrorSchema = [
  -3,
  n0,
  _MAE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidArn.Malformed`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(MalformedArnException, __MalformedArnException);

export var MalformedPolicyTemplateException: StaticErrorSchema = [
  -3,
  n0,
  _MPTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`MalformedPolicyTemplateException`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(MalformedPolicyTemplateException, __MalformedPolicyTemplateException);

export var MissingRequiredParameterException: StaticErrorSchema = [
  -3,
  n0,
  _MRPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`MissingRequiredParameter`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(MissingRequiredParameterException, __MissingRequiredParameterException);

export var OperationNotPermittedException: StaticErrorSchema = [
  -3,
  n0,
  _ONPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`OperationNotPermitted`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(OperationNotPermittedException, __OperationNotPermittedException);

export var PermissionAlreadyExistsException: StaticErrorSchema = [
  -3,
  n0,
  _PAEE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`PermissionAlreadyExistsException`, 409],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(PermissionAlreadyExistsException, __PermissionAlreadyExistsException);

export var PermissionLimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _PLEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`PermissionLimitExceededException`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(PermissionLimitExceededException, __PermissionLimitExceededException);

export var PermissionVersionsLimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _PVLEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`PermissionVersionsLimitExceededException`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(
  PermissionVersionsLimitExceededException,
  __PermissionVersionsLimitExceededException
);

export var Principal: StaticStructureSchema = [3, n0, _P, 0, [_i, _rSA, _cTr, _lUT, _ex], [0, 0, 4, 4, 2]];
export var PromotePermissionCreatedFromPolicyRequest: StaticStructureSchema = [
  3,
  n0,
  _PPCFPR,
  0,
  [_pA, _n, _cT],
  [0, 0, 0],
];
export var PromotePermissionCreatedFromPolicyResponse: StaticStructureSchema = [
  3,
  n0,
  _PPCFPRr,
  0,
  [_pe, _cT],
  [() => ResourceSharePermissionSummary, 0],
];
export var PromoteResourceShareCreatedFromPolicyRequest: StaticStructureSchema = [
  3,
  n0,
  _PRSCFPR,
  0,
  [_rSA],
  [
    [
      0,
      {
        [_hQ]: _rSA,
      },
    ],
  ],
];
export var PromoteResourceShareCreatedFromPolicyResponse: StaticStructureSchema = [
  3,
  n0,
  _PRSCFPRr,
  0,
  [_rV],
  [
    [
      2,
      {
        [_xN]: _re,
      },
    ],
  ],
];
export var RejectResourceShareInvitationRequest: StaticStructureSchema = [3, n0, _RRSIR, 0, [_rSIA, _cT], [0, 0]];
export var RejectResourceShareInvitationResponse: StaticStructureSchema = [
  3,
  n0,
  _RRSIRe,
  0,
  [_rSI, _cT],
  [[() => ResourceShareInvitation, 0], 0],
];
export var ReplacePermissionAssociationsRequest: StaticStructureSchema = [
  3,
  n0,
  _RPAR,
  0,
  [_fPA, _fPV, _tPA, _cT],
  [0, 1, 0, 0],
];
export var ReplacePermissionAssociationsResponse: StaticStructureSchema = [
  3,
  n0,
  _RPARe,
  0,
  [_rPAWe, _cT],
  [() => ReplacePermissionAssociationsWork, 0],
];
export var ReplacePermissionAssociationsWork: StaticStructureSchema = [
  3,
  n0,
  _RPAW,
  0,
  [_i, _fPA, _fPV, _tPA, _tPV, _s, _sM, _cTr, _lUT],
  [0, 0, 0, 0, 0, 0, 0, 4, 4],
];
export var Resource: StaticStructureSchema = [
  3,
  n0,
  _R,
  0,
  [_a, _ty, _rSA, _rGA, _s, _sM, _cTr, _lUT, _rRS],
  [0, 0, 0, 0, 0, 0, 4, 4, 0],
];
export var ResourceArnNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RANFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidResourceArn.NotFound`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceArnNotFoundException, __ResourceArnNotFoundException);

export var ResourceShare: StaticStructureSchema = [
  3,
  n0,
  _RS,
  0,
  [_rSA, _n, _oAI, _aEP, _s, _sM, _t, _cTr, _lUT, _fS],
  [0, 0, 0, 2, 0, 0, () => TagList, 4, 4, 0],
];
export var ResourceShareAssociation: StaticStructureSchema = [
  3,
  n0,
  _RSA,
  0,
  [_rSA, _rSN, _aE, _aT, _s, _sM, _cTr, _lUT, _ex],
  [0, 0, 0, 0, 0, 0, 4, 4, 2],
];
export var ResourceShareInvitation: StaticStructureSchema = [
  3,
  n0,
  _RSI,
  0,
  [_rSIA, _rSN, _rSA, _sAI, _rAI, _iT, _s, _rSAe, _rAec],
  [0, 0, 0, 0, 0, 4, 0, [() => ResourceShareAssociationList, 0], 0],
];
export var ResourceShareInvitationAlreadyAcceptedException: StaticErrorSchema = [
  -3,
  n0,
  _RSIAAE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidResourceShareInvitationArn.AlreadyAccepted`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(
  ResourceShareInvitationAlreadyAcceptedException,
  __ResourceShareInvitationAlreadyAcceptedException
);

export var ResourceShareInvitationAlreadyRejectedException: StaticErrorSchema = [
  -3,
  n0,
  _RSIARE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidResourceShareInvitationArn.AlreadyRejected`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(
  ResourceShareInvitationAlreadyRejectedException,
  __ResourceShareInvitationAlreadyRejectedException
);

export var ResourceShareInvitationArnNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RSIANFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidResourceShareInvitationArn.NotFound`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(
  ResourceShareInvitationArnNotFoundException,
  __ResourceShareInvitationArnNotFoundException
);

export var ResourceShareInvitationExpiredException: StaticErrorSchema = [
  -3,
  n0,
  _RSIEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidResourceShareInvitationArn.Expired`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceShareInvitationExpiredException, __ResourceShareInvitationExpiredException);

export var ResourceShareLimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _RSLEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ResourceShareLimitExceeded`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceShareLimitExceededException, __ResourceShareLimitExceededException);

export var ResourceSharePermissionDetail: StaticStructureSchema = [
  3,
  n0,
  _RSPD,
  0,
  [_a, _v, _dV, _n, _rT, _pe, _cTr, _lUT, _iRTD, _pTe, _fS, _s, _t],
  [0, 0, 2, 0, 0, 0, 4, 4, 2, 0, 0, 0, () => TagList],
];
export var ResourceSharePermissionSummary: StaticStructureSchema = [
  3,
  n0,
  _RSPS,
  0,
  [_a, _v, _dV, _n, _rT, _s, _cTr, _lUT, _iRTD, _pTe, _fS, _t],
  [0, 0, 2, 0, 0, 0, 4, 4, 2, 0, 0, () => TagList],
];
export var ServerInternalException: StaticErrorSchema = [
  -3,
  n0,
  _SIE,
  {
    [_e]: _se,
    [_hE]: 500,
    [_aQE]: [`InternalError`, 500],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ServerInternalException, __ServerInternalException);

export var ServiceNameAndResourceType: StaticStructureSchema = [3, n0, _SNART, 0, [_rT, _sN, _rRS], [0, 0, 0]];
export var ServiceUnavailableException: StaticErrorSchema = [
  -3,
  n0,
  _SUE,
  {
    [_e]: _se,
    [_hE]: 503,
    [_aQE]: [`Unavailable`, 503],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceUnavailableException, __ServiceUnavailableException);

export var SetDefaultPermissionVersionRequest: StaticStructureSchema = [3, n0, _SDPVR, 0, [_pA, _pV, _cT], [0, 1, 0]];
export var SetDefaultPermissionVersionResponse: StaticStructureSchema = [
  3,
  n0,
  _SDPVRe,
  0,
  [_rV, _cT],
  [
    [
      2,
      {
        [_xN]: _re,
      },
    ],
    0,
  ],
];
export var Tag: StaticStructureSchema = [3, n0, _T, 0, [_k, _va], [0, 0]];
export var TagFilter: StaticStructureSchema = [3, n0, _TF, 0, [_tK, _tV], [0, 64 | 0]];
export var TagLimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _TLEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TagLimitExceeded`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(TagLimitExceededException, __TagLimitExceededException);

export var TagPolicyViolationException: StaticErrorSchema = [
  -3,
  n0,
  _TPVE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TagPolicyViolation`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(TagPolicyViolationException, __TagPolicyViolationException);

export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_rSA, _t, _rAe], [0, () => TagList, 0]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`ThrottlingException`, 429],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UnknownResourceException: StaticErrorSchema = [
  -3,
  n0,
  _URE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidResourceShareArn.NotFound`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(UnknownResourceException, __UnknownResourceException);

export var UnmatchedPolicyPermissionException: StaticErrorSchema = [
  -3,
  n0,
  _UPPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`UnmatchedPolicyPermissionException`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(UnmatchedPolicyPermissionException, __UnmatchedPolicyPermissionException);

export var UntagResourceRequest: StaticStructureSchema = [3, n0, _URR, 0, [_rSA, _tKa, _rAe], [0, 64 | 0, 0]];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateResourceShareRequest: StaticStructureSchema = [3, n0, _URSR, 0, [_rSA, _n, _aEP, _cT], [0, 0, 2, 0]];
export var UpdateResourceShareResponse: StaticStructureSchema = [
  3,
  n0,
  _URSRp,
  0,
  [_rS, _cT],
  [() => ResourceShare, 0],
];
export var __Unit = "unit" as const;

export var RAMServiceException: StaticErrorSchema = [-3, _sm, "RAMServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(RAMServiceException, __RAMServiceException);

export var AssociatedPermissionList: StaticListSchema = [
  1,
  n0,
  _APL,
  0,
  [
    () => AssociatedPermission,
    {
      [_xN]: _it,
    },
  ],
];
export var PermissionArnList: StaticListSchema = [
  1,
  n0,
  _PAL,
  0,
  [
    0,
    {
      [_xN]: _it,
    },
  ],
];
export var PolicyList: StaticListSchema = [
  1,
  n0,
  _PL,
  0,
  [
    0,
    {
      [_xN]: _it,
    },
  ],
];
export var PrincipalArnOrIdList: StaticListSchema = [
  1,
  n0,
  _PAOIL,
  0,
  [
    0,
    {
      [_xN]: _it,
    },
  ],
];
export var PrincipalList: StaticListSchema = [
  1,
  n0,
  _PLr,
  0,
  [
    () => Principal,
    {
      [_xN]: _it,
    },
  ],
];
export var ReplacePermissionAssociationsWorkIdList: StaticListSchema = [
  1,
  n0,
  _RPAWIL,
  0,
  [
    0,
    {
      [_xN]: _it,
    },
  ],
];
export var ReplacePermissionAssociationsWorkList: StaticListSchema = [
  1,
  n0,
  _RPAWL,
  0,
  [
    () => ReplacePermissionAssociationsWork,
    {
      [_xN]: _it,
    },
  ],
];
export var ResourceArnList: StaticListSchema = [
  1,
  n0,
  _RAL,
  0,
  [
    0,
    {
      [_xN]: _it,
    },
  ],
];
export var ResourceList: StaticListSchema = [
  1,
  n0,
  _RL,
  0,
  [
    () => Resource,
    {
      [_xN]: _it,
    },
  ],
];
export var ResourceShareArnList: StaticListSchema = [
  1,
  n0,
  _RSAL,
  0,
  [
    0,
    {
      [_xN]: _it,
    },
  ],
];
export var ResourceShareAssociationList: StaticListSchema = [
  1,
  n0,
  _RSALe,
  0,
  [
    () => ResourceShareAssociation,
    {
      [_xN]: _it,
    },
  ],
];
export var ResourceShareInvitationArnList: StaticListSchema = [
  1,
  n0,
  _RSIAL,
  0,
  [
    0,
    {
      [_xN]: _it,
    },
  ],
];
export var ResourceShareInvitationList: StaticListSchema = [
  1,
  n0,
  _RSIL,
  0,
  [
    () => ResourceShareInvitation,
    {
      [_xN]: _it,
    },
  ],
];
export var ResourceShareList: StaticListSchema = [
  1,
  n0,
  _RSL,
  0,
  [
    () => ResourceShare,
    {
      [_xN]: _it,
    },
  ],
];
export var ResourceSharePermissionList: StaticListSchema = [
  1,
  n0,
  _RSPL,
  0,
  [
    () => ResourceSharePermissionSummary,
    {
      [_xN]: _it,
    },
  ],
];
export var ServiceNameAndResourceTypeList: StaticListSchema = [
  1,
  n0,
  _SNARTL,
  0,
  [
    () => ServiceNameAndResourceType,
    {
      [_xN]: _it,
    },
  ],
];
export var SourceArnOrAccountList: StaticListSchema = [
  1,
  n0,
  _SAOAL,
  0,
  [
    0,
    {
      [_xN]: _it,
    },
  ],
];
export var TagFilters: StaticListSchema = [1, n0, _TFa, 0, () => TagFilter];
export var TagKeyList = 64 | 0;

export var TagList: StaticListSchema = [1, n0, _TL, 0, () => Tag];
export var TagValueList = 64 | 0;

export var AcceptResourceShareInvitation: StaticOperationSchema = [
  9,
  n0,
  _ARSI,
  {
    [_h]: ["POST", "/acceptresourceshareinvitation", 200],
  },
  () => AcceptResourceShareInvitationRequest,
  () => AcceptResourceShareInvitationResponse,
];
export var AssociateResourceShare: StaticOperationSchema = [
  9,
  n0,
  _ARS,
  {
    [_h]: ["POST", "/associateresourceshare", 200],
  },
  () => AssociateResourceShareRequest,
  () => AssociateResourceShareResponse,
];
export var AssociateResourceSharePermission: StaticOperationSchema = [
  9,
  n0,
  _ARSP,
  {
    [_h]: ["POST", "/associateresourcesharepermission", 200],
  },
  () => AssociateResourceSharePermissionRequest,
  () => AssociateResourceSharePermissionResponse,
];
export var CreatePermission: StaticOperationSchema = [
  9,
  n0,
  _CP,
  {
    [_h]: ["POST", "/createpermission", 200],
  },
  () => CreatePermissionRequest,
  () => CreatePermissionResponse,
];
export var CreatePermissionVersion: StaticOperationSchema = [
  9,
  n0,
  _CPV,
  {
    [_h]: ["POST", "/createpermissionversion", 200],
  },
  () => CreatePermissionVersionRequest,
  () => CreatePermissionVersionResponse,
];
export var CreateResourceShare: StaticOperationSchema = [
  9,
  n0,
  _CRS,
  {
    [_h]: ["POST", "/createresourceshare", 200],
  },
  () => CreateResourceShareRequest,
  () => CreateResourceShareResponse,
];
export var DeletePermission: StaticOperationSchema = [
  9,
  n0,
  _DP,
  {
    [_h]: ["DELETE", "/deletepermission", 200],
  },
  () => DeletePermissionRequest,
  () => DeletePermissionResponse,
];
export var DeletePermissionVersion: StaticOperationSchema = [
  9,
  n0,
  _DPV,
  {
    [_h]: ["DELETE", "/deletepermissionversion", 200],
  },
  () => DeletePermissionVersionRequest,
  () => DeletePermissionVersionResponse,
];
export var DeleteResourceShare: StaticOperationSchema = [
  9,
  n0,
  _DRS,
  {
    [_h]: ["DELETE", "/deleteresourceshare", 200],
  },
  () => DeleteResourceShareRequest,
  () => DeleteResourceShareResponse,
];
export var DisassociateResourceShare: StaticOperationSchema = [
  9,
  n0,
  _DRSi,
  {
    [_h]: ["POST", "/disassociateresourceshare", 200],
  },
  () => DisassociateResourceShareRequest,
  () => DisassociateResourceShareResponse,
];
export var DisassociateResourceSharePermission: StaticOperationSchema = [
  9,
  n0,
  _DRSP,
  {
    [_h]: ["POST", "/disassociateresourcesharepermission", 200],
  },
  () => DisassociateResourceSharePermissionRequest,
  () => DisassociateResourceSharePermissionResponse,
];
export var EnableSharingWithAwsOrganization: StaticOperationSchema = [
  9,
  n0,
  _ESWAO,
  {
    [_h]: ["POST", "/enablesharingwithawsorganization", 200],
  },
  () => EnableSharingWithAwsOrganizationRequest,
  () => EnableSharingWithAwsOrganizationResponse,
];
export var GetPermission: StaticOperationSchema = [
  9,
  n0,
  _GP,
  {
    [_h]: ["POST", "/getpermission", 200],
  },
  () => GetPermissionRequest,
  () => GetPermissionResponse,
];
export var GetResourcePolicies: StaticOperationSchema = [
  9,
  n0,
  _GRP,
  {
    [_h]: ["POST", "/getresourcepolicies", 200],
  },
  () => GetResourcePoliciesRequest,
  () => GetResourcePoliciesResponse,
];
export var GetResourceShareAssociations: StaticOperationSchema = [
  9,
  n0,
  _GRSA,
  {
    [_h]: ["POST", "/getresourceshareassociations", 200],
  },
  () => GetResourceShareAssociationsRequest,
  () => GetResourceShareAssociationsResponse,
];
export var GetResourceShareInvitations: StaticOperationSchema = [
  9,
  n0,
  _GRSI,
  {
    [_h]: ["POST", "/getresourceshareinvitations", 200],
  },
  () => GetResourceShareInvitationsRequest,
  () => GetResourceShareInvitationsResponse,
];
export var GetResourceShares: StaticOperationSchema = [
  9,
  n0,
  _GRS,
  {
    [_h]: ["POST", "/getresourceshares", 200],
  },
  () => GetResourceSharesRequest,
  () => GetResourceSharesResponse,
];
export var ListPendingInvitationResources: StaticOperationSchema = [
  9,
  n0,
  _LPIR,
  {
    [_h]: ["POST", "/listpendinginvitationresources", 200],
  },
  () => ListPendingInvitationResourcesRequest,
  () => ListPendingInvitationResourcesResponse,
];
export var ListPermissionAssociations: StaticOperationSchema = [
  9,
  n0,
  _LPA,
  {
    [_h]: ["POST", "/listpermissionassociations", 200],
  },
  () => ListPermissionAssociationsRequest,
  () => ListPermissionAssociationsResponse,
];
export var ListPermissions: StaticOperationSchema = [
  9,
  n0,
  _LP,
  {
    [_h]: ["POST", "/listpermissions", 200],
  },
  () => ListPermissionsRequest,
  () => ListPermissionsResponse,
];
export var ListPermissionVersions: StaticOperationSchema = [
  9,
  n0,
  _LPV,
  {
    [_h]: ["POST", "/listpermissionversions", 200],
  },
  () => ListPermissionVersionsRequest,
  () => ListPermissionVersionsResponse,
];
export var ListPrincipals: StaticOperationSchema = [
  9,
  n0,
  _LPi,
  {
    [_h]: ["POST", "/listprincipals", 200],
  },
  () => ListPrincipalsRequest,
  () => ListPrincipalsResponse,
];
export var ListReplacePermissionAssociationsWork: StaticOperationSchema = [
  9,
  n0,
  _LRPAW,
  {
    [_h]: ["POST", "/listreplacepermissionassociationswork", 200],
  },
  () => ListReplacePermissionAssociationsWorkRequest,
  () => ListReplacePermissionAssociationsWorkResponse,
];
export var ListResources: StaticOperationSchema = [
  9,
  n0,
  _LR,
  {
    [_h]: ["POST", "/listresources", 200],
  },
  () => ListResourcesRequest,
  () => ListResourcesResponse,
];
export var ListResourceSharePermissions: StaticOperationSchema = [
  9,
  n0,
  _LRSP,
  {
    [_h]: ["POST", "/listresourcesharepermissions", 200],
  },
  () => ListResourceSharePermissionsRequest,
  () => ListResourceSharePermissionsResponse,
];
export var ListResourceTypes: StaticOperationSchema = [
  9,
  n0,
  _LRT,
  {
    [_h]: ["POST", "/listresourcetypes", 200],
  },
  () => ListResourceTypesRequest,
  () => ListResourceTypesResponse,
];
export var PromotePermissionCreatedFromPolicy: StaticOperationSchema = [
  9,
  n0,
  _PPCFP,
  {
    [_h]: ["POST", "/promotepermissioncreatedfrompolicy", 200],
  },
  () => PromotePermissionCreatedFromPolicyRequest,
  () => PromotePermissionCreatedFromPolicyResponse,
];
export var PromoteResourceShareCreatedFromPolicy: StaticOperationSchema = [
  9,
  n0,
  _PRSCFP,
  {
    [_h]: ["POST", "/promoteresourcesharecreatedfrompolicy", 200],
  },
  () => PromoteResourceShareCreatedFromPolicyRequest,
  () => PromoteResourceShareCreatedFromPolicyResponse,
];
export var RejectResourceShareInvitation: StaticOperationSchema = [
  9,
  n0,
  _RRSI,
  {
    [_h]: ["POST", "/rejectresourceshareinvitation", 200],
  },
  () => RejectResourceShareInvitationRequest,
  () => RejectResourceShareInvitationResponse,
];
export var ReplacePermissionAssociations: StaticOperationSchema = [
  9,
  n0,
  _RPA,
  {
    [_h]: ["POST", "/replacepermissionassociations", 200],
  },
  () => ReplacePermissionAssociationsRequest,
  () => ReplacePermissionAssociationsResponse,
];
export var SetDefaultPermissionVersion: StaticOperationSchema = [
  9,
  n0,
  _SDPV,
  {
    [_h]: ["POST", "/setdefaultpermissionversion", 200],
  },
  () => SetDefaultPermissionVersionRequest,
  () => SetDefaultPermissionVersionResponse,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  {
    [_h]: ["POST", "/tagresource", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  {
    [_h]: ["POST", "/untagresource", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
export var UpdateResourceShare: StaticOperationSchema = [
  9,
  n0,
  _URS,
  {
    [_h]: ["POST", "/updateresourceshare", 200],
  },
  () => UpdateResourceShareRequest,
  () => UpdateResourceShareResponse,
];
