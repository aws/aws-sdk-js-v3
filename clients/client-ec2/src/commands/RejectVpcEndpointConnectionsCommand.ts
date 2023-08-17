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
import { RejectVpcEndpointConnectionsRequest, RejectVpcEndpointConnectionsResult } from "../models/models_6";
import { de_RejectVpcEndpointConnectionsCommand, se_RejectVpcEndpointConnectionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RejectVpcEndpointConnectionsCommand}.
 */
export interface RejectVpcEndpointConnectionsCommandInput extends RejectVpcEndpointConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link RejectVpcEndpointConnectionsCommand}.
 */
export interface RejectVpcEndpointConnectionsCommandOutput
  extends RejectVpcEndpointConnectionsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Rejects VPC endpoint connection requests to your VPC endpoint service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectVpcEndpointConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectVpcEndpointConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RejectVpcEndpointConnectionsRequest
 *   DryRun: true || false,
 *   ServiceId: "STRING_VALUE", // required
 *   VpcEndpointIds: [ // VpcEndpointIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RejectVpcEndpointConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // RejectVpcEndpointConnectionsResult
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
 * @param RejectVpcEndpointConnectionsCommandInput - {@link RejectVpcEndpointConnectionsCommandInput}
 * @returns {@link RejectVpcEndpointConnectionsCommandOutput}
 * @see {@link RejectVpcEndpointConnectionsCommandInput} for command's `input` shape.
 * @see {@link RejectVpcEndpointConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class RejectVpcEndpointConnectionsCommand extends $Command<
  RejectVpcEndpointConnectionsCommandInput,
  RejectVpcEndpointConnectionsCommandOutput,
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
  constructor(readonly input: RejectVpcEndpointConnectionsCommandInput) {
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
  ): Handler<RejectVpcEndpointConnectionsCommandInput, RejectVpcEndpointConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RejectVpcEndpointConnectionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RejectVpcEndpointConnectionsCommand";
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
  private serialize(input: RejectVpcEndpointConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RejectVpcEndpointConnectionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectVpcEndpointConnectionsCommandOutput> {
    return de_RejectVpcEndpointConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
