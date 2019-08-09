import { _ConfigurationList } from "./_ConfigurationList";
import { _EbsBlockDeviceList } from "./_EbsBlockDeviceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceTypeSpecification: _Structure_ = {
  type: "structure",
  required: [],
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
    Configurations: {
      shape: _ConfigurationList
    },
    EbsBlockDevices: {
      shape: _EbsBlockDeviceList
    },
    EbsOptimized: {
      shape: {
        type: "boolean"
      }
    }
  }
};
