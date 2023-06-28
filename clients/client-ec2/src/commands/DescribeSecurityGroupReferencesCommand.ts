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
import { DescribeSecurityGroupReferencesRequest, DescribeSecurityGroupReferencesResult } from "../models/models_4";
import {
  de_DescribeSecurityGroupReferencesCommand,
  se_DescribeSecurityGroupReferencesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSecurityGroupReferencesCommand}.
 */
export interface DescribeSecurityGroupReferencesCommandInput extends DescribeSecurityGroupReferencesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSecurityGroupReferencesCommand}.
 */
export interface DescribeSecurityGroupReferencesCommandOutput
  extends DescribeSecurityGroupReferencesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>[VPC only] Describes the VPCs on the other side of a VPC peering connection that are referencing the security groups you've specified in this request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSecurityGroupReferencesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSecurityGroupReferencesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeSecurityGroupReferencesRequest
 *   DryRun: true || false,
 *   GroupId: [ // GroupIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeSecurityGroupReferencesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSecurityGroupReferencesResult
 * //   SecurityGroupReferenceSet: [ // SecurityGroupReferences
 * //     { // SecurityGroupReference
 * //       GroupId: "STRING_VALUE",
 * //       ReferencingVpcId: "STRING_VALUE",
 * //       VpcPeeringConnectionId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSecurityGroupReferencesCommandInput - {@link DescribeSecurityGroupReferencesCommandInput}
 * @returns {@link DescribeSecurityGroupReferencesCommandOutput}
 * @see {@link DescribeSecurityGroupReferencesCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityGroupReferencesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe security group references
 * ```javascript
 * // This example describes the security group references for the specified security group.
 * const input = {
 *   "GroupId": [
 *     "sg-903004f8"
 *   ]
 * };
 * const command = new DescribeSecurityGroupReferencesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SecurityGroupReferenceSet": [
 *     {
 *       "GroupId": "sg-903004f8",
 *       "ReferencingVpcId": "vpc-1a2b3c4d",
 *       "VpcPeeringConnectionId": "pcx-b04deed9"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-security-group-references-1529354312088
 * ```
 *
 */
export class DescribeSecurityGroupReferencesCommand extends $Command<
  DescribeSecurityGroupReferencesCommandInput,
  DescribeSecurityGroupReferencesCommandOutput,
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
  constructor(readonly input: DescribeSecurityGroupReferencesCommandInput) {
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
  ): Handler<DescribeSecurityGroupReferencesCommandInput, DescribeSecurityGroupReferencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSecurityGroupReferencesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSecurityGroupReferencesCommand";
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
    input: DescribeSecurityGroupReferencesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeSecurityGroupReferencesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSecurityGroupReferencesCommandOutput> {
    return de_DescribeSecurityGroupReferencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
