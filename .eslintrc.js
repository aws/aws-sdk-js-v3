module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  extends: [
    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint", "simple-import-sort", "eslint-plugin-sort-export-all", "eslint-plugin-tsdoc", "n"],
  rules: {
    /** Turn off strict enforcement */
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prefer-rest-params": "off",
    "@typescript-eslint/no-non-null-assertion": "off",

    /** Warnings */
    "@typescript-eslint/no-namespace": "warn",
    "tsdoc/syntax": "warn",

    /** Errors */
    "simple-import-sort/imports": "error",
    "sort-export-all/sort-export-all": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "n/prefer-node-protocol": "error",
  },
  ignorePatterns: [
    "packages/nested-clients/src/submodules/**/protocols/*.ts",
    "packages/nested-clients/src/submodules/**/models/*.ts",
    "lib/lib-dynamodb/src/commands/*.ts",
    "lib/lib-dynamodb/src/pagination/*.ts",
    "lib/lib-dynamodb/src/DynamoDBDocument.ts",
    "lib/lib-dynamodb/src/DynamoDBDocumentClient.ts",
    "lib/lib-dynamodb/src/index.ts",
  ],
  overrides: [
    {
      files: [
        "lib/*/src/**/*.ts",
        "clients/*/src/**/*.ts",
        "packages/*/src/**/*.ts",
        "packages-internal/*/src/**/*.ts",
        "private/*/src/**/*.ts",
      ],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              {
                group: ["*src*", "*dist-*", "!*csrc*", "!@aws-sdk/aws-util-test/src*"],
                message:
                  "Imports must not contain the src folder in their path. Either import from the official package name, or you are already in the src folder and the relative path will not contain src.",
              },
              {
                group: ["@aws-sdk/core", "!@aws-sdk/core/"],
                message: "Import from a specific submodule like @aws-sdk/core/submodule instead.",
              },
              {
                group: ["@aws-sdk/checksums", "!@aws-sdk/checksums/"],
                message:
                  "Import from a specific submodule like @aws-sdk/checksums/crc, @aws-sdk/checksums/sha, or @aws-sdk/checksums/flexible-checksums instead.",
              },
              {
                group: ["@aws-sdk/middleware-sdk-s3", "!@aws-sdk/middleware-sdk-s3/"],
                message:
                  "Import from a specific submodule like @aws-sdk/middleware-sdk-s3/s3 or @aws-sdk/middleware-sdk-s3/s3-control instead.",
              },
              {
                group: [
                  "@smithy/util-hex-encoding",
                  "@smithy/util-base64",
                  "@smithy/util-body-length-browser",
                  "@smithy/util-body-length-node",
                  "@smithy/util-utf8",
                  "@smithy/util-buffer-from",
                  "@smithy/is-array-buffer",
                  "@smithy/middleware-serde",
                  "@smithy/hash-node",
                  "@smithy/hash-blob-browser",
                  "@smithy/hash-stream-node",
                  "@smithy/md5-js",
                  "@smithy/chunked-blob-reader",
                  "@smithy/chunked-blob-reader-native",
                  "@smithy/util-stream",
                  "@smithy/uuid",
                ],
                message: "This package has been consolidated into @smithy/core/serde.",
              },
              {
                group: [
                  "@smithy/smithy-client",
                  "@smithy/middleware-stack",
                  "@smithy/util-middleware",
                  "@smithy/invalid-dependency",
                  "@smithy/util-waiter",
                ],
                message: "This package has been consolidated into @smithy/core/client.",
              },
              {
                group: [
                  "@smithy/config-resolver",
                  "@smithy/util-config-provider",
                  "@smithy/node-config-provider",
                  "@smithy/shared-ini-file-loader",
                  "@smithy/property-provider",
                  "@smithy/util-defaults-mode-browser",
                  "@smithy/util-defaults-mode-node",
                ],
                message: "This package has been consolidated into @smithy/core/config.",
              },
              {
                group: [
                  "@smithy/protocol-http",
                  "@smithy/middleware-content-length",
                  "@smithy/util-uri-escape",
                  "@smithy/querystring-builder",
                  "@smithy/querystring-parser",
                  "@smithy/url-parser",
                ],
                message: "This package has been consolidated into @smithy/core/protocols.",
              },
              {
                group: ["@smithy/util-retry", "@smithy/middleware-retry", "@smithy/service-error-classification"],
                message: "This package has been consolidated into @smithy/core/retry.",
              },
              {
                group: ["@smithy/util-endpoints", "@smithy/middleware-endpoint"],
                message: "This package has been consolidated into @smithy/core/endpoints.",
              },
              {
                group: [
                  "@smithy/eventstream-codec",
                  "@smithy/eventstream-serde-universal",
                  "@smithy/eventstream-serde-browser",
                  "@smithy/eventstream-serde-node",
                  "@smithy/eventstream-serde-config-resolver",
                ],
                message: "This package has been consolidated into @smithy/core/event-streams.",
              },
              {
                group: [
                  "@aws-sdk/middleware-host-header",
                  "@aws-sdk/middleware-logger",
                  "@aws-sdk/middleware-recursion-detection",
                  "@aws-sdk/middleware-user-agent",
                  "@aws-sdk/util-user-agent-node",
                  "@aws-sdk/util-user-agent-browser",
                  "@aws-sdk/util-endpoints",
                  "@aws-sdk/region-config-resolver",
                ],
                message: "This package has been consolidated into @aws-sdk/core/client.",
              },
              {
                group: ["@aws-sdk/util-arn-parser", "@aws-sdk/util-format-url"],
                message: "This package has been consolidated into @aws-sdk/core/util.",
              },
              {
                group: [
                  "@aws-sdk/middleware-bucket-endpoint",
                  "@aws-sdk/middleware-expect-continue",
                  "@aws-sdk/middleware-location-constraint",
                  "@aws-sdk/middleware-ssec",
                ],
                message: "This package has been consolidated into @aws-sdk/middleware-sdk-s3/s3.",
              },
              {
                group: ["@aws-sdk/middleware-sdk-s3-control"],
                message: "This package has been consolidated into @aws-sdk/middleware-sdk-s3/s3-control.",
              },
              {
                group: ["@aws-sdk/crc64-nvme", "@aws-sdk/middleware-flexible-checksums"],
                message: "This package has been consolidated into @aws-sdk/checksums.",
              },
            ],
          },
        ],
      },
    },
    {
      files: ["**/*.js"],
      rules: {
        "tsdoc/syntax": "off",
        "n/prefer-node-protocol": "error",
      },
    },
  ],
};
