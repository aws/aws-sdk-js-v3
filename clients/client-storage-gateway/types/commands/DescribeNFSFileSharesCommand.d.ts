import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeNFSFileSharesInput, DescribeNFSFileSharesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeNFSFileSharesCommandInput = DescribeNFSFileSharesInput;
export declare type DescribeNFSFileSharesCommandOutput = DescribeNFSFileSharesOutput & __MetadataBearer;
export declare class DescribeNFSFileSharesCommand extends $Command<DescribeNFSFileSharesCommandInput, DescribeNFSFileSharesCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeNFSFileSharesCommandInput;
    constructor(input: DescribeNFSFileSharesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNFSFileSharesCommandInput, DescribeNFSFileSharesCommandOutput>;
    private serialize;
    private deserialize;
}
