import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeTagOptionInput, DescribeTagOptionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTagOptionCommandInput = DescribeTagOptionInput;
export declare type DescribeTagOptionCommandOutput = DescribeTagOptionOutput & __MetadataBearer;
export declare class DescribeTagOptionCommand extends $Command<DescribeTagOptionCommandInput, DescribeTagOptionCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeTagOptionCommandInput;
    constructor(input: DescribeTagOptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTagOptionCommandInput, DescribeTagOptionCommandOutput>;
    private serialize;
    private deserialize;
}
