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

import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeEntityAggregatesRequest, DescribeEntityAggregatesResponse } from "../models/models_0";
import { de_DescribeEntityAggregatesCommand, se_DescribeEntityAggregatesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEntityAggregatesCommand}.
 */
export interface DescribeEntityAggregatesCommandInput extends DescribeEntityAggregatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEntityAggregatesCommand}.
 */
export interface DescribeEntityAggregatesCommandOutput extends DescribeEntityAggregatesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the number of entities that are affected by each of the specified events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEntityAggregatesCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEntityAggregatesCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const input = { // DescribeEntityAggregatesRequest
 *   eventArns: [ // EventArnsList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeEntityAggregatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEntityAggregatesResponse
 * //   entityAggregates: [ // EntityAggregateList
 * //     { // EntityAggregate
 * //       eventArn: "STRING_VALUE",
 * //       count: Number("int"),
 * //       statuses: { // entityStatuses
 * //         "<keys>": Number("int"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEntityAggregatesCommandInput - {@link DescribeEntityAggregatesCommandInput}
 * @returns {@link DescribeEntityAggregatesCommandOutput}
 * @see {@link DescribeEntityAggregatesCommandInput} for command's `input` shape.
 * @see {@link DescribeEntityAggregatesCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 */
export class DescribeEntityAggregatesCommand extends $Command<
  DescribeEntityAggregatesCommandInput,
  DescribeEntityAggregatesCommandOutput,
  HealthClientResolvedConfig
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
  constructor(readonly input: DescribeEntityAggregatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEntityAggregatesCommandInput, DescribeEntityAggregatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEntityAggregatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeEntityAggregatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHealth_20160804",
        operation: "DescribeEntityAggregates",
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
  private serialize(input: DescribeEntityAggregatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEntityAggregatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEntityAggregatesCommandOutput> {
    return de_DescribeEntityAggregatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
