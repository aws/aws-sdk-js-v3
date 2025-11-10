// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIntrospectionSchemaRequest, GetIntrospectionSchemaResponse } from "../models/models_0";
import { GetIntrospectionSchema } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetIntrospectionSchemaCommandOutput
  extends GetIntrospectionSchemaCommandOutputType,
    __MetadataBearer {}

/**
 * <p>Retrieves the introspection schema for a GraphQL API.</p>
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
 *  <p>The GraphQL schema is not valid.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 *
 * @public
 */
export class GetIntrospectionSchemaCommand extends $Command
  .classBuilder<
    GetIntrospectionSchemaCommandInput,
    GetIntrospectionSchemaCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepdishControlPlaneService", "GetIntrospectionSchema", {})
  .n("AppSyncClient", "GetIntrospectionSchemaCommand")
  .sc(GetIntrospectionSchema)
  .build() {
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
