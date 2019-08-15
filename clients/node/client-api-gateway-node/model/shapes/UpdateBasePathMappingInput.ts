import { _ListOfPatchOperation } from "./_ListOfPatchOperation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateBasePathMappingInput: _Structure_ = {
  type: "structure",
  required: ["domainName", "basePath"],
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
      },
      location: "uri",
      locationName: "base_path"
    },
    patchOperations: {
      shape: _ListOfPatchOperation
    }
  }
};
