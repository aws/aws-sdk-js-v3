// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _c,
  _CD,
  _CDR,
  _CDRr,
  _CE,
  _dDA,
  _dDC,
  _DDD,
  _DDDP,
  _DDDPR,
  _DDDR,
  _dDe,
  _DDel,
  _dDN,
  _dDP,
  _DDR,
  _DDS,
  _DDSR,
  _dDT,
  _de,
  _dSe,
  _dSN,
  _e,
  _fD,
  _i,
  _lT,
  _m,
  _n,
  _oF,
  _PDD,
  _PDDP,
  _PDDPR,
  _PDDPRu,
  _PDDR,
  _PDDRu,
  _PDS,
  _PDSR,
  _PDSRu,
  _po,
  _rA,
  _rF,
  _sDC,
  _ta,
  _UDC,
  _UDCR,
  _UDCRp,
  n0,
  Unit,
} from "./schemas_0";
import { Policy } from "./schemas_16_Delivery";
import { Delivery, S3DeliveryConfiguration } from "./schemas_17_Delivery";
import { DeliverySource } from "./schemas_18_Delivery";
import { DeliveryDestination, DeliveryDestinationConfiguration } from "./schemas_19_Delivery";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ConflictException
);
export var CreateDeliveryRequest = struct(
  n0,
  _CDR,
  0,
  [_dSN, _dDA, _rF, _fD, _sDC, _ta],
  [0, 0, 64 | 0, 0, () => S3DeliveryConfiguration, 128 | 0]
);
export var CreateDeliveryResponse = struct(n0, _CDRr, 0, [_de], [() => Delivery]);
export var DeleteDeliveryDestinationPolicyRequest = struct(n0, _DDDPR, 0, [_dDN], [0]);
export var DeleteDeliveryDestinationRequest = struct(n0, _DDDR, 0, [_n], [0]);
export var DeleteDeliveryRequest = struct(n0, _DDR, 0, [_i], [0]);
export var DeleteDeliverySourceRequest = struct(n0, _DDSR, 0, [_n], [0]);
export var PutDeliveryDestinationPolicyRequest = struct(n0, _PDDPR, 0, [_dDN, _dDP], [0, 0]);
export var PutDeliveryDestinationPolicyResponse = struct(n0, _PDDPRu, 0, [_po], [() => Policy]);
export var PutDeliveryDestinationRequest = struct(
  n0,
  _PDDR,
  0,
  [_n, _oF, _dDC, _dDT, _ta],
  [0, 0, () => DeliveryDestinationConfiguration, 0, 128 | 0]
);
export var PutDeliveryDestinationResponse = struct(n0, _PDDRu, 0, [_dDe], [() => DeliveryDestination]);
export var PutDeliverySourceRequest = struct(n0, _PDSR, 0, [_n, _rA, _lT, _ta], [0, 0, 0, 128 | 0]);
export var PutDeliverySourceResponse = struct(n0, _PDSRu, 0, [_dSe], [() => DeliverySource]);
export var UpdateDeliveryConfigurationRequest = struct(
  n0,
  _UDCR,
  0,
  [_i, _rF, _fD, _sDC],
  [0, 64 | 0, 0, () => S3DeliveryConfiguration]
);
export var UpdateDeliveryConfigurationResponse = struct(n0, _UDCRp, 0, [], []);
export var CreateDelivery = op(
  n0,
  _CD,
  0,
  () => CreateDeliveryRequest,
  () => CreateDeliveryResponse
);
export var DeleteDelivery = op(
  n0,
  _DDel,
  0,
  () => DeleteDeliveryRequest,
  () => Unit
);
export var DeleteDeliveryDestination = op(
  n0,
  _DDD,
  0,
  () => DeleteDeliveryDestinationRequest,
  () => Unit
);
export var DeleteDeliveryDestinationPolicy = op(
  n0,
  _DDDP,
  0,
  () => DeleteDeliveryDestinationPolicyRequest,
  () => Unit
);
export var DeleteDeliverySource = op(
  n0,
  _DDS,
  0,
  () => DeleteDeliverySourceRequest,
  () => Unit
);
export var PutDeliveryDestination = op(
  n0,
  _PDD,
  0,
  () => PutDeliveryDestinationRequest,
  () => PutDeliveryDestinationResponse
);
export var PutDeliveryDestinationPolicy = op(
  n0,
  _PDDP,
  0,
  () => PutDeliveryDestinationPolicyRequest,
  () => PutDeliveryDestinationPolicyResponse
);
export var PutDeliverySource = op(
  n0,
  _PDS,
  0,
  () => PutDeliverySourceRequest,
  () => PutDeliverySourceResponse
);
export var UpdateDeliveryConfiguration = op(
  n0,
  _UDC,
  0,
  () => UpdateDeliveryConfigurationRequest,
  () => UpdateDeliveryConfigurationResponse
);
