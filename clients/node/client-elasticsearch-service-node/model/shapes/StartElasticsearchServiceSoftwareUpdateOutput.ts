import { _ServiceSoftwareOptions } from "./_ServiceSoftwareOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartElasticsearchServiceSoftwareUpdateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceSoftwareOptions: {
      shape: _ServiceSoftwareOptions
    }
  }
};
