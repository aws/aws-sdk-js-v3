import { ListDatasetGroupsInput } from "../shapes/ListDatasetGroupsInput";
import { ListDatasetGroupsOutput } from "../shapes/ListDatasetGroupsOutput";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDatasetGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDatasetGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDatasetGroupsInput
  },
  output: {
    shape: ListDatasetGroupsOutput
  },
  errors: [
    {
      shape: InvalidNextTokenException
    }
  ]
};
