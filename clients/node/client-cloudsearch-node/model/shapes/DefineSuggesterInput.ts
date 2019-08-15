import { _Suggester } from "./_Suggester";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DefineSuggesterInput: _Structure_ = {
  type: "structure",
  required: ["DomainName", "Suggester"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    Suggester: {
      shape: _Suggester
    }
  }
};
