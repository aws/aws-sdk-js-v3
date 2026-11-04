// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListManagedJobTemplatesRequest, ListManagedJobTemplatesResponse } from "../models/models_1";
import { ListManagedJobTemplates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of managed job templates.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListManagedJobTemplatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListManagedJobTemplatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
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
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class ListManagedJobTemplatesCommand extends command<ListManagedJobTemplatesCommandInput, ListManagedJobTemplatesCommandOutput>(
  _ep0,
  _mw0,
  "ListManagedJobTemplates",
  ListManagedJobTemplates$
) {
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
