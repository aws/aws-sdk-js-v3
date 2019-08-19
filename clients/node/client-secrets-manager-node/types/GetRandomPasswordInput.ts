import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRandomPasswordInput shape
 */
export interface GetRandomPasswordInput {
  /**
   * <p>The desired length of the generated password. The default value if you do not include this parameter is 32 characters.</p>
   */
  PasswordLength?: number;

  /**
   * <p>A string that includes characters that should not be included in the generated password. The default is that all characters from the included sets can be used.</p>
   */
  ExcludeCharacters?: string;

  /**
   * <p>Specifies that the generated password should not include digits. The default if you do not include this switch parameter is that digits can be included.</p>
   */
  ExcludeNumbers?: boolean;

  /**
   * <p>Specifies that the generated password should not include punctuation characters. The default if you do not include this switch parameter is that punctuation characters can be included.</p> <p>The following are the punctuation characters that <i>can</i> be included in the generated password if you don't explicitly exclude them with <code>ExcludeCharacters</code> or <code>ExcludePunctuation</code>:</p> <p> <code>! " # $ % &amp; ' ( ) * + , - . / : ; &lt; = &gt; ? @ [ \ ] ^ _ ` { | } ~</code> </p>
   */
  ExcludePunctuation?: boolean;

  /**
   * <p>Specifies that the generated password should not include uppercase letters. The default if you do not include this switch parameter is that uppercase letters can be included.</p>
   */
  ExcludeUppercase?: boolean;

  /**
   * <p>Specifies that the generated password should not include lowercase letters. The default if you do not include this switch parameter is that lowercase letters can be included.</p>
   */
  ExcludeLowercase?: boolean;

  /**
   * <p>Specifies that the generated password can include the space character. The default if you do not include this switch parameter is that the space character is not included.</p>
   */
  IncludeSpace?: boolean;

  /**
   * <p>A boolean value that specifies whether the generated password must include at least one of every allowed character type. The default value is <code>True</code> and the operation requires at least one of every character type.</p>
   */
  RequireEachIncludedType?: boolean;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
