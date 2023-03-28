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

import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { RotateIngestEndpointCredentialsRequest, RotateIngestEndpointCredentialsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RotateIngestEndpointCredentialsCommand,
  serializeAws_restJson1RotateIngestEndpointCredentialsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link RotateIngestEndpointCredentialsCommand}.
 */
export interface RotateIngestEndpointCredentialsCommandInput extends RotateIngestEndpointCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link RotateIngestEndpointCredentialsCommand}.
 */
export interface RotateIngestEndpointCredentialsCommandOutput
  extends RotateIngestEndpointCredentialsResponse,
    __MetadataBearer {}

/**
 * @public
 * Rotate the IngestEndpoint's username and password, as specified by the IngestEndpoint's id.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, RotateIngestEndpointCredentialsCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, RotateIngestEndpointCredentialsCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const input = { // RotateIngestEndpointCredentialsRequest
 *   Id: "STRING_VALUE", // required
 *   IngestEndpointId: "STRING_VALUE", // required
 * };
 * const command = new RotateIngestEndpointCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RotateIngestEndpointCredentialsCommandInput - {@link RotateIngestEndpointCredentialsCommandInput}
 * @returns {@link RotateIngestEndpointCredentialsCommandOutput}
 * @see {@link RotateIngestEndpointCredentialsCommandInput} for command's `input` shape.
 * @see {@link RotateIngestEndpointCredentialsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for MediaPackageClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  The client is not authorized to access the requested resource.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  The client has exceeded their resource or throttling limits.
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  The parameters sent in the request are not valid.
 *
 *
 */
export class RotateIngestEndpointCredentialsCommand extends $Command<
  RotateIngestEndpointCredentialsCommandInput,
  RotateIngestEndpointCredentialsCommandOutput,
  MediaPackageClientResolvedConfig
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
  constructor(readonly input: RotateIngestEndpointCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RotateIngestEndpointCredentialsCommandInput, RotateIngestEndpointCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RotateIngestEndpointCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageClient";
    const commandName = "RotateIngestEndpointCredentialsCommand";
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
    input: RotateIngestEndpointCredentialsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1RotateIngestEndpointCredentialsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RotateIngestEndpointCredentialsCommandOutput> {
    return deserializeAws_restJson1RotateIngestEndpointCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
