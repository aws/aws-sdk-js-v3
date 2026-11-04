// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetApplicationVersionRequest, GetApplicationVersionResponse } from "../models/models_0";
import { GetApplicationVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetApplicationVersionCommand}.
 */
export interface GetApplicationVersionCommandInput extends GetApplicationVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationVersionCommand}.
 */
export interface GetApplicationVersionCommandOutput extends GetApplicationVersionResponse, __MetadataBearer {}

/**
 * Returns details about a specific version of a specific application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, GetApplicationVersionCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, GetApplicationVersionCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // GetApplicationVersionRequest
 *   applicationId: "STRING_VALUE", // required
 *   applicationVersion: Number("int"), // required
 * };
 * const command = new GetApplicationVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationVersionResponse
 * //   name: "STRING_VALUE", // required
 * //   applicationVersion: Number("int"), // required
 * //   description: "STRING_VALUE",
 * //   definitionContent: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetApplicationVersionCommandInput - {@link GetApplicationVersionCommandInput}
 * @returns {@link GetApplicationVersionCommandOutput}
 * @see {@link GetApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link GetApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The account or role doesn't have the right permissions to make the request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests made exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One or more parameters provided in the request is not valid.
 *
 * @throws {@link M2ServiceException}
 *
 * Base exception class for all service exceptions from M2 service.
 *
 * @public
 */
export class GetApplicationVersionCommand extends command<GetApplicationVersionCommandInput, GetApplicationVersionCommandOutput>(
  _ep0,
  _mw0,
  "GetApplicationVersion",
  GetApplicationVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationVersionRequest;
      output: GetApplicationVersionResponse;
    };
    sdk: {
      input: GetApplicationVersionCommandInput;
      output: GetApplicationVersionCommandOutput;
    };
  };
}
