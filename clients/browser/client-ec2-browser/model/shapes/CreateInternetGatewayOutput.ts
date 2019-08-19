import { _InternetGateway } from "./_InternetGateway";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateInternetGatewayOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InternetGateway: {
      shape: _InternetGateway,
      locationName: "internetGateway"
    }
  }
};
