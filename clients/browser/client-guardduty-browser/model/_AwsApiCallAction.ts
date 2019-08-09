import { _DomainDetails } from "./_DomainDetails";
import { _RemoteIpDetails } from "./_RemoteIpDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AwsApiCallAction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Api: {
      shape: {
        type: "string"
      },
      locationName: "api"
    },
    CallerType: {
      shape: {
        type: "string"
      },
      locationName: "callerType"
    },
    DomainDetails: {
      shape: _DomainDetails,
      locationName: "domainDetails"
    },
    RemoteIpDetails: {
      shape: _RemoteIpDetails,
      locationName: "remoteIpDetails"
    },
    ServiceName: {
      shape: {
        type: "string"
      },
      locationName: "serviceName"
    }
  }
};
