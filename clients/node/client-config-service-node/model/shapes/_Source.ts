import { _SourceDetails } from "./_SourceDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Source: _Structure_ = {
  type: "structure",
  required: ["Owner", "SourceIdentifier"],
  members: {
    Owner: {
      shape: {
        type: "string"
      }
    },
    SourceIdentifier: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SourceDetails: {
      shape: _SourceDetails
    }
  }
};
