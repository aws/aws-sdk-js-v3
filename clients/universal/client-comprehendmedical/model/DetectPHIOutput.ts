import { _EntityList } from "./_EntityList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectPHIOutput: _Structure_ = {
  type: "structure",
  required: ["Entities"],
  members: {
    Entities: {
      shape: _EntityList
    },
    PaginationToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
