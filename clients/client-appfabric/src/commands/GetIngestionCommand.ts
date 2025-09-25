// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIngestionRequest, GetIngestionResponse } from "../models/models_0";
import { GetIngestion } from "../schemas/schemas_1_App";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIngestionCommand}.
 */
export interface GetIngestionCommandInput extends GetIngestionRequest {}
/**
 * @public
 *
 * The output of {@link GetIngestionCommand}.
 */
export interface GetIngestionCommandOutput extends GetIngestionResponse, __MetadataBearer {}

/**
 * <p>Returns information about an ingestion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, GetIngestionCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, GetIngestionCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // GetIngestionRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   ingestionIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetIngestionCommand(input);
 * const response = await client.send(command);
 * // { // GetIngestionResponse
 * //   ingestion: { // Ingestion
 * //     arn: "STRING_VALUE", // required
 * //     appBundleArn: "STRING_VALUE", // required
 * //     app: "STRING_VALUE", // required
 * //     tenantId: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     state: "enabled" || "disabled", // required
 * //     ingestionType: "auditLog", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIngestionCommandInput - {@link GetIngestionCommandInput}
 * @returns {@link GetIngestionCommandOutput}
 * @see {@link GetIngestionCommandInput} for command's `input` shape.
 * @see {@link GetIngestionCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
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
 *
 * @public
 */
export class GetIngestionCommand extends $Command
  .classBuilder<
    GetIngestionCommandInput,
    GetIngestionCommandOutput,
    AppFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FabricFrontEndService", "GetIngestion", {})
  .n("AppFabricClient", "GetIngestionCommand")
  .sc(GetIngestion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIngestionRequest;
      output: GetIngestionResponse;
    };
    sdk: {
      input: GetIngestionCommandInput;
      output: GetIngestionCommandOutput;
    };
  };
}
