import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeDirectoriesRequest, DescribeDirectoriesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDirectoriesCommandInput = DescribeDirectoriesRequest;
export declare type DescribeDirectoriesCommandOutput = DescribeDirectoriesResult & __MetadataBearer;
export declare class DescribeDirectoriesCommand extends $Command<DescribeDirectoriesCommandInput, DescribeDirectoriesCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DescribeDirectoriesCommandInput;
    constructor(input: DescribeDirectoriesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDirectoriesCommandInput, DescribeDirectoriesCommandOutput>;
    private serialize;
    private deserialize;
}
