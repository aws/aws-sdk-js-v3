// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateIngestionRequest, CreateIngestionResponse } from "../models/models_0";
import { de_CreateIngestionCommand, se_CreateIngestionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIngestionCommand}.
 */
export interface CreateIngestionCommandInput extends CreateIngestionRequest {}
/**
 * @public
 *
 * The output of {@link CreateIngestionCommand}.
 */
export interface CreateIngestionCommandOutput extends CreateIngestionResponse, __MetadataBearer {}

/**
 * <p>Creates a data ingestion for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, CreateIngestionCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, CreateIngestionCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // CreateIngestionRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   app: "STRING_VALUE", // required
 *   tenantId: "STRING_VALUE", // required
 *   ingestionType: "auditLog", // required
 *   clientToken: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateIngestionCommand(input);
 * const response = await client.send(command);
 * // { // CreateIngestionResponse
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
 * @param CreateIngestionCommandInput - {@link CreateIngestionCommandInput}
 * @returns {@link CreateIngestionCommandOutput}
 * @see {@link CreateIngestionCommandInput} for command's `input` shape.
 * @see {@link CreateIngestionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
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
export class CreateIngestionCommand extends $Command
  .classBuilder<
    CreateIngestionCommandInput,
    CreateIngestionCommandOutput,
    AppFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppFabricClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FabricFrontEndService", "CreateIngestion", {})
  .n("AppFabricClient", "CreateIngestionCommand")
  .f(void 0, void 0)
  .ser(se_CreateIngestionCommand)
  .de(de_CreateIngestionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIngestionRequest;
      output: CreateIngestionResponse;
    };
    sdk: {
      input: CreateIngestionCommandInput;
      output: CreateIngestionCommandOutput;
    };
  };
}
