import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeCopyProductStatusInput, DescribeCopyProductStatusOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCopyProductStatusCommandInput = DescribeCopyProductStatusInput;
export declare type DescribeCopyProductStatusCommandOutput = DescribeCopyProductStatusOutput & __MetadataBearer;
export declare class DescribeCopyProductStatusCommand extends $Command<DescribeCopyProductStatusCommandInput, DescribeCopyProductStatusCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeCopyProductStatusCommandInput;
    constructor(input: DescribeCopyProductStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCopyProductStatusCommandInput, DescribeCopyProductStatusCommandOutput>;
    private serialize;
    private deserialize;
}
