import { _HandshakeFilter } from "./_HandshakeFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListHandshakesForOrganizationInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filter: {
      shape: _HandshakeFilter
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
