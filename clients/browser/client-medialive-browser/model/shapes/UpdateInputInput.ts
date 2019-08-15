import { ___listOfInputDestinationRequest } from "./___listOfInputDestinationRequest";
import { ___listOf__string } from "./___listOf__string";
import { ___listOfMediaConnectFlowRequest } from "./___listOfMediaConnectFlowRequest";
import { ___listOfInputSourceRequest } from "./___listOfInputSourceRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateInputInput: _Structure_ = {
  type: "structure",
  required: ["InputId"],
  members: {
    Destinations: {
      shape: ___listOfInputDestinationRequest,
      locationName: "destinations"
    },
    InputId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "inputId"
    },
    InputSecurityGroups: {
      shape: ___listOf__string,
      locationName: "inputSecurityGroups"
    },
    MediaConnectFlows: {
      shape: ___listOfMediaConnectFlowRequest,
      locationName: "mediaConnectFlows"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    RoleArn: {
      shape: {
        type: "string"
      },
      locationName: "roleArn"
    },
    Sources: {
      shape: ___listOfInputSourceRequest,
      locationName: "sources"
    }
  }
};
