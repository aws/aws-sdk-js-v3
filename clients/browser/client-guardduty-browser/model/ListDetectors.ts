import { ListDetectorsInput } from "./ListDetectorsInput";
import { ListDetectorsOutput } from "./ListDetectorsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
