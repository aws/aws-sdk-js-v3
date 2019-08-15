import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResourceRecordSetsInput: _Structure_ = {
  type: "structure",
  required: ["HostedZoneId"],
  members: {
    HostedZoneId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Id"
    },
    StartRecordName: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "name"
    },
    StartRecordType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "type"
    },
    StartRecordIdentifier: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "identifier"
    },
    MaxItems: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "maxitems"
    }
  }
};
