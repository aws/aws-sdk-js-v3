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

import { CloudControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudControlClient";
import {
  ListResourcesInput,
  ListResourcesInputFilterSensitiveLog,
  ListResourcesOutput,
  ListResourcesOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListResourcesCommand, se_ListResourcesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListResourcesCommand}.
 */
export interface ListResourcesCommandInput extends ListResourcesInput {}
/**
 * @public
 *
 * The output of {@link ListResourcesCommand}.
 */
export interface ListResourcesCommandOutput extends ListResourcesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the specified resources. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-list.html">Discovering resources</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
 *          <p>You can use this action to return information about existing resources in your account and
 *       Amazon Web Services Region, whether those resources were provisioned using Cloud Control API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudControlClient, ListResourcesCommand } from "@aws-sdk/client-cloudcontrol"; // ES Modules import
 * // const { CloudControlClient, ListResourcesCommand } = require("@aws-sdk/client-cloudcontrol"); // CommonJS import
 * const client = new CloudControlClient(config);
 * const input = { // ListResourcesInput
 *   TypeName: "STRING_VALUE", // required
 *   TypeVersionId: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ResourceModel: "STRING_VALUE",
 * };
 * const command = new ListResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcesOutput
 * //   TypeName: "STRING_VALUE",
 * //   ResourceDescriptions: [ // ResourceDescriptions
 * //     { // ResourceDescription
 * //       Identifier: "STRING_VALUE",
 * //       Properties: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourcesCommandInput - {@link ListResourcesCommandInput}
 * @returns {@link ListResourcesCommandOutput}
 * @see {@link ListResourcesCommandInput} for command's `input` shape.
 * @see {@link ListResourcesCommandOutput} for command's `response` shape.
 * @see {@link CloudControlClientResolvedConfig | config} for CloudControlClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource with the name requested already exists.</p>
 *
 * @throws {@link GeneralServiceException} (client fault)
 *  <p>The resource handler has returned that the downstream service generated an error that
 *       doesn't map to any other handler error code.</p>
 *
 * @throws {@link HandlerFailureException} (server fault)
 *  <p>The resource handler has failed without a returning a more specific error code. This can
 *       include timeouts.</p>
 *
 * @throws {@link HandlerInternalFailureException} (server fault)
 *  <p>The resource handler has returned that an unexpected error occurred within the resource
 *       handler.</p>
 *
 * @throws {@link InvalidCredentialsException} (client fault)
 *  <p>The resource handler has returned that the credentials provided by the user are
 *       invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The resource handler has returned that invalid input from the user has generated a generic
 *       exception.</p>
 *
 * @throws {@link NetworkFailureException} (server fault)
 *  <p>The resource handler has returned that the request couldn't be completed due to networking
 *       issues, such as a failure to receive a response from the server.</p>
 *
 * @throws {@link NotStabilizedException} (client fault)
 *  <p>The resource handler has returned that the downstream resource failed to complete all of
 *       its ready-state checks.</p>
 *
 * @throws {@link NotUpdatableException} (client fault)
 *  <p>One or more properties included in this resource operation are defined as create-only, and
 *       therefore can't be updated.</p>
 *
 * @throws {@link PrivateTypeException} (client fault)
 *  <p>Cloud Control API hasn't received a valid response from the resource handler, due to a configuration
 *       error. This includes issues such as the resource handler returning an invalid response, or
 *       timing out.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource is temporarily unavailable to be acted upon. For example, if the resource is
 *       currently undergoing an operation and can't be acted upon until that operation is
 *       finished.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource with the specified identifier can't be found.</p>
 *
 * @throws {@link ServiceInternalErrorException} (server fault)
 *  <p>The resource handler has returned that the downstream service returned an internal error,
 *       typically with a <code>5XX HTTP</code> status code.</p>
 *
 * @throws {@link ServiceLimitExceededException} (client fault)
 *  <p>The resource handler has returned that a non-transient resource limit was reached on the
 *       service side.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TypeNotFoundException} (client fault)
 *  <p>The specified extension doesn't exist in the CloudFormation registry.</p>
 *
 * @throws {@link UnsupportedActionException} (client fault)
 *  <p>The specified resource doesn't support this resource operation.</p>
 *
 * @throws {@link CloudControlServiceException}
 * <p>Base exception class for all service exceptions from CloudControl service.</p>
 *
 */
export class ListResourcesCommand extends $Command<
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
  CloudControlClientResolvedConfig
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
  constructor(readonly input: ListResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResourcesCommandInput, ListResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListResourcesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudControlClient";
    const commandName = "ListResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResourcesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListResourcesOutputFilterSensitiveLog,
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
  private serialize(input: ListResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListResourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListResourcesCommandOutput> {
    return de_ListResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
