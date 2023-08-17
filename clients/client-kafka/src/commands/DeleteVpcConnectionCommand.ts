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
import { DeleteVpcConnectionRequest, DeleteVpcConnectionResponse } from "../models/models_0";
import { de_DeleteVpcConnectionCommand, se_DeleteVpcConnectionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpcConnectionCommand}.
 */
export interface DeleteVpcConnectionCommandInput extends DeleteVpcConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpcConnectionCommand}.
 */
export interface DeleteVpcConnectionCommandOutput extends DeleteVpcConnectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a MSK VPC connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DeleteVpcConnectionCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DeleteVpcConnectionCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // DeleteVpcConnectionRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteVpcConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVpcConnectionResponse
 * //   VpcConnectionArn: "STRING_VALUE",
 * //   State: "CREATING" || "AVAILABLE" || "INACTIVE" || "DEACTIVATING" || "DELETING" || "FAILED" || "REJECTED" || "REJECTING",
 * // };
 *
 * ```
 *
 * @param DeleteVpcConnectionCommandInput - {@link DeleteVpcConnectionCommandInput}
 * @returns {@link DeleteVpcConnectionCommandOutput}
 * @see {@link DeleteVpcConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcConnectionCommandOutput} for command's `response` shape.
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
export class DeleteVpcConnectionCommand extends $Command<
  DeleteVpcConnectionCommandInput,
  DeleteVpcConnectionCommandOutput,
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
  constructor(readonly input: DeleteVpcConnectionCommandInput) {
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
  ): Handler<DeleteVpcConnectionCommandInput, DeleteVpcConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteVpcConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "DeleteVpcConnectionCommand";
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
  private serialize(input: DeleteVpcConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteVpcConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteVpcConnectionCommandOutput> {
    return de_DeleteVpcConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
