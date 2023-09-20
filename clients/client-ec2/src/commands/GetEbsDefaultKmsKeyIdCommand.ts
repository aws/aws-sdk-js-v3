// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetEbsDefaultKmsKeyIdRequest, GetEbsDefaultKmsKeyIdResult } from "../models/models_5";
import { de_GetEbsDefaultKmsKeyIdCommand, se_GetEbsDefaultKmsKeyIdCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEbsDefaultKmsKeyIdCommand}.
 */
export interface GetEbsDefaultKmsKeyIdCommandInput extends GetEbsDefaultKmsKeyIdRequest {}
/**
 * @public
 *
 * The output of {@link GetEbsDefaultKmsKeyIdCommand}.
 */
export interface GetEbsDefaultKmsKeyIdCommandOutput extends GetEbsDefaultKmsKeyIdResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the default KMS key for EBS encryption by default for your account in this Region.
 *   		You can change the default KMS key for encryption by default using <a>ModifyEbsDefaultKmsKeyId</a> or
 *       <a>ResetEbsDefaultKmsKeyId</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetEbsDefaultKmsKeyIdCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetEbsDefaultKmsKeyIdCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetEbsDefaultKmsKeyIdRequest
 *   DryRun: true || false,
 * };
 * const command = new GetEbsDefaultKmsKeyIdCommand(input);
 * const response = await client.send(command);
 * // { // GetEbsDefaultKmsKeyIdResult
 * //   KmsKeyId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEbsDefaultKmsKeyIdCommandInput - {@link GetEbsDefaultKmsKeyIdCommandInput}
 * @returns {@link GetEbsDefaultKmsKeyIdCommandOutput}
 * @see {@link GetEbsDefaultKmsKeyIdCommandInput} for command's `input` shape.
 * @see {@link GetEbsDefaultKmsKeyIdCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetEbsDefaultKmsKeyIdCommand extends $Command<
  GetEbsDefaultKmsKeyIdCommandInput,
  GetEbsDefaultKmsKeyIdCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: GetEbsDefaultKmsKeyIdCommandInput) {
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
  ): Handler<GetEbsDefaultKmsKeyIdCommandInput, GetEbsDefaultKmsKeyIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEbsDefaultKmsKeyIdCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetEbsDefaultKmsKeyIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetEbsDefaultKmsKeyId",
      },
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
  private serialize(input: GetEbsDefaultKmsKeyIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEbsDefaultKmsKeyIdCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEbsDefaultKmsKeyIdCommandOutput> {
    return de_GetEbsDefaultKmsKeyIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
