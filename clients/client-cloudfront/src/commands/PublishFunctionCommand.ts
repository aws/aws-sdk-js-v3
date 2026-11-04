// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PublishFunctionRequest, PublishFunctionResult } from "../models/models_1";
import { PublishFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PublishFunctionCommand}.
 */
export interface PublishFunctionCommandInput extends PublishFunctionRequest {}
/**
 * @public
 *
 * The output of {@link PublishFunctionCommand}.
 */
export interface PublishFunctionCommandOutput extends PublishFunctionResult, __MetadataBearer {}

/**
 * Publishes a CloudFront function by copying the function code from the `DEVELOPMENT` stage to `LIVE`. This automatically updates all cache behaviors that are using this function to use the newly published copy in the `LIVE` stage.
 *
 * When a function is published to the `LIVE` stage, you can attach the function to a distribution's cache behavior, using the function's Amazon Resource Name (ARN).
 *
 * To publish a function, you must provide the function's name and version (`ETag` value). To get these values, you can use `ListFunctions` and `DescribeFunction`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, PublishFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, PublishFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // PublishFunctionRequest
 *   Name: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new PublishFunctionCommand(input);
 * const response = await client.send(command);
 * // { // PublishFunctionResult
 * //   FunctionSummary: { // FunctionSummary
 * //     Name: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE",
 * //     FunctionConfig: { // FunctionConfig
 * //       Comment: "STRING_VALUE", // required
 * //       Runtime: "cloudfront-js-1.0" || "cloudfront-js-2.0", // required
 * //       KeyValueStoreAssociations: { // KeyValueStoreAssociations
 * //         Quantity: Number("int"), // required
 * //         Items: [ // KeyValueStoreAssociationList
 * //           { // KeyValueStoreAssociation
 * //             KeyValueStoreARN: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     FunctionMetadata: { // FunctionMetadata
 * //       FunctionARN: "STRING_VALUE", // required
 * //       Stage: "DEVELOPMENT" || "LIVE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PublishFunctionCommandInput - {@link PublishFunctionCommandInput}
 * @returns {@link PublishFunctionCommandOutput}
 * @see {@link PublishFunctionCommandInput} for command's `input` shape.
 * @see {@link PublishFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link NoSuchFunctionExists} (client fault)
 *
 * The function does not exist.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *
 * This operation is not supported in this Amazon Web Services Region.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class PublishFunctionCommand extends command<PublishFunctionCommandInput, PublishFunctionCommandOutput>(
  _ep0,
  _mw0,
  "PublishFunction",
  PublishFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PublishFunctionRequest;
      output: PublishFunctionResult;
    };
    sdk: {
      input: PublishFunctionCommandInput;
      output: PublishFunctionCommandOutput;
    };
  };
}
