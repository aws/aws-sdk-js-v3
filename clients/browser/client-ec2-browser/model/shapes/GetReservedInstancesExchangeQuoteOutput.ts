import { _ReservationValue } from "./_ReservationValue";
import { _ReservedInstanceReservationValueSet } from "./_ReservedInstanceReservationValueSet";
import { _TargetReservationValueSet } from "./_TargetReservationValueSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetReservedInstancesExchangeQuoteOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CurrencyCode: {
      shape: {
        type: "string"
      },
      locationName: "currencyCode"
    },
    IsValidExchange: {
      shape: {
        type: "boolean"
      },
      locationName: "isValidExchange"
    },
    OutputReservedInstancesWillExpireAt: {
      shape: {
        type: "timestamp"
      },
      locationName: "outputReservedInstancesWillExpireAt"
    },
    PaymentDue: {
      shape: {
        type: "string"
      },
      locationName: "paymentDue"
    },
    ReservedInstanceValueRollup: {
      shape: _ReservationValue,
      locationName: "reservedInstanceValueRollup"
    },
    ReservedInstanceValueSet: {
      shape: _ReservedInstanceReservationValueSet,
      locationName: "reservedInstanceValueSet"
    },
    TargetConfigurationValueRollup: {
      shape: _ReservationValue,
      locationName: "targetConfigurationValueRollup"
    },
    TargetConfigurationValueSet: {
      shape: _TargetReservationValueSet,
      locationName: "targetConfigurationValueSet"
    },
    ValidationFailureReason: {
      shape: {
        type: "string"
      },
      locationName: "validationFailureReason"
    }
  }
};
