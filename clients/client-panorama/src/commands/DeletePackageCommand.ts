// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  DeletePackageRequest,
  DeletePackageRequestFilterSensitiveLog,
  DeletePackageResponse,
  DeletePackageResponseFilterSensitiveLog,
} from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import {
  deserializeAws_restJson1DeletePackageCommand,
  serializeAws_restJson1DeletePackageCommand,
} from "../protocols/Aws_restJson1";

export interface DeletePackageCommandInput extends DeletePackageRequest {}
export interface DeletePackageCommandOutput extends DeletePackageResponse, __MetadataBearer {}

/**
 * <p>Deletes a package.</p>
 *          <note>
 *             <p>To delete a package, you need permission to call <code>s3:DeleteObject</code> in addition to permissions for
 *         the AWS Panorama API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DeletePackageCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DeletePackageCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const command = new DeletePackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePackageCommandInput} for command's `input` shape.
 * @see {@link DeletePackageCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 */
export class DeletePackageCommand extends $Command<
  DeletePackageCommandInput,
  DeletePackageCommandOutput,
  PanoramaClientResolvedConfig
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

  constructor(readonly input: DeletePackageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PanoramaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePackageCommandInput, DeletePackageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeletePackageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "DeletePackageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePackageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeletePackageResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePackageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeletePackageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePackageCommandOutput> {
    return deserializeAws_restJson1DeletePackageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
