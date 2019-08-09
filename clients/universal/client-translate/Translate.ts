import { TranslateClient } from "./TranslateClient";
import { DeleteTerminologyInput } from "./types/DeleteTerminologyInput";
import { DeleteTerminologyOutput } from "./types/DeleteTerminologyOutput";
import { DetectedLanguageLowConfidenceException } from "./types/DetectedLanguageLowConfidenceException";
import { GetTerminologyInput } from "./types/GetTerminologyInput";
import { GetTerminologyOutput } from "./types/GetTerminologyOutput";
import { ImportTerminologyInput } from "./types/ImportTerminologyInput";
import { ImportTerminologyOutput } from "./types/ImportTerminologyOutput";
import { InternalServerException } from "./types/InternalServerException";
import { InvalidParameterValueException } from "./types/InvalidParameterValueException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListTerminologiesInput } from "./types/ListTerminologiesInput";
import { ListTerminologiesOutput } from "./types/ListTerminologiesOutput";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { TextSizeLimitExceededException } from "./types/TextSizeLimitExceededException";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { TranslateTextInput } from "./types/TranslateTextInput";
import { TranslateTextOutput } from "./types/TranslateTextOutput";
import { UnsupportedLanguagePairException } from "./types/UnsupportedLanguagePairException";
import { DeleteTerminologyCommand } from "./commands/DeleteTerminologyCommand";
import { GetTerminologyCommand } from "./commands/GetTerminologyCommand";
import { ImportTerminologyCommand } from "./commands/ImportTerminologyCommand";
import { ListTerminologiesCommand } from "./commands/ListTerminologiesCommand";
import { TranslateTextCommand } from "./commands/TranslateTextCommand";

export class Translate extends TranslateClient {
  /**
   * <p>A synchronous action that deletes a custom terminology.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The resource you are looking for has not been found. Review the resource you're looking for and see if a different resource will accomplish your needs before retrying the revised request. .</p>
   *   - {TooManyRequestsException} <p> You have made too many requests within a short period of time. Wait for a short time and then try your request again.</p>
   *   - {InternalServerException} <p> An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteTerminology(
    args: DeleteTerminologyInput
  ): Promise<DeleteTerminologyOutput>;
  public deleteTerminology(
    args: DeleteTerminologyInput,
    cb: (err: any, data?: DeleteTerminologyOutput) => void
  ): void;
  public deleteTerminology(
    args: DeleteTerminologyInput,
    cb?: (err: any, data?: DeleteTerminologyOutput) => void
  ): Promise<DeleteTerminologyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTerminologyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a custom terminology.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The resource you are looking for has not been found. Review the resource you're looking for and see if a different resource will accomplish your needs before retrying the revised request. .</p>
   *   - {InvalidParameterValueException} <p>The value of the parameter is invalid. Review the value of the parameter you are using to correct it, and then retry your operation.</p>
   *   - {TooManyRequestsException} <p> You have made too many requests within a short period of time. Wait for a short time and then try your request again.</p>
   *   - {InternalServerException} <p> An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTerminology(
    args: GetTerminologyInput
  ): Promise<GetTerminologyOutput>;
  public getTerminology(
    args: GetTerminologyInput,
    cb: (err: any, data?: GetTerminologyOutput) => void
  ): void;
  public getTerminology(
    args: GetTerminologyInput,
    cb?: (err: any, data?: GetTerminologyOutput) => void
  ): Promise<GetTerminologyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTerminologyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates or updates a custom terminology, depending on whether or not one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. Currently, the only supported merge strategy is OVERWRITE, and so the imported terminology will overwrite an existing terminology of the same name.</p> <p>If you import a terminology that overwrites an existing one, the new terminology take up to 10 minutes to fully propagate and be available for use in a translation due to cache policies with the DataPlane service that performs the translations.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>The value of the parameter is invalid. Review the value of the parameter you are using to correct it, and then retry your operation.</p>
   *   - {LimitExceededException} <p>The specified limit has been exceeded. Review your request and retry it with a quantity below the stated limit.</p>
   *   - {TooManyRequestsException} <p> You have made too many requests within a short period of time. Wait for a short time and then try your request again.</p>
   *   - {InternalServerException} <p> An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importTerminology(
    args: ImportTerminologyInput
  ): Promise<ImportTerminologyOutput>;
  public importTerminology(
    args: ImportTerminologyInput,
    cb: (err: any, data?: ImportTerminologyOutput) => void
  ): void;
  public importTerminology(
    args: ImportTerminologyInput,
    cb?: (err: any, data?: ImportTerminologyOutput) => void
  ): Promise<ImportTerminologyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportTerminologyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides a list of custom terminologies associated with your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>The value of the parameter is invalid. Review the value of the parameter you are using to correct it, and then retry your operation.</p>
   *   - {TooManyRequestsException} <p> You have made too many requests within a short period of time. Wait for a short time and then try your request again.</p>
   *   - {InternalServerException} <p> An internal server error occurred. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTerminologies(
    args: ListTerminologiesInput
  ): Promise<ListTerminologiesOutput>;
  public listTerminologies(
    args: ListTerminologiesInput,
    cb: (err: any, data?: ListTerminologiesOutput) => void
  ): void;
  public listTerminologies(
    args: ListTerminologiesInput,
    cb?: (err: any, data?: ListTerminologiesOutput) => void
  ): Promise<ListTerminologiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTerminologiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Translates input text from the source language to the target language. It is not necessary to use English (en) as either the source or the target language but not all language combinations are supported by Amazon Translate. For more information, see <a href="http://docs.aws.amazon.com/translate/latest/dg/pairs.html">Supported Language Pairs</a>.</p> <ul> <li> <p>Arabic (ar)</p> </li> <li> <p>Chinese (Simplified) (zh)</p> </li> <li> <p>Chinese (Traditional) (zh-TW)</p> </li> <li> <p>Czech (cs)</p> </li> <li> <p>Danish (da)</p> </li> <li> <p>Dutch (nl)</p> </li> <li> <p>English (en)</p> </li> <li> <p>Finnish (fi)</p> </li> <li> <p>French (fr)</p> </li> <li> <p>German (de)</p> </li> <li> <p>Hebrew (he)</p> </li> <li> <p>Indonesian (id)</p> </li> <li> <p>Italian (it)</p> </li> <li> <p>Japanese (ja)</p> </li> <li> <p>Korean (ko)</p> </li> <li> <p>Polish (pl)</p> </li> <li> <p>Portuguese (pt)</p> </li> <li> <p>Russian (ru)</p> </li> <li> <p>Spanish (es)</p> </li> <li> <p>Swedish (sv)</p> </li> <li> <p>Turkish (tr)</p> </li> </ul> <p>To have Amazon Translate determine the source language of your text, you can specify <code>auto</code> in the <code>SourceLanguageCode</code> field. If you specify <code>auto</code>, Amazon Translate will call Amazon Comprehend to determine the source language.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidRequestException} <p> The request that you made is invalid. Check your request to determine why it's invalid and then retry the request. </p>
   *   - {TextSizeLimitExceededException} <p> The size of the text you submitted exceeds the size limit. Reduce the size of the text or use a smaller document and then retry your request. </p>
   *   - {TooManyRequestsException} <p> You have made too many requests within a short period of time. Wait for a short time and then try your request again.</p>
   *   - {UnsupportedLanguagePairException} <p>Amazon Translate does not support translation from the language of the source text into the requested target language. For more information, see <a>how-to-error-msg</a>. </p>
   *   - {DetectedLanguageLowConfidenceException} <p>The confidence that Amazon Comprehend accurately detected the source language is low. If a low confidence level is acceptable for your application, you can use the language in the exception to call Amazon Translate again. For more information, see the <a href="https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectDominantLanguage.html">DetectDominantLanguage</a> operation in the <i>Amazon Comprehend Developer Guide</i>. </p>
   *   - {ResourceNotFoundException} <p>The resource you are looking for has not been found. Review the resource you're looking for and see if a different resource will accomplish your needs before retrying the revised request. .</p>
   *   - {InternalServerException} <p> An internal server error occurred. Retry your request.</p>
   *   - {ServiceUnavailableException} <p>The Amazon Translate service is temporarily unavailable. Please wait a bit and then retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public translateText(args: TranslateTextInput): Promise<TranslateTextOutput>;
  public translateText(
    args: TranslateTextInput,
    cb: (err: any, data?: TranslateTextOutput) => void
  ): void;
  public translateText(
    args: TranslateTextInput,
    cb?: (err: any, data?: TranslateTextOutput) => void
  ): Promise<TranslateTextOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TranslateTextCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
