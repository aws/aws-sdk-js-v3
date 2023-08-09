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

import { DeleteAppInputSourceRequest, DeleteAppInputSourceResponse } from "../models/models_0";
import { de_DeleteAppInputSourceCommand, se_DeleteAppInputSourceCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAppInputSourceCommand}.
 */
export interface DeleteAppInputSourceCommandInput extends DeleteAppInputSourceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppInputSourceCommand}.
 */
export interface DeleteAppInputSourceCommandOutput extends DeleteAppInputSourceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the input source and all of its imported resources from the Resilience Hub application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DeleteAppInputSourceCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DeleteAppInputSourceCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // DeleteAppInputSourceRequest
 *   appArn: "STRING_VALUE", // required
 *   sourceArn: "STRING_VALUE",
 *   terraformSource: { // TerraformSource
 *     s3StateFileUrl: "STRING_VALUE", // required
 *   },
 *   clientToken: "STRING_VALUE",
 *   eksSourceClusterNamespace: { // EksSourceClusterNamespace
 *     eksClusterArn: "STRING_VALUE", // required
 *     namespace: "STRING_VALUE", // required
 *   },
 * };
 * const command = new DeleteAppInputSourceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAppInputSourceResponse
 * //   appArn: "STRING_VALUE",
 * //   appInputSource: { // AppInputSource
 * //     sourceName: "STRING_VALUE",
 * //     importType: "STRING_VALUE", // required
 * //     sourceArn: "STRING_VALUE",
 * //     terraformSource: { // TerraformSource
 * //       s3StateFileUrl: "STRING_VALUE", // required
 * //     },
 * //     resourceCount: Number("int"),
 * //     eksSourceClusterNamespace: { // EksSourceClusterNamespace
 * //       eksClusterArn: "STRING_VALUE", // required
 * //       namespace: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteAppInputSourceCommandInput - {@link DeleteAppInputSourceCommandInput}
 * @returns {@link DeleteAppInputSourceCommandOutput}
 * @see {@link DeleteAppInputSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteAppInputSourceCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 */
export class DeleteAppInputSourceCommand extends $Command<
  DeleteAppInputSourceCommandInput,
  DeleteAppInputSourceCommandOutput,
  ResiliencehubClientResolvedConfig
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
  constructor(readonly input: DeleteAppInputSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAppInputSourceCommandInput, DeleteAppInputSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAppInputSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "DeleteAppInputSourceCommand";
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
  private serialize(input: DeleteAppInputSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteAppInputSourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAppInputSourceCommandOutput> {
    return de_DeleteAppInputSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
