import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationId"],
  members: {
    ConfigurationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "configuration-id"
    },
    Data: {
      shape: {
        type: "string"
      },
      locationName: "data"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    }
  }
};
