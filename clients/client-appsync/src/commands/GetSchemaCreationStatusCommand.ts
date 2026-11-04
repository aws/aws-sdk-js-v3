// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSchemaCreationStatusRequest, GetSchemaCreationStatusResponse } from "../models/models_0";
import { GetSchemaCreationStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSchemaCreationStatusCommand}.
 */
export interface GetSchemaCreationStatusCommandInput extends GetSchemaCreationStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetSchemaCreationStatusCommand}.
 */
export interface GetSchemaCreationStatusCommandOutput extends GetSchemaCreationStatusResponse, __MetadataBearer {}

/**
 * Retrieves the current status of a schema creation operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetSchemaCreationStatusCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetSchemaCreationStatusCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // GetSchemaCreationStatusRequest
 *   apiId: "STRING_VALUE", // required
 * };
 * const command = new GetSchemaCreationStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetSchemaCreationStatusResponse
 * //   status: "PROCESSING" || "ACTIVE" || "DELETING" || "FAILED" || "SUCCESS" || "NOT_APPLICABLE",
 * //   details: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSchemaCreationStatusCommandInput - {@link GetSchemaCreationStatusCommandInput}
 * @returns {@link GetSchemaCreationStatusCommandOutput}
 * @see {@link GetSchemaCreationStatusCommandInput} for command's `input` shape.
 * @see {@link GetSchemaCreationStatusCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again.
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
export class GetSchemaCreationStatusCommand extends command<GetSchemaCreationStatusCommandInput, GetSchemaCreationStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetSchemaCreationStatus",
  GetSchemaCreationStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSchemaCreationStatusRequest;
      output: GetSchemaCreationStatusResponse;
    };
    sdk: {
      input: GetSchemaCreationStatusCommandInput;
      output: GetSchemaCreationStatusCommandOutput;
    };
  };
}
