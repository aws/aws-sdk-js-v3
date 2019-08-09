import { RebootReplicationInstanceInput } from "./RebootReplicationInstanceInput";
import { RebootReplicationInstanceOutput } from "./RebootReplicationInstanceOutput";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RebootReplicationInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RebootReplicationInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RebootReplicationInstanceInput
  },
  output: {
    shape: RebootReplicationInstanceOutput
  },
  errors: [
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: InvalidResourceStateFault
    }
  ]
};
