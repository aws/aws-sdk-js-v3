import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConferenceProviderInput: _Structure_ = {
  type: "structure",
  required: ["ConferenceProviderArn"],
  members: {
    ConferenceProviderArn: {
      shape: {
        type: "string"
      }
    }
  }
};
