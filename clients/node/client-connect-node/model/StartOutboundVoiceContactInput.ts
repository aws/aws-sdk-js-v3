import { _Attributes } from "./_Attributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartOutboundVoiceContactInput: _Structure_ = {
  type: "structure",
  required: ["DestinationPhoneNumber", "ContactFlowId", "InstanceId"],
  members: {
    DestinationPhoneNumber: {
      shape: {
        type: "string"
      }
    },
    ContactFlowId: {
      shape: {
        type: "string"
      }
    },
    InstanceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    },
    SourcePhoneNumber: {
      shape: {
        type: "string"
      }
    },
    QueueId: {
      shape: {
        type: "string"
      }
    },
    Attributes: {
      shape: _Attributes
    }
  }
};
