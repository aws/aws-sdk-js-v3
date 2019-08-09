import { ListEventTrackersInput } from "./ListEventTrackersInput";
import { ListEventTrackersOutput } from "./ListEventTrackersOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListEventTrackers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListEventTrackers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListEventTrackersInput
  },
  output: {
    shape: ListEventTrackersOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
