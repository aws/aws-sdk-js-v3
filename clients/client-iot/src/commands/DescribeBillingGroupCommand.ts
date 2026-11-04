// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeBillingGroupRequest, DescribeBillingGroupResponse } from "../models/models_1";
import { DescribeBillingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeBillingGroupCommand}.
 */
export interface DescribeBillingGroupCommandInput extends DescribeBillingGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBillingGroupCommand}.
 */
export interface DescribeBillingGroupCommandOutput extends DescribeBillingGroupResponse, __MetadataBearer {}

/**
 * Returns information about a billing group.
 *
 * Requires permission to access the [DescribeBillingGroup](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeBillingGroupRequest
 *   billingGroupName: "STRING_VALUE", // required
 * };
 * const command = new DescribeBillingGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBillingGroupResponse
 * //   billingGroupName: "STRING_VALUE",
 * //   billingGroupId: "STRING_VALUE",
 * //   billingGroupArn: "STRING_VALUE",
 * //   version: Number("long"),
 * //   billingGroupProperties: { // BillingGroupProperties
 * //     billingGroupDescription: "STRING_VALUE",
 * //   },
 * //   billingGroupMetadata: { // BillingGroupMetadata
 * //     creationDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBillingGroupCommandInput - {@link DescribeBillingGroupCommandInput}
 * @returns {@link DescribeBillingGroupCommandOutput}
 * @see {@link DescribeBillingGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class DescribeBillingGroupCommand extends command<DescribeBillingGroupCommandInput, DescribeBillingGroupCommandOutput>(
  _ep0,
  _mw0,
  "DescribeBillingGroup",
  DescribeBillingGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBillingGroupRequest;
      output: DescribeBillingGroupResponse;
    };
    sdk: {
      input: DescribeBillingGroupCommandInput;
      output: DescribeBillingGroupCommandOutput;
    };
  };
}
