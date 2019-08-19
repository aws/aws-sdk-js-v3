import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRelationalDatabaseLogStreamsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    logStreams: {
      shape: _StringList
    }
  }
};
