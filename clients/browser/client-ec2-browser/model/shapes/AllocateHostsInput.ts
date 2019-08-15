import { _TagSpecificationList } from "./_TagSpecificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AllocateHostsInput: _Structure_ = {
  type: "structure",
  required: ["AvailabilityZone", "InstanceType", "Quantity"],
  members: {
    AutoPlacement: {
      shape: {
        type: "string"
      },
      locationName: "autoPlacement"
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    },
    InstanceType: {
      shape: {
        type: "string"
      },
      locationName: "instanceType"
    },
    Quantity: {
      shape: {
        type: "integer"
      },
      locationName: "quantity"
    },
    TagSpecifications: {
      shape: _TagSpecificationList,
      locationName: "TagSpecification"
    },
    HostRecovery: {
      shape: {
        type: "string"
      }
    }
  }
};
