// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateServiceFunctionRequest, CreateServiceFunctionResponse } from "../models/models_0";
import { CreateServiceFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateServiceFunctionCommand}.
 */
export interface CreateServiceFunctionCommandInput extends CreateServiceFunctionRequest {}
/**
 * @public
 *
 * The output of {@link CreateServiceFunctionCommand}.
 */
export interface CreateServiceFunctionCommandOutput extends CreateServiceFunctionResponse, __MetadataBearer {}

/**
 * Creates a service function within a service.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, CreateServiceFunctionCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, CreateServiceFunctionCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // CreateServiceFunctionRequest
 *   name: "STRING_VALUE", // required
 *   serviceArn: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   criticality: "PRIMARY" || "SUPPLEMENTAL", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateServiceFunctionCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceFunctionResponse
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
 * @param CreateServiceFunctionCommandInput - {@link CreateServiceFunctionCommandInput}
 * @returns {@link CreateServiceFunctionCommandOutput}
 * @see {@link CreateServiceFunctionCommandInput} for command's `input` shape.
 * @see {@link CreateServiceFunctionCommandOutput} for command's `response` shape.
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
export class CreateServiceFunctionCommand extends command<CreateServiceFunctionCommandInput, CreateServiceFunctionCommandOutput>(
  _ep0,
  _mw0,
  "CreateServiceFunction",
  CreateServiceFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServiceFunctionRequest;
      output: CreateServiceFunctionResponse;
    };
    sdk: {
      input: CreateServiceFunctionCommandInput;
      output: CreateServiceFunctionCommandOutput;
    };
  };
}
