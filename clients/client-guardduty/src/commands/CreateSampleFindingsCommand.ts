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

import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { CreateSampleFindingsRequest, CreateSampleFindingsResponse } from "../models/models_0";
import { de_CreateSampleFindingsCommand, se_CreateSampleFindingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSampleFindingsCommand}.
 */
export interface CreateSampleFindingsCommandInput extends CreateSampleFindingsRequest {}
/**
 * @public
 *
 * The output of {@link CreateSampleFindingsCommand}.
 */
export interface CreateSampleFindingsCommandOutput extends CreateSampleFindingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Generates sample findings of types specified by the list of finding types. If 'NULL' is
 *       specified for <code>findingTypes</code>, the API generates sample findings of all supported
 *       finding types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateSampleFindingsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateSampleFindingsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // CreateSampleFindingsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   FindingTypes: [ // FindingTypes
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateSampleFindingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateSampleFindingsCommandInput - {@link CreateSampleFindingsCommandInput}
 * @returns {@link CreateSampleFindingsCommandOutput}
 * @see {@link CreateSampleFindingsCommandInput} for command's `input` shape.
 * @see {@link CreateSampleFindingsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 */
export class CreateSampleFindingsCommand extends $Command<
  CreateSampleFindingsCommandInput,
  CreateSampleFindingsCommandOutput,
  GuardDutyClientResolvedConfig
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
  constructor(readonly input: CreateSampleFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSampleFindingsCommandInput, CreateSampleFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSampleFindingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "CreateSampleFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GuardDutyAPIService",
        operation: "CreateSampleFindings",
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
  private serialize(input: CreateSampleFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSampleFindingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSampleFindingsCommandOutput> {
    return de_CreateSampleFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
