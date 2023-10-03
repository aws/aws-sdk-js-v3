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

import { CreateLinkInput, CreateLinkOutput } from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import { de_CreateLinkCommand, se_CreateLinkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLinkCommand}.
 */
export interface CreateLinkCommandInput extends CreateLinkInput {}
/**
 * @public
 *
 * The output of {@link CreateLinkCommand}.
 */
export interface CreateLinkCommandOutput extends CreateLinkOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a link between a source account and a sink that you have created in a monitoring account.</p>
 *          <p>Before you create a link, you must create a sink in the monitoring account and create a
 *             sink policy in that account. The sink policy must permit the source account to link to it. You
 *             can grant permission to source accounts by granting permission to an entire organization or to
 *             individual accounts.</p>
 *          <p>For more information, see
 *             <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_CreateSink.html">CreateSink</a> and
 *             <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html">PutSinkPolicy</a>.</p>
 *          <p>Each monitoring account can be linked to as many as 100,000 source accounts.</p>
 *          <p>Each source account can be linked to as many as five monitoring accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, CreateLinkCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, CreateLinkCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * const client = new OAMClient(config);
 * const input = { // CreateLinkInput
 *   LabelTemplate: "STRING_VALUE", // required
 *   ResourceTypes: [ // ResourceTypesInput // required
 *     "AWS::CloudWatch::Metric" || "AWS::Logs::LogGroup" || "AWS::XRay::Trace" || "AWS::ApplicationInsights::Application",
 *   ],
 *   SinkIdentifier: "STRING_VALUE", // required
 *   Tags: { // TagMapInput
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateLinkCommand(input);
 * const response = await client.send(command);
 * // { // CreateLinkOutput
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Label: "STRING_VALUE",
 * //   LabelTemplate: "STRING_VALUE",
 * //   ResourceTypes: [ // ResourceTypesOutput
 * //     "STRING_VALUE",
 * //   ],
 * //   SinkArn: "STRING_VALUE",
 * //   Tags: { // TagMapOutput
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateLinkCommandInput - {@link CreateLinkCommandInput}
 * @returns {@link CreateLinkCommandOutput}
 * @see {@link CreateLinkCommandInput} for command's `input` shape.
 * @see {@link CreateLinkCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing from the request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link OAMServiceException}
 * <p>Base exception class for all service exceptions from OAM service.</p>
 *
 */
export class CreateLinkCommand extends $Command<
  CreateLinkCommandInput,
  CreateLinkCommandOutput,
  OAMClientResolvedConfig
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
  constructor(readonly input: CreateLinkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLinkCommandInput, CreateLinkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateLinkCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OAMClient";
    const commandName = "CreateLinkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "oamservice",
        operation: "CreateLink",
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
  private serialize(input: CreateLinkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLinkCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLinkCommandOutput> {
    return de_CreateLinkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
