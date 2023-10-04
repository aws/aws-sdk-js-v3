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
import { ListProjectMembershipsInput, ListProjectMembershipsOutput } from "../models/models_0";
import { de_ListProjectMembershipsCommand, se_ListProjectMembershipsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListProjectMembershipsCommand}.
 */
export interface ListProjectMembershipsCommandInput extends ListProjectMembershipsInput {}
/**
 * @public
 *
 * The output of {@link ListProjectMembershipsCommand}.
 */
export interface ListProjectMembershipsCommandOutput extends ListProjectMembershipsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists all members of the specified project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListProjectMembershipsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListProjectMembershipsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // ListProjectMembershipsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   projectIdentifier: "STRING_VALUE", // required
 *   sortBy: "NAME",
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListProjectMembershipsCommand(input);
 * const response = await client.send(command);
 * // { // ListProjectMembershipsOutput
 * //   members: [ // ProjectMembers // required
 * //     { // ProjectMember
 * //       memberDetails: { // MemberDetails Union: only one key present
 * //         user: { // UserDetails
 * //           userId: "STRING_VALUE", // required
 * //         },
 * //         group: { // GroupDetails
 * //           groupId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       designation: "PROJECT_OWNER" || "PROJECT_CONTRIBUTOR", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProjectMembershipsCommandInput - {@link ListProjectMembershipsCommandInput}
 * @returns {@link ListProjectMembershipsCommandOutput}
 * @see {@link ListProjectMembershipsCommandInput} for command's `input` shape.
 * @see {@link ListProjectMembershipsCommandOutput} for command's `response` shape.
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
export class ListProjectMembershipsCommand extends $Command<
  ListProjectMembershipsCommandInput,
  ListProjectMembershipsCommandOutput,
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
  constructor(readonly input: ListProjectMembershipsCommandInput) {
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
  ): Handler<ListProjectMembershipsCommandInput, ListProjectMembershipsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListProjectMembershipsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "ListProjectMembershipsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "ListProjectMemberships",
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
  private serialize(input: ListProjectMembershipsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListProjectMembershipsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProjectMembershipsCommandOutput> {
    return de_ListProjectMembershipsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
