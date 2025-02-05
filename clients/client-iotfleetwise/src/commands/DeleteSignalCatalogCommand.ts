// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { DeleteSignalCatalogRequest, DeleteSignalCatalogResponse } from "../models/models_0";
import { de_DeleteSignalCatalogCommand, se_DeleteSignalCatalogCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSignalCatalogCommand}.
 */
export interface DeleteSignalCatalogCommandInput extends DeleteSignalCatalogRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSignalCatalogCommand}.
 */
export interface DeleteSignalCatalogCommandOutput extends DeleteSignalCatalogResponse, __MetadataBearer {}

/**
 * <p> Deletes a signal catalog. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, DeleteSignalCatalogCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, DeleteSignalCatalogCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTFleetWiseClient(config);
 * const input = { // DeleteSignalCatalogRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteSignalCatalogCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSignalCatalogResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteSignalCatalogCommandInput - {@link DeleteSignalCatalogCommandInput}
 * @returns {@link DeleteSignalCatalogCommandOutput}
 * @see {@link DeleteSignalCatalogCommandInput} for command's `input` shape.
 * @see {@link DeleteSignalCatalogCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 * @public
 */
export class DeleteSignalCatalogCommand extends $Command
  .classBuilder<
    DeleteSignalCatalogCommandInput,
    DeleteSignalCatalogCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTAutobahnControlPlane", "DeleteSignalCatalog", {})
  .n("IoTFleetWiseClient", "DeleteSignalCatalogCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSignalCatalogCommand)
  .de(de_DeleteSignalCatalogCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSignalCatalogRequest;
      output: DeleteSignalCatalogResponse;
    };
    sdk: {
      input: DeleteSignalCatalogCommandInput;
      output: DeleteSignalCatalogCommandOutput;
    };
  };
}
