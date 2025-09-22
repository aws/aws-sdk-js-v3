// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASMS,
  _Ca,
  _CMS,
  _F,
  _GRE,
  _GRER,
  _GRERe,
  _h,
  _LRE,
  _LRER,
  _LRERi,
  _LUT,
  _NT,
  _PS,
  _RE,
  _REe,
  _REL,
  _RER,
  _RET,
  _RIe,
  _RMP,
  _S,
  _SRt,
  _SS,
  _SSA,
  _URECMS,
  _URECMSR,
  _URECMSRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetReputationEntityRequest = struct(
  n0,
  _GRER,
  0,
  [_RER, _RET],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetReputationEntityResponse = struct(n0, _GRERe, 0, [_RE], [() => ReputationEntity]);
export var ListReputationEntitiesRequest = struct(n0, _LRER, 0, [_F, _NT, _PS], [128 | 0, 0, 1]);
export var ListReputationEntitiesResponse = struct(n0, _LRERi, 0, [_REe, _NT], [() => ReputationEntitiesList, 0]);
export var ReputationEntity = struct(
  n0,
  _RE,
  0,
  [_RER, _RET, _RMP, _CMS, _ASMS, _SSA, _RIe],
  [0, 0, 0, () => StatusRecord, () => StatusRecord, 0, 0]
);
export var StatusRecord = struct(n0, _SRt, 0, [_S, _Ca, _LUT], [0, 0, 4]);
export var UpdateReputationEntityCustomerManagedStatusRequest = struct(
  n0,
  _URECMSR,
  0,
  [_RET, _RER, _SS],
  [[0, 1], [0, 1], 0]
);
export var UpdateReputationEntityCustomerManagedStatusResponse = struct(n0, _URECMSRp, 0, [], []);
export var ReputationEntitiesList = list(n0, _REL, 0, () => ReputationEntity);
export var ReputationEntityFilter = 128 | 0;

export var GetReputationEntity = op(
  n0,
  _GRE,
  {
    [_h]: ["GET", "/v2/email/reputation/entities/{ReputationEntityType}/{ReputationEntityReference}", 200],
  },
  () => GetReputationEntityRequest,
  () => GetReputationEntityResponse
);
export var ListReputationEntities = op(
  n0,
  _LRE,
  {
    [_h]: ["POST", "/v2/email/reputation/entities", 200],
  },
  () => ListReputationEntitiesRequest,
  () => ListReputationEntitiesResponse
);
export var UpdateReputationEntityCustomerManagedStatus = op(
  n0,
  _URECMS,
  {
    [_h]: [
      "PUT",
      "/v2/email/reputation/entities/{ReputationEntityType}/{ReputationEntityReference}/customer-managed-status",
      200,
    ],
  },
  () => UpdateReputationEntityCustomerManagedStatusRequest,
  () => UpdateReputationEntityCustomerManagedStatusResponse
);
