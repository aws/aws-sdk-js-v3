import { DescribeAssociationInput } from "./DescribeAssociationInput";
import { DescribeAssociationOutput } from "./DescribeAssociationOutput";
import { AssociationDoesNotExist } from "./AssociationDoesNotExist";
import { InvalidAssociationVersion } from "./InvalidAssociationVersion";
import { InternalServerError } from "./InternalServerError";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
