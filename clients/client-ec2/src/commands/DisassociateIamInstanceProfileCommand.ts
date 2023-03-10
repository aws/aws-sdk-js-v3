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
  DisassociateIamInstanceProfileRequest,
  DisassociateIamInstanceProfileRequestFilterSensitiveLog,
  DisassociateIamInstanceProfileResult,
  DisassociateIamInstanceProfileResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2DisassociateIamInstanceProfileCommand,
  serializeAws_ec2DisassociateIamInstanceProfileCommand,
} from "../protocols/Aws_ec2";

/**
 * The input for {@link DisassociateIamInstanceProfileCommand}.
 */
export interface DisassociateIamInstanceProfileCommandInput extends DisassociateIamInstanceProfileRequest {}
/**
 * The output of {@link DisassociateIamInstanceProfileCommand}.
 */
export interface DisassociateIamInstanceProfileCommandOutput
  extends DisassociateIamInstanceProfileResult,
    __MetadataBearer {}

/**
 * <p>Disassociates an IAM instance profile from a running or stopped instance.</p>
 *          <p>Use <a>DescribeIamInstanceProfileAssociations</a> to get the association
 *             ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateIamInstanceProfileCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateIamInstanceProfileCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateIamInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateIamInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link DisassociateIamInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To disassociate an IAM instance profile
 * ```javascript
 * // This example disassociates the specified IAM instance profile from an instance.
 * const input = {
 *   "AssociationId": "iip-assoc-05020b59952902f5f"
 * };
 * const command = new DisassociateIamInstanceProfileCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "IamInstanceProfileAssociation": {
 *     "AssociationId": "iip-assoc-05020b59952902f5f",
 *     "IamInstanceProfile": {
 *       "Arn": "arn:aws:iam::123456789012:instance-profile/admin-role",
 *       "Id": "AIPAI5IVIHMFFYY2DKV5Y"
 *     },
 *     "InstanceId": "i-123456789abcde123",
 *     "State": "disassociating"
 *   }
 * }
 * *\/
 * // example id: to-disassociate-an-iam-instance-profile-1529355364478
 * ```
 *
 */
export class DisassociateIamInstanceProfileCommand extends $Command<
  DisassociateIamInstanceProfileCommandInput,
  DisassociateIamInstanceProfileCommandOutput,
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

  constructor(readonly input: DisassociateIamInstanceProfileCommandInput) {
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
  ): Handler<DisassociateIamInstanceProfileCommandInput, DisassociateIamInstanceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateIamInstanceProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateIamInstanceProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateIamInstanceProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateIamInstanceProfileResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateIamInstanceProfileCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DisassociateIamInstanceProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateIamInstanceProfileCommandOutput> {
    return deserializeAws_ec2DisassociateIamInstanceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
