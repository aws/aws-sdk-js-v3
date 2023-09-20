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

import { CreateOutpostInput, CreateOutpostOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_CreateOutpostCommand, se_CreateOutpostCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateOutpostCommand}.
 */
export interface CreateOutpostCommandInput extends CreateOutpostInput {}
/**
 * @public
 *
 * The output of {@link CreateOutpostCommand}.
 */
export interface CreateOutpostCommandOutput extends CreateOutpostOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Outpost.</p>
 *          <p>You can specify either an Availability one or an AZ ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, CreateOutpostCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, CreateOutpostCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const input = { // CreateOutpostInput
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   SiteId: "STRING_VALUE", // required
 *   AvailabilityZone: "STRING_VALUE",
 *   AvailabilityZoneId: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   SupportedHardwareType: "RACK" || "SERVER",
 * };
 * const command = new CreateOutpostCommand(input);
 * const response = await client.send(command);
 * // { // CreateOutpostOutput
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
 * @param CreateOutpostCommandInput - {@link CreateOutpostCommandInput}
 * @returns {@link CreateOutpostCommandOutput}
 * @see {@link CreateOutpostCommandInput} for command's `input` shape.
 * @see {@link CreateOutpostCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded a service quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 */
export class CreateOutpostCommand extends $Command<
  CreateOutpostCommandInput,
  CreateOutpostCommandOutput,
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
  constructor(readonly input: CreateOutpostCommandInput) {
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
  ): Handler<CreateOutpostCommandInput, CreateOutpostCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateOutpostCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "CreateOutpostCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OutpostsOlafService",
        operation: "CreateOutpost",
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
  private serialize(input: CreateOutpostCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateOutpostCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateOutpostCommandOutput> {
    return de_CreateOutpostCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
