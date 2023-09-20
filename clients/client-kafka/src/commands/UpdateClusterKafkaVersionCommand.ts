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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateClusterKafkaVersionRequest, UpdateClusterKafkaVersionResponse } from "../models/models_0";
import { de_UpdateClusterKafkaVersionCommand, se_UpdateClusterKafkaVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateClusterKafkaVersionCommand}.
 */
export interface UpdateClusterKafkaVersionCommandInput extends UpdateClusterKafkaVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateClusterKafkaVersionCommand}.
 */
export interface UpdateClusterKafkaVersionCommandOutput extends UpdateClusterKafkaVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the Apache Kafka version for the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateClusterKafkaVersionCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateClusterKafkaVersionCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // UpdateClusterKafkaVersionRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   ConfigurationInfo: { // ConfigurationInfo
 *     Arn: "STRING_VALUE", // required
 *     Revision: Number("long"), // required
 *   },
 *   CurrentVersion: "STRING_VALUE", // required
 *   TargetKafkaVersion: "STRING_VALUE", // required
 * };
 * const command = new UpdateClusterKafkaVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateClusterKafkaVersionResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   ClusterOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateClusterKafkaVersionCommandInput - {@link UpdateClusterKafkaVersionCommandInput}
 * @returns {@link UpdateClusterKafkaVersionCommandOutput}
 * @see {@link UpdateClusterKafkaVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterKafkaVersionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 */
export class UpdateClusterKafkaVersionCommand extends $Command<
  UpdateClusterKafkaVersionCommandInput,
  UpdateClusterKafkaVersionCommandOutput,
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
  constructor(readonly input: UpdateClusterKafkaVersionCommandInput) {
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
  ): Handler<UpdateClusterKafkaVersionCommandInput, UpdateClusterKafkaVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateClusterKafkaVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "UpdateClusterKafkaVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Kafka",
        operation: "UpdateClusterKafkaVersion",
      },
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
  private serialize(input: UpdateClusterKafkaVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateClusterKafkaVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateClusterKafkaVersionCommandOutput> {
    return de_UpdateClusterKafkaVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
