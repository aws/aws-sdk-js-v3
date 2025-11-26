// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import type { BatchAssociateResourceRequest, BatchAssociateResourceResponse } from "../models/models_0";
import { BatchAssociateResource } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchAssociateResourceCommand}.
 */
export interface BatchAssociateResourceCommandInput extends BatchAssociateResourceRequest {}
/**
 * @public
 *
 * The output of {@link BatchAssociateResourceCommand}.
 */
export interface BatchAssociateResourceCommandOutput extends BatchAssociateResourceResponse, __MetadataBearer {}

/**
 * <p>Associate resources to a Firewall Manager resource set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, BatchAssociateResourceCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, BatchAssociateResourceCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // BatchAssociateResourceRequest
 *   ResourceSetIdentifier: "STRING_VALUE", // required
 *   Items: [ // IdentifierList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchAssociateResourceCommand(input);
 * const response = await client.send(command);
 * // { // BatchAssociateResourceResponse
 * //   ResourceSetIdentifier: "STRING_VALUE", // required
 * //   FailedItems: [ // FailedItemList // required
 * //     { // FailedItem
 * //       URI: "STRING_VALUE",
 * //       Reason: "NOT_VALID_ARN" || "NOT_VALID_PARTITION" || "NOT_VALID_REGION" || "NOT_VALID_SERVICE" || "NOT_VALID_RESOURCE_TYPE" || "NOT_VALID_ACCOUNT_ID",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchAssociateResourceCommandInput - {@link BatchAssociateResourceCommandInput}
 * @returns {@link BatchAssociateResourceCommandOutput}
 * @see {@link BatchAssociateResourceCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateResourceCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The parameters of the request were invalid.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation exceeds a resource limit, for example, the maximum number of
 *         <code>policy</code> objects that you can create for an Amazon Web Services account. For more information,
 *       see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html">Firewall
 *         Manager Limits</a> in the <i>WAF Developer Guide</i>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 *
 * @public
 */
export class BatchAssociateResourceCommand extends $Command
  .classBuilder<
    BatchAssociateResourceCommandInput,
    BatchAssociateResourceCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFMS_20180101", "BatchAssociateResource", {})
  .n("FMSClient", "BatchAssociateResourceCommand")
  .sc(BatchAssociateResource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchAssociateResourceRequest;
      output: BatchAssociateResourceResponse;
    };
    sdk: {
      input: BatchAssociateResourceCommandInput;
      output: BatchAssociateResourceCommandOutput;
    };
  };
}
