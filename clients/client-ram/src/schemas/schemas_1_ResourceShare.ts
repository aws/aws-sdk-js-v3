// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidMaxResultsException as __InvalidMaxResultsException,
  ResourceShareInvitationAlreadyAcceptedException as __ResourceShareInvitationAlreadyAcceptedException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _aE,
  _aQE,
  _ARS,
  _ARSI,
  _ARSIR,
  _ARSIRc,
  _ARSR,
  _ARSRs,
  _aS,
  _aT,
  _c,
  _cT,
  _cTr,
  _DRSi,
  _DRSRi,
  _DRSRis,
  _e,
  _ex,
  _GRSA,
  _GRSAR,
  _GRSARe,
  _GRSI,
  _GRSIR,
  _GRSIRe,
  _h,
  _hE,
  _IMRE,
  _iT,
  _it,
  _lUT,
  _m,
  _mR,
  _nT,
  _p,
  _pr,
  _rA,
  _rAe,
  _rAec,
  _rAI,
  _RRSI,
  _RRSIR,
  _RRSIRe,
  _RSA,
  _rSA,
  _rSAe,
  _rSAes,
  _RSALe,
  _RSI,
  _rSI,
  _rSIA,
  _RSIAAE,
  _rSIAe,
  _RSIAL,
  _rSIe,
  _RSIL,
  _rSN,
  _s,
  _sAI,
  _sM,
  _so,
  _TE,
  _xN,
  n0,
} from "./schemas_0";
import { ResourceShareArnList } from "./schemas_6_Resource";
import { ResourceArnList } from "./schemas_8_Resource";
import { SourceArnOrAccountList } from "./schemas_10_ResourceShare";
import { PrincipalArnOrIdList } from "./schemas_18_ResourceShare";

/* eslint no-var: 0 */

export var AcceptResourceShareInvitationRequest = struct(n0, _ARSIR, 0, [_rSIA, _cT], [0, 0]);
export var AcceptResourceShareInvitationResponse = struct(
  n0,
  _ARSIRc,
  0,
  [_rSI, _cT],
  [[() => ResourceShareInvitation, 0], 0]
);
export var AssociateResourceShareRequest = struct(
  n0,
  _ARSR,
  0,
  [_rSA, _rA, _p, _cT, _so],
  [0, [() => ResourceArnList, 0], [() => PrincipalArnOrIdList, 0], 0, [() => SourceArnOrAccountList, 0]]
);
export var AssociateResourceShareResponse = struct(
  n0,
  _ARSRs,
  0,
  [_rSAe, _cT],
  [[() => ResourceShareAssociationList, 0], 0]
);
export var DisassociateResourceShareRequest = struct(
  n0,
  _DRSRi,
  0,
  [_rSA, _rA, _p, _cT, _so],
  [0, [() => ResourceArnList, 0], [() => PrincipalArnOrIdList, 0], 0, [() => SourceArnOrAccountList, 0]]
);
export var DisassociateResourceShareResponse = struct(
  n0,
  _DRSRis,
  0,
  [_rSAe, _cT],
  [[() => ResourceShareAssociationList, 0], 0]
);
export var GetResourceShareAssociationsRequest = struct(
  n0,
  _GRSAR,
  0,
  [_aT, _rSAes, _rAe, _pr, _aS, _nT, _mR],
  [0, [() => ResourceShareArnList, 0], 0, 0, 0, 0, 1]
);
export var GetResourceShareAssociationsResponse = struct(
  n0,
  _GRSARe,
  0,
  [_rSAe, _nT],
  [[() => ResourceShareAssociationList, 0], 0]
);
export var GetResourceShareInvitationsRequest = struct(
  n0,
  _GRSIR,
  0,
  [_rSIAe, _rSAes, _nT, _mR],
  [[() => ResourceShareInvitationArnList, 0], [() => ResourceShareArnList, 0], 0, 1]
);
export var GetResourceShareInvitationsResponse = struct(
  n0,
  _GRSIRe,
  0,
  [_rSIe, _nT],
  [[() => ResourceShareInvitationList, 0], 0]
);
export var InvalidMaxResultsException = error(
  n0,
  _IMRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidMaxResults`, 400],
  },
  [_m],
  [0],

  __InvalidMaxResultsException
);
export var RejectResourceShareInvitationRequest = struct(n0, _RRSIR, 0, [_rSIA, _cT], [0, 0]);
export var RejectResourceShareInvitationResponse = struct(
  n0,
  _RRSIRe,
  0,
  [_rSI, _cT],
  [[() => ResourceShareInvitation, 0], 0]
);
export var ResourceShareAssociation = struct(
  n0,
  _RSA,
  0,
  [_rSA, _rSN, _aE, _aT, _s, _sM, _cTr, _lUT, _ex],
  [0, 0, 0, 0, 0, 0, 4, 4, 2]
);
export var ResourceShareInvitation = struct(
  n0,
  _RSI,
  0,
  [_rSIA, _rSN, _rSA, _sAI, _rAI, _iT, _s, _rSAe, _rAec],
  [0, 0, 0, 0, 0, 4, 0, [() => ResourceShareAssociationList, 0], 0]
);
export var ResourceShareInvitationAlreadyAcceptedException = error(
  n0,
  _RSIAAE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidResourceShareInvitationArn.AlreadyAccepted`, 400],
  },
  [_m],
  [0],

  __ResourceShareInvitationAlreadyAcceptedException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`ThrottlingException`, 429],
  },
  [_m],
  [0],

  __ThrottlingException
);
export var ResourceShareAssociationList = list(n0, _RSALe, 0, [
  () => ResourceShareAssociation,
  {
    [_xN]: _it,
  },
]);
export var ResourceShareInvitationArnList = list(n0, _RSIAL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var ResourceShareInvitationList = list(n0, _RSIL, 0, [
  () => ResourceShareInvitation,
  {
    [_xN]: _it,
  },
]);
export var AcceptResourceShareInvitation = op(
  n0,
  _ARSI,
  {
    [_h]: ["POST", "/acceptresourceshareinvitation", 200],
  },
  () => AcceptResourceShareInvitationRequest,
  () => AcceptResourceShareInvitationResponse
);
export var AssociateResourceShare = op(
  n0,
  _ARS,
  {
    [_h]: ["POST", "/associateresourceshare", 200],
  },
  () => AssociateResourceShareRequest,
  () => AssociateResourceShareResponse
);
export var DisassociateResourceShare = op(
  n0,
  _DRSi,
  {
    [_h]: ["POST", "/disassociateresourceshare", 200],
  },
  () => DisassociateResourceShareRequest,
  () => DisassociateResourceShareResponse
);
export var GetResourceShareAssociations = op(
  n0,
  _GRSA,
  {
    [_h]: ["POST", "/getresourceshareassociations", 200],
  },
  () => GetResourceShareAssociationsRequest,
  () => GetResourceShareAssociationsResponse
);
export var GetResourceShareInvitations = op(
  n0,
  _GRSI,
  {
    [_h]: ["POST", "/getresourceshareinvitations", 200],
  },
  () => GetResourceShareInvitationsRequest,
  () => GetResourceShareInvitationsResponse
);
export var RejectResourceShareInvitation = op(
  n0,
  _RRSI,
  {
    [_h]: ["POST", "/rejectresourceshareinvitation", 200],
  },
  () => RejectResourceShareInvitationRequest,
  () => RejectResourceShareInvitationResponse
);
