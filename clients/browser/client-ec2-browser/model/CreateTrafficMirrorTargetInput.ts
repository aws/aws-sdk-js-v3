import { _TagSpecificationList } from "./_TagSpecificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTrafficMirrorTargetInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkInterfaceId: {
      shape: {
        type: "string"
      }
    },
    NetworkLoadBalancerArn: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    TagSpecifications: {
      shape: _TagSpecificationList,
      locationName: "TagSpecification"
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    }
  }
};
