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
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeClassicLinkInstancesRequest, DescribeClassicLinkInstancesResult } from "../models/models_3";
import { de_DescribeClassicLinkInstancesCommand, se_DescribeClassicLinkInstancesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeClassicLinkInstancesCommand}.
 */
export interface DescribeClassicLinkInstancesCommandInput extends DescribeClassicLinkInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClassicLinkInstancesCommand}.
 */
export interface DescribeClassicLinkInstancesCommandOutput
  extends DescribeClassicLinkInstancesResult,
    __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Describes one or more of your linked EC2-Classic instances. This request only returns
 * 			information about EC2-Classic instances linked to a VPC through ClassicLink. You cannot
 * 			use this request to return information about other instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClassicLinkInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClassicLinkInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeClassicLinkInstancesRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 *   InstanceIds: [ // InstanceIdStringList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeClassicLinkInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClassicLinkInstancesResult
 * //   Instances: [ // ClassicLinkInstanceList
 * //     { // ClassicLinkInstance
 * //       Groups: [ // GroupIdentifierList
 * //         { // GroupIdentifier
 * //           GroupName: "STRING_VALUE",
 * //           GroupId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       InstanceId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VpcId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeClassicLinkInstancesCommandInput - {@link DescribeClassicLinkInstancesCommandInput}
 * @returns {@link DescribeClassicLinkInstancesCommandOutput}
 * @see {@link DescribeClassicLinkInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeClassicLinkInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeClassicLinkInstancesCommand extends $Command<
  DescribeClassicLinkInstancesCommandInput,
  DescribeClassicLinkInstancesCommandOutput,
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
  constructor(readonly input: DescribeClassicLinkInstancesCommandInput) {
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
  ): Handler<DescribeClassicLinkInstancesCommandInput, DescribeClassicLinkInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClassicLinkInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeClassicLinkInstancesCommand";
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
  private serialize(input: DescribeClassicLinkInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeClassicLinkInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClassicLinkInstancesCommandOutput> {
    return de_DescribeClassicLinkInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
