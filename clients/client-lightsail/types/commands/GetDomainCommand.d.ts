import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetDomainRequest, GetDomainResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDomainCommandInput = GetDomainRequest;
export declare type GetDomainCommandOutput = GetDomainResult & __MetadataBearer;
export declare class GetDomainCommand extends $Command<GetDomainCommandInput, GetDomainCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetDomainCommandInput;
    constructor(input: GetDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDomainCommandInput, GetDomainCommandOutput>;
    private serialize;
    private deserialize;
}
