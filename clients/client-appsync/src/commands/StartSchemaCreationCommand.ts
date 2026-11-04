// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartSchemaCreationRequest, StartSchemaCreationResponse } from "../models/models_0";
import { StartSchemaCreation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartSchemaCreationCommand}.
 */
export interface StartSchemaCreationCommandInput extends StartSchemaCreationRequest {}
/**
 * @public
 *
 * The output of {@link StartSchemaCreationCommand}.
 */
export interface StartSchemaCreationCommandOutput extends StartSchemaCreationResponse, __MetadataBearer {}

/**
 * Adds a new schema to your GraphQL API.
 *
 * This operation is asynchronous. Use to determine when it has completed.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, StartSchemaCreationCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, StartSchemaCreationCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // StartSchemaCreationRequest
 *   apiId: "STRING_VALUE", // required
 *   definition: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new StartSchemaCreationCommand(input);
 * const response = await client.send(command);
 * // { // StartSchemaCreationResponse
 * //   status: "PROCESSING" || "ACTIVE" || "DELETING" || "FAILED" || "SUCCESS" || "NOT_APPLICABLE",
 * // };
 *
 * ```
 *
 * @param StartSchemaCreationCommandInput - {@link StartSchemaCreationCommandInput}
 * @returns {@link StartSchemaCreationCommandOutput}
 * @see {@link StartSchemaCreationCommandInput} for command's `input` shape.
 * @see {@link StartSchemaCreationCommandOutput} for command's `response` shape.
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
export class StartSchemaCreationCommand extends command<StartSchemaCreationCommandInput, StartSchemaCreationCommandOutput>(
  _ep0,
  _mw0,
  "StartSchemaCreation",
  StartSchemaCreation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSchemaCreationRequest;
      output: StartSchemaCreationResponse;
    };
    sdk: {
      input: StartSchemaCreationCommandInput;
      output: StartSchemaCreationCommandOutput;
    };
  };
}
