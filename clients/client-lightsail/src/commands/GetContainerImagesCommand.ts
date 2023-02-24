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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  GetContainerImagesRequest,
  GetContainerImagesRequestFilterSensitiveLog,
  GetContainerImagesResult,
  GetContainerImagesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetContainerImagesCommand,
  serializeAws_json1_1GetContainerImagesCommand,
} from "../protocols/Aws_json1_1";

export interface GetContainerImagesCommandInput extends GetContainerImagesRequest {}
export interface GetContainerImagesCommandOutput extends GetContainerImagesResult, __MetadataBearer {}

/**
 * <p>Returns the container images that are registered to your Amazon Lightsail container
 *       service.</p>
 *          <note>
 *             <p>If you created a deployment on your Lightsail container service that uses container
 *         images from a public registry like Docker Hub, those images are not returned as part of this
 *         action. Those images are not registered to your Lightsail container service.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetContainerImagesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetContainerImagesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetContainerImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerImagesCommandInput} for command's `input` shape.
 * @see {@link GetContainerImagesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class GetContainerImagesCommand extends $Command<
  GetContainerImagesCommandInput,
  GetContainerImagesCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: GetContainerImagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetContainerImagesCommandInput, GetContainerImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetContainerImagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetContainerImagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContainerImagesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetContainerImagesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetContainerImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetContainerImagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetContainerImagesCommandOutput> {
    return deserializeAws_json1_1GetContainerImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
