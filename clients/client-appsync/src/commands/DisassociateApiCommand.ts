// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateApiRequest, DisassociateApiResponse } from "../models/models_0";
import { de_DisassociateApiCommand, se_DisassociateApiCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateApiCommand}.
 */
export interface DisassociateApiCommandInput extends DisassociateApiRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateApiCommand}.
 */
export interface DisassociateApiCommandOutput extends DisassociateApiResponse, __MetadataBearer {}

/**
 * <p>Removes an <code>ApiAssociation</code> object from a custom domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, DisassociateApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, DisassociateApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // DisassociateApiRequest
 *   domainName: "STRING_VALUE", // required
 * };
 * const command = new DisassociateApiCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateApiCommandInput - {@link DisassociateApiCommandInput}
 * @returns {@link DisassociateApiCommandOutput}
 * @see {@link DisassociateApiCommandInput} for command's `input` shape.
 * @see {@link DisassociateApiCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to perform this operation on this resource.</p>
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
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 *
 * @public
 */
export class DisassociateApiCommand extends $Command
  .classBuilder<
    DisassociateApiCommandInput,
    DisassociateApiCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepdishControlPlaneService", "DisassociateApi", {})
  .n("AppSyncClient", "DisassociateApiCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateApiCommand)
  .de(de_DisassociateApiCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateApiRequest;
      output: {};
    };
    sdk: {
      input: DisassociateApiCommandInput;
      output: DisassociateApiCommandOutput;
    };
  };
}
