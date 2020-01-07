import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteTrafficPolicyInstanceRequest, DeleteTrafficPolicyInstanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTrafficPolicyInstanceCommandInput = DeleteTrafficPolicyInstanceRequest;
export declare type DeleteTrafficPolicyInstanceCommandOutput = DeleteTrafficPolicyInstanceResponse & __MetadataBearer;
export declare class DeleteTrafficPolicyInstanceCommand extends $Command<DeleteTrafficPolicyInstanceCommandInput, DeleteTrafficPolicyInstanceCommandOutput, Route53ClientResolvedConfig> {
    readonly input: DeleteTrafficPolicyInstanceCommandInput;
    constructor(input: DeleteTrafficPolicyInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTrafficPolicyInstanceCommandInput, DeleteTrafficPolicyInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
