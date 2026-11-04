// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetIntrospectionSchemaRequest, GetIntrospectionSchemaResponse } from "../models/models_0";
import { GetIntrospectionSchema$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIntrospectionSchemaCommand}.
 */
export interface GetIntrospectionSchemaCommandInput extends GetIntrospectionSchemaRequest {}
/**
 * @public
 */
export type GetIntrospectionSchemaCommandOutputType = Omit<GetIntrospectionSchemaResponse, "schema"> & {
  schema?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetIntrospectionSchemaCommand}.
 */
export interface GetIntrospectionSchemaCommandOutput extends GetIntrospectionSchemaCommandOutputType, __MetadataBearer {}

/**
 * Retrieves the introspection schema for a GraphQL API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetIntrospectionSchemaCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetIntrospectionSchemaCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // GetIntrospectionSchemaRequest
 *   apiId: "STRING_VALUE", // required
 *   format: "SDL" || "JSON", // required
 *   includeDirectives: true || false,
 * };
 * const command = new GetIntrospectionSchemaCommand(input);
 * const response = await client.send(command);
 * // { // GetIntrospectionSchemaResponse
 * //   schema: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param GetIntrospectionSchemaCommandInput - {@link GetIntrospectionSchemaCommandInput}
 * @returns {@link GetIntrospectionSchemaCommandOutput}
 * @see {@link GetIntrospectionSchemaCommandInput} for command's `input` shape.
 * @see {@link GetIntrospectionSchemaCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link GraphQLSchemaException} (client fault)
 *
 * The GraphQL schema is not valid.
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
export class GetIntrospectionSchemaCommand extends command<GetIntrospectionSchemaCommandInput, GetIntrospectionSchemaCommandOutput>(
  _ep0,
  _mw0,
  "GetIntrospectionSchema",
  GetIntrospectionSchema$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIntrospectionSchemaRequest;
      output: GetIntrospectionSchemaResponse;
    };
    sdk: {
      input: GetIntrospectionSchemaCommandInput;
      output: GetIntrospectionSchemaCommandOutput;
    };
  };
}
