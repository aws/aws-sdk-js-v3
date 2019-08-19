import { _UnmarshalledSyntaxToken } from "./_SyntaxToken";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DetectSyntaxOutput shape
 */
export interface DetectSyntaxOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A collection of syntax tokens describing the text. For each token, the response provides the text, the token type, where the text begins and ends, and the level of confidence that Amazon Comprehend has that the token is correct. For a list of token types, see <a>how-syntax</a>.</p>
   */
  SyntaxTokens?: Array<_UnmarshalledSyntaxToken>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
