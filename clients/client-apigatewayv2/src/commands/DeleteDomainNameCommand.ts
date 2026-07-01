// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDomainNameRequest } from "../models/models_0";
import { DeleteDomainName$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDomainNameCommand}.
 */
export interface DeleteDomainNameCommandInput extends DeleteDomainNameRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDomainNameCommand}.
 */
export interface DeleteDomainNameCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a domain name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteDomainNameCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteDomainNameCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // DeleteDomainNameRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDomainNameCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDomainNameCommandInput - {@link DeleteDomainNameCommandInput}
 * @returns {@link DeleteDomainNameCommandOutput}
 * @see {@link DeleteDomainNameCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainNameCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. See the message field for more information.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>A limit has been exceeded. See the accompanying error message for details.</p>
 *
 * @throws {@link ApiGatewayV2ServiceException}
 * <p>Base exception class for all service exceptions from ApiGatewayV2 service.</p>
 *
 *
 * @public
 */
export class DeleteDomainNameCommand extends command<DeleteDomainNameCommandInput, DeleteDomainNameCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDomainName",
  DeleteDomainName$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDomainNameRequest;
      output: {};
    };
    sdk: {
      input: DeleteDomainNameCommandInput;
      output: DeleteDomainNameCommandOutput;
    };
  };
}
