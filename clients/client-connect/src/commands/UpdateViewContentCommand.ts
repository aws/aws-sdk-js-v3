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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  UpdateViewContentRequest,
  UpdateViewContentRequestFilterSensitiveLog,
  UpdateViewContentResponse,
  UpdateViewContentResponseFilterSensitiveLog,
} from "../models/models_2";
import { de_UpdateViewContentCommand, se_UpdateViewContentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateViewContentCommand}.
 */
export interface UpdateViewContentCommandInput extends UpdateViewContentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateViewContentCommand}.
 */
export interface UpdateViewContentCommandOutput extends UpdateViewContentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the view content of the given view identifier in the specified Amazon Connect
 *    instance.</p>
 *          <p>It performs content validation if <code>Status</code> is set to <code>SAVED</code> and
 *    performs full content validation if <code>Status</code> is <code>PUBLISHED</code>. Note that the
 *     <code>$SAVED</code> alias' content will always be updated, but the <code>$LATEST</code> alias'
 *    content will only be updated if <code>Status</code> is <code>PUBLISHED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateViewContentCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateViewContentCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateViewContentRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ViewId: "STRING_VALUE", // required
 *   Status: "PUBLISHED" || "SAVED", // required
 *   Content: { // ViewInputContent
 *     Template: "STRING_VALUE",
 *     Actions: [ // ViewActions
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateViewContentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateViewContentResponse
 * //   View: { // View
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Status: "PUBLISHED" || "SAVED",
 * //     Type: "CUSTOMER_MANAGED" || "AWS_MANAGED",
 * //     Description: "STRING_VALUE",
 * //     Version: Number("int"),
 * //     VersionDescription: "STRING_VALUE",
 * //     Content: { // ViewContent
 * //       InputSchema: "STRING_VALUE",
 * //       Template: "STRING_VALUE",
 * //       Actions: [ // ViewActions
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     ViewContentSha256: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateViewContentCommandInput - {@link UpdateViewContentCommandInput}
 * @returns {@link UpdateViewContentCommandOutput}
 * @see {@link UpdateViewContentCommandInput} for command's `input` shape.
 * @see {@link UpdateViewContentCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>That resource is already in use. Please try another.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Displayed when rate-related API limits are exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class UpdateViewContentCommand extends $Command<
  UpdateViewContentCommandInput,
  UpdateViewContentCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: UpdateViewContentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateViewContentCommandInput, UpdateViewContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateViewContentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateViewContentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateViewContentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateViewContentResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "UpdateViewContent",
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
  private serialize(input: UpdateViewContentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateViewContentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateViewContentCommandOutput> {
    return de_UpdateViewContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
