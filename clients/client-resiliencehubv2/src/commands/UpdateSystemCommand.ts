// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSystemRequest, UpdateSystemResponse } from "../models/models_0";
import { UpdateSystem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSystemCommand}.
 */
export interface UpdateSystemCommandInput extends UpdateSystemRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSystemCommand}.
 */
export interface UpdateSystemCommandOutput extends UpdateSystemResponse, __MetadataBearer {}

/**
 * <p>Updates an existing system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, UpdateSystemCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, UpdateSystemCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // UpdateSystemRequest
 *   systemArn: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   sharingEnabled: true || false,
 * };
 * const command = new UpdateSystemCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSystemResponse
 * //   system: { // System
 * //     systemArn: "STRING_VALUE", // required
 * //     systemId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     sharingEnabled: true || false,
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     kmsKeyId: "STRING_VALUE",
 * //     organizationId: "STRING_VALUE",
 * //     ouId: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSystemCommandInput - {@link UpdateSystemCommandInput}
 * @returns {@link UpdateSystemCommandOutput}
 * @see {@link UpdateSystemCommandInput} for command's `input` shape.
 * @see {@link UpdateSystemCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Conflict — resource already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class UpdateSystemCommand extends command<UpdateSystemCommandInput, UpdateSystemCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSystem",
  UpdateSystem$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSystemRequest;
      output: UpdateSystemResponse;
    };
    sdk: {
      input: UpdateSystemCommandInput;
      output: UpdateSystemCommandOutput;
    };
  };
}
