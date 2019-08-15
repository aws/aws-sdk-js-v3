import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateVPCEConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["arn"],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    vpceConfigurationName: {
      shape: {
        type: "string"
      }
    },
    vpceServiceName: {
      shape: {
        type: "string"
      }
    },
    serviceDnsName: {
      shape: {
        type: "string"
      }
    },
    vpceConfigurationDescription: {
      shape: {
        type: "string"
      }
    }
  }
};
