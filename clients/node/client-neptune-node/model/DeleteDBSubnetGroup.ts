import { DeleteDBSubnetGroupInput } from "./DeleteDBSubnetGroupInput";
import { DeleteDBSubnetGroupOutput } from "./DeleteDBSubnetGroupOutput";
import { InvalidDBSubnetGroupStateFault } from "./InvalidDBSubnetGroupStateFault";
import { InvalidDBSubnetStateFault } from "./InvalidDBSubnetStateFault";
import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
