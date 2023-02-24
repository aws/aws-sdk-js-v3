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
  PutSolFunctionPackageContentInput,
  PutSolFunctionPackageContentInputFilterSensitiveLog,
  PutSolFunctionPackageContentOutput,
  PutSolFunctionPackageContentOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutSolFunctionPackageContentCommand,
  serializeAws_restJson1PutSolFunctionPackageContentCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

export interface PutSolFunctionPackageContentCommandInput extends PutSolFunctionPackageContentInput {}
export interface PutSolFunctionPackageContentCommandOutput
  extends PutSolFunctionPackageContentOutput,
    __MetadataBearer {}

/**
 * <p>Uploads the contents of a function package.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, PutSolFunctionPackageContentCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, PutSolFunctionPackageContentCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const command = new PutSolFunctionPackageContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSolFunctionPackageContentCommandInput} for command's `input` shape.
 * @see {@link PutSolFunctionPackageContentCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 */
export class PutSolFunctionPackageContentCommand extends $Command<
  PutSolFunctionPackageContentCommandInput,
  PutSolFunctionPackageContentCommandOutput,
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

  constructor(readonly input: PutSolFunctionPackageContentCommandInput) {
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
  ): Handler<PutSolFunctionPackageContentCommandInput, PutSolFunctionPackageContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutSolFunctionPackageContentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "PutSolFunctionPackageContentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSolFunctionPackageContentInputFilterSensitiveLog,
      outputFilterSensitiveLog: PutSolFunctionPackageContentOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutSolFunctionPackageContentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutSolFunctionPackageContentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutSolFunctionPackageContentCommandOutput> {
    return deserializeAws_restJson1PutSolFunctionPackageContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
