// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudSearchDomainServiceException as __BaseException } from "./CloudSearchDomainServiceException";

/**
 * <p>Information about any problems encountered while processing a search request.</p>
 * @public
 */
export class SearchException extends __BaseException {
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
 * <p>Information about any problems encountered while processing an upload request.</p>
 * @public
 */
export class DocumentServiceException extends __BaseException {
  readonly name = "DocumentServiceException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The return status of a document upload request, <code>error</code> or <code>success</code>.</p>
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
