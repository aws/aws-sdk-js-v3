import { ___listOfIngestEndpoint } from "./___listOfIngestEndpoint";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsIngest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IngestEndpoints: {
      shape: ___listOfIngestEndpoint,
      locationName: "ingestEndpoints"
    }
  }
};
