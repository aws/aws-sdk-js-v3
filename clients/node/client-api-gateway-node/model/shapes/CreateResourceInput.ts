import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateResourceInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "parentId", "pathPart"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    parentId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "parent_id"
    },
    pathPart: {
      shape: {
        type: "string"
      }
    }
  }
};
