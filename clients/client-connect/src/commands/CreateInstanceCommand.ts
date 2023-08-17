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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  CreateInstanceRequest,
  CreateInstanceRequestFilterSensitiveLog,
  CreateInstanceResponse,
} from "../models/models_0";
import { de_CreateInstanceCommand, se_CreateInstanceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateInstanceCommand}.
 */
export interface CreateInstanceCommandInput extends CreateInstanceRequest {}
/**
 * @public
 *
 * The output of {@link CreateInstanceCommand}.
 */
export interface CreateInstanceCommandOutput extends CreateInstanceResponse, __MetadataBearer {}

/**
 * @public
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Initiates an Amazon Connect instance with all the supported channels enabled. It does
 *    not attach any storage, such as Amazon Simple Storage Service (Amazon S3) or Amazon Kinesis. It
 *    also does not allow for any configurations on features, such as Contact Lens for Amazon Connect. </p>
 *          <p>Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days.
 * If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances.
 * You must wait 30 days before you can restart creating and deleting instances in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateInstanceCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateInstanceCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // CreateInstanceRequest
 *   ClientToken: "STRING_VALUE",
 *   IdentityManagementType: "SAML" || "CONNECT_MANAGED" || "EXISTING_DIRECTORY", // required
 *   InstanceAlias: "STRING_VALUE",
 *   DirectoryId: "STRING_VALUE",
 *   InboundCallsEnabled: true || false, // required
 *   OutboundCallsEnabled: true || false, // required
 * };
 * const command = new CreateInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateInstanceResponse
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateInstanceCommandInput - {@link CreateInstanceCommandInput}
 * @returns {@link CreateInstanceCommandOutput}
 * @see {@link CreateInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class CreateInstanceCommand extends $Command<
  CreateInstanceCommandInput,
  CreateInstanceCommandOutput,
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
  constructor(readonly input: CreateInstanceCommandInput) {
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
  ): Handler<CreateInstanceCommandInput, CreateInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "CreateInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateInstanceRequestFilterSensitiveLog,
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
  private serialize(input: CreateInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateInstanceCommandOutput> {
    return de_CreateInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
