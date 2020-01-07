import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { CreateAppCookieStickinessPolicyInput, CreateAppCookieStickinessPolicyOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAppCookieStickinessPolicyCommandInput = CreateAppCookieStickinessPolicyInput;
export declare type CreateAppCookieStickinessPolicyCommandOutput = CreateAppCookieStickinessPolicyOutput & __MetadataBearer;
export declare class CreateAppCookieStickinessPolicyCommand extends $Command<CreateAppCookieStickinessPolicyCommandInput, CreateAppCookieStickinessPolicyCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: CreateAppCookieStickinessPolicyCommandInput;
    constructor(input: CreateAppCookieStickinessPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAppCookieStickinessPolicyCommandInput, CreateAppCookieStickinessPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
