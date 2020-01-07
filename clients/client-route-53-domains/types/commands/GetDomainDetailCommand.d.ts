import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { GetDomainDetailRequest, GetDomainDetailResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDomainDetailCommandInput = GetDomainDetailRequest;
export declare type GetDomainDetailCommandOutput = GetDomainDetailResponse & __MetadataBearer;
export declare class GetDomainDetailCommand extends $Command<GetDomainDetailCommandInput, GetDomainDetailCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: GetDomainDetailCommandInput;
    constructor(input: GetDomainDetailCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDomainDetailCommandInput, GetDomainDetailCommandOutput>;
    private serialize;
    private deserialize;
}
