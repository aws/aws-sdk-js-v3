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

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { ListResolversByFunctionRequest, ListResolversByFunctionResponse } from "../models/models_0";
import { de_ListResolversByFunctionCommand, se_ListResolversByFunctionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListResolversByFunctionCommand}.
 */
export interface ListResolversByFunctionCommandInput extends ListResolversByFunctionRequest {}
/**
 * @public
 *
 * The output of {@link ListResolversByFunctionCommand}.
 */
export interface ListResolversByFunctionCommandOutput extends ListResolversByFunctionResponse, __MetadataBearer {}

/**
 * @public
 * <p>List the resolvers that are associated with a specific function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListResolversByFunctionCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListResolversByFunctionCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // ListResolversByFunctionRequest
 *   apiId: "STRING_VALUE", // required
 *   functionId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListResolversByFunctionCommand(input);
 * const response = await client.send(command);
 * // { // ListResolversByFunctionResponse
 * //   resolvers: [ // Resolvers
 * //     { // Resolver
 * //       typeName: "STRING_VALUE",
 * //       fieldName: "STRING_VALUE",
 * //       dataSourceName: "STRING_VALUE",
 * //       resolverArn: "STRING_VALUE",
 * //       requestMappingTemplate: "STRING_VALUE",
 * //       responseMappingTemplate: "STRING_VALUE",
 * //       kind: "UNIT" || "PIPELINE",
 * //       pipelineConfig: { // PipelineConfig
 * //         functions: [ // FunctionsIds
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       syncConfig: { // SyncConfig
 * //         conflictHandler: "OPTIMISTIC_CONCURRENCY" || "LAMBDA" || "AUTOMERGE" || "NONE",
 * //         conflictDetection: "VERSION" || "NONE",
 * //         lambdaConflictHandlerConfig: { // LambdaConflictHandlerConfig
 * //           lambdaConflictHandlerArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       cachingConfig: { // CachingConfig
 * //         ttl: Number("long"), // required
 * //         cachingKeys: [ // CachingKeys
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       maxBatchSize: Number("int"),
 * //       runtime: { // AppSyncRuntime
 * //         name: "APPSYNC_JS", // required
 * //         runtimeVersion: "STRING_VALUE", // required
 * //       },
 * //       code: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResolversByFunctionCommandInput - {@link ListResolversByFunctionCommandInput}
 * @returns {@link ListResolversByFunctionCommandOutput}
 * @see {@link ListResolversByFunctionCommandInput} for command's `input` shape.
 * @see {@link ListResolversByFunctionCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
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
export class ListResolversByFunctionCommand extends $Command<
  ListResolversByFunctionCommandInput,
  ListResolversByFunctionCommandOutput,
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
  constructor(readonly input: ListResolversByFunctionCommandInput) {
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
  ): Handler<ListResolversByFunctionCommandInput, ListResolversByFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResolversByFunctionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "ListResolversByFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDeepdishControlPlaneService",
        operation: "ListResolversByFunction",
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
  private serialize(input: ListResolversByFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListResolversByFunctionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListResolversByFunctionCommandOutput> {
    return de_ListResolversByFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
