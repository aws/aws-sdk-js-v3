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
  ListSharedEndpointsRequest,
  ListSharedEndpointsRequestFilterSensitiveLog,
  ListSharedEndpointsResult,
  ListSharedEndpointsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListSharedEndpointsCommand,
  serializeAws_restJson1ListSharedEndpointsCommand,
} from "../protocols/Aws_restJson1";
import { S3OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3OutpostsClient";

export interface ListSharedEndpointsCommandInput extends ListSharedEndpointsRequest {}
export interface ListSharedEndpointsCommandOutput extends ListSharedEndpointsResult, __MetadataBearer {}

/**
 * <p>Lists all endpoints associated with an Outpost that has been shared by Amazon Web Services Resource Access Manager (RAM).</p>
 *         <p>Related actions include:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_CreateEndpoint.html">CreateEndpoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3OutpostsClient, ListSharedEndpointsCommand } from "@aws-sdk/client-s3outposts"; // ES Modules import
 * // const { S3OutpostsClient, ListSharedEndpointsCommand } = require("@aws-sdk/client-s3outposts"); // CommonJS import
 * const client = new S3OutpostsClient(config);
 * const command = new ListSharedEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSharedEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListSharedEndpointsCommandOutput} for command's `response` shape.
 * @see {@link S3OutpostsClientResolvedConfig | config} for S3OutpostsClient's `config` shape.
 *
 */
export class ListSharedEndpointsCommand extends $Command<
  ListSharedEndpointsCommandInput,
  ListSharedEndpointsCommandOutput,
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

  constructor(readonly input: ListSharedEndpointsCommandInput) {
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
  ): Handler<ListSharedEndpointsCommandInput, ListSharedEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSharedEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3OutpostsClient";
    const commandName = "ListSharedEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSharedEndpointsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSharedEndpointsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSharedEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSharedEndpointsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSharedEndpointsCommandOutput> {
    return deserializeAws_restJson1ListSharedEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
