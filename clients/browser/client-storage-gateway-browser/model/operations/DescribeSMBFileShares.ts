import { DescribeSMBFileSharesInput } from "../shapes/DescribeSMBFileSharesInput";
import { DescribeSMBFileSharesOutput } from "../shapes/DescribeSMBFileSharesOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSMBFileShares: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSMBFileShares",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSMBFileSharesInput
  },
  output: {
    shape: DescribeSMBFileSharesOutput
  },
  errors: [
    {
      shape: InvalidGatewayRequestException
    },
    {
      shape: InternalServerError
    }
  ]
};
