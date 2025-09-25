// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ASD,
  _ASPD,
  _ASPDL,
  _ASPU,
  _ASRA,
  _ASSD,
  _ASSU,
  _ASTTSPCD,
  _ASTTSPCU,
  _At,
  _ATG,
  _AU,
  _AVL,
  _AVU,
  _CBD,
  _CC,
  _CE,
  _CO,
  _COo,
  _Cou,
  _CR,
  _DI,
  _DII,
  _DIO,
  _DSI,
  _EAM,
  _EAN,
  _EAV,
  _EAVx,
  _ESK,
  _Ex,
  _Exi,
  _FEi,
  _I,
  _ICM,
  _IL,
  _IN,
  _It,
  _K,
  _KC,
  _KCE,
  _L,
  _LEK,
  _MU,
  _MUa,
  _PE,
  _PI,
  _PII,
  _PIO,
  _PITRE,
  _PITRSo,
  _PN,
  _Q,
  _QF,
  _QI,
  _QO,
  _RCC,
  _RICM,
  _RPID,
  _RV,
  _RVOCCF,
  _SC,
  _Se,
  _SIC,
  _SIF,
  _SOC,
  _SP,
  _SPU,
  _TN,
  _TTSPC,
  _TV,
  _UCB,
  _UCBI,
  _UCBO,
  _UE,
  _UII,
  _UIO,
  _UIp,
  _V,
  AttributeValue,
  ConsumedCapacity,
  n0,
} from "./schemas_0";
import { AttributeValueList, ExpressionAttributeValueMap } from "./schemas_7_Item";
import { Condition, FilterConditionMap, ItemList, Key } from "./schemas_9_Item";
import { ItemCollectionMetrics, PutItemInputAttributeMap } from "./schemas_12_Item";
import { ContinuousBackupsDescription } from "./schemas_18_Table";
import { AttributeMap } from "./schemas_30_Item";

/* eslint no-var: 0 */

export var AttributeValueUpdate = struct(n0, _AVU, 0, [_V, _A], [() => AttributeValue, 0]);
export var AutoScalingPolicyDescription = struct(
  n0,
  _ASPD,
  0,
  [_PN, _TTSPC],
  [0, () => AutoScalingTargetTrackingScalingPolicyConfigurationDescription]
);
export var AutoScalingPolicyUpdate = struct(
  n0,
  _ASPU,
  0,
  [_PN, _TTSPC],
  [0, () => AutoScalingTargetTrackingScalingPolicyConfigurationUpdate]
);
export var AutoScalingSettingsDescription = struct(
  n0,
  _ASSD,
  0,
  [_MU, _MUa, _ASD, _ASRA, _SP],
  [1, 1, 2, 0, () => AutoScalingPolicyDescriptionList]
);
export var AutoScalingSettingsUpdate = struct(
  n0,
  _ASSU,
  0,
  [_MU, _MUa, _ASD, _ASRA, _SPU],
  [1, 1, 2, 0, () => AutoScalingPolicyUpdate]
);
export var AutoScalingTargetTrackingScalingPolicyConfigurationDescription = struct(
  n0,
  _ASTTSPCD,
  0,
  [_DSI, _SIC, _SOC, _TV],
  [2, 1, 1, 1]
);
export var AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = struct(
  n0,
  _ASTTSPCU,
  0,
  [_DSI, _SIC, _SOC, _TV],
  [2, 1, 1, 1]
);
export var DeleteItemInput = struct(
  n0,
  _DII,
  0,
  [_TN, _K, _Ex, _COo, _RV, _RCC, _RICM, _CE, _EAN, _EAV, _RVOCCF],
  [0, () => Key, () => ExpectedAttributeMap, 0, 0, 0, 0, 0, 128 | 0, () => ExpressionAttributeValueMap, 0]
);
export var DeleteItemOutput = struct(
  n0,
  _DIO,
  0,
  [_At, _CC, _ICM],
  [() => AttributeMap, () => ConsumedCapacity, () => ItemCollectionMetrics]
);
export var ExpectedAttributeValue = struct(
  n0,
  _EAVx,
  0,
  [_V, _Exi, _CO, _AVL],
  [() => AttributeValue, 2, 0, () => AttributeValueList]
);
export var PointInTimeRecoverySpecification = struct(n0, _PITRSo, 0, [_PITRE, _RPID], [2, 1]);
export var PutItemInput = struct(
  n0,
  _PII,
  0,
  [_TN, _I, _Ex, _RV, _RCC, _RICM, _COo, _CE, _EAN, _EAV, _RVOCCF],
  [
    0,
    () => PutItemInputAttributeMap,
    () => ExpectedAttributeMap,
    0,
    0,
    0,
    0,
    0,
    128 | 0,
    () => ExpressionAttributeValueMap,
    0,
  ]
);
export var PutItemOutput = struct(
  n0,
  _PIO,
  0,
  [_At, _CC, _ICM],
  [() => AttributeMap, () => ConsumedCapacity, () => ItemCollectionMetrics]
);
export var QueryInput = struct(
  n0,
  _QI,
  0,
  [_TN, _IN, _Se, _ATG, _L, _CR, _KC, _QF, _COo, _SIF, _ESK, _RCC, _PE, _FEi, _KCE, _EAN, _EAV],
  [
    0,
    0,
    0,
    64 | 0,
    1,
    2,
    () => KeyConditions,
    () => FilterConditionMap,
    0,
    2,
    () => Key,
    0,
    0,
    0,
    0,
    128 | 0,
    () => ExpressionAttributeValueMap,
  ]
);
export var QueryOutput = struct(
  n0,
  _QO,
  0,
  [_It, _Cou, _SC, _LEK, _CC],
  [() => ItemList, 1, 1, () => Key, () => ConsumedCapacity]
);
export var UpdateContinuousBackupsInput = struct(
  n0,
  _UCBI,
  0,
  [_TN, _PITRSo],
  [0, () => PointInTimeRecoverySpecification]
);
export var UpdateContinuousBackupsOutput = struct(n0, _UCBO, 0, [_CBD], [() => ContinuousBackupsDescription]);
export var UpdateItemInput = struct(
  n0,
  _UII,
  0,
  [_TN, _K, _AU, _Ex, _COo, _RV, _RCC, _RICM, _UE, _CE, _EAN, _EAV, _RVOCCF],
  [
    0,
    () => Key,
    () => AttributeUpdates,
    () => ExpectedAttributeMap,
    0,
    0,
    0,
    0,
    0,
    0,
    128 | 0,
    () => ExpressionAttributeValueMap,
    0,
  ]
);
export var UpdateItemOutput = struct(
  n0,
  _UIO,
  0,
  [_At, _CC, _ICM],
  [() => AttributeMap, () => ConsumedCapacity, () => ItemCollectionMetrics]
);
export var AutoScalingPolicyDescriptionList = list(n0, _ASPDL, 0, () => AutoScalingPolicyDescription);
export var AttributeUpdates = map(n0, _AU, 0, 0, () => AttributeValueUpdate);
export var ExpectedAttributeMap = map(n0, _EAM, 0, 0, () => ExpectedAttributeValue);
export var KeyConditions = map(n0, _KC, 0, 0, () => Condition);
export var DeleteItem = op(
  n0,
  _DI,
  0,
  () => DeleteItemInput,
  () => DeleteItemOutput
);
export var PutItem = op(
  n0,
  _PI,
  0,
  () => PutItemInput,
  () => PutItemOutput
);
export var Query = op(
  n0,
  _Q,
  0,
  () => QueryInput,
  () => QueryOutput
);
export var UpdateContinuousBackups = op(
  n0,
  _UCB,
  0,
  () => UpdateContinuousBackupsInput,
  () => UpdateContinuousBackupsOutput
);
export var UpdateItem = op(
  n0,
  _UIp,
  0,
  () => UpdateItemInput,
  () => UpdateItemOutput
);
