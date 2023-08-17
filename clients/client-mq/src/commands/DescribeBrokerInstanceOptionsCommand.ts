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

import { DescribeBrokerInstanceOptionsRequest, DescribeBrokerInstanceOptionsResponse } from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import {
  de_DescribeBrokerInstanceOptionsCommand,
  se_DescribeBrokerInstanceOptionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBrokerInstanceOptionsCommand}.
 */
export interface DescribeBrokerInstanceOptionsCommandInput extends DescribeBrokerInstanceOptionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBrokerInstanceOptionsCommand}.
 */
export interface DescribeBrokerInstanceOptionsCommandOutput
  extends DescribeBrokerInstanceOptionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describe available broker instance options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeBrokerInstanceOptionsCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeBrokerInstanceOptionsCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const input = { // DescribeBrokerInstanceOptionsRequest
 *   EngineType: "STRING_VALUE",
 *   HostInstanceType: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   StorageType: "STRING_VALUE",
 * };
 * const command = new DescribeBrokerInstanceOptionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBrokerInstanceOptionsResponse
 * //   BrokerInstanceOptions: [ // __listOfBrokerInstanceOption
 * //     { // BrokerInstanceOption
 * //       AvailabilityZones: [ // __listOfAvailabilityZone
 * //         { // AvailabilityZone
 * //           Name: "STRING_VALUE",
 * //         },
 * //       ],
 * //       EngineType: "ACTIVEMQ" || "RABBITMQ",
 * //       HostInstanceType: "STRING_VALUE",
 * //       StorageType: "EBS" || "EFS",
 * //       SupportedDeploymentModes: [ // __listOfDeploymentMode
 * //         "SINGLE_INSTANCE" || "ACTIVE_STANDBY_MULTI_AZ" || "CLUSTER_MULTI_AZ",
 * //       ],
 * //       SupportedEngineVersions: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   MaxResults: Number("int"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBrokerInstanceOptionsCommandInput - {@link DescribeBrokerInstanceOptionsCommandInput}
 * @returns {@link DescribeBrokerInstanceOptionsCommandOutput}
 * @see {@link DescribeBrokerInstanceOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeBrokerInstanceOptionsCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
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
 * @throws {@link MqServiceException}
 * <p>Base exception class for all service exceptions from Mq service.</p>
 *
 */
export class DescribeBrokerInstanceOptionsCommand extends $Command<
  DescribeBrokerInstanceOptionsCommandInput,
  DescribeBrokerInstanceOptionsCommandOutput,
  MqClientResolvedConfig
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
  constructor(readonly input: DescribeBrokerInstanceOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBrokerInstanceOptionsCommandInput, DescribeBrokerInstanceOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBrokerInstanceOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "DescribeBrokerInstanceOptionsCommand";
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
  private serialize(input: DescribeBrokerInstanceOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBrokerInstanceOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBrokerInstanceOptionsCommandOutput> {
    return de_DescribeBrokerInstanceOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
