// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListManagedJobTemplatesRequest, ListManagedJobTemplatesResponse } from "../models/models_2";
import { de_ListManagedJobTemplatesCommand, se_ListManagedJobTemplatesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListManagedJobTemplatesCommand}.
 */
export interface ListManagedJobTemplatesCommandInput extends ListManagedJobTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedJobTemplatesCommand}.
 */
export interface ListManagedJobTemplatesCommandOutput extends ListManagedJobTemplatesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of managed job templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListManagedJobTemplatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListManagedJobTemplatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListManagedJobTemplatesRequest
 *   templateName: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListManagedJobTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedJobTemplatesResponse
 * //   managedJobTemplates: [ // ManagedJobTemplatesSummaryList
 * //     { // ManagedJobTemplateSummary
 * //       templateArn: "STRING_VALUE",
 * //       templateName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       environments: [ // Environments
 * //         "STRING_VALUE",
 * //       ],
 * //       templateVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListManagedJobTemplatesCommandInput - {@link ListManagedJobTemplatesCommandInput}
 * @returns {@link ListManagedJobTemplatesCommandOutput}
 * @see {@link ListManagedJobTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListManagedJobTemplatesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *             is unavailable.</p>
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
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListManagedJobTemplatesCommand extends $Command
  .classBuilder<
    ListManagedJobTemplatesCommandInput,
    ListManagedJobTemplatesCommandOutput,
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
  .s("AWSIotService", "ListManagedJobTemplates", {})
  .n("IoTClient", "ListManagedJobTemplatesCommand")
  .f(void 0, void 0)
  .ser(se_ListManagedJobTemplatesCommand)
  .de(de_ListManagedJobTemplatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedJobTemplatesRequest;
      output: ListManagedJobTemplatesResponse;
    };
    sdk: {
      input: ListManagedJobTemplatesCommandInput;
      output: ListManagedJobTemplatesCommandOutput;
    };
  };
}
