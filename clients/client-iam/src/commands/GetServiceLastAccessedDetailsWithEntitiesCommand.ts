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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  GetServiceLastAccessedDetailsWithEntitiesRequest,
  GetServiceLastAccessedDetailsWithEntitiesResponse,
} from "../models/models_0";
import {
  de_GetServiceLastAccessedDetailsWithEntitiesCommand,
  se_GetServiceLastAccessedDetailsWithEntitiesCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetServiceLastAccessedDetailsWithEntitiesCommand}.
 */
export interface GetServiceLastAccessedDetailsWithEntitiesCommandInput
  extends GetServiceLastAccessedDetailsWithEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceLastAccessedDetailsWithEntitiesCommand}.
 */
export interface GetServiceLastAccessedDetailsWithEntitiesCommandOutput
  extends GetServiceLastAccessedDetailsWithEntitiesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>After you generate a group or policy report using the
 *                 <code>GenerateServiceLastAccessedDetails</code> operation, you can use the
 *                 <code>JobId</code> parameter in
 *                 <code>GetServiceLastAccessedDetailsWithEntities</code>. This operation retrieves the
 *             status of your report job and a list of entities that could have used group or policy
 *             permissions to access the specified service.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Group</b> – For a group report, this
 *                     operation returns a list of users in the group that could have used the group’s
 *                     policies in an attempt to access the service.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Policy</b> – For a policy report, this
 *                     operation returns a list of entities (users or roles) that could have used the
 *                     policy in an attempt to access the service.</p>
 *             </li>
 *          </ul>
 *          <p>You can also use this operation for user or role reports to retrieve details about
 *             those entities.</p>
 *          <p>If the operation fails, the <code>GetServiceLastAccessedDetailsWithEntities</code>
 *             operation returns the reason that it failed.</p>
 *          <p>By default, the list of associated entities is sorted by date, with the most recent
 *             access listed first.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetServiceLastAccessedDetailsWithEntitiesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetServiceLastAccessedDetailsWithEntitiesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetServiceLastAccessedDetailsWithEntitiesRequest
 *   JobId: "STRING_VALUE", // required
 *   ServiceNamespace: "STRING_VALUE", // required
 *   MaxItems: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new GetServiceLastAccessedDetailsWithEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceLastAccessedDetailsWithEntitiesResponse
 * //   JobStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //   JobCreationDate: new Date("TIMESTAMP"), // required
 * //   JobCompletionDate: new Date("TIMESTAMP"), // required
 * //   EntityDetailsList: [ // entityDetailsListType // required
 * //     { // EntityDetails
 * //       EntityInfo: { // EntityInfo
 * //         Arn: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //         Type: "USER" || "ROLE" || "GROUP", // required
 * //         Id: "STRING_VALUE", // required
 * //         Path: "STRING_VALUE",
 * //       },
 * //       LastAuthenticated: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * //   Error: { // ErrorDetails
 * //     Message: "STRING_VALUE", // required
 * //     Code: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServiceLastAccessedDetailsWithEntitiesCommandInput - {@link GetServiceLastAccessedDetailsWithEntitiesCommandInput}
 * @returns {@link GetServiceLastAccessedDetailsWithEntitiesCommandOutput}
 * @see {@link GetServiceLastAccessedDetailsWithEntitiesCommandInput} for command's `input` shape.
 * @see {@link GetServiceLastAccessedDetailsWithEntitiesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To get sntity details from a previously-generated report
 * ```javascript
 * // The following operation returns details about the entities that attempted to access the IAM service.
 * const input = {
 *   "JobId": "examplef-1305-c245-eba4-71fe298bcda7",
 *   "ServiceNamespace": "iam"
 * };
 * const command = new GetServiceLastAccessedDetailsWithEntitiesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EntityDetailsList": [
 *     {
 *       "EntityInfo": {
 *         "Arn": "arn:aws:iam::123456789012:user/AWSExampleUser01",
 *         "Id": "AIDAEX2EXAMPLEB6IGCDC",
 *         "Name": "AWSExampleUser01",
 *         "Path": "/",
 *         "Type": "USER"
 *       },
 *       "LastAuthenticated": "2018-10-24T19:10:00Z"
 *     },
 *     {
 *       "EntityInfo": {
 *         "Arn": "arn:aws:iam::123456789012:role/AWSExampleRole01",
 *         "Id": "AROAEAEXAMPLEIANXSIU4",
 *         "Name": "AWSExampleRole01",
 *         "Path": "/",
 *         "Type": "ROLE"
 *       }
 *     }
 *   ],
 *   "IsTruncated": false,
 *   "JobCompletionDate": "2018-10-24T19:47:35.241Z",
 *   "JobCreationDate": "2018-10-24T19:47:31.466Z",
 *   "JobStatus": "COMPLETED"
 * }
 * *\/
 * // example id: getserviceaccessdetailsentity-policy-1541697621384
 * ```
 *
 */
export class GetServiceLastAccessedDetailsWithEntitiesCommand extends $Command<
  GetServiceLastAccessedDetailsWithEntitiesCommandInput,
  GetServiceLastAccessedDetailsWithEntitiesCommandOutput,
  IAMClientResolvedConfig
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
  constructor(readonly input: GetServiceLastAccessedDetailsWithEntitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    GetServiceLastAccessedDetailsWithEntitiesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetServiceLastAccessedDetailsWithEntitiesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetServiceLastAccessedDetailsWithEntitiesCommand";
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
  private serialize(
    input: GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetServiceLastAccessedDetailsWithEntitiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetServiceLastAccessedDetailsWithEntitiesCommandOutput> {
    return de_GetServiceLastAccessedDetailsWithEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
