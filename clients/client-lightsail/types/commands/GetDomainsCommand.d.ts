import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetDomainsRequest, GetDomainsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDomainsCommandInput = GetDomainsRequest;
export declare type GetDomainsCommandOutput = GetDomainsResult & __MetadataBearer;
export declare class GetDomainsCommand extends $Command<GetDomainsCommandInput, GetDomainsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetDomainsCommandInput;
    constructor(input: GetDomainsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDomainsCommandInput, GetDomainsCommandOutput>;
    private serialize;
    private deserialize;
}
