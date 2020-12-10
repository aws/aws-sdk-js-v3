import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";

export interface GetRawMessageContentRequest {
  /**
   * <p>The identifier of the email message to retrieve.</p>
   */
  messageId: string | undefined;
}

export namespace GetRawMessageContentRequest {
  export const filterSensitiveLog = (obj: GetRawMessageContentRequest): any => ({
    ...obj,
  });
}

export interface GetRawMessageContentResponse {
  /**
   * <p>The raw content of the email message, in MIME format.</p>
   */
  messageContent: Readable | ReadableStream | Blob | undefined;
}

export namespace GetRawMessageContentResponse {
  export const filterSensitiveLog = (obj: GetRawMessageContentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The requested email message is not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}
