import { _ListOfGatewayResponse } from "./_ListOfGatewayResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetGatewayResponsesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    position: {
      shape: {
        type: "string"
      }
    },
    items: {
      shape: _ListOfGatewayResponse,
      locationName: "item"
    }
  }
};
