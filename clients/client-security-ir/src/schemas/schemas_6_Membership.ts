// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _cEO,
  _CMr,
  _CMRr,
  _CMRre,
  _cT,
  _EA,
  _em,
  _fNe,
  _h,
  _iE,
  _IR,
  _IRN,
  _IRT,
  _iRT,
  _JT,
  _jT,
  _MACU,
  _mACU,
  _mI,
  _MN,
  _mN,
  _n,
  _OIF,
  _oIF,
  _OIFp,
  _oUTA,
  _oUTR,
  _ta,
  _UM,
  _uMC,
  _UMR,
  _UMRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EmailAddress = sim(n0, _EA, 0, 8);
export var IncidentResponderName = sim(n0, _IRN, 0, 8);
export var JobTitle = sim(n0, _JT, 0, 8);
export var MembershipName = sim(n0, _MN, 0, 8);
export var CreateMembershipRequest = struct(
  n0,
  _CMRr,
  0,
  [_cT, _mN, _iRT, _oIF, _ta, _cEO],
  [[0, 4], [() => MembershipName, 0], [() => IncidentResponseTeam, 0], () => OptInFeatures, 128 | 0, 2]
);
export var CreateMembershipResponse = struct(n0, _CMRre, 0, [_mI], [0]);
export var IncidentResponder = struct(
  n0,
  _IR,
  0,
  [_n, _jT, _em],
  [
    [() => IncidentResponderName, 0],
    [() => JobTitle, 0],
    [() => EmailAddress, 0],
  ]
);
export var MembershipAccountsConfigurationsUpdate = struct(n0, _MACU, 0, [_cEO, _oUTA, _oUTR], [2, 64 | 0, 64 | 0]);
export var OptInFeature = struct(n0, _OIF, 0, [_fNe, _iE], [0, 2]);
export var UpdateMembershipRequest = struct(
  n0,
  _UMR,
  0,
  [_mI, _mN, _iRT, _oIF, _mACU, _uMC],
  [
    [0, 1],
    [() => MembershipName, 0],
    [() => IncidentResponseTeam, 0],
    () => OptInFeatures,
    () => MembershipAccountsConfigurationsUpdate,
    2,
  ]
);
export var UpdateMembershipResponse = struct(n0, _UMRp, 0, [], []);
export var IncidentResponseTeam = list(n0, _IRT, 0, [() => IncidentResponder, 0]);
export var OptInFeatures = list(n0, _OIFp, 0, () => OptInFeature);
export var OrganizationalUnits = 64 | 0;

export var CreateMembership = op(
  n0,
  _CMr,
  {
    [_h]: ["POST", "/v1/membership", 201],
  },
  () => CreateMembershipRequest,
  () => CreateMembershipResponse
);
export var UpdateMembership = op(
  n0,
  _UM,
  {
    [_h]: ["PUT", "/v1/membership/{membershipId}/update-membership", 200],
  },
  () => UpdateMembershipRequest,
  () => UpdateMembershipResponse
);
