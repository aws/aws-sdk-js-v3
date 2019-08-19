import { ListComplianceItemsInput } from "../shapes/ListComplianceItemsInput";
import { ListComplianceItemsOutput } from "../shapes/ListComplianceItemsOutput";
import { InvalidResourceType } from "../shapes/InvalidResourceType";
import { InvalidResourceId } from "../shapes/InvalidResourceId";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidFilter } from "../shapes/InvalidFilter";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
