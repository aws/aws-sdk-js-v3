import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeDomainEndpointOptionsRequest, DescribeDomainEndpointOptionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDomainEndpointOptionsCommandInput = DescribeDomainEndpointOptionsRequest;
export declare type DescribeDomainEndpointOptionsCommandOutput = DescribeDomainEndpointOptionsResponse & __MetadataBearer;
export declare class DescribeDomainEndpointOptionsCommand extends $Command<DescribeDomainEndpointOptionsCommandInput, DescribeDomainEndpointOptionsCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DescribeDomainEndpointOptionsCommandInput;
    constructor(input: DescribeDomainEndpointOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDomainEndpointOptionsCommandInput, DescribeDomainEndpointOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
