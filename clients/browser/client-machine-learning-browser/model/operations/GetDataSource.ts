import { GetDataSourceInput } from "../shapes/GetDataSourceInput";
import { GetDataSourceOutput } from "../shapes/GetDataSourceOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDataSource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDataSource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDataSourceInput
  },
  output: {
    shape: GetDataSourceOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerException
    }
  ]
};
