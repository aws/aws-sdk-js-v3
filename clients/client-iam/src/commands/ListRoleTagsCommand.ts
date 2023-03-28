// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListRoleTagsRequest, ListRoleTagsResponse } from "../models/models_0";
import { deserializeAws_queryListRoleTagsCommand, serializeAws_queryListRoleTagsCommand } from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link ListRoleTagsCommand}.
 */
export interface ListRoleTagsCommandInput extends ListRoleTagsRequest {}
/**
 * @public
 *
 * The output of {@link ListRoleTagsCommand}.
 */
export interface ListRoleTagsCommandOutput extends ListRoleTagsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the tags that are attached to the specified role. The returned list of tags is
 *       sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListRoleTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListRoleTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListRoleTagsRequest
 *   RoleName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListRoleTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListRoleTagsCommandInput - {@link ListRoleTagsCommandInput}
 * @returns {@link ListRoleTagsCommandOutput}
 * @see {@link ListRoleTagsCommandInput} for command's `input` shape.
 * @see {@link ListRoleTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 *
 * @example To list the tags attached to an IAM role
 * ```javascript
 * // The following example shows how to list the tags attached to a role.
 * const input = {
 *   "RoleName": "taggedrole1"
 * };
 * const command = new ListRoleTagsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "IsTruncated": false,
 *   "Tags": [
 *     {
 *       "Key": "Dept",
 *       "Value": "12345"
 *     },
 *     {
 *       "Key": "Team",
 *       "Value": "Accounting"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-the-tags-attached-to-an-iam-role-1506719238376
 * ```
 *
 */
export class ListRoleTagsCommand extends $Command<
  ListRoleTagsCommandInput,
  ListRoleTagsCommandOutput,
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
  constructor(readonly input: ListRoleTagsCommandInput) {
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
  ): Handler<ListRoleTagsCommandInput, ListRoleTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListRoleTagsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListRoleTagsCommand";
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
  private serialize(input: ListRoleTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListRoleTagsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRoleTagsCommandOutput> {
    return deserializeAws_queryListRoleTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
