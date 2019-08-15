import { _EbsConfiguration } from "./_EbsConfiguration";
import { _ConfigurationList } from "./_ConfigurationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceTypeConfig: _Structure_ = {
  type: "structure",
  required: ["InstanceType"],
  members: {
    InstanceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    WeightedCapacity: {
      shape: {
        type: "integer"
      }
    },
    BidPrice: {
      shape: {
        type: "string"
      }
    },
    BidPriceAsPercentageOfOnDemandPrice: {
      shape: {
        type: "float"
      }
    },
    EbsConfiguration: {
      shape: _EbsConfiguration
    },
    Configurations: {
      shape: _ConfigurationList
    }
  }
};
