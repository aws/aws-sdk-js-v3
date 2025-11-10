// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDataSourceRequest, DeleteDataSourceResponse } from "../models/models_4";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteDataSource } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataSourceCommand}.
 */
export interface DeleteDataSourceCommandInput extends DeleteDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataSourceCommand}.
 */
export interface DeleteDataSourceCommandOutput extends DeleteDataSourceResponse, __MetadataBearer {}

/**
 * <p>Deletes the data source permanently. This operation breaks all the datasets that
 * 			reference the deleted data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteDataSourceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteDataSourceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteDataSourceRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSourceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDataSourceResponse
 * //   Arn: "STRING_VALUE",
 * //   DataSourceId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteDataSourceCommandInput - {@link DeleteDataSourceCommandInput}
 * @returns {@link DeleteDataSourceCommandOutput}
 * @see {@link DeleteDataSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteDataSourceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
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
export class DeleteDataSourceCommand extends $Command
  .classBuilder<
    DeleteDataSourceCommandInput,
    DeleteDataSourceCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DeleteDataSource", {})
  .n("QuickSightClient", "DeleteDataSourceCommand")
  .sc(DeleteDataSource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataSourceRequest;
      output: DeleteDataSourceResponse;
    };
    sdk: {
      input: DeleteDataSourceCommandInput;
      output: DeleteDataSourceCommandOutput;
    };
  };
}
