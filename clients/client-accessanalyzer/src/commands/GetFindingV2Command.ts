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

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { GetFindingV2Request, GetFindingV2Response } from "../models/models_0";
import { de_GetFindingV2Command, se_GetFindingV2Command } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFindingV2Command}.
 */
export interface GetFindingV2CommandInput extends GetFindingV2Request {}
/**
 * @public
 *
 * The output of {@link GetFindingV2Command}.
 */
export interface GetFindingV2CommandOutput extends GetFindingV2Response, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about the specified finding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetFindingV2Command } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetFindingV2Command } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // GetFindingV2Request
 *   analyzerArn: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetFindingV2Command(input);
 * const response = await client.send(command);
 * // { // GetFindingV2Response
 * //   analyzedAt: new Date("TIMESTAMP"), // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   error: "STRING_VALUE",
 * //   id: "STRING_VALUE", // required
 * //   nextToken: "STRING_VALUE",
 * //   resource: "STRING_VALUE",
 * //   resourceType: "STRING_VALUE", // required
 * //   resourceOwnerAccount: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   findingDetails: [ // FindingDetailsList // required
 * //     { // FindingDetails Union: only one key present
 * //       externalAccessDetails: { // ExternalAccessDetails
 * //         action: [ // ActionList
 * //           "STRING_VALUE",
 * //         ],
 * //         condition: { // ConditionKeyMap // required
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         isPublic: true || false,
 * //         principal: { // PrincipalMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         sources: [ // FindingSourceList
 * //           { // FindingSource
 * //             type: "STRING_VALUE", // required
 * //             detail: { // FindingSourceDetail
 * //               accessPointArn: "STRING_VALUE",
 * //               accessPointAccount: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       unusedPermissionDetails: { // UnusedPermissionDetails
 * //         actions: [ // UnusedActionList
 * //           { // UnusedAction
 * //             action: "STRING_VALUE", // required
 * //             lastAccessed: new Date("TIMESTAMP"),
 * //           },
 * //         ],
 * //         serviceNamespace: "STRING_VALUE", // required
 * //         lastAccessed: new Date("TIMESTAMP"),
 * //       },
 * //       unusedIamUserAccessKeyDetails: { // UnusedIamUserAccessKeyDetails
 * //         accessKeyId: "STRING_VALUE", // required
 * //         lastAccessed: new Date("TIMESTAMP"),
 * //       },
 * //       unusedIamRoleDetails: { // UnusedIamRoleDetails
 * //         lastAccessed: new Date("TIMESTAMP"),
 * //       },
 * //       unusedIamUserPasswordDetails: { // UnusedIamUserPasswordDetails
 * //         lastAccessed: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   findingType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFindingV2CommandInput - {@link GetFindingV2CommandInput}
 * @returns {@link GetFindingV2CommandOutput}
 * @see {@link GetFindingV2CommandInput} for command's `input` shape.
 * @see {@link GetFindingV2CommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 */
export class GetFindingV2Command extends $Command<
  GetFindingV2CommandInput,
  GetFindingV2CommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
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
  constructor(readonly input: GetFindingV2CommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFindingV2CommandInput, GetFindingV2CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetFindingV2Command.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "GetFindingV2Command";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AccessAnalyzer",
        operation: "GetFindingV2",
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
  private serialize(input: GetFindingV2CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetFindingV2Command(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFindingV2CommandOutput> {
    return de_GetFindingV2Command(output, context);
  }
}
