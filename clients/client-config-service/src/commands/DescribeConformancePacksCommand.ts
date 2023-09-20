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
import { DescribeConformancePacksRequest, DescribeConformancePacksResponse } from "../models/models_0";
import { de_DescribeConformancePacksCommand, se_DescribeConformancePacksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeConformancePacksCommand}.
 */
export interface DescribeConformancePacksCommandInput extends DescribeConformancePacksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConformancePacksCommand}.
 */
export interface DescribeConformancePacksCommandOutput extends DescribeConformancePacksResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of one or more conformance packs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConformancePacksCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConformancePacksCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeConformancePacksRequest
 *   ConformancePackNames: [ // ConformancePackNamesList
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeConformancePacksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConformancePacksResponse
 * //   ConformancePackDetails: [ // ConformancePackDetailList
 * //     { // ConformancePackDetail
 * //       ConformancePackName: "STRING_VALUE", // required
 * //       ConformancePackArn: "STRING_VALUE", // required
 * //       ConformancePackId: "STRING_VALUE", // required
 * //       DeliveryS3Bucket: "STRING_VALUE",
 * //       DeliveryS3KeyPrefix: "STRING_VALUE",
 * //       ConformancePackInputParameters: [ // ConformancePackInputParameters
 * //         { // ConformancePackInputParameter
 * //           ParameterName: "STRING_VALUE", // required
 * //           ParameterValue: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       LastUpdateRequestedTime: new Date("TIMESTAMP"),
 * //       CreatedBy: "STRING_VALUE",
 * //       TemplateSSMDocumentDetails: { // TemplateSSMDocumentDetails
 * //         DocumentName: "STRING_VALUE", // required
 * //         DocumentVersion: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConformancePacksCommandInput - {@link DescribeConformancePacksCommandInput}
 * @returns {@link DescribeConformancePacksCommandOutput}
 * @see {@link DescribeConformancePacksCommandInput} for command's `input` shape.
 * @see {@link DescribeConformancePacksCommandOutput} for command's `response` shape.
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
 * @throws {@link NoSuchConformancePackException} (client fault)
 *  <p>You specified one or more conformance packs that do not exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class DescribeConformancePacksCommand extends $Command<
  DescribeConformancePacksCommandInput,
  DescribeConformancePacksCommandOutput,
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
  constructor(readonly input: DescribeConformancePacksCommandInput) {
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
  ): Handler<DescribeConformancePacksCommandInput, DescribeConformancePacksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeConformancePacksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeConformancePacksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StarlingDoveService",
        operation: "DescribeConformancePacks",
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
  private serialize(input: DescribeConformancePacksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeConformancePacksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeConformancePacksCommandOutput> {
    return de_DescribeConformancePacksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
