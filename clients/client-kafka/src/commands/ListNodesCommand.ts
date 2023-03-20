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

import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListNodesRequest, ListNodesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListNodesCommand,
  serializeAws_restJson1ListNodesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListNodesCommand}.
 */
export interface ListNodesCommandInput extends ListNodesRequest {}
/**
 * @public
 *
 * The output of {@link ListNodesCommand}.
 */
export interface ListNodesCommandOutput extends ListNodesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the broker nodes in the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListNodesCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListNodesCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new ListNodesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListNodesCommandInput - {@link ListNodesCommandInput}
 * @returns {@link ListNodesCommandOutput}
 * @see {@link ListNodesCommandInput} for command's `input` shape.
 * @see {@link ListNodesCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 *
 */
export class ListNodesCommand extends $Command<
  ListNodesCommandInput,
  ListNodesCommandOutput,
  KafkaClientResolvedConfig
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
  constructor(readonly input: ListNodesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListNodesCommandInput, ListNodesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListNodesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "ListNodesCommand";
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
  private serialize(input: ListNodesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListNodesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNodesCommandOutput> {
    return deserializeAws_restJson1ListNodesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
