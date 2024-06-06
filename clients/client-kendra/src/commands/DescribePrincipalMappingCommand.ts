// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { DescribePrincipalMappingRequest, DescribePrincipalMappingResponse } from "../models/models_0";
import { de_DescribePrincipalMappingCommand, se_DescribePrincipalMappingCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePrincipalMappingCommand}.
 */
export interface DescribePrincipalMappingCommandInput extends DescribePrincipalMappingRequest {}
/**
 * @public
 *
 * The output of {@link DescribePrincipalMappingCommand}.
 */
export interface DescribePrincipalMappingCommandOutput extends DescribePrincipalMappingResponse, __MetadataBearer {}

/**
 * <p>Describes the processing of <code>PUT</code> and <code>DELETE</code> actions for
 *             mapping users to their groups. This includes information on the status of actions
 *             currently processing or yet to be processed, when actions were last updated, when
 *             actions were received by Amazon Kendra, the latest action that should process and
 *             apply after other actions, and useful error messages if an action could not be
 *             processed.</p>
 *          <p>
 *             <code>DescribePrincipalMapping</code> is currently not supported in the Amazon Web Services GovCloud (US-West) region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DescribePrincipalMappingCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DescribePrincipalMappingCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // DescribePrincipalMappingRequest
 *   IndexId: "STRING_VALUE", // required
 *   DataSourceId: "STRING_VALUE",
 *   GroupId: "STRING_VALUE", // required
 * };
 * const command = new DescribePrincipalMappingCommand(input);
 * const response = await client.send(command);
 * // { // DescribePrincipalMappingResponse
 * //   IndexId: "STRING_VALUE",
 * //   DataSourceId: "STRING_VALUE",
 * //   GroupId: "STRING_VALUE",
 * //   GroupOrderingIdSummaries: [ // GroupOrderingIdSummaries
 * //     { // GroupOrderingIdSummary
 * //       Status: "FAILED" || "SUCCEEDED" || "PROCESSING" || "DELETING" || "DELETED",
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       ReceivedAt: new Date("TIMESTAMP"),
 * //       OrderingId: Number("long"),
 * //       FailureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribePrincipalMappingCommandInput - {@link DescribePrincipalMappingCommandInput}
 * @returns {@link DescribePrincipalMappingCommandOutput}
 * @see {@link DescribePrincipalMappingCommandInput} for command's `input` shape.
 * @see {@link DescribePrincipalMappingCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraServiceException}
 * <p>Base exception class for all service exceptions from Kendra service.</p>
 *
 * @public
 */
export class DescribePrincipalMappingCommand extends $Command
  .classBuilder<
    DescribePrincipalMappingCommandInput,
    DescribePrincipalMappingCommandOutput,
    KendraClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KendraClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSKendraFrontendService", "DescribePrincipalMapping", {})
  .n("KendraClient", "DescribePrincipalMappingCommand")
  .f(void 0, void 0)
  .ser(se_DescribePrincipalMappingCommand)
  .de(de_DescribePrincipalMappingCommand)
  .build() {}
