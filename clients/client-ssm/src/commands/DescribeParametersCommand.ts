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

import { DescribeParametersRequest, DescribeParametersResult } from "../models/models_1";
import { de_DescribeParametersCommand, se_DescribeParametersCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeParametersCommand}.
 */
export interface DescribeParametersCommandInput extends DescribeParametersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeParametersCommand}.
 */
export interface DescribeParametersCommandOutput extends DescribeParametersResult, __MetadataBearer {}

/**
 * @public
 * <p>Get information about a parameter.</p>
 *          <p>Request results are returned on a best-effort basis. If you specify <code>MaxResults</code>
 *    in the request, the response includes information up to the limit specified. The number of items
 *    returned, however, can be between zero and the value of <code>MaxResults</code>. If the service
 *    reaches an internal limit while processing the results, it stops the operation and returns the
 *    matching values up to that point and a <code>NextToken</code>. You can specify the
 *     <code>NextToken</code> in a subsequent call to get the next set of results.</p>
 *          <important>
 *             <p>If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must
 *     also update the key alias the parameter uses to reference KMS. Otherwise,
 *      <code>DescribeParameters</code> retrieves whatever the original key alias was
 *     referencing.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeParametersCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeParametersCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeParametersRequest
 *   Filters: [ // ParametersFilterList
 *     { // ParametersFilter
 *       Key: "Name" || "Type" || "KeyId", // required
 *       Values: [ // ParametersFilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ParameterFilters: [ // ParameterStringFilterList
 *     { // ParameterStringFilter
 *       Key: "STRING_VALUE", // required
 *       Option: "STRING_VALUE",
 *       Values: [ // ParameterStringFilterValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeParametersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeParametersResult
 * //   Parameters: [ // ParameterMetadataList
 * //     { // ParameterMetadata
 * //       Name: "STRING_VALUE",
 * //       Type: "String" || "StringList" || "SecureString",
 * //       KeyId: "STRING_VALUE",
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       LastModifiedUser: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       AllowedPattern: "STRING_VALUE",
 * //       Version: Number("long"),
 * //       Tier: "Standard" || "Advanced" || "Intelligent-Tiering",
 * //       Policies: [ // ParameterPolicyList
 * //         { // ParameterInlinePolicy
 * //           PolicyText: "STRING_VALUE",
 * //           PolicyType: "STRING_VALUE",
 * //           PolicyStatus: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DataType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeParametersCommandInput - {@link DescribeParametersCommandInput}
 * @returns {@link DescribeParametersCommandOutput}
 * @see {@link DescribeParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeParametersCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidFilterKey} (client fault)
 *  <p>The specified key isn't valid.</p>
 *
 * @throws {@link InvalidFilterOption} (client fault)
 *  <p>The specified filter option isn't valid. Valid options are Equals and BeginsWith. For Path
 *    filter, valid options are Recursive and OneLevel.</p>
 *
 * @throws {@link InvalidFilterValue} (client fault)
 *  <p>The filter value isn't valid. Verify the value and try again.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class DescribeParametersCommand extends $Command<
  DescribeParametersCommandInput,
  DescribeParametersCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: DescribeParametersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeParametersCommandInput, DescribeParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeParametersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "DescribeParameters",
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
  private serialize(input: DescribeParametersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeParametersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeParametersCommandOutput> {
    return de_DescribeParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
