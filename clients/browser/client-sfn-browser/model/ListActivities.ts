import { ListActivitiesInput } from "./ListActivitiesInput";
import { ListActivitiesOutput } from "./ListActivitiesOutput";
import { InvalidToken } from "./InvalidToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListActivities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListActivities",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListActivitiesInput
  },
  output: {
    shape: ListActivitiesOutput
  },
  errors: [
    {
      shape: InvalidToken
    }
  ]
};
