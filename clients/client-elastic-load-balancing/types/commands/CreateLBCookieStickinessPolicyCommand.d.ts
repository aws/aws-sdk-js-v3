import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { CreateLBCookieStickinessPolicyInput, CreateLBCookieStickinessPolicyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLBCookieStickinessPolicyCommandInput = CreateLBCookieStickinessPolicyInput;
export declare type CreateLBCookieStickinessPolicyCommandOutput = CreateLBCookieStickinessPolicyOutput & __MetadataBearer;
export declare class CreateLBCookieStickinessPolicyCommand extends $Command<CreateLBCookieStickinessPolicyCommandInput, CreateLBCookieStickinessPolicyCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: CreateLBCookieStickinessPolicyCommandInput;
    constructor(input: CreateLBCookieStickinessPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLBCookieStickinessPolicyCommandInput, CreateLBCookieStickinessPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
