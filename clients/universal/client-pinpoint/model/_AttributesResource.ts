import { _ListOf__string } from "./_ListOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttributesResource: _Structure_ = {
  type: "structure",
  required: ["AttributeType", "ApplicationId"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      }
    },
    AttributeType: {
      shape: {
        type: "string"
      }
    },
    Attributes: {
      shape: _ListOf__string
    }
  }
};
