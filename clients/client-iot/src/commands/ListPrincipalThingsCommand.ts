// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPrincipalThingsRequest, ListPrincipalThingsResponse } from "../models/models_1";
import { ListPrincipalThings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPrincipalThingsCommand}.
 */
export interface ListPrincipalThingsCommandInput extends ListPrincipalThingsRequest {}
/**
 * @public
 *
 * The output of {@link ListPrincipalThingsCommand}.
 */
export interface ListPrincipalThingsCommandOutput extends ListPrincipalThingsResponse, __MetadataBearer {}

/**
 * Lists the things associated with the specified principal. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.
 *
 * Requires permission to access the [ListPrincipalThings](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListPrincipalThingsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListPrincipalThingsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListPrincipalThingsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   principal: "STRING_VALUE", // required
 * };
 * const command = new ListPrincipalThingsCommand(input);
 * const response = await client.send(command);
 * // { // ListPrincipalThingsResponse
 * //   things: [ // ThingNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPrincipalThingsCommandInput - {@link ListPrincipalThingsCommandInput}
 * @returns {@link ListPrincipalThingsCommandOutput}
 * @see {@link ListPrincipalThingsCommandInput} for command's `input` shape.
 * @see {@link ListPrincipalThingsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
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
export class ListPrincipalThingsCommand extends command<ListPrincipalThingsCommandInput, ListPrincipalThingsCommandOutput>(
  _ep0,
  _mw0,
  "ListPrincipalThings",
  ListPrincipalThings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPrincipalThingsRequest;
      output: ListPrincipalThingsResponse;
    };
    sdk: {
      input: ListPrincipalThingsCommandInput;
      output: ListPrincipalThingsCommandOutput;
    };
  };
}
