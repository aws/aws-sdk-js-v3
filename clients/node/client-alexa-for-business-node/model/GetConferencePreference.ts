import { GetConferencePreferenceInput } from "./GetConferencePreferenceInput";
import { GetConferencePreferenceOutput } from "./GetConferencePreferenceOutput";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetConferencePreference: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetConferencePreference",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetConferencePreferenceInput
  },
  output: {
    shape: GetConferencePreferenceOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
