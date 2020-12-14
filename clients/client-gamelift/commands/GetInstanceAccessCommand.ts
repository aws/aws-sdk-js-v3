import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { GetInstanceAccessInput, GetInstanceAccessOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetInstanceAccessCommand,
  serializeAws_json1_1GetInstanceAccessCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetInstanceAccessCommandInput = GetInstanceAccessInput;
export type GetInstanceAccessCommandOutput = GetInstanceAccessOutput & __MetadataBearer;

/**
 * <p>Requests remote access to a fleet instance. Remote access is useful for debugging,
 *             gathering benchmarking data, or observing activity in real time. </p>
 *         <p>To remotely access an instance, you need credentials that match the operating system
 *             of the instance. For a Windows instance, Amazon GameLift returns a user name and password as
 *             strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift
 *             returns a user name and RSA private key, also as strings, for use with an SSH client.
 *             The private key must be saved in the proper format to a <code>.pem</code> file before
 *             using. If you're making this request using the AWS CLI, saving the secret can be handled
 *             as part of the GetInstanceAccess request, as shown in one of the examples for this
 *             operation. </p>
 *         <p>To request access to a specific instance, specify the IDs of both the instance and the
 *             fleet it belongs to. You can retrieve a fleet's instance IDs by calling <a>DescribeInstances</a>. If successful, an <a>InstanceAccess</a>
 *             object is returned that contains the instance's IP address and a set of
 *             credentials.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet
 *                 Instances</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet
 *                 Issues</a>
 *          </p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeInstances</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetInstanceAccess</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class GetInstanceAccessCommand extends $Command<
  GetInstanceAccessCommandInput,
  GetInstanceAccessCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInstanceAccessCommandInput) {
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
  ): Handler<GetInstanceAccessCommandInput, GetInstanceAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "GetInstanceAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInstanceAccessInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetInstanceAccessOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInstanceAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetInstanceAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInstanceAccessCommandOutput> {
    return deserializeAws_json1_1GetInstanceAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
