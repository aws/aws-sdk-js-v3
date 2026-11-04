// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProvisioningTemplatesRequest, ListProvisioningTemplatesResponse } from "../models/models_1";
import { ListProvisioningTemplates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the provisioning templates in your Amazon Web Services account.
 *
 * Requires permission to access the [ListProvisioningTemplates](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class ListProvisioningTemplatesCommand extends command<ListProvisioningTemplatesCommandInput, ListProvisioningTemplatesCommandOutput>(
  _ep0,
  _mw0,
  "ListProvisioningTemplates",
  ListProvisioningTemplates$
) {
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
