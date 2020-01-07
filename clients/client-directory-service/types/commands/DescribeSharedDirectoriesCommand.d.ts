import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeSharedDirectoriesRequest, DescribeSharedDirectoriesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSharedDirectoriesCommandInput = DescribeSharedDirectoriesRequest;
export declare type DescribeSharedDirectoriesCommandOutput = DescribeSharedDirectoriesResult & __MetadataBearer;
export declare class DescribeSharedDirectoriesCommand extends $Command<DescribeSharedDirectoriesCommandInput, DescribeSharedDirectoriesCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DescribeSharedDirectoriesCommandInput;
    constructor(input: DescribeSharedDirectoriesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSharedDirectoriesCommandInput, DescribeSharedDirectoriesCommandOutput>;
    private serialize;
    private deserialize;
}
