import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDomainInput: _Structure_ = {
  type: "structure",
  required: ["domainName"],
  members: {
    domainName: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
