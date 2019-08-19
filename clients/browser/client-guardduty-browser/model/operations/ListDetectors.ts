import { ListDetectorsInput } from "../shapes/ListDetectorsInput";
import { ListDetectorsOutput } from "../shapes/ListDetectorsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDetectors: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDetectors",
  http: {
    method: "GET",
    requestUri: "/detector"
  },
  input: {
    shape: ListDetectorsInput
  },
  output: {
    shape: ListDetectorsOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    }
  ]
};
