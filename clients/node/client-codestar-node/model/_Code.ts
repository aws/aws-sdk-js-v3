import { _CodeSource } from "./_CodeSource";
import { _CodeDestination } from "./_CodeDestination";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Code: _Structure_ = {
  type: "structure",
  required: ["source", "destination"],
  members: {
    source: {
      shape: _CodeSource
    },
    destination: {
      shape: _CodeDestination
    }
  }
};
