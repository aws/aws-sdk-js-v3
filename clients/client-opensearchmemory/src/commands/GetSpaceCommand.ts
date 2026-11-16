// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { GetSpaceRequest, GetSpaceResponse } from "../models/models_0";
import { GetSpace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSpaceCommand}.
 */
export interface GetSpaceCommandInput extends GetSpaceRequest {}
/**
 * @public
 *
 * The output of {@link GetSpaceCommand}.
 */
export interface GetSpaceCommandOutput extends GetSpaceResponse, __MetadataBearer {}

/**
 * <p>Returns a space's configuration and status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchMemoryClient, GetSpaceCommand } from "@aws-sdk/client-opensearchmemory"; // ES Modules import
 * // const { OpenSearchMemoryClient, GetSpaceCommand } = require("@aws-sdk/client-opensearchmemory"); // CommonJS import
 * // import type { OpenSearchMemoryClientConfig } from "@aws-sdk/client-opensearchmemory";
 * const config = {}; // type is OpenSearchMemoryClientConfig
 * const client = new OpenSearchMemoryClient(config);
 * const input = { // GetSpaceRequest
 *   spaceId: "STRING_VALUE", // required
 * };
 * const command = new GetSpaceCommand(input);
 * const response = await client.send(command);
 * // { // GetSpaceResponse
 * //   spaceId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "DELETED" || "FAILED", // required
 * //   statusReason: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   memoryStrategies: [ // MemoryStrategyList
 * //     { // MemoryStrategy
 * //       type: "SEMANTIC" || "SUMMARY" || "CUSTOM", // required
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       configuration: { // MemoryStrategyConfiguration
 * //         extractionPrompt: "STRING_VALUE",
 * //         extractEveryNMessages: Number("int"),
 * //         extractEveryNTokens: Number("int"),
 * //         idleTimeoutSeconds: Number("int"),
 * //         extractionSeedTopK: Number("int"),
 * //         extractionSeedRecentN: Number("int"),
 * //         consolidationEnabled: true || false,
 * //       },
 * //     },
 * //   ],
 * //   eventExpiryDays: Number("int"),
 * //   memoryExpiryDays: Number("int"),
 * //   extractionModelId: "STRING_VALUE",
 * //   encryptionConfiguration: { // EncryptionConfiguration
 * //     kmsKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSpaceCommandInput - {@link GetSpaceCommandInput}
 * @returns {@link GetSpaceCommandOutput}
 * @see {@link GetSpaceCommandInput} for command's `input` shape.
 * @see {@link GetSpaceCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchMemoryClientResolvedConfig | config} for OpenSearchMemoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation. To use this operation, you must have AWS Identity and Access Management (IAM) permissions for the operation, and on the resource it acts on. If the space uses a customer managed AWS Key Management Service (AWS KMS) key, you must also have permission to use the key.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service couldn't process the request because of an internal error. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Check the IDs in the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The service throttled the request. Retry the request with exponential backoff.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. The <code>reason</code>, <code>message</code>, and <code>fieldList</code> members describe the problem. Fix the request, and then try again.</p>
 *
 * @throws {@link OpenSearchMemoryServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchMemory service.</p>
 *
 *
 * @public
 */
export class GetSpaceCommand extends command<GetSpaceCommandInput, GetSpaceCommandOutput>(
  _ep1,
  _mw0,
  "GetSpace",
  GetSpace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSpaceRequest;
      output: GetSpaceResponse;
    };
    sdk: {
      input: GetSpaceCommandInput;
      output: GetSpaceCommandOutput;
    };
  };
}
