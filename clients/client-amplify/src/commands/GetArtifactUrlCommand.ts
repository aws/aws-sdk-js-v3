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

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import {
  GetArtifactUrlRequest,
  GetArtifactUrlRequestFilterSensitiveLog,
  GetArtifactUrlResult,
  GetArtifactUrlResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetArtifactUrlCommand,
  serializeAws_restJson1GetArtifactUrlCommand,
} from "../protocols/Aws_restJson1";

export interface GetArtifactUrlCommandInput extends GetArtifactUrlRequest {}
export interface GetArtifactUrlCommandOutput extends GetArtifactUrlResult, __MetadataBearer {}

/**
 * <p> Returns the artifact info that corresponds to an artifact id. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, GetArtifactUrlCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, GetArtifactUrlCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new GetArtifactUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetArtifactUrlCommandInput} for command's `input` shape.
 * @see {@link GetArtifactUrlCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 */
export class GetArtifactUrlCommand extends $Command<
  GetArtifactUrlCommandInput,
  GetArtifactUrlCommandOutput,
  AmplifyClientResolvedConfig
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

  constructor(readonly input: GetArtifactUrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetArtifactUrlCommandInput, GetArtifactUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetArtifactUrlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "GetArtifactUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetArtifactUrlRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetArtifactUrlResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetArtifactUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetArtifactUrlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetArtifactUrlCommandOutput> {
    return deserializeAws_restJson1GetArtifactUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
