// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListProvisioningTemplateVersionsRequest, ListProvisioningTemplateVersionsResponse } from "../models/models_2";
import {
  de_ListProvisioningTemplateVersionsCommand,
  se_ListProvisioningTemplateVersionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProvisioningTemplateVersionsCommand}.
 */
export interface ListProvisioningTemplateVersionsCommandInput extends ListProvisioningTemplateVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListProvisioningTemplateVersionsCommand}.
 */
export interface ListProvisioningTemplateVersionsCommandOutput
  extends ListProvisioningTemplateVersionsResponse,
    __MetadataBearer {}

/**
 * <p>A list of provisioning template versions.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListProvisioningTemplateVersions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListProvisioningTemplateVersionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListProvisioningTemplateVersionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListProvisioningTemplateVersionsRequest
 *   templateName: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListProvisioningTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListProvisioningTemplateVersionsResponse
 * //   versions: [ // ProvisioningTemplateVersionListing
 * //     { // ProvisioningTemplateVersionSummary
 * //       versionId: Number("int"),
 * //       creationDate: new Date("TIMESTAMP"),
 * //       isDefaultVersion: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProvisioningTemplateVersionsCommandInput - {@link ListProvisioningTemplateVersionsCommandInput}
 * @returns {@link ListProvisioningTemplateVersionsCommandOutput}
 * @see {@link ListProvisioningTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link ListProvisioningTemplateVersionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListProvisioningTemplateVersionsCommand extends $Command
  .classBuilder<
    ListProvisioningTemplateVersionsCommandInput,
    ListProvisioningTemplateVersionsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "ListProvisioningTemplateVersions", {})
  .n("IoTClient", "ListProvisioningTemplateVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListProvisioningTemplateVersionsCommand)
  .de(de_ListProvisioningTemplateVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProvisioningTemplateVersionsRequest;
      output: ListProvisioningTemplateVersionsResponse;
    };
    sdk: {
      input: ListProvisioningTemplateVersionsCommandInput;
      output: ListProvisioningTemplateVersionsCommandOutput;
    };
  };
}
