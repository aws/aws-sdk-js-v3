// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartIngestionRequest, StartIngestionResponse } from "../models/models_0";
import { de_StartIngestionCommand, se_StartIngestionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartIngestionCommand}.
 */
export interface StartIngestionCommandInput extends StartIngestionRequest {}
/**
 * @public
 *
 * The output of {@link StartIngestionCommand}.
 */
export interface StartIngestionCommandOutput extends StartIngestionResponse, __MetadataBearer {}

/**
 * <p>Starts (enables) an ingestion, which collects data from an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, StartIngestionCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, StartIngestionCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * const client = new AppFabricClient(config);
 * const input = { // StartIngestionRequest
 *   ingestionIdentifier: "STRING_VALUE", // required
 *   appBundleIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StartIngestionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartIngestionCommandInput - {@link StartIngestionCommandInput}
 * @returns {@link StartIngestionCommandOutput}
 * @see {@link StartIngestionCommandInput} for command's `input` shape.
 * @see {@link StartIngestionCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has created a conflict. Check the request parameters and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *          with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link AppFabricServiceException}
 * <p>Base exception class for all service exceptions from AppFabric service.</p>
 *
 * @public
 */
export class StartIngestionCommand extends $Command
  .classBuilder<
    StartIngestionCommandInput,
    StartIngestionCommandOutput,
    AppFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppFabricClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FabricFrontEndService", "StartIngestion", {})
  .n("AppFabricClient", "StartIngestionCommand")
  .f(void 0, void 0)
  .ser(se_StartIngestionCommand)
  .de(de_StartIngestionCommand)
  .build() {}
