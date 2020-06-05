import {
  SENSITIVE_STRING,
  LazyJsonString as __LazyJsonString,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AddTagsInput {
  __type?: "AddTagsInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array of <code>Tag</code> objects. Each tag is a key-value pair. Only the
   *                 <code>key</code> parameter is required. If you don't specify a value, Amazon SageMaker sets the
   *             value to an empty string. </p>
   */
  Tags: Tag[] | undefined;
}

export namespace AddTagsInput {
  export const filterSensitiveLog = (obj: AddTagsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddTagsInput => __isa(o, "AddTagsInput");
}

export interface AddTagsOutput {
  __type?: "AddTagsOutput";
  /**
   * <p>A list of tags associated with the Amazon SageMaker resource.</p>
   */
  Tags?: Tag[];
}

export namespace AddTagsOutput {
  export const filterSensitiveLog = (obj: AddTagsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddTagsOutput => __isa(o, "AddTagsOutput");
}

export enum AlgorithmSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name"
}

/**
 * <p>Specifies the training algorithm to use in a <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrainingJob.html">CreateTrainingJob</a>
 *             request.</p>
 *         <p>For more information about algorithms provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For
 *             information about using your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
 *                 SageMaker</a>. </p>
 */
export interface AlgorithmSpecification {
  __type?: "AlgorithmSpecification";
  /**
   * <p>The name of the algorithm resource to use for the training job. This must be an
   *             algorithm resource that you created or subscribe to on AWS Marketplace. If you specify a value for
   *             this parameter, you can't specify a value for <code>TrainingImage</code>.</p>
   */
  AlgorithmName?: string;

  /**
   * <p>To generate and save time-series metrics during training, set to <code>true</code>.
   *             The default is <code>false</code> and time-series metrics aren't generated except in the
   *             following cases:</p>
   *         <ul>
   *             <li>
   *                 <p>You use one of the Amazon SageMaker built-in algorithms</p>
   *             </li>
   *             <li>
   *                 <p>You use one of the following <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/pre-built-containers-frameworks-deep-learning.html">Prebuilt Amazon SageMaker Docker Images</a>:</p>
   *                 <ul>
   *                   <li>
   *                         <p>Tensorflow (version >= 1.15)</p>
   *                     </li>
   *                   <li>
   *                         <p>MXNet (version >= 1.6)</p>
   *                     </li>
   *                   <li>
   *                         <p>PyTorch (version >= 1.3)</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>You specify at least one <a>MetricDefinition</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  EnableSageMakerMetricsTimeSeries?: boolean;

  /**
   * <p>A list of metric definition objects. Each object specifies the metric name and regular
   *             expressions used to parse algorithm logs. Amazon SageMaker publishes each metric to Amazon CloudWatch.</p>
   */
  MetricDefinitions?: MetricDefinition[];

  /**
   * <p>The registry path of the Docker image
   *              that contains the training algorithm.
   *             For information about docker registry paths for built-in algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html">Algorithms
   *                 Provided by Amazon SageMaker: Common Parameters</a>. Amazon SageMaker supports both
   *                 <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code>
   *             image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
   *                 SageMaker</a>.</p>
   */
  TrainingImage?: string;

  /**
   * <p>The input mode that the algorithm supports. For the input modes that Amazon SageMaker
   *             algorithms support, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. If an algorithm supports the <code>File</code> input mode, Amazon SageMaker
   *             downloads the training data from S3 to the provisioned ML storage Volume, and mounts the
   *             directory to docker volume for training container. If an algorithm supports the
   *                 <code>Pipe</code> input mode, Amazon SageMaker streams data directly from S3 to the container. </p>
   *         <p> In File mode, make sure you provision ML storage volume with sufficient capacity
   *             to accommodate the data download from S3. In addition to the training data, the ML
   *             storage volume also stores the output model. The algorithm container use ML storage
   *             volume to also store intermediate information, if any. </p>
   *         <p> For distributed algorithms using File mode, training data is distributed
   *             uniformly, and your training duration is predictable if the input data objects size is
   *             approximately same. Amazon SageMaker does not split the files any further for model training. If the
   *             object sizes are skewed, training won't be optimal as the data distribution is also
   *             skewed where one host in a training cluster is overloaded, thus becoming bottleneck in
   *             training. </p>
   */
  TrainingInputMode: TrainingInputMode | string | undefined;
}

export namespace AlgorithmSpecification {
  export const filterSensitiveLog = (obj: AlgorithmSpecification): any => ({
    ...obj
  });
  export const isa = (o: any): o is AlgorithmSpecification =>
    __isa(o, "AlgorithmSpecification");
}

export enum AlgorithmStatus {
  COMPLETED = "Completed",
  DELETING = "Deleting",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending"
}

/**
 * <p>Specifies the validation and image scan statuses of the algorithm.</p>
 */
export interface AlgorithmStatusDetails {
  __type?: "AlgorithmStatusDetails";
  /**
   * <p>The status of the scan of the algorithm's Docker image container.</p>
   */
  ImageScanStatuses?: AlgorithmStatusItem[];

  /**
   * <p>The status of algorithm validation.</p>
   */
  ValidationStatuses?: AlgorithmStatusItem[];
}

export namespace AlgorithmStatusDetails {
  export const filterSensitiveLog = (obj: AlgorithmStatusDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is AlgorithmStatusDetails =>
    __isa(o, "AlgorithmStatusDetails");
}

/**
 * <p>Represents the overall status of an algorithm.</p>
 */
export interface AlgorithmStatusItem {
  __type?: "AlgorithmStatusItem";
  /**
   * <p>if the overall status is <code>Failed</code>, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The name of the algorithm for which the overall status is being reported.</p>
   */
  Name: string | undefined;

  /**
   * <p>The current status.</p>
   */
  Status: DetailedAlgorithmStatus | string | undefined;
}

export namespace AlgorithmStatusItem {
  export const filterSensitiveLog = (obj: AlgorithmStatusItem): any => ({
    ...obj
  });
  export const isa = (o: any): o is AlgorithmStatusItem =>
    __isa(o, "AlgorithmStatusItem");
}

/**
 * <p>Provides summary information about an algorithm.</p>
 */
export interface AlgorithmSummary {
  __type?: "AlgorithmSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm.</p>
   */
  AlgorithmArn: string | undefined;

  /**
   * <p>A brief description of the algorithm.</p>
   */
  AlgorithmDescription?: string;

  /**
   * <p>The name of the algorithm that is described by the summary.</p>
   */
  AlgorithmName: string | undefined;

  /**
   * <p>The overall status of the algorithm.</p>
   */
  AlgorithmStatus: AlgorithmStatus | string | undefined;

  /**
   * <p>A timestamp that shows when the algorithm was created.</p>
   */
  CreationTime: Date | undefined;
}

export namespace AlgorithmSummary {
  export const filterSensitiveLog = (obj: AlgorithmSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is AlgorithmSummary =>
    __isa(o, "AlgorithmSummary");
}

/**
 * <p>Defines a training job and a batch transform job that Amazon SageMaker runs to validate your
 *             algorithm.</p>
 *         <p>The data provided in the validation profile is made available to your buyers on AWS
 *             Marketplace.</p>
 */
export interface AlgorithmValidationProfile {
  __type?: "AlgorithmValidationProfile";
  /**
   * <p>The name of the profile for the algorithm. The name must have 1 to 63 characters.
   *             Valid characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  ProfileName: string | undefined;

  /**
   * <p>The <code>TrainingJobDefinition</code> object that describes the training job that
   *             Amazon SageMaker runs to validate your algorithm.</p>
   */
  TrainingJobDefinition: TrainingJobDefinition | undefined;

  /**
   * <p>The <code>TransformJobDefinition</code> object that describes the transform job that
   *             Amazon SageMaker runs to validate your algorithm.</p>
   */
  TransformJobDefinition?: TransformJobDefinition;
}

export namespace AlgorithmValidationProfile {
  export const filterSensitiveLog = (obj: AlgorithmValidationProfile): any => ({
    ...obj
  });
  export const isa = (o: any): o is AlgorithmValidationProfile =>
    __isa(o, "AlgorithmValidationProfile");
}

/**
 * <p>Specifies configurations for one or more training jobs that Amazon SageMaker runs to test the
 *             algorithm.</p>
 */
export interface AlgorithmValidationSpecification {
  __type?: "AlgorithmValidationSpecification";
  /**
   * <p>An array of <code>AlgorithmValidationProfile</code> objects, each of which specifies a
   *             training job and batch transform job that Amazon SageMaker runs to validate your algorithm.</p>
   */
  ValidationProfiles: AlgorithmValidationProfile[] | undefined;

  /**
   * <p>The IAM roles that Amazon SageMaker uses to run the training jobs.</p>
   */
  ValidationRole: string | undefined;
}

export namespace AlgorithmValidationSpecification {
  export const filterSensitiveLog = (
    obj: AlgorithmValidationSpecification
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AlgorithmValidationSpecification =>
    __isa(o, "AlgorithmValidationSpecification");
}

/**
 * <p>Configures how labels are consolidated across human workers.</p>
 */
export interface AnnotationConsolidationConfig {
  __type?: "AnnotationConsolidationConfig";
  /**
   * <p>The Amazon Resource Name (ARN) of a Lambda function implements the logic for
   *             annotation consolidation.</p>
   *         <p>For the built-in bounding box, image classification, semantic segmentation, and text
   *             classification task types, Amazon SageMaker Ground Truth provides the following Lambda functions:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <i>Bounding box</i> - Finds the most similar boxes from
   *                     different workers based on the Jaccard index of the boxes.</p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-BoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <i>Image classification</i> - Uses a variant of the Expectation
   *                     Maximization approach to estimate the true class of an image based on
   *                     annotations from individual workers.</p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-ImageMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <i>Semantic segmentation</i> - Treats each pixel in an image as
   *                     a multi-class classification and treats pixel annotations from workers as
   *                     "votes" for the correct label.</p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <i>Text classification</i> - Uses a variant of the Expectation
   *                     Maximization approach to estimate the true class of text based on annotations
   *                     from individual workers.</p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-TextMultiClass</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <i>Named entity recognition</i> - Groups similar selections and
   *                     calculates aggregate boundaries, resolving to most-assigned label.</p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <i>Bounding box verification</i> - Uses a variant of the
   *                     Expectation Maximization approach to estimate the true class of verification
   *                     judgement for bounding box labels based on annotations from individual
   *                     workers.</p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-VerificationBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <i>Semantic segmentation verification</i> - Uses a variant of
   *                     the Expectation Maximization approach to estimate the true class of verification
   *                     judgement for semantic segmentation labels based on annotations from individual
   *                     workers.</p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <i>Bounding box adjustment</i> - Finds the most similar boxes
   *                     from different workers based on the Jaccard index of the adjusted
   *                     annotations.</p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <i>Semantic segmentation adjustment</i> - Treats each pixel in
   *                     an image as a multi-class classification and treats pixel adjusted annotations
   *                     from workers as "votes" for the correct label.</p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:ACS-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-annotation-consolidation.html">Annotation
   *                 Consolidation</a>.</p>
   */
  AnnotationConsolidationLambdaArn: string | undefined;
}

export namespace AnnotationConsolidationConfig {
  export const filterSensitiveLog = (
    obj: AnnotationConsolidationConfig
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AnnotationConsolidationConfig =>
    __isa(o, "AnnotationConsolidationConfig");
}

/**
 * <p>The app's details.</p>
 */
export interface AppDetails {
  __type?: "AppDetails";
  /**
   * <p>The name of the app.</p>
   */
  AppName?: string;

  /**
   * <p>The type of app.</p>
   */
  AppType?: AppType | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The status.</p>
   */
  Status?: AppStatus | string;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;
}

export namespace AppDetails {
  export const filterSensitiveLog = (obj: AppDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is AppDetails => __isa(o, "AppDetails");
}

export enum AppInstanceType {
  ML_C5_12XLARGE = "ml.c5.12xlarge",
  ML_C5_18XLARGE = "ml.c5.18xlarge",
  ML_C5_24XLARGE = "ml.c5.24xlarge",
  ML_C5_2XLARGE = "ml.c5.2xlarge",
  ML_C5_4XLARGE = "ml.c5.4xlarge",
  ML_C5_9XLARGE = "ml.c5.9xlarge",
  ML_C5_LARGE = "ml.c5.large",
  ML_C5_XLARGE = "ml.c5.xlarge",
  ML_G4DN_12XLARGE = "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE = "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE = "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE = "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE = "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE = "ml.g4dn.xlarge",
  ML_M5_12XLARGE = "ml.m5.12xlarge",
  ML_M5_16XLARGE = "ml.m5.16xlarge",
  ML_M5_24XLARGE = "ml.m5.24xlarge",
  ML_M5_2XLARGE = "ml.m5.2xlarge",
  ML_M5_4XLARGE = "ml.m5.4xlarge",
  ML_M5_8XLARGE = "ml.m5.8xlarge",
  ML_M5_LARGE = "ml.m5.large",
  ML_M5_XLARGE = "ml.m5.xlarge",
  ML_P3_16XLARGE = "ml.p3.16xlarge",
  ML_P3_2XLARGE = "ml.p3.2xlarge",
  ML_P3_8XLARGE = "ml.p3.8xlarge",
  ML_T3_2XLARGE = "ml.t3.2xlarge",
  ML_T3_LARGE = "ml.t3.large",
  ML_T3_MEDIUM = "ml.t3.medium",
  ML_T3_MICRO = "ml.t3.micro",
  ML_T3_SMALL = "ml.t3.small",
  ML_T3_XLARGE = "ml.t3.xlarge",
  SYSTEM = "system"
}

export enum AppSortKey {
  CreationTime = "CreationTime"
}

/**
 * <p>Configuration to run a processing job in a specified container image.</p>
 */
export interface AppSpecification {
  __type?: "AppSpecification";
  /**
   * <p>The arguments for a container used to run a processing job.</p>
   */
  ContainerArguments?: string[];

  /**
   * <p>The entrypoint for a container used to run a processing job.</p>
   */
  ContainerEntrypoint?: string[];

  /**
   * <p>The container image to be run by the processing job.</p>
   */
  ImageUri: string | undefined;
}

export namespace AppSpecification {
  export const filterSensitiveLog = (obj: AppSpecification): any => ({
    ...obj
  });
  export const isa = (o: any): o is AppSpecification =>
    __isa(o, "AppSpecification");
}

export enum AppStatus {
  Deleted = "Deleted",
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending"
}

export enum AppType {
  JupyterServer = "JupyterServer",
  KernelGateway = "KernelGateway",
  TensorBoard = "TensorBoard"
}

export enum AssemblyType {
  LINE = "Line",
  NONE = "None"
}

export interface AssociateTrialComponentRequest {
  __type?: "AssociateTrialComponentRequest";
  /**
   * <p>The name of the component to associated with the trial.</p>
   */
  TrialComponentName: string | undefined;

  /**
   * <p>The name of the trial to associate with.</p>
   */
  TrialName: string | undefined;
}

export namespace AssociateTrialComponentRequest {
  export const filterSensitiveLog = (
    obj: AssociateTrialComponentRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateTrialComponentRequest =>
    __isa(o, "AssociateTrialComponentRequest");
}

export interface AssociateTrialComponentResponse {
  __type?: "AssociateTrialComponentResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;

  /**
   * <p>The ARN of the trial component.</p>
   */
  TrialComponentArn?: string;
}

export namespace AssociateTrialComponentResponse {
  export const filterSensitiveLog = (
    obj: AssociateTrialComponentResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateTrialComponentResponse =>
    __isa(o, "AssociateTrialComponentResponse");
}

export enum AuthMode {
  IAM = "IAM",
  SSO = "SSO"
}

/**
 * <p>An AutoPilot job will return recommendations, or candidates.
 *             Each candidate has futher details about the steps involed, and the status.</p>
 */
export interface AutoMLCandidate {
  __type?: "AutoMLCandidate";
  /**
   * <p>The candidate name.</p>
   */
  CandidateName: string | undefined;

  /**
   * <p>The candidate's status.</p>
   */
  CandidateStatus: CandidateStatus | string | undefined;

  /**
   * <p>The candidate's steps.</p>
   */
  CandidateSteps: AutoMLCandidateStep[] | undefined;

  /**
   * <p>The creation time.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The end time.</p>
   */
  EndTime?: Date;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>The candidate result from a job.</p>
   */
  FinalAutoMLJobObjectiveMetric?: FinalAutoMLJobObjectiveMetric;

  /**
   * <p>The inference containers.</p>
   */
  InferenceContainers?: AutoMLContainerDefinition[];

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The objective status.</p>
   */
  ObjectiveStatus: ObjectiveStatus | string | undefined;
}

export namespace AutoMLCandidate {
  export const filterSensitiveLog = (obj: AutoMLCandidate): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoMLCandidate =>
    __isa(o, "AutoMLCandidate");
}

/**
 * <p>Information about the steps for a Candidate, and what step it is working on.</p>
 */
export interface AutoMLCandidateStep {
  __type?: "AutoMLCandidateStep";
  /**
   * <p>The ARN for the Candidate's step.</p>
   */
  CandidateStepArn: string | undefined;

  /**
   * <p>The name for the Candidate's step.</p>
   */
  CandidateStepName: string | undefined;

  /**
   * <p>Whether the Candidate is at the transform, training, or processing step.</p>
   */
  CandidateStepType: CandidateStepType | string | undefined;
}

export namespace AutoMLCandidateStep {
  export const filterSensitiveLog = (obj: AutoMLCandidateStep): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoMLCandidateStep =>
    __isa(o, "AutoMLCandidateStep");
}

/**
 * <p>Similar to Channel.
 *       A channel is a named input source that training algorithms can consume.
 *     Refer to Channel for detailed descriptions.</p>
 */
export interface AutoMLChannel {
  __type?: "AutoMLChannel";
  /**
   * <p>You can use Gzip or None. The default value is None.</p>
   */
  CompressionType?: CompressionType | string;

  /**
   * <p>The data source.</p>
   */
  DataSource: AutoMLDataSource | undefined;

  /**
   * <p>The name of the target variable in supervised learning, a.k.a. ‘y’.</p>
   */
  TargetAttributeName: string | undefined;
}

export namespace AutoMLChannel {
  export const filterSensitiveLog = (obj: AutoMLChannel): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoMLChannel => __isa(o, "AutoMLChannel");
}

/**
 * <p>A list of container definitions that describe the different containers that make up one AutoML candidate.
 *       Refer to ContainerDefinition for more details.</p>
 */
export interface AutoMLContainerDefinition {
  __type?: "AutoMLContainerDefinition";
  /**
   * <p>Environment variables to set in the container.
   *           Refer to ContainerDefinition for more details.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>The ECR path of the container.
   *           Refer to ContainerDefinition for more details.</p>
   */
  Image: string | undefined;

  /**
   * <p>The location of the model artifacts.
   *           Refer to ContainerDefinition for more details.</p>
   */
  ModelDataUrl: string | undefined;
}

export namespace AutoMLContainerDefinition {
  export const filterSensitiveLog = (obj: AutoMLContainerDefinition): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoMLContainerDefinition =>
    __isa(o, "AutoMLContainerDefinition");
}

/**
 * <p>The data source for the AutoPilot job.</p>
 */
export interface AutoMLDataSource {
  __type?: "AutoMLDataSource";
  /**
   * <p>The Amazon S3 location of the data.</p>
   */
  S3DataSource: AutoMLS3DataSource | undefined;
}

export namespace AutoMLDataSource {
  export const filterSensitiveLog = (obj: AutoMLDataSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoMLDataSource =>
    __isa(o, "AutoMLDataSource");
}

/**
 * <p>Artifacts that are generation during a job.</p>
 */
export interface AutoMLJobArtifacts {
  __type?: "AutoMLJobArtifacts";
  /**
   * <p>The URL to the notebook location.</p>
   */
  CandidateDefinitionNotebookLocation?: string;

  /**
   * <p>The URL to the notebook location.</p>
   */
  DataExplorationNotebookLocation?: string;
}

export namespace AutoMLJobArtifacts {
  export const filterSensitiveLog = (obj: AutoMLJobArtifacts): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoMLJobArtifacts =>
    __isa(o, "AutoMLJobArtifacts");
}

/**
 * <p>How long a job is allowed to run, or how many candidates a job is allowed to generate.</p>
 */
export interface AutoMLJobCompletionCriteria {
  __type?: "AutoMLJobCompletionCriteria";
  /**
   * <p>The maximum time, in seconds, an AutoML job is allowed to wait for a trial to complete.
   *          It must be equal to or greater than MaxRuntimePerTrainingJobInSeconds.</p>
   */
  MaxAutoMLJobRuntimeInSeconds?: number;

  /**
   * <p>The maximum number of times a training job is allowed to run.</p>
   */
  MaxCandidates?: number;

  /**
   * <p>The maximum time, in seconds, a job is allowed to run.</p>
   */
  MaxRuntimePerTrainingJobInSeconds?: number;
}

export namespace AutoMLJobCompletionCriteria {
  export const filterSensitiveLog = (
    obj: AutoMLJobCompletionCriteria
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoMLJobCompletionCriteria =>
    __isa(o, "AutoMLJobCompletionCriteria");
}

/**
 * <p>A collection of settings used for a job.</p>
 */
export interface AutoMLJobConfig {
  __type?: "AutoMLJobConfig";
  /**
   * <p>How long a job is allowed to run, or how many candidates a job is allowed to generate.</p>
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;

  /**
   * <p>Security configuration for traffic encryption or Amazon VPC settings.</p>
   */
  SecurityConfig?: AutoMLSecurityConfig;
}

export namespace AutoMLJobConfig {
  export const filterSensitiveLog = (obj: AutoMLJobConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoMLJobConfig =>
    __isa(o, "AutoMLJobConfig");
}

/**
 * <p>Applies a metric to minimize or maximize for the job's objective.</p>
 */
export interface AutoMLJobObjective {
  __type?: "AutoMLJobObjective";
  /**
   * <p>The name of the metric.</p>
   */
  MetricName: AutoMLMetricEnum | string | undefined;
}

export namespace AutoMLJobObjective {
  export const filterSensitiveLog = (obj: AutoMLJobObjective): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoMLJobObjective =>
    __isa(o, "AutoMLJobObjective");
}

export enum AutoMLJobObjectiveType {
  MAXIMIZE = "Maximize",
  MINIMIZE = "Minimize"
}

export enum AutoMLJobSecondaryStatus {
  ANALYZING_DATA = "AnalyzingData",
  CANDIDATE_DEFINITIONS_GENERATED = "CandidateDefinitionsGenerated",
  FAILED = "Failed",
  FEATURE_ENGINEERING = "FeatureEngineering",
  MAX_AUTO_ML_JOB_RUNTIME_REACHED = "MaxAutoMLJobRuntimeReached",
  MAX_CANDIDATES_REACHED = "MaxCandidatesReached",
  MODEL_TUNING = "ModelTuning",
  STARTING = "Starting",
  STOPPED = "Stopped",
  STOPPING = "Stopping"
}

export enum AutoMLJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping"
}

/**
 * <p>Provides a summary about a job.</p>
 */
export interface AutoMLJobSummary {
  __type?: "AutoMLJobSummary";
  /**
   * <p>The ARN of the job.</p>
   */
  AutoMLJobArn: string | undefined;

  /**
   * <p>The name of the object you are requesting.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>The job's secondary status.</p>
   */
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus | string | undefined;

  /**
   * <p>The job's status.</p>
   */
  AutoMLJobStatus: AutoMLJobStatus | string | undefined;

  /**
   * <p>When the job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The end time.</p>
   */
  EndTime?: Date;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>When the job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;
}

export namespace AutoMLJobSummary {
  export const filterSensitiveLog = (obj: AutoMLJobSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoMLJobSummary =>
    __isa(o, "AutoMLJobSummary");
}

export enum AutoMLMetricEnum {
  ACCURACY = "Accuracy",
  F1 = "F1",
  F1_MACRO = "F1macro",
  MSE = "MSE"
}

/**
 * <p>The output data configuration.</p>
 */
export interface AutoMLOutputDataConfig {
  __type?: "AutoMLOutputDataConfig";
  /**
   * <p>The AWS KMS encryption key ID.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon S3 output path. Must be 128 characters or less.</p>
   */
  S3OutputPath: string | undefined;
}

export namespace AutoMLOutputDataConfig {
  export const filterSensitiveLog = (obj: AutoMLOutputDataConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoMLOutputDataConfig =>
    __isa(o, "AutoMLOutputDataConfig");
}

/**
 * <p>The Amazon S3 data source.</p>
 */
export interface AutoMLS3DataSource {
  __type?: "AutoMLS3DataSource";
  /**
   * <p>The data type.</p>
   */
  S3DataType: AutoMLS3DataType | string | undefined;

  /**
   * <p>The URL to the Amazon S3 data source.</p>
   */
  S3Uri: string | undefined;
}

export namespace AutoMLS3DataSource {
  export const filterSensitiveLog = (obj: AutoMLS3DataSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoMLS3DataSource =>
    __isa(o, "AutoMLS3DataSource");
}

export enum AutoMLS3DataType {
  MANIFEST_FILE = "ManifestFile",
  S3_PREFIX = "S3Prefix"
}

/**
 * <p>Security options.</p>
 */
export interface AutoMLSecurityConfig {
  __type?: "AutoMLSecurityConfig";
  /**
   * <p>Whether to use traffic encryption between the container layers.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>The key used to encrypt stored data.</p>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>VPC configuration.</p>
   */
  VpcConfig?: VpcConfig;
}

export namespace AutoMLSecurityConfig {
  export const filterSensitiveLog = (obj: AutoMLSecurityConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoMLSecurityConfig =>
    __isa(o, "AutoMLSecurityConfig");
}

export enum AutoMLSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status"
}

export enum AutoMLSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending"
}

export enum AwsManagedHumanLoopRequestSource {
  REKOGNITION_DETECT_MODERATION_LABELS_IMAGE_V3 = "AWS/Rekognition/DetectModerationLabels/Image/V3",
  TEXTRACT_ANALYZE_DOCUMENT_FORMS_V1 = "AWS/Textract/AnalyzeDocument/Forms/V1"
}

export enum BatchStrategy {
  MULTI_RECORD = "MultiRecord",
  SINGLE_RECORD = "SingleRecord"
}

export enum BooleanOperator {
  AND = "And",
  OR = "Or"
}

export enum CandidateSortBy {
  CreationTime = "CreationTime",
  FinalObjectiveMetricValue = "FinalObjectiveMetricValue",
  Status = "Status"
}

export enum CandidateStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping"
}

export enum CandidateStepType {
  PROCESSING = "AWS::SageMaker::ProcessingJob",
  TRAINING = "AWS::SageMaker::TrainingJob",
  TRANSFORM = "AWS::SageMaker::TransformJob"
}

/**
 * <p></p>
 */
export interface CaptureContentTypeHeader {
  __type?: "CaptureContentTypeHeader";
  /**
   * <p></p>
   */
  CsvContentTypes?: string[];

  /**
   * <p></p>
   */
  JsonContentTypes?: string[];
}

export namespace CaptureContentTypeHeader {
  export const filterSensitiveLog = (obj: CaptureContentTypeHeader): any => ({
    ...obj
  });
  export const isa = (o: any): o is CaptureContentTypeHeader =>
    __isa(o, "CaptureContentTypeHeader");
}

export enum CaptureMode {
  INPUT = "Input",
  OUTPUT = "Output"
}

/**
 * <p></p>
 */
export interface CaptureOption {
  __type?: "CaptureOption";
  /**
   * <p></p>
   */
  CaptureMode: CaptureMode | string | undefined;
}

export namespace CaptureOption {
  export const filterSensitiveLog = (obj: CaptureOption): any => ({
    ...obj
  });
  export const isa = (o: any): o is CaptureOption => __isa(o, "CaptureOption");
}

export enum CaptureStatus {
  STARTED = "Started",
  STOPPED = "Stopped"
}

/**
 * <p>A list of categorical hyperparameters to tune.</p>
 */
export interface CategoricalParameterRange {
  __type?: "CategoricalParameterRange";
  /**
   * <p>The name of the categorical hyperparameter to tune.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of the categories
   *             for
   *             the hyperparameter.</p>
   */
  Values: string[] | undefined;
}

export namespace CategoricalParameterRange {
  export const filterSensitiveLog = (obj: CategoricalParameterRange): any => ({
    ...obj
  });
  export const isa = (o: any): o is CategoricalParameterRange =>
    __isa(o, "CategoricalParameterRange");
}

/**
 * <p>Defines the possible values for a categorical hyperparameter.</p>
 */
export interface CategoricalParameterRangeSpecification {
  __type?: "CategoricalParameterRangeSpecification";
  /**
   * <p>The allowed categories for the hyperparameter.</p>
   */
  Values: string[] | undefined;
}

export namespace CategoricalParameterRangeSpecification {
  export const filterSensitiveLog = (
    obj: CategoricalParameterRangeSpecification
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CategoricalParameterRangeSpecification =>
    __isa(o, "CategoricalParameterRangeSpecification");
}

/**
 * <p>A channel is a named input source that training algorithms can consume. </p>
 */
export interface Channel {
  __type?: "Channel";
  /**
   * <p>The name of the channel. </p>
   */
  ChannelName: string | undefined;

  /**
   * <p>If training data is compressed, the compression type. The default value is
   *                 <code>None</code>. <code>CompressionType</code> is used only in Pipe input mode. In
   *             File mode, leave this field unset or set it to None.</p>
   */
  CompressionType?: CompressionType | string;

  /**
   * <p>The MIME type of the data.</p>
   */
  ContentType?: string;

  /**
   * <p>The location of the channel data.</p>
   */
  DataSource: DataSource | undefined;

  /**
   * <p>(Optional) The input mode to use for the data channel in a training job. If you don't
   *             set a value for <code>InputMode</code>, Amazon SageMaker uses the value set for
   *                 <code>TrainingInputMode</code>. Use this parameter to override the
   *                 <code>TrainingInputMode</code> setting in a <a>AlgorithmSpecification</a>
   *             request when you have a channel that needs a different input mode from the training
   *             job's general setting. To download the data from Amazon Simple Storage Service (Amazon S3) to the provisioned ML
   *             storage volume, and mount the directory to a Docker volume, use <code>File</code> input
   *             mode. To stream data directly from Amazon S3 to the container, choose <code>Pipe</code> input
   *             mode.</p>
   *         <p>To use a model for incremental training, choose <code>File</code> input model.</p>
   */
  InputMode?: TrainingInputMode | string;

  /**
   * <p></p>
   *         <p>Specify RecordIO as the value when input data is in raw format but the training
   *             algorithm requires the RecordIO format. In this case, Amazon SageMaker wraps each individual S3
   *             object in a RecordIO record. If the input data is already in RecordIO format, you don't
   *             need to set this attribute. For more information, see <a href="https://mxnet.apache.org/api/architecture/note_data_loading#data-format">Create
   *                 a Dataset Using RecordIO</a>. </p>
   *         <p>In File mode, leave this field unset or set it to None.</p>
   */
  RecordWrapperType?: RecordWrapper | string;

  /**
   * <p>A configuration for a shuffle option for input data in a channel. If you use
   *                 <code>S3Prefix</code> for <code>S3DataType</code>, this shuffles the results of the
   *             S3 key prefix matches. If you use <code>ManifestFile</code>, the order of the S3 object
   *             references in the <code>ManifestFile</code> is shuffled. If you use
   *                 <code>AugmentedManifestFile</code>, the order of the JSON lines in the
   *                 <code>AugmentedManifestFile</code> is shuffled. The shuffling order is determined
   *             using the <code>Seed</code> value.</p>
   *         <p>For Pipe input mode, shuffling is done at the start of every epoch. With large
   *             datasets this ensures that the order of the training data is different for each epoch,
   *             it helps reduce bias and possible overfitting. In a multi-node training job when
   *             ShuffleConfig is combined with <code>S3DataDistributionType</code> of
   *                 <code>ShardedByS3Key</code>, the data is shuffled across nodes so that the content
   *             sent to a particular node on the first epoch might be sent to a different node on the
   *             second epoch.</p>
   */
  ShuffleConfig?: ShuffleConfig;
}

export namespace Channel {
  export const filterSensitiveLog = (obj: Channel): any => ({
    ...obj
  });
  export const isa = (o: any): o is Channel => __isa(o, "Channel");
}

/**
 * <p>Defines a named input source, called a channel, to be used by an algorithm.</p>
 */
export interface ChannelSpecification {
  __type?: "ChannelSpecification";
  /**
   * <p>A brief description of the channel.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the channel is required by the algorithm.</p>
   */
  IsRequired?: boolean;

  /**
   * <p>The name of the channel.</p>
   */
  Name: string | undefined;

  /**
   * <p>The allowed compression types, if data compression is used.</p>
   */
  SupportedCompressionTypes?: (CompressionType | string)[];

  /**
   * <p>The supported MIME types for the data.</p>
   */
  SupportedContentTypes: string[] | undefined;

  /**
   * <p>The allowed input mode, either FILE or PIPE.</p>
   *         <p>In FILE mode, Amazon SageMaker copies the data from the input source onto the local
   *             Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm.
   *             This is the most commonly used input mode.</p>
   *         <p>In PIPE mode, Amazon SageMaker streams input data from the source directly to your
   *             algorithm without using the EBS volume.</p>
   */
  SupportedInputModes: (TrainingInputMode | string)[] | undefined;
}

export namespace ChannelSpecification {
  export const filterSensitiveLog = (obj: ChannelSpecification): any => ({
    ...obj
  });
  export const isa = (o: any): o is ChannelSpecification =>
    __isa(o, "ChannelSpecification");
}

/**
 * <p>Contains information about the output location for managed spot training checkpoint
 *             data. </p>
 */
export interface CheckpointConfig {
  __type?: "CheckpointConfig";
  /**
   * <p>(Optional) The local directory where checkpoints are written. The default directory is
   *                 <code>/opt/ml/checkpoints/</code>. </p>
   */
  LocalPath?: string;

  /**
   * <p>Identifies the S3 path where you want Amazon SageMaker to store checkpoints. For example,
   *                 <code>s3://bucket-name/key-name-prefix</code>.</p>
   */
  S3Uri: string | undefined;
}

export namespace CheckpointConfig {
  export const filterSensitiveLog = (obj: CheckpointConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is CheckpointConfig =>
    __isa(o, "CheckpointConfig");
}

export enum CodeRepositorySortBy {
  CREATION_TIME = "CreationTime",
  LAST_MODIFIED_TIME = "LastModifiedTime",
  NAME = "Name"
}

export enum CodeRepositorySortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending"
}

/**
 * <p>Specifies summary information about a Git repository.</p>
 */
export interface CodeRepositorySummary {
  __type?: "CodeRepositorySummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the Git repository.</p>
   */
  CodeRepositoryArn: string | undefined;

  /**
   * <p>The name of the Git repository.</p>
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>The date and time that the Git repository was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Configuration details for the Git repository, including the URL where it is located
   *             and the ARN of the AWS Secrets Manager secret that contains the credentials used to
   *             access the repository.</p>
   */
  GitConfig?: GitConfig;

  /**
   * <p>The date and time that the Git repository was last modified.</p>
   */
  LastModifiedTime: Date | undefined;
}

export namespace CodeRepositorySummary {
  export const filterSensitiveLog = (obj: CodeRepositorySummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is CodeRepositorySummary =>
    __isa(o, "CodeRepositorySummary");
}

/**
 * <p>Identifies a Amazon Cognito user group. A user group can be used in on or more work
 *             teams.</p>
 */
export interface CognitoMemberDefinition {
  __type?: "CognitoMemberDefinition";
  /**
   * <p>An identifier for an application client. You must create the app client ID using
   *             Amazon Cognito.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>An identifier for a user group.</p>
   */
  UserGroup: string | undefined;

  /**
   * <p>An identifier for a user pool. The user pool must be in the same region as the service
   *             that you are calling.</p>
   */
  UserPool: string | undefined;
}

export namespace CognitoMemberDefinition {
  export const filterSensitiveLog = (obj: CognitoMemberDefinition): any => ({
    ...obj
  });
  export const isa = (o: any): o is CognitoMemberDefinition =>
    __isa(o, "CognitoMemberDefinition");
}

/**
 * <p>Configuration information for tensor collections.</p>
 */
export interface CollectionConfiguration {
  __type?: "CollectionConfiguration";
  /**
   * <p>The name of the tensor collection. The name must be unique relative to other rule configuration names.</p>
   */
  CollectionName?: string;

  /**
   * <p>Parameter values for the tensor collection. The allowed parameters are
   *                 <code>"name"</code>, <code>"include_regex"</code>, <code>"reduction_config"</code>,
   *                 <code>"save_config"</code>, <code>"tensor_names"</code>, and
   *                 <code>"save_histogram"</code>.</p>
   */
  CollectionParameters?: { [key: string]: string };
}

export namespace CollectionConfiguration {
  export const filterSensitiveLog = (obj: CollectionConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is CollectionConfiguration =>
    __isa(o, "CollectionConfiguration");
}

export enum CompilationJobStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  INPROGRESS = "INPROGRESS",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING"
}

/**
 * <p>A summary of a model compilation job.</p>
 */
export interface CompilationJobSummary {
  __type?: "CompilationJobSummary";
  /**
   * <p>The time when the model compilation job completed.</p>
   */
  CompilationEndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the model compilation job.</p>
   */
  CompilationJobArn: string | undefined;

  /**
   * <p>The name of the model compilation job that you want a summary for.</p>
   */
  CompilationJobName: string | undefined;

  /**
   * <p>The status of the model compilation job.</p>
   */
  CompilationJobStatus: CompilationJobStatus | string | undefined;

  /**
   * <p>The time when the model compilation job started.</p>
   */
  CompilationStartTime?: Date;

  /**
   * <p>The type of device that the model will run on after compilation has completed.</p>
   */
  CompilationTargetDevice: TargetDevice | string | undefined;

  /**
   * <p>The time when the model compilation job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time when the model compilation job was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export namespace CompilationJobSummary {
  export const filterSensitiveLog = (obj: CompilationJobSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is CompilationJobSummary =>
    __isa(o, "CompilationJobSummary");
}

export enum CompressionType {
  GZIP = "Gzip",
  NONE = "None"
}

/**
 * <p>There was a conflict when you attempted to modify an experiment, trial, or trial component.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConflictException =>
    __isa(o, "ConflictException");
}

/**
 * <p>Describes the container, as part of model definition.</p>
 */
export interface ContainerDefinition {
  __type?: "ContainerDefinition";
  /**
   * <p>This parameter is ignored for models that contain only a
   *             <code>PrimaryContainer</code>.</p>
   *         <p>When a <code>ContainerDefinition</code> is part of an inference pipeline, the value of
   *             the parameter uniquely identifies the container for the purposes of logging and metrics.
   *             For information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/inference-pipeline-logs-metrics.html">Use Logs and Metrics
   *                 to Monitor an Inference Pipeline</a>. If you don't specify a value for this
   *             parameter for a <code>ContainerDefinition</code> that is part of an inference pipeline,
   *             a unique name is automatically assigned based on the position of the
   *                 <code>ContainerDefinition</code> in the pipeline. If you specify a value for the
   *                 <code>ContainerHostName</code> for any <code>ContainerDefinition</code> that is part
   *             of an inference pipeline, you must specify a value for the
   *                 <code>ContainerHostName</code> parameter of every <code>ContainerDefinition</code>
   *             in that pipeline.</p>
   */
  ContainerHostname?: string;

  /**
   * <p>The environment variables to set in the Docker container. Each key and value in the
   *                 <code>Environment</code> string to string map can have length of up to 1024. We
   *             support up to 16 entries in the map. </p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored. If you are using your
   *             own custom algorithm instead of an algorithm provided by Amazon SageMaker, the inference code must
   *             meet Amazon SageMaker requirements. Amazon SageMaker supports both <code>registry/repository[:tag]</code> and
   *                 <code>registry/repository[@digest]</code> image path formats. For more information,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using
   *                 Your Own Algorithms with Amazon SageMaker</a>
   *         </p>
   */
  Image?: string;

  /**
   * <p>Whether the container hosts a single model or multiple models.</p>
   */
  Mode?: ContainerMode | string;

  /**
   * <p>The S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single gzip compressed tar archive (.tar.gz suffix). The S3
   *             path is required for Amazon SageMaker built-in algorithms, but not if you use your own algorithms.
   *             For more information on built-in algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html">Common
   *                 Parameters</a>. </p>
   *         <p>If you provide a value for this parameter, Amazon SageMaker uses AWS Security Token Service to
   *             download model artifacts from the S3 path you provide. AWS STS is activated in your
   *             IAM user account by default. If you previously deactivated AWS STS for a region, you
   *             need to reactivate AWS STS for that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
   *                 Deactivating AWS STS in an AWS Region</a> in the <i>AWS Identity and Access Management User
   *                 Guide</i>.</p>
   *         <important>
   *             <p>If you use a built-in algorithm to create a model, Amazon SageMaker requires that you provide
   *                 a S3 path to the model artifacts in <code>ModelDataUrl</code>.</p>
   *         </important>
   */
  ModelDataUrl?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the model package to use to create the
   *             model.</p>
   */
  ModelPackageName?: string;
}

export namespace ContainerDefinition {
  export const filterSensitiveLog = (obj: ContainerDefinition): any => ({
    ...obj
  });
  export const isa = (o: any): o is ContainerDefinition =>
    __isa(o, "ContainerDefinition");
}

export enum ContainerMode {
  MULTI_MODEL = "MultiModel",
  SINGLE_MODEL = "SingleModel"
}

export enum ContentClassifier {
  FREE_OF_ADULT_CONTENT = "FreeOfAdultContent",
  FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION = "FreeOfPersonallyIdentifiableInformation"
}

/**
 * <p>A list of continuous hyperparameters to tune.</p>
 */
export interface ContinuousParameterRange {
  __type?: "ContinuousParameterRange";
  /**
   * <p>The maximum value for the hyperparameter. The tuning job uses floating-point values
   *             between <code>MinValue</code> value and this value for tuning.</p>
   */
  MaxValue: string | undefined;

  /**
   * <p>The minimum value for the hyperparameter.
   *             The
   *             tuning job uses floating-point values between this value and <code>MaxValue</code>for
   *             tuning.</p>
   */
  MinValue: string | undefined;

  /**
   * <p>The name of the continuous hyperparameter to tune.</p>
   */
  Name: string | undefined;

  /**
   * <p>The scale that hyperparameter tuning uses to search the hyperparameter range. For
   *             information about choosing a hyperparameter scale, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-ranges.html#scaling-type">Hyperparameter Scaling</a>. One of the following values:</p>
   *         <dl>
   *             <dt>Auto</dt>
   *             <dd>
   *                     <p>Amazon SageMaker hyperparameter tuning chooses the best scale for the
   *                         hyperparameter.</p>
   *                 </dd>
   *             <dt>Linear</dt>
   *             <dd>
   *                     <p>Hyperparameter tuning searches the values in the hyperparameter range by
   *                         using a linear scale.</p>
   *                 </dd>
   *             <dt>Logarithmic</dt>
   *             <dd>
   *                     <p>Hyperparameter tuning searches the values in the hyperparameter range by
   *                         using a logarithmic scale.</p>
   *                     <p>Logarithmic scaling works only for ranges that have only values greater
   *                         than 0.</p>
   *                 </dd>
   *             <dt>ReverseLogarithmic</dt>
   *             <dd>
   *                     <p>Hyperparameter tuning searches the values in the hyperparameter range by
   *                         using a reverse logarithmic scale.</p>
   *                     <p>Reverse logarithmic scaling works only for ranges that are entirely within
   *                         the range 0<=x<1.0.</p>
   *                 </dd>
   *          </dl>
   */
  ScalingType?: HyperParameterScalingType | string;
}

export namespace ContinuousParameterRange {
  export const filterSensitiveLog = (obj: ContinuousParameterRange): any => ({
    ...obj
  });
  export const isa = (o: any): o is ContinuousParameterRange =>
    __isa(o, "ContinuousParameterRange");
}

/**
 * <p>Defines the possible values for a continuous hyperparameter.</p>
 */
export interface ContinuousParameterRangeSpecification {
  __type?: "ContinuousParameterRangeSpecification";
  /**
   * <p>The maximum floating-point value allowed.</p>
   */
  MaxValue: string | undefined;

  /**
   * <p>The minimum floating-point value allowed.</p>
   */
  MinValue: string | undefined;
}

export namespace ContinuousParameterRangeSpecification {
  export const filterSensitiveLog = (
    obj: ContinuousParameterRangeSpecification
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ContinuousParameterRangeSpecification =>
    __isa(o, "ContinuousParameterRangeSpecification");
}

export interface CreateAlgorithmInput {
  __type?: "CreateAlgorithmInput";
  /**
   * <p>A description of the algorithm.</p>
   */
  AlgorithmDescription?: string;

  /**
   * <p>The name of the algorithm.</p>
   */
  AlgorithmName: string | undefined;

  /**
   * <p>Whether to certify the algorithm so that it can be listed in AWS Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * <p>Specifies details about inference jobs that the algorithm runs, including the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>The Amazon ECR paths of containers that contain the inference code and model
   *                     artifacts.</p>
   *             </li>
   *             <li>
   *                 <p>The instance types that the algorithm supports for transform jobs and
   *                     real-time endpoints used for inference.</p>
   *             </li>
   *             <li>
   *                 <p>The input and output content formats that the algorithm supports for
   *                     inference.</p>
   *             </li>
   *          </ul>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>Specifies details about training jobs run by this algorithm, including the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>The Amazon ECR path of the container and the version digest of the
   *                     algorithm.</p>
   *             </li>
   *             <li>
   *                 <p>The hyperparameters that the algorithm supports.</p>
   *             </li>
   *             <li>
   *                 <p>The instance types that the algorithm supports for training.</p>
   *             </li>
   *             <li>
   *                 <p>Whether the algorithm supports distributed training.</p>
   *             </li>
   *             <li>
   *                 <p>The metrics that the algorithm emits to Amazon CloudWatch.</p>
   *             </li>
   *             <li>
   *                 <p>Which metrics that the algorithm emits can be used as the objective metric for
   *                     hyperparameter tuning jobs.</p>
   *             </li>
   *             <li>
   *                 <p>The input channels that the algorithm supports for training data. For example,
   *                     an algorithm might support <code>train</code>, <code>validation</code>, and
   *                         <code>test</code> channels.</p>
   *             </li>
   *          </ul>
   */
  TrainingSpecification: TrainingSpecification | undefined;

  /**
   * <p>Specifies configurations for one or more training jobs and that Amazon SageMaker runs to test the
   *             algorithm's training code and, optionally, one or more batch transform jobs that Amazon SageMaker
   *             runs to test the algorithm's inference code.</p>
   */
  ValidationSpecification?: AlgorithmValidationSpecification;
}

export namespace CreateAlgorithmInput {
  export const filterSensitiveLog = (obj: CreateAlgorithmInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAlgorithmInput =>
    __isa(o, "CreateAlgorithmInput");
}

export interface CreateAlgorithmOutput {
  __type?: "CreateAlgorithmOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the new algorithm.</p>
   */
  AlgorithmArn: string | undefined;
}

export namespace CreateAlgorithmOutput {
  export const filterSensitiveLog = (obj: CreateAlgorithmOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAlgorithmOutput =>
    __isa(o, "CreateAlgorithmOutput");
}

export interface CreateAppRequest {
  __type?: "CreateAppRequest";
  /**
   * <p>The name of the app.</p>
   */
  AppName: string | undefined;

  /**
   * <p>The type of app.</p>
   */
  AppType: AppType | string | undefined;

  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The instance type and quantity.</p>
   */
  ResourceSpec?: ResourceSpec;

  /**
   * <p>Each tag consists of a key and an optional value.
   *          Tag keys must be unique per resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;
}

export namespace CreateAppRequest {
  export const filterSensitiveLog = (obj: CreateAppRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAppRequest =>
    __isa(o, "CreateAppRequest");
}

export interface CreateAppResponse {
  __type?: "CreateAppResponse";
  /**
   * <p>The app's Amazon Resource Name (ARN).</p>
   */
  AppArn?: string;
}

export namespace CreateAppResponse {
  export const filterSensitiveLog = (obj: CreateAppResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAppResponse =>
    __isa(o, "CreateAppResponse");
}

export interface CreateAutoMLJobRequest {
  __type?: "CreateAutoMLJobRequest";
  /**
   * <p>Contains CompletionCriteria and SecurityConfig.</p>
   */
  AutoMLJobConfig?: AutoMLJobConfig;

  /**
   * <p>Identifies an AutoPilot job. Must be unique to your account and is
   *         case-insensitive.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>Defines the job's objective. You provide a MetricName and AutoML will infer minimize or maximize.
   *          If this is not provided, the most commonly used ObjectiveMetric for problem type will be selected.</p>
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>This will generate possible candidates without training a model.
   *           A candidate is a combination of data preprocessors, algorithms, and algorithm parameter settings.</p>
   */
  GenerateCandidateDefinitionsOnly?: boolean;

  /**
   * <p>Similar to InputDataConfig supported by Tuning.
   *           Format(s) supported: CSV.</p>
   */
  InputDataConfig: AutoMLChannel[] | undefined;

  /**
   * <p>Similar to OutputDataConfig supported by Tuning.
   *           Format(s) supported: CSV.</p>
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * <p>Defines the kind of preprocessing and algorithms intended for the candidates.
   *           Options include: BinaryClassification, MulticlassClassification, and Regression.</p>
   */
  ProblemType?: ProblemType | string;

  /**
   * <p>The ARN of the role that will be used to access the data.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Each tag consists of a key and an optional value.
   *           Tag keys must be unique per resource.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAutoMLJobRequest {
  export const filterSensitiveLog = (obj: CreateAutoMLJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAutoMLJobRequest =>
    __isa(o, "CreateAutoMLJobRequest");
}

export interface CreateAutoMLJobResponse {
  __type?: "CreateAutoMLJobResponse";
  /**
   * <p>When a job is created, it is assigned a unique ARN.</p>
   */
  AutoMLJobArn: string | undefined;
}

export namespace CreateAutoMLJobResponse {
  export const filterSensitiveLog = (obj: CreateAutoMLJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAutoMLJobResponse =>
    __isa(o, "CreateAutoMLJobResponse");
}

export interface CreateCodeRepositoryInput {
  __type?: "CreateCodeRepositoryInput";
  /**
   * <p>The name of the Git repository. The name must have 1 to 63 characters. Valid
   *             characters are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>Specifies details about the repository, including the URL where the repository is
   *             located, the default branch, and credentials to use to access the repository.</p>
   */
  GitConfig: GitConfig | undefined;
}

export namespace CreateCodeRepositoryInput {
  export const filterSensitiveLog = (obj: CreateCodeRepositoryInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCodeRepositoryInput =>
    __isa(o, "CreateCodeRepositoryInput");
}

export interface CreateCodeRepositoryOutput {
  __type?: "CreateCodeRepositoryOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the new repository.</p>
   */
  CodeRepositoryArn: string | undefined;
}

export namespace CreateCodeRepositoryOutput {
  export const filterSensitiveLog = (obj: CreateCodeRepositoryOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCodeRepositoryOutput =>
    __isa(o, "CreateCodeRepositoryOutput");
}

export interface CreateCompilationJobRequest {
  __type?: "CreateCompilationJobRequest";
  /**
   * <p>A name for the model compilation job. The name must be unique within the AWS Region
   *             and within your AWS account. </p>
   */
  CompilationJobName: string | undefined;

  /**
   * <p>Provides information about the location of input model artifacts, the name and shape
   *             of the expected data inputs, and the framework in which the model was trained.</p>
   */
  InputConfig: InputConfig | undefined;

  /**
   * <p>Provides information about the output location for the compiled model and the target
   *             device the model runs on.</p>
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on
   *             your behalf. </p>
   *         <p>During model compilation, Amazon SageMaker needs your permission to:</p>
   *         <ul>
   *             <li>
   *                 <p>Read input data from an S3 bucket</p>
   *             </li>
   *             <li>
   *                 <p>Write model artifacts to an S3 bucket</p>
   *             </li>
   *             <li>
   *                 <p>Write logs to Amazon CloudWatch Logs</p>
   *             </li>
   *             <li>
   *                 <p>Publish metrics to Amazon CloudWatch</p>
   *             </li>
   *          </ul>
   *         <p>You grant permissions for all of these tasks to an IAM role. To pass this role to
   *             Amazon SageMaker, the caller of this API must have the <code>iam:PassRole</code> permission. For
   *             more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">Amazon SageMaker
   *                 Roles.</a>
   *          </p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Specifies a limit to how long a model compilation job can run. When the job reaches
   *             the time limit, Amazon SageMaker ends the compilation job. Use this API to cap model training
   *             costs.</p>
   */
  StoppingCondition: StoppingCondition | undefined;
}

export namespace CreateCompilationJobRequest {
  export const filterSensitiveLog = (
    obj: CreateCompilationJobRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCompilationJobRequest =>
    __isa(o, "CreateCompilationJobRequest");
}

export interface CreateCompilationJobResponse {
  __type?: "CreateCompilationJobResponse";
  /**
   * <p>If the action is successful, the service sends back an HTTP 200 response. Amazon SageMaker returns
   *             the following data in JSON format:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>CompilationJobArn</code>: The Amazon Resource Name (ARN) of the compiled
   *                     job.</p>
   *             </li>
   *          </ul>
   */
  CompilationJobArn: string | undefined;
}

export namespace CreateCompilationJobResponse {
  export const filterSensitiveLog = (
    obj: CreateCompilationJobResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCompilationJobResponse =>
    __isa(o, "CreateCompilationJobResponse");
}

export interface CreateDomainRequest {
  __type?: "CreateDomainRequest";
  /**
   * <p>The mode of authentication that member use to access the domain.</p>
   */
  AuthMode: AuthMode | string | undefined;

  /**
   * <p>The default user settings.</p>
   */
  DefaultUserSettings: UserSettings | undefined;

  /**
   * <p>A name for the domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The AWS Key Management Service encryption key ID.</p>
   */
  HomeEfsFileSystemKmsKeyId?: string;

  /**
   * <p>Security setting to limit to a set of subnets.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>Each tag consists of a key and an optional value.
   *          Tag keys must be unique per resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Security setting to limit the domain's communication to a Amazon Virtual Private Cloud.</p>
   */
  VpcId: string | undefined;
}

export namespace CreateDomainRequest {
  export const filterSensitiveLog = (obj: CreateDomainRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDomainRequest =>
    __isa(o, "CreateDomainRequest");
}

export interface CreateDomainResponse {
  __type?: "CreateDomainResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the created domain.</p>
   */
  DomainArn?: string;

  /**
   * <p>The URL to the created domain.</p>
   */
  Url?: string;
}

export namespace CreateDomainResponse {
  export const filterSensitiveLog = (obj: CreateDomainResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDomainResponse =>
    __isa(o, "CreateDomainResponse");
}

export interface CreateEndpointConfigInput {
  __type?: "CreateEndpointConfigInput";
  /**
   * <p></p>
   */
  DataCaptureConfig?: DataCaptureConfig;

  /**
   * <p>The name of the endpoint configuration. You specify this name in a <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html">CreateEndpoint</a> request. </p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on
   *             the storage volume attached to the ML compute instance that hosts the endpoint.</p>
   *         <p>The KmsKeyId can be any of the following formats: </p>
   *         <ul>
   *             <li>
   *                 <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>Key ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>Alias name ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>The KMS key policy must grant permission to the IAM role that you specify in your
   *                 <code>CreateEndpoint</code>, <code>UpdateEndpoint</code> requests. For more
   *             information, refer to the AWS Key Management Service section<a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html"> Using Key
   *                 Policies in AWS KMS </a>
   *          </p>
   *         <note>
   *             <p>Certain Nitro-based instances include local storage, dependent on the instance
   *                 type. Local storage volumes are encrypted using a hardware module on the instance.
   *                 You can't request a <code>KmsKeyId</code> when using an instance type with local
   *                 storage. If any of the models that you specify in the
   *                     <code>ProductionVariants</code> parameter use nitro-based instances with local
   *                 storage, do not specify a value for the <code>KmsKeyId</code> parameter. If you
   *                 specify a value for <code>KmsKeyId</code> when using any nitro-based instances with
   *                 local storage, the call to <code>CreateEndpointConfig</code> fails.</p>
   *             <p>For a list of instance types that support local instance storage, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes">Instance Store Volumes</a>.</p>
   *             <p>For more information about local instance storage encryption, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html">SSD
   *                     Instance Store Volumes</a>.</p>
   *         </note>
   */
  KmsKeyId?: string;

  /**
   * <p>An list of <code>ProductionVariant</code> objects, one for each model that you want
   *             to host at this endpoint.</p>
   */
  ProductionVariants: ProductionVariant[] | undefined;

  /**
   * <p>A list of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i> AWS Billing and Cost Management User
   *                 Guide</i>. </p>
   */
  Tags?: Tag[];
}

export namespace CreateEndpointConfigInput {
  export const filterSensitiveLog = (obj: CreateEndpointConfigInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateEndpointConfigInput =>
    __isa(o, "CreateEndpointConfigInput");
}

export interface CreateEndpointConfigOutput {
  __type?: "CreateEndpointConfigOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration. </p>
   */
  EndpointConfigArn: string | undefined;
}

export namespace CreateEndpointConfigOutput {
  export const filterSensitiveLog = (obj: CreateEndpointConfigOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateEndpointConfigOutput =>
    __isa(o, "CreateEndpointConfigOutput");
}

export interface CreateEndpointInput {
  __type?: "CreateEndpointInput";
  /**
   * <p>The name of an endpoint configuration. For more information, see
   *             <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpointConfig.html">CreateEndpointConfig</a>. </p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>The name of the endpoint. The name must be unique within an AWS Region in your AWS
   *             account.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a>in the <i>AWS Billing and Cost Management User
   *                 Guide</i>.
   *
   *         </p>
   */
  Tags?: Tag[];
}

export namespace CreateEndpointInput {
  export const filterSensitiveLog = (obj: CreateEndpointInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateEndpointInput =>
    __isa(o, "CreateEndpointInput");
}

export interface CreateEndpointOutput {
  __type?: "CreateEndpointOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

export namespace CreateEndpointOutput {
  export const filterSensitiveLog = (obj: CreateEndpointOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateEndpointOutput =>
    __isa(o, "CreateEndpointOutput");
}

export interface CreateExperimentRequest {
  __type?: "CreateExperimentRequest";
  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * <p>The name of the experiment as displayed. The name doesn't need to be
   *       unique. If you don't specify <code>DisplayName</code>, the value in
   *       <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the experiment. The name must be unique in your AWS account and is not
   *       case-sensitive.</p>
   */
  ExperimentName: string | undefined;

  /**
   * <p>A list of tags to associate with the experiment. You can use <a>Search</a> API
   *       to search on the tags.</p>
   */
  Tags?: Tag[];
}

export namespace CreateExperimentRequest {
  export const filterSensitiveLog = (obj: CreateExperimentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateExperimentRequest =>
    __isa(o, "CreateExperimentRequest");
}

export interface CreateExperimentResponse {
  __type?: "CreateExperimentResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;
}

export namespace CreateExperimentResponse {
  export const filterSensitiveLog = (obj: CreateExperimentResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateExperimentResponse =>
    __isa(o, "CreateExperimentResponse");
}

export interface CreateFlowDefinitionRequest {
  __type?: "CreateFlowDefinitionRequest";
  /**
   * <p>The name of your flow definition.</p>
   */
  FlowDefinitionName: string | undefined;

  /**
   * <p>An object containing information about the events that trigger a human workflow.</p>
   */
  HumanLoopActivationConfig?: HumanLoopActivationConfig;

  /**
   * <p>An object containing information about the tasks the human reviewers will perform.</p>
   */
  HumanLoopConfig: HumanLoopConfig | undefined;

  /**
   * <p>An object containing information about where the human review results will be uploaded.</p>
   */
  OutputConfig: FlowDefinitionOutputConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role needed to call other services on your behalf. For example, <code>arn:aws:iam::1234567890:role/service-role/AmazonSageMaker-ExecutionRole-20180111T151298</code>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>An array of key-value pairs that contain metadata to help you categorize and organize a flow definition. Each tag consists of a key and a value, both of which you define.</p>
   */
  Tags?: Tag[];
}

export namespace CreateFlowDefinitionRequest {
  export const filterSensitiveLog = (
    obj: CreateFlowDefinitionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateFlowDefinitionRequest =>
    __isa(o, "CreateFlowDefinitionRequest");
}

export interface CreateFlowDefinitionResponse {
  __type?: "CreateFlowDefinitionResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition you create.</p>
   */
  FlowDefinitionArn: string | undefined;
}

export namespace CreateFlowDefinitionResponse {
  export const filterSensitiveLog = (
    obj: CreateFlowDefinitionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateFlowDefinitionResponse =>
    __isa(o, "CreateFlowDefinitionResponse");
}

export interface CreateHumanTaskUiRequest {
  __type?: "CreateHumanTaskUiRequest";
  /**
   * <p>The name of the user interface you are creating.</p>
   */
  HumanTaskUiName: string | undefined;

  /**
   * <p>An array of key-value pairs that contain metadata to help you categorize and organize a human review workflow user interface. Each tag consists of a key and a value, both of which you define.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Liquid template for the worker user interface.</p>
   */
  UiTemplate: UiTemplate | undefined;
}

export namespace CreateHumanTaskUiRequest {
  export const filterSensitiveLog = (obj: CreateHumanTaskUiRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHumanTaskUiRequest =>
    __isa(o, "CreateHumanTaskUiRequest");
}

export interface CreateHumanTaskUiResponse {
  __type?: "CreateHumanTaskUiResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the human review workflow user interface you create.</p>
   */
  HumanTaskUiArn: string | undefined;
}

export namespace CreateHumanTaskUiResponse {
  export const filterSensitiveLog = (obj: CreateHumanTaskUiResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHumanTaskUiResponse =>
    __isa(o, "CreateHumanTaskUiResponse");
}

export interface CreateHyperParameterTuningJobRequest {
  __type?: "CreateHyperParameterTuningJobRequest";
  /**
   * <p>The <a>HyperParameterTuningJobConfig</a> object that describes the tuning
   *             job, including the search strategy, the objective metric used to evaluate training jobs,
   *             ranges of parameters to search, and resource limits for the tuning job. For more
   *             information, see <a>automatic-model-tuning</a>
   *          </p>
   */
  HyperParameterTuningJobConfig: HyperParameterTuningJobConfig | undefined;

  /**
   * <p>The name of the tuning job. This name is the prefix for the names of all training jobs
   *             that this tuning job launches. The name must be unique within the same AWS account and
   *             AWS Region. The name must have { } to { } characters. Valid characters are a-z, A-Z,
   *             0-9, and : + = @ _ % - (hyphen). The name is not case sensitive.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>An array of key-value pairs. You can use tags to categorize your AWS resources in
   *             different ways, for example, by purpose, owner, or environment. For more information,
   *             see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
   *                 Tagging Strategies</a>.</p>
   *         <p>Tags that you specify for the tuning job are also added to all training jobs that the
   *             tuning job launches.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The <a>HyperParameterTrainingJobDefinition</a> object that describes the
   *             training jobs that this tuning job launches,
   *             including
   *             static hyperparameters, input data configuration, output data configuration, resource
   *             configuration, and stopping condition.</p>
   */
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition;

  /**
   * <p></p>
   */
  TrainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  /**
   * <p>Specifies the configuration for starting the hyperparameter tuning job using one or
   *             more previous tuning jobs as a starting point. The results of previous tuning jobs are
   *             used to inform which combinations of hyperparameters to search over in the new tuning
   *             job.</p>
   *         <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using
   *             the objective metric. If you specify <code>IDENTICAL_DATA_AND_ALGORITHM</code> as the
   *                 <code>WarmStartType</code> value for the warm start configuration, the training job
   *             that performs the best in the new tuning job is compared to the best training jobs from
   *             the parent tuning jobs. From these, the training job that performs the best as measured
   *             by the objective metric is returned as the overall best training job.</p>
   *         <note>
   *             <p>All training jobs launched by parent hyperparameter tuning jobs and the new
   *                 hyperparameter tuning jobs count against the limit of training jobs for the tuning
   *                 job.</p>
   *         </note>
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;
}

export namespace CreateHyperParameterTuningJobRequest {
  export const filterSensitiveLog = (
    obj: CreateHyperParameterTuningJobRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHyperParameterTuningJobRequest =>
    __isa(o, "CreateHyperParameterTuningJobRequest");
}

export interface CreateHyperParameterTuningJobResponse {
  __type?: "CreateHyperParameterTuningJobResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the tuning job. Amazon SageMaker assigns an ARN to a
   *             hyperparameter tuning job when you create it.</p>
   */
  HyperParameterTuningJobArn: string | undefined;
}

export namespace CreateHyperParameterTuningJobResponse {
  export const filterSensitiveLog = (
    obj: CreateHyperParameterTuningJobResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateHyperParameterTuningJobResponse =>
    __isa(o, "CreateHyperParameterTuningJobResponse");
}

export interface CreateLabelingJobRequest {
  __type?: "CreateLabelingJobRequest";
  /**
   * <p>Configures the labeling task and how it is presented to workers; including, but not limited to price, keywords, and batch size (task count).</p>
   */
  HumanTaskConfig: HumanTaskConfig | undefined;

  /**
   * <p>Input data for the labeling job, such as the Amazon S3 location of the data objects and the
   *             location of the manifest file that describes the data objects.</p>
   */
  InputConfig: LabelingJobInputConfig | undefined;

  /**
   * <p>The attribute name to use for the label in the output manifest file. This is the key
   *             for the key/value pair formed with the label that a worker assigns to the object. The
   *             name can't end with "-metadata". If you are running a semantic segmentation labeling
   *             job, the attribute name must end with "-ref". If you are running any other kind of
   *             labeling job, the attribute name must not end with "-ref".</p>
   */
  LabelAttributeName: string | undefined;

  /**
   * <p>The S3 URL of the file that defines the categories used to label the data
   *             objects.</p>
   *         <p>The file is a JSON structure in the following format:</p>
   *         <p>
   *             <code>{</code>
   *         </p>
   *         <p>
   *             <code> "document-version": "2018-11-28"</code>
   *         </p>
   *         <p>
   *             <code> "labels": [</code>
   *         </p>
   *         <p>
   *             <code> {</code>
   *         </p>
   *         <p>
   *             <code> "label": "<i>label 1</i>"</code>
   *         </p>
   *         <p>
   *             <code> },</code>
   *         </p>
   *         <p>
   *             <code> {</code>
   *         </p>
   *         <p>
   *             <code> "label": "<i>label 2</i>"</code>
   *         </p>
   *         <p>
   *             <code> },</code>
   *         </p>
   *         <p>
   *             <code> ...</code>
   *         </p>
   *         <p>
   *             <code> {</code>
   *         </p>
   *         <p>
   *             <code> "label": "<i>label n</i>"</code>
   *         </p>
   *         <p>
   *             <code> }</code>
   *         </p>
   *         <p>
   *             <code> ]</code>
   *         </p>
   *         <p>
   *             <code>}</code>
   *         </p>
   */
  LabelCategoryConfigS3Uri?: string;

  /**
   * <p>Configures the information required to perform automated data labeling.</p>
   */
  LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

  /**
   * <p>The name of the labeling job. This name is used to identify the job in a list of
   *             labeling jobs.</p>
   */
  LabelingJobName: string | undefined;

  /**
   * <p>The location of the output data and the AWS Key Management Service key ID for the key used to encrypt
   *             the output data, if any.</p>
   */
  OutputConfig: LabelingJobOutputConfig | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) that Amazon SageMaker assumes to perform tasks on your behalf
   *             during data labeling. You must grant this role the necessary permissions so that Amazon SageMaker
   *             can successfully complete data labeling.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A set of conditions for stopping the labeling job. If any of the conditions are met,
   *             the job is automatically stopped. You can use these conditions to control the cost of
   *             data labeling.</p>
   */
  StoppingConditions?: LabelingJobStoppingConditions;

  /**
   * <p>An array of key/value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management
   *                 User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateLabelingJobRequest {
  export const filterSensitiveLog = (obj: CreateLabelingJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateLabelingJobRequest =>
    __isa(o, "CreateLabelingJobRequest");
}

export interface CreateLabelingJobResponse {
  __type?: "CreateLabelingJobResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the labeling job. You use this ARN to identify the
   *             labeling job.</p>
   */
  LabelingJobArn: string | undefined;
}

export namespace CreateLabelingJobResponse {
  export const filterSensitiveLog = (obj: CreateLabelingJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateLabelingJobResponse =>
    __isa(o, "CreateLabelingJobResponse");
}

export interface CreateModelInput {
  __type?: "CreateModelInput";
  /**
   * <p>Specifies the containers in the inference pipeline.</p>
   */
  Containers?: ContainerDefinition[];

  /**
   * <p>Isolates the model container. No inbound or outbound network calls can be made to or
   *             from the model container.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker can assume to access model
   *             artifacts and docker image for deployment on ML compute instances or for batch transform
   *             jobs. Deploying on ML compute instances is part of model hosting. For more information,
   *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">Amazon SageMaker
   *                 Roles</a>. </p>
   *         <note>
   *             <p>To be able to pass this role to Amazon SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *         </note>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>The name of the new model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The location of the primary docker image containing inference code, associated
   *             artifacts, and custom environment map that the inference code uses when the model is
   *             deployed for predictions. </p>
   */
  PrimaryContainer?: ContainerDefinition;

  /**
   * <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User
   *                 Guide</i>.
   *         </p>
   */
  Tags?: Tag[];

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_VpcConfig.html">VpcConfig</a> object that specifies the VPC that you want your model to connect
   *             to. Control access to and from your model container by configuring the VPC.
   *                 <code>VpcConfig</code> is used in hosting services and in batch transform. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-vpc.html">Protect Data in Batch
   *                 Transform Jobs by Using an Amazon Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;
}

export namespace CreateModelInput {
  export const filterSensitiveLog = (obj: CreateModelInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateModelInput =>
    __isa(o, "CreateModelInput");
}

export interface CreateModelOutput {
  __type?: "CreateModelOutput";
  /**
   * <p>The ARN of the model created in Amazon SageMaker.</p>
   */
  ModelArn: string | undefined;
}

export namespace CreateModelOutput {
  export const filterSensitiveLog = (obj: CreateModelOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateModelOutput =>
    __isa(o, "CreateModelOutput");
}

export interface CreateModelPackageInput {
  __type?: "CreateModelPackageInput";
  /**
   * <p>Whether to certify the model package for listing on AWS Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * <p>Specifies details about inference jobs that can be run with models based on this model
   *             package, including the following:</p>
   *         <ul>
   *             <li>
   *                 <p>The Amazon ECR paths of containers that contain the inference code and model
   *                     artifacts.</p>
   *             </li>
   *             <li>
   *                 <p>The instance types that the model package supports for transform jobs and
   *                     real-time endpoints used for inference.</p>
   *             </li>
   *             <li>
   *                 <p>The input and output content formats that the model package supports for
   *                     inference.</p>
   *             </li>
   *          </ul>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>A description of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>The name of the model package. The name must have 1 to 63 characters. Valid characters
   *             are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  ModelPackageName: string | undefined;

  /**
   * <p>Details about the algorithm that was used to create the model package.</p>
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  /**
   * <p>Specifies configurations for one or more transform jobs that Amazon SageMaker runs to test the
   *             model package.</p>
   */
  ValidationSpecification?: ModelPackageValidationSpecification;
}

export namespace CreateModelPackageInput {
  export const filterSensitiveLog = (obj: CreateModelPackageInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateModelPackageInput =>
    __isa(o, "CreateModelPackageInput");
}

export interface CreateModelPackageOutput {
  __type?: "CreateModelPackageOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the new model package.</p>
   */
  ModelPackageArn: string | undefined;
}

export namespace CreateModelPackageOutput {
  export const filterSensitiveLog = (obj: CreateModelPackageOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateModelPackageOutput =>
    __isa(o, "CreateModelPackageOutput");
}

export interface CreateMonitoringScheduleRequest {
  __type?: "CreateMonitoringScheduleRequest";
  /**
   * <p>The configuration object that specifies the monitoring schedule and defines the
   *          monitoring job.</p>
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;

  /**
   * <p>The name of the monitoring schedule. The name must be unique within an AWS Region within
   *          an AWS account.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>(Optional) An array of key-value pairs. For more information, see <a href=" https://docs-aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management
   *             User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateMonitoringScheduleRequest {
  export const filterSensitiveLog = (
    obj: CreateMonitoringScheduleRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateMonitoringScheduleRequest =>
    __isa(o, "CreateMonitoringScheduleRequest");
}

export interface CreateMonitoringScheduleResponse {
  __type?: "CreateMonitoringScheduleResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;
}

export namespace CreateMonitoringScheduleResponse {
  export const filterSensitiveLog = (
    obj: CreateMonitoringScheduleResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateMonitoringScheduleResponse =>
    __isa(o, "CreateMonitoringScheduleResponse");
}

export interface CreateNotebookInstanceInput {
  __type?: "CreateNotebookInstanceInput";
  /**
   * <p>A list of Elastic Inference (EI) instance types to associate with this notebook
   *             instance. Currently, only one instance type can be associated with a notebook instance.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in Amazon SageMaker</a>.</p>
   */
  AcceleratorTypes?: (NotebookInstanceAcceleratorType | string)[];

  /**
   * <p>An array of up to three Git repositories to associate with the notebook instance.
   *             These can be either the names of Git repositories stored as resources in your account,
   *             or the URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
   *             other Git repository. These repositories are cloned at the same level as the default
   *             repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with Amazon SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];

  /**
   * <p>A Git repository to associate with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
   *             other Git repository. When you open a notebook instance, it opens in the directory that
   *             contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with Amazon SageMaker
   *                 Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>Sets whether Amazon SageMaker provides internet access to the notebook instance. If you set this
   *             to <code>Disabled</code> this notebook instance will be able to access resources only in
   *             your VPC, and will not be able to connect to Amazon SageMaker training and endpoint services unless
   *             your configure a NAT Gateway in your VPC.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/appendix-additional-considerations.html#appendix-notebook-and-internet-access">Notebook Instances Are Internet-Enabled by Default</a>. You can set the value
   *             of this parameter to <code>Disabled</code> only if you set a value for the
   *                 <code>SubnetId</code> parameter.</p>
   */
  DirectInternetAccess?: DirectInternetAccess | string;

  /**
   * <p>The type of ML compute instance to launch for the notebook instance.</p>
   */
  InstanceType: _InstanceType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on
   *             the storage volume attached to your notebook instance. The KMS key you provide must be
   *             enabled. For information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/enabling-keys.html">Enabling and Disabling
   *                 Keys</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of a lifecycle configuration to associate with the notebook instance. For
   *             information about lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional)
   *                 Customize a Notebook Instance</a>.</p>
   */
  LifecycleConfigName?: string;

  /**
   * <p>The name of the new notebook instance.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p> When you send any requests to AWS resources from the notebook instance, Amazon SageMaker
   *             assumes this role to perform tasks on your behalf. You must grant this role necessary
   *             permissions so Amazon SageMaker can perform these tasks. The policy must allow the Amazon SageMaker service
   *             principal (sagemaker.amazonaws.com) permissions to assume this role. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">Amazon SageMaker Roles</a>. </p>
   *         <note>
   *             <p>To be able to pass this role to Amazon SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *         </note>
   */
  RoleArn: string | undefined;

  /**
   * <p>Whether root access is enabled or disabled for users of the notebook instance. The
   *             default value is <code>Enabled</code>.</p>
   *         <note>
   *             <p>Lifecycle configurations need root access to be able to set up a notebook
   *                 instance. Because of this, lifecycle configurations associated with a notebook
   *                 instance always run with root access even if you disable root access for
   *                 users.</p>
   *         </note>
   */
  RootAccess?: RootAccess | string;

  /**
   * <p>The VPC security group IDs, in the form sg-xxxxxxxx. The security groups must be
   *             for the same VPC as specified in the subnet. </p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The ID of the subnet in a VPC to which you would like to have a connectivity from
   *             your ML compute instance. </p>
   */
  SubnetId?: string;

  /**
   * <p>A list of tags to associate with the notebook instance. You can add tags later by
   *             using the <code>CreateTags</code> API.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The size, in GB, of the ML storage volume to attach to the notebook instance. The
   *             default value is 5 GB.</p>
   */
  VolumeSizeInGB?: number;
}

export namespace CreateNotebookInstanceInput {
  export const filterSensitiveLog = (
    obj: CreateNotebookInstanceInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateNotebookInstanceInput =>
    __isa(o, "CreateNotebookInstanceInput");
}

export interface CreateNotebookInstanceLifecycleConfigInput {
  __type?: "CreateNotebookInstanceLifecycleConfigInput";
  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * <p>A shell script that runs only once, when you create a notebook instance. The shell
   *             script must be a base64-encoded string.</p>
   */
  OnCreate?: NotebookInstanceLifecycleHook[];

  /**
   * <p>A shell script that runs every time you start a notebook instance, including when you
   *             create the notebook instance. The shell script must be a base64-encoded string.</p>
   */
  OnStart?: NotebookInstanceLifecycleHook[];
}

export namespace CreateNotebookInstanceLifecycleConfigInput {
  export const filterSensitiveLog = (
    obj: CreateNotebookInstanceLifecycleConfigInput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is CreateNotebookInstanceLifecycleConfigInput =>
    __isa(o, "CreateNotebookInstanceLifecycleConfigInput");
}

export interface CreateNotebookInstanceLifecycleConfigOutput {
  __type?: "CreateNotebookInstanceLifecycleConfigOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigArn?: string;
}

export namespace CreateNotebookInstanceLifecycleConfigOutput {
  export const filterSensitiveLog = (
    obj: CreateNotebookInstanceLifecycleConfigOutput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is CreateNotebookInstanceLifecycleConfigOutput =>
    __isa(o, "CreateNotebookInstanceLifecycleConfigOutput");
}

export interface CreateNotebookInstanceOutput {
  __type?: "CreateNotebookInstanceOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the notebook instance. </p>
   */
  NotebookInstanceArn?: string;
}

export namespace CreateNotebookInstanceOutput {
  export const filterSensitiveLog = (
    obj: CreateNotebookInstanceOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateNotebookInstanceOutput =>
    __isa(o, "CreateNotebookInstanceOutput");
}

export interface CreatePresignedDomainUrlRequest {
  __type?: "CreatePresignedDomainUrlRequest";
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The session expiration duration in seconds.</p>
   */
  SessionExpirationDurationInSeconds?: number;

  /**
   * <p>The name of the UserProfile to sign-in as.</p>
   */
  UserProfileName: string | undefined;
}

export namespace CreatePresignedDomainUrlRequest {
  export const filterSensitiveLog = (
    obj: CreatePresignedDomainUrlRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePresignedDomainUrlRequest =>
    __isa(o, "CreatePresignedDomainUrlRequest");
}

export interface CreatePresignedDomainUrlResponse {
  __type?: "CreatePresignedDomainUrlResponse";
  /**
   * <p>The presigned URL.</p>
   */
  AuthorizedUrl?: string;
}

export namespace CreatePresignedDomainUrlResponse {
  export const filterSensitiveLog = (
    obj: CreatePresignedDomainUrlResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePresignedDomainUrlResponse =>
    __isa(o, "CreatePresignedDomainUrlResponse");
}

export interface CreatePresignedNotebookInstanceUrlInput {
  __type?: "CreatePresignedNotebookInstanceUrlInput";
  /**
   * <p>The name of the notebook instance.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The duration of the session, in seconds. The default is 12 hours.</p>
   */
  SessionExpirationDurationInSeconds?: number;
}

export namespace CreatePresignedNotebookInstanceUrlInput {
  export const filterSensitiveLog = (
    obj: CreatePresignedNotebookInstanceUrlInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePresignedNotebookInstanceUrlInput =>
    __isa(o, "CreatePresignedNotebookInstanceUrlInput");
}

export interface CreatePresignedNotebookInstanceUrlOutput {
  __type?: "CreatePresignedNotebookInstanceUrlOutput";
  /**
   * <p>A JSON object that contains the URL string. </p>
   */
  AuthorizedUrl?: string;
}

export namespace CreatePresignedNotebookInstanceUrlOutput {
  export const filterSensitiveLog = (
    obj: CreatePresignedNotebookInstanceUrlOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePresignedNotebookInstanceUrlOutput =>
    __isa(o, "CreatePresignedNotebookInstanceUrlOutput");
}

export interface CreateProcessingJobRequest {
  __type?: "CreateProcessingJobRequest";
  /**
   * <p>Configures the processing job to run a specified Docker container image.</p>
   */
  AppSpecification: AppSpecification | undefined;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>Configuration for the experiment.</p>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>Networking options for a processing job.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * <p>For each input, data is downloaded from S3 into the processing container before the
   *             processing job begins running if "S3InputMode" is set to <code>File</code>.</p>
   */
  ProcessingInputs?: ProcessingInput[];

  /**
   * <p> The name of the processing job. The name must be unique within an AWS Region in the
   *             AWS account.</p>
   */
  ProcessingJobName: string | undefined;

  /**
   * <p>Output configuration for the processing job.</p>
   */
  ProcessingOutputConfig?: ProcessingOutputConfig;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *             processing job. In distributed training, you specify more than one instance.</p>
   */
  ProcessingResources: ProcessingResources | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on
   *             your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The time limit for how long the processing job is allowed to run.</p>
   */
  StoppingCondition?: ProcessingStoppingCondition;

  /**
   * <p>(Optional) An array of key-value pairs. For more information, see <a href="https://docs-aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-whatURL">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management
   *                 User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateProcessingJobRequest {
  export const filterSensitiveLog = (obj: CreateProcessingJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateProcessingJobRequest =>
    __isa(o, "CreateProcessingJobRequest");
}

export interface CreateProcessingJobResponse {
  __type?: "CreateProcessingJobResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   */
  ProcessingJobArn: string | undefined;
}

export namespace CreateProcessingJobResponse {
  export const filterSensitiveLog = (
    obj: CreateProcessingJobResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateProcessingJobResponse =>
    __isa(o, "CreateProcessingJobResponse");
}

export interface CreateTrainingJobRequest {
  __type?: "CreateTrainingJobRequest";
  /**
   * <p>The registry path of the Docker image that contains the training algorithm and
   *             algorithm-specific metadata, including the input mode. For more information about
   *             algorithms provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about
   *             providing your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
   *                 SageMaker</a>. </p>
   */
  AlgorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data.</p>
   */
  CheckpointConfig?: CheckpointConfig;

  /**
   * <p>Configuration information for the debug hook parameters, collection configuration, and
   *             storage paths.</p>
   */
  DebugHookConfig?: DebugHookConfig;

  /**
   * <p>Configuration information for debugging rules.</p>
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithm in
   *             distributed training. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-encrypt.html">Protect Communications Between ML
   *                 Compute Instances in a Distributed Training Job</a>.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>To train models using managed spot training, choose <code>True</code>. Managed spot
   *             training provides a fully managed and scalable infrastructure for training machine
   *             learning models. this option is useful when training jobs can be interrupted and when
   *             there is flexibility when the training job is run. </p>
   *         <p>The complete and intermediate results of jobs are stored in an Amazon S3 bucket, and can be
   *             used as a starting point to train models incrementally. Amazon SageMaker provides metrics and
   *             logs in CloudWatch. They can be used to see when managed spot training jobs are running,
   *             interrupted, resumed, or completed. </p>
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * <p>Isolates the training container. No inbound or outbound network calls can be made,
   *             except for calls between peers within a training cluster for distributed training. If
   *             you enable network isolation for training jobs that are configured to use a VPC, Amazon SageMaker
   *             downloads and uploads customer data and model artifacts through the specified VPC, but
   *             the training container does not have network access.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>Configuration for the experiment.</p>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>Algorithm-specific parameters that influence the quality of the model. You set
   *             hyperparameters before you start the learning process. For a list of hyperparameters for
   *             each training algorithm provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p>
   *         <p>You can specify a maximum of 100 hyperparameters. Each hyperparameter is a
   *             key-value pair. Each key and value is limited to 256 characters, as specified by the
   *                 <code>Length Constraint</code>. </p>
   */
  HyperParameters?: { [key: string]: string };

  /**
   * <p>An array of <code>Channel</code> objects. Each channel is a named input source.
   *                 <code>InputDataConfig</code>
   *
   *             describes the input data and its location. </p>
   *         <p>Algorithms can accept input data from one or more channels. For example, an
   *             algorithm might have two channels of input data, <code>training_data</code> and
   *                 <code>validation_data</code>. The configuration for each channel provides the S3,
   *             EFS, or FSx location where the input data is stored. It also provides information about
   *             the stored data: the MIME type, compression method, and whether the data is wrapped in
   *             RecordIO format. </p>
   *         <p>Depending on the input mode that the algorithm supports, Amazon SageMaker either copies input
   *             data files from an S3 bucket to a local directory in the Docker container, or makes it
   *             available as input streams. For example, if you specify an EFS location, input data
   *             files will be made available as input streams. They do not need to be
   *             downloaded.</p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>Specifies the path to the S3 location where you want to store model artifacts. Amazon SageMaker
   *             creates subfolders for the artifacts. </p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The resources, including the ML compute instances and ML storage volumes, to use
   *             for model training. </p>
   *         <p>ML storage volumes store model artifacts and incremental states. Training
   *             algorithms might also use ML storage volumes for scratch space. If you want Amazon SageMaker to use
   *             the ML storage volume to store the training data, choose <code>File</code> as the
   *                 <code>TrainingInputMode</code> in the algorithm specification. For distributed
   *             training algorithms, specify an instance count greater than 1.</p>
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform
   *             tasks on your behalf. </p>
   *         <p>During model training, Amazon SageMaker needs your permission to read input data from an S3
   *             bucket, download a Docker image that contains training code, write model artifacts to an
   *             S3 bucket, write logs to Amazon CloudWatch Logs, and publish metrics to Amazon CloudWatch. You grant
   *             permissions for all of these tasks to an IAM role. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">Amazon SageMaker
   *                 Roles</a>. </p>
   *         <note>
   *             <p>To be able to pass this role to Amazon SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *         </note>
   */
  RoleArn: string | undefined;

  /**
   * <p>Specifies a limit to how long a model training job can run. When the job reaches the
   *             time limit, Amazon SageMaker ends the training job. Use this API to cap model training costs.</p>
   *         <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
   *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
   *             model artifacts, so the results of training are not lost. </p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User
   *                 Guide</i>.
   *
   *         </p>
   */
  Tags?: Tag[];

  /**
   * <p>Configuration of storage locations for TensorBoard output.</p>
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * <p>The name of the training job. The name must be unique within an AWS Region in an
   *             AWS account. </p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that you want your
   *             training job to connect to. Control access to and from your training container by
   *             configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;
}

export namespace CreateTrainingJobRequest {
  export const filterSensitiveLog = (obj: CreateTrainingJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTrainingJobRequest =>
    __isa(o, "CreateTrainingJobRequest");
}

export interface CreateTrainingJobResponse {
  __type?: "CreateTrainingJobResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;
}

export namespace CreateTrainingJobResponse {
  export const filterSensitiveLog = (obj: CreateTrainingJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTrainingJobResponse =>
    __isa(o, "CreateTrainingJobResponse");
}

export interface CreateTransformJobRequest {
  __type?: "CreateTransformJobRequest";
  /**
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference
   *             request. A <i>record</i>
   *             <i></i> is a single unit of input data that
   *             inference can be made on. For example, a single line in a CSV file is a record. </p>
   *         <p>To enable the batch strategy, you must set the <code>SplitType</code> property of the
   *                 <a>DataProcessing</a> object to <code>Line</code>, <code>RecordIO</code>,
   *             or <code>TFRecord</code>.</p>
   *         <p>To use only one record when making an HTTP invocation request to a container, set
   *                 <code>BatchStrategy</code> to <code>SingleRecord</code> and <code>SplitType</code>
   *             to <code>Line</code>.</p>
   *         <p>To fit as many records in a mini-batch as can fit within the
   *                 <code>MaxPayloadInMB</code> limit, set <code>BatchStrategy</code> to
   *                 <code>MultiRecord</code> and <code>SplitType</code> to <code>Line</code>.</p>
   */
  BatchStrategy?: BatchStrategy | string;

  /**
   * <p>The data structure used to specify the data to be used for inference in a batch
   *             transform job and to associate the data that is relevant to the prediction results in
   *             the output. The input filter provided allows you to exclude input data that is not
   *             needed for inference in a batch transform job. The output filter provided allows you to
   *             include input data relevant to interpreting the predictions in the output from the job.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction
   *                 Results with their Corresponding Input Records</a>.</p>
   */
  DataProcessing?: DataProcessing;

  /**
   * <p>The environment variables to set in the Docker container. We support up to 16 key and
   *             values entries in the map.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>Configuration for the experiment.</p>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>The maximum number of parallel requests that can be sent to each instance in a
   *             transform job. If <code>MaxConcurrentTransforms</code> is set to <code>0</code> or left
   *             unset, Amazon SageMaker checks the optional execution-parameters to determine the settings for your
   *             chosen algorithm. If the execution-parameters endpoint is not enabled, the default value
   *             is <code>1</code>. For more information on execution-parameters, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-batch-code.html#your-algorithms-batch-code-how-containe-serves-requests">How Containers Serve Requests</a>. For built-in algorithms, you don't need to
   *             set a value for <code>MaxConcurrentTransforms</code>.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>The maximum allowed size of the payload, in MB. A <i>payload</i> is the
   *             data portion of a record (without metadata). The value in <code>MaxPayloadInMB</code>
   *             must be greater than, or equal to, the size of a single record. To estimate the size of
   *             a record in MB, divide the size of your dataset by the number of records. To ensure that
   *             the records fit within the maximum payload size, we recommend using a slightly larger
   *             value. The default value is <code>6</code> MB.
   *             </p>
   *         <p>For cases where the payload might be arbitrarily large and is transmitted using HTTP
   *             chunked encoding, set the value to <code>0</code>.
   *             This
   *             feature works only in supported algorithms. Currently, Amazon SageMaker built-in
   *             algorithms do not support HTTP chunked encoding.</p>
   */
  MaxPayloadInMB?: number;

  /**
   * <p>The name of the model that you want to use for the transform job.
   *                 <code>ModelName</code> must be the name of an existing Amazon SageMaker model within an AWS
   *             Region in an AWS account.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>(Optional)
   *             An
   *             array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User
   *                 Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Describes the input source and
   *             the
   *             way the transform job consumes it.</p>
   */
  TransformInput: TransformInput | undefined;

  /**
   * <p>The name of the transform job. The name must be unique within an AWS Region in an
   *             AWS account. </p>
   */
  TransformJobName: string | undefined;

  /**
   * <p>Describes the results of the transform job.</p>
   */
  TransformOutput: TransformOutput | undefined;

  /**
   * <p>Describes the resources, including
   *             ML
   *             instance types and ML instance count, to use for the transform
   *             job.</p>
   */
  TransformResources: TransformResources | undefined;
}

export namespace CreateTransformJobRequest {
  export const filterSensitiveLog = (obj: CreateTransformJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTransformJobRequest =>
    __isa(o, "CreateTransformJobRequest");
}

export interface CreateTransformJobResponse {
  __type?: "CreateTransformJobResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn: string | undefined;
}

export namespace CreateTransformJobResponse {
  export const filterSensitiveLog = (obj: CreateTransformJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTransformJobResponse =>
    __isa(o, "CreateTransformJobResponse");
}

export interface CreateTrialComponentRequest {
  __type?: "CreateTrialComponentRequest";
  /**
   * <p>The name of the component as displayed. The name doesn't need to be
   *       unique. If <code>DisplayName</code> isn't specified, <code>TrialComponentName</code> is
   *       displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input artifacts for the component. Examples of input artifacts are datasets,
   *       algorithms, hyperparameters, source code, and instance types.</p>
   */
  InputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The output artifacts for the component. Examples of output artifacts are metrics,
   *       snapshots, logs, and images.</p>
   */
  OutputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The hyperparameters for the component.</p>
   */
  Parameters?: { [key: string]: TrialComponentParameterValue };

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of the component. States include:</p>
   *          <ul>
   *             <li>
   *                <p>InProgress</p>
   *             </li>
   *             <li>
   *                <p>Completed</p>
   *             </li>
   *             <li>
   *                <p>Failed</p>
   *             </li>
   *          </ul>
   */
  Status?: TrialComponentStatus;

  /**
   * <p>A list of tags to associate with the component. You can use <a>Search</a> API
   *       to search on the tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name of the component. The name must be unique in your AWS account and is not
   *       case-sensitive.</p>
   */
  TrialComponentName: string | undefined;
}

export namespace CreateTrialComponentRequest {
  export const filterSensitiveLog = (
    obj: CreateTrialComponentRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTrialComponentRequest =>
    __isa(o, "CreateTrialComponentRequest");
}

export interface CreateTrialComponentResponse {
  __type?: "CreateTrialComponentResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;
}

export namespace CreateTrialComponentResponse {
  export const filterSensitiveLog = (
    obj: CreateTrialComponentResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTrialComponentResponse =>
    __isa(o, "CreateTrialComponentResponse");
}

export interface CreateTrialRequest {
  __type?: "CreateTrialRequest";
  /**
   * <p>The name of the trial as displayed. The name doesn't need to be
   *       unique. If <code>DisplayName</code> isn't specified, <code>TrialName</code> is
   *       displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the experiment to associate the trial with.</p>
   */
  ExperimentName: string | undefined;

  /**
   * <p>A list of tags to associate with the trial. You can use <a>Search</a> API
   *       to search on the tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name of the trial. The name must be unique in your AWS account and is not
   *       case-sensitive.</p>
   */
  TrialName: string | undefined;
}

export namespace CreateTrialRequest {
  export const filterSensitiveLog = (obj: CreateTrialRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTrialRequest =>
    __isa(o, "CreateTrialRequest");
}

export interface CreateTrialResponse {
  __type?: "CreateTrialResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;
}

export namespace CreateTrialResponse {
  export const filterSensitiveLog = (obj: CreateTrialResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTrialResponse =>
    __isa(o, "CreateTrialResponse");
}

export interface CreateUserProfileRequest {
  __type?: "CreateUserProfileRequest";
  /**
   * <p>The ID of the associated Domain.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>A specifier for the type of value specified in SingleSignOnUserValue.  Currently, the only supported value is "UserName".
   *            If the Domain's AuthMode is SSO, this field is required.  If the Domain's AuthMode is not SSO, this field cannot be specified.
   *        </p>
   */
  SingleSignOnUserIdentifier?: string;

  /**
   * <p>The username of the associated AWS Single Sign-On User for this UserProfile.  If the Domain's AuthMode is SSO, this field is
   *            required, and must match a valid username of a user in your directory.  If the Domain's AuthMode is not SSO, this field cannot be specified.
   *        </p>
   */
  SingleSignOnUserValue?: string;

  /**
   * <p>Each tag consists of a key and an optional value.
   *          Tag keys must be unique per resource.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A name for the UserProfile.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>A collection of settings.</p>
   */
  UserSettings?: UserSettings;
}

export namespace CreateUserProfileRequest {
  export const filterSensitiveLog = (obj: CreateUserProfileRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateUserProfileRequest =>
    __isa(o, "CreateUserProfileRequest");
}

export interface CreateUserProfileResponse {
  __type?: "CreateUserProfileResponse";
  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   */
  UserProfileArn?: string;
}

export namespace CreateUserProfileResponse {
  export const filterSensitiveLog = (obj: CreateUserProfileResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateUserProfileResponse =>
    __isa(o, "CreateUserProfileResponse");
}

export interface CreateWorkteamRequest {
  __type?: "CreateWorkteamRequest";
  /**
   * <p>A description of the work team.</p>
   */
  Description: string | undefined;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify
   *             the Amazon Cognito user pool that makes up the work team. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">Amazon Cognito User
   *                 Pools</a>.</p>
   *         <p>All of the <code>CognitoMemberDefinition</code> objects that make up the member
   *             definition must have the same <code>ClientId</code> and <code>UserPool</code>
   *             values.</p>
   */
  MemberDefinitions: MemberDefinition[] | undefined;

  /**
   * <p>Configures notification of workers regarding available or expiring work items.</p>
   */
  NotificationConfiguration?: NotificationConfiguration;

  /**
   * <p>An array of key-value pairs.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html">Resource
   *                 Tag</a> and <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i> AWS Billing and Cost Management User
   *                 Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name of the work team. Use this name to identify the work team.</p>
   */
  WorkteamName: string | undefined;
}

export namespace CreateWorkteamRequest {
  export const filterSensitiveLog = (obj: CreateWorkteamRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateWorkteamRequest =>
    __isa(o, "CreateWorkteamRequest");
}

export interface CreateWorkteamResponse {
  __type?: "CreateWorkteamResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the work team. You can use this ARN to identify the
   *             work team.</p>
   */
  WorkteamArn?: string;
}

export namespace CreateWorkteamResponse {
  export const filterSensitiveLog = (obj: CreateWorkteamResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateWorkteamResponse =>
    __isa(o, "CreateWorkteamResponse");
}

/**
 * <p></p>
 */
export interface DataCaptureConfig {
  __type?: "DataCaptureConfig";
  /**
   * <p></p>
   */
  CaptureContentTypeHeader?: CaptureContentTypeHeader;

  /**
   * <p></p>
   */
  CaptureOptions: CaptureOption[] | undefined;

  /**
   * <p></p>
   */
  DestinationS3Uri: string | undefined;

  /**
   * <p></p>
   */
  EnableCapture?: boolean;

  /**
   * <p></p>
   */
  InitialSamplingPercentage: number | undefined;

  /**
   * <p></p>
   */
  KmsKeyId?: string;
}

export namespace DataCaptureConfig {
  export const filterSensitiveLog = (obj: DataCaptureConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataCaptureConfig =>
    __isa(o, "DataCaptureConfig");
}

/**
 * <p></p>
 */
export interface DataCaptureConfigSummary {
  __type?: "DataCaptureConfigSummary";
  /**
   * <p></p>
   */
  CaptureStatus: CaptureStatus | string | undefined;

  /**
   * <p></p>
   */
  CurrentSamplingPercentage: number | undefined;

  /**
   * <p></p>
   */
  DestinationS3Uri: string | undefined;

  /**
   * <p></p>
   */
  EnableCapture: boolean | undefined;

  /**
   * <p></p>
   */
  KmsKeyId: string | undefined;
}

export namespace DataCaptureConfigSummary {
  export const filterSensitiveLog = (obj: DataCaptureConfigSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataCaptureConfigSummary =>
    __isa(o, "DataCaptureConfigSummary");
}

/**
 * <p>The data structure used to specify the data to be used for inference in a batch
 *             transform job and to associate the data that is relevant to the prediction results in
 *             the output. The input filter provided allows you to exclude input data that is not
 *             needed for inference in a batch transform job. The output filter provided allows you to
 *             include input data relevant to interpreting the predictions in the output from the job.
 *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction
 *                 Results with their Corresponding Input Records</a>.</p>
 */
export interface DataProcessing {
  __type?: "DataProcessing";
  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#data-processing-operators">JSONPath</a> expression used to select a portion of the input data to pass to
   *             the algorithm. Use the <code>InputFilter</code> parameter to exclude fields, such as an
   *             ID column, from the input. If you want Amazon SageMaker to pass the entire input dataset to the
   *             algorithm, accept the default value <code>$</code>.</p>
   *         <p>Examples: <code>"$"</code>, <code>"$[1:]"</code>, <code>"$.features"</code>
   *          </p>
   */
  InputFilter?: string;

  /**
   * <p>Specifies the source of the data to join with the transformed data. The valid values
   *             are <code>None</code> and <code>Input</code>. The default value is <code>None</code>,
   *             which specifies not to join the input with the transformed data. If you want the batch
   *             transform job to join the original input data with the transformed data, set
   *                 <code>JoinSource</code> to <code>Input</code>. </p>
   *
   *         <p>For JSON or JSONLines objects, such as a JSON array, Amazon SageMaker adds the transformed data to
   *             the input JSON object in an attribute called <code>SageMakerOutput</code>. The joined
   *             result for JSON must be a key-value pair object. If the input is not a key-value pair
   *             object, Amazon SageMaker creates a new JSON file. In the new JSON file, and the input data is stored
   *             under the <code>SageMakerInput</code> key and the results are stored in
   *                 <code>SageMakerOutput</code>.</p>
   *         <p>For CSV files, Amazon SageMaker combines the transformed data with the input data at the end of
   *             the input data and stores it in the output file. The joined data has the joined input
   *             data followed by the transformed data and the output is a CSV file. </p>
   */
  JoinSource?: JoinSource | string;

  /**
   * <p>A <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html#data-processing-operators">JSONPath</a> expression used to select a portion of the joined dataset to save
   *             in the output file for a batch transform job. If you want Amazon SageMaker to store the entire input
   *             dataset in the output file, leave the default value, <code>$</code>. If you specify
   *             indexes that aren't within the dimension size of the joined dataset, you get an
   *             error.</p>
   *         <p>Examples: <code>"$"</code>, <code>"$[0,5:]"</code>,
   *                 <code>"$['id','SageMakerOutput']"</code>
   *          </p>
   */
  OutputFilter?: string;
}

export namespace DataProcessing {
  export const filterSensitiveLog = (obj: DataProcessing): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataProcessing =>
    __isa(o, "DataProcessing");
}

/**
 * <p>Describes the location of the channel data.</p>
 */
export interface DataSource {
  __type?: "DataSource";
  /**
   * <p>The file system that is associated with a channel.</p>
   */
  FileSystemDataSource?: FileSystemDataSource;

  /**
   * <p>The S3 location of the data source that is associated with a channel.</p>
   */
  S3DataSource?: S3DataSource;
}

export namespace DataSource {
  export const filterSensitiveLog = (obj: DataSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataSource => __isa(o, "DataSource");
}

/**
 * <p>Configuration information for the debug hook parameters, collection configuration, and
 *             storage paths.</p>
 */
export interface DebugHookConfig {
  __type?: "DebugHookConfig";
  /**
   * <p>Configuration information for tensor collections.</p>
   */
  CollectionConfigurations?: CollectionConfiguration[];

  /**
   * <p>Configuration information for the debug hook parameters.</p>
   */
  HookParameters?: { [key: string]: string };

  /**
   * <p>Path to local storage location for tensors. Defaults to
   *                 <code>/opt/ml/output/tensors/</code>.</p>
   */
  LocalPath?: string;

  /**
   * <p>Path to Amazon S3 storage location for tensors.</p>
   */
  S3OutputPath: string | undefined;
}

export namespace DebugHookConfig {
  export const filterSensitiveLog = (obj: DebugHookConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is DebugHookConfig =>
    __isa(o, "DebugHookConfig");
}

/**
 * <p>Configuration information for debugging rules.</p>
 */
export interface DebugRuleConfiguration {
  __type?: "DebugRuleConfiguration";
  /**
   * <p>The instance type to deploy for a training job.</p>
   */
  InstanceType?: ProcessingInstanceType | string;

  /**
   * <p>Path to local storage location for output of rules. Defaults to
   *                 <code>/opt/ml/processing/output/rule/</code>.</p>
   */
  LocalPath?: string;

  /**
   * <p>The name of the rule configuration. It must be unique relative to other rule
   *             configuration names.</p>
   */
  RuleConfigurationName: string | undefined;

  /**
   * <p>The Amazon Elastic Container (ECR) Image for the managed rule evaluation.</p>
   */
  RuleEvaluatorImage: string | undefined;

  /**
   * <p> Runtime configuration for rule container.</p>
   */
  RuleParameters?: { [key: string]: string };

  /**
   * <p>Path to Amazon S3 storage location for rules.</p>
   */
  S3OutputPath?: string;

  /**
   * <p>The size, in GB, of the ML storage volume attached to the processing instance.</p>
   */
  VolumeSizeInGB?: number;
}

export namespace DebugRuleConfiguration {
  export const filterSensitiveLog = (obj: DebugRuleConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is DebugRuleConfiguration =>
    __isa(o, "DebugRuleConfiguration");
}

/**
 * <p>Information about the status of the rule evaluation.</p>
 */
export interface DebugRuleEvaluationStatus {
  __type?: "DebugRuleEvaluationStatus";
  /**
   * <p>Timestamp when the rule evaluation status was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The name of the rule configuration</p>
   */
  RuleConfigurationName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule evaluation job.</p>
   */
  RuleEvaluationJobArn?: string;

  /**
   * <p>Status of the rule evaluation.</p>
   */
  RuleEvaluationStatus?: RuleEvaluationStatus | string;

  /**
   * <p>Details from the rule evaluation.</p>
   */
  StatusDetails?: string;
}

export namespace DebugRuleEvaluationStatus {
  export const filterSensitiveLog = (obj: DebugRuleEvaluationStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is DebugRuleEvaluationStatus =>
    __isa(o, "DebugRuleEvaluationStatus");
}

export interface DeleteAlgorithmInput {
  __type?: "DeleteAlgorithmInput";
  /**
   * <p>The name of the algorithm to delete.</p>
   */
  AlgorithmName: string | undefined;
}

export namespace DeleteAlgorithmInput {
  export const filterSensitiveLog = (obj: DeleteAlgorithmInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteAlgorithmInput =>
    __isa(o, "DeleteAlgorithmInput");
}

export interface DeleteAppRequest {
  __type?: "DeleteAppRequest";
  /**
   * <p>The name of the app.</p>
   */
  AppName: string | undefined;

  /**
   * <p>The type of app.</p>
   */
  AppType: AppType | string | undefined;

  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;
}

export namespace DeleteAppRequest {
  export const filterSensitiveLog = (obj: DeleteAppRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteAppRequest =>
    __isa(o, "DeleteAppRequest");
}

export interface DeleteCodeRepositoryInput {
  __type?: "DeleteCodeRepositoryInput";
  /**
   * <p>The name of the Git repository to delete.</p>
   */
  CodeRepositoryName: string | undefined;
}

export namespace DeleteCodeRepositoryInput {
  export const filterSensitiveLog = (obj: DeleteCodeRepositoryInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteCodeRepositoryInput =>
    __isa(o, "DeleteCodeRepositoryInput");
}

export interface DeleteDomainRequest {
  __type?: "DeleteDomainRequest";
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The retention policy for this domain, which specifies which resources will be retained after the Domain is deleted.
   *            By default, all resources are retained (not automatically deleted).
   *        </p>
   */
  RetentionPolicy?: RetentionPolicy;
}

export namespace DeleteDomainRequest {
  export const filterSensitiveLog = (obj: DeleteDomainRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDomainRequest =>
    __isa(o, "DeleteDomainRequest");
}

export interface DeleteEndpointConfigInput {
  __type?: "DeleteEndpointConfigInput";
  /**
   * <p>The name of the endpoint configuration that you want to delete.</p>
   */
  EndpointConfigName: string | undefined;
}

export namespace DeleteEndpointConfigInput {
  export const filterSensitiveLog = (obj: DeleteEndpointConfigInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteEndpointConfigInput =>
    __isa(o, "DeleteEndpointConfigInput");
}

export interface DeleteEndpointInput {
  __type?: "DeleteEndpointInput";
  /**
   * <p>The name of the endpoint that you want to delete.</p>
   */
  EndpointName: string | undefined;
}

export namespace DeleteEndpointInput {
  export const filterSensitiveLog = (obj: DeleteEndpointInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteEndpointInput =>
    __isa(o, "DeleteEndpointInput");
}

export interface DeleteExperimentRequest {
  __type?: "DeleteExperimentRequest";
  /**
   * <p>The name of the experiment to delete.</p>
   */
  ExperimentName: string | undefined;
}

export namespace DeleteExperimentRequest {
  export const filterSensitiveLog = (obj: DeleteExperimentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteExperimentRequest =>
    __isa(o, "DeleteExperimentRequest");
}

export interface DeleteExperimentResponse {
  __type?: "DeleteExperimentResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment that is being deleted.</p>
   */
  ExperimentArn?: string;
}

export namespace DeleteExperimentResponse {
  export const filterSensitiveLog = (obj: DeleteExperimentResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteExperimentResponse =>
    __isa(o, "DeleteExperimentResponse");
}

export interface DeleteFlowDefinitionRequest {
  __type?: "DeleteFlowDefinitionRequest";
  /**
   * <p>The name of the flow definition you are deleting.</p>
   */
  FlowDefinitionName: string | undefined;
}

export namespace DeleteFlowDefinitionRequest {
  export const filterSensitiveLog = (
    obj: DeleteFlowDefinitionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteFlowDefinitionRequest =>
    __isa(o, "DeleteFlowDefinitionRequest");
}

export interface DeleteFlowDefinitionResponse {
  __type?: "DeleteFlowDefinitionResponse";
}

export namespace DeleteFlowDefinitionResponse {
  export const filterSensitiveLog = (
    obj: DeleteFlowDefinitionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteFlowDefinitionResponse =>
    __isa(o, "DeleteFlowDefinitionResponse");
}

export interface DeleteModelInput {
  __type?: "DeleteModelInput";
  /**
   * <p>The name of the model to delete.</p>
   */
  ModelName: string | undefined;
}

export namespace DeleteModelInput {
  export const filterSensitiveLog = (obj: DeleteModelInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteModelInput =>
    __isa(o, "DeleteModelInput");
}

export interface DeleteModelPackageInput {
  __type?: "DeleteModelPackageInput";
  /**
   * <p>The name of the model package. The name must have 1 to 63 characters. Valid characters
   *             are a-z, A-Z, 0-9, and - (hyphen).</p>
   */
  ModelPackageName: string | undefined;
}

export namespace DeleteModelPackageInput {
  export const filterSensitiveLog = (obj: DeleteModelPackageInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteModelPackageInput =>
    __isa(o, "DeleteModelPackageInput");
}

export interface DeleteMonitoringScheduleRequest {
  __type?: "DeleteMonitoringScheduleRequest";
  /**
   * <p>The name of the monitoring schedule to delete.</p>
   */
  MonitoringScheduleName: string | undefined;
}

export namespace DeleteMonitoringScheduleRequest {
  export const filterSensitiveLog = (
    obj: DeleteMonitoringScheduleRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteMonitoringScheduleRequest =>
    __isa(o, "DeleteMonitoringScheduleRequest");
}

export interface DeleteNotebookInstanceInput {
  __type?: "DeleteNotebookInstanceInput";
  /**
   * <p>The name of the Amazon SageMaker notebook instance to delete.</p>
   */
  NotebookInstanceName: string | undefined;
}

export namespace DeleteNotebookInstanceInput {
  export const filterSensitiveLog = (
    obj: DeleteNotebookInstanceInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteNotebookInstanceInput =>
    __isa(o, "DeleteNotebookInstanceInput");
}

export interface DeleteNotebookInstanceLifecycleConfigInput {
  __type?: "DeleteNotebookInstanceLifecycleConfigInput";
  /**
   * <p>The name of the lifecycle configuration to delete.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

export namespace DeleteNotebookInstanceLifecycleConfigInput {
  export const filterSensitiveLog = (
    obj: DeleteNotebookInstanceLifecycleConfigInput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DeleteNotebookInstanceLifecycleConfigInput =>
    __isa(o, "DeleteNotebookInstanceLifecycleConfigInput");
}

export interface DeleteTagsInput {
  __type?: "DeleteTagsInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to
   *             delete.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array or one or more tag keys to delete.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace DeleteTagsInput {
  export const filterSensitiveLog = (obj: DeleteTagsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTagsInput =>
    __isa(o, "DeleteTagsInput");
}

export interface DeleteTagsOutput {
  __type?: "DeleteTagsOutput";
}

export namespace DeleteTagsOutput {
  export const filterSensitiveLog = (obj: DeleteTagsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTagsOutput =>
    __isa(o, "DeleteTagsOutput");
}

export interface DeleteTrialComponentRequest {
  __type?: "DeleteTrialComponentRequest";
  /**
   * <p>The name of the component to delete.</p>
   */
  TrialComponentName: string | undefined;
}

export namespace DeleteTrialComponentRequest {
  export const filterSensitiveLog = (
    obj: DeleteTrialComponentRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTrialComponentRequest =>
    __isa(o, "DeleteTrialComponentRequest");
}

export interface DeleteTrialComponentResponse {
  __type?: "DeleteTrialComponentResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the component is being deleted.</p>
   */
  TrialComponentArn?: string;
}

export namespace DeleteTrialComponentResponse {
  export const filterSensitiveLog = (
    obj: DeleteTrialComponentResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTrialComponentResponse =>
    __isa(o, "DeleteTrialComponentResponse");
}

export interface DeleteTrialRequest {
  __type?: "DeleteTrialRequest";
  /**
   * <p>The name of the trial to delete.</p>
   */
  TrialName: string | undefined;
}

export namespace DeleteTrialRequest {
  export const filterSensitiveLog = (obj: DeleteTrialRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTrialRequest =>
    __isa(o, "DeleteTrialRequest");
}

export interface DeleteTrialResponse {
  __type?: "DeleteTrialResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the trial that is being deleted.</p>
   */
  TrialArn?: string;
}

export namespace DeleteTrialResponse {
  export const filterSensitiveLog = (obj: DeleteTrialResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTrialResponse =>
    __isa(o, "DeleteTrialResponse");
}

export interface DeleteUserProfileRequest {
  __type?: "DeleteUserProfileRequest";
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;
}

export namespace DeleteUserProfileRequest {
  export const filterSensitiveLog = (obj: DeleteUserProfileRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteUserProfileRequest =>
    __isa(o, "DeleteUserProfileRequest");
}

export interface DeleteWorkteamRequest {
  __type?: "DeleteWorkteamRequest";
  /**
   * <p>The name of the work team to delete.</p>
   */
  WorkteamName: string | undefined;
}

export namespace DeleteWorkteamRequest {
  export const filterSensitiveLog = (obj: DeleteWorkteamRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteWorkteamRequest =>
    __isa(o, "DeleteWorkteamRequest");
}

export interface DeleteWorkteamResponse {
  __type?: "DeleteWorkteamResponse";
  /**
   * <p>Returns <code>true</code> if the work team was successfully deleted; otherwise,
   *             returns <code>false</code>.</p>
   */
  Success: boolean | undefined;
}

export namespace DeleteWorkteamResponse {
  export const filterSensitiveLog = (obj: DeleteWorkteamResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteWorkteamResponse =>
    __isa(o, "DeleteWorkteamResponse");
}

/**
 * <p>Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this <a>ProductionVariant</a>.</p>
 *         <p>If you used the <code>registry/repository[:tag]</code> form to specify the image path
 *             of the primary container when you created the model hosted in this
 *                 <code>ProductionVariant</code>, the path resolves to a path of the form
 *                 <code>registry/repository[@digest]</code>. A digest is a hash value that identifies
 *             a specific version of an image. For information about Amazon ECR paths, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html">Pulling an Image</a> in the <i>Amazon ECR User Guide</i>.</p>
 */
export interface DeployedImage {
  __type?: "DeployedImage";
  /**
   * <p>The date and time when the image path for the model resolved to the
   *                 <code>ResolvedImage</code>
   *          </p>
   */
  ResolutionTime?: Date;

  /**
   * <p>The specific digest path of the image hosted in this
   *             <code>ProductionVariant</code>.</p>
   */
  ResolvedImage?: string;

  /**
   * <p>The image path you specified when you created the model.</p>
   */
  SpecifiedImage?: string;
}

export namespace DeployedImage {
  export const filterSensitiveLog = (obj: DeployedImage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeployedImage => __isa(o, "DeployedImage");
}

export interface DescribeAlgorithmInput {
  __type?: "DescribeAlgorithmInput";
  /**
   * <p>The name of the algorithm to describe.</p>
   */
  AlgorithmName: string | undefined;
}

export namespace DescribeAlgorithmInput {
  export const filterSensitiveLog = (obj: DescribeAlgorithmInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAlgorithmInput =>
    __isa(o, "DescribeAlgorithmInput");
}

export interface DescribeAlgorithmOutput {
  __type?: "DescribeAlgorithmOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm.</p>
   */
  AlgorithmArn: string | undefined;

  /**
   * <p>A brief summary about the algorithm.</p>
   */
  AlgorithmDescription?: string;

  /**
   * <p>The name of the algorithm being described.</p>
   */
  AlgorithmName: string | undefined;

  /**
   * <p>The current status of the algorithm.</p>
   */
  AlgorithmStatus: AlgorithmStatus | string | undefined;

  /**
   * <p>Details about the current status of the algorithm.</p>
   */
  AlgorithmStatusDetails: AlgorithmStatusDetails | undefined;

  /**
   * <p>Whether the algorithm is certified to be listed in AWS Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * <p>A timestamp specifying when the algorithm was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Details about inference jobs that the algorithm runs.</p>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>The product identifier of the algorithm.</p>
   */
  ProductId?: string;

  /**
   * <p>Details about training jobs run by this algorithm.</p>
   */
  TrainingSpecification: TrainingSpecification | undefined;

  /**
   * <p>Details about configurations for one or more training jobs that Amazon SageMaker runs to test the
   *             algorithm.</p>
   */
  ValidationSpecification?: AlgorithmValidationSpecification;
}

export namespace DescribeAlgorithmOutput {
  export const filterSensitiveLog = (obj: DescribeAlgorithmOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAlgorithmOutput =>
    __isa(o, "DescribeAlgorithmOutput");
}

export interface DescribeAppRequest {
  __type?: "DescribeAppRequest";
  /**
   * <p>The name of the app.</p>
   */
  AppName: string | undefined;

  /**
   * <p>The type of app.</p>
   */
  AppType: AppType | string | undefined;

  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;
}

export namespace DescribeAppRequest {
  export const filterSensitiveLog = (obj: DescribeAppRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAppRequest =>
    __isa(o, "DescribeAppRequest");
}

export interface DescribeAppResponse {
  __type?: "DescribeAppResponse";
  /**
   * <p>The app's Amazon Resource Name (ARN).</p>
   */
  AppArn?: string;

  /**
   * <p>The name of the app.</p>
   */
  AppName?: string;

  /**
   * <p>The type of app.</p>
   */
  AppType?: AppType | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>The timestamp of the last health check.</p>
   */
  LastHealthCheckTimestamp?: Date;

  /**
   * <p>The timestamp of the last user's activity.</p>
   */
  LastUserActivityTimestamp?: Date;

  /**
   * <p>The instance type and quantity.</p>
   */
  ResourceSpec?: ResourceSpec;

  /**
   * <p>The status.</p>
   */
  Status?: AppStatus | string;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;
}

export namespace DescribeAppResponse {
  export const filterSensitiveLog = (obj: DescribeAppResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAppResponse =>
    __isa(o, "DescribeAppResponse");
}

export interface DescribeAutoMLJobRequest {
  __type?: "DescribeAutoMLJobRequest";
  /**
   * <p>Request information about a job using that job's unique name.</p>
   */
  AutoMLJobName: string | undefined;
}

export namespace DescribeAutoMLJobRequest {
  export const filterSensitiveLog = (obj: DescribeAutoMLJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAutoMLJobRequest =>
    __isa(o, "DescribeAutoMLJobRequest");
}

export interface DescribeAutoMLJobResponse {
  __type?: "DescribeAutoMLJobResponse";
  /**
   * <p>Returns the job's ARN.</p>
   */
  AutoMLJobArn: string | undefined;

  /**
   * <p>Returns information on the job's artifacts found in AutoMLJobArtifacts.</p>
   */
  AutoMLJobArtifacts?: AutoMLJobArtifacts;

  /**
   * <p>Returns the job's config.</p>
   */
  AutoMLJobConfig?: AutoMLJobConfig;

  /**
   * <p>Returns the name of a job.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>Returns the job's objective.</p>
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>Returns the job's AutoMLJobSecondaryStatus.</p>
   */
  AutoMLJobSecondaryStatus: AutoMLJobSecondaryStatus | string | undefined;

  /**
   * <p>Returns the job's AutoMLJobStatus.</p>
   */
  AutoMLJobStatus: AutoMLJobStatus | string | undefined;

  /**
   * <p>Returns the job's BestCandidate.</p>
   */
  BestCandidate?: AutoMLCandidate;

  /**
   * <p>Returns the job's creation time.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Returns the job's end time.</p>
   */
  EndTime?: Date;

  /**
   * <p>Returns the job's FailureReason.</p>
   */
  FailureReason?: string;

  /**
   * <p>Returns the job's output from GenerateCandidateDefinitionsOnly.</p>
   */
  GenerateCandidateDefinitionsOnly?: boolean;

  /**
   * <p>Returns the job's input data config.</p>
   */
  InputDataConfig: AutoMLChannel[] | undefined;

  /**
   * <p>Returns the job's last modified time.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Returns the job's output data config.</p>
   */
  OutputDataConfig: AutoMLOutputDataConfig | undefined;

  /**
   * <p>Returns the job's problem type.</p>
   */
  ProblemType?: ProblemType | string;

  /**
   * <p>This contains ProblemType, AutoMLJobObjective and CompletionCriteria.
   *          They’re auto-inferred values, if not provided by you.
   *          If you do provide them, then they’ll be the same as provided.</p>
   */
  ResolvedAttributes?: ResolvedAttributes;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that has read permission
   *    to the input data location and write permission to the output data location in Amazon S3.</p>
   */
  RoleArn: string | undefined;
}

export namespace DescribeAutoMLJobResponse {
  export const filterSensitiveLog = (obj: DescribeAutoMLJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAutoMLJobResponse =>
    __isa(o, "DescribeAutoMLJobResponse");
}

export interface DescribeCodeRepositoryInput {
  __type?: "DescribeCodeRepositoryInput";
  /**
   * <p>The name of the Git repository to describe.</p>
   */
  CodeRepositoryName: string | undefined;
}

export namespace DescribeCodeRepositoryInput {
  export const filterSensitiveLog = (
    obj: DescribeCodeRepositoryInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCodeRepositoryInput =>
    __isa(o, "DescribeCodeRepositoryInput");
}

export interface DescribeCodeRepositoryOutput {
  __type?: "DescribeCodeRepositoryOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the Git repository.</p>
   */
  CodeRepositoryArn: string | undefined;

  /**
   * <p>The name of the Git repository.</p>
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>The date and time that the repository was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Configuration details about the repository, including the URL where the repository is
   *             located, the default branch, and the Amazon Resource Name (ARN) of the AWS Secrets
   *             Manager secret that contains the credentials used to access the repository.</p>
   */
  GitConfig?: GitConfig;

  /**
   * <p>The date and time that the repository was last changed.</p>
   */
  LastModifiedTime: Date | undefined;
}

export namespace DescribeCodeRepositoryOutput {
  export const filterSensitiveLog = (
    obj: DescribeCodeRepositoryOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCodeRepositoryOutput =>
    __isa(o, "DescribeCodeRepositoryOutput");
}

export interface DescribeCompilationJobRequest {
  __type?: "DescribeCompilationJobRequest";
  /**
   * <p>The name of the model compilation job that you want information about.</p>
   */
  CompilationJobName: string | undefined;
}

export namespace DescribeCompilationJobRequest {
  export const filterSensitiveLog = (
    obj: DescribeCompilationJobRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCompilationJobRequest =>
    __isa(o, "DescribeCompilationJobRequest");
}

export interface DescribeCompilationJobResponse {
  __type?: "DescribeCompilationJobResponse";
  /**
   * <p>The time when the model compilation job on a compilation job instance ended. For a
   *             successful or stopped job, this is when the job's model artifacts have finished
   *             uploading. For a failed job, this is when Amazon SageMaker detected that the job failed. </p>
   */
  CompilationEndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker assumes to perform the model
   *             compilation job.</p>
   */
  CompilationJobArn: string | undefined;

  /**
   * <p>The name of the model compilation job.</p>
   */
  CompilationJobName: string | undefined;

  /**
   * <p>The status of the model compilation job.</p>
   */
  CompilationJobStatus: CompilationJobStatus | string | undefined;

  /**
   * <p>The time when the model compilation job started the <code>CompilationJob</code>
   *             instances. </p>
   *         <p>You are billed for the time between this timestamp and the timestamp in the <a>DescribeCompilationJobResponse$CompilationEndTime</a> field. In Amazon CloudWatch Logs,
   *             the start time might be later than this time. That's because it takes time to download
   *             the compilation job, which depends on the size of the compilation job container. </p>
   */
  CompilationStartTime?: Date;

  /**
   * <p>The time that the model compilation job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>If a model compilation job failed, the reason it failed. </p>
   */
  FailureReason: string | undefined;

  /**
   * <p>Information about the location in Amazon S3 of the input model artifacts, the name and
   *             shape of the expected data inputs, and the framework in which the model was
   *             trained.</p>
   */
  InputConfig: InputConfig | undefined;

  /**
   * <p>The time that the status
   *             of
   *             the model compilation job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Information about the location in Amazon S3 that has been configured for storing the model
   *             artifacts used in the compilation job.</p>
   */
  ModelArtifacts: ModelArtifacts | undefined;

  /**
   * <p>Information about the output location for the compiled model and the target device
   *             that the model runs on.</p>
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model compilation job.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Specifies a limit to how long a model compilation job can run. When the job reaches
   *             the time limit, Amazon SageMaker ends the compilation job. Use this API to cap model training
   *             costs.</p>
   */
  StoppingCondition: StoppingCondition | undefined;
}

export namespace DescribeCompilationJobResponse {
  export const filterSensitiveLog = (
    obj: DescribeCompilationJobResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCompilationJobResponse =>
    __isa(o, "DescribeCompilationJobResponse");
}

export interface DescribeDomainRequest {
  __type?: "DescribeDomainRequest";
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;
}

export namespace DescribeDomainRequest {
  export const filterSensitiveLog = (obj: DescribeDomainRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDomainRequest =>
    __isa(o, "DescribeDomainRequest");
}

export interface DescribeDomainResponse {
  __type?: "DescribeDomainResponse";
  /**
   * <p>The domain's authentication mode.</p>
   */
  AuthMode?: AuthMode | string;

  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Settings which are applied to all UserProfile in this domain, if settings are not explicitly specified
   *            in a given UserProfile.
   *        </p>
   */
  DefaultUserSettings?: UserSettings;

  /**
   * <p>The domain's Amazon Resource Name (ARN).</p>
   */
  DomainArn?: string;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The domain name.</p>
   */
  DomainName?: string;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>The ID of the Amazon Elastic File System (EFS) managed by this Domain.</p>
   */
  HomeEfsFileSystemId?: string;

  /**
   * <p>The AWS Key Management Service encryption key ID.</p>
   */
  HomeEfsFileSystemKmsKeyId?: string;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The SSO managed application instance ID.</p>
   */
  SingleSignOnManagedApplicationInstanceId?: string;

  /**
   * <p>The status.</p>
   */
  Status?: DomainStatus | string;

  /**
   * <p>Security setting to limit to a set of subnets.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The domain's URL.</p>
   */
  Url?: string;

  /**
   * <p>The ID of the Amazon Virtual Private Cloud.</p>
   */
  VpcId?: string;
}

export namespace DescribeDomainResponse {
  export const filterSensitiveLog = (obj: DescribeDomainResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDomainResponse =>
    __isa(o, "DescribeDomainResponse");
}

export interface DescribeEndpointConfigInput {
  __type?: "DescribeEndpointConfigInput";
  /**
   * <p>The name of the endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;
}

export namespace DescribeEndpointConfigInput {
  export const filterSensitiveLog = (
    obj: DescribeEndpointConfigInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEndpointConfigInput =>
    __isa(o, "DescribeEndpointConfigInput");
}

export interface DescribeEndpointConfigOutput {
  __type?: "DescribeEndpointConfigOutput";
  /**
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p></p>
   */
  DataCaptureConfig?: DataCaptureConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   */
  EndpointConfigArn: string | undefined;

  /**
   * <p>Name of the Amazon SageMaker endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>AWS KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML storage
   *             volume attached to the instance.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>An array of <code>ProductionVariant</code> objects, one for each model that you
   *             want to host at this endpoint.</p>
   */
  ProductionVariants: ProductionVariant[] | undefined;
}

export namespace DescribeEndpointConfigOutput {
  export const filterSensitiveLog = (
    obj: DescribeEndpointConfigOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEndpointConfigOutput =>
    __isa(o, "DescribeEndpointConfigOutput");
}

export interface DescribeEndpointInput {
  __type?: "DescribeEndpointInput";
  /**
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string | undefined;
}

export namespace DescribeEndpointInput {
  export const filterSensitiveLog = (obj: DescribeEndpointInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEndpointInput =>
    __isa(o, "DescribeEndpointInput");
}

export interface DescribeEndpointOutput {
  __type?: "DescribeEndpointOutput";
  /**
   * <p>A timestamp that shows when the endpoint was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p></p>
   */
  DataCaptureConfig?: DataCaptureConfigSummary;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>The name of the endpoint configuration associated with this endpoint.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>Name of the endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The status of the endpoint.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>OutOfService</code>: Endpoint is not available to take incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Creating</code>: <a>CreateEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Updating</code>: <a>UpdateEndpoint</a> or <a>UpdateEndpointWeightsAndCapacities</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SystemUpdating</code>: Endpoint is undergoing maintenance and cannot be
   *                     updated or deleted or re-scaled until it has completed. This maintenance
   *                     operation does not change any customer-specified values such as VPC config, KMS
   *                     encryption, model, instance type, or instance count.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>RollingBack</code>: Endpoint fails to scale up or down or change its
   *                     variant weight and is in the process of rolling back to its previous
   *                     configuration. Once the rollback completes, endpoint returns to an
   *                         <code>InService</code> status. This transitional status only applies to an
   *                     endpoint that has autoscaling enabled and is undergoing variant weight or
   *                     capacity changes as part of an <a>UpdateEndpointWeightsAndCapacities</a> call or when the <a>UpdateEndpointWeightsAndCapacities</a> operation is called
   *                     explicitly.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InService</code>: Endpoint is available to process incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Deleting</code>: <a>DeleteEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Failed</code>: Endpoint could not be created, updated, or re-scaled. Use
   *                         <a>DescribeEndpointOutput$FailureReason</a> for information about
   *                     the failure. <a>DeleteEndpoint</a> is the only operation that can be
   *                     performed on a failed endpoint.</p>
   *             </li>
   *          </ul>
   */
  EndpointStatus: EndpointStatus | string | undefined;

  /**
   * <p>If the status of the endpoint is <code>Failed</code>, the reason why it failed.
   *         </p>
   */
  FailureReason?: string;

  /**
   * <p>A timestamp that shows when the endpoint was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p> An array of <a>ProductionVariantSummary</a> objects, one for each model
   *             hosted behind this endpoint. </p>
   */
  ProductionVariants?: ProductionVariantSummary[];
}

export namespace DescribeEndpointOutput {
  export const filterSensitiveLog = (obj: DescribeEndpointOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEndpointOutput =>
    __isa(o, "DescribeEndpointOutput");
}

export interface DescribeExperimentRequest {
  __type?: "DescribeExperimentRequest";
  /**
   * <p>The name of the experiment to describe.</p>
   */
  ExperimentName: string | undefined;
}

export namespace DescribeExperimentRequest {
  export const filterSensitiveLog = (obj: DescribeExperimentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeExperimentRequest =>
    __isa(o, "DescribeExperimentRequest");
}

export interface DescribeExperimentResponse {
  __type?: "DescribeExperimentResponse";
  /**
   * <p>Who created the experiment.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code>
   *       isn't specified, <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>Who last modified the experiment.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The ARN of the source and, optionally, the type.</p>
   */
  Source?: ExperimentSource;
}

export namespace DescribeExperimentResponse {
  export const filterSensitiveLog = (obj: DescribeExperimentResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeExperimentResponse =>
    __isa(o, "DescribeExperimentResponse");
}

export interface DescribeFlowDefinitionRequest {
  __type?: "DescribeFlowDefinitionRequest";
  /**
   * <p>The name of the flow definition.</p>
   */
  FlowDefinitionName: string | undefined;
}

export namespace DescribeFlowDefinitionRequest {
  export const filterSensitiveLog = (
    obj: DescribeFlowDefinitionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeFlowDefinitionRequest =>
    __isa(o, "DescribeFlowDefinitionRequest");
}

export interface DescribeFlowDefinitionResponse {
  __type?: "DescribeFlowDefinitionResponse";
  /**
   * <p>The timestamp when the flow definition was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p></p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow defintion.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionName: string | undefined;

  /**
   * <p>The status of the flow definition. Valid values are listed below.</p>
   */
  FlowDefinitionStatus: FlowDefinitionStatus | string | undefined;

  /**
   * <p>An object containing information about what triggers a human review workflow.</p>
   */
  HumanLoopActivationConfig?: HumanLoopActivationConfig;

  /**
   * <p>An object containing information about who works on the task, the workforce task price, and other task details.</p>
   */
  HumanLoopConfig: HumanLoopConfig | undefined;

  /**
   * <p>An object containing information about the output file.</p>
   */
  OutputConfig: FlowDefinitionOutputConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) execution role for the flow definition.</p>
   */
  RoleArn: string | undefined;
}

export namespace DescribeFlowDefinitionResponse {
  export const filterSensitiveLog = (
    obj: DescribeFlowDefinitionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeFlowDefinitionResponse =>
    __isa(o, "DescribeFlowDefinitionResponse");
}

export interface DescribeHumanTaskUiRequest {
  __type?: "DescribeHumanTaskUiRequest";
  /**
   * <p>The name of the human task user interface you want information about.</p>
   */
  HumanTaskUiName: string | undefined;
}

export namespace DescribeHumanTaskUiRequest {
  export const filterSensitiveLog = (obj: DescribeHumanTaskUiRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeHumanTaskUiRequest =>
    __isa(o, "DescribeHumanTaskUiRequest");
}

export interface DescribeHumanTaskUiResponse {
  __type?: "DescribeHumanTaskUiResponse";
  /**
   * <p>The timestamp when the human task user interface was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the human task user interface.</p>
   */
  HumanTaskUiArn: string | undefined;

  /**
   * <p>The name of the human task user interface.</p>
   */
  HumanTaskUiName: string | undefined;

  /**
   * <p>Container for user interface template information.</p>
   */
  UiTemplate: UiTemplateInfo | undefined;
}

export namespace DescribeHumanTaskUiResponse {
  export const filterSensitiveLog = (
    obj: DescribeHumanTaskUiResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeHumanTaskUiResponse =>
    __isa(o, "DescribeHumanTaskUiResponse");
}

export interface DescribeHyperParameterTuningJobRequest {
  __type?: "DescribeHyperParameterTuningJobRequest";
  /**
   * <p>The name of the tuning job to describe.</p>
   */
  HyperParameterTuningJobName: string | undefined;
}

export namespace DescribeHyperParameterTuningJobRequest {
  export const filterSensitiveLog = (
    obj: DescribeHyperParameterTuningJobRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeHyperParameterTuningJobRequest =>
    __isa(o, "DescribeHyperParameterTuningJobRequest");
}

export interface DescribeHyperParameterTuningJobResponse {
  __type?: "DescribeHyperParameterTuningJobResponse";
  /**
   * <p>A <a>TrainingJobSummary</a> object that describes the training job that
   *             completed with the best current <a>HyperParameterTuningJobObjective</a>.</p>
   */
  BestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * <p>The date and time that the tuning job started.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>If the tuning job failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The date and time that the tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * <p>The
   *             Amazon Resource Name (ARN) of the tuning job.</p>
   */
  HyperParameterTuningJobArn: string | undefined;

  /**
   * <p>The <a>HyperParameterTuningJobConfig</a> object that specifies the
   *             configuration of the tuning job.</p>
   */
  HyperParameterTuningJobConfig: HyperParameterTuningJobConfig | undefined;

  /**
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>The status of the tuning job: InProgress, Completed, Failed, Stopping, or
   *             Stopped.</p>
   */
  HyperParameterTuningJobStatus:
    | HyperParameterTuningJobStatus
    | string
    | undefined;

  /**
   * <p>The date and time that the status of the tuning job was modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The <a>ObjectiveStatusCounters</a> object that specifies the number of
   *             training jobs, categorized by the status of their final objective metric, that this
   *             tuning job launched.</p>
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * <p>If the hyperparameter tuning job is an warm start tuning job with a
   *                 <code>WarmStartType</code> of <code>IDENTICAL_DATA_AND_ALGORITHM</code>, this is the
   *                 <a>TrainingJobSummary</a> for the training job with the best objective
   *             metric value of all training jobs launched by this tuning job and all parent jobs
   *             specified for the warm start tuning job.</p>
   */
  OverallBestTrainingJob?: HyperParameterTrainingJobSummary;

  /**
   * <p>The <a>HyperParameterTrainingJobDefinition</a> object that specifies the
   *             definition of the training jobs that this tuning job launches.</p>
   */
  TrainingJobDefinition?: HyperParameterTrainingJobDefinition;

  /**
   * <p></p>
   */
  TrainingJobDefinitions?: HyperParameterTrainingJobDefinition[];

  /**
   * <p>The <a>TrainingJobStatusCounters</a> object that specifies the number of
   *             training jobs, categorized by status, that this tuning job launched.</p>
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;

  /**
   * <p>The configuration for starting the hyperparameter parameter tuning job using one or
   *             more previous tuning jobs as a starting point. The results of previous tuning jobs are
   *             used to inform which combinations of hyperparameters to search over in the new tuning
   *             job.</p>
   */
  WarmStartConfig?: HyperParameterTuningJobWarmStartConfig;
}

export namespace DescribeHyperParameterTuningJobResponse {
  export const filterSensitiveLog = (
    obj: DescribeHyperParameterTuningJobResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeHyperParameterTuningJobResponse =>
    __isa(o, "DescribeHyperParameterTuningJobResponse");
}

export interface DescribeLabelingJobRequest {
  __type?: "DescribeLabelingJobRequest";
  /**
   * <p>The name of the labeling job to return information for.</p>
   */
  LabelingJobName: string | undefined;
}

export namespace DescribeLabelingJobRequest {
  export const filterSensitiveLog = (obj: DescribeLabelingJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLabelingJobRequest =>
    __isa(o, "DescribeLabelingJobRequest");
}

export interface DescribeLabelingJobResponse {
  __type?: "DescribeLabelingJobResponse";
  /**
   * <p>The date and time that the labeling job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>If the job failed, the reason that it failed. </p>
   */
  FailureReason?: string;

  /**
   * <p>Configuration information required for human workers to complete a labeling
   *             task.</p>
   */
  HumanTaskConfig: HumanTaskConfig | undefined;

  /**
   * <p>Input configuration information for the labeling job, such as the Amazon S3 location of the
   *             data objects and the location of the manifest file that describes the data
   *             objects.</p>
   */
  InputConfig: LabelingJobInputConfig | undefined;

  /**
   * <p>A unique identifier for work done as part of a labeling job.</p>
   */
  JobReferenceCode: string | undefined;

  /**
   * <p>The attribute used as the label in the output manifest file.</p>
   */
  LabelAttributeName?: string;

  /**
   * <p>The S3 location of the JSON file that defines the categories used to label data
   *             objects. Please note the following label-category limits:</p>
   *         <ul>
   *             <li>
   *                 <p>Semantic segmentation labeling jobs using automated labeling: 20 labels</p>
   *             </li>
   *             <li>
   *                 <p>Box bounding labeling jobs (all): 10 lables</p>
   *             </li>
   *          </ul>
   *         <p>The file is a JSON structure in the following format:</p>
   *         <p>
   *             <code>{</code>
   *         </p>
   *         <p>
   *             <code> "document-version": "2018-11-28"</code>
   *         </p>
   *         <p>
   *             <code> "labels": [</code>
   *         </p>
   *         <p>
   *             <code> {</code>
   *         </p>
   *         <p>
   *             <code> "label": "<i>label 1</i>"</code>
   *         </p>
   *         <p>
   *             <code> },</code>
   *         </p>
   *         <p>
   *             <code> {</code>
   *         </p>
   *         <p>
   *             <code> "label": "<i>label 2</i>"</code>
   *         </p>
   *         <p>
   *             <code> },</code>
   *         </p>
   *         <p>
   *             <code> ...</code>
   *         </p>
   *         <p>
   *             <code> {</code>
   *         </p>
   *         <p>
   *             <code> "label": "<i>label n</i>"</code>
   *         </p>
   *         <p>
   *             <code> }</code>
   *         </p>
   *         <p>
   *             <code> ]</code>
   *         </p>
   *         <p>
   *             <code>}</code>
   *         </p>
   */
  LabelCategoryConfigS3Uri?: string;

  /**
   * <p>Provides a breakdown of the number of data objects labeled by humans, the number of
   *             objects labeled by machine, the number of objects than couldn't be labeled, and the
   *             total number of objects labeled. </p>
   */
  LabelCounters: LabelCounters | undefined;

  /**
   * <p>Configuration information for automated data labeling.</p>
   */
  LabelingJobAlgorithmsConfig?: LabelingJobAlgorithmsConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the labeling job.</p>
   */
  LabelingJobArn: string | undefined;

  /**
   * <p>The name assigned to the labeling job when it was created.</p>
   */
  LabelingJobName: string | undefined;

  /**
   * <p>The location of the output produced by the labeling job.</p>
   */
  LabelingJobOutput?: LabelingJobOutput;

  /**
   * <p>The processing status of the labeling job. </p>
   */
  LabelingJobStatus: LabelingJobStatus | string | undefined;

  /**
   * <p>The date and time that the labeling job was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The location of the job's output data and the AWS Key Management Service key ID for the key used to
   *             encrypt the output data, if any.</p>
   */
  OutputConfig: LabelingJobOutputConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that Amazon SageMaker assumes to perform tasks on your behalf
   *             during data labeling.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the
   *             job is automatically stopped.</p>
   */
  StoppingConditions?: LabelingJobStoppingConditions;

  /**
   * <p>An array of key/value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User
   *                 Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace DescribeLabelingJobResponse {
  export const filterSensitiveLog = (
    obj: DescribeLabelingJobResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLabelingJobResponse =>
    __isa(o, "DescribeLabelingJobResponse");
}

export interface DescribeModelInput {
  __type?: "DescribeModelInput";
  /**
   * <p>The name of the model.</p>
   */
  ModelName: string | undefined;
}

export namespace DescribeModelInput {
  export const filterSensitiveLog = (obj: DescribeModelInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeModelInput =>
    __isa(o, "DescribeModelInput");
}

export interface DescribeModelOutput {
  __type?: "DescribeModelOutput";
  /**
   * <p>The containers in the inference pipeline.</p>
   */
  Containers?: ContainerDefinition[];

  /**
   * <p>A timestamp that shows when the model was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>If <code>True</code>, no inbound or outbound network calls can be made to or from the
   *             model container.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that you specified for the
   *             model.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelArn: string | undefined;

  /**
   * <p>Name of the Amazon SageMaker model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The location of the primary inference code, associated artifacts, and custom
   *             environment map that the inference code uses when it is deployed in production.
   *         </p>
   */
  PrimaryContainer?: ContainerDefinition;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that this model has access
   *             to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual
   *                 Private Cloud</a>
   *          </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace DescribeModelOutput {
  export const filterSensitiveLog = (obj: DescribeModelOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeModelOutput =>
    __isa(o, "DescribeModelOutput");
}

export interface DescribeModelPackageInput {
  __type?: "DescribeModelPackageInput";
  /**
   * <p>The name of the model package to describe.</p>
   */
  ModelPackageName: string | undefined;
}

export namespace DescribeModelPackageInput {
  export const filterSensitiveLog = (obj: DescribeModelPackageInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeModelPackageInput =>
    __isa(o, "DescribeModelPackageInput");
}

export interface DescribeModelPackageOutput {
  __type?: "DescribeModelPackageOutput";
  /**
   * <p>Whether the model package is certified for listing on AWS Marketplace.</p>
   */
  CertifyForMarketplace?: boolean;

  /**
   * <p>A timestamp specifying when the model package was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Details about inference jobs that can be run with models based on this model
   *             package.</p>
   */
  InferenceSpecification?: InferenceSpecification;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>A brief summary of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>The name of the model package being described.</p>
   */
  ModelPackageName: string | undefined;

  /**
   * <p>The current status of the model package.</p>
   */
  ModelPackageStatus: ModelPackageStatus | string | undefined;

  /**
   * <p>Details about the current status of the model package.</p>
   */
  ModelPackageStatusDetails: ModelPackageStatusDetails | undefined;

  /**
   * <p>Details about the algorithm that was used to create the model package.</p>
   */
  SourceAlgorithmSpecification?: SourceAlgorithmSpecification;

  /**
   * <p>Configurations for one or more transform jobs that Amazon SageMaker runs to test the model
   *             package.</p>
   */
  ValidationSpecification?: ModelPackageValidationSpecification;
}

export namespace DescribeModelPackageOutput {
  export const filterSensitiveLog = (obj: DescribeModelPackageOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeModelPackageOutput =>
    __isa(o, "DescribeModelPackageOutput");
}

export interface DescribeMonitoringScheduleRequest {
  __type?: "DescribeMonitoringScheduleRequest";
  /**
   * <p>Name of a previously created monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;
}

export namespace DescribeMonitoringScheduleRequest {
  export const filterSensitiveLog = (
    obj: DescribeMonitoringScheduleRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMonitoringScheduleRequest =>
    __isa(o, "DescribeMonitoringScheduleRequest");
}

export interface DescribeMonitoringScheduleResponse {
  __type?: "DescribeMonitoringScheduleResponse";
  /**
   * <p>The time at which the monitoring job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p> The name of the endpoint for the monitoring job.</p>
   */
  EndpointName?: string;

  /**
   * <p>A string, up to one KB in size, that contains the reason a monitoring job failed, if it
   *          failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The time at which the monitoring job was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Describes metadata on the last execution to run, if there was one.</p>
   */
  LastMonitoringExecutionSummary?: MonitoringExecutionSummary;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * <p>The configuration object that specifies the monitoring schedule and defines the
   *          monitoring job.</p>
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;

  /**
   * <p>Name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The status of an monitoring job.</p>
   */
  MonitoringScheduleStatus: ScheduleStatus | string | undefined;
}

export namespace DescribeMonitoringScheduleResponse {
  export const filterSensitiveLog = (
    obj: DescribeMonitoringScheduleResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMonitoringScheduleResponse =>
    __isa(o, "DescribeMonitoringScheduleResponse");
}

export interface DescribeNotebookInstanceInput {
  __type?: "DescribeNotebookInstanceInput";
  /**
   * <p>The name of the notebook instance that you want information about.</p>
   */
  NotebookInstanceName: string | undefined;
}

export namespace DescribeNotebookInstanceInput {
  export const filterSensitiveLog = (
    obj: DescribeNotebookInstanceInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeNotebookInstanceInput =>
    __isa(o, "DescribeNotebookInstanceInput");
}

export interface DescribeNotebookInstanceLifecycleConfigInput {
  __type?: "DescribeNotebookInstanceLifecycleConfigInput";
  /**
   * <p>The name of the lifecycle configuration to describe.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

export namespace DescribeNotebookInstanceLifecycleConfigInput {
  export const filterSensitiveLog = (
    obj: DescribeNotebookInstanceLifecycleConfigInput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeNotebookInstanceLifecycleConfigInput =>
    __isa(o, "DescribeNotebookInstanceLifecycleConfigInput");
}

export interface DescribeNotebookInstanceLifecycleConfigOutput {
  __type?: "DescribeNotebookInstanceLifecycleConfigOutput";
  /**
   * <p>A timestamp that tells when the lifecycle configuration was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigArn?: string;

  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * <p>The shell script that runs only once, when you create a notebook instance.</p>
   */
  OnCreate?: NotebookInstanceLifecycleHook[];

  /**
   * <p>The shell script that runs every time you start a notebook instance, including when
   *             you create the notebook instance.</p>
   */
  OnStart?: NotebookInstanceLifecycleHook[];
}

export namespace DescribeNotebookInstanceLifecycleConfigOutput {
  export const filterSensitiveLog = (
    obj: DescribeNotebookInstanceLifecycleConfigOutput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeNotebookInstanceLifecycleConfigOutput =>
    __isa(o, "DescribeNotebookInstanceLifecycleConfigOutput");
}

export interface DescribeNotebookInstanceOutput {
  __type?: "DescribeNotebookInstanceOutput";
  /**
   * <p>A list of the Elastic Inference (EI) instance types associated with this notebook
   *             instance. Currently only one EI instance type can be associated with a notebook
   *             instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in Amazon
   *                 SageMaker</a>.</p>
   */
  AcceleratorTypes?: (NotebookInstanceAcceleratorType | string)[];

  /**
   * <p>An array of up to three Git repositories associated with the notebook instance. These
   *             can be either the names of Git repositories stored as resources in your account, or the
   *             URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
   *             other Git repository. These repositories are cloned at the same level as the default
   *             repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with Amazon SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];

  /**
   * <p>A timestamp. Use this parameter to return the time when the notebook instance was
   *             created</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Git repository associated with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
   *             other Git repository. When you open a notebook instance, it opens in the directory that
   *             contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with Amazon SageMaker
   *                 Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>Describes whether Amazon SageMaker provides internet access to the notebook instance. If this
   *             value is set to <i>Disabled</i>, the notebook instance does not have
   *             internet access, and cannot connect to Amazon SageMaker training and endpoint services.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/appendix-additional-considerations.html#appendix-notebook-and-internet-access">Notebook Instances Are Internet-Enabled by Default</a>.</p>
   */
  DirectInternetAccess?: DirectInternetAccess | string;

  /**
   * <p>If status is <code>Failed</code>, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The type of ML compute instance running on the notebook instance.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The AWS KMS key ID Amazon SageMaker uses to encrypt data when storing it on the ML storage
   *             volume attached to the instance. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>A timestamp. Use this parameter to retrieve the time when the notebook instance was
   *             last modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The network interface IDs that Amazon SageMaker created at the time of creating the instance.
   *         </p>
   */
  NetworkInterfaceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the notebook instance.</p>
   */
  NotebookInstanceArn?: string;

  /**
   * <p>Returns the name of a notebook instance lifecycle configuration.</p>
   *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
   *                 2.1: (Optional) Customize a Notebook Instance</a>
   *         </p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * <p>The name of the Amazon SageMaker notebook instance. </p>
   */
  NotebookInstanceName?: string;

  /**
   * <p>The status of the notebook instance.</p>
   */
  NotebookInstanceStatus?: NotebookInstanceStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the instance.
   *         </p>
   */
  RoleArn?: string;

  /**
   * <p>Whether root access is enabled or disabled for users of the notebook instance.</p>
   *         <note>
   *             <p>Lifecycle configurations need root access to be able to set up a notebook
   *                 instance. Because of this, lifecycle configurations associated with a notebook
   *                 instance always run with root access even if you disable root access for
   *                 users.</p>
   *         </note>
   */
  RootAccess?: RootAccess | string;

  /**
   * <p>The IDs of the VPC security groups.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The ID of the VPC subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The URL that you use to connect to the Jupyter notebook that is running in your
   *             notebook instance. </p>
   */
  Url?: string;

  /**
   * <p>The size, in GB, of the ML storage volume attached to the notebook instance.</p>
   */
  VolumeSizeInGB?: number;
}

export namespace DescribeNotebookInstanceOutput {
  export const filterSensitiveLog = (
    obj: DescribeNotebookInstanceOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeNotebookInstanceOutput =>
    __isa(o, "DescribeNotebookInstanceOutput");
}

export interface DescribeProcessingJobRequest {
  __type?: "DescribeProcessingJobRequest";
  /**
   * <p>The name of the processing job. The name must be unique within an AWS Region in the
   *             AWS account.</p>
   */
  ProcessingJobName: string | undefined;
}

export namespace DescribeProcessingJobRequest {
  export const filterSensitiveLog = (
    obj: DescribeProcessingJobRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeProcessingJobRequest =>
    __isa(o, "DescribeProcessingJobRequest");
}

export interface DescribeProcessingJobResponse {
  __type?: "DescribeProcessingJobResponse";
  /**
   * <p>Configures the processing job to run a specified container image.</p>
   */
  AppSpecification: AppSpecification | undefined;

  /**
   * <p>The ARN of an AutoML job associated with this processing job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>The time at which the processing job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The environment variables set in the Docker container.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>An optional string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   */
  ExitMessage?: string;

  /**
   * <p>The configuration information used to create an experiment.</p>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>The time at which the processing job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The ARN of a monitoring schedule for an endpoint associated with this processing
   *             job.</p>
   */
  MonitoringScheduleArn?: string;

  /**
   * <p>Networking options for a processing job.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * <p>The time at which the processing job completed.</p>
   */
  ProcessingEndTime?: Date;

  /**
   * <p>The inputs for a processing job.</p>
   */
  ProcessingInputs?: ProcessingInput[];

  /**
   * <p>The Amazon Resource Name (ARN) of the processing job.</p>
   */
  ProcessingJobArn: string | undefined;

  /**
   * <p>The name of the processing job. The name must be unique within an AWS Region in the
   *             AWS account.</p>
   */
  ProcessingJobName: string | undefined;

  /**
   * <p>Provides the status of a processing job.</p>
   */
  ProcessingJobStatus: ProcessingJobStatus | string | undefined;

  /**
   * <p>Output configuration for the processing job.</p>
   */
  ProcessingOutputConfig?: ProcessingOutputConfig;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *             processing job. In distributed training, you specify more than one instance.</p>
   */
  ProcessingResources: ProcessingResources | undefined;

  /**
   * <p>The time at which the processing job started.</p>
   */
  ProcessingStartTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on
   *             your behalf.</p>
   */
  RoleArn?: string;

  /**
   * <p>The time limit for how long the processing job is allowed to run.</p>
   */
  StoppingCondition?: ProcessingStoppingCondition;

  /**
   * <p>The ARN of a training job associated with this processing job.</p>
   */
  TrainingJobArn?: string;
}

export namespace DescribeProcessingJobResponse {
  export const filterSensitiveLog = (
    obj: DescribeProcessingJobResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeProcessingJobResponse =>
    __isa(o, "DescribeProcessingJobResponse");
}

export interface DescribeSubscribedWorkteamRequest {
  __type?: "DescribeSubscribedWorkteamRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the subscribed work team to describe.</p>
   */
  WorkteamArn: string | undefined;
}

export namespace DescribeSubscribedWorkteamRequest {
  export const filterSensitiveLog = (
    obj: DescribeSubscribedWorkteamRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSubscribedWorkteamRequest =>
    __isa(o, "DescribeSubscribedWorkteamRequest");
}

export interface DescribeSubscribedWorkteamResponse {
  __type?: "DescribeSubscribedWorkteamResponse";
  /**
   * <p>A <code>Workteam</code> instance that contains information about the work team.</p>
   */
  SubscribedWorkteam: SubscribedWorkteam | undefined;
}

export namespace DescribeSubscribedWorkteamResponse {
  export const filterSensitiveLog = (
    obj: DescribeSubscribedWorkteamResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSubscribedWorkteamResponse =>
    __isa(o, "DescribeSubscribedWorkteamResponse");
}

export interface DescribeTrainingJobRequest {
  __type?: "DescribeTrainingJobRequest";
  /**
   * <p>The name of the training job.</p>
   */
  TrainingJobName: string | undefined;
}

export namespace DescribeTrainingJobRequest {
  export const filterSensitiveLog = (obj: DescribeTrainingJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTrainingJobRequest =>
    __isa(o, "DescribeTrainingJobRequest");
}

export interface DescribeTrainingJobResponse {
  __type?: "DescribeTrainingJobResponse";
  /**
   * <p>Information about the algorithm used for training, and algorithm metadata.
   *         </p>
   */
  AlgorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * <p></p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>The billable time in seconds.</p>
   *         <p>You can calculate the savings from using managed spot training using the formula
   *                 <code>(1 - BillableTimeInSeconds / TrainingTimeInSeconds) * 100</code>. For example,
   *             if <code>BillableTimeInSeconds</code> is 100 and <code>TrainingTimeInSeconds</code> is
   *             500, the savings is 80%.</p>
   */
  BillableTimeInSeconds?: number;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data. </p>
   */
  CheckpointConfig?: CheckpointConfig;

  /**
   * <p>A timestamp that indicates when the training job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>Configuration information for the debug hook parameters, collection configuration, and
   *             storage paths.</p>
   */
  DebugHookConfig?: DebugHookConfig;

  /**
   * <p>Configuration information for debugging rules.</p>
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * <p>Status about the debug rule evaluation.</p>
   */
  DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithms in
   *             distributed training.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>A Boolean indicating whether managed spot training is enabled (<code>True</code>) or
   *             not (<code>False</code>).</p>
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * <p>If you want to allow inbound or outbound network calls, except for calls between peers
   *             within a training cluster for distributed training, choose <code>True</code>. If you
   *             enable network isolation for training jobs that are configured to use a VPC, Amazon SageMaker
   *             downloads and uploads customer data and model artifacts through the specified VPC, but
   *             the training container does not have network access.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>Configuration for the experiment.</p>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>If the training job failed, the reason it failed. </p>
   */
  FailureReason?: string;

  /**
   * <p>A collection of <code>MetricData</code> objects that specify the names, values, and
   *             dates and times that the training algorithm emitted to Amazon CloudWatch.</p>
   */
  FinalMetricDataList?: MetricData[];

  /**
   * <p>Algorithm-specific parameters. </p>
   */
  HyperParameters?: { [key: string]: string };

  /**
   * <p>An array of <code>Channel</code> objects that describes each data input channel.
   *         </p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SageMaker Ground Truth labeling job that created the
   *             transform or training job.</p>
   */
  LabelingJobArn?: string;

  /**
   * <p>A timestamp that indicates when the status of the training job was last
   *             modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the Amazon S3 location that is configured for storing model artifacts.
   *         </p>
   */
  ModelArtifacts: ModelArtifacts | undefined;

  /**
   * <p>The S3 path where model artifacts that you configured when creating the job are
   *             stored. Amazon SageMaker creates subfolders for model artifacts. </p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>Resources, including ML compute instances and ML storage volumes, that are
   *             configured for model training. </p>
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * <p>The AWS Identity and Access Management (IAM) role configured for the training job. </p>
   */
  RoleArn?: string;

  /**
   * <p> Provides detailed information about the state of the training job. For detailed
   *             information on the secondary status of the training job, see <code>StatusMessage</code>
   *             under <a>SecondaryStatusTransition</a>.</p>
   *         <p>Amazon SageMaker provides primary statuses and secondary statuses that apply to each of
   *             them:</p>
   *         <dl>
   *             <dt>InProgress</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Starting</code>
   *                                 - Starting the training job.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Downloading</code> - An optional stage for algorithms that
   *                                 support <code>File</code> training input mode. It indicates that
   *                                 data is being downloaded to the ML storage volumes.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Training</code> - Training is in progress.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Interrupted</code> - The job stopped because the managed
   *                                 spot training instances were interrupted. </p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Uploading</code> - Training is complete and the model
   *                                 artifacts are being uploaded to the S3 location.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Completed</code> - The training job has completed.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Failed</code> - The training job has failed. The reason for
   *                                 the failure is returned in the <code>FailureReason</code> field of
   *                                     <code>DescribeTrainingJobResponse</code>.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Stopped</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>MaxRuntimeExceeded</code> - The job stopped because it
   *                                 exceeded the maximum allowed runtime.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>MaxWaitTmeExceeded</code> - The job stopped because it
   *                                 exceeded the maximum allowed wait time.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Stopped</code> - The training job has stopped.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Stopping</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Stopping</code> - Stopping the training job.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *          </dl>
   *
   *         <important>
   *             <p>Valid values for <code>SecondaryStatus</code> are subject to change. </p>
   *         </important>
   *         <p>We no longer support the following secondary statuses:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>LaunchingMLInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>PreparingTrainingStack</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>DownloadingTrainingImage</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  SecondaryStatus: SecondaryStatus | string | undefined;

  /**
   * <p>A history of all of the secondary statuses that the training job has transitioned
   *             through.</p>
   */
  SecondaryStatusTransitions?: SecondaryStatusTransition[];

  /**
   * <p>Specifies a limit to how long a model training job can run. It also specifies the
   *             maximum time to wait for a spot instance. When the job reaches the time limit, Amazon SageMaker ends
   *             the training job. Use this API to cap model training costs.</p>
   *         <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
   *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
   *             model artifacts, so the results of training are not lost. </p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>Configuration of storage locations for TensorBoard output.</p>
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * <p>Indicates the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when Amazon SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;

  /**
   * <p> Name of the model training job. </p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The status of the
   *             training
   *             job.</p>
   *         <p>Amazon SageMaker provides the following training job statuses:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>InProgress</code> - The training is in progress.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Completed</code> - The training job has completed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Failed</code> - The training job has failed. To see the reason for the
   *                     failure, see the <code>FailureReason</code> field in the response to a
   *                         <code>DescribeTrainingJobResponse</code> call.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Stopping</code> - The training job is stopping.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Stopped</code> - The training job has stopped.</p>
   *             </li>
   *          </ul>
   *         <p>For
   *             more detailed information, see <code>SecondaryStatus</code>. </p>
   */
  TrainingJobStatus: TrainingJobStatus | string | undefined;

  /**
   * <p>Indicates the time when the training job starts on training instances. You are
   *             billed for the time interval between this time and the value of
   *                 <code>TrainingEndTime</code>. The start time in CloudWatch Logs might be later than this time.
   *             The difference is due to the time it takes to download the training data and to the size
   *             of the training container.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>The training time in seconds.</p>
   */
  TrainingTimeInSeconds?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the
   *             training job was launched by a hyperparameter tuning job.</p>
   */
  TuningJobArn?: string;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that this training job has
   *             access to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;
}

export namespace DescribeTrainingJobResponse {
  export const filterSensitiveLog = (
    obj: DescribeTrainingJobResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTrainingJobResponse =>
    __isa(o, "DescribeTrainingJobResponse");
}

export interface DescribeTransformJobRequest {
  __type?: "DescribeTransformJobRequest";
  /**
   * <p>The name of the transform job that you want to view details of.</p>
   */
  TransformJobName: string | undefined;
}

export namespace DescribeTransformJobRequest {
  export const filterSensitiveLog = (
    obj: DescribeTransformJobRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTransformJobRequest =>
    __isa(o, "DescribeTransformJobRequest");
}

export interface DescribeTransformJobResponse {
  __type?: "DescribeTransformJobResponse";
  /**
   * <p></p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>Specifies the number of records to include in a mini-batch for an HTTP inference
   *             request.
   *             A <i>record</i>
   *             <i></i> is a single unit of input data that inference
   *             can be made on. For example, a single line in a CSV file is a record. </p>
   *         <p>To enable the batch strategy, you must set <code>SplitType</code>
   *             to
   *                 <code>Line</code>, <code>RecordIO</code>, or
   *             <code>TFRecord</code>.</p>
   */
  BatchStrategy?: BatchStrategy | string;

  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The data structure used to specify the data to be used for inference in a batch
   *             transform job and to associate the data that is relevant to the prediction results in
   *             the output. The input filter provided allows you to exclude input data that is not
   *             needed for inference in a batch transform job. The output filter provided allows you to
   *             include input data relevant to interpreting the predictions in the output from the job.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction
   *                 Results with their Corresponding Input Records</a>.</p>
   */
  DataProcessing?: DataProcessing;

  /**
   * <p>The
   *             environment variables to set in the Docker container. We support up to 16 key and values
   *             entries in the map.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>Configuration for the experiment.</p>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>If the transform job failed, <code>FailureReason</code> describes
   *             why
   *             it failed. A transform job creates a log file, which includes error
   *             messages, and stores it
   *             as
   *             an Amazon S3
   *             object.
   *             For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/logging-cloudwatch.html">Log Amazon SageMaker Events with
   *                 Amazon CloudWatch</a>.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SageMaker Ground Truth labeling job that created the
   *             transform or training job.</p>
   */
  LabelingJobArn?: string;

  /**
   * <p>The
   *             maximum number
   *             of
   *             parallel requests on each instance node
   *             that can be launched in a transform job. The default value is 1.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>The
   *             maximum
   *             payload size, in MB, used in the
   *             transform job.</p>
   */
  MaxPayloadInMB?: number;

  /**
   * <p>The name of the model used in the transform job.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>Indicates when the transform job has been
   *
   *             completed, or has stopped or failed. You are billed for the time
   *             interval between this time and the value of <code>TransformStartTime</code>.</p>
   */
  TransformEndTime?: Date;

  /**
   * <p>Describes the dataset to be transformed and the Amazon S3 location where it is
   *             stored.</p>
   */
  TransformInput: TransformInput | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn: string | undefined;

  /**
   * <p>The name of the transform job.</p>
   */
  TransformJobName: string | undefined;

  /**
   * <p>The
   *             status of the transform job. If the transform job failed, the reason
   *             is returned in the <code>FailureReason</code> field.</p>
   */
  TransformJobStatus: TransformJobStatus | string | undefined;

  /**
   * <p>Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the
   *             transform job.</p>
   */
  TransformOutput?: TransformOutput;

  /**
   * <p>Describes
   *             the resources, including ML instance types and ML instance count, to
   *             use for the transform job.</p>
   */
  TransformResources: TransformResources | undefined;

  /**
   * <p>Indicates when the transform job starts
   *             on
   *             ML instances. You are billed for the time interval between this time
   *             and the value of <code>TransformEndTime</code>.</p>
   */
  TransformStartTime?: Date;
}

export namespace DescribeTransformJobResponse {
  export const filterSensitiveLog = (
    obj: DescribeTransformJobResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTransformJobResponse =>
    __isa(o, "DescribeTransformJobResponse");
}

export interface DescribeTrialComponentRequest {
  __type?: "DescribeTrialComponentRequest";
  /**
   * <p>The name of the trial component to describe.</p>
   */
  TrialComponentName: string | undefined;
}

export namespace DescribeTrialComponentRequest {
  export const filterSensitiveLog = (
    obj: DescribeTrialComponentRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTrialComponentRequest =>
    __isa(o, "DescribeTrialComponentRequest");
}

export interface DescribeTrialComponentResponse {
  __type?: "DescribeTrialComponentResponse";
  /**
   * <p>Who created the component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't
   *       specified, <code>TrialComponentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input artifacts of the component.</p>
   */
  InputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>Who last modified the component.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>When the component was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The metrics for the component.</p>
   */
  Metrics?: TrialComponentMetricSummary[];

  /**
   * <p>The output artifacts of the component.</p>
   */
  OutputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The hyperparameters of the component.</p>
   */
  Parameters?: { [key: string]: TrialComponentParameterValue };

  /**
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the
   *       job type.</p>
   */
  Source?: TrialComponentSource;

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of the component. States include:</p>
   *          <ul>
   *             <li>
   *                <p>InProgress</p>
   *             </li>
   *             <li>
   *                <p>Completed</p>
   *             </li>
   *             <li>
   *                <p>Failed</p>
   *             </li>
   *          </ul>
   */
  Status?: TrialComponentStatus;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;
}

export namespace DescribeTrialComponentResponse {
  export const filterSensitiveLog = (
    obj: DescribeTrialComponentResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTrialComponentResponse =>
    __isa(o, "DescribeTrialComponentResponse");
}

export interface DescribeTrialRequest {
  __type?: "DescribeTrialRequest";
  /**
   * <p>The name of the trial to describe.</p>
   */
  TrialName: string | undefined;
}

export namespace DescribeTrialRequest {
  export const filterSensitiveLog = (obj: DescribeTrialRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTrialRequest =>
    __isa(o, "DescribeTrialRequest");
}

export interface DescribeTrialResponse {
  __type?: "DescribeTrialResponse";
  /**
   * <p>Who created the trial.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the trial was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't
   *       specified, <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the experiment the trial is part of.</p>
   */
  ExperimentName?: string;

  /**
   * <p>Who last modified the trial.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>When the trial was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the source and, optionally, the
   *       job type.</p>
   */
  Source?: TrialSource;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;

  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;
}

export namespace DescribeTrialResponse {
  export const filterSensitiveLog = (obj: DescribeTrialResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTrialResponse =>
    __isa(o, "DescribeTrialResponse");
}

export interface DescribeUserProfileRequest {
  __type?: "DescribeUserProfileRequest";
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;
}

export namespace DescribeUserProfileRequest {
  export const filterSensitiveLog = (obj: DescribeUserProfileRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeUserProfileRequest =>
    __isa(o, "DescribeUserProfileRequest");
}

export interface DescribeUserProfileResponse {
  __type?: "DescribeUserProfileResponse";
  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The failure reason.</p>
   */
  FailureReason?: string;

  /**
   * <p>The homa Amazon Elastic File System (EFS) Uid.</p>
   */
  HomeEfsFileSystemUid?: string;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The SSO user identifier.</p>
   */
  SingleSignOnUserIdentifier?: string;

  /**
   * <p>The SSO user value.</p>
   */
  SingleSignOnUserValue?: string;

  /**
   * <p>The status.</p>
   */
  Status?: UserProfileStatus | string;

  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   */
  UserProfileArn?: string;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;

  /**
   * <p>A collection of settings.</p>
   */
  UserSettings?: UserSettings;
}

export namespace DescribeUserProfileResponse {
  export const filterSensitiveLog = (
    obj: DescribeUserProfileResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeUserProfileResponse =>
    __isa(o, "DescribeUserProfileResponse");
}

export interface DescribeWorkforceRequest {
  __type?: "DescribeWorkforceRequest";
  /**
   * <p>The name of the private workforce whose access you want to restrict.
   *                 <code>WorkforceName</code> is automatically set to <code>"default"</code> when a
   *             workforce is created and cannot be modified. </p>
   */
  WorkforceName: string | undefined;
}

export namespace DescribeWorkforceRequest {
  export const filterSensitiveLog = (obj: DescribeWorkforceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkforceRequest =>
    __isa(o, "DescribeWorkforceRequest");
}

export interface DescribeWorkforceResponse {
  __type?: "DescribeWorkforceResponse";
  /**
   * <p>A single private workforce, which is automatically created when you create your first
   *             private work team. You can create one private work force in each AWS Region. By default,
   *             any workforce related API operation used in a specific region will apply to the
   *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
   */
  Workforce: Workforce | undefined;
}

export namespace DescribeWorkforceResponse {
  export const filterSensitiveLog = (obj: DescribeWorkforceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkforceResponse =>
    __isa(o, "DescribeWorkforceResponse");
}

export interface DescribeWorkteamRequest {
  __type?: "DescribeWorkteamRequest";
  /**
   * <p>The name of the work team to return a description of.</p>
   */
  WorkteamName: string | undefined;
}

export namespace DescribeWorkteamRequest {
  export const filterSensitiveLog = (obj: DescribeWorkteamRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkteamRequest =>
    __isa(o, "DescribeWorkteamRequest");
}

export interface DescribeWorkteamResponse {
  __type?: "DescribeWorkteamResponse";
  /**
   * <p>A <code>Workteam</code> instance that contains information about the work team.
   *         </p>
   */
  Workteam: Workteam | undefined;
}

export namespace DescribeWorkteamResponse {
  export const filterSensitiveLog = (obj: DescribeWorkteamResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkteamResponse =>
    __isa(o, "DescribeWorkteamResponse");
}

/**
 * <p>Specifies weight and capacity values for a production variant.</p>
 */
export interface DesiredWeightAndCapacity {
  __type?: "DesiredWeightAndCapacity";
  /**
   * <p>The variant's capacity.</p>
   */
  DesiredInstanceCount?: number;

  /**
   * <p>The variant's weight.</p>
   */
  DesiredWeight?: number;

  /**
   * <p>The name of the
   *             variant
   *             to update.</p>
   */
  VariantName: string | undefined;
}

export namespace DesiredWeightAndCapacity {
  export const filterSensitiveLog = (obj: DesiredWeightAndCapacity): any => ({
    ...obj
  });
  export const isa = (o: any): o is DesiredWeightAndCapacity =>
    __isa(o, "DesiredWeightAndCapacity");
}

export enum DetailedAlgorithmStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  NOT_STARTED = "NotStarted"
}

export enum DetailedModelPackageStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  NOT_STARTED = "NotStarted"
}

export enum DirectInternetAccess {
  DISABLED = "Disabled",
  ENABLED = "Enabled"
}

export interface DisassociateTrialComponentRequest {
  __type?: "DisassociateTrialComponentRequest";
  /**
   * <p>The name of the component to disassociate from the trial.</p>
   */
  TrialComponentName: string | undefined;

  /**
   * <p>The name of the trial to disassociate from.</p>
   */
  TrialName: string | undefined;
}

export namespace DisassociateTrialComponentRequest {
  export const filterSensitiveLog = (
    obj: DisassociateTrialComponentRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateTrialComponentRequest =>
    __isa(o, "DisassociateTrialComponentRequest");
}

export interface DisassociateTrialComponentResponse {
  __type?: "DisassociateTrialComponentResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;

  /**
   * <p>The ARN of the trial component.</p>
   */
  TrialComponentArn?: string;
}

export namespace DisassociateTrialComponentResponse {
  export const filterSensitiveLog = (
    obj: DisassociateTrialComponentResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateTrialComponentResponse =>
    __isa(o, "DisassociateTrialComponentResponse");
}

/**
 * <p>The domain's details.</p>
 */
export interface DomainDetails {
  __type?: "DomainDetails";
  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The domain's Amazon Resource Name (ARN).</p>
   */
  DomainArn?: string;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The domain name.</p>
   */
  DomainName?: string;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The status.</p>
   */
  Status?: DomainStatus | string;

  /**
   * <p>The domain's URL.</p>
   */
  Url?: string;
}

export namespace DomainDetails {
  export const filterSensitiveLog = (obj: DomainDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainDetails => __isa(o, "DomainDetails");
}

export enum DomainStatus {
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending"
}

export enum EndpointConfigSortKey {
  CreationTime = "CreationTime",
  Name = "Name"
}

/**
 * <p>Provides summary information for an endpoint configuration.</p>
 */
export interface EndpointConfigSummary {
  __type?: "EndpointConfigSummary";
  /**
   * <p>A timestamp that shows when the endpoint configuration was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint configuration.</p>
   */
  EndpointConfigArn: string | undefined;

  /**
   * <p>The name of the endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;
}

export namespace EndpointConfigSummary {
  export const filterSensitiveLog = (obj: EndpointConfigSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is EndpointConfigSummary =>
    __isa(o, "EndpointConfigSummary");
}

/**
 * <p>Input object for the endpoint</p>
 */
export interface EndpointInput {
  __type?: "EndpointInput";
  /**
   * <p>An endpoint in customer's account which has enabled <code>DataCaptureConfig</code>
   *          enabled.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>Path to the filesystem where the endpoint data is available to the container.</p>
   */
  LocalPath: string | undefined;

  /**
   * <p>Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key.
   *          Defauts to <code>FullyReplicated</code>
   *          </p>
   */
  S3DataDistributionType?: ProcessingS3DataDistributionType | string;

  /**
   * <p>Whether the <code>Pipe</code> or <code>File</code> is used as the input mode for
   *          transfering data for the monitoring job. <code>Pipe</code> mode is recommended for large
   *          datasets. <code>File</code> mode is useful for small files that fit in memory. Defaults to
   *             <code>File</code>.</p>
   */
  S3InputMode?: ProcessingS3InputMode | string;
}

export namespace EndpointInput {
  export const filterSensitiveLog = (obj: EndpointInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is EndpointInput => __isa(o, "EndpointInput");
}

export enum EndpointSortKey {
  CreationTime = "CreationTime",
  Name = "Name",
  Status = "Status"
}

export enum EndpointStatus {
  CREATING = "Creating",
  DELETING = "Deleting",
  FAILED = "Failed",
  IN_SERVICE = "InService",
  OUT_OF_SERVICE = "OutOfService",
  ROLLING_BACK = "RollingBack",
  SYSTEM_UPDATING = "SystemUpdating",
  UPDATING = "Updating"
}

/**
 * <p>Provides summary information for an endpoint.</p>
 */
export interface EndpointSummary {
  __type?: "EndpointSummary";
  /**
   * <p>A timestamp that shows when the endpoint was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>The name of the endpoint.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The status of the endpoint.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>OutOfService</code>: Endpoint is not available to take incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Creating</code>: <a>CreateEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Updating</code>: <a>UpdateEndpoint</a> or <a>UpdateEndpointWeightsAndCapacities</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SystemUpdating</code>: Endpoint is undergoing maintenance and cannot be
   *                     updated or deleted or re-scaled until it has completed. This maintenance
   *                     operation does not change any customer-specified values such as VPC config, KMS
   *                     encryption, model, instance type, or instance count.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>RollingBack</code>: Endpoint fails to scale up or down or change its
   *                     variant weight and is in the process of rolling back to its previous
   *                     configuration. Once the rollback completes, endpoint returns to an
   *                         <code>InService</code> status. This transitional status only applies to an
   *                     endpoint that has autoscaling enabled and is undergoing variant weight or
   *                     capacity changes as part of an <a>UpdateEndpointWeightsAndCapacities</a> call or when the <a>UpdateEndpointWeightsAndCapacities</a> operation is called
   *                     explicitly.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InService</code>: Endpoint is available to process incoming
   *                     requests.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Deleting</code>: <a>DeleteEndpoint</a> is executing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Failed</code>: Endpoint could not be created, updated, or re-scaled. Use
   *                         <a>DescribeEndpointOutput$FailureReason</a> for information about
   *                     the failure. <a>DeleteEndpoint</a> is the only operation that can be
   *                     performed on a failed endpoint.</p>
   *             </li>
   *          </ul>
   *         <p>To get a list of endpoints with a specified status, use the <a>ListEndpointsInput$StatusEquals</a> filter.</p>
   */
  EndpointStatus: EndpointStatus | string | undefined;

  /**
   * <p>A timestamp that shows when the endpoint was last modified.</p>
   */
  LastModifiedTime: Date | undefined;
}

export namespace EndpointSummary {
  export const filterSensitiveLog = (obj: EndpointSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is EndpointSummary =>
    __isa(o, "EndpointSummary");
}

export enum ExecutionStatus {
  COMPLETED = "Completed",
  COMPLETED_WITH_VIOLATIONS = "CompletedWithViolations",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
  STOPPED = "Stopped",
  STOPPING = "Stopping"
}

/**
 * <p>A summary of the properties of an experiment as returned by the
 *       <a>Search</a> API.</p>
 */
export interface Experiment {
  __type?: "Experiment";
  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code>
   *       isn't specified, <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The source of the experiment.</p>
   */
  Source?: ExperimentSource;

  /**
   * <p>The list of tags that are associated with the experiment. You can use
   *       <a>Search</a> API to search on the tags.</p>
   */
  Tags?: Tag[];
}

export namespace Experiment {
  export const filterSensitiveLog = (obj: Experiment): any => ({
    ...obj
  });
  export const isa = (o: any): o is Experiment => __isa(o, "Experiment");
}

/**
 * <p>Configuration for the experiment.</p>
 */
export interface ExperimentConfig {
  __type?: "ExperimentConfig";
  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>Display name for the trial component.</p>
   */
  TrialComponentDisplayName?: string;

  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;
}

export namespace ExperimentConfig {
  export const filterSensitiveLog = (obj: ExperimentConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExperimentConfig =>
    __isa(o, "ExperimentConfig");
}

/**
 * <p>The source of the experiment.</p>
 */
export interface ExperimentSource {
  __type?: "ExperimentSource";
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The source type.</p>
   */
  SourceType?: string;
}

export namespace ExperimentSource {
  export const filterSensitiveLog = (obj: ExperimentSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExperimentSource =>
    __isa(o, "ExperimentSource");
}

/**
 * <p>A summary of the properties of an experiment. To get the complete set of
 *       properties, call the <a>DescribeExperiment</a> API and provide the
 *       <code>ExperimentName</code>.</p>
 */
export interface ExperimentSummary {
  __type?: "ExperimentSummary";
  /**
   * <p>When the experiment was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The name of the experiment as displayed. If <code>DisplayName</code>
   *       isn't specified, <code>ExperimentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;

  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The source of the experiment.</p>
   */
  ExperimentSource?: ExperimentSource;

  /**
   * <p>When the experiment was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export namespace ExperimentSummary {
  export const filterSensitiveLog = (obj: ExperimentSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExperimentSummary =>
    __isa(o, "ExperimentSummary");
}

export enum FileSystemAccessMode {
  RO = "ro",
  RW = "rw"
}

/**
 * <p>Specifies a file system data source for a channel.</p>
 */
export interface FileSystemDataSource {
  __type?: "FileSystemDataSource";
  /**
   * <p>The full path to the directory to associate with the channel.</p>
   */
  DirectoryPath: string | undefined;

  /**
   * <p>The access mode of the mount of the directory associated with the channel. A directory
   *             can be mounted either in <code>ro</code> (read-only) or <code>rw</code> (read-write)
   *             mode.</p>
   */
  FileSystemAccessMode: FileSystemAccessMode | string | undefined;

  /**
   * <p>The file system id.</p>
   */
  FileSystemId: string | undefined;

  /**
   * <p>The file system type. </p>
   */
  FileSystemType: FileSystemType | string | undefined;
}

export namespace FileSystemDataSource {
  export const filterSensitiveLog = (obj: FileSystemDataSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is FileSystemDataSource =>
    __isa(o, "FileSystemDataSource");
}

export enum FileSystemType {
  EFS = "EFS",
  FSXLUSTRE = "FSxLustre"
}

/**
 * <p>A conditional statement for a search expression that includes a
 *       resource property, a Boolean operator, and a value.</p>
 *          <p>If you don't specify an <code>Operator</code> and a <code>Value</code>, the filter
 *       searches for only the specified property. For example, defining a <code>Filter</code>
 *       for the <code>FailureReason</code> for the <code>TrainingJob</code>
 *             <code>Resource</code> searches for training job objects that have a value in the
 *           <code>FailureReason</code> field.</p>
 *          <p>If you specify a <code>Value</code>, but not an <code>Operator</code>, Amazon SageMaker uses the
 *       equals operator as the default.</p>
 *          <p>In search, there are several property types:</p>
 *          <dl>
 *             <dt>Metrics</dt>
 *             <dd>
 *                <p>To define a metric filter, enter a value using the form
 *             <code>"Metrics.<name>"</code>, where <code><name></code> is
 *             a metric name. For example, the following filter searches for training jobs
 *             with an <code>"accuracy"</code> metric greater than
 *             <code>"0.9"</code>:</p>
 *                <p>
 *                   <code>{</code>
 *                </p>
 *                <p>
 *                   <code>"Name": "Metrics.accuracy",</code>
 *                </p>
 *                <p>
 *                   <code>"Operator": "GREATER_THAN",</code>
 *                </p>
 *                <p>
 *                   <code>"Value": "0.9"</code>
 *                </p>
 *                <p>
 *                   <code>}</code>
 *                </p>
 *             </dd>
 *             <dt>HyperParameters</dt>
 *             <dd>
 *                <p>To define a hyperparameter filter, enter a value with the form
 *             <code>"HyperParameters.<name>"</code>. Decimal hyperparameter
 *             values are treated as a decimal in a comparison if the specified
 *             <code>Value</code> is also a decimal value. If the specified
 *             <code>Value</code> is an integer, the decimal hyperparameter values are
 *             treated as integers. For example, the following filter is satisfied by
 *             training jobs with a <code>"learning_rate"</code> hyperparameter that is
 *             less than <code>"0.5"</code>:</p>
 *                <p>
 *                   <code> {</code>
 *                </p>
 *                <p>
 *                   <code> "Name": "HyperParameters.learning_rate",</code>
 *                </p>
 *                <p>
 *                   <code> "Operator": "LESS_THAN",</code>
 *                </p>
 *                <p>
 *                   <code> "Value": "0.5"</code>
 *                </p>
 *                <p>
 *                   <code> }</code>
 *                </p>
 *             </dd>
 *             <dt>Tags</dt>
 *             <dd>
 *                <p>To define a tag filter, enter a value with the form
 *             <code>"Tags.<key>"</code>.</p>
 *             </dd>
 *          </dl>
 */
export interface Filter {
  __type?: "Filter";
  /**
   * <p>A property name. For example, <code>TrainingJobName</code>. For the list of valid property names
   *       returned in a search result for each supported resource, see <a>TrainingJob</a> properties.
   *       You must specify a valid property name for the resource.</p>
   */
  Name: string | undefined;

  /**
   * <p>A Boolean binary operator that is used to evaluate the filter. The operator field
   *       contains one of the following values:</p>
   *          <dl>
   *             <dt>Equals</dt>
   *             <dd>
   *                <p>The specified resource in <code>Name</code> equals the specified
   *             <code>Value</code>.</p>
   *             </dd>
   *             <dt>NotEquals</dt>
   *             <dd>
   *                <p>The specified resource in <code>Name</code> does not equal the specified
   *             <code>Value</code>.</p>
   *             </dd>
   *             <dt>GreaterThan</dt>
   *             <dd>
   *                <p>The specified resource in <code>Name</code> is greater than the specified
   *             <code>Value</code>. Not supported for text-based properties.</p>
   *             </dd>
   *             <dt>GreaterThanOrEqualTo</dt>
   *             <dd>
   *                <p>The specified resource in <code>Name</code> is greater than or equal to
   *             the specified <code>Value</code>. Not supported for text-based
   *             properties.</p>
   *             </dd>
   *             <dt>LessThan</dt>
   *             <dd>
   *                <p>The specified resource in <code>Name</code> is less than the specified
   *             <code>Value</code>. Not supported for text-based properties.</p>
   *             </dd>
   *             <dt>LessThanOrEqualTo</dt>
   *             <dd>
   *                <p>The specified resource in <code>Name</code> is less than or equal to the
   *             specified <code>Value</code>. Not supported for text-based
   *             properties.</p>
   *             </dd>
   *             <dt>Contains</dt>
   *             <dd>
   *                <p>Only supported for text-based properties. The word-list of the property
   *             contains the specified <code>Value</code>. A <code>SearchExpression</code>
   *             can include only one <code>Contains</code> operator.</p>
   *             </dd>
   *          </dl>
   *          <p>If you have specified a filter <code>Value</code>, the default is
   *       <code>Equals</code>.</p>
   */
  Operator?: Operator | string;

  /**
   * <p>A value used with <code>Resource</code> and <code>Operator</code> to determine if
   *         objects satisfy the filter's condition. For numerical properties, <code>Value</code>
   *         must be an integer or floating-point decimal. For timestamp properties,
   *             <code>Value</code> must be an ISO 8601 date-time string of the following format:
   *             <code>YYYY-mm-dd'T'HH:MM:SS</code>.</p>
   */
  Value?: string;
}

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj
  });
  export const isa = (o: any): o is Filter => __isa(o, "Filter");
}

/**
 * <p>The candidate result from a job.</p>
 */
export interface FinalAutoMLJobObjectiveMetric {
  __type?: "FinalAutoMLJobObjectiveMetric";
  /**
   * <p>The name of the metric.</p>
   */
  MetricName: AutoMLMetricEnum | string | undefined;

  /**
   * <p>The metric type used.</p>
   */
  Type?: AutoMLJobObjectiveType | string;

  /**
   * <p>The value of the metric.</p>
   */
  Value: number | undefined;
}

export namespace FinalAutoMLJobObjectiveMetric {
  export const filterSensitiveLog = (
    obj: FinalAutoMLJobObjectiveMetric
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is FinalAutoMLJobObjectiveMetric =>
    __isa(o, "FinalAutoMLJobObjectiveMetric");
}

/**
 * <p>Shows the final value for the
 *             objective
 *             metric for a training job that was launched by a hyperparameter
 *             tuning job. You define the objective metric in the
 *                 <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>.</p>
 */
export interface FinalHyperParameterTuningJobObjectiveMetric {
  __type?: "FinalHyperParameterTuningJobObjectiveMetric";
  /**
   * <p>The name of the
   *             objective
   *             metric.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>Whether to
   *             minimize
   *             or maximize the objective metric. Valid values are Minimize and
   *             Maximize.</p>
   */
  Type?: HyperParameterTuningJobObjectiveType | string;

  /**
   * <p>The value of the objective metric.</p>
   */
  Value: number | undefined;
}

export namespace FinalHyperParameterTuningJobObjectiveMetric {
  export const filterSensitiveLog = (
    obj: FinalHyperParameterTuningJobObjectiveMetric
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is FinalHyperParameterTuningJobObjectiveMetric =>
    __isa(o, "FinalHyperParameterTuningJobObjectiveMetric");
}

/**
 * <p>Contains information about where human output will be stored.</p>
 */
export interface FlowDefinitionOutputConfig {
  __type?: "FlowDefinitionOutputConfig";
  /**
   * <p>The Amazon Key Management Service (KMS) key ID for server-side encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon S3 path where the object containing human output will be made available.</p>
   */
  S3OutputPath: string | undefined;
}

export namespace FlowDefinitionOutputConfig {
  export const filterSensitiveLog = (obj: FlowDefinitionOutputConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is FlowDefinitionOutputConfig =>
    __isa(o, "FlowDefinitionOutputConfig");
}

export enum FlowDefinitionStatus {
  ACTIVE = "Active",
  DELETED = "Deleted",
  DELETING = "Deleting",
  FAILED = "Failed",
  INITIALIZING = "Initializing"
}

/**
 * <p>Contains summary information about the flow definition.</p>
 */
export interface FlowDefinitionSummary {
  __type?: "FlowDefinitionSummary";
  /**
   * <p>The timestamp when SageMaker created the flow definition.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The reason why the flow definition creation failed. A failure reason is returned only when the flow definition status is <code>Failed</code>.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>The name of the flow definition.</p>
   */
  FlowDefinitionName: string | undefined;

  /**
   * <p>The status of the flow definition. Valid values:</p>
   */
  FlowDefinitionStatus: FlowDefinitionStatus | string | undefined;
}

export namespace FlowDefinitionSummary {
  export const filterSensitiveLog = (obj: FlowDefinitionSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is FlowDefinitionSummary =>
    __isa(o, "FlowDefinitionSummary");
}

export enum Framework {
  KERAS = "KERAS",
  MXNET = "MXNET",
  ONNX = "ONNX",
  PYTORCH = "PYTORCH",
  TENSORFLOW = "TENSORFLOW",
  XGBOOST = "XGBOOST"
}

export interface GetSearchSuggestionsRequest {
  __type?: "GetSearchSuggestionsRequest";
  /**
   * <p>The name of the Amazon SageMaker resource to Search for.</p>
   */
  Resource: ResourceType | string | undefined;

  /**
   * <p>Limits the property names that are included in the response.</p>
   */
  SuggestionQuery?: SuggestionQuery;
}

export namespace GetSearchSuggestionsRequest {
  export const filterSensitiveLog = (
    obj: GetSearchSuggestionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSearchSuggestionsRequest =>
    __isa(o, "GetSearchSuggestionsRequest");
}

export interface GetSearchSuggestionsResponse {
  __type?: "GetSearchSuggestionsResponse";
  /**
   * <p>A list of property names for a <code>Resource</code> that match a
   *       <code>SuggestionQuery</code>.</p>
   */
  PropertyNameSuggestions?: PropertyNameSuggestion[];
}

export namespace GetSearchSuggestionsResponse {
  export const filterSensitiveLog = (
    obj: GetSearchSuggestionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSearchSuggestionsResponse =>
    __isa(o, "GetSearchSuggestionsResponse");
}

/**
 * <p>Specifies configuration details for a Git repository in your AWS account.</p>
 */
export interface GitConfig {
  __type?: "GitConfig";
  /**
   * <p>The default branch for the Git repository.</p>
   */
  Branch?: string;

  /**
   * <p>The URL where the Git repository is located.</p>
   */
  RepositoryUrl: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the
   *             credentials used to access the git repository. The secret must have a staging label of
   *                 <code>AWSCURRENT</code> and must be in the following format:</p>
   *         <p>
   *             <code>{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>}</code>
   *         </p>
   */
  SecretArn?: string;
}

export namespace GitConfig {
  export const filterSensitiveLog = (obj: GitConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is GitConfig => __isa(o, "GitConfig");
}

/**
 * <p>Specifies configuration details for a Git repository when the repository is
 *             updated.</p>
 */
export interface GitConfigForUpdate {
  __type?: "GitConfigForUpdate";
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the
   *             credentials used to access the git repository. The secret must have a staging label of
   *                 <code>AWSCURRENT</code> and must be in the following format:</p>
   *         <p>
   *             <code>{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>}</code>
   *         </p>
   */
  SecretArn?: string;
}

export namespace GitConfigForUpdate {
  export const filterSensitiveLog = (obj: GitConfigForUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is GitConfigForUpdate =>
    __isa(o, "GitConfigForUpdate");
}

/**
 * <p>Defines under what conditions SageMaker creates a human loop. Used within .</p>
 */
export interface HumanLoopActivationConditionsConfig {
  __type?: "HumanLoopActivationConditionsConfig";
  /**
   * <p>JSON expressing use-case specific conditions declaratively. If any condition is matched, atomic tasks are created against the configured work team. The set of conditions is different for Rekognition and Textract.</p>
   */
  HumanLoopActivationConditions: __LazyJsonString | string | undefined;
}

export namespace HumanLoopActivationConditionsConfig {
  export const filterSensitiveLog = (
    obj: HumanLoopActivationConditionsConfig
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HumanLoopActivationConditionsConfig =>
    __isa(o, "HumanLoopActivationConditionsConfig");
}

/**
 * <p>Provides information about how and under what conditions SageMaker creates a human loop. If <code>HumanLoopActivationConfig</code> is not given, then all requests go to humans.</p>
 */
export interface HumanLoopActivationConfig {
  __type?: "HumanLoopActivationConfig";
  /**
   * <p>Container structure for defining under what conditions SageMaker creates a human loop.</p>
   */
  HumanLoopActivationConditionsConfig:
    | HumanLoopActivationConditionsConfig
    | undefined;

  /**
   * <p>Container for configuring the source of human task requests.</p>
   */
  HumanLoopRequestSource: HumanLoopRequestSource | undefined;
}

export namespace HumanLoopActivationConfig {
  export const filterSensitiveLog = (obj: HumanLoopActivationConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is HumanLoopActivationConfig =>
    __isa(o, "HumanLoopActivationConfig");
}

/**
 * <p>Describes the work to be performed by human workers.</p>
 */
export interface HumanLoopConfig {
  __type?: "HumanLoopConfig";
  /**
   * <p>The Amazon Resource Name (ARN) of the human task user interface.</p>
   */
  HumanTaskUiArn: string | undefined;

  /**
   * <p>Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed. </p>
   *         <p>Use one of the following prices for bounding box tasks. Prices are in US dollars and
   *             should be based on the complexity of the task; the longer it takes in your initial
   *             testing, the more you should offer.</p>
   *         <ul>
   *             <li>
   *                 <p>0.036</p>
   *             </li>
   *             <li>
   *                 <p>0.048</p>
   *             </li>
   *             <li>
   *                 <p>0.060</p>
   *             </li>
   *             <li>
   *                 <p>0.072</p>
   *             </li>
   *             <li>
   *                 <p>0.120</p>
   *             </li>
   *             <li>
   *                 <p>0.240</p>
   *             </li>
   *             <li>
   *                 <p>0.360</p>
   *             </li>
   *             <li>
   *                 <p>0.480</p>
   *             </li>
   *             <li>
   *                 <p>0.600</p>
   *             </li>
   *             <li>
   *                 <p>0.720</p>
   *             </li>
   *             <li>
   *                 <p>0.840</p>
   *             </li>
   *             <li>
   *                 <p>0.960</p>
   *             </li>
   *             <li>
   *                 <p>1.080</p>
   *             </li>
   *             <li>
   *                 <p>1.200</p>
   *             </li>
   *          </ul>
   *         <p>Use one of the following prices for image classification, text classification, and
   *             custom tasks. Prices are in US dollars.</p>
   *         <ul>
   *             <li>
   *                 <p>0.012</p>
   *             </li>
   *             <li>
   *                 <p>0.024</p>
   *             </li>
   *             <li>
   *                 <p>0.036</p>
   *             </li>
   *             <li>
   *                 <p>0.048</p>
   *             </li>
   *             <li>
   *                 <p>0.060</p>
   *             </li>
   *             <li>
   *                 <p>0.072</p>
   *             </li>
   *             <li>
   *                 <p>0.120</p>
   *             </li>
   *             <li>
   *                 <p>0.240</p>
   *             </li>
   *             <li>
   *                 <p>0.360</p>
   *             </li>
   *             <li>
   *                 <p>0.480</p>
   *             </li>
   *             <li>
   *                 <p>0.600</p>
   *             </li>
   *             <li>
   *                 <p>0.720</p>
   *             </li>
   *             <li>
   *                 <p>0.840</p>
   *             </li>
   *             <li>
   *                 <p>0.960</p>
   *             </li>
   *             <li>
   *                 <p>1.080</p>
   *             </li>
   *             <li>
   *                 <p>1.200</p>
   *             </li>
   *          </ul>
   *         <p>Use one of the following prices for semantic segmentation tasks. Prices are in US
   *             dollars.</p>
   *         <ul>
   *             <li>
   *                 <p>0.840</p>
   *             </li>
   *             <li>
   *                 <p>0.960</p>
   *             </li>
   *             <li>
   *                 <p>1.080</p>
   *             </li>
   *             <li>
   *                 <p>1.200</p>
   *             </li>
   *          </ul>
   *         <p>Use one of the following prices for Textract AnalyzeDocument Important Form Key Amazon
   *             Augmented AI review tasks. Prices are in US dollars.</p>
   *         <ul>
   *             <li>
   *                 <p>2.400 </p>
   *             </li>
   *             <li>
   *                 <p>2.280 </p>
   *             </li>
   *             <li>
   *                 <p>2.160 </p>
   *             </li>
   *             <li>
   *                 <p>2.040 </p>
   *             </li>
   *             <li>
   *                 <p>1.920 </p>
   *             </li>
   *             <li>
   *                 <p>1.800 </p>
   *             </li>
   *             <li>
   *                 <p>1.680 </p>
   *             </li>
   *             <li>
   *                 <p>1.560 </p>
   *             </li>
   *             <li>
   *                 <p>1.440 </p>
   *             </li>
   *             <li>
   *                 <p>1.320 </p>
   *             </li>
   *             <li>
   *                 <p>1.200 </p>
   *             </li>
   *             <li>
   *                 <p>1.080 </p>
   *             </li>
   *             <li>
   *                 <p>0.960 </p>
   *             </li>
   *             <li>
   *                 <p>0.840 </p>
   *             </li>
   *             <li>
   *                 <p>0.720 </p>
   *             </li>
   *             <li>
   *                 <p>0.600 </p>
   *             </li>
   *             <li>
   *                 <p>0.480 </p>
   *             </li>
   *             <li>
   *                 <p>0.360 </p>
   *             </li>
   *             <li>
   *                 <p>0.240 </p>
   *             </li>
   *             <li>
   *                 <p>0.120 </p>
   *             </li>
   *             <li>
   *                 <p>0.072 </p>
   *             </li>
   *             <li>
   *                 <p>0.060 </p>
   *             </li>
   *             <li>
   *                 <p>0.048 </p>
   *             </li>
   *             <li>
   *                 <p>0.036 </p>
   *             </li>
   *             <li>
   *                 <p>0.024 </p>
   *             </li>
   *             <li>
   *                 <p>0.012 </p>
   *             </li>
   *          </ul>
   *         <p>Use one of the following prices for Rekognition DetectModerationLabels Amazon
   *             Augmented AI review tasks. Prices are in US dollars.</p>
   *         <ul>
   *             <li>
   *                 <p>1.200 </p>
   *             </li>
   *             <li>
   *                 <p>1.080 </p>
   *             </li>
   *             <li>
   *                 <p>0.960 </p>
   *             </li>
   *             <li>
   *                 <p>0.840 </p>
   *             </li>
   *             <li>
   *                 <p>0.720 </p>
   *             </li>
   *             <li>
   *                 <p>0.600 </p>
   *             </li>
   *             <li>
   *                 <p>0.480 </p>
   *             </li>
   *             <li>
   *                 <p>0.360 </p>
   *             </li>
   *             <li>
   *                 <p>0.240 </p>
   *             </li>
   *             <li>
   *                 <p>0.120 </p>
   *             </li>
   *             <li>
   *                 <p>0.072 </p>
   *             </li>
   *             <li>
   *                 <p>0.060 </p>
   *             </li>
   *             <li>
   *                 <p>0.048 </p>
   *             </li>
   *             <li>
   *                 <p>0.036 </p>
   *             </li>
   *             <li>
   *                 <p>0.024 </p>
   *             </li>
   *             <li>
   *                 <p>0.012 </p>
   *             </li>
   *          </ul>
   *         <p>Use one of the following prices for Amazon Augmented AI custom human review tasks.
   *             Prices are in US dollars.</p>
   *         <ul>
   *             <li>
   *                 <p>1.200 </p>
   *             </li>
   *             <li>
   *                 <p>1.080 </p>
   *             </li>
   *             <li>
   *                 <p>0.960 </p>
   *             </li>
   *             <li>
   *                 <p>0.840 </p>
   *             </li>
   *             <li>
   *                 <p>0.720 </p>
   *             </li>
   *             <li>
   *                 <p>0.600 </p>
   *             </li>
   *             <li>
   *                 <p>0.480 </p>
   *             </li>
   *             <li>
   *                 <p>0.360 </p>
   *             </li>
   *             <li>
   *                 <p>0.240 </p>
   *             </li>
   *             <li>
   *                 <p>0.120 </p>
   *             </li>
   *             <li>
   *                 <p>0.072 </p>
   *             </li>
   *             <li>
   *                 <p>0.060 </p>
   *             </li>
   *             <li>
   *                 <p>0.048 </p>
   *             </li>
   *             <li>
   *                 <p>0.036 </p>
   *             </li>
   *             <li>
   *                 <p>0.024 </p>
   *             </li>
   *             <li>
   *                 <p>0.012 </p>
   *             </li>
   *          </ul>
   */
  PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice;

  /**
   * <p>The length of time that a task remains available for labeling by human workers.</p>
   */
  TaskAvailabilityLifetimeInSeconds?: number;

  /**
   * <p>The number of human tasks.</p>
   */
  TaskCount: number | undefined;

  /**
   * <p>A description for the human worker task.</p>
   */
  TaskDescription: string | undefined;

  /**
   * <p>Keywords used to describe the task so that workers can discover the task.</p>
   */
  TaskKeywords?: string[];

  /**
   * <p>The amount of time that a worker has to complete a task.</p>
   */
  TaskTimeLimitInSeconds?: number;

  /**
   * <p>A title for the human worker task.</p>
   */
  TaskTitle: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of a team of workers.</p>
   */
  WorkteamArn: string | undefined;
}

export namespace HumanLoopConfig {
  export const filterSensitiveLog = (obj: HumanLoopConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is HumanLoopConfig =>
    __isa(o, "HumanLoopConfig");
}

/**
 * <p>Container for configuring the source of human task requests.</p>
 */
export interface HumanLoopRequestSource {
  __type?: "HumanLoopRequestSource";
  /**
   * <p>Specifies whether Amazon Rekognition or Amazon Textract are used as the integration source. The default field settings and JSON parsing rules are different based on the integration source. Valid values:</p>
   */
  AwsManagedHumanLoopRequestSource:
    | AwsManagedHumanLoopRequestSource
    | string
    | undefined;
}

export namespace HumanLoopRequestSource {
  export const filterSensitiveLog = (obj: HumanLoopRequestSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is HumanLoopRequestSource =>
    __isa(o, "HumanLoopRequestSource");
}

/**
 * <p>Information required for human workers to complete a labeling task.</p>
 */
export interface HumanTaskConfig {
  __type?: "HumanTaskConfig";
  /**
   * <p>Configures how labels are consolidated across human workers.</p>
   */
  AnnotationConsolidationConfig: AnnotationConsolidationConfig | undefined;

  /**
   * <p>Defines the maximum number of data objects that can be labeled by human workers at the
   *             same time. Also referred to as batch size. Each object may have more than one worker at one time.
   *             The default value is 1000 objects.</p>
   */
  MaxConcurrentTaskCount?: number;

  /**
   * <p>The number of human workers that will label an object. </p>
   */
  NumberOfHumanWorkersPerDataObject: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a Lambda function that is run before a data object
   *             is sent to a human worker. Use this function to provide input to a custom labeling
   *             job.</p>
   *         <p>For the built-in bounding box, image classification, semantic segmentation, and text
   *             classification task types, Amazon SageMaker Ground Truth provides the following Lambda functions:</p>
   *         <p>
   *             <b>US East (Northern Virginia) (us-east-1):</b>
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VerificationBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-1:432418664414:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>US East (Ohio) (us-east-2):</b>
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VerificationBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-east-2:266458841044:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>US West (Oregon) (us-west-2):</b>
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VerificationBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:us-west-2:081040173940:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Canada (Central) (ca-central-1):</b>
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VerificationBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ca-central-1:918755190332:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>EU (Ireland) (eu-west-1):</b>
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VerificationBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-1:568282634449:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>EU (London) (eu-west-2):</b>
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VerificationBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-west-2:487402164563:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>EU Frankfurt (eu-central-1):</b>
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VerificationBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:eu-central-1:203001061592:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Asia Pacific (Tokyo) (ap-northeast-1):</b>
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VerificationBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-1:477331159723:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Asia Pacific (Seoul) (ap-northeast-2):</b>
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VerificationBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-northeast-2:845288260483:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Asia Pacific (Mumbai) (ap-south-1):</b>
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VerificationBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-south-1:565803892007:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Asia Pacific (Singapore) (ap-southeast-1):</b>
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VerificationBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-1:377565633583:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Asia Pacific (Sydney) (ap-southeast-2):</b>
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-BoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-ImageMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-SemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-TextMultiClass</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-NamedEntityRecognition</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VerificationBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-VerificationSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentBoundingBox</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>arn:aws:lambda:ap-southeast-2:454466003867:function:PRE-AdjustmentSemanticSegmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  PreHumanTaskLambdaArn: string | undefined;

  /**
   * <p>The price that you pay for each task performed by an Amazon Mechanical Turk worker.</p>
   */
  PublicWorkforceTaskPrice?: PublicWorkforceTaskPrice;

  /**
   * <p>The length of time that a task remains available for labeling by human workers.
   *                 <b>If you choose the Amazon Mechanical Turk workforce, the maximum is 12 hours
   *                 (43200)</b>. The default value is 864000 seconds (1 day). For private and vendor workforces, the maximum is as
   *             listed.</p>
   */
  TaskAvailabilityLifetimeInSeconds?: number;

  /**
   * <p>A description of the task for your human workers.</p>
   */
  TaskDescription: string | undefined;

  /**
   * <p>Keywords used to describe the task so that workers on Amazon Mechanical Turk can
   *             discover the task.</p>
   */
  TaskKeywords?: string[];

  /**
   * <p>The amount of time that a worker has to complete a task.</p>
   */
  TaskTimeLimitInSeconds: number | undefined;

  /**
   * <p>A title for the task for your human workers.</p>
   */
  TaskTitle: string | undefined;

  /**
   * <p>Information about the user interface that workers use to complete the labeling
   *             task.</p>
   */
  UiConfig: UiConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the work team assigned to complete the tasks.</p>
   */
  WorkteamArn: string | undefined;
}

export namespace HumanTaskConfig {
  export const filterSensitiveLog = (obj: HumanTaskConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is HumanTaskConfig =>
    __isa(o, "HumanTaskConfig");
}

/**
 * <p>Container for human task user interface information.</p>
 */
export interface HumanTaskUiSummary {
  __type?: "HumanTaskUiSummary";
  /**
   * <p>A timestamp when SageMaker created the human task user interface.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the human task user interface.</p>
   */
  HumanTaskUiArn: string | undefined;

  /**
   * <p>The name of the human task user interface.</p>
   */
  HumanTaskUiName: string | undefined;
}

export namespace HumanTaskUiSummary {
  export const filterSensitiveLog = (obj: HumanTaskUiSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is HumanTaskUiSummary =>
    __isa(o, "HumanTaskUiSummary");
}

/**
 * <p>Specifies
 *             which
 *             training algorithm to use for training jobs that a hyperparameter
 *             tuning job launches and the metrics to monitor.</p>
 */
export interface HyperParameterAlgorithmSpecification {
  __type?: "HyperParameterAlgorithmSpecification";
  /**
   * <p>The name of the resource algorithm to use for the hyperparameter tuning job. If you
   *             specify a value for this parameter, do not specify a value for
   *                 <code>TrainingImage</code>.</p>
   */
  AlgorithmName?: string;

  /**
   * <p>An array of <a>MetricDefinition</a> objects that specify the
   *             metrics
   *             that the algorithm emits.</p>
   */
  MetricDefinitions?: MetricDefinition[];

  /**
   * <p> The registry path of the Docker image that contains the training algorithm. For
   *             information about Docker registry paths for built-in algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-algo-docker-registry-paths.html">Algorithms
   *                 Provided by Amazon SageMaker: Common Parameters</a>. Amazon SageMaker supports both
   *                 <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code>
   *             image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
   *                 SageMaker</a>.</p>
   */
  TrainingImage?: string;

  /**
   * <p>The input mode that the algorithm supports:
   *             File
   *             or Pipe. In File input mode, Amazon SageMaker downloads the training data from
   *             Amazon S3 to the
   *             storage
   *             volume that is attached to the training instance and mounts the directory to the Docker
   *             volume for the training container. In Pipe input mode, Amazon SageMaker streams
   *             data directly from Amazon S3 to the container. </p>
   *         <p>If you specify File mode, make sure that
   *             you
   *             provision the storage volume that is attached to the training instance with enough
   *             capacity to accommodate the training data downloaded from Amazon S3, the model artifacts, and
   *             intermediate
   *             information.</p>
   *         <p></p>
   *         <p>For more information about input modes, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p>
   */
  TrainingInputMode: TrainingInputMode | string | undefined;
}

export namespace HyperParameterAlgorithmSpecification {
  export const filterSensitiveLog = (
    obj: HyperParameterAlgorithmSpecification
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HyperParameterAlgorithmSpecification =>
    __isa(o, "HyperParameterAlgorithmSpecification");
}

export enum HyperParameterScalingType {
  AUTO = "Auto",
  LINEAR = "Linear",
  LOGARITHMIC = "Logarithmic",
  REVERSE_LOGARITHMIC = "ReverseLogarithmic"
}

/**
 * <p>Defines a hyperparameter to be used by an algorithm.</p>
 */
export interface HyperParameterSpecification {
  __type?: "HyperParameterSpecification";
  /**
   * <p>The default value for this hyperparameter. If a default value is specified, a
   *             hyperparameter cannot be required.</p>
   */
  DefaultValue?: string;

  /**
   * <p>A brief description of the hyperparameter.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether this hyperparameter is required.</p>
   */
  IsRequired?: boolean;

  /**
   * <p>Indicates whether this hyperparameter is tunable in a hyperparameter tuning
   *             job.</p>
   */
  IsTunable?: boolean;

  /**
   * <p>The name of this hyperparameter. The name must be unique.</p>
   */
  Name: string | undefined;

  /**
   * <p>The allowed range for this hyperparameter.</p>
   */
  Range?: ParameterRange;

  /**
   * <p>The type of this hyperparameter. The valid types are <code>Integer</code>,
   *                 <code>Continuous</code>, <code>Categorical</code>, and <code>FreeText</code>.</p>
   */
  Type: ParameterType | string | undefined;
}

export namespace HyperParameterSpecification {
  export const filterSensitiveLog = (
    obj: HyperParameterSpecification
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HyperParameterSpecification =>
    __isa(o, "HyperParameterSpecification");
}

/**
 * <p>Defines
 *             the training jobs launched by a hyperparameter tuning job.</p>
 */
export interface HyperParameterTrainingJobDefinition {
  __type?: "HyperParameterTrainingJobDefinition";
  /**
   * <p>The <a>HyperParameterAlgorithmSpecification</a> object that
   *             specifies
   *             the resource algorithm to use for the training jobs that the tuning
   *             job launches.</p>
   */
  AlgorithmSpecification: HyperParameterAlgorithmSpecification | undefined;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data. </p>
   */
  CheckpointConfig?: CheckpointConfig;

  /**
   * <p>The job definition name.</p>
   */
  DefinitionName?: string;

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithm in
   *             distributed training.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>A Boolean indicating whether managed spot training is enabled (<code>True</code>) or
   *             not (<code>False</code>).</p>
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * <p>Isolates the training container. No inbound or outbound network calls can be made,
   *             except for calls between peers within a training cluster for distributed training. If
   *             network isolation is used for training jobs that are configured to use a VPC, Amazon SageMaker
   *             downloads and uploads customer data and model artifacts through the specified VPC, but
   *             the training container does not have network access.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a
   *             hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs
   *             with hyperparameter values within these ranges to find the combination of values that
   *             result in the training job with the best performance as measured by the objective metric
   *             of the hyperparameter tuning job.</p>
   *         <note>
   *             <p>You can specify a maximum of 20 hyperparameters that a hyperparameter tuning job
   *                 can search over. Every possible value of a categorical parameter range counts
   *                 against this limit.</p>
   *         </note>
   */
  HyperParameterRanges?: ParameterRanges;

  /**
   * <p>An array of <a>Channel</a> objects that specify
   *             the
   *             input for the training jobs that the tuning job launches.</p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>Specifies the path to the Amazon S3 bucket where you
   *             store
   *             model artifacts from the training jobs that the tuning job
   *             launches.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The resources,
   *             including
   *             the compute instances and storage volumes, to use for the training
   *             jobs that the tuning job launches.</p>
   *         <p>Storage
   *             volumes store model artifacts and
   *             incremental
   *             states. Training algorithms might also use storage volumes for
   *             scratch
   *             space. If you want Amazon SageMaker to use the storage volume
   *             to store the training data, choose <code>File</code> as the
   *                 <code>TrainingInputMode</code> in the algorithm specification. For distributed
   *             training algorithms, specify an instance count greater than 1.</p>
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the
   *             IAM
   *             role associated with the training jobs that the tuning job
   *             launches.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Specifies the values of hyperparameters
   *             that
   *             do not change for the tuning job.</p>
   */
  StaticHyperParameters?: { [key: string]: string };

  /**
   * <p>Specifies a limit to how long a model hyperparameter training job can run. It also
   *             specifies how long you are willing to wait for a managed spot training job to complete.
   *             When the job reaches the a limit, Amazon SageMaker ends the training job. Use this API to cap model
   *             training costs.</p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>Defines the objective metric for a hyperparameter tuning job.
   *             Hyperparameter
   *             tuning uses the value of this metric to evaluate the training jobs it launches, and
   *             returns the training job that results in either the highest or lowest value for this
   *             metric, depending on the value you specify for the <code>Type</code>
   *             parameter.</p>
   */
  TuningObjective?: HyperParameterTuningJobObjective;

  /**
   * <p>The <a>VpcConfig</a> object that
   *             specifies
   *             the VPC that you want the training jobs that this hyperparameter
   *             tuning job launches to connect to. Control access to and from your
   *             training
   *             container by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
   *                 by Using an Amazon Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;
}

export namespace HyperParameterTrainingJobDefinition {
  export const filterSensitiveLog = (
    obj: HyperParameterTrainingJobDefinition
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HyperParameterTrainingJobDefinition =>
    __isa(o, "HyperParameterTrainingJobDefinition");
}

/**
 * <p>Specifies
 *             summary information about a training job.</p>
 */
export interface HyperParameterTrainingJobSummary {
  __type?: "HyperParameterTrainingJobSummary";
  /**
   * <p>The date and time that the training job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The
   *             reason that the training job failed.
   *         </p>
   */
  FailureReason?: string;

  /**
   * <p>The <a>FinalHyperParameterTuningJobObjectiveMetric</a> object that
   *             specifies the
   *             value
   *             of the
   *             objective
   *             metric of the tuning job that launched this training job.</p>
   */
  FinalHyperParameterTuningJobObjectiveMetric?: FinalHyperParameterTuningJobObjectiveMetric;

  /**
   * <p>The status of the objective metric for the training job:</p>
   *         <ul>
   *             <li>
   *                 <p>Succeeded: The
   *                     final
   *                     objective metric for the training job was evaluated by the
   *                     hyperparameter tuning job and
   *                     used
   *                     in the hyperparameter tuning process.</p>
   *             </li>
   *          </ul>
   *         <ul>
   *             <li>
   *                 <p>Pending: The training job is in progress and evaluation of its final objective
   *                     metric is pending.</p>
   *             </li>
   *          </ul>
   *         <ul>
   *             <li>
   *                 <p>Failed:
   *                     The final objective metric for the training job was not evaluated, and was not
   *                     used in the hyperparameter tuning process. This typically occurs when the
   *                     training job failed or did not emit an objective
   *                     metric.</p>
   *             </li>
   *          </ul>
   */
  ObjectiveStatus?: ObjectiveStatus | string;

  /**
   * <p>Specifies the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when Amazon SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>The
   *             Amazon
   *             Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>The training job definition name.</p>
   */
  TrainingJobDefinitionName?: string;

  /**
   * <p>The name of the training job.</p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The
   *             status
   *             of the training job.</p>
   */
  TrainingJobStatus: TrainingJobStatus | string | undefined;

  /**
   * <p>The date and time that the training job started.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>A
   *             list of the hyperparameters for which you specified ranges to
   *             search.</p>
   */
  TunedHyperParameters: { [key: string]: string } | undefined;

  /**
   * <p>The HyperParameter tuning job that launched the training job.</p>
   */
  TuningJobName?: string;
}

export namespace HyperParameterTrainingJobSummary {
  export const filterSensitiveLog = (
    obj: HyperParameterTrainingJobSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HyperParameterTrainingJobSummary =>
    __isa(o, "HyperParameterTrainingJobSummary");
}

/**
 * <p>Configures a hyperparameter tuning job.</p>
 */
export interface HyperParameterTuningJobConfig {
  __type?: "HyperParameterTuningJobConfig";
  /**
   * <p>The <a>HyperParameterTuningJobObjective</a> object that specifies the
   *             objective
   *             metric for this tuning job.</p>
   */
  HyperParameterTuningJobObjective?: HyperParameterTuningJobObjective;

  /**
   * <p>The <a>ParameterRanges</a> object that specifies the ranges of
   *             hyperparameters
   *             that this tuning job searches.</p>
   */
  ParameterRanges?: ParameterRanges;

  /**
   * <p>The <a>ResourceLimits</a> object that specifies the
   *             maximum
   *             number of training jobs and parallel training jobs for this tuning
   *             job.</p>
   */
  ResourceLimits: ResourceLimits | undefined;

  /**
   * <p>Specifies how hyperparameter tuning chooses the combinations of hyperparameter values
   *             to use for the training job it launches. To use the Bayesian search strategy, set this
   *             to <code>Bayesian</code>. To randomly search, set it to <code>Random</code>. For
   *             information about search strategies, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-how-it-works.html">How
   *                 Hyperparameter Tuning Works</a>.</p>
   */
  Strategy: HyperParameterTuningJobStrategyType | string | undefined;

  /**
   * <p>Specifies whether to use early stopping for training jobs launched by the
   *             hyperparameter tuning job. This can be one of the following values (the default value is
   *                 <code>OFF</code>):</p>
   *         <dl>
   *             <dt>OFF</dt>
   *             <dd>
   *                     <p>Training jobs launched by the hyperparameter tuning job do not use early
   *                         stopping.</p>
   *                 </dd>
   *             <dt>AUTO</dt>
   *             <dd>
   *                     <p>Amazon SageMaker stops training jobs launched by the hyperparameter tuning job when
   *                         they are unlikely to perform better than previously completed training jobs.
   *                         For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-early-stopping.html">Stop Training Jobs Early</a>.</p>
   *                 </dd>
   *          </dl>
   */
  TrainingJobEarlyStoppingType?: TrainingJobEarlyStoppingType | string;

  /**
   * <p>The tuning job's completion criteria.</p>
   */
  TuningJobCompletionCriteria?: TuningJobCompletionCriteria;
}

export namespace HyperParameterTuningJobConfig {
  export const filterSensitiveLog = (
    obj: HyperParameterTuningJobConfig
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HyperParameterTuningJobConfig =>
    __isa(o, "HyperParameterTuningJobConfig");
}

/**
 * <p>Defines the objective metric for a hyperparameter tuning job.
 *             Hyperparameter
 *             tuning uses the value of this metric to evaluate the training jobs it launches, and
 *             returns the training job that results in either the highest or lowest value for this
 *             metric, depending on the value you specify for the <code>Type</code>
 *             parameter.</p>
 */
export interface HyperParameterTuningJobObjective {
  __type?: "HyperParameterTuningJobObjective";
  /**
   * <p>The
   *             name of the metric to use for the objective metric.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>Whether to
   *             minimize
   *             or maximize the objective metric.</p>
   */
  Type: HyperParameterTuningJobObjectiveType | string | undefined;
}

export namespace HyperParameterTuningJobObjective {
  export const filterSensitiveLog = (
    obj: HyperParameterTuningJobObjective
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HyperParameterTuningJobObjective =>
    __isa(o, "HyperParameterTuningJobObjective");
}

export enum HyperParameterTuningJobObjectiveType {
  MAXIMIZE = "Maximize",
  MINIMIZE = "Minimize"
}

export enum HyperParameterTuningJobSortByOptions {
  CreationTime = "CreationTime",
  Name = "Name",
  Status = "Status"
}

export enum HyperParameterTuningJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping"
}

export enum HyperParameterTuningJobStrategyType {
  BAYESIAN = "Bayesian",
  RANDOM = "Random"
}

/**
 * <p>Provides summary information about a hyperparameter tuning job.</p>
 */
export interface HyperParameterTuningJobSummary {
  __type?: "HyperParameterTuningJobSummary";
  /**
   * <p>The date and time that the tuning job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The date and time that the tuning job ended.</p>
   */
  HyperParameterTuningEndTime?: Date;

  /**
   * <p>The
   *             Amazon
   *             Resource Name (ARN) of the tuning job.</p>
   */
  HyperParameterTuningJobArn: string | undefined;

  /**
   * <p>The name of the tuning job.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>The status of the
   *             tuning
   *             job.</p>
   */
  HyperParameterTuningJobStatus:
    | HyperParameterTuningJobStatus
    | string
    | undefined;

  /**
   * <p>The date and time that the tuning job was
   *             modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The <a>ObjectiveStatusCounters</a> object that specifies the numbers of
   *             training jobs, categorized by objective metric status, that this tuning job
   *             launched.</p>
   */
  ObjectiveStatusCounters: ObjectiveStatusCounters | undefined;

  /**
   * <p>The <a>ResourceLimits</a> object that specifies the maximum number of
   *             training jobs and parallel training jobs allowed for this tuning job.</p>
   */
  ResourceLimits?: ResourceLimits;

  /**
   * <p>Specifies the search strategy hyperparameter tuning uses to choose which
   *             hyperparameters to
   *             use
   *             for each iteration. Currently, the only valid value is
   *             Bayesian.</p>
   */
  Strategy: HyperParameterTuningJobStrategyType | string | undefined;

  /**
   * <p>The <a>TrainingJobStatusCounters</a> object that specifies the numbers of
   *             training jobs, categorized by status, that this tuning job launched.</p>
   */
  TrainingJobStatusCounters: TrainingJobStatusCounters | undefined;
}

export namespace HyperParameterTuningJobSummary {
  export const filterSensitiveLog = (
    obj: HyperParameterTuningJobSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HyperParameterTuningJobSummary =>
    __isa(o, "HyperParameterTuningJobSummary");
}

/**
 * <p>Specifies the configuration for a hyperparameter tuning job that uses one or more
 *             previous hyperparameter tuning jobs as a starting point. The results of previous tuning
 *             jobs are used to inform which combinations of hyperparameters to search over in the new
 *             tuning job.</p>
 *         <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using
 *             the objective metric, and the training job that performs the best is compared to the
 *             best training jobs from the parent tuning jobs. From these, the training job that
 *             performs the best as measured by the objective metric is returned as the overall best
 *             training job.</p>
 *         <note>
 *             <p>All training jobs launched by parent hyperparameter tuning jobs and the new
 *                 hyperparameter tuning jobs count against the limit of training jobs for the tuning
 *                 job.</p>
 *         </note>
 */
export interface HyperParameterTuningJobWarmStartConfig {
  __type?: "HyperParameterTuningJobWarmStartConfig";
  /**
   * <p>An array of hyperparameter tuning jobs that are used as the starting point for the new
   *             hyperparameter tuning job. For more information about warm starting a hyperparameter
   *             tuning job, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-warm-start.html">Using a Previous
   *                 Hyperparameter Tuning Job as a Starting Point</a>.</p>
   *         <p>Hyperparameter tuning jobs created before October 1, 2018 cannot be used as parent
   *             jobs for warm start tuning jobs.</p>
   */
  ParentHyperParameterTuningJobs: ParentHyperParameterTuningJob[] | undefined;

  /**
   * <p>Specifies one of the following:</p>
   *         <dl>
   *             <dt>IDENTICAL_DATA_AND_ALGORITHM</dt>
   *             <dd>
   *                     <p>The new hyperparameter tuning job uses the same input data and training
   *                         image as the parent tuning jobs. You can change the hyperparameter ranges to
   *                         search and the maximum number of training jobs that the hyperparameter
   *                         tuning job launches. You cannot use a new version of the training algorithm,
   *                         unless the changes in the new version do not affect the algorithm itself.
   *                         For example, changes that improve logging or adding support for a different
   *                         data format are allowed. You can also change hyperparameters from tunable to
   *                         static, and from static to tunable, but the total number of static plus
   *                         tunable hyperparameters must remain the same as it is in all parent jobs.
   *                         The objective metric for the new tuning job must be the same as for all
   *                         parent jobs.</p>
   *                 </dd>
   *             <dt>TRANSFER_LEARNING</dt>
   *             <dd>
   *                     <p>The new hyperparameter tuning job can include input data, hyperparameter
   *                         ranges, maximum number of concurrent training jobs, and maximum number of
   *                         training jobs that are different than those of its parent hyperparameter
   *                         tuning jobs. The training image can also be a different version from the
   *                         version used in the parent hyperparameter tuning job. You can also change
   *                         hyperparameters from tunable to static, and from static to tunable, but the
   *                         total number of static plus tunable hyperparameters must remain the same as
   *                         it is in all parent jobs. The objective metric for the new tuning job must
   *                         be the same as for all parent jobs.</p>
   *                 </dd>
   *          </dl>
   */
  WarmStartType: HyperParameterTuningJobWarmStartType | string | undefined;
}

export namespace HyperParameterTuningJobWarmStartConfig {
  export const filterSensitiveLog = (
    obj: HyperParameterTuningJobWarmStartConfig
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HyperParameterTuningJobWarmStartConfig =>
    __isa(o, "HyperParameterTuningJobWarmStartConfig");
}

export enum HyperParameterTuningJobWarmStartType {
  IDENTICAL_DATA_AND_ALGORITHM = "IdenticalDataAndAlgorithm",
  TRANSFER_LEARNING = "TransferLearning"
}

/**
 * <p>Defines how to perform inference generation after a training job is run.</p>
 */
export interface InferenceSpecification {
  __type?: "InferenceSpecification";
  /**
   * <p>The Amazon ECR registry path of the Docker image that contains the inference code.</p>
   */
  Containers: ModelPackageContainerDefinition[] | undefined;

  /**
   * <p>The supported MIME types for the input data.</p>
   */
  SupportedContentTypes: string[] | undefined;

  /**
   * <p>A list of the instance types that are used to generate inferences in real-time.</p>
   */
  SupportedRealtimeInferenceInstanceTypes:
    | (ProductionVariantInstanceType | string)[]
    | undefined;

  /**
   * <p>The supported MIME types for the output data.</p>
   */
  SupportedResponseMIMETypes: string[] | undefined;

  /**
   * <p>A list of the instance types on which a transformation job can be run or on which an
   *             endpoint can be deployed.</p>
   */
  SupportedTransformInstanceTypes:
    | (TransformInstanceType | string)[]
    | undefined;
}

export namespace InferenceSpecification {
  export const filterSensitiveLog = (obj: InferenceSpecification): any => ({
    ...obj
  });
  export const isa = (o: any): o is InferenceSpecification =>
    __isa(o, "InferenceSpecification");
}

/**
 * <p>Contains information about the location of input model artifacts, the name and
 *             shape
 *             of the expected data inputs, and the framework in which the model was trained.</p>
 */
export interface InputConfig {
  __type?: "InputConfig";
  /**
   * <p>Specifies the name and shape of the expected data inputs for your trained model with a
   *             JSON dictionary form. The data inputs are <a>InputConfig$Framework</a>
   *             specific. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>TensorFlow</code>: You must specify the name and shape (NHWC format) of
   *                     the expected data inputs using a dictionary format for your trained model. The
   *                     dictionary formats required for the console and CLI are different.</p>
   *                 <ul>
   *                   <li>
   *                         <p>Examples for one input:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console,
   *                                     <code>{"input":[1,1024,1024,3]}</code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI,
   *                                     <code>{\"input\":[1,1024,1024,3]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                   <li>
   *                         <p>Examples for two inputs:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console, <code>{"data1": [1,28,28,1],
   *                                         "data2":[1,28,28,1]}</code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI, <code>{\"data1\": [1,28,28,1],
   *                                         \"data2\":[1,28,28,1]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>KERAS</code>: You must specify the name and shape (NCHW format) of
   *                     expected data inputs using a dictionary format for your trained model. Note that
   *                     while Keras model artifacts should be uploaded in NHWC (channel-last) format,
   *                         <code>DataInputConfig</code> should be specified in NCHW (channel-first)
   *                     format. The dictionary formats required for the console and CLI are
   *                     different.</p>
   *                 <ul>
   *                   <li>
   *                         <p>Examples for one input:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console,
   *                                     <code>{"input_1":[1,3,224,224]}</code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI,
   *                                     <code>{\"input_1\":[1,3,224,224]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                   <li>
   *                         <p>Examples for two inputs:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console, <code>{"input_1": [1,3,224,224],
   *                                         "input_2":[1,3,224,224]} </code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI, <code>{\"input_1\": [1,3,224,224],
   *                                         \"input_2\":[1,3,224,224]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>MXNET/ONNX</code>: You must specify the name and shape (NCHW format) of
   *                     the expected data inputs in order using a dictionary format for your trained
   *                     model. The dictionary formats required for the console and CLI are
   *                     different.</p>
   *                 <ul>
   *                   <li>
   *                         <p>Examples for one input:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console,
   *                                     <code>{"data":[1,3,1024,1024]}</code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI,
   *                                     <code>{\"data\":[1,3,1024,1024]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                   <li>
   *                         <p>Examples for two inputs:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console, <code>{"var1": [1,1,28,28],
   *                                         "var2":[1,1,28,28]} </code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI, <code>{\"var1\": [1,1,28,28],
   *                                         \"var2\":[1,1,28,28]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PyTorch</code>: You can either specify the name and shape (NCHW format)
   *                     of expected data inputs in order using a dictionary format for your trained
   *                     model or you can specify the shape only using a list format. The dictionary
   *                     formats required for the console and CLI are different. The list formats for the
   *                     console and CLI are the same.</p>
   *                 <ul>
   *                   <li>
   *                         <p>Examples for one input in dictionary format:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console,
   *                                     <code>{"input0":[1,3,224,224]}</code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI,
   *                                     <code>{\"input0\":[1,3,224,224]}</code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                   <li>
   *                         <p>Example for one input in list format:
   *                             <code>[[1,3,224,224]]</code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>Examples for two inputs in dictionary format:</p>
   *                         <ul>
   *                         <li>
   *                                 <p>If using the console, <code>{"input0":[1,3,224,224],
   *                                         "input1":[1,3,224,224]}</code>
   *                            </p>
   *                             </li>
   *                         <li>
   *                                 <p>If using the CLI, <code>{\"input0\":[1,3,224,224],
   *                                         \"input1\":[1,3,224,224]} </code>
   *                            </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                   <li>
   *                         <p>Example for two inputs in list format: <code>[[1,3,224,224],
   *                                 [1,3,224,224]]</code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>XGBOOST</code>: input data name and shape are not needed.</p>
   *             </li>
   *          </ul>
   */
  DataInputConfig: string | undefined;

  /**
   * <p>Identifies the framework in which the model was trained. For example:
   *             TENSORFLOW.</p>
   */
  Framework: Framework | string | undefined;

  /**
   * <p>The S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single gzip compressed tar archive (.tar.gz suffix).</p>
   */
  S3Uri: string | undefined;
}

export namespace InputConfig {
  export const filterSensitiveLog = (obj: InputConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputConfig => __isa(o, "InputConfig");
}

export enum _InstanceType {
  ML_C4_2XLARGE = "ml.c4.2xlarge",
  ML_C4_4XLARGE = "ml.c4.4xlarge",
  ML_C4_8XLARGE = "ml.c4.8xlarge",
  ML_C4_XLARGE = "ml.c4.xlarge",
  ML_C5D_18XLARGE = "ml.c5d.18xlarge",
  ML_C5D_2XLARGE = "ml.c5d.2xlarge",
  ML_C5D_4XLARGE = "ml.c5d.4xlarge",
  ML_C5D_9XLARGE = "ml.c5d.9xlarge",
  ML_C5D_XLARGE = "ml.c5d.xlarge",
  ML_C5_18XLARGE = "ml.c5.18xlarge",
  ML_C5_2XLARGE = "ml.c5.2xlarge",
  ML_C5_4XLARGE = "ml.c5.4xlarge",
  ML_C5_9XLARGE = "ml.c5.9xlarge",
  ML_C5_XLARGE = "ml.c5.xlarge",
  ML_M4_10XLARGE = "ml.m4.10xlarge",
  ML_M4_16XLARGE = "ml.m4.16xlarge",
  ML_M4_2XLARGE = "ml.m4.2xlarge",
  ML_M4_4XLARGE = "ml.m4.4xlarge",
  ML_M4_XLARGE = "ml.m4.xlarge",
  ML_M5_12XLARGE = "ml.m5.12xlarge",
  ML_M5_24XLARGE = "ml.m5.24xlarge",
  ML_M5_2XLARGE = "ml.m5.2xlarge",
  ML_M5_4XLARGE = "ml.m5.4xlarge",
  ML_M5_XLARGE = "ml.m5.xlarge",
  ML_P2_16XLARGE = "ml.p2.16xlarge",
  ML_P2_8XLARGE = "ml.p2.8xlarge",
  ML_P2_XLARGE = "ml.p2.xlarge",
  ML_P3_16XLARGE = "ml.p3.16xlarge",
  ML_P3_2XLARGE = "ml.p3.2xlarge",
  ML_P3_8XLARGE = "ml.p3.8xlarge",
  ML_T2_2XLARGE = "ml.t2.2xlarge",
  ML_T2_LARGE = "ml.t2.large",
  ML_T2_MEDIUM = "ml.t2.medium",
  ML_T2_XLARGE = "ml.t2.xlarge",
  ML_T3_2XLARGE = "ml.t3.2xlarge",
  ML_T3_LARGE = "ml.t3.large",
  ML_T3_MEDIUM = "ml.t3.medium",
  ML_T3_XLARGE = "ml.t3.xlarge"
}

/**
 * <p>For a hyperparameter of the integer type, specifies the range
 *             that
 *             a hyperparameter tuning job searches.</p>
 */
export interface IntegerParameterRange {
  __type?: "IntegerParameterRange";
  /**
   * <p>The maximum
   *             value
   *             of the hyperparameter to search.</p>
   */
  MaxValue: string | undefined;

  /**
   * <p>The minimum
   *             value
   *             of the hyperparameter to search.</p>
   */
  MinValue: string | undefined;

  /**
   * <p>The name of the hyperparameter to search.</p>
   */
  Name: string | undefined;

  /**
   * <p>The scale that hyperparameter tuning uses to search the hyperparameter range. For
   *             information about choosing a hyperparameter scale, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-ranges.html#scaling-type">Hyperparameter Scaling</a>. One of the following values:</p>
   *         <dl>
   *             <dt>Auto</dt>
   *             <dd>
   *                     <p>Amazon SageMaker hyperparameter tuning chooses the best scale for the
   *                         hyperparameter.</p>
   *                 </dd>
   *             <dt>Linear</dt>
   *             <dd>
   *                     <p>Hyperparameter tuning searches the values in the hyperparameter range by
   *                         using a linear scale.</p>
   *                 </dd>
   *             <dt>Logarithmic</dt>
   *             <dd>
   *                     <p>Hyperparameter tuning searches the values in the hyperparameter range by
   *                         using a logarithmic scale.</p>
   *                     <p>Logarithmic scaling works only for ranges that have only values greater
   *                         than 0.</p>
   *                 </dd>
   *          </dl>
   */
  ScalingType?: HyperParameterScalingType | string;
}

export namespace IntegerParameterRange {
  export const filterSensitiveLog = (obj: IntegerParameterRange): any => ({
    ...obj
  });
  export const isa = (o: any): o is IntegerParameterRange =>
    __isa(o, "IntegerParameterRange");
}

/**
 * <p>Defines the possible values for an integer hyperparameter.</p>
 */
export interface IntegerParameterRangeSpecification {
  __type?: "IntegerParameterRangeSpecification";
  /**
   * <p>The maximum integer value allowed.</p>
   */
  MaxValue: string | undefined;

  /**
   * <p>The minimum integer value allowed.</p>
   */
  MinValue: string | undefined;
}

export namespace IntegerParameterRangeSpecification {
  export const filterSensitiveLog = (
    obj: IntegerParameterRangeSpecification
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is IntegerParameterRangeSpecification =>
    __isa(o, "IntegerParameterRangeSpecification");
}

export enum JoinSource {
  INPUT = "Input",
  NONE = "None"
}

/**
 * <p>Jupyter server's app settings.</p>
 */
export interface JupyterServerAppSettings {
  __type?: "JupyterServerAppSettings";
  /**
   * <p>The instance type and quantity.</p>
   */
  DefaultResourceSpec?: ResourceSpec;
}

export namespace JupyterServerAppSettings {
  export const filterSensitiveLog = (obj: JupyterServerAppSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is JupyterServerAppSettings =>
    __isa(o, "JupyterServerAppSettings");
}

/**
 * <p>The kernel gateway app settings.</p>
 */
export interface KernelGatewayAppSettings {
  __type?: "KernelGatewayAppSettings";
  /**
   * <p>The instance type and quantity.</p>
   */
  DefaultResourceSpec?: ResourceSpec;
}

export namespace KernelGatewayAppSettings {
  export const filterSensitiveLog = (obj: KernelGatewayAppSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is KernelGatewayAppSettings =>
    __isa(o, "KernelGatewayAppSettings");
}

/**
 * <p>Provides a breakdown of the number of objects labeled.</p>
 */
export interface LabelCounters {
  __type?: "LabelCounters";
  /**
   * <p>The total number of objects that could not be labeled due to an error.</p>
   */
  FailedNonRetryableError?: number;

  /**
   * <p>The total number of objects labeled by a human worker.</p>
   */
  HumanLabeled?: number;

  /**
   * <p>The total number of objects labeled by automated data labeling.</p>
   */
  MachineLabeled?: number;

  /**
   * <p>The total number of objects labeled.</p>
   */
  TotalLabeled?: number;

  /**
   * <p>The total number of objects not yet labeled.</p>
   */
  Unlabeled?: number;
}

export namespace LabelCounters {
  export const filterSensitiveLog = (obj: LabelCounters): any => ({
    ...obj
  });
  export const isa = (o: any): o is LabelCounters => __isa(o, "LabelCounters");
}

/**
 * <p>Provides counts for human-labeled tasks in the labeling job.</p>
 */
export interface LabelCountersForWorkteam {
  __type?: "LabelCountersForWorkteam";
  /**
   * <p>The total number of data objects labeled by a human worker.</p>
   */
  HumanLabeled?: number;

  /**
   * <p>The total number of data objects that need to be labeled by a human worker.</p>
   */
  PendingHuman?: number;

  /**
   * <p>The total number of tasks in the labeling job.</p>
   */
  Total?: number;
}

export namespace LabelCountersForWorkteam {
  export const filterSensitiveLog = (obj: LabelCountersForWorkteam): any => ({
    ...obj
  });
  export const isa = (o: any): o is LabelCountersForWorkteam =>
    __isa(o, "LabelCountersForWorkteam");
}

/**
 * <p>Provides configuration information for auto-labeling of your data objects. A
 *                 <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use
 *             auto-labeling.</p>
 */
export interface LabelingJobAlgorithmsConfig {
  __type?: "LabelingJobAlgorithmsConfig";
  /**
   * <p>At the end of an auto-label job Amazon SageMaker Ground Truth sends the Amazon Resource Nam (ARN) of the final
   *             model used for auto-labeling. You can use this model as the starting point for
   *             subsequent similar jobs by providing the ARN of the model here. </p>
   */
  InitialActiveLearningModelArn?: string;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the algorithm used for auto-labeling. You
   *             must select one of the following ARNs:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <i>Image classification</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/image-classification</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>Text classification</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/text-classification</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>Object detection</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/object-detection</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <i>Semantic Segmentation</i>
   *                 </p>
   *                 <p>
   *                     <code>arn:aws:sagemaker:<i>region</i>:027400017018:labeling-job-algorithm-specification/semantic-segmentation</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  LabelingJobAlgorithmSpecificationArn: string | undefined;

  /**
   * <p>Provides configuration information for a labeling job.</p>
   */
  LabelingJobResourceConfig?: LabelingJobResourceConfig;
}

export namespace LabelingJobAlgorithmsConfig {
  export const filterSensitiveLog = (
    obj: LabelingJobAlgorithmsConfig
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LabelingJobAlgorithmsConfig =>
    __isa(o, "LabelingJobAlgorithmsConfig");
}

/**
 * <p>Attributes of the data specified by the customer. Use these to describe the data to be
 *             labeled.</p>
 */
export interface LabelingJobDataAttributes {
  __type?: "LabelingJobDataAttributes";
  /**
   * <p>Declares that your content is free of personally identifiable information or adult
   *             content. Amazon SageMaker may restrict the Amazon Mechanical Turk workers that can view your task
   *             based on this information.</p>
   */
  ContentClassifiers?: (ContentClassifier | string)[];
}

export namespace LabelingJobDataAttributes {
  export const filterSensitiveLog = (obj: LabelingJobDataAttributes): any => ({
    ...obj
  });
  export const isa = (o: any): o is LabelingJobDataAttributes =>
    __isa(o, "LabelingJobDataAttributes");
}

/**
 * <p>Provides information about the location of input data.</p>
 */
export interface LabelingJobDataSource {
  __type?: "LabelingJobDataSource";
  /**
   * <p>The Amazon S3 location of the input data objects.</p>
   */
  S3DataSource: LabelingJobS3DataSource | undefined;
}

export namespace LabelingJobDataSource {
  export const filterSensitiveLog = (obj: LabelingJobDataSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is LabelingJobDataSource =>
    __isa(o, "LabelingJobDataSource");
}

/**
 * <p>Provides summary information for a work team.</p>
 */
export interface LabelingJobForWorkteamSummary {
  __type?: "LabelingJobForWorkteamSummary";
  /**
   * <p>The date and time that the labeling job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>A unique identifier for a labeling job. You can use this to refer to a specific
   *             labeling job.</p>
   */
  JobReferenceCode: string | undefined;

  /**
   * <p>Provides information about the progress of a labeling job.</p>
   */
  LabelCounters?: LabelCountersForWorkteam;

  /**
   * <p>The name of the labeling job that the work team is assigned to.</p>
   */
  LabelingJobName?: string;

  /**
   * <p>The configured number of workers per data object.</p>
   */
  NumberOfHumanWorkersPerDataObject?: number;

  /**
   * <p></p>
   */
  WorkRequesterAccountId: string | undefined;
}

export namespace LabelingJobForWorkteamSummary {
  export const filterSensitiveLog = (
    obj: LabelingJobForWorkteamSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LabelingJobForWorkteamSummary =>
    __isa(o, "LabelingJobForWorkteamSummary");
}

/**
 * <p>Input configuration information for a labeling job.</p>
 */
export interface LabelingJobInputConfig {
  __type?: "LabelingJobInputConfig";
  /**
   * <p>Attributes of the data specified by the customer.</p>
   */
  DataAttributes?: LabelingJobDataAttributes;

  /**
   * <p>The location of the input data.</p>
   */
  DataSource: LabelingJobDataSource | undefined;
}

export namespace LabelingJobInputConfig {
  export const filterSensitiveLog = (obj: LabelingJobInputConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is LabelingJobInputConfig =>
    __isa(o, "LabelingJobInputConfig");
}

/**
 * <p>Specifies the location of the output produced by the labeling job. </p>
 */
export interface LabelingJobOutput {
  __type?: "LabelingJobOutput";
  /**
   * <p>The Amazon Resource Name (ARN) for the most recent Amazon SageMaker model trained as part of
   *             automated data labeling. </p>
   */
  FinalActiveLearningModelArn?: string;

  /**
   * <p>The Amazon S3 bucket location of the manifest file for labeled data. </p>
   */
  OutputDatasetS3Uri: string | undefined;
}

export namespace LabelingJobOutput {
  export const filterSensitiveLog = (obj: LabelingJobOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is LabelingJobOutput =>
    __isa(o, "LabelingJobOutput");
}

/**
 * <p>Output configuration information for a labeling job.</p>
 */
export interface LabelingJobOutputConfig {
  __type?: "LabelingJobOutputConfig";
  /**
   * <p>The AWS Key Management Service ID of the key used to encrypt the output data, if any.</p>
   *         <p>If you use a KMS key ID or an alias of your master key, the Amazon SageMaker execution role must
   *             include permissions to call <code>kms:Encrypt</code>. If you don't provide a KMS key ID,
   *             Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. Amazon SageMaker uses server-side
   *             encryption with KMS-managed keys for <code>LabelingJobOutputConfig</code>. If you use a
   *             bucket policy with an <code>s3:PutObject</code> permission that only allows objects with
   *             server-side encryption, set the condition key of
   *                 <code>s3:x-amz-server-side-encryption</code> to <code>"aws:kms"</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html">KMS-Managed Encryption Keys</a> in the <i>Amazon Simple Storage Service Developer
   *                 Guide.</i>
   *          </p>
   *         <p>The KMS key policy must grant permission to the IAM role that you specify in your
   *                 <code>CreateLabelingJob</code> request. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Using
   *                 Key Policies in AWS KMS</a> in the <i>AWS Key Management Service Developer
   *                 Guide</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon S3 location to write output data.</p>
   */
  S3OutputPath: string | undefined;
}

export namespace LabelingJobOutputConfig {
  export const filterSensitiveLog = (obj: LabelingJobOutputConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is LabelingJobOutputConfig =>
    __isa(o, "LabelingJobOutputConfig");
}

/**
 * <p>Provides configuration information for labeling jobs.</p>
 */
export interface LabelingJobResourceConfig {
  __type?: "LabelingJobResourceConfig";
  /**
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume
   *             attached to the ML compute instance(s) that run the training job. The
   *                 <code>VolumeKmsKeyId</code> can be any of the following formats:</p>
   *         <ul>
   *             <li>
   *                 <p>// KMS Key ID</p>
   *                 <p>
   *                     <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>// Amazon Resource Name (ARN) of a KMS Key</p>
   *                 <p>
   *                     <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;
}

export namespace LabelingJobResourceConfig {
  export const filterSensitiveLog = (obj: LabelingJobResourceConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is LabelingJobResourceConfig =>
    __isa(o, "LabelingJobResourceConfig");
}

/**
 * <p>The Amazon S3 location of the input data objects.</p>
 */
export interface LabelingJobS3DataSource {
  __type?: "LabelingJobS3DataSource";
  /**
   * <p>The Amazon S3 location of the manifest file that describes the input data objects.</p>
   */
  ManifestS3Uri: string | undefined;
}

export namespace LabelingJobS3DataSource {
  export const filterSensitiveLog = (obj: LabelingJobS3DataSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is LabelingJobS3DataSource =>
    __isa(o, "LabelingJobS3DataSource");
}

export enum LabelingJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping"
}

/**
 * <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the
 *             job is automatically stopped. You can use these conditions to control the cost of data
 *             labeling.</p>
 *         <note>
 *             <p>Labeling jobs fail after 30 days with an appropriate client error message.</p>
 *         </note>
 */
export interface LabelingJobStoppingConditions {
  __type?: "LabelingJobStoppingConditions";
  /**
   * <p>The maximum number of objects that can be labeled by human workers.</p>
   */
  MaxHumanLabeledObjectCount?: number;

  /**
   * <p>The maximum number of input data objects that should be labeled.</p>
   */
  MaxPercentageOfInputDatasetLabeled?: number;
}

export namespace LabelingJobStoppingConditions {
  export const filterSensitiveLog = (
    obj: LabelingJobStoppingConditions
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LabelingJobStoppingConditions =>
    __isa(o, "LabelingJobStoppingConditions");
}

/**
 * <p>Provides summary information about a labeling job.</p>
 */
export interface LabelingJobSummary {
  __type?: "LabelingJobSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function used to consolidate the
   *             annotations from individual workers into a label for a data object. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-annotation-consolidation.html">Annotation
   *                 Consolidation</a>.</p>
   */
  AnnotationConsolidationLambdaArn?: string;

  /**
   * <p>The date and time that the job was created (timestamp).</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>If the <code>LabelingJobStatus</code> field is <code>Failed</code>, this field
   *             contains a description of the error.</p>
   */
  FailureReason?: string;

  /**
   * <p>Input configuration for the labeling job.</p>
   */
  InputConfig?: LabelingJobInputConfig;

  /**
   * <p>Counts showing the progress of the labeling job.</p>
   */
  LabelCounters: LabelCounters | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) assigned to the labeling job when it was
   *             created.</p>
   */
  LabelingJobArn: string | undefined;

  /**
   * <p>The name of the labeling job.</p>
   */
  LabelingJobName: string | undefined;

  /**
   * <p>The location of the output produced by the labeling job.</p>
   */
  LabelingJobOutput?: LabelingJobOutput;

  /**
   * <p>The current status of the labeling job. </p>
   */
  LabelingJobStatus: LabelingJobStatus | string | undefined;

  /**
   * <p>The date and time that the job was last modified (timestamp).</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a Lambda function. The function is run before each
   *             data object is sent to a worker.</p>
   */
  PreHumanTaskLambdaArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the work team assigned to the job.</p>
   */
  WorkteamArn: string | undefined;
}

export namespace LabelingJobSummary {
  export const filterSensitiveLog = (obj: LabelingJobSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is LabelingJobSummary =>
    __isa(o, "LabelingJobSummary");
}

export interface ListAlgorithmsInput {
  __type?: "ListAlgorithmsInput";
  /**
   * <p>A filter that returns only algorithms created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only algorithms created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of algorithms to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the algorithm name. This filter returns only algorithms whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the response to a previous <code>ListAlgorithms</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of algorithms, use
   *             the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The parameter by which to sort the results. The default is
   *             <code>CreationTime</code>.</p>
   */
  SortBy?: AlgorithmSortBy | string;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListAlgorithmsInput {
  export const filterSensitiveLog = (obj: ListAlgorithmsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAlgorithmsInput =>
    __isa(o, "ListAlgorithmsInput");
}

export interface ListAlgorithmsOutput {
  __type?: "ListAlgorithmsOutput";
  /**
   * <p>>An array of <code>AlgorithmSummary</code> objects, each of which lists an
   *             algorithm.</p>
   */
  AlgorithmSummaryList: AlgorithmSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             algorithms, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListAlgorithmsOutput {
  export const filterSensitiveLog = (obj: ListAlgorithmsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAlgorithmsOutput =>
    __isa(o, "ListAlgorithmsOutput");
}

export interface ListAppsRequest {
  __type?: "ListAppsRequest";
  /**
   * <p>A parameter to search for the domain ID.</p>
   */
  DomainIdEquals?: string;

  /**
   * <p>Returns a list up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The parameter by which to sort the results. The default is CreationTime.</p>
   */
  SortBy?: AppSortKey | string;

  /**
   * <p>The sort order for the results. The default is Ascending.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A parameter to search by user profile name.</p>
   */
  UserProfileNameEquals?: string;
}

export namespace ListAppsRequest {
  export const filterSensitiveLog = (obj: ListAppsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAppsRequest =>
    __isa(o, "ListAppsRequest");
}

export interface ListAppsResponse {
  __type?: "ListAppsResponse";
  /**
   * <p>The list of apps.</p>
   */
  Apps?: AppDetails[];

  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListAppsResponse {
  export const filterSensitiveLog = (obj: ListAppsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAppsResponse =>
    __isa(o, "ListAppsResponse");
}

export interface ListAutoMLJobsRequest {
  __type?: "ListAutoMLJobsRequest";
  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>Request a list of jobs, using a filter for time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>Request a list of jobs up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * <p>Request a list of jobs, using a search filter for name.</p>
   */
  NameContains?: string;

  /**
   * <p>If the previous response was truncated, you will receive this token.
   *          Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The parameter by which to sort the results. The default is AutoMLJobName.</p>
   */
  SortBy?: AutoMLSortBy | string;

  /**
   * <p>The sort order for the results. The default is Descending.</p>
   */
  SortOrder?: AutoMLSortOrder | string;

  /**
   * <p>Request a list of jobs, using a filter for status.</p>
   */
  StatusEquals?: AutoMLJobStatus | string;
}

export namespace ListAutoMLJobsRequest {
  export const filterSensitiveLog = (obj: ListAutoMLJobsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAutoMLJobsRequest =>
    __isa(o, "ListAutoMLJobsRequest");
}

export interface ListAutoMLJobsResponse {
  __type?: "ListAutoMLJobsResponse";
  /**
   * <p>Returns a summary list of jobs.</p>
   */
  AutoMLJobSummaries: AutoMLJobSummary[] | undefined;

  /**
   * <p>If the previous response was truncated, you will receive this token.
   *          Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListAutoMLJobsResponse {
  export const filterSensitiveLog = (obj: ListAutoMLJobsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAutoMLJobsResponse =>
    __isa(o, "ListAutoMLJobsResponse");
}

export interface ListCandidatesForAutoMLJobRequest {
  __type?: "ListCandidatesForAutoMLJobRequest";
  /**
   * <p>List the Candidates created for the job by providing the job's name.</p>
   */
  AutoMLJobName: string | undefined;

  /**
   * <p>List the Candidates for the job and filter by candidate name.</p>
   */
  CandidateNameEquals?: string;

  /**
   * <p>List the job's Candidates up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was truncated, you will receive this token.
   *          Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The parameter by which to sort the results. The default is Descending.</p>
   */
  SortBy?: CandidateSortBy | string;

  /**
   * <p>The sort order for the results. The default is Ascending.</p>
   */
  SortOrder?: AutoMLSortOrder | string;

  /**
   * <p>List the Candidates for the job and filter by status.</p>
   */
  StatusEquals?: CandidateStatus | string;
}

export namespace ListCandidatesForAutoMLJobRequest {
  export const filterSensitiveLog = (
    obj: ListCandidatesForAutoMLJobRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCandidatesForAutoMLJobRequest =>
    __isa(o, "ListCandidatesForAutoMLJobRequest");
}

export interface ListCandidatesForAutoMLJobResponse {
  __type?: "ListCandidatesForAutoMLJobResponse";
  /**
   * <p>Summaries about the Candidates.</p>
   */
  Candidates: AutoMLCandidate[] | undefined;

  /**
   * <p>If the previous response was truncated, you will receive this token.
   *          Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListCandidatesForAutoMLJobResponse {
  export const filterSensitiveLog = (
    obj: ListCandidatesForAutoMLJobResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCandidatesForAutoMLJobResponse =>
    __isa(o, "ListCandidatesForAutoMLJobResponse");
}

export interface ListCodeRepositoriesInput {
  __type?: "ListCodeRepositoriesInput";
  /**
   * <p>A filter that returns only Git repositories that were created after the specified
   *             time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only Git repositories that were created before the specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only Git repositories that were last modified after the
   *             specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only Git repositories that were last modified before the
   *             specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of Git repositories to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the Git repositories name. This filter returns only repositories whose
   *             name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of a <code>ListCodeRepositoriesOutput</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To get the next set of Git repositories, use
   *             the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: CodeRepositorySortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: CodeRepositorySortOrder | string;
}

export namespace ListCodeRepositoriesInput {
  export const filterSensitiveLog = (obj: ListCodeRepositoriesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCodeRepositoriesInput =>
    __isa(o, "ListCodeRepositoriesInput");
}

export interface ListCodeRepositoriesOutput {
  __type?: "ListCodeRepositoriesOutput";
  /**
   * <p>Gets a list of summaries of the Git repositories. Each summary specifies the following
   *             values for the repository: </p>
   *         <ul>
   *             <li>
   *                 <p>Name</p>
   *             </li>
   *             <li>
   *                 <p>Amazon Resource Name (ARN)</p>
   *             </li>
   *             <li>
   *                 <p>Creation time</p>
   *             </li>
   *             <li>
   *                 <p>Last modified time</p>
   *             </li>
   *             <li>
   *                 <p>Configuration information, including the URL location of the repository and
   *                     the ARN of the AWS Secrets Manager secret that contains the credentials used
   *                     to access the repository.</p>
   *             </li>
   *          </ul>
   */
  CodeRepositorySummaryList: CodeRepositorySummary[] | undefined;

  /**
   * <p>If the result of a <code>ListCodeRepositoriesOutput</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To get the next set of Git repositories, use
   *             the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListCodeRepositoriesOutput {
  export const filterSensitiveLog = (obj: ListCodeRepositoriesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCodeRepositoriesOutput =>
    __isa(o, "ListCodeRepositoriesOutput");
}

export interface ListCompilationJobsRequest {
  __type?: "ListCompilationJobsRequest";
  /**
   * <p>A filter that returns the model compilation jobs that were created after a specified
   *             time. </p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns the model compilation jobs that were created before a specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns the model compilation jobs that were modified after a specified
   *             time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns the model compilation jobs that were modified before a specified
   *             time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of model compilation jobs to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A filter that returns the model compilation jobs whose name contains a specified
   *             string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListCompilationJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of model
   *             compilation jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The field by which to sort results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ListCompilationJobsSortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter that retrieves model compilation jobs with a specific <a>DescribeCompilationJobResponse$CompilationJobStatus</a> status.</p>
   */
  StatusEquals?: CompilationJobStatus | string;
}

export namespace ListCompilationJobsRequest {
  export const filterSensitiveLog = (obj: ListCompilationJobsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCompilationJobsRequest =>
    __isa(o, "ListCompilationJobsRequest");
}

export interface ListCompilationJobsResponse {
  __type?: "ListCompilationJobsResponse";
  /**
   * <p>An array of <a>CompilationJobSummary</a> objects, each describing a model
   *             compilation job. </p>
   */
  CompilationJobSummaries: CompilationJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this <code>NextToken</code>. To retrieve
   *             the next set of model compilation jobs, use this token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListCompilationJobsResponse {
  export const filterSensitiveLog = (
    obj: ListCompilationJobsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCompilationJobsResponse =>
    __isa(o, "ListCompilationJobsResponse");
}

export enum ListCompilationJobsSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status"
}

export interface ListDomainsRequest {
  __type?: "ListDomainsRequest";
  /**
   * <p>Returns a list up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListDomainsRequest {
  export const filterSensitiveLog = (obj: ListDomainsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDomainsRequest =>
    __isa(o, "ListDomainsRequest");
}

export interface ListDomainsResponse {
  __type?: "ListDomainsResponse";
  /**
   * <p>The list of domains.</p>
   */
  Domains?: DomainDetails[];

  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListDomainsResponse {
  export const filterSensitiveLog = (obj: ListDomainsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDomainsResponse =>
    __isa(o, "ListDomainsResponse");
}

export interface ListEndpointConfigsInput {
  __type?: "ListEndpointConfigsInput";
  /**
   * <p>A filter that returns only endpoint configurations with a creation time greater
   *             than or equal to the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only endpoint configurations created before the specified
   *             time (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of training jobs to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the endpoint configuration name. This filter returns only endpoint
   *             configurations whose name contains the specified string. </p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListEndpointConfig</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             endpoint configurations, use the token in the next request. </p>
   */
  NextToken?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: EndpointConfigSortKey | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: OrderKey | string;
}

export namespace ListEndpointConfigsInput {
  export const filterSensitiveLog = (obj: ListEndpointConfigsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListEndpointConfigsInput =>
    __isa(o, "ListEndpointConfigsInput");
}

export interface ListEndpointConfigsOutput {
  __type?: "ListEndpointConfigsOutput";
  /**
   * <p>An array of endpoint configurations.</p>
   */
  EndpointConfigs: EndpointConfigSummary[] | undefined;

  /**
   * <p> If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             endpoint configurations, use it in the subsequent request </p>
   */
  NextToken?: string;
}

export namespace ListEndpointConfigsOutput {
  export const filterSensitiveLog = (obj: ListEndpointConfigsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListEndpointConfigsOutput =>
    __isa(o, "ListEndpointConfigsOutput");
}

export interface ListEndpointsInput {
  __type?: "ListEndpointsInput";
  /**
   * <p>A filter that returns only endpoints with a creation time greater than or equal to
   *             the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only endpoints that were created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p> A filter that returns only endpoints that were modified after the specified
   *             timestamp. </p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p> A filter that returns only endpoints that were modified before the specified
   *             timestamp. </p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of endpoints to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in endpoint names. This filter returns only endpoints whose name contains
   *             the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of a <code>ListEndpoints</code> request was truncated, the response
   *             includes a <code>NextToken</code>. To retrieve the next set of endpoints, use the token
   *             in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: EndpointSortKey | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: OrderKey | string;

  /**
   * <p> A filter that returns only endpoints with the specified status.</p>
   */
  StatusEquals?: EndpointStatus | string;
}

export namespace ListEndpointsInput {
  export const filterSensitiveLog = (obj: ListEndpointsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListEndpointsInput =>
    __isa(o, "ListEndpointsInput");
}

export interface ListEndpointsOutput {
  __type?: "ListEndpointsOutput";
  /**
   * <p> An array or endpoint objects. </p>
   */
  Endpoints: EndpointSummary[] | undefined;

  /**
   * <p> If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             training jobs, use it in the subsequent request. </p>
   */
  NextToken?: string;
}

export namespace ListEndpointsOutput {
  export const filterSensitiveLog = (obj: ListEndpointsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListEndpointsOutput =>
    __isa(o, "ListEndpointsOutput");
}

export interface ListExperimentsRequest {
  __type?: "ListExperimentsRequest";
  /**
   * <p>A filter that returns only experiments created after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only experiments created before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The maximum number of experiments to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous call to <code>ListExperiments</code> didn't return the full set of
   *       experiments, the call returns a token for getting the next set of experiments.</p>
   */
  NextToken?: string;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortExperimentsBy | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListExperimentsRequest {
  export const filterSensitiveLog = (obj: ListExperimentsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListExperimentsRequest =>
    __isa(o, "ListExperimentsRequest");
}

export interface ListExperimentsResponse {
  __type?: "ListExperimentsResponse";
  /**
   * <p>A list of the summaries of your experiments.</p>
   */
  ExperimentSummaries?: ExperimentSummary[];

  /**
   * <p>A token for getting the next set of experiments, if there are any.</p>
   */
  NextToken?: string;
}

export namespace ListExperimentsResponse {
  export const filterSensitiveLog = (obj: ListExperimentsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListExperimentsResponse =>
    __isa(o, "ListExperimentsResponse");
}

export interface ListFlowDefinitionsRequest {
  __type?: "ListFlowDefinitionsRequest";
  /**
   * <p>A filter that returns only flow definitions with a creation time greater than or equal to the specified timestamp.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only flow definitions that were created before the specified timestamp.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The total number of items to return. If the total number of available items is more than the value specified in <code>MaxResults</code>, then a <code>NextToken</code> will be provided in the output that you can use to resume pagination.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListFlowDefinitionsRequest {
  export const filterSensitiveLog = (obj: ListFlowDefinitionsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListFlowDefinitionsRequest =>
    __isa(o, "ListFlowDefinitionsRequest");
}

export interface ListFlowDefinitionsResponse {
  __type?: "ListFlowDefinitionsResponse";
  /**
   * <p>An array of objects describing the flow definitions.</p>
   */
  FlowDefinitionSummaries: FlowDefinitionSummary[] | undefined;

  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;
}

export namespace ListFlowDefinitionsResponse {
  export const filterSensitiveLog = (
    obj: ListFlowDefinitionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListFlowDefinitionsResponse =>
    __isa(o, "ListFlowDefinitionsResponse");
}

export interface ListHumanTaskUisRequest {
  __type?: "ListHumanTaskUisRequest";
  /**
   * <p>A filter that returns only human task user interfaces with a creation time greater than or equal to the specified timestamp.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only human task user interfaces that were created before the specified timestamp.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The total number of items to return. If the total number of available items is more than the value specified in <code>MaxResults</code>, then a <code>NextToken</code> will be provided in the output that you can use to resume pagination.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListHumanTaskUisRequest {
  export const filterSensitiveLog = (obj: ListHumanTaskUisRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHumanTaskUisRequest =>
    __isa(o, "ListHumanTaskUisRequest");
}

export interface ListHumanTaskUisResponse {
  __type?: "ListHumanTaskUisResponse";
  /**
   * <p>An array of objects describing the human task user interfaces.</p>
   */
  HumanTaskUiSummaries: HumanTaskUiSummary[] | undefined;

  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;
}

export namespace ListHumanTaskUisResponse {
  export const filterSensitiveLog = (obj: ListHumanTaskUisResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHumanTaskUisResponse =>
    __isa(o, "ListHumanTaskUisResponse");
}

export interface ListHyperParameterTuningJobsRequest {
  __type?: "ListHyperParameterTuningJobsRequest";
  /**
   * <p>A filter that returns only tuning jobs that were created after the
   *             specified
   *             time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only tuning jobs that were created before the
   *             specified
   *             time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only tuning jobs that were modified after the specified
   *             time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only tuning jobs that were modified before the specified
   *             time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The
   *             maximum number of tuning jobs to return. The default value is
   *             10.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the tuning job name. This filter returns only tuning jobs whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListHyperParameterTuningJobs</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             tuning jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The
   *             field
   *             to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: HyperParameterTuningJobSortByOptions | string;

  /**
   * <p>The sort
   *             order
   *             for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter that returns only tuning jobs with the
   *             specified
   *             status.</p>
   */
  StatusEquals?: HyperParameterTuningJobStatus | string;
}

export namespace ListHyperParameterTuningJobsRequest {
  export const filterSensitiveLog = (
    obj: ListHyperParameterTuningJobsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHyperParameterTuningJobsRequest =>
    __isa(o, "ListHyperParameterTuningJobsRequest");
}

export interface ListHyperParameterTuningJobsResponse {
  __type?: "ListHyperParameterTuningJobsResponse";
  /**
   * <p>A list of <a>HyperParameterTuningJobSummary</a> objects that
   *             describe
   *             the tuning jobs that the <code>ListHyperParameterTuningJobs</code>
   *             request returned.</p>
   */
  HyperParameterTuningJobSummaries:
    | HyperParameterTuningJobSummary[]
    | undefined;

  /**
   * <p>If the result of this <code>ListHyperParameterTuningJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of tuning jobs,
   *             use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListHyperParameterTuningJobsResponse {
  export const filterSensitiveLog = (
    obj: ListHyperParameterTuningJobsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHyperParameterTuningJobsResponse =>
    __isa(o, "ListHyperParameterTuningJobsResponse");
}

export interface ListLabelingJobsForWorkteamRequest {
  __type?: "ListLabelingJobsForWorkteamRequest";
  /**
   * <p>A filter that returns only labeling jobs created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only labeling jobs created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter the limits jobs to only the ones whose job reference code contains the
   *             specified string.</p>
   */
  JobReferenceCodeContains?: string;

  /**
   * <p>The maximum number of labeling jobs to return in each page of the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the previous <code>ListLabelingJobsForWorkteam</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             labeling jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ListLabelingJobsForWorkteamSortByOptions | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the work team for which you want to see labeling
   *             jobs for.</p>
   */
  WorkteamArn: string | undefined;
}

export namespace ListLabelingJobsForWorkteamRequest {
  export const filterSensitiveLog = (
    obj: ListLabelingJobsForWorkteamRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListLabelingJobsForWorkteamRequest =>
    __isa(o, "ListLabelingJobsForWorkteamRequest");
}

export interface ListLabelingJobsForWorkteamResponse {
  __type?: "ListLabelingJobsForWorkteamResponse";
  /**
   * <p>An array of <code>LabelingJobSummary</code> objects, each describing a labeling
   *             job.</p>
   */
  LabelingJobSummaryList: LabelingJobForWorkteamSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             labeling jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListLabelingJobsForWorkteamResponse {
  export const filterSensitiveLog = (
    obj: ListLabelingJobsForWorkteamResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListLabelingJobsForWorkteamResponse =>
    __isa(o, "ListLabelingJobsForWorkteamResponse");
}

export enum ListLabelingJobsForWorkteamSortByOptions {
  CREATION_TIME = "CreationTime"
}

export interface ListLabelingJobsRequest {
  __type?: "ListLabelingJobsRequest";
  /**
   * <p>A filter that returns only labeling jobs created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only labeling jobs created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only labeling jobs modified after the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only labeling jobs modified before the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of labeling jobs to return in each page of the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the labeling job name. This filter returns only labeling jobs whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListLabelingJobs</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of labeling jobs,
   *             use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter that retrieves only labeling jobs with a specific status.</p>
   */
  StatusEquals?: LabelingJobStatus | string;
}

export namespace ListLabelingJobsRequest {
  export const filterSensitiveLog = (obj: ListLabelingJobsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListLabelingJobsRequest =>
    __isa(o, "ListLabelingJobsRequest");
}

export interface ListLabelingJobsResponse {
  __type?: "ListLabelingJobsResponse";
  /**
   * <p>An array of <code>LabelingJobSummary</code> objects, each describing a labeling
   *             job.</p>
   */
  LabelingJobSummaryList?: LabelingJobSummary[];

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             labeling jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListLabelingJobsResponse {
  export const filterSensitiveLog = (obj: ListLabelingJobsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListLabelingJobsResponse =>
    __isa(o, "ListLabelingJobsResponse");
}

export interface ListModelPackagesInput {
  __type?: "ListModelPackagesInput";
  /**
   * <p>A filter that returns only model packages created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only model packages created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of model packages to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the model package name. This filter returns only model packages whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the response to a previous <code>ListModelPackages</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of model
   *             packages, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The parameter by which to sort the results. The default is
   *             <code>CreationTime</code>.</p>
   */
  SortBy?: ModelPackageSortBy | string;

  /**
   * <p>The sort order for the results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListModelPackagesInput {
  export const filterSensitiveLog = (obj: ListModelPackagesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListModelPackagesInput =>
    __isa(o, "ListModelPackagesInput");
}

export interface ListModelPackagesOutput {
  __type?: "ListModelPackagesOutput";
  /**
   * <p>An array of <code>ModelPackageSummary</code> objects, each of which lists a model
   *             package.</p>
   */
  ModelPackageSummaryList: ModelPackageSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             model packages, use it in the subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListModelPackagesOutput {
  export const filterSensitiveLog = (obj: ListModelPackagesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListModelPackagesOutput =>
    __isa(o, "ListModelPackagesOutput");
}

export interface ListModelsInput {
  __type?: "ListModelsInput";
  /**
   * <p>A filter that returns only models with a creation time greater than or equal to the
   *             specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only models created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The maximum number of models to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the training job name. This filter returns only models in the training
   *             job whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the response to a previous <code>ListModels</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of models, use the
   *             token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ModelSortKey | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: OrderKey | string;
}

export namespace ListModelsInput {
  export const filterSensitiveLog = (obj: ListModelsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListModelsInput =>
    __isa(o, "ListModelsInput");
}

export interface ListModelsOutput {
  __type?: "ListModelsOutput";
  /**
   * <p>An array of <code>ModelSummary</code> objects, each of which lists a
   *             model.</p>
   */
  Models: ModelSummary[] | undefined;

  /**
   * <p> If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             models, use it in the subsequent request. </p>
   */
  NextToken?: string;
}

export namespace ListModelsOutput {
  export const filterSensitiveLog = (obj: ListModelsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListModelsOutput =>
    __isa(o, "ListModelsOutput");
}

export interface ListMonitoringExecutionsRequest {
  __type?: "ListMonitoringExecutionsRequest";
  /**
   * <p>A filter that returns only jobs created after a specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only jobs created before a specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Name of a specific endpoint to fetch jobs for.</p>
   */
  EndpointName?: string;

  /**
   * <p>A filter that returns only jobs modified before a specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only jobs modified after a specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>Name of a specific schedule to fetch jobs for.</p>
   */
  MonitoringScheduleName?: string;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job
   *          executions, use it in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>Filter for jobs scheduled after a specified time.</p>
   */
  ScheduledTimeAfter?: Date;

  /**
   * <p>Filter for jobs scheduled before a specified time.</p>
   */
  ScheduledTimeBefore?: Date;

  /**
   * <p>Whether to sort results by <code>Status</code>, <code>CreationTime</code>,
   *             <code>ScheduledTime</code> field. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringExecutionSortKey | string;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *          The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter that retrieves only jobs with a specific status.</p>
   */
  StatusEquals?: ExecutionStatus | string;
}

export namespace ListMonitoringExecutionsRequest {
  export const filterSensitiveLog = (
    obj: ListMonitoringExecutionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListMonitoringExecutionsRequest =>
    __isa(o, "ListMonitoringExecutionsRequest");
}

export interface ListMonitoringExecutionsResponse {
  __type?: "ListMonitoringExecutionsResponse";
  /**
   * <p>A JSON array in which each element is a summary for a monitoring execution.</p>
   */
  MonitoringExecutionSummaries: MonitoringExecutionSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of jobs,
   *          use it in the subsequent reques</p>
   */
  NextToken?: string;
}

export namespace ListMonitoringExecutionsResponse {
  export const filterSensitiveLog = (
    obj: ListMonitoringExecutionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListMonitoringExecutionsResponse =>
    __isa(o, "ListMonitoringExecutionsResponse");
}

export interface ListMonitoringSchedulesRequest {
  __type?: "ListMonitoringSchedulesRequest";
  /**
   * <p>A filter that returns only monitoring schedules created after a specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only monitoring schedules created before a specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Name of a specific endpoint to fetch schedules for.</p>
   */
  EndpointName?: string;

  /**
   * <p>A filter that returns only monitoring schedules modified after a specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only monitoring schedules modified before a specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of jobs to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filter for monitoring schedules whose name contains a specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>The token returned if the response is truncated. To retrieve the next set of job
   *          executions, use it in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>Whether to sort results by <code>Status</code>, <code>CreationTime</code>,
   *             <code>ScheduledTime</code> field. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: MonitoringScheduleSortKey | string;

  /**
   * <p>Whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.
   *          The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter that returns only monitoring schedules modified before a specified time.</p>
   */
  StatusEquals?: ScheduleStatus | string;
}

export namespace ListMonitoringSchedulesRequest {
  export const filterSensitiveLog = (
    obj: ListMonitoringSchedulesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListMonitoringSchedulesRequest =>
    __isa(o, "ListMonitoringSchedulesRequest");
}

export interface ListMonitoringSchedulesResponse {
  __type?: "ListMonitoringSchedulesResponse";
  /**
   * <p>A JSON array in which each element is a summary for a monitoring schedule.</p>
   */
  MonitoringScheduleSummaries: MonitoringScheduleSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of jobs,
   *          use it in the subsequent reques</p>
   */
  NextToken?: string;
}

export namespace ListMonitoringSchedulesResponse {
  export const filterSensitiveLog = (
    obj: ListMonitoringSchedulesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListMonitoringSchedulesResponse =>
    __isa(o, "ListMonitoringSchedulesResponse");
}

export interface ListNotebookInstanceLifecycleConfigsInput {
  __type?: "ListNotebookInstanceLifecycleConfigsInput";
  /**
   * <p>A filter that returns only lifecycle configurations that were created after the
   *             specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only lifecycle configurations that were created before the
   *             specified time (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only lifecycle configurations that were modified after the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only lifecycle configurations that were modified before the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of lifecycle configurations to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the lifecycle configuration name. This filter returns only lifecycle
   *             configurations whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of a <code>ListNotebookInstanceLifecycleConfigs</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To get the next set of
   *             lifecycle configurations, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>Sorts the list of results. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: NotebookInstanceLifecycleConfigSortKey | string;

  /**
   * <p>The sort order for results.</p>
   */
  SortOrder?: NotebookInstanceLifecycleConfigSortOrder | string;
}

export namespace ListNotebookInstanceLifecycleConfigsInput {
  export const filterSensitiveLog = (
    obj: ListNotebookInstanceLifecycleConfigsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListNotebookInstanceLifecycleConfigsInput =>
    __isa(o, "ListNotebookInstanceLifecycleConfigsInput");
}

export interface ListNotebookInstanceLifecycleConfigsOutput {
  __type?: "ListNotebookInstanceLifecycleConfigsOutput";
  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To get the next set of
   *             lifecycle configurations, use it in the next request. </p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>NotebookInstanceLifecycleConfiguration</code> objects, each listing
   *             a lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigs?: NotebookInstanceLifecycleConfigSummary[];
}

export namespace ListNotebookInstanceLifecycleConfigsOutput {
  export const filterSensitiveLog = (
    obj: ListNotebookInstanceLifecycleConfigsOutput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListNotebookInstanceLifecycleConfigsOutput =>
    __isa(o, "ListNotebookInstanceLifecycleConfigsOutput");
}

export interface ListNotebookInstancesInput {
  __type?: "ListNotebookInstancesInput";
  /**
   * <p>A filter that returns only notebook instances with associated with the specified git
   *             repository.</p>
   */
  AdditionalCodeRepositoryEquals?: string;

  /**
   * <p>A filter that returns only notebook instances that were created after the specified
   *             time (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only notebook instances that were created before the
   *             specified time (timestamp). </p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A string in the name or URL of a Git repository associated with this notebook
   *             instance. This filter returns only notebook instances associated with a git repository
   *             with a name that contains the specified string.</p>
   */
  DefaultCodeRepositoryContains?: string;

  /**
   * <p>A filter that returns only notebook instances that were modified after the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only notebook instances that were modified before the
   *             specified time (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of notebook instances to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the notebook instances' name. This filter returns only notebook
   *             instances whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p> If the previous call to the <code>ListNotebookInstances</code> is truncated, the
   *             response includes a <code>NextToken</code>. You can use this token in your subsequent
   *                 <code>ListNotebookInstances</code> request to fetch the next set of notebook
   *             instances. </p>
   *         <note>
   *             <p>You might specify a filter or a sort order in your request. When response is
   *                 truncated, you must use the same values for the filer and sort order in the next
   *                 request. </p>
   *         </note>
   */
  NextToken?: string;

  /**
   * <p>A string in the name of a notebook instances lifecycle configuration associated with
   *             this notebook instance. This filter returns only notebook instances associated with a
   *             lifecycle configuration with a name that contains the specified string.</p>
   */
  NotebookInstanceLifecycleConfigNameContains?: string;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: NotebookInstanceSortKey | string;

  /**
   * <p>The sort order for results. </p>
   */
  SortOrder?: NotebookInstanceSortOrder | string;

  /**
   * <p>A filter that returns only notebook instances with the specified status.</p>
   */
  StatusEquals?: NotebookInstanceStatus | string;
}

export namespace ListNotebookInstancesInput {
  export const filterSensitiveLog = (obj: ListNotebookInstancesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListNotebookInstancesInput =>
    __isa(o, "ListNotebookInstancesInput");
}

export interface ListNotebookInstancesOutput {
  __type?: "ListNotebookInstancesOutput";
  /**
   * <p>If the response to the previous <code>ListNotebookInstances</code> request was
   *             truncated, Amazon SageMaker returns this token. To retrieve the next set of notebook instances, use
   *             the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>NotebookInstanceSummary</code> objects, one for each notebook
   *             instance.</p>
   */
  NotebookInstances?: NotebookInstanceSummary[];
}

export namespace ListNotebookInstancesOutput {
  export const filterSensitiveLog = (
    obj: ListNotebookInstancesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListNotebookInstancesOutput =>
    __isa(o, "ListNotebookInstancesOutput");
}

export interface ListProcessingJobsRequest {
  __type?: "ListProcessingJobsRequest";
  /**
   * <p>A filter that returns only processing jobs created after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only processing jobs created after the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only processing jobs modified after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only processing jobs modified before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of processing jobs to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the processing job name. This filter returns only processing jobs whose
   *             name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListProcessingJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of processing
   *             jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter that retrieves only processing jobs with a specific status.</p>
   */
  StatusEquals?: ProcessingJobStatus | string;
}

export namespace ListProcessingJobsRequest {
  export const filterSensitiveLog = (obj: ListProcessingJobsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListProcessingJobsRequest =>
    __isa(o, "ListProcessingJobsRequest");
}

export interface ListProcessingJobsResponse {
  __type?: "ListProcessingJobsResponse";
  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             processing jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>ProcessingJobSummary</code> objects, each listing a processing
   *             job.</p>
   */
  ProcessingJobSummaries: ProcessingJobSummary[] | undefined;
}

export namespace ListProcessingJobsResponse {
  export const filterSensitiveLog = (obj: ListProcessingJobsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListProcessingJobsResponse =>
    __isa(o, "ListProcessingJobsResponse");
}

export interface ListSubscribedWorkteamsRequest {
  __type?: "ListSubscribedWorkteamsRequest";
  /**
   * <p>The maximum number of work teams to return in each page of the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the work team name. This filter returns only work teams whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListSubscribedWorkteams</code> request was
   *             truncated, the response includes a <code>NextToken</code>. To retrieve the next set of
   *             labeling jobs, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListSubscribedWorkteamsRequest {
  export const filterSensitiveLog = (
    obj: ListSubscribedWorkteamsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSubscribedWorkteamsRequest =>
    __isa(o, "ListSubscribedWorkteamsRequest");
}

export interface ListSubscribedWorkteamsResponse {
  __type?: "ListSubscribedWorkteamsResponse";
  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             work teams, use it in the subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>Workteam</code> objects, each describing a work team.</p>
   */
  SubscribedWorkteams: SubscribedWorkteam[] | undefined;
}

export namespace ListSubscribedWorkteamsResponse {
  export const filterSensitiveLog = (
    obj: ListSubscribedWorkteamsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSubscribedWorkteamsResponse =>
    __isa(o, "ListSubscribedWorkteamsResponse");
}

export interface ListTagsInput {
  __type?: "ListTagsInput";
  /**
   * <p>Maximum number of tags to return.</p>
   */
  MaxResults?: number;

  /**
   * <p> If the response to the previous <code>ListTags</code> request is truncated, Amazon SageMaker
   *             returns this token. To retrieve the next set of tags, use it in the subsequent request.
   *         </p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to
   *             retrieve.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsInput {
  export const filterSensitiveLog = (obj: ListTagsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsInput => __isa(o, "ListTagsInput");
}

export interface ListTagsOutput {
  __type?: "ListTagsOutput";
  /**
   * <p> If response is truncated, Amazon SageMaker includes a token in the response. You can use this
   *             token in your subsequent request to fetch next set of tokens. </p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>Tag</code> objects, each with a tag key and a value.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsOutput {
  export const filterSensitiveLog = (obj: ListTagsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsOutput =>
    __isa(o, "ListTagsOutput");
}

export interface ListTrainingJobsForHyperParameterTuningJobRequest {
  __type?: "ListTrainingJobsForHyperParameterTuningJobRequest";
  /**
   * <p>The name of the tuning job whose training jobs you want to list.</p>
   */
  HyperParameterTuningJobName: string | undefined;

  /**
   * <p>The maximum number of training jobs to return. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the previous <code>ListTrainingJobsForHyperParameterTuningJob</code>
   *             request was truncated, the response includes a <code>NextToken</code>. To retrieve the
   *             next set of training jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The field to sort
   *             results
   *             by. The default is <code>Name</code>.</p>
   *         <p>If the value of this field is <code>FinalObjectiveMetricValue</code>, any training
   *             jobs that did not return an objective metric are not listed.</p>
   */
  SortBy?: TrainingJobSortByOptions | string;

  /**
   * <p>The sort order
   *             for
   *             results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter that returns only training jobs with the
   *             specified
   *             status.</p>
   */
  StatusEquals?: TrainingJobStatus | string;
}

export namespace ListTrainingJobsForHyperParameterTuningJobRequest {
  export const filterSensitiveLog = (
    obj: ListTrainingJobsForHyperParameterTuningJobRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListTrainingJobsForHyperParameterTuningJobRequest =>
    __isa(o, "ListTrainingJobsForHyperParameterTuningJobRequest");
}

export interface ListTrainingJobsForHyperParameterTuningJobResponse {
  __type?: "ListTrainingJobsForHyperParameterTuningJobResponse";
  /**
   * <p>If the result of this <code>ListTrainingJobsForHyperParameterTuningJob</code> request
   *             was truncated, the response includes a <code>NextToken</code>. To retrieve the next set
   *             of training jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <a>TrainingJobSummary</a> objects that
   *             describe
   *             the training jobs that the
   *                 <code>ListTrainingJobsForHyperParameterTuningJob</code> request returned.</p>
   */
  TrainingJobSummaries: HyperParameterTrainingJobSummary[] | undefined;
}

export namespace ListTrainingJobsForHyperParameterTuningJobResponse {
  export const filterSensitiveLog = (
    obj: ListTrainingJobsForHyperParameterTuningJobResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListTrainingJobsForHyperParameterTuningJobResponse =>
    __isa(o, "ListTrainingJobsForHyperParameterTuningJobResponse");
}

export interface ListTrainingJobsRequest {
  __type?: "ListTrainingJobsRequest";
  /**
   * <p>A filter that returns only training jobs created after the specified time
   *             (timestamp).</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only training jobs created before the specified time
   *             (timestamp).</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only training jobs modified after the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only training jobs modified before the specified time
   *             (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of training jobs to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the training job name. This filter returns only training jobs whose
   *             name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListTrainingJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of training
   *             jobs, use the token in the next request. </p>
   */
  NextToken?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter that retrieves only training jobs with a specific status.</p>
   */
  StatusEquals?: TrainingJobStatus | string;
}

export namespace ListTrainingJobsRequest {
  export const filterSensitiveLog = (obj: ListTrainingJobsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTrainingJobsRequest =>
    __isa(o, "ListTrainingJobsRequest");
}

export interface ListTrainingJobsResponse {
  __type?: "ListTrainingJobsResponse";
  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             training jobs, use it in the subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>TrainingJobSummary</code> objects, each listing a training
   *             job.</p>
   */
  TrainingJobSummaries: TrainingJobSummary[] | undefined;
}

export namespace ListTrainingJobsResponse {
  export const filterSensitiveLog = (obj: ListTrainingJobsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTrainingJobsResponse =>
    __isa(o, "ListTrainingJobsResponse");
}

export interface ListTransformJobsRequest {
  __type?: "ListTransformJobsRequest";
  /**
   * <p>A filter that returns only transform jobs created after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>A filter that returns only transform jobs created before the specified time.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>A filter that returns only transform jobs modified after the specified time.</p>
   */
  LastModifiedTimeAfter?: Date;

  /**
   * <p>A filter that returns only transform jobs modified before the specified time.</p>
   */
  LastModifiedTimeBefore?: Date;

  /**
   * <p>The maximum number of
   *             transform
   *             jobs to return in the response. The default value is
   *             <code>10</code>.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the transform job name. This filter returns only transform jobs whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListTransformJobs</code> request was truncated,
   *             the response includes a <code>NextToken</code>. To retrieve the next set of transform
   *             jobs, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: SortBy | string;

  /**
   * <p>The sort order for results. The default is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter that retrieves only transform jobs with a specific status.</p>
   */
  StatusEquals?: TransformJobStatus | string;
}

export namespace ListTransformJobsRequest {
  export const filterSensitiveLog = (obj: ListTransformJobsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTransformJobsRequest =>
    __isa(o, "ListTransformJobsRequest");
}

export interface ListTransformJobsResponse {
  __type?: "ListTransformJobsResponse";
  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             transform jobs, use it in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of
   *                 <code>TransformJobSummary</code>
   *             objects.</p>
   */
  TransformJobSummaries: TransformJobSummary[] | undefined;
}

export namespace ListTransformJobsResponse {
  export const filterSensitiveLog = (obj: ListTransformJobsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTransformJobsResponse =>
    __isa(o, "ListTransformJobsResponse");
}

export interface ListTrialComponentsRequest {
  __type?: "ListTrialComponentsRequest";
  /**
   * <p>A filter that returns only components created after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only components created before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>A filter that returns only components that are part of the specified experiment. If you
   *       specify <code>ExperimentName</code>, you can't filter by <code>SourceArn</code> or
   *       <code>TrialName</code>.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The maximum number of components to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous call to <code>ListTrialComponents</code> didn't return the full set of
   *       components, the call returns a token for getting the next set of components.</p>
   */
  NextToken?: string;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortTrialComponentsBy | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A filter that returns only components that have the specified source Amazon Resource
   *       Name (ARN). If you specify <code>SourceArn</code>, you can't filter by
   *       <code>ExperimentName</code> or <code>TrialName</code>.</p>
   */
  SourceArn?: string;

  /**
   * <p>A filter that returns only components that are part of the specified trial. If you
   *       specify <code>TrialName</code>, you can't filter by <code>ExperimentName</code> or
   *       <code>SourceArn</code>.</p>
   */
  TrialName?: string;
}

export namespace ListTrialComponentsRequest {
  export const filterSensitiveLog = (obj: ListTrialComponentsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTrialComponentsRequest =>
    __isa(o, "ListTrialComponentsRequest");
}

export interface ListTrialComponentsResponse {
  __type?: "ListTrialComponentsResponse";
  /**
   * <p>A token for getting the next set of components, if there are any.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the summaries of your trial components.</p>
   */
  TrialComponentSummaries?: TrialComponentSummary[];
}

export namespace ListTrialComponentsResponse {
  export const filterSensitiveLog = (
    obj: ListTrialComponentsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTrialComponentsResponse =>
    __isa(o, "ListTrialComponentsResponse");
}

export interface ListTrialsRequest {
  __type?: "ListTrialsRequest";
  /**
   * <p>A filter that returns only trials created after the specified time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>A filter that returns only trials created before the specified time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>A filter that returns only trials that are part of the specified experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The maximum number of trials to return in the response. The default value is 10.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous call to <code>ListTrials</code> didn't return the full set of
   *       trials, the call returns a token for getting the next set of trials.</p>
   */
  NextToken?: string;

  /**
   * <p>The property used to sort results. The default value is <code>CreationTime</code>.</p>
   */
  SortBy?: SortTrialsBy | string;

  /**
   * <p>The sort order. The default value is <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListTrialsRequest {
  export const filterSensitiveLog = (obj: ListTrialsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTrialsRequest =>
    __isa(o, "ListTrialsRequest");
}

export interface ListTrialsResponse {
  __type?: "ListTrialsResponse";
  /**
   * <p>A token for getting the next set of trials, if there are any.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the summaries of your trials.</p>
   */
  TrialSummaries?: TrialSummary[];
}

export namespace ListTrialsResponse {
  export const filterSensitiveLog = (obj: ListTrialsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTrialsResponse =>
    __isa(o, "ListTrialsResponse");
}

export interface ListUserProfilesRequest {
  __type?: "ListUserProfilesRequest";
  /**
   * <p>A parameter by which to filter the results.</p>
   */
  DomainIdEquals?: string;

  /**
   * <p>Returns a list up to a specified limit.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The parameter by which to sort the results. The default is CreationTime.</p>
   */
  SortBy?: UserProfileSortKey | string;

  /**
   * <p>The sort order for the results. The default is Ascending.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>A parameter by which to filter the results.</p>
   */
  UserProfileNameContains?: string;
}

export namespace ListUserProfilesRequest {
  export const filterSensitiveLog = (obj: ListUserProfilesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListUserProfilesRequest =>
    __isa(o, "ListUserProfilesRequest");
}

export interface ListUserProfilesResponse {
  __type?: "ListUserProfilesResponse";
  /**
   * <p>If the previous response was truncated, you will receive this token.
   *         Use it in your next request to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of user profiles.</p>
   */
  UserProfiles?: UserProfileDetails[];
}

export namespace ListUserProfilesResponse {
  export const filterSensitiveLog = (obj: ListUserProfilesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListUserProfilesResponse =>
    __isa(o, "ListUserProfilesResponse");
}

export interface ListWorkteamsRequest {
  __type?: "ListWorkteamsRequest";
  /**
   * <p>The maximum number of work teams to return in each page of the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string in the work team's name. This filter returns only work teams whose name
   *             contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>If the result of the previous <code>ListWorkteams</code> request was truncated, the
   *             response includes a <code>NextToken</code>. To retrieve the next set of labeling jobs,
   *             use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The field to sort results by. The default is <code>CreationTime</code>.</p>
   */
  SortBy?: ListWorkteamsSortByOptions | string;

  /**
   * <p>The sort order for results. The default is <code>Ascending</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListWorkteamsRequest {
  export const filterSensitiveLog = (obj: ListWorkteamsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListWorkteamsRequest =>
    __isa(o, "ListWorkteamsRequest");
}

export interface ListWorkteamsResponse {
  __type?: "ListWorkteamsResponse";
  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of
   *             work teams, use it in the subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of <code>Workteam</code> objects, each describing a work team.</p>
   */
  Workteams: Workteam[] | undefined;
}

export namespace ListWorkteamsResponse {
  export const filterSensitiveLog = (obj: ListWorkteamsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListWorkteamsResponse =>
    __isa(o, "ListWorkteamsResponse");
}

export enum ListWorkteamsSortByOptions {
  CreateDate = "CreateDate",
  Name = "Name"
}

/**
 * <p>Defines the Amazon Cognito user group that is part of a work team.</p>
 */
export interface MemberDefinition {
  __type?: "MemberDefinition";
  /**
   * <p>The Amazon Cognito user group that is part of the work team.</p>
   */
  CognitoMemberDefinition?: CognitoMemberDefinition;
}

export namespace MemberDefinition {
  export const filterSensitiveLog = (obj: MemberDefinition): any => ({
    ...obj
  });
  export const isa = (o: any): o is MemberDefinition =>
    __isa(o, "MemberDefinition");
}

/**
 * <p>The name, value, and date and time of a metric that was emitted to Amazon CloudWatch.</p>
 */
export interface MetricData {
  __type?: "MetricData";
  /**
   * <p>The name of the metric.</p>
   */
  MetricName?: string;

  /**
   * <p>The date and time that the algorithm emitted the metric.</p>
   */
  Timestamp?: Date;

  /**
   * <p>The value of the metric.</p>
   */
  Value?: number;
}

export namespace MetricData {
  export const filterSensitiveLog = (obj: MetricData): any => ({
    ...obj
  });
  export const isa = (o: any): o is MetricData => __isa(o, "MetricData");
}

/**
 * <p>Specifies a metric that the training algorithm
 *             writes
 *             to <code>stderr</code> or <code>stdout</code>
 *          . Amazon SageMakerhyperparameter
 *             tuning captures
 *             all
 *             defined metrics.
 *             You
 *             specify one metric that a hyperparameter tuning job uses as its
 *             objective metric to choose the best training job.</p>
 */
export interface MetricDefinition {
  __type?: "MetricDefinition";
  /**
   * <p>The name of the metric.</p>
   */
  Name: string | undefined;

  /**
   * <p>A regular expression that searches the output of a training job and gets the value of
   *             the metric. For more information about using regular expressions to define metrics, see
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics.html">Defining
   *                 Objective Metrics</a>.</p>
   */
  Regex: string | undefined;
}

export namespace MetricDefinition {
  export const filterSensitiveLog = (obj: MetricDefinition): any => ({
    ...obj
  });
  export const isa = (o: any): o is MetricDefinition =>
    __isa(o, "MetricDefinition");
}

/**
 * <p>Provides information about the location that is configured for storing model
 *             artifacts. </p>
 */
export interface ModelArtifacts {
  __type?: "ModelArtifacts";
  /**
   * <p>The path of the S3 object that contains the model artifacts. For example,
   *                 <code>s3://bucket-name/keynameprefix/model.tar.gz</code>.</p>
   */
  S3ModelArtifacts: string | undefined;
}

export namespace ModelArtifacts {
  export const filterSensitiveLog = (obj: ModelArtifacts): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModelArtifacts =>
    __isa(o, "ModelArtifacts");
}

/**
 * <p>Describes the Docker container for the model package.</p>
 */
export interface ModelPackageContainerDefinition {
  __type?: "ModelPackageContainerDefinition";
  /**
   * <p>The DNS host name for the Docker container.</p>
   */
  ContainerHostname?: string;

  /**
   * <p>The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored.</p>
   *         <p>If you are using your own custom algorithm instead of an algorithm provided by Amazon SageMaker,
   *             the inference code must meet Amazon SageMaker requirements. Amazon SageMaker supports both
   *                 <code>registry/repository[:tag]</code> and <code>registry/repository[@digest]</code>
   *             image path formats. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon
   *                 SageMaker</a>.</p>
   */
  Image: string | undefined;

  /**
   * <p>An MD5 hash of the training algorithm that identifies the Docker image used for
   *             training.</p>
   */
  ImageDigest?: string;

  /**
   * <p>The Amazon S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single <code>gzip</code> compressed tar archive
   *                 (<code>.tar.gz</code> suffix).</p>
   */
  ModelDataUrl?: string;

  /**
   * <p>The AWS Marketplace product ID of the model package.</p>
   */
  ProductId?: string;
}

export namespace ModelPackageContainerDefinition {
  export const filterSensitiveLog = (
    obj: ModelPackageContainerDefinition
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModelPackageContainerDefinition =>
    __isa(o, "ModelPackageContainerDefinition");
}

export enum ModelPackageSortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name"
}

export enum ModelPackageStatus {
  COMPLETED = "Completed",
  DELETING = "Deleting",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending"
}

/**
 * <p>Specifies the validation and image scan statuses of the model package.</p>
 */
export interface ModelPackageStatusDetails {
  __type?: "ModelPackageStatusDetails";
  /**
   * <p>The status of the scan of the Docker image container for the model package.</p>
   */
  ImageScanStatuses?: ModelPackageStatusItem[];

  /**
   * <p>The validation status of the model package.</p>
   */
  ValidationStatuses: ModelPackageStatusItem[] | undefined;
}

export namespace ModelPackageStatusDetails {
  export const filterSensitiveLog = (obj: ModelPackageStatusDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModelPackageStatusDetails =>
    __isa(o, "ModelPackageStatusDetails");
}

/**
 * <p>Represents the overall status of a model package.</p>
 */
export interface ModelPackageStatusItem {
  __type?: "ModelPackageStatusItem";
  /**
   * <p>if the overall status is <code>Failed</code>, the reason for the failure.</p>
   */
  FailureReason?: string;

  /**
   * <p>The name of the model package for which the overall status is being reported.</p>
   */
  Name: string | undefined;

  /**
   * <p>The current status.</p>
   */
  Status: DetailedModelPackageStatus | string | undefined;
}

export namespace ModelPackageStatusItem {
  export const filterSensitiveLog = (obj: ModelPackageStatusItem): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModelPackageStatusItem =>
    __isa(o, "ModelPackageStatusItem");
}

/**
 * <p>Provides summary information about a model package.</p>
 */
export interface ModelPackageSummary {
  __type?: "ModelPackageSummary";
  /**
   * <p>A timestamp that shows when the model package was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model package.</p>
   */
  ModelPackageArn: string | undefined;

  /**
   * <p>A brief description of the model package.</p>
   */
  ModelPackageDescription?: string;

  /**
   * <p>The name of the model package.</p>
   */
  ModelPackageName: string | undefined;

  /**
   * <p>The overall status of the model package.</p>
   */
  ModelPackageStatus: ModelPackageStatus | string | undefined;
}

export namespace ModelPackageSummary {
  export const filterSensitiveLog = (obj: ModelPackageSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModelPackageSummary =>
    __isa(o, "ModelPackageSummary");
}

/**
 * <p>Contains data, such as the inputs and targeted instance types that are used in the
 *             process of validating the model package.</p>
 *         <p>The data provided in the validation profile is made available to your buyers on AWS
 *             Marketplace.</p>
 */
export interface ModelPackageValidationProfile {
  __type?: "ModelPackageValidationProfile";
  /**
   * <p>The name of the profile for the model package.</p>
   */
  ProfileName: string | undefined;

  /**
   * <p>The <code>TransformJobDefinition</code> object that describes the transform job used
   *             for the validation of the model package.</p>
   */
  TransformJobDefinition: TransformJobDefinition | undefined;
}

export namespace ModelPackageValidationProfile {
  export const filterSensitiveLog = (
    obj: ModelPackageValidationProfile
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModelPackageValidationProfile =>
    __isa(o, "ModelPackageValidationProfile");
}

/**
 * <p>Specifies batch transform jobs that Amazon SageMaker runs to validate your model package.</p>
 */
export interface ModelPackageValidationSpecification {
  __type?: "ModelPackageValidationSpecification";
  /**
   * <p>An array of <code>ModelPackageValidationProfile</code> objects, each of which
   *             specifies a batch transform job that Amazon SageMaker runs to validate your model package.</p>
   */
  ValidationProfiles: ModelPackageValidationProfile[] | undefined;

  /**
   * <p>The IAM roles to be used for the validation of the model package.</p>
   */
  ValidationRole: string | undefined;
}

export namespace ModelPackageValidationSpecification {
  export const filterSensitiveLog = (
    obj: ModelPackageValidationSpecification
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModelPackageValidationSpecification =>
    __isa(o, "ModelPackageValidationSpecification");
}

export enum ModelSortKey {
  CreationTime = "CreationTime",
  Name = "Name"
}

/**
 * <p>Provides summary information about a model.</p>
 */
export interface ModelSummary {
  __type?: "ModelSummary";
  /**
   * <p>A timestamp that indicates when the model was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelArn: string | undefined;

  /**
   * <p>The name of the model that you want a summary for.</p>
   */
  ModelName: string | undefined;
}

export namespace ModelSummary {
  export const filterSensitiveLog = (obj: ModelSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModelSummary => __isa(o, "ModelSummary");
}

/**
 * <p>Container image configuration object for the monitoring job.</p>
 */
export interface MonitoringAppSpecification {
  __type?: "MonitoringAppSpecification";
  /**
   * <p>An array of arguments for the container used to run the monitoring job.</p>
   */
  ContainerArguments?: string[];

  /**
   * <p>Specifies the entrypoint for a container used to run the monitoring job.</p>
   */
  ContainerEntrypoint?: string[];

  /**
   * <p>The container image to be run by the monitoring job.</p>
   */
  ImageUri: string | undefined;

  /**
   * <p>An Amazon S3 URI to a script that is called after analysis has been performed.
   *          Applicable only for the built-in (first party) containers.</p>
   */
  PostAnalyticsProcessorSourceUri?: string;

  /**
   * <p>An Amazon S3 URI to a script that is called per row prior to running analysis. It can
   *          base64 decode the payload and convert it into a flatted json so that the built-in container
   *          can use the converted data. Applicable only for the built-in (first party)
   *          containers.</p>
   */
  RecordPreprocessorSourceUri?: string;
}

export namespace MonitoringAppSpecification {
  export const filterSensitiveLog = (obj: MonitoringAppSpecification): any => ({
    ...obj
  });
  export const isa = (o: any): o is MonitoringAppSpecification =>
    __isa(o, "MonitoringAppSpecification");
}

/**
 * <p>Configuration for monitoring constraints and monitoring statistics. These baseline
 *          resources are compared against the results of the current job from the series of jobs
 *          scheduled to collect data periodically.</p>
 */
export interface MonitoringBaselineConfig {
  __type?: "MonitoringBaselineConfig";
  /**
   * <p>The baseline constraint file in Amazon S3 that the current monitoring job should
   *          validated against.</p>
   */
  ConstraintsResource?: MonitoringConstraintsResource;

  /**
   * <p>The baseline statistics file in Amazon S3 that the current monitoring job should be
   *          validated against.</p>
   */
  StatisticsResource?: MonitoringStatisticsResource;
}

export namespace MonitoringBaselineConfig {
  export const filterSensitiveLog = (obj: MonitoringBaselineConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is MonitoringBaselineConfig =>
    __isa(o, "MonitoringBaselineConfig");
}

/**
 * <p>Configuration for the cluster used to run model monitoring jobs.</p>
 */
export interface MonitoringClusterConfig {
  __type?: "MonitoringClusterConfig";
  /**
   * <p>The number of ML compute instances to use in the model monitoring job. For distributed
   *          processing jobs, specify a value greater than 1. The default value is 1.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The ML compute instance type for the processing job.</p>
   */
  InstanceType: ProcessingInstanceType | string | undefined;

  /**
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data
   *          on the storage volume attached to the ML compute instance(s) that run the model monitoring
   *          job.</p>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>The size of the ML storage volume, in gigabytes, that you want to provision. You must
   *          specify sufficient ML storage for your scenario.</p>
   */
  VolumeSizeInGB: number | undefined;
}

export namespace MonitoringClusterConfig {
  export const filterSensitiveLog = (obj: MonitoringClusterConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is MonitoringClusterConfig =>
    __isa(o, "MonitoringClusterConfig");
}

/**
 * <p>The constraints resource for a monitoring job.</p>
 */
export interface MonitoringConstraintsResource {
  __type?: "MonitoringConstraintsResource";
  /**
   * <p>The Amazon S3 URI for the constraints resource.</p>
   */
  S3Uri?: string;
}

export namespace MonitoringConstraintsResource {
  export const filterSensitiveLog = (
    obj: MonitoringConstraintsResource
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MonitoringConstraintsResource =>
    __isa(o, "MonitoringConstraintsResource");
}

export enum MonitoringExecutionSortKey {
  CREATION_TIME = "CreationTime",
  SCHEDULED_TIME = "ScheduledTime",
  STATUS = "Status"
}

/**
 * <p>Summary of information about the last monitoring job to run.</p>
 */
export interface MonitoringExecutionSummary {
  __type?: "MonitoringExecutionSummary";
  /**
   * <p>The time at which the monitoring job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The name of teh endpoint used to run the monitoring job.</p>
   */
  EndpointName?: string;

  /**
   * <p>Contains the reason a monitoring job failed, if it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>A timestamp that indicates the last time the monitoring job was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The status of the monitoring job.</p>
   */
  MonitoringExecutionStatus: ExecutionStatus | string | undefined;

  /**
   * <p>The name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring job.</p>
   */
  ProcessingJobArn?: string;

  /**
   * <p>The time the monitoring job was scheduled.</p>
   */
  ScheduledTime: Date | undefined;
}

export namespace MonitoringExecutionSummary {
  export const filterSensitiveLog = (obj: MonitoringExecutionSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is MonitoringExecutionSummary =>
    __isa(o, "MonitoringExecutionSummary");
}

/**
 * <p>The inputs for a monitoring job.</p>
 */
export interface MonitoringInput {
  __type?: "MonitoringInput";
  /**
   * <p>The endpoint for a monitoring job.</p>
   */
  EndpointInput: EndpointInput | undefined;
}

export namespace MonitoringInput {
  export const filterSensitiveLog = (obj: MonitoringInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is MonitoringInput =>
    __isa(o, "MonitoringInput");
}

/**
 * <p>Defines the monitoring job.</p>
 */
export interface MonitoringJobDefinition {
  __type?: "MonitoringJobDefinition";
  /**
   * <p>Baseline configuration used to validate that the data conforms to the specified
   *          constraints and statistics</p>
   */
  BaselineConfig?: MonitoringBaselineConfig;

  /**
   * <p>Sets the environment variables in the Docker container.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>Configures the monitoring job to run a specified Docker container image.</p>
   */
  MonitoringAppSpecification: MonitoringAppSpecification | undefined;

  /**
   * <p>The array of inputs for the monitoring job. Currently we support monitoring an Amazon SageMaker
   *          Endpoint.</p>
   */
  MonitoringInputs: MonitoringInput[] | undefined;

  /**
   * <p>The array of outputs from the monitoring job to be uploaded to Amazon Simple Storage
   *          Service (Amazon S3).</p>
   */
  MonitoringOutputConfig: MonitoringOutputConfig | undefined;

  /**
   * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
   *          monitoring job. In distributed processing, you specify more than one instance.</p>
   */
  MonitoringResources: MonitoringResources | undefined;

  /**
   * <p>Specifies networking options for an monitoring job.</p>
   */
  NetworkConfig?: NetworkConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on
   *          your behalf.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Specifies a time limit for how long the monitoring job is allowed to run.</p>
   */
  StoppingCondition?: MonitoringStoppingCondition;
}

export namespace MonitoringJobDefinition {
  export const filterSensitiveLog = (obj: MonitoringJobDefinition): any => ({
    ...obj
  });
  export const isa = (o: any): o is MonitoringJobDefinition =>
    __isa(o, "MonitoringJobDefinition");
}

/**
 * <p>The output object for a monitoring job.</p>
 */
export interface MonitoringOutput {
  __type?: "MonitoringOutput";
  /**
   * <p>The Amazon S3 storage location where the results of a monitoring job are saved.</p>
   */
  S3Output: MonitoringS3Output | undefined;
}

export namespace MonitoringOutput {
  export const filterSensitiveLog = (obj: MonitoringOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is MonitoringOutput =>
    __isa(o, "MonitoringOutput");
}

/**
 * <p>The output configuration for monitoring jobs.</p>
 */
export interface MonitoringOutputConfig {
  __type?: "MonitoringOutputConfig";
  /**
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model
   *          artifacts at rest using Amazon S3 server-side encryption.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Monitoring outputs for monitoring jobs. This is where the output of the periodic
   *          monitoring jobs is uploaded.</p>
   */
  MonitoringOutputs: MonitoringOutput[] | undefined;
}

export namespace MonitoringOutputConfig {
  export const filterSensitiveLog = (obj: MonitoringOutputConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is MonitoringOutputConfig =>
    __isa(o, "MonitoringOutputConfig");
}

/**
 * <p>Identifies the resources to deploy for a monitoring job.</p>
 */
export interface MonitoringResources {
  __type?: "MonitoringResources";
  /**
   * <p>The configuration for the cluster resources used to run the processing job.</p>
   */
  ClusterConfig: MonitoringClusterConfig | undefined;
}

export namespace MonitoringResources {
  export const filterSensitiveLog = (obj: MonitoringResources): any => ({
    ...obj
  });
  export const isa = (o: any): o is MonitoringResources =>
    __isa(o, "MonitoringResources");
}

/**
 * <p>Information about where and how you want to store the results of a monitoring
 *          job.</p>
 */
export interface MonitoringS3Output {
  __type?: "MonitoringS3Output";
  /**
   * <p>The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a
   *          monitoring job. LocalPath is an absolute path for the output data.</p>
   */
  LocalPath: string | undefined;

  /**
   * <p>Whether to upload the results of the monitoring job continuously or after the job
   *          completes.</p>
   */
  S3UploadMode?: ProcessingS3UploadMode | string;

  /**
   * <p>A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a
   *          monitoring job.</p>
   */
  S3Uri: string | undefined;
}

export namespace MonitoringS3Output {
  export const filterSensitiveLog = (obj: MonitoringS3Output): any => ({
    ...obj
  });
  export const isa = (o: any): o is MonitoringS3Output =>
    __isa(o, "MonitoringS3Output");
}

/**
 * <p>Configures the monitoring schedule and defines the monitoring job.</p>
 */
export interface MonitoringScheduleConfig {
  __type?: "MonitoringScheduleConfig";
  /**
   * <p>Defines the monitoring job.</p>
   */
  MonitoringJobDefinition: MonitoringJobDefinition | undefined;

  /**
   * <p>Configures the monitoring schedule.</p>
   */
  ScheduleConfig?: ScheduleConfig;
}

export namespace MonitoringScheduleConfig {
  export const filterSensitiveLog = (obj: MonitoringScheduleConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is MonitoringScheduleConfig =>
    __isa(o, "MonitoringScheduleConfig");
}

export enum MonitoringScheduleSortKey {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status"
}

/**
 * <p>Summarizes the monitoring schedule.</p>
 */
export interface MonitoringScheduleSummary {
  __type?: "MonitoringScheduleSummary";
  /**
   * <p>The creation time of the monitoring schedule.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The name of the endpoint using the monitoring schedule.</p>
   */
  EndpointName?: string;

  /**
   * <p>The last time the monitoring schedule was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;

  /**
   * <p>The name of the monitoring schedule.</p>
   */
  MonitoringScheduleName: string | undefined;

  /**
   * <p>The status of the monitoring schedule.</p>
   */
  MonitoringScheduleStatus: ScheduleStatus | string | undefined;
}

export namespace MonitoringScheduleSummary {
  export const filterSensitiveLog = (obj: MonitoringScheduleSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is MonitoringScheduleSummary =>
    __isa(o, "MonitoringScheduleSummary");
}

/**
 * <p>The statistics resource for a monitoring job.</p>
 */
export interface MonitoringStatisticsResource {
  __type?: "MonitoringStatisticsResource";
  /**
   * <p>The Amazon S3 URI for the statistics resource.</p>
   */
  S3Uri?: string;
}

export namespace MonitoringStatisticsResource {
  export const filterSensitiveLog = (
    obj: MonitoringStatisticsResource
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MonitoringStatisticsResource =>
    __isa(o, "MonitoringStatisticsResource");
}

/**
 * <p>A time limit for how long the monitoring job is allowed to run before stopping.</p>
 */
export interface MonitoringStoppingCondition {
  __type?: "MonitoringStoppingCondition";
  /**
   * <p>The maximum runtime allowed in seconds.</p>
   */
  MaxRuntimeInSeconds: number | undefined;
}

export namespace MonitoringStoppingCondition {
  export const filterSensitiveLog = (
    obj: MonitoringStoppingCondition
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MonitoringStoppingCondition =>
    __isa(o, "MonitoringStoppingCondition");
}

/**
 * <p>Defines a list of <code>NestedFilters</code> objects. To satisfy the conditions specified in the
 *         <code>NestedFilters</code> call, a resource must satisfy the conditions of all of the filters.</p>
 *          <p>For example, you could define a <code>NestedFilters</code> using the training job's
 *         <code>InputDataConfig</code> property to filter on <code>Channel</code> objects. </p>
 *          <p>A <code>NestedFilters</code> object contains multiple filters. For example, to find all training
 *       jobs whose name contains <code>train</code> and that have <code>cat/data</code> in their
 *         <code>S3Uri</code> (specified in <code>InputDataConfig</code>), you need to create a
 *         <code>NestedFilters</code> object that specifies the <code>InputDataConfig</code> property with the
 *       following <code>Filter</code> objects:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>'{Name:"InputDataConfig.ChannelName", "Operator":"EQUALS", "Value":"train"}',</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>'{Name:"InputDataConfig.DataSource.S3DataSource.S3Uri", "Operator":"CONTAINS",
 *             "Value":"cat/data"}'</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface NestedFilters {
  __type?: "NestedFilters";
  /**
   * <p>A list of filters. Each filter acts on a property. Filters must contain at least one
   *       <code>Filters</code> value. For example, a <code>NestedFilters</code> call might
   *       include a filter on the <code>PropertyName</code> parameter of the
   *       <code>InputDataConfig</code> property:
   *       <code>InputDataConfig.DataSource.S3DataSource.S3Uri</code>.</p>
   */
  Filters: Filter[] | undefined;

  /**
   * <p>The name of the property to use in the nested filters. The value must match a listed property name,
   *       such as <code>InputDataConfig</code>.</p>
   */
  NestedPropertyName: string | undefined;
}

export namespace NestedFilters {
  export const filterSensitiveLog = (obj: NestedFilters): any => ({
    ...obj
  });
  export const isa = (o: any): o is NestedFilters => __isa(o, "NestedFilters");
}

/**
 * <p>Networking options for a job, such as network traffic encryption between containers,
 *          whether to allow inbound and outbound network calls to and from containers, and the VPC
 *          subnets and security groups to use for VPC-enabled jobs.</p>
 */
export interface NetworkConfig {
  __type?: "NetworkConfig";
  /**
   * <p>Whether to allow inbound and outbound network calls to and from the containers used for
   *          the processing job.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>Specifies a VPC that your training jobs and hosted models have access to. Control
   *             access to and from your training and model containers by configuring the VPC. For more
   *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
   *                 by Using an Amazon Virtual Private Cloud</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

export namespace NetworkConfig {
  export const filterSensitiveLog = (obj: NetworkConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is NetworkConfig => __isa(o, "NetworkConfig");
}

export enum NotebookInstanceAcceleratorType {
  ML_EIA1_LARGE = "ml.eia1.large",
  ML_EIA1_MEDIUM = "ml.eia1.medium",
  ML_EIA1_XLARGE = "ml.eia1.xlarge",
  ML_EIA2_LARGE = "ml.eia2.large",
  ML_EIA2_MEDIUM = "ml.eia2.medium",
  ML_EIA2_XLARGE = "ml.eia2.xlarge"
}

export enum NotebookInstanceLifecycleConfigSortKey {
  CREATION_TIME = "CreationTime",
  LAST_MODIFIED_TIME = "LastModifiedTime",
  NAME = "Name"
}

export enum NotebookInstanceLifecycleConfigSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending"
}

/**
 * <p>Provides a summary of a notebook instance lifecycle configuration.</p>
 */
export interface NotebookInstanceLifecycleConfigSummary {
  __type?: "NotebookInstanceLifecycleConfigSummary";
  /**
   * <p>A timestamp that tells when the lifecycle configuration was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigArn: string | undefined;

  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;
}

export namespace NotebookInstanceLifecycleConfigSummary {
  export const filterSensitiveLog = (
    obj: NotebookInstanceLifecycleConfigSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotebookInstanceLifecycleConfigSummary =>
    __isa(o, "NotebookInstanceLifecycleConfigSummary");
}

/**
 * <p>Contains the notebook instance lifecycle configuration script.</p>
 *         <p>Each lifecycle configuration script has a limit of 16384 characters.</p>
 *         <p>The value of the <code>$PATH</code> environment variable that is available to both
 *             scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p>
 *         <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group
 *                 <code>/aws/sagemaker/NotebookInstances</code> in log stream
 *                 <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p>
 *         <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs
 *             for longer than 5 minutes, it fails and the notebook instance is not created or
 *             started.</p>
 *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
 *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
 */
export interface NotebookInstanceLifecycleHook {
  __type?: "NotebookInstanceLifecycleHook";
  /**
   * <p>A base64-encoded string that contains a shell script for a notebook instance lifecycle
   *             configuration.</p>
   */
  Content?: string;
}

export namespace NotebookInstanceLifecycleHook {
  export const filterSensitiveLog = (
    obj: NotebookInstanceLifecycleHook
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotebookInstanceLifecycleHook =>
    __isa(o, "NotebookInstanceLifecycleHook");
}

export enum NotebookInstanceSortKey {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status"
}

export enum NotebookInstanceSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending"
}

export enum NotebookInstanceStatus {
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending",
  Stopped = "Stopped",
  Stopping = "Stopping",
  Updating = "Updating"
}

/**
 * <p>Provides summary information for an Amazon SageMaker notebook instance.</p>
 */
export interface NotebookInstanceSummary {
  __type?: "NotebookInstanceSummary";
  /**
   * <p>An array of up to three Git repositories associated with the notebook instance. These
   *             can be either the names of Git repositories stored as resources in your account, or the
   *             URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
   *             other Git repository. These repositories are cloned at the same level as the default
   *             repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with Amazon SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];

  /**
   * <p>A timestamp that shows when the notebook instance was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Git repository associated with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
   *             other Git repository. When you open a notebook instance, it opens in the directory that
   *             contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with Amazon SageMaker
   *                 Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>The type of ML compute instance that the notebook instance is running on.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>A timestamp that shows when the notebook instance was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the notebook instance.</p>
   */
  NotebookInstanceArn: string | undefined;

  /**
   * <p>The name of a notebook instance lifecycle configuration associated with this notebook
   *             instance.</p>
   *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
   *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * <p>The name of the notebook instance that you want a summary for.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The status of the notebook instance.</p>
   */
  NotebookInstanceStatus?: NotebookInstanceStatus | string;

  /**
   * <p>The
   *             URL that you use to connect to the Jupyter instance running in your notebook instance.
   *             </p>
   */
  Url?: string;
}

export namespace NotebookInstanceSummary {
  export const filterSensitiveLog = (obj: NotebookInstanceSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotebookInstanceSummary =>
    __isa(o, "NotebookInstanceSummary");
}

export enum NotebookOutputOption {
  Allowed = "Allowed",
  Disabled = "Disabled"
}

/**
 * <p>Configures SNS notifications of available or expiring work items for work
 *             teams.</p>
 */
export interface NotificationConfiguration {
  __type?: "NotificationConfiguration";
  /**
   * <p>The ARN for the SNS topic to which notifications should be published.</p>
   */
  NotificationTopicArn?: string;
}

export namespace NotificationConfiguration {
  export const filterSensitiveLog = (obj: NotificationConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotificationConfiguration =>
    __isa(o, "NotificationConfiguration");
}

export enum ObjectiveStatus {
  Failed = "Failed",
  Pending = "Pending",
  Succeeded = "Succeeded"
}

/**
 * <p>Specifies the number of training jobs that this hyperparameter tuning job launched,
 *             categorized by the status of their objective metric. The objective metric status shows
 *             whether the
 *             final
 *             objective metric for the training job has been evaluated by the
 *             tuning job and used in the hyperparameter tuning process.</p>
 */
export interface ObjectiveStatusCounters {
  __type?: "ObjectiveStatusCounters";
  /**
   * <p>The number of training jobs whose final objective metric was not evaluated and used in
   *             the hyperparameter tuning process. This typically occurs when the training job failed or
   *             did not emit an objective metric.</p>
   */
  Failed?: number;

  /**
   * <p>The number of training jobs that are in progress and pending evaluation of their final
   *             objective metric.</p>
   */
  Pending?: number;

  /**
   * <p>The number of training jobs whose final objective metric was evaluated by the
   *             hyperparameter tuning job and used in the hyperparameter tuning process.</p>
   */
  Succeeded?: number;
}

export namespace ObjectiveStatusCounters {
  export const filterSensitiveLog = (obj: ObjectiveStatusCounters): any => ({
    ...obj
  });
  export const isa = (o: any): o is ObjectiveStatusCounters =>
    __isa(o, "ObjectiveStatusCounters");
}

export enum Operator {
  CONTAINS = "Contains",
  EQUALS = "Equals",
  EXISTS = "Exists",
  GREATER_THAN = "GreaterThan",
  GREATER_THAN_OR_EQUAL_TO = "GreaterThanOrEqualTo",
  LESS_THAN = "LessThan",
  LESS_THAN_OR_EQUAL_TO = "LessThanOrEqualTo",
  NOT_EQUALS = "NotEquals",
  NOT_EXISTS = "NotExists"
}

export enum OrderKey {
  Ascending = "Ascending",
  Descending = "Descending"
}

/**
 * <p>Contains information about the output location for the compiled model and the device
 *             (target) that the model runs on.</p>
 */
export interface OutputConfig {
  __type?: "OutputConfig";
  /**
   * <p>Identifies the S3
   *             path
   *             where you want Amazon SageMaker to store the model artifacts. For example,
   *             s3://bucket-name/key-name-prefix.</p>
   */
  S3OutputLocation: string | undefined;

  /**
   * <p>Identifies the
   *             device
   *             that you want to run your model on after it has been compiled. For example:
   *             ml_c5.</p>
   */
  TargetDevice: TargetDevice | string | undefined;
}

export namespace OutputConfig {
  export const filterSensitiveLog = (obj: OutputConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is OutputConfig => __isa(o, "OutputConfig");
}

/**
 * <p>Provides information about how to store model training results (model
 *             artifacts).</p>
 */
export interface OutputDataConfig {
  __type?: "OutputDataConfig";
  /**
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using
   *             Amazon S3 server-side encryption. The <code>KmsKeyId</code> can be any of the following
   *             formats: </p>
   *         <ul>
   *             <li>
   *                 <p>// KMS Key ID</p>
   *                 <p>
   *                     <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>// Amazon Resource Name (ARN) of a KMS Key</p>
   *                 <p>
   *                     <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>// KMS Key Alias</p>
   *                 <p>
   *                     <code>"alias/ExampleAlias"</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>// Amazon Resource Name (ARN) of a KMS Key Alias</p>
   *                 <p>
   *                     <code>"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>If you use a KMS key ID or an alias of your master key, the Amazon SageMaker execution role must
   *             include permissions to call <code>kms:Encrypt</code>. If you don't provide a KMS key ID,
   *             Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. Amazon SageMaker uses server-side
   *             encryption with KMS-managed keys for <code>OutputDataConfig</code>. If you use a bucket
   *             policy with an <code>s3:PutObject</code> permission that only allows objects with
   *             server-side encryption, set the condition key of
   *                 <code>s3:x-amz-server-side-encryption</code> to <code>"aws:kms"</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html">KMS-Managed Encryption Keys</a> in the <i>Amazon Simple Storage Service Developer
   *                 Guide.</i>
   *          </p>
   *         <p>The KMS key policy must grant permission to the IAM role that you specify in your
   *                 <code>CreateTrainingJob</code>, <code>CreateTransformJob</code>, or
   *                 <code>CreateHyperParameterTuningJob</code> requests. For more information, see
   *                 <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Using Key Policies in AWS KMS</a> in the <i>AWS Key Management Service Developer
   *                 Guide</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Identifies the S3 path where you want Amazon SageMaker to store the model artifacts. For
   *             example, <code>s3://bucket-name/key-name-prefix</code>. </p>
   */
  S3OutputPath: string | undefined;
}

export namespace OutputDataConfig {
  export const filterSensitiveLog = (obj: OutputDataConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is OutputDataConfig =>
    __isa(o, "OutputDataConfig");
}

/**
 * <p>Defines the possible values for categorical, continuous, and integer hyperparameters
 *             to be used by an algorithm.</p>
 */
export interface ParameterRange {
  __type?: "ParameterRange";
  /**
   * <p>A <code>CategoricalParameterRangeSpecification</code> object that defines the possible
   *             values for a categorical hyperparameter.</p>
   */
  CategoricalParameterRangeSpecification?: CategoricalParameterRangeSpecification;

  /**
   * <p>A <code>ContinuousParameterRangeSpecification</code> object that defines the possible
   *             values for a continuous hyperparameter.</p>
   */
  ContinuousParameterRangeSpecification?: ContinuousParameterRangeSpecification;

  /**
   * <p>A <code>IntegerParameterRangeSpecification</code> object that defines the possible
   *             values for an integer hyperparameter.</p>
   */
  IntegerParameterRangeSpecification?: IntegerParameterRangeSpecification;
}

export namespace ParameterRange {
  export const filterSensitiveLog = (obj: ParameterRange): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParameterRange =>
    __isa(o, "ParameterRange");
}

/**
 * <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a
 *             hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs
 *             with hyperparameter values within these ranges to find the combination of values that
 *             result in the training job with the best performance as measured by the objective metric
 *             of the hyperparameter tuning job.</p>
 *         <note>
 *             <p>You can specify a maximum of 20 hyperparameters that a hyperparameter tuning job
 *                 can search over. Every possible value of a categorical parameter range counts
 *                 against this limit.</p>
 *         </note>
 */
export interface ParameterRanges {
  __type?: "ParameterRanges";
  /**
   * <p>The array of <a>CategoricalParameterRange</a> objects that specify ranges
   *             of categorical hyperparameters that a hyperparameter tuning job searches.</p>
   */
  CategoricalParameterRanges?: CategoricalParameterRange[];

  /**
   * <p>The array of <a>ContinuousParameterRange</a> objects that specify ranges of
   *             continuous hyperparameters that a hyperparameter tuning job searches.</p>
   */
  ContinuousParameterRanges?: ContinuousParameterRange[];

  /**
   * <p>The array of <a>IntegerParameterRange</a> objects that specify ranges of
   *             integer hyperparameters that a hyperparameter tuning job searches.</p>
   */
  IntegerParameterRanges?: IntegerParameterRange[];
}

export namespace ParameterRanges {
  export const filterSensitiveLog = (obj: ParameterRanges): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParameterRanges =>
    __isa(o, "ParameterRanges");
}

export enum ParameterType {
  CATEGORICAL = "Categorical",
  CONTINUOUS = "Continuous",
  FREE_TEXT = "FreeText",
  INTEGER = "Integer"
}

/**
 * <p>The trial that a trial component is associated with and the experiment the trial is part
 *       of. A component might not be associated with a trial. A component can be
 *       associated with multiple trials.</p>
 */
export interface Parent {
  __type?: "Parent";
  /**
   * <p>The name of the experiment.</p>
   */
  ExperimentName?: string;

  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;
}

export namespace Parent {
  export const filterSensitiveLog = (obj: Parent): any => ({
    ...obj
  });
  export const isa = (o: any): o is Parent => __isa(o, "Parent");
}

/**
 * <p>A previously completed or stopped hyperparameter tuning job to be used as a starting
 *             point for a new hyperparameter tuning job.</p>
 */
export interface ParentHyperParameterTuningJob {
  __type?: "ParentHyperParameterTuningJob";
  /**
   * <p>The name of the hyperparameter tuning job to be used as a starting point for a new
   *             hyperparameter tuning job.</p>
   */
  HyperParameterTuningJobName?: string;
}

export namespace ParentHyperParameterTuningJob {
  export const filterSensitiveLog = (
    obj: ParentHyperParameterTuningJob
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParentHyperParameterTuningJob =>
    __isa(o, "ParentHyperParameterTuningJob");
}

export enum ProblemType {
  BINARY_CLASSIFICATION = "BinaryClassification",
  MULTICLASS_CLASSIFICATION = "MulticlassClassification",
  REGRESSION = "Regression"
}

/**
 * <p>Configuration for the cluster used to run a processing job.</p>
 */
export interface ProcessingClusterConfig {
  __type?: "ProcessingClusterConfig";
  /**
   * <p>The number of ML compute instances to use in the processing job. For distributed
   *             processing jobs, specify a value greater than 1. The default value is 1.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The ML compute instance type for the processing job.</p>
   */
  InstanceType: ProcessingInstanceType | string | undefined;

  /**
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the
   *             storage volume attached to the ML compute instance(s) that run the processing job.
   *         </p>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>The size of the ML storage volume in gigabytes that you want to provision. You must
   *             specify sufficient ML storage for your scenario.</p>
   */
  VolumeSizeInGB: number | undefined;
}

export namespace ProcessingClusterConfig {
  export const filterSensitiveLog = (obj: ProcessingClusterConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProcessingClusterConfig =>
    __isa(o, "ProcessingClusterConfig");
}

/**
 * <p>The inputs for a processing job.</p>
 */
export interface ProcessingInput {
  __type?: "ProcessingInput";
  /**
   * <p>The name of the inputs for the processing job.</p>
   */
  InputName: string | undefined;

  /**
   * <p>The S3 inputs for the processing job. </p>
   */
  S3Input: ProcessingS3Input | undefined;
}

export namespace ProcessingInput {
  export const filterSensitiveLog = (obj: ProcessingInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProcessingInput =>
    __isa(o, "ProcessingInput");
}

export enum ProcessingInstanceType {
  ML_C4_2XLARGE = "ml.c4.2xlarge",
  ML_C4_4XLARGE = "ml.c4.4xlarge",
  ML_C4_8XLARGE = "ml.c4.8xlarge",
  ML_C4_XLARGE = "ml.c4.xlarge",
  ML_C5_18XLARGE = "ml.c5.18xlarge",
  ML_C5_2XLARGE = "ml.c5.2xlarge",
  ML_C5_4XLARGE = "ml.c5.4xlarge",
  ML_C5_9XLARGE = "ml.c5.9xlarge",
  ML_C5_XLARGE = "ml.c5.xlarge",
  ML_M4_10XLARGE = "ml.m4.10xlarge",
  ML_M4_16XLARGE = "ml.m4.16xlarge",
  ML_M4_2XLARGE = "ml.m4.2xlarge",
  ML_M4_4XLARGE = "ml.m4.4xlarge",
  ML_M4_XLARGE = "ml.m4.xlarge",
  ML_M5_12XLARGE = "ml.m5.12xlarge",
  ML_M5_24XLARGE = "ml.m5.24xlarge",
  ML_M5_2XLARGE = "ml.m5.2xlarge",
  ML_M5_4XLARGE = "ml.m5.4xlarge",
  ML_M5_LARGE = "ml.m5.large",
  ML_M5_XLARGE = "ml.m5.xlarge",
  ML_P2_16XLARGE = "ml.p2.16xlarge",
  ML_P2_8XLARGE = "ml.p2.8xlarge",
  ML_P2_XLARGE = "ml.p2.xlarge",
  ML_P3_16XLARGE = "ml.p3.16xlarge",
  ML_P3_2XLARGE = "ml.p3.2xlarge",
  ML_P3_8XLARGE = "ml.p3.8xlarge",
  ML_R5_12XLARGE = "ml.r5.12xlarge",
  ML_R5_16XLARGE = "ml.r5.16xlarge",
  ML_R5_24XLARGE = "ml.r5.24xlarge",
  ML_R5_2XLARGE = "ml.r5.2xlarge",
  ML_R5_4XLARGE = "ml.r5.4xlarge",
  ML_R5_8XLARGE = "ml.r5.8xlarge",
  ML_R5_LARGE = "ml.r5.large",
  ML_R5_XLARGE = "ml.r5.xlarge",
  ML_T3_2XLARGE = "ml.t3.2xlarge",
  ML_T3_LARGE = "ml.t3.large",
  ML_T3_MEDIUM = "ml.t3.medium",
  ML_T3_XLARGE = "ml.t3.xlarge"
}

export enum ProcessingJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping"
}

/**
 * <p>Summary of information about a processing job.</p>
 */
export interface ProcessingJobSummary {
  __type?: "ProcessingJobSummary";
  /**
   * <p>The time at which the processing job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>An optional string, up to one KB in size, that contains metadata from the processing
   *             container when the processing job exits.</p>
   */
  ExitMessage?: string;

  /**
   * <p>A string, up to one KB in size, that contains the reason a processing job failed, if
   *             it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>A timestamp that indicates the last time the processing job was modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The time at which the processing job completed.</p>
   */
  ProcessingEndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the processing job..</p>
   */
  ProcessingJobArn: string | undefined;

  /**
   * <p>The name of the processing job.</p>
   */
  ProcessingJobName: string | undefined;

  /**
   * <p>The status of the processing job.</p>
   */
  ProcessingJobStatus: ProcessingJobStatus | string | undefined;
}

export namespace ProcessingJobSummary {
  export const filterSensitiveLog = (obj: ProcessingJobSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProcessingJobSummary =>
    __isa(o, "ProcessingJobSummary");
}

/**
 * <p>Describes the results of a processing job.</p>
 */
export interface ProcessingOutput {
  __type?: "ProcessingOutput";
  /**
   * <p>The name for the processing job output.</p>
   */
  OutputName: string | undefined;

  /**
   * <p>Configuration for processing job outputs in Amazon S3.</p>
   */
  S3Output: ProcessingS3Output | undefined;
}

export namespace ProcessingOutput {
  export const filterSensitiveLog = (obj: ProcessingOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProcessingOutput =>
    __isa(o, "ProcessingOutput");
}

/**
 * <p>The output configuration for the processing job.</p>
 */
export interface ProcessingOutputConfig {
  __type?: "ProcessingOutputConfig";
  /**
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the processing
   *             job output. <code>KmsKeyId</code> can be an ID of a KMS key, ARN of a KMS key, alias of
   *             a KMS key, or alias of a KMS key. The <code>KmsKeyId</code> is applied to all
   *             outputs.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Output configuration information for a processing job.</p>
   */
  Outputs: ProcessingOutput[] | undefined;
}

export namespace ProcessingOutputConfig {
  export const filterSensitiveLog = (obj: ProcessingOutputConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProcessingOutputConfig =>
    __isa(o, "ProcessingOutputConfig");
}

/**
 * <p>Identifies the resources, ML compute instances, and ML storage volumes to deploy for a
 *             processing job. In distributed training, you specify more than one instance.</p>
 */
export interface ProcessingResources {
  __type?: "ProcessingResources";
  /**
   * <p>The configuration for the resources in a cluster used to run the processing
   *             job.</p>
   */
  ClusterConfig: ProcessingClusterConfig | undefined;
}

export namespace ProcessingResources {
  export const filterSensitiveLog = (obj: ProcessingResources): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProcessingResources =>
    __isa(o, "ProcessingResources");
}

export enum ProcessingS3CompressionType {
  GZIP = "Gzip",
  NONE = "None"
}

export enum ProcessingS3DataDistributionType {
  FULLYREPLICATED = "FullyReplicated",
  SHARDEDBYS3KEY = "ShardedByS3Key"
}

export enum ProcessingS3DataType {
  MANIFEST_FILE = "ManifestFile",
  S3_PREFIX = "S3Prefix"
}

/**
 * <p>Information about where and how you want to obtain the inputs for an processing
 *             job.</p>
 */
export interface ProcessingS3Input {
  __type?: "ProcessingS3Input";
  /**
   * <p>The local path to the Amazon S3 bucket where you want Amazon SageMaker to download the inputs to
   *             run a processing job. <code>LocalPath</code> is an absolute path to the input
   *             data.</p>
   */
  LocalPath: string | undefined;

  /**
   * <p>Whether to use <code>Gzip</code> compresion for Amazon S3 storage.</p>
   */
  S3CompressionType?: ProcessingS3CompressionType | string;

  /**
   * <p>Whether the data stored in Amazon S3 is <code>FullyReplicated</code> or
   *                 <code>ShardedByS3Key</code>.</p>
   */
  S3DataDistributionType?: ProcessingS3DataDistributionType | string;

  /**
   * <p>Whether you use an <code>S3Prefix</code> or a <code>ManifestFile</code> for
   *             the data type. If you choose <code>S3Prefix</code>, <code>S3Uri</code> identifies a key
   *             name prefix. Amazon SageMaker uses all objects with the specified key name prefix for the processing
   *             job. If you choose <code>ManifestFile</code>, <code>S3Uri</code> identifies an object
   *             that is a manifest file containing a list of object keys that you want Amazon SageMaker to use for
   *             the processing job.</p>
   */
  S3DataType: ProcessingS3DataType | string | undefined;

  /**
   * <p>Wether to use <code>File</code> or <code>Pipe</code> input mode. In
   *                 <code>File</code> mode, Amazon SageMaker copies the data from the input source onto the local
   *             Amazon Elastic Block Store (Amazon EBS) volumes before starting your training algorithm.
   *             This is the most commonly used input mode. In <code>Pipe</code> mode, Amazon SageMaker streams input
   *             data from the source directly to your algorithm without using the EBS volume.</p>
   */
  S3InputMode: ProcessingS3InputMode | string | undefined;

  /**
   * <p>The URI for the Amazon S3 storage where you want Amazon SageMaker to download the artifacts needed
   *             to run a processing job.</p>
   */
  S3Uri: string | undefined;
}

export namespace ProcessingS3Input {
  export const filterSensitiveLog = (obj: ProcessingS3Input): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProcessingS3Input =>
    __isa(o, "ProcessingS3Input");
}

export enum ProcessingS3InputMode {
  FILE = "File",
  PIPE = "Pipe"
}

/**
 * <p>Information about where and how you want to store the results of an
 *             processing job.</p>
 */
export interface ProcessingS3Output {
  __type?: "ProcessingS3Output";
  /**
   * <p>The local path to the Amazon S3 bucket where you want Amazon SageMaker to save the results of an
   *             processing job. <code>LocalPath</code> is an absolute path to the input data.</p>
   */
  LocalPath: string | undefined;

  /**
   * <p>Whether to upload the results of the processing job continuously or after the job
   *             completes.</p>
   */
  S3UploadMode: ProcessingS3UploadMode | string | undefined;

  /**
   * <p>A URI that identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of
   *             a processing job.</p>
   */
  S3Uri: string | undefined;
}

export namespace ProcessingS3Output {
  export const filterSensitiveLog = (obj: ProcessingS3Output): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProcessingS3Output =>
    __isa(o, "ProcessingS3Output");
}

export enum ProcessingS3UploadMode {
  CONTINUOUS = "Continuous",
  END_OF_JOB = "EndOfJob"
}

/**
 * <p>Specifies a time limit for how long the processing job is allowed to run.</p>
 */
export interface ProcessingStoppingCondition {
  __type?: "ProcessingStoppingCondition";
  /**
   * <p>Specifies the maximum runtime in seconds.</p>
   */
  MaxRuntimeInSeconds: number | undefined;
}

export namespace ProcessingStoppingCondition {
  export const filterSensitiveLog = (
    obj: ProcessingStoppingCondition
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProcessingStoppingCondition =>
    __isa(o, "ProcessingStoppingCondition");
}

/**
 * <p>Identifies
 *             a model that you want to host and the resources to deploy for hosting
 *             it. If you are deploying multiple models, tell Amazon SageMaker how to distribute
 *             traffic among the models by specifying variant weights. </p>
 */
export interface ProductionVariant {
  __type?: "ProductionVariant";
  /**
   * <p>The size of the Elastic Inference (EI) instance to use for the production variant. EI
   *             instances provide on-demand GPU computing for inference. For more information, see
   *                 <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic
   *                 Inference in Amazon SageMaker</a>.</p>
   */
  AcceleratorType?: ProductionVariantAcceleratorType | string;

  /**
   * <p>Number of instances to launch initially.</p>
   */
  InitialInstanceCount: number | undefined;

  /**
   * <p>Determines initial traffic distribution among all of the models that you specify in
   *             the endpoint configuration. The traffic to a production variant is determined by the
   *             ratio of the <code>VariantWeight</code> to the sum of all <code>VariantWeight</code>
   *             values across all ProductionVariants. If unspecified, it defaults to 1.0.
   *             </p>
   */
  InitialVariantWeight?: number;

  /**
   * <p>The ML compute instance type.</p>
   */
  InstanceType: ProductionVariantInstanceType | string | undefined;

  /**
   * <p>The name of the model that you want to host. This is the name that you specified
   *             when creating the model.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The name of the production variant.</p>
   */
  VariantName: string | undefined;
}

export namespace ProductionVariant {
  export const filterSensitiveLog = (obj: ProductionVariant): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProductionVariant =>
    __isa(o, "ProductionVariant");
}

export enum ProductionVariantAcceleratorType {
  ML_EIA1_LARGE = "ml.eia1.large",
  ML_EIA1_MEDIUM = "ml.eia1.medium",
  ML_EIA1_XLARGE = "ml.eia1.xlarge",
  ML_EIA2_LARGE = "ml.eia2.large",
  ML_EIA2_MEDIUM = "ml.eia2.medium",
  ML_EIA2_XLARGE = "ml.eia2.xlarge"
}

export enum ProductionVariantInstanceType {
  ML_C4_2XLARGE = "ml.c4.2xlarge",
  ML_C4_4XLARGE = "ml.c4.4xlarge",
  ML_C4_8XLARGE = "ml.c4.8xlarge",
  ML_C4_LARGE = "ml.c4.large",
  ML_C4_XLARGE = "ml.c4.xlarge",
  ML_C5D_18XLARGE = "ml.c5d.18xlarge",
  ML_C5D_2XLARGE = "ml.c5d.2xlarge",
  ML_C5D_4XLARGE = "ml.c5d.4xlarge",
  ML_C5D_9XLARGE = "ml.c5d.9xlarge",
  ML_C5D_LARGE = "ml.c5d.large",
  ML_C5D_XLARGE = "ml.c5d.xlarge",
  ML_C5_18XLARGE = "ml.c5.18xlarge",
  ML_C5_2XLARGE = "ml.c5.2xlarge",
  ML_C5_4XLARGE = "ml.c5.4xlarge",
  ML_C5_9XLARGE = "ml.c5.9xlarge",
  ML_C5_LARGE = "ml.c5.large",
  ML_C5_XLARGE = "ml.c5.xlarge",
  ML_G4DN_12XLARGE = "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE = "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE = "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE = "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE = "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE = "ml.g4dn.xlarge",
  ML_INF1_24XLARGE = "ml.inf1.24xlarge",
  ML_INF1_2XLARGE = "ml.inf1.2xlarge",
  ML_INF1_6XLARGE = "ml.inf1.6xlarge",
  ML_INF1_XLARGE = "ml.inf1.xlarge",
  ML_M4_10XLARGE = "ml.m4.10xlarge",
  ML_M4_16XLARGE = "ml.m4.16xlarge",
  ML_M4_2XLARGE = "ml.m4.2xlarge",
  ML_M4_4XLARGE = "ml.m4.4xlarge",
  ML_M4_XLARGE = "ml.m4.xlarge",
  ML_M5D_12XLARGE = "ml.m5d.12xlarge",
  ML_M5D_24XLARGE = "ml.m5d.24xlarge",
  ML_M5D_2XLARGE = "ml.m5d.2xlarge",
  ML_M5D_4XLARGE = "ml.m5d.4xlarge",
  ML_M5D_LARGE = "ml.m5d.large",
  ML_M5D_XLARGE = "ml.m5d.xlarge",
  ML_M5_12XLARGE = "ml.m5.12xlarge",
  ML_M5_24XLARGE = "ml.m5.24xlarge",
  ML_M5_2XLARGE = "ml.m5.2xlarge",
  ML_M5_4XLARGE = "ml.m5.4xlarge",
  ML_M5_LARGE = "ml.m5.large",
  ML_M5_XLARGE = "ml.m5.xlarge",
  ML_P2_16XLARGE = "ml.p2.16xlarge",
  ML_P2_8XLARGE = "ml.p2.8xlarge",
  ML_P2_XLARGE = "ml.p2.xlarge",
  ML_P3_16XLARGE = "ml.p3.16xlarge",
  ML_P3_2XLARGE = "ml.p3.2xlarge",
  ML_P3_8XLARGE = "ml.p3.8xlarge",
  ML_R5D_12XLARGE = "ml.r5d.12xlarge",
  ML_R5D_24XLARGE = "ml.r5d.24xlarge",
  ML_R5D_2XLARGE = "ml.r5d.2xlarge",
  ML_R5D_4XLARGE = "ml.r5d.4xlarge",
  ML_R5D_LARGE = "ml.r5d.large",
  ML_R5D_XLARGE = "ml.r5d.xlarge",
  ML_R5_12XLARGE = "ml.r5.12xlarge",
  ML_R5_24XLARGE = "ml.r5.24xlarge",
  ML_R5_2XLARGE = "ml.r5.2xlarge",
  ML_R5_4XLARGE = "ml.r5.4xlarge",
  ML_R5_LARGE = "ml.r5.large",
  ML_R5_XLARGE = "ml.r5.xlarge",
  ML_T2_2XLARGE = "ml.t2.2xlarge",
  ML_T2_LARGE = "ml.t2.large",
  ML_T2_MEDIUM = "ml.t2.medium",
  ML_T2_XLARGE = "ml.t2.xlarge"
}

/**
 * <p>Describes weight and capacities for a production variant associated with an
 *             endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code>
 *             API and the endpoint status is <code>Updating</code>, you get different desired and
 *             current values. </p>
 */
export interface ProductionVariantSummary {
  __type?: "ProductionVariantSummary";
  /**
   * <p>The number of instances associated with the variant.</p>
   */
  CurrentInstanceCount?: number;

  /**
   * <p>The weight associated with the variant.</p>
   */
  CurrentWeight?: number;

  /**
   * <p>An array of <code>DeployedImage</code> objects that specify the Amazon EC2 Container Registry paths of the
   *             inference images deployed on instances of this <code>ProductionVariant</code>.</p>
   */
  DeployedImages?: DeployedImage[];

  /**
   * <p>The number of instances requested in the
   *                 <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   */
  DesiredInstanceCount?: number;

  /**
   * <p>The requested weight, as specified in the
   *                 <code>UpdateEndpointWeightsAndCapacities</code> request. </p>
   */
  DesiredWeight?: number;

  /**
   * <p>The name of the variant.</p>
   */
  VariantName: string | undefined;
}

export namespace ProductionVariantSummary {
  export const filterSensitiveLog = (obj: ProductionVariantSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProductionVariantSummary =>
    __isa(o, "ProductionVariantSummary");
}

/**
 * <p>Part of the <code>SuggestionQuery</code> type. Specifies a hint for retrieving property
 *       names that begin with the specified text.</p>
 */
export interface PropertyNameQuery {
  __type?: "PropertyNameQuery";
  /**
   * <p>Text that begins a property's name.</p>
   */
  PropertyNameHint: string | undefined;
}

export namespace PropertyNameQuery {
  export const filterSensitiveLog = (obj: PropertyNameQuery): any => ({
    ...obj
  });
  export const isa = (o: any): o is PropertyNameQuery =>
    __isa(o, "PropertyNameQuery");
}

/**
 * <p>A property name returned from a <code>GetSearchSuggestions</code> call that specifies
 *       a value in the <code>PropertyNameQuery</code> field.</p>
 */
export interface PropertyNameSuggestion {
  __type?: "PropertyNameSuggestion";
  /**
   * <p>A suggested property name based on what you entered in the search textbox in the Amazon SageMaker
   *       console.</p>
   */
  PropertyName?: string;
}

export namespace PropertyNameSuggestion {
  export const filterSensitiveLog = (obj: PropertyNameSuggestion): any => ({
    ...obj
  });
  export const isa = (o: any): o is PropertyNameSuggestion =>
    __isa(o, "PropertyNameSuggestion");
}

/**
 * <p>Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed. </p>
 *         <p>Use one of the following prices for bounding box tasks. Prices are in US dollars and
 *             should be based on the complexity of the task; the longer it takes in your initial
 *             testing, the more you should offer.</p>
 *         <ul>
 *             <li>
 *                 <p>0.036</p>
 *             </li>
 *             <li>
 *                 <p>0.048</p>
 *             </li>
 *             <li>
 *                 <p>0.060</p>
 *             </li>
 *             <li>
 *                 <p>0.072</p>
 *             </li>
 *             <li>
 *                 <p>0.120</p>
 *             </li>
 *             <li>
 *                 <p>0.240</p>
 *             </li>
 *             <li>
 *                 <p>0.360</p>
 *             </li>
 *             <li>
 *                 <p>0.480</p>
 *             </li>
 *             <li>
 *                 <p>0.600</p>
 *             </li>
 *             <li>
 *                 <p>0.720</p>
 *             </li>
 *             <li>
 *                 <p>0.840</p>
 *             </li>
 *             <li>
 *                 <p>0.960</p>
 *             </li>
 *             <li>
 *                 <p>1.080</p>
 *             </li>
 *             <li>
 *                 <p>1.200</p>
 *             </li>
 *          </ul>
 *         <p>Use one of the following prices for image classification, text classification, and
 *             custom tasks. Prices are in US dollars.</p>
 *         <ul>
 *             <li>
 *                 <p>0.012</p>
 *             </li>
 *             <li>
 *                 <p>0.024</p>
 *             </li>
 *             <li>
 *                 <p>0.036</p>
 *             </li>
 *             <li>
 *                 <p>0.048</p>
 *             </li>
 *             <li>
 *                 <p>0.060</p>
 *             </li>
 *             <li>
 *                 <p>0.072</p>
 *             </li>
 *             <li>
 *                 <p>0.120</p>
 *             </li>
 *             <li>
 *                 <p>0.240</p>
 *             </li>
 *             <li>
 *                 <p>0.360</p>
 *             </li>
 *             <li>
 *                 <p>0.480</p>
 *             </li>
 *             <li>
 *                 <p>0.600</p>
 *             </li>
 *             <li>
 *                 <p>0.720</p>
 *             </li>
 *             <li>
 *                 <p>0.840</p>
 *             </li>
 *             <li>
 *                 <p>0.960</p>
 *             </li>
 *             <li>
 *                 <p>1.080</p>
 *             </li>
 *             <li>
 *                 <p>1.200</p>
 *             </li>
 *          </ul>
 *         <p>Use one of the following prices for semantic segmentation tasks. Prices are in US
 *             dollars.</p>
 *         <ul>
 *             <li>
 *                 <p>0.840</p>
 *             </li>
 *             <li>
 *                 <p>0.960</p>
 *             </li>
 *             <li>
 *                 <p>1.080</p>
 *             </li>
 *             <li>
 *                 <p>1.200</p>
 *             </li>
 *          </ul>
 *         <p>Use one of the following prices for Textract AnalyzeDocument Important Form Key Amazon
 *             Augmented AI review tasks. Prices are in US dollars.</p>
 *         <ul>
 *             <li>
 *                 <p>2.400 </p>
 *             </li>
 *             <li>
 *                 <p>2.280 </p>
 *             </li>
 *             <li>
 *                 <p>2.160 </p>
 *             </li>
 *             <li>
 *                 <p>2.040 </p>
 *             </li>
 *             <li>
 *                 <p>1.920 </p>
 *             </li>
 *             <li>
 *                 <p>1.800 </p>
 *             </li>
 *             <li>
 *                 <p>1.680 </p>
 *             </li>
 *             <li>
 *                 <p>1.560 </p>
 *             </li>
 *             <li>
 *                 <p>1.440 </p>
 *             </li>
 *             <li>
 *                 <p>1.320 </p>
 *             </li>
 *             <li>
 *                 <p>1.200 </p>
 *             </li>
 *             <li>
 *                 <p>1.080 </p>
 *             </li>
 *             <li>
 *                 <p>0.960 </p>
 *             </li>
 *             <li>
 *                 <p>0.840 </p>
 *             </li>
 *             <li>
 *                 <p>0.720 </p>
 *             </li>
 *             <li>
 *                 <p>0.600 </p>
 *             </li>
 *             <li>
 *                 <p>0.480 </p>
 *             </li>
 *             <li>
 *                 <p>0.360 </p>
 *             </li>
 *             <li>
 *                 <p>0.240 </p>
 *             </li>
 *             <li>
 *                 <p>0.120 </p>
 *             </li>
 *             <li>
 *                 <p>0.072 </p>
 *             </li>
 *             <li>
 *                 <p>0.060 </p>
 *             </li>
 *             <li>
 *                 <p>0.048 </p>
 *             </li>
 *             <li>
 *                 <p>0.036 </p>
 *             </li>
 *             <li>
 *                 <p>0.024 </p>
 *             </li>
 *             <li>
 *                 <p>0.012 </p>
 *             </li>
 *          </ul>
 *         <p>Use one of the following prices for Rekognition DetectModerationLabels Amazon
 *             Augmented AI review tasks. Prices are in US dollars.</p>
 *         <ul>
 *             <li>
 *                 <p>1.200 </p>
 *             </li>
 *             <li>
 *                 <p>1.080 </p>
 *             </li>
 *             <li>
 *                 <p>0.960 </p>
 *             </li>
 *             <li>
 *                 <p>0.840 </p>
 *             </li>
 *             <li>
 *                 <p>0.720 </p>
 *             </li>
 *             <li>
 *                 <p>0.600 </p>
 *             </li>
 *             <li>
 *                 <p>0.480 </p>
 *             </li>
 *             <li>
 *                 <p>0.360 </p>
 *             </li>
 *             <li>
 *                 <p>0.240 </p>
 *             </li>
 *             <li>
 *                 <p>0.120 </p>
 *             </li>
 *             <li>
 *                 <p>0.072 </p>
 *             </li>
 *             <li>
 *                 <p>0.060 </p>
 *             </li>
 *             <li>
 *                 <p>0.048 </p>
 *             </li>
 *             <li>
 *                 <p>0.036 </p>
 *             </li>
 *             <li>
 *                 <p>0.024 </p>
 *             </li>
 *             <li>
 *                 <p>0.012 </p>
 *             </li>
 *          </ul>
 *         <p>Use one of the following prices for Amazon Augmented AI custom human review tasks.
 *             Prices are in US dollars.</p>
 *         <ul>
 *             <li>
 *                 <p>1.200 </p>
 *             </li>
 *             <li>
 *                 <p>1.080 </p>
 *             </li>
 *             <li>
 *                 <p>0.960 </p>
 *             </li>
 *             <li>
 *                 <p>0.840 </p>
 *             </li>
 *             <li>
 *                 <p>0.720 </p>
 *             </li>
 *             <li>
 *                 <p>0.600 </p>
 *             </li>
 *             <li>
 *                 <p>0.480 </p>
 *             </li>
 *             <li>
 *                 <p>0.360 </p>
 *             </li>
 *             <li>
 *                 <p>0.240 </p>
 *             </li>
 *             <li>
 *                 <p>0.120 </p>
 *             </li>
 *             <li>
 *                 <p>0.072 </p>
 *             </li>
 *             <li>
 *                 <p>0.060 </p>
 *             </li>
 *             <li>
 *                 <p>0.048 </p>
 *             </li>
 *             <li>
 *                 <p>0.036 </p>
 *             </li>
 *             <li>
 *                 <p>0.024 </p>
 *             </li>
 *             <li>
 *                 <p>0.012 </p>
 *             </li>
 *          </ul>
 */
export interface PublicWorkforceTaskPrice {
  __type?: "PublicWorkforceTaskPrice";
  /**
   * <p>Defines the amount of money paid to an Amazon Mechanical Turk worker in United States dollars.</p>
   */
  AmountInUsd?: USD;
}

export namespace PublicWorkforceTaskPrice {
  export const filterSensitiveLog = (obj: PublicWorkforceTaskPrice): any => ({
    ...obj
  });
  export const isa = (o: any): o is PublicWorkforceTaskPrice =>
    __isa(o, "PublicWorkforceTaskPrice");
}

export enum RecordWrapper {
  NONE = "None",
  RECORDIO = "RecordIO"
}

/**
 * <p>Contains input values for a task.</p>
 */
export interface RenderableTask {
  __type?: "RenderableTask";
  /**
   * <p>A JSON object that contains values for the variables defined in the template. It is
   *             made available to the template under the substitution variable <code>task.input</code>.
   *             For example, if you define a variable <code>task.input.text</code> in your template, you
   *             can supply the variable in the JSON object as <code>"text": "sample text"</code>.</p>
   */
  Input: string | undefined;
}

export namespace RenderableTask {
  export const filterSensitiveLog = (obj: RenderableTask): any => ({
    ...obj
  });
  export const isa = (o: any): o is RenderableTask =>
    __isa(o, "RenderableTask");
}

/**
 * <p>A description of an error that occurred while rendering the template.</p>
 */
export interface RenderingError {
  __type?: "RenderingError";
  /**
   * <p>A unique identifier for a specific class of errors.</p>
   */
  Code: string | undefined;

  /**
   * <p>A human-readable message describing the error.</p>
   */
  Message: string | undefined;
}

export namespace RenderingError {
  export const filterSensitiveLog = (obj: RenderingError): any => ({
    ...obj
  });
  export const isa = (o: any): o is RenderingError =>
    __isa(o, "RenderingError");
}

export interface RenderUiTemplateRequest {
  __type?: "RenderUiTemplateRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that has access to the S3 objects that are used by the
   *             template.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>A <code>RenderableTask</code> object containing a representative task to
   *             render.</p>
   */
  Task: RenderableTask | undefined;

  /**
   * <p>A <code>Template</code> object containing the worker UI template to render.</p>
   */
  UiTemplate: UiTemplate | undefined;
}

export namespace RenderUiTemplateRequest {
  export const filterSensitiveLog = (obj: RenderUiTemplateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RenderUiTemplateRequest =>
    __isa(o, "RenderUiTemplateRequest");
}

export interface RenderUiTemplateResponse {
  __type?: "RenderUiTemplateResponse";
  /**
   * <p>A list of one or more <code>RenderingError</code> objects if any were encountered
   *             while rendering the template. If there were no errors, the list is empty.</p>
   */
  Errors: RenderingError[] | undefined;

  /**
   * <p>A Liquid template that renders the HTML for the worker UI.</p>
   */
  RenderedContent: string | undefined;
}

export namespace RenderUiTemplateResponse {
  export const filterSensitiveLog = (obj: RenderUiTemplateResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is RenderUiTemplateResponse =>
    __isa(o, "RenderUiTemplateResponse");
}

/**
 * <p>The resolved attributes.</p>
 */
export interface ResolvedAttributes {
  __type?: "ResolvedAttributes";
  /**
   * <p>Applies a metric to minimize or maximize for the job's objective.</p>
   */
  AutoMLJobObjective?: AutoMLJobObjective;

  /**
   * <p>How long a job is allowed to run, or how many candidates a job is allowed to generate.</p>
   */
  CompletionCriteria?: AutoMLJobCompletionCriteria;

  /**
   * <p>The problem type.</p>
   */
  ProblemType?: ProblemType | string;
}

export namespace ResolvedAttributes {
  export const filterSensitiveLog = (obj: ResolvedAttributes): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResolvedAttributes =>
    __isa(o, "ResolvedAttributes");
}

/**
 * <p>Describes the resources, including ML compute instances and ML storage volumes, to
 *             use for model training. </p>
 */
export interface ResourceConfig {
  __type?: "ResourceConfig";
  /**
   * <p>The number of ML compute instances to use. For distributed training, provide a
   *             value greater than 1. </p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The ML compute instance type. </p>
   */
  InstanceType: TrainingInstanceType | string | undefined;

  /**
   * <p>The AWS KMS key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML
   *             compute instance(s) that run the training job.</p>
   *         <note>
   *             <p>Certain Nitro-based instances include local storage, dependent on the instance
   *                 type. Local storage volumes are encrypted using a hardware module on the instance.
   *                 You can't request a <code>VolumeKmsKeyId</code> when using an instance type with
   *                 local storage.</p>
   *             <p>For a list of instance types that support local instance storage, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes">Instance Store Volumes</a>.</p>
   *             <p>For more information about local instance storage encryption, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html">SSD
   *                     Instance Store Volumes</a>.</p>
   *         </note>
   *         <p>The <code>VolumeKmsKeyId</code> can be in any of the following formats:</p>
   *         <ul>
   *             <li>
   *                 <p>// KMS Key ID</p>
   *                 <p>
   *                     <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>// Amazon Resource Name (ARN) of a KMS Key</p>
   *                 <p>
   *                     <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>The size of the ML storage volume that you want to provision. </p>
   *         <p>ML storage volumes store model artifacts and incremental states. Training
   *             algorithms might also use the ML storage volume for scratch space. If you want to store
   *             the training data in the ML storage volume, choose <code>File</code> as the
   *                 <code>TrainingInputMode</code> in the algorithm specification. </p>
   *         <p>You must specify sufficient ML storage for your scenario. </p>
   *         <note>
   *             <p> Amazon SageMaker supports only the General Purpose SSD (gp2) ML storage volume type.
   *             </p>
   *         </note>
   *         <note>
   *             <p>Certain Nitro-based instances include local storage with a fixed total size,
   *                 dependent on the instance type. When using these instances for training, Amazon SageMaker mounts
   *                 the local instance storage instead of Amazon EBS gp2 storage. You can't request a
   *                     <code>VolumeSizeInGB</code> greater than the total size of the local instance
   *                 storage.</p>
   *             <p>For a list of instance types that support local instance storage, including the
   *                 total size per instance type, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes">Instance Store Volumes</a>.</p>
   *         </note>
   */
  VolumeSizeInGB: number | undefined;
}

export namespace ResourceConfig {
  export const filterSensitiveLog = (obj: ResourceConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceConfig =>
    __isa(o, "ResourceConfig");
}

/**
 * <p>Resource being accessed is in use.</p>
 */
export interface ResourceInUse extends __SmithyException, $MetadataBearer {
  name: "ResourceInUse";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUse {
  export const filterSensitiveLog = (obj: ResourceInUse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceInUse => __isa(o, "ResourceInUse");
}

/**
 * <p> You have exceeded an Amazon SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 */
export interface ResourceLimitExceeded
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceLimitExceeded";
  $fault: "client";
  Message?: string;
}

export namespace ResourceLimitExceeded {
  export const filterSensitiveLog = (obj: ResourceLimitExceeded): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceLimitExceeded =>
    __isa(o, "ResourceLimitExceeded");
}

/**
 * <p>Specifies the maximum number of
 *             training
 *             jobs and parallel training jobs that a hyperparameter tuning job can
 *             launch.</p>
 */
export interface ResourceLimits {
  __type?: "ResourceLimits";
  /**
   * <p>The
   *             maximum
   *             number of training jobs that a hyperparameter tuning job can
   *             launch.</p>
   */
  MaxNumberOfTrainingJobs: number | undefined;

  /**
   * <p>The
   *             maximum
   *             number of concurrent training jobs that a hyperparameter tuning job can
   *             launch.</p>
   */
  MaxParallelTrainingJobs: number | undefined;
}

export namespace ResourceLimits {
  export const filterSensitiveLog = (obj: ResourceLimits): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceLimits =>
    __isa(o, "ResourceLimits");
}

/**
 * <p>Resource being access is not found.</p>
 */
export interface ResourceNotFound extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFound";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFound {
  export const filterSensitiveLog = (obj: ResourceNotFound): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFound =>
    __isa(o, "ResourceNotFound");
}

/**
 * <p>The instance type and quantity.</p>
 */
export interface ResourceSpec {
  __type?: "ResourceSpec";
  /**
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   */
  EnvironmentArn?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: AppInstanceType | string;
}

export namespace ResourceSpec {
  export const filterSensitiveLog = (obj: ResourceSpec): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceSpec => __isa(o, "ResourceSpec");
}

export enum ResourceType {
  EXPERIMENT = "Experiment",
  EXPERIMENT_TRIAL = "ExperimentTrial",
  EXPERIMENT_TRIAL_COMPONENT = "ExperimentTrialComponent",
  TRAINING_JOB = "TrainingJob"
}

/**
 * <p>The retention policy.</p>
 */
export interface RetentionPolicy {
  __type?: "RetentionPolicy";
  /**
   * <p>The home Amazon Elastic File System (EFS).</p>
   */
  HomeEfsFileSystem?: RetentionType | string;
}

export namespace RetentionPolicy {
  export const filterSensitiveLog = (obj: RetentionPolicy): any => ({
    ...obj
  });
  export const isa = (o: any): o is RetentionPolicy =>
    __isa(o, "RetentionPolicy");
}

export enum RetentionType {
  Delete = "Delete",
  Retain = "Retain"
}

export enum RootAccess {
  DISABLED = "Disabled",
  ENABLED = "Enabled"
}

export enum RuleEvaluationStatus {
  ERROR = "Error",
  IN_PROGRESS = "InProgress",
  ISSUES_FOUND = "IssuesFound",
  NO_ISSUES_FOUND = "NoIssuesFound",
  STOPPED = "Stopped",
  STOPPING = "Stopping"
}

export enum S3DataDistribution {
  FULLY_REPLICATED = "FullyReplicated",
  SHARDED_BY_S3_KEY = "ShardedByS3Key"
}

/**
 * <p>Describes the S3 data source.</p>
 */
export interface S3DataSource {
  __type?: "S3DataSource";
  /**
   * <p>A list of one or more attribute names to use that are found in a specified augmented
   *             manifest file.</p>
   */
  AttributeNames?: string[];

  /**
   * <p>If you want Amazon SageMaker to replicate the entire dataset on each ML compute instance that
   *             is launched for model training, specify <code>FullyReplicated</code>. </p>
   *         <p>If you want Amazon SageMaker to replicate a subset of data on each ML compute instance that is
   *             launched for model training, specify <code>ShardedByS3Key</code>. If there are
   *                 <i>n</i> ML compute instances launched for a training job, each
   *             instance gets approximately 1/<i>n</i> of the number of S3 objects. In
   *             this case, model training on each machine uses only the subset of training data. </p>
   *         <p>Don't choose more ML compute instances for training than available S3 objects. If
   *             you do, some nodes won't get any data and you will pay for nodes that aren't getting any
   *             training data. This applies in both File and Pipe modes. Keep this in mind when
   *             developing algorithms. </p>
   *         <p>In distributed training, where you use multiple ML compute EC2 instances, you might
   *             choose <code>ShardedByS3Key</code>. If the algorithm requires copying training data to
   *             the ML storage volume (when <code>TrainingInputMode</code> is set to <code>File</code>),
   *             this copies 1/<i>n</i> of the number of objects. </p>
   */
  S3DataDistributionType?: S3DataDistribution | string;

  /**
   * <p>If you choose <code>S3Prefix</code>, <code>S3Uri</code> identifies a key name prefix.
   *             Amazon SageMaker uses all objects that match the specified key name prefix for model training. </p>
   *         <p>If you choose <code>ManifestFile</code>, <code>S3Uri</code> identifies an object that
   *             is a manifest file containing a list of object keys that you want Amazon SageMaker to use for model
   *             training. </p>
   *         <p>If you choose <code>AugmentedManifestFile</code>, S3Uri identifies an object that is
   *             an augmented manifest file in JSON lines format. This file contains the data you want to
   *             use for model training. <code>AugmentedManifestFile</code> can only be used if the
   *             Channel's input mode is <code>Pipe</code>.</p>
   */
  S3DataType: S3DataType | string | undefined;

  /**
   * <p>Depending on the value specified for the <code>S3DataType</code>, identifies either
   *             a key name prefix or a manifest. For example: </p>
   *         <ul>
   *             <li>
   *                 <p> A key name prefix might look like this:
   *                         <code>s3://bucketname/exampleprefix</code>. </p>
   *             </li>
   *             <li>
   *                 <p> A manifest might look like this:
   *                         <code>s3://bucketname/example.manifest</code>
   *                 </p>
   *                 <p> The manifest is an S3 object which is a JSON file with the following
   *                     format: </p>
   *                 <p> The preceding JSON matches the following <code>s3Uris</code>: </p>
   *                 <p>
   *                     <code>[ {"prefix": "s3://customer_bucket/some/prefix/"},</code>
   *                 </p>
   *                 <p>
   *                     <code>"relative/path/to/custdata-1",</code>
   *                 </p>
   *                 <p>
   *                     <code>"relative/path/custdata-2",</code>
   *                 </p>
   *                 <p>
   *                     <code>...</code>
   *                 </p>
   *                 <p>
   *                     <code>"relative/path/custdata-N"</code>
   *                 </p>
   *                 <p>
   *                     <code>]</code>
   *                 </p>
   *                 <p> The preceding JSON matches the following <code>s3Uris</code>: </p>
   *                 <p>
   *                     <code>s3://customer_bucket/some/prefix/relative/path/to/custdata-1</code>
   *                 </p>
   *                 <p>
   *                     <code>s3://customer_bucket/some/prefix/relative/path/custdata-2</code>
   *                 </p>
   *                 <p>
   *                     <code>...</code>
   *                 </p>
   *                 <p>
   *                     <code>s3://customer_bucket/some/prefix/relative/path/custdata-N</code>
   *                 </p>
   *                 <p>The complete set of
   *                     <code>s3uris</code>
   *                 in this manifest is the input data for
   *                     the channel for this datasource. The object that each <code>s3uris</code> points
   *                     to must be readable by the IAM role that Amazon SageMaker uses to perform tasks on your
   *                     behalf. </p>
   *             </li>
   *          </ul>
   */
  S3Uri: string | undefined;
}

export namespace S3DataSource {
  export const filterSensitiveLog = (obj: S3DataSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3DataSource => __isa(o, "S3DataSource");
}

export enum S3DataType {
  AUGMENTED_MANIFEST_FILE = "AugmentedManifestFile",
  MANIFEST_FILE = "ManifestFile",
  S3_PREFIX = "S3Prefix"
}

/**
 * <p>Configuration details about the monitoring schedule.</p>
 */
export interface ScheduleConfig {
  __type?: "ScheduleConfig";
  /**
   * <p>A cron expression that describes details about the monitoring schedule.</p>
   *
   *          <p>Currently the only supported cron expressions are:</p>
   *          <ul>
   *             <li>
   *                <p>If you want to set the job to start every hour, please use the following:</p>
   *                <p>
   *                   <code>Hourly: cron(0 * ? * * *)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>If you want to start the job daily:</p>
   *                <p>
   *                   <code>cron(0 [00-23] ? * * *)</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For example, the following are valid cron expressions:</p>
   *          <ul>
   *             <li>
   *                <p>Daily at noon UTC: <code>cron(0 12 ? * * *)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Daily at midnight UTC: <code>cron(0 0 ? * * *)</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <p>To support running every 6, 12 hours, the following are also supported:</p>
   *          <p>
   *             <code>cron(0 [00-23]/[01-24] ? * * *)</code>
   *          </p>
   *          <p>For example, the following are valid cron expressions:</p>
   *          <ul>
   *             <li>
   *                <p>Every 12 hours, starting at 5pm UTC: <code>cron(0 17/12 ? * * *)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Every two hours starting at midnight: <code>cron(0 0/2 ? * * *)</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>Even though the cron expression is set to start at 5PM UTC, note that there
   *                   could be a delay of 0-20 minutes from the actual requested time to run the
   *                   execution. </p>
   *                </li>
   *                <li>
   *                   <p>We recommend that if you would like a daily schedule, you do not provide this
   *                   parameter. Amazon SageMaker will pick a time for running every day.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  ScheduleExpression: string | undefined;
}

export namespace ScheduleConfig {
  export const filterSensitiveLog = (obj: ScheduleConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScheduleConfig =>
    __isa(o, "ScheduleConfig");
}

export enum ScheduleStatus {
  FAILED = "Failed",
  PENDING = "Pending",
  SCHEDULED = "Scheduled",
  STOPPED = "Stopped"
}

/**
 * <p>A multi-expression that searches for the specified resource or resources in a search. All resource
 *       objects that satisfy the expression's condition are included in the search results. You must specify at
 *       least one subexpression, filter, or nested filter. A <code>SearchExpression</code> can contain up to
 *       twenty elements.</p>
 *          <p>A <code>SearchExpression</code> contains the following components:</p>
 *          <ul>
 *             <li>
 *                <p>A list of <code>Filter</code> objects. Each filter defines a simple Boolean
 *           expression comprised of a resource property name, Boolean operator, and
 *           value. A <code>SearchExpression</code>
 *           can include only one <code>Contains</code> operator.</p>
 *             </li>
 *             <li>
 *                <p>A list of <code>NestedFilter</code> objects. Each nested filter defines a list
 *           of Boolean expressions using a list of resource properties. A nested filter is
 *           satisfied if a single object in the list satisfies all Boolean
 *           expressions.</p>
 *             </li>
 *             <li>
 *                <p>A list of <code>SearchExpression</code> objects. A search expression object
 *           can be nested in a list of search expression objects.</p>
 *             </li>
 *             <li>
 *                <p>A Boolean operator: <code>And</code> or <code>Or</code>.</p>
 *             </li>
 *          </ul>
 */
export interface SearchExpression {
  __type?: "SearchExpression";
  /**
   * <p>A list of filter objects.</p>
   */
  Filters?: Filter[];

  /**
   * <p>A list of nested filter objects.</p>
   */
  NestedFilters?: NestedFilters[];

  /**
   * <p>A Boolean operator used to evaluate the search expression. If you want every
   *       conditional statement in all lists to be satisfied for the entire search expression to
   *       be true, specify <code>And</code>. If only a single conditional statement needs to be
   *       true for the entire search expression to be true, specify <code>Or</code>. The default
   *       value is <code>And</code>.</p>
   */
  Operator?: BooleanOperator | string;

  /**
   * <p>A list of search expression objects.</p>
   */
  SubExpressions?: SearchExpression[];
}

export namespace SearchExpression {
  export const filterSensitiveLog = (obj: SearchExpression): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchExpression =>
    __isa(o, "SearchExpression");
}

/**
 * <p>An individual search result record that contains a single resource object.</p>
 */
export interface SearchRecord {
  __type?: "SearchRecord";
  /**
   * <p>A summary of the properties of an experiment.</p>
   */
  Experiment?: Experiment;

  /**
   * <p>A <code>TrainingJob</code> object that is returned as part of a <code>Search</code>
   *       request.</p>
   */
  TrainingJob?: TrainingJob;

  /**
   * <p>A summary of the properties of a trial.</p>
   */
  Trial?: Trial;

  /**
   * <p>A summary of the properties of a trial component.</p>
   */
  TrialComponent?: TrialComponent;
}

export namespace SearchRecord {
  export const filterSensitiveLog = (obj: SearchRecord): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchRecord => __isa(o, "SearchRecord");
}

export interface SearchRequest {
  __type?: "SearchRequest";
  /**
   * <p>The maximum number of results to return in a <code>SearchResponse</code>.</p>
   */
  MaxResults?: number;

  /**
   * <p>If more than <code>MaxResults</code> resource objects match the specified
   *       <code>SearchExpression</code>, the <code>SearchResponse</code> includes a
   *       <code>NextToken</code>. The <code>NextToken</code> can be passed to the next
   *       <code>SearchRequest</code> to continue retrieving results for the specified
   *       <code>SearchExpression</code> and <code>Sort</code> parameters.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the Amazon SageMaker resource to search for.</p>
   */
  Resource: ResourceType | string | undefined;

  /**
   * <p>A Boolean conditional statement. Resource objects must satisfy this condition to be
   *       included in search results. You must provide at least one subexpression, filter, or
   *       nested filter. The maximum number of recursive <code>SubExpressions</code>,
   *       <code>NestedFilters</code>, and <code>Filters</code> that can be included in a
   *       <code>SearchExpression</code> object is 50.</p>
   */
  SearchExpression?: SearchExpression;

  /**
   * <p>The name of the resource property used to sort the <code>SearchResults</code>. The
   *       default is <code>LastModifiedTime</code>.</p>
   */
  SortBy?: string;

  /**
   * <p>How <code>SearchResults</code> are ordered. Valid values are <code>Ascending</code> or
   *       <code>Descending</code>. The default is <code>Descending</code>.</p>
   */
  SortOrder?: SearchSortOrder | string;
}

export namespace SearchRequest {
  export const filterSensitiveLog = (obj: SearchRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchRequest => __isa(o, "SearchRequest");
}

export interface SearchResponse {
  __type?: "SearchResponse";
  /**
   * <p>If the result of the previous <code>Search</code> request was truncated, the response
   *       includes a NextToken. To retrieve the next set of results, use the token in the next
   *       request.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>SearchResult</code> objects.</p>
   */
  Results?: SearchRecord[];
}

export namespace SearchResponse {
  export const filterSensitiveLog = (obj: SearchResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchResponse =>
    __isa(o, "SearchResponse");
}

export enum SearchSortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending"
}

export enum SecondaryStatus {
  COMPLETED = "Completed",
  DOWNLOADING = "Downloading",
  DOWNLOADING_TRAINING_IMAGE = "DownloadingTrainingImage",
  FAILED = "Failed",
  INTERRUPTED = "Interrupted",
  LAUNCHING_ML_INSTANCES = "LaunchingMLInstances",
  MAX_RUNTIME_EXCEEDED = "MaxRuntimeExceeded",
  MAX_WAIT_TIME_EXCEEDED = "MaxWaitTimeExceeded",
  PREPARING_TRAINING_STACK = "PreparingTrainingStack",
  STARTING = "Starting",
  STOPPED = "Stopped",
  STOPPING = "Stopping",
  TRAINING = "Training",
  UPLOADING = "Uploading"
}

/**
 * <p>An array element of <a>DescribeTrainingJobResponse$SecondaryStatusTransitions</a>. It provides
 *             additional details about a status that the training job has transitioned through. A
 *             training job can be in one of several states, for example, starting, downloading,
 *             training, or uploading. Within each state, there are a number of intermediate states.
 *             For example, within the starting state, Amazon SageMaker could be starting the training job or
 *             launching the ML instances. These transitional states are referred to as the job's
 *             secondary
 *             status.
 *             </p>
 *         <p></p>
 */
export interface SecondaryStatusTransition {
  __type?: "SecondaryStatusTransition";
  /**
   * <p>A timestamp that shows when the training job transitioned out of this secondary status
   *             state into another secondary status state or when the training job has ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>A timestamp that shows when the training job transitioned to the current secondary
   *             status state.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>Contains a secondary status information from a training
   *             job.</p>
   *         <p>Status might be one of the following secondary statuses:</p>
   *         <dl>
   *             <dt>InProgress</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Starting</code>
   *                                 - Starting the training job.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Downloading</code> - An optional stage for algorithms that
   *                                 support <code>File</code> training input mode. It indicates that
   *                                 data is being downloaded to the ML storage volumes.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Training</code> - Training is in progress.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Uploading</code> - Training is complete and the model
   *                                 artifacts are being uploaded to the S3 location.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Completed</code> - The training job has completed.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Failed</code> - The training job has failed. The reason for
   *                                 the failure is returned in the <code>FailureReason</code> field of
   *                                     <code>DescribeTrainingJobResponse</code>.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Stopped</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>MaxRuntimeExceeded</code> - The job stopped because it
   *                                 exceeded the maximum allowed runtime.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Stopped</code> - The training job has stopped.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Stopping</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Stopping</code> - Stopping the training job.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *          </dl>
   *         <p>We no longer support the following secondary statuses:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>LaunchingMLInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>PreparingTrainingStack</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>DownloadingTrainingImage</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  Status: SecondaryStatus | string | undefined;

  /**
   * <p>A detailed description of the progress within a secondary status.
   *             </p>
   *         <p>Amazon SageMaker provides secondary statuses and status messages that apply to each of
   *             them:</p>
   *         <dl>
   *             <dt>Starting</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>Starting the training job.</p>
   *                         </li>
   *                   <li>
   *                             <p>Launching
   *                                 requested ML instances.</p>
   *                         </li>
   *                   <li>
   *                             <p>Insufficient
   *                                 capacity error from EC2 while launching instances,
   *                                 retrying!</p>
   *                         </li>
   *                   <li>
   *                             <p>Launched
   *                                 instance was unhealthy, replacing it!</p>
   *                         </li>
   *                   <li>
   *                             <p>Preparing the instances for training.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Training</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>Downloading the training image.</p>
   *                         </li>
   *                   <li>
   *                             <p>Training
   *                                 image download completed. Training in
   *                                 progress.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *          </dl>
   *         <important>
   *             <p>Status messages are subject to change. Therefore, we recommend not including them
   *                 in code that programmatically initiates actions. For examples, don't use status
   *                 messages in if statements.</p>
   *         </important>
   *         <p>To have an overview of your training job's progress, view
   *                 <code>TrainingJobStatus</code> and <code>SecondaryStatus</code> in <a>DescribeTrainingJob</a>, and <code>StatusMessage</code> together. For
   *             example, at the start of a training job, you might see the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>TrainingJobStatus</code> - InProgress</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SecondaryStatus</code> - Training</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>StatusMessage</code> - Downloading the training image</p>
   *             </li>
   *          </ul>
   */
  StatusMessage?: string;
}

export namespace SecondaryStatusTransition {
  export const filterSensitiveLog = (obj: SecondaryStatusTransition): any => ({
    ...obj
  });
  export const isa = (o: any): o is SecondaryStatusTransition =>
    __isa(o, "SecondaryStatusTransition");
}

/**
 * <p>The sharing settings.</p>
 */
export interface SharingSettings {
  __type?: "SharingSettings";
  /**
   * <p>The notebook output option.</p>
   */
  NotebookOutputOption?: NotebookOutputOption | string;

  /**
   * <p>The AWS Key Management Service encryption key ID.</p>
   */
  S3KmsKeyId?: string;

  /**
   * <p>The Amazon S3 output path.</p>
   */
  S3OutputPath?: string;
}

export namespace SharingSettings {
  export const filterSensitiveLog = (obj: SharingSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is SharingSettings =>
    __isa(o, "SharingSettings");
}

/**
 * <p>A configuration for a shuffle option for input data in a channel. If you use
 *                 <code>S3Prefix</code> for <code>S3DataType</code>, the results of the S3 key prefix
 *             matches are shuffled. If you use <code>ManifestFile</code>, the order of the S3 object
 *             references in the <code>ManifestFile</code> is shuffled. If you use
 *                 <code>AugmentedManifestFile</code>, the order of the JSON lines in the
 *                 <code>AugmentedManifestFile</code> is shuffled. The shuffling order is determined
 *             using the <code>Seed</code> value.</p>
 *         <p>For Pipe input mode, when <code>ShuffleConfig</code> is specified shuffling is done at
 *             the start of every epoch. With large datasets, this ensures that the order of the
 *             training data is different for each epoch, and it helps reduce bias and possible
 *             overfitting. In a multi-node training job when <code>ShuffleConfig</code> is combined
 *             with <code>S3DataDistributionType</code> of <code>ShardedByS3Key</code>, the data is
 *             shuffled across nodes so that the content sent to a particular node on the first epoch
 *             might be sent to a different node on the second epoch.</p>
 */
export interface ShuffleConfig {
  __type?: "ShuffleConfig";
  /**
   * <p>Determines the shuffling order in <code>ShuffleConfig</code> value.</p>
   */
  Seed: number | undefined;
}

export namespace ShuffleConfig {
  export const filterSensitiveLog = (obj: ShuffleConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is ShuffleConfig => __isa(o, "ShuffleConfig");
}

export enum SortBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name",
  STATUS = "Status"
}

export enum SortExperimentsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name"
}

export enum SortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending"
}

export enum SortTrialComponentsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name"
}

export enum SortTrialsBy {
  CREATION_TIME = "CreationTime",
  NAME = "Name"
}

/**
 * <p>Specifies an algorithm that was used to create the model package. The algorithm must
 *             be either an algorithm resource in your Amazon SageMaker account or an algorithm in AWS Marketplace that you
 *             are subscribed to.</p>
 */
export interface SourceAlgorithm {
  __type?: "SourceAlgorithm";
  /**
   * <p>The name of an algorithm that was used to create the model package. The algorithm must
   *             be either an algorithm resource in your Amazon SageMaker account or an algorithm in AWS Marketplace that you
   *             are subscribed to.</p>
   */
  AlgorithmName: string | undefined;

  /**
   * <p>The Amazon S3 path where the model artifacts, which result from model training, are stored.
   *             This path must point to a single <code>gzip</code> compressed tar archive
   *                 (<code>.tar.gz</code> suffix).</p>
   */
  ModelDataUrl?: string;
}

export namespace SourceAlgorithm {
  export const filterSensitiveLog = (obj: SourceAlgorithm): any => ({
    ...obj
  });
  export const isa = (o: any): o is SourceAlgorithm =>
    __isa(o, "SourceAlgorithm");
}

/**
 * <p>A list of algorithms that were used to create a model package.</p>
 */
export interface SourceAlgorithmSpecification {
  __type?: "SourceAlgorithmSpecification";
  /**
   * <p>A list of the algorithms that were used to create a model package.</p>
   */
  SourceAlgorithms: SourceAlgorithm[] | undefined;
}

export namespace SourceAlgorithmSpecification {
  export const filterSensitiveLog = (
    obj: SourceAlgorithmSpecification
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SourceAlgorithmSpecification =>
    __isa(o, "SourceAlgorithmSpecification");
}

/**
 * <p>A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow
 *             list of IP addresses for a private workforce. For more information, see .</p>
 */
export interface SourceIpConfig {
  __type?: "SourceIpConfig";
  /**
   * <p>A list of one to four <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Classless Inter-Domain Routing</a> (CIDR) values.</p>
   *         <p>Maximum: 4 CIDR values</p>
   *         <note>
   *             <p>The following Length Constraints apply to individual CIDR values in
   *                 the CIDR value list.</p>
   *         </note>
   */
  Cidrs: string[] | undefined;
}

export namespace SourceIpConfig {
  export const filterSensitiveLog = (obj: SourceIpConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is SourceIpConfig =>
    __isa(o, "SourceIpConfig");
}

export enum SplitType {
  LINE = "Line",
  NONE = "None",
  RECORDIO = "RecordIO",
  TFRECORD = "TFRecord"
}

export interface StartMonitoringScheduleRequest {
  __type?: "StartMonitoringScheduleRequest";
  /**
   * <p>The name of the schedule to start.</p>
   */
  MonitoringScheduleName: string | undefined;
}

export namespace StartMonitoringScheduleRequest {
  export const filterSensitiveLog = (
    obj: StartMonitoringScheduleRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartMonitoringScheduleRequest =>
    __isa(o, "StartMonitoringScheduleRequest");
}

export interface StartNotebookInstanceInput {
  __type?: "StartNotebookInstanceInput";
  /**
   * <p>The name of the notebook instance to start.</p>
   */
  NotebookInstanceName: string | undefined;
}

export namespace StartNotebookInstanceInput {
  export const filterSensitiveLog = (obj: StartNotebookInstanceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartNotebookInstanceInput =>
    __isa(o, "StartNotebookInstanceInput");
}

export interface StopAutoMLJobRequest {
  __type?: "StopAutoMLJobRequest";
  /**
   * <p>The name of the object you are requesting.</p>
   */
  AutoMLJobName: string | undefined;
}

export namespace StopAutoMLJobRequest {
  export const filterSensitiveLog = (obj: StopAutoMLJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopAutoMLJobRequest =>
    __isa(o, "StopAutoMLJobRequest");
}

export interface StopCompilationJobRequest {
  __type?: "StopCompilationJobRequest";
  /**
   * <p>The name of the model compilation job to stop.</p>
   */
  CompilationJobName: string | undefined;
}

export namespace StopCompilationJobRequest {
  export const filterSensitiveLog = (obj: StopCompilationJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopCompilationJobRequest =>
    __isa(o, "StopCompilationJobRequest");
}

export interface StopHyperParameterTuningJobRequest {
  __type?: "StopHyperParameterTuningJobRequest";
  /**
   * <p>The name of the tuning job to stop.</p>
   */
  HyperParameterTuningJobName: string | undefined;
}

export namespace StopHyperParameterTuningJobRequest {
  export const filterSensitiveLog = (
    obj: StopHyperParameterTuningJobRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopHyperParameterTuningJobRequest =>
    __isa(o, "StopHyperParameterTuningJobRequest");
}

export interface StopLabelingJobRequest {
  __type?: "StopLabelingJobRequest";
  /**
   * <p>The name of the labeling job to stop.</p>
   */
  LabelingJobName: string | undefined;
}

export namespace StopLabelingJobRequest {
  export const filterSensitiveLog = (obj: StopLabelingJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopLabelingJobRequest =>
    __isa(o, "StopLabelingJobRequest");
}

export interface StopMonitoringScheduleRequest {
  __type?: "StopMonitoringScheduleRequest";
  /**
   * <p>The name of the schedule to stop.</p>
   */
  MonitoringScheduleName: string | undefined;
}

export namespace StopMonitoringScheduleRequest {
  export const filterSensitiveLog = (
    obj: StopMonitoringScheduleRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopMonitoringScheduleRequest =>
    __isa(o, "StopMonitoringScheduleRequest");
}

export interface StopNotebookInstanceInput {
  __type?: "StopNotebookInstanceInput";
  /**
   * <p>The name of the notebook instance to terminate.</p>
   */
  NotebookInstanceName: string | undefined;
}

export namespace StopNotebookInstanceInput {
  export const filterSensitiveLog = (obj: StopNotebookInstanceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopNotebookInstanceInput =>
    __isa(o, "StopNotebookInstanceInput");
}

/**
 * <p>Specifies a limit to how long a model training or compilation job can run. It also
 *             specifies how long you are willing to wait for a managed spot training job to complete.
 *             When the job reaches the time limit, Amazon SageMaker ends the training or compilation job. Use this
 *             API to cap model training costs.</p>
 *         <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
 *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
 *             model artifacts, so the results of training are not lost. </p>
 *         <p>The training algorithms provided by Amazon SageMaker automatically save the intermediate results
 *             of a model training job when possible. This attempt to save artifacts is only a best
 *             effort case as model might not be in a state from which it can be saved. For example, if
 *             training has just started, the model might not be ready to save. When saved, this
 *             intermediate data is a valid model artifact. You can use it to create a model with
 *                 <code>CreateModel</code>.</p>
 *         <note>
 *             <p>The Neural Topic Model (NTM) currently does not support saving intermediate model
 *                 artifacts. When training NTMs, make sure that the maximum runtime is sufficient for
 *                 the training job to complete.</p>
 *         </note>
 */
export interface StoppingCondition {
  __type?: "StoppingCondition";
  /**
   * <p>The maximum length of time, in seconds, that the training or compilation job can run.
   *             If job does not complete during this time, Amazon SageMaker ends the job. If value is not specified,
   *             default value is 1 day. The maximum value is 28 days.</p>
   */
  MaxRuntimeInSeconds?: number;

  /**
   * <p>The maximum length of time, in seconds, how long you are willing to wait for a managed
   *             spot training job to complete. It is the amount of time spent waiting for Spot capacity
   *             plus the amount of time the training job runs. It must be equal to or greater than
   *                 <code>MaxRuntimeInSeconds</code>. </p>
   */
  MaxWaitTimeInSeconds?: number;
}

export namespace StoppingCondition {
  export const filterSensitiveLog = (obj: StoppingCondition): any => ({
    ...obj
  });
  export const isa = (o: any): o is StoppingCondition =>
    __isa(o, "StoppingCondition");
}

export interface StopProcessingJobRequest {
  __type?: "StopProcessingJobRequest";
  /**
   * <p>The name of the processing job to stop.</p>
   */
  ProcessingJobName: string | undefined;
}

export namespace StopProcessingJobRequest {
  export const filterSensitiveLog = (obj: StopProcessingJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopProcessingJobRequest =>
    __isa(o, "StopProcessingJobRequest");
}

export interface StopTrainingJobRequest {
  __type?: "StopTrainingJobRequest";
  /**
   * <p>The name of the training job to stop.</p>
   */
  TrainingJobName: string | undefined;
}

export namespace StopTrainingJobRequest {
  export const filterSensitiveLog = (obj: StopTrainingJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopTrainingJobRequest =>
    __isa(o, "StopTrainingJobRequest");
}

export interface StopTransformJobRequest {
  __type?: "StopTransformJobRequest";
  /**
   * <p>The name of the transform job to stop.</p>
   */
  TransformJobName: string | undefined;
}

export namespace StopTransformJobRequest {
  export const filterSensitiveLog = (obj: StopTransformJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopTransformJobRequest =>
    __isa(o, "StopTransformJobRequest");
}

/**
 * <p>Describes a work team of a vendor that does the a labelling job.</p>
 */
export interface SubscribedWorkteam {
  __type?: "SubscribedWorkteam";
  /**
   * <p></p>
   */
  ListingId?: string;

  /**
   * <p>The description of the vendor from the Amazon Marketplace.</p>
   */
  MarketplaceDescription?: string;

  /**
   * <p>The title of the service provided by the vendor in the Amazon Marketplace.</p>
   */
  MarketplaceTitle?: string;

  /**
   * <p>The name of the vendor in the Amazon Marketplace.</p>
   */
  SellerName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the vendor that you have subscribed.</p>
   */
  WorkteamArn: string | undefined;
}

export namespace SubscribedWorkteam {
  export const filterSensitiveLog = (obj: SubscribedWorkteam): any => ({
    ...obj
  });
  export const isa = (o: any): o is SubscribedWorkteam =>
    __isa(o, "SubscribedWorkteam");
}

/**
 * <p>Specified in the <a>GetSearchSuggestions</a> request.
 *       Limits the property names that are included in the response.</p>
 */
export interface SuggestionQuery {
  __type?: "SuggestionQuery";
  /**
   * <p>Defines a property name hint. Only property
   *       names that begin with the specified hint are included in the response.</p>
   */
  PropertyNameQuery?: PropertyNameQuery;
}

export namespace SuggestionQuery {
  export const filterSensitiveLog = (obj: SuggestionQuery): any => ({
    ...obj
  });
  export const isa = (o: any): o is SuggestionQuery =>
    __isa(o, "SuggestionQuery");
}

/**
 * <p>Describes a tag. </p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The tag key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The tag value.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export enum TargetDevice {
  AISAGE = "aisage",
  DEEPLENS = "deeplens",
  JETSON_NANO = "jetson_nano",
  JETSON_TX1 = "jetson_tx1",
  JETSON_TX2 = "jetson_tx2",
  LAMBDA = "lambda",
  ML_C4 = "ml_c4",
  ML_C5 = "ml_c5",
  ML_INF1 = "ml_inf1",
  ML_M4 = "ml_m4",
  ML_M5 = "ml_m5",
  ML_P2 = "ml_p2",
  ML_P3 = "ml_p3",
  QCS603 = "qcs603",
  QCS605 = "qcs605",
  RASP3B = "rasp3b",
  RK3288 = "rk3288",
  RK3399 = "rk3399",
  SBE_C = "sbe_c"
}

/**
 * <p>The TensorBoard app settings.</p>
 */
export interface TensorBoardAppSettings {
  __type?: "TensorBoardAppSettings";
  /**
   * <p>The instance type and quantity.</p>
   */
  DefaultResourceSpec?: ResourceSpec;
}

export namespace TensorBoardAppSettings {
  export const filterSensitiveLog = (obj: TensorBoardAppSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is TensorBoardAppSettings =>
    __isa(o, "TensorBoardAppSettings");
}

/**
 * <p>Configuration of storage locations for TensorBoard output.</p>
 */
export interface TensorBoardOutputConfig {
  __type?: "TensorBoardOutputConfig";
  /**
   * <p>Path to local storage location for tensorBoard output. Defaults to
   *                 <code>/opt/ml/output/tensorboard</code>.</p>
   */
  LocalPath?: string;

  /**
   * <p>Path to Amazon S3 storage location for TensorBoard output.</p>
   */
  S3OutputPath: string | undefined;
}

export namespace TensorBoardOutputConfig {
  export const filterSensitiveLog = (obj: TensorBoardOutputConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is TensorBoardOutputConfig =>
    __isa(o, "TensorBoardOutputConfig");
}

export enum TrainingInputMode {
  FILE = "File",
  PIPE = "Pipe"
}

export enum TrainingInstanceType {
  ML_C4_2XLARGE = "ml.c4.2xlarge",
  ML_C4_4XLARGE = "ml.c4.4xlarge",
  ML_C4_8XLARGE = "ml.c4.8xlarge",
  ML_C4_XLARGE = "ml.c4.xlarge",
  ML_C5_18XLARGE = "ml.c5.18xlarge",
  ML_C5_2XLARGE = "ml.c5.2xlarge",
  ML_C5_4XLARGE = "ml.c5.4xlarge",
  ML_C5_9XLARGE = "ml.c5.9xlarge",
  ML_C5_XLARGE = "ml.c5.xlarge",
  ML_G4DN_12XLARGE = "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE = "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE = "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE = "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE = "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE = "ml.g4dn.xlarge",
  ML_M4_10XLARGE = "ml.m4.10xlarge",
  ML_M4_16XLARGE = "ml.m4.16xlarge",
  ML_M4_2XLARGE = "ml.m4.2xlarge",
  ML_M4_4XLARGE = "ml.m4.4xlarge",
  ML_M4_XLARGE = "ml.m4.xlarge",
  ML_M5_12XLARGE = "ml.m5.12xlarge",
  ML_M5_24XLARGE = "ml.m5.24xlarge",
  ML_M5_2XLARGE = "ml.m5.2xlarge",
  ML_M5_4XLARGE = "ml.m5.4xlarge",
  ML_M5_LARGE = "ml.m5.large",
  ML_M5_XLARGE = "ml.m5.xlarge",
  ML_P2_16XLARGE = "ml.p2.16xlarge",
  ML_P2_8XLARGE = "ml.p2.8xlarge",
  ML_P2_XLARGE = "ml.p2.xlarge",
  ML_P3DN_24XLARGE = "ml.p3dn.24xlarge",
  ML_P3_16XLARGE = "ml.p3.16xlarge",
  ML_P3_2XLARGE = "ml.p3.2xlarge",
  ML_P3_8XLARGE = "ml.p3.8xlarge"
}

/**
 * <p>Contains information about a training job.</p>
 */
export interface TrainingJob {
  __type?: "TrainingJob";
  /**
   * <p>Information about the algorithm used for training, and algorithm metadata.</p>
   */
  AlgorithmSpecification?: AlgorithmSpecification;

  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  AutoMLJobArn?: string;

  /**
   * <p>The billable time in seconds.</p>
   */
  BillableTimeInSeconds?: number;

  /**
   * <p>Contains information about the output location for managed spot training checkpoint
   *             data. </p>
   */
  CheckpointConfig?: CheckpointConfig;

  /**
   * <p>A timestamp that indicates when the training job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Configuration information for the debug hook parameters, collection configuration, and
   *             storage paths.</p>
   */
  DebugHookConfig?: DebugHookConfig;

  /**
   * <p>Information about the debug rule configuration.</p>
   */
  DebugRuleConfigurations?: DebugRuleConfiguration[];

  /**
   * <p>Information about the evaluation status of the rules for the training job.</p>
   */
  DebugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];

  /**
   * <p>To encrypt all communications between ML compute instances in distributed training,
   *             choose <code>True</code>. Encryption provides greater security for distributed training,
   *             but training might take longer. How long it takes depends on the amount of communication
   *             between compute instances, especially if you use a deep learning algorithm in
   *             distributed training.</p>
   */
  EnableInterContainerTrafficEncryption?: boolean;

  /**
   * <p>When true, enables managed spot training using Amazon EC2 Spot instances to run
   *             training jobs instead of on-demand instances. For more information, see <a>model-managed-spot-training</a>.</p>
   */
  EnableManagedSpotTraining?: boolean;

  /**
   * <p>If the <code>TrainingJob</code> was created with network isolation, the value is set
   *             to <code>true</code>. If network isolation is enabled, nodes can't communicate beyond
   *             the VPC they run in.</p>
   */
  EnableNetworkIsolation?: boolean;

  /**
   * <p>Configuration for the experiment.</p>
   */
  ExperimentConfig?: ExperimentConfig;

  /**
   * <p>If the training job failed, the reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>A list of final metric values that are set when the training job completes. Used only
   *             if the training job was configured to use metrics.</p>
   */
  FinalMetricDataList?: MetricData[];

  /**
   * <p>Algorithm-specific parameters.</p>
   */
  HyperParameters?: { [key: string]: string };

  /**
   * <p>An array of <code>Channel</code> objects that describes each data input
   *             channel.</p>
   */
  InputDataConfig?: Channel[];

  /**
   * <p>The Amazon Resource Name (ARN) of the labeling job.</p>
   */
  LabelingJobArn?: string;

  /**
   * <p>A timestamp that indicates when the status of the training job was last
   *             modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Information about the Amazon S3 location that is configured for storing model
   *             artifacts.</p>
   */
  ModelArtifacts?: ModelArtifacts;

  /**
   * <p>The S3 path where model artifacts that you configured when creating the job are
   *             stored. Amazon SageMaker creates subfolders for model artifacts.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>Resources, including ML compute instances and ML storage volumes, that are configured
   *             for model training.</p>
   */
  ResourceConfig?: ResourceConfig;

  /**
   * <p>The AWS Identity and Access Management (IAM) role configured for the training job.</p>
   */
  RoleArn?: string;

  /**
   * <p> Provides detailed information about the state of the training job. For detailed
   *             information about the secondary status of the training job, see
   *                 <code>StatusMessage</code> under <a>SecondaryStatusTransition</a>.</p>
   *         <p>Amazon SageMaker provides primary statuses and secondary statuses that apply to each of
   *             them:</p>
   *         <dl>
   *             <dt>InProgress</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Starting</code>
   *                                 - Starting the training job.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Downloading</code> - An optional stage for algorithms that
   *                                 support <code>File</code> training input mode. It indicates that
   *                                 data is being downloaded to the ML storage volumes.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Training</code> - Training is in progress.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Uploading</code> - Training is complete and the model
   *                                 artifacts are being uploaded to the S3 location.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Completed</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Completed</code> - The training job has completed.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Failed</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Failed</code> - The training job has failed. The reason for
   *                                 the failure is returned in the <code>FailureReason</code> field of
   *                                     <code>DescribeTrainingJobResponse</code>.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Stopped</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>MaxRuntimeExceeded</code> - The job stopped because it
   *                                 exceeded the maximum allowed runtime.</p>
   *                         </li>
   *                   <li>
   *                             <p>
   *                         <code>Stopped</code> - The training job has stopped.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *             <dt>Stopping</dt>
   *             <dd>
   *                     <ul>
   *                   <li>
   *                             <p>
   *                         <code>Stopping</code> - Stopping the training job.</p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *          </dl>
   *         <important>
   *             <p>Valid values for <code>SecondaryStatus</code> are subject to change. </p>
   *         </important>
   *         <p>We no longer support the following secondary statuses:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>LaunchingMLInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>PreparingTrainingStack</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>DownloadingTrainingImage</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  SecondaryStatus?: SecondaryStatus | string;

  /**
   * <p>A history of all of the secondary statuses that the training job has transitioned
   *             through.</p>
   */
  SecondaryStatusTransitions?: SecondaryStatusTransition[];

  /**
   * <p>Specifies a limit to how long a model training job can run. When the job reaches the
   *             time limit, Amazon SageMaker ends the training job. Use this API to cap model training costs.</p>
   *         <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays
   *             job termination for 120 seconds. Algorithms can use this 120-second window to save the
   *             model artifacts, so the results of training are not lost. </p>
   */
  StoppingCondition?: StoppingCondition;

  /**
   * <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what">Using
   *                 Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User
   *                 Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Configuration of storage locations for TensorBoard output.</p>
   */
  TensorBoardOutputConfig?: TensorBoardOutputConfig;

  /**
   * <p>Indicates the time when the training job ends on training instances. You are billed
   *             for the time interval between the value of <code>TrainingStartTime</code> and this time.
   *             For successful jobs and stopped jobs, this is the time after model artifacts are
   *             uploaded. For failed jobs, this is the time when Amazon SageMaker detects a job failure.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn?: string;

  /**
   * <p>The name of the training job.</p>
   */
  TrainingJobName?: string;

  /**
   * <p>The status of the
   *             training
   *             job.</p>
   *         <p>Training job statuses are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>InProgress</code> - The training is in progress.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Completed</code> - The training job has completed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Failed</code> - The training job has failed. To see the reason for the
   *                     failure, see the <code>FailureReason</code> field in the response to a
   *                         <code>DescribeTrainingJobResponse</code> call.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Stopping</code> - The training job is stopping.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Stopped</code> - The training job has stopped.</p>
   *             </li>
   *          </ul>
   *         <p>For
   *             more detailed information, see <code>SecondaryStatus</code>. </p>
   */
  TrainingJobStatus?: TrainingJobStatus | string;

  /**
   * <p>Indicates the time when the training job starts on training instances. You are billed
   *             for the time interval between this time and the value of <code>TrainingEndTime</code>.
   *             The start time in CloudWatch Logs might be later than this time. The difference is due to the time
   *             it takes to download the training data and to the size of the training container.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>The training time in seconds.</p>
   */
  TrainingTimeInSeconds?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the
   *             training job was launched by a hyperparameter tuning job.</p>
   */
  TuningJobArn?: string;

  /**
   * <p>A <a>VpcConfig</a> object that specifies the VPC that this training job has
   *             access to. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon
   *                 Virtual Private Cloud</a>.</p>
   */
  VpcConfig?: VpcConfig;
}

export namespace TrainingJob {
  export const filterSensitiveLog = (obj: TrainingJob): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrainingJob => __isa(o, "TrainingJob");
}

/**
 * <p>Defines the input needed to run a training job using the algorithm.</p>
 */
export interface TrainingJobDefinition {
  __type?: "TrainingJobDefinition";
  /**
   * <p>The hyperparameters used for the training job.</p>
   */
  HyperParameters?: { [key: string]: string };

  /**
   * <p>An array of <code>Channel</code> objects, each of which specifies an input
   *             source.</p>
   */
  InputDataConfig: Channel[] | undefined;

  /**
   * <p>the path to the S3 bucket where you want to store model artifacts. Amazon SageMaker creates
   *             subfolders for the artifacts.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The resources, including the ML compute instances and ML storage volumes, to use for
   *             model training.</p>
   */
  ResourceConfig: ResourceConfig | undefined;

  /**
   * <p>Specifies a limit to how long a model training job can run. When the job reaches the
   *             time limit, Amazon SageMaker ends the training job. Use this API to cap model training costs.</p>
   *         <p>To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job
   *             termination for 120 seconds. Algorithms can use this 120-second window to save the model
   *             artifacts.</p>
   */
  StoppingCondition: StoppingCondition | undefined;

  /**
   * <p>The input mode used by the algorithm for the training job. For the input modes that
   *             Amazon SageMaker algorithms support, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>.</p>
   *         <p>If an algorithm supports the <code>File</code> input mode, Amazon SageMaker downloads the training
   *             data from S3 to the provisioned ML storage Volume, and mounts the directory to docker
   *             volume for training container. If an algorithm supports the <code>Pipe</code> input
   *             mode, Amazon SageMaker streams data directly from S3 to the container.</p>
   */
  TrainingInputMode: TrainingInputMode | string | undefined;
}

export namespace TrainingJobDefinition {
  export const filterSensitiveLog = (obj: TrainingJobDefinition): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrainingJobDefinition =>
    __isa(o, "TrainingJobDefinition");
}

export enum TrainingJobEarlyStoppingType {
  AUTO = "Auto",
  OFF = "Off"
}

export enum TrainingJobSortByOptions {
  CreationTime = "CreationTime",
  FinalObjectiveMetricValue = "FinalObjectiveMetricValue",
  Name = "Name",
  Status = "Status"
}

export enum TrainingJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping"
}

/**
 * <p>The numbers of training jobs launched by a hyperparameter tuning job, categorized by
 *             status.</p>
 */
export interface TrainingJobStatusCounters {
  __type?: "TrainingJobStatusCounters";
  /**
   * <p>The number of completed training jobs launched by the hyperparameter tuning
   *             job.</p>
   */
  Completed?: number;

  /**
   * <p>The number of in-progress training jobs launched by a hyperparameter tuning
   *             job.</p>
   */
  InProgress?: number;

  /**
   * <p>The number of training jobs that failed and can't be retried. A failed training job
   *             can't be retried if it failed because a client error occurred.</p>
   */
  NonRetryableError?: number;

  /**
   * <p>The number of training jobs that failed, but can be retried. A failed training job can
   *             be retried only if it failed because an internal service error occurred.</p>
   */
  RetryableError?: number;

  /**
   * <p>The number of training jobs launched by a hyperparameter tuning job that were
   *             manually
   *             stopped.</p>
   */
  Stopped?: number;
}

export namespace TrainingJobStatusCounters {
  export const filterSensitiveLog = (obj: TrainingJobStatusCounters): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrainingJobStatusCounters =>
    __isa(o, "TrainingJobStatusCounters");
}

/**
 * <p>Provides summary information about a training job.</p>
 */
export interface TrainingJobSummary {
  __type?: "TrainingJobSummary";
  /**
   * <p>A timestamp that shows when the training job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p> Timestamp when the training job was last modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A timestamp that shows when the training job ended. This field is set only if the
   *             training job has one of the terminal statuses (<code>Completed</code>,
   *                 <code>Failed</code>, or <code>Stopped</code>). </p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the training job.</p>
   */
  TrainingJobArn: string | undefined;

  /**
   * <p>The name of the training job that you want a summary for.</p>
   */
  TrainingJobName: string | undefined;

  /**
   * <p>The status of the training job.</p>
   */
  TrainingJobStatus: TrainingJobStatus | string | undefined;
}

export namespace TrainingJobSummary {
  export const filterSensitiveLog = (obj: TrainingJobSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrainingJobSummary =>
    __isa(o, "TrainingJobSummary");
}

/**
 * <p>Defines how the algorithm is used for a training job.</p>
 */
export interface TrainingSpecification {
  __type?: "TrainingSpecification";
  /**
   * <p>A list of <code>MetricDefinition</code> objects, which are used for parsing metrics
   *             generated by the algorithm.</p>
   */
  MetricDefinitions?: MetricDefinition[];

  /**
   * <p>A list of the <code>HyperParameterSpecification</code> objects, that define the
   *             supported hyperparameters. This is required if the algorithm supports automatic model
   *             tuning.></p>
   */
  SupportedHyperParameters?: HyperParameterSpecification[];

  /**
   * <p>A list of the instance types that this algorithm can use for training.</p>
   */
  SupportedTrainingInstanceTypes: (TrainingInstanceType | string)[] | undefined;

  /**
   * <p>A list of the metrics that the algorithm emits that can be used as the objective
   *             metric in a hyperparameter tuning job.</p>
   */
  SupportedTuningJobObjectiveMetrics?: HyperParameterTuningJobObjective[];

  /**
   * <p>Indicates whether the algorithm supports distributed training. If set to false, buyers
   *             can't request more than one instance during training.</p>
   */
  SupportsDistributedTraining?: boolean;

  /**
   * <p>A list of <code>ChannelSpecification</code> objects, which specify the input sources
   *             to be used by the algorithm.</p>
   */
  TrainingChannels: ChannelSpecification[] | undefined;

  /**
   * <p>The Amazon ECR registry path of the Docker image that contains the training
   *             algorithm.</p>
   */
  TrainingImage: string | undefined;

  /**
   * <p>An MD5 hash of the training algorithm that identifies the Docker image used for
   *             training.</p>
   */
  TrainingImageDigest?: string;
}

export namespace TrainingSpecification {
  export const filterSensitiveLog = (obj: TrainingSpecification): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrainingSpecification =>
    __isa(o, "TrainingSpecification");
}

/**
 * <p>Describes the location of the channel data.</p>
 */
export interface TransformDataSource {
  __type?: "TransformDataSource";
  /**
   * <p>The S3 location of the data source that is associated with a channel.</p>
   */
  S3DataSource: TransformS3DataSource | undefined;
}

export namespace TransformDataSource {
  export const filterSensitiveLog = (obj: TransformDataSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransformDataSource =>
    __isa(o, "TransformDataSource");
}

/**
 * <p>Describes the input source of a transform job and the way the transform job consumes
 *             it.</p>
 */
export interface TransformInput {
  __type?: "TransformInput";
  /**
   * <p>If your transform data
   *             is
   *             compressed, specify the compression type. Amazon SageMaker automatically
   *             decompresses the data for the transform job accordingly. The default value is
   *                 <code>None</code>.</p>
   */
  CompressionType?: CompressionType | string;

  /**
   * <p>The multipurpose internet mail extension
   *             (MIME)
   *             type of the data. Amazon SageMaker uses the MIME type with each http call to
   *             transfer data to the transform job.</p>
   */
  ContentType?: string;

  /**
   * <p>Describes the location of
   *             the
   *             channel data, which is, the S3 location of the input data that the
   *             model can consume.</p>
   */
  DataSource: TransformDataSource | undefined;

  /**
   * <p>The method to use to split the transform job's data files into smaller batches.
   *             Splitting is necessary when the total size of each object is too large to fit in a
   *             single request. You can also use data splitting to improve performance by processing
   *             multiple concurrent mini-batches. The default value for <code>SplitType</code> is
   *                 <code>None</code>, which indicates that input data files are not split, and request
   *             payloads contain the entire contents of an input object. Set the value of this parameter
   *             to <code>Line</code> to split records on a newline character boundary.
   *                 <code>SplitType</code> also supports a number of record-oriented binary data
   *             formats.</p>
   *         <p>When splitting is enabled, the size of a mini-batch depends on the values of the
   *                 <code>BatchStrategy</code> and <code>MaxPayloadInMB</code> parameters. When the
   *             value of <code>BatchStrategy</code> is <code>MultiRecord</code>, Amazon SageMaker sends the maximum
   *             number of records in each request, up to the <code>MaxPayloadInMB</code> limit. If the
   *             value of <code>BatchStrategy</code> is <code>SingleRecord</code>, Amazon SageMaker sends individual
   *             records in each request.</p>
   *         <note>
   *             <p>Some data formats represent a record as a binary payload wrapped with extra
   *                 padding bytes. When splitting is applied to a binary data format, padding is removed
   *                 if the value of <code>BatchStrategy</code> is set to <code>SingleRecord</code>.
   *                 Padding is not removed if the value of <code>BatchStrategy</code> is set to
   *                     <code>MultiRecord</code>.</p>
   *             <p>For more information about <code>RecordIO</code>, see <a href="https://mxnet.apache.org/api/faq/recordio">Create a Dataset Using
   *                     RecordIO</a> in the MXNet documentation. For more information about
   *                     <code>TFRecord</code>, see <a href="https://www.tensorflow.org/guide/datasets#consuming_tfrecord_data">Consuming TFRecord data</a> in the TensorFlow documentation.</p>
   *         </note>
   */
  SplitType?: SplitType | string;
}

export namespace TransformInput {
  export const filterSensitiveLog = (obj: TransformInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransformInput =>
    __isa(o, "TransformInput");
}

export enum TransformInstanceType {
  ML_C4_2XLARGE = "ml.c4.2xlarge",
  ML_C4_4XLARGE = "ml.c4.4xlarge",
  ML_C4_8XLARGE = "ml.c4.8xlarge",
  ML_C4_XLARGE = "ml.c4.xlarge",
  ML_C5_18XLARGE = "ml.c5.18xlarge",
  ML_C5_2XLARGE = "ml.c5.2xlarge",
  ML_C5_4XLARGE = "ml.c5.4xlarge",
  ML_C5_9XLARGE = "ml.c5.9xlarge",
  ML_C5_XLARGE = "ml.c5.xlarge",
  ML_M4_10XLARGE = "ml.m4.10xlarge",
  ML_M4_16XLARGE = "ml.m4.16xlarge",
  ML_M4_2XLARGE = "ml.m4.2xlarge",
  ML_M4_4XLARGE = "ml.m4.4xlarge",
  ML_M4_XLARGE = "ml.m4.xlarge",
  ML_M5_12XLARGE = "ml.m5.12xlarge",
  ML_M5_24XLARGE = "ml.m5.24xlarge",
  ML_M5_2XLARGE = "ml.m5.2xlarge",
  ML_M5_4XLARGE = "ml.m5.4xlarge",
  ML_M5_LARGE = "ml.m5.large",
  ML_M5_XLARGE = "ml.m5.xlarge",
  ML_P2_16XLARGE = "ml.p2.16xlarge",
  ML_P2_8XLARGE = "ml.p2.8xlarge",
  ML_P2_XLARGE = "ml.p2.xlarge",
  ML_P3_16XLARGE = "ml.p3.16xlarge",
  ML_P3_2XLARGE = "ml.p3.2xlarge",
  ML_P3_8XLARGE = "ml.p3.8xlarge"
}

/**
 * <p>Defines the input needed to run a transform job using the inference specification
 *             specified in the algorithm.</p>
 */
export interface TransformJobDefinition {
  __type?: "TransformJobDefinition";
  /**
   * <p>A string that determines the number of records included in a single mini-batch.</p>
   *         <p>
   *             <code>SingleRecord</code> means only one record is used per mini-batch.
   *                 <code>MultiRecord</code> means a mini-batch is set to contain as many records that
   *             can fit within the <code>MaxPayloadInMB</code> limit.</p>
   */
  BatchStrategy?: BatchStrategy | string;

  /**
   * <p>The environment variables to set in the Docker container. We support up to 16 key and
   *             values entries in the map.</p>
   */
  Environment?: { [key: string]: string };

  /**
   * <p>The maximum number of parallel requests that can be sent to each instance in a
   *             transform job. The default value is 1.</p>
   */
  MaxConcurrentTransforms?: number;

  /**
   * <p>The maximum payload size allowed, in MB. A payload is the data portion of a record
   *             (without metadata).</p>
   */
  MaxPayloadInMB?: number;

  /**
   * <p>A description of the input source and the way the transform job consumes it.</p>
   */
  TransformInput: TransformInput | undefined;

  /**
   * <p>Identifies the Amazon S3 location where you want Amazon SageMaker to save the results
   *             from the transform job.</p>
   */
  TransformOutput: TransformOutput | undefined;

  /**
   * <p>Identifies the ML compute instances for the transform job.</p>
   */
  TransformResources: TransformResources | undefined;
}

export namespace TransformJobDefinition {
  export const filterSensitiveLog = (obj: TransformJobDefinition): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransformJobDefinition =>
    __isa(o, "TransformJobDefinition");
}

export enum TransformJobStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping"
}

/**
 * <p>Provides a
 *             summary
 *             of a transform job. Multiple <code>TransformJobSummary</code> objects are returned as a
 *             list after in response to a <a>ListTransformJobs</a> call.</p>
 */
export interface TransformJobSummary {
  __type?: "TransformJobSummary";
  /**
   * <p>A timestamp that shows when the transform Job was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>If the transform job failed,
   *             the
   *             reason it failed.</p>
   */
  FailureReason?: string;

  /**
   * <p>Indicates when the transform job was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>Indicates when the transform
   *             job
   *             ends on compute instances. For successful jobs and stopped jobs, this
   *             is the exact time
   *             recorded
   *             after the results are uploaded. For failed jobs, this is when Amazon SageMaker
   *             detected that the job failed.</p>
   */
  TransformEndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the transform job.</p>
   */
  TransformJobArn: string | undefined;

  /**
   * <p>The name of the transform job.</p>
   */
  TransformJobName: string | undefined;

  /**
   * <p>The status of the transform job.</p>
   */
  TransformJobStatus: TransformJobStatus | string | undefined;
}

export namespace TransformJobSummary {
  export const filterSensitiveLog = (obj: TransformJobSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransformJobSummary =>
    __isa(o, "TransformJobSummary");
}

/**
 * <p>Describes the results of a transform job.</p>
 */
export interface TransformOutput {
  __type?: "TransformOutput";
  /**
   * <p>The MIME type used to specify the output data. Amazon SageMaker uses the MIME type with each http
   *             call to transfer data from the transform job.</p>
   */
  Accept?: string;

  /**
   * <p>Defines how to assemble the results of the transform job as a single S3 object. Choose
   *             a format that is most convenient to you. To concatenate the results in binary format,
   *             specify <code>None</code>. To add a newline character at the end of every transformed
   *             record, specify
   *             <code>Line</code>.</p>
   */
  AssembleWith?: AssemblyType | string;

  /**
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using
   *             Amazon S3 server-side encryption. The <code>KmsKeyId</code> can be any of the following
   *             formats: </p>
   *         <ul>
   *             <li>
   *                 <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>Key ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>Alias name: <code>alias/ExampleAlias</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>Alias name ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias</code>
   *                 </p>
   *             </li>
   *          </ul>
   *
   *
   *         <p>If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your
   *             role's account. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html">KMS-Managed Encryption Keys</a> in the
   *                 <i>Amazon Simple Storage Service
   *                 Developer Guide.</i>
   *
   *          </p>
   *         <p>The KMS key policy must grant permission to the IAM role that you specify in your
   *                 <a>CreateModel</a> request. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Using
   *                 Key Policies in AWS KMS</a> in the <i>AWS Key Management Service Developer
   *                 Guide</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon S3 path where you want Amazon SageMaker to store the results of the transform job. For
   *             example, <code>s3://bucket-name/key-name-prefix</code>.</p>
   *         <p>For every S3 object used as input for the transform job, batch transform stores the
   *             transformed data with an .<code>out</code> suffix in a corresponding subfolder in the
   *             location in the output prefix. For example, for the input data stored at
   *                 <code>s3://bucket-name/input-name-prefix/dataset01/data.csv</code>, batch transform
   *             stores the transformed data at
   *                 <code>s3://bucket-name/output-name-prefix/input-name-prefix/data.csv.out</code>.
   *             Batch transform doesn't upload partially processed objects. For an input S3 object that
   *             contains multiple records, it creates an .<code>out</code> file only if the transform
   *             job succeeds on the entire file. When the input contains multiple S3 objects, the batch
   *             transform job processes the listed S3 objects and uploads only the output for
   *             successfully processed objects. If any object fails in the transform job batch transform
   *             marks the job as failed to prompt investigation.</p>
   */
  S3OutputPath: string | undefined;
}

export namespace TransformOutput {
  export const filterSensitiveLog = (obj: TransformOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransformOutput =>
    __isa(o, "TransformOutput");
}

/**
 * <p>Describes the resources, including ML instance types and ML instance count, to use for
 *             transform job.</p>
 */
export interface TransformResources {
  __type?: "TransformResources";
  /**
   * <p>The number of
   *             ML
   *             compute instances to use in the transform job. For distributed
   *             transform jobs, specify a value greater than 1. The default value is
   *             <code>1</code>.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>The ML compute instance type for the transform job. If you are using built-in
   *             algorithms to
   *             transform
   *             moderately sized datasets, we recommend using ml.m4.xlarge or
   *             <code>ml.m5.large</code>
   *          instance types.</p>
   */
  InstanceType: TransformInstanceType | string | undefined;

  /**
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt model data on the storage volume
   *             attached to the ML compute instance(s) that run the batch transform job. The
   *                 <code>VolumeKmsKeyId</code> can be any of the following formats:</p>
   *         <ul>
   *             <li>
   *                 <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>Key ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>Alias name ARN:
   *                         <code>arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;
}

export namespace TransformResources {
  export const filterSensitiveLog = (obj: TransformResources): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransformResources =>
    __isa(o, "TransformResources");
}

/**
 * <p>Describes the S3 data source.</p>
 */
export interface TransformS3DataSource {
  __type?: "TransformS3DataSource";
  /**
   * <p>If you choose <code>S3Prefix</code>, <code>S3Uri</code> identifies a key name prefix.
   *             Amazon SageMaker uses all objects with the specified key name prefix for batch transform. </p>
   *         <p>If you choose <code>ManifestFile</code>, <code>S3Uri</code> identifies an object that
   *             is a manifest file containing a list of object keys that you want Amazon SageMaker to use for batch
   *             transform. </p>
   *         <p>The following values are compatible: <code>ManifestFile</code>,
   *             <code>S3Prefix</code>
   *          </p>
   *         <p>The following value is not compatible: <code>AugmentedManifestFile</code>
   *          </p>
   */
  S3DataType: S3DataType | string | undefined;

  /**
   * <p>Depending on the value specified for the <code>S3DataType</code>, identifies either a
   *             key name prefix or a manifest. For example:</p>
   *         <ul>
   *             <li>
   *                 <p> A key name prefix might look like this:
   *                         <code>s3://bucketname/exampleprefix</code>. </p>
   *             </li>
   *             <li>
   *                 <p> A manifest might look like this:
   *                         <code>s3://bucketname/example.manifest</code>
   *                 </p>
   *                 <p> The manifest is an S3 object which is a JSON file with the following format: </p>
   *                 <p>
   *                     <code>[ {"prefix": "s3://customer_bucket/some/prefix/"},</code>
   *                 </p>
   *                 <p>
   *                     <code>"relative/path/to/custdata-1",</code>
   *                 </p>
   *                 <p>
   *                     <code>"relative/path/custdata-2",</code>
   *                 </p>
   *                 <p>
   *                     <code>...</code>
   *                 </p>
   *                 <p>
   *                     <code>"relative/path/custdata-N"</code>
   *                 </p>
   *                 <p>
   *                     <code>]</code>
   *                 </p>
   *                 <p> The preceding JSON matches the following <code>s3Uris</code>: </p>
   *                 <p>
   *                     <code>s3://customer_bucket/some/prefix/relative/path/to/custdata-1</code>
   *                 </p>
   *                 <p>
   *                     <code>s3://customer_bucket/some/prefix/relative/path/custdata-2</code>
   *                 </p>
   *                 <p>
   *                     <code>...</code>
   *                 </p>
   *                 <p>
   *                     <code>s3://customer_bucket/some/prefix/relative/path/custdata-N</code>
   *                 </p>
   *                 <p> The complete set of <code>S3Uris</code> in this manifest constitutes the
   *                     input data for the channel for this datasource. The object that each
   *                         <code>S3Uris</code> points to must be readable by the IAM role that Amazon SageMaker
   *                     uses to perform tasks on your behalf.</p>
   *             </li>
   *          </ul>
   */
  S3Uri: string | undefined;
}

export namespace TransformS3DataSource {
  export const filterSensitiveLog = (obj: TransformS3DataSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransformS3DataSource =>
    __isa(o, "TransformS3DataSource");
}

/**
 * <p>A summary of the properties of a trial as returned by the
 *       <a>Search</a> API.</p>
 */
export interface Trial {
  __type?: "Trial";
  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the trial was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't
   *       specified, <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the experiment the trial is part of.</p>
   */
  ExperimentName?: string;

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>Who last modified the trial.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The source of the trial.</p>
   */
  Source?: TrialSource;

  /**
   * <p>The list of tags that are associated with the trial. You can use
   *       <a>Search</a> API to search on the tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;

  /**
   * <p>A list of the components associated with the trial. For each component, a summary of the
   *       component's properties is included.</p>
   */
  TrialComponentSummaries?: TrialComponentSimpleSummary[];

  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;
}

export namespace Trial {
  export const filterSensitiveLog = (obj: Trial): any => ({
    ...obj
  });
  export const isa = (o: any): o is Trial => __isa(o, "Trial");
}

/**
 * <p>A summary of the properties of a trial component as returned by the
 *       <a>Search</a> API.</p>
 */
export interface TrialComponent {
  __type?: "TrialComponent";
  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't
   *       specified, <code>TrialComponentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input artifacts of the component.</p>
   */
  InputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>When the component was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The metrics for the component.</p>
   */
  Metrics?: TrialComponentMetricSummary[];

  /**
   * <p>The output artifacts of the component.</p>
   */
  OutputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The hyperparameters of the component.</p>
   */
  Parameters?: { [key: string]: TrialComponentParameterValue };

  /**
   * <p>An array of the parents of the component. A parent is a trial the component is
   *       associated with and the experiment the trial is part of. A component might not have any
   *       parents.</p>
   */
  Parents?: Parent[];

  /**
   * <p>The source of the trial component.</p>
   */
  Source?: TrialComponentSource;

  /**
   * <p>The source of the trial component.></p>
   */
  SourceDetail?: TrialComponentSourceDetail;

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of the trial component.</p>
   */
  Status?: TrialComponentStatus;

  /**
   * <p>The list of tags that are associated with the component. You can use
   *       <a>Search</a> API to search on the tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;
}

export namespace TrialComponent {
  export const filterSensitiveLog = (obj: TrialComponent): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrialComponent =>
    __isa(o, "TrialComponent");
}

/**
 * <p>Represents an input or output artifact of a trial component. You specify
 *       <code>TrialComponentArtifact</code> as part of the
 *       <code>InputArtifacts</code> and <code>OutputArtifacts</code>
 *       parameters in the <a>CreateTrialComponent</a> request.</p>
 *          <p>Examples of input artifacts are  datasets, algorithms, hyperparameters, source code, and
 *       instance types. Examples of output artifacts are metrics, snapshots, logs, and images.</p>
 */
export interface TrialComponentArtifact {
  __type?: "TrialComponentArtifact";
  /**
   * <p>The media type of the artifact, which indicates the type of data in the artifact file.
   *       The media type consists of a <i>type</i> and a <i>subtype</i>
   *       concatenated with a slash (/) character, for example, text/csv, image/jpeg, and s3/uri. The
   *       type specifies the category of the media. The subtype specifies the kind of data.</p>
   */
  MediaType?: string;

  /**
   * <p>The location of the artifact.</p>
   */
  Value: string | undefined;
}

export namespace TrialComponentArtifact {
  export const filterSensitiveLog = (obj: TrialComponentArtifact): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrialComponentArtifact =>
    __isa(o, "TrialComponentArtifact");
}

/**
 * <p>A summary of the metrics of a trial component.</p>
 */
export interface TrialComponentMetricSummary {
  __type?: "TrialComponentMetricSummary";
  /**
   * <p>The average value of the metric.</p>
   */
  Avg?: number;

  /**
   * <p>The number of samples used to generate the metric.</p>
   */
  Count?: number;

  /**
   * <p>The most recent value of the metric.</p>
   */
  Last?: number;

  /**
   * <p>The maximum value of the metric.</p>
   */
  Max?: number;

  /**
   * <p>The name of the metric.</p>
   */
  MetricName?: string;

  /**
   * <p>The minimum value of the metric.</p>
   */
  Min?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn?: string;

  /**
   * <p>The standard deviation of the metric.</p>
   */
  StdDev?: number;

  /**
   * <p>When the metric was last updated.</p>
   */
  TimeStamp?: Date;
}

export namespace TrialComponentMetricSummary {
  export const filterSensitiveLog = (
    obj: TrialComponentMetricSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrialComponentMetricSummary =>
    __isa(o, "TrialComponentMetricSummary");
}

/**
 * <p>The value of a hyperparameter.
 *       Only one of <code>NumberValue</code> or <code>StringValue</code> can be specified.</p>
 *          <p>This object is specified in the <a>CreateTrialComponent</a> request.</p>
 */
export interface TrialComponentParameterValue {
  __type?: "TrialComponentParameterValue";
  /**
   * <p>The numeric value of a numeric hyperparameter. If you specify a value for this
   *      parameter, you can't specify the <code>StringValue</code> parameter.</p>
   */
  NumberValue?: number;

  /**
   * <p>The string value of a categorical hyperparameter. If you specify a value for this
   *      parameter, you can't specify the <code>NumberValue</code> parameter.</p>
   */
  StringValue?: string;
}

export namespace TrialComponentParameterValue {
  export const filterSensitiveLog = (
    obj: TrialComponentParameterValue
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrialComponentParameterValue =>
    __isa(o, "TrialComponentParameterValue");
}

export enum TrialComponentPrimaryStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress"
}

/**
 * <p>A short summary of a trial component.</p>
 */
export interface TrialComponentSimpleSummary {
  __type?: "TrialComponentSimpleSummary";
  /**
   * <p>Information about the user who created or modified an experiment, trial, or trial
   *       component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>The source of the trial component.</p>
   */
  TrialComponentSource?: TrialComponentSource;
}

export namespace TrialComponentSimpleSummary {
  export const filterSensitiveLog = (
    obj: TrialComponentSimpleSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrialComponentSimpleSummary =>
    __isa(o, "TrialComponentSimpleSummary");
}

/**
 * <p>The source of the trial component.</p>
 */
export interface TrialComponentSource {
  __type?: "TrialComponentSource";
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The source job type.</p>
   */
  SourceType?: string;
}

export namespace TrialComponentSource {
  export const filterSensitiveLog = (obj: TrialComponentSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrialComponentSource =>
    __isa(o, "TrialComponentSource");
}

/**
 * <p>Detailed information about the source of a trial component.</p>
 */
export interface TrialComponentSourceDetail {
  __type?: "TrialComponentSourceDetail";
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn?: string;

  /**
   * <p>Contains information about a training job.</p>
   */
  TrainingJob?: TrainingJob;
}

export namespace TrialComponentSourceDetail {
  export const filterSensitiveLog = (obj: TrialComponentSourceDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrialComponentSourceDetail =>
    __isa(o, "TrialComponentSourceDetail");
}

/**
 * <p>The status of the trial component.</p>
 */
export interface TrialComponentStatus {
  __type?: "TrialComponentStatus";
  /**
   * <p>If the component failed, a message describing why.</p>
   */
  Message?: string;

  /**
   * <p>The status of the trial component.</p>
   */
  PrimaryStatus?: TrialComponentPrimaryStatus | string;
}

export namespace TrialComponentStatus {
  export const filterSensitiveLog = (obj: TrialComponentStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrialComponentStatus =>
    __isa(o, "TrialComponentStatus");
}

/**
 * <p>A summary of the properties of a trial component. To get all the
 *       properties, call the <a>DescribeTrialComponent</a> API and provide the
 *       <code>TrialComponentName</code>.</p>
 */
export interface TrialComponentSummary {
  __type?: "TrialComponentSummary";
  /**
   * <p>Who created the component.</p>
   */
  CreatedBy?: UserContext;

  /**
   * <p>When the component was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The name of the component as displayed. If <code>DisplayName</code> isn't
   *       specified, <code>TrialComponentName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>Who last modified the component.</p>
   */
  LastModifiedBy?: UserContext;

  /**
   * <p>When the component was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of the component. States include:</p>
   *          <ul>
   *             <li>
   *                <p>InProgress</p>
   *             </li>
   *             <li>
   *                <p>Completed</p>
   *             </li>
   *             <li>
   *                <p>Failed</p>
   *             </li>
   *          </ul>
   */
  Status?: TrialComponentStatus;

  /**
   * <p>The ARN of the trial component.</p>
   */
  TrialComponentArn?: string;

  /**
   * <p>The name of the trial component.</p>
   */
  TrialComponentName?: string;

  /**
   * <p>The source of the trial component.</p>
   */
  TrialComponentSource?: TrialComponentSource;
}

export namespace TrialComponentSummary {
  export const filterSensitiveLog = (obj: TrialComponentSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrialComponentSummary =>
    __isa(o, "TrialComponentSummary");
}

/**
 * <p>The source of the trial.</p>
 */
export interface TrialSource {
  __type?: "TrialSource";
  /**
   * <p>The Amazon Resource Name (ARN) of the source.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The source job type.</p>
   */
  SourceType?: string;
}

export namespace TrialSource {
  export const filterSensitiveLog = (obj: TrialSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrialSource => __isa(o, "TrialSource");
}

/**
 * <p>A summary of the properties of a trial. To get the complete set of properties, call
 *       the <a>DescribeTrial</a> API and provide the <code>TrialName</code>.</p>
 */
export interface TrialSummary {
  __type?: "TrialSummary";
  /**
   * <p>When the trial was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The name of the trial as displayed. If <code>DisplayName</code> isn't
   *       specified, <code>TrialName</code> is displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>When the trial was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;

  /**
   * <p>The name of the trial.</p>
   */
  TrialName?: string;

  /**
   * <p>The source of the trial.</p>
   */
  TrialSource?: TrialSource;
}

export namespace TrialSummary {
  export const filterSensitiveLog = (obj: TrialSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is TrialSummary => __isa(o, "TrialSummary");
}

/**
 * <p>The job completion criteria.</p>
 */
export interface TuningJobCompletionCriteria {
  __type?: "TuningJobCompletionCriteria";
  /**
   * <p>The objective metric's value.</p>
   */
  TargetObjectiveMetricValue: number | undefined;
}

export namespace TuningJobCompletionCriteria {
  export const filterSensitiveLog = (
    obj: TuningJobCompletionCriteria
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TuningJobCompletionCriteria =>
    __isa(o, "TuningJobCompletionCriteria");
}

/**
 * <p>Provided configuration information for the worker UI for a labeling job. </p>
 */
export interface UiConfig {
  __type?: "UiConfig";
  /**
   * <p>The Amazon S3 bucket location of the UI template. For more information about the contents
   *             of a UI template, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-custom-templates-step2.html"> Creating Your Custom
   *                 Labeling Task Template</a>.</p>
   */
  UiTemplateS3Uri: string | undefined;
}

export namespace UiConfig {
  export const filterSensitiveLog = (obj: UiConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is UiConfig => __isa(o, "UiConfig");
}

/**
 * <p>The Liquid template for the worker user interface.</p>
 */
export interface UiTemplate {
  __type?: "UiTemplate";
  /**
   * <p>The content of the Liquid template for the worker user interface.</p>
   */
  Content: string | undefined;
}

export namespace UiTemplate {
  export const filterSensitiveLog = (obj: UiTemplate): any => ({
    ...obj
  });
  export const isa = (o: any): o is UiTemplate => __isa(o, "UiTemplate");
}

/**
 * <p>Container for user interface template information.</p>
 */
export interface UiTemplateInfo {
  __type?: "UiTemplateInfo";
  /**
   * <p>The SHA 256 hash that you used to create the request signature.</p>
   */
  ContentSha256?: string;

  /**
   * <p>The URL for the user interface template.</p>
   */
  Url?: string;
}

export namespace UiTemplateInfo {
  export const filterSensitiveLog = (obj: UiTemplateInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is UiTemplateInfo =>
    __isa(o, "UiTemplateInfo");
}

export interface UpdateCodeRepositoryInput {
  __type?: "UpdateCodeRepositoryInput";
  /**
   * <p>The name of the Git repository to update.</p>
   */
  CodeRepositoryName: string | undefined;

  /**
   * <p>The configuration of the git repository, including the URL and the Amazon Resource
   *             Name (ARN) of the AWS Secrets Manager secret that contains the credentials used to
   *             access the repository. The secret must have a staging label of <code>AWSCURRENT</code>
   *             and must be in the following format:</p>
   *         <p>
   *             <code>{"username": <i>UserName</i>, "password":
   *                     <i>Password</i>}</code>
   *         </p>
   */
  GitConfig?: GitConfigForUpdate;
}

export namespace UpdateCodeRepositoryInput {
  export const filterSensitiveLog = (obj: UpdateCodeRepositoryInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateCodeRepositoryInput =>
    __isa(o, "UpdateCodeRepositoryInput");
}

export interface UpdateCodeRepositoryOutput {
  __type?: "UpdateCodeRepositoryOutput";
  /**
   * <p>The ARN of the Git repository.</p>
   */
  CodeRepositoryArn: string | undefined;
}

export namespace UpdateCodeRepositoryOutput {
  export const filterSensitiveLog = (obj: UpdateCodeRepositoryOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateCodeRepositoryOutput =>
    __isa(o, "UpdateCodeRepositoryOutput");
}

export interface UpdateDomainRequest {
  __type?: "UpdateDomainRequest";
  /**
   * <p>A collection of settings.</p>
   */
  DefaultUserSettings?: UserSettings;

  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;
}

export namespace UpdateDomainRequest {
  export const filterSensitiveLog = (obj: UpdateDomainRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDomainRequest =>
    __isa(o, "UpdateDomainRequest");
}

export interface UpdateDomainResponse {
  __type?: "UpdateDomainResponse";
  /**
   * <p>The domain Amazon Resource Name (ARN).</p>
   */
  DomainArn?: string;
}

export namespace UpdateDomainResponse {
  export const filterSensitiveLog = (obj: UpdateDomainResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDomainResponse =>
    __isa(o, "UpdateDomainResponse");
}

export interface UpdateEndpointInput {
  __type?: "UpdateEndpointInput";
  /**
   * <p>The name of the new endpoint configuration.</p>
   */
  EndpointConfigName: string | undefined;

  /**
   * <p>The name of the endpoint whose configuration you want to update.</p>
   */
  EndpointName: string | undefined;
}

export namespace UpdateEndpointInput {
  export const filterSensitiveLog = (obj: UpdateEndpointInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateEndpointInput =>
    __isa(o, "UpdateEndpointInput");
}

export interface UpdateEndpointOutput {
  __type?: "UpdateEndpointOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

export namespace UpdateEndpointOutput {
  export const filterSensitiveLog = (obj: UpdateEndpointOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateEndpointOutput =>
    __isa(o, "UpdateEndpointOutput");
}

export interface UpdateEndpointWeightsAndCapacitiesInput {
  __type?: "UpdateEndpointWeightsAndCapacitiesInput";
  /**
   * <p>An object that provides new capacity and weight values for a variant.</p>
   */
  DesiredWeightsAndCapacities: DesiredWeightAndCapacity[] | undefined;

  /**
   * <p>The name of an existing Amazon SageMaker endpoint.</p>
   */
  EndpointName: string | undefined;
}

export namespace UpdateEndpointWeightsAndCapacitiesInput {
  export const filterSensitiveLog = (
    obj: UpdateEndpointWeightsAndCapacitiesInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateEndpointWeightsAndCapacitiesInput =>
    __isa(o, "UpdateEndpointWeightsAndCapacitiesInput");
}

export interface UpdateEndpointWeightsAndCapacitiesOutput {
  __type?: "UpdateEndpointWeightsAndCapacitiesOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the updated endpoint.</p>
   */
  EndpointArn: string | undefined;
}

export namespace UpdateEndpointWeightsAndCapacitiesOutput {
  export const filterSensitiveLog = (
    obj: UpdateEndpointWeightsAndCapacitiesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateEndpointWeightsAndCapacitiesOutput =>
    __isa(o, "UpdateEndpointWeightsAndCapacitiesOutput");
}

export interface UpdateExperimentRequest {
  __type?: "UpdateExperimentRequest";
  /**
   * <p>The description of the experiment.</p>
   */
  Description?: string;

  /**
   * <p>The name of the experiment as displayed. The name doesn't need to be
   *       unique. If <code>DisplayName</code> isn't specified, <code>ExperimentName</code> is
   *       displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the experiment to update.</p>
   */
  ExperimentName: string | undefined;
}

export namespace UpdateExperimentRequest {
  export const filterSensitiveLog = (obj: UpdateExperimentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateExperimentRequest =>
    __isa(o, "UpdateExperimentRequest");
}

export interface UpdateExperimentResponse {
  __type?: "UpdateExperimentResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the experiment.</p>
   */
  ExperimentArn?: string;
}

export namespace UpdateExperimentResponse {
  export const filterSensitiveLog = (obj: UpdateExperimentResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateExperimentResponse =>
    __isa(o, "UpdateExperimentResponse");
}

export interface UpdateMonitoringScheduleRequest {
  __type?: "UpdateMonitoringScheduleRequest";
  /**
   * <p>The configuration object that specifies the monitoring schedule and defines the
   *          monitoring job.</p>
   */
  MonitoringScheduleConfig: MonitoringScheduleConfig | undefined;

  /**
   * <p>The name of the monitoring schedule. The name must be unique within an AWS Region within
   *          an AWS account.</p>
   */
  MonitoringScheduleName: string | undefined;
}

export namespace UpdateMonitoringScheduleRequest {
  export const filterSensitiveLog = (
    obj: UpdateMonitoringScheduleRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateMonitoringScheduleRequest =>
    __isa(o, "UpdateMonitoringScheduleRequest");
}

export interface UpdateMonitoringScheduleResponse {
  __type?: "UpdateMonitoringScheduleResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the monitoring schedule.</p>
   */
  MonitoringScheduleArn: string | undefined;
}

export namespace UpdateMonitoringScheduleResponse {
  export const filterSensitiveLog = (
    obj: UpdateMonitoringScheduleResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateMonitoringScheduleResponse =>
    __isa(o, "UpdateMonitoringScheduleResponse");
}

export interface UpdateNotebookInstanceInput {
  __type?: "UpdateNotebookInstanceInput";
  /**
   * <p>A list of the Elastic Inference (EI) instance types to associate with this notebook
   *             instance. Currently only one EI instance type can be associated with a notebook
   *             instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html">Using Elastic Inference in Amazon
   *                 SageMaker</a>.</p>
   */
  AcceleratorTypes?: (NotebookInstanceAcceleratorType | string)[];

  /**
   * <p>An array of up to three Git repositories to associate with the notebook instance.
   *             These can be either the names of Git repositories stored as resources in your account,
   *             or the URL of Git repositories in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
   *             other Git repository. These repositories are cloned at the same level as the default
   *             repository of your notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git
   *                 Repositories with Amazon SageMaker Notebook Instances</a>.</p>
   */
  AdditionalCodeRepositories?: string[];

  /**
   * <p>The Git repository to associate with the notebook instance as its default code
   *             repository. This can be either the name of a Git repository stored as a resource in your
   *             account, or the URL of a Git repository in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
   *             other Git repository. When you open a notebook instance, it opens in the directory that
   *             contains this repository. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/nbi-git-repo.html">Associating Git Repositories with Amazon SageMaker
   *                 Notebook Instances</a>.</p>
   */
  DefaultCodeRepository?: string;

  /**
   * <p>A list of the Elastic Inference (EI) instance types to remove from this notebook
   *             instance. This operation is idempotent. If you specify an accelerator type that is not
   *             associated with the notebook instance when you call this method, it does not throw an
   *             error.</p>
   */
  DisassociateAcceleratorTypes?: boolean;

  /**
   * <p>A list of names or URLs of the default Git repositories to remove from this notebook
   *             instance. This operation is idempotent. If you specify a Git repository that is not
   *             associated with the notebook instance when you call this method, it does not throw an
   *             error.</p>
   */
  DisassociateAdditionalCodeRepositories?: boolean;

  /**
   * <p>The name or URL of the default Git repository to remove from this notebook instance.
   *             This operation is idempotent. If you specify a Git repository that is not associated
   *             with the notebook instance when you call this method, it does not throw an error.</p>
   */
  DisassociateDefaultCodeRepository?: boolean;

  /**
   * <p>Set to <code>true</code> to remove the notebook instance lifecycle configuration
   *             currently associated with the notebook instance. This operation is idempotent. If you
   *             specify a lifecycle configuration that is not associated with the notebook instance when
   *             you call this method, it does not throw an error.</p>
   */
  DisassociateLifecycleConfig?: boolean;

  /**
   * <p>The Amazon ML compute instance type.</p>
   */
  InstanceType?: _InstanceType | string;

  /**
   * <p>The name of a lifecycle configuration to associate with the notebook instance. For
   *             information about lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional)
   *                 Customize a Notebook Instance</a>.</p>
   */
  LifecycleConfigName?: string;

  /**
   * <p>The name of the notebook instance to update.</p>
   */
  NotebookInstanceName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker can assume to access the
   *             notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">Amazon SageMaker Roles</a>. </p>
   *         <note>
   *             <p>To be able to pass this role to Amazon SageMaker, the caller of this API must have the
   *                     <code>iam:PassRole</code> permission.</p>
   *         </note>
   */
  RoleArn?: string;

  /**
   * <p>Whether root access is enabled or disabled for users of the notebook instance. The
   *             default value is <code>Enabled</code>.</p>
   *         <note>
   *             <p>If you set this to <code>Disabled</code>, users don't have root access on the
   *                 notebook instance, but lifecycle configuration scripts still run with root
   *                 permissions.</p>
   *         </note>
   */
  RootAccess?: RootAccess | string;

  /**
   * <p>The size, in GB, of the ML storage volume to attach to the notebook instance. The
   *             default value is 5 GB. ML storage volumes are encrypted, so Amazon SageMaker can't determine the
   *             amount of available free space on the volume. Because of this, you can increase the
   *             volume size when you update a notebook instance, but you can't decrease the volume size.
   *             If you want to decrease the size of the ML storage volume in use, create a new notebook
   *             instance with the desired size.</p>
   */
  VolumeSizeInGB?: number;
}

export namespace UpdateNotebookInstanceInput {
  export const filterSensitiveLog = (
    obj: UpdateNotebookInstanceInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateNotebookInstanceInput =>
    __isa(o, "UpdateNotebookInstanceInput");
}

export interface UpdateNotebookInstanceLifecycleConfigInput {
  __type?: "UpdateNotebookInstanceLifecycleConfigInput";
  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName: string | undefined;

  /**
   * <p>The shell script that runs only once, when you create a notebook instance. The shell
   *             script must be a base64-encoded string.</p>
   */
  OnCreate?: NotebookInstanceLifecycleHook[];

  /**
   * <p>The shell script that runs every time you start a notebook instance, including when
   *             you create the notebook instance. The shell script must be a base64-encoded
   *             string.</p>
   */
  OnStart?: NotebookInstanceLifecycleHook[];
}

export namespace UpdateNotebookInstanceLifecycleConfigInput {
  export const filterSensitiveLog = (
    obj: UpdateNotebookInstanceLifecycleConfigInput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is UpdateNotebookInstanceLifecycleConfigInput =>
    __isa(o, "UpdateNotebookInstanceLifecycleConfigInput");
}

export interface UpdateNotebookInstanceLifecycleConfigOutput {
  __type?: "UpdateNotebookInstanceLifecycleConfigOutput";
}

export namespace UpdateNotebookInstanceLifecycleConfigOutput {
  export const filterSensitiveLog = (
    obj: UpdateNotebookInstanceLifecycleConfigOutput
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is UpdateNotebookInstanceLifecycleConfigOutput =>
    __isa(o, "UpdateNotebookInstanceLifecycleConfigOutput");
}

export interface UpdateNotebookInstanceOutput {
  __type?: "UpdateNotebookInstanceOutput";
}

export namespace UpdateNotebookInstanceOutput {
  export const filterSensitiveLog = (
    obj: UpdateNotebookInstanceOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateNotebookInstanceOutput =>
    __isa(o, "UpdateNotebookInstanceOutput");
}

export interface UpdateTrialComponentRequest {
  __type?: "UpdateTrialComponentRequest";
  /**
   * <p>The name of the component as displayed. The name doesn't need to be
   *       unique. If <code>DisplayName</code> isn't specified, <code>TrialComponentName</code> is
   *       displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>When the component ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>Replaces all of the component's input artifacts with the specified artifacts.</p>
   */
  InputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The input artifacts to remove from the component.</p>
   */
  InputArtifactsToRemove?: string[];

  /**
   * <p>Replaces all of the component's output artifacts with the specified artifacts.</p>
   */
  OutputArtifacts?: { [key: string]: TrialComponentArtifact };

  /**
   * <p>The output artifacts to remove from the component.</p>
   */
  OutputArtifactsToRemove?: string[];

  /**
   * <p>Replaces all of the component's hyperparameters with the specified hyperparameters.</p>
   */
  Parameters?: { [key: string]: TrialComponentParameterValue };

  /**
   * <p>The hyperparameters to remove from the component.</p>
   */
  ParametersToRemove?: string[];

  /**
   * <p>When the component started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The new status of the component.</p>
   */
  Status?: TrialComponentStatus;

  /**
   * <p>The name of the component to update.</p>
   */
  TrialComponentName: string | undefined;
}

export namespace UpdateTrialComponentRequest {
  export const filterSensitiveLog = (
    obj: UpdateTrialComponentRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTrialComponentRequest =>
    __isa(o, "UpdateTrialComponentRequest");
}

export interface UpdateTrialComponentResponse {
  __type?: "UpdateTrialComponentResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the trial component.</p>
   */
  TrialComponentArn?: string;
}

export namespace UpdateTrialComponentResponse {
  export const filterSensitiveLog = (
    obj: UpdateTrialComponentResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTrialComponentResponse =>
    __isa(o, "UpdateTrialComponentResponse");
}

export interface UpdateTrialRequest {
  __type?: "UpdateTrialRequest";
  /**
   * <p>The name of the trial as displayed. The name doesn't need to be
   *       unique. If <code>DisplayName</code> isn't specified, <code>TrialName</code> is
   *       displayed.</p>
   */
  DisplayName?: string;

  /**
   * <p>The name of the trial to update.</p>
   */
  TrialName: string | undefined;
}

export namespace UpdateTrialRequest {
  export const filterSensitiveLog = (obj: UpdateTrialRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTrialRequest =>
    __isa(o, "UpdateTrialRequest");
}

export interface UpdateTrialResponse {
  __type?: "UpdateTrialResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the trial.</p>
   */
  TrialArn?: string;
}

export namespace UpdateTrialResponse {
  export const filterSensitiveLog = (obj: UpdateTrialResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTrialResponse =>
    __isa(o, "UpdateTrialResponse");
}

export interface UpdateUserProfileRequest {
  __type?: "UpdateUserProfileRequest";
  /**
   * <p>The domain ID.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName: string | undefined;

  /**
   * <p>A collection of settings.</p>
   */
  UserSettings?: UserSettings;
}

export namespace UpdateUserProfileRequest {
  export const filterSensitiveLog = (obj: UpdateUserProfileRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateUserProfileRequest =>
    __isa(o, "UpdateUserProfileRequest");
}

export interface UpdateUserProfileResponse {
  __type?: "UpdateUserProfileResponse";
  /**
   * <p>The user profile Amazon Resource Name (ARN).</p>
   */
  UserProfileArn?: string;
}

export namespace UpdateUserProfileResponse {
  export const filterSensitiveLog = (obj: UpdateUserProfileResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateUserProfileResponse =>
    __isa(o, "UpdateUserProfileResponse");
}

export interface UpdateWorkforceRequest {
  __type?: "UpdateWorkforceRequest";
  /**
   * <p>A list of one to four worker IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) that can be used to
   *             access tasks assigned to this workforce.</p>
   *         <p>Maximum: 4 CIDR values</p>
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * <p>The name of the private workforce whose access you want to restrict.
   *                 <code>WorkforceName</code> is automatically set to <code>"default"</code> when a
   *             workforce is created and cannot be modified. </p>
   */
  WorkforceName: string | undefined;
}

export namespace UpdateWorkforceRequest {
  export const filterSensitiveLog = (obj: UpdateWorkforceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateWorkforceRequest =>
    __isa(o, "UpdateWorkforceRequest");
}

export interface UpdateWorkforceResponse {
  __type?: "UpdateWorkforceResponse";
  /**
   * <p>A single private workforce, which is automatically created when you create your first
   *             private work team. You can create one private work force in each AWS Region. By default,
   *             any workforce related API operation used in a specific region will apply to the
   *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
   */
  Workforce: Workforce | undefined;
}

export namespace UpdateWorkforceResponse {
  export const filterSensitiveLog = (obj: UpdateWorkforceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateWorkforceResponse =>
    __isa(o, "UpdateWorkforceResponse");
}

export interface UpdateWorkteamRequest {
  __type?: "UpdateWorkteamRequest";
  /**
   * <p>An updated description for the work team.</p>
   */
  Description?: string;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contain the updated work team
   *             members.</p>
   */
  MemberDefinitions?: MemberDefinition[];

  /**
   * <p>Configures SNS topic notifications for available or expiring work items</p>
   */
  NotificationConfiguration?: NotificationConfiguration;

  /**
   * <p>The name of the work team to update.</p>
   */
  WorkteamName: string | undefined;
}

export namespace UpdateWorkteamRequest {
  export const filterSensitiveLog = (obj: UpdateWorkteamRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateWorkteamRequest =>
    __isa(o, "UpdateWorkteamRequest");
}

export interface UpdateWorkteamResponse {
  __type?: "UpdateWorkteamResponse";
  /**
   * <p>A <code>Workteam</code> object that describes the updated work team.</p>
   */
  Workteam: Workteam | undefined;
}

export namespace UpdateWorkteamResponse {
  export const filterSensitiveLog = (obj: UpdateWorkteamResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateWorkteamResponse =>
    __isa(o, "UpdateWorkteamResponse");
}

/**
 * <p>Represents an amount of money in United States dollars/</p>
 */
export interface USD {
  __type?: "USD";
  /**
   * <p>The fractional portion, in cents, of the amount. </p>
   */
  Cents?: number;

  /**
   * <p>The whole number of dollars in the amount.</p>
   */
  Dollars?: number;

  /**
   * <p>Fractions of a cent, in tenths.</p>
   */
  TenthFractionsOfACent?: number;
}

export namespace USD {
  export const filterSensitiveLog = (obj: USD): any => ({
    ...obj
  });
  export const isa = (o: any): o is USD => __isa(o, "USD");
}

/**
 * <p>Information about the user who created or modified an experiment, trial, or trial
 *       component.</p>
 */
export interface UserContext {
  __type?: "UserContext";
  /**
   * <p>The domain associated with the user.</p>
   */
  DomainId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user's profile.</p>
   */
  UserProfileArn?: string;

  /**
   * <p>The name of the user's profile.</p>
   */
  UserProfileName?: string;
}

export namespace UserContext {
  export const filterSensitiveLog = (obj: UserContext): any => ({
    ...obj
  });
  export const isa = (o: any): o is UserContext => __isa(o, "UserContext");
}

/**
 * <p>The user profile details.</p>
 */
export interface UserProfileDetails {
  __type?: "UserProfileDetails";
  /**
   * <p>The creation time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The domain ID.</p>
   */
  DomainId?: string;

  /**
   * <p>The last modified time.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The status.</p>
   */
  Status?: UserProfileStatus | string;

  /**
   * <p>The user profile name.</p>
   */
  UserProfileName?: string;
}

export namespace UserProfileDetails {
  export const filterSensitiveLog = (obj: UserProfileDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is UserProfileDetails =>
    __isa(o, "UserProfileDetails");
}

export enum UserProfileSortKey {
  CreationTime = "CreationTime",
  LastModifiedTime = "LastModifiedTime"
}

export enum UserProfileStatus {
  Deleting = "Deleting",
  Failed = "Failed",
  InService = "InService",
  Pending = "Pending"
}

/**
 * <p>A collection of settings.</p>
 */
export interface UserSettings {
  __type?: "UserSettings";
  /**
   * <p>The execution role for the user.</p>
   */
  ExecutionRole?: string;

  /**
   * <p>The Jupyter server's app settings.</p>
   */
  JupyterServerAppSettings?: JupyterServerAppSettings;

  /**
   * <p>The kernel gateway app settings.</p>
   */
  KernelGatewayAppSettings?: KernelGatewayAppSettings;

  /**
   * <p>The security groups.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The sharing settings.</p>
   */
  SharingSettings?: SharingSettings;

  /**
   * <p>The TensorBoard app settings.</p>
   */
  TensorBoardAppSettings?: TensorBoardAppSettings;
}

export namespace UserSettings {
  export const filterSensitiveLog = (obj: UserSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is UserSettings => __isa(o, "UserSettings");
}

/**
 * <p>Specifies a VPC that your training jobs and hosted models have access to. Control
 *             access to and from your training and model containers by configuring the VPC. For more
 *             information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs
 *                 by Using an Amazon Virtual Private Cloud</a>. </p>
 */
export interface VpcConfig {
  __type?: "VpcConfig";
  /**
   * <p>The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for
   *             the VPC that is specified in the <code>Subnets</code> field.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The ID of the subnets in the VPC to which you want to connect your training job or
   *             model. </p>
   *         <note>
   *             <p>Amazon EC2 P3 accelerated computing instances are not available in the c/d/e
   *                 availability zones of region us-east-1. If you want to create endpoints with P3
   *                 instances in VPC mode in region us-east-1, create subnets in a/b/f availability
   *                 zones instead.</p>
   *         </note>
   */
  Subnets: string[] | undefined;
}

export namespace VpcConfig {
  export const filterSensitiveLog = (obj: VpcConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is VpcConfig => __isa(o, "VpcConfig");
}

/**
 * <p>A single private workforce, which is automatically created when you create your first
 *             private work team. You can create one private work force in each AWS Region. By default,
 *             any workforce related API operation used in a specific region will apply to the
 *             workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.</p>
 */
export interface Workforce {
  __type?: "Workforce";
  /**
   * <p>The most recent date that  was used to
   *             successfully add one or more IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) to a private workforce's
   *             allow list.</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>A list of one to four IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>) to be added to the
   *             workforce allow list.</p>
   */
  SourceIpConfig?: SourceIpConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the private workforce.</p>
   */
  WorkforceArn: string | undefined;

  /**
   * <p>The name of the private workforce whose access you want to restrict.
   *                 <code>WorkforceName</code> is automatically set to <code>"default"</code> when a
   *             workforce is created and cannot be modified. </p>
   */
  WorkforceName: string | undefined;
}

export namespace Workforce {
  export const filterSensitiveLog = (obj: Workforce): any => ({
    ...obj
  });
  export const isa = (o: any): o is Workforce => __isa(o, "Workforce");
}

/**
 * <p>Provides details about a labeling work team.</p>
 */
export interface Workteam {
  __type?: "Workteam";
  /**
   * <p>The date and time that the work team was created (timestamp).</p>
   */
  CreateDate?: Date;

  /**
   * <p>A description of the work team.</p>
   */
  Description: string | undefined;

  /**
   * <p>The date and time that the work team was last updated (timestamp).</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>The Amazon Cognito user groups that make up the work team.</p>
   */
  MemberDefinitions: MemberDefinition[] | undefined;

  /**
   * <p>Configures SNS notifications of available or expiring work items for work
   *             teams.</p>
   */
  NotificationConfiguration?: NotificationConfiguration;

  /**
   * <p>The Amazon Marketplace identifier for a vendor's work team.</p>
   */
  ProductListingIds?: string[];

  /**
   * <p>The URI of the labeling job's user interface. Workers open this URI to start labeling
   *             your data objects.</p>
   */
  SubDomain?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the work team.</p>
   */
  WorkteamArn: string | undefined;

  /**
   * <p>The name of the work team.</p>
   */
  WorkteamName: string | undefined;
}

export namespace Workteam {
  export const filterSensitiveLog = (obj: Workteam): any => ({
    ...obj
  });
  export const isa = (o: any): o is Workteam => __isa(o, "Workteam");
}
