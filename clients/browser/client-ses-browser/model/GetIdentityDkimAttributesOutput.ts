import { _DkimAttributes } from "./_DkimAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetIdentityDkimAttributesOutput: _Structure_ = {
  type: "structure",
  required: ["DkimAttributes"],
  members: {
    DkimAttributes: {
      shape: _DkimAttributes
    }
  }
};
