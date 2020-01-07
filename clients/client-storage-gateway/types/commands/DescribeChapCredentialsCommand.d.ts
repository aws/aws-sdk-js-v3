import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeChapCredentialsInput, DescribeChapCredentialsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeChapCredentialsCommandInput = DescribeChapCredentialsInput;
export declare type DescribeChapCredentialsCommandOutput = DescribeChapCredentialsOutput & __MetadataBearer;
export declare class DescribeChapCredentialsCommand extends $Command<DescribeChapCredentialsCommandInput, DescribeChapCredentialsCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeChapCredentialsCommandInput;
    constructor(input: DescribeChapCredentialsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeChapCredentialsCommandInput, DescribeChapCredentialsCommandOutput>;
    private serialize;
    private deserialize;
}
