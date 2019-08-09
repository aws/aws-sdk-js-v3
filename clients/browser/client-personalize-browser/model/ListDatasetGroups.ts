import { ListDatasetGroupsInput } from "./ListDatasetGroupsInput";
import { ListDatasetGroupsOutput } from "./ListDatasetGroupsOutput";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
