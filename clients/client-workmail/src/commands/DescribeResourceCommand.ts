// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeResourceRequest, DescribeResourceResponse } from "../models/models_0";
import { DescribeResource } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeResourceCommand}.
 */
export interface DescribeResourceCommandInput extends DescribeResourceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeResourceCommand}.
 */
export interface DescribeResourceCommandOutput extends DescribeResourceResponse, __MetadataBearer {}

/**
 * <p>Returns the data available for the resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DescribeResourceCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DescribeResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DescribeResourceRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeResourceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeResourceResponse
 * //   ResourceId: "STRING_VALUE",
 * //   Email: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Type: "ROOM" || "EQUIPMENT",
 * //   BookingOptions: { // BookingOptions
 * //     AutoAcceptRequests: true || false,
 * //     AutoDeclineRecurringRequests: true || false,
 * //     AutoDeclineConflictingRequests: true || false,
 * //   },
 * //   State: "ENABLED" || "DISABLED" || "DELETED",
 * //   EnabledDate: new Date("TIMESTAMP"),
 * //   DisabledDate: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   HiddenFromGlobalAddressList: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeResourceCommandInput - {@link DescribeResourceCommandInput}
 * @returns {@link DescribeResourceCommandOutput}
 * @see {@link DescribeResourceCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>You can't perform a write operation against a read-only directory.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class DescribeResourceCommand extends $Command
  .classBuilder<
    DescribeResourceCommandInput,
    DescribeResourceCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "DescribeResource", {})
  .n("WorkMailClient", "DescribeResourceCommand")
  .sc(DescribeResource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeResourceRequest;
      output: DescribeResourceResponse;
    };
    sdk: {
      input: DescribeResourceCommandInput;
      output: DescribeResourceCommandOutput;
    };
  };
}
