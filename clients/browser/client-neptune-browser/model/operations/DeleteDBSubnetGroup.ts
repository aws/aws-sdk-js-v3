import { DeleteDBSubnetGroupInput } from "../shapes/DeleteDBSubnetGroupInput";
import { DeleteDBSubnetGroupOutput } from "../shapes/DeleteDBSubnetGroupOutput";
import { InvalidDBSubnetGroupStateFault } from "../shapes/InvalidDBSubnetGroupStateFault";
import { InvalidDBSubnetStateFault } from "../shapes/InvalidDBSubnetStateFault";
import { DBSubnetGroupNotFoundFault } from "../shapes/DBSubnetGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDBSubnetGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDBSubnetGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDBSubnetGroupInput
  },
  output: {
    shape: DeleteDBSubnetGroupOutput
  },
  errors: [
    {
      shape: InvalidDBSubnetGroupStateFault
    },
    {
      shape: InvalidDBSubnetStateFault
    },
    {
      shape: DBSubnetGroupNotFoundFault
    }
  ]
};
