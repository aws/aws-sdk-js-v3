import { GetJobManifestInput } from "../shapes/GetJobManifestInput";
import { GetJobManifestOutput } from "../shapes/GetJobManifestOutput";
import { InvalidResourceException } from "../shapes/InvalidResourceException";
import { InvalidJobStateException } from "../shapes/InvalidJobStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetJobManifest: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetJobManifest",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetJobManifestInput
  },
  output: {
    shape: GetJobManifestOutput
  },
  errors: [
    {
      shape: InvalidResourceException
    },
    {
      shape: InvalidJobStateException
    }
  ]
};
