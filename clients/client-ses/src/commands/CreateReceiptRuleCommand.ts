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
  CreateReceiptRuleRequest,
  CreateReceiptRuleRequestFilterSensitiveLog,
  CreateReceiptRuleResponse,
  CreateReceiptRuleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateReceiptRuleCommand,
  serializeAws_queryCreateReceiptRuleCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * The input for {@link CreateReceiptRuleCommand}.
 */
export interface CreateReceiptRuleCommandInput extends CreateReceiptRuleRequest {}
/**
 * The output of {@link CreateReceiptRuleCommand}.
 */
export interface CreateReceiptRuleCommandOutput extends CreateReceiptRuleResponse, __MetadataBearer {}

/**
 * <p>Creates a receipt rule.</p>
 *         <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, CreateReceiptRuleCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, CreateReceiptRuleCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new CreateReceiptRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReceiptRuleCommandInput} for command's `input` shape.
 * @see {@link CreateReceiptRuleCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>Indicates that a resource could not be created because of a naming conflict.</p>
 *
 * @throws {@link InvalidLambdaFunctionException} (client fault)
 *  <p>Indicates that the provided AWS Lambda function is invalid, or that Amazon SES could
 *             not execute the provided function, possibly due to permissions issues. For information
 *             about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *
 * @throws {@link InvalidS3ConfigurationException} (client fault)
 *  <p>Indicates that the provided Amazon S3 bucket or AWS KMS encryption key is invalid, or
 *             that Amazon SES could not publish to the bucket, possibly due to permissions issues. For
 *             information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *
 * @throws {@link InvalidSnsTopicException} (client fault)
 *  <p>Indicates that the provided Amazon SNS topic is invalid, or that Amazon SES could not
 *             publish to the topic, possibly due to permissions issues. For information about giving
 *             permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Indicates that a resource could not be created because of service limits. For a list
 *             of Amazon SES limits, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html">Amazon SES Developer
 *             Guide</a>.</p>
 *
 * @throws {@link RuleDoesNotExistException} (client fault)
 *  <p>Indicates that the provided receipt rule does not exist.</p>
 *
 * @throws {@link RuleSetDoesNotExistException} (client fault)
 *  <p>Indicates that the provided receipt rule set does not exist.</p>
 *
 *
 * @example CreateReceiptRule
 * ```javascript
 * // The following example creates a new receipt rule:
 * const input = {
 *   "After": "",
 *   "Rule": {
 *     "Actions": [
 *       {
 *         "S3Action": {
 *           "BucketName": "MyBucket",
 *           "ObjectKeyPrefix": "email"
 *         }
 *       }
 *     ],
 *     "Enabled": true,
 *     "Name": "MyRule",
 *     "ScanEnabled": true,
 *     "TlsPolicy": "Optional"
 *   },
 *   "RuleSetName": "MyRuleSet"
 * };
 * const command = new CreateReceiptRuleCommand(input);
 * await client.send(command);
 * // example id: createreceiptrule-1469122946515
 * ```
 *
 */
export class CreateReceiptRuleCommand extends $Command<
  CreateReceiptRuleCommandInput,
  CreateReceiptRuleCommandOutput,
  SESClientResolvedConfig
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

  constructor(readonly input: CreateReceiptRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReceiptRuleCommandInput, CreateReceiptRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateReceiptRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "CreateReceiptRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReceiptRuleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateReceiptRuleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateReceiptRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateReceiptRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateReceiptRuleCommandOutput> {
    return deserializeAws_queryCreateReceiptRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
