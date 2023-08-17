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

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { SearchFlowExecutionsRequest, SearchFlowExecutionsResponse } from "../models/models_0";
import { de_SearchFlowExecutionsCommand, se_SearchFlowExecutionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchFlowExecutionsCommand}.
 */
export interface SearchFlowExecutionsCommandInput extends SearchFlowExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link SearchFlowExecutionsCommand}.
 */
export interface SearchFlowExecutionsCommandOutput extends SearchFlowExecutionsResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Searches for AWS IoT Things Graph workflow execution instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, SearchFlowExecutionsCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, SearchFlowExecutionsCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const input = { // SearchFlowExecutionsRequest
 *   systemInstanceId: "STRING_VALUE", // required
 *   flowExecutionId: "STRING_VALUE",
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new SearchFlowExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // SearchFlowExecutionsResponse
 * //   summaries: [ // FlowExecutionSummaries
 * //     { // FlowExecutionSummary
 * //       flowExecutionId: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       systemInstanceId: "STRING_VALUE",
 * //       flowTemplateId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchFlowExecutionsCommandInput - {@link SearchFlowExecutionsCommandInput}
 * @returns {@link SearchFlowExecutionsCommandOutput}
 * @see {@link SearchFlowExecutionsCommandInput} for command's `input` shape.
 * @see {@link SearchFlowExecutionsCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 */
export class SearchFlowExecutionsCommand extends $Command<
  SearchFlowExecutionsCommandInput,
  SearchFlowExecutionsCommandOutput,
  IoTThingsGraphClientResolvedConfig
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
  constructor(readonly input: SearchFlowExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchFlowExecutionsCommandInput, SearchFlowExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchFlowExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "SearchFlowExecutionsCommand";
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
  private serialize(input: SearchFlowExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchFlowExecutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchFlowExecutionsCommandOutput> {
    return de_SearchFlowExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
