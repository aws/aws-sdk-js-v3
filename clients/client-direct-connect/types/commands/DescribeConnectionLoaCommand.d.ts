import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeConnectionLoaRequest, DescribeConnectionLoaResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConnectionLoaCommandInput = DescribeConnectionLoaRequest;
export declare type DescribeConnectionLoaCommandOutput = DescribeConnectionLoaResponse & __MetadataBearer;
export declare class DescribeConnectionLoaCommand extends $Command<DescribeConnectionLoaCommandInput, DescribeConnectionLoaCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeConnectionLoaCommandInput;
    constructor(input: DescribeConnectionLoaCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConnectionLoaCommandInput, DescribeConnectionLoaCommandOutput>;
    private serialize;
    private deserialize;
}
