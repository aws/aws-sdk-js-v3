import { CreateProductInput } from "./CreateProductInput";
import { CreateProductOutput } from "./CreateProductOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { LimitExceededException } from "./LimitExceededException";
import { TagOptionNotMigratedException } from "./TagOptionNotMigratedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
