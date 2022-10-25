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

import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import {
  GetComponentVersionArtifactRequest,
  GetComponentVersionArtifactRequestFilterSensitiveLog,
  GetComponentVersionArtifactResponse,
  GetComponentVersionArtifactResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetComponentVersionArtifactCommand,
  serializeAws_restJson1GetComponentVersionArtifactCommand,
} from "../protocols/Aws_restJson1";

export interface GetComponentVersionArtifactCommandInput extends GetComponentVersionArtifactRequest {}
export interface GetComponentVersionArtifactCommandOutput
  extends GetComponentVersionArtifactResponse,
    __MetadataBearer {}

/**
 * <p>Gets the pre-signed URL to download a public or a Lambda component artifact. Core devices call this
 *       operation to identify the URL that they can use to download an artifact to install.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, GetComponentVersionArtifactCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, GetComponentVersionArtifactCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new GetComponentVersionArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComponentVersionArtifactCommandInput} for command's `input` shape.
 * @see {@link GetComponentVersionArtifactCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 */
export class GetComponentVersionArtifactCommand extends $Command<
  GetComponentVersionArtifactCommandInput,
  GetComponentVersionArtifactCommandOutput,
  GreengrassV2ClientResolvedConfig
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

  constructor(readonly input: GetComponentVersionArtifactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetComponentVersionArtifactCommandInput, GetComponentVersionArtifactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetComponentVersionArtifactCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "GetComponentVersionArtifactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetComponentVersionArtifactRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetComponentVersionArtifactResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetComponentVersionArtifactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetComponentVersionArtifactCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetComponentVersionArtifactCommandOutput> {
    return deserializeAws_restJson1GetComponentVersionArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
