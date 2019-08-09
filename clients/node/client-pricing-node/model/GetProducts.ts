import { GetProductsInput } from "./GetProductsInput";
import { GetProductsOutput } from "./GetProductsOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ExpiredNextTokenException } from "./ExpiredNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetProducts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetProducts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetProductsInput
  },
  output: {
    shape: GetProductsOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ExpiredNextTokenException
    }
  ]
};
