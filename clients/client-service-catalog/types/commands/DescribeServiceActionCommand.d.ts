import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeServiceActionInput, DescribeServiceActionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeServiceActionCommandInput = DescribeServiceActionInput;
export declare type DescribeServiceActionCommandOutput = DescribeServiceActionOutput & __MetadataBearer;
export declare class DescribeServiceActionCommand extends $Command<DescribeServiceActionCommandInput, DescribeServiceActionCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeServiceActionCommandInput;
    constructor(input: DescribeServiceActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeServiceActionCommandInput, DescribeServiceActionCommandOutput>;
    private serialize;
    private deserialize;
}
