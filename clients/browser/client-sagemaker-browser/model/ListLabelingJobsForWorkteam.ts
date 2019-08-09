import { ListLabelingJobsForWorkteamInput } from "./ListLabelingJobsForWorkteamInput";
import { ListLabelingJobsForWorkteamOutput } from "./ListLabelingJobsForWorkteamOutput";
import { ResourceNotFound } from "./ResourceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListLabelingJobsForWorkteam: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListLabelingJobsForWorkteam",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListLabelingJobsForWorkteamInput
  },
  output: {
    shape: ListLabelingJobsForWorkteamOutput
  },
  errors: [
    {
      shape: ResourceNotFound
    }
  ]
};
