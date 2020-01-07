import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { DescribeDomainInput, DomainDetail } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDomainCommandInput = DescribeDomainInput;
export declare type DescribeDomainCommandOutput = DomainDetail & __MetadataBearer;
export declare class DescribeDomainCommand extends $Command<DescribeDomainCommandInput, DescribeDomainCommandOutput, SWFClientResolvedConfig> {
    readonly input: DescribeDomainCommandInput;
    constructor(input: DescribeDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDomainCommandInput, DescribeDomainCommandOutput>;
    private serialize;
    private deserialize;
}
