/**
 * <p>Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot..</p>
 */
export interface _CodeHook {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function.</p>
   */
  uri: string;

  /**
   * <p>The version of the request-response that you want Amazon Lex to use to invoke your Lambda function. For more information, see <a>using-lambda</a>.</p>
   */
  messageVersion: string;
}

export type _UnmarshalledCodeHook = _CodeHook;
