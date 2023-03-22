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

import { PutSolNetworkPackageContentInput, PutSolNetworkPackageContentOutput } from "../models/models_0";
import {
  deserializeAws_restJson1PutSolNetworkPackageContentCommand,
  serializeAws_restJson1PutSolNetworkPackageContentCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 *
 * The input for {@link PutSolNetworkPackageContentCommand}.
 */
export interface PutSolNetworkPackageContentCommandInput extends PutSolNetworkPackageContentInput {}
/**
 * @public
 *
 * The output of {@link PutSolNetworkPackageContentCommand}.
 */
export interface PutSolNetworkPackageContentCommandOutput extends PutSolNetworkPackageContentOutput, __MetadataBearer {}

/**
 * @public
 * <p>Uploads the contents of a network package.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, PutSolNetworkPackageContentCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, PutSolNetworkPackageContentCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const command = new PutSolNetworkPackageContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PutSolNetworkPackageContentCommandInput - {@link PutSolNetworkPackageContentCommandInput}
 * @returns {@link PutSolNetworkPackageContentCommandOutput}
 * @see {@link PutSolNetworkPackageContentCommandInput} for command's `input` shape.
 * @see {@link PutSolNetworkPackageContentCommandOutput} for command's `response` shape.
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
export class PutSolNetworkPackageContentCommand extends $Command<
  PutSolNetworkPackageContentCommandInput,
  PutSolNetworkPackageContentCommandOutput,
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
  constructor(readonly input: PutSolNetworkPackageContentCommandInput) {
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
  ): Handler<PutSolNetworkPackageContentCommandInput, PutSolNetworkPackageContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutSolNetworkPackageContentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "PutSolNetworkPackageContentCommand";
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
  private serialize(input: PutSolNetworkPackageContentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutSolNetworkPackageContentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutSolNetworkPackageContentCommandOutput> {
    return deserializeAws_restJson1PutSolNetworkPackageContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
