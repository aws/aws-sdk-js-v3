import { GetConferencePreferenceInput } from "../shapes/GetConferencePreferenceInput";
import { GetConferencePreferenceOutput } from "../shapes/GetConferencePreferenceOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
