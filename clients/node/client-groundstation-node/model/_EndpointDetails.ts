import { _DataflowEndpoint } from "./_DataflowEndpoint";
import { _SecurityDetails } from "./_SecurityDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EndpointDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    endpoint: {
      shape: _DataflowEndpoint
    },
    securityDetails: {
      shape: _SecurityDetails
    }
  }
};
