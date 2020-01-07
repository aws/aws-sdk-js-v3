import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteTrafficPolicyRequest, DeleteTrafficPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTrafficPolicyCommandInput = DeleteTrafficPolicyRequest;
export declare type DeleteTrafficPolicyCommandOutput = DeleteTrafficPolicyResponse & __MetadataBearer;
export declare class DeleteTrafficPolicyCommand extends $Command<DeleteTrafficPolicyCommandInput, DeleteTrafficPolicyCommandOutput, Route53ClientResolvedConfig> {
    readonly input: DeleteTrafficPolicyCommandInput;
    constructor(input: DeleteTrafficPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTrafficPolicyCommandInput, DeleteTrafficPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
