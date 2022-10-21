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
  DescribeIamInstanceProfileAssociationsRequest,
  DescribeIamInstanceProfileAssociationsRequestFilterSensitiveLog,
  DescribeIamInstanceProfileAssociationsResult,
  DescribeIamInstanceProfileAssociationsResultFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeIamInstanceProfileAssociationsCommand,
  serializeAws_ec2DescribeIamInstanceProfileAssociationsCommand,
} from "../protocols/Aws_ec2";

export interface DescribeIamInstanceProfileAssociationsCommandInput
  extends DescribeIamInstanceProfileAssociationsRequest {}
export interface DescribeIamInstanceProfileAssociationsCommandOutput
  extends DescribeIamInstanceProfileAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Describes your IAM instance profile associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIamInstanceProfileAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIamInstanceProfileAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeIamInstanceProfileAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIamInstanceProfileAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeIamInstanceProfileAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeIamInstanceProfileAssociationsCommand extends $Command<
  DescribeIamInstanceProfileAssociationsCommandInput,
  DescribeIamInstanceProfileAssociationsCommandOutput,
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

  constructor(readonly input: DescribeIamInstanceProfileAssociationsCommandInput) {
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
  ): Handler<DescribeIamInstanceProfileAssociationsCommandInput, DescribeIamInstanceProfileAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeIamInstanceProfileAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeIamInstanceProfileAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeIamInstanceProfileAssociationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeIamInstanceProfileAssociationsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeIamInstanceProfileAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeIamInstanceProfileAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeIamInstanceProfileAssociationsCommandOutput> {
    return deserializeAws_ec2DescribeIamInstanceProfileAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
