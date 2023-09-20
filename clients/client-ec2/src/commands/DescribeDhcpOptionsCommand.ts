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
import { DescribeDhcpOptionsRequest, DescribeDhcpOptionsResult } from "../models/models_3";
import { de_DescribeDhcpOptionsCommand, se_DescribeDhcpOptionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDhcpOptionsCommand}.
 */
export interface DescribeDhcpOptionsCommandInput extends DescribeDhcpOptionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDhcpOptionsCommand}.
 */
export interface DescribeDhcpOptionsCommandOutput extends DescribeDhcpOptionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more of your DHCP options sets.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP options sets</a> in the
 * 				<i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeDhcpOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeDhcpOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeDhcpOptionsRequest
 *   DhcpOptionsIds: [ // DhcpOptionsIdStringList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeDhcpOptionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDhcpOptionsResult
 * //   DhcpOptions: [ // DhcpOptionsList
 * //     { // DhcpOptions
 * //       DhcpConfigurations: [ // DhcpConfigurationList
 * //         { // DhcpConfiguration
 * //           Key: "STRING_VALUE",
 * //           Values: [ // DhcpConfigurationValueList
 * //             { // AttributeValue
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       DhcpOptionsId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDhcpOptionsCommandInput - {@link DescribeDhcpOptionsCommandInput}
 * @returns {@link DescribeDhcpOptionsCommandOutput}
 * @see {@link DescribeDhcpOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDhcpOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe a DHCP options set
 * ```javascript
 * // This example describes the specified DHCP options set.
 * const input = {
 *   "DhcpOptionsIds": [
 *     "dopt-d9070ebb"
 *   ]
 * };
 * const command = new DescribeDhcpOptionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DhcpOptions": [
 *     {
 *       "DhcpConfigurations": [
 *         {
 *           "Key": "domain-name-servers",
 *           "Values": [
 *             {
 *               "Value": "10.2.5.2"
 *             },
 *             {
 *               "Value": "10.2.5.1"
 *             }
 *           ]
 *         }
 *       ],
 *       "DhcpOptionsId": "dopt-d9070ebb"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-dhcp-options-1
 * ```
 *
 */
export class DescribeDhcpOptionsCommand extends $Command<
  DescribeDhcpOptionsCommandInput,
  DescribeDhcpOptionsCommandOutput,
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
  constructor(readonly input: DescribeDhcpOptionsCommandInput) {
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
  ): Handler<DescribeDhcpOptionsCommandInput, DescribeDhcpOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDhcpOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeDhcpOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeDhcpOptions",
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
  private serialize(input: DescribeDhcpOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDhcpOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDhcpOptionsCommandOutput> {
    return de_DescribeDhcpOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
