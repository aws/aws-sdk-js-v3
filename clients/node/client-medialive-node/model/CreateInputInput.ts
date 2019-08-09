import { ___listOfInputDestinationRequest } from "./___listOfInputDestinationRequest";
import { ___listOf__string } from "./___listOf__string";
import { ___listOfMediaConnectFlowRequest } from "./___listOfMediaConnectFlowRequest";
import { ___listOfInputSourceRequest } from "./___listOfInputSourceRequest";
import { _Tags } from "./_Tags";
import { _InputVpcRequest } from "./_InputVpcRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateInputInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Destinations: {
      shape: ___listOfInputDestinationRequest,
      locationName: "destinations"
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
    RequestId: {
      shape: {
        type: "string"
      },
      locationName: "requestId"
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
    },
    Tags: {
      shape: _Tags,
      locationName: "tags"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    },
    Vpc: {
      shape: _InputVpcRequest,
      locationName: "vpc"
    }
  }
};
