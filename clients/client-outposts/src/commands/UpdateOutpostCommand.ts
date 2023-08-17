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

import { UpdateOutpostInput, UpdateOutpostOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_UpdateOutpostCommand, se_UpdateOutpostCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateOutpostCommand}.
 */
export interface UpdateOutpostCommandInput extends UpdateOutpostInput {}
/**
 * @public
 *
 * The output of {@link UpdateOutpostCommand}.
 */
export interface UpdateOutpostCommandOutput extends UpdateOutpostOutput, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Updates an Outpost.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, UpdateOutpostCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, UpdateOutpostCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const input = { // UpdateOutpostInput
 *   OutpostId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   SupportedHardwareType: "RACK" || "SERVER",
 * };
 * const command = new UpdateOutpostCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOutpostOutput
 * //   Outpost: { // Outpost
 * //     OutpostId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     OutpostArn: "STRING_VALUE",
 * //     SiteId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     LifeCycleStatus: "STRING_VALUE",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     AvailabilityZoneId: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     SiteArn: "STRING_VALUE",
 * //     SupportedHardwareType: "RACK" || "SERVER",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateOutpostCommandInput - {@link UpdateOutpostCommandInput}
 * @returns {@link UpdateOutpostCommandOutput}
 * @see {@link UpdateOutpostCommandInput} for command's `input` shape.
 * @see {@link UpdateOutpostCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting this resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 */
export class UpdateOutpostCommand extends $Command<
  UpdateOutpostCommandInput,
  UpdateOutpostCommandOutput,
  OutpostsClientResolvedConfig
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
  constructor(readonly input: UpdateOutpostCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateOutpostCommandInput, UpdateOutpostCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateOutpostCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "UpdateOutpostCommand";
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
  private serialize(input: UpdateOutpostCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateOutpostCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateOutpostCommandOutput> {
    return de_UpdateOutpostCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
