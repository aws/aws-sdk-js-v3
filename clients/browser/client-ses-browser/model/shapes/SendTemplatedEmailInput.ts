import { _Destination } from "./_Destination";
import { _AddressList } from "./_AddressList";
import { _MessageTagList } from "./_MessageTagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendTemplatedEmailInput: _Structure_ = {
  type: "structure",
  required: ["Source", "Destination", "Template", "TemplateData"],
  members: {
    Source: {
      shape: {
        type: "string"
      }
    },
    Destination: {
      shape: _Destination
    },
    ReplyToAddresses: {
      shape: _AddressList
    },
    ReturnPath: {
      shape: {
        type: "string"
      }
    },
    SourceArn: {
      shape: {
        type: "string"
      }
    },
    ReturnPathArn: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _MessageTagList
    },
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    },
    Template: {
      shape: {
        type: "string"
      }
    },
    TemplateArn: {
      shape: {
        type: "string"
      }
    },
    TemplateData: {
      shape: {
        type: "string"
      }
    }
  }
};
