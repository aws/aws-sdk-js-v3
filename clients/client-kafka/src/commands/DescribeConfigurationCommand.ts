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
import { DescribeConfigurationRequest, DescribeConfigurationResponse } from "../models/models_0";
import { de_DescribeConfigurationCommand, se_DescribeConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationCommand}.
 */
export interface DescribeConfigurationCommandInput extends DescribeConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationCommand}.
 */
export interface DescribeConfigurationCommandOutput extends DescribeConfigurationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a description of this MSK configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeConfigurationCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeConfigurationCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // DescribeConfigurationRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DescribeConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   KafkaVersions: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   LatestRevision: { // ConfigurationRevision
 * //     CreationTime: new Date("TIMESTAMP"), // required
 * //     Description: "STRING_VALUE",
 * //     Revision: Number("long"), // required
 * //   },
 * //   Name: "STRING_VALUE",
 * //   State: "ACTIVE" || "DELETING" || "DELETE_FAILED",
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationCommandInput - {@link DescribeConfigurationCommandInput}
 * @returns {@link DescribeConfigurationCommandOutput}
 * @see {@link DescribeConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 */
export class DescribeConfigurationCommand extends $Command<
  DescribeConfigurationCommandInput,
  DescribeConfigurationCommandOutput,
  KafkaClientResolvedConfig
> {
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
  constructor(readonly input: DescribeConfigurationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConfigurationCommandInput, DescribeConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "DescribeConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Kafka",
        operation: "DescribeConfiguration",
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
  private serialize(input: DescribeConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeConfigurationCommandOutput> {
    return de_DescribeConfigurationCommand(output, context);
  }
}
