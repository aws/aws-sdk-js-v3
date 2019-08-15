import { PutConferencePreferenceInput } from "../shapes/PutConferencePreferenceInput";
import { PutConferencePreferenceOutput } from "../shapes/PutConferencePreferenceOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutConferencePreference: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutConferencePreference",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutConferencePreferenceInput
  },
  output: {
    shape: PutConferencePreferenceOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
