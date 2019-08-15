import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVPCEConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["vpceConfigurationName", "vpceServiceName", "serviceDnsName"],
  members: {
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
