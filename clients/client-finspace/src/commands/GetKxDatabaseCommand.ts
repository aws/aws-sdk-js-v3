// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import type { GetKxDatabaseRequest, GetKxDatabaseResponse } from "../models/models_0";
import { GetKxDatabase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetKxDatabaseCommand}.
 */
export interface GetKxDatabaseCommandInput extends GetKxDatabaseRequest {}
/**
 * @public
 *
 * The output of {@link GetKxDatabaseCommand}.
 */
export interface GetKxDatabaseCommandOutput extends GetKxDatabaseResponse, __MetadataBearer {}

/**
 * <p>Returns database information for the specified environment ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, GetKxDatabaseCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, GetKxDatabaseCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // GetKxDatabaseRequest
 *   environmentId: "STRING_VALUE", // required
 *   databaseName: "STRING_VALUE", // required
 * };
 * const command = new GetKxDatabaseCommand(input);
 * const response = await client.send(command);
 * // { // GetKxDatabaseResponse
 * //   databaseName: "STRING_VALUE",
 * //   databaseArn: "STRING_VALUE",
 * //   environmentId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //   lastCompletedChangesetId: "STRING_VALUE",
 * //   numBytes: Number("long"),
 * //   numChangesets: Number("int"),
 * //   numFiles: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetKxDatabaseCommandInput - {@link GetKxDatabaseCommandInput}
 * @returns {@link GetKxDatabaseCommandOutput}
 * @see {@link GetKxDatabaseCommandInput} for command's `input` shape.
 * @see {@link GetKxDatabaseCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetKxDatabaseCommand extends $Command
  .classBuilder<
    GetKxDatabaseCommandInput,
    GetKxDatabaseCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroManagementService", "GetKxDatabase", {})
  .n("FinspaceClient", "GetKxDatabaseCommand")
  .sc(GetKxDatabase$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetKxDatabaseRequest;
      output: GetKxDatabaseResponse;
    };
    sdk: {
      input: GetKxDatabaseCommandInput;
      output: GetKxDatabaseCommandOutput;
    };
  };
}
