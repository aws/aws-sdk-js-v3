import { DescribeContinuousBackupsInput } from "../shapes/DescribeContinuousBackupsInput";
import { DescribeContinuousBackupsOutput } from "../shapes/DescribeContinuousBackupsOutput";
import { TableNotFoundException } from "../shapes/TableNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeContinuousBackups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeContinuousBackups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeContinuousBackupsInput
  },
  output: {
    shape: DescribeContinuousBackupsOutput
  },
  errors: [
    {
      shape: TableNotFoundException
    },
    {
      shape: InternalServerError
    }
  ]
};
