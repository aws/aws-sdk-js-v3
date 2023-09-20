// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { GetIntrospectionSchemaRequest, GetIntrospectionSchemaResponse } from "../models/models_0";
import { de_GetIntrospectionSchemaCommand, se_GetIntrospectionSchemaCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Retrieves the introspection schema for a GraphQL API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetIntrospectionSchemaCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetIntrospectionSchemaCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // GetIntrospectionSchemaRequest
 *   apiId: "STRING_VALUE", // required
 *   format: "SDL" || "JSON", // required
 *   includeDirectives: true || false,
 * };
 * const command = new GetIntrospectionSchemaCommand(input);
 * const response = await client.send(command);
 * // { // GetIntrospectionSchemaResponse
 * //   schema: "BLOB_VALUE",
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
 */
export class GetIntrospectionSchemaCommand extends $Command<
  GetIntrospectionSchemaCommandInput,
  GetIntrospectionSchemaCommandOutput,
  AppSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetIntrospectionSchemaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIntrospectionSchemaCommandInput, GetIntrospectionSchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIntrospectionSchemaCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "GetIntrospectionSchemaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDeepdishControlPlaneService",
        operation: "GetIntrospectionSchema",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetIntrospectionSchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetIntrospectionSchemaCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIntrospectionSchemaCommandOutput> {
    return de_GetIntrospectionSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
