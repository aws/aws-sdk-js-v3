import { GetProductsInput } from "../shapes/GetProductsInput";
import { GetProductsOutput } from "../shapes/GetProductsOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ExpiredNextTokenException } from "../shapes/ExpiredNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
