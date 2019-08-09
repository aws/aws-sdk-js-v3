import { DescribeSnapshotsInput } from "./DescribeSnapshotsInput";
import { DescribeSnapshotsOutput } from "./DescribeSnapshotsOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
