// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CustomSchemaCountLimitExceededException as __CustomSchemaCountLimitExceededException,
  InvalidInventoryItemContextException as __InvalidInventoryItemContextException,
  InvalidItemContentException as __InvalidItemContentException,
  ItemContentMismatchException as __ItemContentMismatchException,
  ItemSizeLimitExceededException as __ItemSizeLimitExceededException,
  SubTypeCountLimitExceededException as __SubTypeCountLimitExceededException,
  TotalSizeLimitExceededException as __TotalSizeLimitExceededException,
  UnsupportedInventoryItemContextException as __UnsupportedInventoryItemContextException,
  UnsupportedInventorySchemaVersionException as __UnsupportedInventorySchemaVersionException,
} from "../models/index";
import {
  _aQE,
  _c,
  _CH,
  _Con,
  _Cont,
  _CSCLEE,
  _CTa,
  _e,
  _ICME,
  _II,
  _IICE,
  _IIEL,
  _IIICE,
  _IILn,
  _IInve,
  _ISLEE,
  _Ite,
  _Item,
  _M,
  _PIR,
  _PIRu,
  _PIu,
  _STCLEE,
  _SV,
  _TN,
  _TSLEE,
  _UIICE,
  _UISVE,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CustomSchemaCountLimitExceededException = error(
  n0,
  _CSCLEE,
  {
    [_e]: _c,
    [_aQE]: [`CustomSchemaCountLimitExceeded`, 400],
  },
  [_M],
  [0],

  __CustomSchemaCountLimitExceededException
);
export var InvalidInventoryItemContextException = error(
  n0,
  _IIICE,
  {
    [_e]: _c,
    [_aQE]: [`InvalidInventoryItemContext`, 400],
  },
  [_M],
  [0],

  __InvalidInventoryItemContextException
);
export var InvalidItemContentException = error(
  n0,
  _IICE,
  {
    [_e]: _c,
    [_aQE]: [`InvalidItemContent`, 400],
  },
  [_TN, _M],
  [0, 0],

  __InvalidItemContentException
);
export var InventoryItem = struct(
  n0,
  _IInve,
  0,
  [_TN, _SV, _CTa, _CH, _Con, _Cont],
  [0, 0, 0, 0, list(n0, _IIEL, 0, 128 | 0), 128 | 0]
);
export var ItemContentMismatchException = error(
  n0,
  _ICME,
  {
    [_e]: _c,
    [_aQE]: [`ItemContentMismatch`, 400],
  },
  [_TN, _M],
  [0, 0],

  __ItemContentMismatchException
);
export var ItemSizeLimitExceededException = error(
  n0,
  _ISLEE,
  {
    [_e]: _c,
    [_aQE]: [`ItemSizeLimitExceeded`, 400],
  },
  [_TN, _M],
  [0, 0],

  __ItemSizeLimitExceededException
);
export var PutInventoryRequest = struct(n0, _PIR, 0, [_II, _Ite], [0, [() => InventoryItemList, 0]]);
export var PutInventoryResult = struct(n0, _PIRu, 0, [_M], [0]);
export var SubTypeCountLimitExceededException = error(
  n0,
  _STCLEE,
  {
    [_e]: _c,
    [_aQE]: [`SubTypeCountLimitExceeded`, 400],
  },
  [_M],
  [0],

  __SubTypeCountLimitExceededException
);
export var TotalSizeLimitExceededException = error(
  n0,
  _TSLEE,
  {
    [_e]: _c,
    [_aQE]: [`TotalSizeLimitExceeded`, 400],
  },
  [_M],
  [0],

  __TotalSizeLimitExceededException
);
export var UnsupportedInventoryItemContextException = error(
  n0,
  _UIICE,
  {
    [_e]: _c,
    [_aQE]: [`UnsupportedInventoryItemContext`, 400],
  },
  [_TN, _M],
  [0, 0],

  __UnsupportedInventoryItemContextException
);
export var UnsupportedInventorySchemaVersionException = error(
  n0,
  _UISVE,
  {
    [_e]: _c,
    [_aQE]: [`UnsupportedInventorySchemaVersion`, 400],
  },
  [_M],
  [0],

  __UnsupportedInventorySchemaVersionException
);
export var InventoryItemEntryList = list(n0, _IIEL, 0, 128 | 0);
export var InventoryItemList = list(n0, _IILn, 0, [
  () => InventoryItem,
  {
    [_xN]: _Item,
  },
]);
export var InventoryItemContentContext = 128 | 0;

export var InventoryItemEntry = 128 | 0;

export var PutInventory = op(
  n0,
  _PIu,
  0,
  () => PutInventoryRequest,
  () => PutInventoryResult
);
