import { ListUpdatesInput } from "../shapes/ListUpdatesInput";
import { ListUpdatesOutput } from "../shapes/ListUpdatesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListUpdates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListUpdates",
  http: {
    method: "GET",
    requestUri: "/clusters/{name}/updates"
  },
  input: {
    shape: ListUpdatesInput
  },
  output: {
    shape: ListUpdatesOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ClientException
    },
    {
      shape: ServerException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
