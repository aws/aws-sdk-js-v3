import { _UnmarshalledResourceReference } from "./_ResourceReference";
import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource that you are attempting to delete is referred to by another resource. Use this information to remove references to the resource that you are trying to delete.</p> <p>The body of the exception contains a JSON object that describes the resource.</p> <p> <code>{ "resourceType": BOT | BOTALIAS | BOTCHANNEL | INTENT,</code> </p> <p> <code>"resourceReference": {</code> </p> <p> <code>"name": <i>string</i>, "version": <i>string</i> } }</code> </p>
 */
export interface ResourceInUseException
  extends __ServiceException__<_ResourceInUseExceptionDetails> {
  name: "ResourceInUseException";
}

export interface _ResourceInUseExceptionDetails {
  /**
   * _ReferenceType shape
   */
  referenceType?: "Intent" | "Bot" | "BotAlias" | "BotChannel" | string;

  /**
   * <p>Describes the resource that refers to the resource that you are attempting to delete. This object is returned as part of the <code>ResourceInUseException</code> exception. </p>
   */
  exampleReference?: _UnmarshalledResourceReference;
}
