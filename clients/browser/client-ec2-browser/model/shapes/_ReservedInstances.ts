import { _RecurringChargesList } from "./_RecurringChargesList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservedInstances: _Structure_ = {
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
    End: {
      shape: {
        type: "timestamp"
      },
      locationName: "end"
    },
    FixedPrice: {
      shape: {
        type: "float"
      },
      locationName: "fixedPrice"
    },
    InstanceCount: {
      shape: {
        type: "integer"
      },
      locationName: "instanceCount"
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
    ReservedInstancesId: {
      shape: {
        type: "string"
      },
      locationName: "reservedInstancesId"
    },
    Start: {
      shape: {
        type: "timestamp"
      },
      locationName: "start"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
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
    RecurringCharges: {
      shape: _RecurringChargesList,
      locationName: "recurringCharges"
    },
    Scope: {
      shape: {
        type: "string"
      },
      locationName: "scope"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
