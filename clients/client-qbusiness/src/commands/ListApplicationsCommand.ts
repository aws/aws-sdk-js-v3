// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListApplicationsRequest, ListApplicationsResponse } from "../models/models_0";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { ListApplications } from "../schemas/schemas_22_Application";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationsCommand}.
 */
export interface ListApplicationsCommandInput extends ListApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationsCommand}.
 */
export interface ListApplicationsCommandOutput extends ListApplicationsResponse, __MetadataBearer {}

/**
 * <p>Lists Amazon Q Business applications.</p> <note> <p>Amazon Q Business applications may securely transmit data for processing across Amazon Web Services Regions within your geography. For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/cross-region-inference.html">Cross region inference in Amazon Q Business</a>.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListApplicationsCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListApplicationsCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // ListApplicationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   applications: [ // Applications
 * //     { // Application
 * //       displayName: "STRING_VALUE",
 * //       applicationId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED" || "UPDATING",
 * //       identityType: "AWS_IAM_IDP_SAML" || "AWS_IAM_IDP_OIDC" || "AWS_IAM_IDC" || "AWS_QUICKSIGHT_IDP" || "ANONYMOUS",
 * //       quickSightConfiguration: { // QuickSightConfiguration
 * //         clientNamespace: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListApplicationsCommandInput - {@link ListApplicationsCommandInput}
 * @returns {@link ListApplicationsCommandOutput}
 * @see {@link ListApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationsCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class ListApplicationsCommand extends $Command
  .classBuilder<
    ListApplicationsCommandInput,
    ListApplicationsCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "ListApplications", {})
  .n("QBusinessClient", "ListApplicationsCommand")
  .sc(ListApplications)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationsRequest;
      output: ListApplicationsResponse;
    };
    sdk: {
      input: ListApplicationsCommandInput;
      output: ListApplicationsCommandOutput;
    };
  };
}
