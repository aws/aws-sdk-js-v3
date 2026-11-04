// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTypeRequest, CreateTypeResponse } from "../models/models_0";
import { CreateType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTypeCommand}.
 */
export interface CreateTypeCommandInput extends CreateTypeRequest {}
/**
 * @public
 *
 * The output of {@link CreateTypeCommand}.
 */
export interface CreateTypeCommandOutput extends CreateTypeResponse, __MetadataBearer {}

/**
 * Creates a `Type` object.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, CreateTypeCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, CreateTypeCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // CreateTypeRequest
 *   apiId: "STRING_VALUE", // required
 *   definition: "STRING_VALUE", // required
 *   format: "SDL" || "JSON", // required
 * };
 * const command = new CreateTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateTypeResponse
 * //   type: { // Type
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     definition: "STRING_VALUE",
 * //     format: "SDL" || "JSON",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateTypeCommandInput - {@link CreateTypeCommandInput}
 * @returns {@link CreateTypeCommandOutput}
 * @see {@link CreateTypeCommandInput} for command's `input` shape.
 * @see {@link CreateTypeCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Another modification is in progress at this time and it must complete before you can make your change.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal AppSync error occurred. Try your request again.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Check the resource, and then try again.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You aren't authorized to perform this operation.
 *
 * @throws {@link AppSyncServiceException}
 *
 * Base exception class for all service exceptions from AppSync service.
 *
 * @public
 */
export class CreateTypeCommand extends command<CreateTypeCommandInput, CreateTypeCommandOutput>(
  _ep0,
  _mw0,
  "CreateType",
  CreateType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTypeRequest;
      output: CreateTypeResponse;
    };
    sdk: {
      input: CreateTypeCommandInput;
      output: CreateTypeCommandOutput;
    };
  };
}
