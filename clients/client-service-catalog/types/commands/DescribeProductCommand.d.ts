import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeProductInput, DescribeProductOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeProductCommandInput = DescribeProductInput;
export declare type DescribeProductCommandOutput = DescribeProductOutput & __MetadataBearer;
export declare class DescribeProductCommand extends $Command<DescribeProductCommandInput, DescribeProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeProductCommandInput;
    constructor(input: DescribeProductCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProductCommandInput, DescribeProductCommandOutput>;
    private serialize;
    private deserialize;
}
