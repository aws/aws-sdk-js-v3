import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { DescribeDataSourceRequest, DescribeDataSourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDataSourceCommandInput = DescribeDataSourceRequest;
export declare type DescribeDataSourceCommandOutput = DescribeDataSourceResponse & __MetadataBearer;
export declare class DescribeDataSourceCommand extends $Command<DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput, kendraClientResolvedConfig> {
    readonly input: DescribeDataSourceCommandInput;
    constructor(input: DescribeDataSourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput>;
    private serialize;
    private deserialize;
}
