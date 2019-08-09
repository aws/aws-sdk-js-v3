import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBasePathMappingInput: _Structure_ = {
  type: "structure",
  required: ["domainName", "restApiId"],
  members: {
    domainName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "domain_name"
    },
    basePath: {
      shape: {
        type: "string"
      }
    },
    restApiId: {
      shape: {
        type: "string"
      }
    },
    stage: {
      shape: {
        type: "string"
      }
    }
  }
};
