// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConformancePacksRequest, DescribeConformancePacksResponse } from "../models/models_0";
import { DescribeConformancePacks } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConformancePacksCommand}.
 */
export interface DescribeConformancePacksCommandInput extends DescribeConformancePacksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConformancePacksCommand}.
 */
export interface DescribeConformancePacksCommandOutput extends DescribeConformancePacksResponse, __MetadataBearer {}

/**
 * <p>Returns a list of one or more conformance packs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConformancePacksCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConformancePacksCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeConformancePacksRequest
 *   ConformancePackNames: [ // ConformancePackNamesList
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeConformancePacksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConformancePacksResponse
 * //   ConformancePackDetails: [ // ConformancePackDetailList
 * //     { // ConformancePackDetail
 * //       ConformancePackName: "STRING_VALUE", // required
 * //       ConformancePackArn: "STRING_VALUE", // required
 * //       ConformancePackId: "STRING_VALUE", // required
 * //       DeliveryS3Bucket: "STRING_VALUE",
 * //       DeliveryS3KeyPrefix: "STRING_VALUE",
 * //       ConformancePackInputParameters: [ // ConformancePackInputParameters
 * //         { // ConformancePackInputParameter
 * //           ParameterName: "STRING_VALUE", // required
 * //           ParameterValue: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       LastUpdateRequestedTime: new Date("TIMESTAMP"),
 * //       CreatedBy: "STRING_VALUE",
 * //       TemplateSSMDocumentDetails: { // TemplateSSMDocumentDetails
 * //         DocumentName: "STRING_VALUE", // required
 * //         DocumentVersion: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConformancePacksCommandInput - {@link DescribeConformancePacksCommandInput}
 * @returns {@link DescribeConformancePacksCommandOutput}
 * @see {@link DescribeConformancePacksCommandInput} for command's `input` shape.
 * @see {@link DescribeConformancePacksCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidLimitException} (client fault)
 *  <p>The specified limit is outside the allowable range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link NoSuchConformancePackException} (client fault)
 *  <p>You specified one or more conformance packs that do not exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class DescribeConformancePacksCommand extends $Command
  .classBuilder<
    DescribeConformancePacksCommandInput,
    DescribeConformancePacksCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "DescribeConformancePacks", {})
  .n("ConfigServiceClient", "DescribeConformancePacksCommand")
  .sc(DescribeConformancePacks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConformancePacksRequest;
      output: DescribeConformancePacksResponse;
    };
    sdk: {
      input: DescribeConformancePacksCommandInput;
      output: DescribeConformancePacksCommandOutput;
    };
  };
}
