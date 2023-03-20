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

import { DeleteSolNetworkPackageInput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteSolNetworkPackageCommand,
  serializeAws_restJson1DeleteSolNetworkPackageCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 *
 * The input for {@link DeleteSolNetworkPackageCommand}.
 */
export interface DeleteSolNetworkPackageCommandInput extends DeleteSolNetworkPackageInput {}
/**
 * @public
 *
 * The output of {@link DeleteSolNetworkPackageCommand}.
 */
export interface DeleteSolNetworkPackageCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes network package.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 *          <p>To delete a network package, the package must be in a disable state. To disable a network package, see <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_UpdateSolNetworkPackage.html">UpdateSolNetworkPackage</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, DeleteSolNetworkPackageCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, DeleteSolNetworkPackageCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const command = new DeleteSolNetworkPackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteSolNetworkPackageCommandInput - {@link DeleteSolNetworkPackageCommandInput}
 * @returns {@link DeleteSolNetworkPackageCommandOutput}
 * @see {@link DeleteSolNetworkPackageCommandInput} for command's `input` shape.
 * @see {@link DeleteSolNetworkPackageCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Insufficient permissions to make request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred. Problem on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception caused by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Unable to process the request because the client provided input failed to satisfy request constraints.</p>
 *
 *
 */
export class DeleteSolNetworkPackageCommand extends $Command<
  DeleteSolNetworkPackageCommandInput,
  DeleteSolNetworkPackageCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DeleteSolNetworkPackageCommandInput) {
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
  ): Handler<DeleteSolNetworkPackageCommandInput, DeleteSolNetworkPackageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSolNetworkPackageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "DeleteSolNetworkPackageCommand";
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
  private serialize(input: DeleteSolNetworkPackageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteSolNetworkPackageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSolNetworkPackageCommandOutput> {
    return deserializeAws_restJson1DeleteSolNetworkPackageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
