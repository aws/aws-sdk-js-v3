import { GetJobManifestInput } from "./GetJobManifestInput";
import { GetJobManifestOutput } from "./GetJobManifestOutput";
import { InvalidResourceException } from "./InvalidResourceException";
import { InvalidJobStateException } from "./InvalidJobStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
