import { DescribeProvisioningArtifactInput } from "./DescribeProvisioningArtifactInput";
import { DescribeProvisioningArtifactOutput } from "./DescribeProvisioningArtifactOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeProvisioningArtifact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeProvisioningArtifact",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeProvisioningArtifactInput
  },
  output: {
    shape: DescribeProvisioningArtifactOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
