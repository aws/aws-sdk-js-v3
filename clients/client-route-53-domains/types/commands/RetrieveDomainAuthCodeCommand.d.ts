import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { RetrieveDomainAuthCodeRequest, RetrieveDomainAuthCodeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RetrieveDomainAuthCodeCommandInput = RetrieveDomainAuthCodeRequest;
export declare type RetrieveDomainAuthCodeCommandOutput = RetrieveDomainAuthCodeResponse & __MetadataBearer;
export declare class RetrieveDomainAuthCodeCommand extends $Command<RetrieveDomainAuthCodeCommandInput, RetrieveDomainAuthCodeCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: RetrieveDomainAuthCodeCommandInput;
    constructor(input: RetrieveDomainAuthCodeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RetrieveDomainAuthCodeCommandInput, RetrieveDomainAuthCodeCommandOutput>;
    private serialize;
    private deserialize;
}
