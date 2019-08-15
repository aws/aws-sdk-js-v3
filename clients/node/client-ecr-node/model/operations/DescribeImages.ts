import { DescribeImagesInput } from "../shapes/DescribeImagesInput";
import { DescribeImagesOutput } from "../shapes/DescribeImagesOutput";
import { ServerException } from "../shapes/ServerException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { RepositoryNotFoundException } from "../shapes/RepositoryNotFoundException";
import { ImageNotFoundException } from "../shapes/ImageNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeImages: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeImages",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeImagesInput
  },
  output: {
    shape: DescribeImagesOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: RepositoryNotFoundException
    },
    {
      shape: ImageNotFoundException
    }
  ]
};
