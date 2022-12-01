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
  RequestUploadCredentialsInput,
  RequestUploadCredentialsInputFilterSensitiveLog,
  RequestUploadCredentialsOutput,
  RequestUploadCredentialsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RequestUploadCredentialsCommand,
  serializeAws_json1_1RequestUploadCredentialsCommand,
} from "../protocols/Aws_json1_1";

export interface RequestUploadCredentialsCommandInput extends RequestUploadCredentialsInput {}
export interface RequestUploadCredentialsCommandOutput extends RequestUploadCredentialsOutput, __MetadataBearer {}

/**
 * <p>Retrieves a fresh set of credentials for use when uploading a new set of game build
 *             files to Amazon GameLift's Amazon S3. This is done as part of the build creation process; see
 *                 <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html">GameSession</a>.</p>
 *         <p>To request new credentials, specify the build ID as returned with an initial
 *                 <code>CreateBuild</code> request. If successful, a new set of credentials are
 *             returned, along with the S3 storage location associated with the build ID.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in S3</a>
 *         </p>
 *          <p>
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, RequestUploadCredentialsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, RequestUploadCredentialsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new RequestUploadCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RequestUploadCredentialsCommandInput} for command's `input` shape.
 * @see {@link RequestUploadCredentialsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class RequestUploadCredentialsCommand extends $Command<
  RequestUploadCredentialsCommandInput,
  RequestUploadCredentialsCommandOutput,
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

  constructor(readonly input: RequestUploadCredentialsCommandInput) {
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
  ): Handler<RequestUploadCredentialsCommandInput, RequestUploadCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RequestUploadCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "RequestUploadCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RequestUploadCredentialsInputFilterSensitiveLog,
      outputFilterSensitiveLog: RequestUploadCredentialsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RequestUploadCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RequestUploadCredentialsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RequestUploadCredentialsCommandOutput> {
    return deserializeAws_json1_1RequestUploadCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
