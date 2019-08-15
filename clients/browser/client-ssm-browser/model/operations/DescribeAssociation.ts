import { DescribeAssociationInput } from "../shapes/DescribeAssociationInput";
import { DescribeAssociationOutput } from "../shapes/DescribeAssociationOutput";
import { AssociationDoesNotExist } from "../shapes/AssociationDoesNotExist";
import { InvalidAssociationVersion } from "../shapes/InvalidAssociationVersion";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidDocument } from "../shapes/InvalidDocument";
import { InvalidInstanceId } from "../shapes/InvalidInstanceId";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAssociation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAssociation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAssociationInput
  },
  output: {
    shape: DescribeAssociationOutput
  },
  errors: [
    {
      shape: AssociationDoesNotExist
    },
    {
      shape: InvalidAssociationVersion
    },
    {
      shape: InternalServerError
    },
    {
      shape: InvalidDocument
    },
    {
      shape: InvalidInstanceId
    }
  ]
};
