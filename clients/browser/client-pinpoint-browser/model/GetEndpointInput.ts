import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetEndpointInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "EndpointId"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "application-id"
    },
    EndpointId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "endpoint-id"
    }
  }
};
