import { _TopicConfigurationList } from "./_TopicConfigurationList";
import { _QueueConfigurationList } from "./_QueueConfigurationList";
import { _LambdaFunctionConfigurationList } from "./_LambdaFunctionConfigurationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBucketNotificationConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TopicConfigurations: {
      shape: _TopicConfigurationList,
      locationName: "TopicConfiguration"
    },
    QueueConfigurations: {
      shape: _QueueConfigurationList,
      locationName: "QueueConfiguration"
    },
    LambdaFunctionConfigurations: {
      shape: _LambdaFunctionConfigurationList,
      locationName: "CloudFunctionConfiguration"
    }
  }
};
