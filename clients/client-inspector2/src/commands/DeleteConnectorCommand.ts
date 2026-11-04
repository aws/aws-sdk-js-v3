// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConnectorRequest, DeleteConnectorResponse } from "../models/models_0";
import { DeleteConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConnectorCommand}.
 */
export interface DeleteConnectorCommandInput extends DeleteConnectorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectorCommand}.
 */
export interface DeleteConnectorCommandOutput extends DeleteConnectorResponse, __MetadataBearer {}

/**
 * Deletes a connector from your account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, DeleteConnectorCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, DeleteConnectorCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // DeleteConnectorRequest
 *   connectorArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteConnectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConnectorCommandInput - {@link DeleteConnectorCommandInput}
 * @returns {@link DeleteConnectorCommandOutput}
 * @see {@link DeleteConnectorCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectorCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * For `Enable`, you receive this error if you attempt to use a feature in an unsupported Amazon Web Services Region.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflict occurred. This exception occurs when the same resource is being modified by concurrent requests.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the Amazon Inspector service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access an invalid resource. Make sure the resource is specified correctly.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation due to missing required fields or having invalid inputs.
 *
 * @throws {@link Inspector2ServiceException}
 *
 * Base exception class for all service exceptions from Inspector2 service.
 *
 * @example Delete a customer-managed connector
 * ```javascript
 * //
 * const input = {
 *   connectorArn: "arn:aws:inspector2:us-east-1:123456789012:connector/6ccf8549-b52b-57ca-bf52-a2266da3c53a"
 * };
 * const command = new DeleteConnectorCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteConnectorCommand extends command<DeleteConnectorCommandInput, DeleteConnectorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConnector",
  DeleteConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectorRequest;
      output: {};
    };
    sdk: {
      input: DeleteConnectorCommandInput;
      output: DeleteConnectorCommandOutput;
    };
  };
}
