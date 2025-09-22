// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import { DuplicateItemException as __DuplicateItemException } from "../models/index";
import {
  _ATG,
  _AVL,
  _BGI,
  _BGII,
  _BGIO,
  _BGRM,
  _BGRMa,
  _BWI,
  _BWII,
  _BWIO,
  _BWIRM,
  _c,
  _CC,
  _CCo,
  _CE,
  _CO,
  _Co,
  _COo,
  _Cou,
  _CR,
  _CRT,
  _De,
  _DIE,
  _DR,
  _e,
  _EAN,
  _EAV,
  _ESI,
  _ESK,
  _ESO,
  _ESxe,
  _FCM,
  _FEi,
  _G,
  _GI,
  _GII,
  _GIO,
  _I,
  _ICM,
  _ICMM,
  _ICMPT,
  _IL,
  _IN,
  _It,
  _K,
  _KAA,
  _Ke,
  _KL,
  _L,
  _LEK,
  _m,
  _NT,
  _P,
  _PE,
  _PR,
  _Pu,
  _R,
  _RCC,
  _RI,
  _RICM,
  _RVOCCF,
  _SC,
  _Sc,
  _Se,
  _Seg,
  _SF,
  _SI,
  _SO,
  _St,
  _TGI,
  _TGII,
  _TGIL,
  _TGIO,
  _TGIr,
  _TIr,
  _TN,
  _TSo,
  _TWI,
  _TWII,
  _TWIL,
  _TWIO,
  _TWIr,
  _U,
  _UE,
  _UI,
  _UK,
  _WR,
  _WRr,
  AttributeValue,
  ConsumedCapacity,
  n0,
} from "./schemas_0";
import { AttributeValueList, ExpressionAttributeValueMap } from "./schemas_7_Item";
import { ItemCollectionMetrics, PutItemInputAttributeMap } from "./schemas_12_Item";
import { ConsumedCapacityMultiple, ItemResponseList } from "./schemas_15_Item";
import { PreparedStatementParameters } from "./schemas_16_Item";
import { AttributeMap } from "./schemas_30_Item";

/* eslint no-var: 0 */

export var BatchGetItemInput = struct(n0, _BGII, 0, [_RI, _RCC], [() => BatchGetRequestMap, 0]);
export var BatchGetItemOutput = struct(
  n0,
  _BGIO,
  0,
  [_R, _UK, _CC],
  [() => BatchGetResponseMap, () => BatchGetRequestMap, () => ConsumedCapacityMultiple]
);
export var BatchWriteItemInput = struct(n0, _BWII, 0, [_RI, _RCC, _RICM], [() => BatchWriteItemRequestMap, 0, 0]);
export var BatchWriteItemOutput = struct(
  n0,
  _BWIO,
  0,
  [_UI, _ICM, _CC],
  [() => BatchWriteItemRequestMap, () => ItemCollectionMetricsPerTable, () => ConsumedCapacityMultiple]
);
export var Condition = struct(n0, _Co, 0, [_AVL, _CO], [() => AttributeValueList, 0]);
export var ConditionCheck = struct(
  n0,
  _CCo,
  0,
  [_K, _TN, _CE, _EAN, _EAV, _RVOCCF],
  [() => Key, 0, 0, 128 | 0, () => ExpressionAttributeValueMap, 0]
);
export var Delete = struct(
  n0,
  _De,
  0,
  [_K, _TN, _CE, _EAN, _EAV, _RVOCCF],
  [() => Key, 0, 0, 128 | 0, () => ExpressionAttributeValueMap, 0]
);
export var DeleteRequest = struct(n0, _DR, 0, [_K], [() => Key]);
export var DuplicateItemException = error(
  n0,
  _DIE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __DuplicateItemException
);
export var ExecuteStatementInput = struct(
  n0,
  _ESI,
  0,
  [_St, _P, _CR, _NT, _RCC, _L, _RVOCCF],
  [0, () => PreparedStatementParameters, 2, 0, 0, 1, 0]
);
export var ExecuteStatementOutput = struct(
  n0,
  _ESO,
  0,
  [_It, _NT, _CC, _LEK],
  [() => ItemList, 0, () => ConsumedCapacity, () => Key]
);
export var Get = struct(n0, _G, 0, [_K, _TN, _PE, _EAN], [() => Key, 0, 0, 128 | 0]);
export var GetItemInput = struct(
  n0,
  _GII,
  0,
  [_TN, _K, _ATG, _CR, _RCC, _PE, _EAN],
  [0, () => Key, 64 | 0, 2, 0, 0, 128 | 0]
);
export var GetItemOutput = struct(n0, _GIO, 0, [_I, _CC], [() => AttributeMap, () => ConsumedCapacity]);
export var KeysAndAttributes = struct(n0, _KAA, 0, [_Ke, _ATG, _CR, _PE, _EAN], [() => KeyList, 64 | 0, 2, 0, 128 | 0]);
export var Put = struct(
  n0,
  _Pu,
  0,
  [_I, _TN, _CE, _EAN, _EAV, _RVOCCF],
  [() => PutItemInputAttributeMap, 0, 0, 128 | 0, () => ExpressionAttributeValueMap, 0]
);
export var PutRequest = struct(n0, _PR, 0, [_I], [() => PutItemInputAttributeMap]);
export var ScanInput = struct(
  n0,
  _SI,
  0,
  [_TN, _IN, _ATG, _L, _Se, _SF, _COo, _ESK, _RCC, _TSo, _Seg, _PE, _FEi, _EAN, _EAV, _CR],
  [
    0,
    0,
    64 | 0,
    1,
    0,
    () => FilterConditionMap,
    0,
    () => Key,
    0,
    1,
    1,
    0,
    0,
    128 | 0,
    () => ExpressionAttributeValueMap,
    2,
  ]
);
export var ScanOutput = struct(
  n0,
  _SO,
  0,
  [_It, _Cou, _SC, _LEK, _CC],
  [() => ItemList, 1, 1, () => Key, () => ConsumedCapacity]
);
export var TransactGetItem = struct(n0, _TGI, 0, [_G], [() => Get]);
export var TransactGetItemsInput = struct(n0, _TGII, 0, [_TIr, _RCC], [() => TransactGetItemList, 0]);
export var TransactGetItemsOutput = struct(
  n0,
  _TGIO,
  0,
  [_CC, _R],
  [() => ConsumedCapacityMultiple, () => ItemResponseList]
);
export var TransactWriteItem = struct(
  n0,
  _TWI,
  0,
  [_CCo, _Pu, _De, _U],
  [() => ConditionCheck, () => Put, () => Delete, () => Update]
);
export var TransactWriteItemsInput = struct(
  n0,
  _TWII,
  0,
  [_TIr, _RCC, _RICM, _CRT],
  [() => TransactWriteItemList, 0, 0, [0, 4]]
);
export var TransactWriteItemsOutput = struct(
  n0,
  _TWIO,
  0,
  [_CC, _ICM],
  [() => ConsumedCapacityMultiple, () => ItemCollectionMetricsPerTable]
);
export var Update = struct(
  n0,
  _U,
  0,
  [_K, _UE, _TN, _CE, _EAN, _EAV, _RVOCCF],
  [() => Key, 0, 0, 0, 128 | 0, () => ExpressionAttributeValueMap, 0]
);
export var WriteRequest = struct(n0, _WR, 0, [_PR, _DR], [() => PutRequest, () => DeleteRequest]);
export var AttributeNameList = 64 | 0;

export var ItemCollectionMetricsMultiple = list(n0, _ICMM, 0, () => ItemCollectionMetrics);
export var ItemList = list(n0, _IL, 0, () => AttributeMap);
export var KeyList = list(n0, _KL, 0, () => Key);
export var TransactGetItemList = list(n0, _TGIL, 0, () => TransactGetItem);
export var TransactWriteItemList = list(n0, _TWIL, 0, () => TransactWriteItem);
export var WriteRequests = list(n0, _WRr, 0, () => WriteRequest);
export var BatchGetRequestMap = map(n0, _BGRMa, 0, 0, () => KeysAndAttributes);
export var BatchGetResponseMap = map(n0, _BGRM, 0, 0, () => ItemList);
export var BatchWriteItemRequestMap = map(n0, _BWIRM, 0, 0, () => WriteRequests);
export var FilterConditionMap = map(n0, _FCM, 0, 0, () => Condition);
export var ItemCollectionMetricsPerTable = map(n0, _ICMPT, 0, 0, () => ItemCollectionMetricsMultiple);
export var Key = map(n0, _K, 0, 0, () => AttributeValue);
export var BatchGetItem = op(
  n0,
  _BGI,
  0,
  () => BatchGetItemInput,
  () => BatchGetItemOutput
);
export var BatchWriteItem = op(
  n0,
  _BWI,
  0,
  () => BatchWriteItemInput,
  () => BatchWriteItemOutput
);
export var ExecuteStatement = op(
  n0,
  _ESxe,
  0,
  () => ExecuteStatementInput,
  () => ExecuteStatementOutput
);
export var GetItem = op(
  n0,
  _GI,
  0,
  () => GetItemInput,
  () => GetItemOutput
);
export var Scan = op(
  n0,
  _Sc,
  0,
  () => ScanInput,
  () => ScanOutput
);
export var TransactGetItems = op(
  n0,
  _TGIr,
  0,
  () => TransactGetItemsInput,
  () => TransactGetItemsOutput
);
export var TransactWriteItems = op(
  n0,
  _TWIr,
  0,
  () => TransactWriteItemsInput,
  () => TransactWriteItemsOutput
);
