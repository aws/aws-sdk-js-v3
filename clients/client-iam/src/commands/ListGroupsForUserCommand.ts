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
import { ListGroupsForUserRequest, ListGroupsForUserResponse } from "../models/models_0";
import { de_ListGroupsForUserCommand, se_ListGroupsForUserCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListGroupsForUserCommand}.
 */
export interface ListGroupsForUserCommandInput extends ListGroupsForUserRequest {}
/**
 * @public
 *
 * The output of {@link ListGroupsForUserCommand}.
 */
export interface ListGroupsForUserCommandOutput extends ListGroupsForUserResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the IAM groups that the specified IAM user belongs to.</p>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListGroupsForUserCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListGroupsForUserCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListGroupsForUserRequest
 *   UserName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListGroupsForUserCommand(input);
 * const response = await client.send(command);
 * // { // ListGroupsForUserResponse
 * //   Groups: [ // groupListType // required
 * //     { // Group
 * //       Path: "STRING_VALUE", // required
 * //       GroupName: "STRING_VALUE", // required
 * //       GroupId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       CreateDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGroupsForUserCommandInput - {@link ListGroupsForUserCommandInput}
 * @returns {@link ListGroupsForUserCommandOutput}
 * @see {@link ListGroupsForUserCommandInput} for command's `input` shape.
 * @see {@link ListGroupsForUserCommandOutput} for command's `response` shape.
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
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To list the groups that an IAM user belongs to
 * ```javascript
 * // The following command displays the groups that the IAM user named Bob belongs to.
 * const input = {
 *   "UserName": "Bob"
 * };
 * const command = new ListGroupsForUserCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Groups": [
 *     {
 *       "Arn": "arn:aws:iam::123456789012:group/division_abc/subdivision_xyz/product_1234/engineering/Test",
 *       "CreateDate": "2016-11-30T14:10:01.156Z",
 *       "GroupId": "AGP2111111111EXAMPLE",
 *       "GroupName": "Test",
 *       "Path": "/division_abc/subdivision_xyz/product_1234/engineering/"
 *     },
 *     {
 *       "Arn": "arn:aws:iam::123456789012:group/division_abc/subdivision_xyz/product_1234/Managers",
 *       "CreateDate": "2016-06-12T20:14:52.032Z",
 *       "GroupId": "AGPI222222222SEXAMPLE",
 *       "GroupName": "Managers",
 *       "Path": "/division_abc/subdivision_xyz/product_1234/"
 *     }
 *   ]
 * }
 * *\/
 * // example id: 278ec2ee-fc28-4136-83fb-433af0ae46a2
 * ```
 *
 */
export class ListGroupsForUserCommand extends $Command<
  ListGroupsForUserCommandInput,
  ListGroupsForUserCommandOutput,
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
  constructor(readonly input: ListGroupsForUserCommandInput) {
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
  ): Handler<ListGroupsForUserCommandInput, ListGroupsForUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListGroupsForUserCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListGroupsForUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "ListGroupsForUser",
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
  private serialize(input: ListGroupsForUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListGroupsForUserCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGroupsForUserCommandOutput> {
    return de_ListGroupsForUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
