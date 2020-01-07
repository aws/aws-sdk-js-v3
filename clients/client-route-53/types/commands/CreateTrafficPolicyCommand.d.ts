import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateTrafficPolicyRequest, CreateTrafficPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTrafficPolicyCommandInput = CreateTrafficPolicyRequest;
export declare type CreateTrafficPolicyCommandOutput = CreateTrafficPolicyResponse & __MetadataBearer;
export declare class CreateTrafficPolicyCommand extends $Command<CreateTrafficPolicyCommandInput, CreateTrafficPolicyCommandOutput, Route53ClientResolvedConfig> {
    readonly input: CreateTrafficPolicyCommandInput;
    constructor(input: CreateTrafficPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrafficPolicyCommandInput, CreateTrafficPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
