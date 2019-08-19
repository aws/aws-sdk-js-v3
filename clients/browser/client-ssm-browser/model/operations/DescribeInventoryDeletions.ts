import { DescribeInventoryDeletionsInput } from "../shapes/DescribeInventoryDeletionsInput";
import { DescribeInventoryDeletionsOutput } from "../shapes/DescribeInventoryDeletionsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidDeletionIdException } from "../shapes/InvalidDeletionIdException";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeInventoryDeletions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeInventoryDeletions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeInventoryDeletionsInput
  },
  output: {
    shape: DescribeInventoryDeletionsOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidDeletionIdException
    },
    {
      shape: InvalidNextToken
    }
  ]
};
