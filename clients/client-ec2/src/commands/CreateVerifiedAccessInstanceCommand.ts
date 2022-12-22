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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  CreateVerifiedAccessInstanceRequest,
  CreateVerifiedAccessInstanceRequestFilterSensitiveLog,
  CreateVerifiedAccessInstanceResult,
  CreateVerifiedAccessInstanceResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2CreateVerifiedAccessInstanceCommand,
  serializeAws_ec2CreateVerifiedAccessInstanceCommand,
} from "../protocols/Aws_ec2";

export interface CreateVerifiedAccessInstanceCommandInput extends CreateVerifiedAccessInstanceRequest {}
export interface CreateVerifiedAccessInstanceCommandOutput
  extends CreateVerifiedAccessInstanceResult,
    __MetadataBearer {}

/**
 * <p>An Amazon Web Services Verified Access instance is a regional entity that evaluates application requests and grants
 *          access only when your security requirements are met.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVerifiedAccessInstanceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVerifiedAccessInstanceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVerifiedAccessInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVerifiedAccessInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateVerifiedAccessInstanceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateVerifiedAccessInstanceCommand extends $Command<
  CreateVerifiedAccessInstanceCommandInput,
  CreateVerifiedAccessInstanceCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: CreateVerifiedAccessInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVerifiedAccessInstanceCommandInput, CreateVerifiedAccessInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVerifiedAccessInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateVerifiedAccessInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVerifiedAccessInstanceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateVerifiedAccessInstanceResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVerifiedAccessInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateVerifiedAccessInstanceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVerifiedAccessInstanceCommandOutput> {
    return deserializeAws_ec2CreateVerifiedAccessInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
