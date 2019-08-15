import { _KinesisStreamSourceConfiguration } from "./_KinesisStreamSourceConfiguration";
import { _S3DestinationConfiguration } from "./_S3DestinationConfiguration";
import { _ExtendedS3DestinationConfiguration } from "./_ExtendedS3DestinationConfiguration";
import { _RedshiftDestinationConfiguration } from "./_RedshiftDestinationConfiguration";
import { _ElasticsearchDestinationConfiguration } from "./_ElasticsearchDestinationConfiguration";
import { _SplunkDestinationConfiguration } from "./_SplunkDestinationConfiguration";
import { _TagDeliveryStreamInputTagList } from "./_TagDeliveryStreamInputTagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDeliveryStreamInput: _Structure_ = {
  type: "structure",
  required: ["DeliveryStreamName"],
  members: {
    DeliveryStreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DeliveryStreamType: {
      shape: {
        type: "string"
      }
    },
    KinesisStreamSourceConfiguration: {
      shape: _KinesisStreamSourceConfiguration
    },
    S3DestinationConfiguration: {
      shape: _S3DestinationConfiguration
    },
    ExtendedS3DestinationConfiguration: {
      shape: _ExtendedS3DestinationConfiguration
    },
    RedshiftDestinationConfiguration: {
      shape: _RedshiftDestinationConfiguration
    },
    ElasticsearchDestinationConfiguration: {
      shape: _ElasticsearchDestinationConfiguration
    },
    SplunkDestinationConfiguration: {
      shape: _SplunkDestinationConfiguration
    },
    Tags: {
      shape: _TagDeliveryStreamInputTagList
    }
  }
};
