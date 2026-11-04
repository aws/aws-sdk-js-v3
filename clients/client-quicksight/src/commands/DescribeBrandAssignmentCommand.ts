// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeBrandAssignmentRequest, DescribeBrandAssignmentResponse } from "../models/models_4";
import { DescribeBrandAssignment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeBrandAssignmentCommand}.
 */
export interface DescribeBrandAssignmentCommandInput extends DescribeBrandAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBrandAssignmentCommand}.
 */
export interface DescribeBrandAssignmentCommandOutput extends DescribeBrandAssignmentResponse, __MetadataBearer {}

/**
 * Describes a brand assignment.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeBrandAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeBrandAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeBrandAssignmentRequest
 *   AwsAccountId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBrandAssignmentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBrandAssignmentResponse
 * //   RequestId: "STRING_VALUE",
 * //   BrandArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBrandAssignmentCommandInput - {@link DescribeBrandAssignmentCommandInput}
 * @returns {@link DescribeBrandAssignmentCommandOutput}
 * @see {@link DescribeBrandAssignmentCommandInput} for command's `input` shape.
 * @see {@link DescribeBrandAssignmentCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service exception.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.
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
export class DescribeBrandAssignmentCommand extends command<DescribeBrandAssignmentCommandInput, DescribeBrandAssignmentCommandOutput>(
  _ep0,
  _mw0,
  "DescribeBrandAssignment",
  DescribeBrandAssignment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBrandAssignmentRequest;
      output: DescribeBrandAssignmentResponse;
    };
    sdk: {
      input: DescribeBrandAssignmentCommandInput;
      output: DescribeBrandAssignmentCommandOutput;
    };
  };
}
