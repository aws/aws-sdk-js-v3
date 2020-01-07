import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeDomainRequest, DescribeDomainResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDomainCommandInput = DescribeDomainRequest;
export declare type DescribeDomainCommandOutput = DescribeDomainResponse & __MetadataBearer;
export declare class DescribeDomainCommand extends $Command<DescribeDomainCommandInput, DescribeDomainCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeDomainCommandInput;
    constructor(input: DescribeDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDomainCommandInput, DescribeDomainCommandOutput>;
    private serialize;
    private deserialize;
}
