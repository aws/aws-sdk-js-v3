import { _GroupVersion } from "./_GroupVersion";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGroupInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AmznClientToken: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "X-Amzn-Client-Token"
    },
    InitialVersion: {
      shape: _GroupVersion
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _Tags
    }
  }
};
