import { _ListOfPatchOperation } from "./_ListOfPatchOperation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDomainNameInput: _Structure_ = {
  type: "structure",
  required: ["domainName"],
  members: {
    domainName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "domain_name"
    },
    patchOperations: {
      shape: _ListOfPatchOperation
    }
  }
};
