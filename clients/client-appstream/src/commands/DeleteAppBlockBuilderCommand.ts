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
} from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DeleteAppBlockBuilderRequest, DeleteAppBlockBuilderResult } from "../models/models_0";
import { de_DeleteAppBlockBuilderCommand, se_DeleteAppBlockBuilderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAppBlockBuilderCommand}.
 */
export interface DeleteAppBlockBuilderCommandInput extends DeleteAppBlockBuilderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppBlockBuilderCommand}.
 */
export interface DeleteAppBlockBuilderCommandOutput extends DeleteAppBlockBuilderResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes an app block builder.</p>
 *          <p>An app block builder can only be deleted when it has no association with an app
 *             block.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteAppBlockBuilderCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteAppBlockBuilderCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // DeleteAppBlockBuilderRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppBlockBuilderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppBlockBuilderCommandInput - {@link DeleteAppBlockBuilderCommandInput}
 * @returns {@link DeleteAppBlockBuilderCommandOutput}
 * @see {@link DeleteAppBlockBuilderCommandInput} for command's `input` shape.
 * @see {@link DeleteAppBlockBuilderCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 */
export class DeleteAppBlockBuilderCommand extends $Command<
  DeleteAppBlockBuilderCommandInput,
  DeleteAppBlockBuilderCommandOutput,
  AppStreamClientResolvedConfig
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
  constructor(readonly input: DeleteAppBlockBuilderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAppBlockBuilderCommandInput, DeleteAppBlockBuilderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAppBlockBuilderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "DeleteAppBlockBuilderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DeleteAppBlockBuilderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteAppBlockBuilderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAppBlockBuilderCommandOutput> {
    return de_DeleteAppBlockBuilderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
