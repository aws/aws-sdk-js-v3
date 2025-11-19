// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { PollyServiceException as __BaseException } from "./PollyServiceException";

/**
 * <p>Amazon Polly can't find the specified lexicon. This could be caused by a
 *       lexicon that is missing, its name is misspelled or specifying a lexicon
 *       that is in a different region.</p>
 *          <p>Verify that the lexicon exists, is in the region (see <a>ListLexicons</a>) and that you spelled its name is spelled
 *       correctly. Then try again.</p>
 * @public
 */
export class LexiconNotFoundException extends __BaseException {
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
 * <p>An unknown condition has caused a service failure.</p>
 * @public
 */
export class ServiceFailureException extends __BaseException {
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
 * <p>The NextToken is invalid. Verify that it's spelled correctly, and
 *       then try again.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
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
 * <p>This engine is not compatible with the voice that you have designated.
 *       Choose a new voice that is compatible with the engine or change the engine
 *       and restart the operation.</p>
 * @public
 */
export class EngineNotSupportedException extends __BaseException {
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
 * <p>The provided Task ID is not valid. Please provide a valid Task ID and
 *       try again.</p>
 * @public
 */
export class InvalidTaskIdException extends __BaseException {
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
 * <p>The Speech Synthesis task with requested Task ID cannot be
 *       found.</p>
 * @public
 */
export class SynthesisTaskNotFoundException extends __BaseException {
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
 * <p>Amazon Polly can't find the specified lexicon. Verify that the lexicon's
 *       name is spelled correctly, and then try again.</p>
 * @public
 */
export class InvalidLexiconException extends __BaseException {
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
 * <p>The provided Amazon S3 bucket name is invalid. Please check your input
 *       with S3 bucket naming requirements and try again.</p>
 * @public
 */
export class InvalidS3BucketException extends __BaseException {
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
 * <p>The provided Amazon S3 key prefix is invalid. Please provide a valid
 *       S3 object key name.</p>
 * @public
 */
export class InvalidS3KeyException extends __BaseException {
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
 * <p>The specified sample rate is not valid.</p>
 * @public
 */
export class InvalidSampleRateException extends __BaseException {
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
 * <p>The provided SNS topic ARN is invalid. Please provide a valid SNS
 *       topic ARN and try again.</p>
 * @public
 */
export class InvalidSnsTopicArnException extends __BaseException {
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
 * <p>The SSML you provided is invalid. Verify the SSML syntax, spelling
 *       of tags and values, and then try again.</p>
 * @public
 */
export class InvalidSsmlException extends __BaseException {
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
 * <p>The language specified is not currently supported by Amazon Polly in this
 *       capacity.</p>
 * @public
 */
export class LanguageNotSupportedException extends __BaseException {
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
 * <p>The maximum size of the specified lexicon would be exceeded by this
 *       operation.</p>
 * @public
 */
export class LexiconSizeExceededException extends __BaseException {
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
 * <p>Speech marks are not supported for the <code>OutputFormat</code>
 *       selected. Speech marks are only available for content in <code>json</code>
 *       format.</p>
 * @public
 */
export class MarksNotSupportedForFormatException extends __BaseException {
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
 * <p>The maximum size of the lexeme would be exceeded by this
 *       operation.</p>
 * @public
 */
export class MaxLexemeLengthExceededException extends __BaseException {
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
 * <p>The maximum number of lexicons would be exceeded by this
 *       operation.</p>
 * @public
 */
export class MaxLexiconsNumberExceededException extends __BaseException {
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
 * <p>The alphabet specified by the lexicon is not a supported alphabet.
 *       Valid values are <code>x-sampa</code> and <code>ipa</code>.</p>
 * @public
 */
export class UnsupportedPlsAlphabetException extends __BaseException {
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
 * <p>The language specified in the lexicon is unsupported. For a list of
 *       supported languages, see <a href="https://docs.aws.amazon.com/polly/latest/dg/API_LexiconAttributes.html">Lexicon Attributes</a>.</p>
 * @public
 */
export class UnsupportedPlsLanguageException extends __BaseException {
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
 * <p>SSML speech marks are not supported for plain text-type
 *       input.</p>
 * @public
 */
export class SsmlMarksNotSupportedForTextTypeException extends __BaseException {
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
 * <p>The value of the "Text" parameter is longer than the accepted
 *       limits. For the <code>SynthesizeSpeech</code> API, the limit for input
 *       text is a maximum of 6000 characters total, of which no more than 3000 can
 *       be billed characters. For the <code>StartSpeechSynthesisTask</code> API,
 *       the maximum is 200,000 characters, of which no more than 100,000 can be
 *       billed characters. SSML tags are not counted as billed
 *       characters.</p>
 * @public
 */
export class TextLengthExceededException extends __BaseException {
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
