import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeProductViewInput, DescribeProductViewOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeProductViewCommandInput = DescribeProductViewInput;
export declare type DescribeProductViewCommandOutput = DescribeProductViewOutput & __MetadataBearer;
export declare class DescribeProductViewCommand extends $Command<DescribeProductViewCommandInput, DescribeProductViewCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeProductViewCommandInput;
    constructor(input: DescribeProductViewCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProductViewCommandInput, DescribeProductViewCommandOutput>;
    private serialize;
    private deserialize;
}
