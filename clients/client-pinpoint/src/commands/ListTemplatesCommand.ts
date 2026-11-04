// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTemplatesRequest, ListTemplatesResponse } from "../models/models_1";
import { ListTemplates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTemplatesCommand}.
 */
export interface ListTemplatesCommandInput extends ListTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListTemplatesCommand}.
 */
export interface ListTemplatesCommandOutput extends ListTemplatesResponse, __MetadataBearer {}

/**
 * Retrieves information about all the message templates that are associated with your Amazon Pinpoint account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, ListTemplatesCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, ListTemplatesCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // ListTemplatesRequest
 *   NextToken: "STRING_VALUE",
 *   PageSize: "STRING_VALUE",
 *   Prefix: "STRING_VALUE",
 *   TemplateType: "STRING_VALUE",
 * };
 * const command = new ListTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListTemplatesResponse
 * //   TemplatesResponse: { // TemplatesResponse
 * //     Item: [ // ListOfTemplateResponse // required
 * //       { // TemplateResponse
 * //         Arn: "STRING_VALUE",
 * //         CreationDate: "STRING_VALUE", // required
 * //         DefaultSubstitutions: "STRING_VALUE",
 * //         LastModifiedDate: "STRING_VALUE", // required
 * //         tags: { // MapOf__string
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         TemplateDescription: "STRING_VALUE",
 * //         TemplateName: "STRING_VALUE", // required
 * //         TemplateType: "EMAIL" || "SMS" || "VOICE" || "PUSH" || "INAPP", // required
 * //         Version: "STRING_VALUE",
 * //       },
 * //     ],
 * //     NextToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListTemplatesCommandInput - {@link ListTemplatesCommandInput}
 * @returns {@link ListTemplatesCommandOutput}
 * @see {@link ListTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListTemplatesCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link PinpointServiceException}
 *
 * Base exception class for all service exceptions from Pinpoint service.
 *
 * @public
 */
export class ListTemplatesCommand extends command<ListTemplatesCommandInput, ListTemplatesCommandOutput>(
  _ep0,
  _mw0,
  "ListTemplates",
  ListTemplates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTemplatesRequest;
      output: ListTemplatesResponse;
    };
    sdk: {
      input: ListTemplatesCommandInput;
      output: ListTemplatesCommandOutput;
    };
  };
}
