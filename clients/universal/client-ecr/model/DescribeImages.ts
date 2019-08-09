import { DescribeImagesInput } from "./DescribeImagesInput";
import { DescribeImagesOutput } from "./DescribeImagesOutput";
import { ServerException } from "./ServerException";
import { InvalidParameterException } from "./InvalidParameterException";
import { RepositoryNotFoundException } from "./RepositoryNotFoundException";
import { ImageNotFoundException } from "./ImageNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
