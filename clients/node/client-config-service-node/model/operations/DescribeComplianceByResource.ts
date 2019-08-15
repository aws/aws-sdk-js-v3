import { DescribeComplianceByResourceInput } from "../shapes/DescribeComplianceByResourceInput";
import { DescribeComplianceByResourceOutput } from "../shapes/DescribeComplianceByResourceOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeComplianceByResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeComplianceByResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeComplianceByResourceInput
  },
  output: {
    shape: DescribeComplianceByResourceOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
