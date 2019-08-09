import { DescribeInventoryDeletionsInput } from "./DescribeInventoryDeletionsInput";
import { DescribeInventoryDeletionsOutput } from "./DescribeInventoryDeletionsOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidDeletionIdException } from "./InvalidDeletionIdException";
import { InvalidNextToken } from "./InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
