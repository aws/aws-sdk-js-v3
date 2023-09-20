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

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DeleteStorageVirtualMachineRequest, DeleteStorageVirtualMachineResponse } from "../models/models_0";
import { de_DeleteStorageVirtualMachineCommand, se_DeleteStorageVirtualMachineCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteStorageVirtualMachineCommand}.
 */
export interface DeleteStorageVirtualMachineCommandInput extends DeleteStorageVirtualMachineRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStorageVirtualMachineCommand}.
 */
export interface DeleteStorageVirtualMachineCommandOutput
  extends DeleteStorageVirtualMachineResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes an existing Amazon FSx for ONTAP storage virtual machine (SVM). Prior
 *         to deleting an SVM, you must delete all non-root volumes in the SVM, otherwise the operation will fail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteStorageVirtualMachineCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteStorageVirtualMachineCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // DeleteStorageVirtualMachineRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   StorageVirtualMachineId: "STRING_VALUE", // required
 * };
 * const command = new DeleteStorageVirtualMachineCommand(input);
 * const response = await client.send(command);
 * // { // DeleteStorageVirtualMachineResponse
 * //   StorageVirtualMachineId: "STRING_VALUE",
 * //   Lifecycle: "CREATED" || "CREATING" || "DELETING" || "FAILED" || "MISCONFIGURED" || "PENDING",
 * // };
 *
 * ```
 *
 * @param DeleteStorageVirtualMachineCommandInput - {@link DeleteStorageVirtualMachineCommandInput}
 * @returns {@link DeleteStorageVirtualMachineCommandOutput}
 * @see {@link DeleteStorageVirtualMachineCommandInput} for command's `input` shape.
 * @see {@link DeleteStorageVirtualMachineCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link StorageVirtualMachineNotFound} (client fault)
 *  <p>No FSx for ONTAP SVMs were found based upon the supplied parameters.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 */
export class DeleteStorageVirtualMachineCommand extends $Command<
  DeleteStorageVirtualMachineCommandInput,
  DeleteStorageVirtualMachineCommandOutput,
  FSxClientResolvedConfig
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
  constructor(readonly input: DeleteStorageVirtualMachineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteStorageVirtualMachineCommandInput, DeleteStorageVirtualMachineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteStorageVirtualMachineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DeleteStorageVirtualMachineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSSimbaAPIService_v20180301",
        operation: "DeleteStorageVirtualMachine",
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
  private serialize(input: DeleteStorageVirtualMachineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteStorageVirtualMachineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteStorageVirtualMachineCommandOutput> {
    return de_DeleteStorageVirtualMachineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
