import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetTrafficPolicyRequest, GetTrafficPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTrafficPolicyCommandInput = GetTrafficPolicyRequest;
export declare type GetTrafficPolicyCommandOutput = GetTrafficPolicyResponse & __MetadataBearer;
export declare class GetTrafficPolicyCommand extends $Command<GetTrafficPolicyCommandInput, GetTrafficPolicyCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetTrafficPolicyCommandInput;
    constructor(input: GetTrafficPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTrafficPolicyCommandInput, GetTrafficPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
