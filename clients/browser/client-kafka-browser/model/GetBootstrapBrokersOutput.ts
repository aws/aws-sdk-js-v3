import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBootstrapBrokersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BootstrapBrokerString: {
      shape: {
        type: "string"
      },
      locationName: "bootstrapBrokerString"
    },
    BootstrapBrokerStringTls: {
      shape: {
        type: "string"
      },
      locationName: "bootstrapBrokerStringTls"
    }
  }
};
