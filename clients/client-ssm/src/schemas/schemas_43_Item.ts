// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  OpsItemConflictException as __OpsItemConflictException,
  OpsItemInvalidParameterException as __OpsItemInvalidParameterException,
  OpsItemRelatedItemAssociationNotFoundException as __OpsItemRelatedItemAssociationNotFoundException,
} from "../models/index";
import {
  _AIss,
  _aQE,
  _Arn,
  _AT,
  _c,
  _CBr,
  _CT,
  _DOI,
  _DOIR,
  _DOIRe,
  _DOIRI,
  _DOIRIR,
  _DOIRIRi,
  _e,
  _Fi,
  _K,
  _LMB,
  _LMT,
  _LOIRI,
  _LOIRIR,
  _LOIRIRi,
  _M,
  _MR,
  _NT,
  _OICE,
  _OII,
  _OIIp,
  _OIIPE,
  _OIRIANFE,
  _OIRIF,
  _OIRIFp,
  _OIRIS,
  _OIRISp,
  _Ope,
  _PNa,
  _RT,
  _RU,
  _Summ,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteOpsItemRequest = struct(n0, _DOIR, 0, [_OII], [0]);
export var DeleteOpsItemResponse = struct(n0, _DOIRe, 0, [], []);
export var DisassociateOpsItemRelatedItemRequest = struct(n0, _DOIRIR, 0, [_OII, _AIss], [0, 0]);
export var DisassociateOpsItemRelatedItemResponse = struct(n0, _DOIRIRi, 0, [], []);
export var ListOpsItemRelatedItemsRequest = struct(
  n0,
  _LOIRIR,
  0,
  [_OII, _Fi, _MR, _NT],
  [0, () => OpsItemRelatedItemsFilters, 1, 0]
);
export var ListOpsItemRelatedItemsResponse = struct(
  n0,
  _LOIRIRi,
  0,
  [_NT, _Summ],
  [0, () => OpsItemRelatedItemSummaries]
);
export var OpsItemConflictException = error(
  n0,
  _OICE,
  {
    [_e]: _c,
    [_aQE]: [`OpsItemConflictException`, 409],
  },
  [_M],
  [0],

  __OpsItemConflictException
);
export var OpsItemIdentity = struct(n0, _OIIp, 0, [_Arn], [0]);
export var OpsItemInvalidParameterException = error(
  n0,
  _OIIPE,
  {
    [_e]: _c,
    [_aQE]: [`OpsItemInvalidParameterException`, 400],
  },
  [_PNa, _M],
  [64 | 0, 0],

  __OpsItemInvalidParameterException
);
export var OpsItemRelatedItemAssociationNotFoundException = error(
  n0,
  _OIRIANFE,
  {
    [_e]: _c,
    [_aQE]: [`OpsItemRelatedItemAssociationNotFoundException`, 400],
  },
  [_M],
  [0],

  __OpsItemRelatedItemAssociationNotFoundException
);
export var OpsItemRelatedItemsFilter = struct(n0, _OIRIF, 0, [_K, _Va, _Ope], [0, 64 | 0, 0]);
export var OpsItemRelatedItemSummary = struct(
  n0,
  _OIRIS,
  0,
  [_OII, _AIss, _RT, _AT, _RU, _CBr, _CT, _LMB, _LMT],
  [0, 0, 0, 0, 0, () => OpsItemIdentity, 4, () => OpsItemIdentity, 4]
);
export var OpsItemParameterNamesList = 64 | 0;

export var OpsItemRelatedItemsFilters = list(n0, _OIRIFp, 0, () => OpsItemRelatedItemsFilter);
export var OpsItemRelatedItemsFilterValues = 64 | 0;

export var OpsItemRelatedItemSummaries = list(n0, _OIRISp, 0, () => OpsItemRelatedItemSummary);
export var DeleteOpsItem = op(
  n0,
  _DOI,
  0,
  () => DeleteOpsItemRequest,
  () => DeleteOpsItemResponse
);
export var DisassociateOpsItemRelatedItem = op(
  n0,
  _DOIRI,
  0,
  () => DisassociateOpsItemRelatedItemRequest,
  () => DisassociateOpsItemRelatedItemResponse
);
export var ListOpsItemRelatedItems = op(
  n0,
  _LOIRI,
  0,
  () => ListOpsItemRelatedItemsRequest,
  () => ListOpsItemRelatedItemsResponse
);
