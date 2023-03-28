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
import { DescribeKeyPairsRequest, DescribeKeyPairsResult } from "../models/models_4";
import {
  deserializeAws_ec2DescribeKeyPairsCommand,
  serializeAws_ec2DescribeKeyPairsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DescribeKeyPairsCommand}.
 */
export interface DescribeKeyPairsCommandInput extends DescribeKeyPairsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeKeyPairsCommand}.
 */
export interface DescribeKeyPairsCommandOutput extends DescribeKeyPairsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified key pairs or all of your key pairs.</p>
 *          <p>For more information about key pairs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Amazon EC2 key pairs</a>
 * 				in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeKeyPairsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeKeyPairsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeKeyPairsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   KeyNames: [ // KeyNameStringList
 *     "STRING_VALUE",
 *   ],
 *   KeyPairIds: [ // KeyPairIdStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   IncludePublicKey: true || false,
 * };
 * const command = new DescribeKeyPairsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeKeyPairsCommandInput - {@link DescribeKeyPairsCommandInput}
 * @returns {@link DescribeKeyPairsCommandOutput}
 * @see {@link DescribeKeyPairsCommandInput} for command's `input` shape.
 * @see {@link DescribeKeyPairsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To display a key pair
 * ```javascript
 * // This example displays the fingerprint for the specified key.
 * const input = {
 *   "KeyNames": [
 *     "my-key-pair"
 *   ]
 * };
 * const command = new DescribeKeyPairsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "KeyPairs": [
 *     {
 *       "KeyFingerprint": "1f:51:ae:28:bf:89:e9:d8:1f:25:5d:37:2d:7d:b8:ca:9f:f5:f1:6f",
 *       "KeyName": "my-key-pair"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-key-pairs-1
 * ```
 *
 */
export class DescribeKeyPairsCommand extends $Command<
  DescribeKeyPairsCommandInput,
  DescribeKeyPairsCommandOutput,
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
  constructor(readonly input: DescribeKeyPairsCommandInput) {
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
  ): Handler<DescribeKeyPairsCommandInput, DescribeKeyPairsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeKeyPairsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeKeyPairsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DescribeKeyPairsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeKeyPairsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeKeyPairsCommandOutput> {
    return deserializeAws_ec2DescribeKeyPairsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
