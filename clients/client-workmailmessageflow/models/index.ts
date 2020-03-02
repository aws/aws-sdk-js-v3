import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";

export interface GetRawMessageContentRequest {
  __type?: "GetRawMessageContentRequest";
  /**
   * <p>The identifier of the email message to retrieve.</p>
   */
  messageId: string | undefined;
}

export namespace GetRawMessageContentRequest {
  export function isa(o: any): o is GetRawMessageContentRequest {
    return __isa(o, "GetRawMessageContentRequest");
  }
}

export interface GetRawMessageContentResponse {
  __type?: "GetRawMessageContentResponse";
  /**
   * <p>The raw content of the email message, in MIME format.</p>
   */
  messageContent: Readable | ReadableStream | Blob | undefined;
}

export namespace GetRawMessageContentResponse {
  export function isa(o: any): o is GetRawMessageContentResponse {
    return __isa(o, "GetRawMessageContentResponse");
  }
}

/**
 * <p>The requested email message is not found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}
