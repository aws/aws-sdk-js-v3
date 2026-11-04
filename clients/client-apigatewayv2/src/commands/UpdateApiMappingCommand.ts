// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateApiMappingRequest, UpdateApiMappingResponse } from "../models/models_0";
import { UpdateApiMapping$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateApiMappingCommand}.
 */
export interface UpdateApiMappingCommandInput extends UpdateApiMappingRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApiMappingCommand}.
 */
export interface UpdateApiMappingCommandOutput extends UpdateApiMappingResponse, __MetadataBearer {}

/**
 * The API mapping.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateApiMappingCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateApiMappingCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // UpdateApiMappingRequest
 *   ApiId: "STRING_VALUE", // required
 *   ApiMappingId: "STRING_VALUE", // required
 *   ApiMappingKey: "STRING_VALUE",
 *   DomainName: "STRING_VALUE", // required
 *   Stage: "STRING_VALUE",
 * };
 * const command = new UpdateApiMappingCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApiMappingResponse
 * //   ApiId: "STRING_VALUE",
 * //   ApiMappingId: "STRING_VALUE",
 * //   ApiMappingKey: "STRING_VALUE",
 * //   Stage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateApiMappingCommandInput - {@link UpdateApiMappingCommandInput}
 * @returns {@link UpdateApiMappingCommandOutput}
 * @see {@link UpdateApiMappingCommandInput} for command's `input` shape.
 * @see {@link UpdateApiMappingCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found. See the message field for more information.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * A limit has been exceeded. See the accompanying error message for details.
 *
 * @throws {@link ApiGatewayV2ServiceException}
 *
 * Base exception class for all service exceptions from ApiGatewayV2 service.
 *
 * @public
 */
export class UpdateApiMappingCommand extends command<UpdateApiMappingCommandInput, UpdateApiMappingCommandOutput>(
  _ep0,
  _mw0,
  "UpdateApiMapping",
  UpdateApiMapping$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApiMappingRequest;
      output: UpdateApiMappingResponse;
    };
    sdk: {
      input: UpdateApiMappingCommandInput;
      output: UpdateApiMappingCommandOutput;
    };
  };
}
