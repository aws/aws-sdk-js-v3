// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteConfigurationSetTrackingOptionsRequest,
  DeleteConfigurationSetTrackingOptionsResponse,
} from "../models/models_0";
import {
  de_DeleteConfigurationSetTrackingOptionsCommand,
  se_DeleteConfigurationSetTrackingOptionsCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfigurationSetTrackingOptionsCommand}.
 */
export interface DeleteConfigurationSetTrackingOptionsCommandInput
  extends DeleteConfigurationSetTrackingOptionsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfigurationSetTrackingOptionsCommand}.
 */
export interface DeleteConfigurationSetTrackingOptionsCommandOutput
  extends DeleteConfigurationSetTrackingOptionsResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an association between a configuration set and a custom domain for open and
 *             click event tracking.</p>
 *          <p>By default, images and links used for tracking open and click events are hosted on
 *             domains operated by Amazon SES. You can configure a subdomain of your own to handle these
 *             events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>
 *          <note>
 *             <p>Deleting this kind of association results in emails sent using the specified
 *                 configuration set to capture open and click events using the standard,
 *                 Amazon SES-operated domains.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DeleteConfigurationSetTrackingOptionsCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DeleteConfigurationSetTrackingOptionsCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // DeleteConfigurationSetTrackingOptionsRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfigurationSetTrackingOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfigurationSetTrackingOptionsCommandInput - {@link DeleteConfigurationSetTrackingOptionsCommandInput}
 * @returns {@link DeleteConfigurationSetTrackingOptionsCommandOutput}
 * @see {@link DeleteConfigurationSetTrackingOptionsCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationSetTrackingOptionsCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link ConfigurationSetDoesNotExistException} (client fault)
 *  <p>Indicates that the configuration set does not exist.</p>
 *
 * @throws {@link TrackingOptionsDoesNotExistException} (client fault)
 *  <p>Indicates that the TrackingOptions object you specified does not exist.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 */
export class DeleteConfigurationSetTrackingOptionsCommand extends $Command
  .classBuilder<
    DeleteConfigurationSetTrackingOptionsCommandInput,
    DeleteConfigurationSetTrackingOptionsCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "DeleteConfigurationSetTrackingOptions", {})
  .n("SESClient", "DeleteConfigurationSetTrackingOptionsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConfigurationSetTrackingOptionsCommand)
  .de(de_DeleteConfigurationSetTrackingOptionsCommand)
  .build() {}
