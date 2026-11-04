// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSystemRequest, CreateSystemResponse } from "../models/models_0";
import { CreateSystem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSystemCommand}.
 */
export interface CreateSystemCommandInput extends CreateSystemRequest {}
/**
 * @public
 *
 * The output of {@link CreateSystemCommand}.
 */
export interface CreateSystemCommandOutput extends CreateSystemResponse, __MetadataBearer {}

/**
 * Creates a system that represents a logical grouping of services.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, CreateSystemCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, CreateSystemCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // CreateSystemRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   sharingEnabled: true || false,
 *   kmsKeyId: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateSystemCommand(input);
 * const response = await client.send(command);
 * // { // CreateSystemResponse
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
 * @param CreateSystemCommandInput - {@link CreateSystemCommandInput}
 * @returns {@link CreateSystemCommandOutput}
 * @see {@link CreateSystemCommandInput} for command's `input` shape.
 * @see {@link CreateSystemCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied — caller lacks required permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Conflict — resource already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal service error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Service quota exceeded.
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
export class CreateSystemCommand extends command<CreateSystemCommandInput, CreateSystemCommandOutput>(
  _ep0,
  _mw0,
  "CreateSystem",
  CreateSystem$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSystemRequest;
      output: CreateSystemResponse;
    };
    sdk: {
      input: CreateSystemCommandInput;
      output: CreateSystemCommandOutput;
    };
  };
}
