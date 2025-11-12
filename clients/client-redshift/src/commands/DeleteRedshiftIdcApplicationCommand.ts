// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRedshiftIdcApplicationMessage } from "../models/models_0";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteRedshiftIdcApplication } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRedshiftIdcApplicationCommand}.
 */
export interface DeleteRedshiftIdcApplicationCommandInput extends DeleteRedshiftIdcApplicationMessage {}
/**
 * @public
 *
 * The output of {@link DeleteRedshiftIdcApplicationCommand}.
 */
export interface DeleteRedshiftIdcApplicationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an Amazon Redshift IAM Identity Center application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteRedshiftIdcApplicationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteRedshiftIdcApplicationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DeleteRedshiftIdcApplicationMessage
 *   RedshiftIdcApplicationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteRedshiftIdcApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRedshiftIdcApplicationCommandInput - {@link DeleteRedshiftIdcApplicationCommandInput}
 * @returns {@link DeleteRedshiftIdcApplicationCommandOutput}
 * @see {@link DeleteRedshiftIdcApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteRedshiftIdcApplicationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link DependentServiceAccessDeniedFault} (client fault)
 *  <p>A dependent service denied access for the integration.</p>
 *
 * @throws {@link DependentServiceUnavailableFault} (client fault)
 *  <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 *
 * @throws {@link RedshiftIdcApplicationNotExistsFault} (client fault)
 *  <p>The application you attempted to find doesn't exist.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DeleteRedshiftIdcApplicationCommand extends $Command
  .classBuilder<
    DeleteRedshiftIdcApplicationCommandInput,
    DeleteRedshiftIdcApplicationCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DeleteRedshiftIdcApplication", {})
  .n("RedshiftClient", "DeleteRedshiftIdcApplicationCommand")
  .sc(DeleteRedshiftIdcApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRedshiftIdcApplicationMessage;
      output: {};
    };
    sdk: {
      input: DeleteRedshiftIdcApplicationCommandInput;
      output: DeleteRedshiftIdcApplicationCommandOutput;
    };
  };
}
