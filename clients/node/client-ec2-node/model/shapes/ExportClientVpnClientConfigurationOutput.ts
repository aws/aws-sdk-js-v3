import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExportClientVpnClientConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientConfiguration: {
      shape: {
        type: "string"
      },
      locationName: "clientConfiguration"
    }
  }
};
