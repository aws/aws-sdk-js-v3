import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVpcInput: _Structure_ = {
  type: "structure",
  required: ["CidrBlock"],
  members: {
    CidrBlock: {
      shape: {
        type: "string"
      }
    },
    AmazonProvidedIpv6CidrBlock: {
      shape: {
        type: "boolean"
      },
      locationName: "amazonProvidedIpv6CidrBlock"
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
    }
  }
};
