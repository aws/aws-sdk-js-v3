import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeRecordInput, DescribeRecordOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeRecordCommandInput = DescribeRecordInput;
export declare type DescribeRecordCommandOutput = DescribeRecordOutput & __MetadataBearer;
export declare class DescribeRecordCommand extends $Command<DescribeRecordCommandInput, DescribeRecordCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeRecordCommandInput;
    constructor(input: DescribeRecordCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRecordCommandInput, DescribeRecordCommandOutput>;
    private serialize;
    private deserialize;
}
