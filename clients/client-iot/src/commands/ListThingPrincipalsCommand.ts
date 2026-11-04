// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListThingPrincipalsRequest, ListThingPrincipalsResponse } from "../models/models_2";
import { ListThingPrincipals$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListThingPrincipalsCommand}.
 */
export interface ListThingPrincipalsCommandInput extends ListThingPrincipalsRequest {}
/**
 * @public
 *
 * The output of {@link ListThingPrincipalsCommand}.
 */
export interface ListThingPrincipalsCommandOutput extends ListThingPrincipalsResponse, __MetadataBearer {}

/**
 * Lists the principals associated with the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.
 *
 * Requires permission to access the [ListThingPrincipals](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingPrincipalsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingPrincipalsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListThingPrincipalsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   thingName: "STRING_VALUE", // required
 * };
 * const command = new ListThingPrincipalsCommand(input);
 * const response = await client.send(command);
 * // { // ListThingPrincipalsResponse
 * //   principals: [ // Principals
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThingPrincipalsCommandInput - {@link ListThingPrincipalsCommandInput}
 * @returns {@link ListThingPrincipalsCommandOutput}
 * @see {@link ListThingPrincipalsCommandInput} for command's `input` shape.
 * @see {@link ListThingPrincipalsCommandOutput} for command's `response` shape.
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
export class ListThingPrincipalsCommand extends command<ListThingPrincipalsCommandInput, ListThingPrincipalsCommandOutput>(
  _ep0,
  _mw0,
  "ListThingPrincipals",
  ListThingPrincipals$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThingPrincipalsRequest;
      output: ListThingPrincipalsResponse;
    };
    sdk: {
      input: ListThingPrincipalsCommandInput;
      output: ListThingPrincipalsCommandOutput;
    };
  };
}
