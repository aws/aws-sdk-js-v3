import { _UiConfig, _UnmarshalledUiConfig } from "./_UiConfig";
import {
  _AnnotationConsolidationConfig,
  _UnmarshalledAnnotationConsolidationConfig
} from "./_AnnotationConsolidationConfig";
import {
  _PublicWorkforceTaskPrice,
  _UnmarshalledPublicWorkforceTaskPrice
} from "./_PublicWorkforceTaskPrice";

/**
 * <p>Information required for human workers to complete a labeling task.</p>
 */
export interface _HumanTaskConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the work team assigned to complete the tasks.</p>
   */
  WorkteamArn: string;

  /**
   * <p>Information about the user interface that workers use to complete the labeling task.</p>
   */
  UiConfig: _UiConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of a Lambda function that is run before a data object is sent to a human worker. Use this function to provide input to a custom labeling job.</p> <p>For the built-in bounding box, image classification, semantic segmentation, and text classification task types, Amazon SageMaker Ground Truth provides the following Lambda functions:</p> <p> <b>US East (Northern Virginia) (us-east-1):</b> </p> <ul> <li> <p> <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-BoundingBox</code> </p> </li> <li> <p> <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-ImageMultiClass</code> </p> </li> <li> <p> <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-SemanticSegmentation</code> </p> </li> <li> <p> <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-TextMultiClass</code> </p> </li> </ul> <p> <b>US East (Ohio) (us-east-2):</b> </p> <ul> <li> <p> <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-BoundingBox</code> </p> </li> <li> <p> <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-ImageMultiClass</code> </p> </li> <li> <p> <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-SemanticSegmentation</code> </p> </li> <li> <p> <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-TextMultiClass</code> </p> </li> </ul> <p> <b>US West (Oregon) (us-west-2):</b> </p> <ul> <li> <p> <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-BoundingBox</code> </p> </li> <li> <p> <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-ImageMultiClass</code> </p> </li> <li> <p> <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-SemanticSegmentation</code> </p> </li> <li> <p> <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-TextMultiClass</code> </p> </li> </ul> <p> <b>EU (Ireland) (eu-west-1):</b> </p> <ul> <li> <p> <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-BoundingBox</code> </p> </li> <li> <p> <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-ImageMultiClass</code> </p> </li> <li> <p> <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-SemanticSegmentation</code> </p> </li> <li> <p> <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-TextMultiClass</code> </p> </li> </ul> <p> <b>Asia Pacific (Tokyo) (ap-northeast-1):</b> </p> <ul> <li> <p> <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-BoundingBox</code> </p> </li> <li> <p> <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-ImageMultiClass</code> </p> </li> <li> <p> <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-SemanticSegmentation</code> </p> </li> <li> <p> <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-TextMultiClass</code> </p> </li> </ul> <p> <b>Asia Pacific (Sydney) (ap-southeast-1):</b> </p> <ul> <li> <p> <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-BoundingBox</code> </p> </li> <li> <p> <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-ImageMultiClass</code> </p> </li> <li> <p> <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-SemanticSegmentation</code> </p> </li> <li> <p> <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-TextMultiClass</code> </p> </li> </ul>
   */
  PreHumanTaskLambdaArn: string;

  /**
   * <p>Keywords used to describe the task so that workers on Amazon Mechanical Turk can discover the task.</p>
   */
  TaskKeywords?: Array<string> | Iterable<string>;

  /**
   * <p>A title for the task for your human workers.</p>
   */
  TaskTitle: string;

  /**
   * <p>A description of the task for your human workers.</p>
   */
  TaskDescription: string;

  /**
   * <p>The number of human workers that will label an object. </p>
   */
  NumberOfHumanWorkersPerDataObject: number;

  /**
   * <p>The amount of time that a worker has to complete a task.</p>
   */
  TaskTimeLimitInSeconds: number;

  /**
   * <p>The length of time that a task remains available for labelling by human workers.</p>
   */
  TaskAvailabilityLifetimeInSeconds?: number;

  /**
   * <p>Defines the maximum number of data objects that can be labeled by human workers at the same time. Each object may have more than one worker at one time.</p>
   */
  MaxConcurrentTaskCount?: number;

  /**
   * <p>Configures how labels are consolidated across human workers.</p>
   */
  AnnotationConsolidationConfig: _AnnotationConsolidationConfig;

  /**
   * <p>The price that you pay for each task performed by a public worker.</p>
   */
  PublicWorkforceTaskPrice?: _PublicWorkforceTaskPrice;
}

export interface _UnmarshalledHumanTaskConfig extends _HumanTaskConfig {
  /**
   * <p>Information about the user interface that workers use to complete the labeling task.</p>
   */
  UiConfig: _UnmarshalledUiConfig;

  /**
   * <p>Keywords used to describe the task so that workers on Amazon Mechanical Turk can discover the task.</p>
   */
  TaskKeywords?: Array<string>;

  /**
   * <p>Configures how labels are consolidated across human workers.</p>
   */
  AnnotationConsolidationConfig: _UnmarshalledAnnotationConsolidationConfig;

  /**
   * <p>The price that you pay for each task performed by a public worker.</p>
   */
  PublicWorkforceTaskPrice?: _UnmarshalledPublicWorkforceTaskPrice;
}
