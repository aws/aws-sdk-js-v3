import { _PricingDetailsList } from "./_PricingDetailsList";
import { _RecurringChargesList } from "./_RecurringChargesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservedInstancesOffering: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    Duration: {
      shape: {
        type: "integer"
      },
      locationName: "duration"
    },
    FixedPrice: {
      shape: {
        type: "float"
      },
      locationName: "fixedPrice"
    },
    InstanceType: {
      shape: {
        type: "string"
      },
      locationName: "instanceType"
    },
    ProductDescription: {
      shape: {
        type: "string"
      },
      locationName: "productDescription"
    },
    ReservedInstancesOfferingId: {
      shape: {
        type: "string"
      },
      locationName: "reservedInstancesOfferingId"
    },
    UsagePrice: {
      shape: {
        type: "float"
      },
      locationName: "usagePrice"
    },
    CurrencyCode: {
      shape: {
        type: "string"
      },
      locationName: "currencyCode"
    },
    InstanceTenancy: {
      shape: {
        type: "string"
      },
      locationName: "instanceTenancy"
    },
    Marketplace: {
      shape: {
        type: "boolean"
      },
      locationName: "marketplace"
    },
    OfferingClass: {
      shape: {
        type: "string"
      },
      locationName: "offeringClass"
    },
    OfferingType: {
      shape: {
        type: "string"
      },
      locationName: "offeringType"
    },
    PricingDetails: {
      shape: _PricingDetailsList,
      locationName: "pricingDetailsSet"
    },
    RecurringCharges: {
      shape: _RecurringChargesList,
      locationName: "recurringCharges"
    },
    Scope: {
      shape: {
        type: "string"
      },
      locationName: "scope"
    }
  }
};
