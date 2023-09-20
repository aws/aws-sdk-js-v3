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

import { DescribeAllManagedProductsRequest, DescribeAllManagedProductsResponse } from "../models/models_0";
import { de_DescribeAllManagedProductsCommand, se_DescribeAllManagedProductsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAllManagedProductsCommand}.
 */
export interface DescribeAllManagedProductsCommandInput extends DescribeAllManagedProductsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAllManagedProductsCommand}.
 */
export interface DescribeAllManagedProductsCommandOutput extends DescribeAllManagedProductsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides high-level information for the Amazon Web Services Managed Rules rule groups and Amazon Web Services Marketplace managed rule groups. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DescribeAllManagedProductsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DescribeAllManagedProductsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const input = { // DescribeAllManagedProductsRequest
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 * };
 * const command = new DescribeAllManagedProductsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAllManagedProductsResponse
 * //   ManagedProducts: [ // ManagedProductDescriptors
 * //     { // ManagedProductDescriptor
 * //       VendorName: "STRING_VALUE",
 * //       ManagedRuleSetName: "STRING_VALUE",
 * //       ProductId: "STRING_VALUE",
 * //       ProductLink: "STRING_VALUE",
 * //       ProductTitle: "STRING_VALUE",
 * //       ProductDescription: "STRING_VALUE",
 * //       SnsTopicArn: "STRING_VALUE",
 * //       IsVersioningSupported: true || false,
 * //       IsAdvancedManagedRuleSet: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAllManagedProductsCommandInput - {@link DescribeAllManagedProductsCommandInput}
 * @returns {@link DescribeAllManagedProductsCommandOutput}
 * @see {@link DescribeAllManagedProductsCommandInput} for command's `input` shape.
 * @see {@link DescribeAllManagedProductsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation isn't valid. </p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 */
export class DescribeAllManagedProductsCommand extends $Command<
  DescribeAllManagedProductsCommandInput,
  DescribeAllManagedProductsCommandOutput,
  WAFV2ClientResolvedConfig
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
  constructor(readonly input: DescribeAllManagedProductsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAllManagedProductsCommandInput, DescribeAllManagedProductsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAllManagedProductsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "DescribeAllManagedProductsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWAF_20190729",
        operation: "DescribeAllManagedProducts",
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
  private serialize(input: DescribeAllManagedProductsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAllManagedProductsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAllManagedProductsCommandOutput> {
    return de_DescribeAllManagedProductsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
