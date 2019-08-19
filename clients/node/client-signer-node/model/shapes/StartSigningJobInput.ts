import { _Source } from "./_Source";
import { _Destination } from "./_Destination";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartSigningJobInput: _Structure_ = {
  type: "structure",
  required: ["source", "destination", "clientRequestToken"],
  members: {
    source: {
      shape: _Source
    },
    destination: {
      shape: _Destination
    },
    profileName: {
      shape: {
        type: "string",
        min: 2
      }
    },
    clientRequestToken: {
      shape: {
        type: "string"
      }
    }
  }
};
