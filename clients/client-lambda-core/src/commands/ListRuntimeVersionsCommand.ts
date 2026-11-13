// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRuntimeVersionsRequest, ListRuntimeVersionsResponse } from "../models/models_0";
import { ListRuntimeVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRuntimeVersionsCommand}.
 */
export interface ListRuntimeVersionsCommandInput extends ListRuntimeVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListRuntimeVersionsCommand}.
 */
export interface ListRuntimeVersionsCommandOutput extends ListRuntimeVersionsResponse, __MetadataBearer {}

/**
 * Returns a paginated list of versions for the specified runtime.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, ListRuntimeVersionsCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, ListRuntimeVersionsCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // ListRuntimeVersionsRequest
 *   RuntimeName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRuntimeVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRuntimeVersionsResponse
 * //   Items: [ // RuntimeVersionList // required
 * //     { // RuntimeVersionInfo
 * //       Name: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       ResolvedUri: "STRING_VALUE", // required
 * //       State: "CREATING" || "ACTIVE" || "FAILED" || "DELETING" || "PENDING_DELETION", // required
 * //       PendingDeletionAt: "STRING_VALUE",
 * //       ReleaseNotes: "STRING_VALUE",
 * //       Compatibility: { // Compatibility
 * //         IntegrationModels: [ // IntegrationModelList
 * //           "RuntimeAPI",
 * //         ],
 * //         Architectures: [ // RuntimeArchitectureList
 * //           "x86_64" || "arm64",
 * //         ],
 * //         ManagedInstances: "Supported" || "NotSupported",
 * //       },
 * //       Created: "STRING_VALUE", // required
 * //       LastModified: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRuntimeVersionsCommandInput - {@link ListRuntimeVersionsCommandInput}
 * @returns {@link ListRuntimeVersionsCommandOutput}
 * @see {@link ListRuntimeVersionsCommandInput} for command's `input` shape.
 * @see {@link ListRuntimeVersionsCommandOutput} for command's `response` shape.
 * @see {@link LambdaCoreClientResolvedConfig | config} for LambdaCoreClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid. Check the error message for details about which parameter failed validation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist. Verify the identifier and Region.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal service error occurred. Retry the request with exponential backoff.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was throttled due to exceeding the allowed request rate. Retry the request after a brief wait using exponential backoff.</p>
 *
 * @throws {@link LambdaCoreServiceException}
 * <p>Base exception class for all service exceptions from LambdaCore service.</p>
 *
 *
 * @example List runtime versions
 * ```javascript
 * // Lists the versions published for a runtime.
 * const input = {
 *   MaxResults: 10,
 *   RuntimeName: "php8"
 * };
 * const command = new ListRuntimeVersionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       Arn: "arn:aws:lambda:us-west-2:123456789012:runtime/php8/version/v1",
 *       Created: "2026-10-01T12:00:00.000Z",
 *       LastModified: "2026-10-01T12:00:00.000Z",
 *       Name: "v1",
 *       ReleaseNotes: "Initial release",
 *       ResolvedUri: "123456789012.dkr.ecr.us-west-2.amazonaws.com/php8@sha256:1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
 *       State: "ACTIVE"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListRuntimeVersionsCommand extends command<ListRuntimeVersionsCommandInput, ListRuntimeVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListRuntimeVersions",
  ListRuntimeVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRuntimeVersionsRequest;
      output: ListRuntimeVersionsResponse;
    };
    sdk: {
      input: ListRuntimeVersionsCommandInput;
      output: ListRuntimeVersionsCommandOutput;
    };
  };
}
