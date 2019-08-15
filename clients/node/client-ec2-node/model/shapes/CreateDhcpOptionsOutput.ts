import { _DhcpOptions } from "./_DhcpOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDhcpOptionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DhcpOptions: {
      shape: _DhcpOptions,
      locationName: "dhcpOptions"
    }
  }
};
