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

import { DescribeBrokerEngineTypesRequest, DescribeBrokerEngineTypesResponse } from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { de_DescribeBrokerEngineTypesCommand, se_DescribeBrokerEngineTypesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBrokerEngineTypesCommand}.
 */
export interface DescribeBrokerEngineTypesCommandInput extends DescribeBrokerEngineTypesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBrokerEngineTypesCommand}.
 */
export interface DescribeBrokerEngineTypesCommandOutput extends DescribeBrokerEngineTypesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describe available engine types and versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeBrokerEngineTypesCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeBrokerEngineTypesCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const input = { // DescribeBrokerEngineTypesRequest
 *   EngineType: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeBrokerEngineTypesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBrokerEngineTypesResponse
 * //   BrokerEngineTypes: [ // __listOfBrokerEngineType
 * //     { // BrokerEngineType
 * //       EngineType: "ACTIVEMQ" || "RABBITMQ",
 * //       EngineVersions: [ // __listOfEngineVersion
 * //         { // EngineVersion
 * //           Name: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   MaxResults: Number("int"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBrokerEngineTypesCommandInput - {@link DescribeBrokerEngineTypesCommandInput}
 * @returns {@link DescribeBrokerEngineTypesCommandOutput}
 * @see {@link DescribeBrokerEngineTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeBrokerEngineTypesCommandOutput} for command's `response` shape.
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
export class DescribeBrokerEngineTypesCommand extends $Command<
  DescribeBrokerEngineTypesCommandInput,
  DescribeBrokerEngineTypesCommandOutput,
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
  constructor(readonly input: DescribeBrokerEngineTypesCommandInput) {
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
  ): Handler<DescribeBrokerEngineTypesCommandInput, DescribeBrokerEngineTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBrokerEngineTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "DescribeBrokerEngineTypesCommand";
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
  private serialize(input: DescribeBrokerEngineTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBrokerEngineTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBrokerEngineTypesCommandOutput> {
    return de_DescribeBrokerEngineTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
