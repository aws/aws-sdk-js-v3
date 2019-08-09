import { ListComplianceItemsInput } from "./ListComplianceItemsInput";
import { ListComplianceItemsOutput } from "./ListComplianceItemsOutput";
import { InvalidResourceType } from "./InvalidResourceType";
import { InvalidResourceId } from "./InvalidResourceId";
import { InternalServerError } from "./InternalServerError";
import { InvalidFilter } from "./InvalidFilter";
import { InvalidNextToken } from "./InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListComplianceItems: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListComplianceItems",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListComplianceItemsInput
  },
  output: {
    shape: ListComplianceItemsOutput
  },
  errors: [
    {
      shape: InvalidResourceType
    },
    {
      shape: InvalidResourceId
    },
    {
      shape: InternalServerError
    },
    {
      shape: InvalidFilter
    },
    {
      shape: InvalidNextToken
    }
  ]
};
