// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import {
  DeleteAssetModelInterfaceRelationshipRequest,
  DeleteAssetModelInterfaceRelationshipResponse,
} from "../models/models_0";
import {
  de_DeleteAssetModelInterfaceRelationshipCommand,
  se_DeleteAssetModelInterfaceRelationshipCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAssetModelInterfaceRelationshipCommand}.
 */
export interface DeleteAssetModelInterfaceRelationshipCommandInput
  extends DeleteAssetModelInterfaceRelationshipRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAssetModelInterfaceRelationshipCommand}.
 */
export interface DeleteAssetModelInterfaceRelationshipCommandOutput
  extends DeleteAssetModelInterfaceRelationshipResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an interface relationship between an asset model and an interface asset
 *       model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DeleteAssetModelInterfaceRelationshipCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DeleteAssetModelInterfaceRelationshipCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DeleteAssetModelInterfaceRelationshipRequest
 *   assetModelId: "STRING_VALUE", // required
 *   interfaceAssetModelId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteAssetModelInterfaceRelationshipCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAssetModelInterfaceRelationshipResponse
 * //   assetModelId: "STRING_VALUE", // required
 * //   interfaceAssetModelId: "STRING_VALUE", // required
 * //   assetModelArn: "STRING_VALUE", // required
 * //   assetModelStatus: { // AssetModelStatus
 * //     state: "CREATING" || "ACTIVE" || "UPDATING" || "PROPAGATING" || "DELETING" || "FAILED", // required
 * //     error: { // ErrorDetails
 * //       code: "VALIDATION_ERROR" || "INTERNAL_FAILURE", // required
 * //       message: "STRING_VALUE", // required
 * //       details: [ // DetailedErrors
 * //         { // DetailedError
 * //           code: "INCOMPATIBLE_COMPUTE_LOCATION" || "INCOMPATIBLE_FORWARDING_CONFIGURATION", // required
 * //           message: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteAssetModelInterfaceRelationshipCommandInput - {@link DeleteAssetModelInterfaceRelationshipCommandInput}
 * @returns {@link DeleteAssetModelInterfaceRelationshipCommandOutput}
 * @see {@link DeleteAssetModelInterfaceRelationshipCommandInput} for command's `input` shape.
 * @see {@link DeleteAssetModelInterfaceRelationshipCommandOutput} for command's `response` shape.
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
export class DeleteAssetModelInterfaceRelationshipCommand extends $Command
  .classBuilder<
    DeleteAssetModelInterfaceRelationshipCommandInput,
    DeleteAssetModelInterfaceRelationshipCommandOutput,
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
  .s("AWSIoTSiteWise", "DeleteAssetModelInterfaceRelationship", {})
  .n("IoTSiteWiseClient", "DeleteAssetModelInterfaceRelationshipCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAssetModelInterfaceRelationshipCommand)
  .de(de_DeleteAssetModelInterfaceRelationshipCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAssetModelInterfaceRelationshipRequest;
      output: DeleteAssetModelInterfaceRelationshipResponse;
    };
    sdk: {
      input: DeleteAssetModelInterfaceRelationshipCommandInput;
      output: DeleteAssetModelInterfaceRelationshipCommandOutput;
    };
  };
}
