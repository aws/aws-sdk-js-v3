import { HandlerArguments, SerializeHandler } from "@aws-sdk/types";
import { escapeUri, escapeUriPath } from "@aws-sdk/util-uri-escape";
/**
 * reference: https://github.com/aws/aws-sdk-ruby/issues/969#issuecomment-151270426
 */
export function encodeCopySource(next: SerializeHandler<any, any, any>) {
  return ({ input, ...others }: HandlerArguments<any>) => {
    if (input.CopySource) {
      const copySource: string = input.CopySource;
      const bucketKeyDivider = copySource.indexOf("/");
      const bucket = copySource.substring(0, bucketKeyDivider);
      let key = copySource.substring(bucketKeyDivider + 1);
      let versionId;
      if (
        key.lastIndexOf("?versionId=") > 0 &&
        key.length > "?versionId=".length
      ) {
        versionId = key.substr(
          key.lastIndexOf("?versionId=") + "?versionId=".length
        );
        key = key.substring(0, key.lastIndexOf("?versionId="));
      }
      key = escapeUriPath(key);
      versionId = versionId ? escapeUri(versionId) : versionId;
      input.CopySource = `${bucket}/${key}${
        versionId ? `?versionId=${versionId}` : ""
      }`;
    }
    return next({
      ...others,
      input
    });
  };
}
