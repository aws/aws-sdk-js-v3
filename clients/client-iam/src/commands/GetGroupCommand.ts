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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetGroupRequest, GetGroupResponse } from "../models/models_0";
import { de_GetGroupCommand, se_GetGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetGroupCommand}.
 */
export interface GetGroupCommandInput extends GetGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetGroupCommand}.
 */
export interface GetGroupCommandOutput extends GetGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p> Returns a list of IAM users that are in the specified IAM group. You can paginate
 *             the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetGroupCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetGroupCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetGroupRequest
 *   GroupName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new GetGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupResponse
 * //   Group: { // Group
 * //     Path: "STRING_VALUE", // required
 * //     GroupName: "STRING_VALUE", // required
 * //     GroupId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     CreateDate: new Date("TIMESTAMP"), // required
 * //   },
 * //   Users: [ // userListType // required
 * //     { // User
 * //       Path: "STRING_VALUE", // required
 * //       UserName: "STRING_VALUE", // required
 * //       UserId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       CreateDate: new Date("TIMESTAMP"), // required
 * //       PasswordLastUsed: new Date("TIMESTAMP"),
 * //       PermissionsBoundary: { // AttachedPermissionsBoundary
 * //         PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //         PermissionsBoundaryArn: "STRING_VALUE",
 * //       },
 * //       Tags: [ // tagListType
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetGroupCommandInput - {@link GetGroupCommandInput}
 * @returns {@link GetGroupCommandOutput}
 * @see {@link GetGroupCommandInput} for command's `input` shape.
 * @see {@link GetGroupCommandOutput} for command's `response` shape.
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
 */
export class GetGroupCommand extends $Command<GetGroupCommandInput, GetGroupCommandOutput, IAMClientResolvedConfig> {
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
  constructor(readonly input: GetGroupCommandInput) {
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
  ): Handler<GetGroupCommandInput, GetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetGroupCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetGroupCommand";
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
  private serialize(input: GetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGroupCommandOutput> {
    return de_GetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
