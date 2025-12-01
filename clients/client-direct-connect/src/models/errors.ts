// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DirectConnectServiceException as __BaseException } from "./DirectConnectServiceException";

/**
 * <p>One or more parameters are not valid.</p>
 * @public
 */
export class DirectConnectClientException extends __BaseException {
  readonly name = "DirectConnectClientException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectConnectClientException, __BaseException>) {
    super({
      name: "DirectConnectClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectConnectClientException.prototype);
  }
}

/**
 * <p>A server-side error occurred.</p>
 * @public
 */
export class DirectConnectServerException extends __BaseException {
  readonly name = "DirectConnectServerException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectConnectServerException, __BaseException>) {
    super({
      name: "DirectConnectServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectConnectServerException.prototype);
  }
}

/**
 * <p>A tag key was specified more than once.</p>
 * @public
 */
export class DuplicateTagKeysException extends __BaseException {
  readonly name = "DuplicateTagKeysException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateTagKeysException, __BaseException>) {
    super({
      name: "DuplicateTagKeysException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateTagKeysException.prototype);
  }
}

/**
 * <p>You have reached the limit on the number of tags that can be assigned.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}
