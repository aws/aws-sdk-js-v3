import { _Content } from "./_Content";
import { _Body } from "./_Body";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Message: _Structure_ = {
  type: "structure",
  required: ["Subject", "Body"],
  members: {
    Subject: {
      shape: _Content
    },
    Body: {
      shape: _Body
    }
  }
};
