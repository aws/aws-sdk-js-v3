// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListProvisioningTemplatesRequest, ListProvisioningTemplatesResponse } from "../models/models_1";
import { ListProvisioningTemplates } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProvisioningTemplatesCommand}.
 */
export interface ListProvisioningTemplatesCommandInput extends ListProvisioningTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListProvisioningTemplatesCommand}.
 */
export interface ListProvisioningTemplatesCommandOutput extends ListProvisioningTemplatesResponse, __MetadataBearer {}

/**
 * <p>Lists the provisioning templates in your Amazon Web Services account.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListProvisioningTemplates</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListProvisioningTemplatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListProvisioningTemplatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListProvisioningTemplatesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListProvisioningTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListProvisioningTemplatesResponse
 * //   templates: [ // ProvisioningTemplateListing
 * //     { // ProvisioningTemplateSummary
 * //       templateArn: "STRING_VALUE",
 * //       templateName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       creationDate: new Date("TIMESTAMP"),
 * //       lastModifiedDate: new Date("TIMESTAMP"),
 * //       enabled: true || false,
 * //       type: "FLEET_PROVISIONING" || "JITP",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProvisioningTemplatesCommandInput - {@link ListProvisioningTemplatesCommandInput}
 * @returns {@link ListProvisioningTemplatesCommandOutput}
 * @see {@link ListProvisioningTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListProvisioningTemplatesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
export class ListProvisioningTemplatesCommand extends $Command
  .classBuilder<
    ListProvisioningTemplatesCommandInput,
    ListProvisioningTemplatesCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListProvisioningTemplates", {})
  .n("IoTClient", "ListProvisioningTemplatesCommand")
  .sc(ListProvisioningTemplates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProvisioningTemplatesRequest;
      output: ListProvisioningTemplatesResponse;
    };
    sdk: {
      input: ListProvisioningTemplatesCommandInput;
      output: ListProvisioningTemplatesCommandOutput;
    };
  };
}
