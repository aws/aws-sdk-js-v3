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

import { ListResourceSharePermissionsRequest, ListResourceSharePermissionsResponse } from "../models/models_0";
import {
  de_ListResourceSharePermissionsCommand,
  se_ListResourceSharePermissionsCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListResourceSharePermissionsCommand}.
 */
export interface ListResourceSharePermissionsCommandInput extends ListResourceSharePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceSharePermissionsCommand}.
 */
export interface ListResourceSharePermissionsCommandOutput
  extends ListResourceSharePermissionsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the RAM permissions that are associated with a resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListResourceSharePermissionsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListResourceSharePermissionsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = { // ListResourceSharePermissionsRequest
 *   resourceShareArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListResourceSharePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceSharePermissionsResponse
 * //   permissions: [ // ResourceSharePermissionList
 * //     { // ResourceSharePermissionSummary
 * //       arn: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       defaultVersion: true || false,
 * //       name: "STRING_VALUE",
 * //       resourceType: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       isResourceTypeDefault: true || false,
 * //       permissionType: "CUSTOMER_MANAGED" || "AWS_MANAGED",
 * //       featureSet: "CREATED_FROM_POLICY" || "PROMOTING_TO_STANDARD" || "STANDARD",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceSharePermissionsCommandInput - {@link ListResourceSharePermissionsCommandInput}
 * @returns {@link ListResourceSharePermissionsCommandOutput}
 * @see {@link ListResourceSharePermissionsCommandInput} for command's `input` shape.
 * @see {@link ListResourceSharePermissionsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The operation failed because the specified value for <code>NextToken</code> isn't
 *             valid. You must specify a value you received in the <code>NextToken</code> response of a
 *             previous call to this operation.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The operation failed because the requested operation isn't permitted.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The operation failed because a specified resource couldn't be found.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 */
export class ListResourceSharePermissionsCommand extends $Command<
  ListResourceSharePermissionsCommandInput,
  ListResourceSharePermissionsCommandOutput,
  RAMClientResolvedConfig
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
  constructor(readonly input: ListResourceSharePermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResourceSharePermissionsCommandInput, ListResourceSharePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResourceSharePermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "ListResourceSharePermissionsCommand";
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
  private serialize(input: ListResourceSharePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListResourceSharePermissionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListResourceSharePermissionsCommandOutput> {
    return de_ListResourceSharePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
