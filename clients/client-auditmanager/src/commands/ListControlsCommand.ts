// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListControlsRequest, ListControlsResponse } from "../models/models_0";
import { de_ListControlsCommand, se_ListControlsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListControlsCommand}.
 */
export interface ListControlsCommandInput extends ListControlsRequest {}
/**
 * @public
 *
 * The output of {@link ListControlsCommand}.
 */
export interface ListControlsCommandOutput extends ListControlsResponse, __MetadataBearer {}

/**
 * <p> Returns a list of controls from Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListControlsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListControlsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AuditManagerClient(config);
 * const input = { // ListControlsRequest
 *   controlType: "Standard" || "Custom" || "Core", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   controlCatalogId: "STRING_VALUE",
 * };
 * const command = new ListControlsCommand(input);
 * const response = await client.send(command);
 * // { // ListControlsResponse
 * //   controlMetadataList: [ // ControlMetadataList
 * //     { // ControlMetadata
 * //       arn: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       controlSources: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListControlsCommandInput - {@link ListControlsCommandInput}
 * @returns {@link ListControlsCommandOutput}
 * @see {@link ListControlsCommandInput} for command's `input` shape.
 * @see {@link ListControlsCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Your account isn't registered with Audit Manager. Check the delegated
 *          administrator setup on the Audit Manager settings page, and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *          later. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 * @public
 */
export class ListControlsCommand extends $Command
  .classBuilder<
    ListControlsCommandInput,
    ListControlsCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BedrockAssessmentManagerLambda", "ListControls", {})
  .n("AuditManagerClient", "ListControlsCommand")
  .f(void 0, void 0)
  .ser(se_ListControlsCommand)
  .de(de_ListControlsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListControlsRequest;
      output: ListControlsResponse;
    };
    sdk: {
      input: ListControlsCommandInput;
      output: ListControlsCommandOutput;
    };
  };
}
