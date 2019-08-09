import { DeleteElasticsearchServiceRoleInput } from "./DeleteElasticsearchServiceRoleInput";
import { DeleteElasticsearchServiceRoleOutput } from "./DeleteElasticsearchServiceRoleOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
