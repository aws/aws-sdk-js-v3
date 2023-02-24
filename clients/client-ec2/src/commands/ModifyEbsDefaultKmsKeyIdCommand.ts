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
  ModifyEbsDefaultKmsKeyIdRequest,
  ModifyEbsDefaultKmsKeyIdRequestFilterSensitiveLog,
  ModifyEbsDefaultKmsKeyIdResult,
  ModifyEbsDefaultKmsKeyIdResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2ModifyEbsDefaultKmsKeyIdCommand,
  serializeAws_ec2ModifyEbsDefaultKmsKeyIdCommand,
} from "../protocols/Aws_ec2";

export interface ModifyEbsDefaultKmsKeyIdCommandInput extends ModifyEbsDefaultKmsKeyIdRequest {}
export interface ModifyEbsDefaultKmsKeyIdCommandOutput extends ModifyEbsDefaultKmsKeyIdResult, __MetadataBearer {}

/**
 * <p>Changes the default KMS key for EBS encryption by default for your account in this Region.</p>
 *          <p>Amazon Web Services creates a unique Amazon Web Services managed KMS key in each Region for use with encryption by default. If
 *       you change the default KMS key to a symmetric customer managed KMS key, it is used instead of the Amazon Web Services
 *       managed KMS key. To reset the default KMS key to the Amazon Web Services managed KMS key for EBS, use <a>ResetEbsDefaultKmsKeyId</a>. Amazon EBS does not support asymmetric KMS keys.</p>
 *          <p>If you delete or disable the customer managed KMS key that you specified for use with
 *       encryption by default, your instances will fail to launch.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyEbsDefaultKmsKeyIdCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyEbsDefaultKmsKeyIdCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyEbsDefaultKmsKeyIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyEbsDefaultKmsKeyIdCommandInput} for command's `input` shape.
 * @see {@link ModifyEbsDefaultKmsKeyIdCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ModifyEbsDefaultKmsKeyIdCommand extends $Command<
  ModifyEbsDefaultKmsKeyIdCommandInput,
  ModifyEbsDefaultKmsKeyIdCommandOutput,
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

  constructor(readonly input: ModifyEbsDefaultKmsKeyIdCommandInput) {
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
  ): Handler<ModifyEbsDefaultKmsKeyIdCommandInput, ModifyEbsDefaultKmsKeyIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyEbsDefaultKmsKeyIdCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyEbsDefaultKmsKeyIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyEbsDefaultKmsKeyIdRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyEbsDefaultKmsKeyIdResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyEbsDefaultKmsKeyIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyEbsDefaultKmsKeyIdCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyEbsDefaultKmsKeyIdCommandOutput> {
    return deserializeAws_ec2ModifyEbsDefaultKmsKeyIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
