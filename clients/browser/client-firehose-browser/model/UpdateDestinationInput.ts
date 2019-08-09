import { _S3DestinationUpdate } from "./_S3DestinationUpdate";
import { _ExtendedS3DestinationUpdate } from "./_ExtendedS3DestinationUpdate";
import { _RedshiftDestinationUpdate } from "./_RedshiftDestinationUpdate";
import { _ElasticsearchDestinationUpdate } from "./_ElasticsearchDestinationUpdate";
import { _SplunkDestinationUpdate } from "./_SplunkDestinationUpdate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDestinationInput: _Structure_ = {
  type: "structure",
  required: [
    "DeliveryStreamName",
    "CurrentDeliveryStreamVersionId",
    "DestinationId"
  ],
  members: {
    DeliveryStreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CurrentDeliveryStreamVersionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DestinationId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    S3DestinationUpdate: {
      shape: _S3DestinationUpdate
    },
    ExtendedS3DestinationUpdate: {
      shape: _ExtendedS3DestinationUpdate
    },
    RedshiftDestinationUpdate: {
      shape: _RedshiftDestinationUpdate
    },
    ElasticsearchDestinationUpdate: {
      shape: _ElasticsearchDestinationUpdate
    },
    SplunkDestinationUpdate: {
      shape: _SplunkDestinationUpdate
    }
  }
};
