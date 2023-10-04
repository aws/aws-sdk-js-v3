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

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import {
  ListEnvironmentProfilesInput,
  ListEnvironmentProfilesInputFilterSensitiveLog,
  ListEnvironmentProfilesOutput,
  ListEnvironmentProfilesOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListEnvironmentProfilesCommand, se_ListEnvironmentProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEnvironmentProfilesCommand}.
 */
export interface ListEnvironmentProfilesCommandInput extends ListEnvironmentProfilesInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentProfilesCommand}.
 */
export interface ListEnvironmentProfilesCommandOutput extends ListEnvironmentProfilesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists Amazon DataZone environment profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListEnvironmentProfilesCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListEnvironmentProfilesCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // ListEnvironmentProfilesInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   awsAccountId: "STRING_VALUE",
 *   awsAccountRegion: "STRING_VALUE",
 *   environmentBlueprintIdentifier: "STRING_VALUE",
 *   projectIdentifier: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEnvironmentProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentProfilesOutput
 * //   items: [ // EnvironmentProfileSummaries // required
 * //     { // EnvironmentProfileSummary
 * //       id: "STRING_VALUE", // required
 * //       domainId: "STRING_VALUE", // required
 * //       awsAccountId: "STRING_VALUE",
 * //       awsAccountRegion: "STRING_VALUE",
 * //       createdBy: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       environmentBlueprintId: "STRING_VALUE", // required
 * //       projectId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnvironmentProfilesCommandInput - {@link ListEnvironmentProfilesCommandInput}
 * @returns {@link ListEnvironmentProfilesCommandOutput}
 * @see {@link ListEnvironmentProfilesCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentProfilesCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 */
export class ListEnvironmentProfilesCommand extends $Command<
  ListEnvironmentProfilesCommandInput,
  ListEnvironmentProfilesCommandOutput,
  DataZoneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListEnvironmentProfilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataZoneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEnvironmentProfilesCommandInput, ListEnvironmentProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEnvironmentProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "ListEnvironmentProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEnvironmentProfilesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListEnvironmentProfilesOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "ListEnvironmentProfiles",
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
  private serialize(input: ListEnvironmentProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEnvironmentProfilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEnvironmentProfilesCommandOutput> {
    return de_ListEnvironmentProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
