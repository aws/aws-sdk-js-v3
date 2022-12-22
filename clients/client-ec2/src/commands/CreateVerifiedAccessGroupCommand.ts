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
  CreateVerifiedAccessGroupRequest,
  CreateVerifiedAccessGroupRequestFilterSensitiveLog,
  CreateVerifiedAccessGroupResult,
  CreateVerifiedAccessGroupResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2CreateVerifiedAccessGroupCommand,
  serializeAws_ec2CreateVerifiedAccessGroupCommand,
} from "../protocols/Aws_ec2";

export interface CreateVerifiedAccessGroupCommandInput extends CreateVerifiedAccessGroupRequest {}
export interface CreateVerifiedAccessGroupCommandOutput extends CreateVerifiedAccessGroupResult, __MetadataBearer {}

/**
 * <p>An Amazon Web Services Verified Access group is a collection of Amazon Web Services Verified Access endpoints who's associated applications have
 *          similar security requirements. Each instance within an Amazon Web Services Verified Access group shares an Amazon Web Services Verified Access policy. For
 *          example, you can group all Amazon Web Services Verified Access instances associated with “sales” applications together and
 *          use one common Amazon Web Services Verified Access policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVerifiedAccessGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVerifiedAccessGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVerifiedAccessGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVerifiedAccessGroupCommandInput} for command's `input` shape.
 * @see {@link CreateVerifiedAccessGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateVerifiedAccessGroupCommand extends $Command<
  CreateVerifiedAccessGroupCommandInput,
  CreateVerifiedAccessGroupCommandOutput,
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

  constructor(readonly input: CreateVerifiedAccessGroupCommandInput) {
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
  ): Handler<CreateVerifiedAccessGroupCommandInput, CreateVerifiedAccessGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVerifiedAccessGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateVerifiedAccessGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVerifiedAccessGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateVerifiedAccessGroupResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVerifiedAccessGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateVerifiedAccessGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVerifiedAccessGroupCommandOutput> {
    return deserializeAws_ec2CreateVerifiedAccessGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
