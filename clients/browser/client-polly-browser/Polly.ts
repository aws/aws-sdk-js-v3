import { PollyClient } from "./PollyClient";
import { DeleteLexiconInput } from "./types/DeleteLexiconInput";
import { DeleteLexiconOutput } from "./types/DeleteLexiconOutput";
import { DescribeVoicesInput } from "./types/DescribeVoicesInput";
import { DescribeVoicesOutput } from "./types/DescribeVoicesOutput";
import { EngineNotSupportedException } from "./types/EngineNotSupportedException";
import { GetLexiconInput } from "./types/GetLexiconInput";
import { GetLexiconOutput } from "./types/GetLexiconOutput";
import { GetSpeechSynthesisTaskInput } from "./types/GetSpeechSynthesisTaskInput";
import { GetSpeechSynthesisTaskOutput } from "./types/GetSpeechSynthesisTaskOutput";
import { InvalidLexiconException } from "./types/InvalidLexiconException";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { InvalidS3BucketException } from "./types/InvalidS3BucketException";
import { InvalidS3KeyException } from "./types/InvalidS3KeyException";
import { InvalidSampleRateException } from "./types/InvalidSampleRateException";
import { InvalidSnsTopicArnException } from "./types/InvalidSnsTopicArnException";
import { InvalidSsmlException } from "./types/InvalidSsmlException";
import { InvalidTaskIdException } from "./types/InvalidTaskIdException";
import { LanguageNotSupportedException } from "./types/LanguageNotSupportedException";
import { LexiconNotFoundException } from "./types/LexiconNotFoundException";
import { LexiconSizeExceededException } from "./types/LexiconSizeExceededException";
import { ListLexiconsInput } from "./types/ListLexiconsInput";
import { ListLexiconsOutput } from "./types/ListLexiconsOutput";
import { ListSpeechSynthesisTasksInput } from "./types/ListSpeechSynthesisTasksInput";
import { ListSpeechSynthesisTasksOutput } from "./types/ListSpeechSynthesisTasksOutput";
import { MarksNotSupportedForFormatException } from "./types/MarksNotSupportedForFormatException";
import { MaxLexemeLengthExceededException } from "./types/MaxLexemeLengthExceededException";
import { MaxLexiconsNumberExceededException } from "./types/MaxLexiconsNumberExceededException";
import { PutLexiconInput } from "./types/PutLexiconInput";
import { PutLexiconOutput } from "./types/PutLexiconOutput";
import { ServiceFailureException } from "./types/ServiceFailureException";
import { SsmlMarksNotSupportedForTextTypeException } from "./types/SsmlMarksNotSupportedForTextTypeException";
import { StartSpeechSynthesisTaskInput } from "./types/StartSpeechSynthesisTaskInput";
import { StartSpeechSynthesisTaskOutput } from "./types/StartSpeechSynthesisTaskOutput";
import { SynthesisTaskNotFoundException } from "./types/SynthesisTaskNotFoundException";
import { SynthesizeSpeechInput } from "./types/SynthesizeSpeechInput";
import { SynthesizeSpeechOutput } from "./types/SynthesizeSpeechOutput";
import { TextLengthExceededException } from "./types/TextLengthExceededException";
import { UnsupportedPlsAlphabetException } from "./types/UnsupportedPlsAlphabetException";
import { UnsupportedPlsLanguageException } from "./types/UnsupportedPlsLanguageException";
import { DeleteLexiconCommand } from "./commands/DeleteLexiconCommand";
import { DescribeVoicesCommand } from "./commands/DescribeVoicesCommand";
import { GetLexiconCommand } from "./commands/GetLexiconCommand";
import { GetSpeechSynthesisTaskCommand } from "./commands/GetSpeechSynthesisTaskCommand";
import { ListLexiconsCommand } from "./commands/ListLexiconsCommand";
import { ListSpeechSynthesisTasksCommand } from "./commands/ListSpeechSynthesisTasksCommand";
import { PutLexiconCommand } from "./commands/PutLexiconCommand";
import { StartSpeechSynthesisTaskCommand } from "./commands/StartSpeechSynthesisTaskCommand";
import { SynthesizeSpeechCommand } from "./commands/SynthesizeSpeechCommand";

export class Polly extends PollyClient {
  /**
   * <p>Deletes the specified pronunciation lexicon stored in an AWS Region. A lexicon which has been deleted is not available for speech synthesis, nor is it possible to retrieve it using either the <code>GetLexicon</code> or <code>ListLexicon</code> APIs.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LexiconNotFoundException} <p>Amazon Polly can't find the specified lexicon. This could be caused by a lexicon that is missing, its name is misspelled or specifying a lexicon that is in a different region.</p> <p>Verify that the lexicon exists, is in the region (see <a>ListLexicons</a>) and that you spelled its name is spelled correctly. Then try again.</p>
   *   - {ServiceFailureException} <p>An unknown condition has caused a service failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLexicon(args: DeleteLexiconInput): Promise<DeleteLexiconOutput>;
  public deleteLexicon(
    args: DeleteLexiconInput,
    cb: (err: any, data?: DeleteLexiconOutput) => void
  ): void;
  public deleteLexicon(
    args: DeleteLexiconInput,
    cb?: (err: any, data?: DeleteLexiconOutput) => void
  ): Promise<DeleteLexiconOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLexiconCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the list of voices that are available for use when requesting speech synthesis. Each voice speaks a specified language, is either male or female, and is identified by an ID, which is the ASCII version of the voice name. </p> <p>When synthesizing speech ( <code>SynthesizeSpeech</code> ), you provide the voice ID for the voice you want from the list of voices returned by <code>DescribeVoices</code>.</p> <p>For example, you want your news reader application to read news in a specific language, but giving a user the option to choose the voice. Using the <code>DescribeVoices</code> operation you can provide the user with a list of available voices to select from.</p> <p> You can optionally specify a language code to filter the available voices. For example, if you specify <code>en-US</code>, the operation returns a list of all available US English voices. </p> <p>This operation requires permissions to perform the <code>polly:DescribeVoices</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>The NextToken is invalid. Verify that it's spelled correctly, and then try again.</p>
   *   - {ServiceFailureException} <p>An unknown condition has caused a service failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeVoices(
    args: DescribeVoicesInput
  ): Promise<DescribeVoicesOutput>;
  public describeVoices(
    args: DescribeVoicesInput,
    cb: (err: any, data?: DescribeVoicesOutput) => void
  ): void;
  public describeVoices(
    args: DescribeVoicesInput,
    cb?: (err: any, data?: DescribeVoicesOutput) => void
  ): Promise<DescribeVoicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeVoicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the content of the specified pronunciation lexicon stored in an AWS Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LexiconNotFoundException} <p>Amazon Polly can't find the specified lexicon. This could be caused by a lexicon that is missing, its name is misspelled or specifying a lexicon that is in a different region.</p> <p>Verify that the lexicon exists, is in the region (see <a>ListLexicons</a>) and that you spelled its name is spelled correctly. Then try again.</p>
   *   - {ServiceFailureException} <p>An unknown condition has caused a service failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLexicon(args: GetLexiconInput): Promise<GetLexiconOutput>;
  public getLexicon(
    args: GetLexiconInput,
    cb: (err: any, data?: GetLexiconOutput) => void
  ): void;
  public getLexicon(
    args: GetLexiconInput,
    cb?: (err: any, data?: GetLexiconOutput) => void
  ): Promise<GetLexiconOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLexiconCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a specific SpeechSynthesisTask object based on its TaskID. This object contains information about the given speech synthesis task, including the status of the task, and a link to the S3 bucket containing the output of the task.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidTaskIdException} <p>The provided Task ID is not valid. Please provide a valid Task ID and try again.</p>
   *   - {ServiceFailureException} <p>An unknown condition has caused a service failure.</p>
   *   - {SynthesisTaskNotFoundException} <p>The Speech Synthesis task with requested Task ID cannot be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSpeechSynthesisTask(
    args: GetSpeechSynthesisTaskInput
  ): Promise<GetSpeechSynthesisTaskOutput>;
  public getSpeechSynthesisTask(
    args: GetSpeechSynthesisTaskInput,
    cb: (err: any, data?: GetSpeechSynthesisTaskOutput) => void
  ): void;
  public getSpeechSynthesisTask(
    args: GetSpeechSynthesisTaskInput,
    cb?: (err: any, data?: GetSpeechSynthesisTaskOutput) => void
  ): Promise<GetSpeechSynthesisTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSpeechSynthesisTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of pronunciation lexicons stored in an AWS Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>The NextToken is invalid. Verify that it's spelled correctly, and then try again.</p>
   *   - {ServiceFailureException} <p>An unknown condition has caused a service failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listLexicons(args: ListLexiconsInput): Promise<ListLexiconsOutput>;
  public listLexicons(
    args: ListLexiconsInput,
    cb: (err: any, data?: ListLexiconsOutput) => void
  ): void;
  public listLexicons(
    args: ListLexiconsInput,
    cb?: (err: any, data?: ListLexiconsOutput) => void
  ): Promise<ListLexiconsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListLexiconsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of SpeechSynthesisTask objects ordered by their creation date. This operation can filter the tasks by their status, for example, allowing users to list only tasks that are completed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidNextTokenException} <p>The NextToken is invalid. Verify that it's spelled correctly, and then try again.</p>
   *   - {ServiceFailureException} <p>An unknown condition has caused a service failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSpeechSynthesisTasks(
    args: ListSpeechSynthesisTasksInput
  ): Promise<ListSpeechSynthesisTasksOutput>;
  public listSpeechSynthesisTasks(
    args: ListSpeechSynthesisTasksInput,
    cb: (err: any, data?: ListSpeechSynthesisTasksOutput) => void
  ): void;
  public listSpeechSynthesisTasks(
    args: ListSpeechSynthesisTasksInput,
    cb?: (err: any, data?: ListSpeechSynthesisTasksOutput) => void
  ): Promise<ListSpeechSynthesisTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSpeechSynthesisTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stores a pronunciation lexicon in an AWS Region. If a lexicon with the same name already exists in the region, it is overwritten by the new lexicon. Lexicon operations have eventual consistency, therefore, it might take some time before the lexicon is available to the SynthesizeSpeech operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidLexiconException} <p>Amazon Polly can't find the specified lexicon. Verify that the lexicon's name is spelled correctly, and then try again.</p>
   *   - {UnsupportedPlsAlphabetException} <p>The alphabet specified by the lexicon is not a supported alphabet. Valid values are <code>x-sampa</code> and <code>ipa</code>.</p>
   *   - {UnsupportedPlsLanguageException} <p>The language specified in the lexicon is unsupported. For a list of supported languages, see <a href="https://docs.aws.amazon.com/polly/latest/dg/API_LexiconAttributes.html">Lexicon Attributes</a>.</p>
   *   - {LexiconSizeExceededException} <p>The maximum size of the specified lexicon would be exceeded by this operation.</p>
   *   - {MaxLexemeLengthExceededException} <p>The maximum size of the lexeme would be exceeded by this operation.</p>
   *   - {MaxLexiconsNumberExceededException} <p>The maximum number of lexicons would be exceeded by this operation.</p>
   *   - {ServiceFailureException} <p>An unknown condition has caused a service failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putLexicon(args: PutLexiconInput): Promise<PutLexiconOutput>;
  public putLexicon(
    args: PutLexiconInput,
    cb: (err: any, data?: PutLexiconOutput) => void
  ): void;
  public putLexicon(
    args: PutLexiconInput,
    cb?: (err: any, data?: PutLexiconOutput) => void
  ): Promise<PutLexiconOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutLexiconCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Allows the creation of an asynchronous synthesis task, by starting a new <code>SpeechSynthesisTask</code>. This operation requires all the standard information needed for speech synthesis, plus the name of an Amazon S3 bucket for the service to store the output of the synthesis task and two optional parameters (OutputS3KeyPrefix and SnsTopicArn). Once the synthesis task is created, this operation will return a SpeechSynthesisTask object, which will include an identifier of this task as well as the current status.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TextLengthExceededException} <p>The value of the "Text" parameter is longer than the accepted limits. For the <code>SynthesizeSpeech</code> API, the limit for input text is a maximum of 6000 characters total, of which no more than 3000 can be billed characters. For the <code>StartSpeechSynthesisTask</code> API, the maximum is 200,000 characters, of which no more than 100,000 can be billed characters. SSML tags are not counted as billed characters.</p>
   *   - {InvalidS3BucketException} <p>The provided Amazon S3 bucket name is invalid. Please check your input with S3 bucket naming requirements and try again.</p>
   *   - {InvalidS3KeyException} <p>The provided Amazon S3 key prefix is invalid. Please provide a valid S3 object key name.</p>
   *   - {InvalidSampleRateException} <p>The specified sample rate is not valid.</p>
   *   - {InvalidSnsTopicArnException} <p>The provided SNS topic ARN is invalid. Please provide a valid SNS topic ARN and try again.</p>
   *   - {InvalidSsmlException} <p>The SSML you provided is invalid. Verify the SSML syntax, spelling of tags and values, and then try again.</p>
   *   - {EngineNotSupportedException} <p>This engine is not compatible with the voice that you have designated. Choose a new voice that is compatible with the engine or change the engine and restart the operation.</p>
   *   - {LexiconNotFoundException} <p>Amazon Polly can't find the specified lexicon. This could be caused by a lexicon that is missing, its name is misspelled or specifying a lexicon that is in a different region.</p> <p>Verify that the lexicon exists, is in the region (see <a>ListLexicons</a>) and that you spelled its name is spelled correctly. Then try again.</p>
   *   - {ServiceFailureException} <p>An unknown condition has caused a service failure.</p>
   *   - {MarksNotSupportedForFormatException} <p>Speech marks are not supported for the <code>OutputFormat</code> selected. Speech marks are only available for content in <code>json</code> format.</p>
   *   - {SsmlMarksNotSupportedForTextTypeException} <p>SSML speech marks are not supported for plain text-type input.</p>
   *   - {LanguageNotSupportedException} <p>The language specified is not currently supported by Amazon Polly in this capacity.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startSpeechSynthesisTask(
    args: StartSpeechSynthesisTaskInput
  ): Promise<StartSpeechSynthesisTaskOutput>;
  public startSpeechSynthesisTask(
    args: StartSpeechSynthesisTaskInput,
    cb: (err: any, data?: StartSpeechSynthesisTaskOutput) => void
  ): void;
  public startSpeechSynthesisTask(
    args: StartSpeechSynthesisTaskInput,
    cb?: (err: any, data?: StartSpeechSynthesisTaskOutput) => void
  ): Promise<StartSpeechSynthesisTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartSpeechSynthesisTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes. SSML input must be valid, well-formed SSML. Some alphabets might not be available with all the voices (for example, Cyrillic might not be read at all by English voices) unless phoneme mapping is used. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html">How it Works</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TextLengthExceededException} <p>The value of the "Text" parameter is longer than the accepted limits. For the <code>SynthesizeSpeech</code> API, the limit for input text is a maximum of 6000 characters total, of which no more than 3000 can be billed characters. For the <code>StartSpeechSynthesisTask</code> API, the maximum is 200,000 characters, of which no more than 100,000 can be billed characters. SSML tags are not counted as billed characters.</p>
   *   - {InvalidSampleRateException} <p>The specified sample rate is not valid.</p>
   *   - {InvalidSsmlException} <p>The SSML you provided is invalid. Verify the SSML syntax, spelling of tags and values, and then try again.</p>
   *   - {LexiconNotFoundException} <p>Amazon Polly can't find the specified lexicon. This could be caused by a lexicon that is missing, its name is misspelled or specifying a lexicon that is in a different region.</p> <p>Verify that the lexicon exists, is in the region (see <a>ListLexicons</a>) and that you spelled its name is spelled correctly. Then try again.</p>
   *   - {ServiceFailureException} <p>An unknown condition has caused a service failure.</p>
   *   - {MarksNotSupportedForFormatException} <p>Speech marks are not supported for the <code>OutputFormat</code> selected. Speech marks are only available for content in <code>json</code> format.</p>
   *   - {SsmlMarksNotSupportedForTextTypeException} <p>SSML speech marks are not supported for plain text-type input.</p>
   *   - {LanguageNotSupportedException} <p>The language specified is not currently supported by Amazon Polly in this capacity.</p>
   *   - {EngineNotSupportedException} <p>This engine is not compatible with the voice that you have designated. Choose a new voice that is compatible with the engine or change the engine and restart the operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public synthesizeSpeech(
    args: SynthesizeSpeechInput
  ): Promise<SynthesizeSpeechOutput>;
  public synthesizeSpeech(
    args: SynthesizeSpeechInput,
    cb: (err: any, data?: SynthesizeSpeechOutput) => void
  ): void;
  public synthesizeSpeech(
    args: SynthesizeSpeechInput,
    cb?: (err: any, data?: SynthesizeSpeechOutput) => void
  ): Promise<SynthesizeSpeechOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SynthesizeSpeechCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
