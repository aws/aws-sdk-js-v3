import { DeleteElasticsearchServiceRoleInput } from "../shapes/DeleteElasticsearchServiceRoleInput";
import { DeleteElasticsearchServiceRoleOutput } from "../shapes/DeleteElasticsearchServiceRoleOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteElasticsearchServiceRole: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteElasticsearchServiceRole",
  http: {
    method: "DELETE",
    requestUri: "/2015-01-01/es/role"
  },
  input: {
    shape: DeleteElasticsearchServiceRoleInput
  },
  output: {
    shape: DeleteElasticsearchServiceRoleOutput
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: ValidationException
    }
  ]
};
