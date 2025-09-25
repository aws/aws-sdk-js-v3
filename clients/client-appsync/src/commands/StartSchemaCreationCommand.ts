// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartSchemaCreationRequest, StartSchemaCreationResponse } from "../models/models_0";
import { StartSchemaCreation } from "../schemas/schemas_15_Schema";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartSchemaCreationCommand}.
 */
export interface StartSchemaCreationCommandInput extends StartSchemaCreationRequest {}
/**
 * @public
 *
 * The output of {@link StartSchemaCreationCommand}.
 */
export interface StartSchemaCreationCommandOutput extends StartSchemaCreationResponse, __MetadataBearer {}

/**
 * <p>Adds a new schema to your GraphQL API.</p>
 *          <p>This operation is asynchronous. Use  to
 *          determine when it has completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, StartSchemaCreationCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, StartSchemaCreationCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // StartSchemaCreationRequest
 *   apiId: "STRING_VALUE", // required
 *   definition: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new StartSchemaCreationCommand(input);
 * const response = await client.send(command);
 * // { // StartSchemaCreationResponse
 * //   status: "PROCESSING" || "ACTIVE" || "DELETING" || "FAILED" || "SUCCESS" || "NOT_APPLICABLE",
 * // };
 *
 * ```
 *
 * @param StartSchemaCreationCommandInput - {@link StartSchemaCreationCommandInput}
 * @returns {@link StartSchemaCreationCommandOutput}
 * @see {@link StartSchemaCreationCommandInput} for command's `input` shape.
 * @see {@link StartSchemaCreationCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 *
 * @public
 */
export class StartSchemaCreationCommand extends $Command
  .classBuilder<
    StartSchemaCreationCommandInput,
    StartSchemaCreationCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepdishControlPlaneService", "StartSchemaCreation", {})
  .n("AppSyncClient", "StartSchemaCreationCommand")
  .sc(StartSchemaCreation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSchemaCreationRequest;
      output: StartSchemaCreationResponse;
    };
    sdk: {
      input: StartSchemaCreationCommandInput;
      output: StartSchemaCreationCommandOutput;
    };
  };
}
