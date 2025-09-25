// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeDefaultQBusinessApplicationRequest,
  DescribeDefaultQBusinessApplicationResponse,
} from "../models/models_4";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeDefaultQBusinessApplication } from "../schemas/schemas_26_DescribeDefaultQBusinessApplication";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDefaultQBusinessApplicationCommand}.
 */
export interface DescribeDefaultQBusinessApplicationCommandInput extends DescribeDefaultQBusinessApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDefaultQBusinessApplicationCommand}.
 */
export interface DescribeDefaultQBusinessApplicationCommandOutput
  extends DescribeDefaultQBusinessApplicationResponse,
    __MetadataBearer {}

/**
 * <p>Describes a Amazon Q Business application that is linked to an QuickSight account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDefaultQBusinessApplicationCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDefaultQBusinessApplicationCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeDefaultQBusinessApplicationRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE",
 * };
 * const command = new DescribeDefaultQBusinessApplicationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDefaultQBusinessApplicationResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   ApplicationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDefaultQBusinessApplicationCommandInput - {@link DescribeDefaultQBusinessApplicationCommandInput}
 * @returns {@link DescribeDefaultQBusinessApplicationCommandOutput}
 * @see {@link DescribeDefaultQBusinessApplicationCommandInput} for command's `input` shape.
 * @see {@link DescribeDefaultQBusinessApplicationCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
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
export class DescribeDefaultQBusinessApplicationCommand extends $Command
  .classBuilder<
    DescribeDefaultQBusinessApplicationCommandInput,
    DescribeDefaultQBusinessApplicationCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DescribeDefaultQBusinessApplication", {})
  .n("QuickSightClient", "DescribeDefaultQBusinessApplicationCommand")
  .sc(DescribeDefaultQBusinessApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDefaultQBusinessApplicationRequest;
      output: DescribeDefaultQBusinessApplicationResponse;
    };
    sdk: {
      input: DescribeDefaultQBusinessApplicationCommandInput;
      output: DescribeDefaultQBusinessApplicationCommandOutput;
    };
  };
}
