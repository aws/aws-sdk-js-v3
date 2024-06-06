// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFleetMetadataRequest, DescribeFleetMetadataResponse } from "../models/models_0";
import { de_DescribeFleetMetadataCommand, se_DescribeFleetMetadataCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetMetadataCommand}.
 */
export interface DescribeFleetMetadataCommandInput extends DescribeFleetMetadataRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFleetMetadataCommand}.
 */
export interface DescribeFleetMetadataCommandOutput extends DescribeFleetMetadataResponse, __MetadataBearer {}

/**
 * <p>Provides basic information for the specified fleet, excluding identity provider,
 *             networking, and device configuration details.</p>
 *
 * @deprecated Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DescribeFleetMetadataCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DescribeFleetMetadataCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const input = { // DescribeFleetMetadataRequest
 *   FleetArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeFleetMetadataCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetMetadataResponse
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * //   FleetName: "STRING_VALUE",
 * //   DisplayName: "STRING_VALUE",
 * //   OptimizeForEndUserLocation: true || false,
 * //   CompanyCode: "STRING_VALUE",
 * //   FleetStatus: "CREATING" || "ACTIVE" || "DELETING" || "DELETED" || "FAILED_TO_CREATE" || "FAILED_TO_DELETE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFleetMetadataCommandInput - {@link DescribeFleetMetadataCommandInput}
 * @returns {@link DescribeFleetMetadataCommandOutput}
 * @see {@link DescribeFleetMetadataCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetMetadataCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for WorkLinkClient's `config` shape.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this action.</p>
 *
 * @throws {@link WorkLinkServiceException}
 * <p>Base exception class for all service exceptions from WorkLink service.</p>
 *
 * @public
 */
export class DescribeFleetMetadataCommand extends $Command
  .classBuilder<
    DescribeFleetMetadataCommandInput,
    DescribeFleetMetadataCommandOutput,
    WorkLinkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkLinkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkLink", "DescribeFleetMetadata", {})
  .n("WorkLinkClient", "DescribeFleetMetadataCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFleetMetadataCommand)
  .de(de_DescribeFleetMetadataCommand)
  .build() {}
