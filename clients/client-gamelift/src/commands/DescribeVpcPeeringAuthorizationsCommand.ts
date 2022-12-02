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
  DescribeVpcPeeringAuthorizationsInput,
  DescribeVpcPeeringAuthorizationsInputFilterSensitiveLog,
  DescribeVpcPeeringAuthorizationsOutput,
  DescribeVpcPeeringAuthorizationsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand,
  serializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeVpcPeeringAuthorizationsCommandInput extends DescribeVpcPeeringAuthorizationsInput {}
export interface DescribeVpcPeeringAuthorizationsCommandOutput
  extends DescribeVpcPeeringAuthorizationsOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves valid VPC peering authorizations that are pending for the Amazon Web Services account.
 *             This operation returns all VPC peering authorizations and requests for peering. This
 *             includes those initiated and received by this account. </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeVpcPeeringAuthorizationsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeVpcPeeringAuthorizationsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeVpcPeeringAuthorizationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcPeeringAuthorizationsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcPeeringAuthorizationsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class DescribeVpcPeeringAuthorizationsCommand extends $Command<
  DescribeVpcPeeringAuthorizationsCommandInput,
  DescribeVpcPeeringAuthorizationsCommandOutput,
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

  constructor(readonly input: DescribeVpcPeeringAuthorizationsCommandInput) {
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
  ): Handler<DescribeVpcPeeringAuthorizationsCommandInput, DescribeVpcPeeringAuthorizationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVpcPeeringAuthorizationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeVpcPeeringAuthorizationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVpcPeeringAuthorizationsInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeVpcPeeringAuthorizationsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeVpcPeeringAuthorizationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcPeeringAuthorizationsCommandOutput> {
    return deserializeAws_json1_1DescribeVpcPeeringAuthorizationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
