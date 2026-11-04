// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateServiceFunctionRequest, UpdateServiceFunctionResponse } from "../models/models_0";
import { UpdateServiceFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateServiceFunctionCommand}.
 */
export interface UpdateServiceFunctionCommandInput extends UpdateServiceFunctionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceFunctionCommand}.
 */
export interface UpdateServiceFunctionCommandOutput extends UpdateServiceFunctionResponse, __MetadataBearer {}

/**
 * Updates a service function.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, UpdateServiceFunctionCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, UpdateServiceFunctionCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // UpdateServiceFunctionRequest
 *   serviceArn: "STRING_VALUE", // required
 *   serviceFunctionId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   criticality: "PRIMARY" || "SUPPLEMENTAL",
 * };
 * const command = new UpdateServiceFunctionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceFunctionResponse
 * //   serviceFunction: { // ServiceFunction
 * //     serviceArn: "STRING_VALUE", // required
 * //     serviceFunctionId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     criticality: "PRIMARY" || "SUPPLEMENTAL", // required
 * //     resourceCount: Number("int"),
 * //     source: "AI_GENERATED" || "USER",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateServiceFunctionCommandInput - {@link UpdateServiceFunctionCommandInput}
 * @returns {@link UpdateServiceFunctionCommandOutput}
 * @see {@link UpdateServiceFunctionCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceFunctionCommandOutput} for command's `response` shape.
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
export class UpdateServiceFunctionCommand extends command<UpdateServiceFunctionCommandInput, UpdateServiceFunctionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateServiceFunction",
  UpdateServiceFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceFunctionRequest;
      output: UpdateServiceFunctionResponse;
    };
    sdk: {
      input: UpdateServiceFunctionCommandInput;
      output: UpdateServiceFunctionCommandOutput;
    };
  };
}
