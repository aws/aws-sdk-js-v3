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
  CreateViewRequest,
  CreateViewRequestFilterSensitiveLog,
  CreateViewResponse,
  CreateViewResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateViewCommand, se_CreateViewCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateViewCommand}.
 */
export interface CreateViewCommandInput extends CreateViewRequest {}
/**
 * @public
 *
 * The output of {@link CreateViewCommand}.
 */
export interface CreateViewCommandOutput extends CreateViewResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new view with the possible status of <code>SAVED</code> or
 *    <code>PUBLISHED</code>.</p>
 *          <p>The views will have a unique name for each connect instance.</p>
 *          <p>It performs basic content validation if the status is <code>SAVED</code> or full content
 *    validation if the status is set to <code>PUBLISHED</code>. An error is returned if validation
 *    fails. It associates either the <code>$SAVED</code> qualifier or both of the <code>$SAVED</code>
 *    and <code>$LATEST</code> qualifiers with the provided view content based on the status. The view
 *    is idempotent if ClientToken is provided.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateViewCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateViewCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // CreateViewRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   Status: "PUBLISHED" || "SAVED", // required
 *   Content: { // ViewInputContent
 *     Template: "STRING_VALUE",
 *     Actions: [ // ViewActions
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateViewCommand(input);
 * const response = await client.send(command);
 * // { // CreateViewResponse
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
 * @param CreateViewCommandInput - {@link CreateViewCommandInput}
 * @returns {@link CreateViewCommandOutput}
 * @see {@link CreateViewCommandInput} for command's `input` shape.
 * @see {@link CreateViewCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Displayed when rate-related API limits are exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class CreateViewCommand extends $Command<
  CreateViewCommandInput,
  CreateViewCommandOutput,
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
  constructor(readonly input: CreateViewCommandInput) {
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
  ): Handler<CreateViewCommandInput, CreateViewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateViewCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "CreateViewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateViewRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateViewResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "CreateView",
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
  private serialize(input: CreateViewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateViewCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateViewCommandOutput> {
    return de_CreateViewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
