import { StartReplicationTaskAssessmentInput } from "../shapes/StartReplicationTaskAssessmentInput";
import { StartReplicationTaskAssessmentOutput } from "../shapes/StartReplicationTaskAssessmentOutput";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartReplicationTaskAssessment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartReplicationTaskAssessment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartReplicationTaskAssessmentInput
  },
  output: {
    shape: StartReplicationTaskAssessmentOutput
  },
  errors: [
    {
      shape: InvalidResourceStateFault
    },
    {
      shape: ResourceNotFoundFault
    }
  ]
};
