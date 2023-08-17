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
  DescribeNetworkInterfacePermissionsRequest,
  DescribeNetworkInterfacePermissionsResult,
} from "../models/models_4";
import {
  de_DescribeNetworkInterfacePermissionsCommand,
  se_DescribeNetworkInterfacePermissionsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeNetworkInterfacePermissionsCommand}.
 */
export interface DescribeNetworkInterfacePermissionsCommandInput extends DescribeNetworkInterfacePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNetworkInterfacePermissionsCommand}.
 */
export interface DescribeNetworkInterfacePermissionsCommandOutput
  extends DescribeNetworkInterfacePermissionsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the permissions for your network interfaces. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInterfacePermissionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInterfacePermissionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeNetworkInterfacePermissionsRequest
 *   NetworkInterfacePermissionIds: [ // NetworkInterfacePermissionIdList
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
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeNetworkInterfacePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNetworkInterfacePermissionsResult
 * //   NetworkInterfacePermissions: [ // NetworkInterfacePermissionList
 * //     { // NetworkInterfacePermission
 * //       NetworkInterfacePermissionId: "STRING_VALUE",
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       AwsAccountId: "STRING_VALUE",
 * //       AwsService: "STRING_VALUE",
 * //       Permission: "INSTANCE-ATTACH" || "EIP-ASSOCIATE",
 * //       PermissionState: { // NetworkInterfacePermissionState
 * //         State: "pending" || "granted" || "revoking" || "revoked",
 * //         StatusMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNetworkInterfacePermissionsCommandInput - {@link DescribeNetworkInterfacePermissionsCommandInput}
 * @returns {@link DescribeNetworkInterfacePermissionsCommandOutput}
 * @see {@link DescribeNetworkInterfacePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInterfacePermissionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeNetworkInterfacePermissionsCommand extends $Command<
  DescribeNetworkInterfacePermissionsCommandInput,
  DescribeNetworkInterfacePermissionsCommandOutput,
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
  constructor(readonly input: DescribeNetworkInterfacePermissionsCommandInput) {
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
  ): Handler<DescribeNetworkInterfacePermissionsCommandInput, DescribeNetworkInterfacePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNetworkInterfacePermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeNetworkInterfacePermissionsCommand";
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
    input: DescribeNetworkInterfacePermissionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeNetworkInterfacePermissionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNetworkInterfacePermissionsCommandOutput> {
    return de_DescribeNetworkInterfacePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
