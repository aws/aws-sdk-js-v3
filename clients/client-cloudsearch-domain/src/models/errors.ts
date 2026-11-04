// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { CloudSearchDomainServiceException as __BaseException } from "./CloudSearchDomainServiceException";

/**
 * Information about any problems encountered while processing a search request.
 *
 * @public
 */
export class SearchException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudsearchdomain#SearchException";
  readonly name = "SearchException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SearchException, __BaseException>) {
    super({
      name: "SearchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SearchException.prototype);
  }
}

/**
 * Information about any problems encountered while processing an upload request.
 *
 * @public
 */
export class DocumentServiceException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudsearchdomain#DocumentServiceException";
  readonly name = "DocumentServiceException" as const;
  readonly $fault = "client" as const;
  /**
   * The return status of a document upload request, `error` or `success`.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DocumentServiceException, __BaseException>) {
    super({
      name: "DocumentServiceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DocumentServiceException.prototype);
    this.status = opts.status;
  }
}
