import { _StandardNameList } from "./_StandardNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSuggestersInput: _Structure_ = {
  type: "structure",
  required: ["DomainName"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    SuggesterNames: {
      shape: _StandardNameList
    },
    Deployed: {
      shape: {
        type: "boolean"
      }
    }
  }
};
