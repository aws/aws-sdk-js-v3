// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeTrafficDistributionGroupRequest,
  DescribeTrafficDistributionGroupResponse,
} from "../models/models_1";
import { DescribeTrafficDistributionGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTrafficDistributionGroupCommand}.
 */
export interface DescribeTrafficDistributionGroupCommandInput extends DescribeTrafficDistributionGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrafficDistributionGroupCommand}.
 */
export interface DescribeTrafficDistributionGroupCommandOutput extends DescribeTrafficDistributionGroupResponse, __MetadataBearer {}

/**
 * Gets details and status of a traffic distribution group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeTrafficDistributionGroupCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeTrafficDistributionGroupCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeTrafficDistributionGroupRequest
 *   TrafficDistributionGroupId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTrafficDistributionGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrafficDistributionGroupResponse
 * //   TrafficDistributionGroup: { // TrafficDistributionGroup
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     InstanceArn: "STRING_VALUE",
 * //     Status: "CREATION_IN_PROGRESS" || "ACTIVE" || "CREATION_FAILED" || "PENDING_DELETION" || "DELETION_FAILED" || "UPDATE_IN_PROGRESS",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     IsDefault: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTrafficDistributionGroupCommandInput - {@link DescribeTrafficDistributionGroupCommandInput}
 * @returns {@link DescribeTrafficDistributionGroupCommandOutput}
 * @see {@link DescribeTrafficDistributionGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeTrafficDistributionGroupCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
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
export class DescribeTrafficDistributionGroupCommand extends command<DescribeTrafficDistributionGroupCommandInput, DescribeTrafficDistributionGroupCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTrafficDistributionGroup",
  DescribeTrafficDistributionGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrafficDistributionGroupRequest;
      output: DescribeTrafficDistributionGroupResponse;
    };
    sdk: {
      input: DescribeTrafficDistributionGroupCommandInput;
      output: DescribeTrafficDistributionGroupCommandOutput;
    };
  };
}
