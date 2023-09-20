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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConformancePackStatusRequest, DescribeConformancePackStatusResponse } from "../models/models_0";
import {
  de_DescribeConformancePackStatusCommand,
  se_DescribeConformancePackStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConformancePackStatusCommand}.
 */
export interface DescribeConformancePackStatusCommandInput extends DescribeConformancePackStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConformancePackStatusCommand}.
 */
export interface DescribeConformancePackStatusCommandOutput
  extends DescribeConformancePackStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Provides one or more conformance packs deployment status.</p>
 *          <note>
 *             <p>If there are no conformance packs then you will see an empty result.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConformancePackStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConformancePackStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeConformancePackStatusRequest
 *   ConformancePackNames: [ // ConformancePackNamesList
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeConformancePackStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConformancePackStatusResponse
 * //   ConformancePackStatusDetails: [ // ConformancePackStatusDetailsList
 * //     { // ConformancePackStatusDetail
 * //       ConformancePackName: "STRING_VALUE", // required
 * //       ConformancePackId: "STRING_VALUE", // required
 * //       ConformancePackArn: "STRING_VALUE", // required
 * //       ConformancePackState: "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED", // required
 * //       StackArn: "STRING_VALUE", // required
 * //       ConformancePackStatusReason: "STRING_VALUE",
 * //       LastUpdateRequestedTime: new Date("TIMESTAMP"), // required
 * //       LastUpdateCompletedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConformancePackStatusCommandInput - {@link DescribeConformancePackStatusCommandInput}
 * @returns {@link DescribeConformancePackStatusCommandOutput}
 * @see {@link DescribeConformancePackStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeConformancePackStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidLimitException} (client fault)
 *  <p>The specified limit is outside the allowable range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class DescribeConformancePackStatusCommand extends $Command<
  DescribeConformancePackStatusCommandInput,
  DescribeConformancePackStatusCommandOutput,
  ConfigServiceClientResolvedConfig
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
  constructor(readonly input: DescribeConformancePackStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeConformancePackStatusCommandInput, DescribeConformancePackStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConformancePackStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeConformancePackStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StarlingDoveService",
        operation: "DescribeConformancePackStatus",
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
  private serialize(input: DescribeConformancePackStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeConformancePackStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConformancePackStatusCommandOutput> {
    return de_DescribeConformancePackStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
