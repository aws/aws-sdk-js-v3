// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateAnalyticsDataSetRequest, AssociateAnalyticsDataSetResponse } from "../models/models_0";
import { AssociateAnalyticsDataSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateAnalyticsDataSetCommand}.
 */
export interface AssociateAnalyticsDataSetCommandInput extends AssociateAnalyticsDataSetRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAnalyticsDataSetCommand}.
 */
export interface AssociateAnalyticsDataSetCommandOutput extends AssociateAnalyticsDataSetResponse, __MetadataBearer {}

/**
 * Associates the specified dataset for a Connect Customer instance with the target account. You can associate only one dataset in a single call.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateAnalyticsDataSetCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateAnalyticsDataSetCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // AssociateAnalyticsDataSetRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 *   TargetAccountId: "STRING_VALUE",
 * };
 * const command = new AssociateAnalyticsDataSetCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAnalyticsDataSetResponse
 * //   DataSetId: "STRING_VALUE",
 * //   TargetAccountId: "STRING_VALUE",
 * //   ResourceShareId: "STRING_VALUE",
 * //   ResourceShareArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateAnalyticsDataSetCommandInput - {@link AssociateAnalyticsDataSetCommandInput}
 * @returns {@link AssociateAnalyticsDataSetCommandOutput}
 * @see {@link AssociateAnalyticsDataSetCommandInput} for command's `input` shape.
 * @see {@link AssociateAnalyticsDataSetCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class AssociateAnalyticsDataSetCommand extends command<AssociateAnalyticsDataSetCommandInput, AssociateAnalyticsDataSetCommandOutput>(
  _ep0,
  _mw0,
  "AssociateAnalyticsDataSet",
  AssociateAnalyticsDataSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAnalyticsDataSetRequest;
      output: AssociateAnalyticsDataSetResponse;
    };
    sdk: {
      input: AssociateAnalyticsDataSetCommandInput;
      output: AssociateAnalyticsDataSetCommandOutput;
    };
  };
}
