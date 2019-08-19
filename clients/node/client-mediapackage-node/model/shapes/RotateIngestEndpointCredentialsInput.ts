import { Structure as _Structure_ } from "@aws-sdk/types";

export const RotateIngestEndpointCredentialsInput: _Structure_ = {
  type: "structure",
  required: ["IngestEndpointId", "Id"],
  members: {
    Id: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "id"
    },
    IngestEndpointId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ingest_endpoint_id"
    }
  }
};
