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

import { DeleteSolFunctionPackageInput, DeleteSolFunctionPackageInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteSolFunctionPackageCommand,
  serializeAws_restJson1DeleteSolFunctionPackageCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

export interface DeleteSolFunctionPackageCommandInput extends DeleteSolFunctionPackageInput {}
export interface DeleteSolFunctionPackageCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a function package.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 *          <p>To delete a function package, the package must be in a disabled state. To disable a function package, see <a href="https://docs.aws.amazon.com/TNB/latest/APIReference/API_UpdateSolFunctionPackage.html">UpdateSolFunctionPackage</a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, DeleteSolFunctionPackageCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, DeleteSolFunctionPackageCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const command = new DeleteSolFunctionPackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSolFunctionPackageCommandInput} for command's `input` shape.
 * @see {@link DeleteSolFunctionPackageCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 */
export class DeleteSolFunctionPackageCommand extends $Command<
  DeleteSolFunctionPackageCommandInput,
  DeleteSolFunctionPackageCommandOutput,
  TnbClientResolvedConfig
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

  constructor(readonly input: DeleteSolFunctionPackageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TnbClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSolFunctionPackageCommandInput, DeleteSolFunctionPackageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSolFunctionPackageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "DeleteSolFunctionPackageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSolFunctionPackageInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSolFunctionPackageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteSolFunctionPackageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSolFunctionPackageCommandOutput> {
    return deserializeAws_restJson1DeleteSolFunctionPackageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
