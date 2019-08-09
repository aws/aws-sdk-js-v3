import { _FilterList } from "./_FilterList";
import { _ReservedInstancesOfferingIdStringList } from "./_ReservedInstancesOfferingIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedInstancesOfferingsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    IncludeMarketplace: {
      shape: {
        type: "boolean"
      }
    },
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    MaxDuration: {
      shape: {
        type: "integer"
      }
    },
    MaxInstanceCount: {
      shape: {
        type: "integer"
      }
    },
    MinDuration: {
      shape: {
        type: "integer"
      }
    },
    OfferingClass: {
      shape: {
        type: "string"
      }
    },
    ProductDescription: {
      shape: {
        type: "string"
      }
    },
    ReservedInstancesOfferingIds: {
      shape: _ReservedInstancesOfferingIdStringList,
      locationName: "ReservedInstancesOfferingId"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    InstanceTenancy: {
      shape: {
        type: "string"
      },
      locationName: "instanceTenancy"
    },
    MaxResults: {
      shape: {
        type: "integer"
      },
      locationName: "maxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    OfferingType: {
      shape: {
        type: "string"
      },
      locationName: "offeringType"
    }
  }
};
