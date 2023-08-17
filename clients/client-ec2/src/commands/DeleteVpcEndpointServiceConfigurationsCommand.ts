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
  DeleteVpcEndpointServiceConfigurationsRequest,
  DeleteVpcEndpointServiceConfigurationsResult,
} from "../models/models_3";
import {
  de_DeleteVpcEndpointServiceConfigurationsCommand,
  se_DeleteVpcEndpointServiceConfigurationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpcEndpointServiceConfigurationsCommand}.
 */
export interface DeleteVpcEndpointServiceConfigurationsCommandInput
  extends DeleteVpcEndpointServiceConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpcEndpointServiceConfigurationsCommand}.
 */
export interface DeleteVpcEndpointServiceConfigurationsCommandOutput
  extends DeleteVpcEndpointServiceConfigurationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified VPC endpoint service configurations. Before you can delete
 *             an endpoint service configuration, you must reject any <code>Available</code> or
 *             <code>PendingAcceptance</code> interface endpoint connections that are attached to
 *             the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpcEndpointServiceConfigurationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpcEndpointServiceConfigurationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteVpcEndpointServiceConfigurationsRequest
 *   DryRun: true || false,
 *   ServiceIds: [ // VpcEndpointServiceIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteVpcEndpointServiceConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVpcEndpointServiceConfigurationsResult
 * //   Unsuccessful: [ // UnsuccessfulItemSet
 * //     { // UnsuccessfulItem
 * //       Error: { // UnsuccessfulItemError
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       ResourceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteVpcEndpointServiceConfigurationsCommandInput - {@link DeleteVpcEndpointServiceConfigurationsCommandInput}
 * @returns {@link DeleteVpcEndpointServiceConfigurationsCommandOutput}
 * @see {@link DeleteVpcEndpointServiceConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcEndpointServiceConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteVpcEndpointServiceConfigurationsCommand extends $Command<
  DeleteVpcEndpointServiceConfigurationsCommandInput,
  DeleteVpcEndpointServiceConfigurationsCommandOutput,
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
  constructor(readonly input: DeleteVpcEndpointServiceConfigurationsCommandInput) {
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
  ): Handler<DeleteVpcEndpointServiceConfigurationsCommandInput, DeleteVpcEndpointServiceConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteVpcEndpointServiceConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteVpcEndpointServiceConfigurationsCommand";
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
    input: DeleteVpcEndpointServiceConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteVpcEndpointServiceConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVpcEndpointServiceConfigurationsCommandOutput> {
    return de_DeleteVpcEndpointServiceConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
