// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import type { BatchDisassociateProjectAssetsRequest, BatchDisassociateProjectAssetsResponse } from "../models/models_0";
import { BatchDisassociateProjectAssets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDisassociateProjectAssetsCommand}.
 */
export interface BatchDisassociateProjectAssetsCommandInput extends BatchDisassociateProjectAssetsRequest {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateProjectAssetsCommand}.
 */
export interface BatchDisassociateProjectAssetsCommandOutput
  extends BatchDisassociateProjectAssetsResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, BatchDisassociateProjectAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, BatchDisassociateProjectAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // BatchDisassociateProjectAssetsRequest
 *   projectId: "STRING_VALUE", // required
 *   assetIds: [ // IDs // required
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new BatchDisassociateProjectAssetsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisassociateProjectAssetsResponse
 * //   errors: [ // BatchDisassociateProjectAssetsErrors
 * //     { // AssetErrorDetails
 * //       assetId: "STRING_VALUE", // required
 * //       code: "INTERNAL_FAILURE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDisassociateProjectAssetsCommandInput - {@link BatchDisassociateProjectAssetsCommandInput}
 * @returns {@link BatchDisassociateProjectAssetsCommandOutput}
 * @see {@link BatchDisassociateProjectAssetsCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateProjectAssetsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
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
export class BatchDisassociateProjectAssetsCommand extends $Command
  .classBuilder<
    BatchDisassociateProjectAssetsCommandInput,
    BatchDisassociateProjectAssetsCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "BatchDisassociateProjectAssets", {})
  .n("IoTSiteWiseClient", "BatchDisassociateProjectAssetsCommand")
  .sc(BatchDisassociateProjectAssets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDisassociateProjectAssetsRequest;
      output: BatchDisassociateProjectAssetsResponse;
    };
    sdk: {
      input: BatchDisassociateProjectAssetsCommandInput;
      output: BatchDisassociateProjectAssetsCommandOutput;
    };
  };
}
