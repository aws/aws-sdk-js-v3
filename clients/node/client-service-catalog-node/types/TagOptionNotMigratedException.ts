import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An operation requiring TagOptions failed because the TagOptions migration process has not been performed for this account. Please use the AWS console to perform the migration process before retrying the operation.</p>
 */
export interface TagOptionNotMigratedException
  extends __ServiceException__<_TagOptionNotMigratedExceptionDetails> {
  name: "TagOptionNotMigratedException";
}

export interface _TagOptionNotMigratedExceptionDetails {}
