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
  SearchGroupProfilesInput,
  SearchGroupProfilesInputFilterSensitiveLog,
  SearchGroupProfilesOutput,
  SearchGroupProfilesOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_SearchGroupProfilesCommand, se_SearchGroupProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchGroupProfilesCommand}.
 */
export interface SearchGroupProfilesCommandInput extends SearchGroupProfilesInput {}
/**
 * @public
 *
 * The output of {@link SearchGroupProfilesCommand}.
 */
export interface SearchGroupProfilesCommandOutput extends SearchGroupProfilesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Searches group profiles in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, SearchGroupProfilesCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, SearchGroupProfilesCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // SearchGroupProfilesInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   groupType: "SSO_GROUP" || "DATAZONE_SSO_GROUP", // required
 *   searchText: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new SearchGroupProfilesCommand(input);
 * const response = await client.send(command);
 * // { // SearchGroupProfilesOutput
 * //   items: [ // GroupProfileSummaries
 * //     { // GroupProfileSummary
 * //       domainId: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       status: "ASSIGNED" || "NOT_ASSIGNED",
 * //       groupName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchGroupProfilesCommandInput - {@link SearchGroupProfilesCommandInput}
 * @returns {@link SearchGroupProfilesCommandOutput}
 * @see {@link SearchGroupProfilesCommandInput} for command's `input` shape.
 * @see {@link SearchGroupProfilesCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 */
export class SearchGroupProfilesCommand extends $Command<
  SearchGroupProfilesCommandInput,
  SearchGroupProfilesCommandOutput,
  DataZoneClientResolvedConfig
> {
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
  constructor(readonly input: SearchGroupProfilesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataZoneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchGroupProfilesCommandInput, SearchGroupProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchGroupProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "SearchGroupProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchGroupProfilesInputFilterSensitiveLog,
      outputFilterSensitiveLog: SearchGroupProfilesOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "SearchGroupProfiles",
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
  private serialize(input: SearchGroupProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchGroupProfilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchGroupProfilesCommandOutput> {
    return de_SearchGroupProfilesCommand(output, context);
  }
}
