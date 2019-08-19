import { SearchRoomsInput } from "../shapes/SearchRoomsInput";
import { SearchRoomsOutput } from "../shapes/SearchRoomsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SearchRooms: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchRooms",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchRoomsInput
  },
  output: {
    shape: SearchRoomsOutput
  },
  errors: []
};
