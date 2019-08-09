import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSubnetInput: _Structure_ = {
  type: "structure",
  required: ["CidrBlock", "VpcId"],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZoneId: {
      shape: {
        type: "string"
      }
    },
    CidrBlock: {
      shape: {
        type: "string"
      }
    },
    Ipv6CidrBlock: {
      shape: {
        type: "string"
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
