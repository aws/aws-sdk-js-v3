// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDataSetRefreshPropertiesRequest, DeleteDataSetRefreshPropertiesResponse } from "../models/models_3";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteDataSetRefreshProperties } from "../schemas/schemas_11_DeleteDataSetRefreshProperties";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataSetRefreshPropertiesCommand}.
 */
export interface DeleteDataSetRefreshPropertiesCommandInput extends DeleteDataSetRefreshPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataSetRefreshPropertiesCommand}.
 */
export interface DeleteDataSetRefreshPropertiesCommandOutput
  extends DeleteDataSetRefreshPropertiesResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the dataset refresh properties of the dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteDataSetRefreshPropertiesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteDataSetRefreshPropertiesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteDataSetRefreshPropertiesRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataSetRefreshPropertiesCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDataSetRefreshPropertiesResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteDataSetRefreshPropertiesCommandInput - {@link DeleteDataSetRefreshPropertiesCommandInput}
 * @returns {@link DeleteDataSetRefreshPropertiesCommandOutput}
 * @see {@link DeleteDataSetRefreshPropertiesCommandInput} for command's `input` shape.
 * @see {@link DeleteDataSetRefreshPropertiesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DeleteDataSetRefreshPropertiesCommand extends $Command
  .classBuilder<
    DeleteDataSetRefreshPropertiesCommandInput,
    DeleteDataSetRefreshPropertiesCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DeleteDataSetRefreshProperties", {})
  .n("QuickSightClient", "DeleteDataSetRefreshPropertiesCommand")
  .sc(DeleteDataSetRefreshProperties)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataSetRefreshPropertiesRequest;
      output: DeleteDataSetRefreshPropertiesResponse;
    };
    sdk: {
      input: DeleteDataSetRefreshPropertiesCommandInput;
      output: DeleteDataSetRefreshPropertiesCommandOutput;
    };
  };
}
