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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { PutBlockPublicAccessConfigurationInput, PutBlockPublicAccessConfigurationOutput } from "../models/models_0";
import {
  de_PutBlockPublicAccessConfigurationCommand,
  se_PutBlockPublicAccessConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutBlockPublicAccessConfigurationCommand}.
 */
export interface PutBlockPublicAccessConfigurationCommandInput extends PutBlockPublicAccessConfigurationInput {}
/**
 * @public
 *
 * The output of {@link PutBlockPublicAccessConfigurationCommand}.
 */
export interface PutBlockPublicAccessConfigurationCommandOutput
  extends PutBlockPublicAccessConfigurationOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates an Amazon EMR block public access configuration for your
 *             Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block
 *             Public Access for Amazon EMR</a> in the <i>Amazon EMR
 *             Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, PutBlockPublicAccessConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, PutBlockPublicAccessConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // PutBlockPublicAccessConfigurationInput
 *   BlockPublicAccessConfiguration: { // BlockPublicAccessConfiguration
 *     BlockPublicSecurityGroupRules: true || false, // required
 *     PermittedPublicSecurityGroupRuleRanges: [ // PortRanges
 *       { // PortRange
 *         MinRange: Number("int"), // required
 *         MaxRange: Number("int"),
 *       },
 *     ],
 *     Classification: "STRING_VALUE",
 *     Configurations: [ // ConfigurationList
 *       { // Configuration
 *         Classification: "STRING_VALUE",
 *         Configurations: [
 *           {
 *             Classification: "STRING_VALUE",
 *             Configurations: "<ConfigurationList>",
 *             Properties: { // StringMap
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         Properties: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     ],
 *     Properties: "<StringMap>",
 *   },
 * };
 * const command = new PutBlockPublicAccessConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBlockPublicAccessConfigurationCommandInput - {@link PutBlockPublicAccessConfigurationCommandInput}
 * @returns {@link PutBlockPublicAccessConfigurationCommandOutput}
 * @see {@link PutBlockPublicAccessConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutBlockPublicAccessConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class PutBlockPublicAccessConfigurationCommand extends $Command<
  PutBlockPublicAccessConfigurationCommandInput,
  PutBlockPublicAccessConfigurationCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: PutBlockPublicAccessConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutBlockPublicAccessConfigurationCommandInput, PutBlockPublicAccessConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutBlockPublicAccessConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "PutBlockPublicAccessConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticMapReduce",
        operation: "PutBlockPublicAccessConfiguration",
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
    input: PutBlockPublicAccessConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutBlockPublicAccessConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutBlockPublicAccessConfigurationCommandOutput> {
    return de_PutBlockPublicAccessConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
