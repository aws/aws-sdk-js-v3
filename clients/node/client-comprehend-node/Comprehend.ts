import { ComprehendClient } from "./ComprehendClient";
import { BatchDetectDominantLanguageInput } from "./types/BatchDetectDominantLanguageInput";
import { BatchDetectDominantLanguageOutput } from "./types/BatchDetectDominantLanguageOutput";
import { BatchDetectEntitiesInput } from "./types/BatchDetectEntitiesInput";
import { BatchDetectEntitiesOutput } from "./types/BatchDetectEntitiesOutput";
import { BatchDetectKeyPhrasesInput } from "./types/BatchDetectKeyPhrasesInput";
import { BatchDetectKeyPhrasesOutput } from "./types/BatchDetectKeyPhrasesOutput";
import { BatchDetectSentimentInput } from "./types/BatchDetectSentimentInput";
import { BatchDetectSentimentOutput } from "./types/BatchDetectSentimentOutput";
import { BatchDetectSyntaxInput } from "./types/BatchDetectSyntaxInput";
import { BatchDetectSyntaxOutput } from "./types/BatchDetectSyntaxOutput";
import { BatchSizeLimitExceededException } from "./types/BatchSizeLimitExceededException";
import { ConcurrentModificationException } from "./types/ConcurrentModificationException";
import { CreateDocumentClassifierInput } from "./types/CreateDocumentClassifierInput";
import { CreateDocumentClassifierOutput } from "./types/CreateDocumentClassifierOutput";
import { CreateEntityRecognizerInput } from "./types/CreateEntityRecognizerInput";
import { CreateEntityRecognizerOutput } from "./types/CreateEntityRecognizerOutput";
import { DeleteDocumentClassifierInput } from "./types/DeleteDocumentClassifierInput";
import { DeleteDocumentClassifierOutput } from "./types/DeleteDocumentClassifierOutput";
import { DeleteEntityRecognizerInput } from "./types/DeleteEntityRecognizerInput";
import { DeleteEntityRecognizerOutput } from "./types/DeleteEntityRecognizerOutput";
import { DescribeDocumentClassificationJobInput } from "./types/DescribeDocumentClassificationJobInput";
import { DescribeDocumentClassificationJobOutput } from "./types/DescribeDocumentClassificationJobOutput";
import { DescribeDocumentClassifierInput } from "./types/DescribeDocumentClassifierInput";
import { DescribeDocumentClassifierOutput } from "./types/DescribeDocumentClassifierOutput";
import { DescribeDominantLanguageDetectionJobInput } from "./types/DescribeDominantLanguageDetectionJobInput";
import { DescribeDominantLanguageDetectionJobOutput } from "./types/DescribeDominantLanguageDetectionJobOutput";
import { DescribeEntitiesDetectionJobInput } from "./types/DescribeEntitiesDetectionJobInput";
import { DescribeEntitiesDetectionJobOutput } from "./types/DescribeEntitiesDetectionJobOutput";
import { DescribeEntityRecognizerInput } from "./types/DescribeEntityRecognizerInput";
import { DescribeEntityRecognizerOutput } from "./types/DescribeEntityRecognizerOutput";
import { DescribeKeyPhrasesDetectionJobInput } from "./types/DescribeKeyPhrasesDetectionJobInput";
import { DescribeKeyPhrasesDetectionJobOutput } from "./types/DescribeKeyPhrasesDetectionJobOutput";
import { DescribeSentimentDetectionJobInput } from "./types/DescribeSentimentDetectionJobInput";
import { DescribeSentimentDetectionJobOutput } from "./types/DescribeSentimentDetectionJobOutput";
import { DescribeTopicsDetectionJobInput } from "./types/DescribeTopicsDetectionJobInput";
import { DescribeTopicsDetectionJobOutput } from "./types/DescribeTopicsDetectionJobOutput";
import { DetectDominantLanguageInput } from "./types/DetectDominantLanguageInput";
import { DetectDominantLanguageOutput } from "./types/DetectDominantLanguageOutput";
import { DetectEntitiesInput } from "./types/DetectEntitiesInput";
import { DetectEntitiesOutput } from "./types/DetectEntitiesOutput";
import { DetectKeyPhrasesInput } from "./types/DetectKeyPhrasesInput";
import { DetectKeyPhrasesOutput } from "./types/DetectKeyPhrasesOutput";
import { DetectSentimentInput } from "./types/DetectSentimentInput";
import { DetectSentimentOutput } from "./types/DetectSentimentOutput";
import { DetectSyntaxInput } from "./types/DetectSyntaxInput";
import { DetectSyntaxOutput } from "./types/DetectSyntaxOutput";
import { InternalServerException } from "./types/InternalServerException";
import { InvalidFilterException } from "./types/InvalidFilterException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { JobNotFoundException } from "./types/JobNotFoundException";
import { KmsKeyValidationException } from "./types/KmsKeyValidationException";
import { ListDocumentClassificationJobsInput } from "./types/ListDocumentClassificationJobsInput";
import { ListDocumentClassificationJobsOutput } from "./types/ListDocumentClassificationJobsOutput";
import { ListDocumentClassifiersInput } from "./types/ListDocumentClassifiersInput";
import { ListDocumentClassifiersOutput } from "./types/ListDocumentClassifiersOutput";
import { ListDominantLanguageDetectionJobsInput } from "./types/ListDominantLanguageDetectionJobsInput";
import { ListDominantLanguageDetectionJobsOutput } from "./types/ListDominantLanguageDetectionJobsOutput";
import { ListEntitiesDetectionJobsInput } from "./types/ListEntitiesDetectionJobsInput";
import { ListEntitiesDetectionJobsOutput } from "./types/ListEntitiesDetectionJobsOutput";
import { ListEntityRecognizersInput } from "./types/ListEntityRecognizersInput";
import { ListEntityRecognizersOutput } from "./types/ListEntityRecognizersOutput";
import { ListKeyPhrasesDetectionJobsInput } from "./types/ListKeyPhrasesDetectionJobsInput";
import { ListKeyPhrasesDetectionJobsOutput } from "./types/ListKeyPhrasesDetectionJobsOutput";
import { ListSentimentDetectionJobsInput } from "./types/ListSentimentDetectionJobsInput";
import { ListSentimentDetectionJobsOutput } from "./types/ListSentimentDetectionJobsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListTopicsDetectionJobsInput } from "./types/ListTopicsDetectionJobsInput";
import { ListTopicsDetectionJobsOutput } from "./types/ListTopicsDetectionJobsOutput";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { ResourceLimitExceededException } from "./types/ResourceLimitExceededException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ResourceUnavailableException } from "./types/ResourceUnavailableException";
import { StartDocumentClassificationJobInput } from "./types/StartDocumentClassificationJobInput";
import { StartDocumentClassificationJobOutput } from "./types/StartDocumentClassificationJobOutput";
import { StartDominantLanguageDetectionJobInput } from "./types/StartDominantLanguageDetectionJobInput";
import { StartDominantLanguageDetectionJobOutput } from "./types/StartDominantLanguageDetectionJobOutput";
import { StartEntitiesDetectionJobInput } from "./types/StartEntitiesDetectionJobInput";
import { StartEntitiesDetectionJobOutput } from "./types/StartEntitiesDetectionJobOutput";
import { StartKeyPhrasesDetectionJobInput } from "./types/StartKeyPhrasesDetectionJobInput";
import { StartKeyPhrasesDetectionJobOutput } from "./types/StartKeyPhrasesDetectionJobOutput";
import { StartSentimentDetectionJobInput } from "./types/StartSentimentDetectionJobInput";
import { StartSentimentDetectionJobOutput } from "./types/StartSentimentDetectionJobOutput";
import { StartTopicsDetectionJobInput } from "./types/StartTopicsDetectionJobInput";
import { StartTopicsDetectionJobOutput } from "./types/StartTopicsDetectionJobOutput";
import { StopDominantLanguageDetectionJobInput } from "./types/StopDominantLanguageDetectionJobInput";
import { StopDominantLanguageDetectionJobOutput } from "./types/StopDominantLanguageDetectionJobOutput";
import { StopEntitiesDetectionJobInput } from "./types/StopEntitiesDetectionJobInput";
import { StopEntitiesDetectionJobOutput } from "./types/StopEntitiesDetectionJobOutput";
import { StopKeyPhrasesDetectionJobInput } from "./types/StopKeyPhrasesDetectionJobInput";
import { StopKeyPhrasesDetectionJobOutput } from "./types/StopKeyPhrasesDetectionJobOutput";
import { StopSentimentDetectionJobInput } from "./types/StopSentimentDetectionJobInput";
import { StopSentimentDetectionJobOutput } from "./types/StopSentimentDetectionJobOutput";
import { StopTrainingDocumentClassifierInput } from "./types/StopTrainingDocumentClassifierInput";
import { StopTrainingDocumentClassifierOutput } from "./types/StopTrainingDocumentClassifierOutput";
import { StopTrainingEntityRecognizerInput } from "./types/StopTrainingEntityRecognizerInput";
import { StopTrainingEntityRecognizerOutput } from "./types/StopTrainingEntityRecognizerOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TextSizeLimitExceededException } from "./types/TextSizeLimitExceededException";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { TooManyTagKeysException } from "./types/TooManyTagKeysException";
import { TooManyTagsException } from "./types/TooManyTagsException";
import { UnsupportedLanguageException } from "./types/UnsupportedLanguageException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { BatchDetectDominantLanguageCommand } from "./commands/BatchDetectDominantLanguageCommand";
import { BatchDetectEntitiesCommand } from "./commands/BatchDetectEntitiesCommand";
import { BatchDetectKeyPhrasesCommand } from "./commands/BatchDetectKeyPhrasesCommand";
import { BatchDetectSentimentCommand } from "./commands/BatchDetectSentimentCommand";
import { BatchDetectSyntaxCommand } from "./commands/BatchDetectSyntaxCommand";
import { CreateDocumentClassifierCommand } from "./commands/CreateDocumentClassifierCommand";
import { CreateEntityRecognizerCommand } from "./commands/CreateEntityRecognizerCommand";
import { DeleteDocumentClassifierCommand } from "./commands/DeleteDocumentClassifierCommand";
import { DeleteEntityRecognizerCommand } from "./commands/DeleteEntityRecognizerCommand";
import { DescribeDocumentClassificationJobCommand } from "./commands/DescribeDocumentClassificationJobCommand";
import { DescribeDocumentClassifierCommand } from "./commands/DescribeDocumentClassifierCommand";
import { DescribeDominantLanguageDetectionJobCommand } from "./commands/DescribeDominantLanguageDetectionJobCommand";
import { DescribeEntitiesDetectionJobCommand } from "./commands/DescribeEntitiesDetectionJobCommand";
import { DescribeEntityRecognizerCommand } from "./commands/DescribeEntityRecognizerCommand";
import { DescribeKeyPhrasesDetectionJobCommand } from "./commands/DescribeKeyPhrasesDetectionJobCommand";
import { DescribeSentimentDetectionJobCommand } from "./commands/DescribeSentimentDetectionJobCommand";
import { DescribeTopicsDetectionJobCommand } from "./commands/DescribeTopicsDetectionJobCommand";
import { DetectDominantLanguageCommand } from "./commands/DetectDominantLanguageCommand";
import { DetectEntitiesCommand } from "./commands/DetectEntitiesCommand";
import { DetectKeyPhrasesCommand } from "./commands/DetectKeyPhrasesCommand";
import { DetectSentimentCommand } from "./commands/DetectSentimentCommand";
import { DetectSyntaxCommand } from "./commands/DetectSyntaxCommand";
import { ListDocumentClassificationJobsCommand } from "./commands/ListDocumentClassificationJobsCommand";
import { ListDocumentClassifiersCommand } from "./commands/ListDocumentClassifiersCommand";
import { ListDominantLanguageDetectionJobsCommand } from "./commands/ListDominantLanguageDetectionJobsCommand";
import { ListEntitiesDetectionJobsCommand } from "./commands/ListEntitiesDetectionJobsCommand";
import { ListEntityRecognizersCommand } from "./commands/ListEntityRecognizersCommand";
import { ListKeyPhrasesDetectionJobsCommand } from "./commands/ListKeyPhrasesDetectionJobsCommand";
import { ListSentimentDetectionJobsCommand } from "./commands/ListSentimentDetectionJobsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListTopicsDetectionJobsCommand } from "./commands/ListTopicsDetectionJobsCommand";
import { StartDocumentClassificationJobCommand } from "./commands/StartDocumentClassificationJobCommand";
import { StartDominantLanguageDetectionJobCommand } from "./commands/StartDominantLanguageDetectionJobCommand";
import { StartEntitiesDetectionJobCommand } from "./commands/StartEntitiesDetectionJobCommand";
import { StartKeyPhrasesDetectionJobCommand } from "./commands/StartKeyPhrasesDetectionJobCommand";
import { StartSentimentDetectionJobCommand } from "./commands/StartSentimentDetectionJobCommand";
import { StartTopicsDetectionJobCommand } from "./commands/StartTopicsDetectionJobCommand";
import { StopDominantLanguageDetectionJobCommand } from "./commands/StopDominantLanguageDetectionJobCommand";
import { StopEntitiesDetectionJobCommand } from "./commands/StopEntitiesDetectionJobCommand";
import { StopKeyPhrasesDetectionJobCommand } from "./commands/StopKeyPhrasesDetectionJobCommand";
import { StopSentimentDetectionJobCommand } from "./commands/StopSentimentDetectionJobCommand";
import { StopTrainingDocumentClassifierCommand } from "./commands/StopTrainingDocumentClassifierCommand";
import { StopTrainingEntityRecognizerCommand } from "./commands/StopTrainingEntityRecognizerCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";

export class Comprehend extends ComprehendClient {
  /**
   * <p>Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TextSizeLimitExceededException} <p>The size of the input text exceeds the limit. Use a smaller document.</p>
   *   - {BatchSizeLimitExceededException} <p>The number of documents in the request exceeds the limit of 25. Try your request again with fewer documents.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchDetectDominantLanguage(
    args: BatchDetectDominantLanguageInput
  ): Promise<BatchDetectDominantLanguageOutput>;
  public batchDetectDominantLanguage(
    args: BatchDetectDominantLanguageInput,
    cb: (err: any, data?: BatchDetectDominantLanguageOutput) => void
  ): void;
  public batchDetectDominantLanguage(
    args: BatchDetectDominantLanguageInput,
    cb?: (err: any, data?: BatchDetectDominantLanguageOutput) => void
  ): Promise<BatchDetectDominantLanguageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchDetectDominantLanguageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see <a>how-entities</a> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TextSizeLimitExceededException} <p>The size of the input text exceeds the limit. Use a smaller document.</p>
   *   - {UnsupportedLanguageException} <p>Amazon Comprehend can't process the language of the input text. For all custom entity recognition APIs (such as <code>CreateEntityRecognizer</code>), only English is accepted. For most other APIs, such as those for Custom Classification, Amazon Comprehend accepts text in all supported languages. For a list of supported languages, see <a>supported-languages</a>. </p>
   *   - {BatchSizeLimitExceededException} <p>The number of documents in the request exceeds the limit of 25. Try your request again with fewer documents.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchDetectEntities(
    args: BatchDetectEntitiesInput
  ): Promise<BatchDetectEntitiesOutput>;
  public batchDetectEntities(
    args: BatchDetectEntitiesInput,
    cb: (err: any, data?: BatchDetectEntitiesOutput) => void
  ): void;
  public batchDetectEntities(
    args: BatchDetectEntitiesInput,
    cb?: (err: any, data?: BatchDetectEntitiesOutput) => void
  ): Promise<BatchDetectEntitiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchDetectEntitiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detects the key noun phrases found in a batch of documents.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TextSizeLimitExceededException} <p>The size of the input text exceeds the limit. Use a smaller document.</p>
   *   - {UnsupportedLanguageException} <p>Amazon Comprehend can't process the language of the input text. For all custom entity recognition APIs (such as <code>CreateEntityRecognizer</code>), only English is accepted. For most other APIs, such as those for Custom Classification, Amazon Comprehend accepts text in all supported languages. For a list of supported languages, see <a>supported-languages</a>. </p>
   *   - {BatchSizeLimitExceededException} <p>The number of documents in the request exceeds the limit of 25. Try your request again with fewer documents.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchDetectKeyPhrases(
    args: BatchDetectKeyPhrasesInput
  ): Promise<BatchDetectKeyPhrasesOutput>;
  public batchDetectKeyPhrases(
    args: BatchDetectKeyPhrasesInput,
    cb: (err: any, data?: BatchDetectKeyPhrasesOutput) => void
  ): void;
  public batchDetectKeyPhrases(
    args: BatchDetectKeyPhrasesInput,
    cb?: (err: any, data?: BatchDetectKeyPhrasesOutput) => void
  ): Promise<BatchDetectKeyPhrasesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchDetectKeyPhrasesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Inspects a batch of documents and returns an inference of the prevailing sentiment, <code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>, in each one.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TextSizeLimitExceededException} <p>The size of the input text exceeds the limit. Use a smaller document.</p>
   *   - {UnsupportedLanguageException} <p>Amazon Comprehend can't process the language of the input text. For all custom entity recognition APIs (such as <code>CreateEntityRecognizer</code>), only English is accepted. For most other APIs, such as those for Custom Classification, Amazon Comprehend accepts text in all supported languages. For a list of supported languages, see <a>supported-languages</a>. </p>
   *   - {BatchSizeLimitExceededException} <p>The number of documents in the request exceeds the limit of 25. Try your request again with fewer documents.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchDetectSentiment(
    args: BatchDetectSentimentInput
  ): Promise<BatchDetectSentimentOutput>;
  public batchDetectSentiment(
    args: BatchDetectSentimentInput,
    cb: (err: any, data?: BatchDetectSentimentOutput) => void
  ): void;
  public batchDetectSentiment(
    args: BatchDetectSentimentInput,
    cb?: (err: any, data?: BatchDetectSentimentOutput) => void
  ): Promise<BatchDetectSentimentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchDetectSentimentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see <a>how-syntax</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TextSizeLimitExceededException} <p>The size of the input text exceeds the limit. Use a smaller document.</p>
   *   - {UnsupportedLanguageException} <p>Amazon Comprehend can't process the language of the input text. For all custom entity recognition APIs (such as <code>CreateEntityRecognizer</code>), only English is accepted. For most other APIs, such as those for Custom Classification, Amazon Comprehend accepts text in all supported languages. For a list of supported languages, see <a>supported-languages</a>. </p>
   *   - {BatchSizeLimitExceededException} <p>The number of documents in the request exceeds the limit of 25. Try your request again with fewer documents.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchDetectSyntax(
    args: BatchDetectSyntaxInput
  ): Promise<BatchDetectSyntaxOutput>;
  public batchDetectSyntax(
    args: BatchDetectSyntaxInput,
    cb: (err: any, data?: BatchDetectSyntaxOutput) => void
  ): void;
  public batchDetectSyntax(
    args: BatchDetectSyntaxInput,
    cb?: (err: any, data?: BatchDetectSyntaxOutput) => void
  ): Promise<BatchDetectSyntaxOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchDetectSyntaxCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new document classifier that you can use to categorize documents. To create a classifier you provide a set of training documents that labeled with the categories that you want to use. After the classifier is trained you can use it to categorize a set of labeled documents into the categories. For more information, see <a>how-document-classification</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {ResourceInUseException} <p>The specified name is already in use. Use a different name and try your request again.</p>
   *   - {TooManyTagsException} <p>The request contains more tags than can be associated with a resource (50 tags per resource). The maximum number of tags includes both existing tags and those included in your current request. </p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {ResourceLimitExceededException} <p>The maximum number of recognizers per account has been exceeded. Review the recognizers, perform cleanup, and then try your request again.</p>
   *   - {UnsupportedLanguageException} <p>Amazon Comprehend can't process the language of the input text. For all custom entity recognition APIs (such as <code>CreateEntityRecognizer</code>), only English is accepted. For most other APIs, such as those for Custom Classification, Amazon Comprehend accepts text in all supported languages. For a list of supported languages, see <a>supported-languages</a>. </p>
   *   - {KmsKeyValidationException} <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and re-enter it.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDocumentClassifier(
    args: CreateDocumentClassifierInput
  ): Promise<CreateDocumentClassifierOutput>;
  public createDocumentClassifier(
    args: CreateDocumentClassifierInput,
    cb: (err: any, data?: CreateDocumentClassifierOutput) => void
  ): void;
  public createDocumentClassifier(
    args: CreateDocumentClassifierInput,
    cb?: (err: any, data?: CreateDocumentClassifierOutput) => void
  ): Promise<CreateDocumentClassifierOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDocumentClassifierCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an entity recognizer using submitted files. After your <code>CreateEntityRecognizer</code> request is submitted, you can check job status using the API. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {ResourceInUseException} <p>The specified name is already in use. Use a different name and try your request again.</p>
   *   - {TooManyTagsException} <p>The request contains more tags than can be associated with a resource (50 tags per resource). The maximum number of tags includes both existing tags and those included in your current request. </p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {ResourceLimitExceededException} <p>The maximum number of recognizers per account has been exceeded. Review the recognizers, perform cleanup, and then try your request again.</p>
   *   - {UnsupportedLanguageException} <p>Amazon Comprehend can't process the language of the input text. For all custom entity recognition APIs (such as <code>CreateEntityRecognizer</code>), only English is accepted. For most other APIs, such as those for Custom Classification, Amazon Comprehend accepts text in all supported languages. For a list of supported languages, see <a>supported-languages</a>. </p>
   *   - {KmsKeyValidationException} <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and re-enter it.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createEntityRecognizer(
    args: CreateEntityRecognizerInput
  ): Promise<CreateEntityRecognizerOutput>;
  public createEntityRecognizer(
    args: CreateEntityRecognizerInput,
    cb: (err: any, data?: CreateEntityRecognizerOutput) => void
  ): void;
  public createEntityRecognizer(
    args: CreateEntityRecognizerInput,
    cb?: (err: any, data?: CreateEntityRecognizerOutput) => void
  ): Promise<CreateEntityRecognizerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateEntityRecognizerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a previously created document classifier</p> <p>Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {ResourceNotFoundException} <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
   *   - {ResourceUnavailableException} <p>The specified resource is not available. Check to see if the resource is in the <code>TRAINED</code> state and try your request again.</p>
   *   - {ResourceInUseException} <p>The specified name is already in use. Use a different name and try your request again.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDocumentClassifier(
    args: DeleteDocumentClassifierInput
  ): Promise<DeleteDocumentClassifierOutput>;
  public deleteDocumentClassifier(
    args: DeleteDocumentClassifierInput,
    cb: (err: any, data?: DeleteDocumentClassifierOutput) => void
  ): void;
  public deleteDocumentClassifier(
    args: DeleteDocumentClassifierInput,
    cb?: (err: any, data?: DeleteDocumentClassifierOutput) => void
  ): Promise<DeleteDocumentClassifierOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDocumentClassifierCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an entity recognizer.</p> <p>Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {ResourceNotFoundException} <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
   *   - {ResourceUnavailableException} <p>The specified resource is not available. Check to see if the resource is in the <code>TRAINED</code> state and try your request again.</p>
   *   - {ResourceInUseException} <p>The specified name is already in use. Use a different name and try your request again.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteEntityRecognizer(
    args: DeleteEntityRecognizerInput
  ): Promise<DeleteEntityRecognizerOutput>;
  public deleteEntityRecognizer(
    args: DeleteEntityRecognizerInput,
    cb: (err: any, data?: DeleteEntityRecognizerOutput) => void
  ): void;
  public deleteEntityRecognizer(
    args: DeleteEntityRecognizerInput,
    cb?: (err: any, data?: DeleteEntityRecognizerOutput) => void
  ): Promise<DeleteEntityRecognizerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteEntityRecognizerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {JobNotFoundException} <p>The specified job was not found. Check the job ID and try again.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDocumentClassificationJob(
    args: DescribeDocumentClassificationJobInput
  ): Promise<DescribeDocumentClassificationJobOutput>;
  public describeDocumentClassificationJob(
    args: DescribeDocumentClassificationJobInput,
    cb: (err: any, data?: DescribeDocumentClassificationJobOutput) => void
  ): void;
  public describeDocumentClassificationJob(
    args: DescribeDocumentClassificationJobInput,
    cb?: (err: any, data?: DescribeDocumentClassificationJobOutput) => void
  ): Promise<DescribeDocumentClassificationJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDocumentClassificationJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the properties associated with a document classifier.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {ResourceNotFoundException} <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDocumentClassifier(
    args: DescribeDocumentClassifierInput
  ): Promise<DescribeDocumentClassifierOutput>;
  public describeDocumentClassifier(
    args: DescribeDocumentClassifierInput,
    cb: (err: any, data?: DescribeDocumentClassifierOutput) => void
  ): void;
  public describeDocumentClassifier(
    args: DescribeDocumentClassifierInput,
    cb?: (err: any, data?: DescribeDocumentClassifierOutput) => void
  ): Promise<DescribeDocumentClassifierOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDocumentClassifierCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {JobNotFoundException} <p>The specified job was not found. Check the job ID and try again.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDominantLanguageDetectionJob(
    args: DescribeDominantLanguageDetectionJobInput
  ): Promise<DescribeDominantLanguageDetectionJobOutput>;
  public describeDominantLanguageDetectionJob(
    args: DescribeDominantLanguageDetectionJobInput,
    cb: (err: any, data?: DescribeDominantLanguageDetectionJobOutput) => void
  ): void;
  public describeDominantLanguageDetectionJob(
    args: DescribeDominantLanguageDetectionJobInput,
    cb?: (err: any, data?: DescribeDominantLanguageDetectionJobOutput) => void
  ): Promise<DescribeDominantLanguageDetectionJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDominantLanguageDetectionJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {JobNotFoundException} <p>The specified job was not found. Check the job ID and try again.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEntitiesDetectionJob(
    args: DescribeEntitiesDetectionJobInput
  ): Promise<DescribeEntitiesDetectionJobOutput>;
  public describeEntitiesDetectionJob(
    args: DescribeEntitiesDetectionJobInput,
    cb: (err: any, data?: DescribeEntitiesDetectionJobOutput) => void
  ): void;
  public describeEntitiesDetectionJob(
    args: DescribeEntitiesDetectionJobInput,
    cb?: (err: any, data?: DescribeEntitiesDetectionJobOutput) => void
  ): Promise<DescribeEntitiesDetectionJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEntitiesDetectionJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {ResourceNotFoundException} <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEntityRecognizer(
    args: DescribeEntityRecognizerInput
  ): Promise<DescribeEntityRecognizerOutput>;
  public describeEntityRecognizer(
    args: DescribeEntityRecognizerInput,
    cb: (err: any, data?: DescribeEntityRecognizerOutput) => void
  ): void;
  public describeEntityRecognizer(
    args: DescribeEntityRecognizerInput,
    cb?: (err: any, data?: DescribeEntityRecognizerOutput) => void
  ): Promise<DescribeEntityRecognizerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEntityRecognizerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {JobNotFoundException} <p>The specified job was not found. Check the job ID and try again.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeKeyPhrasesDetectionJob(
    args: DescribeKeyPhrasesDetectionJobInput
  ): Promise<DescribeKeyPhrasesDetectionJobOutput>;
  public describeKeyPhrasesDetectionJob(
    args: DescribeKeyPhrasesDetectionJobInput,
    cb: (err: any, data?: DescribeKeyPhrasesDetectionJobOutput) => void
  ): void;
  public describeKeyPhrasesDetectionJob(
    args: DescribeKeyPhrasesDetectionJobInput,
    cb?: (err: any, data?: DescribeKeyPhrasesDetectionJobOutput) => void
  ): Promise<DescribeKeyPhrasesDetectionJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeKeyPhrasesDetectionJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {JobNotFoundException} <p>The specified job was not found. Check the job ID and try again.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSentimentDetectionJob(
    args: DescribeSentimentDetectionJobInput
  ): Promise<DescribeSentimentDetectionJobOutput>;
  public describeSentimentDetectionJob(
    args: DescribeSentimentDetectionJobInput,
    cb: (err: any, data?: DescribeSentimentDetectionJobOutput) => void
  ): void;
  public describeSentimentDetectionJob(
    args: DescribeSentimentDetectionJobInput,
    cb?: (err: any, data?: DescribeSentimentDetectionJobOutput) => void
  ): Promise<DescribeSentimentDetectionJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSentimentDetectionJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {JobNotFoundException} <p>The specified job was not found. Check the job ID and try again.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeTopicsDetectionJob(
    args: DescribeTopicsDetectionJobInput
  ): Promise<DescribeTopicsDetectionJobOutput>;
  public describeTopicsDetectionJob(
    args: DescribeTopicsDetectionJobInput,
    cb: (err: any, data?: DescribeTopicsDetectionJobOutput) => void
  ): void;
  public describeTopicsDetectionJob(
    args: DescribeTopicsDetectionJobInput,
    cb?: (err: any, data?: DescribeTopicsDetectionJobOutput) => void
  ): Promise<DescribeTopicsDetectionJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeTopicsDetectionJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TextSizeLimitExceededException} <p>The size of the input text exceeds the limit. Use a smaller document.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detectDominantLanguage(
    args: DetectDominantLanguageInput
  ): Promise<DetectDominantLanguageOutput>;
  public detectDominantLanguage(
    args: DetectDominantLanguageInput,
    cb: (err: any, data?: DetectDominantLanguageOutput) => void
  ): void;
  public detectDominantLanguage(
    args: DetectDominantLanguageInput,
    cb?: (err: any, data?: DetectDominantLanguageOutput) => void
  ): Promise<DetectDominantLanguageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetectDominantLanguageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Inspects text for named entities, and returns information about them. For more information, about named entities, see <a>how-entities</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TextSizeLimitExceededException} <p>The size of the input text exceeds the limit. Use a smaller document.</p>
   *   - {UnsupportedLanguageException} <p>Amazon Comprehend can't process the language of the input text. For all custom entity recognition APIs (such as <code>CreateEntityRecognizer</code>), only English is accepted. For most other APIs, such as those for Custom Classification, Amazon Comprehend accepts text in all supported languages. For a list of supported languages, see <a>supported-languages</a>. </p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detectEntities(
    args: DetectEntitiesInput
  ): Promise<DetectEntitiesOutput>;
  public detectEntities(
    args: DetectEntitiesInput,
    cb: (err: any, data?: DetectEntitiesOutput) => void
  ): void;
  public detectEntities(
    args: DetectEntitiesInput,
    cb?: (err: any, data?: DetectEntitiesOutput) => void
  ): Promise<DetectEntitiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetectEntitiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detects the key noun phrases found in the text. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TextSizeLimitExceededException} <p>The size of the input text exceeds the limit. Use a smaller document.</p>
   *   - {UnsupportedLanguageException} <p>Amazon Comprehend can't process the language of the input text. For all custom entity recognition APIs (such as <code>CreateEntityRecognizer</code>), only English is accepted. For most other APIs, such as those for Custom Classification, Amazon Comprehend accepts text in all supported languages. For a list of supported languages, see <a>supported-languages</a>. </p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detectKeyPhrases(
    args: DetectKeyPhrasesInput
  ): Promise<DetectKeyPhrasesOutput>;
  public detectKeyPhrases(
    args: DetectKeyPhrasesInput,
    cb: (err: any, data?: DetectKeyPhrasesOutput) => void
  ): void;
  public detectKeyPhrases(
    args: DetectKeyPhrasesInput,
    cb?: (err: any, data?: DetectKeyPhrasesOutput) => void
  ): Promise<DetectKeyPhrasesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetectKeyPhrasesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Inspects text and returns an inference of the prevailing sentiment (<code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>). </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TextSizeLimitExceededException} <p>The size of the input text exceeds the limit. Use a smaller document.</p>
   *   - {UnsupportedLanguageException} <p>Amazon Comprehend can't process the language of the input text. For all custom entity recognition APIs (such as <code>CreateEntityRecognizer</code>), only English is accepted. For most other APIs, such as those for Custom Classification, Amazon Comprehend accepts text in all supported languages. For a list of supported languages, see <a>supported-languages</a>. </p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detectSentiment(
    args: DetectSentimentInput
  ): Promise<DetectSentimentOutput>;
  public detectSentiment(
    args: DetectSentimentInput,
    cb: (err: any, data?: DetectSentimentOutput) => void
  ): void;
  public detectSentiment(
    args: DetectSentimentInput,
    cb?: (err: any, data?: DetectSentimentOutput) => void
  ): Promise<DetectSentimentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetectSentimentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Inspects text for syntax and the part of speech of words in the document. For more information, <a>how-syntax</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TextSizeLimitExceededException} <p>The size of the input text exceeds the limit. Use a smaller document.</p>
   *   - {UnsupportedLanguageException} <p>Amazon Comprehend can't process the language of the input text. For all custom entity recognition APIs (such as <code>CreateEntityRecognizer</code>), only English is accepted. For most other APIs, such as those for Custom Classification, Amazon Comprehend accepts text in all supported languages. For a list of supported languages, see <a>supported-languages</a>. </p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detectSyntax(args: DetectSyntaxInput): Promise<DetectSyntaxOutput>;
  public detectSyntax(
    args: DetectSyntaxInput,
    cb: (err: any, data?: DetectSyntaxOutput) => void
  ): void;
  public detectSyntax(
    args: DetectSyntaxInput,
    cb?: (err: any, data?: DetectSyntaxOutput) => void
  ): Promise<DetectSyntaxOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetectSyntaxCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of the documentation classification jobs that you have submitted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {InvalidFilterException} <p>The filter specified for the operation is invalid. Specify a different filter.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDocumentClassificationJobs(
    args: ListDocumentClassificationJobsInput
  ): Promise<ListDocumentClassificationJobsOutput>;
  public listDocumentClassificationJobs(
    args: ListDocumentClassificationJobsInput,
    cb: (err: any, data?: ListDocumentClassificationJobsOutput) => void
  ): void;
  public listDocumentClassificationJobs(
    args: ListDocumentClassificationJobsInput,
    cb?: (err: any, data?: ListDocumentClassificationJobsOutput) => void
  ): Promise<ListDocumentClassificationJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDocumentClassificationJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of the document classifiers that you have created.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {InvalidFilterException} <p>The filter specified for the operation is invalid. Specify a different filter.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDocumentClassifiers(
    args: ListDocumentClassifiersInput
  ): Promise<ListDocumentClassifiersOutput>;
  public listDocumentClassifiers(
    args: ListDocumentClassifiersInput,
    cb: (err: any, data?: ListDocumentClassifiersOutput) => void
  ): void;
  public listDocumentClassifiers(
    args: ListDocumentClassifiersInput,
    cb?: (err: any, data?: ListDocumentClassifiersOutput) => void
  ): Promise<ListDocumentClassifiersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDocumentClassifiersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of the dominant language detection jobs that you have submitted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {InvalidFilterException} <p>The filter specified for the operation is invalid. Specify a different filter.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDominantLanguageDetectionJobs(
    args: ListDominantLanguageDetectionJobsInput
  ): Promise<ListDominantLanguageDetectionJobsOutput>;
  public listDominantLanguageDetectionJobs(
    args: ListDominantLanguageDetectionJobsInput,
    cb: (err: any, data?: ListDominantLanguageDetectionJobsOutput) => void
  ): void;
  public listDominantLanguageDetectionJobs(
    args: ListDominantLanguageDetectionJobsInput,
    cb?: (err: any, data?: ListDominantLanguageDetectionJobsOutput) => void
  ): Promise<ListDominantLanguageDetectionJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDominantLanguageDetectionJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of the entity detection jobs that you have submitted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {InvalidFilterException} <p>The filter specified for the operation is invalid. Specify a different filter.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listEntitiesDetectionJobs(
    args: ListEntitiesDetectionJobsInput
  ): Promise<ListEntitiesDetectionJobsOutput>;
  public listEntitiesDetectionJobs(
    args: ListEntitiesDetectionJobsInput,
    cb: (err: any, data?: ListEntitiesDetectionJobsOutput) => void
  ): void;
  public listEntitiesDetectionJobs(
    args: ListEntitiesDetectionJobsInput,
    cb?: (err: any, data?: ListEntitiesDetectionJobsOutput) => void
  ): Promise<ListEntitiesDetectionJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListEntitiesDetectionJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list.</p> <p>The results of this list are not in any particular order. Please get the list and sort locally if needed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {InvalidFilterException} <p>The filter specified for the operation is invalid. Specify a different filter.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listEntityRecognizers(
    args: ListEntityRecognizersInput
  ): Promise<ListEntityRecognizersOutput>;
  public listEntityRecognizers(
    args: ListEntityRecognizersInput,
    cb: (err: any, data?: ListEntityRecognizersOutput) => void
  ): void;
  public listEntityRecognizers(
    args: ListEntityRecognizersInput,
    cb?: (err: any, data?: ListEntityRecognizersOutput) => void
  ): Promise<ListEntityRecognizersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListEntityRecognizersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get a list of key phrase detection jobs that you have submitted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {InvalidFilterException} <p>The filter specified for the operation is invalid. Specify a different filter.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listKeyPhrasesDetectionJobs(
    args: ListKeyPhrasesDetectionJobsInput
  ): Promise<ListKeyPhrasesDetectionJobsOutput>;
  public listKeyPhrasesDetectionJobs(
    args: ListKeyPhrasesDetectionJobsInput,
    cb: (err: any, data?: ListKeyPhrasesDetectionJobsOutput) => void
  ): void;
  public listKeyPhrasesDetectionJobs(
    args: ListKeyPhrasesDetectionJobsInput,
    cb?: (err: any, data?: ListKeyPhrasesDetectionJobsOutput) => void
  ): Promise<ListKeyPhrasesDetectionJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListKeyPhrasesDetectionJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of sentiment detection jobs that you have submitted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {InvalidFilterException} <p>The filter specified for the operation is invalid. Specify a different filter.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSentimentDetectionJobs(
    args: ListSentimentDetectionJobsInput
  ): Promise<ListSentimentDetectionJobsOutput>;
  public listSentimentDetectionJobs(
    args: ListSentimentDetectionJobsInput,
    cb: (err: any, data?: ListSentimentDetectionJobsOutput) => void
  ): void;
  public listSentimentDetectionJobs(
    args: ListSentimentDetectionJobsInput,
    cb?: (err: any, data?: ListSentimentDetectionJobsOutput) => void
  ): Promise<ListSentimentDetectionJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSentimentDetectionJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all tags associated with a given Amazon Comprehend resource. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of the topic detection jobs that you have submitted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {InvalidFilterException} <p>The filter specified for the operation is invalid. Specify a different filter.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTopicsDetectionJobs(
    args: ListTopicsDetectionJobsInput
  ): Promise<ListTopicsDetectionJobsOutput>;
  public listTopicsDetectionJobs(
    args: ListTopicsDetectionJobsInput,
    cb: (err: any, data?: ListTopicsDetectionJobsOutput) => void
  ): void;
  public listTopicsDetectionJobs(
    args: ListTopicsDetectionJobsInput,
    cb?: (err: any, data?: ListTopicsDetectionJobsOutput) => void
  ): Promise<ListTopicsDetectionJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTopicsDetectionJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts an asynchronous document classification job. Use the operation to track the progress of the job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {ResourceNotFoundException} <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
   *   - {ResourceUnavailableException} <p>The specified resource is not available. Check to see if the resource is in the <code>TRAINED</code> state and try your request again.</p>
   *   - {KmsKeyValidationException} <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and re-enter it.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startDocumentClassificationJob(
    args: StartDocumentClassificationJobInput
  ): Promise<StartDocumentClassificationJobOutput>;
  public startDocumentClassificationJob(
    args: StartDocumentClassificationJobInput,
    cb: (err: any, data?: StartDocumentClassificationJobOutput) => void
  ): void;
  public startDocumentClassificationJob(
    args: StartDocumentClassificationJobInput,
    cb?: (err: any, data?: StartDocumentClassificationJobOutput) => void
  ): Promise<StartDocumentClassificationJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartDocumentClassificationJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {KmsKeyValidationException} <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and re-enter it.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startDominantLanguageDetectionJob(
    args: StartDominantLanguageDetectionJobInput
  ): Promise<StartDominantLanguageDetectionJobOutput>;
  public startDominantLanguageDetectionJob(
    args: StartDominantLanguageDetectionJobInput,
    cb: (err: any, data?: StartDominantLanguageDetectionJobOutput) => void
  ): void;
  public startDominantLanguageDetectionJob(
    args: StartDominantLanguageDetectionJobInput,
    cb?: (err: any, data?: StartDominantLanguageDetectionJobOutput) => void
  ): Promise<StartDominantLanguageDetectionJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartDominantLanguageDetectionJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.</p> <p>This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional <code>EntityRecognizerArn</code> must be used in order to provide access to the recognizer being used to detect the custom entity.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {ResourceNotFoundException} <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
   *   - {ResourceUnavailableException} <p>The specified resource is not available. Check to see if the resource is in the <code>TRAINED</code> state and try your request again.</p>
   *   - {KmsKeyValidationException} <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and re-enter it.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startEntitiesDetectionJob(
    args: StartEntitiesDetectionJobInput
  ): Promise<StartEntitiesDetectionJobOutput>;
  public startEntitiesDetectionJob(
    args: StartEntitiesDetectionJobInput,
    cb: (err: any, data?: StartEntitiesDetectionJobOutput) => void
  ): void;
  public startEntitiesDetectionJob(
    args: StartEntitiesDetectionJobInput,
    cb?: (err: any, data?: StartEntitiesDetectionJobOutput) => void
  ): Promise<StartEntitiesDetectionJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartEntitiesDetectionJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {KmsKeyValidationException} <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and re-enter it.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startKeyPhrasesDetectionJob(
    args: StartKeyPhrasesDetectionJobInput
  ): Promise<StartKeyPhrasesDetectionJobOutput>;
  public startKeyPhrasesDetectionJob(
    args: StartKeyPhrasesDetectionJobInput,
    cb: (err: any, data?: StartKeyPhrasesDetectionJobOutput) => void
  ): void;
  public startKeyPhrasesDetectionJob(
    args: StartKeyPhrasesDetectionJobInput,
    cb?: (err: any, data?: StartKeyPhrasesDetectionJobOutput) => void
  ): Promise<StartKeyPhrasesDetectionJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartKeyPhrasesDetectionJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts an asynchronous sentiment detection job for a collection of documents. use the operation to track the status of a job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {KmsKeyValidationException} <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and re-enter it.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startSentimentDetectionJob(
    args: StartSentimentDetectionJobInput
  ): Promise<StartSentimentDetectionJobOutput>;
  public startSentimentDetectionJob(
    args: StartSentimentDetectionJobInput,
    cb: (err: any, data?: StartSentimentDetectionJobOutput) => void
  ): void;
  public startSentimentDetectionJob(
    args: StartSentimentDetectionJobInput,
    cb?: (err: any, data?: StartSentimentDetectionJobOutput) => void
  ): Promise<StartSentimentDetectionJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartSentimentDetectionJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts an asynchronous topic detection job. Use the <code>DescribeTopicDetectionJob</code> operation to track the status of a job.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {KmsKeyValidationException} <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and re-enter it.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startTopicsDetectionJob(
    args: StartTopicsDetectionJobInput
  ): Promise<StartTopicsDetectionJobOutput>;
  public startTopicsDetectionJob(
    args: StartTopicsDetectionJobInput,
    cb: (err: any, data?: StartTopicsDetectionJobOutput) => void
  ): void;
  public startTopicsDetectionJob(
    args: StartTopicsDetectionJobInput,
    cb?: (err: any, data?: StartTopicsDetectionJobOutput) => void
  ): Promise<StartTopicsDetectionJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartTopicsDetectionJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops a dominant language detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {JobNotFoundException} <p>The specified job was not found. Check the job ID and try again.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopDominantLanguageDetectionJob(
    args: StopDominantLanguageDetectionJobInput
  ): Promise<StopDominantLanguageDetectionJobOutput>;
  public stopDominantLanguageDetectionJob(
    args: StopDominantLanguageDetectionJobInput,
    cb: (err: any, data?: StopDominantLanguageDetectionJobOutput) => void
  ): void;
  public stopDominantLanguageDetectionJob(
    args: StopDominantLanguageDetectionJobInput,
    cb?: (err: any, data?: StopDominantLanguageDetectionJobOutput) => void
  ): Promise<StopDominantLanguageDetectionJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopDominantLanguageDetectionJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops an entities detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {JobNotFoundException} <p>The specified job was not found. Check the job ID and try again.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopEntitiesDetectionJob(
    args: StopEntitiesDetectionJobInput
  ): Promise<StopEntitiesDetectionJobOutput>;
  public stopEntitiesDetectionJob(
    args: StopEntitiesDetectionJobInput,
    cb: (err: any, data?: StopEntitiesDetectionJobOutput) => void
  ): void;
  public stopEntitiesDetectionJob(
    args: StopEntitiesDetectionJobInput,
    cb?: (err: any, data?: StopEntitiesDetectionJobOutput) => void
  ): Promise<StopEntitiesDetectionJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopEntitiesDetectionJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops a key phrases detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {JobNotFoundException} <p>The specified job was not found. Check the job ID and try again.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopKeyPhrasesDetectionJob(
    args: StopKeyPhrasesDetectionJobInput
  ): Promise<StopKeyPhrasesDetectionJobOutput>;
  public stopKeyPhrasesDetectionJob(
    args: StopKeyPhrasesDetectionJobInput,
    cb: (err: any, data?: StopKeyPhrasesDetectionJobOutput) => void
  ): void;
  public stopKeyPhrasesDetectionJob(
    args: StopKeyPhrasesDetectionJobInput,
    cb?: (err: any, data?: StopKeyPhrasesDetectionJobOutput) => void
  ): Promise<StopKeyPhrasesDetectionJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopKeyPhrasesDetectionJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops a sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {JobNotFoundException} <p>The specified job was not found. Check the job ID and try again.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopSentimentDetectionJob(
    args: StopSentimentDetectionJobInput
  ): Promise<StopSentimentDetectionJobOutput>;
  public stopSentimentDetectionJob(
    args: StopSentimentDetectionJobInput,
    cb: (err: any, data?: StopSentimentDetectionJobOutput) => void
  ): void;
  public stopSentimentDetectionJob(
    args: StopSentimentDetectionJobInput,
    cb?: (err: any, data?: StopSentimentDetectionJobOutput) => void
  ): Promise<StopSentimentDetectionJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopSentimentDetectionJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops a document classifier training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and put into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {ResourceNotFoundException} <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopTrainingDocumentClassifier(
    args: StopTrainingDocumentClassifierInput
  ): Promise<StopTrainingDocumentClassifierOutput>;
  public stopTrainingDocumentClassifier(
    args: StopTrainingDocumentClassifierInput,
    cb: (err: any, data?: StopTrainingDocumentClassifierOutput) => void
  ): void;
  public stopTrainingDocumentClassifier(
    args: StopTrainingDocumentClassifierInput,
    cb?: (err: any, data?: StopTrainingDocumentClassifierOutput) => void
  ): Promise<StopTrainingDocumentClassifierOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopTrainingDocumentClassifierCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops an entity recognizer training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and putted into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   *   - {ResourceNotFoundException} <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopTrainingEntityRecognizer(
    args: StopTrainingEntityRecognizerInput
  ): Promise<StopTrainingEntityRecognizerOutput>;
  public stopTrainingEntityRecognizer(
    args: StopTrainingEntityRecognizerInput,
    cb: (err: any, data?: StopTrainingEntityRecognizerOutput) => void
  ): void;
  public stopTrainingEntityRecognizer(
    args: StopTrainingEntityRecognizerInput,
    cb?: (err: any, data?: StopTrainingEntityRecognizerOutput) => void
  ): Promise<StopTrainingEntityRecognizerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopTrainingEntityRecognizerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {ConcurrentModificationException} <p>Concurrent modification of the tags associated with an Amazon Comprehend resource is not supported. </p>
   *   - {ResourceNotFoundException} <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
   *   - {TooManyTagsException} <p>The request contains more tags than can be associated with a resource (50 tags per resource). The maximum number of tags includes both existing tags and those included in your current request. </p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a specific tag associated with an Amazon Comprehend resource. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {TooManyTagKeysException} <p>The request contains more tag keys than can be associated with a resource (50 tag keys per resource).</p>
   *   - {InvalidRequestException} <p>The request is invalid.</p>
   *   - {ConcurrentModificationException} <p>Concurrent modification of the tags associated with an Amazon Comprehend resource is not supported. </p>
   *   - {ResourceNotFoundException} <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
   *   - {InternalServerException} <p>An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
