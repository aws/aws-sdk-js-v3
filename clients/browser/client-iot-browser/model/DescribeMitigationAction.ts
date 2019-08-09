import { DescribeMitigationActionInput } from "./DescribeMitigationActionInput";
import { DescribeMitigationActionOutput } from "./DescribeMitigationActionOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
