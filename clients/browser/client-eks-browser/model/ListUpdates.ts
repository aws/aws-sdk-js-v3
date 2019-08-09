import { ListUpdatesInput } from "./ListUpdatesInput";
import { ListUpdatesOutput } from "./ListUpdatesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
