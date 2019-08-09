import { GetTrailStatusInput } from "./GetTrailStatusInput";
import { GetTrailStatusOutput } from "./GetTrailStatusOutput";
import { TrailNotFoundException } from "./TrailNotFoundException";
import { InvalidTrailNameException } from "./InvalidTrailNameException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetTrailStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTrailStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTrailStatusInput
  },
  output: {
    shape: GetTrailStatusOutput
  },
  errors: [
    {
      shape: TrailNotFoundException
    },
    {
      shape: InvalidTrailNameException
    }
  ]
};
