import { _IotEventsDestinationConfiguration } from "./_IotEventsDestinationConfiguration";
import { _S3DestinationConfiguration } from "./_S3DestinationConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DatasetContentDeliveryDestination: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    iotEventsDestinationConfiguration: {
      shape: _IotEventsDestinationConfiguration
    },
    s3DestinationConfiguration: {
      shape: _S3DestinationConfiguration
    }
  }
};
