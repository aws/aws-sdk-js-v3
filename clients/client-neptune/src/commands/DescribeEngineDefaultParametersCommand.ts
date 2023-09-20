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

import { DescribeEngineDefaultParametersMessage, DescribeEngineDefaultParametersResult } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  de_DescribeEngineDefaultParametersCommand,
  se_DescribeEngineDefaultParametersCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEngineDefaultParametersCommand}.
 */
export interface DescribeEngineDefaultParametersCommandInput extends DescribeEngineDefaultParametersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEngineDefaultParametersCommand}.
 */
export interface DescribeEngineDefaultParametersCommandOutput
  extends DescribeEngineDefaultParametersResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the default engine and system parameter information for the specified database
 *       engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeEngineDefaultParametersCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeEngineDefaultParametersCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // DescribeEngineDefaultParametersMessage
 *   DBParameterGroupFamily: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeEngineDefaultParametersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEngineDefaultParametersResult
 * //   EngineDefaults: { // EngineDefaults
 * //     DBParameterGroupFamily: "STRING_VALUE",
 * //     Marker: "STRING_VALUE",
 * //     Parameters: [ // ParametersList
 * //       { // Parameter
 * //         ParameterName: "STRING_VALUE",
 * //         ParameterValue: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Source: "STRING_VALUE",
 * //         ApplyType: "STRING_VALUE",
 * //         DataType: "STRING_VALUE",
 * //         AllowedValues: "STRING_VALUE",
 * //         IsModifiable: true || false,
 * //         MinimumEngineVersion: "STRING_VALUE",
 * //         ApplyMethod: "immediate" || "pending-reboot",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEngineDefaultParametersCommandInput - {@link DescribeEngineDefaultParametersCommandInput}
 * @returns {@link DescribeEngineDefaultParametersCommandOutput}
 * @see {@link DescribeEngineDefaultParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeEngineDefaultParametersCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 */
export class DescribeEngineDefaultParametersCommand extends $Command<
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
  NeptuneClientResolvedConfig
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
  constructor(readonly input: DescribeEngineDefaultParametersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEngineDefaultParametersCommandInput, DescribeEngineDefaultParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEngineDefaultParametersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DescribeEngineDefaultParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeEngineDefaultParameters",
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
  private serialize(
    input: DescribeEngineDefaultParametersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeEngineDefaultParametersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEngineDefaultParametersCommandOutput> {
    return de_DescribeEngineDefaultParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
