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

import { DescribeProtectionRequest, DescribeProtectionResponse } from "../models/models_0";
import { de_DescribeProtectionCommand, se_DescribeProtectionCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeProtectionCommand}.
 */
export interface DescribeProtectionCommandInput extends DescribeProtectionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProtectionCommand}.
 */
export interface DescribeProtectionCommandOutput extends DescribeProtectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the details of a <a>Protection</a> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeProtectionCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeProtectionCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const input = { // DescribeProtectionRequest
 *   ProtectionId: "STRING_VALUE",
 *   ResourceArn: "STRING_VALUE",
 * };
 * const command = new DescribeProtectionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProtectionResponse
 * //   Protection: { // Protection
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     ResourceArn: "STRING_VALUE",
 * //     HealthCheckIds: [ // HealthCheckIds
 * //       "STRING_VALUE",
 * //     ],
 * //     ProtectionArn: "STRING_VALUE",
 * //     ApplicationLayerAutomaticResponseConfiguration: { // ApplicationLayerAutomaticResponseConfiguration
 * //       Status: "ENABLED" || "DISABLED", // required
 * //       Action: { // ResponseAction
 * //         Block: {},
 * //         Count: {},
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeProtectionCommandInput - {@link DescribeProtectionCommandInput}
 * @returns {@link DescribeProtectionCommandOutput}
 * @see {@link DescribeProtectionCommandInput} for command's `input` shape.
 * @see {@link DescribeProtectionCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 */
export class DescribeProtectionCommand extends $Command<
  DescribeProtectionCommandInput,
  DescribeProtectionCommandOutput,
  ShieldClientResolvedConfig
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
  constructor(readonly input: DescribeProtectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeProtectionCommandInput, DescribeProtectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeProtectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "DescribeProtectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSShield_20160616",
        operation: "DescribeProtection",
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
  private serialize(input: DescribeProtectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeProtectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeProtectionCommandOutput> {
    return de_DescribeProtectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
