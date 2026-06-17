// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeSharedResourcesRequest, DescribeSharedResourcesResponse } from "../models/models_0";
import type { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { DescribeSharedResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSharedResourcesCommand}.
 */
export interface DescribeSharedResourcesCommandInput extends DescribeSharedResourcesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSharedResourcesCommand}.
 */
export interface DescribeSharedResourcesCommandOutput extends DescribeSharedResourcesResponse, __MetadataBearer {}

/**
 * <p>Returns the resources shared to a broker.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeSharedResourcesCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeSharedResourcesCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * // import type { MqClientConfig } from "@aws-sdk/client-mq";
 * const config = {}; // type is MqClientConfig
 * const client = new MqClient(config);
 * const input = { // DescribeSharedResourcesRequest
 *   BrokerId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeSharedResourcesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSharedResourcesResponse
 * //   NextToken: "STRING_VALUE",
 * //   SharedResources: [ // __listOfSharedResource
 * //     { // SharedResource
 * //       DnsNames: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //       Error: { // SharedResourceError
 * //         Code: "QUOTA_EXCEEDED" || "SHARE_NOT_FOUND" || "INVITE_FAILED" || "SETUP_INCOMPLETE" || "INTERNAL_ERROR" || "AZ_MISMATCH" || "RESOURCE_CONFIGURATION_NOT_FOUND", // required
 * //         Message: "STRING_VALUE", // required
 * //       },
 * //       ResourceArn: "STRING_VALUE", // required
 * //       ResourceShareArns: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Status: "AVAILABLE" || "SETUP_IN_PROGRESS" || "DELETION_IN_PROGRESS" || "PENDING_CREATE" || "PENDING_DELETE" || "ERROR", // required
 * //       Type: "RESOURCE_SHARE" || "RESOURCE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSharedResourcesCommandInput - {@link DescribeSharedResourcesCommandInput}
 * @returns {@link DescribeSharedResourcesCommandOutput}
 * @see {@link DescribeSharedResourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeSharedResourcesCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link MqServiceException}
 * <p>Base exception class for all service exceptions from Mq service.</p>
 *
 *
 * @public
 */
export class DescribeSharedResourcesCommand extends $Command
  .classBuilder<
    DescribeSharedResourcesCommandInput,
    DescribeSharedResourcesCommandOutput,
    MqClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MqClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("mq", "DescribeSharedResources", {})
  .n("MqClient", "DescribeSharedResourcesCommand")
  .sc(DescribeSharedResources$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSharedResourcesRequest;
      output: DescribeSharedResourcesResponse;
    };
    sdk: {
      input: DescribeSharedResourcesCommandInput;
      output: DescribeSharedResourcesCommandOutput;
    };
  };
}
