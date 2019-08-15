import { DescribeEffectiveInstanceAssociationsInput } from "../shapes/DescribeEffectiveInstanceAssociationsInput";
import { DescribeEffectiveInstanceAssociationsOutput } from "../shapes/DescribeEffectiveInstanceAssociationsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidInstanceId } from "../shapes/InvalidInstanceId";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEffectiveInstanceAssociations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEffectiveInstanceAssociations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEffectiveInstanceAssociationsInput
  },
  output: {
    shape: DescribeEffectiveInstanceAssociationsOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidInstanceId
    },
    {
      shape: InvalidNextToken
    }
  ]
};
