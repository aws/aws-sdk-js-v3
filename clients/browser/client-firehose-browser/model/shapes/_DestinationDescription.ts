import { _S3DestinationDescription } from "./_S3DestinationDescription";
import { _ExtendedS3DestinationDescription } from "./_ExtendedS3DestinationDescription";
import { _RedshiftDestinationDescription } from "./_RedshiftDestinationDescription";
import { _ElasticsearchDestinationDescription } from "./_ElasticsearchDestinationDescription";
import { _SplunkDestinationDescription } from "./_SplunkDestinationDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DestinationDescription: _Structure_ = {
  type: "structure",
  required: ["DestinationId"],
  members: {
    DestinationId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    S3DestinationDescription: {
      shape: _S3DestinationDescription
    },
    ExtendedS3DestinationDescription: {
      shape: _ExtendedS3DestinationDescription
    },
    RedshiftDestinationDescription: {
      shape: _RedshiftDestinationDescription
    },
    ElasticsearchDestinationDescription: {
      shape: _ElasticsearchDestinationDescription
    },
    SplunkDestinationDescription: {
      shape: _SplunkDestinationDescription
    }
  }
};
