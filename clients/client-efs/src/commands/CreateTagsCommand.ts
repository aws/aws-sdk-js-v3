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

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { CreateTagsRequest, CreateTagsRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1CreateTagsCommand,
  serializeAws_restJson1CreateTagsCommand,
} from "../protocols/Aws_restJson1";

export interface CreateTagsCommandInput extends CreateTagsRequest {}
export interface CreateTagsCommandOutput extends __MetadataBearer {}

/**
 * @deprecated
 *
 * <note>
 *             <p>DEPRECATED - <code>CreateTags</code> is deprecated and not maintained. To create tags for EFS
 *         resources, use the  API action.</p>
 *          </note>
 *          <p>Creates or overwrites tags associated with a file system. Each tag is a key-value pair. If
 *       a tag key specified in the request already exists on the file system, this operation
 *       overwrites its value with the value provided in the request. If you add the <code>Name</code>
 *       tag to your file system, Amazon EFS returns it in the response to the <a>DescribeFileSystems</a> operation. </p>
 *          <p>This operation requires permission for the <code>elasticfilesystem:CreateTags</code>
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, CreateTagsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, CreateTagsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new CreateTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTagsCommandInput} for command's `input` shape.
 * @see {@link CreateTagsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 */
export class CreateTagsCommand extends $Command<
  CreateTagsCommandInput,
  CreateTagsCommandOutput,
  EFSClientResolvedConfig
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

  constructor(readonly input: CreateTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTagsCommandInput, CreateTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateTagsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "CreateTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTagsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTagsCommandOutput> {
    return deserializeAws_restJson1CreateTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
