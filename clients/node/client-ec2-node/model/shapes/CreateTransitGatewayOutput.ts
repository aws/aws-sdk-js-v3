import { _TransitGateway } from "./_TransitGateway";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTransitGatewayOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TransitGateway: {
      shape: _TransitGateway,
      locationName: "transitGateway"
    }
  }
};
