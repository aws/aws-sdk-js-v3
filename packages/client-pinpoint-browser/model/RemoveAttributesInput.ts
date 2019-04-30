import { _UpdateAttributesRequest } from "./_UpdateAttributesRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveAttributesInput: _Structure_ = {
  type: "structure",
  required: ["AttributeType", "ApplicationId", "UpdateAttributesRequest"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "application-id"
    },
    AttributeType: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "attribute-type"
    },
    UpdateAttributesRequest: {
      shape: _UpdateAttributesRequest
    }
  },
  payload: "UpdateAttributesRequest"
};
