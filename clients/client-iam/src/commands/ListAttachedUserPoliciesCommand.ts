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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListAttachedUserPoliciesRequest, ListAttachedUserPoliciesResponse } from "../models/models_0";
import { de_ListAttachedUserPoliciesCommand, se_ListAttachedUserPoliciesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAttachedUserPoliciesCommand}.
 */
export interface ListAttachedUserPoliciesCommandInput extends ListAttachedUserPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListAttachedUserPoliciesCommand}.
 */
export interface ListAttachedUserPoliciesCommandOutput extends ListAttachedUserPoliciesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all managed policies that are attached to the specified IAM user.</p>
 *          <p>An IAM user can also have inline policies embedded with it. To list the inline
 *             policies for a user, use <a>ListUserPolicies</a>. For information about
 *             policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters. You can use the <code>PathPrefix</code> parameter to limit the list of
 *             policies to only those matching the specified path prefix. If there are no policies
 *             attached to the specified group (or none that match the specified path prefix), the
 *             operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListAttachedUserPoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListAttachedUserPoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListAttachedUserPoliciesRequest
 *   UserName: "STRING_VALUE", // required
 *   PathPrefix: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListAttachedUserPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListAttachedUserPoliciesResponse
 * //   AttachedPolicies: [ // attachedPoliciesListType
 * //     { // AttachedPolicy
 * //       PolicyName: "STRING_VALUE",
 * //       PolicyArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAttachedUserPoliciesCommandInput - {@link ListAttachedUserPoliciesCommandInput}
 * @returns {@link ListAttachedUserPoliciesCommandOutput}
 * @see {@link ListAttachedUserPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAttachedUserPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 */
export class ListAttachedUserPoliciesCommand extends $Command<
  ListAttachedUserPoliciesCommandInput,
  ListAttachedUserPoliciesCommandOutput,
  IAMClientResolvedConfig
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
  constructor(readonly input: ListAttachedUserPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAttachedUserPoliciesCommandInput, ListAttachedUserPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAttachedUserPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListAttachedUserPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "ListAttachedUserPolicies",
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
  private serialize(input: ListAttachedUserPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAttachedUserPoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAttachedUserPoliciesCommandOutput> {
    return de_ListAttachedUserPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
