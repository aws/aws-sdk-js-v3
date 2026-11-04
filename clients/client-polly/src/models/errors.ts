// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { QuotaCode, ServiceCode, ValidationExceptionReason } from "./enums";
import type { ThrottlingReason, ValidationExceptionField } from "./models_0";
import { PollyServiceException as __BaseException } from "./PollyServiceException";

/**
 * Amazon Polly can't find the specified lexicon. This could be caused by a lexicon that is missing, its name is misspelled or specifying a lexicon that is in a different region.
 *
 * Verify that the lexicon exists, is in the region (see ListLexicons) and that you spelled its name is spelled correctly. Then try again.
 *
 * @public
 */
export class LexiconNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#LexiconNotFoundException";
  readonly name = "LexiconNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LexiconNotFoundException, __BaseException>) {
    super({
      name: "LexiconNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LexiconNotFoundException.prototype);
  }
}

/**
 * An unknown condition has caused a service failure.
 *
 * @public
 */
export class ServiceFailureException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#ServiceFailureException";
  readonly name = "ServiceFailureException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceFailureException, __BaseException>) {
    super({
      name: "ServiceFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceFailureException.prototype);
  }
}

/**
 * The NextToken is invalid. Verify that it's spelled correctly, and then try again.
 *
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#InvalidNextTokenException";
  readonly name = "InvalidNextTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
  }
}

/**
 * This engine is not compatible with the voice that you have designated. Choose a new voice that is compatible with the engine or change the engine and restart the operation.
 *
 * @public
 */
export class EngineNotSupportedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#EngineNotSupportedException";
  readonly name = "EngineNotSupportedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EngineNotSupportedException, __BaseException>) {
    super({
      name: "EngineNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EngineNotSupportedException.prototype);
  }
}

/**
 * The provided Task ID is not valid. Please provide a valid Task ID and try again.
 *
 * @public
 */
export class InvalidTaskIdException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#InvalidTaskIdException";
  readonly name = "InvalidTaskIdException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTaskIdException, __BaseException>) {
    super({
      name: "InvalidTaskIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTaskIdException.prototype);
  }
}

/**
 * The Speech Synthesis task with requested Task ID cannot be found.
 *
 * @public
 */
export class SynthesisTaskNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#SynthesisTaskNotFoundException";
  readonly name = "SynthesisTaskNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SynthesisTaskNotFoundException, __BaseException>) {
    super({
      name: "SynthesisTaskNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SynthesisTaskNotFoundException.prototype);
  }
}

/**
 * Amazon Polly can't find the specified lexicon. Verify that the lexicon's name is spelled correctly, and then try again.
 *
 * @public
 */
export class InvalidLexiconException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#InvalidLexiconException";
  readonly name = "InvalidLexiconException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLexiconException, __BaseException>) {
    super({
      name: "InvalidLexiconException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLexiconException.prototype);
  }
}

/**
 * The provided Amazon S3 bucket name is invalid. Please check your input with S3 bucket naming requirements and try again.
 *
 * @public
 */
export class InvalidS3BucketException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#InvalidS3BucketException";
  readonly name = "InvalidS3BucketException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3BucketException, __BaseException>) {
    super({
      name: "InvalidS3BucketException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3BucketException.prototype);
  }
}

/**
 * The provided Amazon S3 key prefix is invalid. Please provide a valid S3 object key name.
 *
 * @public
 */
export class InvalidS3KeyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#InvalidS3KeyException";
  readonly name = "InvalidS3KeyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3KeyException, __BaseException>) {
    super({
      name: "InvalidS3KeyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3KeyException.prototype);
  }
}

/**
 * The specified sample rate is not valid.
 *
 * @public
 */
export class InvalidSampleRateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#InvalidSampleRateException";
  readonly name = "InvalidSampleRateException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSampleRateException, __BaseException>) {
    super({
      name: "InvalidSampleRateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSampleRateException.prototype);
  }
}

/**
 * The provided SNS topic ARN is invalid. Please provide a valid SNS topic ARN and try again.
 *
 * @public
 */
export class InvalidSnsTopicArnException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#InvalidSnsTopicArnException";
  readonly name = "InvalidSnsTopicArnException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSnsTopicArnException, __BaseException>) {
    super({
      name: "InvalidSnsTopicArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSnsTopicArnException.prototype);
  }
}

/**
 * The SSML you provided is invalid. Verify the SSML syntax, spelling of tags and values, and then try again.
 *
 * @public
 */
export class InvalidSsmlException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#InvalidSsmlException";
  readonly name = "InvalidSsmlException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSsmlException, __BaseException>) {
    super({
      name: "InvalidSsmlException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSsmlException.prototype);
  }
}

/**
 * The language specified is not currently supported by Amazon Polly in this capacity.
 *
 * @public
 */
export class LanguageNotSupportedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#LanguageNotSupportedException";
  readonly name = "LanguageNotSupportedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LanguageNotSupportedException, __BaseException>) {
    super({
      name: "LanguageNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LanguageNotSupportedException.prototype);
  }
}

/**
 * The maximum size of the specified lexicon would be exceeded by this operation.
 *
 * @public
 */
export class LexiconSizeExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#LexiconSizeExceededException";
  readonly name = "LexiconSizeExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LexiconSizeExceededException, __BaseException>) {
    super({
      name: "LexiconSizeExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LexiconSizeExceededException.prototype);
  }
}

/**
 * Speech marks are not supported for the `OutputFormat` selected. Speech marks are only available for content in `json` format.
 *
 * @public
 */
export class MarksNotSupportedForFormatException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#MarksNotSupportedForFormatException";
  readonly name = "MarksNotSupportedForFormatException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MarksNotSupportedForFormatException, __BaseException>) {
    super({
      name: "MarksNotSupportedForFormatException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MarksNotSupportedForFormatException.prototype);
  }
}

/**
 * The maximum size of the lexeme would be exceeded by this operation.
 *
 * @public
 */
export class MaxLexemeLengthExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#MaxLexemeLengthExceededException";
  readonly name = "MaxLexemeLengthExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxLexemeLengthExceededException, __BaseException>) {
    super({
      name: "MaxLexemeLengthExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxLexemeLengthExceededException.prototype);
  }
}

/**
 * The maximum number of lexicons would be exceeded by this operation.
 *
 * @public
 */
export class MaxLexiconsNumberExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#MaxLexiconsNumberExceededException";
  readonly name = "MaxLexiconsNumberExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaxLexiconsNumberExceededException, __BaseException>) {
    super({
      name: "MaxLexiconsNumberExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaxLexiconsNumberExceededException.prototype);
  }
}

/**
 * The alphabet specified by the lexicon is not a supported alphabet. Valid values are `ipa`, `x-sampa`, `x-amazon-pinyin`, `x-amazon-jyutping`, `x-amazon-pron-kana`, and `x-amazon-yomigana`. Replace the unsupported alphabet with one of the valid values and resubmit your request.
 *
 * @public
 */
export class UnsupportedPlsAlphabetException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#UnsupportedPlsAlphabetException";
  readonly name = "UnsupportedPlsAlphabetException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedPlsAlphabetException, __BaseException>) {
    super({
      name: "UnsupportedPlsAlphabetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedPlsAlphabetException.prototype);
  }
}

/**
 * The language specified in the lexicon is unsupported. For a list of supported languages, see [Lexicon Attributes](https://docs.aws.amazon.com/polly/latest/dg/API_LexiconAttributes.html).
 *
 * @public
 */
export class UnsupportedPlsLanguageException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#UnsupportedPlsLanguageException";
  readonly name = "UnsupportedPlsLanguageException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedPlsLanguageException, __BaseException>) {
    super({
      name: "UnsupportedPlsLanguageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedPlsLanguageException.prototype);
  }
}

/**
 * The request would cause a service quota to be exceeded.
 *
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#ServiceQuotaExceededException";
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The quota code identifying the specific quota.
   *
   * @public
   */
  quotaCode: QuotaCode | undefined;

  /**
   * The service code identifying the originating service.
   *
   * @public
   */
  serviceCode: ServiceCode | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.quotaCode = opts.quotaCode;
    this.serviceCode = opts.serviceCode;
  }
}

/**
 * The request was denied because of request throttling.
 *
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * A list of reasons explaining why the request was throttled.
   *
   * @public
   */
  throttlingReasons?: ThrottlingReason[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.throttlingReasons = opts.throttlingReasons;
  }
}

/**
 * The input fails to satisfy the constraints specified by the service.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * The reason the request failed validation.
   *
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * The fields that caused the validation error.
   *
   * @public
   */
  fields?: ValidationExceptionField[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
    this.fields = opts.fields;
  }
}

/**
 * SSML speech marks are not supported for plain text-type input.
 *
 * @public
 */
export class SsmlMarksNotSupportedForTextTypeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#SsmlMarksNotSupportedForTextTypeException";
  readonly name = "SsmlMarksNotSupportedForTextTypeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SsmlMarksNotSupportedForTextTypeException, __BaseException>) {
    super({
      name: "SsmlMarksNotSupportedForTextTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SsmlMarksNotSupportedForTextTypeException.prototype);
  }
}

/**
 * The value of the "Text" parameter is longer than the accepted limits. For the `SynthesizeSpeech` API, the limit for input text is a maximum of 6000 characters total, of which no more than 3000 can be billed characters. For the `StartSpeechSynthesisTask` API, the maximum is 200,000 characters, of which no more than 100,000 can be billed characters. SSML tags are not counted as billed characters.
 *
 * @public
 */
export class TextLengthExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.polly#TextLengthExceededException";
  readonly name = "TextLengthExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TextLengthExceededException, __BaseException>) {
    super({
      name: "TextLengthExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TextLengthExceededException.prototype);
  }
}
