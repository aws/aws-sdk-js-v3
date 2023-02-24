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

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  DescribeVpcPeeringConnectionsInput,
  DescribeVpcPeeringConnectionsInputFilterSensitiveLog,
  DescribeVpcPeeringConnectionsOutput,
  DescribeVpcPeeringConnectionsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeVpcPeeringConnectionsCommand,
  serializeAws_json1_1DescribeVpcPeeringConnectionsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeVpcPeeringConnectionsCommandInput extends DescribeVpcPeeringConnectionsInput {}
export interface DescribeVpcPeeringConnectionsCommandOutput
  extends DescribeVpcPeeringConnectionsOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves information on VPC peering connections. Use this operation to get peering
 *             information for all fleets or for one specific fleet ID. </p>
 *         <p>To retrieve connection information, call this operation from the Amazon Web Services account that is
 *             used to manage the Amazon GameLift fleets. Specify a fleet ID or leave the parameter empty to
 *             retrieve all connection records. If successful, the retrieved information includes both
 *             active and pending connections. Active connections identify the IpV4 CIDR block that the
 *             VPC uses to connect. </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeVpcPeeringConnectionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeVpcPeeringConnectionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeVpcPeeringConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcPeeringConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcPeeringConnectionsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class DescribeVpcPeeringConnectionsCommand extends $Command<
  DescribeVpcPeeringConnectionsCommandInput,
  DescribeVpcPeeringConnectionsCommandOutput,
  GameLiftClientResolvedConfig
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

  constructor(readonly input: DescribeVpcPeeringConnectionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeVpcPeeringConnectionsCommandInput, DescribeVpcPeeringConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVpcPeeringConnectionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeVpcPeeringConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVpcPeeringConnectionsInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeVpcPeeringConnectionsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeVpcPeeringConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeVpcPeeringConnectionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcPeeringConnectionsCommandOutput> {
    return deserializeAws_json1_1DescribeVpcPeeringConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
