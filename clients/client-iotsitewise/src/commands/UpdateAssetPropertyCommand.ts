// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { UpdateAssetPropertyRequest } from "../models/models_1";
import { de_UpdateAssetPropertyCommand, se_UpdateAssetPropertyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAssetPropertyCommand}.
 */
export interface UpdateAssetPropertyCommandInput extends UpdateAssetPropertyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAssetPropertyCommand}.
 */
export interface UpdateAssetPropertyCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates an asset property's alias and notification state.</p>
 *          <important>
 *             <p>This operation overwrites the property's existing alias and notification state. To keep
 *         your existing property's alias or notification state, you must include the existing values
 *         in the UpdateAssetProperty request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html">DescribeAssetProperty</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdateAssetPropertyCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateAssetPropertyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // UpdateAssetPropertyRequest
 *   assetId: "STRING_VALUE", // required
 *   propertyId: "STRING_VALUE", // required
 *   propertyAlias: "STRING_VALUE",
 *   propertyNotificationState: "ENABLED" || "DISABLED",
 *   clientToken: "STRING_VALUE",
 *   propertyUnit: "STRING_VALUE",
 * };
 * const command = new UpdateAssetPropertyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAssetPropertyCommandInput - {@link UpdateAssetPropertyCommandInput}
 * @returns {@link UpdateAssetPropertyCommandOutput}
 * @see {@link UpdateAssetPropertyCommandInput} for command's `input` shape.
 * @see {@link UpdateAssetPropertyCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class UpdateAssetPropertyCommand extends $Command
  .classBuilder<
    UpdateAssetPropertyCommandInput,
    UpdateAssetPropertyCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTSiteWise", "UpdateAssetProperty", {})
  .n("IoTSiteWiseClient", "UpdateAssetPropertyCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAssetPropertyCommand)
  .de(de_UpdateAssetPropertyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAssetPropertyRequest;
      output: {};
    };
    sdk: {
      input: UpdateAssetPropertyCommandInput;
      output: UpdateAssetPropertyCommandOutput;
    };
  };
}
