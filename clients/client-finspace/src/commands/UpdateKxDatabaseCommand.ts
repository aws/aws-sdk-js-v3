// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import type { UpdateKxDatabaseRequest, UpdateKxDatabaseResponse } from "../models/models_0";
import { UpdateKxDatabase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateKxDatabaseCommand}.
 */
export interface UpdateKxDatabaseCommandInput extends UpdateKxDatabaseRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKxDatabaseCommand}.
 */
export interface UpdateKxDatabaseCommandOutput extends UpdateKxDatabaseResponse, __MetadataBearer {}

/**
 * <p>Updates information for the given kdb database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, UpdateKxDatabaseCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, UpdateKxDatabaseCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // UpdateKxDatabaseRequest
 *   environmentId: "STRING_VALUE", // required
 *   databaseName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateKxDatabaseCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKxDatabaseResponse
 * //   databaseName: "STRING_VALUE",
 * //   environmentId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateKxDatabaseCommandInput - {@link UpdateKxDatabaseCommandInput}
 * @returns {@link UpdateKxDatabaseCommandOutput}
 * @see {@link UpdateKxDatabaseCommandInput} for command's `input` shape.
 * @see {@link UpdateKxDatabaseCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 *
 * @public
 */
export class UpdateKxDatabaseCommand extends $Command
  .classBuilder<
    UpdateKxDatabaseCommandInput,
    UpdateKxDatabaseCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroManagementService", "UpdateKxDatabase", {})
  .n("FinspaceClient", "UpdateKxDatabaseCommand")
  .sc(UpdateKxDatabase$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateKxDatabaseRequest;
      output: UpdateKxDatabaseResponse;
    };
    sdk: {
      input: UpdateKxDatabaseCommandInput;
      output: UpdateKxDatabaseCommandOutput;
    };
  };
}
