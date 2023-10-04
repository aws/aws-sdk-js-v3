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
  SearchUserProfilesInput,
  SearchUserProfilesInputFilterSensitiveLog,
  SearchUserProfilesOutput,
  SearchUserProfilesOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_SearchUserProfilesCommand, se_SearchUserProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchUserProfilesCommand}.
 */
export interface SearchUserProfilesCommandInput extends SearchUserProfilesInput {}
/**
 * @public
 *
 * The output of {@link SearchUserProfilesCommand}.
 */
export interface SearchUserProfilesCommandOutput extends SearchUserProfilesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Searches user profiles in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, SearchUserProfilesCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, SearchUserProfilesCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // SearchUserProfilesInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   userType: "SSO_USER" || "DATAZONE_USER" || "DATAZONE_SSO_USER" || "DATAZONE_IAM_USER", // required
 *   searchText: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new SearchUserProfilesCommand(input);
 * const response = await client.send(command);
 * // { // SearchUserProfilesOutput
 * //   items: [ // UserProfileSummaries
 * //     { // UserProfileSummary
 * //       domainId: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       type: "IAM" || "SSO",
 * //       status: "ASSIGNED" || "NOT_ASSIGNED" || "ACTIVATED" || "DEACTIVATED",
 * //       details: { // UserProfileDetails Union: only one key present
 * //         iam: { // IamUserProfileDetails
 * //           arn: "STRING_VALUE",
 * //         },
 * //         sso: { // SsoUserProfileDetails
 * //           username: "STRING_VALUE",
 * //           firstName: "STRING_VALUE",
 * //           lastName: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchUserProfilesCommandInput - {@link SearchUserProfilesCommandInput}
 * @returns {@link SearchUserProfilesCommandOutput}
 * @see {@link SearchUserProfilesCommandInput} for command's `input` shape.
 * @see {@link SearchUserProfilesCommandOutput} for command's `response` shape.
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
export class SearchUserProfilesCommand extends $Command<
  SearchUserProfilesCommandInput,
  SearchUserProfilesCommandOutput,
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
  constructor(readonly input: SearchUserProfilesCommandInput) {
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
  ): Handler<SearchUserProfilesCommandInput, SearchUserProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchUserProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "SearchUserProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchUserProfilesInputFilterSensitiveLog,
      outputFilterSensitiveLog: SearchUserProfilesOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "SearchUserProfiles",
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
  private serialize(input: SearchUserProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchUserProfilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchUserProfilesCommandOutput> {
    return de_SearchUserProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
