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
import { DeleteInstanceConnectEndpointRequest, DeleteInstanceConnectEndpointResult } from "../models/models_2";
import { de_DeleteInstanceConnectEndpointCommand, se_DeleteInstanceConnectEndpointCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteInstanceConnectEndpointCommand}.
 */
export interface DeleteInstanceConnectEndpointCommandInput extends DeleteInstanceConnectEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInstanceConnectEndpointCommand}.
 */
export interface DeleteInstanceConnectEndpointCommandOutput
  extends DeleteInstanceConnectEndpointResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified EC2 Instance Connect Endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteInstanceConnectEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteInstanceConnectEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteInstanceConnectEndpointRequest
 *   DryRun: true || false,
 *   InstanceConnectEndpointId: "STRING_VALUE", // required
 * };
 * const command = new DeleteInstanceConnectEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInstanceConnectEndpointResult
 * //   InstanceConnectEndpoint: { // Ec2InstanceConnectEndpoint
 * //     OwnerId: "STRING_VALUE",
 * //     InstanceConnectEndpointId: "STRING_VALUE",
 * //     InstanceConnectEndpointArn: "STRING_VALUE",
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "delete-in-progress" || "delete-complete" || "delete-failed",
 * //     StateMessage: "STRING_VALUE",
 * //     DnsName: "STRING_VALUE",
 * //     FipsDnsName: "STRING_VALUE",
 * //     NetworkInterfaceIds: [ // NetworkInterfaceIdSet
 * //       "STRING_VALUE",
 * //     ],
 * //     VpcId: "STRING_VALUE",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     SubnetId: "STRING_VALUE",
 * //     PreserveClientIp: true || false,
 * //     SecurityGroupIds: [ // SecurityGroupIdSet
 * //       "STRING_VALUE",
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteInstanceConnectEndpointCommandInput - {@link DeleteInstanceConnectEndpointCommandInput}
 * @returns {@link DeleteInstanceConnectEndpointCommandOutput}
 * @see {@link DeleteInstanceConnectEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteInstanceConnectEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteInstanceConnectEndpointCommand extends $Command<
  DeleteInstanceConnectEndpointCommandInput,
  DeleteInstanceConnectEndpointCommandOutput,
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
  constructor(readonly input: DeleteInstanceConnectEndpointCommandInput) {
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
  ): Handler<DeleteInstanceConnectEndpointCommandInput, DeleteInstanceConnectEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteInstanceConnectEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteInstanceConnectEndpointCommand";
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
  private serialize(input: DeleteInstanceConnectEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteInstanceConnectEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteInstanceConnectEndpointCommandOutput> {
    return de_DeleteInstanceConnectEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
