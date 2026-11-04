// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateApplicationRequest, UpdateApplicationResponse } from "../models/models_0";
import { UpdateApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandInput extends UpdateApplicationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandOutput extends UpdateApplicationResponse, __MetadataBearer {}

/**
 * Updates an application and creates a new version.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, UpdateApplicationCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, UpdateApplicationCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // UpdateApplicationRequest
 *   applicationId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   currentApplicationVersion: Number("int"), // required
 *   definition: { // Definition Union: only one key present
 *     s3Location: "STRING_VALUE",
 *     content: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApplicationResponse
 * //   applicationVersion: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param UpdateApplicationCommandInput - {@link UpdateApplicationCommandInput}
 * @returns {@link UpdateApplicationCommandOutput}
 * @see {@link UpdateApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The account or role doesn't have the right permissions to make the request.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The parameters provided in the request conflict with existing resources.
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
export class UpdateApplicationCommand extends command<UpdateApplicationCommandInput, UpdateApplicationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateApplication",
  UpdateApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApplicationRequest;
      output: UpdateApplicationResponse;
    };
    sdk: {
      input: UpdateApplicationCommandInput;
      output: UpdateApplicationCommandOutput;
    };
  };
}
