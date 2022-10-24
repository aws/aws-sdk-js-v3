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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import {
  PutBlockPublicAccessConfigurationInput,
  PutBlockPublicAccessConfigurationInputFilterSensitiveLog,
  PutBlockPublicAccessConfigurationOutput,
  PutBlockPublicAccessConfigurationOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutBlockPublicAccessConfigurationCommand,
  serializeAws_json1_1PutBlockPublicAccessConfigurationCommand,
} from "../protocols/Aws_json1_1";

export interface PutBlockPublicAccessConfigurationCommandInput extends PutBlockPublicAccessConfigurationInput {}
export interface PutBlockPublicAccessConfigurationCommandOutput
  extends PutBlockPublicAccessConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Creates or updates an Amazon EMR block public access configuration for your
 *             Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block
 *             Public Access for Amazon EMR</a> in the <i>Amazon EMR
 *             Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, PutBlockPublicAccessConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, PutBlockPublicAccessConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new PutBlockPublicAccessConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBlockPublicAccessConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutBlockPublicAccessConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 */
export class PutBlockPublicAccessConfigurationCommand extends $Command<
  PutBlockPublicAccessConfigurationCommandInput,
  PutBlockPublicAccessConfigurationCommandOutput,
  EMRClientResolvedConfig
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

  constructor(readonly input: PutBlockPublicAccessConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutBlockPublicAccessConfigurationCommandInput, PutBlockPublicAccessConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutBlockPublicAccessConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "PutBlockPublicAccessConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutBlockPublicAccessConfigurationInputFilterSensitiveLog,
      outputFilterSensitiveLog: PutBlockPublicAccessConfigurationOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutBlockPublicAccessConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutBlockPublicAccessConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutBlockPublicAccessConfigurationCommandOutput> {
    return deserializeAws_json1_1PutBlockPublicAccessConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
