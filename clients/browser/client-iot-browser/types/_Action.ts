import {
  _DynamoDBAction,
  _UnmarshalledDynamoDBAction
} from "./_DynamoDBAction";
import {
  _DynamoDBv2Action,
  _UnmarshalledDynamoDBv2Action
} from "./_DynamoDBv2Action";
import { _LambdaAction, _UnmarshalledLambdaAction } from "./_LambdaAction";
import { _SnsAction, _UnmarshalledSnsAction } from "./_SnsAction";
import { _SqsAction, _UnmarshalledSqsAction } from "./_SqsAction";
import { _KinesisAction, _UnmarshalledKinesisAction } from "./_KinesisAction";
import {
  _RepublishAction,
  _UnmarshalledRepublishAction
} from "./_RepublishAction";
import { _S3Action, _UnmarshalledS3Action } from "./_S3Action";
import {
  _FirehoseAction,
  _UnmarshalledFirehoseAction
} from "./_FirehoseAction";
import {
  _CloudwatchMetricAction,
  _UnmarshalledCloudwatchMetricAction
} from "./_CloudwatchMetricAction";
import {
  _CloudwatchAlarmAction,
  _UnmarshalledCloudwatchAlarmAction
} from "./_CloudwatchAlarmAction";
import {
  _ElasticsearchAction,
  _UnmarshalledElasticsearchAction
} from "./_ElasticsearchAction";
import {
  _SalesforceAction,
  _UnmarshalledSalesforceAction
} from "./_SalesforceAction";
import {
  _IotAnalyticsAction,
  _UnmarshalledIotAnalyticsAction
} from "./_IotAnalyticsAction";
import {
  _IotEventsAction,
  _UnmarshalledIotEventsAction
} from "./_IotEventsAction";
import {
  _StepFunctionsAction,
  _UnmarshalledStepFunctionsAction
} from "./_StepFunctionsAction";

/**
 * <p>Describes the actions associated with a rule.</p>
 */
export interface _Action {
  /**
   * <p>Write to a DynamoDB table.</p>
   */
  dynamoDB?: _DynamoDBAction;

  /**
   * <p>Write to a DynamoDB table. This is a new version of the DynamoDB action. It allows you to write each attribute in an MQTT message payload into a separate DynamoDB column.</p>
   */
  dynamoDBv2?: _DynamoDBv2Action;

  /**
   * <p>Invoke a Lambda function.</p>
   */
  lambda?: _LambdaAction;

  /**
   * <p>Publish to an Amazon SNS topic.</p>
   */
  sns?: _SnsAction;

  /**
   * <p>Publish to an Amazon SQS queue.</p>
   */
  sqs?: _SqsAction;

  /**
   * <p>Write data to an Amazon Kinesis stream.</p>
   */
  kinesis?: _KinesisAction;

  /**
   * <p>Publish to another MQTT topic.</p>
   */
  republish?: _RepublishAction;

  /**
   * <p>Write to an Amazon S3 bucket.</p>
   */
  s3?: _S3Action;

  /**
   * <p>Write to an Amazon Kinesis Firehose stream.</p>
   */
  firehose?: _FirehoseAction;

  /**
   * <p>Capture a CloudWatch metric.</p>
   */
  cloudwatchMetric?: _CloudwatchMetricAction;

  /**
   * <p>Change the state of a CloudWatch alarm.</p>
   */
  cloudwatchAlarm?: _CloudwatchAlarmAction;

  /**
   * <p>Write data to an Amazon Elasticsearch Service domain.</p>
   */
  elasticsearch?: _ElasticsearchAction;

  /**
   * <p>Send a message to a Salesforce IoT Cloud Input Stream.</p>
   */
  salesforce?: _SalesforceAction;

  /**
   * <p>Sends message data to an AWS IoT Analytics channel.</p>
   */
  iotAnalytics?: _IotAnalyticsAction;

  /**
   * <p>Sends an input to an AWS IoT Events detector.</p>
   */
  iotEvents?: _IotEventsAction;

  /**
   * <p>Starts execution of a Step Functions state machine.</p>
   */
  stepFunctions?: _StepFunctionsAction;
}

export interface _UnmarshalledAction extends _Action {
  /**
   * <p>Write to a DynamoDB table.</p>
   */
  dynamoDB?: _UnmarshalledDynamoDBAction;

  /**
   * <p>Write to a DynamoDB table. This is a new version of the DynamoDB action. It allows you to write each attribute in an MQTT message payload into a separate DynamoDB column.</p>
   */
  dynamoDBv2?: _UnmarshalledDynamoDBv2Action;

  /**
   * <p>Invoke a Lambda function.</p>
   */
  lambda?: _UnmarshalledLambdaAction;

  /**
   * <p>Publish to an Amazon SNS topic.</p>
   */
  sns?: _UnmarshalledSnsAction;

  /**
   * <p>Publish to an Amazon SQS queue.</p>
   */
  sqs?: _UnmarshalledSqsAction;

  /**
   * <p>Write data to an Amazon Kinesis stream.</p>
   */
  kinesis?: _UnmarshalledKinesisAction;

  /**
   * <p>Publish to another MQTT topic.</p>
   */
  republish?: _UnmarshalledRepublishAction;

  /**
   * <p>Write to an Amazon S3 bucket.</p>
   */
  s3?: _UnmarshalledS3Action;

  /**
   * <p>Write to an Amazon Kinesis Firehose stream.</p>
   */
  firehose?: _UnmarshalledFirehoseAction;

  /**
   * <p>Capture a CloudWatch metric.</p>
   */
  cloudwatchMetric?: _UnmarshalledCloudwatchMetricAction;

  /**
   * <p>Change the state of a CloudWatch alarm.</p>
   */
  cloudwatchAlarm?: _UnmarshalledCloudwatchAlarmAction;

  /**
   * <p>Write data to an Amazon Elasticsearch Service domain.</p>
   */
  elasticsearch?: _UnmarshalledElasticsearchAction;

  /**
   * <p>Send a message to a Salesforce IoT Cloud Input Stream.</p>
   */
  salesforce?: _UnmarshalledSalesforceAction;

  /**
   * <p>Sends message data to an AWS IoT Analytics channel.</p>
   */
  iotAnalytics?: _UnmarshalledIotAnalyticsAction;

  /**
   * <p>Sends an input to an AWS IoT Events detector.</p>
   */
  iotEvents?: _UnmarshalledIotEventsAction;

  /**
   * <p>Starts execution of a Step Functions state machine.</p>
   */
  stepFunctions?: _UnmarshalledStepFunctionsAction;
}
