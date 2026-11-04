// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSystemRequest, GetSystemResponse } from "../models/models_0";
import { GetSystem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSystemCommand}.
 */
export interface GetSystemCommandInput extends GetSystemRequest {}
/**
 * @public
 *
 * The output of {@link GetSystemCommand}.
 */
export interface GetSystemCommandOutput extends GetSystemResponse, __MetadataBearer {}

/**
 * Retrieves a system by ARN.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, GetSystemCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, GetSystemCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // GetSystemRequest
 *   systemArn: "STRING_VALUE", // required
 * };
 * const command = new GetSystemCommand(input);
 * const response = await client.send(command);
 * // { // GetSystemResponse
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
 * @param GetSystemCommandInput - {@link GetSystemCommandInput}
 * @returns {@link GetSystemCommandOutput}
 * @see {@link GetSystemCommandInput} for command's `input` shape.
 * @see {@link GetSystemCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied — caller lacks required permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal service error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validation error — invalid input parameters.
 *
 * @throws {@link Resiliencehubv2ServiceException}
 *
 * Base exception class for all service exceptions from Resiliencehubv2 service.
 *
 * @public
 */
export class GetSystemCommand extends command<GetSystemCommandInput, GetSystemCommandOutput>(
  _ep0,
  _mw0,
  "GetSystem",
  GetSystem$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSystemRequest;
      output: GetSystemResponse;
    };
    sdk: {
      input: GetSystemCommandInput;
      output: GetSystemCommandOutput;
    };
  };
}
