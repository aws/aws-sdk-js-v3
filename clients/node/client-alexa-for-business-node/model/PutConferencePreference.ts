import { PutConferencePreferenceInput } from "./PutConferencePreferenceInput";
import { PutConferencePreferenceOutput } from "./PutConferencePreferenceOutput";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
