// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListConnectionTypesRequest, ListConnectionTypesResponse } from "../models/models_2";
import { de_ListConnectionTypesCommand, se_ListConnectionTypesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConnectionTypesCommand}.
 */
export interface ListConnectionTypesCommandInput extends ListConnectionTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListConnectionTypesCommand}.
 */
export interface ListConnectionTypesCommandOutput extends ListConnectionTypesResponse, __MetadataBearer {}

/**
 * <p>The <code>ListConnectionTypes</code> API provides a discovery mechanism to learn available connection types in Glue. The response contains a list of connection types with high-level details of what is supported for each connection type. The connection types listed are the set of supported options for the <code>ConnectionType</code> value in the <code>CreateConnection</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListConnectionTypesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListConnectionTypesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlueClient(config);
 * const input = { // ListConnectionTypesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListConnectionTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListConnectionTypesResponse
 * //   ConnectionTypes: [ // ConnectionTypeList
 * //     { // ConnectionTypeBrief
 * //       ConnectionType: "JDBC" || "SFTP" || "MONGODB" || "KAFKA" || "NETWORK" || "MARKETPLACE" || "CUSTOM" || "SALESFORCE" || "VIEW_VALIDATION_REDSHIFT" || "VIEW_VALIDATION_ATHENA" || "GOOGLEADS" || "GOOGLESHEETS" || "GOOGLEANALYTICS4" || "SERVICENOW" || "MARKETO" || "SAPODATA" || "ZENDESK" || "JIRACLOUD" || "NETSUITEERP" || "HUBSPOT" || "FACEBOOKADS" || "INSTAGRAMADS" || "ZOHOCRM" || "SALESFORCEPARDOT" || "SALESFORCEMARKETINGCLOUD" || "SLACK" || "STRIPE" || "INTERCOM" || "SNAPCHATADS",
 * //       Description: "STRING_VALUE",
 * //       Capabilities: { // Capabilities
 * //         SupportedAuthenticationTypes: [ // AuthenticationTypes // required
 * //           "BASIC" || "OAUTH2" || "CUSTOM" || "IAM",
 * //         ],
 * //         SupportedDataOperations: [ // DataOperations // required
 * //           "READ" || "WRITE",
 * //         ],
 * //         SupportedComputeEnvironments: [ // ComputeEnvironments // required
 * //           "SPARK" || "ATHENA" || "PYTHON",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConnectionTypesCommandInput - {@link ListConnectionTypesCommandInput}
 * @returns {@link ListConnectionTypesCommandOutput}
 * @see {@link ListConnectionTypesCommandInput} for command's `input` shape.
 * @see {@link ListConnectionTypesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class ListConnectionTypesCommand extends $Command
  .classBuilder<
    ListConnectionTypesCommandInput,
    ListConnectionTypesCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "ListConnectionTypes", {})
  .n("GlueClient", "ListConnectionTypesCommand")
  .f(void 0, void 0)
  .ser(se_ListConnectionTypesCommand)
  .de(de_ListConnectionTypesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConnectionTypesRequest;
      output: ListConnectionTypesResponse;
    };
    sdk: {
      input: ListConnectionTypesCommandInput;
      output: ListConnectionTypesCommandOutput;
    };
  };
}
