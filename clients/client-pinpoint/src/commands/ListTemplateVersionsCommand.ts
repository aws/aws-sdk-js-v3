// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTemplateVersionsRequest, ListTemplateVersionsResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { ListTemplateVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTemplateVersionsCommand}.
 */
export interface ListTemplateVersionsCommandInput extends ListTemplateVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTemplateVersionsCommand}.
 */
export interface ListTemplateVersionsCommandOutput extends ListTemplateVersionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about all the versions of a specific message template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, ListTemplateVersionsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, ListTemplateVersionsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // ListTemplateVersionsRequest
 *   NextToken: "STRING_VALUE",
 *   PageSize: "STRING_VALUE",
 *   TemplateName: "STRING_VALUE", // required
 *   TemplateType: "STRING_VALUE", // required
 * };
 * const command = new ListTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTemplateVersionsResponse
 * //   TemplateVersionsResponse: { // TemplateVersionsResponse
 * //     Item: [ // ListOfTemplateVersionResponse // required
 * //       { // TemplateVersionResponse
 * //         CreationDate: "STRING_VALUE", // required
 * //         DefaultSubstitutions: "STRING_VALUE",
 * //         LastModifiedDate: "STRING_VALUE", // required
 * //         TemplateDescription: "STRING_VALUE",
 * //         TemplateName: "STRING_VALUE", // required
 * //         TemplateType: "STRING_VALUE", // required
 * //         Version: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Message: "STRING_VALUE",
 * //     NextToken: "STRING_VALUE",
 * //     RequestID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListTemplateVersionsCommandInput - {@link ListTemplateVersionsCommandInput}
 * @returns {@link ListTemplateVersionsCommandOutput}
 * @see {@link ListTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link ListTemplateVersionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 *
 * @public
 */
export class ListTemplateVersionsCommand extends $Command
  .classBuilder<
    ListTemplateVersionsCommandInput,
    ListTemplateVersionsCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "ListTemplateVersions", {})
  .n("PinpointClient", "ListTemplateVersionsCommand")
  .sc(ListTemplateVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTemplateVersionsRequest;
      output: ListTemplateVersionsResponse;
    };
    sdk: {
      input: ListTemplateVersionsCommandInput;
      output: ListTemplateVersionsCommandOutput;
    };
  };
}
