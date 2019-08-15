import { CreateProductInput } from "../shapes/CreateProductInput";
import { CreateProductOutput } from "../shapes/CreateProductOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { TagOptionNotMigratedException } from "../shapes/TagOptionNotMigratedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateProduct: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateProduct",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateProductInput
  },
  output: {
    shape: CreateProductOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: TagOptionNotMigratedException
    }
  ]
};
