// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAppInstanceStreamingConfigurationsRequest } from "../models/models_0";
import {
  de_DeleteAppInstanceStreamingConfigurationsCommand,
  se_DeleteAppInstanceStreamingConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAppInstanceStreamingConfigurationsCommand}.
 */
export interface DeleteAppInstanceStreamingConfigurationsCommandInput
  extends DeleteAppInstanceStreamingConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppInstanceStreamingConfigurationsCommand}.
 */
export interface DeleteAppInstanceStreamingConfigurationsCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the streaming configurations of an <code>AppInstance</code>.</p>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_identity-chime_DeleteAppInstanceStreamingConfigurations.html">DeleteAppInstanceStreamingConfigurations</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *                 <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *                 <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *
 * @deprecated Replaced by DeleteAppInstanceStreamingConfigurations in the Amazon Chime SDK Messaging Namespace
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteAppInstanceStreamingConfigurationsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteAppInstanceStreamingConfigurationsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // DeleteAppInstanceStreamingConfigurationsRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppInstanceStreamingConfigurationsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppInstanceStreamingConfigurationsCommandInput - {@link DeleteAppInstanceStreamingConfigurationsCommandInput}
 * @returns {@link DeleteAppInstanceStreamingConfigurationsCommandOutput}
 * @see {@link DeleteAppInstanceStreamingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DeleteAppInstanceStreamingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 * @public
 */
export class DeleteAppInstanceStreamingConfigurationsCommand extends $Command
  .classBuilder<
    DeleteAppInstanceStreamingConfigurationsCommandInput,
    DeleteAppInstanceStreamingConfigurationsCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "DeleteAppInstanceStreamingConfigurations", {})
  .n("ChimeClient", "DeleteAppInstanceStreamingConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAppInstanceStreamingConfigurationsCommand)
  .de(de_DeleteAppInstanceStreamingConfigurationsCommand)
  .build() {}
