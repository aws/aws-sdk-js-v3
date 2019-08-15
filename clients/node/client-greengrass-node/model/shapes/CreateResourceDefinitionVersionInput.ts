import { ___listOfResource } from "./___listOfResource";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateResourceDefinitionVersionInput: _Structure_ = {
  type: "structure",
  required: ["ResourceDefinitionId"],
  members: {
    AmznClientToken: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "X-Amzn-Client-Token"
    },
    ResourceDefinitionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ResourceDefinitionId"
    },
    Resources: {
      shape: ___listOfResource
    }
  }
};
