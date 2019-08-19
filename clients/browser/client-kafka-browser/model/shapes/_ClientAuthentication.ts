import { _Tls } from "./_Tls";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClientAuthentication: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Tls: {
      shape: _Tls,
      locationName: "tls"
    }
  }
};
