import { _RawEmail } from "./_RawEmail";
import { _ListOf__string } from "./_ListOf__string";
import { _SimpleEmail } from "./_SimpleEmail";
import { _MapOfListOf__string } from "./_MapOfListOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EmailMessage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Body: {
      shape: {
        type: "string"
      }
    },
    FeedbackForwardingAddress: {
      shape: {
        type: "string"
      }
    },
    FromAddress: {
      shape: {
        type: "string"
      }
    },
    RawEmail: {
      shape: _RawEmail
    },
    ReplyToAddresses: {
      shape: _ListOf__string
    },
    SimpleEmail: {
      shape: _SimpleEmail
    },
    Substitutions: {
      shape: _MapOfListOf__string
    }
  }
};
