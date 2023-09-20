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

import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { DataflowEndpointGroupIdResponse, DeleteDataflowEndpointGroupRequest } from "../models/models_0";
import {
  de_DeleteDataflowEndpointGroupCommand,
  se_DeleteDataflowEndpointGroupCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataflowEndpointGroupCommand}.
 */
export interface DeleteDataflowEndpointGroupCommandInput extends DeleteDataflowEndpointGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataflowEndpointGroupCommand}.
 */
export interface DeleteDataflowEndpointGroupCommandOutput extends DataflowEndpointGroupIdResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a dataflow endpoint group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, DeleteDataflowEndpointGroupCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, DeleteDataflowEndpointGroupCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // DeleteDataflowEndpointGroupRequest
 *   dataflowEndpointGroupId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataflowEndpointGroupCommand(input);
 * const response = await client.send(command);
 * // { // DataflowEndpointGroupIdResponse
 * //   dataflowEndpointGroupId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteDataflowEndpointGroupCommandInput - {@link DeleteDataflowEndpointGroupCommandInput}
 * @returns {@link DeleteDataflowEndpointGroupCommandOutput}
 * @see {@link DeleteDataflowEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDataflowEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 */
export class DeleteDataflowEndpointGroupCommand extends $Command<
  DeleteDataflowEndpointGroupCommandInput,
  DeleteDataflowEndpointGroupCommandOutput,
  GroundStationClientResolvedConfig
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
  constructor(readonly input: DeleteDataflowEndpointGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDataflowEndpointGroupCommandInput, DeleteDataflowEndpointGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDataflowEndpointGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "DeleteDataflowEndpointGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GroundStation",
        operation: "DeleteDataflowEndpointGroup",
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
  private serialize(input: DeleteDataflowEndpointGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteDataflowEndpointGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteDataflowEndpointGroupCommandOutput> {
    return de_DeleteDataflowEndpointGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
