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
  ValidateSolNetworkPackageContentInput,
  ValidateSolNetworkPackageContentInputFilterSensitiveLog,
  ValidateSolNetworkPackageContentOutput,
  ValidateSolNetworkPackageContentOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ValidateSolNetworkPackageContentCommand,
  serializeAws_restJson1ValidateSolNetworkPackageContentCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

export interface ValidateSolNetworkPackageContentCommandInput extends ValidateSolNetworkPackageContentInput {}
export interface ValidateSolNetworkPackageContentCommandOutput
  extends ValidateSolNetworkPackageContentOutput,
    __MetadataBearer {}

/**
 * <p>Validates network package content. This can be used as a dry run before uploading network package content with <a href="https://docs.aws.amazon.com/TNB/latest/APIReference/API_PutSolNetworkPackageContent.html">PutSolNetworkPackageContent</a>.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ValidateSolNetworkPackageContentCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ValidateSolNetworkPackageContentCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const command = new ValidateSolNetworkPackageContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidateSolNetworkPackageContentCommandInput} for command's `input` shape.
 * @see {@link ValidateSolNetworkPackageContentCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 */
export class ValidateSolNetworkPackageContentCommand extends $Command<
  ValidateSolNetworkPackageContentCommandInput,
  ValidateSolNetworkPackageContentCommandOutput,
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

  constructor(readonly input: ValidateSolNetworkPackageContentCommandInput) {
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
  ): Handler<ValidateSolNetworkPackageContentCommandInput, ValidateSolNetworkPackageContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ValidateSolNetworkPackageContentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "ValidateSolNetworkPackageContentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ValidateSolNetworkPackageContentInputFilterSensitiveLog,
      outputFilterSensitiveLog: ValidateSolNetworkPackageContentOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ValidateSolNetworkPackageContentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ValidateSolNetworkPackageContentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ValidateSolNetworkPackageContentCommandOutput> {
    return deserializeAws_restJson1ValidateSolNetworkPackageContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
