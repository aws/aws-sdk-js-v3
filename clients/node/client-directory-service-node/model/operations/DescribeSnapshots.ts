import { DescribeSnapshotsInput } from "../shapes/DescribeSnapshotsInput";
import { DescribeSnapshotsOutput } from "../shapes/DescribeSnapshotsOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSnapshots: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSnapshots",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSnapshotsInput
  },
  output: {
    shape: DescribeSnapshotsOutput
  },
  errors: [
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
