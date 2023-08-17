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
import {
  DescribeVpcEndpointServicePermissionsRequest,
  DescribeVpcEndpointServicePermissionsResult,
} from "../models/models_5";
import {
  de_DescribeVpcEndpointServicePermissionsCommand,
  se_DescribeVpcEndpointServicePermissionsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcEndpointServicePermissionsCommand}.
 */
export interface DescribeVpcEndpointServicePermissionsCommandInput
  extends DescribeVpcEndpointServicePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcEndpointServicePermissionsCommand}.
 */
export interface DescribeVpcEndpointServicePermissionsCommandOutput
  extends DescribeVpcEndpointServicePermissionsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the principals (service consumers) that are permitted to discover your VPC
 *             endpoint service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointServicePermissionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointServicePermissionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcEndpointServicePermissionsRequest
 *   DryRun: true || false,
 *   ServiceId: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeVpcEndpointServicePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcEndpointServicePermissionsResult
 * //   AllowedPrincipals: [ // AllowedPrincipalSet
 * //     { // AllowedPrincipal
 * //       PrincipalType: "All" || "Service" || "OrganizationUnit" || "Account" || "User" || "Role",
 * //       Principal: "STRING_VALUE",
 * //       ServicePermissionId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ServiceId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVpcEndpointServicePermissionsCommandInput - {@link DescribeVpcEndpointServicePermissionsCommandInput}
 * @returns {@link DescribeVpcEndpointServicePermissionsCommandOutput}
 * @see {@link DescribeVpcEndpointServicePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointServicePermissionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeVpcEndpointServicePermissionsCommand extends $Command<
  DescribeVpcEndpointServicePermissionsCommandInput,
  DescribeVpcEndpointServicePermissionsCommandOutput,
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
  constructor(readonly input: DescribeVpcEndpointServicePermissionsCommandInput) {
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
  ): Handler<DescribeVpcEndpointServicePermissionsCommandInput, DescribeVpcEndpointServicePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVpcEndpointServicePermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcEndpointServicePermissionsCommand";
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
    input: DescribeVpcEndpointServicePermissionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeVpcEndpointServicePermissionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcEndpointServicePermissionsCommandOutput> {
    return de_DescribeVpcEndpointServicePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
