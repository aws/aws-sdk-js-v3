import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListQueryLoggingConfigsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HostedZoneId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "hostedzoneid"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nexttoken"
    },
    MaxResults: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "maxresults"
    }
  }
};
