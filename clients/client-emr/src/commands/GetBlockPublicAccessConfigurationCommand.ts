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
import { GetBlockPublicAccessConfigurationInput, GetBlockPublicAccessConfigurationOutput } from "../models/models_0";
import {
  de_GetBlockPublicAccessConfigurationCommand,
  se_GetBlockPublicAccessConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetBlockPublicAccessConfigurationCommand}.
 */
export interface GetBlockPublicAccessConfigurationCommandInput extends GetBlockPublicAccessConfigurationInput {}
/**
 * @public
 *
 * The output of {@link GetBlockPublicAccessConfigurationCommand}.
 */
export interface GetBlockPublicAccessConfigurationCommandOutput
  extends GetBlockPublicAccessConfigurationOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns the Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block
 *             Public Access for Amazon EMR</a> in the <i>Amazon EMR
 *             Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetBlockPublicAccessConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetBlockPublicAccessConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = {};
 * const command = new GetBlockPublicAccessConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetBlockPublicAccessConfigurationOutput
 * //   BlockPublicAccessConfiguration: { // BlockPublicAccessConfiguration
 * //     BlockPublicSecurityGroupRules: true || false, // required
 * //     PermittedPublicSecurityGroupRuleRanges: [ // PortRanges
 * //       { // PortRange
 * //         MinRange: Number("int"), // required
 * //         MaxRange: Number("int"),
 * //       },
 * //     ],
 * //     Classification: "STRING_VALUE",
 * //     Configurations: [ // ConfigurationList
 * //       { // Configuration
 * //         Classification: "STRING_VALUE",
 * //         Configurations: [
 * //           {
 * //             Classification: "STRING_VALUE",
 * //             Configurations: "<ConfigurationList>",
 * //             Properties: { // StringMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         Properties: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     Properties: "<StringMap>",
 * //   },
 * //   BlockPublicAccessConfigurationMetadata: { // BlockPublicAccessConfigurationMetadata
 * //     CreationDateTime: new Date("TIMESTAMP"), // required
 * //     CreatedByArn: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBlockPublicAccessConfigurationCommandInput - {@link GetBlockPublicAccessConfigurationCommandInput}
 * @returns {@link GetBlockPublicAccessConfigurationCommandOutput}
 * @see {@link GetBlockPublicAccessConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBlockPublicAccessConfigurationCommandOutput} for command's `response` shape.
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
export class GetBlockPublicAccessConfigurationCommand extends $Command<
  GetBlockPublicAccessConfigurationCommandInput,
  GetBlockPublicAccessConfigurationCommandOutput,
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
  constructor(readonly input: GetBlockPublicAccessConfigurationCommandInput) {
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
  ): Handler<GetBlockPublicAccessConfigurationCommandInput, GetBlockPublicAccessConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBlockPublicAccessConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "GetBlockPublicAccessConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticMapReduce",
        operation: "GetBlockPublicAccessConfiguration",
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
    input: GetBlockPublicAccessConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetBlockPublicAccessConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBlockPublicAccessConfigurationCommandOutput> {
    return de_GetBlockPublicAccessConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
