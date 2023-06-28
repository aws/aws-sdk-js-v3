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

import { GetTemplateSyncStatusInput, GetTemplateSyncStatusOutput } from "../models/models_0";
import { de_GetTemplateSyncStatusCommand, se_GetTemplateSyncStatusCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTemplateSyncStatusCommand}.
 */
export interface GetTemplateSyncStatusCommandInput extends GetTemplateSyncStatusInput {}
/**
 * @public
 *
 * The output of {@link GetTemplateSyncStatusCommand}.
 */
export interface GetTemplateSyncStatusCommandOutput extends GetTemplateSyncStatusOutput, __MetadataBearer {}

/**
 * @public
 * <p>Get the status of a template sync.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetTemplateSyncStatusCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetTemplateSyncStatusCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // GetTemplateSyncStatusInput
 *   templateName: "STRING_VALUE", // required
 *   templateType: "STRING_VALUE", // required
 *   templateVersion: "STRING_VALUE", // required
 * };
 * const command = new GetTemplateSyncStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetTemplateSyncStatusOutput
 * //   latestSync: { // ResourceSyncAttempt
 * //     initialRevision: { // Revision
 * //       repositoryName: "STRING_VALUE", // required
 * //       repositoryProvider: "STRING_VALUE", // required
 * //       sha: "STRING_VALUE", // required
 * //       directory: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //     },
 * //     targetRevision: {
 * //       repositoryName: "STRING_VALUE", // required
 * //       repositoryProvider: "STRING_VALUE", // required
 * //       sha: "STRING_VALUE", // required
 * //       directory: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //     },
 * //     target: "STRING_VALUE", // required
 * //     startedAt: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //     events: [ // ResourceSyncEvents // required
 * //       { // ResourceSyncEvent
 * //         type: "STRING_VALUE", // required
 * //         externalId: "STRING_VALUE",
 * //         time: new Date("TIMESTAMP"), // required
 * //         event: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   latestSuccessfulSync: {
 * //     initialRevision: {
 * //       repositoryName: "STRING_VALUE", // required
 * //       repositoryProvider: "STRING_VALUE", // required
 * //       sha: "STRING_VALUE", // required
 * //       directory: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //     },
 * //     targetRevision: {
 * //       repositoryName: "STRING_VALUE", // required
 * //       repositoryProvider: "STRING_VALUE", // required
 * //       sha: "STRING_VALUE", // required
 * //       directory: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //     },
 * //     target: "STRING_VALUE", // required
 * //     startedAt: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //     events: [ // required
 * //       {
 * //         type: "STRING_VALUE", // required
 * //         externalId: "STRING_VALUE",
 * //         time: new Date("TIMESTAMP"), // required
 * //         event: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   desiredState: {
 * //     repositoryName: "STRING_VALUE", // required
 * //     repositoryProvider: "STRING_VALUE", // required
 * //     sha: "STRING_VALUE", // required
 * //     directory: "STRING_VALUE", // required
 * //     branch: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTemplateSyncStatusCommandInput - {@link GetTemplateSyncStatusCommandInput}
 * @returns {@link GetTemplateSyncStatusCommandOutput}
 * @see {@link GetTemplateSyncStatusCommandInput} for command's `input` shape.
 * @see {@link GetTemplateSyncStatusCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 */
export class GetTemplateSyncStatusCommand extends $Command<
  GetTemplateSyncStatusCommandInput,
  GetTemplateSyncStatusCommandOutput,
  ProtonClientResolvedConfig
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
  constructor(readonly input: GetTemplateSyncStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTemplateSyncStatusCommandInput, GetTemplateSyncStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTemplateSyncStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "GetTemplateSyncStatusCommand";
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
  private serialize(input: GetTemplateSyncStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTemplateSyncStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTemplateSyncStatusCommandOutput> {
    return de_GetTemplateSyncStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
