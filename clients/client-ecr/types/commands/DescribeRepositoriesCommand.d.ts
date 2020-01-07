import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DescribeRepositoriesRequest, DescribeRepositoriesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeRepositoriesCommandInput = DescribeRepositoriesRequest;
export declare type DescribeRepositoriesCommandOutput = DescribeRepositoriesResponse & __MetadataBearer;
export declare class DescribeRepositoriesCommand extends $Command<DescribeRepositoriesCommandInput, DescribeRepositoriesCommandOutput, ECRClientResolvedConfig> {
    readonly input: DescribeRepositoriesCommandInput;
    constructor(input: DescribeRepositoriesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRepositoriesCommandInput, DescribeRepositoriesCommandOutput>;
    private serialize;
    private deserialize;
}
