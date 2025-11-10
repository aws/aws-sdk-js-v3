// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetLinkInput, GetLinkOutput } from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import { GetLink } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLinkCommand}.
 */
export interface GetLinkCommandInput extends GetLinkInput {}
/**
 * @public
 *
 * The output of {@link GetLinkCommand}.
 */
export interface GetLinkCommandOutput extends GetLinkOutput, __MetadataBearer {}

/**
 * <p>Returns complete information about one link.</p> <p>To use this operation, provide the link ARN. To retrieve a list of link ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html">ListLinks</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, GetLinkCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, GetLinkCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * // import type { OAMClientConfig } from "@aws-sdk/client-oam";
 * const config = {}; // type is OAMClientConfig
 * const client = new OAMClient(config);
 * const input = { // GetLinkInput
 *   Identifier: "STRING_VALUE", // required
 *   IncludeTags: true || false,
 * };
 * const command = new GetLinkCommand(input);
 * const response = await client.send(command);
 * // { // GetLinkOutput
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Label: "STRING_VALUE",
 * //   LabelTemplate: "STRING_VALUE",
 * //   ResourceTypes: [ // ResourceTypesOutput
 * //     "STRING_VALUE",
 * //   ],
 * //   SinkArn: "STRING_VALUE",
 * //   Tags: { // TagMapOutput
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   LinkConfiguration: { // LinkConfiguration
 * //     LogGroupConfiguration: { // LogGroupConfiguration
 * //       Filter: "STRING_VALUE", // required
 * //     },
 * //     MetricConfiguration: { // MetricConfiguration
 * //       Filter: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLinkCommandInput - {@link GetLinkCommandInput}
 * @returns {@link GetLinkCommandOutput}
 * @see {@link GetLinkCommandInput} for command's `input` shape.
 * @see {@link GetLinkCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing from the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link OAMServiceException}
 * <p>Base exception class for all service exceptions from OAM service.</p>
 *
 *
 * @public
 */
export class GetLinkCommand extends $Command
  .classBuilder<
    GetLinkCommandInput,
    GetLinkCommandOutput,
    OAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("oamservice", "GetLink", {})
  .n("OAMClient", "GetLinkCommand")
  .sc(GetLink)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLinkInput;
      output: GetLinkOutput;
    };
    sdk: {
      input: GetLinkCommandInput;
      output: GetLinkCommandOutput;
    };
  };
}
