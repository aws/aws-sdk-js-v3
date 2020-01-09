import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 *
 *         Raised when a malformed input has been provided to the API.
 *
 */
export interface BadRequestException extends _smithy.SmithyException, $MetadataBearer {
  __type: "BadRequestException";
  $fault: "client";
  message?: string;
}

export namespace BadRequestException {
  export function isa(o: any): o is BadRequestException {
    return _smithy.isa(o, "BadRequestException");
  }
}

/**
 *
 *         Raised when an unexpected error occurred during request processing.
 *
 */
export interface InternalServerException extends _smithy.SmithyException, $MetadataBearer {
  __type: "InternalServerException";
  $fault: "server";
  message?: string;
}

export namespace InternalServerException {
  export function isa(o: any): o is InternalServerException {
    return _smithy.isa(o, "InternalServerException");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   *
   *         The ARN of the Elastic Inference Accelerator to list the tags for.
   *
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return _smithy.isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResult extends $MetadataBearer {
  __type?: "ListTagsForResourceResult";
  /**
   *
   *         The tags of the Elastic Inference Accelerator.
   *
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResult {
  export function isa(o: any): o is ListTagsForResourceResult {
    return _smithy.isa(o, "ListTagsForResourceResult");
  }
}

/**
 *
 *         Raised when the requested resource cannot be found.
 *
 */
export interface ResourceNotFoundException extends _smithy.SmithyException, $MetadataBearer {
  __type: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return _smithy.isa(o, "ResourceNotFoundException");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   *
   *         The ARN of the Elastic Inference Accelerator to tag.
   *
   */
  resourceArn: string | undefined;

  /**
   *
   *         The tags to add to the Elastic Inference Accelerator.
   *
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return _smithy.isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResult extends $MetadataBearer {
  __type?: "TagResourceResult";
}

export namespace TagResourceResult {
  export function isa(o: any): o is TagResourceResult {
    return _smithy.isa(o, "TagResourceResult");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   *
   *         The ARN of the Elastic Inference Accelerator to untag.
   *
   */
  resourceArn: string | undefined;

  /**
   *
   *         The list of tags to remove from the Elastic Inference Accelerator.
   *
   */
  tagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return _smithy.isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResult extends $MetadataBearer {
  __type?: "UntagResourceResult";
}

export namespace UntagResourceResult {
  export function isa(o: any): o is UntagResourceResult {
    return _smithy.isa(o, "UntagResourceResult");
  }
}
