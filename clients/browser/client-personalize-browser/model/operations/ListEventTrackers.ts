import { ListEventTrackersInput } from "../shapes/ListEventTrackersInput";
import { ListEventTrackersOutput } from "../shapes/ListEventTrackersOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
