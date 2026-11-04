// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartDataSourceIntrospectionRequest, StartDataSourceIntrospectionResponse } from "../models/models_0";
import { StartDataSourceIntrospection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartDataSourceIntrospectionCommand}.
 */
export interface StartDataSourceIntrospectionCommandInput extends StartDataSourceIntrospectionRequest {}
/**
 * @public
 *
 * The output of {@link StartDataSourceIntrospectionCommand}.
 */
export interface StartDataSourceIntrospectionCommandOutput extends StartDataSourceIntrospectionResponse, __MetadataBearer {}

/**
 * Creates a new introspection. Returns the `introspectionId` of the new introspection after its creation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, StartDataSourceIntrospectionCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, StartDataSourceIntrospectionCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // StartDataSourceIntrospectionRequest
 *   rdsDataApiConfig: { // RdsDataApiConfig
 *     resourceArn: "STRING_VALUE", // required
 *     secretArn: "STRING_VALUE", // required
 *     databaseName: "STRING_VALUE", // required
 *   },
 * };
 * const command = new StartDataSourceIntrospectionCommand(input);
 * const response = await client.send(command);
 * // { // StartDataSourceIntrospectionResponse
 * //   introspectionId: "STRING_VALUE",
 * //   introspectionStatus: "PROCESSING" || "FAILED" || "SUCCESS",
 * //   introspectionStatusDetail: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartDataSourceIntrospectionCommandInput - {@link StartDataSourceIntrospectionCommandInput}
 * @returns {@link StartDataSourceIntrospectionCommandOutput}
 * @see {@link StartDataSourceIntrospectionCommandInput} for command's `input` shape.
 * @see {@link StartDataSourceIntrospectionCommandOutput} for command's `response` shape.
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
export class StartDataSourceIntrospectionCommand extends command<StartDataSourceIntrospectionCommandInput, StartDataSourceIntrospectionCommandOutput>(
  _ep0,
  _mw0,
  "StartDataSourceIntrospection",
  StartDataSourceIntrospection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDataSourceIntrospectionRequest;
      output: StartDataSourceIntrospectionResponse;
    };
    sdk: {
      input: StartDataSourceIntrospectionCommandInput;
      output: StartDataSourceIntrospectionCommandOutput;
    };
  };
}
