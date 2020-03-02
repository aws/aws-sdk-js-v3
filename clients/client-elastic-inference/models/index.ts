import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * Raised when a malformed input has been provided to the API.
 */
export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  message?: string;
}

export namespace BadRequestException {
  export function isa(o: any): o is BadRequestException {
    return __isa(o, "BadRequestException");
  }
}

/**
 * Raised when an unexpected error occurred during request processing.
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message?: string;
}

export namespace InternalServerException {
  export function isa(o: any): o is InternalServerException {
    return __isa(o, "InternalServerException");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * The ARN of the Elastic Inference Accelerator to list the tags for.
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResult {
  __type?: "ListTagsForResourceResult";
  /**
   * The tags of the Elastic Inference Accelerator.
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResult {
  export function isa(o: any): o is ListTagsForResourceResult {
    return __isa(o, "ListTagsForResourceResult");
  }
}

/**
 * Raised when the requested resource cannot be found.
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

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * The ARN of the Elastic Inference Accelerator to tag.
   */
  resourceArn: string | undefined;

  /**
   * The tags to add to the Elastic Inference Accelerator.
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResult {
  __type?: "TagResourceResult";
}

export namespace TagResourceResult {
  export function isa(o: any): o is TagResourceResult {
    return __isa(o, "TagResourceResult");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * The ARN of the Elastic Inference Accelerator to untag.
   */
  resourceArn: string | undefined;

  /**
   * The list of tags to remove from the Elastic Inference Accelerator.
   */
  tagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResult {
  __type?: "UntagResourceResult";
}

export namespace UntagResourceResult {
  export function isa(o: any): o is UntagResourceResult {
    return __isa(o, "UntagResourceResult");
  }
}
