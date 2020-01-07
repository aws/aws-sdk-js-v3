import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { ResendContactReachabilityEmailRequest, ResendContactReachabilityEmailResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResendContactReachabilityEmailCommandInput = ResendContactReachabilityEmailRequest;
export declare type ResendContactReachabilityEmailCommandOutput = ResendContactReachabilityEmailResponse & __MetadataBearer;
export declare class ResendContactReachabilityEmailCommand extends $Command<ResendContactReachabilityEmailCommandInput, ResendContactReachabilityEmailCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: ResendContactReachabilityEmailCommandInput;
    constructor(input: ResendContactReachabilityEmailCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResendContactReachabilityEmailCommandInput, ResendContactReachabilityEmailCommandOutput>;
    private serialize;
    private deserialize;
}
