import { _ProjectCacheModes } from "./_ProjectCacheModes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProjectCache: _Structure_ = {
  type: "structure",
  required: ["type"],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    location: {
      shape: {
        type: "string"
      }
    },
    modes: {
      shape: _ProjectCacheModes
    }
  }
};
