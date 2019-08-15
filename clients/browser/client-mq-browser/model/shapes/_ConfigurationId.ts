import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConfigurationId: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      },
      locationName: "id"
    },
    Revision: {
      shape: {
        type: "integer"
      },
      locationName: "revision"
    }
  }
};
