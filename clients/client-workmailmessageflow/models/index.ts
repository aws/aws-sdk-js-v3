import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface GetRawMessageContentRequest {
  __type?: "GetRawMessageContentRequest";
  /**
   *
   *          <p>The identifier of the email message to retrieve.</p>
   *
   */
  messageId: string | undefined;
}

export namespace GetRawMessageContentRequest {
  export function isa(o: any): o is GetRawMessageContentRequest {
    return _smithy.isa(o, "GetRawMessageContentRequest");
  }
}

export interface GetRawMessageContentResponse extends $MetadataBearer {
  __type?: "GetRawMessageContentResponse";
  /**
   *
   *          <p>The raw content of the email message, in MIME format.</p>
   *
   */
  messageContent: Uint8Array | undefined;
}

export namespace GetRawMessageContentResponse {
  export function isa(o: any): o is GetRawMessageContentResponse {
    return _smithy.isa(o, "GetRawMessageContentResponse");
  }
}

/**
 *
 *          <p>The requested email message is not found.</p>
 *
 */
export interface ResourceNotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceNotFoundException";
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return _smithy.isa(o, "ResourceNotFoundException");
  }
}
