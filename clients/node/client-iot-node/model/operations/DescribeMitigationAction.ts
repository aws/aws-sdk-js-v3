import { DescribeMitigationActionInput } from "../shapes/DescribeMitigationActionInput";
import { DescribeMitigationActionOutput } from "../shapes/DescribeMitigationActionOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeMitigationAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMitigationAction",
  http: {
    method: "GET",
    requestUri: "/mitigationactions/actions/{actionName}"
  },
  input: {
    shape: DescribeMitigationActionInput
  },
  output: {
    shape: DescribeMitigationActionOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
