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

import { UpdateAccessRequest, UpdateAccessResponse } from "../models/models_0";
import { de_UpdateAccessCommand, se_UpdateAccessCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccessCommand}.
 */
export interface UpdateAccessCommandInput extends UpdateAccessRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccessCommand}.
 */
export interface UpdateAccessCommandOutput extends UpdateAccessResponse, __MetadataBearer {}

/**
 * @public
 * <p>Allows you to update parameters for the access specified in the <code>ServerID</code> and
 *       <code>ExternalID</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, UpdateAccessCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, UpdateAccessCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // UpdateAccessRequest
 *   HomeDirectory: "STRING_VALUE",
 *   HomeDirectoryType: "PATH" || "LOGICAL",
 *   HomeDirectoryMappings: [ // HomeDirectoryMappings
 *     { // HomeDirectoryMapEntry
 *       Entry: "STRING_VALUE", // required
 *       Target: "STRING_VALUE", // required
 *     },
 *   ],
 *   Policy: "STRING_VALUE",
 *   PosixProfile: { // PosixProfile
 *     Uid: Number("long"), // required
 *     Gid: Number("long"), // required
 *     SecondaryGids: [ // SecondaryGids
 *       Number("long"),
 *     ],
 *   },
 *   Role: "STRING_VALUE",
 *   ServerId: "STRING_VALUE", // required
 *   ExternalId: "STRING_VALUE", // required
 * };
 * const command = new UpdateAccessCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccessResponse
 * //   ServerId: "STRING_VALUE", // required
 * //   ExternalId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateAccessCommandInput - {@link UpdateAccessCommandInput}
 * @returns {@link UpdateAccessCommandOutput}
 * @see {@link UpdateAccessCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The requested resource does not exist.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 */
export class UpdateAccessCommand extends $Command<
  UpdateAccessCommandInput,
  UpdateAccessCommandOutput,
  TransferClientResolvedConfig
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
  constructor(readonly input: UpdateAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAccessCommandInput, UpdateAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateAccessCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "UpdateAccessCommand";
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
  private serialize(input: UpdateAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAccessCommandOutput> {
    return de_UpdateAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
