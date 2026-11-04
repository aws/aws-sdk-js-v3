// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListJobTemplatesRequest, ListJobTemplatesResponse } from "../models/models_1";
import { ListJobTemplates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListJobTemplatesCommand}.
 */
export interface ListJobTemplatesCommandInput extends ListJobTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListJobTemplatesCommand}.
 */
export interface ListJobTemplatesCommandOutput extends ListJobTemplatesResponse, __MetadataBearer {}

/**
 * Returns a list of job templates.
 *
 * Requires permission to access the [ListJobTemplates](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListJobTemplatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListJobTemplatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListJobTemplatesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListJobTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListJobTemplatesResponse
 * //   jobTemplates: [ // JobTemplateSummaryList
 * //     { // JobTemplateSummary
 * //       jobTemplateArn: "STRING_VALUE",
 * //       jobTemplateId: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobTemplatesCommandInput - {@link ListJobTemplatesCommandInput}
 * @returns {@link ListJobTemplatesCommandOutput}
 * @see {@link ListJobTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListJobTemplatesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
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
export class ListJobTemplatesCommand extends command<ListJobTemplatesCommandInput, ListJobTemplatesCommandOutput>(
  _ep0,
  _mw0,
  "ListJobTemplates",
  ListJobTemplates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobTemplatesRequest;
      output: ListJobTemplatesResponse;
    };
    sdk: {
      input: ListJobTemplatesCommandInput;
      output: ListJobTemplatesCommandOutput;
    };
  };
}
