// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPredefinedAttributesRequest, ListPredefinedAttributesResponse } from "../models/models_2";
import { ListPredefinedAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPredefinedAttributesCommand}.
 */
export interface ListPredefinedAttributesCommandInput extends ListPredefinedAttributesRequest {}
/**
 * @public
 *
 * The output of {@link ListPredefinedAttributesCommand}.
 */
export interface ListPredefinedAttributesCommandOutput extends ListPredefinedAttributesResponse, __MetadataBearer {}

/**
 * Lists predefined attributes for the specified Connect Customer instance. A *predefined attribute* is made up of a name and a value. You can use predefined attributes for:
 *
 * - Routing proficiency (for example, agent certification) that has predefined values (for example, a list of possible certifications). For more information, see [Create predefined attributes for routing contacts to agents](https://docs.aws.amazon.com/connect/latest/adminguide/predefined-attributes.html).
 * - Contact information that varies between transfers or conferences, such as the name of the business unit handling the contact. For more information, see [Use contact segment attributes](https://docs.aws.amazon.com/connect/latest/adminguide/use-contact-segment-attributes.html).
 *
 * For the predefined attributes per instance quota, see [Connect Customer quotas](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#connect-quotas).
 *
 * **Endpoints**: See [Connect Customer endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/connect_region.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListPredefinedAttributesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListPredefinedAttributesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListPredefinedAttributesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPredefinedAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ListPredefinedAttributesResponse
 * //   NextToken: "STRING_VALUE",
 * //   PredefinedAttributeSummaryList: [ // PredefinedAttributeSummaryList
 * //     { // PredefinedAttributeSummary
 * //       Name: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPredefinedAttributesCommandInput - {@link ListPredefinedAttributesCommandInput}
 * @returns {@link ListPredefinedAttributesCommandOutput}
 * @see {@link ListPredefinedAttributesCommandInput} for command's `input` shape.
 * @see {@link ListPredefinedAttributesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class ListPredefinedAttributesCommand extends command<ListPredefinedAttributesCommandInput, ListPredefinedAttributesCommandOutput>(
  _ep0,
  _mw0,
  "ListPredefinedAttributes",
  ListPredefinedAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPredefinedAttributesRequest;
      output: ListPredefinedAttributesResponse;
    };
    sdk: {
      input: ListPredefinedAttributesCommandInput;
      output: ListPredefinedAttributesCommandOutput;
    };
  };
}
