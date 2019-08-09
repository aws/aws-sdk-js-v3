import { DiscoverPollEndpointInput } from "./DiscoverPollEndpointInput";
import { DiscoverPollEndpointOutput } from "./DiscoverPollEndpointOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DiscoverPollEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DiscoverPollEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DiscoverPollEndpointInput
  },
  output: {
    shape: DiscoverPollEndpointOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: ClientException
    }
  ]
};
