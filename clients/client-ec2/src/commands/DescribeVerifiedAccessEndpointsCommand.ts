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
import { DescribeVerifiedAccessEndpointsRequest, DescribeVerifiedAccessEndpointsResult } from "../models/models_4";
import {
  de_DescribeVerifiedAccessEndpointsCommand,
  se_DescribeVerifiedAccessEndpointsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DescribeVerifiedAccessEndpointsCommand}.
 */
export interface DescribeVerifiedAccessEndpointsCommandInput extends DescribeVerifiedAccessEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVerifiedAccessEndpointsCommand}.
 */
export interface DescribeVerifiedAccessEndpointsCommandOutput
  extends DescribeVerifiedAccessEndpointsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified Amazon Web Services Verified Access endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVerifiedAccessEndpointsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVerifiedAccessEndpointsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVerifiedAccessEndpointsRequest
 *   VerifiedAccessEndpointIds: [ // VerifiedAccessEndpointIdList
 *     "STRING_VALUE",
 *   ],
 *   VerifiedAccessInstanceId: "STRING_VALUE",
 *   VerifiedAccessGroupId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeVerifiedAccessEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeVerifiedAccessEndpointsCommandInput - {@link DescribeVerifiedAccessEndpointsCommandInput}
 * @returns {@link DescribeVerifiedAccessEndpointsCommandOutput}
 * @see {@link DescribeVerifiedAccessEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeVerifiedAccessEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class DescribeVerifiedAccessEndpointsCommand extends $Command<
  DescribeVerifiedAccessEndpointsCommandInput,
  DescribeVerifiedAccessEndpointsCommandOutput,
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
  constructor(readonly input: DescribeVerifiedAccessEndpointsCommandInput) {
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
  ): Handler<DescribeVerifiedAccessEndpointsCommandInput, DescribeVerifiedAccessEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVerifiedAccessEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVerifiedAccessEndpointsCommand";
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
  private serialize(
    input: DescribeVerifiedAccessEndpointsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeVerifiedAccessEndpointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVerifiedAccessEndpointsCommandOutput> {
    return de_DescribeVerifiedAccessEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
