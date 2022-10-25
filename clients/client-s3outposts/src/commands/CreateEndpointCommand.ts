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

import {
  CreateEndpointRequest,
  CreateEndpointRequestFilterSensitiveLog,
  CreateEndpointResult,
  CreateEndpointResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateEndpointCommand,
  serializeAws_restJson1CreateEndpointCommand,
} from "../protocols/Aws_restJson1";
import { S3OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3OutpostsClient";

export interface CreateEndpointCommandInput extends CreateEndpointRequest {}
export interface CreateEndpointCommandOutput extends CreateEndpointResult, __MetadataBearer {}

/**
 * <p>Creates an endpoint and associates it with the specified Outpost.</p>
 *         <note>
 *             <p>It can take up to 5 minutes for this action to finish.</p>
 *          </note>
 *         <p></p>
 *         <p>Related actions include:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListEndpoints.html">ListEndpoints</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3OutpostsClient, CreateEndpointCommand } from "@aws-sdk/client-s3outposts"; // ES Modules import
 * // const { S3OutpostsClient, CreateEndpointCommand } = require("@aws-sdk/client-s3outposts"); // CommonJS import
 * const client = new S3OutpostsClient(config);
 * const command = new CreateEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateEndpointCommandOutput} for command's `response` shape.
 * @see {@link S3OutpostsClientResolvedConfig | config} for S3OutpostsClient's `config` shape.
 *
 */
export class CreateEndpointCommand extends $Command<
  CreateEndpointCommandInput,
  CreateEndpointCommandOutput,
  S3OutpostsClientResolvedConfig
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

  constructor(readonly input: CreateEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEndpointCommandInput, CreateEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3OutpostsClient";
    const commandName = "CreateEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEndpointRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateEndpointResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEndpointCommandOutput> {
    return deserializeAws_restJson1CreateEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
