// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidDeleteInventoryParametersException as __InvalidDeleteInventoryParametersException,
  InvalidDeletionIdException as __InvalidDeletionIdException,
  InvalidInventoryRequestException as __InvalidInventoryRequestException,
  InvalidOptionException as __InvalidOptionException,
} from "../models/index";
import {
  _Agg,
  _aQE,
  _Att,
  _Attr,
  _c,
  _Cou,
  _CTl,
  _DI,
  _DID,
  _DIDR,
  _DIDRe,
  _DIe,
  _DIR,
  _DIRe,
  _DNi,
  _DR,
  _DSe,
  _DST,
  _DTa,
  _e,
  _GIS,
  _GISR,
  _GISRe,
  _ID,
  _IDIE,
  _IDIPE,
  _IDL,
  _IDS,
  _IDSI,
  _IDSIn,
  _IDSInv,
  _IIA,
  _IIAL,
  _IIRE,
  _IIS,
  _IISRL,
  _IOE,
  _LS,
  _LSM,
  _LSUT,
  _M,
  _MR,
  _N,
  _NT,
  _RCem,
  _Sch,
  _SDO,
  _SIu,
  _STu,
  _TCo,
  _TN,
  _Ve,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteInventoryRequest = struct(n0, _DIR, 0, [_TN, _SDO, _DR, _CTl], [0, 0, 2, [0, 4]]);
export var DeleteInventoryResult = struct(n0, _DIRe, 0, [_DI, _TN, _DSe], [0, 0, () => InventoryDeletionSummary]);
export var DescribeInventoryDeletionsRequest = struct(n0, _DIDR, 0, [_DI, _NT, _MR], [0, 0, 1]);
export var DescribeInventoryDeletionsResult = struct(n0, _DIDRe, 0, [_ID, _NT], [() => InventoryDeletionsList, 0]);
export var GetInventorySchemaRequest = struct(n0, _GISR, 0, [_TN, _NT, _MR, _Agg, _STu], [0, 0, 1, 2, 2]);
export var GetInventorySchemaResult = struct(n0, _GISRe, 0, [_Sch, _NT], [[() => InventoryItemSchemaResultList, 0], 0]);
export var InvalidDeleteInventoryParametersException = error(
  n0,
  _IDIPE,
  {
    [_e]: _c,
    [_aQE]: [`InvalidDeleteInventoryParameters`, 400],
  },
  [_M],
  [0],

  __InvalidDeleteInventoryParametersException
);
export var InvalidDeletionIdException = error(
  n0,
  _IDIE,
  {
    [_e]: _c,
    [_aQE]: [`InvalidDeletionId`, 400],
  },
  [_M],
  [0],

  __InvalidDeletionIdException
);
export var InvalidInventoryRequestException = error(
  n0,
  _IIRE,
  {
    [_e]: _c,
    [_aQE]: [`InvalidInventoryRequest`, 400],
  },
  [_M],
  [0],

  __InvalidInventoryRequestException
);
export var InvalidOptionException = error(
  n0,
  _IOE,
  {
    [_e]: _c,
    [_aQE]: [`InvalidOption`, 400],
  },
  [_M],
  [0],

  __InvalidOptionException
);
export var InventoryDeletionStatusItem = struct(
  n0,
  _IDSI,
  0,
  [_DI, _TN, _DST, _LS, _LSM, _DSe, _LSUT],
  [0, 0, 4, 0, 0, () => InventoryDeletionSummary, 4]
);
export var InventoryDeletionSummary = struct(
  n0,
  _IDS,
  0,
  [_TCo, _RCem, _SIu],
  [1, 1, () => InventoryDeletionSummaryItems]
);
export var InventoryDeletionSummaryItem = struct(n0, _IDSIn, 0, [_Ve, _Cou, _RCem], [0, 1, 1]);
export var InventoryItemAttribute = struct(n0, _IIA, 0, [_N, _DTa], [0, 0]);
export var InventoryItemSchema = struct(
  n0,
  _IIS,
  0,
  [_TN, _Ve, _Att, _DNi],
  [0, 0, [() => InventoryItemAttributeList, 0], 0]
);
export var InventoryDeletionsList = list(n0, _IDL, 0, () => InventoryDeletionStatusItem);
export var InventoryDeletionSummaryItems = list(n0, _IDSInv, 0, () => InventoryDeletionSummaryItem);
export var InventoryItemAttributeList = list(n0, _IIAL, 0, [
  () => InventoryItemAttribute,
  {
    [_xN]: _Attr,
  },
]);
export var InventoryItemSchemaResultList = list(n0, _IISRL, 0, [() => InventoryItemSchema, 0]);
export var DeleteInventory = op(
  n0,
  _DIe,
  0,
  () => DeleteInventoryRequest,
  () => DeleteInventoryResult
);
export var DescribeInventoryDeletions = op(
  n0,
  _DID,
  0,
  () => DescribeInventoryDeletionsRequest,
  () => DescribeInventoryDeletionsResult
);
export var GetInventorySchema = op(
  n0,
  _GIS,
  0,
  () => GetInventorySchemaRequest,
  () => GetInventorySchemaResult
);
