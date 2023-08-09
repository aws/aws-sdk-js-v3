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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeRulesPackagesRequest, DescribeRulesPackagesResponse } from "../models/models_0";
import { de_DescribeRulesPackagesCommand, se_DescribeRulesPackagesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRulesPackagesCommand}.
 */
export interface DescribeRulesPackagesCommandInput extends DescribeRulesPackagesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRulesPackagesCommand}.
 */
export interface DescribeRulesPackagesCommandOutput extends DescribeRulesPackagesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the rules packages that are specified by the ARNs of the rules
 *          packages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeRulesPackagesCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeRulesPackagesCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // DescribeRulesPackagesRequest
 *   rulesPackageArns: [ // BatchDescribeArnList // required
 *     "STRING_VALUE",
 *   ],
 *   locale: "STRING_VALUE",
 * };
 * const command = new DescribeRulesPackagesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRulesPackagesResponse
 * //   rulesPackages: [ // RulesPackageList // required
 * //     { // RulesPackage
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       version: "STRING_VALUE", // required
 * //       provider: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   failedItems: { // FailedItems // required
 * //     "<keys>": { // FailedItemDetails
 * //       failureCode: "STRING_VALUE", // required
 * //       retryable: true || false, // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRulesPackagesCommandInput - {@link DescribeRulesPackagesCommandInput}
 * @returns {@link DescribeRulesPackagesCommandOutput}
 * @see {@link DescribeRulesPackagesCommandInput} for command's `input` shape.
 * @see {@link DescribeRulesPackagesCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @example Describe rules packages
 * ```javascript
 * // Describes the rules packages that are specified by the ARNs of the rules packages.
 * const input = {
 *   "rulesPackageArns": [
 *     "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-JJOtZiqQ"
 *   ]
 * };
 * const command = new DescribeRulesPackagesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failedItems": {},
 *   "rulesPackages": [
 *     {
 *       "version": "1.1",
 *       "name": "Security Best Practices",
 *       "arn": "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-JJOtZiqQ",
 *       "description": "The rules in this package help determine whether your systems are configured securely.",
 *       "provider": "Amazon Web Services, Inc."
 *     }
 *   ]
 * }
 * *\/
 * // example id: describe-rules-packages-1481069641979
 * ```
 *
 */
export class DescribeRulesPackagesCommand extends $Command<
  DescribeRulesPackagesCommandInput,
  DescribeRulesPackagesCommandOutput,
  InspectorClientResolvedConfig
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
  constructor(readonly input: DescribeRulesPackagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRulesPackagesCommandInput, DescribeRulesPackagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRulesPackagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "DescribeRulesPackagesCommand";
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
  private serialize(input: DescribeRulesPackagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRulesPackagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRulesPackagesCommandOutput> {
    return de_DescribeRulesPackagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
