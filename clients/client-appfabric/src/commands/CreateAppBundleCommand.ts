// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAppBundleRequest, CreateAppBundleResponse } from "../models/models_0";
import { de_CreateAppBundleCommand, se_CreateAppBundleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAppBundleCommand}.
 */
export interface CreateAppBundleCommandInput extends CreateAppBundleRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppBundleCommand}.
 */
export interface CreateAppBundleCommandOutput extends CreateAppBundleResponse, __MetadataBearer {}

/**
 * <p>Creates an app bundle to collect data from an application using AppFabric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, CreateAppBundleCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, CreateAppBundleCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * const client = new AppFabricClient(config);
 * const input = { // CreateAppBundleRequest
 *   clientToken: "STRING_VALUE",
 *   customerManagedKeyIdentifier: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAppBundleCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppBundleResponse
 * //   appBundle: { // AppBundle
 * //     arn: "STRING_VALUE", // required
 * //     customerManagedKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAppBundleCommandInput - {@link CreateAppBundleCommandInput}
 * @returns {@link CreateAppBundleCommandOutput}
 * @see {@link CreateAppBundleCommandInput} for command's `input` shape.
 * @see {@link CreateAppBundleCommandOutput} for command's `response` shape.
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
export class CreateAppBundleCommand extends $Command
  .classBuilder<
    CreateAppBundleCommandInput,
    CreateAppBundleCommandOutput,
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
  .s("FabricFrontEndService", "CreateAppBundle", {})
  .n("AppFabricClient", "CreateAppBundleCommand")
  .f(void 0, void 0)
  .ser(se_CreateAppBundleCommand)
  .de(de_CreateAppBundleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAppBundleRequest;
      output: CreateAppBundleResponse;
    };
    sdk: {
      input: CreateAppBundleCommandInput;
      output: CreateAppBundleCommandOutput;
    };
  };
}
