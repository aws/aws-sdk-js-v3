/**
 * This banned import is allowed because \@smithy/smithy-client
 * is itself a re-export stub. Nothing is expected to use \@aws-sdk/smithy-client directly either.
 */
// eslint-disable-next-line no-restricted-imports, no-restricted-syntax
export * from "@smithy/smithy-client";
