import { _ListOfDomainName } from "./_ListOfDomainName";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDomainNamesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    position: {
      shape: {
        type: "string"
      }
    },
    items: {
      shape: _ListOfDomainName,
      locationName: "item"
    }
  }
};
