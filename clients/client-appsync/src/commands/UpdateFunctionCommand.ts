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
import { UpdateFunctionRequest, UpdateFunctionResponse } from "../models/models_0";
import { de_UpdateFunctionCommand, se_UpdateFunctionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateFunctionCommand}.
 */
export interface UpdateFunctionCommandInput extends UpdateFunctionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFunctionCommand}.
 */
export interface UpdateFunctionCommandOutput extends UpdateFunctionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a <code>Function</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateFunctionCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateFunctionCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // UpdateFunctionRequest
 *   apiId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   functionId: "STRING_VALUE", // required
 *   dataSourceName: "STRING_VALUE", // required
 *   requestMappingTemplate: "STRING_VALUE",
 *   responseMappingTemplate: "STRING_VALUE",
 *   functionVersion: "STRING_VALUE",
 *   syncConfig: { // SyncConfig
 *     conflictHandler: "OPTIMISTIC_CONCURRENCY" || "LAMBDA" || "AUTOMERGE" || "NONE",
 *     conflictDetection: "VERSION" || "NONE",
 *     lambdaConflictHandlerConfig: { // LambdaConflictHandlerConfig
 *       lambdaConflictHandlerArn: "STRING_VALUE",
 *     },
 *   },
 *   maxBatchSize: Number("int"),
 *   runtime: { // AppSyncRuntime
 *     name: "APPSYNC_JS", // required
 *     runtimeVersion: "STRING_VALUE", // required
 *   },
 *   code: "STRING_VALUE",
 * };
 * const command = new UpdateFunctionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFunctionResponse
 * //   functionConfiguration: { // FunctionConfiguration
 * //     functionId: "STRING_VALUE",
 * //     functionArn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     dataSourceName: "STRING_VALUE",
 * //     requestMappingTemplate: "STRING_VALUE",
 * //     responseMappingTemplate: "STRING_VALUE",
 * //     functionVersion: "STRING_VALUE",
 * //     syncConfig: { // SyncConfig
 * //       conflictHandler: "OPTIMISTIC_CONCURRENCY" || "LAMBDA" || "AUTOMERGE" || "NONE",
 * //       conflictDetection: "VERSION" || "NONE",
 * //       lambdaConflictHandlerConfig: { // LambdaConflictHandlerConfig
 * //         lambdaConflictHandlerArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     maxBatchSize: Number("int"),
 * //     runtime: { // AppSyncRuntime
 * //       name: "APPSYNC_JS", // required
 * //       runtimeVersion: "STRING_VALUE", // required
 * //     },
 * //     code: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateFunctionCommandInput - {@link UpdateFunctionCommandInput}
 * @returns {@link UpdateFunctionCommandOutput}
 * @see {@link UpdateFunctionCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
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
export class UpdateFunctionCommand extends $Command<
  UpdateFunctionCommandInput,
  UpdateFunctionCommandOutput,
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
  constructor(readonly input: UpdateFunctionCommandInput) {
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
  ): Handler<UpdateFunctionCommandInput, UpdateFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFunctionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "UpdateFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDeepdishControlPlaneService",
        operation: "UpdateFunction",
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
  private serialize(input: UpdateFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateFunctionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFunctionCommandOutput> {
    return de_UpdateFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
