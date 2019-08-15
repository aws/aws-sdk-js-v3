import { ListCompatibleImagesInput } from "../shapes/ListCompatibleImagesInput";
import { ListCompatibleImagesOutput } from "../shapes/ListCompatibleImagesOutput";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { Ec2RequestFailedException } from "../shapes/Ec2RequestFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListCompatibleImages: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCompatibleImages",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListCompatibleImagesInput
  },
  output: {
    shape: ListCompatibleImagesOutput
  },
  errors: [
    {
      shape: InvalidNextTokenException
    },
    {
      shape: Ec2RequestFailedException
    }
  ]
};
