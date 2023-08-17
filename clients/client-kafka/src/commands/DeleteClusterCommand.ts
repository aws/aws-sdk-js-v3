// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { DeleteClusterRequest, DeleteClusterResponse } from "../models/models_0";
import { de_DeleteClusterCommand, se_DeleteClusterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteClusterCommand}.
 */
export interface DeleteClusterCommandInput extends DeleteClusterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteClusterCommand}.
 */
export interface DeleteClusterCommandOutput extends DeleteClusterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the MSK cluster specified by the Amazon Resource Name (ARN) in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DeleteClusterCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DeleteClusterCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // DeleteClusterRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   CurrentVersion: "STRING_VALUE",
 * };
 * const command = new DeleteClusterCommand(input);
 * const response = await client.send(command);
 * // { // DeleteClusterResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   State: "ACTIVE" || "CREATING" || "DELETING" || "FAILED" || "HEALING" || "MAINTENANCE" || "REBOOTING_BROKER" || "UPDATING",
 * // };
 *
 * ```
 *
 * @param DeleteClusterCommandInput - {@link DeleteClusterCommandInput}
 * @returns {@link DeleteClusterCommandOutput}
 * @see {@link DeleteClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterCommandOutput} for command's `response` shape.
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
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 */
export class DeleteClusterCommand extends $Command<
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
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
  constructor(readonly input: DeleteClusterCommandInput) {
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
  ): Handler<DeleteClusterCommandInput, DeleteClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteClusterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "DeleteClusterCommand";
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
  private serialize(input: DeleteClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteClusterCommandOutput> {
    return de_DeleteClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
