import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { GetContactReachabilityStatusRequest, GetContactReachabilityStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetContactReachabilityStatusCommandInput = GetContactReachabilityStatusRequest;
export declare type GetContactReachabilityStatusCommandOutput = GetContactReachabilityStatusResponse & __MetadataBearer;
export declare class GetContactReachabilityStatusCommand extends $Command<GetContactReachabilityStatusCommandInput, GetContactReachabilityStatusCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: GetContactReachabilityStatusCommandInput;
    constructor(input: GetContactReachabilityStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContactReachabilityStatusCommandInput, GetContactReachabilityStatusCommandOutput>;
    private serialize;
    private deserialize;
}
