// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeDefaultQBusinessApplicationRequest,
  DescribeDefaultQBusinessApplicationResponse,
} from "../models/models_4";
import { DescribeDefaultQBusinessApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeDefaultQBusinessApplicationCommandOutput extends DescribeDefaultQBusinessApplicationResponse, __MetadataBearer {}

/**
 * Describes a Amazon Q Business application that is linked to an Quick Sight account.
 *
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
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class DescribeDefaultQBusinessApplicationCommand extends command<DescribeDefaultQBusinessApplicationCommandInput, DescribeDefaultQBusinessApplicationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDefaultQBusinessApplication",
  DescribeDefaultQBusinessApplication$
) {
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
