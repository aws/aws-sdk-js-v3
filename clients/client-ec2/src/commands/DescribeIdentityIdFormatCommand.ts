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
import { DescribeIdentityIdFormatRequest, DescribeIdentityIdFormatResult } from "../models/models_3";
import { de_DescribeIdentityIdFormatCommand, se_DescribeIdentityIdFormatCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeIdentityIdFormatCommand}.
 */
export interface DescribeIdentityIdFormatCommandInput extends DescribeIdentityIdFormatRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIdentityIdFormatCommand}.
 */
export interface DescribeIdentityIdFormatCommandOutput extends DescribeIdentityIdFormatResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the ID format settings for resources for the specified IAM user, IAM role, or root
 *       user. For example, you can view the resource types that are enabled for longer IDs. This request only
 *       returns information about resource types whose ID formats can be modified; it does not return
 *       information about other resource types. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p>
 *          <p>The following resource types support longer IDs: <code>bundle</code> |
 *           <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
 *           <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
 *           <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
 *           <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
 *           <code>network-acl</code> | <code>network-acl-association</code> |
 *           <code>network-interface</code> | <code>network-interface-attachment</code> |
 *           <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
 *           <code>route-table-association</code> | <code>security-group</code> |
 *           <code>snapshot</code> | <code>subnet</code> |
 *           <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
 *           | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
 *           <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
 *          <p>These settings apply to the principal specified in the request. They do not apply to the
 *       principal that makes the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIdentityIdFormatCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIdentityIdFormatCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeIdentityIdFormatRequest
 *   PrincipalArn: "STRING_VALUE", // required
 *   Resource: "STRING_VALUE",
 * };
 * const command = new DescribeIdentityIdFormatCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIdentityIdFormatResult
 * //   Statuses: [ // IdFormatList
 * //     { // IdFormat
 * //       Deadline: new Date("TIMESTAMP"),
 * //       Resource: "STRING_VALUE",
 * //       UseLongIds: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeIdentityIdFormatCommandInput - {@link DescribeIdentityIdFormatCommandInput}
 * @returns {@link DescribeIdentityIdFormatCommandOutput}
 * @see {@link DescribeIdentityIdFormatCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityIdFormatCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeIdentityIdFormatCommand extends $Command<
  DescribeIdentityIdFormatCommandInput,
  DescribeIdentityIdFormatCommandOutput,
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
  constructor(readonly input: DescribeIdentityIdFormatCommandInput) {
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
  ): Handler<DescribeIdentityIdFormatCommandInput, DescribeIdentityIdFormatCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeIdentityIdFormatCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeIdentityIdFormatCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeIdentityIdFormat",
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
  private serialize(input: DescribeIdentityIdFormatCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeIdentityIdFormatCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeIdentityIdFormatCommandOutput> {
    return de_DescribeIdentityIdFormatCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
