import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EgressEndpoint: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PackagingConfigurationId: {
      shape: {
        type: "string"
      },
      locationName: "packagingConfigurationId"
    },
    Url: {
      shape: {
        type: "string"
      },
      locationName: "url"
    }
  }
};
