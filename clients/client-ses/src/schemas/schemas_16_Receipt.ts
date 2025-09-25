// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidDeliveryOptionsException as __InvalidDeliveryOptionsException } from "../models/index";
import {
  _aQE,
  _c,
  _CS,
  _CSAN,
  _CSN,
  _DCSe,
  _DCSRes,
  _DCSResc,
  _DO,
  _e,
  _EDv,
  _hE,
  _IDOE,
  _LFS,
  _m,
  _PCSDO,
  _PCSDOR,
  _PCSDORu,
  _RME,
  _RO,
  _SEe,
  _TO,
  _TP,
  n0,
} from "./schemas_0";
import { TrackingOptions } from "./schemas_15_ConfigurationSet";
import { EventDestination } from "./schemas_18_ConfigurationSet";
import { ConfigurationSet } from "./schemas_35_Configuration";

/* eslint no-var: 0 */

export var DeliveryOptions = struct(n0, _DO, 0, [_TP], [0]);
export var DescribeConfigurationSetRequest = struct(n0, _DCSRes, 0, [_CSN, _CSAN], [0, 64 | 0]);
export var DescribeConfigurationSetResponse = struct(
  n0,
  _DCSResc,
  0,
  [_CS, _EDv, _TO, _DO, _RO],
  [
    () => ConfigurationSet,
    () => EventDestinations,
    () => TrackingOptions,
    () => DeliveryOptions,
    () => ReputationOptions,
  ]
);
export var InvalidDeliveryOptionsException = error(
  n0,
  _IDOE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDeliveryOptions`, 400],
  },
  [_m],
  [0],

  __InvalidDeliveryOptionsException
);
export var PutConfigurationSetDeliveryOptionsRequest = struct(n0, _PCSDOR, 0, [_CSN, _DO], [0, () => DeliveryOptions]);
export var PutConfigurationSetDeliveryOptionsResponse = struct(n0, _PCSDORu, 0, [], []);
export var ReputationOptions = struct(n0, _RO, 0, [_SEe, _RME, _LFS], [2, 2, 4]);
export var ConfigurationSetAttributeList = 64 | 0;

export var EventDestinations = list(n0, _EDv, 0, () => EventDestination);
export var DescribeConfigurationSet = op(
  n0,
  _DCSe,
  0,
  () => DescribeConfigurationSetRequest,
  () => DescribeConfigurationSetResponse
);
export var PutConfigurationSetDeliveryOptions = op(
  n0,
  _PCSDO,
  0,
  () => PutConfigurationSetDeliveryOptionsRequest,
  () => PutConfigurationSetDeliveryOptionsResponse
);
