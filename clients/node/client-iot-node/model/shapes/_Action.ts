import { _DynamoDBAction } from "./_DynamoDBAction";
import { _DynamoDBv2Action } from "./_DynamoDBv2Action";
import { _LambdaAction } from "./_LambdaAction";
import { _SnsAction } from "./_SnsAction";
import { _SqsAction } from "./_SqsAction";
import { _KinesisAction } from "./_KinesisAction";
import { _RepublishAction } from "./_RepublishAction";
import { _S3Action } from "./_S3Action";
import { _FirehoseAction } from "./_FirehoseAction";
import { _CloudwatchMetricAction } from "./_CloudwatchMetricAction";
import { _CloudwatchAlarmAction } from "./_CloudwatchAlarmAction";
import { _ElasticsearchAction } from "./_ElasticsearchAction";
import { _SalesforceAction } from "./_SalesforceAction";
import { _IotAnalyticsAction } from "./_IotAnalyticsAction";
import { _IotEventsAction } from "./_IotEventsAction";
import { _StepFunctionsAction } from "./_StepFunctionsAction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Action: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    dynamoDB: {
      shape: _DynamoDBAction
    },
    dynamoDBv2: {
      shape: _DynamoDBv2Action
    },
    lambda: {
      shape: _LambdaAction
    },
    sns: {
      shape: _SnsAction
    },
    sqs: {
      shape: _SqsAction
    },
    kinesis: {
      shape: _KinesisAction
    },
    republish: {
      shape: _RepublishAction
    },
    s3: {
      shape: _S3Action
    },
    firehose: {
      shape: _FirehoseAction
    },
    cloudwatchMetric: {
      shape: _CloudwatchMetricAction
    },
    cloudwatchAlarm: {
      shape: _CloudwatchAlarmAction
    },
    elasticsearch: {
      shape: _ElasticsearchAction
    },
    salesforce: {
      shape: _SalesforceAction
    },
    iotAnalytics: {
      shape: _IotAnalyticsAction
    },
    iotEvents: {
      shape: _IotEventsAction
    },
    stepFunctions: {
      shape: _StepFunctionsAction
    }
  }
};
