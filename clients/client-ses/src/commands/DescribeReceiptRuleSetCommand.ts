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
  DescribeReceiptRuleSetRequest,
  DescribeReceiptRuleSetRequestFilterSensitiveLog,
  DescribeReceiptRuleSetResponse,
  DescribeReceiptRuleSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeReceiptRuleSetCommand,
  serializeAws_queryDescribeReceiptRuleSetCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * The input for {@link DescribeReceiptRuleSetCommand}.
 */
export interface DescribeReceiptRuleSetCommandInput extends DescribeReceiptRuleSetRequest {}
/**
 * The output of {@link DescribeReceiptRuleSetCommand}.
 */
export interface DescribeReceiptRuleSetCommandOutput extends DescribeReceiptRuleSetResponse, __MetadataBearer {}

/**
 * <p>Returns the details of the specified receipt rule set.</p>
 *         <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DescribeReceiptRuleSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DescribeReceiptRuleSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new DescribeReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReceiptRuleSetCommandInput} for command's `input` shape.
 * @see {@link DescribeReceiptRuleSetCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @example DescribeReceiptRuleSet
 * ```javascript
 * // The following example returns the metadata and receipt rules of a receipt rule set:
 * const input = {
 *   "RuleSetName": "MyRuleSet"
 * };
 * const command = new DescribeReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Metadata": {
 *     "CreatedTimestamp": "2016-07-15T16:25:59.607Z",
 *     "Name": "MyRuleSet"
 *   },
 *   "Rules": [
 *     {
 *       "Actions": [
 *         {
 *           "S3Action": {
 *             "BucketName": "MyBucket",
 *             "ObjectKeyPrefix": "email"
 *           }
 *         }
 *       ],
 *       "Enabled": true,
 *       "Name": "MyRule",
 *       "ScanEnabled": true,
 *       "TlsPolicy": "Optional"
 *     }
 *   ]
 * }
 * *\/
 * // example id: describereceiptruleset-1469121240385
 * ```
 *
 */
export class DescribeReceiptRuleSetCommand extends $Command<
  DescribeReceiptRuleSetCommandInput,
  DescribeReceiptRuleSetCommandOutput,
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

  constructor(readonly input: DescribeReceiptRuleSetCommandInput) {
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
  ): Handler<DescribeReceiptRuleSetCommandInput, DescribeReceiptRuleSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReceiptRuleSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "DescribeReceiptRuleSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReceiptRuleSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeReceiptRuleSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeReceiptRuleSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeReceiptRuleSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeReceiptRuleSetCommandOutput> {
    return deserializeAws_queryDescribeReceiptRuleSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
