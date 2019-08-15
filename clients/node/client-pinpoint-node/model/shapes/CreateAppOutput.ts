import { _ApplicationResponse } from "./_ApplicationResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAppOutput: _Structure_ = {
  type: "structure",
  required: ["ApplicationResponse"],
  members: {
    ApplicationResponse: {
      shape: _ApplicationResponse
    }
  },
  payload: "ApplicationResponse"
};
